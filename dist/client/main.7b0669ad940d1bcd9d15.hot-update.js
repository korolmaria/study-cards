webpackHotUpdate("main",{

/***/ "./src/client/index.jsx":
/*!******************************!*\
  !*** ./src/client/index.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar ReactDOM = __importStar(__webpack_require__(/*! react-dom */ \"./node_modules/@hot-loader/react-dom/index.js\"));\nvar Header_1 = __webpack_require__(/*! ../shared/Header */ \"./src/shared/Header.jsx\");\nwindow.addEventListener('load', function () {\n    ReactDOM.hydrate(React.createElement(Header_1.Header, null), document.getElementById(\"react_root\"));\n});\n\n\n//# sourceURL=webpack:///./src/client/index.jsx?");

/***/ }),

/***/ "./src/shared/Header.jsx":
/*!*******************************!*\
  !*** ./src/shared/Header.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Header = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\nvar header_less_1 = __importDefault(__webpack_require__(/*! ./header.less */ \"./src/shared/header.less\"));\nvar task_typescript_1 = __webpack_require__(/*! ../utils/task#typescript */ \"./src/utils/task#typescript.ts\");\nfunction HeaderComponent() {\n    return (react_1.default.createElement(\"div\", { className: header_less_1.default.block },\n        react_1.default.createElement(\"h1\", { className: header_less_1.default.header }, \"Hello React\"),\n        react_1.default.createElement(\"div\", null, task_typescript_1.concat('HELLO', ' WORLD')),\n        console.log(task_typescript_1.MyHometask),\n        console.log(task_typescript_1.homeTask)));\n}\nexports.Header = root_1.hot(HeaderComponent);\n\n\n//# sourceURL=webpack:///./src/shared/Header.jsx?");

/***/ })

})