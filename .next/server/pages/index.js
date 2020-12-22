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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.scss */ \"./styles/Home.module.scss\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/adamdonatelli/repos/adamediadesign2021/pages/index.js\";\n\n\nfunction Home() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Create Next App\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.main,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.title,\n        children: [\"Welcome to \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: \"https://nextjs.org\",\n          children: \"Next.js!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 22\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.description,\n        children: [\"Get started by editing\", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"code\", {\n          className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.code,\n          children: \"pages/index.js\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.grid,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: \"https://nextjs.org/docs\",\n          className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.card,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n            children: \"Documentation \\u2192\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 24,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"Find in-depth information about Next.js features and API.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: \"https://nextjs.org/learn\",\n          className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.card,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n            children: \"Learn \\u2192\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"Learn about Next.js in an interactive course with quizzes!\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: \"https://github.com/vercel/next.js/tree/master/examples\",\n          className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.card,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n            children: \"Examples \\u2192\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"Discover and deploy boilerplate example Next.js projects.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: \"https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n          className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.card,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n            children: \"Deploy \\u2192\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"Instantly deploy your Next.js site to a public URL with Vercel.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n      className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.footer,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n        target: \"_blank\",\n        rel: \"noopener noreferrer\",\n        children: [\"Powered by\", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: \"/vercel.svg\",\n          alt: \"Vercel Logo\",\n          className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.logo\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNvZGUiLCJncmlkIiwiY2FyZCIsImZvb3RlciIsImxvZ28iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUM3QixzQkFDRTtBQUFLLGFBQVMsRUFBRUMsK0RBQU0sQ0FBQ0MsU0FBdkI7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFNRTtBQUFNLGVBQVMsRUFBRUQsK0RBQU0sQ0FBQ0UsSUFBeEI7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUVGLCtEQUFNLENBQUNHLEtBQXRCO0FBQUEsK0NBQ2E7QUFBRyxjQUFJLEVBQUMsb0JBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFLRTtBQUFHLGlCQUFTLEVBQUVILCtEQUFNLENBQUNJLFdBQXJCO0FBQUEsNkNBQ3lCLEdBRHpCLGVBRUU7QUFBTSxtQkFBUyxFQUFFSiwrREFBTSxDQUFDSyxJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixlQVVFO0FBQUssaUJBQVMsRUFBRUwsK0RBQU0sQ0FBQ00sSUFBdkI7QUFBQSxnQ0FDRTtBQUFHLGNBQUksRUFBQyx5QkFBUjtBQUFrQyxtQkFBUyxFQUFFTiwrREFBTSxDQUFDTyxJQUFwRDtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBTUU7QUFBRyxjQUFJLEVBQUMsMEJBQVI7QUFBbUMsbUJBQVMsRUFBRVAsK0RBQU0sQ0FBQ08sSUFBckQ7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORixlQVdFO0FBQ0UsY0FBSSxFQUFDLHdEQURQO0FBRUUsbUJBQVMsRUFBRVAsK0RBQU0sQ0FBQ08sSUFGcEI7QUFBQSxrQ0FJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRixlQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYRixlQW1CRTtBQUNFLGNBQUksRUFBQyw4SEFEUDtBQUVFLG1CQUFTLEVBQUVQLCtEQUFNLENBQUNPLElBRnBCO0FBQUEsa0NBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkYsZUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBK0NFO0FBQVEsZUFBUyxFQUFFUCwrREFBTSxDQUFDUSxNQUExQjtBQUFBLDZCQUNFO0FBQ0UsWUFBSSxFQUFDLHdHQURQO0FBRUUsY0FBTSxFQUFDLFFBRlQ7QUFHRSxXQUFHLEVBQUMscUJBSE47QUFBQSxpQ0FLYSxHQUxiLGVBTUU7QUFBSyxhQUFHLEVBQUMsYUFBVDtBQUF1QixhQUFHLEVBQUMsYUFBM0I7QUFBeUMsbUJBQVMsRUFBRVIsK0RBQU0sQ0FBQ1M7QUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBL0NGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNEREIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5zY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICBXZWxjb21lIHRvIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmdcIj5OZXh0LmpzITwvYT5cbiAgICAgICAgPC9oMT5cblxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgR2V0IHN0YXJ0ZWQgYnkgZWRpdGluZ3snICd9XG4gICAgICAgICAgPGNvZGUgY2xhc3NOYW1lPXtzdHlsZXMuY29kZX0+cGFnZXMvaW5kZXguanM8L2NvZGU+XG4gICAgICAgIDwvcD5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvZG9jc1wiIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgICAgICAgPGgzPkRvY3VtZW50YXRpb24gJnJhcnI7PC9oMz5cbiAgICAgICAgICAgIDxwPkZpbmQgaW4tZGVwdGggaW5mb3JtYXRpb24gYWJvdXQgTmV4dC5qcyBmZWF0dXJlcyBhbmQgQVBJLjwvcD5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9uZXh0anMub3JnL2xlYXJuXCIgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XG4gICAgICAgICAgICA8aDM+TGVhcm4gJnJhcnI7PC9oMz5cbiAgICAgICAgICAgIDxwPkxlYXJuIGFib3V0IE5leHQuanMgaW4gYW4gaW50ZXJhY3RpdmUgY291cnNlIHdpdGggcXVpenplcyE8L3A+XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdmVyY2VsL25leHQuanMvdHJlZS9tYXN0ZXIvZXhhbXBsZXNcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDM+RXhhbXBsZXMgJnJhcnI7PC9oMz5cbiAgICAgICAgICAgIDxwPkRpc2NvdmVyIGFuZCBkZXBsb3kgYm9pbGVycGxhdGUgZXhhbXBsZSBOZXh0LmpzIHByb2plY3RzLjwvcD5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbS9pbXBvcnQ/ZmlsdGVyPW5leHQuanMmdXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDM+RGVwbG95ICZyYXJyOzwvaDM+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgSW5zdGFudGx5IGRlcGxveSB5b3VyIE5leHQuanMgc2l0ZSB0byBhIHB1YmxpYyBVUkwgd2l0aCBWZXJjZWwuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICBQb3dlcmVkIGJ5eycgJ31cbiAgICAgICAgICA8aW1nIHNyYz1cIi92ZXJjZWwuc3ZnXCIgYWx0PVwiVmVyY2VsIExvZ29cIiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfSAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./styles/Home.module.scss":
/*!*********************************!*\
  !*** ./styles/Home.module.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n\t\"container\": \"container___SiVY2\",\n\t\"main\": \"main___16pei\",\n\t\"footer\": \"footer___1sydE\",\n\t\"title\": \"title___1BaMM\",\n\t\"description\": \"description___1yhH-\",\n\t\"code\": \"code___kKYAf\",\n\t\"grid\": \"grid___3TI2m\",\n\t\"card\": \"card___2KKXh\",\n\t\"logo\": \"logo___1YByb\"\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvSG9tZS5tb2R1bGUuc2Nzcz9kMDAxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcImNvbnRhaW5lcl9fX1NpVlkyXCIsXG5cdFwibWFpblwiOiBcIm1haW5fX18xNnBlaVwiLFxuXHRcImZvb3RlclwiOiBcImZvb3Rlcl9fXzFzeWRFXCIsXG5cdFwidGl0bGVcIjogXCJ0aXRsZV9fXzFCYU1NXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJkZXNjcmlwdGlvbl9fXzF5aEgtXCIsXG5cdFwiY29kZVwiOiBcImNvZGVfX19rS1lBZlwiLFxuXHRcImdyaWRcIjogXCJncmlkX19fM1RJMm1cIixcblx0XCJjYXJkXCI6IFwiY2FyZF9fXzJLS1hoXCIsXG5cdFwibG9nb1wiOiBcImxvZ29fX18xWUJ5YlwiXG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Home.module.scss\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });