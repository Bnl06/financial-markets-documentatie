(function () {
  const map = {
    '/nl/': '/en/', '/en/': '/nl/',
    '/nl/exam/examenanalyse/': '/en/exam/exam-analysis/',
    '/en/exam/exam-analysis/': '/nl/exam/examenanalyse/',
    '/nl/exam/voorbeeldexamen-analyse/': '/en/exam/sample-exam-analysis/',
    '/en/exam/sample-exam-analysis/': '/nl/exam/voorbeeldexamen-analyse/',
    '/nl/glossary/begrippenlijst/': '/en/glossary/glossary/',
    '/en/glossary/glossary/': '/nl/glossary/begrippenlijst/',
    '/nl/glossary/begrippen-per-unit/': '/en/glossary/terms-by-unit/',
    '/en/glossary/terms-by-unit/': '/nl/glossary/begrippen-per-unit/',
    '/nl/glossary/examenbegrippen/': '/en/glossary/exam-terms/',
    '/en/glossary/exam-terms/': '/nl/glossary/examenbegrippen/'
  };
  document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.md-header__inner');
    if (!header) return;
    const a = document.createElement('a');
    a.className = 'md-header__button md-icon';
    a.textContent = location.pathname.includes('/en/') ? 'NL' : 'EN';
    a.style.fontWeight = '700';
    a.href = map[location.pathname] || (location.pathname.includes('/en/') ? '../../nl/' : '../../en/');
    header.appendChild(a);
  });
})();
