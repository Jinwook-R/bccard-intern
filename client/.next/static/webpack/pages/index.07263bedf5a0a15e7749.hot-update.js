webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Main.js":
/*!****************************!*\
  !*** ./components/Main.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Category */ \"./components/Category.js\");\n/* harmony import */ var _SearchInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchInput */ \"./components/SearchInput.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _reducers_restaurant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/restaurant */ \"./reducers/restaurant.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _templateObject,\n    _this = undefined,\n    _jsxFileName = \"/Users/bccard/Desktop/bccard-intern/client/components/Main.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"];\n\n\n\n\n\n\n\n\nvar StyledNavBar = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].ul(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\n\\n\\n\"])));\n\nvar Main = function Main() {\n  _s();\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useDispatch\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    console.log(\"main.js mounted!\");\n    dispatch(Object(_reducers_restaurant__WEBPACK_IMPORTED_MODULE_6__[\"restaurantListRequestAction\"])());\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__[\"Row\"], {\n    gutter: 8,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__[\"Col\"], {\n    xs: 24,\n    md: 3,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 17\n    }\n  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__[\"Col\"], {\n    xs: 24,\n    md: 18,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 17\n    }\n  }, __jsx(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 21\n    }\n  }), __jsx(_SearchInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 21\n    }\n  }), __jsx(_Category__WEBPACK_IMPORTED_MODULE_2__[\"Category\"], {\n    title: \"오늘의 추천 맛집\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 21\n    }\n  }), __jsx(_Category__WEBPACK_IMPORTED_MODULE_2__[\"Category\"], {\n    title: \"양식\",\n    type: \"양식\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 21\n    }\n  }), __jsx(_Category__WEBPACK_IMPORTED_MODULE_2__[\"Category\"], {\n    title: \"한식\",\n    type: \"한식\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 21\n    }\n  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__[\"Col\"], {\n    xs: 24,\n    md: 3,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 17\n    }\n  })));\n};\n\n_s(Main, \"rAh3tY+Iv6hWC9AI4Dm+rCbkwNE=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useDispatch\"]];\n});\n\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\n\nvar _c;\n\n$RefreshReg$(_c, \"Main\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluLmpzPzg2NjAiXSwibmFtZXMiOlsiU3R5bGVkTmF2QmFyIiwic3R5bGVkIiwidWwiLCJNYWluIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJyZXN0YXVyYW50TGlzdFJlcXVlc3RBY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUdDLHlEQUFNLENBQUNDLEVBQVYsdUpBQWxCOztBQU1BLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFFZixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWjtBQUNBSixZQUFRLENBQUNLLHdGQUEyQixFQUE1QixDQUFSO0FBQ0gsR0FIUSxFQUdQLEVBSE8sQ0FBVDtBQUtBLFNBQ0ksNERBQ0ksTUFBQyx3Q0FBRDtBQUFLLFVBQU0sRUFBRSxDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHdDQUFEO0FBQUssTUFBRSxFQUFFLEVBQVQ7QUFBYSxNQUFFLEVBQUUsQ0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQyx3Q0FBRDtBQUFLLE1BQUUsRUFBRSxFQUFUO0FBQWEsTUFBRSxFQUFFLEVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSSxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJLE1BQUMsa0RBQUQ7QUFBVSxTQUFLLEVBQUUsV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLEVBSUksTUFBQyxrREFBRDtBQUFVLFNBQUssRUFBRSxJQUFqQjtBQUF1QixRQUFJLEVBQUUsSUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLEVBS0ksTUFBQyxrREFBRDtBQUFVLFNBQUssRUFBRSxJQUFqQjtBQUF1QixRQUFJLEVBQUUsSUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxKLENBRkosRUFTSSxNQUFDLHdDQUFEO0FBQUssTUFBRSxFQUFFLEVBQVQ7QUFBYSxNQUFFLEVBQUUsQ0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRKLENBREosQ0FESjtBQWdCSCxDQXpCRDs7R0FBTU4sSTtVQUVlRSx1RDs7O0tBRmZGLEk7QUEyQlNBLG1FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9NYWluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtDYXRlZ29yeX0gZnJvbSBcIi4vQ2F0ZWdvcnlcIjtcbmltcG9ydCBTZWFyY2hJbnB1dCBmcm9tIFwiLi9TZWFyY2hJbnB1dFwiO1xuaW1wb3J0IHtDb2wsIE1lbnUsIFJvd30gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7dXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7dXNlRGlzcGF0Y2h9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHtyZXN0YXVyYW50TGlzdFJlcXVlc3RBY3Rpb259IGZyb20gXCIuLi9yZWR1Y2Vycy9yZXN0YXVyYW50XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBTdHlsZWROYXZCYXIgPSBzdHlsZWQudWxgXG5cblxuXG5gO1xuXG5jb25zdCBNYWluID0gKCkgPT4ge1xuXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJtYWluLmpzIG1vdW50ZWQhXCIpXG4gICAgICAgIGRpc3BhdGNoKHJlc3RhdXJhbnRMaXN0UmVxdWVzdEFjdGlvbigpKTtcbiAgICB9LFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8Um93IGd1dHRlcj17OH0+XG4gICAgICAgICAgICAgICAgPENvbCB4cz17MjR9IG1kPXszfT48L0NvbD5cbiAgICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezE4fT5cbiAgICAgICAgICAgICAgICAgICAgPHVsPjwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJbnB1dC8+XG4gICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yeSB0aXRsZT17XCLsmKTripjsnZgg7LaU7LKcIOunm+ynkVwifS8+XG4gICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yeSB0aXRsZT17XCLslpHsi51cIn0gdHlwZT17XCLslpHsi51cIn0vPlxuICAgICAgICAgICAgICAgICAgICA8Q2F0ZWdvcnkgdGl0bGU9e1wi7ZWc7IudXCJ9IHR5cGU9e1wi7ZWc7IudXCJ9Lz5cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezN9PjwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Main.js\n");

/***/ })

})