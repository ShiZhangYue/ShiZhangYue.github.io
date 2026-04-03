(function () {
  function applyLang(l) {
    var html = document.documentElement;
    html.className = html.className.replace(/\blang-\w+/g, '').trim() + ' lang-' + l;
    localStorage.setItem('preferred-lang', l);
    var btn = document.getElementById('lang-toggle');
    if (btn) btn.title = l === 'zh' ? 'Switch to English' : '切换中文';
  }

  window.toggleLang = function () {
    var current = localStorage.getItem('preferred-lang') || 'en';
    applyLang(current === 'en' ? 'zh' : 'en');
  };

  document.addEventListener('DOMContentLoaded', function () {
    applyLang(localStorage.getItem('preferred-lang') || 'en');
  });
})();
