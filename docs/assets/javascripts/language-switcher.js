(function () {
  function currentLang() {
    var parts = window.location.pathname.split('/').filter(Boolean);
    for (var i = 0; i < parts.length; i++) {
      if (parts[i] === 'nl' || parts[i] === 'en') return parts[i];
    }
    return 'nl';
  }

  function otherLang(lang) {
    return lang === 'en' ? 'nl' : 'en';
  }

  function scrollRatio() {
    var doc = document.documentElement;
    var max = Math.max(1, doc.scrollHeight - window.innerHeight);
    return Math.min(1, Math.max(0, window.scrollY / max));
  }

  function switchUrl(targetLang) {
    var path = window.location.pathname;
    var lang = currentLang();
    if (path.indexOf('/' + lang + '/') !== -1) {
      path = path.replace('/' + lang + '/', '/' + targetLang + '/');
    } else if (path.endsWith('/' + lang)) {
      path = path.slice(0, -lang.length) + targetLang + '/';
    } else {
      var base = path.endsWith('/') ? path : path.replace(/[^/]*$/, '');
      path = base + targetLang + '/';
    }
    var ratio = scrollRatio().toFixed(4);
    var hash = window.location.hash || '';
    return path + '?scroll=' + encodeURIComponent(ratio) + hash;
  }

  function restoreScroll() {
    var params = new URLSearchParams(window.location.search);
    var raw = params.get('scroll');
    if (!raw) return;
    var ratio = parseFloat(raw);
    if (Number.isNaN(ratio)) return;
    setTimeout(function () {
      var doc = document.documentElement;
      var max = Math.max(1, doc.scrollHeight - window.innerHeight);
      window.scrollTo({ top: ratio * max, behavior: 'instant' in window ? 'instant' : 'auto' });
      params.delete('scroll');
      var clean = window.location.pathname + (params.toString() ? '?' + params.toString() : '') + window.location.hash;
      window.history.replaceState({}, document.title, clean);
    }, 120);
  }

  function addSwitcher() {
    if (document.querySelector('.studybook-language-switcher')) return;
    var lang = currentLang();
    var target = otherLang(lang);
    var wrapper = document.createElement('div');
    wrapper.className = 'studybook-language-switcher';
    wrapper.innerHTML = '<button type="button" class="studybook-language-switcher__button" aria-label="Switch language">' +
      (lang === 'nl' ? '🇳🇱 Nederlands → 🇬🇧 English' : '🇬🇧 English → 🇳🇱 Nederlands') +
      '</button>';
    wrapper.querySelector('button').addEventListener('click', function () {
      window.location.href = switchUrl(target);
    });
    document.body.appendChild(wrapper);
  }

  document.addEventListener('DOMContentLoaded', function () {
    restoreScroll();
    addSwitcher();
  });

  if (typeof document$ !== 'undefined') {
    document$.subscribe(function () {
      restoreScroll();
      addSwitcher();
    });
  }
})();
