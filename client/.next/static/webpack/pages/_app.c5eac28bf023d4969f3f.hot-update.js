webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return userSaga; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_ApiService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/ApiService */ \"./api/ApiService.js\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ \"./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js\");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n\n\nvar _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(signIn),\n    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchSignIn),\n    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(userSaga);\n\n\n\n\n\nvar initialState = {\n  user: null,\n  signInLoading: false,\n  signInSucceed: false,\n  signInError: null\n};\n\nfunction signInAPI(data) {\n  return Object(_api_ApiService__WEBPACK_IMPORTED_MODULE_1__[\"signin\"])(data);\n}\n\nfunction signIn(_ref) {\n  var payload, signInData, result;\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function signIn$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          payload = _ref.payload;\n          _context.prev = 1;\n          signInData = payload.signInData;\n          console.log(signInData);\n          _context.next = 6;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"call\"])(signInAPI, signInData);\n\n        case 6:\n          result = _context.sent;\n          _context.next = 9;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"put\"])({\n            //put -> dispatch와 동일\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"SIGN_IN_SUCCESS\"],\n            data: result.data\n          });\n\n        case 9:\n          _context.next = 16;\n          break;\n\n        case 11:\n          _context.prev = 11;\n          _context.t0 = _context[\"catch\"](1);\n          alert(_context.t0.error);\n          _context.next = 16;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"SIGN_IN_FAILURE\"],\n            error: _context.t0.response.data\n          });\n\n        case 16:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _marked, null, [[1, 11]]);\n}\n\nfunction watchSignIn() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchSignIn$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          _context2.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"takeEvery\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"SIGN_IN_REQUEST\"], signIn);\n\n        case 2:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  }, _marked2);\n}\n\nfunction userSaga() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function userSaga$(_context3) {\n    while (1) {\n      switch (_context3.prev = _context3.next) {\n        case 0:\n          _context3.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"fork\"])(watchSignIn) // fork(watchSignUp),\n          ]);\n\n        case 2:\n        case \"end\":\n          return _context3.stop();\n      }\n    }\n  }, _marked3);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcz9hMzg2Il0sIm5hbWVzIjpbInNpZ25JbiIsIndhdGNoU2lnbkluIiwidXNlclNhZ2EiLCJpbml0aWFsU3RhdGUiLCJ1c2VyIiwic2lnbkluTG9hZGluZyIsInNpZ25JblN1Y2NlZWQiLCJzaWduSW5FcnJvciIsInNpZ25JbkFQSSIsImRhdGEiLCJzaWduaW4iLCJwYXlsb2FkIiwic2lnbkluRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjYWxsIiwicmVzdWx0IiwicHV0IiwidHlwZSIsIlNJR05fSU5fU1VDQ0VTUyIsImFsZXJ0IiwiZXJyb3IiLCJTSUdOX0lOX0ZBSUxVUkUiLCJyZXNwb25zZSIsInRha2VFdmVyeSIsImFjdGlvbnMiLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O2tHQWlCVUEsTTttR0FvQkFDLFc7bUdBS2VDLFE7O0FBMUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1DLFlBQVksR0FBRztBQUN4QkMsTUFBSSxFQUFFLElBRGtCO0FBRXhCQyxlQUFhLEVBQUUsS0FGUztBQUd4QkMsZUFBYSxFQUFFLEtBSFM7QUFJeEJDLGFBQVcsRUFBRTtBQUpXLENBQXJCOztBQU9QLFNBQVNDLFNBQVQsQ0FBbUJDLElBQW5CLEVBQXlCO0FBRXJCLFNBQU9DLDhEQUFNLENBQUNELElBQUQsQ0FBYjtBQUNIOztBQUVELFNBQVVULE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtCVyxpQkFBbEIsUUFBa0JBLE9BQWxCO0FBQUE7QUFFZUMsb0JBRmYsR0FFNkJELE9BRjdCLENBRWVDLFVBRmY7QUFHUUMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixVQUFaO0FBSFI7QUFJdUIsaUJBQU1HLCtEQUFJLENBQUNQLFNBQUQsRUFBWUksVUFBWixDQUFWOztBQUp2QjtBQUljSSxnQkFKZDtBQUFBO0FBTVEsaUJBQU1DLDhEQUFHLENBQUM7QUFBRTtBQUNSQyxnQkFBSSxFQUFFQyw4REFEQTtBQUVOVixnQkFBSSxFQUFFTyxNQUFNLENBQUNQO0FBRlAsV0FBRCxDQUFUOztBQU5SO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFZUVcsZUFBSyxDQUFDLFlBQUlDLEtBQUwsQ0FBTDtBQVpSO0FBYVEsaUJBQU1KLDhEQUFHLENBQUM7QUFDTkMsZ0JBQUksRUFBRUksOERBREE7QUFFTkQsaUJBQUssRUFBRSxZQUFJRSxRQUFKLENBQWFkO0FBRmQsV0FBRCxDQUFUOztBQWJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQW9CQSxTQUFVUixXQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNJLGlCQUFNdUIsb0VBQVMsQ0FBQ0MsOERBQUQsRUFBMEJ6QixNQUExQixDQUFmOztBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUtlLFNBQVVFLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1gsaUJBQU13Qiw4REFBRyxDQUFDLENBQ05DLCtEQUFJLENBQUMxQixXQUFELENBREUsQ0FFTjtBQUZNLFdBQUQsQ0FBVDs7QUFEVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIuL3NhZ2FzL3VzZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3NpZ25pbn0gZnJvbSAnLi4vYXBpL0FwaVNlcnZpY2UnO1xuaW1wb3J0IHsgYWxsLCBmb3JrLCB0YWtlRXZlcnksIGNhbGwsIHB1dCwgZGVsYXkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcbmltcG9ydCB7U0lHTl9JTl9GQUlMVVJFLCBTSUdOX0lOX1NVQ0NFU1N9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgdXNlcjogbnVsbCxcbiAgICBzaWduSW5Mb2FkaW5nOiBmYWxzZSxcbiAgICBzaWduSW5TdWNjZWVkOiBmYWxzZSxcbiAgICBzaWduSW5FcnJvcjogbnVsbFxufVxuXG5mdW5jdGlvbiBzaWduSW5BUEkoZGF0YSkge1xuXG4gICAgcmV0dXJuIHNpZ25pbihkYXRhKTtcbn1cblxuZnVuY3Rpb24qIHNpZ25Jbih7cGF5bG9hZH0pIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB7c2lnbkluRGF0YX0gPSBwYXlsb2FkO1xuICAgICAgICBjb25zb2xlLmxvZyhzaWduSW5EYXRhKVxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNpZ25JbkFQSSwgc2lnbkluRGF0YSk7XG5cbiAgICAgICAgeWllbGQgcHV0KHsgLy9wdXQgLT4gZGlzcGF0Y2jsmYAg64+Z7J28XG4gICAgICAgICAgICB0eXBlOiBTSUdOX0lOX1NVQ0NFU1MsXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICAgICAgfSk7XG5cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgYWxlcnQoZXJyLmVycm9yKTtcbiAgICAgICAgeWllbGQgcHV0KHtcbiAgICAgICAgICAgIHR5cGU6IFNJR05fSU5fRkFJTFVSRSxcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hTaWduSW4oKSB7XG4gICAgeWllbGQgdGFrZUV2ZXJ5KGFjdGlvbnMuU0lHTl9JTl9SRVFVRVNULCBzaWduSW4pO1xuICAgIC8vIHlpZWxkIHRha2VFdmVyeShhY3Rpb25zLlNJR05fT1VUX1JFUVVFU1QsIHNpZ25PdXQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XG4gICAgeWllbGQgYWxsKFtcbiAgICAgICAgZm9yayh3YXRjaFNpZ25JbiksXG4gICAgICAgIC8vIGZvcmsod2F0Y2hTaWduVXApLFxuICAgIF0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sagas/user.js\n");

/***/ })

})