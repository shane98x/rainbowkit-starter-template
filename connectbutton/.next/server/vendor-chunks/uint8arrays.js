"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/uint8arrays";
exports.ids = ["vendor-chunks/uint8arrays"];
exports.modules = {

/***/ "(ssr)/../node_modules/uint8arrays/esm/src/alloc.js":
/*!****************************************************!*\
  !*** ../node_modules/uint8arrays/esm/src/alloc.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   alloc: () => (/* binding */ alloc),\n/* harmony export */   allocUnsafe: () => (/* binding */ allocUnsafe)\n/* harmony export */ });\n/* harmony import */ var _util_as_uint8array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/as-uint8array.js */ \"(ssr)/../node_modules/uint8arrays/esm/src/util/as-uint8array.js\");\n\nfunction alloc(size = 0) {\n    if (globalThis.Buffer != null && globalThis.Buffer.alloc != null) {\n        return (0,_util_as_uint8array_js__WEBPACK_IMPORTED_MODULE_0__.asUint8Array)(globalThis.Buffer.alloc(size));\n    }\n    return new Uint8Array(size);\n}\nfunction allocUnsafe(size = 0) {\n    if (globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null) {\n        return (0,_util_as_uint8array_js__WEBPACK_IMPORTED_MODULE_0__.asUint8Array)(globalThis.Buffer.allocUnsafe(size));\n    }\n    return new Uint8Array(size);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2VzbS9zcmMvYWxsb2MuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXVEO0FBQ2hELFNBQVNDLE1BQU1DLE9BQU8sQ0FBQztJQUM1QixJQUFJQyxXQUFXQyxNQUFNLElBQUksUUFBUUQsV0FBV0MsTUFBTSxDQUFDSCxLQUFLLElBQUksTUFBTTtRQUNoRSxPQUFPRCxvRUFBWUEsQ0FBQ0csV0FBV0MsTUFBTSxDQUFDSCxLQUFLLENBQUNDO0lBQzlDO0lBQ0EsT0FBTyxJQUFJRyxXQUFXSDtBQUN4QjtBQUNPLFNBQVNJLFlBQVlKLE9BQU8sQ0FBQztJQUNsQyxJQUFJQyxXQUFXQyxNQUFNLElBQUksUUFBUUQsV0FBV0MsTUFBTSxDQUFDRSxXQUFXLElBQUksTUFBTTtRQUN0RSxPQUFPTixvRUFBWUEsQ0FBQ0csV0FBV0MsTUFBTSxDQUFDRSxXQUFXLENBQUNKO0lBQ3BEO0lBQ0EsT0FBTyxJQUFJRyxXQUFXSDtBQUN4QiIsInNvdXJjZXMiOlsid2VicGFjazovL3JhaW5ib3draXQvLi4vbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2VzbS9zcmMvYWxsb2MuanM/MzBkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhc1VpbnQ4QXJyYXkgfSBmcm9tICcuL3V0aWwvYXMtdWludDhhcnJheS5qcyc7XG5leHBvcnQgZnVuY3Rpb24gYWxsb2Moc2l6ZSA9IDApIHtcbiAgaWYgKGdsb2JhbFRoaXMuQnVmZmVyICE9IG51bGwgJiYgZ2xvYmFsVGhpcy5CdWZmZXIuYWxsb2MgIT0gbnVsbCkge1xuICAgIHJldHVybiBhc1VpbnQ4QXJyYXkoZ2xvYmFsVGhpcy5CdWZmZXIuYWxsb2Moc2l6ZSkpO1xuICB9XG4gIHJldHVybiBuZXcgVWludDhBcnJheShzaXplKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhbGxvY1Vuc2FmZShzaXplID0gMCkge1xuICBpZiAoZ2xvYmFsVGhpcy5CdWZmZXIgIT0gbnVsbCAmJiBnbG9iYWxUaGlzLkJ1ZmZlci5hbGxvY1Vuc2FmZSAhPSBudWxsKSB7XG4gICAgcmV0dXJuIGFzVWludDhBcnJheShnbG9iYWxUaGlzLkJ1ZmZlci5hbGxvY1Vuc2FmZShzaXplKSk7XG4gIH1cbiAgcmV0dXJuIG5ldyBVaW50OEFycmF5KHNpemUpO1xufSJdLCJuYW1lcyI6WyJhc1VpbnQ4QXJyYXkiLCJhbGxvYyIsInNpemUiLCJnbG9iYWxUaGlzIiwiQnVmZmVyIiwiVWludDhBcnJheSIsImFsbG9jVW5zYWZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/uint8arrays/esm/src/alloc.js\n");

/***/ }),

/***/ "(ssr)/../node_modules/uint8arrays/esm/src/compare.js":
/*!******************************************************!*\
  !*** ../node_modules/uint8arrays/esm/src/compare.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   compare: () => (/* binding */ compare)\n/* harmony export */ });\nfunction compare(a, b) {\n    for(let i = 0; i < a.byteLength; i++){\n        if (a[i] < b[i]) {\n            return -1;\n        }\n        if (a[i] > b[i]) {\n            return 1;\n        }\n    }\n    if (a.byteLength > b.byteLength) {\n        return 1;\n    }\n    if (a.byteLength < b.byteLength) {\n        return -1;\n    }\n    return 0;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2VzbS9zcmMvY29tcGFyZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sU0FBU0EsUUFBUUMsQ0FBQyxFQUFFQyxDQUFDO0lBQzFCLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJRixFQUFFRyxVQUFVLEVBQUVELElBQUs7UUFDckMsSUFBSUYsQ0FBQyxDQUFDRSxFQUFFLEdBQUdELENBQUMsQ0FBQ0MsRUFBRSxFQUFFO1lBQ2YsT0FBTyxDQUFDO1FBQ1Y7UUFDQSxJQUFJRixDQUFDLENBQUNFLEVBQUUsR0FBR0QsQ0FBQyxDQUFDQyxFQUFFLEVBQUU7WUFDZixPQUFPO1FBQ1Q7SUFDRjtJQUNBLElBQUlGLEVBQUVHLFVBQVUsR0FBR0YsRUFBRUUsVUFBVSxFQUFFO1FBQy9CLE9BQU87SUFDVDtJQUNBLElBQUlILEVBQUVHLFVBQVUsR0FBR0YsRUFBRUUsVUFBVSxFQUFFO1FBQy9CLE9BQU8sQ0FBQztJQUNWO0lBQ0EsT0FBTztBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmFpbmJvd2tpdC8uLi9ub2RlX21vZHVsZXMvdWludDhhcnJheXMvZXNtL3NyYy9jb21wYXJlLmpzP2EyOWYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmUoYSwgYikge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGEuYnl0ZUxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGFbaV0gPCBiW2ldKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGlmIChhW2ldID4gYltpXSkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICB9XG4gIGlmIChhLmJ5dGVMZW5ndGggPiBiLmJ5dGVMZW5ndGgpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICBpZiAoYS5ieXRlTGVuZ3RoIDwgYi5ieXRlTGVuZ3RoKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIHJldHVybiAwO1xufSJdLCJuYW1lcyI6WyJjb21wYXJlIiwiYSIsImIiLCJpIiwiYnl0ZUxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/uint8arrays/esm/src/compare.js\n");

/***/ }),

/***/ "(ssr)/../node_modules/uint8arrays/esm/src/concat.js":
/*!*****************************************************!*\
  !*** ../node_modules/uint8arrays/esm/src/concat.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   concat: () => (/* binding */ concat)\n/* harmony export */ });\n/* harmony import */ var _alloc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alloc.js */ \"(ssr)/../node_modules/uint8arrays/esm/src/alloc.js\");\n/* harmony import */ var _util_as_uint8array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/as-uint8array.js */ \"(ssr)/../node_modules/uint8arrays/esm/src/util/as-uint8array.js\");\n\n\nfunction concat(arrays, length) {\n    if (!length) {\n        length = arrays.reduce((acc, curr)=>acc + curr.length, 0);\n    }\n    const output = (0,_alloc_js__WEBPACK_IMPORTED_MODULE_0__.allocUnsafe)(length);\n    let offset = 0;\n    for (const arr of arrays){\n        output.set(arr, offset);\n        offset += arr.length;\n    }\n    return (0,_util_as_uint8array_js__WEBPACK_IMPORTED_MODULE_1__.asUint8Array)(output);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2VzbS9zcmMvY29uY2F0LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QztBQUNjO0FBQ2hELFNBQVNFLE9BQU9DLE1BQU0sRUFBRUMsTUFBTTtJQUNuQyxJQUFJLENBQUNBLFFBQVE7UUFDWEEsU0FBU0QsT0FBT0UsTUFBTSxDQUFDLENBQUNDLEtBQUtDLE9BQVNELE1BQU1DLEtBQUtILE1BQU0sRUFBRTtJQUMzRDtJQUNBLE1BQU1JLFNBQVNSLHNEQUFXQSxDQUFDSTtJQUMzQixJQUFJSyxTQUFTO0lBQ2IsS0FBSyxNQUFNQyxPQUFPUCxPQUFRO1FBQ3hCSyxPQUFPRyxHQUFHLENBQUNELEtBQUtEO1FBQ2hCQSxVQUFVQyxJQUFJTixNQUFNO0lBQ3RCO0lBQ0EsT0FBT0gsb0VBQVlBLENBQUNPO0FBQ3RCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmFpbmJvd2tpdC8uLi9ub2RlX21vZHVsZXMvdWludDhhcnJheXMvZXNtL3NyYy9jb25jYXQuanM/N2I0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGxvY1Vuc2FmZSB9IGZyb20gJy4vYWxsb2MuanMnO1xuaW1wb3J0IHsgYXNVaW50OEFycmF5IH0gZnJvbSAnLi91dGlsL2FzLXVpbnQ4YXJyYXkuanMnO1xuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdChhcnJheXMsIGxlbmd0aCkge1xuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IGFycmF5cy5yZWR1Y2UoKGFjYywgY3VycikgPT4gYWNjICsgY3Vyci5sZW5ndGgsIDApO1xuICB9XG4gIGNvbnN0IG91dHB1dCA9IGFsbG9jVW5zYWZlKGxlbmd0aCk7XG4gIGxldCBvZmZzZXQgPSAwO1xuICBmb3IgKGNvbnN0IGFyciBvZiBhcnJheXMpIHtcbiAgICBvdXRwdXQuc2V0KGFyciwgb2Zmc2V0KTtcbiAgICBvZmZzZXQgKz0gYXJyLmxlbmd0aDtcbiAgfVxuICByZXR1cm4gYXNVaW50OEFycmF5KG91dHB1dCk7XG59Il0sIm5hbWVzIjpbImFsbG9jVW5zYWZlIiwiYXNVaW50OEFycmF5IiwiY29uY2F0IiwiYXJyYXlzIiwibGVuZ3RoIiwicmVkdWNlIiwiYWNjIiwiY3VyciIsIm91dHB1dCIsIm9mZnNldCIsImFyciIsInNldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/uint8arrays/esm/src/concat.js\n");

/***/ }),

/***/ "(ssr)/../node_modules/uint8arrays/esm/src/equals.js":
/*!*****************************************************!*\
  !*** ../node_modules/uint8arrays/esm/src/equals.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   equals: () => (/* binding */ equals)\n/* harmony export */ });\nfunction equals(a, b) {\n    if (a === b) {\n        return true;\n    }\n    if (a.byteLength !== b.byteLength) {\n        return false;\n    }\n    for(let i = 0; i < a.byteLength; i++){\n        if (a[i] !== b[i]) {\n            return false;\n        }\n    }\n    return true;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2VzbS9zcmMvZXF1YWxzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxTQUFTQSxPQUFPQyxDQUFDLEVBQUVDLENBQUM7SUFDekIsSUFBSUQsTUFBTUMsR0FBRztRQUNYLE9BQU87SUFDVDtJQUNBLElBQUlELEVBQUVFLFVBQVUsS0FBS0QsRUFBRUMsVUFBVSxFQUFFO1FBQ2pDLE9BQU87SUFDVDtJQUNBLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJSCxFQUFFRSxVQUFVLEVBQUVDLElBQUs7UUFDckMsSUFBSUgsQ0FBQyxDQUFDRyxFQUFFLEtBQUtGLENBQUMsQ0FBQ0UsRUFBRSxFQUFFO1lBQ2pCLE9BQU87UUFDVDtJQUNGO0lBQ0EsT0FBTztBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmFpbmJvd2tpdC8uLi9ub2RlX21vZHVsZXMvdWludDhhcnJheXMvZXNtL3NyYy9lcXVhbHMuanM/YWEwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZXF1YWxzKGEsIGIpIHtcbiAgaWYgKGEgPT09IGIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoYS5ieXRlTGVuZ3RoICE9PSBiLmJ5dGVMZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhLmJ5dGVMZW5ndGg7IGkrKykge1xuICAgIGlmIChhW2ldICE9PSBiW2ldKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufSJdLCJuYW1lcyI6WyJlcXVhbHMiLCJhIiwiYiIsImJ5dGVMZW5ndGgiLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/uint8arrays/esm/src/equals.js\n");

/***/ }),

