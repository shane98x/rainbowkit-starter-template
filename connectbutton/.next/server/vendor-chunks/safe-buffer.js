"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/safe-buffer";
exports.ids = ["vendor-chunks/safe-buffer"];
exports.modules = {

/***/ "(ssr)/../node_modules/safe-buffer/index.js":
/*!********************************************!*\
  !*** ../node_modules/safe-buffer/index.js ***!
  \********************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ /* eslint-disable node/no-deprecated-api */ \nvar buffer = __webpack_require__(/*! buffer */ \"buffer\");\nvar Buffer = buffer.Buffer;\n// alternative to using Object.keys for old browsers\nfunction copyProps(src, dst) {\n    for(var key in src){\n        dst[key] = src[key];\n    }\n}\nif (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {\n    module.exports = buffer;\n} else {\n    // Copy properties from require('buffer')\n    copyProps(buffer, exports);\n    exports.Buffer = SafeBuffer;\n}\nfunction SafeBuffer(arg, encodingOrOffset, length) {\n    return Buffer(arg, encodingOrOffset, length);\n}\nSafeBuffer.prototype = Object.create(Buffer.prototype);\n// Copy static methods from Buffer\ncopyProps(Buffer, SafeBuffer);\nSafeBuffer.from = function(arg, encodingOrOffset, length) {\n    if (typeof arg === \"number\") {\n        throw new TypeError(\"Argument must not be a number\");\n    }\n    return Buffer(arg, encodingOrOffset, length);\n};\nSafeBuffer.alloc = function(size, fill, encoding) {\n    if (typeof size !== \"number\") {\n        throw new TypeError(\"Argument must be a number\");\n    }\n    var buf = Buffer(size);\n    if (fill !== undefined) {\n        if (typeof encoding === \"string\") {\n            buf.fill(fill, encoding);\n        } else {\n            buf.fill(fill);\n        }\n    } else {\n        buf.fill(0);\n    }\n    return buf;\n};\nSafeBuffer.allocUnsafe = function(size) {\n    if (typeof size !== \"number\") {\n        throw new TypeError(\"Argument must be a number\");\n    }\n    return Buffer(size);\n};\nSafeBuffer.allocUnsafeSlow = function(size) {\n    if (typeof size !== \"number\") {\n        throw new TypeError(\"Argument must be a number\");\n    }\n    return buffer.SlowBuffer(size);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL3NhZmUtYnVmZmVyL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBLGtGQUFrRixHQUNsRix5Q0FBeUM7QUFDekMsSUFBSUEsU0FBU0MsbUJBQU9BLENBQUM7QUFDckIsSUFBSUMsU0FBU0YsT0FBT0UsTUFBTTtBQUUxQixvREFBb0Q7QUFDcEQsU0FBU0MsVUFBV0MsR0FBRyxFQUFFQyxHQUFHO0lBQzFCLElBQUssSUFBSUMsT0FBT0YsSUFBSztRQUNuQkMsR0FBRyxDQUFDQyxJQUFJLEdBQUdGLEdBQUcsQ0FBQ0UsSUFBSTtJQUNyQjtBQUNGO0FBQ0EsSUFBSUosT0FBT0ssSUFBSSxJQUFJTCxPQUFPTSxLQUFLLElBQUlOLE9BQU9PLFdBQVcsSUFBSVAsT0FBT1EsZUFBZSxFQUFFO0lBQy9FQyxPQUFPQyxPQUFPLEdBQUdaO0FBQ25CLE9BQU87SUFDTCx5Q0FBeUM7SUFDekNHLFVBQVVILFFBQVFZO0lBQ2xCQSxjQUFjLEdBQUdDO0FBQ25CO0FBRUEsU0FBU0EsV0FBWUMsR0FBRyxFQUFFQyxnQkFBZ0IsRUFBRUMsTUFBTTtJQUNoRCxPQUFPZCxPQUFPWSxLQUFLQyxrQkFBa0JDO0FBQ3ZDO0FBRUFILFdBQVdJLFNBQVMsR0FBR0MsT0FBT0MsTUFBTSxDQUFDakIsT0FBT2UsU0FBUztBQUVyRCxrQ0FBa0M7QUFDbENkLFVBQVVELFFBQVFXO0FBRWxCQSxXQUFXTixJQUFJLEdBQUcsU0FBVU8sR0FBRyxFQUFFQyxnQkFBZ0IsRUFBRUMsTUFBTTtJQUN2RCxJQUFJLE9BQU9GLFFBQVEsVUFBVTtRQUMzQixNQUFNLElBQUlNLFVBQVU7SUFDdEI7SUFDQSxPQUFPbEIsT0FBT1ksS0FBS0Msa0JBQWtCQztBQUN2QztBQUVBSCxXQUFXTCxLQUFLLEdBQUcsU0FBVWEsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLFFBQVE7SUFDL0MsSUFBSSxPQUFPRixTQUFTLFVBQVU7UUFDNUIsTUFBTSxJQUFJRCxVQUFVO0lBQ3RCO0lBQ0EsSUFBSUksTUFBTXRCLE9BQU9tQjtJQUNqQixJQUFJQyxTQUFTRyxXQUFXO1FBQ3RCLElBQUksT0FBT0YsYUFBYSxVQUFVO1lBQ2hDQyxJQUFJRixJQUFJLENBQUNBLE1BQU1DO1FBQ2pCLE9BQU87WUFDTEMsSUFBSUYsSUFBSSxDQUFDQTtRQUNYO0lBQ0YsT0FBTztRQUNMRSxJQUFJRixJQUFJLENBQUM7SUFDWDtJQUNBLE9BQU9FO0FBQ1Q7QUFFQVgsV0FBV0osV0FBVyxHQUFHLFNBQVVZLElBQUk7SUFDckMsSUFBSSxPQUFPQSxTQUFTLFVBQVU7UUFDNUIsTUFBTSxJQUFJRCxVQUFVO0lBQ3RCO0lBQ0EsT0FBT2xCLE9BQU9tQjtBQUNoQjtBQUVBUixXQUFXSCxlQUFlLEdBQUcsU0FBVVcsSUFBSTtJQUN6QyxJQUFJLE9BQU9BLFNBQVMsVUFBVTtRQUM1QixNQUFNLElBQUlELFVBQVU7SUFDdEI7SUFDQSxPQUFPcEIsT0FBTzBCLFVBQVUsQ0FBQ0w7QUFDM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYWluYm93a2l0Ly4uL25vZGVfbW9kdWxlcy9zYWZlLWJ1ZmZlci9pbmRleC5qcz9lMGVkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISBzYWZlLWJ1ZmZlci4gTUlUIExpY2Vuc2UuIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZy9vcGVuc291cmNlPiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm9kZS9uby1kZXByZWNhdGVkLWFwaSAqL1xudmFyIGJ1ZmZlciA9IHJlcXVpcmUoJ2J1ZmZlcicpXG52YXIgQnVmZmVyID0gYnVmZmVyLkJ1ZmZlclxuXG4vLyBhbHRlcm5hdGl2ZSB0byB1c2luZyBPYmplY3Qua2V5cyBmb3Igb2xkIGJyb3dzZXJzXG5mdW5jdGlvbiBjb3B5UHJvcHMgKHNyYywgZHN0KSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIHtcbiAgICBkc3Rba2V5XSA9IHNyY1trZXldXG4gIH1cbn1cbmlmIChCdWZmZXIuZnJvbSAmJiBCdWZmZXIuYWxsb2MgJiYgQnVmZmVyLmFsbG9jVW5zYWZlICYmIEJ1ZmZlci5hbGxvY1Vuc2FmZVNsb3cpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBidWZmZXJcbn0gZWxzZSB7XG4gIC8vIENvcHkgcHJvcGVydGllcyBmcm9tIHJlcXVpcmUoJ2J1ZmZlcicpXG4gIGNvcHlQcm9wcyhidWZmZXIsIGV4cG9ydHMpXG4gIGV4cG9ydHMuQnVmZmVyID0gU2FmZUJ1ZmZlclxufVxuXG5mdW5jdGlvbiBTYWZlQnVmZmVyIChhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gQnVmZmVyKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5TYWZlQnVmZmVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQnVmZmVyLnByb3RvdHlwZSlcblxuLy8gQ29weSBzdGF0aWMgbWV0aG9kcyBmcm9tIEJ1ZmZlclxuY29weVByb3BzKEJ1ZmZlciwgU2FmZUJ1ZmZlcilcblxuU2FmZUJ1ZmZlci5mcm9tID0gZnVuY3Rpb24gKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmICh0eXBlb2YgYXJnID09PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3Qgbm90IGJlIGEgbnVtYmVyJylcbiAgfVxuICByZXR1cm4gQnVmZmVyKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5TYWZlQnVmZmVyLmFsbG9jID0gZnVuY3Rpb24gKHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgbnVtYmVyJylcbiAgfVxuICB2YXIgYnVmID0gQnVmZmVyKHNpemUpXG4gIGlmIChmaWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAodHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJykge1xuICAgICAgYnVmLmZpbGwoZmlsbCwgZW5jb2RpbmcpXG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1Zi5maWxsKGZpbGwpXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGJ1Zi5maWxsKDApXG4gIH1cbiAgcmV0dXJuIGJ1ZlxufVxuXG5TYWZlQnVmZmVyLmFsbG9jVW5zYWZlID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBudW1iZXInKVxuICB9XG4gIHJldHVybiBCdWZmZXIoc2l6ZSlcbn1cblxuU2FmZUJ1ZmZlci5hbGxvY1Vuc2FmZVNsb3cgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIG51bWJlcicpXG4gIH1cbiAgcmV0dXJuIGJ1ZmZlci5TbG93QnVmZmVyKHNpemUpXG59XG4iXSwibmFtZXMiOlsiYnVmZmVyIiwicmVxdWlyZSIsIkJ1ZmZlciIsImNvcHlQcm9wcyIsInNyYyIsImRzdCIsImtleSIsImZyb20iLCJhbGxvYyIsImFsbG9jVW5zYWZlIiwiYWxsb2NVbnNhZmVTbG93IiwibW9kdWxlIiwiZXhwb3J0cyIsIlNhZmVCdWZmZXIiLCJhcmciLCJlbmNvZGluZ09yT2Zmc2V0IiwibGVuZ3RoIiwicHJvdG90eXBlIiwiT2JqZWN0IiwiY3JlYXRlIiwiVHlwZUVycm9yIiwic2l6ZSIsImZpbGwiLCJlbmNvZGluZyIsImJ1ZiIsInVuZGVmaW5lZCIsIlNsb3dCdWZmZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/safe-buffer/index.js\n");

/***/ })

};
;