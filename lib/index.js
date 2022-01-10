import React, { useState, useRef, useEffect } from 'react';

var classnames = {exports: {}};

/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

(function (module) {
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
}(classnames));

var classNames = classnames.exports;

/**
 * @name SvgIcon
 * @author Lester
 * @date 2021-05-08 14:28
 */
var SvgIcon = function (_a) {
    var className = _a.className, name = _a.name, onClick = _a.onClick;
    return (React.createElement("svg", { className: classNames('icon', className), "aria-hidden": "true", onClick: function (event) { return onClick && onClick(event); } },
        React.createElement("use", { xlinkHref: "#icon-".concat(name) })));
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$3 = "/**\n* @name style.module\n* @author Lester\n* @date 2021-05-12 16:21\n*/\n.style-module_wrap__AWm8a {\n  width: 100%;\n  overflow: hidden;\n}\n.style-module_wrap__AWm8a .style-module_content__1pn3e {\n  white-space: nowrap;\n  width: fit-content;\n}\n.style-module_wrap__AWm8a .style-module_content__1pn3e.style-module_active__18DVo {\n  animation: style-module_carousel__3i369 4s linear infinite;\n}\n@keyframes style-module_carousel__3i369 {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(-50%);\n  }\n}\n.style-module_wrap__AWm8a .style-module_content__1pn3e .style-module_text__GYdXC {\n  margin-left: 1rem;\n  display: inline-block;\n}\n";
var style$3 = {"wrap":"style-module_wrap__AWm8a","content":"style-module_content__1pn3e","active":"style-module_active__18DVo","carousel":"style-module_carousel__3i369","text":"style-module_text__GYdXC"};
styleInject(css_248z$3);

/**
 * @name CarouselText
 * @author Lester
 * @date 2021-05-12 16:10
 */
var CarouselText = function (_a) {
    var children = _a.children;
    var _b = useState(1), durationRate = _b[0], setDurationRate = _b[1];
    var wrapRef = useRef(null);
    var textRef = useRef(null);
    // 根据需要移动时 内容文字宽度:容器宽度 来计算动画的时长 以保证不同长度的内容移动速度一致
    var textStyle = durationRate > 1 ? { animationDuration: "".concat(durationRate * 4, "s") } : {};
    useEffect(function () {
        setDurationRate(textRef.current.clientWidth / wrapRef.current.clientWidth);
    }, []);
    return (React.createElement("div", { className: style$3.wrap, ref: wrapRef },
        React.createElement("div", { style: __assign({}, textStyle), className: classNames(style$3.content, durationRate > 1 && style$3.active) },
            React.createElement("span", { className: style$3.text, ref: textRef }, children),
            durationRate > 1 && React.createElement("span", { className: style$3.text }, children))));
};

var css_248z$2 = "/**\n* @name style.module\n* @author Lester\n* @date 2021-06-02 14:10\n*/\n.style-module_scrollWrap__2KoSe {\n  position: relative;\n  width: 100%;\n  height: 99.9%;\n  /* 魅族手机上100% 满屏无法滚动... */\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.style-module_scrollWrap__2KoSe::-webkit-scrollbar {\n  display: none;\n}\n.style-module_scrollWrap__2KoSe .style-module_contentWrap__DsyjR {\n  position: relative;\n  width: 100%;\n  height: fit-content;\n  z-index: 15;\n  transition: transform 0.2s linear;\n}\n.style-module_scrollWrap__2KoSe .style-module_tipsWrap__1CDjZ {\n  width: 100%;\n  padding: 0.05rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.style-module_scrollWrap__2KoSe .style-module_tipsWrap__1CDjZ.style-module_refreshWrap__3rPLJ {\n  position: absolute;\n}\n.style-module_scrollWrap__2KoSe .style-module_tipsWrap__1CDjZ .style-module_line__OlgZY {\n  width: 0.6rem;\n  height: 0.01rem;\n  background-color: grey;\n}\n.style-module_scrollWrap__2KoSe .style-module_tipsWrap__1CDjZ .style-module_tipsText__22b-O {\n  margin: 0 0.16rem;\n  position: relative;\n  color: grey;\n  font-size: 0.12rem;\n}\n";
var style$2 = {"scrollWrap":"style-module_scrollWrap__2KoSe","contentWrap":"style-module_contentWrap__DsyjR","tipsWrap":"style-module_tipsWrap__1CDjZ","refreshWrap":"style-module_refreshWrap__3rPLJ","line":"style-module_line__OlgZY","tipsText":"style-module_tipsText__22b-O"};
styleInject(css_248z$2);

/**
 * @name ScrollList
 * @author Lester
 * @date 2021-06-02 14:07
 */
var ScrollList = function (_a) {
    var children = _a.children, onLoad = _a.onLoad, loaded = _a.loaded, onRefresh = _a.onRefresh, backgroundColor = _a.backgroundColor;
    var _b = useState(false), loading = _b[0], setLoading = _b[1];
    var _c = useState(0), translateY = _c[0], setTranslateY = _c[1];
    var _d = useState(0), startY = _d[0], setStartY = _d[1];
    var scrollRef = useRef();
    var contentRef = useRef();
    var headerRef = useRef();
    var flagRef = useRef();
    /**
     * 加载更多
     */
    var loadMore = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLoading(true);
                    return [4 /*yield*/, onLoad()];
                case 1:
                    _a.sent();
                    setLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    /**
     * 处理滚动事件 判断滚动到底部
     */
    var scroll = function () {
        var flag = true;
        return function () {
            if (flag) {
                flag = false;
                setTimeout(function () {
                    flag = true;
                    var wrapHeight = scrollRef.current.clientHeight;
                    var contentHeight = contentRef.current.clientHeight;
                    var scrollDistance = scrollRef.current.scrollTop;
                    if (wrapHeight + scrollDistance > contentHeight - 10) {
                        console.log('底部l');
                        !loaded && loadMore();
                    }
                }, 100);
            }
        };
    };
    /**
     * 滑动处理 0 移动端 touch 1 PC端 mouse
     * @param type
     */
    var move = function (type) {
        var flag = true;
        return function (event) {
            if (flag) {
                flag = false;
                setTimeout(function () {
                    flag = true;
                    var scrollDistance = scrollRef.current.scrollTop;
                    var newY = type === 'touch' ? event.targetTouches[0].clientY : event.clientY;
                    var distance = newY - startY;
                    setTranslateY(scrollDistance === 0 && flagRef.current && distance > 0 ? distance : 0);
                }, 50);
            }
        };
    };
    /**
     * 开始事件处理
     * @param clientY
     */
    var start = function (clientY) {
        setStartY(clientY);
        if (onRefresh) {
            flagRef.current = true;
        }
    };
    /**
     * 触摸手势结束处理
     */
    var end = function () {
        if (translateY > 0) {
            onRefresh && onRefresh();
        }
        setTranslateY(0);
        flagRef.current = false;
    };
    return (React.createElement("div", { ref: scrollRef, className: style$2.scrollWrap, onScroll: scroll(), onMouseDown: function (e) { return start(e.clientY); }, onMouseMove: move('mouse'), onMouseUp: end, onMouseLeave: end, onTouchStart: function (e) { return start(e.targetTouches[0].clientY); }, onTouchMove: move('touch'), onTouchEnd: end, onTouchCancel: end },
        React.createElement("header", { ref: headerRef, className: classNames(style$2.tipsWrap, style$2.refreshWrap) },
            React.createElement("span", { className: style$2.line }),
            React.createElement("span", { className: style$2.tipsText }, "\u4E0B\u62C9\u5237\u65B0"),
            React.createElement("span", { className: style$2.line })),
        React.createElement("div", { ref: contentRef, className: style$2.contentWrap, style: { transform: "translateY(".concat(translateY, "px)"), backgroundColor: backgroundColor || 'white' } },
            children,
            React.createElement("footer", { className: style$2.tipsWrap },
                React.createElement("span", { className: style$2.line }),
                React.createElement("span", { className: style$2.tipsText }, loading ? '拼命加载中' : '没有更多啦'),
                React.createElement("span", { className: style$2.line })))));
};

var css_248z$1 = "/**\n* @name style.module\n* @author Lester\n* @date 2021-06-03 15:09\n*/\n.style-module_inputWrap__3lOEo {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  min-height: 0.3rem;\n  padding: 0.05rem 0;\n}\n.style-module_inputWrap__3lOEo .style-module_input__TNPWK {\n  flex: 1;\n  height: 100%;\n  border: transparent;\n  background: transparent;\n  font-size: 0.12rem;\n  color: #000000;\n  line-height: 0.12rem;\n}\n.style-module_inputWrap__3lOEo .style-module_input__TNPWK::placeholder,\n.style-module_inputWrap__3lOEo .style-module_input__TNPWK::-webkit-input-placeholder {\n  font-size: 0.1rem;\n  color: #999999;\n}\n.style-module_inputWrap__3lOEo .style-module_searchIcon__1AEqU {\n  margin-right: 0.04rem;\n  font-size: 0.2rem;\n  color: #999999;\n}\n.style-module_inputWrap__3lOEo .style-module_clearIcon__6-ZMo {\n  font-size: 0.15rem;\n  color: #999999;\n}\n";
var style$1 = {"inputWrap":"style-module_inputWrap__3lOEo","input":"style-module_input__TNPWK","searchIcon":"style-module_searchIcon__1AEqU","clearIcon":"style-module_clearIcon__6-ZMo"};
styleInject(css_248z$1);

/**
 * @name Input
 * @author Lester
 * @date 2021-06-03 15:08
 */
var Input = function (_a) {
    var className = _a.className, value = _a.value, onChange = _a.onChange, clear = _a.clear, _b = _a.search, search = _b === void 0 ? true : _b, props = __rest(_a, ["className", "value", "onChange", "clear", "search"]);
    var _c = useState(value || ''), val = _c[0], setVal = _c[1];
    return (React.createElement("div", { className: classNames(style$1.inputWrap, className) },
        search && React.createElement(SvgIcon, { className: style$1.searchIcon, name: "sousuo" }),
        React.createElement("input", __assign({ className: style$1.input, value: value || val, onChange: function (event) {
                setVal(event.target.value);
                onChange && onChange(event.target.value);
            } }, props)),
        clear && val && (React.createElement(SvgIcon, { className: style$1.clearIcon, name: "qingchushuru", onClick: function () {
                setVal('');
                onChange && onChange('');
            } }))));
};

var css_248z = "/**\n* @name style.module\n* @author Lester\n* @date 2021-06-10 14:53\n*/\n.style-module_tabWrap__3URMR {\n  width: 100%;\n  height: 100%;\n}\n.style-module_tabWrap__3URMR .style-module_tabList__2bXS7 {\n  width: 100%;\n  padding: 0.08rem 0.09rem;\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 0.01rem solid #f0f0f0;\n}\n.style-module_tabWrap__3URMR .style-module_tabList__2bXS7 .style-module_tabItem__376Rc {\n  width: 0.72rem;\n  height: 0.24rem;\n  line-height: 0.24rem;\n  text-align: center;\n  font-size: 0.12rem;\n  color: #999999;\n  background: #f5f5f5;\n  border-radius: 0.12rem;\n  cursor: pointer;\n}\n.style-module_tabWrap__3URMR .style-module_tabList__2bXS7 .style-module_tabItem__376Rc.style-module_active__3MXrI {\n  font-weight: 500;\n  color: #0086ff;\n  background: #e0efff;\n}\n.style-module_tabWrap__3URMR .style-module_tabContent__3vFEH {\n  width: 100%;\n  height: calc(100% - 0.41rem);\n  overflow-x: hidden;\n}\n.style-module_tabWrap__3URMR .style-module_tabContent__3vFEH .style-module_contentList__23J-N {\n  display: flex;\n  width: fit-content;\n  height: 100%;\n  transition: transform 0.2s linear;\n}\n";
var style = {"tabWrap":"style-module_tabWrap__3URMR","tabList":"style-module_tabList__2bXS7","tabItem":"style-module_tabItem__376Rc","active":"style-module_active__3MXrI","tabContent":"style-module_tabContent__3vFEH","contentList":"style-module_contentList__23J-N"};
styleInject(css_248z);

/**
 * @name Tabs
 * @author Lester
 * @date 2021-06-10 14:52
 */
var Tabs = function (_a) {
    var tabs = _a.tabs, activeIndex = _a.activeIndex, onTabClick = _a.onTabClick, children = _a.children;
    var _b = useState(activeIndex || 0), tabIndex = _b[0], setTabIndex = _b[1];
    var _c = useState(0), warpWith = _c[0], setWrapWith = _c[1];
    var wrapRef = useRef(null);
    useEffect(function () {
        setWrapWith(wrapRef.current.clientWidth);
    }, []);
    return (React.createElement("div", { className: style.tabWrap, ref: wrapRef },
        React.createElement("ul", { className: style.tabList }, tabs.map(function (val, index) {
            var _a;
            return (React.createElement("li", { className: classNames(style.tabItem, (_a = {},
                    _a[style.active] = index === tabIndex,
                    _a)), key: val, onClick: function () {
                    setTabIndex(index);
                    onTabClick && onTabClick(index);
                } }, val));
        })),
        React.createElement("div", { className: style.tabContent },
            React.createElement("div", { className: style.contentList, style: { transform: "translateX(-".concat(tabIndex * warpWith, "px)") } }, children))));
};

export { CarouselText, SvgIcon as Icon, Input, ScrollList, Tabs };
