// Table of Contents title. Change text to localize
$("#markdown-toc").prepend("<li><h6>{{ site.data.messages.locales[site.locale].overview }}</h6></li>");




// Table of Contents title. Change text to localize

(function(u,r){"function"===typeof define&&define.amd?define([],r):"object"===typeof module&&module.exports?module.exports=r():u.anime=r()})(this,function(){var u={duration:1E3,delay:0,loop:!1,autoplay:!0,direction:"normal",easing:"easeOutElastic",elasticity:400,round:!1,begin:void 0,update:void 0,complete:void 0},r="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY".split(" "),y,f={arr:function(a){return Array.isArray(a)},obj:function(a){return-1<
Object.prototype.toString.call(a).indexOf("Object")},svg:function(a){return a instanceof SVGElement},dom:function(a){return a.nodeType||f.svg(a)},num:function(a){return!isNaN(parseInt(a))},str:function(a){return"string"===typeof a},fnc:function(a){return"function"===typeof a},und:function(a){return"undefined"===typeof a},nul:function(a){return"null"===typeof a},hex:function(a){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)},rgb:function(a){return/^rgb/.test(a)},hsl:function(a){return/^hsl/.test(a)},
col:function(a){return f.hex(a)||f.rgb(a)||f.hsl(a)}},D=function(){var a={},b={Sine:function(a){return 1-Math.cos(a*Math.PI/2)},Circ:function(a){return 1-Math.sqrt(1-a*a)},Elastic:function(a,b){if(0===a||1===a)return a;var d=1-Math.min(b,998)/1E3,g=a/1-1;return-(Math.pow(2,10*g)*Math.sin(2*(g-d/(2*Math.PI)*Math.asin(1))*Math.PI/d))},Back:function(a){return a*a*(3*a-2)},Bounce:function(a){for(var b,d=4;a<((b=Math.pow(2,--d))-1)/11;);return 1/Math.pow(4,3-d)-7.5625*Math.pow((3*b-2)/22-a,2)}};["Quad",
"Cubic","Quart","Quint","Expo"].forEach(function(a,e){b[a]=function(a){return Math.pow(a,e+2)}});Object.keys(b).forEach(function(c){var e=b[c];a["easeIn"+c]=e;a["easeOut"+c]=function(a,b){return 1-e(1-a,b)};a["easeInOut"+c]=function(a,b){return.5>a?e(2*a,b)/2:1-e(-2*a+2,b)/2};a["easeOutIn"+c]=function(a,b){return.5>a?(1-e(1-2*a,b))/2:(e(2*a-1,b)+1)/2}});a.linear=function(a){return a};return a}(),z=function(a){return f.str(a)?a:a+""},E=function(a){return a.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()},
F=function(a){if(f.col(a))return!1;try{return document.querySelectorAll(a)}catch(b){return!1}},A=function(a){return a.reduce(function(a,c){return a.concat(f.arr(c)?A(c):c)},[])},t=function(a){if(f.arr(a))return a;f.str(a)&&(a=F(a)||a);return a instanceof NodeList||a instanceof HTMLCollection?[].slice.call(a):[a]},G=function(a,b){return a.some(function(a){return a===b})},R=function(a,b){var c={};a.forEach(function(a){var d=JSON.stringify(b.map(function(b){return a[b]}));c[d]=c[d]||[];c[d].push(a)});
return Object.keys(c).map(function(a){return c[a]})},H=function(a){return a.filter(function(a,c,e){return e.indexOf(a)===c})},B=function(a){var b={},c;for(c in a)b[c]=a[c];return b},v=function(a,b){for(var c in b)a[c]=f.und(a[c])?b[c]:a[c];return a},S=function(a){a=a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(a,b,c,m){return b+b+c+c+m+m});var b=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);a=parseInt(b[1],16);var c=parseInt(b[2],16),b=parseInt(b[3],16);return"rgb("+a+","+c+","+b+")"},
T=function(a){a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a);var b=parseInt(a[1])/360,c=parseInt(a[2])/100,e=parseInt(a[3])/100;a=function(a,b,c){0>c&&(c+=1);1<c&&--c;return c<1/6?a+6*(b-a)*c:.5>c?b:c<2/3?a+(b-a)*(2/3-c)*6:a};if(0==c)c=e=b=e;else var d=.5>e?e*(1+c):e+c-e*c,g=2*e-d,c=a(g,d,b+1/3),e=a(g,d,b),b=a(g,d,b-1/3);return"rgb("+255*c+","+255*e+","+255*b+")"},p=function(a){return/([\+\-]?[0-9|auto\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw|vh|deg)?/.exec(a)[2]},I=function(a,b,c){return p(b)?
b:-1<a.indexOf("translate")?p(c)?b+p(c):b+"px":-1<a.indexOf("rotate")||-1<a.indexOf("skew")?b+"deg":b},w=function(a,b){if(b in a.style)return getComputedStyle(a).getPropertyValue(E(b))||"0"},U=function(a,b){var c=-1<b.indexOf("scale")?1:0,e=a.style.transform;if(!e)return c;for(var d=/(\w+)\((.+?)\)/g,g=[],m=[],f=[];g=d.exec(e);)m.push(g[1]),f.push(g[2]);e=f.filter(function(a,c){return m[c]===b});return e.length?e[0]:c},J=function(a,b){if(f.dom(a)&&G(r,b))return"transform";if(f.dom(a)&&(a.getAttribute(b)||
f.svg(a)&&a[b]))return"attribute";if(f.dom(a)&&"transform"!==b&&w(a,b))return"css";if(!f.nul(a[b])&&!f.und(a[b]))return"object"},K=function(a,b){switch(J(a,b)){case "transform":return U(a,b);case "css":return w(a,b);case "attribute":return a.getAttribute(b)}return a[b]||0},L=function(a,b,c){if(f.col(b))return b=f.rgb(b)?b:f.hex(b)?S(b):f.hsl(b)?T(b):void 0,b;if(p(b))return b;a=p(a.to)?p(a.to):p(a.from);!a&&c&&(a=p(c));return a?b+a:b},M=function(a){var b=/-?\d*\.?\d+/g;return{original:a,numbers:z(a).match(b)?
z(a).match(b).map(Number):[0],strings:z(a).split(b)}},V=function(a,b,c){return b.reduce(function(b,d,g){d=d?d:c[g-1];return b+a[g-1]+d})},W=function(a){a=a?A(f.arr(a)?a.map(t):t(a)):[];return a.map(function(a,c){return{target:a,id:c}})},N=function(a,b,c,e){"transform"===c?(c=a+"("+I(a,b.from,b.to)+")",b=a+"("+I(a,b.to)+")"):(a="css"===c?w(e,a):void 0,c=L(b,b.from,a),b=L(b,b.to,a));return{from:M(c),to:M(b)}},X=function(a,b){var c=[];a.forEach(function(e,d){var g=e.target;return b.forEach(function(b){var l=
J(g,b.name);if(l){var q;q=b.name;var h=b.value,h=t(f.fnc(h)?h(g,d):h);q={from:1<h.length?h[0]:K(g,q),to:1<h.length?h[1]:h[0]};h=B(b);h.animatables=e;h.type=l;h.from=N(b.name,q,h.type,g).from;h.to=N(b.name,q,h.type,g).to;h.round=f.col(q.from)||h.round?1:0;h.delay=(f.fnc(h.delay)?h.delay(g,d,a.length):h.delay)/k.speed;h.duration=(f.fnc(h.duration)?h.duration(g,d,a.length):h.duration)/k.speed;c.push(h)}})});return c},Y=function(a,b){var c=X(a,b);return R(c,["name","from","to","delay","duration"]).map(function(a){var b=
B(a[0]);b.animatables=a.map(function(a){return a.animatables});b.totalDuration=b.delay+b.duration;return b})},C=function(a,b){a.tweens.forEach(function(c){var e=c.from,d=a.duration-(c.delay+c.duration);c.from=c.to;c.to=e;b&&(c.delay=d)});a.reversed=a.reversed?!1:!0},Z=function(a){if(a.length)return Math.max.apply(Math,a.map(function(a){return a.totalDuration}))},O=function(a){var b=[],c=[];a.tweens.forEach(function(a){if("css"===a.type||"transform"===a.type)b.push("css"===a.type?E(a.name):"transform"),
a.animatables.forEach(function(a){c.push(a.target)})});return{properties:H(b).join(", "),elements:H(c)}},aa=function(a){var b=O(a);b.elements.forEach(function(a){a.style.willChange=b.properties})},ba=function(a){O(a).elements.forEach(function(a){a.style.removeProperty("will-change")})},ca=function(a,b){var c=a.path,e=a.value*b,d=function(d){d=d||0;return c.getPointAtLength(1<b?a.value+d:e+d)},g=d(),f=d(-1),d=d(1);switch(a.name){case "translateX":return g.x;case "translateY":return g.y;case "rotate":return 180*
Math.atan2(d.y-f.y,d.x-f.x)/Math.PI}},da=function(a,b){var c=Math.min(Math.max(b-a.delay,0),a.duration)/a.duration,e=a.to.numbers.map(function(b,e){var f=a.from.numbers[e],l=D[a.easing](c,a.elasticity),f=a.path?ca(a,l):f+l*(b-f);return f=a.round?Math.round(f*a.round)/a.round:f});return V(e,a.to.strings,a.from.strings)},P=function(a,b){var c;a.currentTime=b;a.progress=b/a.duration*100;for(var e=0;e<a.tweens.length;e++){var d=a.tweens[e];d.currentValue=da(d,b);for(var f=d.currentValue,m=0;m<d.animatables.length;m++){var l=
d.animatables[m],k=l.id,l=l.target,h=d.name;switch(d.type){case "css":l.style[h]=f;break;case "attribute":l.setAttribute(h,f);break;case "object":l[h]=f;break;case "transform":c||(c={}),c[k]||(c[k]=[]),c[k].push(f)}}}if(c)for(e in y||(y=(w(document.body,"transform")?"":"-webkit-")+"transform"),c)a.animatables[e].target.style[y]=c[e].join(" ");a.settings.update&&a.settings.update(a)},Q=function(a){var b={};b.animatables=W(a.targets);b.settings=v(a,u);var c=b.settings,e=[],d;for(d in a)if(!u.hasOwnProperty(d)&&
"targets"!==d){var g=f.obj(a[d])?B(a[d]):{value:a[d]};g.name=d;e.push(v(g,c))}b.properties=e;b.tweens=Y(b.animatables,b.properties);b.duration=Z(b.tweens)||a.duration;b.currentTime=0;b.progress=0;b.ended=!1;return b},n=[],x=0,ea=function(){var a=function(){x=requestAnimationFrame(b)},b=function(b){if(n.length){for(var e=0;e<n.length;e++)n[e].tick(b);a()}else cancelAnimationFrame(x),x=0};return a}(),k=function(a){var b=Q(a),c={};b.tick=function(a){b.ended=!1;c.start||(c.start=a);c.current=Math.min(Math.max(c.last+
a-c.start,0),b.duration);P(b,c.current);var d=b.settings;d.begin&&c.current>=d.delay&&(d.begin(b),d.begin=void 0);c.current>=b.duration&&(d.loop?(c.start=a,"alternate"===d.direction&&C(b,!0),f.num(d.loop)&&d.loop--):(b.ended=!0,b.pause(),d.complete&&d.complete(b)),c.last=0)};b.seek=function(a){P(b,a/100*b.duration)};b.pause=function(){ba(b);var a=n.indexOf(b);-1<a&&n.splice(a,1)};b.play=function(a){b.pause();a&&(b=v(Q(v(a,b.settings)),b));c.start=0;c.last=b.ended?0:b.currentTime;a=b.settings;"reverse"===
a.direction&&C(b);"alternate"!==a.direction||a.loop||(a.loop=1);aa(b);n.push(b);x||ea()};b.restart=function(){b.reversed&&C(b);b.pause();b.seek(0);b.play()};b.settings.autoplay&&b.play();return b};k.version="1.1.1";k.speed=1;k.list=n;k.remove=function(a){a=A(f.arr(a)?a.map(t):t(a));for(var b=n.length-1;0<=b;b--)for(var c=n[b],e=c.tweens,d=e.length-1;0<=d;d--)for(var g=e[d].animatables,k=g.length-1;0<=k;k--)G(a,g[k].target)&&(g.splice(k,1),g.length||e.splice(d,1),e.length||c.pause())};k.easings=D;
k.getValue=K;k.path=function(a){a=f.str(a)?F(a)[0]:a;return{path:a,value:a.getTotalLength()}};k.random=function(a,b){return Math.floor(Math.random()*(b-a+1))+a};return k});




