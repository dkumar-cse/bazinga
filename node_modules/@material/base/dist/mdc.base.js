/*!
 Material Components for the web
 Copyright (c) 2016 Google Inc.
 License: Apache-2.0
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["base"] = factory();
	else
		root["mdc"] = root["mdc"] || {}, root["mdc"]["base"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2);


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _foundation = __webpack_require__(3);

	Object.defineProperty(exports, 'MDCFoundation', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_foundation).default;
	  }
	});

	var _component = __webpack_require__(4);

	Object.defineProperty(exports, 'MDCComponent', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_component).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Copyright 2016 Google Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	var MDCFoundation = function () {
	  _createClass(MDCFoundation, null, [{
	    key: "cssClasses",
	    get: function get() {
	      // Classes extending MDCFoundation should implement this method to return an object which exports every
	      // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
	      return {};
	    }
	  }, {
	    key: "strings",
	    get: function get() {
	      // Classes extending MDCFoundation should implement this method to return an object which exports all
	      // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
	      return {};
	    }
	  }, {
	    key: "numbers",
	    get: function get() {
	      // Classes extending MDCFoundation should implement this method to return an object which exports all
	      // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
	      return {};
	    }
	  }, {
	    key: "defaultAdapter",
	    get: function get() {
	      // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
	      // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
	      // validation.
	      return {};
	    }
	  }]);

	  function MDCFoundation() {
	    var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    _classCallCheck(this, MDCFoundation);

	    this.adapter_ = adapter;
	  }

	  _createClass(MDCFoundation, [{
	    key: "init",
	    value: function init() {
	      // Subclasses should override this method to perform initialization routines (registering events, etc.)
	    }
	  }, {
	    key: "destroy",
	    value: function destroy() {
	      // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
	    }
	  }]);

	  return MDCFoundation;
	}();

	exports.default = MDCFoundation;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2016 Google Inc.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   http://www.apache.org/licenses/LICENSE-2.0
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS IS" BASIS,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

	var _foundation = __webpack_require__(3);

	var _foundation2 = _interopRequireDefault(_foundation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MDCComponent = function () {
	  _createClass(MDCComponent, null, [{
	    key: 'attachTo',
	    value: function attachTo(root) {
	      // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
	      // returns an instantiated component with its root set to that element. Also note that in the cases of
	      // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
	      // from getDefaultFoundation().
	      return new MDCComponent(root, new _foundation2.default());
	    }
	  }]);

	  function MDCComponent(root, foundation) {
	    _classCallCheck(this, MDCComponent);

	    this.root_ = root;

	    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	      args[_key - 2] = arguments[_key];
	    }

	    this.initialize.apply(this, args);
	    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
	    this.foundation_.init();
	    this.initialSyncWithDOM();
	  }

	  _createClass(MDCComponent, [{
	    key: 'initialize',
	    value: function initialize() /* ...args */{
	      // Subclasses can override this to do any additional setup work that would be considered part of a
	      // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
	      // initialized. Any additional arguments besides root and foundation will be passed in here.
	    }
	  }, {
	    key: 'getDefaultFoundation',
	    value: function getDefaultFoundation() {
	      // Subclasses must override this method to return a properly configured foundation class for the
	      // component.
	      throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
	    }
	  }, {
	    key: 'initialSyncWithDOM',
	    value: function initialSyncWithDOM() {
	      // Subclasses should override this method if they need to perform work to synchronize with a host DOM
	      // object. An example of this would be a form control wrapper that needs to synchronize its internal state
	      // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
	      // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      // Subclasses may implement this method to release any resources / deregister any listeners they have
	      // attached. An example of this might be deregistering a resize event from the window object.
	      this.foundation_.destroy();
	    }

	    // Wrapper method to add an event listener to the component's root element. This is most useful when
	    // listening for custom events.

	  }, {
	    key: 'listen',
	    value: function listen(evtType, handler) {
	      this.root_.addEventListener(evtType, handler);
	    }

	    // Wrapper method to remove an event listener to the component's root element. This is most useful when
	    // unlistening for custom events.

	  }, {
	    key: 'unlisten',
	    value: function unlisten(evtType, handler) {
	      this.root_.removeEventListener(evtType, handler);
	    }

	    // Fires a cross-browser-compatible custom event from the component root of the given type,
	    // with the given data.

	  }, {
	    key: 'emit',
	    value: function emit(evtType, evtData) {
	      var evt = void 0;
	      if (typeof CustomEvent === 'function') {
	        evt = new CustomEvent(evtType, { detail: evtData });
	      } else {
	        evt = document.createEvent('CustomEvent');
	        evt.initCustomEvent(evtType, false, false, evtData);
	      }

	      this.root_.dispatchEvent(evt);
	    }
	  }]);

	  return MDCComponent;
	}();

	exports.default = MDCComponent;

/***/ }
/******/ ])
});
;