"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/process-warning";
exports.ids = ["vendor-chunks/process-warning"];
exports.modules = {

/***/ "(ssr)/../node_modules/process-warning/index.js":
/*!************************************************!*\
  !*** ../node_modules/process-warning/index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst { format } = __webpack_require__(/*! util */ \"util\");\nfunction build() {\n    const codes = {};\n    const emitted = new Map();\n    function create(name, code, message) {\n        if (!name) throw new Error(\"Warning name must not be empty\");\n        if (!code) throw new Error(\"Warning code must not be empty\");\n        if (!message) throw new Error(\"Warning message must not be empty\");\n        code = code.toUpperCase();\n        if (codes[code] !== undefined) {\n            throw new Error(`The code '${code}' already exist`);\n        }\n        function buildWarnOpts(a, b, c) {\n            // more performant than spread (...) operator\n            let formatted;\n            if (a && b && c) {\n                formatted = format(message, a, b, c);\n            } else if (a && b) {\n                formatted = format(message, a, b);\n            } else if (a) {\n                formatted = format(message, a);\n            } else {\n                formatted = message;\n            }\n            return {\n                code,\n                name,\n                message: formatted\n            };\n        }\n        emitted.set(code, false);\n        codes[code] = buildWarnOpts;\n        return codes[code];\n    }\n    function emit(code, a, b, c) {\n        if (codes[code] === undefined) throw new Error(`The code '${code}' does not exist`);\n        if (emitted.get(code) === true) return;\n        emitted.set(code, true);\n        const warning = codes[code](a, b, c);\n        process.emitWarning(warning.message, warning.name, warning.code);\n    }\n    return {\n        create,\n        emit,\n        emitted\n    };\n}\nmodule.exports = build;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL3Byb2Nlc3Mtd2FybmluZy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBLE1BQU0sRUFBRUEsTUFBTSxFQUFFLEdBQUdDLG1CQUFPQSxDQUFDO0FBRTNCLFNBQVNDO0lBQ1AsTUFBTUMsUUFBUSxDQUFDO0lBQ2YsTUFBTUMsVUFBVSxJQUFJQztJQUVwQixTQUFTQyxPQUFRQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsT0FBTztRQUNsQyxJQUFJLENBQUNGLE1BQU0sTUFBTSxJQUFJRyxNQUFNO1FBQzNCLElBQUksQ0FBQ0YsTUFBTSxNQUFNLElBQUlFLE1BQU07UUFDM0IsSUFBSSxDQUFDRCxTQUFTLE1BQU0sSUFBSUMsTUFBTTtRQUU5QkYsT0FBT0EsS0FBS0csV0FBVztRQUV2QixJQUFJUixLQUFLLENBQUNLLEtBQUssS0FBS0ksV0FBVztZQUM3QixNQUFNLElBQUlGLE1BQU0sQ0FBQyxVQUFVLEVBQUVGLEtBQUssZUFBZSxDQUFDO1FBQ3BEO1FBRUEsU0FBU0ssY0FBZUMsQ0FBQyxFQUFFQyxDQUFDLEVBQUVDLENBQUM7WUFDN0IsNkNBQTZDO1lBQzdDLElBQUlDO1lBQ0osSUFBSUgsS0FBS0MsS0FBS0MsR0FBRztnQkFDZkMsWUFBWWpCLE9BQU9TLFNBQVNLLEdBQUdDLEdBQUdDO1lBQ3BDLE9BQU8sSUFBSUYsS0FBS0MsR0FBRztnQkFDakJFLFlBQVlqQixPQUFPUyxTQUFTSyxHQUFHQztZQUNqQyxPQUFPLElBQUlELEdBQUc7Z0JBQ1pHLFlBQVlqQixPQUFPUyxTQUFTSztZQUM5QixPQUFPO2dCQUNMRyxZQUFZUjtZQUNkO1lBRUEsT0FBTztnQkFDTEQ7Z0JBQ0FEO2dCQUNBRSxTQUFTUTtZQUNYO1FBQ0Y7UUFFQWIsUUFBUWMsR0FBRyxDQUFDVixNQUFNO1FBQ2xCTCxLQUFLLENBQUNLLEtBQUssR0FBR0s7UUFFZCxPQUFPVixLQUFLLENBQUNLLEtBQUs7SUFDcEI7SUFFQSxTQUFTVyxLQUFNWCxJQUFJLEVBQUVNLENBQUMsRUFBRUMsQ0FBQyxFQUFFQyxDQUFDO1FBQzFCLElBQUliLEtBQUssQ0FBQ0ssS0FBSyxLQUFLSSxXQUFXLE1BQU0sSUFBSUYsTUFBTSxDQUFDLFVBQVUsRUFBRUYsS0FBSyxnQkFBZ0IsQ0FBQztRQUNsRixJQUFJSixRQUFRZ0IsR0FBRyxDQUFDWixVQUFVLE1BQU07UUFDaENKLFFBQVFjLEdBQUcsQ0FBQ1YsTUFBTTtRQUVsQixNQUFNYSxVQUFVbEIsS0FBSyxDQUFDSyxLQUFLLENBQUNNLEdBQUdDLEdBQUdDO1FBQ2xDTSxRQUFRQyxXQUFXLENBQUNGLFFBQVFaLE9BQU8sRUFBRVksUUFBUWQsSUFBSSxFQUFFYyxRQUFRYixJQUFJO0lBQ2pFO0lBRUEsT0FBTztRQUNMRjtRQUNBYTtRQUNBZjtJQUNGO0FBQ0Y7QUFFQW9CLE9BQU9DLE9BQU8sR0FBR3ZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmFpbmJvd2tpdC8uLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy13YXJuaW5nL2luZGV4LmpzP2UxNGYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHsgZm9ybWF0IH0gPSByZXF1aXJlKCd1dGlsJylcblxuZnVuY3Rpb24gYnVpbGQgKCkge1xuICBjb25zdCBjb2RlcyA9IHt9XG4gIGNvbnN0IGVtaXR0ZWQgPSBuZXcgTWFwKClcblxuICBmdW5jdGlvbiBjcmVhdGUgKG5hbWUsIGNvZGUsIG1lc3NhZ2UpIHtcbiAgICBpZiAoIW5hbWUpIHRocm93IG5ldyBFcnJvcignV2FybmluZyBuYW1lIG11c3Qgbm90IGJlIGVtcHR5JylcbiAgICBpZiAoIWNvZGUpIHRocm93IG5ldyBFcnJvcignV2FybmluZyBjb2RlIG11c3Qgbm90IGJlIGVtcHR5JylcbiAgICBpZiAoIW1lc3NhZ2UpIHRocm93IG5ldyBFcnJvcignV2FybmluZyBtZXNzYWdlIG11c3Qgbm90IGJlIGVtcHR5JylcblxuICAgIGNvZGUgPSBjb2RlLnRvVXBwZXJDYXNlKClcblxuICAgIGlmIChjb2Rlc1tjb2RlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBjb2RlICcke2NvZGV9JyBhbHJlYWR5IGV4aXN0YClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBidWlsZFdhcm5PcHRzIChhLCBiLCBjKSB7XG4gICAgICAvLyBtb3JlIHBlcmZvcm1hbnQgdGhhbiBzcHJlYWQgKC4uLikgb3BlcmF0b3JcbiAgICAgIGxldCBmb3JtYXR0ZWRcbiAgICAgIGlmIChhICYmIGIgJiYgYykge1xuICAgICAgICBmb3JtYXR0ZWQgPSBmb3JtYXQobWVzc2FnZSwgYSwgYiwgYylcbiAgICAgIH0gZWxzZSBpZiAoYSAmJiBiKSB7XG4gICAgICAgIGZvcm1hdHRlZCA9IGZvcm1hdChtZXNzYWdlLCBhLCBiKVxuICAgICAgfSBlbHNlIGlmIChhKSB7XG4gICAgICAgIGZvcm1hdHRlZCA9IGZvcm1hdChtZXNzYWdlLCBhKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9ybWF0dGVkID0gbWVzc2FnZVxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb2RlLFxuICAgICAgICBuYW1lLFxuICAgICAgICBtZXNzYWdlOiBmb3JtYXR0ZWRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlbWl0dGVkLnNldChjb2RlLCBmYWxzZSlcbiAgICBjb2Rlc1tjb2RlXSA9IGJ1aWxkV2Fybk9wdHNcblxuICAgIHJldHVybiBjb2Rlc1tjb2RlXVxuICB9XG5cbiAgZnVuY3Rpb24gZW1pdCAoY29kZSwgYSwgYiwgYykge1xuICAgIGlmIChjb2Rlc1tjb2RlXSA9PT0gdW5kZWZpbmVkKSB0aHJvdyBuZXcgRXJyb3IoYFRoZSBjb2RlICcke2NvZGV9JyBkb2VzIG5vdCBleGlzdGApXG4gICAgaWYgKGVtaXR0ZWQuZ2V0KGNvZGUpID09PSB0cnVlKSByZXR1cm5cbiAgICBlbWl0dGVkLnNldChjb2RlLCB0cnVlKVxuXG4gICAgY29uc3Qgd2FybmluZyA9IGNvZGVzW2NvZGVdKGEsIGIsIGMpXG4gICAgcHJvY2Vzcy5lbWl0V2FybmluZyh3YXJuaW5nLm1lc3NhZ2UsIHdhcm5pbmcubmFtZSwgd2FybmluZy5jb2RlKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGUsXG4gICAgZW1pdCxcbiAgICBlbWl0dGVkXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBidWlsZFxuIl0sIm5hbWVzIjpbImZvcm1hdCIsInJlcXVpcmUiLCJidWlsZCIsImNvZGVzIiwiZW1pdHRlZCIsIk1hcCIsImNyZWF0ZSIsIm5hbWUiLCJjb2RlIiwibWVzc2FnZSIsIkVycm9yIiwidG9VcHBlckNhc2UiLCJ1bmRlZmluZWQiLCJidWlsZFdhcm5PcHRzIiwiYSIsImIiLCJjIiwiZm9ybWF0dGVkIiwic2V0IiwiZW1pdCIsImdldCIsIndhcm5pbmciLCJwcm9jZXNzIiwiZW1pdFdhcm5pbmciLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/process-warning/index.js\n");

/***/ })

};
;