/***/ "(ssr)/../node_modules/uint8arrays/esm/src/from-string.js":
/*!**********************************************************!*\
  !*** ../node_modules/uint8arrays/esm/src/from-string.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromString: () => (/* binding */ fromString)\n/* harmony export */ });\n/* harmony import */ var _util_bases_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/bases.js */ \"(ssr)/../node_modules/uint8arrays/esm/src/util/bases.js\");\n/* harmony import */ var _util_as_uint8array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/as-uint8array.js */ \"(ssr)/../node_modules/uint8arrays/esm/src/util/as-uint8array.js\");\n\n\nfunction fromString(string, encoding = \"utf8\") {\n    const base = _util_bases_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][encoding];\n    if (!base) {\n        throw new Error(`Unsupported encoding \"${encoding}\"`);\n    }\n    if ((encoding === \"utf8\" || encoding === \"utf-8\") && globalThis.Buffer != null && globalThis.Buffer.from != null) {\n        return (0,_util_as_uint8array_js__WEBPACK_IMPORTED_MODULE_1__.asUint8Array)(globalThis.Buffer.from(string, \"utf-8\"));\n    }\n    return base.decoder.decode(`${base.prefix}${string}`);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2VzbS9zcmMvZnJvbS1zdHJpbmcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW9DO0FBQ21CO0FBQ2hELFNBQVNFLFdBQVdDLE1BQU0sRUFBRUMsV0FBVyxNQUFNO0lBQ2xELE1BQU1DLE9BQU9MLHNEQUFLLENBQUNJLFNBQVM7SUFDNUIsSUFBSSxDQUFDQyxNQUFNO1FBQ1QsTUFBTSxJQUFJQyxNQUFNLENBQUMsc0JBQXNCLEVBQUdGLFNBQVUsQ0FBQyxDQUFDO0lBQ3hEO0lBQ0EsSUFBSSxDQUFDQSxhQUFhLFVBQVVBLGFBQWEsT0FBTSxLQUFNRyxXQUFXQyxNQUFNLElBQUksUUFBUUQsV0FBV0MsTUFBTSxDQUFDQyxJQUFJLElBQUksTUFBTTtRQUNoSCxPQUFPUixvRUFBWUEsQ0FBQ00sV0FBV0MsTUFBTSxDQUFDQyxJQUFJLENBQUNOLFFBQVE7SUFDckQ7SUFDQSxPQUFPRSxLQUFLSyxPQUFPLENBQUNDLE1BQU0sQ0FBQyxDQUFDLEVBQUdOLEtBQUtPLE1BQU0sQ0FBRSxFQUFHVCxPQUFRLENBQUM7QUFDMUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYWluYm93a2l0Ly4uL25vZGVfbW9kdWxlcy91aW50OGFycmF5cy9lc20vc3JjL2Zyb20tc3RyaW5nLmpzPzZjMTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJhc2VzIGZyb20gJy4vdXRpbC9iYXNlcy5qcyc7XG5pbXBvcnQgeyBhc1VpbnQ4QXJyYXkgfSBmcm9tICcuL3V0aWwvYXMtdWludDhhcnJheS5qcyc7XG5leHBvcnQgZnVuY3Rpb24gZnJvbVN0cmluZyhzdHJpbmcsIGVuY29kaW5nID0gJ3V0ZjgnKSB7XG4gIGNvbnN0IGJhc2UgPSBiYXNlc1tlbmNvZGluZ107XG4gIGlmICghYmFzZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgZW5jb2RpbmcgXCIkeyBlbmNvZGluZyB9XCJgKTtcbiAgfVxuICBpZiAoKGVuY29kaW5nID09PSAndXRmOCcgfHwgZW5jb2RpbmcgPT09ICd1dGYtOCcpICYmIGdsb2JhbFRoaXMuQnVmZmVyICE9IG51bGwgJiYgZ2xvYmFsVGhpcy5CdWZmZXIuZnJvbSAhPSBudWxsKSB7XG4gICAgcmV0dXJuIGFzVWludDhBcnJheShnbG9iYWxUaGlzLkJ1ZmZlci5mcm9tKHN0cmluZywgJ3V0Zi04JykpO1xuICB9XG4gIHJldHVybiBiYXNlLmRlY29kZXIuZGVjb2RlKGAkeyBiYXNlLnByZWZpeCB9JHsgc3RyaW5nIH1gKTtcbn0iXSwibmFtZXMiOlsiYmFzZXMiLCJhc1VpbnQ4QXJyYXkiLCJmcm9tU3RyaW5nIiwic3RyaW5nIiwiZW5jb2RpbmciLCJiYXNlIiwiRXJyb3IiLCJnbG9iYWxUaGlzIiwiQnVmZmVyIiwiZnJvbSIsImRlY29kZXIiLCJkZWNvZGUiLCJwcmVmaXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/uint8arrays/esm/src/from-string.js\n");

/***/ }),

/***/ "(ssr)/../node_modules/uint8arrays/esm/src/index.js":
/*!****************************************************!*\
  !*** ../node_modules/uint8arrays/esm/src/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   compare: () => (/* reexport safe */ _compare_js__WEBPACK_IMPORTED_MODULE_0__.compare),\n/* harmony export */   concat: () => (/* reexport safe */ _concat_js__WEBPACK_IMPORTED_MODULE_1__.concat),\n/* harmony export */   equals: () => (/* reexport safe */ _equals_js__WEBPACK_IMPORTED_MODULE_2__.equals),\n/* harmony export */   fromString: () => (/* reexport safe */ _from_string_js__WEBPACK_IMPORTED_MODULE_3__.fromString),\n/* harmony export */   toString: () => (/* reexport safe */ _to_string_js__WEBPACK_IMPORTED_MODULE_4__.toString),\n/* harmony export */   xor: () => (/* reexport safe */ _xor_js__WEBPACK_IMPORTED_MODULE_5__.xor)\n/* harmony export */ });\n/* harmony import */ var _compare_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compare.js */ \"(ssr)/../node_modules/uint8arrays/esm/src/compare.js\");\n/* harmony import */ var _concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./concat.js */ \"(ssr)/../node_modules/uint8arrays/esm/src/concat.js\");\n/* harmony import */ var _equals_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./equals.js */ \"(ssr)/../node_modules/uint8arrays/esm/src/equals.js\");\n/* harmony import */ var _from_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./from-string.js */ \"(ssr)/../node_modules/uint8arrays/esm/src/from-string.js\");\n/* harmony import */ var _to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./to-string.js */ \"(ssr)/../node_modules/uint8arrays/esm/src/to-string.js\");\n/* harmony import */ var _xor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./xor.js */ \"(ssr)/../node_modules/uint8arrays/esm/src/xor.js\");\n\n\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2VzbS9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ0Y7QUFDQTtBQUNTO0FBQ0o7QUFDWDtBQVE3QiIsInNvdXJjZXMiOlsid2VicGFjazovL3JhaW5ib3draXQvLi4vbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2VzbS9zcmMvaW5kZXguanM/ZjY0ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21wYXJlIH0gZnJvbSAnLi9jb21wYXJlLmpzJztcbmltcG9ydCB7IGNvbmNhdCB9IGZyb20gJy4vY29uY2F0LmpzJztcbmltcG9ydCB7IGVxdWFscyB9IGZyb20gJy4vZXF1YWxzLmpzJztcbmltcG9ydCB7IGZyb21TdHJpbmcgfSBmcm9tICcuL2Zyb20tc3RyaW5nLmpzJztcbmltcG9ydCB7IHRvU3RyaW5nIH0gZnJvbSAnLi90by1zdHJpbmcuanMnO1xuaW1wb3J0IHsgeG9yIH0gZnJvbSAnLi94b3IuanMnO1xuZXhwb3J0IHtcbiAgY29tcGFyZSxcbiAgY29uY2F0LFxuICBlcXVhbHMsXG4gIGZyb21TdHJpbmcsXG4gIHRvU3RyaW5nLFxuICB4b3Jcbn07Il0sIm5hbWVzIjpbImNvbXBhcmUiLCJjb25jYXQiLCJlcXVhbHMiLCJmcm9tU3RyaW5nIiwidG9TdHJpbmciLCJ4b3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/uint8arrays/esm/src/index.js\n");

