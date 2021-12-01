webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILURE, SIGN_OUT_REQUEST, SIGN_OUT_SUCCESS, SIGN_OUT_FAILURE, signUpRequestAction, signInRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_UP_REQUEST\", function() { return SIGN_UP_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_UP_SUCCESS\", function() { return SIGN_UP_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_UP_FAILURE\", function() { return SIGN_UP_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_IN_REQUEST\", function() { return SIGN_IN_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_IN_SUCCESS\", function() { return SIGN_IN_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_IN_FAILURE\", function() { return SIGN_IN_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_OUT_REQUEST\", function() { return SIGN_OUT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_OUT_SUCCESS\", function() { return SIGN_OUT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_OUT_FAILURE\", function() { return SIGN_OUT_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signUpRequestAction\", function() { return signUpRequestAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signInRequestAction\", function() { return signInRequestAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logoutRequestAction\", function() { return logoutRequestAction; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nvar initialState = {\n  isSignedIn: false,\n  // 로그인 여부\n  isSigningOut: false,\n  // 로그아웃 시도중\n  isSigningIn: false,\n  // 로그인 시도중\n  signInErrorReason: '',\n  // 로그인 실패 사유\n  isSignedUp: false,\n  // 회원가입 성공\n  isSignIngUp: false,\n  // 회원가입 시도중\n  signUpErrorReason: '',\n  // 회원가입 실패 사유\n  me: null,\n  // 내 정보\n  followingList: [],\n  // 팔로잉 리스트\n  followerList: [] // 팔로워 리스트\n\n}; // Action types\n\nvar SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';\nvar SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';\nvar SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';\nvar SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';\nvar SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';\nvar SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';\nvar SIGN_OUT_REQUEST = 'SIGN_OUT_REQUEST';\nvar SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';\nvar SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE'; // Actions creators\n\nvar signUpRequestAction = function signUpRequestAction(data) {\n  return {\n    type: SIGN_UP_REQUEST,\n    payload: {\n      signUpData: data\n    }\n  };\n};\nvar signInRequestAction = function signInRequestAction(data) {\n  return {\n    type: SIGN_IN_REQUEST,\n    payload: {\n      signInData: data\n    }\n  };\n};\nvar logoutRequestAction = function logoutRequestAction() {\n  return {\n    type: SIGN_OUT_REQUEST\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  var type = action.type,\n      payload = action.payload,\n      error = action.error;\n  console.log(type, payload, error, '?');\n\n  switch (type) {\n    case SIGN_UP_REQUEST:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          isSignIngUp: true,\n          isSignedUp: false,\n          signUpErrorReason: ''\n        });\n      }\n\n    case SIGN_UP_SUCCESS:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          isSignIngUp: false,\n          isSignedUp: true\n        });\n      }\n\n    case SIGN_UP_FAILURE:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          isSignIngUp: false,\n          signUpErrorReason: error\n        });\n      }\n\n    case SIGN_IN_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isSigningIn: true,\n        signInErrorReason: ''\n      });\n\n    case SIGN_IN_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        me: payload,\n        isSigningIn: false,\n        isSignedIn: true,\n        isLoading: false\n      });\n\n    case SIGN_IN_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isSigningIn: false,\n        isSignedIn: false,\n        signInErrorReason: error,\n        me: null\n      });\n\n    case SIGN_OUT_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isSigningOut: true\n      });\n\n    case SIGN_OUT_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isSignedIn: false,\n        isSigningOut: false,\n        me: {}\n      });\n\n    case SIGN_OUT_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isSigningOut: false\n      });\n\n    default:\n      return state;\n  }\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcz8yYzA1Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImlzU2lnbmVkSW4iLCJpc1NpZ25pbmdPdXQiLCJpc1NpZ25pbmdJbiIsInNpZ25JbkVycm9yUmVhc29uIiwiaXNTaWduZWRVcCIsImlzU2lnbkluZ1VwIiwic2lnblVwRXJyb3JSZWFzb24iLCJtZSIsImZvbGxvd2luZ0xpc3QiLCJmb2xsb3dlckxpc3QiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJTSUdOX0lOX1JFUVVFU1QiLCJTSUdOX0lOX1NVQ0NFU1MiLCJTSUdOX0lOX0ZBSUxVUkUiLCJTSUdOX09VVF9SRVFVRVNUIiwiU0lHTl9PVVRfU1VDQ0VTUyIsIlNJR05fT1VUX0ZBSUxVUkUiLCJzaWduVXBSZXF1ZXN0QWN0aW9uIiwiZGF0YSIsInR5cGUiLCJwYXlsb2FkIiwic2lnblVwRGF0YSIsInNpZ25JblJlcXVlc3RBY3Rpb24iLCJzaWduSW5EYXRhIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsInN0YXRlIiwiYWN0aW9uIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiaXNMb2FkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxZQUFZLEdBQUc7QUFDeEJDLFlBQVUsRUFBRSxLQURZO0FBQ0w7QUFDbkJDLGNBQVksRUFBRSxLQUZVO0FBRUg7QUFDckJDLGFBQVcsRUFBRSxLQUhXO0FBR0o7QUFDcEJDLG1CQUFpQixFQUFFLEVBSks7QUFJRDtBQUN2QkMsWUFBVSxFQUFFLEtBTFk7QUFLTDtBQUNuQkMsYUFBVyxFQUFFLEtBTlc7QUFNSjtBQUNwQkMsbUJBQWlCLEVBQUUsRUFQSztBQU9EO0FBQ3ZCQyxJQUFFLEVBQUUsSUFSb0I7QUFRZDtBQUNWQyxlQUFhLEVBQUUsRUFUUztBQVNMO0FBQ25CQyxjQUFZLEVBQUUsRUFWVSxDQVVOOztB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RmxCOztBQUlKO0FBQ0ksYUFBTzBCLEtBQVA7QUEvRFI7QUFpRUgsQ0FwRUQiLCJmaWxlIjoiLi9yZWR1Y2Vycy91c2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBpc1NpZ25lZEluOiBmYWxzZSwgLy8g66Gc6re47J24IOyXrOu2gFxuICAgIGlzU2lnbmluZ091dDogZmFsc2UsIC8vIOuhnOq3uOyVhOybgyDsi5zrj4TspJFcbiAgICBpc1NpZ25pbmdJbjogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4TspJFcbiAgICBzaWduSW5FcnJvclJlYXNvbjogJycsIC8vIOuhnOq3uOyduCDsi6TtjKgg7IKs7JygXG4gICAgaXNTaWduZWRVcDogZmFsc2UsIC8vIO2ajOybkOqwgOyehSDshLHqs7VcbiAgICBpc1NpZ25JbmdVcDogZmFsc2UsIC8vIO2ajOybkOqwgOyehSDsi5zrj4TspJFcbiAgICBzaWduVXBFcnJvclJlYXNvbjogJycsIC8vIO2ajOybkOqwgOyehSDsi6TtjKgg7IKs7JygXG4gICAgbWU6IG51bGwsIC8vIOuCtCDsoJXrs7RcbiAgICBmb2xsb3dpbmdMaXN0OiBbXSwgLy8g7YyU66Gc7J6JIOumrOyKpO2KuFxuICAgIGZvbGxvd2VyTGlzdDogW10sIC8vIO2MlOuhnOybjCDrpqzsiqTtirhcblxufTtcblxuLy8gQWN0aW9uIHR5cGVzXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gJ1NJR05fVVBfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gJ1NJR05fVVBfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBTSUdOX0lOX1JFUVVFU1QgPSAnU0lHTl9JTl9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBTSUdOX0lOX1NVQ0NFU1MgPSAnU0lHTl9JTl9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBTSUdOX0lOX0ZBSUxVUkUgPSAnU0lHTl9JTl9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IFNJR05fT1VUX1JFUVVFU1QgPSAnU0lHTl9PVVRfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgU0lHTl9PVVRfU1VDQ0VTUyA9ICdTSUdOX09VVF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBTSUdOX09VVF9GQUlMVVJFID0gJ1NJR05fT1VUX0ZBSUxVUkUnO1xuXG4vLyBBY3Rpb25zIGNyZWF0b3JzXG5leHBvcnQgY29uc3Qgc2lnblVwUmVxdWVzdEFjdGlvbiA9IGRhdGEgPT4gKHtcbiAgICB0eXBlOiBTSUdOX1VQX1JFUVVFU1QsXG4gICAgcGF5bG9hZDoge1xuICAgICAgICBzaWduVXBEYXRhOiBkYXRhLFxuICAgIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHNpZ25JblJlcXVlc3RBY3Rpb24gPSBkYXRhID0+IHtcbiAgICByZXR1cm4gKHtcbiAgICB0eXBlOiBTSUdOX0lOX1JFUVVFU1QsXG4gICAgcGF5bG9hZDoge1xuICAgICAgICBzaWduSW5EYXRhOiBkYXRhLFxuICAgIH0sXG59KX07XG5cbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4gKHtcbiAgICB0eXBlOiBTSUdOX09VVF9SRVFVRVNULFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgY29uc3QgeyB0eXBlLCBwYXlsb2FkLCBlcnJvciB9ID0gYWN0aW9uO1xuICAgIGNvbnNvbGUubG9nKHR5cGUsIHBheWxvYWQsIGVycm9yLCc/Jyk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGlzU2lnbkluZ1VwOiB0cnVlLFxuICAgICAgICAgICAgICAgIGlzU2lnbmVkVXA6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNpZ25VcEVycm9yUmVhc29uOiAnJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgaXNTaWduSW5nVXA6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGlzU2lnbmVkVXA6IHRydWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGlzU2lnbkluZ1VwOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaWduVXBFcnJvclJlYXNvbjogZXJyb3IsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgU0lHTl9JTl9SRVFVRVNUOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc1NpZ25pbmdJbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzaWduSW5FcnJvclJlYXNvbjogJycsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIFNJR05fSU5fU1VDQ0VTUzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgbWU6cGF5bG9hZCxcbiAgICAgICAgICAgICAgICBpc1NpZ25pbmdJbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgaXNTaWduZWRJbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBTSUdOX0lOX0ZBSUxVUkU6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGlzU2lnbmluZ0luOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpc1NpZ25lZEluOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaWduSW5FcnJvclJlYXNvbjogZXJyb3IsXG4gICAgICAgICAgICAgICAgbWU6IG51bGwsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIFNJR05fT1VUX1JFUVVFU1Q6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGlzU2lnbmluZ091dDogdHJ1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgU0lHTl9PVVRfU1VDQ0VTUzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgaXNTaWduZWRJbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgaXNTaWduaW5nT3V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBtZToge30sXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIFNJR05fT1VUX0ZBSUxVUkU6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGlzU2lnbmluZ091dDogZmFsc2UsXG4gICAgICAgICAgICB9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/user.js\n");

/***/ })

})