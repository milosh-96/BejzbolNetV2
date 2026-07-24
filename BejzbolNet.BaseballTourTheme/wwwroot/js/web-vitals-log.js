  (function () {
    var script = document.createElement('script');
    script.src = 'https://unpkg.com/web-vitals@5/dist/web-vitals.iife.js';
    script.onload = function () {
      // When loading `web-vitals` using a classic script, all the public
      // methods can be found on the `webVitals` global namespace.
      webVitals.onCLS(console.log);
      webVitals.onINP(console.log);
      webVitals.onLCP(console.log);
    };
    document.head.appendChild(script);
  })();