/***/ }),

/***/ "(ssr)/../node_modules/uint8arrays/esm/src/to-string.js":
/*!********************************************************!*\
  !*** ../node_modules/uint8arrays/esm/src/to-string.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toString: () => (/* binding */ toString)\n/* harmony export */ });\n/* harmony import */ var _util_bases_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/bases.js */ \"(ssr)/../node_modules/uint8arrays/esm/src/util/bases.js\");\n\nfunction toString(array, encoding = \"utf8\") {\n    const base = _util_bases_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][encoding];\n    if (!base) {\n        throw new Error(`Unsupported encoding \"${encoding}\"`);\n    }\n    if ((encoding === \"utf8\" || encoding === \"utf-8\") && globalThis.Buffer != null && globalThis.Buffer.from != null) {\n        return globalThis.Buffer.from(array.buffer, array.byteOffset, array.byteLength).toString(\"utf8\");\n    }\n    return base.encoder.encode(array).substring(1);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2VzbS9zcmMvdG8tc3RyaW5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQW9DO0FBQzdCLFNBQVNDLFNBQVNDLEtBQUssRUFBRUMsV0FBVyxNQUFNO0lBQy9DLE1BQU1DLE9BQU9KLHNEQUFLLENBQUNHLFNBQVM7SUFDNUIsSUFBSSxDQUFDQyxNQUFNO1FBQ1QsTUFBTSxJQUFJQyxNQUFNLENBQUMsc0JBQXNCLEVBQUdGLFNBQVUsQ0FBQyxDQUFDO0lBQ3hEO0lBQ0EsSUFBSSxDQUFDQSxhQUFhLFVBQVVBLGFBQWEsT0FBTSxLQUFNRyxXQUFXQyxNQUFNLElBQUksUUFBUUQsV0FBV0MsTUFBTSxDQUFDQyxJQUFJLElBQUksTUFBTTtRQUNoSCxPQUFPRixXQUFXQyxNQUFNLENBQUNDLElBQUksQ0FBQ04sTUFBTU8sTUFBTSxFQUFFUCxNQUFNUSxVQUFVLEVBQUVSLE1BQU1TLFVBQVUsRUFBRVYsUUFBUSxDQUFDO0lBQzNGO0lBQ0EsT0FBT0csS0FBS1EsT0FBTyxDQUFDQyxNQUFNLENBQUNYLE9BQU9ZLFNBQVMsQ0FBQztBQUM5QyIsInNvdXJjZXMiOlsid2VicGFjazovL3JhaW5ib3draXQvLi4vbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2VzbS9zcmMvdG8tc3RyaW5nLmpzP2VhMmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJhc2VzIGZyb20gJy4vdXRpbC9iYXNlcy5qcyc7XG5leHBvcnQgZnVuY3Rpb24gdG9TdHJpbmcoYXJyYXksIGVuY29kaW5nID0gJ3V0ZjgnKSB7XG4gIGNvbnN0IGJhc2UgPSBiYXNlc1tlbmNvZGluZ107XG4gIGlmICghYmFzZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgZW5jb2RpbmcgXCIkeyBlbmNvZGluZyB9XCJgKTtcbiAgfVxuICBpZiAoKGVuY29kaW5nID09PSAndXRmOCcgfHwgZW5jb2RpbmcgPT09ICd1dGYtOCcpICYmIGdsb2JhbFRoaXMuQnVmZmVyICE9IG51bGwgJiYgZ2xvYmFsVGhpcy5CdWZmZXIuZnJvbSAhPSBudWxsKSB7XG4gICAgcmV0dXJuIGdsb2JhbFRoaXMuQnVmZmVyLmZyb20oYXJyYXkuYnVmZmVyLCBhcnJheS5ieXRlT2Zmc2V0LCBhcnJheS5ieXRlTGVuZ3RoKS50b1N0cmluZygndXRmOCcpO1xuICB9XG4gIHJldHVybiBiYXNlLmVuY29kZXIuZW5jb2RlKGFycmF5KS5zdWJzdHJpbmcoMSk7XG59Il0sIm5hbWVzIjpbImJhc2VzIiwidG9TdHJpbmciLCJhcnJheSIsImVuY29kaW5nIiwiYmFzZSIsIkVycm9yIiwiZ2xvYmFsVGhpcyIsIkJ1ZmZlciIsImZyb20iLCJidWZmZXIiLCJieXRlT2Zmc2V0IiwiYnl0ZUxlbmd0aCIsImVuY29kZXIiLCJlbmNvZGUiLCJzdWJzdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/uint8arrays/esm/src/to-string.js\n");

