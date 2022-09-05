(self["webpackChunk_nextcloud_text"] = self["webpackChunk_nextcloud_text"] || []).push([["highlight/python-repl"],{

/***/ "./node_modules/highlight.js/lib/languages/python-repl.js":
/*!****************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/python-repl.js ***!
  \****************************************************************/
/***/ ((module) => {

/*
Language: Python REPL
Requires: python.js
Author: Josh Goebel <hello@joshgoebel.com>
Category: common
*/

function pythonRepl(hljs) {
  return {
    aliases: [ 'pycon' ],
    contains: [
      {
        className: 'meta',
        starts: {
          // a space separates the REPL prefix from the actual code
          // this is purely for cleaner HTML output
          end: / |$/,
          starts: {
            end: '$',
            subLanguage: 'python'
          }
        },
        variants: [
          {
            begin: /^>>>(?=[ ]|$)/
          },
          {
            begin: /^\.\.\.(?=[ ]|$)/
          }
        ]
      }
    ]
  };
}

module.exports = pythonRepl;


/***/ })

}]);
//# sourceMappingURL=python-repl.js.map?v=d3b85f1e0dab2386f7f3