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
		exports["iconToggle"] = factory();
	else
		root["mdc"] = root["mdc"] || {}, root["mdc"]["iconToggle"] = factory();
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

	module.exports = __webpack_require__(13);


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

/***/ },
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MDCIconToggle = exports.MDCIconToggleFoundation = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _base = __webpack_require__(2);

	var _ripple = __webpack_require__(14);

	var _foundation = __webpack_require__(18);

	var _foundation2 = _interopRequireDefault(_foundation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	exports.MDCIconToggleFoundation = _foundation2.default;

	var MDCIconToggle = exports.MDCIconToggle = function (_MDCComponent) {
	  _inherits(MDCIconToggle, _MDCComponent);

	  _createClass(MDCIconToggle, null, [{
	    key: 'attachTo',
	    value: function attachTo(root) {
	      return new MDCIconToggle(root);
	    }
	  }]);

	  function MDCIconToggle() {
	    var _ref;

	    _classCallCheck(this, MDCIconToggle);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    var _this = _possibleConstructorReturn(this, (_ref = MDCIconToggle.__proto__ || Object.getPrototypeOf(MDCIconToggle)).call.apply(_ref, [this].concat(args)));

	    _this.ripple_ = _this.initRipple_();
	    return _this;
	  }

	  _createClass(MDCIconToggle, [{
	    key: 'initRipple_',
	    value: function initRipple_() {
	      var _this2 = this;

	      var adapter = _extends(_ripple.MDCRipple.createAdapter(this), {
	        isUnbounded: function isUnbounded() {
	          return true;
	        },
	        isSurfaceActive: function isSurfaceActive() {
	          return _this2.foundation_.isKeyboardActivated();
	        },
	        computeBoundingRect: function computeBoundingRect() {
	          var dim = 48;

	          var _root_$getBoundingCli = _this2.root_.getBoundingClientRect(),
	              left = _root_$getBoundingCli.left,
	              top = _root_$getBoundingCli.top;

	          return {
	            left: left,
	            top: top,
	            width: dim,
	            height: dim,
	            right: left + dim,
	            bottom: left + dim
	          };
	        }
	      });
	      var foundation = new _ripple.MDCRippleFoundation(adapter);
	      return new _ripple.MDCRipple(this.root_, foundation);
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.ripple_.destroy();
	      _get(MDCIconToggle.prototype.__proto__ || Object.getPrototypeOf(MDCIconToggle.prototype), 'destroy', this).call(this);
	    }
	  }, {
	    key: 'getDefaultFoundation',
	    value: function getDefaultFoundation() {
	      var _this3 = this;

	      return new _foundation2.default({
	        addClass: function addClass(className) {
	          return _this3.iconEl_.classList.add(className);
	        },
	        removeClass: function removeClass(className) {
	          return _this3.iconEl_.classList.remove(className);
	        },
	        registerInteractionHandler: function registerInteractionHandler(type, handler) {
	          return _this3.root_.addEventListener(type, handler);
	        },
	        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
	          return _this3.root_.removeEventListener(type, handler);
	        },
	        setText: function setText(text) {
	          _this3.iconEl_.textContent = text;
	        },
	        getTabIndex: function getTabIndex() {
	          return (/* number */_this3.root_.tabIndex
	          );
	        },
	        setTabIndex: function setTabIndex(tabIndex) {
	          _this3.root_.tabIndex = tabIndex;
	        },
	        getAttr: function getAttr(name, value) {
	          return _this3.root_.getAttribute(name, value);
	        },
	        setAttr: function setAttr(name, value) {
	          return _this3.root_.setAttribute(name, value);
	        },
	        rmAttr: function rmAttr(name, value) {
	          return _this3.root_.removeAttribute(name, value);
	        },
	        notifyChange: function notifyChange(evtData) {
	          return _this3.emit('MDCIconToggle:change', evtData);
	        }
	      });
	    }
	  }, {
	    key: 'initialSyncWithDOM',
	    value: function initialSyncWithDOM() {
	      this.on = this.root_.getAttribute(_foundation2.default.strings.ARIA_PRESSED) === 'true';
	      this.disabled = this.root_.getAttribute(_foundation2.default.strings.ARIA_DISABLED) === 'true';
	    }
	  }, {
	    key: 'refreshToggleData',
	    value: function refreshToggleData() {
	      this.foundation_.refreshToggleData();
	    }
	  }, {
	    key: 'iconEl_',
	    get: function get() {
	      var sel = this.root_.dataset.iconInnerSelector;

	      return sel ? this.root_.querySelector(sel) : this.root_;
	    }
	  }, {
	    key: 'on',
	    get: function get() {
	      return this.foundation_.isOn();
	    },
	    set: function set(isOn) {
	      this.foundation_.toggle(isOn);
	    }
	  }, {
	    key: 'disabled',
	    get: function get() {
	      return this.foundation_.isDisabled();
	    },
	    set: function set(isDisabled) {
	      this.foundation_.setDisabled(isDisabled);
	    }
	  }]);

	  return MDCIconToggle;
	}(_base.MDCComponent);

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MDCRipple = exports.MDCRippleFoundation = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _base = __webpack_require__(2);

	var _foundation = __webpack_require__(15);

	var _foundation2 = _interopRequireDefault(_foundation);

	var _util = __webpack_require__(17);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var MATCHES = (0, _util.getMatchesProperty)(HTMLElement.prototype);

	exports.MDCRippleFoundation = _foundation2.default;

	var MDCRipple = exports.MDCRipple = function (_MDCComponent) {
	  _inherits(MDCRipple, _MDCComponent);

	  function MDCRipple() {
	    _classCallCheck(this, MDCRipple);

	    return _possibleConstructorReturn(this, (MDCRipple.__proto__ || Object.getPrototypeOf(MDCRipple)).apply(this, arguments));
	  }

	  _createClass(MDCRipple, [{
	    key: 'getDefaultFoundation',
	    value: function getDefaultFoundation() {
	      return new _foundation2.default(MDCRipple.createAdapter(this));
	    }
	  }, {
	    key: 'initialSyncWithDOM',
	    value: function initialSyncWithDOM() {
	      this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
	    }
	  }, {
	    key: 'unbounded',
	    get: function get() {
	      return this.unbounded_;
	    },
	    set: function set(unbounded) {
	      var UNBOUNDED = _foundation2.default.cssClasses.UNBOUNDED;

	      this.unbounded_ = Boolean(unbounded);
	      if (this.unbounded_) {
	        this.root_.classList.add(UNBOUNDED);
	      } else {
	        this.root_.classList.remove(UNBOUNDED);
	      }
	    }
	  }], [{
	    key: 'attachTo',
	    value: function attachTo(root) {
	      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	          _ref$isUnbounded = _ref.isUnbounded,
	          isUnbounded = _ref$isUnbounded === undefined ? undefined : _ref$isUnbounded;

	      var ripple = new MDCRipple(root);
	      // Only override unbounded behavior if option is explicitly specified
	      if (isUnbounded !== undefined) {
	        ripple.unbounded = isUnbounded;
	      }
	      return ripple;
	    }
	  }, {
	    key: 'createAdapter',
	    value: function createAdapter(instance) {
	      return {
	        browserSupportsCssVars: function browserSupportsCssVars() {
	          return (0, _util.supportsCssVariables)(window);
	        },
	        isUnbounded: function isUnbounded() {
	          return instance.unbounded;
	        },
	        isSurfaceActive: function isSurfaceActive() {
	          return instance.root_[MATCHES](':active');
	        },
	        addClass: function addClass(className) {
	          return instance.root_.classList.add(className);
	        },
	        removeClass: function removeClass(className) {
	          return instance.root_.classList.remove(className);
	        },
	        registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
	          return instance.root_.addEventListener(evtType, handler);
	        },
	        deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
	          return instance.root_.removeEventListener(evtType, handler);
	        },
	        registerResizeHandler: function registerResizeHandler(handler) {
	          return window.addEventListener('resize', handler);
	        },
	        deregisterResizeHandler: function deregisterResizeHandler(handler) {
	          return window.removeEventListener('resize', handler);
	        },
	        updateCssVariable: function updateCssVariable(varName, value) {
	          return instance.root_.style.setProperty(varName, value);
	        },
	        computeBoundingRect: function computeBoundingRect() {
	          return instance.root_.getBoundingClientRect();
	        },
	        getWindowPageOffset: function getWindowPageOffset() {
	          return { x: window.pageXOffset, y: window.pageYOffset };
	        }
	      };
	    }
	  }]);

	  return MDCRipple;
	}(_base.MDCComponent);

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _base = __webpack_require__(2);

	var _constants = __webpack_require__(16);

	var _util = __webpack_require__(17);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var DEACTIVATION_ACTIVATION_PAIRS = {
	  mouseup: 'mousedown',
	  pointerup: 'pointerdown',
	  touchend: 'touchstart',
	  keyup: 'keydown',
	  blur: 'focus'
	};

	var MDCRippleFoundation = function (_MDCFoundation) {
	  _inherits(MDCRippleFoundation, _MDCFoundation);

	  _createClass(MDCRippleFoundation, [{
	    key: 'isSupported_',


	    // We compute this property so that we are not querying information about the client
	    // until the point in time where the foundation requests it. This prevents scenarios where
	    // client-side feature-detection may happen too early, such as when components are rendered on the server
	    // and then initialized at mount time on the client.
	    get: function get() {
	      return this.adapter_.browserSupportsCssVars();
	    }
	  }], [{
	    key: 'cssClasses',
	    get: function get() {
	      return _constants.cssClasses;
	    }
	  }, {
	    key: 'strings',
	    get: function get() {
	      return _constants.strings;
	    }
	  }, {
	    key: 'numbers',
	    get: function get() {
	      return _constants.numbers;
	    }
	  }, {
	    key: 'defaultAdapter',
	    get: function get() {
	      return {
	        browserSupportsCssVars: function browserSupportsCssVars() /* boolean - cached */{},
	        isUnbounded: function isUnbounded() /* boolean */{},
	        isSurfaceActive: function isSurfaceActive() /* boolean */{},
	        addClass: function addClass() /* className: string */{},
	        removeClass: function removeClass() /* className: string */{},
	        registerInteractionHandler: function registerInteractionHandler() /* evtType: string, handler: EventListener */{},
	        deregisterInteractionHandler: function deregisterInteractionHandler() /* evtType: string, handler: EventListener */{},
	        registerResizeHandler: function registerResizeHandler() /* handler: EventListener */{},
	        deregisterResizeHandler: function deregisterResizeHandler() /* handler: EventListener */{},
	        updateCssVariable: function updateCssVariable() /* varName: string, value: string */{},
	        computeBoundingRect: function computeBoundingRect() /* ClientRect */{},
	        getWindowPageOffset: function getWindowPageOffset() /* {x: number, y: number} */{}
	      };
	    }
	  }]);

	  function MDCRippleFoundation(adapter) {
	    _classCallCheck(this, MDCRippleFoundation);

	    var _this = _possibleConstructorReturn(this, (MDCRippleFoundation.__proto__ || Object.getPrototypeOf(MDCRippleFoundation)).call(this, _extends(MDCRippleFoundation.defaultAdapter, adapter)));

	    _this.layoutFrame_ = 0;
	    _this.frame_ = { width: 0, height: 0 };
	    _this.activationState_ = _this.defaultActivationState_();
	    _this.xfDuration_ = 0;
	    _this.maxRadius = 0;
	    _this.listenerInfos_ = [{ activate: 'touchstart', deactivate: 'touchend' }, { activate: 'pointerdown', deactivate: 'pointerup' }, { activate: 'mousedown', deactivate: 'mouseup' }, { activate: 'keydown', deactivate: 'keyup' }, { focus: 'focus', blur: 'blur' }];
	    _this.listeners_ = {
	      activate: function activate(e) {
	        return _this.activate_(e);
	      },
	      deactivate: function deactivate(e) {
	        return _this.deactivate_(e);
	      },
	      focus: function focus() {
	        return requestAnimationFrame(function () {
	          return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_ACTIVE);
	        });
	      },
	      blur: function blur() {
	        return requestAnimationFrame(function () {
	          return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_ACTIVE);
	        });
	      }
	    };
	    _this.unboundedOpacityFadeTimer_ = 0;
	    _this.resizeHandler_ = function () {
	      return _this.layout();
	    };
	    _this.cancelBgBounded_ = function () {};
	    _this.cancelFgBounded_ = function () {};
	    _this.cancelFgUnbounded_ = function () {};
	    return _this;
	  }

	  _createClass(MDCRippleFoundation, [{
	    key: 'defaultActivationState_',
	    value: function defaultActivationState_() {
	      return {
	        isActivated: false,
	        wasActivatedByPointer: false,
	        wasElementMadeActive: false,
	        activationStartTime: 0,
	        activationEvent: null
	      };
	    }
	  }, {
	    key: 'init',
	    value: function init() {
	      var _this2 = this;

	      if (!this.isSupported_) {
	        return;
	      }
	      this.addEventListeners_();

	      var _MDCRippleFoundation$ = MDCRippleFoundation.cssClasses,
	          ROOT = _MDCRippleFoundation$.ROOT,
	          UNBOUNDED = _MDCRippleFoundation$.UNBOUNDED;

	      requestAnimationFrame(function () {
	        _this2.adapter_.addClass(ROOT);
	        if (_this2.adapter_.isUnbounded()) {
	          _this2.adapter_.addClass(UNBOUNDED);
	        }
	        _this2.layoutInternal_();
	      });
	    }
	  }, {
	    key: 'addEventListeners_',
	    value: function addEventListeners_() {
	      var _this3 = this;

	      this.listenerInfos_.forEach(function (info) {
	        Object.keys(info).forEach(function (k) {
	          _this3.adapter_.registerInteractionHandler(info[k], _this3.listeners_[k]);
	        });
	      });
	      this.adapter_.registerResizeHandler(this.resizeHandler_);
	    }
	  }, {
	    key: 'activate_',
	    value: function activate_(e) {
	      var _this4 = this;

	      var activationState = this.activationState_;

	      if (activationState.isActivated) {
	        return;
	      }

	      activationState.isActivated = true;
	      activationState.activationEvent = e;
	      activationState.wasActivatedByPointer = e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown';

	      activationState.activationStartTime = Date.now();
	      requestAnimationFrame(function () {
	        // This needs to be wrapped in an rAF call b/c web browsers
	        // report active states inconsistently when they're called within
	        // event handling code:
	        // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
	        // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
	        activationState.wasElementMadeActive = e.type === 'keydown' ? _this4.adapter_.isSurfaceActive() : true;
	        if (activationState.wasElementMadeActive) {
	          _this4.animateActivation_();
	        } else {
	          // Reset activation state immediately if element was not made active.
	          _this4.activationState_ = _this4.defaultActivationState_();
	        }
	      });
	    }
	  }, {
	    key: 'animateActivation_',
	    value: function animateActivation_() {
	      var _this5 = this;

	      var _MDCRippleFoundation$2 = MDCRippleFoundation.cssClasses,
	          BG_ACTIVE = _MDCRippleFoundation$2.BG_ACTIVE,
	          BG_BOUNDED_ACTIVE_FILL = _MDCRippleFoundation$2.BG_BOUNDED_ACTIVE_FILL,
	          FG_UNBOUNDED_DEACTIVATION = _MDCRippleFoundation$2.FG_UNBOUNDED_DEACTIVATION,
	          FG_BOUNDED_ACTIVE_FILL = _MDCRippleFoundation$2.FG_BOUNDED_ACTIVE_FILL;

	      // If ripple is currently deactivating, cancel those animations.

	      [BG_BOUNDED_ACTIVE_FILL, FG_UNBOUNDED_DEACTIVATION, FG_BOUNDED_ACTIVE_FILL].forEach(function (c) {
	        return _this5.adapter_.removeClass(c);
	      });
	      this.cancelBgBounded_();
	      this.cancelFgBounded_();
	      this.cancelFgUnbounded_();
	      if (this.unboundedOpacityFadeTimer_) {
	        clearTimeout(this.unboundedOpacityFadeTimer_);
	        this.unboundedOpacityFadeTimer_ = 0;
	      }

	      this.adapter_.addClass(BG_ACTIVE);
	      if (this.adapter_.isUnbounded()) {
	        this.animateUnboundedActivation_();
	      }
	    }
	  }, {
	    key: 'animateUnboundedActivation_',
	    value: function animateUnboundedActivation_() {
	      var FG_UNBOUNDED_ACTIVATION = MDCRippleFoundation.cssClasses.FG_UNBOUNDED_ACTIVATION;

	      var startPoint = void 0;
	      if (this.activationState_.wasActivatedByPointer) {
	        startPoint = (0, _util.getNormalizedEventCoords)(this.activationState_.activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
	      } else {
	        startPoint = {
	          left: this.frame_.width / 2,
	          top: this.frame_.height / 2
	        };
	      }
	      var _startPoint = startPoint,
	          left = _startPoint.left,
	          top = _startPoint.top;
	      var _MDCRippleFoundation$3 = MDCRippleFoundation.strings,
	          VAR_XF_ORIGIN_X = _MDCRippleFoundation$3.VAR_XF_ORIGIN_X,
	          VAR_XF_ORIGIN_Y = _MDCRippleFoundation$3.VAR_XF_ORIGIN_Y;

	      this.adapter_.updateCssVariable(VAR_XF_ORIGIN_X, left + 'px');
	      this.adapter_.updateCssVariable(VAR_XF_ORIGIN_Y, top + 'px');
	      this.adapter_.addClass(FG_UNBOUNDED_ACTIVATION);
	    }
	  }, {
	    key: 'deactivate_',
	    value: function deactivate_(e) {
	      var _this6 = this;

	      var activationState = this.activationState_;
	      // This can happen in scenarios such as when you have a keyup event that blurs the element.

	      if (!activationState.isActivated) {
	        return;
	      }
	      var actualActivationType = DEACTIVATION_ACTIVATION_PAIRS[e.type];
	      var expectedActivationType = activationState.activationEvent.type;
	      // NOTE: Pointer events are tricky - https://patrickhlauke.github.io/touch/tests/results/
	      // Essentially, what we need to do here is decouple the deactivation UX from the actual
	      // deactivation state itself. This way, touch/pointer events in sequence do not trample one
	      // another.
	      var needsDeactivationUX = actualActivationType === expectedActivationType;
	      var needsActualDeactivation = needsDeactivationUX;
	      if (activationState.wasActivatedByPointer) {
	        needsActualDeactivation = e.type === 'mouseup';
	      }

	      var state = _extends({}, this.activationState_);
	      if (needsDeactivationUX) {
	        requestAnimationFrame(function () {
	          return _this6.animateDeactivation_(e, state);
	        });
	      }
	      if (needsActualDeactivation) {
	        this.activationState_ = this.defaultActivationState_();
	      }
	    }
	  }, {
	    key: 'animateDeactivation_',
	    value: function animateDeactivation_(e, _ref) {
	      var wasActivatedByPointer = _ref.wasActivatedByPointer,
	          wasElementMadeActive = _ref.wasElementMadeActive,
	          activationStartTime = _ref.activationStartTime;
	      var BG_ACTIVE = MDCRippleFoundation.cssClasses.BG_ACTIVE;

	      if (wasActivatedByPointer || wasElementMadeActive) {
	        this.adapter_.removeClass(BG_ACTIVE);
	        var isPointerEvent = e.type === 'touchend' || e.type === 'pointerup' || e.type === 'mouseup';
	        if (this.adapter_.isUnbounded()) {
	          this.animateUnboundedDeactivation_(this.getUnboundedDeactivationInfo_(activationStartTime));
	        } else {
	          this.animateBoundedDeactivation_(e, isPointerEvent);
	        }
	      }
	    }
	  }, {
	    key: 'animateUnboundedDeactivation_',
	    value: function animateUnboundedDeactivation_(_ref2) {
	      var _this7 = this;

	      var opacityDuration = _ref2.opacityDuration,
	          transformDuration = _ref2.transformDuration,
	          approxCurScale = _ref2.approxCurScale;
	      var _MDCRippleFoundation$4 = MDCRippleFoundation.cssClasses,
	          FG_UNBOUNDED_ACTIVATION = _MDCRippleFoundation$4.FG_UNBOUNDED_ACTIVATION,
	          FG_UNBOUNDED_DEACTIVATION = _MDCRippleFoundation$4.FG_UNBOUNDED_DEACTIVATION;
	      var _MDCRippleFoundation$5 = MDCRippleFoundation.strings,
	          VAR_FG_UNBOUNDED_OPACITY_DURATION = _MDCRippleFoundation$5.VAR_FG_UNBOUNDED_OPACITY_DURATION,
	          VAR_FG_UNBOUNDED_TRANSFORM_DURATION = _MDCRippleFoundation$5.VAR_FG_UNBOUNDED_TRANSFORM_DURATION,
	          VAR_FG_APPROX_XF = _MDCRippleFoundation$5.VAR_FG_APPROX_XF;

	      this.adapter_.updateCssVariable(VAR_FG_APPROX_XF, 'scale(' + approxCurScale + ')');
	      this.adapter_.updateCssVariable(VAR_FG_UNBOUNDED_OPACITY_DURATION, opacityDuration + 'ms');
	      this.adapter_.updateCssVariable(VAR_FG_UNBOUNDED_TRANSFORM_DURATION, transformDuration + 'ms');
	      this.adapter_.addClass(FG_UNBOUNDED_DEACTIVATION);
	      this.adapter_.removeClass(FG_UNBOUNDED_ACTIVATION);
	      // We use setTimeout here since we know how long the fade will take.
	      this.unboundedOpacityFadeTimer_ = setTimeout(function () {
	        _this7.adapter_.removeClass(FG_UNBOUNDED_DEACTIVATION);
	      }, opacityDuration);
	    }
	  }, {
	    key: 'getUnboundedDeactivationInfo_',
	    value: function getUnboundedDeactivationInfo_(activationStartTime) {
	      var msElapsed = Date.now() - activationStartTime;
	      var _MDCRippleFoundation$6 = MDCRippleFoundation.numbers,
	          FG_TRANSFORM_DELAY_MS = _MDCRippleFoundation$6.FG_TRANSFORM_DELAY_MS,
	          OPACITY_DURATION_DIVISOR = _MDCRippleFoundation$6.OPACITY_DURATION_DIVISOR,
	          ACTIVE_OPACITY_DURATION_MS = _MDCRippleFoundation$6.ACTIVE_OPACITY_DURATION_MS,
	          UNBOUNDED_TRANSFORM_DURATION_MS = _MDCRippleFoundation$6.UNBOUNDED_TRANSFORM_DURATION_MS,
	          MIN_OPACITY_DURATION_MS = _MDCRippleFoundation$6.MIN_OPACITY_DURATION_MS;


	      var approxCurScale = 0;
	      if (msElapsed > FG_TRANSFORM_DELAY_MS) {
	        approxCurScale = Math.min((msElapsed - FG_TRANSFORM_DELAY_MS) / this.xfDuration_, 1);
	      }

	      var transformDuration = UNBOUNDED_TRANSFORM_DURATION_MS;
	      var approxOpacity = Math.min(msElapsed / ACTIVE_OPACITY_DURATION_MS, 1);
	      var opacityDuration = Math.max(MIN_OPACITY_DURATION_MS, 1000 * approxOpacity / OPACITY_DURATION_DIVISOR);

	      return { transformDuration: transformDuration, opacityDuration: opacityDuration, approxCurScale: approxCurScale };
	    }
	  }, {
	    key: 'animateBoundedDeactivation_',
	    value: function animateBoundedDeactivation_(e, isPointerEvent) {
	      var startPoint = void 0;
	      if (isPointerEvent) {
	        startPoint = (0, _util.getNormalizedEventCoords)(e, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
	      } else {
	        startPoint = {
	          left: this.frame_.width / 2,
	          top: this.frame_.height / 2
	        };
	      }
	      var _startPoint2 = startPoint,
	          left = _startPoint2.left,
	          top = _startPoint2.top;
	      var _MDCRippleFoundation$7 = MDCRippleFoundation.strings,
	          VAR_LEFT = _MDCRippleFoundation$7.VAR_LEFT,
	          VAR_TOP = _MDCRippleFoundation$7.VAR_TOP,
	          TRANSITION_END_EVENT = _MDCRippleFoundation$7.TRANSITION_END_EVENT,
	          ANIMATION_END_EVENT = _MDCRippleFoundation$7.ANIMATION_END_EVENT;
	      var _MDCRippleFoundation$8 = MDCRippleFoundation.cssClasses,
	          BG_BOUNDED_ACTIVE_FILL = _MDCRippleFoundation$8.BG_BOUNDED_ACTIVE_FILL,
	          FG_BOUNDED_ACTIVE_FILL = _MDCRippleFoundation$8.FG_BOUNDED_ACTIVE_FILL;

	      this.adapter_.updateCssVariable(VAR_LEFT, left + 'px');
	      this.adapter_.updateCssVariable(VAR_TOP, top + 'px');
	      this.cancelBgBounded_ = (0, _util.animateWithClass)(this.adapter_, BG_BOUNDED_ACTIVE_FILL, TRANSITION_END_EVENT);
	      this.cancelFgBounded_ = (0, _util.animateWithClass)(this.adapter_, FG_BOUNDED_ACTIVE_FILL, ANIMATION_END_EVENT);
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      var _this8 = this;

	      if (!this.isSupported_) {
	        return;
	      }
	      this.removeEventListeners_();

	      var _MDCRippleFoundation$9 = MDCRippleFoundation.cssClasses,
	          ROOT = _MDCRippleFoundation$9.ROOT,
	          UNBOUNDED = _MDCRippleFoundation$9.UNBOUNDED;

	      requestAnimationFrame(function () {
	        _this8.adapter_.removeClass(ROOT);
	        _this8.adapter_.removeClass(UNBOUNDED);
	        _this8.removeCssVars_();
	      });
	    }
	  }, {
	    key: 'removeEventListeners_',
	    value: function removeEventListeners_() {
	      var _this9 = this;

	      this.listenerInfos_.forEach(function (info) {
	        Object.keys(info).forEach(function (k) {
	          _this9.adapter_.deregisterInteractionHandler(info[k], _this9.listeners_[k]);
	        });
	      });
	      this.adapter_.deregisterResizeHandler(this.resizeHandler_);
	    }
	  }, {
	    key: 'removeCssVars_',
	    value: function removeCssVars_() {
	      var _this10 = this;

	      var strings = MDCRippleFoundation.strings;

	      Object.keys(strings).forEach(function (k) {
	        if (k.indexOf('VAR_') === 0) {
	          _this10.adapter_.updateCssVariable(strings[k], null);
	        }
	      });
	    }
	  }, {
	    key: 'layout',
	    value: function layout() {
	      var _this11 = this;

	      if (this.layoutFrame_) {
	        cancelAnimationFrame(this.layoutFrame_);
	      }
	      this.layoutFrame_ = requestAnimationFrame(function () {
	        _this11.layoutInternal_();
	        _this11.layoutFrame_ = 0;
	      });
	    }
	  }, {
	    key: 'layoutInternal_',
	    value: function layoutInternal_() {
	      this.frame_ = this.adapter_.computeBoundingRect();

	      var maxDim = Math.max(this.frame_.height, this.frame_.width);

	      // Sqrt(2) * square length == diameter
	      this.maxRadius_ = Math.sqrt(2) * maxDim / 2;
	      this.xfDuration_ = 1000 * Math.sqrt(this.maxRadius_ / 1024);
	      this.updateLayoutCssVars_();
	    }
	  }, {
	    key: 'updateLayoutCssVars_',
	    value: function updateLayoutCssVars_() {
	      var fgSize = this.maxRadius_ * 2;
	      var _MDCRippleFoundation$10 = MDCRippleFoundation.strings,
	          VAR_SURFACE_WIDTH = _MDCRippleFoundation$10.VAR_SURFACE_WIDTH,
	          VAR_SURFACE_HEIGHT = _MDCRippleFoundation$10.VAR_SURFACE_HEIGHT,
	          VAR_FG_SIZE = _MDCRippleFoundation$10.VAR_FG_SIZE,
	          VAR_FG_UNBOUNDED_TRANSFORM_DURATION = _MDCRippleFoundation$10.VAR_FG_UNBOUNDED_TRANSFORM_DURATION,
	          VAR_LEFT = _MDCRippleFoundation$10.VAR_LEFT,
	          VAR_TOP = _MDCRippleFoundation$10.VAR_TOP;


	      this.adapter_.updateCssVariable(VAR_SURFACE_WIDTH, this.frame_.width + 'px');
	      this.adapter_.updateCssVariable(VAR_SURFACE_HEIGHT, this.frame_.height + 'px');
	      this.adapter_.updateCssVariable(VAR_FG_SIZE, fgSize + 'px');
	      this.adapter_.updateCssVariable(VAR_FG_UNBOUNDED_TRANSFORM_DURATION, this.xfDuration_ + 'ms');

	      if (this.adapter_.isUnbounded()) {
	        var left = -(fgSize / 2) + this.frame_.width / 2;
	        var top = -(fgSize / 2) + this.frame_.height / 2;
	        this.adapter_.updateCssVariable(VAR_LEFT, left + 'px');
	        this.adapter_.updateCssVariable(VAR_TOP, top + 'px');
	      }
	    }
	  }]);

	  return MDCRippleFoundation;
	}(_base.MDCFoundation);

	exports.default = MDCRippleFoundation;

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Copyright 2016 Google Inc. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	var ROOT = exports.ROOT = 'mdc-ripple';
	var UPGRADED = exports.UPGRADED = ROOT + '-upgraded';

	var cssClasses = exports.cssClasses = {
	  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
	  // given that it's an 'upgrade' to an existing component. That being said it is the root
	  // CSS class that all other CSS classes derive from.
	  ROOT: UPGRADED,
	  UNBOUNDED: UPGRADED + '--unbounded',
	  BG_ACTIVE: UPGRADED + '--background-active',
	  BG_BOUNDED_ACTIVE_FILL: UPGRADED + '--background-bounded-active-fill',
	  FG_BOUNDED_ACTIVE_FILL: UPGRADED + '--foreground-bounded-active-fill',
	  FG_UNBOUNDED_ACTIVATION: UPGRADED + '--foreground-unbounded-activation',
	  FG_UNBOUNDED_DEACTIVATION: UPGRADED + '--foreground-unbounded-deactivation'
	};

	var strings = exports.strings = {
	  VAR_SURFACE_WIDTH: '--' + ROOT + '-surface-width',
	  VAR_SURFACE_HEIGHT: '--' + ROOT + '-surface-height',
	  VAR_FG_SIZE: '--' + ROOT + '-fg-size',
	  VAR_FG_UNBOUNDED_OPACITY_DURATION: '--' + ROOT + '-fg-unbounded-opacity-duration',
	  VAR_FG_UNBOUNDED_TRANSFORM_DURATION: '--' + ROOT + '-fg-unbounded-transform-duration',
	  VAR_LEFT: '--' + ROOT + '-left',
	  VAR_TOP: '--' + ROOT + '-top',
	  VAR_XF_ORIGIN_X: '--' + ROOT + '-xfo-x',
	  VAR_XF_ORIGIN_Y: '--' + ROOT + '-xfo-y',
	  VAR_FG_APPROX_XF: '--' + ROOT + '-fg-approx-xf',
	  ANIMATION_END_EVENT: function () {
	    var d = document.createElement('div');
	    return 'webkitAnimation' in d.style ? 'webkitAnimationEnd' : 'animationend';
	  }(),
	  TRANSITION_END_EVENT: function () {
	    var d = document.createElement('div');
	    return 'webkitTransition' in d.style ? 'webkitTransitionEnd' : 'transitionend';
	  }()
	};

	var numbers = exports.numbers = {
	  FG_TRANSFORM_DELAY_MS: 80,
	  OPACITY_DURATION_DIVISOR: 3,
	  ACTIVE_OPACITY_DURATION_MS: 110,
	  MIN_OPACITY_DURATION_MS: 200,
	  UNBOUNDED_TRANSFORM_DURATION_MS: 200
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.supportsCssVariables = supportsCssVariables;
	exports.getMatchesProperty = getMatchesProperty;
	exports.animateWithClass = animateWithClass;
	exports.getNormalizedEventCoords = getNormalizedEventCoords;
	/**
	 * Copyright 2016 Google Inc. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	function supportsCssVariables(windowObj) {
	  var supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';
	  if (!supportsFunctionPresent) {
	    return;
	  }

	  var explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes');
	  // See: https://bugs.webkit.org/show_bug.cgi?id=154669
	  // See: README section on Safari
	  var weAreFeatureDetectingSafari10plus = windowObj.CSS.supports('(--css-vars: yes)') && windowObj.CSS.supports('color', '#00000000');
	  return explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus;
	}

	function getMatchesProperty(HTMLElementPrototype) {
	  return ['webkitMatchesSelector', 'msMatchesSelector', 'matches'].filter(function (p) {
	    return p in HTMLElementPrototype;
	  }).pop();
	}

	function animateWithClass(rippleAdapter, cls, endEvent) {
	  var cancelled = false;
	  var cancel = function cancel() {
	    if (cancelled) {
	      return;
	    }
	    cancelled = true;
	    rippleAdapter.removeClass(cls);
	    rippleAdapter.deregisterInteractionHandler(endEvent, cancel);
	  };
	  rippleAdapter.registerInteractionHandler(endEvent, cancel);
	  rippleAdapter.addClass(cls);
	  return cancel;
	}

	function getNormalizedEventCoords(ev, pageOffset, clientRect) {
	  var x = pageOffset.x,
	      y = pageOffset.y;

	  var documentLeft = x + clientRect.left;
	  var documentTop = y + clientRect.top;

	  var normalizedLeft = void 0;
	  var normalizedTop = void 0;
	  // Determine touch point relative to the ripple container.
	  if (ev.type === 'touchend') {
	    normalizedLeft = ev.changedTouches[0].pageX - documentLeft;
	    normalizedTop = ev.changedTouches[0].pageY - documentTop;
	  } else {
	    normalizedLeft = ev.pageX - documentLeft;
	    normalizedTop = ev.pageY - documentTop;
	  }

	  return { left: normalizedLeft, top: normalizedTop };
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _base = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var ROOT = 'mdc-icon-toggle';

	var MDCIconToggleFoundation = function (_MDCFoundation) {
	  _inherits(MDCIconToggleFoundation, _MDCFoundation);

	  _createClass(MDCIconToggleFoundation, null, [{
	    key: 'cssClasses',
	    get: function get() {
	      return {
	        ROOT: ROOT,
	        DISABLED: ROOT + '--disabled'
	      };
	    }
	  }, {
	    key: 'strings',
	    get: function get() {
	      return {
	        DATA_TOGGLE_ON: 'data-toggle-on',
	        DATA_TOGGLE_OFF: 'data-toggle-off',
	        ARIA_PRESSED: 'aria-pressed',
	        ARIA_DISABLED: 'aria-disabled',
	        ARIA_LABEL: 'aria-label'
	      };
	    }
	  }, {
	    key: 'defaultAdapter',
	    get: function get() {
	      return {
	        addClass: function addClass() /* className: string */{},
	        removeClass: function removeClass() /* className: string */{},
	        registerInteractionHandler: function registerInteractionHandler() /* type: string, handler: EventListener */{},
	        deregisterInteractionHandler: function deregisterInteractionHandler() /* type: string, handler: EventListener */{},
	        setText: function setText() /* text: string */{},
	        getTabIndex: function getTabIndex() {
	          return (/* number */0
	          );
	        },
	        setTabIndex: function setTabIndex() /* tabIndex: number */{},
	        getAttr: function getAttr() {
	          return (/* name: string */ /* string */''
	          );
	        },
	        setAttr: function setAttr() /* name: string, value: string */{},
	        rmAttr: function rmAttr() /* name: string */{},
	        notifyChange: function notifyChange() /* evtData: {isOn: boolean} */{}
	      };
	    }
	  }]);

	  function MDCIconToggleFoundation(adapter) {
	    _classCallCheck(this, MDCIconToggleFoundation);

	    var _this = _possibleConstructorReturn(this, (MDCIconToggleFoundation.__proto__ || Object.getPrototypeOf(MDCIconToggleFoundation)).call(this, _extends(MDCIconToggleFoundation.defaultAdapter, adapter)));

	    _this.on_ = false;
	    _this.disabled_ = false;
	    _this.savedTabIndex_ = -1;
	    _this.toggleOnData_ = null;
	    _this.toggleOffData_ = null;
	    _this.clickHandler_ = function () {
	      return _this.toggleFromEvt_();
	    };
	    _this.isHandlingKeydown_ = false;
	    _this.keydownHandler_ = function (evt) {
	      if (isSpace(evt)) {
	        _this.isHandlingKeydown_ = true;
	        return evt.preventDefault();
	      }
	    };
	    _this.keyupHandler_ = function (evt) {
	      if (isSpace(evt)) {
	        _this.isHandlingKeydown_ = false;
	        _this.toggleFromEvt_();
	      }
	    };
	    return _this;
	  }

	  _createClass(MDCIconToggleFoundation, [{
	    key: 'init',
	    value: function init() {
	      this.refreshToggleData();
	      this.adapter_.registerInteractionHandler('click', this.clickHandler_);
	      this.adapter_.registerInteractionHandler('keydown', this.keydownHandler_);
	      this.adapter_.registerInteractionHandler('keyup', this.keyupHandler_);
	    }
	  }, {
	    key: 'refreshToggleData',
	    value: function refreshToggleData() {
	      var _MDCIconToggleFoundat = MDCIconToggleFoundation.strings,
	          DATA_TOGGLE_ON = _MDCIconToggleFoundat.DATA_TOGGLE_ON,
	          DATA_TOGGLE_OFF = _MDCIconToggleFoundat.DATA_TOGGLE_OFF;

	      this.toggleOnData_ = this.parseJsonDataAttr_(DATA_TOGGLE_ON);
	      this.toggleOffData_ = this.parseJsonDataAttr_(DATA_TOGGLE_OFF);
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
	      this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
	      this.adapter_.deregisterInteractionHandler('keyup', this.keyupHandler_);
	    }
	  }, {
	    key: 'toggleFromEvt_',
	    value: function toggleFromEvt_() {
	      this.toggle();
	      var isOn = this.on_;

	      this.adapter_.notifyChange({ isOn: isOn });
	    }
	  }, {
	    key: 'isOn',
	    value: function isOn() {
	      return this.on_;
	    }
	  }, {
	    key: 'toggle',
	    value: function toggle() {
	      var isOn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !this.on_;

	      this.on_ = isOn;

	      var _MDCIconToggleFoundat2 = MDCIconToggleFoundation.strings,
	          ARIA_LABEL = _MDCIconToggleFoundat2.ARIA_LABEL,
	          ARIA_PRESSED = _MDCIconToggleFoundat2.ARIA_PRESSED;

	      var _ref = this.on_ ? this.toggleOnData_ : this.toggleOffData_,
	          content = _ref.content,
	          label = _ref.label,
	          cssClass = _ref.cssClass;

	      var _ref2 = this.on_ ? this.toggleOffData_ : this.toggleOnData_,
	          classToRemove = _ref2.cssClass;

	      if (this.on_) {
	        this.adapter_.setAttr(ARIA_PRESSED, 'true');
	      } else {
	        this.adapter_.setAttr(ARIA_PRESSED, 'false');
	      }

	      if (classToRemove) {
	        this.adapter_.removeClass(classToRemove);
	      }
	      if (cssClass) {
	        this.adapter_.addClass(cssClass);
	      }
	      if (content) {
	        this.adapter_.setText(content);
	      }
	      if (label) {
	        this.adapter_.setAttr(ARIA_LABEL, label);
	      }
	    }
	  }, {
	    key: 'parseJsonDataAttr_',
	    value: function parseJsonDataAttr_(dataAttr) {
	      var val = this.adapter_.getAttr(dataAttr);
	      if (!val) {
	        return {};
	      }
	      return JSON.parse(val);
	    }
	  }, {
	    key: 'isDisabled',
	    value: function isDisabled() {
	      return this.disabled_;
	    }
	  }, {
	    key: 'setDisabled',
	    value: function setDisabled(isDisabled) {
	      this.disabled_ = isDisabled;

	      var DISABLED = MDCIconToggleFoundation.cssClasses.DISABLED;
	      var ARIA_DISABLED = MDCIconToggleFoundation.strings.ARIA_DISABLED;


	      if (this.disabled_) {
	        this.savedTabIndex = this.adapter_.getTabIndex();
	        this.adapter_.setTabIndex(-1);
	        this.adapter_.setAttr(ARIA_DISABLED, 'true');
	        this.adapter_.addClass(DISABLED);
	      } else {
	        this.adapter_.setTabIndex(this.savedTabIndex);
	        this.adapter_.rmAttr(ARIA_DISABLED);
	        this.adapter_.removeClass(DISABLED);
	      }
	    }
	  }, {
	    key: 'isKeyboardActivated',
	    value: function isKeyboardActivated() {
	      return this.isHandlingKeydown_;
	    }
	  }]);

	  return MDCIconToggleFoundation;
	}(_base.MDCFoundation);

	exports.default = MDCIconToggleFoundation;


	function isSpace(_ref3) {
	  var key = _ref3.key,
	      keyCode = _ref3.keyCode;

	  return key && key === 'Space' || keyCode === 32;
	}

/***/ }
/******/ ])
});
;