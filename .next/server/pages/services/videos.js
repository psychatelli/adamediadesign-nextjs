module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/services/videos.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/services/videos.js":
/*!**********************************!*\
  !*** ./pages/services/videos.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/adamdonatelli/repos/adamediadesign2021/pages/services/videos.js\";\n\n\nconst Videos = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"videos dark-gray\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"lightGray-banner\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: \"VIDEOS\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n        children: \"VIDEOS | MARKETING CONTENT  \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"contentArea\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"service-desription\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: \"Video content has become the number one media source in demand. Video is a great way to deliver a message, entertain, engage your audience, and build your brand. Adamedia's videos are HD quality, are created with top industry standard software, and will capture the right message that speaks directly to your target audience.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 21\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"videosContainer\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"videoBox\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"title\",\n            children: [\" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n              children: \"SIC FIT SCOTTSDALE\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 23,\n              columnNumber: 45\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 21\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"media\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"iframe\", {\n              width: \"100%\",\n              height: \"300\",\n              src: \"https://www.youtube.com/embed/Lb-eVjMOHPA?rel=0&showinfo=0\",\n              frameborder: \"0\",\n              allowfullscreen: \"\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 25,\n              columnNumber: 21\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 24,\n            columnNumber: 21\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 17\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"videoBox\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"title\",\n            children: [\" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n              children: \"IMPACT MMA & Fitness\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 30,\n              columnNumber: 45\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 21\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"media\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"iframe\", {\n              width: \"100%\",\n              height: \"300\",\n              src: \"https://www.youtube.com/embed/HwTrzeGJ68w?rel=0&showinfo=0\",\n              frameborder: \"0\",\n              allowfullscreen: \"\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 32,\n              columnNumber: 21\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 21\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 17\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"videoBox\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"title\",\n            children: [\" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n              children: \"RALLY.ORG FUSION EVENT \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 37,\n              columnNumber: 45\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 21\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"media\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"iframe\", {\n              width: \"100%\",\n              height: \"300\",\n              src: \"https://www.youtube.com/embed/hzeDQGeUMyw?rel=0&showinfo=0\",\n              frameborder: \"0\",\n              allowfullscreen: \"\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 21\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 21\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 17\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"videoBox\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"title\",\n            children: [\" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n              children: \"WTR EVENT\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 44,\n              columnNumber: 45\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 21\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"media\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"iframe\", {\n              width: \"100%\",\n              height: \"300\",\n              src: \"https://www.youtube.com/embed/OvzQBTN8MJ4\",\n              frameborder: \"0\",\n              allowfullscreen: true\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 21\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 21\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 17\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 13\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Videos);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zZXJ2aWNlcy92aWRlb3MuanM/NDc2OCJdLCJuYW1lcyI6WyJWaWRlb3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQyxNQUFNQSxNQUFNLEdBQUcsTUFBTTtBQUNsQixzQkFDSTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBLDRCQUVJO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQUEsOEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFRSTtBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFDLG9CQUFmO0FBQUEsK0JBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBUUE7QUFBSyxpQkFBUyxFQUFDLGlCQUFmO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFDLFVBQWY7QUFBQSxrQ0FDSTtBQUFLLHFCQUFTLEVBQUMsT0FBZjtBQUFBLHlDQUF3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBRUk7QUFBSyxxQkFBUyxFQUFDLE9BQWY7QUFBQSxtQ0FDQTtBQUFRLG1CQUFLLEVBQUMsTUFBZDtBQUFxQixvQkFBTSxFQUFDLEtBQTVCO0FBQWtDLGlCQUFHLEVBQUMsNERBQXRDO0FBQXVHLHlCQUFXLEVBQUMsR0FBbkg7QUFBdUgsNkJBQWUsRUFBQztBQUF2STtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFRSTtBQUFLLG1CQUFTLEVBQUMsVUFBZjtBQUFBLGtDQUNJO0FBQUsscUJBQVMsRUFBQyxPQUFmO0FBQUEseUNBQXdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFFSTtBQUFLLHFCQUFTLEVBQUMsT0FBZjtBQUFBLG1DQUNBO0FBQVEsbUJBQUssRUFBQyxNQUFkO0FBQXFCLG9CQUFNLEVBQUMsS0FBNUI7QUFBa0MsaUJBQUcsRUFBQyw0REFBdEM7QUFBdUcseUJBQVcsRUFBQyxHQUFuSDtBQUF1SCw2QkFBZSxFQUFDO0FBQXZJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSSixlQWVJO0FBQUssbUJBQVMsRUFBQyxVQUFmO0FBQUEsa0NBQ0k7QUFBSyxxQkFBUyxFQUFDLE9BQWY7QUFBQSx5Q0FBd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUVJO0FBQUsscUJBQVMsRUFBQyxPQUFmO0FBQUEsbUNBQ0E7QUFBUSxtQkFBSyxFQUFDLE1BQWQ7QUFBcUIsb0JBQU0sRUFBQyxLQUE1QjtBQUFrQyxpQkFBRyxFQUFDLDREQUF0QztBQUF1Ryx5QkFBVyxFQUFDLEdBQW5IO0FBQXVILDZCQUFlLEVBQUM7QUFBdkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWZKLGVBc0JJO0FBQUssbUJBQVMsRUFBQyxVQUFmO0FBQUEsa0NBQ0k7QUFBSyxxQkFBUyxFQUFDLE9BQWY7QUFBQSx5Q0FBd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUVJO0FBQUsscUJBQVMsRUFBQyxPQUFmO0FBQUEsbUNBQ0E7QUFBUSxtQkFBSyxFQUFDLE1BQWQ7QUFBcUIsb0JBQU0sRUFBQyxLQUE1QjtBQUFrQyxpQkFBRyxFQUFDLDJDQUF0QztBQUFrRix5QkFBVyxFQUFDLEdBQTlGO0FBQWtHLDZCQUFlO0FBQWpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF0Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQWtESCxDQW5EQTs7QUFzRGNBLHFFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvc2VydmljZXMvdmlkZW9zLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4gY29uc3QgVmlkZW9zID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd2aWRlb3MgZGFyay1ncmF5Jz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaWdodEdyYXktYmFubmVyXCI+XG4gICAgICAgICAgICAgICAgPGgxPlZJREVPUzwvaDE+XG4gICAgICAgICAgICAgICAgPGgzPlZJREVPUyB8IE1BUktFVElORyBDT05URU5UICA8L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50QXJlYVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZS1kZXNyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBWaWRlbyBjb250ZW50IGhhcyBiZWNvbWUgdGhlIG51bWJlciBvbmUgbWVkaWEgc291cmNlIGluIGRlbWFuZC4gVmlkZW8gaXMgYSBncmVhdCB3YXkgdG8gZGVsaXZlciBhIG1lc3NhZ2UsIGVudGVydGFpbiwgZW5nYWdlIHlvdXIgYXVkaWVuY2UsIGFuZCBidWlsZCB5b3VyIGJyYW5kLiBBZGFtZWRpYSdzIHZpZGVvcyBhcmUgSEQgcXVhbGl0eSwgYXJlIGNyZWF0ZWQgd2l0aCB0b3AgaW5kdXN0cnkgc3RhbmRhcmQgc29mdHdhcmUsIGFuZCB3aWxsIGNhcHR1cmUgdGhlIHJpZ2h0IG1lc3NhZ2UgdGhhdCBzcGVha3MgZGlyZWN0bHkgdG8geW91ciB0YXJnZXQgYXVkaWVuY2UuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ZpZGVvc0NvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ZpZGVvQm94Jz4gXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXRsZSc+IDxoMz5TSUMgRklUIFNDT1RUU0RBTEU8L2gzPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVkaWEnPiBcbiAgICAgICAgICAgICAgICAgICAgPGlmcmFtZSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIzMDBcIiBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9MYi1lVmpNT0hQQT9yZWw9MCZhbXA7c2hvd2luZm89MFwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93ZnVsbHNjcmVlbj1cIlwiPjwvaWZyYW1lPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd2aWRlb0JveCc+IFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGl0bGUnPiA8aDM+SU1QQUNUIE1NQSAmIEZpdG5lc3M8L2gzPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVkaWEnPiBcbiAgICAgICAgICAgICAgICAgICAgPGlmcmFtZSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIzMDBcIiBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9Id1RyemVHSjY4dz9yZWw9MCZhbXA7c2hvd2luZm89MFwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93ZnVsbHNjcmVlbj1cIlwiPjwvaWZyYW1lPiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ZpZGVvQm94Jz4gXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXRsZSc+IDxoMz5SQUxMWS5PUkcgRlVTSU9OIEVWRU5UIDwvaDM+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZWRpYSc+IFxuICAgICAgICAgICAgICAgICAgICA8aWZyYW1lIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjMwMFwiIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL2h6ZURRR2VVTXl3P3JlbD0wJmFtcDtzaG93aW5mbz0wXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3dmdWxsc2NyZWVuPVwiXCI+PC9pZnJhbWU+ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndmlkZW9Cb3gnPiBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpdGxlJz4gPGgzPldUUiBFVkVOVDwvaDM+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZWRpYSc+IFxuICAgICAgICAgICAgICAgICAgICA8aWZyYW1lIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjMwMFwiIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL092elFCVE44TUo0XCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBWaWRlb3M7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/services/videos.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

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