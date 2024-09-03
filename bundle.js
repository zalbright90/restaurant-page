/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --bg-dark: #080808;\n  --bg-alt: #535353;\n  --green: #3e7742;\n  --brown: #431a10;\n  --beige: #e1b89f;\n  --text-lt: #f9f9f9;\n  --text-dk: #303030;\n  --yellow: #d4a017; /* For highlights or Call to Action */\n  --red: #7c1c1c; /* For vibrancy (important elements) */\n  --teal: #2e7d6c;\n}\n\nbody {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n}\n  \nheader {\n    background-color: var(--beige);\n    color: var(--text-lt);\n    text-align: center;\n    border-bottom: 2px solid var(--brown);\n}\n  \nnav button {\n    background: var(--brown);\n    border: none;\n    color: var(--text-lt);\n    cursor: pointer;\n    font-size: 1rem;\n    font-weight: bold;\n    margin: 0 0.5rem;\n    padding: 10px 20px 10px;\n    border-top-left-radius: 23px;\n    border-top-right-radius: 23px;\n}\n  \nnav button:hover {\n    color: var(--green);\n}\n  \n#content {\n    padding: 2rem;\n    text-align: center;\n    background-color: var(--bg-alt);\n}\n  \n.logo {\n    width: 250px; /* Adjust size as needed */\n    height: auto;\n    margin: 1rem auto;\n}\n  \nh1, h2 {\n    color: var(--text-lt);\n}\n  \np {\n    color: var(--text-lt);\n    font-size: 1.2rem;\n}\n\n.home, .menu, .about {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  border: 2px solid var(--teal);\n  padding: 20px;\n  width: 480px;\n  margin: 0 auto 4rem;\n  text-shadow: 0 2px 3px rgba(0, 0, 0, 0.4);\n}\n\n.menu-category {\n  align-self: flex-start;\n  margin-right: 275px;\n}\n\n.menu-item {\n  font-weight: bold;\n  align-self: flex-start;\n  color: var(--text-lt);  \n}\n\n.item-description {\n  color: var(--text-lt);\n  font-size: 1rem;\n  margin: 4px 0 1rem;\n  width: 420px;\n}\n\nfooter {\n  background-color: var(--bg-dark); /* Alternative dark background */\n  color: var(--text-lt); /* Light text for dark background */\n  padding: 20px 0;\n  text-align: center;\n  font-family: 'Arial', sans-serif;\n  border-top: 2px solid var(--brown); /* Brown border for separation */\n}\n\nfooter p {\n  margin: 0;\n  padding: 5px 0;\n  font-size: 14px;\n}\n\n.social-links {\n  margin-top: 10px;\n}\n\n.social-links a {\n  color: var(--green); /* Primary green for icons */\n  font-size: 20px;\n  margin: 0 10px;\n  text-decoration: none;\n  transition: color 0.3s ease;\n}\n\n.social-links a:hover {\n  color: var(--golden-yellow); /* Golden yellow on hover */\n}\n\n.social-links a:focus {\n  outline: 2px solid var(--beige); /* Beige outline for accessibility */\n  outline-offset: 2px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createAbout() {\n    const aboutDiv = document.createElement('div');\n    aboutDiv.classList.add('about');\n\n    const headline = document.createElement('h1');\n    headline.textContent = 'About Us';\n    aboutDiv.appendChild(headline);\n\n    const description = document.createElement('p');\n    description.textContent = 'At The Twisted Fork, we believe in the power of delicious food to bring people together. It all started with a passion for culinary excellence that drives our dedicated team led by Zach, who brings years of experience to the table. We meticulously select the finest ingredients to create mouthwatering dishes that our patrons love.  Our cozy and inviting restaurant provides the perfect ambiance for a relaxed dining experience. Whether you are celebrating a special occasion or simply looking to enjoy a satisfying meal, The Twisted Fork is the place to be. Come and join us for an unforgettable dining journey that will keep you coming back for more.';\n    aboutDiv.appendChild(description);\n\n    return aboutDiv;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAbout);\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHome() {\n    const homeDiv = document.createElement('div');\n    homeDiv.classList.add('home');\n    \n    const headline = document.createElement('h1');\n    headline.textContent = 'Welcome to the Twisted Fork!';\n    homeDiv.appendChild(headline);\n\n    const description = document.createElement('p');\n    description.textContent = 'Where we serve food that will delight your taste buds! Our mission is to provide an exceptional dining experience along with excellent customer service, that is, if you are an excellent customer...Explore our menu, learn about our restaurant, and make a reservation today!';\n    homeDiv.appendChild(description);\n\n    return homeDiv;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _initialLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialLoad */ \"./src/initialLoad.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    (0,_initialLoad__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const content = document.querySelector('#content');\n    const homeButton = document.querySelector('#home-tab');\n    const menuButton = document.querySelector('#menu-tab');\n    const aboutButton = document.querySelector('#about-tab');\n\n    function loadContent(moduleFunction) {\n        content.innerHTML = '';\n        content.appendChild(moduleFunction());\n    }\n\n    homeButton.addEventListener('click', () => loadContent(_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));\n    menuButton.addEventListener('click', () => loadContent(_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"]));\n    aboutButton.addEventListener('click', () => loadContent(_about__WEBPACK_IMPORTED_MODULE_4__[\"default\"]));\n\n    loadContent(_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n});\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/initialLoad.js":
/*!****************************!*\
  !*** ./src/initialLoad.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/logo.png */ \"./src/images/logo.png\");\n\nfunction createHeader() {\n    const header = document.createElement('header');\n\n    // Create and insert logo\n    const logo = document.createElement('img');\n    logo.src = _images_logo_png__WEBPACK_IMPORTED_MODULE_0__;\n    logo.alt = 'The Twisted Fork Logo';\n    logo.classList.add('logo');\n    header.appendChild(logo);\n\n    // Create navigation\n    const nav = document.createElement('nav');\n    const homeButton = document.createElement('button');\n    homeButton.id = 'home-tab';\n    homeButton.textContent = 'Home';\n\n    const menuButton = document.createElement('button');\n    menuButton.id = 'menu-tab';\n    menuButton.textContent = 'Menu';\n\n    const aboutButton = document.createElement('button');\n    aboutButton.id = 'about-tab';\n    aboutButton.textContent = 'About';\n\n    nav.appendChild(homeButton);\n    nav.appendChild(menuButton);\n    nav.appendChild(aboutButton);\n    header.appendChild(nav);\n\n    return header;\n}\n\nfunction initialPageLoad() {\n    const body = document.querySelector('body');\n    \n    // Create and insert header\n    const header = createHeader();\n    body.insertBefore(header, document.querySelector('#content'));\n    \n    // Optionally, insert initial content\n    const content = document.querySelector('#content');\n    const initialContent = document.createElement('div');\n    initialContent.textContent = 'Initial content goes here.';\n    content.appendChild(initialContent);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialPageLoad);\n\n//# sourceURL=webpack://restaurant-page/./src/initialLoad.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenu() {\n    const menuDiv = document.createElement('div');\n    menuDiv.classList.add('menu');\n\n    const headline = document.createElement('h1');\n    headline.textContent = 'Our Menu';\n    menuDiv.appendChild(headline);\n\n    const description = document.createElement('p');\n    description.textContent = 'Buckle up for a gastronomic experience like no other! At The Twisted Fork, we take pride in our diverse menu offerings that will satisfy even the most discerning palates. From juicy burgers to refreshing salads, we got it all covered. Here are some of our most deletable dishes:';\n    menuDiv.appendChild(description);\n\n    const appetizerList = document.createElement('ul');\n    menuDiv.appendChild(appetizerList);\n\n    const appetizerSection = document.createElement ('h2');\n    appetizerSection.classList.add('menu-category');\n    appetizerSection.textContent = 'Appetizers';\n    menuDiv.appendChild(appetizerSection);\n\n    const item1 = document.createElement('li');\n    item1.classList.add('menu-item');\n    item1.textContent = 'Crispy Calamari';\n    menuDiv.appendChild(item1);\n\n    const item1Desc = document.createElement('p');\n    item1Desc.classList.add('item-description');\n    item1Desc.textContent = 'Lightly breaded calamari rings fried to perfection. Served with tangy marinara - $13';\n    menuDiv.appendChild(item1Desc);\n\n    const item2 = document.createElement('li');\n    item2.classList.add('menu-item');\n    item2.textContent = 'Loaded Nachos'\n    menuDiv.appendChild(item2);\n\n    const item2Desc = document.createElement('p');\n    item2Desc.classList.add('item-description');\n    item2Desc.textContent = 'A mountain of tortilla chips smothered in melted cheese, topped with seasoned ground beef, jalapenos, diced tomatoes, salsa, and a drizzle of sour cream - $10';\n    menuDiv.appendChild(item2Desc);\n\n    const item3 = document.createElement('li');\n    item3.classList.add('menu-item');\n    item3.textContent = 'Spinach and Artichoke Dip';\n    menuDiv.appendChild(item3);\n\n    const item3Desc= document.createElement('p');\n    item3Desc.classList.add('item-description');\n    item3Desc.textContent = 'Creamy and tangy dip made with spinach, artichoke hearts and a blend of four cheeses. Served with warm tortilla chips - $8';\n    menuDiv.appendChild(item3Desc);\n\n    const saladSection = document.createElement ('h2');\n    saladSection.classList.add('menu-category');\n    saladSection.textContent = 'Salads';\n    menuDiv.appendChild(saladSection);\n\n    const item4 = document.createElement('li');\n    item4.classList.add('menu-item');\n    item4.textContent = 'Caesar Salad';\n    menuDiv.appendChild(item4);\n\n    const item4Desc = document.createElement('p');\n    item4Desc.classList.add('item-description');\n    item4Desc.textContent = 'Crisp romaine lettuce tossed with creamy Caesar dressing, topped with freshly grated Parmesan cheese and crunchy croutons - $9';\n    menuDiv.appendChild(item4Desc);\n\n    const item5 = document.createElement('li');\n    item5.classList.add('menu-item');\n    item5.textContent = 'Mediterranean Salad';\n    menuDiv.appendChild(item5);\n\n    const item5Desc = document.createElement('p');\n    item5Desc.classList.add('item-description');\n    item5Desc.textContent = 'A delightful bunch of mixed greens, Kalamata olives, feta cheese, diced cucumbers, cherry tomatoes, and red onions. Drizzled with a zesty lemon-herb vinegarette - $10';\n    menuDiv.appendChild(item5Desc);\n\n    const item6 = document.createElement('li');\n    item6.classList.add('menu-item');\n    item6.textContent = 'Chef Salad';\n    menuDiv.appendChild(item6);\n\n    const item6Desc = document.createElement('p');\n    item6Desc.classList.add('item-description');\n    item6Desc.textContent = 'A wholesome salad that combines the freshest greens, protein-packed ingredients, and zesty dressing. Loaded with crisp lettuce, tender grilled chicken, boiled egg slices, crumbled bacon, cherry tomatoes, cucumber slices, shredded cheddar cheese, and croutons. Served with your choice of dressing - $13';\n    menuDiv.appendChild(item6Desc);\n\n    const entreeSection = document.createElement('h2');\n    entreeSection.classList.add('menu-category');\n    entreeSection.textContent = 'Entrees';\n    menuDiv.appendChild(entreeSection);\n\n    const item7 = document.createElement('li');\n    item7.classList.add('menu-item');\n    item7.textContent = 'Hamburger';\n    menuDiv.appendChild(item7);\n\n    const item7Desc = document.createElement('p');\n    item7Desc.classList.add('item-description');\n    item7Desc.textContent = 'A classic American favorite served on a grilled brioche bun, and comes with thousand island dressing, crisp shredded lettuce, ripe tomatoes, sliced red onions, and pickles. Served with a side of golden fries - $12';\n    menuDiv.appendChild(item7Desc);\n\n    const addCheese = document.createElement('em');\n    addCheese.classList.add('item-description');\n    addCheese.textContent = 'Add a slice of cheese or 2 slices of bacon - $1 / Both - $2';\n    menuDiv.appendChild(addCheese);\n\n    const item8 = document.createElement('li');\n    item8.classList.add('menu-item');\n    item8.textContent = 'Grilled Salmon';\n    menuDiv.appendChild(item8);\n\n    const item8Desc = document.createElement('p');\n    item8Desc.classList.add('item-description');\n    item8Desc.textContent = 'A perfectly grilled fillet of salmon marinated in lemon and herbs. Served with a side of steamed vegetables and choice of mashed potatoes or rice - $17';\n    menuDiv.appendChild(item8Desc);\n\n    const item9 = document.createElement('li');\n    item9.classList.add('menu-item');\n    item9.textContent = 'Vegetable Stir-Fry';\n    menuDiv.appendChild(item9);\n\n    const item9Desc = document.createElement('p');\n    item9Desc.classList.add('item-description');\n    item9Desc.textContent = 'A delightful blend of fresh vegetables stir-fried to perfection. Tossed in a savory soy-ginger sauce, and served over a bed of fluffy white rice - $12';\n    menuDiv.appendChild(item9Desc);\n\n    const item10 = document.createElement('li');\n    item10.classList.add('menu-item');\n    item10.textContent = 'BBQ Beef Ribs';\n    menuDiv.appendChild(item10);\n\n    const item10Desc = document.createElement('p');\n    item10Desc.classList.add('item-description');\n    item10Desc.textContent = 'Fall-off-the-bone tender beef ribs smothered in a smoky tangy barbecue sauce made in-house. Served with coleslaw and golden fries - $15';\n    menuDiv.appendChild(item10Desc);\n\n    const item11 = document.createElement('li');\n    item11.classList.add('menu-item');\n    item11.textContent = 'Ribeye Steak'\n    menuDiv.appendChild(item11);\n\n    const item11Desc = document.createElement('p');\n    item11Desc.classList.add('item-description');\n    item11Desc.textContent = 'A succulent 12-ounce ribeye steak, grillled to your choice of doneness. Accompanied by roasted garlic mashed potatoes and seasonal vegetables - $25';\n    menuDiv.appendChild(item11Desc);\n\n    return menuDiv;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/9477c9954c955fab9717.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/logo.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;