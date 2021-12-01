webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILURE, SIGN_OUT_REQUEST, SIGN_OUT_SUCCESS, SIGN_OUT_FAILURE, signUpRequestAction, signInRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_UP_REQUEST\", function() { return SIGN_UP_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_UP_SUCCESS\", function() { return SIGN_UP_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_UP_FAILURE\", function() { return SIGN_UP_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_IN_REQUEST\", function() { return SIGN_IN_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_IN_SUCCESS\", function() { return SIGN_IN_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_IN_FAILURE\", function() { return SIGN_IN_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_OUT_REQUEST\", function() { return SIGN_OUT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_OUT_SUCCESS\", function() { return SIGN_OUT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_OUT_FAILURE\", function() { return SIGN_OUT_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signUpRequestAction\", function() { return signUpRequestAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signInRequestAction\", function() { return signInRequestAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logoutRequestAction\", function() { return logoutRequestAction; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nvar initialState = {}; // Action types\n\nvar SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';\nvar SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';\nvar SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';\nvar SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';\nvar SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';\nvar SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';\nvar SIGN_OUT_REQUEST = 'SIGN_OUT_REQUEST';\nvar SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';\nvar SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE'; // Actions creators\n\nvar signUpRequestAction = function signUpRequestAction(data) {\n  return {\n    type: SIGN_UP_REQUEST,\n    payload: {\n      signUpData: data\n    }\n  };\n};\nvar signInRequestAction = function signInRequestAction(data) {\n  return {\n    type: SIGN_IN_REQUEST,\n    payload: {\n      signInData: data\n    }\n  };\n};\nvar logoutRequestAction = function logoutRequestAction() {\n  return {\n    type: SIGN_OUT_REQUEST\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  var type = action.type,\n      payload = action.payload,\n      error = action.error;\n  console.log(state, type, payload, error, '?');\n\n  switch (type) {\n    case SIGN_UP_REQUEST:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          isSignIngUp: true,\n          isSignedUp: false,\n          signUpErrorReason: ''\n        });\n      }\n\n    case SIGN_UP_SUCCESS:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          isSignIngUp: false,\n          isSignedUp: true\n        });\n      }\n\n    case SIGN_UP_FAILURE:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          isSignIngUp: false,\n          signUpErrorReason: error\n        });\n      }\n\n    case SIGN_IN_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isSigningIn: true,\n        signInErrorReason: ''\n      });\n\n    case SIGN_IN_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isSigningIn: false,\n        isSignedIn: true,\n        isLoading: false\n      });\n\n    case SIGN_IN_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isSigningIn: false,\n        isSignedIn: false,\n        signInErrorReason: error,\n        me: null\n      });\n\n    case SIGN_OUT_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isSigningOut: true\n      });\n\n    case SIGN_OUT_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isSignedIn: false,\n        isSigningOut: false,\n        me: {}\n      });\n\n    case SIGN_OUT_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isSigningOut: false\n      });\n\n    default:\n      return state;\n  }\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcz8yYzA1Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIlNJR05fSU5fUkVRVUVTVCIsIlNJR05fSU5fU1VDQ0VTUyIsIlNJR05fSU5fRkFJTFVSRSIsIlNJR05fT1VUX1JFUVVFU1QiLCJTSUdOX09VVF9TVUNDRVNTIiwiU0lHTl9PVVRfRkFJTFVSRSIsInNpZ25VcFJlcXVlc3RBY3Rpb24iLCJkYXRhIiwidHlwZSIsInBheWxvYWQiLCJzaWduVXBEYXRhIiwic2lnbkluUmVxdWVzdEFjdGlvbiIsInNpZ25JbkRhdGEiLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwic3RhdGUiLCJhY3Rpb24iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJpc1NpZ25JbmdVcCIsImlzU2lnbmVkVXAiLCJzaWduVXBFcnJvclJlYXNvbiIsImlzU2lnbmluZ0luIiwic2lnbkluRXJyb3JSZWFzb24iLCJpc1NpZ25lZEluIiwiaXNMb2FkaW5nIiwibWUiLCJpc1NpZ25pbmdPdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLFlBQVksR0FBRyxFQUFyQixDLENBSVA7O0FBQ08sSUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLElBQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxJQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBRUEsSUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLElBQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxJQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBRUEsSUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCLEMsQ0FFUDs7QUFDTyxJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUFDLElBQUk7QUFBQSxTQUFLO0FBQ3hDQyxRQUFJLEVBQUVYLGVBRGtDO0FBRXhDWSxXQUFPLEVBQUU7QUFDTEMsZ0JBQVUsRUFBRUg7QUFEUDtBQUYrQixHQUFMO0FBQUEsQ0FBaEM7QUFPQSxJQUFNSSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUFKLElBQUksRUFBSTtBQUN2QyxTQUFRO0FBQ1JDLFFBQUksRUFBRVIsZUFERTtBQUVSUyxXQUFPLEVBQUU7QUFDTEcsZ0JBQVUsRUFBRUw7QUFEUDtBQUZELEdBQVI7QUFLRCxDQU5JO0FBUUEsSUFBTU0sbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQjtBQUFBLFNBQU87QUFDdENMLFFBQUksRUFBRUw7QUFEZ0MsR0FBUDtBQUFBLENBQTVCO0FBSVEsMkVBQWtDO0FBQUEsTUFBakNXLEtBQWlDLHVFQUF6QmxCLFlBQXlCO0FBQUEsTUFBWG1CLE1BQVc7QUFDN0MsTUFBUVAsSUFBUixHQUFpQ08sTUFBakMsQ0FBUVAsSUFBUjtBQUFBLE1BQWNDLE9BQWQsR0FBaUNNLE1BQWpDLENBQWNOLE9BQWQ7QUFBQSxNQUF1Qk8sS0FBdkIsR0FBaUNELE1BQWpDLENBQXVCQyxLQUF2QjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUosS0FBWixFQUFtQk4sSUFBbkIsRUFBeUJDLE9BQXpCLEVBQWtDTyxLQUFsQyxFQUF3QyxHQUF4Qzs7QUFDQSxVQUFRUixJQUFSO0FBQ0ksU0FBS1gsZUFBTDtBQUFzQjtBQUNsQiwrQ0FDT2lCLEtBRFA7QUFFSUsscUJBQVcsRUFBRSxJQUZqQjtBQUdJQyxvQkFBVSxFQUFFLEtBSGhCO0FBSUlDLDJCQUFpQixFQUFFO0FBSnZCO0FBTUg7O0FBQ0QsU0FBS3ZCLGVBQUw7QUFBc0I7QUFDbEIsK0NBQ09nQixLQURQO0FBRUlLLHFCQUFXLEVBQUUsS0FGakI7QUFHSUMsb0JBQVUsRUFBRTtBQUhoQjtBQUtIOztBQUNELFNBQUtyQixlQUFMO0FBQXNCO0FBQ2xCLCtDQUNPZSxLQURQO0FBRUlLLHFCQUFXLEVBQUUsS0FGakI7QUFHSUUsMkJBQWlCLEVBQUVMO0FBSHZCO0FBS0g7O0FBQ0QsU0FBS2hCLGVBQUw7QUFDSSw2Q0FDT2MsS0FEUDtBQUVJUSxtQkFBVyxFQUFFLElBRmpCO0FBR0lDLHlCQUFpQixFQUFFO0FBSHZCOztBQUtKLFNBQUt0QixlQUFMO0FBQ0ksNkNBQ09hLEtBRFA7QUFFSVEsbUJBQVcsRUFBRSxLQUZqQjtBQUdJRSxrQkFBVSxFQUFFLElBSGhCO0FBSUlDLGlCQUFTLEVBQUU7QUFKZjs7QUFNSixTQUFLdkIsZUFBTDtBQUNJLDZDQUNPWSxLQURQO0FBRUlRLG1CQUFXLEVBQUUsS0FGakI7QUFHSUUsa0JBQVUsRUFBRSxLQUhoQjtBQUlJRCx5QkFBaUIsRUFBRVAsS0FKdkI7QUFLSVUsVUFBRSxFQUFFO0FBTFI7O0FBT0osU0FBS3ZCLGdCQUFMO0FBQ0ksNkNBQ09XLEtBRFA7QUFFSWEsb0JBQVksRUFBRTtBQUZsQjs7QUFJSixTQUFLdkIsZ0JBQUw7QUFDSSw2Q0FDT1UsS0FEUDtBQUVJVSxrQkFBVSxFQUFFLEtBRmhCO0FBR0lHLG9CQUFZLEVBQUUsS0FIbEI7QUFJSUQsVUFBRSxFQUFFO0FBSlI7O0FBTUosU0FBS3JCLGdCQUFMO0FBQ0ksNkNBQ09TLEtBRFA7QUFFSWEsb0JBQVksRUFBRTtBQUZsQjs7QUFJSjtBQUNJLGFBQU9iLEtBQVA7QUE5RFI7QUFnRUgsQ0FuRUQiLCJmaWxlIjoiLi9yZWR1Y2Vycy91c2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBcbn07XG5cbi8vIEFjdGlvbiB0eXBlc1xuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9ICdTSUdOX1VQX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9ICdTSUdOX1VQX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgU0lHTl9JTl9SRVFVRVNUID0gJ1NJR05fSU5fUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgU0lHTl9JTl9TVUNDRVNTID0gJ1NJR05fSU5fU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgU0lHTl9JTl9GQUlMVVJFID0gJ1NJR05fSU5fRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBTSUdOX09VVF9SRVFVRVNUID0gJ1NJR05fT1VUX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IFNJR05fT1VUX1NVQ0NFU1MgPSAnU0lHTl9PVVRfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgU0lHTl9PVVRfRkFJTFVSRSA9ICdTSUdOX09VVF9GQUlMVVJFJztcblxuLy8gQWN0aW9ucyBjcmVhdG9yc1xuZXhwb3J0IGNvbnN0IHNpZ25VcFJlcXVlc3RBY3Rpb24gPSBkYXRhID0+ICh7XG4gICAgdHlwZTogU0lHTl9VUF9SRVFVRVNULFxuICAgIHBheWxvYWQ6IHtcbiAgICAgICAgc2lnblVwRGF0YTogZGF0YSxcbiAgICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBzaWduSW5SZXF1ZXN0QWN0aW9uID0gZGF0YSA9PiB7XG4gICAgcmV0dXJuICh7XG4gICAgdHlwZTogU0lHTl9JTl9SRVFVRVNULFxuICAgIHBheWxvYWQ6IHtcbiAgICAgICAgc2lnbkluRGF0YTogZGF0YSxcbiAgICB9LFxufSl9O1xuXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9ICgpID0+ICh7XG4gICAgdHlwZTogU0lHTl9PVVRfUkVRVUVTVCxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IHsgdHlwZSwgcGF5bG9hZCwgZXJyb3IgfSA9IGFjdGlvbjtcbiAgICBjb25zb2xlLmxvZyhzdGF0ZSwgdHlwZSwgcGF5bG9hZCwgZXJyb3IsJz8nKTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgaXNTaWduSW5nVXA6IHRydWUsXG4gICAgICAgICAgICAgICAgaXNTaWduZWRVcDogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2lnblVwRXJyb3JSZWFzb246ICcnLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzoge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc1NpZ25JbmdVcDogZmFsc2UsXG4gICAgICAgICAgICAgICAgaXNTaWduZWRVcDogdHJ1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgaXNTaWduSW5nVXA6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNpZ25VcEVycm9yUmVhc29uOiBlcnJvcixcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBTSUdOX0lOX1JFUVVFU1Q6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGlzU2lnbmluZ0luOiB0cnVlLFxuICAgICAgICAgICAgICAgIHNpZ25JbkVycm9yUmVhc29uOiAnJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgU0lHTl9JTl9TVUNDRVNTOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc1NpZ25pbmdJbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgaXNTaWduZWRJbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBTSUdOX0lOX0ZBSUxVUkU6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGlzU2lnbmluZ0luOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpc1NpZ25lZEluOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaWduSW5FcnJvclJlYXNvbjogZXJyb3IsXG4gICAgICAgICAgICAgICAgbWU6IG51bGwsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIFNJR05fT1VUX1JFUVVFU1Q6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGlzU2lnbmluZ091dDogdHJ1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgU0lHTl9PVVRfU1VDQ0VTUzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgaXNTaWduZWRJbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgaXNTaWduaW5nT3V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBtZToge30sXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIFNJR05fT1VUX0ZBSUxVUkU6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGlzU2lnbmluZ091dDogZmFsc2UsXG4gICAgICAgICAgICB9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/user.js\n");

/***/ })

})