/*!
 * imagesLoaded PACKAGED v4.1.1
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var r=this._onceEvents&&this._onceEvents[t];o;){var s=r&&r[o];s&&(this.off(t,o),delete r[o]),o.apply(this,e),n+=s?0:1,o=i[n]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.imagesLoaded=e(t,t.EvEmitter)}(window,function(t,e){function i(t,e){for(var i in e)t[i]=e[i];return t}function n(t){var e=[];if(Array.isArray(t))e=t;else if("number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e}function o(t,e,r){return this instanceof o?("string"==typeof t&&(t=document.querySelectorAll(t)),this.elements=n(t),this.options=i({},this.options),"function"==typeof e?r=e:i(this.options,e),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(function(){this.check()}.bind(this))):new o(t,e,r)}function r(t){this.img=t}function s(t,e){this.url=t,this.element=e,this.img=new Image}var h=t.jQuery,a=t.console;o.prototype=Object.create(e.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),this.options.background===!0&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&d[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=t.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var d={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,t),n=i.exec(e.backgroundImage)}},o.prototype.addImage=function(t){var e=new r(t);this.images.push(e)},o.prototype.addBackground=function(t,e){var i=new s(t,e);this.images.push(i)},o.prototype.check=function(){function t(t,i,n){setTimeout(function(){e.progress(t,i,n)})}var e=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(e){e.once("progress",t),e.check()}):void this.complete()},o.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,t,e)},o.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},r.prototype=Object.create(e.prototype),r.prototype.check=function(){var t=this.getIsImageComplete();return t?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},r.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},r.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var t=this.getIsImageComplete();t&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},o.makeJQueryPlugin=function(e){e=e||t.jQuery,e&&(h=e,h.fn.imagesLoaded=function(t,e){var i=new o(this,t,e);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});


/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2016, Codrops
 * http://www.codrops.com
 */
