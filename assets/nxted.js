/* NxtEd — progressive enhancement only.
   Nothing here is required for the site to be readable or navigable.

   Important: the .dc runtime renders the page asynchronously via React, so
   reveal targets do NOT exist at DOMContentLoaded. We therefore keep
   scanning as nodes appear (MutationObserver) and hard-reveal everything
   after a short grace period, so content can never be left invisible. */
(function () {
  var SUPPORTED = 'IntersectionObserver' in window && 'MutationObserver' in window;
  if (!SUPPORTED) return; // no `js` class -> CSS never hides anything

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var SELECTOR = '.nx-reveal, .nx-reveal-stagger';

  document.documentElement.classList.add('js');

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('nx-in');
      io.unobserve(entry.target); // reveal once, never re-trigger
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

  function scan() {
    var targets = document.querySelectorAll(SELECTOR);
    for (var i = 0; i < targets.length; i++) {
      var el = targets[i];
      if (el.dataset.nxObs) continue;
      el.dataset.nxObs = '1';
      // Reduced motion: show the final state immediately, no animation.
      if (reduce) el.classList.add('nx-in');
      else io.observe(el);
    }
  }

  function revealAll() {
    var targets = document.querySelectorAll(SELECTOR);
    for (var i = 0; i < targets.length; i++) targets[i].classList.add('nx-in');
  }

  scan();
  new MutationObserver(scan).observe(document.documentElement, { childList: true, subtree: true });
  document.addEventListener('DOMContentLoaded', scan);
  window.addEventListener('load', scan);

  // Last-resort guarantee: nothing stays hidden, whatever else went wrong.
  setTimeout(revealAll, 3000);
})();
