/* ============================================================
   Luitra — install
   Offers "Install app" wherever the browser allows it, and gives
   iOS a manual route, because Safari never fires the install
   prompt.

   Chromium fires beforeinstallprompt when the app meets the
   installability criteria (manifest + service worker + served
   over HTTPS). We hold that event and replay it on the user's
   click — the prompt must come from a user gesture.

   Visibility follows the INSTALL STATE, never a stored "hidden"
   flag. An invitation that could never come back would still be
   gone after the app was uninstalled, which is exactly wrong: the
   banner must return the moment the app is no longer installed.

   Loaded after js/app.js.
   ============================================================ */

(function () {
  const AX = (window.AX = window.AX || {});
  const httpish = location.protocol === "http:" || location.protocol === "https:";

  let deferred = null;
  let installed = false;

  /* Dismissal lasts for the session only — never for good. */
  const DISMISS_KEY = "luitra.install.dismissed";
  const LEGACY_KEY = "luitra.install.hidden";

  function dismissed() {
    try {
      return sessionStorage.getItem(DISMISS_KEY) === "1";
    } catch (e) {
      return false; // private mode — treat as not dismissed
    }
  }

  function setDismissed(v) {
    try {
      if (v) sessionStorage.setItem(DISMISS_KEY, "1");
      else sessionStorage.removeItem(DISMISS_KEY);
    } catch (e) {
      /* ignore */
    }
  }

  /* An earlier build remembered a dismissal in localStorage forever. Drop it,
     so anyone who was locked out of the banner gets it back. */
  try {
    localStorage.removeItem(LEGACY_KEY);
  } catch (e) {
    /* ignore */
  }

  const isStandalone = () =>
    (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) ||
    window.navigator.standalone === true;

  const isIOS = () =>
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

  /* Firefox cannot install a web app at all, so it gets no invitation. Every
     other engine either fires the prompt or can install from its own menu. */
  const cannotInstall = () => !isIOS() && /Firefox|FxiOS/.test(navigator.userAgent);

  /* One codebase, two feels: stamp the display mode on <html> so the CSS can
     trim the website chrome when the page is running as an installed app. */
  try {
    document.documentElement.setAttribute("data-display", isStandalone() ? "standalone" : "browser");
  } catch (e) {
    /* no document yet — the attribute is a progressive enhancement */
  }

  function buttons() {
    return Array.from(document.querySelectorAll("[data-install-app]"));
  }

  function banners() {
    return Array.from(document.querySelectorAll("[data-install-banner]"));
  }

  function paint() {
    const canPrompt = !!deferred;
    const standalone = isStandalone() || installed;

    /* Shown whenever the app is not installed and the browser could install it.
       Not gated on beforeinstallprompt: the browser withholds that event for a
       while after an uninstall, and the invitation must not vanish with it. */
    const offerable = !standalone && !dismissed() && !cannotInstall();

    banners().forEach((el) => {
      el.hidden = !offerable;
    });

    buttons().forEach((btn) => {
      if (!offerable) {
        btn.hidden = true;
        return;
      }
      btn.hidden = false;
      btn.textContent = canPrompt
        ? "Install app"
        : isIOS()
          ? "Add to Home Screen"
          : "Install app";
    });
  }

  function setStatus(text, kind) {
    const el = document.getElementById("cp-app-status");
    if (!el) return;
    el.textContent = text || "";
    el.dataset.kind = kind || "";
  }

  async function install(btn) {
    if (deferred) {
      deferred.prompt();
      let choice = null;
      try {
        choice = await deferred.userChoice;
      } catch (e) {
        /* older browsers resolve nothing; carry on */
      }
      deferred = null;
      if (choice && choice.outcome === "accepted") {
        installed = true; // retire the invitation immediately, do not wait for appinstalled
        paint();
        setStatus("Installing — Luitra will appear on your home screen.", "ok");
      } else {
        paint();
        setStatus("Install cancelled. You can try again any time.", "");
      }
      return;
    }

    if (isIOS()) {
      setStatus("On iPhone or iPad: tap Share, then “Add to Home Screen”.", "ok");
      return;
    }

    setStatus(
      "Open your browser menu and choose “Install app” or “Add to Home screen”.",
      "warn"
    );
  }

  function init() {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault(); // keep the mini-infobar away; we show our own
      deferred = e;
      paint();
    });

    window.addEventListener("appinstalled", () => {
      installed = true;
      deferred = null;
      paint();
      setStatus("Luitra is installed. Open it from your home screen or app list.", "ok");
    });

    document.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-install-app]");
      if (btn) {
        e.preventDefault();
        install(btn);
        return;
      }

      const dismiss = e.target.closest("[data-install-dismiss]");
      if (dismiss) {
        e.preventDefault();
        setDismissed(true);
        paint();
      }
    });

    paint();
  }

  AX.install = {
    prompt: () => install(null),
    refresh: paint,
    get available() {
      return !!deferred;
    },
    get standalone() {
      return isStandalone() || installed;
    },
    get dismissed() {
      return dismissed();
    },
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
