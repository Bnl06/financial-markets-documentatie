// MathJax configuration for MkDocs Material + pymdownx.arithmatex.
// This renders formulas written as $$...$$ or \[...\] after MkDocs has wrapped
// them in <span/div class="arithmatex">...</span/div>.
window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

// MkDocs Material's instant navigation loads pages without a full refresh.
// This re-renders MathJax formulas after navigating to another page.
if (typeof document$ !== "undefined") {
  document$.subscribe(() => {
    if (window.MathJax && MathJax.typesetPromise) {
      MathJax.typesetPromise();
    }
  });
}
