module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/ApiService.js":
/*!***************************!*\
  !*** ./api/ApiService.js ***!
  \***************************/
/*! exports provided: signin, signout, restaurantlist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signin\", function() { return signin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signout\", function() { return signout; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"restaurantlist\", function() { return restaurantlist; });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./api/config.js\");\n\n\nfunction call(api, method, data) {\n  let headers = new Headers({\n    \"Content-Type\": \"application/json\"\n  });\n  const accessToken = localStorage.getItem(\"ACCESS_TOKEN\");\n\n  if (accessToken && accessToken !== null) {\n    headers.append(\"Authorization\", \"Bearer \" + accessToken);\n  }\n\n  const options = {\n    headers: headers,\n    url: _config_js__WEBPACK_IMPORTED_MODULE_0__[\"API_BASE_URL\"] + api,\n    method: method\n  };\n\n  if (data) {\n    options.body = JSON.stringify(data);\n  }\n\n  return fetch(options.url, options).then(response => response.json().then(json => {\n    if (!response.ok) {\n      return Promise.reject(json);\n    }\n\n    return json;\n  }));\n}\n\nfunction signin(user) {\n  return call(\"/auth/signin\", \"POST\", user).then(response => {\n    console.log(\"response: \", response);\n\n    if (response.token) {\n      localStorage.setItem(\"ACCESS_TOKEN\", response.token);\n    }\n\n    return response;\n  });\n}\nfunction signout() {\n  localStorage.setItem(\"ACCESS_TOKEN\", null);\n}\nfunction restaurantlist() {\n  return call(\"/restaurant/list\", \"GET\", user).then(response => {\n    console.log(\"response: \", response);\n\n    if (response.token) {\n      localStorage.setItem(\"ACCESS_TOKEN\", response.token);\n    }\n\n    return response;\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcGkvQXBpU2VydmljZS5qcz8xNzQzIl0sIm5hbWVzIjpbImNhbGwiLCJhcGkiLCJtZXRob2QiLCJkYXRhIiwiaGVhZGVycyIsIkhlYWRlcnMiLCJhY2Nlc3NUb2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhcHBlbmQiLCJvcHRpb25zIiwidXJsIiwiQVBJX0JBU0VfVVJMIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJvayIsIlByb21pc2UiLCJyZWplY3QiLCJzaWduaW4iLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsInRva2VuIiwic2V0SXRlbSIsInNpZ25vdXQiLCJyZXN0YXVyYW50bGlzdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBLFNBQVNBLElBQVQsQ0FBY0MsR0FBZCxFQUFtQkMsTUFBbkIsRUFBMkJDLElBQTNCLEVBQWdDO0FBQzVCLE1BQUlDLE9BQU8sR0FBRyxJQUFJQyxPQUFKLENBQVk7QUFDdEIsb0JBQWU7QUFETyxHQUFaLENBQWQ7QUFJQSxRQUFNQyxXQUFXLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixjQUFyQixDQUFwQjs7QUFDQSxNQUFHRixXQUFXLElBQUlBLFdBQVcsS0FBSyxJQUFsQyxFQUF1QztBQUNuQ0YsV0FBTyxDQUFDSyxNQUFSLENBQWUsZUFBZixFQUFnQyxZQUFXSCxXQUEzQztBQUNIOztBQUVELFFBQU1JLE9BQU8sR0FBRztBQUNaTixXQUFPLEVBQUVBLE9BREc7QUFFWk8sT0FBRyxFQUFFQyx1REFBWSxHQUFHWCxHQUZSO0FBR1pDLFVBQU0sRUFBRUE7QUFISSxHQUFoQjs7QUFNQSxNQUFHQyxJQUFILEVBQVE7QUFDSk8sV0FBTyxDQUFDRyxJQUFSLEdBQWNDLElBQUksQ0FBQ0MsU0FBTCxDQUFlWixJQUFmLENBQWQ7QUFDSDs7QUFFRCxTQUFPYSxLQUFLLENBQUNOLE9BQU8sQ0FBQ0MsR0FBVCxFQUFjRCxPQUFkLENBQUwsQ0FBNEJPLElBQTVCLENBQWtDQyxRQUFELElBQ3BDQSxRQUFRLENBQUNDLElBQVQsR0FBZ0JGLElBQWhCLENBQXNCRSxJQUFELElBQVU7QUFDM0IsUUFBRyxDQUFDRCxRQUFRLENBQUNFLEVBQWIsRUFBaUI7QUFDYixhQUFPQyxPQUFPLENBQUNDLE1BQVIsQ0FBZUgsSUFBZixDQUFQO0FBQ0g7O0FBQ0QsV0FBT0EsSUFBUDtBQUNILEdBTEQsQ0FERyxDQUFQO0FBUUg7O0FBRU0sU0FBU0ksTUFBVCxDQUFnQkMsSUFBaEIsRUFBcUI7QUFDeEIsU0FBT3hCLElBQUksQ0FBQyxjQUFELEVBQWlCLE1BQWpCLEVBQXlCd0IsSUFBekIsQ0FBSixDQUNGUCxJQURFLENBQ0lDLFFBQUQsSUFBYztBQUNoQk8sV0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQlIsUUFBMUI7O0FBQ0EsUUFBR0EsUUFBUSxDQUFDUyxLQUFaLEVBQWtCO0FBQ2RwQixrQkFBWSxDQUFDcUIsT0FBYixDQUFxQixjQUFyQixFQUFxQ1YsUUFBUSxDQUFDUyxLQUE5QztBQUNIOztBQUNELFdBQU9ULFFBQVA7QUFDSCxHQVBFLENBQVA7QUFRSDtBQUVNLFNBQVNXLE9BQVQsR0FBbUI7QUFDdEJ0QixjQUFZLENBQUNxQixPQUFiLENBQXFCLGNBQXJCLEVBQXFDLElBQXJDO0FBQ0g7QUFFTSxTQUFTRSxjQUFULEdBQXlCO0FBQzVCLFNBQU85QixJQUFJLENBQUMsa0JBQUQsRUFBcUIsS0FBckIsRUFBNEJ3QixJQUE1QixDQUFKLENBQ0ZQLElBREUsQ0FDSUMsUUFBRCxJQUFjO0FBQ2hCTyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCUixRQUExQjs7QUFDQSxRQUFHQSxRQUFRLENBQUNTLEtBQVosRUFBa0I7QUFDZHBCLGtCQUFZLENBQUNxQixPQUFiLENBQXFCLGNBQXJCLEVBQXFDVixRQUFRLENBQUNTLEtBQTlDO0FBQ0g7O0FBQ0QsV0FBT1QsUUFBUDtBQUNILEdBUEUsQ0FBUDtBQVFIIiwiZmlsZSI6Ii4vYXBpL0FwaVNlcnZpY2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FQSV9CQVNFX1VSTH0gZnJvbSAnLi9jb25maWcuanMnO1xuXG5mdW5jdGlvbiBjYWxsKGFwaSwgbWV0aG9kLCBkYXRhKXtcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjpcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9KTtcblxuICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJBQ0NFU1NfVE9LRU5cIik7XG4gICAgaWYoYWNjZXNzVG9rZW4gJiYgYWNjZXNzVG9rZW4gIT09IG51bGwpe1xuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIiwgXCJCZWFyZXIgXCIrIGFjY2Vzc1Rva2VuKTtcbiAgICB9XG5cbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICB1cmw6IEFQSV9CQVNFX1VSTCArIGFwaSxcbiAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgfTtcblxuICAgIGlmKGRhdGEpe1xuICAgICAgICBvcHRpb25zLmJvZHk9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiBmZXRjaChvcHRpb25zLnVybCwgb3B0aW9ucykudGhlbigocmVzcG9uc2UpID0+XG4gICAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKChqc29uKSA9PiB7XG4gICAgICAgICAgICBpZighcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoanNvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ganNvbjtcbiAgICAgICAgfSlcbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbmluKHVzZXIpe1xuICAgIHJldHVybiBjYWxsKFwiL2F1dGgvc2lnbmluXCIsIFwiUE9TVFwiLCB1c2VyKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2U6IFwiLCByZXNwb25zZSk7XG4gICAgICAgICAgICBpZihyZXNwb25zZS50b2tlbil7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJBQ0NFU1NfVE9LRU5cIiwgcmVzcG9uc2UudG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25vdXQoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJBQ0NFU1NfVE9LRU5cIiwgbnVsbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXN0YXVyYW50bGlzdCgpe1xuICAgIHJldHVybiBjYWxsKFwiL3Jlc3RhdXJhbnQvbGlzdFwiLCBcIkdFVFwiLCB1c2VyKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2U6IFwiLCByZXNwb25zZSk7XG4gICAgICAgICAgICBpZihyZXNwb25zZS50b2tlbil7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJBQ0NFU1NfVE9LRU5cIiwgcmVzcG9uc2UudG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./api/ApiService.js\n");

/***/ }),

