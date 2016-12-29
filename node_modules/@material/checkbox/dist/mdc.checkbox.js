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
		exports["checkbox"] = factory();
	else
		root["mdc"] = root["mdc"] || {}, root["mdc"]["checkbox"] = factory();
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

	module.exports = __webpack_require__(5);


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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MDCCheckbox = exports.MDCCheckboxFoundation = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _base = __webpack_require__(2);

	var _foundation = __webpack_require__(6);

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

	exports.MDCCheckboxFoundation = _foundation2.default;

	var MDCCheckbox = exports.MDCCheckbox = function (_MDCComponent) {
	  _inherits(MDCCheckbox, _MDCComponent);

	  function MDCCheckbox() {
	    _classCallCheck(this, MDCCheckbox);

	    return _possibleConstructorReturn(this, (MDCCheckbox.__proto__ || Object.getPrototypeOf(MDCCheckbox)).apply(this, arguments));
	  }

	  _createClass(MDCCheckbox, [{
	    key: 'getDefaultFoundation',
	    value: function getDefaultFoundation() {
	      var _this2 = this;

	      var ANIM_END_EVENT_NAME = _foundation2.default.strings.ANIM_END_EVENT_NAME;

	      return new _foundation2.default({
	        addClass: function addClass(className) {
	          return _this2.root_.classList.add(className);
	        },
	        removeClass: function removeClass(className) {
	          return _this2.root_.classList.remove(className);
	        },
	        registerAnimationEndHandler: function registerAnimationEndHandler(handler) {
	          return _this2.root_.addEventListener(ANIM_END_EVENT_NAME, handler);
	        },
	        deregisterAnimationEndHandler: function deregisterAnimationEndHandler(handler) {
	          return _this2.root_.removeEventListener(ANIM_END_EVENT_NAME, handler);
	        },
	        registerChangeHandler: function registerChangeHandler(handler) {
	          return _this2.nativeCb_.addEventListener('change', handler);
	        },
	        deregisterChangeHandler: function deregisterChangeHandler(handler) {
	          return _this2.nativeCb_.removeEventListener('change', handler);
	        },
	        getNativeControl: function getNativeControl() {
	          return _this2.nativeCb_;
	        },
	        forceLayout: function forceLayout() {
	          return _this2.root_.offsetWidth;
	        },
	        isAttachedToDOM: function isAttachedToDOM() {
	          return Boolean(_this2.root_.parentNode);
	        }
	      });
	    }
	  }, {
	    key: 'nativeCb_',
	    get: function get() {
	      var NATIVE_CONTROL_SELECTOR = _foundation2.default.strings.NATIVE_CONTROL_SELECTOR;

	      return this.root_.querySelector(NATIVE_CONTROL_SELECTOR);
	    }
	  }, {
	    key: 'checked',
	    get: function get() {
	      return this.foundation_.isChecked();
	    },
	    set: function set(checked) {
	      this.foundation_.setChecked(checked);
	    }
	  }, {
	    key: 'indeterminate',
	    get: function get() {
	      return this.foundation_.isIndeterminate();
	    },
	    set: function set(indeterminate) {
	      this.foundation_.setIndeterminate(indeterminate);
	    }
	  }, {
	    key: 'disabled',
	    get: function get() {
	      return this.foundation_.isDisabled();
	    },
	    set: function set(disabled) {
	      this.foundation_.setDisabled(disabled);
	    }
	  }], [{
	    key: 'attachTo',
	    value: function attachTo(root) {
	      return new MDCCheckbox(root);
	    }
	  }]);

	  return MDCCheckbox;
	}(_base.MDCComponent);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _base = __webpack_require__(2);

	var _constants = __webpack_require__(7);

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

	var CB_PROTO_PROPS = ['checked', 'indeterminate'];

	var MDCCheckboxFoundation = function (_MDCFoundation) {
	  _inherits(MDCCheckboxFoundation, _MDCFoundation);

	  _createClass(MDCCheckboxFoundation, null, [{
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
	        addClass: function addClass() /* className: string */{},
	        removeClass: function removeClass() /* className: string */{},
	        registerAnimationEndHandler: function registerAnimationEndHandler() /* handler: EventListener */{},
	        deregisterAnimationEndHandler: function deregisterAnimationEndHandler() /* handler: EventListener */{},
	        registerChangeHandler: function registerChangeHandler() /* handler: EventListener */{},
	        deregisterChangeHandler: function deregisterChangeHandler() /* handler: EventListener */{},
	        getNativeControl: function getNativeControl() /* HTMLInputElement */{},
	        forceLayout: function forceLayout() {},
	        isAttachedToDOM: function isAttachedToDOM() /* boolean */{}
	      };
	    }
	  }]);

	  function MDCCheckboxFoundation(adapter) {
	    _classCallCheck(this, MDCCheckboxFoundation);

	    var _this = _possibleConstructorReturn(this, (MDCCheckboxFoundation.__proto__ || Object.getPrototypeOf(MDCCheckboxFoundation)).call(this, _extends(MDCCheckboxFoundation.defaultAdapter, adapter)));

	    _this.currentCheckState_ = _constants.strings.TRANSITION_STATE_INIT;
	    _this.currentAnimationClass_ = '';
	    _this.animEndLatchTimer_ = 0;
	    _this.animEndHandler_ = function () {
	      clearTimeout(_this.animEndLatchTimer_);
	      _this.animEndLatchTimer_ = setTimeout(function () {
	        _this.adapter_.removeClass(_this.currentAnimationClass_);
	        _this.adapter_.deregisterAnimationEndHandler(_this.animEndHandler_);
	      }, _constants.numbers.ANIM_END_LATCH_MS);
	    };
	    _this.changeHandler_ = function () {
	      return _this.transitionCheckState_();
	    };
	    return _this;
	  }

	  _createClass(MDCCheckboxFoundation, [{
	    key: 'init',
	    value: function init() {
	      this.adapter_.registerChangeHandler(this.changeHandler_);
	      this.installPropertyChangeHooks_();
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.adapter_.deregisterChangeHandler(this.changeHandler_);
	      this.uninstallPropertyChangeHooks_();
	    }
	  }, {
	    key: 'isChecked',
	    value: function isChecked() {
	      return this.getNativeControl_().checked;
	    }
	  }, {
	    key: 'setChecked',
	    value: function setChecked(checked) {
	      this.getNativeControl_().checked = checked;
	    }
	  }, {
	    key: 'isIndeterminate',
	    value: function isIndeterminate() {
	      return this.getNativeControl_().indeterminate;
	    }
	  }, {
	    key: 'setIndeterminate',
	    value: function setIndeterminate(indeterminate) {
	      this.getNativeControl_().indeterminate = indeterminate;
	    }
	  }, {
	    key: 'isDisabled',
	    value: function isDisabled() {
	      return this.getNativeControl_().disabled;
	    }
	  }, {
	    key: 'setDisabled',
	    value: function setDisabled(disabled) {
	      this.getNativeControl_().disabled = disabled;
	    }
	  }, {
	    key: 'installPropertyChangeHooks_',
	    value: function installPropertyChangeHooks_() {
	      var _this2 = this;

	      var nativeCb = this.getNativeControl_();
	      var cbProto = Object.getPrototypeOf(nativeCb);

	      CB_PROTO_PROPS.forEach(function (controlState) {
	        var desc = Object.getOwnPropertyDescriptor(cbProto, controlState);
	        // We have to check for this descriptor, since some browsers (Safari) don't support its return.
	        // See: https://bugs.webkit.org/show_bug.cgi?id=49739
	        if (validDescriptor(desc)) {
	          Object.defineProperty(nativeCb, controlState, {
	            get: desc.get,
	            set: function set(state) {
	              desc.set.call(nativeCb, state);
	              _this2.transitionCheckState_();
	            },
	            configurable: desc.configurable,
	            enumerable: desc.enumerable
	          });
	        }
	      });
	    }
	  }, {
	    key: 'uninstallPropertyChangeHooks_',
	    value: function uninstallPropertyChangeHooks_() {
	      var nativeCb = this.getNativeControl_();
	      var cbProto = Object.getPrototypeOf(nativeCb);

	      CB_PROTO_PROPS.forEach(function (controlState) {
	        var desc = Object.getOwnPropertyDescriptor(cbProto, controlState);
	        if (validDescriptor(desc)) {
	          Object.defineProperty(nativeCb, controlState, desc);
	        }
	      });
	    }
	  }, {
	    key: 'transitionCheckState_',
	    value: function transitionCheckState_() {
	      var nativeCb = this.adapter_.getNativeControl();
	      if (!nativeCb) {
	        return;
	      }
	      var oldState = this.currentCheckState_;
	      var newState = this.determineCheckState_(nativeCb);
	      if (oldState === newState) {
	        return;
	      }

	      // Check to ensure that there isn't a previously existing animation class, in case for example
	      // the user interacted with the checkbox before the animation was finished.
	      if (this.currentAnimationClass_.length > 0) {
	        clearTimeout(this.animEndLatchTimer_);
	        this.adapter_.forceLayout();
	        this.adapter_.removeClass(this.currentAnimationClass_);
	      }

	      this.currentAnimationClass_ = this.getTransitionAnimationClass_(oldState, newState);
	      this.currentCheckState_ = newState;

	      // Check for parentNode so that animations are only run when the element is attached
	      // to the DOM.
	      if (this.adapter_.isAttachedToDOM() && this.currentAnimationClass_.length > 0) {
	        this.adapter_.addClass(this.currentAnimationClass_);
	        this.adapter_.registerAnimationEndHandler(this.animEndHandler_);
	      }
	    }
	  }, {
	    key: 'determineCheckState_',
	    value: function determineCheckState_(nativeCb) {
	      var TRANSITION_STATE_INDETERMINATE = _constants.strings.TRANSITION_STATE_INDETERMINATE,
	          TRANSITION_STATE_CHECKED = _constants.strings.TRANSITION_STATE_CHECKED,
	          TRANSITION_STATE_UNCHECKED = _constants.strings.TRANSITION_STATE_UNCHECKED;


	      if (nativeCb.indeterminate) {
	        return TRANSITION_STATE_INDETERMINATE;
	      }
	      return nativeCb.checked ? TRANSITION_STATE_CHECKED : TRANSITION_STATE_UNCHECKED;
	    }
	  }, {
	    key: 'getTransitionAnimationClass_',
	    value: function getTransitionAnimationClass_(oldState, newState) {
	      var TRANSITION_STATE_INIT = _constants.strings.TRANSITION_STATE_INIT,
	          TRANSITION_STATE_CHECKED = _constants.strings.TRANSITION_STATE_CHECKED,
	          TRANSITION_STATE_UNCHECKED = _constants.strings.TRANSITION_STATE_UNCHECKED;
	      var _MDCCheckboxFoundatio = MDCCheckboxFoundation.cssClasses,
	          ANIM_UNCHECKED_CHECKED = _MDCCheckboxFoundatio.ANIM_UNCHECKED_CHECKED,
	          ANIM_UNCHECKED_INDETERMINATE = _MDCCheckboxFoundatio.ANIM_UNCHECKED_INDETERMINATE,
	          ANIM_CHECKED_UNCHECKED = _MDCCheckboxFoundatio.ANIM_CHECKED_UNCHECKED,
	          ANIM_CHECKED_INDETERMINATE = _MDCCheckboxFoundatio.ANIM_CHECKED_INDETERMINATE,
	          ANIM_INDETERMINATE_CHECKED = _MDCCheckboxFoundatio.ANIM_INDETERMINATE_CHECKED,
	          ANIM_INDETERMINATE_UNCHECKED = _MDCCheckboxFoundatio.ANIM_INDETERMINATE_UNCHECKED;


	      switch (oldState) {
	        case TRANSITION_STATE_INIT:
	          if (newState === TRANSITION_STATE_UNCHECKED) {
	            return '';
	          }
	        // fallthrough
	        case TRANSITION_STATE_UNCHECKED:
	          return newState === TRANSITION_STATE_CHECKED ? ANIM_UNCHECKED_CHECKED : ANIM_UNCHECKED_INDETERMINATE;
	        case TRANSITION_STATE_CHECKED:
	          return newState === TRANSITION_STATE_UNCHECKED ? ANIM_CHECKED_UNCHECKED : ANIM_CHECKED_INDETERMINATE;
	        // TRANSITION_STATE_INDETERMINATE
	        default:
	          return newState === TRANSITION_STATE_CHECKED ? ANIM_INDETERMINATE_CHECKED : ANIM_INDETERMINATE_UNCHECKED;
	      }
	    }
	  }, {
	    key: 'getNativeControl_',
	    value: function getNativeControl_() {
	      return this.adapter_.getNativeControl() || {
	        checked: false,
	        indeterminate: false,
	        disabled: false
	      };
	    }
	  }]);

	  return MDCCheckboxFoundation;
	}(_base.MDCFoundation);

	exports.default = MDCCheckboxFoundation;


	function validDescriptor(inputPropDesc) {
	  return inputPropDesc && typeof inputPropDesc.set === 'function';
	}

