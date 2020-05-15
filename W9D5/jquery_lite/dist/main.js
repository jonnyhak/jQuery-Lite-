/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function DOMNodeCollection(elements) {\n    this.elements = elements;\n    this.on(\"click\", handleClick);\n    // this.off(\"click\", handleClick);\n}\n\nDOMNodeCollection.prototype.html = function (str) {\n    if (str === undefined) {\n        return this.elements[0].innerHTML;\n    } else {\n        this.elements.forEach(ele => {\n            ele.innerHTML = str;\n        });\n    }\n}\n\nDOMNodeCollection.prototype.empty = function(){\n    this.html(\"\");\n}\n\nDOMNodeCollection.prototype.append = function(arg){\n    this.elements.forEach(ele => {\n        ele.append(arg);\n    });\n}\n\n\nDOMNodeCollection.prototype.attr = function(arg){\n    let result = [];\n    this.elements.forEach(ele => {\n        result.push(ele.getAttribute(arg));\n    });\n    return result;\n}\n\nDOMNodeCollection.prototype.addClass = function(str){\n    this.elements.forEach(ele => {\n        ele.className = ele.className + ` ${str}`;\n    })\n}\n\nDOMNodeCollection.prototype.removeClass = function(str){\n    this.elements.forEach(ele => {\n        if (ele.className.includes(str)){\n            let splitted = ele.className.split(\" \");\n            let mapped = [];\n            splitted.forEach(el => {\n                if (ele !== str) {mapped.push(ele)};\n            });\n           ele.className = mapped.join(\" \"); \n        }\n    });\n}\n\nDOMNodeCollection.prototype.children = function(){\n    let children = [];\n    this.elements.forEach(ele =>{\n        let htmlcol = ele.children;\n        for(let i=0;i < htmlcol.length; i++){\n            children.push(htmlcol.item(i));\n        }\n    }); \n    return new DOMNodeCollection(children);\n}\n\nDOMNodeCollection.prototype.parent = function(){\n    let parents = [];\n    this.elements.forEach(ele =>{\n        parents.push(ele.parentElement);\n    });\n    return new DOMNodeCollection(parents);\n}\n\nDOMNodeCollection.prototype.find = function(selector){\n    let result = [];\n    this.elements.forEach(ele =>{\n        let nodelist = ele.querySelectorAll(selector);\n        result = result.concat(Array.from(nodelist));\n    });\n    return new DOMNodeCollection(result);\n}\n\nDOMNodeCollection.prototype.remove = function(){\n    this.elements.forEach(ele => {\n        ele.outerHTML = \"\";\n    });\n}\n\nDOMNodeCollection.prototype.on = function(method, callback){\n    this.elements.forEach(element => {\n        element.addEventListener(method, callback, true);\n    });\n}\n\nDOMNodeCollection.prototype.off = function (method, callback) {\n    this.elements.forEach(element => {\n        element.removeEventListener(method, callback, true);\n    });\n}\nfunction handleClick(){\n    alert(\"clicked\");\n}\n\n\n\n\n\n\n\n\n\nmodule.exports = DOMNodeCollection;\n\n\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n\nWindow.prototype.$l = function(arg){\n    let selector; \n    let functions = [];\n\n    \n\n    if (typeof arg === \"string\") {\n        selector = document.querySelectorAll(arg);\n        return new DOMNodeCollection(Array.from(selector));\n    } else if (arg instanceof HTMLElement){\n        return new DOMNodeCollection([arg]);\n    } else if (arg instanceof Function && document.readyState === \"complete\") {\n        functions.push(arg);\n\n        functions.forEach((f) => {\n            f();\n        });\n\n    } else if(arg instanceof Function){\n        functions.push(arg);\n    }\n\n    // document.addEventListener('DOMContentLoaded', () => {\n    //     functions.forEach((f) => {\n    //         f();\n    //     });\n    // });\n\n}\n\nfunction extend(obj1, ...objects){\n    let dummy = obj1;\n    objects.forEach(ele => {\n        dummy = {...dummy, ...ele};\n    });\n    console.log(dummy);\n    obj1 = dummy;\n}\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });