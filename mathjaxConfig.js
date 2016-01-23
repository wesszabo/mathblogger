<script type="text/x-mathjax-config">
  //
  //  Make displayed equations be aligned left and indented.
  //  Add the \Step macro and turn off noErrors so we can tell
  //  what has gone wrong (if anything).
  //
 MathJax.Hub.Config({
displayAlign: "left",
    displayIndent: "2em",
    HTML: ["input/TeX","output/HTML-CSS", "output/PreviewHTML"],
    TeX: {
      Macros: {
        Step: ["\\cssId{Step#1}{\\style{visibility:hidden}{{}#2}}",2]
      },
      noErrors: {disabled: true},
	extensions: ["AMSmath.js","AMSsymbols.js","noErrors.js","noUndefined.js"],
	equationNumbers: { autoNumber: "AMS" }
    },
    extensions: ["tex2jax.js","MathMenu.js","MathZoom.js", "fast-preview.js"],
    jax: ["input/TeX", "output/HTML-CSS"],
    tex2jax: {
      inlineMath: [ ['$','$'], ["\\(","\\)"] ],
      displayMath: [ ['$$','$$'], ["\\[","\\]"] ],
      processEscapes: true
    },
    "HTML-CSS": { availableFonts: ["TeX"],linebreaks: {automatic: true} }
  });
  //
  //  Enable the step buttons after the initial typesetting.
  //
  MathJax.Hub.Queue(["EnableSteps",DynamicEquation]);
</script>