/***/ }),

/***/ "(ssr)/../node_modules/uint8arrays/esm/src/util/as-uint8array.js":
/*!*****************************************************************!*\
  !*** ../node_modules/uint8arrays/esm/src/util/as-uint8array.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   asUint8Array: () => (/* binding */ asUint8Array)\n/* harmony export */ });\nfunction asUint8Array(buf) {\n    if (globalThis.Buffer != null) {\n        return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);\n    }\n    return buf;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2VzbS9zcmMvdXRpbC9hcy11aW50OGFycmF5LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxTQUFTQSxhQUFhQyxHQUFHO0lBQzlCLElBQUlDLFdBQVdDLE1BQU0sSUFBSSxNQUFNO1FBQzdCLE9BQU8sSUFBSUMsV0FBV0gsSUFBSUksTUFBTSxFQUFFSixJQUFJSyxVQUFVLEVBQUVMLElBQUlNLFVBQVU7SUFDbEU7SUFDQSxPQUFPTjtBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmFpbmJvd2tpdC8uLi9ub2RlX21vZHVsZXMvdWludDhhcnJheXMvZXNtL3NyYy91dGlsL2FzLXVpbnQ4YXJyYXkuanM/OGU5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gYXNVaW50OEFycmF5KGJ1Zikge1xuICBpZiAoZ2xvYmFsVGhpcy5CdWZmZXIgIT0gbnVsbCkge1xuICAgIHJldHVybiBuZXcgVWludDhBcnJheShidWYuYnVmZmVyLCBidWYuYnl0ZU9mZnNldCwgYnVmLmJ5dGVMZW5ndGgpO1xuICB9XG4gIHJldHVybiBidWY7XG59Il0sIm5hbWVzIjpbImFzVWludDhBcnJheSIsImJ1ZiIsImdsb2JhbFRoaXMiLCJCdWZmZXIiLCJVaW50OEFycmF5IiwiYnVmZmVyIiwiYnl0ZU9mZnNldCIsImJ5dGVMZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/uint8arrays/esm/src/util/as-uint8array.js\n");

/***/ }),

