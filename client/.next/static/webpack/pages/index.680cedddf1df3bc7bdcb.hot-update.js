webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/redux-persist/es/constants.js":
false,

/***/ "./node_modules/redux-persist/es/createMigrate.js":
false,

/***/ "./node_modules/redux-persist/es/createPersistoid.js":
false,

/***/ "./node_modules/redux-persist/es/createTransform.js":
false,

/***/ "./node_modules/redux-persist/es/getStoredState.js":
false,

/***/ "./node_modules/redux-persist/es/index.js":
false,

/***/ "./node_modules/redux-persist/es/integration/react.js":
false,

/***/ "./node_modules/redux-persist/es/persistCombineReducers.js":
false,

/***/ "./node_modules/redux-persist/es/persistReducer.js":
false,

/***/ "./node_modules/redux-persist/es/persistStore.js":
false,

/***/ "./node_modules/redux-persist/es/purgeStoredState.js":
false,

/***/ "./node_modules/redux-persist/es/stateReconciler/autoMergeLevel1.js":
false,

/***/ "./node_modules/redux-persist/es/stateReconciler/autoMergeLevel2.js":
false,

/***/ "./node_modules/redux/es/redux.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AppLayout */ \"./components/AppLayout.js\");\n/* harmony import */ var _components_LoginForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/LoginForm */ \"./components/LoginForm.js\");\n/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Main */ \"./components/Main.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/jin/Desktop/bi/client/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"])(function (state) {\n    return state.user;\n  }),\n      me = _useSelector.me,\n      isSignedIn = _useSelector.isSignedIn;\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useDispatch\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    console.log('me: ', me);\n    isSignedIn && dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_5__[\"loadUserRequestAction\"])(me));\n  }, []);\n  console.log(isSignedIn, '!!~~!!~!~!!~!~!!~!!!~!~!');\n  return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }\n  }, isSignedIn && __jsx(_components_Main__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 32\n    }\n  }), !isSignedIn && __jsx(_components_LoginForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 33\n    }\n  }));\n};\n\n_s(Home, \"r7LhnrvlEagYZ9zRjZ/+/jn7p94=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useDispatch\"]];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsImlzU2lnbmVkSW4iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImxvYWRVc2VyUmVxdWVzdEFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2YscUJBQXlCQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLElBQVY7QUFBQSxHQUFOLENBQXBDO0FBQUEsTUFBT0MsRUFBUCxnQkFBT0EsRUFBUDtBQUFBLE1BQVdDLFVBQVgsZ0JBQVdBLFVBQVg7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDWkMsV0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFtQk4sRUFBbkI7QUFDQUMsY0FBVSxJQUFJQyxRQUFRLENBQUNLLDRFQUFxQixDQUFDUCxFQUFELENBQXRCLENBQXRCO0FBQ0gsR0FIUSxFQUdQLEVBSE8sQ0FBVDtBQUtBSyxTQUFPLENBQUNDLEdBQVIsQ0FBWUwsVUFBWixFQUF1QiwwQkFBdkI7QUFDQSxTQUNRLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLQSxVQUFVLElBQUksTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRG5CLEVBRUssQ0FBQ0EsVUFBRCxJQUFlLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZwQixDQURSO0FBTUgsQ0FoQkQ7O0dBQU1MLEk7VUFDdUJDLHVELEVBQ1JNLHVEOzs7S0FGZlAsSTtBQWtCU0EsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0FwcExheW91dFwiO1xuaW1wb3J0IExvZ2luRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2dpbkZvcm1cIjtcbmltcG9ydCBNYWluIGZyb20gXCIuLi9jb21wb25lbnRzL01haW5cIjtcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7bG9hZFVzZXJSZXF1ZXN0QWN0aW9ufSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xuXG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gICAgY29uc3Qge21lLCBpc1NpZ25lZElufSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIpO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtZTogJyxtZSk7XG4gICAgICAgIGlzU2lnbmVkSW4gJiYgZGlzcGF0Y2gobG9hZFVzZXJSZXF1ZXN0QWN0aW9uKG1lKSk7XG4gICAgfSxbXSk7XG5cbiAgICBjb25zb2xlLmxvZyhpc1NpZ25lZEluLCchIX5+ISF+IX4hIX4hfiEhfiEhIX4hfiEnKVxuICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QXBwTGF5b3V0PlxuICAgICAgICAgICAgICAgIHtpc1NpZ25lZEluICYmIDxNYWluLz59XG4gICAgICAgICAgICAgICAgeyFpc1NpZ25lZEluICYmIDxMb2dpbkZvcm0vPn1cbiAgICAgICAgICAgIDwvQXBwTGF5b3V0PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})