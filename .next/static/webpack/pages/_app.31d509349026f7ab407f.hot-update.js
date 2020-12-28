webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/MainNav.js":
/*!*******************************!*\
  !*** ./components/MainNav.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_adamdonatelli_repos_adamediadesign2021_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_adamdonatelli_repos_adamediadesign2021_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Drawer */ \"./node_modules/@material-ui/core/esm/Drawer/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/adamdonatelli/repos/adamediadesign2021/components/MainNav.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_adamdonatelli_repos_adamediadesign2021_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__[\"makeStyles\"])({\n  list: {\n    width: 250\n  },\n  fullList: {\n    width: 'auto'\n  }\n});\n\nvar MainNav = function MainNav() {\n  _s();\n\n  var classes = useStyles();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState({\n    top: false,\n    left: false,\n    bottom: false,\n    right: false\n  }),\n      _React$useState2 = Object(_Users_adamdonatelli_repos_adamediadesign2021_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n      state = _React$useState2[0],\n      setState = _React$useState2[1];\n\n  var toggleDrawer = function toggleDrawer(anchor, open) {\n    return function (event) {\n      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {\n        return;\n      }\n\n      setState(_objectSpread(_objectSpread({}, state), {}, Object(_Users_adamdonatelli_repos_adamediadesign2021_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, anchor, open)));\n    };\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    className: \"MainNav\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"leftNavItems\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        src: \"/../public/Adamedia-Design-Logo.png\",\n        alt: \"Picture of the author\",\n        width: 35,\n        height: 35\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 13\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"rightNavItems\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        onClick: toggleDrawer('left', true),\n        children: anchor\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 13\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(SwipeableDrawer, {\n      anchor: anchor,\n      open: state[anchor],\n      onClose: toggleDrawer(anchor, false),\n      onOpen: toggleDrawer(anchor, true),\n      children: list(anchor)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(MainNav, \"oyMyLMqRatvfBmfrXidaPp7ROfU=\", false, function () {\n  return [useStyles];\n});\n\n_c = MainNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainNav);\n\nvar _c;\n\n$RefreshReg$(_c, \"MainNav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluTmF2LmpzPzdjMDQiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImxpc3QiLCJ3aWR0aCIsImZ1bGxMaXN0IiwiTWFpbk5hdiIsImNsYXNzZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0Iiwic3RhdGUiLCJzZXRTdGF0ZSIsInRvZ2dsZURyYXdlciIsImFuY2hvciIsIm9wZW4iLCJldmVudCIsInR5cGUiLCJrZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUM7QUFDekJDLE1BQUksRUFBRTtBQUNKQyxTQUFLLEVBQUU7QUFESCxHQURtQjtBQUl6QkMsVUFBUSxFQUFFO0FBQ1JELFNBQUssRUFBRTtBQURDO0FBSmUsQ0FBRCxDQUE1Qjs7QUFVQSxJQUFNRSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBRWxCLE1BQU1DLE9BQU8sR0FBR04sU0FBUyxFQUF6Qjs7QUFGa0Isd0JBR01PLDRDQUFLLENBQUNDLFFBQU4sQ0FBZTtBQUN2Q0MsT0FBRyxFQUFFLEtBRGtDO0FBRXZDQyxRQUFJLEVBQUUsS0FGaUM7QUFHdkNDLFVBQU0sRUFBRSxLQUgrQjtBQUl2Q0MsU0FBSyxFQUFFO0FBSmdDLEdBQWYsQ0FITjtBQUFBO0FBQUEsTUFHYkMsS0FIYTtBQUFBLE1BR05DLFFBSE07O0FBV3BCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLE1BQUQsRUFBU0MsSUFBVDtBQUFBLFdBQWtCLFVBQUNDLEtBQUQsRUFBVztBQUNoRCxVQUFJQSxLQUFLLENBQUNDLElBQU4sS0FBZSxTQUFmLEtBQTZCRCxLQUFLLENBQUNFLEdBQU4sS0FBYyxLQUFkLElBQXVCRixLQUFLLENBQUNFLEdBQU4sS0FBYyxPQUFsRSxDQUFKLEVBQWdGO0FBQzlFO0FBQ0Q7O0FBRUROLGNBQVEsaUNBQU1ELEtBQU4sK0pBQWNHLE1BQWQsRUFBdUJDLElBQXZCLEdBQVI7QUFDRCxLQU5vQjtBQUFBLEdBQXJCOztBQVFFLHNCQUNJO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyxjQUFmO0FBQUEsNkJBQ0EscUVBQUMsaURBQUQ7QUFDSSxXQUFHLEVBQUMscUNBRFI7QUFFSSxXQUFHLEVBQUMsdUJBRlI7QUFHSSxhQUFLLEVBQUUsRUFIWDtBQUlJLGNBQU0sRUFBRTtBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFVSTtBQUFLLGVBQVMsRUFBQyxlQUFmO0FBQUEsNkJBQ0EscUVBQUMsZ0VBQUQ7QUFBUSxlQUFPLEVBQUVGLFlBQVksQ0FBQyxNQUFELEVBQVMsSUFBVCxDQUE3QjtBQUFBLGtCQUE4Q0M7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWSixlQWVJLHFFQUFDLGVBQUQ7QUFDTixZQUFNLEVBQUVBLE1BREY7QUFFTixVQUFJLEVBQUVILEtBQUssQ0FBQ0csTUFBRCxDQUZMO0FBR04sYUFBTyxFQUFFRCxZQUFZLENBQUNDLE1BQUQsRUFBUyxLQUFULENBSGY7QUFJTixZQUFNLEVBQUVELFlBQVksQ0FBQ0MsTUFBRCxFQUFTLElBQVQsQ0FKZDtBQUFBLGdCQU1MZCxJQUFJLENBQUNjLE1BQUQ7QUFOQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUE0QkgsQ0EvQ0Q7O0dBQU1YLE87VUFFY0wsUzs7O0tBRmRLLE87QUFvRFNBLHNFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9NYWluTmF2LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgIFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmfSBmcm9tICdyZWFjdCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgRHJhd2VyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RyYXdlcic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5cblxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgICBsaXN0OiB7XG4gICAgICB3aWR0aDogMjUwLFxuICAgIH0sXG4gICAgZnVsbExpc3Q6IHtcbiAgICAgIHdpZHRoOiAnYXV0bycsXG4gICAgfSxcbiAgfSk7XG5cblxuY29uc3QgTWFpbk5hdiA9ICgpID0+IHtcblxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgdG9wOiBmYWxzZSxcbiAgICBsZWZ0OiBmYWxzZSxcbiAgICBib3R0b206IGZhbHNlLFxuICAgIHJpZ2h0OiBmYWxzZSxcbiAgfSk7XG5cblxuICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoYW5jaG9yLCBvcGVuKSA9PiAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2tleWRvd24nICYmIChldmVudC5rZXkgPT09ICdUYWInIHx8IGV2ZW50LmtleSA9PT0gJ1NoaWZ0JykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBbYW5jaG9yXTogb3BlbiB9KTtcbiAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdNYWluTmF2Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsZWZ0TmF2SXRlbXMnPlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgc3JjPVwiLy4uL3B1YmxpYy9BZGFtZWRpYS1EZXNpZ24tTG9nby5wbmdcIlxuICAgICAgICAgICAgICAgIGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiXG4gICAgICAgICAgICAgICAgd2lkdGg9ezM1fVxuICAgICAgICAgICAgICAgIGhlaWdodD17MzV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyaWdodE5hdkl0ZW1zJz5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dG9nZ2xlRHJhd2VyKCdsZWZ0JywgdHJ1ZSl9PnthbmNob3J9PC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgXG4gICAgICAgICAgICA8U3dpcGVhYmxlRHJhd2VyXG4gICAgICBhbmNob3I9e2FuY2hvcn1cbiAgICAgIG9wZW49e3N0YXRlW2FuY2hvcl19XG4gICAgICBvbkNsb3NlPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9XG4gICAgICBvbk9wZW49e3RvZ2dsZURyYXdlcihhbmNob3IsIHRydWUpfVxuICAgID5cbiAgICAgIHtsaXN0KGFuY2hvcil9XG4gICAgPC9Td2lwZWFibGVEcmF3ZXI+XG4gICBcblxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IE1haW5OYXY7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MainNav.js\n");

/***/ })

})