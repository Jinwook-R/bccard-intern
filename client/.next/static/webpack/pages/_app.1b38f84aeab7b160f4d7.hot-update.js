webpackHotUpdate_N_E("pages/_app",{

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

/***/ "./node_modules/redux-persist/lib/storage/createWebStorage.js":
false,

/***/ "./node_modules/redux-persist/lib/storage/getStorage.js":
false,

/***/ "./node_modules/redux-persist/lib/storage/index.js":
false,

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"./node_modules/next-redux-wrapper/es6/index.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ \"./reducers/user.js\");\n/* harmony import */ var _restaurant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./restaurant */ \"./reducers/restaurant.js\");\n/* harmony import */ var _review__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./review */ \"./reducers/review.js\");\n\n\n\n\n\n\nvar rootReducer = function rootReducer(state, action) {\n  switch (action.type) {\n    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__[\"HYDRATE\"]:\n      return action.payload;\n\n    default:\n      {\n        var combinedReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"combineReducers\"])({\n          user: _user__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n          restaurant: _restaurant__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n          review: _review__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n        });\n        return combinedReducer(state, action);\n      }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (persistReducer(persistConfig, rootReducer));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvaW5kZXguanM/Y2U4ZSJdLCJuYW1lcyI6WyJyb290UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkhZRFJBVEUiLCJwYXlsb2FkIiwiY29tYmluZWRSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwidXNlciIsInJlc3RhdXJhbnQiLCJyZXZpZXciLCJwZXJzaXN0UmVkdWNlciIsInBlcnNpc3RDb25maWciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ25DLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNJLFNBQUtDLDBEQUFMO0FBQ0ksYUFBT0YsTUFBTSxDQUFDRyxPQUFkOztBQUNKO0FBQVM7QUFDTCxZQUFNQyxlQUFlLEdBQUdDLDZEQUFlLENBQUM7QUFDcENDLGNBQUksRUFBSkEsNkNBRG9DO0FBRXBDQyxvQkFBVSxFQUFWQSxtREFGb0M7QUFHcENDLGdCQUFNLEVBQU5BLCtDQUFNQTtBQUg4QixTQUFELENBQXZDO0FBS0EsZUFBT0osZUFBZSxDQUFDTCxLQUFELEVBQVFDLE1BQVIsQ0FBdEI7QUFDSDtBQVZMO0FBWUgsQ0FiRDs7QUFlZVMsNkVBQWMsQ0FBQ0MsYUFBRCxFQUFnQlosV0FBaEIsQ0FBN0IiLCJmaWxlIjoiLi9yZWR1Y2Vycy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInO1xuaW1wb3J0IHJlc3RhdXJhbnQgZnJvbSBcIi4vcmVzdGF1cmFudFwiO1xuaW1wb3J0IHJldmlldyBmcm9tICcuL3Jldmlldyc7XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgSFlEUkFURTpcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgY29uc3QgY29tYmluZWRSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICAgICAgICAgICAgICB1c2VyLFxuICAgICAgICAgICAgICAgIHJlc3RhdXJhbnQsXG4gICAgICAgICAgICAgICAgcmV2aWV3XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBjb21iaW5lZFJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwZXJzaXN0UmVkdWNlcihwZXJzaXN0Q29uZmlnLCByb290UmVkdWNlcik7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/index.js\n");

/***/ })

})