/***/ "(ssr)/../node_modules/uint8arrays/esm/src/util/bases.js":
/*!*********************************************************!*\
  !*** ../node_modules/uint8arrays/esm/src/util/bases.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var multiformats_basics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiformats/basics */ \"(ssr)/../node_modules/multiformats/esm/src/basics.js\");\n/* harmony import */ var _alloc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../alloc.js */ \"(ssr)/../node_modules/uint8arrays/esm/src/alloc.js\");\n\n\nfunction createCodec(name, prefix, encode, decode) {\n    return {\n        name,\n        prefix,\n        encoder: {\n            name,\n            prefix,\n            encode\n        },\n        decoder: {\n            decode\n        }\n    };\n}\nconst string = createCodec(\"utf8\", \"u\", (buf)=>{\n    const decoder = new TextDecoder(\"utf8\");\n    return \"u\" + decoder.decode(buf);\n}, (str)=>{\n    const encoder = new TextEncoder();\n    return encoder.encode(str.substring(1));\n});\nconst ascii = createCodec(\"ascii\", \"a\", (buf)=>{\n    let string = \"a\";\n    for(let i = 0; i < buf.length; i++){\n        string += String.fromCharCode(buf[i]);\n    }\n    return string;\n}, (str)=>{\n    str = str.substring(1);\n    const buf = (0,_alloc_js__WEBPACK_IMPORTED_MODULE_1__.allocUnsafe)(str.length);\n    for(let i = 0; i < str.length; i++){\n        buf[i] = str.charCodeAt(i);\n    }\n    return buf;\n});\nconst BASES = {\n    utf8: string,\n    \"utf-8\": string,\n    hex: multiformats_basics__WEBPACK_IMPORTED_MODULE_0__.bases.base16,\n    latin1: ascii,\n    ascii: ascii,\n    binary: ascii,\n    ...multiformats_basics__WEBPACK_IMPORTED_MODULE_0__.bases\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BASES);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2VzbS9zcmMvdXRpbC9iYXNlcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEM7QUFDRjtBQUMxQyxTQUFTRSxZQUFZQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxNQUFNO0lBQy9DLE9BQU87UUFDTEg7UUFDQUM7UUFDQUcsU0FBUztZQUNQSjtZQUNBQztZQUNBQztRQUNGO1FBQ0FHLFNBQVM7WUFBRUY7UUFBTztJQUNwQjtBQUNGO0FBQ0EsTUFBTUcsU0FBU1AsWUFBWSxRQUFRLEtBQUtRLENBQUFBO0lBQ3RDLE1BQU1GLFVBQVUsSUFBSUcsWUFBWTtJQUNoQyxPQUFPLE1BQU1ILFFBQVFGLE1BQU0sQ0FBQ0k7QUFDOUIsR0FBR0UsQ0FBQUE7SUFDRCxNQUFNTCxVQUFVLElBQUlNO0lBQ3BCLE9BQU9OLFFBQVFGLE1BQU0sQ0FBQ08sSUFBSUUsU0FBUyxDQUFDO0FBQ3RDO0FBQ0EsTUFBTUMsUUFBUWIsWUFBWSxTQUFTLEtBQUtRLENBQUFBO0lBQ3RDLElBQUlELFNBQVM7SUFDYixJQUFLLElBQUlPLElBQUksR0FBR0EsSUFBSU4sSUFBSU8sTUFBTSxFQUFFRCxJQUFLO1FBQ25DUCxVQUFVUyxPQUFPQyxZQUFZLENBQUNULEdBQUcsQ0FBQ00sRUFBRTtJQUN0QztJQUNBLE9BQU9QO0FBQ1QsR0FBR0csQ0FBQUE7SUFDREEsTUFBTUEsSUFBSUUsU0FBUyxDQUFDO0lBQ3BCLE1BQU1KLE1BQU1ULHNEQUFXQSxDQUFDVyxJQUFJSyxNQUFNO0lBQ2xDLElBQUssSUFBSUQsSUFBSSxHQUFHQSxJQUFJSixJQUFJSyxNQUFNLEVBQUVELElBQUs7UUFDbkNOLEdBQUcsQ0FBQ00sRUFBRSxHQUFHSixJQUFJUSxVQUFVLENBQUNKO0lBQzFCO0lBQ0EsT0FBT047QUFDVDtBQUNBLE1BQU1XLFFBQVE7SUFDWkMsTUFBTWI7SUFDTixTQUFTQTtJQUNUYyxLQUFLdkIsc0RBQUtBLENBQUN3QixNQUFNO0lBQ2pCQyxRQUFRVjtJQUNSQSxPQUFPQTtJQUNQVyxRQUFRWDtJQUNSLEdBQUdmLHNEQUFLO0FBQ1Y7QUFDQSxpRUFBZXFCLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYWluYm93a2l0Ly4uL25vZGVfbW9kdWxlcy91aW50OGFycmF5cy9lc20vc3JjL3V0aWwvYmFzZXMuanM/Yjc3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBiYXNlcyB9IGZyb20gJ211bHRpZm9ybWF0cy9iYXNpY3MnO1xuaW1wb3J0IHsgYWxsb2NVbnNhZmUgfSBmcm9tICcuLi9hbGxvYy5qcyc7XG5mdW5jdGlvbiBjcmVhdGVDb2RlYyhuYW1lLCBwcmVmaXgsIGVuY29kZSwgZGVjb2RlKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZSxcbiAgICBwcmVmaXgsXG4gICAgZW5jb2Rlcjoge1xuICAgICAgbmFtZSxcbiAgICAgIHByZWZpeCxcbiAgICAgIGVuY29kZVxuICAgIH0sXG4gICAgZGVjb2RlcjogeyBkZWNvZGUgfVxuICB9O1xufVxuY29uc3Qgc3RyaW5nID0gY3JlYXRlQ29kZWMoJ3V0ZjgnLCAndScsIGJ1ZiA9PiB7XG4gIGNvbnN0IGRlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoJ3V0ZjgnKTtcbiAgcmV0dXJuICd1JyArIGRlY29kZXIuZGVjb2RlKGJ1Zik7XG59LCBzdHIgPT4ge1xuICBjb25zdCBlbmNvZGVyID0gbmV3IFRleHRFbmNvZGVyKCk7XG4gIHJldHVybiBlbmNvZGVyLmVuY29kZShzdHIuc3Vic3RyaW5nKDEpKTtcbn0pO1xuY29uc3QgYXNjaWkgPSBjcmVhdGVDb2RlYygnYXNjaWknLCAnYScsIGJ1ZiA9PiB7XG4gIGxldCBzdHJpbmcgPSAnYSc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYnVmLmxlbmd0aDsgaSsrKSB7XG4gICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKTtcbiAgfVxuICByZXR1cm4gc3RyaW5nO1xufSwgc3RyID0+IHtcbiAgc3RyID0gc3RyLnN1YnN0cmluZygxKTtcbiAgY29uc3QgYnVmID0gYWxsb2NVbnNhZmUoc3RyLmxlbmd0aCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgYnVmW2ldID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gIH1cbiAgcmV0dXJuIGJ1Zjtcbn0pO1xuY29uc3QgQkFTRVMgPSB7XG4gIHV0Zjg6IHN0cmluZyxcbiAgJ3V0Zi04Jzogc3RyaW5nLFxuICBoZXg6IGJhc2VzLmJhc2UxNixcbiAgbGF0aW4xOiBhc2NpaSxcbiAgYXNjaWk6IGFzY2lpLFxuICBiaW5hcnk6IGFzY2lpLFxuICAuLi5iYXNlc1xufTtcbmV4cG9ydCBkZWZhdWx0IEJBU0VTOyJdLCJuYW1lcyI6WyJiYXNlcyIsImFsbG9jVW5zYWZlIiwiY3JlYXRlQ29kZWMiLCJuYW1lIiwicHJlZml4IiwiZW5jb2RlIiwiZGVjb2RlIiwiZW5jb2RlciIsImRlY29kZXIiLCJzdHJpbmciLCJidWYiLCJUZXh0RGVjb2RlciIsInN0ciIsIlRleHRFbmNvZGVyIiwic3Vic3RyaW5nIiwiYXNjaWkiLCJpIiwibGVuZ3RoIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiY2hhckNvZGVBdCIsIkJBU0VTIiwidXRmOCIsImhleCIsImJhc2UxNiIsImxhdGluMSIsImJpbmFyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/uint8arrays/esm/src/util/bases.js\n");