/***/ "./api/config.js":
/*!***********************!*\
  !*** ./api/config.js ***!
  \***********************/
/*! exports provided: API_BASE_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_BASE_URL\", function() { return API_BASE_URL; });\nconst backendHost = \"http://localhost:8080\";\nconst API_BASE_URL = `${backendHost}`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcGkvY29uZmlnLmpzPzk3MmEiXSwibmFtZXMiOlsiYmFja2VuZEhvc3QiLCJBUElfQkFTRV9VUkwiXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQSxNQUFNQSxXQUFXLEdBQUcsdUJBQXBCO0FBQ08sTUFBTUMsWUFBWSxHQUFJLEdBQUVELFdBQVksRUFBcEMiLCJmaWxlIjoiLi9hcGkvY29uZmlnLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBiYWNrZW5kSG9zdCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwXCI7XG5leHBvcnQgY29uc3QgQVBJX0JBU0VfVVJMID0gYCR7YmFja2VuZEhvc3R9YDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./api/config.js\n");

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9hbnRkL2Rpc3QvYW50ZC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/antd/dist/antd.css\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/configureStore */ \"./store/configureStore.js\");\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers */ \"./reducers/index.js\");\n/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sagas */ \"./sagas/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);\nvar _jsxFileName = \"/Users/bccard/Desktop/bccard-intern/client/pages/_app.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n //_app.js는 페이지들의 공통인 부분\n\nconst App = ({\n  Component\n}) => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Component, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }\n  }));\n};\n\nApp.propTypes = {\n  Component: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.elementType.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_6__[\"default\"].withRedux(App));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwid3JhcHBlciIsIndpdGhSZWR1eCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Q0FHQTs7QUFDQSxNQUFNQSxHQUFHLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBaUI7QUFFekIsU0FDSSxtRUFDSSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREo7QUFLSCxDQVBEOztBQVNBRCxHQUFHLENBQUNFLFNBQUosR0FBZ0I7QUFDWkQsV0FBUyxFQUFFRSxpREFBUyxDQUFDQyxXQUFWLENBQXNCQztBQURyQixDQUFoQjtBQUtlQyw0SEFBTyxDQUFDQyxTQUFSLENBQWtCUCxHQUFsQixDQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UsIGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnO1xuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgd3JhcHBlciBmcm9tIFwiLi4vc3RvcmUvY29uZmlndXJlU3RvcmVcIjtcblxuaW1wb3J0IHJlZHVjZXJzIGZyb20gJy4uL3JlZHVjZXJzJztcbmltcG9ydCByb290U2FnYSBmcm9tIFwiLi4vc2FnYXNcIjtcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG4vL19hcHAuanPripQg7Y6Y7J207KeA65Ok7J2YIOqzte2GteyduCDrtoDrtoRcbmNvbnN0IEFwcCA9ICh7Q29tcG9uZW50fSkgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxDb21wb25lbnQvPlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG5BcHAucHJvcFR5cGVzID0ge1xuICAgIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoQXBwKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ \"./reducers/user.js\");\n/* harmony import */ var _restaurant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./restaurant */ \"./reducers/restaurant.js\");\n\n\n\n\n\nconst rootReducer = (state, action) => {\n  switch (action.type) {\n    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__[\"HYDRATE\"]:\n      return action.payload;\n\n    default:\n      {\n        const combinedReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"combineReducers\"])({\n          user: _user__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n          restaurant: _restaurant__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n        });\n        return combinedReducer(state, action);\n      }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcz9jZThlIl0sIm5hbWVzIjpbInJvb3RSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiSFlEUkFURSIsInBheWxvYWQiLCJjb21iaW5lZFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJ1c2VyIiwicmVzdGF1cmFudCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxNQUFNQSxXQUFXLEdBQUcsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQ25DLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNJLFNBQUtDLDBEQUFMO0FBQ0ksYUFBT0YsTUFBTSxDQUFDRyxPQUFkOztBQUNKO0FBQVM7QUFDTCxjQUFNQyxlQUFlLEdBQUdDLDZEQUFlLENBQUM7QUFDcENDLDZEQURvQztBQUVwQ0MseUVBQVVBO0FBRjBCLFNBQUQsQ0FBdkM7QUFJQSxlQUFPSCxlQUFlLENBQUNMLEtBQUQsRUFBUUMsTUFBUixDQUF0QjtBQUNIO0FBVEw7QUFXSCxDQVpEOztBQWNlRiwwRUFBZiIsImZpbGUiOiIuL3JlZHVjZXJzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5cbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcic7XG5pbXBvcnQgcmVzdGF1cmFudCBmcm9tIFwiLi9yZXN0YXVyYW50XCI7XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgSFlEUkFURTpcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgY29uc3QgY29tYmluZWRSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICAgICAgICAgICAgICB1c2VyLFxuICAgICAgICAgICAgICAgIHJlc3RhdXJhbnRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGNvbWJpbmVkUmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/index.js\n");