;(function(window) {

	'use strict';

	// Helper vars and functions.
	function extend( a, b ) {
		for( var key in b ) {
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}
	// From https://davidwalsh.name/javascript-debounce-function.
	function debounce(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	};
	// Creates a sorted array of random numbers between minVal and maxVal with a length = size.
	function createRandIntOrderedArray(minVal, maxVal, size) {
		var arr = [];
		for(var i=0; i<size; ++i) {
			arr.push(anime.random(minVal, maxVal));
		}
		arr.sort(function(a, b){ return a-b });
		return arr;
	}
	// Checks if an object is empty.
	function isObjEmpty(obj) {
		return Object.getOwnPropertyNames(obj).length > 0;
	}
	// Concatenate JS objs.
	// From http://stackoverflow.com/a/2454315.
	function collect() {
		var ret = {};
		var len = arguments.length;
		for (var i=0; i<len; i++) {
			for (var p in arguments[i]) {
				if (arguments[i].hasOwnProperty(p)) {
					ret[p] = arguments[i][p];
				}
			}
		}
		return ret;
	}
	// Check if clip-path is supported. From http://stackoverflow.com/a/30041538.
	function areClipPathShapesSupported() {
		var base = 'clipPath',
			prefixes = [ 'webkit', 'moz', 'ms', 'o' ],
			properties = [ base ],
			testElement = document.createElement( 'testelement' ),
			attribute = 'polygon(50% 0%, 0% 100%, 100% 100%)';

		// Push the prefixed properties into the array of properties.
		for ( var i = 0, l = prefixes.length; i < l; i++ ) {
			var prefixedProperty = prefixes[i] + base.charAt( 0 ).toUpperCase() + base.slice( 1 ); // remember to capitalize!
			properties.push( prefixedProperty );
		}

		// Interate over the properties and see if they pass two tests.
		for ( var i = 0, l = properties.length; i < l; i++ ) {
			var property = properties[i];

			// First, they need to even support clip-path (IE <= 11 does not)...
			if ( testElement.style[property] === '' ) {

				// Second, we need to see what happens when we try to create a CSS shape...
				testElement.style[property] = attribute;
				if ( testElement.style[property] !== '' ) {
					return true;
				}
			}
		}
		return false;
	};

	/**
	 * Segmenter obj.
	 */
	function Segmenter(el, options) {
		this.el = el;
		this.options = extend({}, this.options);
		extend(this.options, options);
		// Preload main image.
		var self = this;
		imagesLoaded(this.el, { background: true }, function() {
			self._init();
			self._initEvents();
			self.options.onReady();
		});
	}

	Segmenter.prototype.options = {
		// Number of pieces.
		pieces: 4,
		// Show pieces already styled.
		renderOnLoad: false,
		// Add an element for the shadow.
		shadows: true,
		// Animations for the shadow (valid properties: opacity, translateX, translateY).
		shadowsAnimation: {
			opacity: 1,
			// translateX: 20,
			// translateY: 20
		},
		// Parrallax effect for the pieces.
		parallax: false,
		// Movements for the parallax effect.
		parallaxMovement: {min: 10, max: 70},
		// Animation for the pieces (valid properties: duration, easing, delay, opacity, translate[XYZ]).
		animation: {
			duration: 1500,
			easing: 'easeOutQuad',
			delay: 0, // Delay increment per piece.
			// opacity: 0.5,
			translateZ: {min: 10, max: 95}, // We can also use an integer for a specific value.
			// translateX: {min: -100, max: 100}, // We can also use an integer for a specific value.
			// translateY: {min: -100, max: 100} // We can also use an integer for a specific value.
		},
		// Callbacks
		onReady: function() { return false; },
		onAnimationComplete: function() { return false; },
		onAnimationStart: function() { return false; },
		// The positions of the pieces in percentage values.
		// We can also use random values by setting options.positions to "random".
		positions: [
			{top: 80, left: 10, width: 30, height: 20},
			{top: 2, left: 2, width: 40, height: 40},
			{top: 30, left: 60, width: 30, height: 60},
			{top: 10, left: 20, width: 50, height: 60}
		]
	};

	/**
	 * Init!
	 */
	Segmenter.prototype._init = function() {
		// The dimensions of the main element.
		this.dimensions = {
			width: this.el.offsetWidth,
			height: this.el.offsetHeight
		};

		// The source of the main image.
		var background = this.el.style.backgroundImage;
		this.imgsrc = background.replace('url(','').replace(')','').replace(/\"/gi, "");;

		// Create the layout.
		this._layout();

		var self = this;
		this.pieces = [].slice.call(this.el.querySelectorAll('.segmenter__piece-wrap'));
		this.pieces.forEach(function(piece, pos) {
			// Bugfix for Chrome. The translateZ needs an initial value otherwise the animation will not work. (this seems to be a anime.js bug - let´s wait for the next version..)
			piece.style.WebkitTransform = piece.style.transform = 'translateZ(0.0001px)';

			// If we want to render the different pieces on load then:
			if( self.options.renderOnLoad ) {
				self._renderPiece(piece);
			}
		});
		// Flag to indicate the pieces are already rendered/styled either on load or after the animation.
		if( this.options.renderOnLoad ) {
			this.active = true;
		}
	};

	/**
	 * Creates the layout.
	 */
	Segmenter.prototype._layout = function() {
		// clip-path support
		var clipPath = areClipPathShapesSupported();

		var segBgEl = document.createElement('div');
		segBgEl.className = 'segmenter__background';
		segBgEl.style.backgroundImage = 'url(' + this.imgsrc + ')';

		var segPieces = document.createElement('div'),
			segPiecesHTML = '',
			positionsTotal = this.options.positions.length;

		segPieces.className = 'segmenter__pieces';

		for(var i = 0, len = this.options.pieces; i < len; ++i) {
			if( this.options.parallax ) {
				segPiecesHTML += '<div class="segmenter__piece-parallax">';
			}

			segPiecesHTML += '<div class="segmenter__piece-wrap">';

			var top, left, width, height, clipTop, clipLeft, clipRight, clipBottom,
				pos = i <= positionsTotal - 1 ? i : 0,
				isRandom = this.options.positions === 'random';

			top = isRandom ? anime.random(0,100) : this.options.positions[pos].top;
			left = isRandom ? anime.random(0,100) : this.options.positions[pos].left;
			width = isRandom ? anime.random(0,100) : this.options.positions[pos].width;
			height = isRandom ? anime.random(0,100) : this.options.positions[pos].height;

			if( !clipPath ) {
				clipTop = isRandom ? top/100 * this.dimensions.height : this.options.positions[pos].top/100 * this.dimensions.height;
				clipLeft = isRandom ? left/100 * this.dimensions.width : this.options.positions[pos].left/100 * this.dimensions.width;
				clipRight = isRandom ? width/100 * this.dimensions.width + clipLeft : this.options.positions[pos].width/100 * this.dimensions.width + clipLeft;
				clipBottom = isRandom ? height/100 * this.dimensions.height + clipTop : this.options.positions[pos].height/100 * this.dimensions.height + clipTop;
			}

			if( this.options.shadows ) {
				segPiecesHTML += '<div class="segmenter__shadow" style="top: ' + top + '%; left: ' + left + '%; width: ' + width + '%; height: ' + height + '%"></div>';
			}

			segPiecesHTML += clipPath ?
							'<div class="segmenter__piece" style="background-image: url(' + this.imgsrc + '); -webkit-clip-path: polygon(' + left + '% ' + top + '%, ' + (left + width) + '% ' + top + '%, ' + (left + width) + '% ' + (top + height) + '%, ' + left + '% ' + (top + height) + '%); clip-path: polygon(' + left + '% ' + top + '%, ' + (left + width) + '% ' + top + '%, ' + (left + width) + '% ' + (top + height) + '%, ' + left + '% ' + (top + height) + '%)"></div>' :
							'<div class="segmenter__piece" style="background-image: url(' + this.imgsrc + '); clip: rect(' + clipTop + 'px,' + clipRight + 'px,' + clipBottom + 'px,' + clipLeft + 'px)"></div>';

			segPiecesHTML += '</div>'
			if( this.options.parallax ) {
				segPiecesHTML += '</div>';
			}
		}

		segPieces.innerHTML = segPiecesHTML;

		this.el.innerHTML = '';
		this.el.appendChild(segBgEl);
		this.el.appendChild(segPieces);
	};

	/**
	 * Renders/Styles a piece with the options that are passed in the initialization.
	 */
	Segmenter.prototype._renderPiece = function(piece) {
		var idx = this.pieces.indexOf(piece);

		if( self.options.animation.translateZ != undefined ) {
			if( typeof self.options.animation.translateZ === 'object' ) {
				var randArr = createRandIntOrderedArray(self.options.animation.translateZ.min, self.options.animation.translateZ.max, self.options.pieces);
				piece.style.transform = piece.style.WebkitTransform = 'translateZ(' + randArr[idx] + 'px)';
			}
			else {
				piece.style.transform = piece.style.WebkitTransform = 'translateZ(' + self.options.animation.translateZ + 'px)';
			}
		}
		if( self.options.animation.translateY != undefined ) {
			if( typeof self.options.animation.translateY === 'object' ) {
				var randArr = createRandIntOrderedArray(self.options.animation.translateY.min, self.options.animation.translateY.max, self.options.pieces);
				piece.style.transform = piece.style.WebkitTransform = 'translateY(' + randArr[idx] + 'px)';
			}
			else {
				piece.style.transform = piece.style.WebkitTransform = 'translateY(' + self.options.animation.translateY + 'px)';
			}
		}
		if( self.options.animation.translateX != undefined ) {
			if( typeof self.options.animation.translateX === 'object' ) {
				var randArr = createRandIntOrderedArray(self.options.animation.translateX.min, self.options.animation.translateX.max, self.options.pieces);
				piece.style.transform = piece.style.WebkitTransform = 'translateX(' + randArr[idx] + 'px)';
			}
			else {
				piece.style.transform = piece.style.WebkitTransform = 'translateX(' + self.options.animation.translateX + 'px)';
			}
		}
		if( self.options.animation.opacity != undefined ) {
			piece.style.opacity = self.options.animation.opacity;
		}

		if( self.options.shadows && isObjEmpty(self.options.shadowsAnimation) ) {
			var shadowEl = piece.querySelector('.segmenter__shadow');
			shadowEl.style.opacity = self.options.shadowsAnimation.opacity != undefined ? self.options.shadowsAnimation.opacity : 0;
			shadowEl.style.transform = shadowEl.style.WebkitTransform = 'translateX(' + (self.options.shadowsAnimation.translateX != undefined ? self.options.shadowsAnimation.translateX : 0) + 'px) translateY(' + (self.options.shadowsAnimation.translateY != undefined ? self.options.shadowsAnimation.translateY : 0) + 'px)';
		}
	};

	/**
	 * Animates the pieces with the options passed (with anime.js).
	 */
	Segmenter.prototype.animate = function() {
		if( this.active ) {
			return false;
		}
		this.active = true;

		var self = this,
			animProps = {
				targets: this.pieces,
				duration: this.options.animation.duration,
				delay: function(el, index) { return (self.options.pieces - index - 1) * self.options.animation.delay; },
				easing: this.options.animation.easing,
				begin: this.options.onAnimationStart,
				complete: this.options.onAnimationComplete
			};

		if( this.options.animation.translateZ != undefined ) {
			var randArr = createRandIntOrderedArray(this.options.animation.translateZ.min, this.options.animation.translateZ.max, this.options.pieces);
			animProps.translateZ = typeof this.options.animation.translateZ === 'object' ? function(el, index) {
				return randArr[index];
			} : this.options.animation.translateZ;
		}
		if( this.options.animation.translateX != undefined ) {
			animProps.translateX = typeof this.options.animation.translateX === 'object' ? function(el, index) {
				return anime.random(self.options.animation.translateX.min, self.options.animation.translateX.max);
			} : this.options.animation.translateX;
		}
		if( this.options.animation.translateY != undefined ) {
			animProps.translateY = typeof this.options.animation.translateY === 'object' ? function(el, index) {
				return anime.random(self.options.animation.translateY.min, self.options.animation.translateY.max);
			} : this.options.animation.translateY;
		}
		if( this.options.animation.opacity != undefined ) {
			animProps.opacity = this.options.animation.opacity;
		}

		anime(animProps);

		// Also animate the shadow element.
		if( this.options.shadows && isObjEmpty(this.options.shadowsAnimation) ) {
			anime(collect({
				targets: this.el.querySelectorAll('.segmenter__shadow'),
				duration: this.options.animation.duration,
				delay: function(el, index) { return (self.options.pieces - index - 1) * self.options.animation.delay; },
				easing: this.options.animation.easing
			}, this.options.shadowsAnimation));
		}
	};

	/**
	 * Init/Bind events.
	 */
	Segmenter.prototype._initEvents = function() {
		var self = this;

		// Window resize.
		this.debounceResize = debounce(function(ev) {
			var positionsTotal = self.options.positions.length;

			// Recalculate dimensions.
			self.dimensions = {
				width: self.el.offsetWidth,
				height: self.el.offsetHeight
			};

			// Recalculate clip values..
			// todo: DRY
			// todo: If random is true then save the initial values. Should not recalculate for this case.
			self.pieces.forEach(function(piece, position) {
				var clipTop, clipLeft, clipRight, clipBottom,
					segmenterPiece = piece.querySelector('.segmenter__piece');

				if( self.options.positions === 'random' ) {
					var randT = anime.random(0,100), randL = anime.random(0,100), randW = anime.random(0,100), randH = anime.random(0,100);
					clipTop = randT/100 * self.dimensions.height;
					clipLeft = randL/100 * self.dimensions.width;
					clipRight = randW/100 * self.dimensions.width + clipLeft;
					clipBottom = randH/100 * self.dimensions.height + clipTop;
				}
				else {
					var pos = position <= positionsTotal - 1 ? position : 0;
					clipTop = self.options.positions[pos].top/100 * self.dimensions.height;
					clipLeft = self.options.positions[pos].left/100 * self.dimensions.width;
					clipRight = self.options.positions[pos].width/100 * self.dimensions.width + clipLeft;
					clipBottom = self.options.positions[pos].height/100 * self.dimensions.height + clipTop;
				}

				segmenterPiece.style.clip = 'rect(' + clipTop + 'px,' + clipRight + 'px,' + clipBottom + 'px,' + clipLeft + 'px)';
			});
		}, 10);
		window.addEventListener('resize', this.debounceResize);

		// Mousemove and Deviceorientation:
		if( this.options.parallax ) {
			var arrRand = createRandIntOrderedArray(this.options.parallaxMovement.min, this.options.parallaxMovement.max, this.options.pieces);
			this.pieces.forEach(function(piece, pos) {
				piece.setAttribute('data-parallax-translation', typeof self.options.parallaxMovement === 'object' ? arrRand[pos] : self.options.parallaxMovement );
			});
			this.mousemove = function(ev) {
				if( !self.active ) {
					return false;
				}
				requestAnimationFrame(function() {
					self.pieces.forEach(function(piece) {
						var t = piece.getAttribute('data-parallax-translation'),
							transX = t/(self.dimensions.width)*ev.clientX - t/2,
							transY = t/(self.dimensions.height)*ev.clientY - t/2;

						piece.parentNode.style.transform = piece.parentNode.style.WebkitTransform = 'translate3d(' + transX + 'px,' + transY + 'px,0)';
					});
				});
			};
			window.addEventListener('mousemove', this.mousemove);

			this.handleOrientation = function() {
				if( !self.active ) {
					return false;
				}
				var y = event.gamma;
				// To make computation easier we shift the range of x and y to [0,180]
				y += 90;

				requestAnimationFrame(function() {
					self.pieces.forEach(function(piece) {
						var t = piece.getAttribute('data-parallax-translation'),
							transX = t/(self.dimensions.width)*y - t/2,
							transY = t/(self.dimensions.height)*y - t/2;

						piece.parentNode.style.transform = piece.parentNode.style.WebkitTransform = 'translate3d(' + transX + 'px,' + transY + 'px,0)';
					});
				});
			}
			window.addEventListener('deviceorientation', this.handleOrientation);
		}
	};

	window.Segmenter = Segmenter;

})(window);





/*!
 * BACK TO top
 */

 if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
