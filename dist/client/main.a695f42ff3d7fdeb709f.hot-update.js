webpackHotUpdate("main",{

/***/ "./src/shared/Header.jsx":
/*!*******************************!*\
  !*** ./src/shared/Header.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Header = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\nvar header_less_1 = __importDefault(__webpack_require__(/*! ./header.less */ \"./src/shared/header.less\"));\nvar task_typescript_1 = __webpack_require__(/*! ../utils/task#typescript */ \"./src/utils/task#typescript.ts\");\nfunction HeaderComponent() {\n    return (react_1.default.createElement(\"div\", { className: header_less_1.default.block },\n        react_1.default.createElement(\"h1\", { className: header_less_1.default.header }, \"Hello React\"),\n        react_1.default.createElement(\"div\", null, task_typescript_1.concat('HELLO', ' WORLD')),\n        console.log(task_typescript_1.MyHometask)));\n}\nexports.Header = root_1.hot(HeaderComponent);\n\n\n//# sourceURL=webpack:///./src/shared/Header.jsx?");

/***/ }),

/***/ "./src/utils/task#typescript.ts":
/*!**************************************!*\
  !*** ./src/utils/task#typescript.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar _a;\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.MyHometask = exports.concat = void 0;\nexports.concat = function (str1, str2) { return \"\" + str1 + str2; };\nexports.MyHometask = {\n    howIDoIt: \"I Do It Wel\",\n    simeArray: [\"string one\", \"string two\", 42],\n    withData: [{ howIDoIt: \"I Do It Wel\", simeArray: [\"string one\", 23] }],\n};\nMyArray < T > (_a = {},\n    _a[N] = number,\n    _a.T = T,\n    _a.reduce = function (fn, initialValue) { },\n    _a);\n\n\n//# sourceURL=webpack:///./src/utils/task#typescript.ts?");

/***/ })

})