/***/ }),

/***/ "./reducers/restaurant.js":
/*!********************************!*\
  !*** ./reducers/restaurant.js ***!
  \********************************/
/*! exports provided: initialState, RESTAURANT_LIST_REQUEST, RESTAURANT_LIST_SUCCESS, RESTAURANT_LIST_FAILURE, restaurantListRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RESTAURANT_LIST_REQUEST\", function() { return RESTAURANT_LIST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RESTAURANT_LIST_SUCCESS\", function() { return RESTAURANT_LIST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RESTAURANT_LIST_FAILURE\", function() { return RESTAURANT_LIST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"restaurantListRequestAction\", function() { return restaurantListRequestAction; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst initialState = {\n  restaurant: null // 음식점 정보\n\n}; // Action types\n\nconst RESTAURANT_LIST_REQUEST = 'RESTAURANT_LIST_REQUEST';\nconst RESTAURANT_LIST_SUCCESS = 'RESTAURANT_LIST_SUCCESS';\nconst RESTAURANT_LIST_FAILURE = 'RESTAURANT_LIST_FAILURE'; // Actions creators\n\nconst restaurantListRequestAction = data => ({\n  type: RESTAURANT_LIST_REQUEST\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = ((state = initialState, action) => {\n  const {\n    type,\n    payload,\n    error\n  } = action;\n  console.log(type, payload, error, '?');\n\n  switch (type) {\n    case RESTAURANT_LIST_REQUEST:\n      {\n        return _objectSpread({}, state);\n      }\n\n    case RESTAURANT_LIST_SUCCESS:\n      {\n        return _objectSpread({}, state);\n      }\n\n    case RESTAURANT_LIST_FAILURE:\n      {\n        return _objectSpread({}, state);\n      }\n\n    default:\n      return state;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9yZXN0YXVyYW50LmpzP2M3ZjUiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwicmVzdGF1cmFudCIsIlJFU1RBVVJBTlRfTElTVF9SRVFVRVNUIiwiUkVTVEFVUkFOVF9MSVNUX1NVQ0NFU1MiLCJSRVNUQVVSQU5UX0xJU1RfRkFJTFVSRSIsInJlc3RhdXJhbnRMaXN0UmVxdWVzdEFjdGlvbiIsImRhdGEiLCJ0eXBlIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBTyxNQUFNQSxZQUFZLEdBQUc7QUFDeEJDLFlBQVUsRUFBRSxJQURZLENBQ047O0FBRE0sQ0FBckIsQyxDQUlQOztBQUNPLE1BQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUNBLE1BQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUNBLE1BQU1DLHVCQUF1QixHQUFHLHlCQUFoQyxDLENBRVA7O0FBQ08sTUFBTUMsMkJBQTJCLEdBQUdDLElBQUksS0FBSztBQUNoREMsTUFBSSxFQUFFTDtBQUQwQyxDQUFMLENBQXhDO0FBSVEsZ0VBQUNNLEtBQUssR0FBR1IsWUFBVCxFQUF1QlMsTUFBdkIsS0FBa0M7QUFDN0MsUUFBTTtBQUFFRixRQUFGO0FBQVFHLFdBQVI7QUFBaUJDO0FBQWpCLE1BQTJCRixNQUFqQztBQUNBRyxTQUFPLENBQUNDLEdBQVIsQ0FBWU4sSUFBWixFQUFrQkcsT0FBbEIsRUFBMkJDLEtBQTNCLEVBQWlDLEdBQWpDOztBQUNBLFVBQVFKLElBQVI7QUFDSSxTQUFLTCx1QkFBTDtBQUE4QjtBQUMxQixpQ0FDT00sS0FEUDtBQUdIOztBQUNELFNBQUtMLHVCQUFMO0FBQThCO0FBQzFCLGlDQUNPSyxLQURQO0FBR0g7O0FBQ0QsU0FBS0osdUJBQUw7QUFBOEI7QUFDMUIsaUNBQ09JLEtBRFA7QUFHSDs7QUFDRjtBQUNLLGFBQU9BLEtBQVA7QUFqQlI7QUFtQkgsQ0F0QkQiLCJmaWxlIjoiLi9yZWR1Y2Vycy9yZXN0YXVyYW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICByZXN0YXVyYW50OiBudWxsLCAvLyDsnYzsi53soJAg7KCV67O0XG59O1xuXG4vLyBBY3Rpb24gdHlwZXNcbmV4cG9ydCBjb25zdCBSRVNUQVVSQU5UX0xJU1RfUkVRVUVTVCA9ICdSRVNUQVVSQU5UX0xJU1RfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgUkVTVEFVUkFOVF9MSVNUX1NVQ0NFU1MgPSAnUkVTVEFVUkFOVF9MSVNUX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IFJFU1RBVVJBTlRfTElTVF9GQUlMVVJFID0gJ1JFU1RBVVJBTlRfTElTVF9GQUlMVVJFJztcblxuLy8gQWN0aW9ucyBjcmVhdG9yc1xuZXhwb3J0IGNvbnN0IHJlc3RhdXJhbnRMaXN0UmVxdWVzdEFjdGlvbiA9IGRhdGEgPT4gKHtcbiAgICB0eXBlOiBSRVNUQVVSQU5UX0xJU1RfUkVRVUVTVCxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IHsgdHlwZSwgcGF5bG9hZCwgZXJyb3IgfSA9IGFjdGlvbjtcbiAgICBjb25zb2xlLmxvZyh0eXBlLCBwYXlsb2FkLCBlcnJvciwnPycpO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIFJFU1RBVVJBTlRfTElTVF9SRVFVRVNUOiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFJFU1RBVVJBTlRfTElTVF9TVUNDRVNTOiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFJFU1RBVVJBTlRfTElTVF9GQUlMVVJFOiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/restaurant.js\n");

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILURE, SIGN_OUT_REQUEST, SIGN_OUT_SUCCESS, SIGN_OUT_FAILURE, signUpRequestAction, signInRequestAction, SignOutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_UP_REQUEST\", function() { return SIGN_UP_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_UP_SUCCESS\", function() { return SIGN_UP_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_UP_FAILURE\", function() { return SIGN_UP_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_IN_REQUEST\", function() { return SIGN_IN_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_IN_SUCCESS\", function() { return SIGN_IN_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_IN_FAILURE\", function() { return SIGN_IN_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_OUT_REQUEST\", function() { return SIGN_OUT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_OUT_SUCCESS\", function() { return SIGN_OUT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_OUT_FAILURE\", function() { return SIGN_OUT_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signUpRequestAction\", function() { return signUpRequestAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signInRequestAction\", function() { return signInRequestAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SignOutRequestAction\", function() { return SignOutRequestAction; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst initialState = {\n  isSignedIn: false,\n  // 로그인 여부\n  isSigningOut: false,\n  // 로그아웃 시도중\n  isSigningIn: false,\n  // 로그인 시도중\n  signInErrorReason: '',\n  // 로그인 실패 사유\n  isSignedUp: false,\n  // 회원가입 성공\n  isSignIngUp: false,\n  // 회원가입 시도중\n  signUpErrorReason: '',\n  // 회원가입 실패 사유\n  me: null,\n  // 내 정보\n  followingList: [],\n  // 팔로잉 리스트\n  followerList: [] // 팔로워 리스트\n\n}; // Action types\n\nconst SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';\nconst SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';\nconst SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';\nconst SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';\nconst SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';\nconst SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';\nconst SIGN_OUT_REQUEST = 'SIGN_OUT_REQUEST';\nconst SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';\nconst SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE'; // Actions creators\n\nconst signUpRequestAction = data => ({\n  type: SIGN_UP_REQUEST,\n  payload: {\n    signUpData: data\n  }\n});\nconst signInRequestAction = data => {\n  return {\n    type: SIGN_IN_REQUEST,\n    payload: {\n      signInData: data\n    }\n  };\n};\nconst SignOutRequestAction = () => {\n  return {\n    type: SIGN_OUT_REQUEST\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((state = initialState, action) => {\n  const {\n    type,\n    payload,\n    error\n  } = action;\n  console.log(type, payload, error, '?');\n\n  switch (type) {\n    case SIGN_UP_REQUEST:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          isSignIngUp: true,\n          isSignedUp: false,\n          signUpErrorReason: ''\n        });\n      }\n\n    case SIGN_UP_SUCCESS:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          isSignIngUp: false,\n          isSignedUp: true\n        });\n      }\n\n    case SIGN_UP_FAILURE:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          isSignIngUp: false,\n          signUpErrorReason: error\n        });\n      }\n\n    case SIGN_IN_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isSigningIn: true,\n        signInErrorReason: ''\n      });\n\n    case SIGN_IN_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        me: payload,\n        isSigningIn: false,\n        isSignedIn: true,\n        isLoading: false\n      });\n\n    case SIGN_IN_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isSigningIn: false,\n        isSignedIn: false,\n        signInErrorReason: error,\n        me: null\n      });\n\n    case SIGN_OUT_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isSigningOut: true\n      });\n\n    case SIGN_OUT_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isSignedIn: false,\n        isSigningOut: false,\n        me: {}\n      });\n\n    case SIGN_OUT_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isSigningOut: false\n      });\n\n    default:\n      return state;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy91c2VyLmpzPzJjMDUiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiaXNTaWduZWRJbiIsImlzU2lnbmluZ091dCIsImlzU2lnbmluZ0luIiwic2lnbkluRXJyb3JSZWFzb24iLCJpc1NpZ25lZFVwIiwiaXNTaWduSW5nVXAiLCJzaWduVXBFcnJvclJlYXNvbiIsIm1lIiwiZm9sbG93aW5nTGlzdCIsImZvbGxvd2VyTGlzdCIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIlNJR05fSU5fUkVRVUVTVCIsIlNJR05fSU5fU1VDQ0VTUyIsIlNJR05fSU5fRkFJTFVSRSIsIlNJR05fT1VUX1JFUVVFU1QiLCJTSUdOX09VVF9TVUNDRVNTIiwiU0lHTl9PVVRfRkFJTFVSRSIsInNpZ25VcFJlcXVlc3RBY3Rpb24iLCJkYXRhIiwidHlwZSIsInBheWxvYWQiLCJzaWduVXBEYXRhIiwic2lnbkluUmVxdWVzdEFjdGlvbiIsInNpZ25JbkRhdGEiLCJTaWduT3V0UmVxdWVzdEFjdGlvbiIsInN0YXRlIiwiYWN0aW9uIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiaXNMb2FkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLE1BQU1BLFlBQVksR0FBRztBQUN4QkMsWUFBVSxFQUFFLEtBRFk7QUFDTDtBQUNuQkMsY0FBWSxFQUFFLEtBRlU7QUFFSDtBQUNyQkMsYUFBVyxFQUFFLEtBSFc7QUFHSjtBQUNwQkMsbUJBQWlCLEVBQUUsRUFKSztBQUlEO0FBQ3ZCQyxZQUFVLEVBQUUsS0FMWTtBQUtMO0FBQ25CQyxhQUFXLEVBQUUsS0FOVztBQU1KO0FBQ3BCQyxtQkFBaUIsRUFBRSxFQVBLO0FBT0Q7QUFDdkJDLElBQUUsRUFBRSxJQVJvQjtBQVFkO0FBQ1ZDLGVBQWEsRUFBRSxFQVRTO0FBU0w7QUFDbkJDLGNBQVksRUFBRSxFQVZVLENBVU47O0FBVk0sQ0FBckIsQyxDQWNQOztBQUNPLE1BQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUVBLE1BQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUVBLE1BQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHLGtCQUF6QixDLENBRVA7O0FBQ08sTUFBTUMsbUJBQW1CLEdBQUdDLElBQUksS0FBSztBQUN4Q0MsTUFBSSxFQUFFWCxlQURrQztBQUV4Q1ksU0FBTyxFQUFFO0FBQ0xDLGNBQVUsRUFBRUg7QUFEUDtBQUYrQixDQUFMLENBQWhDO0FBT0EsTUFBTUksbUJBQW1CLEdBQUdKLElBQUksSUFBSTtBQUN2QyxTQUFRO0FBQ1JDLFFBQUksRUFBRVIsZUFERTtBQUVSUyxXQUFPLEVBQUU7QUFDTEcsZ0JBQVUsRUFBRUw7QUFEUDtBQUZELEdBQVI7QUFLRCxDQU5JO0FBUUEsTUFBTU0sb0JBQW9CLEdBQUcsTUFBTTtBQUN0QyxTQUFRO0FBQ0lMLFFBQUksRUFBRUw7QUFEVixHQUFSO0FBR0gsQ0FKTTtBQU1RLGdFQUFDVyxLQUFLLEdBQUc1QixZQUFULEVBQXVCNkIsTUFBdkIsS0FBa0M7QUFDN0MsUUFBTTtBQUFFUCxRQUFGO0FBQVFDLFdBQVI7QUFBaUJPO0FBQWpCLE1BQTJCRCxNQUFqQztBQUNBRSxTQUFPLENBQUNDLEdBQVIsQ0FBWVYsSUFBWixFQUFrQkMsT0FBbEIsRUFBMkJPLEtBQTNCLEVBQWlDLEdBQWpDOztBQUNBLFVBQVFSLElBQVI7QUFDSSxTQUFLWCxlQUFMO0FBQXNCO0FBQ2xCLCtDQUNPaUIsS0FEUDtBQUVJdEIscUJBQVcsRUFBRSxJQUZqQjtBQUdJRCxvQkFBVSxFQUFFLEtBSGhCO0FBSUlFLDJCQUFpQixFQUFFO0FBSnZCO0FBTUg7O0FBQ0QsU0FBS0ssZUFBTDtBQUFzQjtBQUNsQiwrQ0FDT2dCLEtBRFA7QUFFSXRCLHFCQUFXLEVBQUUsS0FGakI7QUFHSUQsb0JBQVUsRUFBRTtBQUhoQjtBQUtIOztBQUNELFNBQUtRLGVBQUw7QUFBc0I7QUFDbEIsK0NBQ09lLEtBRFA7QUFFSXRCLHFCQUFXLEVBQUUsS0FGakI7QUFHSUMsMkJBQWlCLEVBQUV1QjtBQUh2QjtBQUtIOztBQUNELFNBQUtoQixlQUFMO0FBQ0ksNkNBQ09jLEtBRFA7QUFFSXpCLG1CQUFXLEVBQUUsSUFGakI7QUFHSUMseUJBQWlCLEVBQUU7QUFIdkI7O0FBS0osU0FBS1csZUFBTDtBQUNJLDZDQUNPYSxLQURQO0FBRUlwQixVQUFFLEVBQUNlLE9BRlA7QUFHSXBCLG1CQUFXLEVBQUUsS0FIakI7QUFJSUYsa0JBQVUsRUFBRSxJQUpoQjtBQUtJZ0MsaUJBQVMsRUFBRTtBQUxmOztBQU9KLFNBQUtqQixlQUFMO0FBQ0ksNkNBQ09ZLEtBRFA7QUFFSXpCLG1CQUFXLEVBQUUsS0FGakI7QUFHSUYsa0JBQVUsRUFBRSxLQUhoQjtBQUlJRyx5QkFBaUIsRUFBRTBCLEtBSnZCO0FBS0l0QixVQUFFLEVBQUU7QUFMUjs7QUFPSixTQUFLUyxnQkFBTDtBQUNJLDZDQUNPVyxLQURQO0FBRUkxQixvQkFBWSxFQUFFO0FBRmxCOztBQUlKLFNBQUtnQixnQkFBTDtBQUNJLDZDQUNPVSxLQURQO0FBRUkzQixrQkFBVSxFQUFFLEtBRmhCO0FBR0lDLG9CQUFZLEVBQUUsS0FIbEI7QUFJSU0sVUFBRSxFQUFFO0FBSlI7O0FBTUosU0FBS1csZ0JBQUw7QUFDSSw2Q0FDT1MsS0FEUDtBQUVJMUIsb0JBQVksRUFBRTtBQUZsQjs7QUFJSjtBQUNJLGFBQU8wQixLQUFQO0FBL0RSO0FBaUVILENBcEVEIiwiZmlsZSI6Ii4vcmVkdWNlcnMvdXNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgaXNTaWduZWRJbjogZmFsc2UsIC8vIOuhnOq3uOyduCDsl6zrtoBcbiAgICBpc1NpZ25pbmdPdXQ6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7Iuc64+E7KSRXG4gICAgaXNTaWduaW5nSW46IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+E7KSRXG4gICAgc2lnbkluRXJyb3JSZWFzb246ICcnLCAvLyDroZzqt7jsnbgg7Iuk7YyoIOyCrOycoFxuICAgIGlzU2lnbmVkVXA6IGZhbHNlLCAvLyDtmozsm5DqsIDsnoUg7ISx6rO1XG4gICAgaXNTaWduSW5nVXA6IGZhbHNlLCAvLyDtmozsm5DqsIDsnoUg7Iuc64+E7KSRXG4gICAgc2lnblVwRXJyb3JSZWFzb246ICcnLCAvLyDtmozsm5DqsIDsnoUg7Iuk7YyoIOyCrOycoFxuICAgIG1lOiBudWxsLCAvLyDrgrQg7KCV67O0XG4gICAgZm9sbG93aW5nTGlzdDogW10sIC8vIO2MlOuhnOyeiSDrpqzsiqTtirhcbiAgICBmb2xsb3dlckxpc3Q6IFtdLCAvLyDtjJTroZzsm4wg66as7Iqk7Yq4XG5cbn07XG5cbi8vIEFjdGlvbiB0eXBlc1xuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9ICdTSUdOX1VQX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9ICdTSUdOX1VQX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgU0lHTl9JTl9SRVFVRVNUID0gJ1NJR05fSU5fUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgU0lHTl9JTl9TVUNDRVNTID0gJ1NJR05fSU5fU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgU0lHTl9JTl9GQUlMVVJFID0gJ1NJR05fSU5fRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBTSUdOX09VVF9SRVFVRVNUID0gJ1NJR05fT1VUX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IFNJR05fT1VUX1NVQ0NFU1MgPSAnU0lHTl9PVVRfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgU0lHTl9PVVRfRkFJTFVSRSA9ICdTSUdOX09VVF9GQUlMVVJFJztcblxuLy8gQWN0aW9ucyBjcmVhdG9yc1xuZXhwb3J0IGNvbnN0IHNpZ25VcFJlcXVlc3RBY3Rpb24gPSBkYXRhID0+ICh7XG4gICAgdHlwZTogU0lHTl9VUF9SRVFVRVNULFxuICAgIHBheWxvYWQ6IHtcbiAgICAgICAgc2lnblVwRGF0YTogZGF0YSxcbiAgICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBzaWduSW5SZXF1ZXN0QWN0aW9uID0gZGF0YSA9PiB7XG4gICAgcmV0dXJuICh7XG4gICAgdHlwZTogU0lHTl9JTl9SRVFVRVNULFxuICAgIHBheWxvYWQ6IHtcbiAgICAgICAgc2lnbkluRGF0YTogZGF0YSxcbiAgICB9LFxufSl9O1xuXG5leHBvcnQgY29uc3QgU2lnbk91dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiB7XG4gICAgcmV0dXJuICh7XG4gICAgICAgICAgICAgICAgdHlwZTogU0lHTl9PVVRfUkVRVUVTVFxuICAgICAgICAgICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IHsgdHlwZSwgcGF5bG9hZCwgZXJyb3IgfSA9IGFjdGlvbjtcbiAgICBjb25zb2xlLmxvZyh0eXBlLCBwYXlsb2FkLCBlcnJvciwnPycpO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDoge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc1NpZ25JbmdVcDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpc1NpZ25lZFVwOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaWduVXBFcnJvclJlYXNvbjogJycsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGlzU2lnbkluZ1VwOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpc1NpZ25lZFVwOiB0cnVlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRToge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc1NpZ25JbmdVcDogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2lnblVwRXJyb3JSZWFzb246IGVycm9yLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFNJR05fSU5fUkVRVUVTVDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgaXNTaWduaW5nSW46IHRydWUsXG4gICAgICAgICAgICAgICAgc2lnbkluRXJyb3JSZWFzb246ICcnLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBTSUdOX0lOX1NVQ0NFU1M6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIG1lOnBheWxvYWQsXG4gICAgICAgICAgICAgICAgaXNTaWduaW5nSW46IGZhbHNlLFxuICAgICAgICAgICAgICAgIGlzU2lnbmVkSW46IHRydWUsXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgU0lHTl9JTl9GQUlMVVJFOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc1NpZ25pbmdJbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgaXNTaWduZWRJbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2lnbkluRXJyb3JSZWFzb246IGVycm9yLFxuICAgICAgICAgICAgICAgIG1lOiBudWxsLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBTSUdOX09VVF9SRVFVRVNUOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc1NpZ25pbmdPdXQ6IHRydWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIFNJR05fT1VUX1NVQ0NFU1M6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGlzU2lnbmVkSW46IGZhbHNlLFxuICAgICAgICAgICAgICAgIGlzU2lnbmluZ091dDogZmFsc2UsXG4gICAgICAgICAgICAgICAgbWU6IHt9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBTSUdOX09VVF9GQUlMVVJFOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc1NpZ25pbmdPdXQ6IGZhbHNlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/user.js\n");

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return rootSaga; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ \"./sagas/user.js\");\n\n\nfunction* rootSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(_user__WEBPACK_IMPORTED_MODULE_1__[\"default\"])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYWdhcy9pbmRleC5qcz83N2UzIl0sIm5hbWVzIjpbInJvb3RTYWdhIiwiYWxsIiwiZm9yayIsInVzZXJTYWdhIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVlLFVBQVVBLFFBQVYsR0FBb0I7QUFDL0IsUUFBTUMsOERBQUcsQ0FBQyxDQUNOQywrREFBSSxDQUFDQyw2Q0FBRCxDQURFLENBQUQsQ0FBVDtBQUdIIiwiZmlsZSI6Ii4vc2FnYXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2FsbCwgZm9ya30gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcblxuaW1wb3J0IHVzZXJTYWdhIGZyb20gJy4vdXNlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpe1xuICAgIHlpZWxkIGFsbChbXG4gICAgICAgIGZvcmsodXNlclNhZ2EpLFxuICAgIF0pXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sagas/index.js\n");

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return userSaga; });\n/* harmony import */ var _api_ApiService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/ApiService */ \"./api/ApiService.js\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n\n\n\n\nconst initialState = {\n  user: null,\n  signInLoading: false,\n  signInSucceed: false,\n  signInError: null\n};\n\nfunction signInAPI(data) {\n  return Object(_api_ApiService__WEBPACK_IMPORTED_MODULE_0__[\"signin\"])(data);\n}\n\nfunction* signIn({\n  payload\n}) {\n  try {\n    const {\n      signInData\n    } = payload;\n    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"call\"])(signInAPI, signInData);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n      //put -> dispatch와 동일\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"SIGN_IN_SUCCESS\"],\n      payload: result\n    });\n  } catch (err) {\n    console.log(err);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"SIGN_IN_FAILURE\"],\n      error: err.response.data\n    });\n  }\n}\n\nfunction signOutAPI() {// return signout();\n}\n\nfunction* signOut() {\n  try {\n    // const result = yield call(logOutAPI);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"delay\"])(1000);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"SIGN_OUT_SUCCESS\"]\n    });\n  } catch (err) {\n    console.error(err);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"SIGN_OUT_FAILURE\"],\n      error: err.response.data\n    });\n  }\n}\n\nfunction* watchSignIn() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeEvery\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"SIGN_IN_REQUEST\"], signIn); // yield takeEvery(actions.SIGN_OUT_REQUEST, signOut);\n}\n\nfunction* userSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchSignIn) // fork(watchSignUp),\n  ]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzP2EzODYiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwidXNlciIsInNpZ25JbkxvYWRpbmciLCJzaWduSW5TdWNjZWVkIiwic2lnbkluRXJyb3IiLCJzaWduSW5BUEkiLCJkYXRhIiwic2lnbmluIiwic2lnbkluIiwicGF5bG9hZCIsInNpZ25JbkRhdGEiLCJyZXN1bHQiLCJjYWxsIiwicHV0IiwidHlwZSIsIlNJR05fSU5fU1VDQ0VTUyIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJTSUdOX0lOX0ZBSUxVUkUiLCJlcnJvciIsInJlc3BvbnNlIiwic2lnbk91dEFQSSIsInNpZ25PdXQiLCJkZWxheSIsIlNJR05fT1VUX1NVQ0NFU1MiLCJTSUdOX09VVF9GQUlMVVJFIiwid2F0Y2hTaWduSW4iLCJ0YWtlRXZlcnkiLCJhY3Rpb25zIiwidXNlclNhZ2EiLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sTUFBTUEsWUFBWSxHQUFHO0FBQ3hCQyxNQUFJLEVBQUUsSUFEa0I7QUFFeEJDLGVBQWEsRUFBRSxLQUZTO0FBR3hCQyxlQUFhLEVBQUUsS0FIUztBQUl4QkMsYUFBVyxFQUFFO0FBSlcsQ0FBckI7O0FBT1AsU0FBU0MsU0FBVCxDQUFtQkMsSUFBbkIsRUFBeUI7QUFDckIsU0FBT0MsOERBQU0sQ0FBQ0QsSUFBRCxDQUFiO0FBQ0g7O0FBRUQsVUFBVUUsTUFBVixDQUFpQjtBQUFDQztBQUFELENBQWpCLEVBQTRCO0FBQ3hCLE1BQUk7QUFDQSxVQUFNO0FBQUNDO0FBQUQsUUFBZUQsT0FBckI7QUFDQSxVQUFNRSxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ1AsU0FBRCxFQUFZSyxVQUFaLENBQXpCO0FBRUEsVUFBTUcsOERBQUcsQ0FBQztBQUFFO0FBQ1JDLFVBQUksRUFBRUMsOERBREE7QUFFTk4sYUFBTyxFQUFFRTtBQUZILEtBQUQsQ0FBVDtBQUtILEdBVEQsQ0FTRSxPQUFPSyxHQUFQLEVBQVk7QUFDVkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDQSxVQUFNSCw4REFBRyxDQUFDO0FBQ05DLFVBQUksRUFBRUssOERBREE7QUFFTkMsV0FBSyxFQUFFSixHQUFHLENBQUNLLFFBQUosQ0FBYWY7QUFGZCxLQUFELENBQVQ7QUFJSDtBQUNKOztBQUVELFNBQVNnQixVQUFULEdBQXNCLENBQ2xCO0FBQ0g7O0FBRUQsVUFBVUMsT0FBVixHQUFvQjtBQUNoQixNQUFJO0FBQ0E7QUFDQSxVQUFNQyxnRUFBSyxDQUFDLElBQUQsQ0FBWDtBQUNBLFVBQU1YLDhEQUFHLENBQUM7QUFDTkMsVUFBSSxFQUFFVywrREFBZ0JBO0FBRGhCLEtBQUQsQ0FBVDtBQUdILEdBTkQsQ0FNRSxPQUFPVCxHQUFQLEVBQVk7QUFDVkMsV0FBTyxDQUFDRyxLQUFSLENBQWNKLEdBQWQ7QUFDQSxVQUFNSCw4REFBRyxDQUFDO0FBQ05DLFVBQUksRUFBRVksK0RBREE7QUFFTk4sV0FBSyxFQUFFSixHQUFHLENBQUNLLFFBQUosQ0FBYWY7QUFGZCxLQUFELENBQVQ7QUFJSDtBQUNKOztBQUdELFVBQVVxQixXQUFWLEdBQXdCO0FBQ3BCLFFBQU1DLG9FQUFTLENBQUNDLDhEQUFELEVBQTBCckIsTUFBMUIsQ0FBZixDQURvQixDQUVwQjtBQUNIOztBQUVjLFVBQVVzQixRQUFWLEdBQXFCO0FBQ2hDLFFBQU1DLDhEQUFHLENBQUMsQ0FDTkMsK0RBQUksQ0FBQ0wsV0FBRCxDQURFLENBRU47QUFGTSxHQUFELENBQVQ7QUFJSCIsImZpbGUiOiIuL3NhZ2FzL3VzZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3NpZ25pbn0gZnJvbSAnLi4vYXBpL0FwaVNlcnZpY2UnO1xuaW1wb3J0IHsgYWxsLCBmb3JrLCB0YWtlRXZlcnksIGNhbGwsIHB1dCwgZGVsYXkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcbmltcG9ydCB7U0lHTl9JTl9GQUlMVVJFLCBTSUdOX0lOX1NVQ0NFU1MsIFNJR05fT1VUX0ZBSUxVUkUsIFNJR05fT1VUX1NVQ0NFU1N9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgdXNlcjogbnVsbCxcbiAgICBzaWduSW5Mb2FkaW5nOiBmYWxzZSxcbiAgICBzaWduSW5TdWNjZWVkOiBmYWxzZSxcbiAgICBzaWduSW5FcnJvcjogbnVsbFxufVxuXG5mdW5jdGlvbiBzaWduSW5BUEkoZGF0YSkge1xuICAgIHJldHVybiBzaWduaW4oZGF0YSk7XG59XG5cbmZ1bmN0aW9uKiBzaWduSW4oe3BheWxvYWR9KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qge3NpZ25JbkRhdGF9ID0gcGF5bG9hZDtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzaWduSW5BUEksIHNpZ25JbkRhdGEpO1xuXG4gICAgICAgIHlpZWxkIHB1dCh7IC8vcHV0IC0+IGRpc3BhdGNo7JmAIOuPmeydvFxuICAgICAgICAgICAgdHlwZTogU0lHTl9JTl9TVUNDRVNTLFxuICAgICAgICAgICAgcGF5bG9hZDogcmVzdWx0LFxuICAgICAgICB9KTtcblxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB5aWVsZCBwdXQoe1xuICAgICAgICAgICAgdHlwZTogU0lHTl9JTl9GQUlMVVJFLFxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNpZ25PdXRBUEkoKSB7XG4gICAgLy8gcmV0dXJuIHNpZ25vdXQoKTtcbn1cblxuZnVuY3Rpb24qIHNpZ25PdXQoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dPdXRBUEkpO1xuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcbiAgICAgICAgeWllbGQgcHV0KHtcbiAgICAgICAgICAgIHR5cGU6IFNJR05fT1VUX1NVQ0NFU1MsXG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIHlpZWxkIHB1dCh7XG4gICAgICAgICAgICB0eXBlOiBTSUdOX09VVF9GQUlMVVJFLFxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuZnVuY3Rpb24qIHdhdGNoU2lnbkluKCkge1xuICAgIHlpZWxkIHRha2VFdmVyeShhY3Rpb25zLlNJR05fSU5fUkVRVUVTVCwgc2lnbkluKTtcbiAgICAvLyB5aWVsZCB0YWtlRXZlcnkoYWN0aW9ucy5TSUdOX09VVF9SRVFVRVNULCBzaWduT3V0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xuICAgIHlpZWxkIGFsbChbXG4gICAgICAgIGZvcmsod2F0Y2hTaWduSW4pLFxuICAgICAgICAvLyBmb3JrKHdhdGNoU2lnblVwKSxcbiAgICBdKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sagas/user.js\n");

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ \"./reducers/index.js\");\n/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ \"./sagas/index.js\");\n\n\n\n\n\n\n\nconst configureStore = context => {\n  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_3___default()();\n  const middlewares = [sagaMiddleware];\n  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__[\"composeWithDevTools\"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(...middlewares));\n  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_4__[\"default\"], enhancer);\n  sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n  return store;\n};\n\nconst wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__[\"createWrapper\"])(configureStore, {\n  debug: true\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (wrapper);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcz8wMTA5Il0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwiY29udGV4dCIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwicmVkdWNlciIsInJ1biIsInJvb3RTYWdhIiwid3JhcHBlciIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxNQUFNQSxjQUFjLEdBQUlDLE9BQUQsSUFBYTtBQUNoQyxRQUFNQyxjQUFjLEdBQUdDLGlEQUFvQixFQUEzQztBQUNBLFFBQU1DLFdBQVcsR0FBRyxDQUFDRixjQUFELENBQXBCO0FBQ0EsUUFBTUcsUUFBUSxHQUFHLFFBQ1hDLFNBRFcsR0FFWEMsb0ZBQW1CLENBQ2pCQyw2REFBZSxDQUFDLEdBQUdKLFdBQUosQ0FERSxDQUZ6QjtBQUtBLFFBQU1LLEtBQUssR0FBR0MseURBQVcsQ0FBQ0MsaURBQUQsRUFBVU4sUUFBVixDQUF6QjtBQUNBSCxnQkFBYyxDQUFDVSxHQUFmLENBQW1CQyw4Q0FBbkI7QUFFQSxTQUFPSixLQUFQO0FBQ0gsQ0FaRDs7QUFjQSxNQUFNSyxPQUFPLEdBQUdDLHdFQUFhLENBQUNmLGNBQUQsRUFBaUI7QUFBRWdCLE9BQUs7QUFBUCxDQUFqQixDQUE3QjtBQUVlRixzRUFBZiIsImZpbGUiOiIuL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XG5cbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcbmltcG9ydCByb290U2FnYSBmcm9tIFwiLi4vc2FnYXNcIjtcblxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcbiAgICBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZV07XG4gICAgY29uc3QgZW5oYW5jZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXG4gICAgICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxuICAgICAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoXG4gICAgICAgICAgICBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpLFxuICAgICAgICApO1xuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpO1xuICAgIHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XG5cbiAgICByZXR1cm4gc3RvcmU7XG59O1xuXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwgeyBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/configureStore.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-wrapper\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIj8wMWMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtcmVkdXgtd3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-redux-wrapper\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIj81YWE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LWRldnRvb2xzLWV4dGVuc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-devtools-extension\n");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCI/Mzg3YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWR1eC1zYWdhLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-saga\n");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga/effects\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIj80MGI3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LXNhZ2EvZWZmZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-saga/effects\n");

/***/ })

/******/ });