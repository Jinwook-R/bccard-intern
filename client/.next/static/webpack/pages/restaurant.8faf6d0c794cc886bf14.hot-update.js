webpackHotUpdate_N_E("pages/restaurant",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\n\nvar _templateObject,\n    _this = undefined,\n    _jsxFileName = \"/Users/bccard/Desktop/bccard-intern/client/components/Header.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"];\n\n\n\n\n\n\n\nvar StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\n    .ant-menu-submenu-title {\\n        padding-left : 0px;\\n    }\\n  \\n    ul {\\n    border-right: none;\\n  }\\n\"])));\n_c = StyledHeader;\n\nvar Header = function Header() {\n  _s();\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useDispatch\"])();\n\n  var handleSignOut = function handleSignOut() {\n    localStorage.clear();\n    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"signOutRequestAction\"])());\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], null, __jsx(StyledHeader, {\n    style: {\n      width: \"100%\",\n      backgroundColor: \"white\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }\n  }, __jsx(\"p\", {\n    style: {\n      textAlign: 'center',\n      fontWeight: 'bold',\n      fontSize: '25px',\n      paddingTop: '10px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 17\n    }\n  }, \"BC\\uB85C(\\u8DEF)\"), __jsx(antd__WEBPACK_IMPORTED_MODULE_7__[\"Menu\"], {\n    mode: \"inline\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 21\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__[\"Menu\"].SubMenu, {\n    key: \"menu\",\n    title: \"\\uBA54\\uB274\",\n    style: {\n      color: 'black',\n      border: \"none\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 25\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__[\"Menu\"].ItemGroup, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 29\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__[\"Menu\"].Item, {\n    key: \"setting1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 33\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    href: \"/profile\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 59\n    }\n  }, \"\\uB0B4 \\uC815\\uBCF4\")), __jsx(antd__WEBPACK_IMPORTED_MODULE_7__[\"Menu\"].Item, {\n    key: \"setting2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 33\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    href: \"/reservation\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 59\n    }\n  }, \"\\uC57D\\uC18D \\uAD00\\uB9AC\")), __jsx(antd__WEBPACK_IMPORTED_MODULE_7__[\"Menu\"].Item, {\n    key: \"setting2\",\n    onClick: handleSignOut,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 33\n    }\n  }, \"\\uB85C\\uADF8\\uC544\\uC6C3\"))))));\n};\n\n_s(Header, \"rgTLoBID190wEKCp9+G8W6F7A5M=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useDispatch\"]];\n});\n\n_c2 = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"StyledHeader\");\n$RefreshReg$(_c2, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NmY0YSJdLCJuYW1lcyI6WyJTdHlsZWRIZWFkZXIiLCJzdHlsZWQiLCJkaXYiLCJIZWFkZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiaGFuZGxlU2lnbk91dCIsImxvY2FsU3RvcmFnZSIsImNsZWFyIiwic2lnbk91dFJlcXVlc3RBY3Rpb24iLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsInRleHRBbGlnbiIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsInBhZGRpbmdUb3AiLCJjb2xvciIsImJvcmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLGtRQUFsQjtLQUFNRixZOztBQVdOLElBQU1HLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFFakIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFFQSxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDeEJDLGdCQUFZLENBQUNDLEtBQWI7QUFDQUosWUFBUSxDQUFDSywyRUFBb0IsRUFBckIsQ0FBUjtBQUNILEdBSEQ7O0FBS0EsU0FDSSw0REFDSSxNQUFDLFlBQUQ7QUFBYyxTQUFLLEVBQUU7QUFBQ0MsV0FBSyxFQUFDLE1BQVA7QUFBZUMscUJBQWUsRUFBQztBQUEvQixLQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxTQUFLLEVBQUU7QUFBQ0MsZUFBUyxFQUFDLFFBQVg7QUFBcUJDLGdCQUFVLEVBQUMsTUFBaEM7QUFBd0NDLGNBQVEsRUFBQyxNQUFqRDtBQUF5REMsZ0JBQVUsRUFBQztBQUFwRSxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREosRUFFUSxNQUFDLHlDQUFEO0FBQU0sUUFBSSxFQUFDLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMseUNBQUQsQ0FBTSxPQUFOO0FBQWMsT0FBRyxFQUFDLE1BQWxCO0FBQXlCLFNBQUssRUFBQyxjQUEvQjtBQUFvQyxTQUFLLEVBQUU7QUFBQ0MsV0FBSyxFQUFDLE9BQVA7QUFBZ0JDLFlBQU0sRUFBQztBQUF2QixLQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx5Q0FBRCxDQUFNLFNBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsT0FBRyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUEwQixNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBMUIsQ0FESixFQUVJLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsT0FBRyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUEwQixNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLGNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FBMUIsQ0FGSixFQUdJLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsT0FBRyxFQUFDLFVBQWY7QUFBMEIsV0FBTyxFQUFFWCxhQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUhKLENBREosQ0FESixDQUZSLENBREosQ0FESjtBQWdCSCxDQXpCRDs7R0FBTUgsTTtVQUVlRSx1RDs7O01BRmZGLE07QUEyQlNBLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9IZWFkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICAgIFNldHRpbmdPdXRsaW5lZCxcbn0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xuaW1wb3J0IHtzaWduT3V0UmVxdWVzdEFjdGlvbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcbmltcG9ydCB7dXNlRGlzcGF0Y2h9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7Q29sLCBNZW51LCBSb3d9IGZyb20gXCJhbnRkXCI7XG5cbmNvbnN0IFN0eWxlZEhlYWRlciA9IHN0eWxlZC5kaXZgXG5cbiAgICAuYW50LW1lbnUtc3VibWVudS10aXRsZSB7XG4gICAgICAgIHBhZGRpbmctbGVmdCA6IDBweDtcbiAgICB9XG4gIFxuICAgIHVsIHtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIH1cbmA7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcblxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBcbiAgICBjb25zdCBoYW5kbGVTaWduT3V0ID0gKCkgPT4ge1xuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgZGlzcGF0Y2goc2lnbk91dFJlcXVlc3RBY3Rpb24oKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxTdHlsZWRIZWFkZXIgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIiwgYmFja2dyb3VuZENvbG9yOlwid2hpdGVcIn19PlxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInLCBmb250V2VpZ2h0Oidib2xkJywgZm9udFNpemU6JzI1cHgnLCBwYWRkaW5nVG9wOicxMHB4J319PkJD66GcKOi3ryk8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51IG1vZGU9XCJpbmxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51LlN1Yk1lbnUga2V5PVwibWVudVwiIHRpdGxlPVwi66mU64m0XCIgc3R5bGU9e3tjb2xvcjonYmxhY2snLCBib3JkZXI6XCJub25lXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwic2V0dGluZzFcIj48TGluayBocmVmPVwiL3Byb2ZpbGVcIj7rgrQg7KCV67O0PC9MaW5rPjwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cInNldHRpbmcyXCI+PExpbmsgaHJlZj1cIi9yZXNlcnZhdGlvblwiPuyVveyGjSDqtIDrpqw8L0xpbms+PC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwic2V0dGluZzJcIiBvbkNsaWNrPXtoYW5kbGVTaWduT3V0fT7roZzqt7jslYTsm4M8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbUdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51LlN1Yk1lbnU+XG4gICAgICAgICAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICAgIDwvU3R5bGVkSGVhZGVyPlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ })

})