"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Home() {\n    var ref;\n    const { 0: color , 1: setColor  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        \"signin\"\n    ]);\n    // const handleChange = () => {\n    //   setColor(\"SignIn\");\n    // };\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    console.log(session);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"flex flex-col items-center justify-center min-h-screen py-2\",\n        __source: {\n            fileName: \"/home/prahlad/Desktop/auth/pages/index.js\",\n            lineNumber: 14,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                __source: {\n                    fileName: \"/home/prahlad/Desktop/auth/pages/index.js\",\n                    lineNumber: 15,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                        __source: {\n                            fileName: \"/home/prahlad/Desktop/auth/pages/index.js\",\n                            lineNumber: 16,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: \"Next Authentication\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\",\n                        __source: {\n                            fileName: \"/home/prahlad/Desktop/auth/pages/index.js\",\n                            lineNumber: 17,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"main\", {\n                className: \"flex flex-col items-center justify-center w-full flex-1 px-20 text-center\",\n                __source: {\n                    fileName: \"/home/prahlad/Desktop/auth/pages/index.js\",\n                    lineNumber: 20,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"h1\", {\n                        className: \"text-34xl font-bold mb-3\",\n                        __source: {\n                            fileName: \"/home/prahlad/Desktop/auth/pages/index.js\",\n                            lineNumber: 21,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: [\n                            \"Next Auth project --\",\n                            session === null || session === void 0 ? void 0 : (ref = session.user) === null || ref === void 0 ? void 0 : ref.username\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"space-x-4\",\n                        __source: {\n                            fileName: \"/home/prahlad/Desktop/auth/pages/index.js\",\n                            lineNumber: 25,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: session ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                            onClick: next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signOut,\n                            className: \"hover:bg-purple-900 hover:text-white bg-blue-500 text-white rounded px-2 py-2\",\n                            __source: {\n                                fileName: \"/home/prahlad/Desktop/auth/pages/index.js\",\n                                lineNumber: 27,\n                                columnNumber: 13\n                            },\n                            __self: this,\n                            children: \"Signout\"\n                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                            // onClick={handleChange}\n                            onClick: next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signIn,\n                            className: \"hover:bg-purple-900 hover:text-white bg-blue-500 text-white rounded px-2 py-2 \",\n                            __source: {\n                                fileName: \"/home/prahlad/Desktop/auth/pages/index.js\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            },\n                            __self: this,\n                            children: color\n                        })\n                    })\n                ]\n            })\n        ]\n    }));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ0k7QUFDNkI7QUFDOUMsUUFBUSxDQUFDSyxJQUFJLEdBQUcsQ0FBQztRQWtCREMsR0FBYTtJQWpCMUMsS0FBSyxNQUFFQyxLQUFLLE1BQUVDLFFBQVEsTUFBSVAsK0NBQVEsQ0FBQyxDQUFDO1FBQUEsQ0FBUTtJQUFBLENBQUM7SUFFN0MsRUFBK0I7SUFDL0IsRUFBd0I7SUFDeEIsRUFBSztJQUVMLEtBQUssQ0FBQyxDQUFDLENBQUNRLElBQUksRUFBRUgsT0FBTyxFQUFDLENBQUMsR0FBR0YsMkRBQVU7SUFDcENNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxPQUFPO0lBQ25CLE1BQU0sdUVBQ0hNLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQTZEOzs7Ozs7OztrRkFDekViLGtEQUFJOzs7Ozs7Ozt5RkFDRmMsQ0FBSzs7Ozs7OztrQ0FBQyxDQUFtQjs7eUZBQ3pCQyxDQUFJO3dCQUFDQyxHQUFHLEVBQUMsQ0FBTTt3QkFBQ0MsSUFBSSxFQUFDLENBQWM7Ozs7Ozs7Ozs7a0ZBR3JDQyxDQUFJO2dCQUFDTCxTQUFTLEVBQUMsQ0FBMkU7Ozs7Ozs7OzBGQUN4Rk0sQ0FBRTt3QkFBQ04sU0FBUyxFQUFDLENBQTBCOzs7Ozs7Ozs0QkFBQyxDQUNuQjs0QkFBQ1AsT0FBTyxhQUFQQSxPQUFPLEtBQVBBLElBQUksQ0FBSkEsQ0FBYSxHQUFiQSxJQUFJLENBQUpBLENBQWEsSUFBYkEsR0FBYSxHQUFiQSxPQUFPLENBQUVjLElBQUksY0FBYmQsR0FBYSxLQUFiQSxJQUFJLENBQUpBLENBQWEsR0FBYkEsSUFBSSxDQUFKQSxDQUFhLEdBQWJBLEdBQWEsQ0FBRWUsUUFBUTs7O3lGQUc3Q1QsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFDLENBQVc7Ozs7Ozs7a0NBQ3ZCUCxPQUFPLHdFQUNMZ0IsQ0FBTTs0QkFDTEMsT0FBTyxFQUFFcEIsb0RBQU87NEJBQ2hCVSxTQUFTLEVBQUMsQ0FBK0U7Ozs7Ozs7c0NBQzFGLENBRUQ7a0dBRUNTLENBQU07NEJBQ0wsRUFBeUI7NEJBQ3pCQyxPQUFPLEVBQUVyQixtREFBTTs0QkFDZlcsU0FBUyxFQUFDLENBQWdGOzs7Ozs7O3NDQUV6Rk4sS0FBSzs7Ozs7OztBQU9wQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0LCB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VTdGF0ZShbXCJzaWduaW5cIl0pO1xuXG4gIC8vIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICgpID0+IHtcbiAgLy8gICBzZXRDb2xvcihcIlNpZ25JblwiKTtcbiAgLy8gfTtcblxuICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcbiAgY29uc29sZS5sb2coc2Vzc2lvbik7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4taC1zY3JlZW4gcHktMlwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5OZXh0IEF1dGhlbnRpY2F0aW9uPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgZmxleC0xIHB4LTIwIHRleHQtY2VudGVyXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTM0eGwgZm9udC1ib2xkIG1iLTNcIj5cbiAgICAgICAgICBOZXh0IEF1dGggcHJvamVjdCAtLXtzZXNzaW9uPy51c2VyPy51c2VybmFtZX1cbiAgICAgICAgPC9oMT5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXgtNFwiPlxuICAgICAgICAgIHtzZXNzaW9uID8gKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtzaWduT3V0fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3ZlcjpiZy1wdXJwbGUtOTAwIGhvdmVyOnRleHQtd2hpdGUgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSByb3VuZGVkIHB4LTIgcHktMlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFNpZ25vdXRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIC8vIG9uQ2xpY2s9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgb25DbGljaz17c2lnbklufVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3ZlcjpiZy1wdXJwbGUtOTAwIGhvdmVyOnRleHQtd2hpdGUgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSByb3VuZGVkIHB4LTIgcHktMiBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Y29sb3J9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwidXNlU3RhdGUiLCJzaWduSW4iLCJzaWduT3V0IiwidXNlU2Vzc2lvbiIsIkhvbWUiLCJzZXNzaW9uIiwiY29sb3IiLCJzZXRDb2xvciIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJoMSIsInVzZXIiLCJ1c2VybmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();