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
exports.id = "pages/auth/signin";
exports.ids = ["pages/auth/signin"];
exports.modules = {

/***/ "./pages/auth/signin.js":
/*!******************************!*\
  !*** ./pages/auth/signin.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// import Header from \"../../components/Header\";\n//...borwser\nfunction signIn({ providers  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"flex flex-col items-center justify-center min-h-screen py-2 -mt-50 px-14 text-center dark:bg-gray-500\",\n            __source: {\n                fileName: \"/home/prahlad/Desktop/auth/pages/auth/signin.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                    className: \"w-80\",\n                    src: \"https://links.papareact.com/ocw\",\n                    alt: \"\",\n                    __source: {\n                        fileName: \"/home/prahlad/Desktop/auth/pages/auth/signin.js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                    className: \"font-xs italic\",\n                    __source: {\n                        fileName: \"/home/prahlad/Desktop/auth/pages/auth/signin.js\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: \"This is not a real App,it is built for educational purposes only\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"mt-40\",\n                    __source: {\n                        fileName: \"/home/prahlad/Desktop/auth/pages/auth/signin.js\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: Object.values(providers).map((provider)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            __source: {\n                                fileName: \"/home/prahlad/Desktop/auth/pages/auth/signin.js\",\n                                lineNumber: 18,\n                                columnNumber: 13\n                            },\n                            __self: this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"button\", {\n                                className: \"p-3 bg-blue-500 rounded-lg text-white\",\n                                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(provider.id, {\n                                        callbackUrl: \"/\"\n                                    })\n                                ,\n                                __source: {\n                                    fileName: \"/home/prahlad/Desktop/auth/pages/auth/signin.js\",\n                                    lineNumber: 19,\n                                    columnNumber: 15\n                                },\n                                __self: this,\n                                children: [\n                                    \"Sign in with \",\n                                    provider.name\n                                ]\n                            })\n                        }, provider.name)\n                    )\n                })\n            ]\n        })\n    }));\n}\n//middle server side render\nasync function getServerSideProps() {\n    const providers = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getProviders)();\n    return {\n        props: {\n            providers\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (signIn);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoL3NpZ25pbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBFO0FBQzFFLEVBQWdEO0FBQ2hELEVBQVk7U0FDSEMsTUFBTSxDQUFDLENBQUMsQ0FBQ0UsU0FBUyxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQzlCLE1BQU07d0ZBR0RDLENBQUc7WUFDRkMsU0FBUyxFQUFDLENBQ29DOzs7Ozs7OztxRkFFN0NDLENBQUc7b0JBQUNELFNBQVMsRUFBQyxDQUFNO29CQUFDRSxHQUFHLEVBQUMsQ0FBaUM7b0JBQUNDLEdBQUcsRUFBQyxDQUFFOzs7Ozs7OztxRkFDakVDLENBQUM7b0JBQUNKLFNBQVMsRUFBQyxDQUFnQjs7Ozs7Ozs4QkFBQyxDQUU5Qjs7cUZBQ0NELENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUFPOzs7Ozs7OzhCQUNuQkssTUFBTSxDQUFDQyxNQUFNLENBQUNSLFNBQVMsRUFBRVMsR0FBRyxFQUFDQyxRQUFRLHdFQUNuQ1QsQ0FBRzs7Ozs7Ozs0R0FDRFUsQ0FBTTtnQ0FDTFQsU0FBUyxFQUFDLENBQXVDO2dDQUNqRFUsT0FBTyxNQUNMYix1REFBZ0IsQ0FBQ1csUUFBUSxDQUFDRyxFQUFFLEVBQUUsQ0FBQzt3Q0FBQ0MsV0FBVyxFQUFFLENBQUc7b0NBQUMsQ0FBQzs7Ozs7Ozs7O29DQUVyRCxDQUNjO29DQUFDSixRQUFRLENBQUNLLElBQUk7OzsyQkFQckJMLFFBQVEsQ0FBQ0ssSUFBSTs7Ozs7O0FBZW5DLENBQUM7QUFDRCxFQUEyQjtBQUNwQixlQUFlQyxrQkFBa0IsR0FBRyxDQUFDO0lBQzFDLEtBQUssQ0FBQ2hCLFNBQVMsR0FBRyxLQUFLLENBQUNILDZEQUFZO0lBQ3BDLE1BQU0sQ0FBQyxDQUFDO1FBQ05vQixLQUFLLEVBQUUsQ0FBQztZQUNOakIsU0FBUztRQUNYLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUNELGlFQUFlRixNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hdXRoL3NpZ25pbi5qcz9kMzRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFByb3ZpZGVycywgc2lnbkluIGFzIFNpZ25JbnRvUHJvdmlkZXIgfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG4vLyBpbXBvcnQgSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0hlYWRlclwiO1xuLy8uLi5ib3J3c2VyXG5mdW5jdGlvbiBzaWduSW4oeyBwcm92aWRlcnMgfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7LyogPEhlYWRlciAvPiAqL31cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLWgtc2NyZWVuXG4gICAgICAgcHktMiAtbXQtNTAgcHgtMTQgdGV4dC1jZW50ZXIgZGFyazpiZy1ncmF5LTUwMFwiXG4gICAgICA+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy04MFwiIHNyYz1cImh0dHBzOi8vbGlua3MucGFwYXJlYWN0LmNvbS9vY3dcIiBhbHQ9XCJcIiAvPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXhzIGl0YWxpY1wiPlxuICAgICAgICAgIFRoaXMgaXMgbm90IGEgcmVhbCBBcHAsaXQgaXMgYnVpbHQgZm9yIGVkdWNhdGlvbmFsIHB1cnBvc2VzIG9ubHlcbiAgICAgICAgPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQwXCI+XG4gICAgICAgICAge09iamVjdC52YWx1ZXMocHJvdmlkZXJzKS5tYXAocHJvdmlkZXIgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e3Byb3ZpZGVyLm5hbWV9PlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0zIGJnLWJsdWUtNTAwIHJvdW5kZWQtbGcgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgIFNpZ25JbnRvUHJvdmlkZXIocHJvdmlkZXIuaWQsIHsgY2FsbGJhY2tVcmw6IFwiL1wiIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU2lnbiBpbiB3aXRoIHtwcm92aWRlci5uYW1lfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuLy9taWRkbGUgc2VydmVyIHNpZGUgcmVuZGVyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICBjb25zdCBwcm92aWRlcnMgPSBhd2FpdCBnZXRQcm92aWRlcnMoKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcHJvdmlkZXJzLFxuICAgIH0sXG4gIH07XG59XG5leHBvcnQgZGVmYXVsdCBzaWduSW47XG4iXSwibmFtZXMiOlsiZ2V0UHJvdmlkZXJzIiwic2lnbkluIiwiU2lnbkludG9Qcm92aWRlciIsInByb3ZpZGVycyIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsdCIsInAiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJwcm92aWRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpZCIsImNhbGxiYWNrVXJsIiwibmFtZSIsImdldFNlcnZlclNpZGVQcm9wcyIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/auth/signin.js\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/auth/signin.js"));
module.exports = __webpack_exports__;

})();