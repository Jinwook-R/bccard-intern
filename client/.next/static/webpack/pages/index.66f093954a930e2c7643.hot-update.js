webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Main.js":
/*!****************************!*\
  !*** ./components/Main.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Category */ \"./components/Category.js\");\n/* harmony import */ var _SearchInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchInput */ \"./components/SearchInput.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _reducers_restaurant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/restaurant */ \"./reducers/restaurant.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/bccard/Desktop/bccard-intern/client/components/Main.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"];\n\n\n\n\n\n\n\n\nvar Main = function Main() {\n  _s();\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useDispatch\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    console.log(\"main.js mounted!\");\n    dispatch(Object(_reducers_restaurant__WEBPACK_IMPORTED_MODULE_5__[\"restaurantListRequestAction\"])());\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Row\"], {\n    gutter: 8,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], {\n    xs: 24,\n    md: 3,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 17\n    }\n  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], {\n    xs: 24,\n    md: 18,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 17\n    }\n  }, __jsx(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 21\n    }\n  }), __jsx(_SearchInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 21\n    }\n  }), __jsx(_Category__WEBPACK_IMPORTED_MODULE_1__[\"Category\"], {\n    title: \"오늘의 추천 맛집\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 21\n    }\n  }), __jsx(_Category__WEBPACK_IMPORTED_MODULE_1__[\"Category\"], {\n    title: \"양식\",\n    type: \"양식\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 21\n    }\n  }), __jsx(_Category__WEBPACK_IMPORTED_MODULE_1__[\"Category\"], {\n    title: \"한식\",\n    type: \"한식\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 21\n    }\n  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], {\n    xs: 24,\n    md: 3,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 17\n    }\n  })));\n};\n\n_s(Main, \"rAh3tY+Iv6hWC9AI4Dm+rCbkwNE=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useDispatch\"]];\n});\n\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\n\nvar _c;\n\n$RefreshReg$(_c, \"Main\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluLmpzPzg2NjAiXSwibmFtZXMiOlsiTWFpbiIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwicmVzdGF1cmFudExpc3RSZXF1ZXN0QWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUVmLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaO0FBQ0FKLFlBQVEsQ0FBQ0ssd0ZBQTJCLEVBQTVCLENBQVI7QUFDSCxHQUhRLEVBR1AsRUFITyxDQUFUO0FBS0EsU0FDSSw0REFDSSxNQUFDLHdDQUFEO0FBQUssVUFBTSxFQUFFLENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsd0NBQUQ7QUFBSyxNQUFFLEVBQUUsRUFBVDtBQUFhLE1BQUUsRUFBRSxDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSSxNQUFDLHdDQUFEO0FBQUssTUFBRSxFQUFFLEVBQVQ7QUFBYSxNQUFFLEVBQUUsRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0ksTUFBQyxrREFBRDtBQUFVLFNBQUssRUFBRSxXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosRUFJSSxNQUFDLGtEQUFEO0FBQVUsU0FBSyxFQUFFLElBQWpCO0FBQXVCLFFBQUksRUFBRSxJQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosRUFLSSxNQUFDLGtEQUFEO0FBQVUsU0FBSyxFQUFFLElBQWpCO0FBQXVCLFFBQUksRUFBRSxJQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEosQ0FGSixFQVNJLE1BQUMsd0NBQUQ7QUFBSyxNQUFFLEVBQUUsRUFBVDtBQUFhLE1BQUUsRUFBRSxDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEosQ0FESixDQURKO0FBZ0JILENBekJEOztHQUFNTixJO1VBRWVFLHVEOzs7S0FGZkYsSTtBQTJCU0EsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL01haW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0NhdGVnb3J5fSBmcm9tIFwiLi9DYXRlZ29yeVwiO1xuaW1wb3J0IFNlYXJjaElucHV0IGZyb20gXCIuL1NlYXJjaElucHV0XCI7XG5pbXBvcnQge0NvbCwgTWVudSwgUm93fSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHt1c2VEaXNwYXRjaH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQge3Jlc3RhdXJhbnRMaXN0UmVxdWVzdEFjdGlvbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3Jlc3RhdXJhbnRcIjtcblxuY29uc3QgTWFpbiA9ICgpID0+IHtcblxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibWFpbi5qcyBtb3VudGVkIVwiKVxuICAgICAgICBkaXNwYXRjaChyZXN0YXVyYW50TGlzdFJlcXVlc3RBY3Rpb24oKSk7XG4gICAgfSxbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFJvdyBndXR0ZXI9ezh9PlxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBtZD17M30+PC9Db2w+XG4gICAgICAgICAgICAgICAgPENvbCB4cz17MjR9IG1kPXsxOH0+XG4gICAgICAgICAgICAgICAgICAgIDx1bD48L3VsPlxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoSW5wdXQvPlxuICAgICAgICAgICAgICAgICAgICA8Q2F0ZWdvcnkgdGl0bGU9e1wi7Jik64qY7J2YIOy2lOyynCDrp5vsp5FcIn0vPlxuICAgICAgICAgICAgICAgICAgICA8Q2F0ZWdvcnkgdGl0bGU9e1wi7JaR7IudXCJ9IHR5cGU9e1wi7JaR7IudXCJ9Lz5cbiAgICAgICAgICAgICAgICAgICAgPENhdGVnb3J5IHRpdGxlPXtcIu2VnOyLnVwifSB0eXBlPXtcIu2VnOyLnVwifS8+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPENvbCB4cz17MjR9IG1kPXszfT48L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuXG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWluOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Main.js\n");

/***/ })

})