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
/*! exports provided: signin, signout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signin\", function() { return signin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signout\", function() { return signout; });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./api/config.js\");\n\n\nfunction call(api, method, data) {\n  let headers = new Headers({\n    \"Content-Type\": \"application/json\"\n  });\n  const accessToken = localStorage.getItem(\"ACCESS_TOKEN\");\n\n  if (accessToken && accessToken !== null) {\n    headers.append(\"Authorization\", \"Bearer \" + accessToken);\n  }\n\n  const options = {\n    headers: headers,\n    url: _config_js__WEBPACK_IMPORTED_MODULE_0__[\"API_BASE_URL\"] + api,\n    method: method\n  };\n\n  if (data) {\n    options.body = JSON.stringify(data);\n  }\n\n  return fetch(options.url, options).then(response => response.json().then(json => {\n    if (!response.ok) {\n      return Promise.reject(json);\n    }\n\n    return json;\n  }));\n}\n\nfunction signin(user) {\n  return call(\"/auth/signin\", \"POST\", user).then(response => {\n    console.log(\"response: \", response);\n\n    if (response.token) {\n      localStorage.setItem(\"ACCESS_TOKEN\", response.token);\n    }\n\n    return response;\n  });\n}\nfunction signout() {\n  localStorage.setItem(\"ACCESS_TOKEN\", null);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcGkvQXBpU2VydmljZS5qcz8xNzQzIl0sIm5hbWVzIjpbImNhbGwiLCJhcGkiLCJtZXRob2QiLCJkYXRhIiwiaGVhZGVycyIsIkhlYWRlcnMiLCJhY2Nlc3NUb2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhcHBlbmQiLCJvcHRpb25zIiwidXJsIiwiQVBJX0JBU0VfVVJMIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJvayIsIlByb21pc2UiLCJyZWplY3QiLCJzaWduaW4iLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsInRva2VuIiwic2V0SXRlbSIsInNpZ25vdXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUEsU0FBU0EsSUFBVCxDQUFjQyxHQUFkLEVBQW1CQyxNQUFuQixFQUEyQkMsSUFBM0IsRUFBZ0M7QUFDNUIsTUFBSUMsT0FBTyxHQUFHLElBQUlDLE9BQUosQ0FBWTtBQUN0QixvQkFBZTtBQURPLEdBQVosQ0FBZDtBQUlBLFFBQU1DLFdBQVcsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGNBQXJCLENBQXBCOztBQUNBLE1BQUdGLFdBQVcsSUFBSUEsV0FBVyxLQUFLLElBQWxDLEVBQXVDO0FBQ25DRixXQUFPLENBQUNLLE1BQVIsQ0FBZSxlQUFmLEVBQWdDLFlBQVdILFdBQTNDO0FBQ0g7O0FBRUQsUUFBTUksT0FBTyxHQUFHO0FBQ1pOLFdBQU8sRUFBRUEsT0FERztBQUVaTyxPQUFHLEVBQUVDLHVEQUFZLEdBQUdYLEdBRlI7QUFHWkMsVUFBTSxFQUFFQTtBQUhJLEdBQWhCOztBQU1BLE1BQUdDLElBQUgsRUFBUTtBQUNKTyxXQUFPLENBQUNHLElBQVIsR0FBY0MsSUFBSSxDQUFDQyxTQUFMLENBQWVaLElBQWYsQ0FBZDtBQUNIOztBQUVELFNBQU9hLEtBQUssQ0FBQ04sT0FBTyxDQUFDQyxHQUFULEVBQWNELE9BQWQsQ0FBTCxDQUE0Qk8sSUFBNUIsQ0FBa0NDLFFBQUQsSUFDcENBLFFBQVEsQ0FBQ0MsSUFBVCxHQUFnQkYsSUFBaEIsQ0FBc0JFLElBQUQsSUFBVTtBQUMzQixRQUFHLENBQUNELFFBQVEsQ0FBQ0UsRUFBYixFQUFpQjtBQUNiLGFBQU9DLE9BQU8sQ0FBQ0MsTUFBUixDQUFlSCxJQUFmLENBQVA7QUFDSDs7QUFDRCxXQUFPQSxJQUFQO0FBQ0gsR0FMRCxDQURHLENBQVA7QUFRSDs7QUFFTSxTQUFTSSxNQUFULENBQWdCQyxJQUFoQixFQUFxQjtBQUV4QixTQUFPeEIsSUFBSSxDQUFDLGNBQUQsRUFBaUIsTUFBakIsRUFBeUJ3QixJQUF6QixDQUFKLENBQ0ZQLElBREUsQ0FDSUMsUUFBRCxJQUFjO0FBQ2hCTyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCUixRQUExQjs7QUFDQSxRQUFHQSxRQUFRLENBQUNTLEtBQVosRUFBa0I7QUFDZHBCLGtCQUFZLENBQUNxQixPQUFiLENBQXFCLGNBQXJCLEVBQXFDVixRQUFRLENBQUNTLEtBQTlDO0FBQ0g7O0FBQ0QsV0FBT1QsUUFBUDtBQUNILEdBUEUsQ0FBUDtBQVFIO0FBRU0sU0FBU1csT0FBVCxHQUFtQjtBQUN0QnRCLGNBQVksQ0FBQ3FCLE9BQWIsQ0FBcUIsY0FBckIsRUFBcUMsSUFBckM7QUFDSCIsImZpbGUiOiIuL2FwaS9BcGlTZXJ2aWNlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBUElfQkFTRV9VUkx9IGZyb20gJy4vY29uZmlnLmpzJztcblxuZnVuY3Rpb24gY2FsbChhcGksIG1ldGhvZCwgZGF0YSl7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6XCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSk7XG5cbiAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiQUNDRVNTX1RPS0VOXCIpO1xuICAgIGlmKGFjY2Vzc1Rva2VuICYmIGFjY2Vzc1Rva2VuICE9PSBudWxsKXtcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJBdXRob3JpemF0aW9uXCIsIFwiQmVhcmVyIFwiKyBhY2Nlc3NUb2tlbik7XG4gICAgfVxuXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgdXJsOiBBUElfQkFTRV9VUkwgKyBhcGksXG4gICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgIH07XG5cbiAgICBpZihkYXRhKXtcbiAgICAgICAgb3B0aW9ucy5ib2R5PSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmV0Y2gob3B0aW9ucy51cmwsIG9wdGlvbnMpLnRoZW4oKHJlc3BvbnNlKSA9PlxuICAgICAgICByZXNwb25zZS5qc29uKCkudGhlbigoanNvbikgPT4ge1xuICAgICAgICAgICAgaWYoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGpzb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGpzb247XG4gICAgICAgIH0pXG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25pbih1c2VyKXtcblxuICAgIHJldHVybiBjYWxsKFwiL2F1dGgvc2lnbmluXCIsIFwiUE9TVFwiLCB1c2VyKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2U6IFwiLCByZXNwb25zZSk7XG4gICAgICAgICAgICBpZihyZXNwb25zZS50b2tlbil7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJBQ0NFU1NfVE9LRU5cIiwgcmVzcG9uc2UudG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25vdXQoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJBQ0NFU1NfVE9LRU5cIiwgbnVsbCk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./api/ApiService.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/configureStore */ \"./store/configureStore.js\");\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers */ \"./reducers/index.js\");\n/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sagas */ \"./sagas/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);\nvar _jsxFileName = \"/Users/jin/Desktop/bccard-intern/client/pages/_app.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n //_app.js는 페이지들의 공통인 부분\n\nconst App = ({\n  Component\n}) => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }\n  }, __jsx(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 17\n    }\n  }, \"BC\\uB85C\")), __jsx(Component, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }\n  }));\n};\n\nApp.propTypes = {\n  Component: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.elementType.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_6__[\"default\"].withRedux(App));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwid3JhcHBlciIsIndpdGhSZWR1eCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Q0FHQTs7QUFDQSxNQUFNQSxHQUFHLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBaUI7QUFFekIsU0FDSSxtRUFDSSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLENBREosRUFJSSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLENBREo7QUFRSCxDQVZEOztBQVlBRCxHQUFHLENBQUNFLFNBQUosR0FBZ0I7QUFDWkQsV0FBUyxFQUFFRSxpREFBUyxDQUFDQyxXQUFWLENBQXNCQztBQURyQixDQUFoQjtBQUtlQyw0SEFBTyxDQUFDQyxTQUFSLENBQWtCUCxHQUFsQixDQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UsIGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnO1xuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgd3JhcHBlciBmcm9tIFwiLi4vc3RvcmUvY29uZmlndXJlU3RvcmVcIjtcblxuaW1wb3J0IHJlZHVjZXJzIGZyb20gJy4uL3JlZHVjZXJzJztcbmltcG9ydCByb290U2FnYSBmcm9tIFwiLi4vc2FnYXNcIjtcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG4vL19hcHAuanPripQg7Y6Y7J207KeA65Ok7J2YIOqzte2GteyduCDrtoDrtoRcbmNvbnN0IEFwcCA9ICh7Q29tcG9uZW50fSkgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5CQ+uhnDwvdGl0bGU+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8Q29tcG9uZW50Lz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuQXBwLnByb3BUeXBlcyA9IHtcbiAgICBDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KEFwcCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ \"./reducers/user.js\");\n\n\n\n\nconst rootReducer = (state, action) => {\n  switch (action.type) {\n    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__[\"HYDRATE\"]:\n      return action.payload;\n\n    default:\n      {\n        const combinedReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"combineReducers\"])({\n          user: _user__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n        });\n        return combinedReducer(state, action);\n      }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcz9jZThlIl0sIm5hbWVzIjpbInJvb3RSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiSFlEUkFURSIsInBheWxvYWQiLCJjb21iaW5lZFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJ1c2VyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7O0FBRUEsTUFBTUEsV0FBVyxHQUFHLENBQUNDLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUNuQyxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDSSxTQUFLQywwREFBTDtBQUNJLGFBQU9GLE1BQU0sQ0FBQ0csT0FBZDs7QUFDSjtBQUFTO0FBQ0wsY0FBTUMsZUFBZSxHQUFHQyw2REFBZSxDQUFDO0FBQ3BDQyw2REFBSUE7QUFEZ0MsU0FBRCxDQUF2QztBQUdBLGVBQU9GLGVBQWUsQ0FBQ0wsS0FBRCxFQUFRQyxNQUFSLENBQXRCO0FBQ0g7QUFSTDtBQVVILENBWEQ7O0FBYWVGLDBFQUFmIiwiZmlsZSI6Ii4vcmVkdWNlcnMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcblxuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJztcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBIWURSQVRFOlxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICBjb25zdCBjb21iaW5lZFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgICAgICAgICAgICAgIHVzZXJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGNvbWJpbmVkUmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/index.js\n");

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILURE, SIGN_OUT_REQUEST, SIGN_OUT_SUCCESS, SIGN_OUT_FAILURE, signUpRequestAction, signInRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_UP_REQUEST\", function() { return SIGN_UP_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_UP_SUCCESS\", function() { return SIGN_UP_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_UP_FAILURE\", function() { return SIGN_UP_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_IN_REQUEST\", function() { return SIGN_IN_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_IN_SUCCESS\", function() { return SIGN_IN_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_IN_FAILURE\", function() { return SIGN_IN_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_OUT_REQUEST\", function() { return SIGN_OUT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_OUT_SUCCESS\", function() { return SIGN_OUT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_OUT_FAILURE\", function() { return SIGN_OUT_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signUpRequestAction\", function() { return signUpRequestAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signInRequestAction\", function() { return signInRequestAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logoutRequestAction\", function() { return logoutRequestAction; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst initialState = {\n  isSignedIn: false,\n  // 로그인 여부\n  isSigningOut: false,\n  // 로그아웃 시도중\n  isSigningIn: false,\n  // 로그인 시도중\n  signInErrorReason: '',\n  // 로그인 실패 사유\n  isSignedUp: false,\n  // 회원가입 성공\n  isSignIngUp: false,\n  // 회원가입 시도중\n  signUpErrorReason: '',\n  // 회원가입 실패 사유\n  me: null,\n  // 내 정보\n  followingList: [],\n  // 팔로잉 리스트\n  followerList: [] // 팔로워 리스트\n\n}; // Action types\n\nconst SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';\nconst SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';\nconst SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';\nconst SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';\nconst SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';\nconst SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';\nconst SIGN_OUT_REQUEST = 'SIGN_OUT_REQUEST';\nconst SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';\nconst SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE'; // Actions creators\n\nconst signUpRequestAction = data => ({\n  type: SIGN_UP_REQUEST,\n  payload: {\n    signUpData: data\n  }\n});\nconst signInRequestAction = data => {\n  return {\n    type: SIGN_IN_REQUEST,\n    payload: {\n      signInData: data\n    }\n  };\n};\nconst logoutRequestAction = () => ({\n  type: SIGN_OUT_REQUEST\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = ((state = initialState, action) => {\n  const {\n    type,\n    payload,\n    error\n  } = action;\n  console.log(type, payload, error, '?');\n\n  switch (type) {\n    case SIGN_UP_REQUEST:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          isSignIngUp: true,\n          isSignedUp: false,\n          signUpErrorReason: ''\n        });\n      }\n\n    case SIGN_UP_SUCCESS:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          isSignIngUp: false,\n          isSignedUp: true\n        });\n      }\n\n    case SIGN_UP_FAILURE:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          isSignIngUp: false,\n          signUpErrorReason: error\n        });\n      }\n\n    case SIGN_IN_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isSigningIn: true,\n        signInErrorReason: ''\n      });\n\n    case SIGN_IN_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        me: payload,\n        isSigningIn: false,\n        isSignedIn: true,\n        isLoading: false\n      });\n\n    case SIGN_IN_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isSigningIn: false,\n        isSignedIn: false,\n        signInErrorReason: error,\n        me: null\n      });\n\n    case SIGN_OUT_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isSigningOut: true\n      });\n\n    case SIGN_OUT_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isSignedIn: false,\n        isSigningOut: false,\n        me: {}\n      });\n\n    case SIGN_OUT_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isSigningOut: false\n      });\n\n    default:\n      return state;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy91c2VyLmpzPzJjMDUiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiaXNTaWduZWRJbiIsImlzU2lnbmluZ091dCIsImlzU2lnbmluZ0luIiwic2lnbkluRXJyb3JSZWFzb24iLCJpc1NpZ25lZFVwIiwiaXNTaWduSW5nVXAiLCJzaWduVXBFcnJvclJlYXNvbiIsIm1lIiwiZm9sbG93aW5nTGlzdCIsImZvbGxvd2VyTGlzdCIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIlNJR05fSU5fUkVRVUVTVCIsIlNJR05fSU5fU1VDQ0VTUyIsIlNJR05fSU5fRkFJTFVSRSIsIlNJR05fT1VUX1JFUVVFU1QiLCJTSUdOX09VVF9TVUNDRVNTIiwiU0lHTl9PVVRfRkFJTFVSRSIsInNpZ25VcFJlcXVlc3RBY3Rpb24iLCJkYXRhIiwidHlwZSIsInBheWxvYWQiLCJzaWduVXBEYXRhIiwic2lnbkluUmVxdWVzdEFjdGlvbiIsInNpZ25JbkRhdGEiLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwic3RhdGUiLCJhY3Rpb24iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJpc0xvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sTUFBTUEsWUFBWSxHQUFHO0FBQ3hCQyxZQUFVLEVBQUUsS0FEWTtBQUNMO0FBQ25CQyxjQUFZLEVBQUUsS0FGVTtBQUVIO0FBQ3JCQyxhQUFXLEVBQUUsS0FIVztBQUdKO0FBQ3BCQyxtQkFBaUIsRUFBRSxFQUpLO0FBSUQ7QUFDdkJDLFlBQVUsRUFBRSxLQUxZO0FBS0w7QUFDbkJDLGFBQVcsRUFBRSxLQU5XO0FBTUo7QUFDcEJDLG1CQUFpQixFQUFFLEVBUEs7QUFPRDtBQUN2QkMsSUFBRSxFQUFFLElBUm9CO0FBUWQ7QUFDVkMsZUFBYSxFQUFFLEVBVFM7QUFTTDtBQUNuQkMsY0FBWSxFQUFFLEVBVlUsQ0FVTjs7QUFWTSxDQUFyQixDLENBY1A7O0FBQ08sTUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLE1BQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBRUEsTUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLE1BQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBRUEsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCLEMsQ0FFUDs7QUFDTyxNQUFNQyxtQkFBbUIsR0FBR0MsSUFBSSxLQUFLO0FBQ3hDQyxNQUFJLEVBQUVYLGVBRGtDO0FBRXhDWSxTQUFPLEVBQUU7QUFDTEMsY0FBVSxFQUFFSDtBQURQO0FBRitCLENBQUwsQ0FBaEM7QUFPQSxNQUFNSSxtQkFBbUIsR0FBR0osSUFBSSxJQUFJO0FBQ3ZDLFNBQVE7QUFDUkMsUUFBSSxFQUFFUixlQURFO0FBRVJTLFdBQU8sRUFBRTtBQUNMRyxnQkFBVSxFQUFFTDtBQURQO0FBRkQsR0FBUjtBQUtELENBTkk7QUFRQSxNQUFNTSxtQkFBbUIsR0FBRyxPQUFPO0FBQ3RDTCxNQUFJLEVBQUVMO0FBRGdDLENBQVAsQ0FBNUI7QUFJUSxnRUFBQ1csS0FBSyxHQUFHNUIsWUFBVCxFQUF1QjZCLE1BQXZCLEtBQWtDO0FBQzdDLFFBQU07QUFBRVAsUUFBRjtBQUFRQyxXQUFSO0FBQWlCTztBQUFqQixNQUEyQkQsTUFBakM7QUFDQUUsU0FBTyxDQUFDQyxHQUFSLENBQVlWLElBQVosRUFBa0JDLE9BQWxCLEVBQTJCTyxLQUEzQixFQUFpQyxHQUFqQzs7QUFDQSxVQUFRUixJQUFSO0FBQ0ksU0FBS1gsZUFBTDtBQUFzQjtBQUNsQiwrQ0FDT2lCLEtBRFA7QUFFSXRCLHFCQUFXLEVBQUUsSUFGakI7QUFHSUQsb0JBQVUsRUFBRSxLQUhoQjtBQUlJRSwyQkFBaUIsRUFBRTtBQUp2QjtBQU1IOztBQUNELFNBQUtLLGVBQUw7QUFBc0I7QUFDbEIsK0NBQ09nQixLQURQO0FBRUl0QixxQkFBVyxFQUFFLEtBRmpCO0FBR0lELG9CQUFVLEVBQUU7QUFIaEI7QUFLSDs7QUFDRCxTQUFLUSxlQUFMO0FBQXNCO0FBQ2xCLCtDQUNPZSxLQURQO0FBRUl0QixxQkFBVyxFQUFFLEtBRmpCO0FBR0lDLDJCQUFpQixFQUFFdUI7QUFIdkI7QUFLSDs7QUFDRCxTQUFLaEIsZUFBTDtBQUNJLDZDQUNPYyxLQURQO0FBRUl6QixtQkFBVyxFQUFFLElBRmpCO0FBR0lDLHlCQUFpQixFQUFFO0FBSHZCOztBQUtKLFNBQUtXLGVBQUw7QUFDSSw2Q0FDT2EsS0FEUDtBQUVJcEIsVUFBRSxFQUFDZSxPQUZQO0FBR0lwQixtQkFBVyxFQUFFLEtBSGpCO0FBSUlGLGtCQUFVLEVBQUUsSUFKaEI7QUFLSWdDLGlCQUFTLEVBQUU7QUFMZjs7QUFPSixTQUFLakIsZUFBTDtBQUNJLDZDQUNPWSxLQURQO0FBRUl6QixtQkFBVyxFQUFFLEtBRmpCO0FBR0lGLGtCQUFVLEVBQUUsS0FIaEI7QUFJSUcseUJBQWlCLEVBQUUwQixLQUp2QjtBQUtJdEIsVUFBRSxFQUFFO0FBTFI7O0FBT0osU0FBS1MsZ0JBQUw7QUFDSSw2Q0FDT1csS0FEUDtBQUVJMUIsb0JBQVksRUFBRTtBQUZsQjs7QUFJSixTQUFLZ0IsZ0JBQUw7QUFDSSw2Q0FDT1UsS0FEUDtBQUVJM0Isa0JBQVUsRUFBRSxLQUZoQjtBQUdJQyxvQkFBWSxFQUFFLEtBSGxCO0FBSUlNLFVBQUUsRUFBRTtBQUpSOztBQU1KLFNBQUtXLGdCQUFMO0FBQ0ksNkNBQ09TLEtBRFA7QUFFSTFCLG9CQUFZLEVBQUU7QUFGbEI7O0FBSUo7QUFDSSxhQUFPMEIsS0FBUDtBQS9EUjtBQWlFSCxDQXBFRCIsImZpbGUiOiIuL3JlZHVjZXJzL3VzZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIGlzU2lnbmVkSW46IGZhbHNlLCAvLyDroZzqt7jsnbgg7Jes67aAXG4gICAgaXNTaWduaW5nT3V0OiBmYWxzZSwgLy8g66Gc6re47JWE7JuDIOyLnOuPhOykkVxuICAgIGlzU2lnbmluZ0luOiBmYWxzZSwgLy8g66Gc6re47J24IOyLnOuPhOykkVxuICAgIHNpZ25JbkVycm9yUmVhc29uOiAnJywgLy8g66Gc6re47J24IOyLpO2MqCDsgqzsnKBcbiAgICBpc1NpZ25lZFVwOiBmYWxzZSwgLy8g7ZqM7JuQ6rCA7J6FIOyEseqztVxuICAgIGlzU2lnbkluZ1VwOiBmYWxzZSwgLy8g7ZqM7JuQ6rCA7J6FIOyLnOuPhOykkVxuICAgIHNpZ25VcEVycm9yUmVhc29uOiAnJywgLy8g7ZqM7JuQ6rCA7J6FIOyLpO2MqCDsgqzsnKBcbiAgICBtZTogbnVsbCwgLy8g64K0IOygleuztFxuICAgIGZvbGxvd2luZ0xpc3Q6IFtdLCAvLyDtjJTroZzsnokg66as7Iqk7Yq4XG4gICAgZm9sbG93ZXJMaXN0OiBbXSwgLy8g7YyU66Gc7JuMIOumrOyKpO2KuFxuXG59O1xuXG4vLyBBY3Rpb24gdHlwZXNcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAnU0lHTl9VUF9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSAnU0lHTl9VUF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSAnU0lHTl9VUF9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IFNJR05fSU5fUkVRVUVTVCA9ICdTSUdOX0lOX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IFNJR05fSU5fU1VDQ0VTUyA9ICdTSUdOX0lOX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IFNJR05fSU5fRkFJTFVSRSA9ICdTSUdOX0lOX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgU0lHTl9PVVRfUkVRVUVTVCA9ICdTSUdOX09VVF9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBTSUdOX09VVF9TVUNDRVNTID0gJ1NJR05fT1VUX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IFNJR05fT1VUX0ZBSUxVUkUgPSAnU0lHTl9PVVRfRkFJTFVSRSc7XG5cbi8vIEFjdGlvbnMgY3JlYXRvcnNcbmV4cG9ydCBjb25zdCBzaWduVXBSZXF1ZXN0QWN0aW9uID0gZGF0YSA9PiAoe1xuICAgIHR5cGU6IFNJR05fVVBfUkVRVUVTVCxcbiAgICBwYXlsb2FkOiB7XG4gICAgICAgIHNpZ25VcERhdGE6IGRhdGEsXG4gICAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2lnbkluUmVxdWVzdEFjdGlvbiA9IGRhdGEgPT4ge1xuICAgIHJldHVybiAoe1xuICAgIHR5cGU6IFNJR05fSU5fUkVRVUVTVCxcbiAgICBwYXlsb2FkOiB7XG4gICAgICAgIHNpZ25JbkRhdGE6IGRhdGEsXG4gICAgfSxcbn0pfTtcblxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiAoe1xuICAgIHR5cGU6IFNJR05fT1VUX1JFUVVFU1QsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBjb25zdCB7IHR5cGUsIHBheWxvYWQsIGVycm9yIH0gPSBhY3Rpb247XG4gICAgY29uc29sZS5sb2codHlwZSwgcGF5bG9hZCwgZXJyb3IsJz8nKTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgaXNTaWduSW5nVXA6IHRydWUsXG4gICAgICAgICAgICAgICAgaXNTaWduZWRVcDogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2lnblVwRXJyb3JSZWFzb246ICcnLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzoge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc1NpZ25JbmdVcDogZmFsc2UsXG4gICAgICAgICAgICAgICAgaXNTaWduZWRVcDogdHJ1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgaXNTaWduSW5nVXA6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNpZ25VcEVycm9yUmVhc29uOiBlcnJvcixcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBTSUdOX0lOX1JFUVVFU1Q6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGlzU2lnbmluZ0luOiB0cnVlLFxuICAgICAgICAgICAgICAgIHNpZ25JbkVycm9yUmVhc29uOiAnJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgU0lHTl9JTl9TVUNDRVNTOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBtZTpwYXlsb2FkLFxuICAgICAgICAgICAgICAgIGlzU2lnbmluZ0luOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpc1NpZ25lZEluOiB0cnVlLFxuICAgICAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIFNJR05fSU5fRkFJTFVSRTpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgaXNTaWduaW5nSW46IGZhbHNlLFxuICAgICAgICAgICAgICAgIGlzU2lnbmVkSW46IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNpZ25JbkVycm9yUmVhc29uOiBlcnJvcixcbiAgICAgICAgICAgICAgICBtZTogbnVsbCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgU0lHTl9PVVRfUkVRVUVTVDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgaXNTaWduaW5nT3V0OiB0cnVlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBTSUdOX09VVF9TVUNDRVNTOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc1NpZ25lZEluOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpc1NpZ25pbmdPdXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1lOiB7fSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgU0lHTl9PVVRfRkFJTFVSRTpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgaXNTaWduaW5nT3V0OiBmYWxzZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/user.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return userSaga; });\n/* harmony import */ var _api_ApiService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/ApiService */ \"./api/ApiService.js\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n\n\n\n\nconst initialState = {\n  user: null,\n  signInLoading: false,\n  signInSucceed: false,\n  signInError: null\n};\n\nfunction signInAPI(data) {\n  return Object(_api_ApiService__WEBPACK_IMPORTED_MODULE_0__[\"signin\"])(data);\n}\n\nfunction* signIn({\n  payload\n}) {\n  try {\n    const {\n      signInData\n    } = payload;\n    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"call\"])(signInAPI, signInData);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n      //put -> dispatch와 동일\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"SIGN_IN_SUCCESS\"],\n      payload: result\n    });\n  } catch (err) {\n    alert(err.error);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"SIGN_IN_FAILURE\"],\n      error: err.response.data\n    });\n  }\n}\n\nfunction* watchSignIn() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeEvery\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"SIGN_IN_REQUEST\"], signIn); // yield takeEvery(actions.SIGN_OUT_REQUEST, signOut);\n}\n\nfunction* userSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchSignIn) // fork(watchSignUp),\n  ]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzP2EzODYiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwidXNlciIsInNpZ25JbkxvYWRpbmciLCJzaWduSW5TdWNjZWVkIiwic2lnbkluRXJyb3IiLCJzaWduSW5BUEkiLCJkYXRhIiwic2lnbmluIiwic2lnbkluIiwicGF5bG9hZCIsInNpZ25JbkRhdGEiLCJyZXN1bHQiLCJjYWxsIiwicHV0IiwidHlwZSIsIlNJR05fSU5fU1VDQ0VTUyIsImVyciIsImFsZXJ0IiwiZXJyb3IiLCJTSUdOX0lOX0ZBSUxVUkUiLCJyZXNwb25zZSIsIndhdGNoU2lnbkluIiwidGFrZUV2ZXJ5IiwiYWN0aW9ucyIsInVzZXJTYWdhIiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLE1BQU1BLFlBQVksR0FBRztBQUN4QkMsTUFBSSxFQUFFLElBRGtCO0FBRXhCQyxlQUFhLEVBQUUsS0FGUztBQUd4QkMsZUFBYSxFQUFFLEtBSFM7QUFJeEJDLGFBQVcsRUFBRTtBQUpXLENBQXJCOztBQU9QLFNBQVNDLFNBQVQsQ0FBbUJDLElBQW5CLEVBQXlCO0FBQ3JCLFNBQU9DLDhEQUFNLENBQUNELElBQUQsQ0FBYjtBQUNIOztBQUVELFVBQVVFLE1BQVYsQ0FBaUI7QUFBQ0M7QUFBRCxDQUFqQixFQUE0QjtBQUN4QixNQUFJO0FBQ0EsVUFBTTtBQUFDQztBQUFELFFBQWVELE9BQXJCO0FBQ0EsVUFBTUUsTUFBTSxHQUFHLE1BQU1DLCtEQUFJLENBQUNQLFNBQUQsRUFBWUssVUFBWixDQUF6QjtBQUVBLFVBQU1HLDhEQUFHLENBQUM7QUFBRTtBQUNSQyxVQUFJLEVBQUVDLDhEQURBO0FBRU5OLGFBQU8sRUFBRUU7QUFGSCxLQUFELENBQVQ7QUFLSCxHQVRELENBU0UsT0FBT0ssR0FBUCxFQUFZO0FBQ1ZDLFNBQUssQ0FBQ0QsR0FBRyxDQUFDRSxLQUFMLENBQUw7QUFDQSxVQUFNTCw4REFBRyxDQUFDO0FBQ05DLFVBQUksRUFBRUssOERBREE7QUFFTkQsV0FBSyxFQUFFRixHQUFHLENBQUNJLFFBQUosQ0FBYWQ7QUFGZCxLQUFELENBQVQ7QUFJSDtBQUNKOztBQUVELFVBQVVlLFdBQVYsR0FBd0I7QUFDcEIsUUFBTUMsb0VBQVMsQ0FBQ0MsOERBQUQsRUFBMEJmLE1BQTFCLENBQWYsQ0FEb0IsQ0FFcEI7QUFDSDs7QUFFYyxVQUFVZ0IsUUFBVixHQUFxQjtBQUNoQyxRQUFNQyw4REFBRyxDQUFDLENBQ05DLCtEQUFJLENBQUNMLFdBQUQsQ0FERSxDQUVOO0FBRk0sR0FBRCxDQUFUO0FBSUgiLCJmaWxlIjoiLi9zYWdhcy91c2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtzaWduaW59IGZyb20gJy4uL2FwaS9BcGlTZXJ2aWNlJztcbmltcG9ydCB7IGFsbCwgZm9yaywgdGFrZUV2ZXJ5LCBjYWxsLCBwdXQsIGRlbGF5IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XG5pbXBvcnQge1NJR05fSU5fRkFJTFVSRSwgU0lHTl9JTl9TVUNDRVNTfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIHVzZXI6IG51bGwsXG4gICAgc2lnbkluTG9hZGluZzogZmFsc2UsXG4gICAgc2lnbkluU3VjY2VlZDogZmFsc2UsXG4gICAgc2lnbkluRXJyb3I6IG51bGxcbn1cblxuZnVuY3Rpb24gc2lnbkluQVBJKGRhdGEpIHtcbiAgICByZXR1cm4gc2lnbmluKGRhdGEpO1xufVxuXG5mdW5jdGlvbiogc2lnbkluKHtwYXlsb2FkfSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHtzaWduSW5EYXRhfSA9IHBheWxvYWQ7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnbkluQVBJLCBzaWduSW5EYXRhKTtcblxuICAgICAgICB5aWVsZCBwdXQoeyAvL3B1dCAtPiBkaXNwYXRjaOyZgCDrj5nsnbxcbiAgICAgICAgICAgIHR5cGU6IFNJR05fSU5fU1VDQ0VTUyxcbiAgICAgICAgICAgIHBheWxvYWQ6IHJlc3VsdCxcbiAgICAgICAgfSk7XG5cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgYWxlcnQoZXJyLmVycm9yKTtcbiAgICAgICAgeWllbGQgcHV0KHtcbiAgICAgICAgICAgIHR5cGU6IFNJR05fSU5fRkFJTFVSRSxcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hTaWduSW4oKSB7XG4gICAgeWllbGQgdGFrZUV2ZXJ5KGFjdGlvbnMuU0lHTl9JTl9SRVFVRVNULCBzaWduSW4pO1xuICAgIC8vIHlpZWxkIHRha2VFdmVyeShhY3Rpb25zLlNJR05fT1VUX1JFUVVFU1QsIHNpZ25PdXQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XG4gICAgeWllbGQgYWxsKFtcbiAgICAgICAgZm9yayh3YXRjaFNpZ25JbiksXG4gICAgICAgIC8vIGZvcmsod2F0Y2hTaWduVXApLFxuICAgIF0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sagas/user.js\n");

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