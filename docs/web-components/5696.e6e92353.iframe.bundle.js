/*! For license information please see 5696.e6e92353.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_canary_web_components=self.webpackChunk_ukic_canary_web_components||[]).push([[5696],{"./dist/esm/chevron-icon-7927f709.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>Chevron});var Chevron='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M9.70687 6L8.29688 7.41L12.8769 12L8.29688 16.59L9.70687 18L15.7069 12L9.70687 6Z" fill="currentColor"/>\n</svg>\n'},"./dist/esm/ic-card.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_card:()=>Card});__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.async-iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.math.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.json.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.reverse.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js");var _index_36ab8165_js__WEBPACK_IMPORTED_MODULE_25__=__webpack_require__("./dist/esm/index-36ab8165.js"),_helpers_8617aaa0_js__WEBPACK_IMPORTED_MODULE_26__=__webpack_require__("./dist/esm/helpers-8617aaa0.js"),_types_dd515332_js__WEBPACK_IMPORTED_MODULE_27__=__webpack_require__("./dist/esm/types-dd515332.js"),_chevron_icon_7927f709_js__WEBPACK_IMPORTED_MODULE_28__=__webpack_require__("./dist/esm/chevron-icon-7927f709.js");function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return exports};var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,defineProperty=Object.defineProperty||function(obj,key,desc){obj[key]=desc.value},$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){return Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}),obj[key]}try{define({},"")}catch(err){define=function define(obj,key,value){return obj[key]=value}}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return defineProperty(generator,"_invoke",{value:makeInvokeMethod(innerFn,self,context)}),generator}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,(function(){return this}));var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach((function(method){define(prototype,method,(function(arg){return this._invoke(method,arg)}))}))}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==typeof value&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then((function(value){invoke("next",value,resolve,reject)}),(function(err){invoke("throw",err,resolve,reject)})):PromiseImpl.resolve(value).then((function(unwrapped){result.value=unwrapped,resolve(result)}),(function(error){return invoke("throw",error,resolve,reject)}))}reject(record.arg)}var previousPromise;defineProperty(this,"_invoke",{value:function value(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl((function(resolve,reject){invoke(method,arg,resolve,reject)}))}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(innerFn,self,context){var state="suspendedStart";return function(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return{value:void 0,done:!0}}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg)}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done}}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg)}}}function maybeInvokeDelegate(delegate,context){var methodName=context.method,method=delegate.iterator[methodName];if(void 0===method)return context.delegate=null,"throw"===methodName&&delegate.iterator.return&&(context.method="return",context.arg=void 0,maybeInvokeDelegate(delegate,context),"throw"===context.method)||"return"!==methodName&&(context.method="throw",context.arg=new TypeError("The iterator does not provide a '"+methodName+"' method")),ContinueSentinel;var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=void 0),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel)}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0)}function values(iterable){if(iterable||""===iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=void 0,next.done=!0,next};return next.next=next}}throw new TypeError(typeof iterable+" is not iterable")}return GeneratorFunction.prototype=GeneratorFunctionPrototype,defineProperty(Gp,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),defineProperty(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name))},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,"GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun},exports.awrap=function(arg){return{__await:arg}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,(function(){return this})),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then((function(result){return result.done?result.value:iter.next()}))},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),define(Gp,iteratorSymbol,(function(){return this})),define(Gp,"toString",(function(){return"[object Generator]"})),exports.keys=function(val){var object=Object(val),keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next}return next.done=!0,next}},exports.values=values,Context.prototype={constructor:Context,reset:function reset(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=void 0)},stop:function stop(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval},dispatchException:function dispatchException(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=void 0),!!caught}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record)},complete:function complete(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel}},catch:function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry)}return thrown}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName,nextLoc},"next"===this.method&&(this.arg=void 0),ContinueSentinel}},exports}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var Card=function(){function Card(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Card),(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_25__.r)(this,hostRef),this.parentFocussed=function(){_this.isFocussed=!0},this.parentBlurred=function(){_this.isFocussed=!1},this.toggleExpanded=function(){_this.areaExpanded=!_this.areaExpanded},this.appearance="default",this.areaExpanded=!1,this.isFocussed=!1,this.parentEl=null,this.parentIsAnchorTag=!1,this.clickable=!1,this.disabled=!1,this.expandable=!1,this.fullWidth=!1,this.heading=void 0,this.href=void 0,this.hreflang="",this.message="",this.referrerpolicy=void 0,this.rel=void 0,this.subheading=void 0,this.target=void 0}var _setFocus;return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Card,[{key:"disconnectedCallback",value:function disconnectedCallback(){this.parentIsAnchorTag&&(this.parentEl.removeEventListener("focus",this.parentFocussed),this.parentEl.removeEventListener("blur",this.parentBlurred))}},{key:"componentWillLoad",value:function componentWillLoad(){this.parentEl=this.el.parentElement,"A"===this.parentEl.tagName&&(this.clickable=!0,this.parentIsAnchorTag=!0,this.parentEl.classList.add("ic-card-wrapper-link"),this.parentEl.addEventListener("focus",this.parentFocussed),this.parentEl.addEventListener("blur",this.parentBlurred)),(0,_helpers_8617aaa0_js__WEBPACK_IMPORTED_MODULE_26__.r)(this.disabled,this.el)}},{key:"componentDidLoad",value:function componentDidLoad(){(0,_helpers_8617aaa0_js__WEBPACK_IMPORTED_MODULE_26__.a)([{prop:this.heading,propName:"heading"}],"Card"),this.updateTheme()}},{key:"handleHostClick",value:function handleHostClick(event){this.disabled&&event.stopImmediatePropagation()}},{key:"themeChangeHandler",value:function themeChangeHandler(ev){var theme=ev.detail;this.updateTheme(theme.mode)}},{key:"setFocus",value:(_setFocus=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(_regeneratorRuntime().mark((function _callee(){return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:this.el.shadowRoot.querySelector("a")?this.el.shadowRoot.querySelector("a").focus():this.el.shadowRoot.querySelector("button")&&this.el.shadowRoot.querySelector("button").focus();case 1:case"end":return _context.stop()}}),_callee,this)}))),function setFocus(){return _setFocus.apply(this,arguments)})},{key:"updateTheme",value:function updateTheme(){var newTheme=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,foregroundColor=(0,_helpers_8617aaa0_js__WEBPACK_IMPORTED_MODULE_26__.b)(this.el,newTheme||null);foregroundColor!==_types_dd515332_js__WEBPACK_IMPORTED_MODULE_27__.I.Default&&(this.appearance=foregroundColor)}},{key:"render",value:function render(){var _class,_class2,_class3,clickable=this.clickable,disabled=this.disabled,expandable=this.expandable,heading=this.heading,message=this.message,href=this.href,hreflang=this.hreflang,referrerpolicy=this.referrerpolicy,rel=this.rel,subheading=this.subheading,target=this.target,fullWidth=this.fullWidth,parentIsAnchorTag=this.parentIsAnchorTag,isFocussed=this.isFocussed,Component=parentIsAnchorTag?"div":clickable?void 0===this.href?"button":"a":"div",attrs="a"==Component&&{href,hrefLang:hreflang,referrerPolicy:referrerpolicy,rel,target};return(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_25__.h)(Component,Object.assign({class:(_class={},_class.card=!0,_class.clickable=clickable&&!disabled,_class.disabled=disabled,_class.fullwidth=fullWidth,_class.focussed=isFocussed,_class.dark=this.appearance===_types_dd515332_js__WEBPACK_IMPORTED_MODULE_27__.I.Dark,_class),tabindex:clickable&&!parentIsAnchorTag?0:null,"aria-disabled":disabled?"true":null,disabled:!!disabled||null},attrs),(0,_helpers_8617aaa0_js__WEBPACK_IMPORTED_MODULE_26__.i)(this.el,"image-top")&&(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_25__.h)("div",{class:"image-top"},(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_25__.h)("slot",{name:"image-top"})),(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_25__.h)("div",{class:"card-header"},(0,_helpers_8617aaa0_js__WEBPACK_IMPORTED_MODULE_26__.i)(this.el,"icon")&&(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_25__.h)("div",{class:"icon"},(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_25__.h)("slot",{name:"icon"})),(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_25__.h)("div",{class:"card-title"},(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_25__.h)("slot",{name:"heading"},(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_25__.h)("ic-typography",{variant:"h4"},(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_25__.h)("p",null,heading)))),(0,_helpers_8617aaa0_js__WEBPACK_IMPORTED_MODULE_26__.i)(this.el,"interaction-button")&&(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_25__.h)("div",{class:"interaction-button"},(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_25__.h)("slot",{name:"interaction-button"}))),(subheading||(0,_helpers_8617aaa0_js__WEBPACK_IMPORTED_MODULE_26__.i)(this.el,"subheading"))&&(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_25__.h)("div",{class:"subheading"},(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_25__.h)("slot",{name:"subheading"},(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_25__.h)("ic-typography",{variant:"subtitle-small"},subheading))),(0,_helpers_8617aaa0_js__WEBPACK_IMPORTED_MODULE_26__.i)(this.el,"adornment")&&(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_25__.h)("div",{class:"adornment"},(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_25__.h)("slot",{name:"adornment"})),(0,_helpers_8617aaa0_js__WEBPACK_IMPORTED_MODULE_26__.i)(this.el,"image-mid")&&(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_25__.h)("div",{class:"image-mid"},(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_25__.h)("slot",{name:"image-mid"})),(message||(0,_helpers_8617aaa0_js__WEBPACK_IMPORTED_MODULE_26__.i)(this.el,"message"))&&(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_25__.h)("div",{class:(_class2={},_class2["card-message"]=!0,_class2)},message&&(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_25__.h)("ic-typography",{variant:"body"},message),(0,_helpers_8617aaa0_js__WEBPACK_IMPORTED_MODULE_26__.i)(this.el,"message")&&(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_25__.h)("slot",{name:"message"})),((0,_helpers_8617aaa0_js__WEBPACK_IMPORTED_MODULE_26__.i)(this.el,"interaction-controls")||expandable)&&(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_25__.h)("div",{class:"interaction-area"},(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_25__.h)("div",{class:"interaction-controls"},(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_25__.h)("slot",{name:"interaction-controls"})),expandable&&(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_25__.h)("ic-button",{class:(_class3={},_class3["toggle-button"]=!0,_class3["toggle-button-closed"]=!this.areaExpanded,_class3["toggle-button-expanded"]=this.areaExpanded,_class3),variant:"icon",size:"large",disableTooltip:!0,"aria-label":"Toggle expandable area","aria-expanded":this.areaExpanded,"aria-controls":"expanded-content-area",onClick:this.toggleExpanded,innerHTML:_chevron_icon_7927f709_js__WEBPACK_IMPORTED_MODULE_28__.C})),(0,_helpers_8617aaa0_js__WEBPACK_IMPORTED_MODULE_26__.i)(this.el,"expanded-content")&&this.areaExpanded&&(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_25__.h)("div",{class:"expanded-content",id:"expanded-content-area"},(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_25__.h)("slot",{name:"expanded-content"})))}},{key:"el",get:function get(){return(0,_index_36ab8165_js__WEBPACK_IMPORTED_MODULE_25__.g)(this)}}]),Card}();Card.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:flex}a{text-decoration:none !important;color:var(--ic-architechtural-black) !important}button{border:none;background-color:transparent;outline:var(--ic-hc-focus-outline)}.card,.card.clickable{display:flex;flex-direction:column;border:var(--ic-border-default);border-radius:var(--ic-border-radius);box-sizing:border-box;padding:var(--ic-space-md);text-align:left;color:var(--ic-architechtural-black);transition:var(--ic-easing-transition-fast)}.dark.card,.dark.card.clickable{border:var(--ic-space-1px) solid var(--ic-architectural-700)}.card.clickable:hover{background-color:var(--ic-action-default-bg-hover);border:var(--ic-border-hover);cursor:pointer}.card.clickable:focus,.card.clickable.focussed{background-color:var(--ic-action-default-bg-hover);box-shadow:var(--ic-border-focus);outline:var(--ic-hc-focus-outline);border:var(--ic-border-pressed)}.card.clickable:active{background-color:var(--ic-action-default-bg-active);box-shadow:var(--ic-border-focus)}.card.disabled{border:var(--ic-border-disabled)}.card.fullwidth{width:100%}.card-header{display:flex;align-items:center}.icon{display:flex;align-items:center;padding-right:var(--ic-space-xs)}.card.disabled ::slotted(svg){fill:var(--ic-color-tertiary-text)}.card.clickable .card-title{color:var(--ic-hyperlink);text-decoration:underline;text-decoration-thickness:var(--ic-space-1px)}.card.clickable:hover .card-title,.card.clickable:focus .card-title,.card.clickable.focussed .card-title{display:inline-block;border-bottom:0.25rem solid !important;margin-bottom:-0.25rem !important;text-decoration:none}@supports (text-decoration-thickness: 25%){.card.clickable:hover .card-title,.card.clickable:focus .card-title,.card.clickable.focussed .card-title{text-decoration-line:underline;text-decoration-thickness:25%;text-underline-offset:25%;border-bottom:0 !important;margin-bottom:0 !important}}.card.clickable:active .card-title{text-decoration:none}.card.disabled .card-title{text-decoration:underline;text-decoration-thickness:var(--ic-space-1px);text-decoration-color:var(--ic-color-tertiary-text);color:var(--ic-color-tertiary-text)}.subheading{margin-top:var(--ic-space-xxs)}.adornment{margin-top:var(--ic-space-xxs)}.card-message{margin-top:var(--ic-space-md);align-items:left}.card.disabled .card-message,.card.disabled .subheading{color:var(--ic-color-tertiary-text)}.interaction-button{margin-left:auto}.image-top{margin-bottom:var(--ic-space-md);display:flex;justify-content:center}.image-mid{margin-top:var(--ic-space-md);display:flex;justify-content:center}.interaction-area{display:flex;flex-grow:1;gap:var(--ic-space-md);margin-top:var(--ic-space-md);align-items:flex-end}.interaction-controls{display:flex;align-items:center;flex-wrap:wrap;gap:var(--ic-space-sm)}.toggle-button{margin-left:auto}.toggle-button-closed svg{transform:rotate(90deg)}.toggle-button-expanded svg{transform:rotate(-90deg)}.expanded-content{margin-top:var(--ic-space-md)}'}}]);