/***/ }),

/***/ "(ssr)/../node_modules/uint8arrays/esm/src/xor.js":
/*!**************************************************!*\
  !*** ../node_modules/uint8arrays/esm/src/xor.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   xor: () => (/* binding */ xor)\n/* harmony export */ });\n/* harmony import */ var _alloc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alloc.js */ \"(ssr)/../node_modules/uint8arrays/esm/src/alloc.js\");\n/* harmony import */ var _util_as_uint8array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/as-uint8array.js */ \"(ssr)/../node_modules/uint8arrays/esm/src/util/as-uint8array.js\");\n\n\nfunction xor(a, b) {\n    if (a.length !== b.length) {\n        throw new Error(\"Inputs should have the same length\");\n    }\n    const result = (0,_alloc_js__WEBPACK_IMPORTED_MODULE_0__.allocUnsafe)(a.length);\n    for(let i = 0; i < a.length; i++){\n        result[i] = a[i] ^ b[i];\n    }\n    return (0,_util_as_uint8array_js__WEBPACK_IMPORTED_MODULE_1__.asUint8Array)(result);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2VzbS9zcmMveG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QztBQUNjO0FBQ2hELFNBQVNFLElBQUlDLENBQUMsRUFBRUMsQ0FBQztJQUN0QixJQUFJRCxFQUFFRSxNQUFNLEtBQUtELEVBQUVDLE1BQU0sRUFBRTtRQUN6QixNQUFNLElBQUlDLE1BQU07SUFDbEI7SUFDQSxNQUFNQyxTQUFTUCxzREFBV0EsQ0FBQ0csRUFBRUUsTUFBTTtJQUNuQyxJQUFLLElBQUlHLElBQUksR0FBR0EsSUFBSUwsRUFBRUUsTUFBTSxFQUFFRyxJQUFLO1FBQ2pDRCxNQUFNLENBQUNDLEVBQUUsR0FBR0wsQ0FBQyxDQUFDSyxFQUFFLEdBQUdKLENBQUMsQ0FBQ0ksRUFBRTtJQUN6QjtJQUNBLE9BQU9QLG9FQUFZQSxDQUFDTTtBQUN0QiIsInNvdXJjZXMiOlsid2VicGFjazovL3JhaW5ib3draXQvLi4vbm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2VzbS9zcmMveG9yLmpzPzIzYjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsb2NVbnNhZmUgfSBmcm9tICcuL2FsbG9jLmpzJztcbmltcG9ydCB7IGFzVWludDhBcnJheSB9IGZyb20gJy4vdXRpbC9hcy11aW50OGFycmF5LmpzJztcbmV4cG9ydCBmdW5jdGlvbiB4b3IoYSwgYikge1xuICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnB1dHMgc2hvdWxkIGhhdmUgdGhlIHNhbWUgbGVuZ3RoJyk7XG4gIH1cbiAgY29uc3QgcmVzdWx0ID0gYWxsb2NVbnNhZmUoYS5sZW5ndGgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICByZXN1bHRbaV0gPSBhW2ldIF4gYltpXTtcbiAgfVxuICByZXR1cm4gYXNVaW50OEFycmF5KHJlc3VsdCk7XG59Il0sIm5hbWVzIjpbImFsbG9jVW5zYWZlIiwiYXNVaW50OEFycmF5IiwieG9yIiwiYSIsImIiLCJsZW5ndGgiLCJFcnJvciIsInJlc3VsdCIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/uint8arrays/esm/src/xor.js\n");

/***/ })

};
;