/***/ },
/* 7 */
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

	var ROOT = 'mdc-checkbox';
	var ANIM = ROOT + '--anim';

	var cssClasses = exports.cssClasses = {
	  ROOT: ROOT,
	  CHECKED: ROOT + '--checked',
	  INDETERMINATE: ROOT + '--indeterminate',
	  ANIM_UNCHECKED_CHECKED: ANIM + '-unchecked-checked',
	  ANIM_UNCHECKED_INDETERMINATE: ANIM + '-unchecked-indeterminate',
	  ANIM_CHECKED_UNCHECKED: ANIM + '-checked-unchecked',
	  ANIM_CHECKED_INDETERMINATE: ANIM + '-checked-indeterminate',
	  ANIM_INDETERMINATE_CHECKED: ANIM + '-indeterminate-checked',
	  ANIM_INDETERMINATE_UNCHECKED: ANIM + '-indeterminate-unchecked'
	};

	var strings = exports.strings = {
	  ANIM_END_EVENT_NAME: function () {
	    var el = document.createElement('div');
	    // NOTE: We can immediately assume that the prefix is 'webkit' in browsers that don't
	    // support unprefixed animations since the only browsers up to two major versions back that
	    // don't support unprefixed names are mobile Safari and Android native browser, both of
	    // which use the 'webkit' prefix.
	    return 'animation' in el.style ? 'animationend' : 'webkitAnimationEnd';
	  }(),
	  NATIVE_CONTROL_SELECTOR: '.' + ROOT + '__native-control',
	  TRANSITION_STATE_INIT: 'init',
	  TRANSITION_STATE_CHECKED: 'checked',
	  TRANSITION_STATE_UNCHECKED: 'unchecked',
	  TRANSITION_STATE_INDETERMINATE: 'indeterminate'
	};

	var numbers = exports.numbers = {
	  ANIM_END_LATCH_MS: 100
	};

/***/ }
/******/ ])
});
;