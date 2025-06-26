import{u as t,g as e,w as n}from"./chunk.ZL53POKZ-Dci-Rmfy.js";
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
if(!window.polymerSkipLoadingFontRoboto){const t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.crossOrigin="anonymous",t.href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic",document.head.appendChild(t)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(t,e){return t};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let o,r,i=/(url\()([^)]*)(\))/g,s=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function a(t,e){if(t&&s.test(t))return t;if("//"===t)return t;if(void 0===o){o=!1;try{const t=new URL("b","http://a");t.pathname="c%20d",o="http://a/c%20d"===t.href}catch(t){}}if(e||(e=document.baseURI||window.location.href),o)try{return new URL(t,e).href}catch(e){return t}return r||(r=document.implementation.createHTMLDocument("temp"),r.base=r.createElement("base"),r.head.appendChild(r.base),r.anchor=r.createElement("a"),r.body.appendChild(r.anchor)),r.base.href=e,r.anchor.href=t,r.anchor.href||t}function l(t,e){return t.replace(i,function(t,n,o,r){return n+"'"+a(o.replace(/["']/g,""),e)+"'"+r})}function c(t){return t.substring(0,t.lastIndexOf("/")+1)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const d=!window.ShadyDOM||!window.ShadyDOM.inUse;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss);const p=d&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const t=new CSSStyleSheet;t.replaceSync("");const e=document.createElement("div");return e.attachShadow({mode:"open"}),e.shadowRoot.adoptedStyleSheets=[t],e.shadowRoot.adoptedStyleSheets[0]===t}catch(t){return!1}})();let h=window.Polymer&&window.Polymer.rootPath||c(document.baseURI||window.location.href),u=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,f=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1,m=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,g=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,b=window.Polymer&&window.Polymer.legacyOptimizations||!1,y=window.Polymer&&window.Polymer.legacyWarnings||!1,_=window.Polymer&&window.Polymer.syncInitialRender||!1,v=window.Polymer&&window.Polymer.legacyUndefined||!1,w=window.Polymer&&window.Polymer.orderedComputed||!1,x=window.Polymer&&window.Polymer.removeNestedTemplates||!1,C=window.Polymer&&window.Polymer.fastDomIf||!1,S=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1,P=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1,k=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1,E=0;const A=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let n=E++;return function(o){let r=o.__mixinSet;if(r&&r[n])return o;let i=e,s=i.get(o);if(!s){s=t(o),i.set(o,s);let e=Object.create(s.__mixinSet||r||null);e[n]=!0,s.__mixinSet=e}return s}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let T={},O={};function $(t,e){T[t]=O[t.toLowerCase()]=e}function N(t){return T[t]||O[t.toLowerCase()]}class I extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let n=N(t);return n&&e?n.querySelector(e):n}return null}attributeChangedCallback(t,e,n,o){e!==n&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=a(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=c(e)}return this.__assetpath}register(t){if(t=t||this.id){if(m&&void 0!==N(t))throw $(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,$(t,this),(e=this).querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}var e}}I.prototype.modules=T,customElements.define("dom-module",I);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const D="shady-unscoped";function L(t){return I.import(t)}function M(t){const e=l((t.body?t.body:t).textContent,t.baseURI),n=document.createElement("style");return n.textContent=e,n}function z(t){const e=t.trim().split(/\s+/),n=[];for(let t=0;t<e.length;t++)n.push(...R(e[t]));return n}function R(t){const e=L(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(void 0===e._styles){const t=[];t.push(...H(e));const n=e.querySelector("template");n&&t.push(...F(n,e.assetpath)),e._styles=t}return e._styles}function F(t,e){if(!t._styles){const n=[],o=t.content.querySelectorAll("style");for(let t=0;t<o.length;t++){let r=o[t],i=r.getAttribute("include");i&&n.push(...z(i).filter(function(t,e,n){return n.indexOf(t)===e})),e&&(r.textContent=l(r.textContent,e)),n.push(r)}t._styles=n}return t._styles}function H(t){const e=[],n=t.querySelectorAll("link[rel=import][type~=css]");for(let t=0;t<n.length;t++){let o=n[t];if(o.import){const t=o.import,n=o.hasAttribute(D);if(n&&!t._unscopedStyle){const e=M(t);e.setAttribute(D,""),t._unscopedStyle=e}else t._style||(t._style=M(t));e.push(n?t._unscopedStyle:t._style)}}return e}function B(t){let e=L(t);if(e&&void 0===e._cssText){let t=function(t){let e="",n=H(t);for(let t=0;t<n.length;t++)e+=n[t].textContent;return e}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/(e),n=e.querySelector("template");n&&(t+=function(t,e){let n="";const o=F(t,e);for(let t=0;t<o.length;t++){let e=o[t];e.parentNode&&e.parentNode.removeChild(e),n+=e.textContent}return n}(n,e.assetpath)),e._cssText=t||null}return e||console.warn("Could not find style data in module named",t),e&&e._cssText||""}const j=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function U(t){return t.indexOf(".")>=0}function V(t){let e=t.indexOf(".");return-1===e?t:t.slice(0,e)}function q(t,e){return 0===t.indexOf(e+".")}function W(t,e){return 0===e.indexOf(t+".")}function K(t,e,n){return e+n.slice(t.length)}function J(t){if(Array.isArray(t)){let e=[];for(let n=0;n<t.length;n++){let o=t[n].toString().split(".");for(let t=0;t<o.length;t++)e.push(o[t])}return e.join(".")}return t}function Y(t){return Array.isArray(t)?J(t).split("."):t.toString().split(".")}function G(t,e,n){let o=t,r=Y(e);for(let t=0;t<r.length;t++){if(!o)return;o=o[r[t]]}return n&&(n.path=r.join(".")),o}function X(t,e,n){let o=t,r=Y(e),i=r[r.length-1];if(r.length>1){for(let t=0;t<r.length-1;t++){if(o=o[r[t]],!o)return}o[i]=n}else o[e]=n;return r.join(".")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Z={},Q=/-[a-z]/g,tt=/([A-Z])/g;function et(t){return Z[t]||(Z[t]=t.indexOf("-")<0?t:t.replace(Q,t=>t[1].toUpperCase()))}function nt(t){return Z[t]||(Z[t]=t.replace(tt,"-$1").toLowerCase())}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let ot=0,rt=0,it=[],st=0,at=!1,lt=document.createTextNode("");new window.MutationObserver(function(){at=!1;const t=it.length;for(let e=0;e<t;e++){let t=it[e];if(t)try{t()}catch(t){setTimeout(()=>{throw t})}}it.splice(0,t),rt+=t}).observe(lt,{characterData:!0});const ct={after:t=>({run:e=>window.setTimeout(e,t),cancel(t){window.clearTimeout(t)}}),run:(t,e)=>window.setTimeout(t,e),cancel(t){window.clearTimeout(t)}},dt={run:t=>(at||(at=!0,lt.textContent=st++),it.push(t),ot++),cancel(t){const e=t-rt;if(e>=0){if(!it[e])throw new Error("invalid async handle: "+t);it[e]=null}}},pt=dt,ht=A(t=>class extends t{static createProperties(t){const e=this.prototype;for(let n in t)n in e||e._createPropertyAccessor(n)}static attributeNameForProperty(t){return t.toLowerCase()}static typeForProperty(t){}_createPropertyAccessor(t,e){this._addPropertyToAttributeMap(t),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[t]||(this.__dataHasAccessor[t]=!0,this._definePropertyAccessor(t,e))}_addPropertyToAttributeMap(t){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let e=this.__dataAttributes[t];return e||(e=this.constructor.attributeNameForProperty(t),this.__dataAttributes[e]=t),e}_definePropertyAccessor(t,e){Object.defineProperty(this,t,{get(){return this.__data[t]},set:e?function(){}:function(e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let t in this.__dataHasAccessor)this.hasOwnProperty(t)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[t]=this[t],delete this[t])}_initializeInstanceProperties(t){Object.assign(this,t)}_setProperty(t,e){this._setPendingProperty(t,e)&&this._invalidateProperties()}_getProperty(t){return this.__data[t]}_setPendingProperty(t,e,n){let o=this.__data[t],r=this._shouldPropertyChange(t,e,o);return r&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(t in this.__dataOld)&&(this.__dataOld[t]=o),this.__data[t]=e,this.__dataPending[t]=e),r}_isPropertyPending(t){return!(!this.__dataPending||!this.__dataPending.hasOwnProperty(t))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,pt.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const t=this.__data,e=this.__dataPending,n=this.__dataOld;this._shouldPropertiesChange(t,e,n)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(t,e,n)),this.__dataCounter--}_shouldPropertiesChange(t,e,n){return Boolean(e)}_propertiesChanged(t,e,n){}_shouldPropertyChange(t,e,n){return n!==e&&(n==n||e==e)}attributeChangedCallback(t,e,n,o){e!==n&&this._attributeToProperty(t,n),super.attributeChangedCallback&&super.attributeChangedCallback(t,e,n,o)}_attributeToProperty(t,e,n){if(!this.__serializing){const o=this.__dataAttributes,r=o&&o[t]||t;this[r]=this._deserializeValue(e,n||this.constructor.typeForProperty(r))}}_propertyToAttribute(t,e,n){this.__serializing=!0,n=arguments.length<3?this[t]:n,this._valueToNodeAttribute(this,n,e||this.constructor.attributeNameForProperty(t)),this.__serializing=!1}_valueToNodeAttribute(t,e,n){const o=this._serializeValue(e);"class"!==n&&"name"!==n&&"slot"!==n||(t=j(t)),void 0===o?t.removeAttribute(n):t.setAttribute(n,""===o&&window.trustedTypes?window.trustedTypes.emptyScript:o)}_serializeValue(t){return"boolean"==typeof t?t?"":void 0:null!=t?t.toString():void 0}_deserializeValue(t,e){switch(e){case Boolean:return null!==t;case Number:return Number(t);default:return t}}}),ut={};let ft=HTMLElement.prototype;for(;ft;){let t=Object.getOwnPropertyNames(ft);for(let e=0;e<t.length;e++)ut[t[e]]=!0;ft=Object.getPrototypeOf(ft)}const mt=window.trustedTypes?t=>trustedTypes.isHTML(t)||trustedTypes.isScript(t)||trustedTypes.isScriptURL(t):()=>!1;const gt=A(t=>{const e=ht(t);return class extends e{static createPropertiesForAttributes(){let t=this.observedAttributes;for(let e=0;e<t.length;e++)this.prototype._createPropertyAccessor(et(t[e]))}static attributeNameForProperty(t){return nt(t)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(t){for(let e in t)this._setProperty(e,t[e])}_ensureAttribute(t,e){const n=this;n.hasAttribute(t)||this._valueToNodeAttribute(n,e,t)}_serializeValue(t){if("object"==typeof t){if(t instanceof Date)return t.toString();if(t){if(mt(t))return t;try{return JSON.stringify(t)}catch(t){return""}}}return super._serializeValue(t)}_deserializeValue(t,e){let n;switch(e){case Object:try{n=JSON.parse(t)}catch(e){n=t}break;case Array:try{n=JSON.parse(t)}catch(e){n=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${t}`)}break;case Date:n=isNaN(t)?String(t):Number(t),n=new Date(n);break;default:n=super._deserializeValue(t,e)}return n}_definePropertyAccessor(t,e){!function(t,e){if(!ut[e]){let n=t[e];void 0!==n&&(t.__data?t._setPendingProperty(e,n):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=n))}}(this,t),super._definePropertyAccessor(t,e)}_hasAccessor(t){return this.__dataHasAccessor&&this.__dataHasAccessor[t]}_isPropertyPending(t){return Boolean(this.__dataPending&&t in this.__dataPending)}}}),bt={"dom-if":!0,"dom-repeat":!0};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let yt=!1,_t=!1;function vt(t){(function(){if(!yt){yt=!0;const t=document.createElement("textarea");t.placeholder="a",_t=t.placeholder===t.textContent}return _t})()&&"textarea"===t.localName&&t.placeholder&&t.placeholder===t.textContent&&(t.textContent=null)}const wt=(()=>{const t=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:t=>t});return(e,n,o)=>{const r=n.getAttribute(o);t&&o.startsWith("on-")?e.setAttribute(o,t.createScript(r,o)):e.setAttribute(o,r)}})();function xt(t){let e=t.getAttribute("is");if(e&&bt[e]){let n=t;for(n.removeAttribute("is"),t=n.ownerDocument.createElement(e),n.parentNode.replaceChild(t,n),t.appendChild(n);n.attributes.length;){const{name:e}=n.attributes[0];wt(t,n,e),n.removeAttribute(e)}}return t}function Ct(t,e){let n=e.parentInfo&&Ct(t,e.parentInfo);if(!n)return t;for(let t=n.firstChild,o=0;t;t=t.nextSibling)if(e.parentIndex===o++)return t}function St(t,e,n,o){o.id&&(e[o.id]=n)}function Pt(t,e,n){if(n.events&&n.events.length)for(let o,r=0,i=n.events;r<i.length&&(o=i[r]);r++)t._addMethodEventListenerToNode(e,o.name,o.value,t)}function kt(t,e,n,o){n.templateInfo&&(e._templateInfo=n.templateInfo,e._parentTemplateInfo=o)}const Et=A(t=>class extends t{static _parseTemplate(t,e){if(!t._templateInfo){let n=t._templateInfo={};n.nodeInfoList=[],n.nestedTemplate=Boolean(e),n.stripWhiteSpace=e&&e.stripWhiteSpace||t.hasAttribute&&t.hasAttribute("strip-whitespace"),this._parseTemplateContent(t,n,{parent:null})}return t._templateInfo}static _parseTemplateContent(t,e,n){return this._parseTemplateNode(t.content,e,n)}static _parseTemplateNode(t,e,n){let o=!1,r=t;return"template"!=r.localName||r.hasAttribute("preserve-content")?"slot"===r.localName&&(e.hasInsertionPoint=!0):o=this._parseTemplateNestedTemplate(r,e,n)||o,vt(r),r.firstChild&&this._parseTemplateChildNodes(r,e,n),r.hasAttributes&&r.hasAttributes()&&(o=this._parseTemplateNodeAttributes(r,e,n)||o),o||n.noted}static _parseTemplateChildNodes(t,e,n){if("script"!==t.localName&&"style"!==t.localName)for(let o,r=t.firstChild,i=0;r;r=o){if("template"==r.localName&&(r=xt(r)),o=r.nextSibling,r.nodeType===Node.TEXT_NODE){let n=o;for(;n&&n.nodeType===Node.TEXT_NODE;)r.textContent+=n.textContent,o=n.nextSibling,t.removeChild(n),n=o;if(e.stripWhiteSpace&&!r.textContent.trim()){t.removeChild(r);continue}}let s={parentIndex:i,parentInfo:n};this._parseTemplateNode(r,e,s)&&(s.infoIndex=e.nodeInfoList.push(s)-1),r.parentNode&&i++}}static _parseTemplateNestedTemplate(t,e,n){let o=t,r=this._parseTemplate(o,e);return(r.content=o.content.ownerDocument.createDocumentFragment()).appendChild(o.content),n.templateInfo=r,!0}static _parseTemplateNodeAttributes(t,e,n){let o=!1,r=Array.from(t.attributes);for(let i,s=r.length-1;i=r[s];s--)o=this._parseTemplateNodeAttribute(t,e,n,i.name,i.value)||o;return o}static _parseTemplateNodeAttribute(t,e,n,o,r){return"on-"===o.slice(0,3)?(t.removeAttribute(o),n.events=n.events||[],n.events.push({name:o.slice(3),value:r}),!0):"id"===o&&(n.id=r,!0)}static _contentForTemplate(t){let e=t._templateInfo;return e&&e.content||t.content}_stampTemplate(t,e){t&&!t.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(t);let n=(e=e||this.constructor._parseTemplate(t)).nodeInfoList,o=e.content||t.content,r=document.importNode(o,!0);r.__noInsertionPoint=!e.hasInsertionPoint;let i=r.nodeList=new Array(n.length);r.$={};for(let t,o=0,s=n.length;o<s&&(t=n[o]);o++){let n=i[o]=Ct(r,t);St(0,r.$,n,t),kt(0,n,t,e),Pt(this,n,t)}return r}_addMethodEventListenerToNode(t,e,n,o){let r=function(t,e,n){return t=t._methodHost||t,function(e){t[n]?t[n](e,e.detail):console.warn("listener method `"+n+"` not defined")}}(o=o||t,0,n);return this._addEventListenerToNode(t,e,r),r}_addEventListenerToNode(t,e,n){t.addEventListener(e,n)}_removeEventListenerFromNode(t,e,n){t.removeEventListener(e,n)}});
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let At=0;const Tt=[],Ot={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},$t="__computeInfo",Nt=/[A-Z]/;function It(t,e,n){let o=t[e];if(o){if(!t.hasOwnProperty(e)&&(o=t[e]=Object.create(t[e]),n))for(let t in o){let e=o[t],n=o[t]=Array(e.length);for(let t=0;t<e.length;t++)n[t]=e[t]}}else o=t[e]={};return o}function Dt(t,e,n,o,r,i){if(e){let s=!1;const a=At++;for(let l in n){let c=e[r?V(l):l];if(c)for(let e,d=0,p=c.length;d<p&&(e=c[d]);d++)e.info&&e.info.lastRun===a||r&&!Mt(l,e.trigger)||(e.info&&(e.info.lastRun=a),e.fn(t,l,n,o,e.info,r,i),s=!0)}return s}return!1}function Lt(t,e,n,o,r,i,s,a){let l=!1,c=e[s?V(o):o];if(c)for(let e,d=0,p=c.length;d<p&&(e=c[d]);d++)e.info&&e.info.lastRun===n||s&&!Mt(o,e.trigger)||(e.info&&(e.info.lastRun=n),e.fn(t,o,r,i,e.info,s,a),l=!0);return l}function Mt(t,e){if(e){let n=e.name;return n==t||!(!e.structured||!q(n,t))||!(!e.wildcard||!W(n,t))}return!0}function zt(t,e,n,o,r){let i="string"==typeof r.method?t[r.method]:r.method,s=r.property;i?i.call(t,t.__data[s],o[s]):r.dynamicFn||console.warn("observer method `"+r.method+"` not defined")}function Rt(t,e,n){let o=V(e);if(o!==e){return Ft(t,nt(o)+"-changed",n[e],e),!0}return!1}function Ft(t,e,n,o){let r={value:n,queueProperty:!0};o&&(r.path=o),j(t).dispatchEvent(new CustomEvent(e,{detail:r}))}function Ht(t,e,n,o,r,i){let s=(i?V(e):e)!=e?e:null,a=s?G(t,s):t.__data[e];s&&void 0===a&&(a=n[e]),Ft(t,r.eventName,a,s)}function Bt(t,e,n,o,r){let i=t.__data[e];u&&(i=u(i,r.attrName,"attribute",t)),t._propertyToAttribute(e,r.attrName,i)}function jt(t,e,n,o){let r=t[Ot.COMPUTE];if(r)if(w){At++;const i=function(t){let e=t.constructor.__orderedComputedDeps;if(!e){e=new Map;const n=t[Ot.COMPUTE];let o,{counts:r,ready:i,total:s}=function(t){const e=t[$t],n={},o=t[Ot.COMPUTE],r=[];let i=0;for(let t in e){const o=e[t];i+=n[t]=o.args.filter(t=>!t.literal).length+(o.dynamicFn?1:0)}for(let t in o)e[t]||r.push(t);return{counts:n,ready:r,total:i}}(t);for(;o=i.shift();){e.set(o,e.size);const t=n[o];t&&t.forEach(t=>{const e=t.info.methodInfo;--s,0===--r[e]&&i.push(e)})}if(0!==s){const e=t;console.warn(`Computed graph for ${e.localName} incomplete; circular?`)}t.constructor.__orderedComputedDeps=e}return e}(t),s=[];for(let t in e)Vt(t,r,s,i,o);let a;for(;a=s.shift();)qt(t,"",e,n,a)&&Vt(a.methodInfo,r,s,i,o);Object.assign(n,t.__dataOld),Object.assign(e,t.__dataPending),t.__dataPending=null}else{let i=e;for(;Dt(t,r,i,n,o);)Object.assign(n,t.__dataOld),Object.assign(e,t.__dataPending),i=t.__dataPending,t.__dataPending=null}}const Ut=(t,e,n)=>{let o=0,r=e.length-1,i=-1;for(;o<=r;){const s=o+r>>1,a=n.get(e[s].methodInfo)-n.get(t.methodInfo);if(a<0)o=s+1;else{if(!(a>0)){i=s;break}r=s-1}}i<0&&(i=r+1),e.splice(i,0,t)},Vt=(t,e,n,o,r)=>{const i=e[r?V(t):t];if(i)for(let e=0;e<i.length;e++){const s=i[e];s.info.lastRun===At||r&&!Mt(t,s.trigger)||(s.info.lastRun=At,Ut(s.info,n,o))}};function qt(t,e,n,o,r){let i=Zt(t,e,n,o,r);if(i===Tt)return!1;let s=r.methodInfo;return t.__dataHasAccessor&&t.__dataHasAccessor[s]?t._setPendingProperty(s,i,!0):(t[s]=i,!1)}function Wt(t,e,n,o,r,i,s){n.bindings=n.bindings||[];let a={kind:o,target:r,parts:i,literal:s,isCompound:1!==i.length};if(n.bindings.push(a),function(t){return Boolean(t.target)&&"attribute"!=t.kind&&"text"!=t.kind&&!t.isCompound&&"{"===t.parts[0].mode}(a)){let{event:t,negate:e}=a.parts[0];a.listenerEvent=t||nt(r)+"-changed",a.listenerNegate=e}let l=e.nodeInfoList.length;for(let n=0;n<a.parts.length;n++){let o=a.parts[n];o.compoundIndex=n,Kt(t,e,a,o,l)}}function Kt(t,e,n,o,r){if(!o.literal)if("attribute"===n.kind&&"-"===n.target[0])console.warn("Cannot set attribute "+n.target+' because "-" is not a valid attribute starting character');else{let i=o.dependencies,s={index:r,binding:n,part:o,evaluator:t};for(let n=0;n<i.length;n++){let o=i[n];"string"==typeof o&&(o=ie(o),o.wildcard=!0),t._addTemplatePropertyEffect(e,o.rootProperty,{fn:Jt,info:s,trigger:o})}}}function Jt(t,e,n,o,r,i,s){let a=s[r.index],l=r.binding,c=r.part;if(i&&c.source&&e.length>c.source.length&&"property"==l.kind&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let o=n[e];e=K(c.source,l.target,e),a._setPendingPropertyOrPath(e,o,!1,!0)&&t._enqueueClient(a)}else{let s=r.evaluator._evaluateBinding(t,c,e,n,o,i);s!==Tt&&function(t,e,n,o,r){r=function(t,e,n,o){if(n.isCompound){let r=t.__dataCompoundStorage[n.target];r[o.compoundIndex]=e,e=r.join("")}"attribute"!==n.kind&&("textContent"!==n.target&&("value"!==n.target||"input"!==t.localName&&"textarea"!==t.localName)||(e=null==e?"":e));return e}(e,r,n,o),u&&(r=u(r,n.target,n.kind,e));if("attribute"==n.kind)t._valueToNodeAttribute(e,r,n.target);else{let o=n.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[o]?e[Ot.READ_ONLY]&&e[Ot.READ_ONLY][o]||e._setPendingProperty(o,r)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,o,r)}}(t,a,l,c,s)}}function Yt(t,e){if(e.isCompound){let n=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),o=e.parts,r=new Array(o.length);for(let t=0;t<o.length;t++)r[t]=o[t].literal;let i=e.target;n[i]=r,e.literal&&"property"==e.kind&&("className"===i&&(t=j(t)),t[i]=e.literal)}}function Gt(t,e,n){if(n.listenerEvent){let o=n.parts[0];t.addEventListener(n.listenerEvent,function(t){!function(t,e,n,o,r){let i,s=t.detail,a=s&&s.path;a?(o=K(n,o,a),i=s&&s.value):i=t.currentTarget[n],i=r?!i:i,e[Ot.READ_ONLY]&&e[Ot.READ_ONLY][o]||!e._setPendingPropertyOrPath(o,i,!0,Boolean(a))||s&&s.queueProperty||e._invalidateProperties()}(t,e,n.target,o.source,o.negate)})}}function Xt(t,e,n,o,r,i){i=e.static||i&&("object"!=typeof i||i[e.methodName]);let s={methodName:e.methodName,args:e.args,methodInfo:r,dynamicFn:i};for(let r,i=0;i<e.args.length&&(r=e.args[i]);i++)r.literal||t._addPropertyEffect(r.rootProperty,n,{fn:o,info:s,trigger:r});return i&&t._addPropertyEffect(e.methodName,n,{fn:o,info:s}),s}function Zt(t,e,n,o,r){let i=t._methodHost||t,s=i[r.methodName];if(s){let o=t._marshalArgs(r.args,e,n);return o===Tt?Tt:s.apply(i,o)}r.dynamicFn||console.warn("method `"+r.methodName+"` not defined")}const Qt=[],te="(?:[a-zA-Z_$][\\w.:$\\-*]*)",ee="(?:("+te+"|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)",ne=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?"+("("+te+"\\s*"+("(?:\\(\\s*(?:"+("(?:"+ee+"(?:,\\s*"+ee+")*)")+"?)\\)\\s*)")+"?)")+"(?:]]|}})","g");function oe(t){let e="";for(let n=0;n<t.length;n++){e+=t[n].literal||""}return e}function re(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let t={methodName:e[1],static:!0,args:Qt};if(e[2].trim()){return function(t,e){return e.args=t.map(function(t){let n=ie(t);return n.literal||(e.static=!1),n},this),e}(e[2].replace(/\\,/g,"&comma;").split(","),t)}return t}return null}function ie(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),n={name:e,value:"",literal:!1},o=e[0];switch("-"===o&&(o=e[1]),o>="0"&&o<="9"&&(o="#"),o){case"'":case'"':n.value=e.slice(1,-1),n.literal=!0;break;case"#":n.value=Number(e),n.literal=!0}return n.literal||(n.rootProperty=V(e),n.structured=U(e),n.structured&&(n.wildcard=".*"==e.slice(-2),n.wildcard&&(n.name=e.slice(0,-2)))),n}function se(t,e,n){let o=G(t,n);return void 0===o&&(o=e[n]),o}function ae(t,e,n,o){const r={indexSplices:o};v&&!t._overrideLegacyUndefined&&(e.splices=r),t.notifyPath(n+".splices",r),t.notifyPath(n+".length",e.length),v&&!t._overrideLegacyUndefined&&(r.indexSplices=[])}function le(t,e,n,o,r,i){ae(t,e,n,[{index:o,addedCount:r,removed:i,object:e,type:"splice"}])}const ce=A(t=>{const e=Et(gt(t));return class extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return Ot}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(de.length){let t=de[de.length-1];t._enqueueClient(this),this.__dataHost=t}}_initializeProtoProperties(t){this.__data=Object.create(t),this.__dataPending=Object.create(t),this.__dataOld={}}_initializeInstanceProperties(t){let e=this[Ot.READ_ONLY];for(let n in t)e&&e[n]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[n]=this.__dataPending[n]=t[n])}_addPropertyEffect(t,e,n){this._createPropertyAccessor(t,e==Ot.READ_ONLY);let o=It(this,e,!0)[t];o||(o=this[e][t]=[]),o.push(n)}_removePropertyEffect(t,e,n){let o=It(this,e,!0)[t],r=o.indexOf(n);r>=0&&o.splice(r,1)}_hasPropertyEffect(t,e){let n=this[e];return Boolean(n&&n[t])}_hasReadOnlyEffect(t){return this._hasPropertyEffect(t,Ot.READ_ONLY)}_hasNotifyEffect(t){return this._hasPropertyEffect(t,Ot.NOTIFY)}_hasReflectEffect(t){return this._hasPropertyEffect(t,Ot.REFLECT)}_hasComputedEffect(t){return this._hasPropertyEffect(t,Ot.COMPUTE)}_setPendingPropertyOrPath(t,e,n,o){if(o||V(Array.isArray(t)?t[0]:t)!==t){if(!o){let n=G(this,t);if(!(t=X(this,t,e))||!super._shouldPropertyChange(t,e,n))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(t,e,n))return function(t,e,n){let o=t.__dataLinkedPaths;if(o){let r;for(let i in o){let s=o[i];W(i,e)?(r=K(i,s,e),t._setPendingPropertyOrPath(r,n,!0,!0)):W(s,e)&&(r=K(s,i,e),t._setPendingPropertyOrPath(r,n,!0,!0))}}}(this,t,e),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[t])return this._setPendingProperty(t,e,n);this[t]=e}return!1}_setUnmanagedPropertyToNode(t,e,n){n===t[e]&&"object"!=typeof n||("className"===e&&(t=j(t)),t[e]=n)}_setPendingProperty(t,e,n){let o=this.__dataHasPaths&&U(t),r=o?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(t,e,r[t])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),t in this.__dataOld||(this.__dataOld[t]=this.__data[t]),o?this.__dataTemp[t]=e:this.__data[t]=e,this.__dataPending[t]=e,(o||this[Ot.NOTIFY]&&this[Ot.NOTIFY][t])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[t]=n),!0)}_setProperty(t,e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(t){this.__dataPendingClients=this.__dataPendingClients||[],t!==this&&this.__dataPendingClients.push(t)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let t=this.__dataPendingClients;if(t){this.__dataPendingClients=null;for(let e=0;e<t.length;e++){let n=t[e];n.__dataEnabled?n.__dataPending&&n._flushProperties():n._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(t,e){for(let n in t)!e&&this[Ot.READ_ONLY]&&this[Ot.READ_ONLY][n]||this._setPendingPropertyOrPath(n,t[n],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(t,e,n){let o,r=this.__dataHasPaths;this.__dataHasPaths=!1,jt(this,e,n,r),o=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(e,n,r),this._flushClients(),Dt(this,this[Ot.REFLECT],e,n,r),Dt(this,this[Ot.OBSERVE],e,n,r),o&&function(t,e,n,o,r){let i,s,a=t[Ot.NOTIFY],l=At++;for(let s in e)e[s]&&(a&&Lt(t,a,l,s,n,o,r)||r&&Rt(t,s,n))&&(i=!0);i&&(s=t.__dataHost)&&s._invalidateProperties&&s._invalidateProperties()}(this,o,e,n,r),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(t,e,n){this[Ot.PROPAGATE]&&Dt(this,this[Ot.PROPAGATE],t,e,n),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,t,e,n)}_runEffectsForTemplate(t,e,n,o){const r=(e,o)=>{Dt(this,t.propertyEffects,e,n,o,t.nodeList);for(let r=t.firstChild;r;r=r.nextSibling)this._runEffectsForTemplate(r,e,n,o)};t.runEffects?t.runEffects(r,e,o):r(e,o)}linkPaths(t,e){t=J(t),e=J(e),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[t]=e}unlinkPaths(t){t=J(t),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[t]}notifySplices(t,e){let n={path:""};ae(this,G(this,t,n),n.path,e)}get(t,e){return G(e||this,t)}set(t,e,n){n?X(n,t,e):this[Ot.READ_ONLY]&&this[Ot.READ_ONLY][t]||this._setPendingPropertyOrPath(t,e,!0)&&this._invalidateProperties()}push(t,...e){let n={path:""},o=G(this,t,n),r=o.length,i=o.push(...e);return e.length&&le(this,o,n.path,r,e.length,[]),i}pop(t){let e={path:""},n=G(this,t,e),o=Boolean(n.length),r=n.pop();return o&&le(this,n,e.path,n.length,0,[r]),r}splice(t,e,n,...o){let r,i={path:""},s=G(this,t,i);return e<0?e=s.length-Math.floor(-e):e&&(e=Math.floor(e)),r=2===arguments.length?s.splice(e):s.splice(e,n,...o),(o.length||r.length)&&le(this,s,i.path,e,o.length,r),r}shift(t){let e={path:""},n=G(this,t,e),o=Boolean(n.length),r=n.shift();return o&&le(this,n,e.path,0,0,[r]),r}unshift(t,...e){let n={path:""},o=G(this,t,n),r=o.unshift(...e);return e.length&&le(this,o,n.path,0,e.length,[]),r}notifyPath(t,e){let n;if(1==arguments.length){let o={path:""};e=G(this,t,o),n=o.path}else n=Array.isArray(t)?J(t):t;this._setPendingPropertyOrPath(n,e,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(t,e){var n;this._addPropertyEffect(t,Ot.READ_ONLY),e&&(this["_set"+(n=t,n[0].toUpperCase()+n.substring(1))]=function(e){this._setProperty(t,e)})}_createPropertyObserver(t,e,n){let o={property:t,method:e,dynamicFn:Boolean(n)};this._addPropertyEffect(t,Ot.OBSERVE,{fn:zt,info:o,trigger:{name:t}}),n&&this._addPropertyEffect(e,Ot.OBSERVE,{fn:zt,info:o,trigger:{name:e}})}_createMethodObserver(t,e){let n=re(t);if(!n)throw new Error("Malformed observer expression '"+t+"'");Xt(this,n,Ot.OBSERVE,Zt,null,e)}_createNotifyingProperty(t){this._addPropertyEffect(t,Ot.NOTIFY,{fn:Ht,info:{eventName:nt(t)+"-changed",property:t}})}_createReflectedProperty(t){let e=this.constructor.attributeNameForProperty(t);"-"===e[0]?console.warn("Property "+t+" cannot be reflected to attribute "+e+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(t,Ot.REFLECT,{fn:Bt,info:{attrName:e}})}_createComputedProperty(t,e,n){let o=re(e);if(!o)throw new Error("Malformed computed expression '"+e+"'");const r=Xt(this,o,Ot.COMPUTE,qt,t,n);It(this,$t)[t]=r}_marshalArgs(t,e,n){const o=this.__data,r=[];for(let i=0,s=t.length;i<s;i++){let{name:s,structured:a,wildcard:l,value:c,literal:d}=t[i];if(!d)if(l){const t=W(s,e),r=se(o,n,t?e:s);c={path:t?e:s,value:r,base:t?G(o,s):r}}else c=a?se(o,n,s):o[s];if(v&&!this._overrideLegacyUndefined&&void 0===c&&t.length>1)return Tt;r[i]=c}return r}static addPropertyEffect(t,e,n){this.prototype._addPropertyEffect(t,e,n)}static createPropertyObserver(t,e,n){this.prototype._createPropertyObserver(t,e,n)}static createMethodObserver(t,e){this.prototype._createMethodObserver(t,e)}static createNotifyingProperty(t){this.prototype._createNotifyingProperty(t)}static createReadOnlyProperty(t,e){this.prototype._createReadOnlyProperty(t,e)}static createReflectedProperty(t){this.prototype._createReflectedProperty(t)}static createComputedProperty(t,e,n){this.prototype._createComputedProperty(t,e,n)}static bindTemplate(t){return this.prototype._bindTemplate(t)}_bindTemplate(t,e){let n=this.constructor._parseTemplate(t),o=this.__preBoundTemplateInfo==n;if(!o)for(let t in n.propertyEffects)this._createPropertyAccessor(t);if(e)if(n=Object.create(n),n.wasPreBound=o,this.__templateInfo){const e=t._parentTemplateInfo||this.__templateInfo,o=e.lastChild;n.parent=e,e.lastChild=n,n.previousSibling=o,o?o.nextSibling=n:e.firstChild=n}else this.__templateInfo=n;else this.__preBoundTemplateInfo=n;return n}static _addTemplatePropertyEffect(t,e,n){(t.hostProps=t.hostProps||{})[e]=!0;let o=t.propertyEffects=t.propertyEffects||{};(o[e]=o[e]||[]).push(n)}_stampTemplate(t,e){e=e||this._bindTemplate(t,!0),de.push(this);let n=super._stampTemplate(t,e);if(de.pop(),e.nodeList=n.nodeList,!e.wasPreBound){let t=e.childNodes=[];for(let e=n.firstChild;e;e=e.nextSibling)t.push(e)}return n.templateInfo=e,function(t,e){let{nodeList:n,nodeInfoList:o}=e;if(o.length)for(let e=0;e<o.length;e++){let r=o[e],i=n[e],s=r.bindings;if(s)for(let e=0;e<s.length;e++){let n=s[e];Yt(i,n),Gt(i,t,n)}i.__dataHost=t}}(this,e),this.__dataClientsReady&&(this._runEffectsForTemplate(e,this.__data,null,!1),this._flushClients()),n}_removeBoundDom(t){const e=t.templateInfo,{previousSibling:n,nextSibling:o,parent:r}=e;n?n.nextSibling=o:r&&(r.firstChild=o),o?o.previousSibling=n:r&&(r.lastChild=n),e.nextSibling=e.previousSibling=null;let i=e.childNodes;for(let t=0;t<i.length;t++){let e=i[t];j(j(e).parentNode).removeChild(e)}}static _parseTemplateNode(t,n,o){let r=e._parseTemplateNode.call(this,t,n,o);if(t.nodeType===Node.TEXT_NODE){let e=this._parseBindings(t.textContent,n);e&&(t.textContent=oe(e)||" ",Wt(this,n,o,"text","textContent",e),r=!0)}return r}static _parseTemplateNodeAttribute(t,n,o,r,i){let s=this._parseBindings(i,n);if(s){let e=r,i="property";Nt.test(r)?i="attribute":"$"==r[r.length-1]&&(r=r.slice(0,-1),i="attribute");let a=oe(s);return a&&"attribute"==i&&("class"==r&&t.hasAttribute("class")&&(a+=" "+t.getAttribute(r)),t.setAttribute(r,a)),"attribute"==i&&"disable-upgrade$"==e&&t.setAttribute(r,""),"input"===t.localName&&"value"===e&&t.setAttribute(e,""),t.removeAttribute(e),"property"===i&&(r=et(r)),Wt(this,n,o,i,r,s,a),!0}return e._parseTemplateNodeAttribute.call(this,t,n,o,r,i)}static _parseTemplateNestedTemplate(t,n,o){let r=e._parseTemplateNestedTemplate.call(this,t,n,o);const i=t.parentNode,s=o.templateInfo,a="dom-if"===i.localName,l="dom-repeat"===i.localName;x&&(a||l)&&(i.removeChild(t),(o=o.parentInfo).templateInfo=s,o.noted=!0,r=!1);let c=s.hostProps;if(C&&a)c&&(n.hostProps=Object.assign(n.hostProps||{},c),x||(o.parentInfo.noted=!0));else{let t="{";for(let e in c){Wt(this,n,o,"property","_host_"+e,[{mode:t,source:e,dependencies:[e],hostProp:!0}])}}return r}static _parseBindings(t,e){let n,o=[],r=0;for(;null!==(n=ne.exec(t));){n.index>r&&o.push({literal:t.slice(r,n.index)});let i=n[1][0],s=Boolean(n[2]),a=n[3].trim(),l=!1,c="",d=-1;"{"==i&&(d=a.indexOf("::"))>0&&(c=a.substring(d+2),a=a.substring(0,d),l=!0);let p=re(a),h=[];if(p){let{args:t,methodName:n}=p;for(let e=0;e<t.length;e++){let n=t[e];n.literal||h.push(n)}let o=e.dynamicFns;(o&&o[n]||p.static)&&(h.push(n),p.dynamicFn=!0)}else h.push(a);o.push({source:a,mode:i,negate:s,customEvent:l,signature:p,dependencies:h,event:c}),r=ne.lastIndex}if(r&&r<t.length){let e=t.substring(r);e&&o.push({literal:e})}return o.length?o:null}static _evaluateBinding(t,e,n,o,r,i){let s;return s=e.signature?Zt(t,n,o,0,e.signature):n!=e.source?G(t,e.source):i&&U(n)?G(t,n):t.__data[n],e.negate&&(s=!s),s}}}),de=[];const pe=A(t=>{const e=ht(t);function n(t){const e=Object.getPrototypeOf(t);return e.prototype instanceof r?e:null}function o(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",t))){let e=null;if(t.hasOwnProperty(JSCompiler_renameProperty("properties",t))){const n=t.properties;n&&(e=
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function(t){const e={};for(let n in t){const o=t[n];e[n]="function"==typeof o?{type:o}:o}return e}(n))}t.__ownProperties=e}return t.__ownProperties}class r extends e{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const t=this._properties;this.__observedAttributes=t?Object.keys(t).map(t=>this.prototype._addPropertyToAttributeMap(t)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const t=n(this);t&&t.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const t=o(this);t&&this.createProperties(t)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const t=n(this);this.__properties=Object.assign({},t&&t._properties,o(this))}return this.__properties}static typeForProperty(t){const e=this._properties[t];return e&&e.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return r}),he=window.ShadyCSS&&window.ShadyCSS.cssBuild,ue=A(t=>{const e=pe(ce(t));function n(t,e,n,o){n.computed&&(n.readOnly=!0),n.computed&&(t._hasReadOnlyEffect(e)?console.warn(`Cannot redefine computed property '${e}'.`):t._createComputedProperty(e,n.computed,o)),n.readOnly&&!t._hasReadOnlyEffect(e)?t._createReadOnlyProperty(e,!n.computed):!1===n.readOnly&&t._hasReadOnlyEffect(e)&&console.warn(`Cannot make readOnly property '${e}' non-readOnly.`),n.reflectToAttribute&&!t._hasReflectEffect(e)?t._createReflectedProperty(e):!1===n.reflectToAttribute&&t._hasReflectEffect(e)&&console.warn(`Cannot make reflected property '${e}' non-reflected.`),n.notify&&!t._hasNotifyEffect(e)?t._createNotifyingProperty(e):!1===n.notify&&t._hasNotifyEffect(e)&&console.warn(`Cannot make notify property '${e}' non-notify.`),n.observer&&t._createPropertyObserver(e,n.observer,o[n.observer]),t._addPropertyToAttributeMap(e)}function o(t,e,n,o){if(!he){const r=e.content.querySelectorAll("style"),i=F(e),s=function(t){let e=L(t);return e?H(e):[]}(n),a=e.content.firstElementChild;for(let n=0;n<s.length;n++){let r=s[n];r.textContent=t._processStyleText(r.textContent,o),e.content.insertBefore(r,a)}let l=0;for(let e=0;e<i.length;e++){let n=i[e],s=r[l];s!==n?(n=n.cloneNode(!0),s.parentNode.insertBefore(n,s)):l++,n.textContent=t._processStyleText(n.textContent,o)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(e,n),k&&he&&p){const n=e.content.querySelectorAll("style");if(n){let e="";Array.from(n).forEach(t=>{e+=t.textContent,t.parentNode.removeChild(t)}),t._styleSheet=new CSSStyleSheet,t._styleSheet.replaceSync(e)}}}return class extends e{static get polymerElementVersion(){return"3.5.2"}static _finalizeClass(){e._finalizeClass.call(this);const t=((n=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",n))||(n.__ownObservers=n.hasOwnProperty(JSCompiler_renameProperty("observers",n))?n.observers:null),n.__ownObservers);var n;t&&this.createObservers(t,this._properties),this._prepareTemplate()}static _prepareTemplate(){let t=this.template;t&&("string"==typeof t?(console.error("template getter must return HTMLTemplateElement"),t=null):b||(t=t.cloneNode(!0))),this.prototype._template=t}static createProperties(t){for(let e in t)n(this.prototype,e,t[e],t)}static createObservers(t,e){const n=this.prototype;for(let o=0;o<t.length;o++)n._createMethodObserver(t[o],e)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let t=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;"function"==typeof t&&(t=t()),this._template=void 0!==t?t:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&function(t){let e=null;if(t&&(!m||g)&&(e=I.import(t,"template"),m&&!e))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${t}`);return e}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(t){this._template=t}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const t=this.importMeta;if(t)this._importPath=c(t.url);else{const t=I.import(this.is);this._importPath=t&&t.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=h,this.importPath=this.constructor.importPath;let t=function(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",t))){t.__propertyDefaults=null;let e=t._properties;for(let n in e){let o=e[n];"value"in o&&(t.__propertyDefaults=t.__propertyDefaults||{},t.__propertyDefaults[n]=o)}}return t.__propertyDefaults}(this.constructor);if(t)for(let e in t){let n=t[e];if(this._canApplyPropertyDefault(e)){let t="function"==typeof n.value?n.value.call(this):n.value;this._hasAccessor(e)?this._setPendingProperty(e,t,!0):this[e]=t}}}_canApplyPropertyDefault(t){return!this.hasOwnProperty(t)}static _processStyleText(t,e){return l(t,e)}static _finalizeTemplate(t){const e=this.prototype._template;if(e&&!e.__polymerFinalized){e.__polymerFinalized=!0;const n=this.importPath;o(this,e,t,n?a(n):""),this.prototype._bindTemplate(e)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(t){const e=j(this);if(e.attachShadow)return t?(e.shadowRoot||(e.attachShadow({mode:"open",shadyUpgradeFragment:t}),e.shadowRoot.appendChild(t),this.constructor._styleSheet&&(e.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),_&&window.ShadyDOM&&window.ShadyDOM.flushInitial(e.shadowRoot),e.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(t){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,t)}resolveUrl(t,e){return!e&&this.importPath&&(e=a(this.importPath)),a(t,e)}static _parseTemplateContent(t,n,o){return n.dynamicFns=n.dynamicFns||this._properties,e._parseTemplateContent.call(this,t,n,o)}static _addTemplatePropertyEffect(t,n,o){return!y||n in this._properties||o.info.part.signature&&o.info.part.signature.static||o.info.part.hostProp||t.nestedTemplate||console.warn(`Property '${n}' used in template but not declared in 'properties'; attribute will not be observed.`),e._addTemplatePropertyEffect.call(this,t,n,o)}}}),fe=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:t=>t});
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */class me{constructor(t,e){ye(t,e);const n=e.reduce((e,n,o)=>e+ge(n)+t[o+1],t[0]);this.value=n.toString()}toString(){return this.value}}function ge(t){if(t instanceof me)return t.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${t}`)}const be=function(t,...e){ye(t,e);const n=document.createElement("template");let o=e.reduce((e,n,o)=>e+function(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof me)return ge(t);throw new Error(`non-template value passed to Polymer's html function: ${t}`)}(n)+t[o+1],t[0]);return fe&&(o=fe.createHTML(o)),n.innerHTML=o,n},ye=(t,e)=>{if(!Array.isArray(t)||!Array.isArray(t.raw)||e.length!==t.length-1)throw new TypeError("Invalid call to the html template tag")},_e=ue(HTMLElement);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class ve{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,we.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),we.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(t,e,n){return t instanceof ve?t._cancelAsync():t=new ve,t.setConfig(e,n),t}}let we=new Set;const xe=function(t){we.add(t)},Ce=function(){const t=Boolean(we.size);return we.forEach(t=>{try{t.flush()}catch(t){setTimeout(()=>{throw t})}}),t},Se=function(){let t,e;do{t=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),e=Ce()}while(t||e)};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Pe=!1;function ke(){if(b&&!d){if(!Pe){Pe=!0;const t=document.createElement("style");t.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(t)}return!0}return!1}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Ee(t,e,n,o,r){let i;r&&(i="object"==typeof n&&null!==n,i&&(o=t.__dataTemp[e]));let s=o!==n&&(o==o||n==n);return i&&s&&(t.__dataTemp[e]=n),s}const Ae=A(t=>class extends t{_shouldPropertyChange(t,e,n){return Ee(this,t,e,n,!0)}}),Te=A(t=>class extends t{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(t,e,n){return Ee(this,t,e,n,this.mutableData)}});Ae._mutablePropertyChange=Ee;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Oe=null;function $e(){return Oe}$e.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:$e,writable:!0}});const Ne=ce($e),Ie=Ae(Ne);const De=ce(class{});function Le(t,e){for(let n=0;n<e.length;n++){let o=e[n];if(Boolean(t)!=Boolean(o.__hideTemplateChildren__))if(o.nodeType===Node.TEXT_NODE)t?(o.__polymerTextContent__=o.textContent,o.textContent=""):o.textContent=o.__polymerTextContent__;else if("slot"===o.localName)if(t)o.__polymerReplaced__=document.createComment("hidden-slot"),j(j(o).parentNode).replaceChild(o.__polymerReplaced__,o);else{const t=o.__polymerReplaced__;t&&j(j(t).parentNode).replaceChild(o,t)}else o.style&&(t?(o.__polymerDisplay__=o.style.display,o.style.display="none"):o.style.display=o.__polymerDisplay__);o.__hideTemplateChildren__=t,o._showHideChildren&&o._showHideChildren(t)}}class Me extends De{constructor(t){super(),this._configureProperties(t),this.root=this._stampTemplate(this.__dataHost);let e=[];this.children=e;for(let t=this.root.firstChild;t;t=t.nextSibling)e.push(t),t.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let n=this.__templatizeOptions;(t&&n.instanceProps||!n.instanceProps)&&this._enableProperties()}_configureProperties(t){if(this.__templatizeOptions.forwardHostProp)for(let t in this.__hostProps)this._setPendingProperty(t,this.__dataHost["_host_"+t]);for(let e in t)this._setPendingProperty(e,t[e])}forwardHostProp(t,e){this._setPendingPropertyOrPath(t,e,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(t,e,n){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(t,e,t=>{t.model=this,n(t)});else{let o=this.__dataHost.__dataHost;o&&o._addEventListenerToNode(t,e,n)}}_showHideChildren(t){Le(t,this.children)}_setUnmanagedPropertyToNode(t,e,n){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&"textContent"==e?t.__polymerTextContent__=n:super._setUnmanagedPropertyToNode(t,e,n)}get parentModel(){let t=this.__parentModel;if(!t){let e;t=this;do{t=t.__dataHost.__dataHost}while((e=t.__templatizeOptions)&&!e.parentModel);this.__parentModel=t}return t}dispatchEvent(t){return!0}}Me.prototype.__dataHost,Me.prototype.__templatizeOptions,Me.prototype._methodHost,Me.prototype.__templatizeOwner,Me.prototype.__hostProps;const ze=Ae(Me);function Re(t){let e=t.__dataHost;return e&&e._methodHost||e}function Fe(t,e,n){let o=n.mutableData?ze:Me;Ve.mixin&&(o=Ve.mixin(o));let r=class extends o{};return r.prototype.__templatizeOptions=n,r.prototype._bindTemplate(t),function(t,e,n,o){let r=n.hostProps||{};for(let e in o.instanceProps){delete r[e];let n=o.notifyInstanceProp;n&&t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:je(e,n)})}if(o.forwardHostProp&&e.__dataHost)for(let e in r)n.hasHostProps||(n.hasHostProps=!0),t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:Ue()})}(r,t,e,n),r}function He(t,e,n,o){let r=n.forwardHostProp;if(r&&e.hasHostProps){const i="template"==t.localName;let s=e.templatizeTemplateClass;if(!s){if(i){let t=n.mutableData?Ie:Ne;class o extends t{}s=e.templatizeTemplateClass=o}else{const n=t.constructor;class o extends n{}s=e.templatizeTemplateClass=o}let a=e.hostProps;for(let t in a)s.prototype._addPropertyEffect("_host_"+t,s.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:Be(t,r)}),s.prototype._createNotifyingProperty("_host_"+t);y&&o&&function(t,e,n){const o=n.constructor._properties,{propertyEffects:r}=t,{instanceProps:i}=e;for(let t in r)if(!(o[t]||i&&i[t])){const e=r[t];for(let n=0;n<e.length;n++){const{part:o}=e[n].info;if(!o.signature||!o.signature.static){console.warn(`Property '${t}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}(e,n,o)}if(t.__dataProto&&Object.assign(t.__data,t.__dataProto),i)!function(t,e){Oe=t,Object.setPrototypeOf(t,e.prototype),new e,Oe=null}(t,s),t.__dataTemp={},t.__dataPending=null,t.__dataOld=null,t._enableProperties();else{Object.setPrototypeOf(t,s.prototype);const n=e.hostProps;for(let e in n)if(e="_host_"+e,e in t){const n=t[e];delete t[e],t.__data[e]=n}}}}function Be(t,e){return function(t,n,o){e.call(t.__templatizeOwner,n.substring(6),o[n])}}function je(t,e){return function(t,n,o){e.call(t.__templatizeOwner,t,n,o[n])}}function Ue(){return function(t,e,n){t.__dataHost._setPendingPropertyOrPath("_host_"+e,n[e],!0,!0)}}function Ve(t,e,n){if(m&&!Re(t))throw new Error("strictTemplatePolicy: template owner not trusted");if(n=n||{},t.__templatizeOwner)throw new Error("A <template> can only be templatized once");t.__templatizeOwner=e;let o=(e?e.constructor:Me)._parseTemplate(t),r=o.templatizeInstanceClass;r||(r=Fe(t,o,n),o.templatizeInstanceClass=r);const i=Re(t);He(t,o,n,i);let s=class extends r{};return s.prototype._methodHost=i,s.prototype.__dataHost=t,s.prototype.__templatizeOwner=e,s.prototype.__hostProps=o.hostProps,s}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class qe extends _e{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=ve.debounce(this.__renderDebouncer,dt,()=>this.__render()),xe(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const t=j(this).parentNode;t&&(t.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||j(t).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),ke()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const t=this;let e=t._templateInfo?t:j(t).querySelector("template");if(!e){let t=new MutationObserver(()=>{if(!j(this).querySelector("template"))throw new Error("dom-if requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}this.__template=e}return!0}__ensureInstance(){let t=j(this).parentNode;if(this.__hasInstance()){let e=this.__getInstanceNodes();if(e&&e.length){if(j(this).previousSibling!==e[e.length-1])for(let n,o=0;o<e.length&&(n=e[o]);o++)j(t).insertBefore(n,this)}}else{if(!t)return!1;if(!this.__ensureTemplate())return!1;this.__createAndInsertInstance(t)}return!0}render(){Se()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),S&&!this.notifyDomChange||this.if==this._lastIf||(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(t){}__teardownInstance(){}_showHideChildren(){}}const We=C?class extends qe{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(t){const e=this.__dataHost||this;if(m&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const n=e._bindTemplate(this.__template,!0);n.runEffects=(t,e,n)=>{let o=this.__syncInfo;if(this.if)o&&(this.__syncInfo=null,this._showHideChildren(),e=Object.assign(o.changedProps,e)),t(e,n);else if(this.__instance)if(o||(o=this.__syncInfo={runEffects:t,changedProps:{}}),n)for(const t in e){const e=V(t);o.changedProps[e]=this.__dataHost[e]}else Object.assign(o.changedProps,e)},this.__instance=e._stampTemplate(this.__template,n),j(t).insertBefore(this.__instance,this)}__syncHostProperties(){const t=this.__syncInfo;t&&(this.__syncInfo=null,t.runEffects(t.changedProps,!1))}__teardownInstance(){const t=this.__dataHost||this;this.__instance&&(t._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const t=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==t&&(this.__instance.__hidden=t,Le(t,this.__instance.templateInfo.childNodes)),t||this.__syncHostProperties()}}:class extends qe{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(t){this.__ctor||(this.__ctor=Ve(this.__template,this,{mutableData:!0,forwardHostProp:function(t,e){this.__instance&&(this.if?this.__instance.forwardHostProp(t,e):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[V(t)]=!0))}})),this.__instance=new this.__ctor,j(t).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let t=this.__instance.children;if(t&&t.length){let e=j(t[0]).parentNode;if(e){e=j(e);for(let n,o=0;o<t.length&&(n=t[o]);o++)e.removeChild(n)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let t=this.__invalidProps;if(t){this.__invalidProps=null;for(let e in t)this.__instance._setPendingProperty(e,this.__dataHost[e]);this.__instance._flushProperties()}}_showHideChildren(){const t=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==t&&(this.__instance.__hidden=t,this.__instance._showHideChildren(t)),t||this.__syncHostProperties()}};customElements.define(We.is,We);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Ke=Te(_e);class Je extends Ke{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!S,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let t=0;t<this.__instances.length;t++)this.__detachInstance(t);this.__chunkingId&&cancelAnimationFrame(this.__chunkingId)}connectedCallback(){if(super.connectedCallback(),ke()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let t=j(j(this).parentNode);for(let e=0;e<this.__instances.length;e++)this.__attachInstance(e,t);this.__chunkingId&&this.__render()}}__ensureTemplatized(){if(!this.__ctor){const t=this;let e=this.template=t._templateInfo?t:this.querySelector("template");if(!e){let t=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}let n={};n[this.as]=!0,n[this.indexAs]=!0,n[this.itemsIndexAs]=!0,this.__ctor=Ve(e,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:n,forwardHostProp:function(t,e){let n=this.__instances;for(let o,r=0;r<n.length&&(o=n[r]);r++)o.forwardHostProp(t,e)},notifyInstanceProp:function(t,e,n){if((o=this.as)===(r=e)||q(o,r)||W(o,r)){let o=t[this.itemsIndexAs];e==this.as&&(this.items[o]=n);let r=K(this.as,`${JSCompiler_renameProperty("items",this)}.${o}`,e);this.notifyPath(r,n)}var o,r}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(t){if("string"==typeof t){let e=t,n=this.__getMethodHost();return function(){return n[e].apply(n,arguments)}}return t}__sortChanged(t){this.__sortFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__filterChanged(t){this.__filterFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(t){return Math.ceil(1e3/t)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(t){if(this.__sortFn||this.__filterFn)if(t){if(this.__observePaths){let e=this.__observePaths;for(let n=0;n<e.length;n++)0===t.indexOf(e[n])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__itemsChanged(t){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(t.path,t.value)||("items"===t.path&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(t,e=0){this.__renderDebouncer=ve.debounce(this.__renderDebouncer,e>0?ct.after(e):dt,t.bind(this)),xe(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),Se()}__render(){if(!this.__ensureTemplatized())return;let t=this.items||[];const e=this.__sortAndFilterItems(t),n=this.__calculateLimit(e.length);this.__updateInstances(t,n,e),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>{this.__chunkingId=null,this.__continueChunking()})),this._setRenderedItemCount(this.__instances.length),S&&!this.notifyDomChange||this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(t){let e=new Array(t.length);for(let n=0;n<t.length;n++)e[n]=n;return this.__filterFn&&(e=e.filter((e,n,o)=>this.__filterFn(t[e],n,o))),this.__sortFn&&e.sort((e,n)=>this.__sortFn(t[e],t[n])),e}__calculateLimit(t){let e=t;const n=this.__instances.length;if(this.initialCount){let o;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(e=Math.min(t,this.initialCount),o=Math.max(e-n,0),this.__chunkCount=o||1):(o=Math.min(Math.max(t-n,0),this.__chunkCount),e=Math.min(n+o,t)),this.__shouldMeasureChunk=o===this.__chunkCount,this.__shouldContinueChunking=e<t,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,e}__continueChunking(){if(this.__shouldMeasureChunk){const t=performance.now()-this.__renderStartTime,e=this._targetFrameTime/t;this.__chunkCount=Math.round(this.__chunkCount*e)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(t,e,n){const o=this.__itemsIdxToInstIdx={};let r;for(r=0;r<e;r++){let e=this.__instances[r],i=n[r],s=t[i];o[i]=r,e?(e._setPendingProperty(this.as,s),e._setPendingProperty(this.indexAs,r),e._setPendingProperty(this.itemsIndexAs,i),e._flushProperties()):this.__insertInstance(s,r,i)}for(let t=this.__instances.length-1;t>=r;t--)this.__detachAndRemoveInstance(t)}__detachInstance(t){let e=this.__instances[t];const n=j(e.root);for(let t=0;t<e.children.length;t++){let o=e.children[t];n.appendChild(o)}return e}__attachInstance(t,e){let n=this.__instances[t];e.insertBefore(n.root,this)}__detachAndRemoveInstance(t){this.__detachInstance(t),this.__instances.splice(t,1)}__stampInstance(t,e,n){let o={};return o[this.as]=t,o[this.indexAs]=e,o[this.itemsIndexAs]=n,new this.__ctor(o)}__insertInstance(t,e,n){const o=this.__stampInstance(t,e,n);let r=this.__instances[e+1],i=r?r.children[0]:this;return j(j(this).parentNode).insertBefore(o.root,i),this.__instances[e]=o,o}_showHideChildren(t){for(let e=0;e<this.__instances.length;e++)this.__instances[e]._showHideChildren(t)}__handleItemPath(t,e){let n=t.slice(6),o=n.indexOf("."),r=o<0?n:n.substring(0,o);if(r==parseInt(r,10)){let t=o<0?"":n.substring(o+1);this.__handleObservedPaths(t);let i=this.__itemsIdxToInstIdx[r],s=this.__instances[i];if(s){let n=this.as+(t?"."+t:"");s._setPendingPropertyOrPath(n,e,!1,!0),s._flushProperties()}return!0}}itemForElement(t){let e=this.modelForElement(t);return e&&e[this.as]}indexForElement(t){let e=this.modelForElement(t);return e&&e[this.indexAs]}modelForElement(t){return function(t,e){let n;for(;e;)if(n=e.__dataHost?e:e.__templatizeInstance){if(n.__dataHost==t)return n;e=n.__dataHost}else e=j(e).parentNode;return null}(this.template,t)}}customElements.define(Je.is,Je);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Ye=!(window.ShadyDOM&&window.ShadyDOM.inUse);let Ge,Xe;function Ze(t){Ge=(!t||!t.shimcssproperties)&&(Ye||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(Xe=window.ShadyCSS.cssBuild);const Qe=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?Ge=window.ShadyCSS.nativeCss:window.ShadyCSS?(Ze(window.ShadyCSS),window.ShadyCSS=void 0):Ze(window.WebComponents&&window.WebComponents.flags);const tn=Ge;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class en{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function nn(t){return on(function(t){let e=new en;e.start=0,e.end=t.length;let n=e;for(let o=0,r=t.length;o<r;o++)if(t[o]===an){n.rules||(n.rules=[]);let t=n,e=t.rules[t.rules.length-1]||null;n=new en,n.start=o+1,n.parent=t,n.previous=e,t.rules.push(n)}else t[o]===ln&&(n.end=o+1,n=n.parent||e);return e}(t=t.replace(cn.comments,"").replace(cn.port,"")),t)}function on(t,e){let n=e.substring(t.start,t.end-1);if(t.parsedCssText=t.cssText=n.trim(),t.parent){let o=t.previous?t.previous.end:t.parent.start;n=e.substring(o,t.start-1),n=function(t){return t.replace(/\\([0-9a-f]{1,6})\s/gi,function(){let t=arguments[1],e=6-t.length;for(;e--;)t="0"+t;return"\\"+t})}(n),n=n.replace(cn.multipleSpaces," "),n=n.substring(n.lastIndexOf(";")+1);let r=t.parsedSelector=t.selector=n.trim();t.atRule=0===r.indexOf(hn),t.atRule?0===r.indexOf(pn)?t.type=sn.MEDIA_RULE:r.match(cn.keyframesRule)&&(t.type=sn.KEYFRAMES_RULE,t.keyframesName=t.selector.split(cn.multipleSpaces).pop()):0===r.indexOf(dn)?t.type=sn.MIXIN_RULE:t.type=sn.STYLE_RULE}let o=t.rules;if(o)for(let t,n=0,r=o.length;n<r&&(t=o[n]);n++)on(t,e);return t}function rn(t,e,n=""){let o="";if(t.cssText||t.rules){let n=t.rules;if(n&&!function(t){let e=t[0];return Boolean(e)&&Boolean(e.selector)&&0===e.selector.indexOf(dn)}(n))for(let t,r=0,i=n.length;r<i&&(t=n[r]);r++)o=rn(t,e,o);else o=e?t.cssText:function(t){return t=function(t){return t.replace(cn.customProp,"").replace(cn.mixinProp,"")}(t),function(t){return t.replace(cn.mixinApply,"").replace(cn.varApply,"")}(t)}(t.cssText),o=o.trim(),o&&(o="  "+o+"\n")}return o&&(t.selector&&(n+=t.selector+" "+an+"\n"),n+=o,t.selector&&(n+=ln+"\n\n")),n}const sn={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},an="{",ln="}",cn={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},dn="--",pn="@media",hn="@",un=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,fn=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,mn=new Set;function gn(t){const e=t.textContent;if(!mn.has(e)){mn.add(e);const t=document.createElement("style");t.setAttribute("shady-unscoped",""),t.textContent=e,document.head.appendChild(t)}}function bn(t){return t.hasAttribute("shady-unscoped")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function yn(t,e){return t?("string"==typeof t&&(t=nn(t)),rn(t,tn)):""}function _n(t){return!t.__cssRules&&t.textContent&&(t.__cssRules=nn(t.textContent)),t.__cssRules||null}function vn(t,e,n,o){if(!t)return;let r=!1,i=t.type;i===sn.STYLE_RULE?e(t):i===sn.MIXIN_RULE&&(r=!0);let s=t.rules;if(s&&!r)for(let t,n=0,o=s.length;n<o&&(t=s[n]);n++)vn(t,e)}function wn(t,e){let n=t.indexOf("var(");if(-1===n)return e(t,"","","");let o=function(t,e){let n=0;for(let o=e,r=t.length;o<r;o++)if("("===t[o])n++;else if(")"===t[o]&&0===--n)return o;return-1}(t,n+3),r=t.substring(n+4,o),i=t.substring(0,n),s=wn(t.substring(o+1),e),a=r.indexOf(",");return-1===a?e(i,r.trim(),"",s):e(i,r.substring(0,a).trim(),r.substring(a+1).trim(),s)}window.ShadyDOM&&window.ShadyDOM.wrap;const xn="css-build";function Cn(t){if(void 0!==Xe)return Xe;if(void 0===t.__cssBuild){const e=t.getAttribute(xn);if(e)t.__cssBuild=e;else{const e=function(t){const e="template"===t.localName?t.content.firstChild:t.firstChild;if(e instanceof Comment){const t=e.textContent.trim().split(":");if(t[0]===xn)return t[1]}return""}(t);""!==e&&function(t){const e="template"===t.localName?t.content.firstChild:t.firstChild;e.parentNode.removeChild(e)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/(t),t.__cssBuild=e}}return t.__cssBuild||""}function Sn(t){return""!==Cn(t)}function Pn(t,e){for(let n in e)null===n?t.style.removeProperty(n):t.style.setProperty(n,e[n])}function kn(t,e){const n=window.getComputedStyle(t).getPropertyValue(e);return n?n.trim():""}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const En=/;\s*/m,An=/^\s*(initial)|(inherit)\s*$/,Tn=/\s*!important/,On="_-_";class $n{constructor(){this._map={}}set(t,e){t=t.trim(),this._map[t]={properties:e,dependants:{}}}get(t){return t=t.trim(),this._map[t]||null}}let Nn=null;class In{constructor(){this._currentElement=null,this._measureElement=null,this._map=new $n}detectMixin(t){return function(t){const e=fn.test(t)||un.test(t);return fn.lastIndex=0,un.lastIndex=0,e}(t)}gatherStyles(t){const e=function(t){const e=[],n=t.querySelectorAll("style");for(let t=0;t<n.length;t++){const o=n[t];bn(o)?Ye||(gn(o),o.parentNode.removeChild(o)):(e.push(o.textContent),o.parentNode.removeChild(o))}return e.join("").trim()}(t.content);if(e){const n=document.createElement("style");return n.textContent=e,t.content.insertBefore(n,t.content.firstChild),n}return null}transformTemplate(t,e){void 0===t._gatheredStyle&&(t._gatheredStyle=this.gatherStyles(t));const n=t._gatheredStyle;return n?this.transformStyle(n,e):null}transformStyle(t,e=""){let n=_n(t);return this.transformRules(n,e),t.textContent=yn(n),n}transformCustomStyle(t){let e=_n(t);return vn(e,t=>{":root"===t.selector&&(t.selector="html"),this.transformRule(t)}),t.textContent=yn(e),e}transformRules(t,e){this._currentElement=e,vn(t,t=>{this.transformRule(t)}),this._currentElement=null}transformRule(t){t.cssText=this.transformCssText(t.parsedCssText,t),":root"===t.selector&&(t.selector=":host > *")}transformCssText(t,e){return t=t.replace(un,(t,n,o,r)=>this._produceCssProperties(t,n,o,r,e)),this._consumeCssProperties(t,e)}_getInitialValueForProperty(t){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(t)}_fallbacksFromPreviousRules(t){let e=t;for(;e.parent;)e=e.parent;const n={};let o=!1;return vn(e,e=>{o=o||e===t,o||e.selector===t.selector&&Object.assign(n,this._cssTextToMap(e.parsedCssText))}),n}_consumeCssProperties(t,e){let n=null;for(;n=fn.exec(t);){let o=n[0],r=n[1],i=n.index,s=i+o.indexOf("@apply"),a=i+o.length,l=t.slice(0,s),c=t.slice(a),d=e?this._fallbacksFromPreviousRules(e):{};Object.assign(d,this._cssTextToMap(l));let p=this._atApplyToCssProperties(r,d);t=`${l}${p}${c}`,fn.lastIndex=i+p.length}return t}_atApplyToCssProperties(t,e){t=t.replace(En,"");let n=[],o=this._map.get(t);if(o||(this._map.set(t,{}),o=this._map.get(t)),o){let r,i,s;this._currentElement&&(o.dependants[this._currentElement]=!0);const a=o.properties;for(r in a)s=e&&e[r],i=[r,": var(",t,On,r],s&&i.push(",",s.replace(Tn,"")),i.push(")"),Tn.test(a[r])&&i.push(" !important"),n.push(i.join(""))}return n.join("; ")}_replaceInitialOrInherit(t,e){let n=An.exec(e);return n&&(e=n[1]?this._getInitialValueForProperty(t):"apply-shim-inherit"),e}_cssTextToMap(t,e=!1){let n,o,r=t.split(";"),i={};for(let t,s,a=0;a<r.length;a++)t=r[a],t&&(s=t.split(":"),s.length>1&&(n=s[0].trim(),o=s.slice(1).join(":"),e&&(o=this._replaceInitialOrInherit(n,o)),i[n]=o));return i}_invalidateMixinEntry(t){if(Nn)for(let e in t.dependants)e!==this._currentElement&&Nn(e)}_produceCssProperties(t,e,n,o,r){if(n&&wn(n,(t,e)=>{e&&this._map.get(e)&&(o=`@apply ${e};`)}),!o)return t;let i=this._consumeCssProperties(""+o,r),s=t.slice(0,t.indexOf("--")),a=this._cssTextToMap(i,!0),l=a,c=this._map.get(e),d=c&&c.properties;d?l=Object.assign(Object.create(d),a):this._map.set(e,l);let p,h,u=[],f=!1;for(p in l)h=a[p],void 0===h&&(h="initial"),d&&!(p in d)&&(f=!0),u.push(`${e}${On}${p}: ${h}`);return f&&this._invalidateMixinEntry(c),c&&(c.properties=l),n&&(s=`${t};${s}`),`${s}${u.join("; ")};`}}In.prototype.detectMixin=In.prototype.detectMixin,In.prototype.transformStyle=In.prototype.transformStyle,In.prototype.transformCustomStyle=In.prototype.transformCustomStyle,In.prototype.transformRules=In.prototype.transformRules,In.prototype.transformRule=In.prototype.transformRule,In.prototype.transformTemplate=In.prototype.transformTemplate,In.prototype._separator=On,Object.defineProperty(In.prototype,"invalidCallback",{get:()=>Nn,set(t){Nn=t}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Dn={},Ln="_applyShimCurrentVersion",Mn="_applyShimNextVersion",zn="_applyShimValidatingVersion",Rn=Promise.resolve();
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Fn(t){let e=Dn[t];e&&function(t){t[Ln]=t[Ln]||0,t[zn]=t[zn]||0,t[Mn]=(t[Mn]||0)+1}(e)}function Hn(t){return t[Ln]===t[Mn]}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Bn,jn=null,Un=window.HTMLImports&&window.HTMLImports.whenReady||null;function Vn(t){requestAnimationFrame(function(){Un?Un(t):(jn||(jn=new Promise(t=>{Bn=t}),"complete"===document.readyState?Bn():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&Bn()})),jn.then(function(){t&&t()}))})}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const qn="__seenByShadyCSS",Wn="__shadyCSSCachedStyle";let Kn=null,Jn=null,Yn=class{constructor(){this.customStyles=[],this.enqueued=!1,Vn(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&Jn&&(this.enqueued=!0,Vn(Jn))}addCustomStyle(t){t[qn]||(t[qn]=!0,this.customStyles.push(t),this.enqueueDocumentValidation())}getStyleForCustomStyle(t){if(t[Wn])return t[Wn];let e;return e=t.getStyle?t.getStyle():t,e}processStyles(){const t=this.customStyles;for(let e=0;e<t.length;e++){const n=t[e];if(n[Wn])continue;const o=this.getStyleForCustomStyle(n);if(o){const t=o.__appliedElement||o;Kn&&Kn(t),n[Wn]=t}}return t}};Yn.prototype.addCustomStyle=Yn.prototype.addCustomStyle,Yn.prototype.getStyleForCustomStyle=Yn.prototype.getStyleForCustomStyle,Yn.prototype.processStyles=Yn.prototype.processStyles,Object.defineProperties(Yn.prototype,{transformCallback:{get:()=>Kn,set(t){Kn=t}},validateCallback:{get:()=>Jn,set(t){let e=!1;Jn||(e=!0),Jn=t,e&&this.enqueueDocumentValidation()}}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Gn=new In;class Xn{constructor(){this.customStyleInterface=null,Gn.invalidCallback=Fn}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=t=>{Gn.transformCustomStyle(t)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(t,e){if(this.ensure(),Sn(t))return;Dn[e]=t;let n=Gn.transformTemplate(t,e);t._styleAst=n}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let t=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let e=0;e<t.length;e++){let n=t[e],o=this.customStyleInterface.getStyleForCustomStyle(n);o&&Gn.transformCustomStyle(o)}this.customStyleInterface.enqueued=!1}}styleSubtree(t,e){if(this.ensure(),e&&Pn(t,e),t.shadowRoot){this.styleElement(t);let e=t.shadowRoot.children||t.shadowRoot.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(e[t])}else{let e=t.children||t.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(e[t])}}styleElement(t){this.ensure();let{is:e}=function(t){let e=t.localName,n="",o="";return e?e.indexOf("-")>-1?n=e:(o=e,n=t.getAttribute&&t.getAttribute("is")||""):(n=t.is,o=t.extends),{is:n,typeExtension:o}}(t),n=Dn[e];if((!n||!Sn(n))&&n&&!Hn(n)){(function(t){return!Hn(t)&&t[zn]===t[Mn]})(n)||(this.prepareTemplate(n,e),function(t){t[zn]=t[Mn],t._validating||(t._validating=!0,Rn.then(function(){t[Ln]=t[Mn],t._validating=!1}))}(n));let o=t.shadowRoot;if(o){let t=o.querySelector("style");t&&(t.__cssRules=n._styleAst,t.textContent=yn(n._styleAst))}}}styleDocument(t){this.ensure(),this.styleSubtree(document.body,t)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const t=new Xn;let e=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(e,n,o){t.flushCustomStyles(),t.prepareTemplate(e,n)},prepareTemplateStyles(t,e,n){window.ShadyCSS.prepareTemplate(t,e,n)},prepareTemplateDom(t,e){},styleSubtree(e,n){t.flushCustomStyles(),t.styleSubtree(e,n)},styleElement(e){t.flushCustomStyles(),t.styleElement(e)},styleDocument(e){t.flushCustomStyles(),t.styleDocument(e)},getComputedStyleValue:(t,e)=>kn(t,e),flushCustomStyles(){t.flushCustomStyles()},nativeCss:tn,nativeShadow:Ye,cssBuild:Xe,disableRuntime:Qe},e&&(window.ShadyCSS.CustomStyleInterface=e)}window.ShadyCSS.ApplyShim=Gn;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Zn="string"==typeof document.head.style.touchAction,Qn="__polymerGestures",to="__polymerGesturesHandled",eo="__polymerGesturesTouchAction",no=["mousedown","mousemove","mouseup","click"],oo=[0,1,4,2],ro=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}();function io(t){return no.indexOf(t)>-1}let so=!1;function ao(t){if(!io(t)&&"touchend"!==t)return Zn&&so&&f?{passive:!0}:void 0}!function(){try{let t=Object.defineProperty({},"passive",{get(){so=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}}();let lo=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const co=[],po={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},ho={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function uo(t){return po[t.localName]||!1}function fo(t){let e=Array.prototype.slice.call(t.labels||[]);if(!e.length){e=[];try{let n=t.getRootNode();if(t.id){let o=n.querySelectorAll(`label[for = '${t.id}']`);for(let t=0;t<o.length;t++)e.push(o[t])}}catch(t){}}return e}let mo=function(t){let e=t.sourceCapabilities;if((!e||e.firesTouchEvents)&&(t[to]={skip:!0},"click"===t.type)){let e=!1,n=wo(t);for(let t=0;t<n.length;t++){if(n[t].nodeType===Node.ELEMENT_NODE)if("label"===n[t].localName)co.push(n[t]);else if(uo(n[t])){let o=fo(n[t]);for(let t=0;t<o.length;t++)e=e||co.indexOf(o[t])>-1}if(n[t]===yo.mouse.target)return}if(e)return;t.preventDefault(),t.stopPropagation()}};function go(t){let e=lo?["click"]:no;for(let n,o=0;o<e.length;o++)n=e[o],t?(co.length=0,document.addEventListener(n,mo,!0)):document.removeEventListener(n,mo,!0)}function bo(t){let e=t.type;if(!io(e))return!1;if("mousemove"===e){let e=void 0===t.buttons?1:t.buttons;return t instanceof window.MouseEvent&&!ro&&(e=oo[t.which]||0),Boolean(1&e)}return 0===(void 0===t.button?0:t.button)}let yo={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function _o(t,e,n){t.movefn=e,t.upfn=n,document.addEventListener("mousemove",e),document.addEventListener("mouseup",n)}function vo(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}document.addEventListener("touchend",function(t){yo.mouse.mouseIgnoreJob||go(!0),yo.mouse.target=wo(t)[0],yo.mouse.mouseIgnoreJob=ve.debounce(yo.mouse.mouseIgnoreJob,ct.after(2500),function(){go(),yo.mouse.target=null,yo.mouse.mouseIgnoreJob=null})},!!so&&{passive:!0});const wo=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],xo={},Co=[];function So(t){const e=wo(t);return e.length>0?e[0]:t.target}function Po(t){let e,n=t.type,o=t.currentTarget[Qn];if(!o)return;let r=o[n];if(r){if(!t[to]&&(t[to]={},"touch"===n.slice(0,5))){let e=t.changedTouches[0];if("touchstart"===n&&1===t.touches.length&&(yo.touch.id=e.identifier),yo.touch.id!==e.identifier)return;Zn||"touchstart"!==n&&"touchmove"!==n||function(t){let e=t.changedTouches[0],n=t.type;if("touchstart"===n)yo.touch.x=e.clientX,yo.touch.y=e.clientY,yo.touch.scrollDecided=!1;else if("touchmove"===n){if(yo.touch.scrollDecided)return;yo.touch.scrollDecided=!0;let n=function(t){let e="auto",n=wo(t);for(let t,o=0;o<n.length;o++)if(t=n[o],t[eo]){e=t[eo];break}return e}(t),o=!1,r=Math.abs(yo.touch.x-e.clientX),i=Math.abs(yo.touch.y-e.clientY);t.cancelable&&("none"===n?o=!0:"pan-x"===n?o=i>r:"pan-y"===n&&(o=r>i)),o?t.preventDefault():$o("track")}}(t)}if(e=t[to],!e.skip){for(let n,o=0;o<Co.length;o++)n=Co[o],r[n.name]&&!e[n.name]&&n.flow&&n.flow.start.indexOf(t.type)>-1&&n.reset&&n.reset();for(let o,i=0;i<Co.length;i++)o=Co[i],r[o.name]&&!e[o.name]&&(e[o.name]=!0,o[n](t))}}}function ko(t,e,n){return!!xo[e]&&(function(t,e,n){let o=xo[e],r=o.deps,i=o.name,s=t[Qn];s||(t[Qn]=s={});for(let e,n,o=0;o<r.length;o++)e=r[o],lo&&io(e)&&"click"!==e||(n=s[e],n||(s[e]=n={_count:0}),0===n._count&&t.addEventListener(e,Po,ao(e)),n[i]=(n[i]||0)+1,n._count=(n._count||0)+1);t.addEventListener(e,n),o.touchAction&&To(t,o.touchAction)}(t,e,n),!0)}function Eo(t,e,n){return!!xo[e]&&(function(t,e,n){let o=xo[e],r=o.deps,i=o.name,s=t[Qn];if(s)for(let e,n,o=0;o<r.length;o++)e=r[o],n=s[e],n&&n[i]&&(n[i]=(n[i]||1)-1,n._count=(n._count||1)-1,0===n._count&&t.removeEventListener(e,Po,ao(e)));t.removeEventListener(e,n)}(t,e,n),!0)}function Ao(t){Co.push(t);for(let e=0;e<t.emits.length;e++)xo[t.emits[e]]=t}function To(t,e){Zn&&t instanceof HTMLElement&&dt.run(()=>{t.style.touchAction=e}),t[eo]=e}function Oo(t,e,n){let o=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(o.detail=n,j(t).dispatchEvent(o),o.defaultPrevented){let t=n.preventer||n.sourceEvent;t&&t.preventDefault&&t.preventDefault()}}function $o(t){let e=function(t){for(let e,n=0;n<Co.length;n++){e=Co[n];for(let n,o=0;o<e.emits.length;o++)if(n=e.emits[o],n===t)return e}return null}(t);e.info&&(e.info.prevent=!0)}function No(t,e,n,o){e&&Oo(e,t,{x:n.clientX,y:n.clientY,sourceEvent:n,preventer:o,prevent:function(t){return $o(t)}})}function Io(t,e,n){if(t.prevent)return!1;if(t.started)return!0;let o=Math.abs(t.x-e),r=Math.abs(t.y-n);return o>=5||r>=5}function Do(t,e,n){if(!e)return;let o,r=t.moves[t.moves.length-2],i=t.moves[t.moves.length-1],s=i.x-t.x,a=i.y-t.y,l=0;r&&(o=i.x-r.x,l=i.y-r.y),Oo(e,"track",{state:t.state,x:n.clientX,y:n.clientY,dx:s,dy:a,ddx:o,ddy:l,sourceEvent:n,hover:function(){return function(t,e){let n=document.elementFromPoint(t,e),o=n;for(;o&&o.shadowRoot&&!window.ShadyDOM;){let r=o;if(o=o.shadowRoot.elementFromPoint(t,e),r===o)break;o&&(n=o)}return n}(n.clientX,n.clientY)}})}function Lo(t,e,n){let o=Math.abs(e.clientX-t.x),r=Math.abs(e.clientY-t.y),i=So(n||e);!i||ho[i.localName]&&i.hasAttribute("disabled")||(isNaN(o)||isNaN(r)||o<=25&&r<=25||function(t){if("click"===t.type){if(0===t.detail)return!0;let e=So(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;let n=e.getBoundingClientRect(),o=t.pageX,r=t.pageY;return!(o>=n.left&&o<=n.right&&r>=n.top&&r<=n.bottom)}return!1}(e))&&(t.prevent||Oo(i,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:n}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/Ao({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){vo(this.info)},mousedown:function(t){if(!bo(t))return;let e=So(t),n=this;_o(this.info,function(t){bo(t)||(No("up",e,t),vo(n.info))},function(t){bo(t)&&No("up",e,t),vo(n.info)}),No("down",e,t)},touchstart:function(t){No("down",So(t),t.changedTouches[0],t)},touchend:function(t){No("up",So(t),t.changedTouches[0],t)}}),Ao({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(t){this.moves.length>2&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,vo(this.info)},mousedown:function(t){if(!bo(t))return;let e=So(t),n=this,o=function(t){let o=t.clientX,r=t.clientY;Io(n.info,o,r)&&(n.info.state=n.info.started?"mouseup"===t.type?"end":"track":"start","start"===n.info.state&&$o("tap"),n.info.addMove({x:o,y:r}),bo(t)||(n.info.state="end",vo(n.info)),e&&Do(n.info,e,t),n.info.started=!0)};_o(this.info,o,function(t){n.info.started&&o(t),vo(n.info)}),this.info.x=t.clientX,this.info.y=t.clientY},touchstart:function(t){let e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(t){let e=So(t),n=t.changedTouches[0],o=n.clientX,r=n.clientY;Io(this.info,o,r)&&("start"===this.info.state&&$o("tap"),this.info.addMove({x:o,y:r}),Do(this.info,e,n),this.info.state="track",this.info.started=!0)},touchend:function(t){let e=So(t),n=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:n.clientX,y:n.clientY}),Do(this.info,e,n))}}),Ao({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(t){bo(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click:function(t){bo(t)&&Lo(this.info,t)},touchstart:function(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(t){Lo(this.info,t.changedTouches[0],t)}});const Mo=A(t=>class extends t{_addEventListenerToNode(t,e,n){ko(t,e,n)||super._addEventListenerToNode(t,e,n)}_removeEventListenerFromNode(t,e,n){Eo(t,e,n)||super._removeEventListenerFromNode(t,e,n)}}),zo=/:host\(:dir\((ltr|rtl)\)\)/g,Ro=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,Fo=/:dir\((?:ltr|rtl)\)/,Ho=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),Bo=[];
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let jo=null,Uo="";function Vo(){Uo=document.documentElement.getAttribute("dir")}function qo(t){if(!t.__autoDirOptOut){t.setAttribute("dir",Uo)}}function Wo(){Vo(),Uo=document.documentElement.getAttribute("dir");for(let t=0;t<Bo.length;t++)qo(Bo[t])}const Ko=A(t=>{Ho||jo||(Vo(),jo=new MutationObserver(Wo),jo.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const e=gt(t);class n extends e{static _processStyleText(t,n){return t=e._processStyleText.call(this,t,n),!Ho&&Fo.test(t)&&(t=this._replaceDirInCssText(t),this.__activateDir=!0),t}static _replaceDirInCssText(t){let e=t;return e=e.replace(zo,':host([dir="$1"])'),e=e.replace(Ro,':host([dir="$2"]) $1'),e}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){e.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(jo&&jo.takeRecords().length&&Wo(),Bo.push(this),qo(this))}disconnectedCallback(){if(e.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const t=Bo.indexOf(this);t>-1&&Bo.splice(t,1)}}}return n.__activateDir=!1,n});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Jo(){document.body.removeAttribute("unresolved")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function Yo(t,e,n){return{index:t,removed:e,addedCount:n}}"interactive"===document.readyState||"complete"===document.readyState?Jo():window.addEventListener("DOMContentLoaded",Jo);function Go(t,e,n,o,r,i){let s,a=0,l=0,c=Math.min(n-e,i-r);if(0==e&&0==r&&(a=function(t,e,n){for(let o=0;o<n;o++)if(!Zo(t[o],e[o]))return o;return n}(t,o,c)),n==t.length&&i==o.length&&(l=function(t,e,n){let o=t.length,r=e.length,i=0;for(;i<n&&Zo(t[--o],e[--r]);)i++;return i}(t,o,c-a)),r+=a,i-=l,(n-=l)-(e+=a)==0&&i-r==0)return[];if(e==n){for(s=Yo(e,[],0);r<i;)s.removed.push(o[r++]);return[s]}if(r==i)return[Yo(e,[],n-e)];let d=function(t){let e=t.length-1,n=t[0].length-1,o=t[e][n],r=[];for(;e>0||n>0;){if(0==e){r.push(2),n--;continue}if(0==n){r.push(3),e--;continue}let i,s=t[e-1][n-1],a=t[e-1][n],l=t[e][n-1];i=a<l?a<s?a:s:l<s?l:s,i==s?(s==o?r.push(0):(r.push(1),o=s),e--,n--):i==a?(r.push(3),e--,o=a):(r.push(2),n--,o=l)}return r.reverse(),r}(function(t,e,n,o,r,i){let s=i-r+1,a=n-e+1,l=new Array(s);for(let t=0;t<s;t++)l[t]=new Array(a),l[t][0]=t;for(let t=0;t<a;t++)l[0][t]=t;for(let n=1;n<s;n++)for(let i=1;i<a;i++)if(Zo(t[e+i-1],o[r+n-1]))l[n][i]=l[n-1][i-1];else{let t=l[n-1][i]+1,e=l[n][i-1]+1;l[n][i]=t<e?t:e}return l}(t,e,n,o,r,i));s=void 0;let p=[],h=e,u=r;for(let t=0;t<d.length;t++)switch(d[t]){case 0:s&&(p.push(s),s=void 0),h++,u++;break;case 1:s||(s=Yo(h,[],0)),s.addedCount++,h++,s.removed.push(o[u]),u++;break;case 2:s||(s=Yo(h,[],0)),s.addedCount++,h++;break;case 3:s||(s=Yo(h,[],0)),s.removed.push(o[u]),u++}return s&&p.push(s),p}function Xo(t,e){return Go(t,0,t.length,e,0,e.length)}function Zo(t,e){return t===e}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Qo(t){return"slot"===t.localName}let tr=class{static getFlattenedNodes(t){const e=j(t);if(Qo(t))return e.assignedNodes({flatten:!0});{const t=[];for(let n=0;n<e.childNodes.length;n++){const o=e.childNodes[n];if(Qo(o)){const e=o;t.push(...j(e).assignedNodes({flatten:!0}))}else t.push(o)}return t}}constructor(t,e){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=t,this.callback=e,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){Qo(this._target)?this._listenSlots([this._target]):j(this._target).children&&(this._listenSlots(j(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,t=>{this._processMutations(t)}):(this._nativeChildrenObserver=new MutationObserver(t=>{this._processMutations(t)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){Qo(this._target)?this._unlistenSlots([this._target]):j(this._target).children&&(this._unlistenSlots(j(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,dt.run(()=>this.flush()))}_processMutations(t){this._processSlotMutations(t),this.flush()}_processSlotMutations(t){if(t)for(let e=0;e<t.length;e++){let n=t[e];n.addedNodes&&this._listenSlots(n.addedNodes),n.removedNodes&&this._unlistenSlots(n.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let t={target:this._target,addedNodes:[],removedNodes:[]},e=this.constructor.getFlattenedNodes(this._target),n=Xo(e,this._effectiveNodes);for(let e,o=0;o<n.length&&(e=n[o]);o++)for(let n,o=0;o<e.removed.length&&(n=e.removed[o]);o++)t.removedNodes.push(n);for(let o,r=0;r<n.length&&(o=n[r]);r++)for(let n=o.index;n<o.index+o.addedCount;n++)t.addedNodes.push(e[n]);this._effectiveNodes=e;let o=!1;return(t.addedNodes.length||t.removedNodes.length)&&(o=!0,this.callback.call(this._target,t)),o}_listenSlots(t){for(let e=0;e<t.length;e++){let n=t[e];Qo(n)&&n.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(t){for(let e=0;e<t.length;e++){let n=t[e];Qo(n)&&n.removeEventListener("slotchange",this._boundSchedule)}}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const er=Element.prototype,nr=er.matches||er.matchesSelector||er.mozMatchesSelector||er.msMatchesSelector||er.oMatchesSelector||er.webkitMatchesSelector,or=function(t,e){return nr.call(t,e)};class rr{constructor(t){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(t),this.node=t}observeNodes(t){return new tr(this.node,t)}unobserveNodes(t){t.disconnect()}notifyObserver(){}deepContains(t){if(j(this.node).contains(t))return!0;let e=t,n=t.ownerDocument;for(;e&&e!==n&&e!==this.node;)e=j(e).parentNode||j(e).host;return e===this.node}getOwnerRoot(){return j(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?j(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let t=[],e=j(this.node).assignedSlot;for(;e;)t.push(e),e=j(e).assignedSlot;return t}importNode(t,e){let n=this.node instanceof Document?this.node:this.node.ownerDocument;return j(n).importNode(t,e)}getEffectiveChildNodes(){return tr.getFlattenedNodes(this.node)}queryDistributedElements(t){let e=this.getEffectiveChildNodes(),n=[];for(let o,r=0,i=e.length;r<i&&(o=e[r]);r++)o.nodeType===Node.ELEMENT_NODE&&or(o,t)&&n.push(o);return n}get activeElement(){let t=this.node;return void 0!==t._activeElement?t._activeElement:t.activeElement}}function ir(t,e){for(let n=0;n<e.length;n++){let o=e[n];Object.defineProperty(t,o,{get:function(){return this.node[o]},configurable:!0})}}class sr{constructor(t){this.event=t}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}rr.prototype.cloneNode,rr.prototype.appendChild,rr.prototype.insertBefore,rr.prototype.removeChild,rr.prototype.replaceChild,rr.prototype.setAttribute,rr.prototype.removeAttribute,rr.prototype.querySelector,rr.prototype.querySelectorAll,rr.prototype.parentNode,rr.prototype.firstChild,rr.prototype.lastChild,rr.prototype.nextSibling,rr.prototype.previousSibling,rr.prototype.firstElementChild,rr.prototype.lastElementChild,rr.prototype.nextElementSibling,rr.prototype.previousElementSibling,rr.prototype.childNodes,rr.prototype.children,rr.prototype.classList,rr.prototype.textContent,rr.prototype.innerHTML;let ar=rr;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class t extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(rr.prototype).forEach(e=>{"activeElement"!=e&&(t.prototype[e]=rr.prototype[e])}),ir(t.prototype,["classList"]),ar=t,Object.defineProperties(sr.prototype,{localTarget:{get(){const t=this.event.currentTarget,e=t&&lr(t).getOwnerRoot(),n=this.path;for(let t=0;t<n.length;t++){const o=n[t];if(lr(o).getOwnerRoot()===e)return o}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(t,e){for(let n=0;n<e.length;n++){let o=e[n];t[o]=function(){return this.node[o].apply(this.node,arguments)}}}(rr.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll","attachShadow"]),ir(rr.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList","shadowRoot"]),function(t,e){for(let n=0;n<e.length;n++){let o=e[n];Object.defineProperty(t,o,{get:function(){return this.node[o]},set:function(t){this.node[o]=t},configurable:!0})}}(rr.prototype,["textContent","innerHTML","className"]);const lr=function(t){if((t=t||document)instanceof ar)return t;if(t instanceof sr)return t;let e=t.__domApi;return e||(e=t instanceof Event?new sr(t):new ar(t),t.__domApi=e),e},cr=window.ShadyDOM,dr=window.ShadyCSS;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function pr(t,e){return j(t).getRootNode()===e}
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
const hr="disable-upgrade",ur=t=>{for(;t;){const e=Object.getOwnPropertyDescriptor(t,"observedAttributes");if(e)return e.get;t=Object.getPrototypeOf(t.prototype).constructor}return()=>[]};A(t=>{const e=ue(t);let n=ur(e);return class extends e{constructor(){super(),this.__isUpgradeDisabled}static get observedAttributes(){return n.call(this).concat(hr)}_initializeProperties(){this.hasAttribute(hr)?this.__isUpgradeDisabled=!0:super._initializeProperties()}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(t){return super._canApplyPropertyDefault(t)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(t))}attributeChangedCallback(t,e,n,o){t==hr?this.__isUpgradeDisabled&&null==n&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,j(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(t,e,n,o)}connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const fr="disable-upgrade";let mr=window.ShadyCSS;const gr=A(t=>{const e=Mo(ue(t)),n=he?e:Ko(e),o=ur(n),r={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class i extends n{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this.__isUpgradeDisabled,this.__needsAttributesAtConnected,this._legacyForceObservedAttributes}static get importMeta(){return this.prototype.importMeta}created(){}__attributeReaction(t,e,n){(this.__dataAttributes&&this.__dataAttributes[t]||t===fr)&&this.attributeChangedCallback(t,e,n,null)}setAttribute(t,e){if(P&&!this._legacyForceObservedAttributes){const n=this.getAttribute(t);super.setAttribute(t,e),this.__attributeReaction(t,n,String(e))}else super.setAttribute(t,e)}removeAttribute(t){if(P&&!this._legacyForceObservedAttributes){const e=this.getAttribute(t);super.removeAttribute(t),this.__attributeReaction(t,e,null)}else super.removeAttribute(t)}static get observedAttributes(){return P&&!this.prototype._legacyForceObservedAttributes?(this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))||(this.__observedAttributes=[],this.prototype),this.__observedAttributes):o.call(this).concat(fr)}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(t){return super._canApplyPropertyDefault(t)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(t))}connectedCallback(){this.__needsAttributesAtConnected&&this._takeAttributes(),this.__isUpgradeDisabled||(super.connectedCallback(),this.isAttached=!0,this.attached())}attached(){}disconnectedCallback(){this.__isUpgradeDisabled||(super.disconnectedCallback(),this.isAttached=!1,this.detached())}detached(){}attributeChangedCallback(t,e,n,o){e!==n&&(t==fr?this.__isUpgradeDisabled&&null==n&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,j(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(t,e,n,o),this.attributeChanged(t,e,n)))}attributeChanged(t,e,n){}_initializeProperties(){if(b&&this.hasAttribute(fr))this.__isUpgradeDisabled=!0;else{let t=Object.getPrototypeOf(this);t.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",t))||(this._registered(),t.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),P&&!this._legacyForceObservedAttributes&&(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0)),this._applyListeners()}}_takeAttributes(){const t=this.attributes;for(let e=0,n=t.length;e<n;e++){const n=t[e];this.__attributeReaction(n.name,null,n.value)}}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(t){return this._serializeValue(t)}deserialize(t,e){return this._deserializeValue(t,e)}reflectPropertyToAttribute(t,e,n){this._propertyToAttribute(t,e,n)}serializeValueToAttribute(t,e,n){this._valueToNodeAttribute(n||this,t,e)}extend(t,e){if(!t||!e)return t||e;let n=Object.getOwnPropertyNames(e);for(let o,r=0;r<n.length&&(o=n[r]);r++){let n=Object.getOwnPropertyDescriptor(e,o);n&&Object.defineProperty(t,o,n)}return t}mixin(t,e){for(let n in e)t[n]=e[n];return t}chainObject(t,e){return t&&e&&t!==e&&(t.__proto__=e),t}instanceTemplate(t){let e=this.constructor._contentForTemplate(t);return document.importNode(e,!0)}fire(t,e,n){n=n||{},e=null==e?{}:e;let o=new Event(t,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});o.detail=e;let r=n.node||this;return j(r).dispatchEvent(o),o}listen(t,e,n){t=t||this;let o=this.__boundListeners||(this.__boundListeners=new WeakMap),r=o.get(t);r||(r={},o.set(t,r));let i=e+n;r[i]||(r[i]=this._addMethodEventListenerToNode(t,e,n,this))}unlisten(t,e,n){t=t||this;let o=this.__boundListeners&&this.__boundListeners.get(t),r=e+n,i=o&&o[r];i&&(this._removeEventListenerFromNode(t,e,i),o[r]=null)}setScrollDirection(t,e){To(e||this,r[t]||"auto")}$$(t){return this.root.querySelector(t)}get domHost(){let t=j(this).getRootNode();return t instanceof DocumentFragment?t.host:t}distributeContent(){const t=lr(this);window.ShadyDOM&&t.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return lr(this).getEffectiveChildNodes()}queryDistributedElements(t){return lr(this).queryDistributedElements(t)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter(function(t){return t.nodeType===Node.ELEMENT_NODE})}getEffectiveTextContent(){let t=this.getEffectiveChildNodes(),e=[];for(let n,o=0;n=t[o];o++)n.nodeType!==Node.COMMENT_NODE&&e.push(n.textContent);return e.join("")}queryEffectiveChildren(t){let e=this.queryDistributedElements(t);return e&&e[0]}queryAllEffectiveChildren(t){return this.queryDistributedElements(t)}getContentChildNodes(t){let e=this.root.querySelector(t||"slot");return e?lr(e).getDistributedNodes():[]}getContentChildren(t){let e=this.getContentChildNodes(t).filter(function(t){return t.nodeType===Node.ELEMENT_NODE});return e}isLightDescendant(t){const e=this;return e!==t&&j(e).contains(t)&&j(e).getRootNode()===j(t).getRootNode()}isLocalDescendant(t){return this.root===j(t).getRootNode()}scopeSubtree(t,e=!1){return function(t,e=!1){if(!cr||!dr)return null;if(!cr.handlesDynamicScoping)return null;const n=dr.ScopingShim;if(!n)return null;const o=n.scopeForNode(t),r=j(t).getRootNode(),i=t=>{if(!pr(t,r))return;const e=Array.from(cr.nativeMethods.querySelectorAll.call(t,"*"));e.push(t);for(let t=0;t<e.length;t++){const i=e[t];if(!pr(i,r))continue;const s=n.currentScopeForNode(i);s!==o&&(""!==s&&n.unscopeNode(i,s),n.scopeNode(i,o))}};if(i(t),e){const e=new MutationObserver(t=>{for(let e=0;e<t.length;e++){const n=t[e];for(let t=0;t<n.addedNodes.length;t++){const e=n.addedNodes[t];e.nodeType===Node.ELEMENT_NODE&&i(e)}}});return e.observe(t,{childList:!0,subtree:!0}),e}return null}(t,e)}getComputedStyleValue(t){return mr.getComputedStyleValue(this,t)}debounce(t,e,n){return this._debouncers=this._debouncers||{},this._debouncers[t]=ve.debounce(this._debouncers[t],n>0?ct.after(n):dt,e.bind(this))}isDebouncerActive(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];return!(!e||!e.isActive())}flushDebouncer(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];e&&e.flush()}cancelDebouncer(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];e&&e.cancel()}async(t,e){return e>0?ct.run(t.bind(this),e):~dt.run(t.bind(this))}cancelAsync(t){t<0?dt.cancel(~t):ct.cancel(t)}create(t,e){let n=document.createElement(t);if(e)if(n.setProperties)n.setProperties(e);else for(let t in e)n[t]=e[t];return n}elementMatches(t,e){return or(e||this,t)}toggleAttribute(t,e){let n=this;return 3===arguments.length&&(n=arguments[2]),1==arguments.length&&(e=!n.hasAttribute(t)),e?(j(n).setAttribute(t,""),!0):(j(n).removeAttribute(t),!1)}toggleClass(t,e,n){n=n||this,1==arguments.length&&(e=!n.classList.contains(t)),e?n.classList.add(t):n.classList.remove(t)}transform(t,e){(e=e||this).style.webkitTransform=t,e.style.transform=t}translate3d(t,e,n,o){o=o||this,this.transform("translate3d("+t+","+e+","+n+")",o)}arrayDelete(t,e){let n;if(Array.isArray(t)){if(n=t.indexOf(e),n>=0)return t.splice(n,1)}else{if(n=G(this,t).indexOf(e),n>=0)return this.splice(t,n,1)}return null}_logger(t,e){switch(Array.isArray(e)&&1===e.length&&Array.isArray(e[0])&&(e=e[0]),t){case"log":case"warn":case"error":console[t](...e)}}_log(...t){this._logger("log",t)}_warn(...t){this._logger("warn",t)}_error(...t){this._logger("error",t)}_logf(t,...e){return["[%s::%s]",this.is,t,...e]}}return i.prototype.is="",i});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},{attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0}),gr(HTMLElement);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const br=Mo(Te(ce(HTMLElement)));customElements.define("dom-bind",class extends br{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),m)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(t,e,n,o){this.mutableData=!0}connectedCallback(){ke()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){j(j(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let t=0;t<this.__children.length;t++)this.root.appendChild(this.__children[t])}render(){let t;if(!this.__children){if(t=t||this.querySelector("template"),!t){let e=new MutationObserver(()=>{if(t=this.querySelector("template"),!t)throw new Error("dom-bind requires a <template> child");e.disconnect(),this.render()});return void e.observe(this,{childList:!0})}this.root=this._stampTemplate(t),this.$=this.root.$,this.__children=[];for(let t=this.root.firstChild;t;t=t.nextSibling)this.__children[this.__children.length]=t;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let yr=A(t=>{let e=ue(t);return class extends e{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(t,e){let n=e.path;if(n==JSCompiler_renameProperty("items",this)){let n=e.base||[],o=this.__lastItems;if(t!==this.__lastMulti&&this.clearSelection(),o){let t=Xo(n,o);this.__applySplices(t)}this.__lastItems=n,this.__lastMulti=t}else if(e.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(e.value.indexSplices);else{let t=n.slice(`${JSCompiler_renameProperty("items",this)}.`.length),e=parseInt(t,10);t.indexOf(".")<0&&t==e&&this.__deselectChangedIdx(e)}}__applySplices(t){let e=this.__selectedMap;for(let n=0;n<t.length;n++){let o=t[n];e.forEach((t,n)=>{t<o.index||(t>=o.index+o.removed.length?e.set(n,t+o.addedCount-o.removed.length):e.set(n,-1))});for(let t=0;t<o.addedCount;t++){let n=o.index+t;e.has(this.items[n])&&e.set(this.items[n],n)}}this.__updateLinks();let n=0;e.forEach((t,o)=>{t<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),n,1):this.selected=this.selectedItem=null,e.delete(o)):n++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let t=0;this.__selectedMap.forEach(e=>{e>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${e}`,`${JSCompiler_renameProperty("selected",this)}.${t++}`)})}else this.__selectedMap.forEach(t=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${t}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${t}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(t){return this.__selectedMap.has(t)}isIndexSelected(t){return this.isSelected(this.items[t])}__deselectChangedIdx(t){let e=this.__selectedIndexForItemIndex(t);if(e>=0){let t=0;this.__selectedMap.forEach((n,o)=>{e==t++&&this.deselect(o)})}}__selectedIndexForItemIndex(t){let e=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${t}`];if(e)return parseInt(e.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(t){let e=this.__selectedMap.get(t);if(e>=0){let n;this.__selectedMap.delete(t),this.multi&&(n=this.__selectedIndexForItemIndex(e)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),n,1):this.selected=this.selectedItem=null}}deselectIndex(t){this.deselect(this.items[t])}select(t){this.selectIndex(this.items.indexOf(t))}selectIndex(t){let e=this.items[t];this.isSelected(e)?this.toggle&&this.deselectIndex(t):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(e,t),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),e):this.selected=this.selectedItem=e)}}}),_r=yr(_e);class vr extends _r{static get is(){return"array-selector"}static get template(){return null}}customElements.define(vr.is,vr);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const wr=new Yn;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(t,e,n){},prepareTemplateDom(t,e){},prepareTemplateStyles(t,e,n){},styleSubtree(t,e){wr.processStyles(),Pn(t,e)},styleElement(t){wr.processStyles()},styleDocument(t){wr.processStyles(),Pn(document.body,t)},getComputedStyleValue:(t,e)=>kn(t,e),flushCustomStyles(){},nativeCss:tn,nativeShadow:Ye,cssBuild:Xe,disableRuntime:Qe}),window.ShadyCSS.CustomStyleInterface=wr;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const xr="include",Cr=window.ShadyCSS.CustomStyleInterface;class Sr extends HTMLElement{constructor(){super(),this._style=null,Cr.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const t=this.querySelector("style");if(!t)return null;this._style=t;const e=t.getAttribute(xr);return e&&(t.removeAttribute(xr),t.textContent=function(t){let e=t.trim().split(/\s+/),n="";for(let t=0;t<e.length;t++)n+=B(e[t]);return n}(e)+t.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",Sr),
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
gr(HTMLElement).prototype;
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Pr=be`
<custom-style>
  <style is="custom-style">
    html {

      /* Material Design color palette for Google products */

      --google-red-100: #f4c7c3;
      --google-red-300: #e67c73;
      --google-red-500: #db4437;
      --google-red-700: #c53929;

      --google-blue-100: #c6dafc;
      --google-blue-300: #7baaf7;
      --google-blue-500: #4285f4;
      --google-blue-700: #3367d6;

      --google-green-100: #b7e1cd;
      --google-green-300: #57bb8a;
      --google-green-500: #0f9d58;
      --google-green-700: #0b8043;

      --google-yellow-100: #fce8b2;
      --google-yellow-300: #f7cb4d;
      --google-yellow-500: #f4b400;
      --google-yellow-700: #f09300;

      --google-grey-100: #f5f5f5;
      --google-grey-300: #e0e0e0;
      --google-grey-500: #9e9e9e;
      --google-grey-700: #616161;

      /* Material Design color palette from online spec document */

      --paper-red-50: #ffebee;
      --paper-red-100: #ffcdd2;
      --paper-red-200: #ef9a9a;
      --paper-red-300: #e57373;
      --paper-red-400: #ef5350;
      --paper-red-500: #f44336;
      --paper-red-600: #e53935;
      --paper-red-700: #d32f2f;
      --paper-red-800: #c62828;
      --paper-red-900: #b71c1c;
      --paper-red-a100: #ff8a80;
      --paper-red-a200: #ff5252;
      --paper-red-a400: #ff1744;
      --paper-red-a700: #d50000;

      --paper-pink-50: #fce4ec;
      --paper-pink-100: #f8bbd0;
      --paper-pink-200: #f48fb1;
      --paper-pink-300: #f06292;
      --paper-pink-400: #ec407a;
      --paper-pink-500: #e91e63;
      --paper-pink-600: #d81b60;
      --paper-pink-700: #c2185b;
      --paper-pink-800: #ad1457;
      --paper-pink-900: #880e4f;
      --paper-pink-a100: #ff80ab;
      --paper-pink-a200: #ff4081;
      --paper-pink-a400: #f50057;
      --paper-pink-a700: #c51162;

      --paper-purple-50: #f3e5f5;
      --paper-purple-100: #e1bee7;
      --paper-purple-200: #ce93d8;
      --paper-purple-300: #ba68c8;
      --paper-purple-400: #ab47bc;
      --paper-purple-500: #9c27b0;
      --paper-purple-600: #8e24aa;
      --paper-purple-700: #7b1fa2;
      --paper-purple-800: #6a1b9a;
      --paper-purple-900: #4a148c;
      --paper-purple-a100: #ea80fc;
      --paper-purple-a200: #e040fb;
      --paper-purple-a400: #d500f9;
      --paper-purple-a700: #aa00ff;

      --paper-deep-purple-50: #ede7f6;
      --paper-deep-purple-100: #d1c4e9;
      --paper-deep-purple-200: #b39ddb;
      --paper-deep-purple-300: #9575cd;
      --paper-deep-purple-400: #7e57c2;
      --paper-deep-purple-500: #673ab7;
      --paper-deep-purple-600: #5e35b1;
      --paper-deep-purple-700: #512da8;
      --paper-deep-purple-800: #4527a0;
      --paper-deep-purple-900: #311b92;
      --paper-deep-purple-a100: #b388ff;
      --paper-deep-purple-a200: #7c4dff;
      --paper-deep-purple-a400: #651fff;
      --paper-deep-purple-a700: #6200ea;

      --paper-indigo-50: #e8eaf6;
      --paper-indigo-100: #c5cae9;
      --paper-indigo-200: #9fa8da;
      --paper-indigo-300: #7986cb;
      --paper-indigo-400: #5c6bc0;
      --paper-indigo-500: #3f51b5;
      --paper-indigo-600: #3949ab;
      --paper-indigo-700: #303f9f;
      --paper-indigo-800: #283593;
      --paper-indigo-900: #1a237e;
      --paper-indigo-a100: #8c9eff;
      --paper-indigo-a200: #536dfe;
      --paper-indigo-a400: #3d5afe;
      --paper-indigo-a700: #304ffe;

      --paper-blue-50: #e3f2fd;
      --paper-blue-100: #bbdefb;
      --paper-blue-200: #90caf9;
      --paper-blue-300: #64b5f6;
      --paper-blue-400: #42a5f5;
      --paper-blue-500: #2196f3;
      --paper-blue-600: #1e88e5;
      --paper-blue-700: #1976d2;
      --paper-blue-800: #1565c0;
      --paper-blue-900: #0d47a1;
      --paper-blue-a100: #82b1ff;
      --paper-blue-a200: #448aff;
      --paper-blue-a400: #2979ff;
      --paper-blue-a700: #2962ff;

      --paper-light-blue-50: #e1f5fe;
      --paper-light-blue-100: #b3e5fc;
      --paper-light-blue-200: #81d4fa;
      --paper-light-blue-300: #4fc3f7;
      --paper-light-blue-400: #29b6f6;
      --paper-light-blue-500: #03a9f4;
      --paper-light-blue-600: #039be5;
      --paper-light-blue-700: #0288d1;
      --paper-light-blue-800: #0277bd;
      --paper-light-blue-900: #01579b;
      --paper-light-blue-a100: #80d8ff;
      --paper-light-blue-a200: #40c4ff;
      --paper-light-blue-a400: #00b0ff;
      --paper-light-blue-a700: #0091ea;

      --paper-cyan-50: #e0f7fa;
      --paper-cyan-100: #b2ebf2;
      --paper-cyan-200: #80deea;
      --paper-cyan-300: #4dd0e1;
      --paper-cyan-400: #26c6da;
      --paper-cyan-500: #00bcd4;
      --paper-cyan-600: #00acc1;
      --paper-cyan-700: #0097a7;
      --paper-cyan-800: #00838f;
      --paper-cyan-900: #006064;
      --paper-cyan-a100: #84ffff;
      --paper-cyan-a200: #18ffff;
      --paper-cyan-a400: #00e5ff;
      --paper-cyan-a700: #00b8d4;

      --paper-teal-50: #e0f2f1;
      --paper-teal-100: #b2dfdb;
      --paper-teal-200: #80cbc4;
      --paper-teal-300: #4db6ac;
      --paper-teal-400: #26a69a;
      --paper-teal-500: #009688;
      --paper-teal-600: #00897b;
      --paper-teal-700: #00796b;
      --paper-teal-800: #00695c;
      --paper-teal-900: #004d40;
      --paper-teal-a100: #a7ffeb;
      --paper-teal-a200: #64ffda;
      --paper-teal-a400: #1de9b6;
      --paper-teal-a700: #00bfa5;

      --paper-green-50: #e8f5e9;
      --paper-green-100: #c8e6c9;
      --paper-green-200: #a5d6a7;
      --paper-green-300: #81c784;
      --paper-green-400: #66bb6a;
      --paper-green-500: #4caf50;
      --paper-green-600: #43a047;
      --paper-green-700: #388e3c;
      --paper-green-800: #2e7d32;
      --paper-green-900: #1b5e20;
      --paper-green-a100: #b9f6ca;
      --paper-green-a200: #69f0ae;
      --paper-green-a400: #00e676;
      --paper-green-a700: #00c853;

      --paper-light-green-50: #f1f8e9;
      --paper-light-green-100: #dcedc8;
      --paper-light-green-200: #c5e1a5;
      --paper-light-green-300: #aed581;
      --paper-light-green-400: #9ccc65;
      --paper-light-green-500: #8bc34a;
      --paper-light-green-600: #7cb342;
      --paper-light-green-700: #689f38;
      --paper-light-green-800: #558b2f;
      --paper-light-green-900: #33691e;
      --paper-light-green-a100: #ccff90;
      --paper-light-green-a200: #b2ff59;
      --paper-light-green-a400: #76ff03;
      --paper-light-green-a700: #64dd17;

      --paper-lime-50: #f9fbe7;
      --paper-lime-100: #f0f4c3;
      --paper-lime-200: #e6ee9c;
      --paper-lime-300: #dce775;
      --paper-lime-400: #d4e157;
      --paper-lime-500: #cddc39;
      --paper-lime-600: #c0ca33;
      --paper-lime-700: #afb42b;
      --paper-lime-800: #9e9d24;
      --paper-lime-900: #827717;
      --paper-lime-a100: #f4ff81;
      --paper-lime-a200: #eeff41;
      --paper-lime-a400: #c6ff00;
      --paper-lime-a700: #aeea00;

      --paper-yellow-50: #fffde7;
      --paper-yellow-100: #fff9c4;
      --paper-yellow-200: #fff59d;
      --paper-yellow-300: #fff176;
      --paper-yellow-400: #ffee58;
      --paper-yellow-500: #ffeb3b;
      --paper-yellow-600: #fdd835;
      --paper-yellow-700: #fbc02d;
      --paper-yellow-800: #f9a825;
      --paper-yellow-900: #f57f17;
      --paper-yellow-a100: #ffff8d;
      --paper-yellow-a200: #ffff00;
      --paper-yellow-a400: #ffea00;
      --paper-yellow-a700: #ffd600;

      --paper-amber-50: #fff8e1;
      --paper-amber-100: #ffecb3;
      --paper-amber-200: #ffe082;
      --paper-amber-300: #ffd54f;
      --paper-amber-400: #ffca28;
      --paper-amber-500: #ffc107;
      --paper-amber-600: #ffb300;
      --paper-amber-700: #ffa000;
      --paper-amber-800: #ff8f00;
      --paper-amber-900: #ff6f00;
      --paper-amber-a100: #ffe57f;
      --paper-amber-a200: #ffd740;
      --paper-amber-a400: #ffc400;
      --paper-amber-a700: #ffab00;

      --paper-orange-50: #fff3e0;
      --paper-orange-100: #ffe0b2;
      --paper-orange-200: #ffcc80;
      --paper-orange-300: #ffb74d;
      --paper-orange-400: #ffa726;
      --paper-orange-500: #ff9800;
      --paper-orange-600: #fb8c00;
      --paper-orange-700: #f57c00;
      --paper-orange-800: #ef6c00;
      --paper-orange-900: #e65100;
      --paper-orange-a100: #ffd180;
      --paper-orange-a200: #ffab40;
      --paper-orange-a400: #ff9100;
      --paper-orange-a700: #ff6500;

      --paper-deep-orange-50: #fbe9e7;
      --paper-deep-orange-100: #ffccbc;
      --paper-deep-orange-200: #ffab91;
      --paper-deep-orange-300: #ff8a65;
      --paper-deep-orange-400: #ff7043;
      --paper-deep-orange-500: #ff5722;
      --paper-deep-orange-600: #f4511e;
      --paper-deep-orange-700: #e64a19;
      --paper-deep-orange-800: #d84315;
      --paper-deep-orange-900: #bf360c;
      --paper-deep-orange-a100: #ff9e80;
      --paper-deep-orange-a200: #ff6e40;
      --paper-deep-orange-a400: #ff3d00;
      --paper-deep-orange-a700: #dd2c00;

      --paper-brown-50: #efebe9;
      --paper-brown-100: #d7ccc8;
      --paper-brown-200: #bcaaa4;
      --paper-brown-300: #a1887f;
      --paper-brown-400: #8d6e63;
      --paper-brown-500: #795548;
      --paper-brown-600: #6d4c41;
      --paper-brown-700: #5d4037;
      --paper-brown-800: #4e342e;
      --paper-brown-900: #3e2723;

      --paper-grey-50: #fafafa;
      --paper-grey-100: #f5f5f5;
      --paper-grey-200: #eeeeee;
      --paper-grey-300: #e0e0e0;
      --paper-grey-400: #bdbdbd;
      --paper-grey-500: #9e9e9e;
      --paper-grey-600: #757575;
      --paper-grey-700: #616161;
      --paper-grey-800: #424242;
      --paper-grey-900: #212121;

      --paper-blue-grey-50: #eceff1;
      --paper-blue-grey-100: #cfd8dc;
      --paper-blue-grey-200: #b0bec5;
      --paper-blue-grey-300: #90a4ae;
      --paper-blue-grey-400: #78909c;
      --paper-blue-grey-500: #607d8b;
      --paper-blue-grey-600: #546e7a;
      --paper-blue-grey-700: #455a64;
      --paper-blue-grey-800: #37474f;
      --paper-blue-grey-900: #263238;

      /* opacity for dark text on a light background */
      --dark-divider-opacity: 0.12;
      --dark-disabled-opacity: 0.38; /* or hint text or icon */
      --dark-secondary-opacity: 0.54;
      --dark-primary-opacity: 0.87;

      /* opacity for light text on a dark background */
      --light-divider-opacity: 0.12;
      --light-disabled-opacity: 0.3; /* or hint text or icon */
      --light-secondary-opacity: 0.7;
      --light-primary-opacity: 1.0;

    }

  </style>
</custom-style>
`;Pr.setAttribute("style","display: none;"),document.head.appendChild(Pr.content);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const kr=globalThis,Er=kr.ShadowRoot&&(void 0===kr.ShadyCSS||kr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ar=Symbol(),Tr=new WeakMap;let Or=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==Ar)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Er&&void 0===t){const n=void 0!==e&&1===e.length;n&&(t=Tr.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Tr.set(e,t))}return t}toString(){return this.cssText}};const $r=(t,...e)=>{const n=1===t.length?t[0]:e.reduce((e,n,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[o+1],t[0]);return new Or(n,t,Ar)},Nr=Er?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return(t=>new Or("string"==typeof t?t:t+"",void 0,Ar))(e)})(t):t,{is:Ir,defineProperty:Dr,getOwnPropertyDescriptor:Lr,getOwnPropertyNames:Mr,getOwnPropertySymbols:zr,getPrototypeOf:Rr}=Object,Fr=globalThis,Hr=Fr.trustedTypes,Br=Hr?Hr.emptyScript:"",jr=Fr.reactiveElementPolyfillSupport,Ur=(t,e)=>t,Vr={toAttribute(t,e){switch(e){case Boolean:t=t?Br:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=null!==t;break;case Number:n=null===t?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch(t){n=null}}return n}},qr=(t,e)=>!Ir(t,e),Wr={attribute:!0,type:String,converter:Vr,reflect:!1,useDefault:!1,hasChanged:qr};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),Fr.litPropertyMetadata??=new WeakMap;let Kr=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Wr){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(t,n,e);void 0!==o&&Dr(this.prototype,t,o)}}static getPropertyDescriptor(t,e,n){const{get:o,set:r}=Lr(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:o,set(e){const i=o?.call(this);r?.call(this,e),this.requestUpdate(t,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Wr}static _$Ei(){if(this.hasOwnProperty(Ur("elementProperties")))return;const t=Rr(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ur("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ur("properties"))){const t=this.properties,e=[...Mr(t),...zr(t)];for(const n of e)this.createProperty(n,t[n])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,n]of e)this.elementProperties.set(t,n)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const n=this._$Eu(t,e);void 0!==n&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const t of n)e.unshift(Nr(t))}else void 0!==t&&e.push(Nr(t));return e}static _$Eu(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(Er)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const n of e){const e=document.createElement("style"),o=kr.litNonce;void 0!==o&&e.setAttribute("nonce",o),e.textContent=n.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){const n=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,n);if(void 0!==o&&!0===n.reflect){const r=(void 0!==n.converter?.toAttribute?n.converter:Vr).toAttribute(e,n.type);this._$Em=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(t,e){const n=this.constructor,o=n._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=n.getPropertyOptions(o),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:Vr;this._$Em=o,this[o]=r.fromAttribute(e,t.type)??this._$Ej?.get(o)??null,this._$Em=null}}requestUpdate(t,e,n){if(void 0!==t){const o=this.constructor,r=this[t];if(n??=o.getPropertyOptions(t),!((n.hasChanged??qr)(r,e)||n.useDefault&&n.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,n))))return;this.C(t,e,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:o,wrapped:r},i){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,i??e??this[t]),!0!==r||void 0!==i)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),!0===o&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,n]of t){const{wrapped:t}=n,o=this[e];!0!==t||this._$AL.has(e)||void 0===o||this.C(e,void 0,n,o)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};Kr.elementStyles=[],Kr.shadowRootOptions={mode:"open"},Kr[Ur("elementProperties")]=new Map,Kr[Ur("finalized")]=new Map,jr?.({ReactiveElement:Kr}),(Fr.reactiveElementVersions??=[]).push("2.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Jr=globalThis,Yr=Jr.trustedTypes,Gr=Yr?Yr.createPolicy("lit-html",{createHTML:t=>t}):void 0,Xr="$lit$",Zr=`lit$${Math.random().toFixed(9).slice(2)}$`,Qr="?"+Zr,ti=`<${Qr}>`,ei=document,ni=()=>ei.createComment(""),oi=t=>null===t||"object"!=typeof t&&"function"!=typeof t,ri=Array.isArray,ii="[ \t\n\f\r]",si=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ai=/-->/g,li=/>/g,ci=RegExp(`>|${ii}(?:([^\\s"'>=/]+)(${ii}*=${ii}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),di=/'/g,pi=/"/g,hi=/^(?:script|style|textarea|title)$/i,ui=(t=>(e,...n)=>({_$litType$:t,strings:e,values:n}))(1),fi=Symbol.for("lit-noChange"),mi=Symbol.for("lit-nothing"),gi=new WeakMap,bi=ei.createTreeWalker(ei,129);function yi(t,e){if(!ri(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==Gr?Gr.createHTML(e):e}const _i=(t,e)=>{const n=t.length-1,o=[];let r,i=2===e?"<svg>":3===e?"<math>":"",s=si;for(let e=0;e<n;e++){const n=t[e];let a,l,c=-1,d=0;for(;d<n.length&&(s.lastIndex=d,l=s.exec(n),null!==l);)d=s.lastIndex,s===si?"!--"===l[1]?s=ai:void 0!==l[1]?s=li:void 0!==l[2]?(hi.test(l[2])&&(r=RegExp("</"+l[2],"g")),s=ci):void 0!==l[3]&&(s=ci):s===ci?">"===l[0]?(s=r??si,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?ci:'"'===l[3]?pi:di):s===pi||s===di?s=ci:s===ai||s===li?s=si:(s=ci,r=void 0);const p=s===ci&&t[e+1].startsWith("/>")?" ":"";i+=s===si?n+ti:c>=0?(o.push(a),n.slice(0,c)+Xr+n.slice(c)+Zr+p):n+Zr+(-2===c?e:p)}return[yi(t,i+(t[n]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),o]};class vi{constructor({strings:t,_$litType$:e},n){let o;this.parts=[];let r=0,i=0;const s=t.length-1,a=this.parts,[l,c]=_i(t,e);if(this.el=vi.createElement(l,n),bi.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=bi.nextNode())&&a.length<s;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(Xr)){const e=c[i++],n=o.getAttribute(t).split(Zr),s=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:s[2],strings:n,ctor:"."===s[1]?Pi:"?"===s[1]?ki:"@"===s[1]?Ei:Si}),o.removeAttribute(t)}else t.startsWith(Zr)&&(a.push({type:6,index:r}),o.removeAttribute(t));if(hi.test(o.tagName)){const t=o.textContent.split(Zr),e=t.length-1;if(e>0){o.textContent=Yr?Yr.emptyScript:"";for(let n=0;n<e;n++)o.append(t[n],ni()),bi.nextNode(),a.push({type:2,index:++r});o.append(t[e],ni())}}}else if(8===o.nodeType)if(o.data===Qr)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=o.data.indexOf(Zr,t+1));)a.push({type:7,index:r}),t+=Zr.length-1}r++}}static createElement(t,e){const n=ei.createElement("template");return n.innerHTML=t,n}}function wi(t,e,n=t,o){if(e===fi)return e;let r=void 0!==o?n._$Co?.[o]:n._$Cl;const i=oi(e)?void 0:e._$litDirective$;return r?.constructor!==i&&(r?._$AO?.(!1),void 0===i?r=void 0:(r=new i(t),r._$AT(t,n,o)),void 0!==o?(n._$Co??=[])[o]=r:n._$Cl=r),void 0!==r&&(e=wi(t,r._$AS(t,e.values),r,o)),e}class xi{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:n}=this._$AD,o=(t?.creationScope??ei).importNode(e,!0);bi.currentNode=o;let r=bi.nextNode(),i=0,s=0,a=n[0];for(;void 0!==a;){if(i===a.index){let e;2===a.type?e=new Ci(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new Ai(r,this,t)),this._$AV.push(e),a=n[++s]}i!==a?.index&&(r=bi.nextNode(),i++)}return bi.currentNode=ei,o}p(t){let e=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}class Ci{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,n,o){this.type=2,this._$AH=mi,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=wi(this,t,e),oi(t)?t===mi||null==t||""===t?(this._$AH!==mi&&this._$AR(),this._$AH=mi):t!==this._$AH&&t!==fi&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>ri(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==mi&&oi(this._$AH)?this._$AA.nextSibling.data=t:this.T(ei.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:n}=t,o="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=vi.createElement(yi(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new xi(o,this),n=t.u(this.options);t.p(e),this.T(n),this._$AH=t}}_$AC(t){let e=gi.get(t.strings);return void 0===e&&gi.set(t.strings,e=new vi(t)),e}k(t){ri(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,o=0;for(const r of t)o===e.length?e.push(n=new Ci(this.O(ni()),this.O(ni()),this,this.options)):n=e[o],n._$AI(r),o++;o<e.length&&(this._$AR(n&&n._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Si{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,o,r){this.type=1,this._$AH=mi,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=r,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=mi}_$AI(t,e=this,n,o){const r=this.strings;let i=!1;if(void 0===r)t=wi(this,t,e,0),i=!oi(t)||t!==this._$AH&&t!==fi,i&&(this._$AH=t);else{const o=t;let s,a;for(t=r[0],s=0;s<r.length-1;s++)a=wi(this,o[n+s],e,s),a===fi&&(a=this._$AH[s]),i||=!oi(a)||a!==this._$AH[s],a===mi?t=mi:t!==mi&&(t+=(a??"")+r[s+1]),this._$AH[s]=a}i&&!o&&this.j(t)}j(t){t===mi?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Pi extends Si{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===mi?void 0:t}}class ki extends Si{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==mi)}}class Ei extends Si{constructor(t,e,n,o,r){super(t,e,n,o,r),this.type=5}_$AI(t,e=this){if((t=wi(this,t,e,0)??mi)===fi)return;const n=this._$AH,o=t===mi&&n!==mi||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==mi&&(n===mi||o);o&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Ai{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){wi(this,t)}}const Ti=Jr.litHtmlPolyfillSupport;Ti?.(vi,Ci),(Jr.litHtmlVersions??=[]).push("3.3.0");const Oi=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let $i=class extends Kr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,n)=>{const o=n?.renderBefore??e;let r=o._$litPart$;if(void 0===r){const t=n?.renderBefore??null;o._$litPart$=r=new Ci(e.insertBefore(ni(),t),t,void 0,n??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return fi}};$i._$litElement$=!0,$i.finalized=!0,Oi.litElementHydrateSupport?.({LitElement:$i});const Ni=Oi.litElementPolyfillSupport;Ni?.({LitElement:$i}),(Oi.litElementVersions??=[]).push("4.2.0");var Ii=$r`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;const Di=new Set,Li=new Map;let Mi,zi="ltr",Ri="en";const Fi="undefined"!=typeof MutationObserver&&"undefined"!=typeof document&&void 0!==document.documentElement;if(Fi){const t=new MutationObserver(Bi);zi=document.documentElement.dir||"ltr",Ri=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Hi(...t){t.map(t=>{const e=t.$code.toLowerCase();Li.has(e)?Li.set(e,Object.assign(Object.assign({},Li.get(e)),t)):Li.set(e,t),Mi||(Mi=t)}),Bi()}function Bi(){Fi&&(zi=document.documentElement.dir||"ltr",Ri=document.documentElement.lang||navigator.language),[...Di.keys()].map(t=>{"function"==typeof t.requestUpdate&&t.requestUpdate()})}let ji=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Di.add(this.host)}hostDisconnected(){Di.delete(this.host)}dir(){return`${this.host.dir||zi}`.toLowerCase()}lang(){return`${this.host.lang||Ri}`.toLowerCase()}getTranslationData(t){var e,n;const o=new Intl.Locale(t.replace(/_/g,"-")),r=null==o?void 0:o.language.toLowerCase(),i=null!==(n=null===(e=null==o?void 0:o.region)||void 0===e?void 0:e.toLowerCase())&&void 0!==n?n:"";return{locale:o,language:r,region:i,primary:Li.get(`${r}-${i}`),secondary:Li.get(r)}}exists(t,e){var n;const{primary:o,secondary:r}=this.getTranslationData(null!==(n=e.lang)&&void 0!==n?n:this.lang());return e=Object.assign({includeFallback:!1},e),!!(o&&o[t]||r&&r[t]||e.includeFallback&&Mi&&Mi[t])}term(t,...e){const{primary:n,secondary:o}=this.getTranslationData(this.lang());let r;if(n&&n[t])r=n[t];else if(o&&o[t])r=o[t];else{if(!Mi||!Mi[t])return console.error(`No translation found for: ${String(t)}`),String(t);r=Mi[t]}return"function"==typeof r?r(...e):r}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(t,e)}};var Ui={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>0===t?"No options selected":1===t?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};Hi(Ui);var Vi=Ui,qi=class extends ji{};Hi(Vi);var Wi=$r`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,Ki=Object.defineProperty,Ji=Object.defineProperties,Yi=Object.getOwnPropertyDescriptor,Gi=Object.getOwnPropertyDescriptors,Xi=Object.getOwnPropertySymbols,Zi=Object.prototype.hasOwnProperty,Qi=Object.prototype.propertyIsEnumerable,ts=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),es=t=>{throw TypeError(t)},ns=(t,e,n)=>e in t?Ki(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,os=(t,e)=>{for(var n in e||(e={}))Zi.call(e,n)&&ns(t,n,e[n]);if(Xi)for(var n of Xi(e))Qi.call(e,n)&&ns(t,n,e[n]);return t},rs=(t,e)=>Ji(t,Gi(e)),is=(t,e,n,o)=>{for(var r,i=o>1?void 0:o?Yi(e,n):e,s=t.length-1;s>=0;s--)(r=t[s])&&(i=(o?r(e,n,i):r(i))||i);return o&&i&&Ki(e,n,i),i},ss=(t,e,n)=>e.has(t)||es("Cannot "+n),as=function(t,e){this[0]=t,this[1]=e};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ls={attribute:!0,type:String,converter:Vr,reflect:!1,hasChanged:qr},cs=(t=ls,e,n)=>{const{kind:o,metadata:r}=n;let i=globalThis.litPropertyMetadata.get(r);if(void 0===i&&globalThis.litPropertyMetadata.set(r,i=new Map),"setter"===o&&((t=Object.create(t)).wrapped=!0),i.set(n.name,t),"accessor"===o){const{name:o}=n;return{set(n){const r=e.get.call(this);e.set.call(this,n),this.requestUpdate(o,r,t)},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===o){const{name:o}=n;return function(n){const r=this[o];e.call(this,n),this.requestUpdate(o,r,t)}}throw Error("Unsupported decorator location: "+o)};function ds(t){return(e,n)=>"object"==typeof n?cs(t,e,n):((t,e,n)=>{const o=e.hasOwnProperty(n);return e.constructor.createProperty(n,t),o?Object.getOwnPropertyDescriptor(e,n):void 0})(t,e,n)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ps(t){return ds({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function hs(t,e){return(e,n,o)=>((t,e,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,n),n))(e,n,{get(){return(e=>e.renderRoot?.querySelector(t)??null)(this)}})}var us,fs=class extends $i{constructor(){var t,e,n;super(),t=this,n=!1,(e=us).has(t)?es("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const n=new CustomEvent(t,os({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(n),n}static define(t,e=this,n={}){const o=customElements.get(t);if(!o){try{customElements.define(t,e,n)}catch(o){customElements.define(t,class extends e{},n)}return}let r=" (unknown version)",i=r;"version"in e&&e.version&&(r=" v"+e.version),"version"in o&&o.version&&(i=" v"+o.version),r&&i&&r===i||console.warn(`Attempted to register <${t}>${r}, but <${t}>${i} has already been registered.`)}attributeChangedCallback(t,e,n){var o,r;ss(o=this,r=us,"read from private field"),r.get(o)||(this.constructor.elementProperties.forEach((t,e)=>{t.reflect&&null!=this[e]&&this.initialReflectedProperties.set(e,this[e])}),((t,e,n)=>{ss(t,e,"write to private field"),e.set(t,n)})(this,us,!0)),super.attributeChangedCallback(t,e,n)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,n)=>{t.has(n)&&null==this[n]&&(this[n]=e)})}};us=new WeakMap,fs.version="2.20.1",fs.dependencies={},is([ds()],fs.prototype,"dir",2),is([ds()],fs.prototype,"lang",2);var ms=class extends fs{constructor(){super(...arguments),this.localize=new qi(this)}render(){return ui`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};ms.styles=[Wi,Ii];var gs=new WeakMap,bs=new WeakMap,ys=new WeakMap,_s=new WeakSet,vs=new WeakMap,ws=class{constructor(t,e){this.handleFormData=t=>{const e=this.options.disabled(this.host),n=this.options.name(this.host),o=this.options.value(this.host),r="sl-button"===this.host.tagName.toLowerCase();this.host.isConnected&&!e&&!r&&"string"==typeof n&&n.length>0&&void 0!==o&&(Array.isArray(o)?o.forEach(e=>{t.formData.append(n,e.toString())}):t.formData.append(n,o.toString()))},this.handleFormSubmit=t=>{var e;const n=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&(null==(e=gs.get(this.form))||e.forEach(t=>{this.setUserInteracted(t,!0)})),!this.form||this.form.noValidate||n||o(this.host)||(t.preventDefault(),t.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),vs.set(this.host,[])},this.handleInteraction=t=>{const e=vs.get(this.host);e.includes(t.type)||e.push(t.type),e.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if("function"==typeof e.checkValidity&&!e.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if("function"==typeof e.reportValidity&&!e.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=os({form:t=>{const e=t.form;if(e){const n=t.getRootNode().querySelector(`#${e}`);if(n)return n}return t.closest("form")},name:t=>t.name,value:t=>t.value,defaultValue:t=>t.defaultValue,disabled:t=>{var e;return null!=(e=t.disabled)&&e},reportValidity:t=>"function"!=typeof t.reportValidity||t.reportValidity(),checkValidity:t=>"function"!=typeof t.checkValidity||t.checkValidity(),setValue:(t,e)=>t.value=e,assumeInteractionOn:["sl-input"]},e)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),vs.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),vs.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,gs.has(this.form)?gs.get(this.form).add(this.host):gs.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),bs.has(this.form)||(bs.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),ys.has(this.form)||(ys.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=gs.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),bs.has(this.form)&&(this.form.reportValidity=bs.get(this.form),bs.delete(this.form)),ys.has(this.form)&&(this.form.checkValidity=ys.get(this.form),ys.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?_s.add(t):_s.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const n=document.createElement("button");n.type=t,n.style.position="absolute",n.style.width="0",n.style.height="0",n.style.clipPath="inset(50%)",n.style.overflow="hidden",n.style.whiteSpace="nowrap",e&&(n.name=e.name,n.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(t=>{e.hasAttribute(t)&&n.setAttribute(t,e.getAttribute(t))})),this.form.append(n),n.click(),n.remove()}}getForm(){var t;return null!=(t=this.form)?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,n=Boolean(_s.has(e)),o=Boolean(e.required);e.toggleAttribute("data-required",o),e.toggleAttribute("data-optional",!o),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&n),e.toggleAttribute("data-user-valid",t&&n)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||null==t||t.preventDefault()}},xs=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(rs(os({},xs),{valid:!1,valueMissing:!0})),Object.freeze(rs(os({},xs),{valid:!1,customError:!0}));var Cs=$r`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,Ss=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=t=>{const e=t.target;(this.slotNames.includes("[default]")&&!e.name||e.name&&this.slotNames.includes(e.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&""!==t.textContent.trim())return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if("sl-visually-hidden"===e.tagName.toLowerCase())return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return null!==this.host.querySelector(`:scope > [slot="${t}"]`)}test(t){return"[default]"===t?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};var Ps=$r`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;function ks(t,e){const n=os({waitUntilFirstUpdate:!1},e);return(e,o)=>{const{update:r}=e,i=Array.isArray(t)?t:[t];e.update=function(t){i.forEach(e=>{const r=e;if(t.has(r)){const e=t.get(r),i=this[r];e!==i&&(n.waitUntilFirstUpdate&&!this.hasUpdated||this[o](e,i))}}),r.call(this,t)}}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Es=t=>void 0===t.strings,As={};var Ts,Os=Symbol(),$s=Symbol(),Ns=new Map,Is=class extends fs{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var n;let o;if(null==e?void 0:e.spriteSheet)return this.svg=ui`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(o=await fetch(t,{mode:"cors"}),!o.ok)return 410===o.status?Os:$s}catch(t){return $s}try{const t=document.createElement("div");t.innerHTML=await o.text();const e=t.firstElementChild;if("svg"!==(null==(n=null==e?void 0:e.tagName)?void 0:n.toLowerCase()))return Os;Ts||(Ts=new DOMParser);const r=Ts.parseFromString(e.outerHTML,"text/html").body.querySelector("svg");return r?(r.part.add("svg"),document.adoptNode(r)):Os}catch(t){return Os}}connectedCallback(){super.connectedCallback(),n(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),t(this)}getIconSource(){const t=e(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){"string"==typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:n,fromLibrary:o}=this.getIconSource(),r=o?e(this.library):void 0;if(!n)return void(this.svg=null);let i=Ns.get(n);if(i||(i=this.resolveIcon(n,r),Ns.set(n,i)),!this.initialRender)return;const s=await i;if(s===$s&&Ns.delete(n),n===this.getIconSource().url)if((t=>void 0!==t?._$litType$)(s)){if(this.svg=s,r){await this.updateComplete;const t=this.shadowRoot.querySelector("[part='svg']");"function"==typeof r.mutator&&t&&r.mutator(t)}}else switch(s){case $s:case Os:this.svg=null,this.emit("sl-error");break;default:this.svg=s.cloneNode(!0),null==(t=null==r?void 0:r.mutator)||t.call(r,this.svg),this.emit("sl-load")}}render(){return this.svg}};Is.styles=[Wi,Ps],is([ps()],Is.prototype,"svg",2),is([ds({reflect:!0})],Is.prototype,"name",2),is([ds()],Is.prototype,"src",2),is([ds()],Is.prototype,"label",2),is([ds({reflect:!0})],Is.prototype,"library",2),is([ks("label")],Is.prototype,"handleLabelChange",1),is([ks(["name","src","library"])],Is.prototype,"setIcon",1);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ds=1,Ls=2,Ms=3,zs=4,Rs=t=>(...e)=>({_$litDirective$:t,values:e});let Fs=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hs=Rs(class extends Fs{constructor(t){if(super(t),t.type!==Ds||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const n=t.element.classList;for(const t of this.st)t in e||(n.remove(t),this.st.delete(t));for(const t in e){const o=!!e[t];o===this.st.has(t)||this.nt?.has(t)||(o?(n.add(t),this.st.add(t)):(n.remove(t),this.st.delete(t)))}return fi}}),Bs=Symbol.for(""),js=t=>{if(t?.r===Bs)return t?._$litStatic$},Us=(t,...e)=>({_$litStatic$:e.reduce((e,n,o)=>e+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+t[o+1],t[0]),r:Bs}),Vs=new Map,qs=(t=>(e,...n)=>{const o=n.length;let r,i;const s=[],a=[];let l,c=0,d=!1;for(;c<o;){for(l=e[c];c<o&&void 0!==(i=n[c],r=js(i));)l+=r+e[++c],d=!0;c!==o&&a.push(i),s.push(l),c++}if(c===o&&s.push(e[o]),d){const t=s.join("$$lit$$");void 0===(e=Vs.get(t))&&(s.raw=s,Vs.set(t,e=s)),n=a}return t(e,...n)})(ui),Ws=t=>t??mi;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ks=class extends fs{constructor(){super(...arguments),this.formControlController=new ws(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new Ss(this,"[default]","prefix","suffix"),this.localize=new qi(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:xs}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){"submit"===this.type&&this.formControlController.submit(this),"reset"===this.type&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return!this.isButton()||this.button.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.isButton()||this.button.reportValidity()}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?Us`a`:Us`button`;return qs`
      <${e}
        part="base"
        class=${Hs({button:!0,"button--default":"default"===this.variant,"button--primary":"primary"===this.variant,"button--success":"success"===this.variant,"button--neutral":"neutral"===this.variant,"button--warning":"warning"===this.variant,"button--danger":"danger"===this.variant,"button--text":"text"===this.variant,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":"rtl"===this.localize.dir(),"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${Ws(t?void 0:this.disabled)}
        type=${Ws(t?void 0:this.type)}
        title=${this.title}
        name=${Ws(t?void 0:this.name)}
        value=${Ws(t?void 0:this.value)}
        href=${Ws(t&&!this.disabled?this.href:void 0)}
        target=${Ws(t?this.target:void 0)}
        download=${Ws(t?this.download:void 0)}
        rel=${Ws(t?this.rel:void 0)}
        role=${Ws(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?qs` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?qs`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};Ks.styles=[Wi,Cs],Ks.dependencies={"sl-icon":Is,"sl-spinner":ms},is([hs(".button")],Ks.prototype,"button",2),is([ps()],Ks.prototype,"hasFocus",2),is([ps()],Ks.prototype,"invalid",2),is([ds()],Ks.prototype,"title",2),is([ds({reflect:!0})],Ks.prototype,"variant",2),is([ds({reflect:!0})],Ks.prototype,"size",2),is([ds({type:Boolean,reflect:!0})],Ks.prototype,"caret",2),is([ds({type:Boolean,reflect:!0})],Ks.prototype,"disabled",2),is([ds({type:Boolean,reflect:!0})],Ks.prototype,"loading",2),is([ds({type:Boolean,reflect:!0})],Ks.prototype,"outline",2),is([ds({type:Boolean,reflect:!0})],Ks.prototype,"pill",2),is([ds({type:Boolean,reflect:!0})],Ks.prototype,"circle",2),is([ds()],Ks.prototype,"type",2),is([ds()],Ks.prototype,"name",2),is([ds()],Ks.prototype,"value",2),is([ds()],Ks.prototype,"href",2),is([ds()],Ks.prototype,"target",2),is([ds()],Ks.prototype,"rel",2),is([ds()],Ks.prototype,"download",2),is([ds()],Ks.prototype,"form",2),is([ds({attribute:"formaction"})],Ks.prototype,"formAction",2),is([ds({attribute:"formenctype"})],Ks.prototype,"formEnctype",2),is([ds({attribute:"formmethod"})],Ks.prototype,"formMethod",2),is([ds({attribute:"formnovalidate",type:Boolean})],Ks.prototype,"formNoValidate",2),is([ds({attribute:"formtarget"})],Ks.prototype,"formTarget",2),is([ks("disabled",{waitUntilFirstUpdate:!0})],Ks.prototype,"handleDisabledChange",1),Ks.define("sl-button");var Js=$r`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,Ys=$r`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,Gs=class extends fs{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?Us`a`:Us`button`;return qs`
      <${e}
        part="base"
        class=${Hs({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${Ws(t?void 0:this.disabled)}
        type=${Ws(t?void 0:"button")}
        href=${Ws(t?this.href:void 0)}
        target=${Ws(t?this.target:void 0)}
        download=${Ws(t?this.download:void 0)}
        rel=${Ws(t&&this.target?"noreferrer noopener":void 0)}
        role=${Ws(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${Ws(this.name)}
          library=${Ws(this.library)}
          src=${Ws(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};Gs.styles=[Wi,Ys],Gs.dependencies={"sl-icon":Is},is([hs(".icon-button")],Gs.prototype,"button",2),is([ps()],Gs.prototype,"hasFocus",2),is([ds()],Gs.prototype,"name",2),is([ds()],Gs.prototype,"library",2),is([ds()],Gs.prototype,"src",2),is([ds()],Gs.prototype,"href",2),is([ds()],Gs.prototype,"target",2),is([ds()],Gs.prototype,"download",2),is([ds()],Gs.prototype,"label",2),is([ds({type:Boolean,reflect:!0})],Gs.prototype,"disabled",2);var Xs=class extends fs{constructor(){super(...arguments),this.localize=new qi(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return ui`
      <span
        part="base"
        class=${Hs({tag:!0,"tag--primary":"primary"===this.variant,"tag--success":"success"===this.variant,"tag--neutral":"neutral"===this.variant,"tag--warning":"warning"===this.variant,"tag--danger":"danger"===this.variant,"tag--text":"text"===this.variant,"tag--small":"small"===this.size,"tag--medium":"medium"===this.size,"tag--large":"large"===this.size,"tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?ui`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};Xs.styles=[Wi,Js],Xs.dependencies={"sl-icon-button":Gs},is([ds({reflect:!0})],Xs.prototype,"variant",2),is([ds({reflect:!0})],Xs.prototype,"size",2),is([ds({type:Boolean,reflect:!0})],Xs.prototype,"pill",2),is([ds({type:Boolean})],Xs.prototype,"removable",2);var Zs=$r`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-small);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-2x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`;var Qs=new Set;function ta(t){if(Qs.add(t),!document.documentElement.classList.contains("sl-scroll-lock")){const t=function(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}()+function(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}();let e=getComputedStyle(document.documentElement).scrollbarGutter;e&&"auto"!==e||(e="stable"),t<2&&(e=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",e),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function ea(t){Qs.delete(t),0===Qs.size&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function na(t,e,n="vertical",o="smooth"){const r=function(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}(t,e),i=r.top+e.scrollTop,s=r.left+e.scrollLeft,a=e.scrollLeft,l=e.scrollLeft+e.offsetWidth,c=e.scrollTop,d=e.scrollTop+e.offsetHeight;"horizontal"!==n&&"both"!==n||(s<a?e.scrollTo({left:s,behavior:o}):s+t.clientWidth>l&&e.scrollTo({left:s-e.offsetWidth+t.clientWidth,behavior:o})),"vertical"!==n&&"both"!==n||(i<c?e.scrollTo({top:i,behavior:o}):i+t.clientHeight>d&&e.scrollTo({top:i-e.offsetHeight+t.clientHeight,behavior:o}))}var oa=$r`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,ra=$r`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const ia=Math.min,sa=Math.max,aa=Math.round,la=Math.floor,ca=t=>({x:t,y:t}),da={left:"right",right:"left",bottom:"top",top:"bottom"},pa={start:"end",end:"start"};function ha(t,e,n){return sa(t,ia(e,n))}function ua(t,e){return"function"==typeof t?t(e):t}function fa(t){return t.split("-")[0]}function ma(t){return t.split("-")[1]}function ga(t){return"x"===t?"y":"x"}function ba(t){return"y"===t?"height":"width"}function ya(t){return["top","bottom"].includes(fa(t))?"y":"x"}function _a(t){return ga(ya(t))}function va(t){return t.replace(/start|end/g,t=>pa[t])}function wa(t){return t.replace(/left|right|bottom|top/g,t=>da[t])}function xa(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function Ca(t){const{x:e,y:n,width:o,height:r}=t;return{width:o,height:r,top:n,left:e,right:e+o,bottom:n+r,x:e,y:n}}function Sa(t,e,n){let{reference:o,floating:r}=t;const i=ya(e),s=_a(e),a=ba(s),l=fa(e),c="y"===i,d=o.x+o.width/2-r.width/2,p=o.y+o.height/2-r.height/2,h=o[a]/2-r[a]/2;let u;switch(l){case"top":u={x:d,y:o.y-r.height};break;case"bottom":u={x:d,y:o.y+o.height};break;case"right":u={x:o.x+o.width,y:p};break;case"left":u={x:o.x-r.width,y:p};break;default:u={x:o.x,y:o.y}}switch(ma(e)){case"start":u[s]-=h*(n&&c?-1:1);break;case"end":u[s]+=h*(n&&c?-1:1)}return u}async function Pa(t,e){var n;void 0===e&&(e={});const{x:o,y:r,platform:i,rects:s,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:p="floating",altBoundary:h=!1,padding:u=0}=ua(e,t),f=xa(u),m=a[h?"floating"===p?"reference":"floating":p],g=Ca(await i.getClippingRect({element:null==(n=await(null==i.isElement?void 0:i.isElement(m)))||n?m:m.contextElement||await(null==i.getDocumentElement?void 0:i.getDocumentElement(a.floating)),boundary:c,rootBoundary:d,strategy:l})),b="floating"===p?{x:o,y:r,width:s.floating.width,height:s.floating.height}:s.reference,y=await(null==i.getOffsetParent?void 0:i.getOffsetParent(a.floating)),_=await(null==i.isElement?void 0:i.isElement(y))&&await(null==i.getScale?void 0:i.getScale(y))||{x:1,y:1},v=Ca(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:b,offsetParent:y,strategy:l}):b);return{top:(g.top-v.top+f.top)/_.y,bottom:(v.bottom-g.bottom+f.bottom)/_.y,left:(g.left-v.left+f.left)/_.x,right:(v.right-g.right+f.right)/_.x}}function ka(){return"undefined"!=typeof window}function Ea(t){return Oa(t)?(t.nodeName||"").toLowerCase():"#document"}function Aa(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function Ta(t){var e;return null==(e=(Oa(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function Oa(t){return!!ka()&&(t instanceof Node||t instanceof Aa(t).Node)}function $a(t){return!!ka()&&(t instanceof Element||t instanceof Aa(t).Element)}function Na(t){return!!ka()&&(t instanceof HTMLElement||t instanceof Aa(t).HTMLElement)}function Ia(t){return!(!ka()||"undefined"==typeof ShadowRoot)&&(t instanceof ShadowRoot||t instanceof Aa(t).ShadowRoot)}function Da(t){const{overflow:e,overflowX:n,overflowY:o,display:r}=Ha(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(r)}function La(t){return["table","td","th"].includes(Ea(t))}function Ma(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch(t){return!1}})}function za(t){const e=Ra(),n=$a(t)?Ha(t):t;return["transform","translate","scale","rotate","perspective"].some(t=>!!n[t]&&"none"!==n[t])||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","translate","scale","rotate","perspective","filter"].some(t=>(n.willChange||"").includes(t))||["paint","layout","strict","content"].some(t=>(n.contain||"").includes(t))}function Ra(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Fa(t){return["html","body","#document"].includes(Ea(t))}function Ha(t){return Aa(t).getComputedStyle(t)}function Ba(t){return $a(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function ja(t){if("html"===Ea(t))return t;const e=t.assignedSlot||t.parentNode||Ia(t)&&t.host||Ta(t);return Ia(e)?e.host:e}function Ua(t){const e=ja(t);return Fa(e)?t.ownerDocument?t.ownerDocument.body:t.body:Na(e)&&Da(e)?e:Ua(e)}function Va(t,e,n){var o;void 0===e&&(e=[]),void 0===n&&(n=!0);const r=Ua(t),i=r===(null==(o=t.ownerDocument)?void 0:o.body),s=Aa(r);if(i){const t=qa(s);return e.concat(s,s.visualViewport||[],Da(r)?r:[],t&&n?Va(t):[])}return e.concat(r,Va(r,[],n))}function qa(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Wa(t){const e=Ha(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const r=Na(t),i=r?t.offsetWidth:n,s=r?t.offsetHeight:o,a=aa(n)!==i||aa(o)!==s;return a&&(n=i,o=s),{width:n,height:o,$:a}}function Ka(t){return $a(t)?t:t.contextElement}function Ja(t){const e=Ka(t);if(!Na(e))return ca(1);const n=e.getBoundingClientRect(),{width:o,height:r,$:i}=Wa(e);let s=(i?aa(n.width):n.width)/o,a=(i?aa(n.height):n.height)/r;return s&&Number.isFinite(s)||(s=1),a&&Number.isFinite(a)||(a=1),{x:s,y:a}}const Ya=ca(0);function Ga(t){const e=Aa(t);return Ra()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:Ya}function Xa(t,e,n,o){void 0===e&&(e=!1),void 0===n&&(n=!1);const r=t.getBoundingClientRect(),i=Ka(t);let s=ca(1);e&&(o?$a(o)&&(s=Ja(o)):s=Ja(t));const a=function(t,e,n){return void 0===e&&(e=!1),!(!n||e&&n!==Aa(t))&&e}(i,n,o)?Ga(i):ca(0);let l=(r.left+a.x)/s.x,c=(r.top+a.y)/s.y,d=r.width/s.x,p=r.height/s.y;if(i){const t=Aa(i),e=o&&$a(o)?Aa(o):o;let n=t,r=qa(n);for(;r&&o&&e!==n;){const t=Ja(r),e=r.getBoundingClientRect(),o=Ha(r),i=e.left+(r.clientLeft+parseFloat(o.paddingLeft))*t.x,s=e.top+(r.clientTop+parseFloat(o.paddingTop))*t.y;l*=t.x,c*=t.y,d*=t.x,p*=t.y,l+=i,c+=s,n=Aa(r),r=qa(n)}}return Ca({width:d,height:p,x:l,y:c})}function Za(t,e){const n=Ba(t).scrollLeft;return e?e.left+n:Xa(Ta(t)).left+n}function Qa(t,e,n){void 0===n&&(n=!1);const o=t.getBoundingClientRect();return{x:o.left+e.scrollLeft-(n?0:Za(t,o)),y:o.top+e.scrollTop}}function tl(t,e,n){let o;if("viewport"===e)o=function(t,e){const n=Aa(t),o=Ta(t),r=n.visualViewport;let i=o.clientWidth,s=o.clientHeight,a=0,l=0;if(r){i=r.width,s=r.height;const t=Ra();(!t||t&&"fixed"===e)&&(a=r.offsetLeft,l=r.offsetTop)}return{width:i,height:s,x:a,y:l}}(t,n);else if("document"===e)o=function(t){const e=Ta(t),n=Ba(t),o=t.ownerDocument.body,r=sa(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),i=sa(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+Za(t);const a=-n.scrollTop;return"rtl"===Ha(o).direction&&(s+=sa(e.clientWidth,o.clientWidth)-r),{width:r,height:i,x:s,y:a}}(Ta(t));else if($a(e))o=function(t,e){const n=Xa(t,!0,"fixed"===e),o=n.top+t.clientTop,r=n.left+t.clientLeft,i=Na(t)?Ja(t):ca(1);return{width:t.clientWidth*i.x,height:t.clientHeight*i.y,x:r*i.x,y:o*i.y}}(e,n);else{const n=Ga(t);o={x:e.x-n.x,y:e.y-n.y,width:e.width,height:e.height}}return Ca(o)}function el(t,e){const n=ja(t);return!(n===e||!$a(n)||Fa(n))&&("fixed"===Ha(n).position||el(n,e))}function nl(t,e,n){const o=Na(e),r=Ta(e),i="fixed"===n,s=Xa(t,!0,i,e);let a={scrollLeft:0,scrollTop:0};const l=ca(0);function c(){l.x=Za(r)}if(o||!o&&!i)if(("body"!==Ea(e)||Da(r))&&(a=Ba(e)),o){const t=Xa(e,!0,i,e);l.x=t.x+e.clientLeft,l.y=t.y+e.clientTop}else r&&c();i&&!o&&r&&c();const d=!r||o||i?ca(0):Qa(r,a);return{x:s.left+a.scrollLeft-l.x-d.x,y:s.top+a.scrollTop-l.y-d.y,width:s.width,height:s.height}}function ol(t){return"static"===Ha(t).position}function rl(t,e){if(!Na(t)||"fixed"===Ha(t).position)return null;if(e)return e(t);let n=t.offsetParent;return Ta(t)===n&&(n=n.ownerDocument.body),n}function il(t,e){const n=Aa(t);if(Ma(t))return n;if(!Na(t)){let e=ja(t);for(;e&&!Fa(e);){if($a(e)&&!ol(e))return e;e=ja(e)}return n}let o=rl(t,e);for(;o&&La(o)&&ol(o);)o=rl(o,e);return o&&Fa(o)&&ol(o)&&!za(o)?n:o||function(t){let e=ja(t);for(;Na(e)&&!Fa(e);){if(za(e))return e;if(Ma(e))return null;e=ja(e)}return null}(t)||n}const sl={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:e,rect:n,offsetParent:o,strategy:r}=t;const i="fixed"===r,s=Ta(o),a=!!e&&Ma(e.floating);if(o===s||a&&i)return n;let l={scrollLeft:0,scrollTop:0},c=ca(1);const d=ca(0),p=Na(o);if((p||!p&&!i)&&(("body"!==Ea(o)||Da(s))&&(l=Ba(o)),Na(o))){const t=Xa(o);c=Ja(o),d.x=t.x+o.clientLeft,d.y=t.y+o.clientTop}const h=!s||p||i?ca(0):Qa(s,l,!0);return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-l.scrollLeft*c.x+d.x+h.x,y:n.y*c.y-l.scrollTop*c.y+d.y+h.y}},getDocumentElement:Ta,getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:o,strategy:r}=t;const i=[..."clippingAncestors"===n?Ma(e)?[]:function(t,e){const n=e.get(t);if(n)return n;let o=Va(t,[],!1).filter(t=>$a(t)&&"body"!==Ea(t)),r=null;const i="fixed"===Ha(t).position;let s=i?ja(t):t;for(;$a(s)&&!Fa(s);){const e=Ha(s),n=za(s);n||"fixed"!==e.position||(r=null),(i?!n&&!r:!n&&"static"===e.position&&r&&["absolute","fixed"].includes(r.position)||Da(s)&&!n&&el(t,s))?o=o.filter(t=>t!==s):r=e,s=ja(s)}return e.set(t,o),o}(e,this._c):[].concat(n),o],s=i[0],a=i.reduce((t,n)=>{const o=tl(e,n,r);return t.top=sa(o.top,t.top),t.right=ia(o.right,t.right),t.bottom=ia(o.bottom,t.bottom),t.left=sa(o.left,t.left),t},tl(e,s,r));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},getOffsetParent:il,getElementRects:async function(t){const e=this.getOffsetParent||il,n=this.getDimensions,o=await n(t.floating);return{reference:nl(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){const{width:e,height:n}=Wa(t);return{width:e,height:n}},getScale:Ja,isElement:$a,isRTL:function(t){return"rtl"===Ha(t).direction}};function al(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function ll(t,e,n,o){void 0===o&&(o={});const{ancestorScroll:r=!0,ancestorResize:i=!0,elementResize:s="function"==typeof ResizeObserver,layoutShift:a="function"==typeof IntersectionObserver,animationFrame:l=!1}=o,c=Ka(t),d=r||i?[...c?Va(c):[],...Va(e)]:[];d.forEach(t=>{r&&t.addEventListener("scroll",n,{passive:!0}),i&&t.addEventListener("resize",n)});const p=c&&a?function(t,e){let n,o=null;const r=Ta(t);function i(){var t;clearTimeout(n),null==(t=o)||t.disconnect(),o=null}return function s(a,l){void 0===a&&(a=!1),void 0===l&&(l=1),i();const c=t.getBoundingClientRect(),{left:d,top:p,width:h,height:u}=c;if(a||e(),!h||!u)return;const f={rootMargin:-la(p)+"px "+-la(r.clientWidth-(d+h))+"px "+-la(r.clientHeight-(p+u))+"px "+-la(d)+"px",threshold:sa(0,ia(1,l))||1};let m=!0;function g(e){const o=e[0].intersectionRatio;if(o!==l){if(!m)return s();o?s(!1,o):n=setTimeout(()=>{s(!1,1e-7)},1e3)}1!==o||al(c,t.getBoundingClientRect())||s(),m=!1}try{o=new IntersectionObserver(g,{...f,root:r.ownerDocument})}catch(t){o=new IntersectionObserver(g,f)}o.observe(t)}(!0),i}(c,n):null;let h,u=-1,f=null;s&&(f=new ResizeObserver(t=>{let[o]=t;o&&o.target===c&&f&&(f.unobserve(e),cancelAnimationFrame(u),u=requestAnimationFrame(()=>{var t;null==(t=f)||t.observe(e)})),n()}),c&&!l&&f.observe(c),f.observe(e));let m=l?Xa(t):null;return l&&function e(){const o=Xa(t);m&&!al(m,o)&&n();m=o,h=requestAnimationFrame(e)}(),n(),()=>{var t;d.forEach(t=>{r&&t.removeEventListener("scroll",n),i&&t.removeEventListener("resize",n)}),null==p||p(),null==(t=f)||t.disconnect(),f=null,l&&cancelAnimationFrame(h)}}const cl=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:r,y:i,placement:s,middlewareData:a}=e,l=await async function(t,e){const{placement:n,platform:o,elements:r}=t,i=await(null==o.isRTL?void 0:o.isRTL(r.floating)),s=fa(n),a=ma(n),l="y"===ya(n),c=["left","top"].includes(s)?-1:1,d=i&&l?-1:1,p=ua(e,t);let{mainAxis:h,crossAxis:u,alignmentAxis:f}="number"==typeof p?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return a&&"number"==typeof f&&(u="end"===a?-1*f:f),l?{x:u*d,y:h*c}:{x:h*c,y:u*d}}(e,t);return s===(null==(n=a.offset)?void 0:n.placement)&&null!=(o=a.arrow)&&o.alignmentOffset?{}:{x:r+l.x,y:i+l.y,data:{...l,placement:s}}}}},dl=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:r}=e,{mainAxis:i=!0,crossAxis:s=!1,limiter:a={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...l}=ua(t,e),c={x:n,y:o},d=await Pa(e,l),p=ya(fa(r)),h=ga(p);let u=c[h],f=c[p];if(i){const t="y"===h?"bottom":"right";u=ha(u+d["y"===h?"top":"left"],u,u-d[t])}if(s){const t="y"===p?"bottom":"right";f=ha(f+d["y"===p?"top":"left"],f,f-d[t])}const m=a.fn({...e,[h]:u,[p]:f});return{...m,data:{x:m.x-n,y:m.y-o,enabled:{[h]:i,[p]:s}}}}}},pl=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:r,middlewareData:i,rects:s,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:d=!0,crossAxis:p=!0,fallbackPlacements:h,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:m=!0,...g}=ua(t,e);if(null!=(n=i.arrow)&&n.alignmentOffset)return{};const b=fa(r),y=ya(a),_=fa(a)===a,v=await(null==l.isRTL?void 0:l.isRTL(c.floating)),w=h||(_||!m?[wa(a)]:function(t){const e=wa(t);return[va(t),e,va(e)]}(a)),x="none"!==f;!h&&x&&w.push(...function(t,e,n,o){const r=ma(t);let i=function(t,e,n){const o=["left","right"],r=["right","left"],i=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?r:o:e?o:r;case"left":case"right":return e?i:s;default:return[]}}(fa(t),"start"===n,o);return r&&(i=i.map(t=>t+"-"+r),e&&(i=i.concat(i.map(va)))),i}(a,m,f,v));const C=[a,...w],S=await Pa(e,g),P=[];let k=(null==(o=i.flip)?void 0:o.overflows)||[];if(d&&P.push(S[b]),p){const t=function(t,e,n){void 0===n&&(n=!1);const o=ma(t),r=_a(t),i=ba(r);let s="x"===r?o===(n?"end":"start")?"right":"left":"start"===o?"bottom":"top";return e.reference[i]>e.floating[i]&&(s=wa(s)),[s,wa(s)]}(r,s,v);P.push(S[t[0]],S[t[1]])}if(k=[...k,{placement:r,overflows:P}],!P.every(t=>t<=0)){var E,A;const t=((null==(E=i.flip)?void 0:E.index)||0)+1,e=C[t];if(e){if(!("alignment"===p&&y!==ya(e))||k.every(t=>t.overflows[0]>0&&ya(t.placement)===y))return{data:{index:t,overflows:k},reset:{placement:e}}}let n=null==(A=k.filter(t=>t.overflows[0]<=0).sort((t,e)=>t.overflows[1]-e.overflows[1])[0])?void 0:A.placement;if(!n)switch(u){case"bestFit":{var T;const t=null==(T=k.filter(t=>{if(x){const e=ya(t.placement);return e===y||"y"===e}return!0}).map(t=>[t.placement,t.overflows.filter(t=>t>0).reduce((t,e)=>t+e,0)]).sort((t,e)=>t[1]-e[1])[0])?void 0:T[0];t&&(n=t);break}case"initialPlacement":n=a}if(r!==n)return{reset:{placement:n}}}return{}}}},hl=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(e){var n,o;const{placement:r,rects:i,platform:s,elements:a}=e,{apply:l=()=>{},...c}=ua(t,e),d=await Pa(e,c),p=fa(r),h=ma(r),u="y"===ya(r),{width:f,height:m}=i.floating;let g,b;"top"===p||"bottom"===p?(g=p,b=h===(await(null==s.isRTL?void 0:s.isRTL(a.floating))?"start":"end")?"left":"right"):(b=p,g="end"===h?"top":"bottom");const y=m-d.top-d.bottom,_=f-d.left-d.right,v=ia(m-d[g],y),w=ia(f-d[b],_),x=!e.middlewareData.shift;let C=v,S=w;if(null!=(n=e.middlewareData.shift)&&n.enabled.x&&(S=_),null!=(o=e.middlewareData.shift)&&o.enabled.y&&(C=y),x&&!h){const t=sa(d.left,0),e=sa(d.right,0),n=sa(d.top,0),o=sa(d.bottom,0);u?S=f-2*(0!==t||0!==e?t+e:sa(d.left,d.right)):C=m-2*(0!==n||0!==o?n+o:sa(d.top,d.bottom))}await l({...e,availableWidth:S,availableHeight:C});const P=await s.getDimensions(a.floating);return f!==P.width||m!==P.height?{reset:{rects:!0}}:{}}}},ul=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:r,rects:i,platform:s,elements:a,middlewareData:l}=e,{element:c,padding:d=0}=ua(t,e)||{};if(null==c)return{};const p=xa(d),h={x:n,y:o},u=_a(r),f=ba(u),m=await s.getDimensions(c),g="y"===u,b=g?"top":"left",y=g?"bottom":"right",_=g?"clientHeight":"clientWidth",v=i.reference[f]+i.reference[u]-h[u]-i.floating[f],w=h[u]-i.reference[u],x=await(null==s.getOffsetParent?void 0:s.getOffsetParent(c));let C=x?x[_]:0;C&&await(null==s.isElement?void 0:s.isElement(x))||(C=a.floating[_]||i.floating[f]);const S=v/2-w/2,P=C/2-m[f]/2-1,k=ia(p[b],P),E=ia(p[y],P),A=k,T=C-m[f]-E,O=C/2-m[f]/2+S,$=ha(A,O,T),N=!l.arrow&&null!=ma(r)&&O!==$&&i.reference[f]/2-(O<A?k:E)-m[f]/2<0,I=N?O<A?O-A:O-T:0;return{[u]:h[u]+I,data:{[u]:$,centerOffset:O-$-I,...N&&{alignmentOffset:I}},reset:N}}}),fl=(t,e,n)=>{const o=new Map,r={platform:sl,...n},i={...r.platform,_c:o};return(async(t,e,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:i=[],platform:s}=n,a=i.filter(Boolean),l=await(null==s.isRTL?void 0:s.isRTL(e));let c=await s.getElementRects({reference:t,floating:e,strategy:r}),{x:d,y:p}=Sa(c,o,l),h=o,u={},f=0;for(let n=0;n<a.length;n++){const{name:i,fn:m}=a[n],{x:g,y:b,data:y,reset:_}=await m({x:d,y:p,initialPlacement:o,placement:h,strategy:r,middlewareData:u,rects:c,platform:s,elements:{reference:t,floating:e}});d=null!=g?g:d,p=null!=b?b:p,u={...u,[i]:{...u[i],...y}},_&&f<=50&&(f++,"object"==typeof _&&(_.placement&&(h=_.placement),_.rects&&(c=!0===_.rects?await s.getElementRects({reference:t,floating:e,strategy:r}):_.rects),({x:d,y:p}=Sa(c,h,l))),n=-1)}return{x:d,y:p,placement:h,strategy:r,middlewareData:u}})(t,e,{...r,platform:i})};function ml(t){return function(t){for(let e=t;e;e=gl(e))if(e instanceof Element&&"none"===getComputedStyle(e).display)return null;for(let e=gl(t);e;e=gl(e)){if(!(e instanceof Element))continue;const t=getComputedStyle(e);if("contents"!==t.display){if("static"!==t.position||za(t))return e;if("BODY"===e.tagName)return e}}return null}(t)}function gl(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}var bl=class extends fs{constructor(){super(...arguments),this.localize=new qi(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect();let n=0,o=0,r=0,i=0,s=0,a=0,l=0,c=0;this.placement.includes("top")||this.placement.includes("bottom")?t.top<e.top?(n=t.left,o=t.bottom,r=t.right,i=t.bottom,s=e.left,a=e.top,l=e.right,c=e.top):(n=e.left,o=e.bottom,r=e.right,i=e.bottom,s=t.left,a=t.top,l=t.right,c=t.top):t.left<e.left?(n=t.right,o=t.top,r=e.left,i=e.top,s=t.right,a=t.bottom,l=e.left,c=e.bottom):(n=e.right,o=e.top,r=t.left,i=t.top,s=e.right,a=e.bottom,l=t.left,c=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${n}px`),this.style.setProperty("--hover-bridge-top-left-y",`${o}px`),this.style.setProperty("--hover-bridge-top-right-x",`${r}px`),this.style.setProperty("--hover-bridge-top-right-y",`${i}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${c}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||function(t){return null!==t&&"object"==typeof t&&"getBoundingClientRect"in t&&(!("contextElement"in t)||t.contextElement instanceof Element)}(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&this.active&&(this.cleanup=ll(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[cl({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(hl({apply:({rects:t})=>{const e="width"===this.sync||"both"===this.sync,n="height"===this.sync||"both"===this.sync;this.popup.style.width=e?`${t.reference.width}px`:"",this.popup.style.height=n?`${t.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(pl({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(dl({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(hl({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:t,availableHeight:e})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${e}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${t}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(ul({element:this.arrowEl,padding:this.arrowPadding}));const e="absolute"===this.strategy?t=>sl.getOffsetParent(t,ml):sl.getOffsetParent;fl(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:rs(os({},sl),{getOffsetParent:e})}).then(({x:t,y:e,middlewareData:n,placement:o})=>{const r="rtl"===this.localize.dir(),i={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${t}px`,top:`${e}px`}),this.arrow){const t=n.arrow.x,e=n.arrow.y;let o="",s="",a="",l="";if("start"===this.arrowPlacement){const n="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";o="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",s=r?n:"",l=r?"":n}else if("end"===this.arrowPlacement){const n="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";s=r?"":n,l=r?n:"",a="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(l="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":"",o="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":""):(l="number"==typeof t?`${t}px`:"",o="number"==typeof e?`${e}px`:"");Object.assign(this.arrowEl.style,{top:o,right:s,bottom:a,left:l,[i]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return ui`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Hs({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${Hs({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?ui`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};bl.styles=[Wi,ra],is([hs(".popup")],bl.prototype,"popup",2),is([hs(".popup__arrow")],bl.prototype,"arrowEl",2),is([ds()],bl.prototype,"anchor",2),is([ds({type:Boolean,reflect:!0})],bl.prototype,"active",2),is([ds({reflect:!0})],bl.prototype,"placement",2),is([ds({reflect:!0})],bl.prototype,"strategy",2),is([ds({type:Number})],bl.prototype,"distance",2),is([ds({type:Number})],bl.prototype,"skidding",2),is([ds({type:Boolean})],bl.prototype,"arrow",2),is([ds({attribute:"arrow-placement"})],bl.prototype,"arrowPlacement",2),is([ds({attribute:"arrow-padding",type:Number})],bl.prototype,"arrowPadding",2),is([ds({type:Boolean})],bl.prototype,"flip",2),is([ds({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(t=>t.trim()).filter(t=>""!==t),toAttribute:t=>t.join(" ")}})],bl.prototype,"flipFallbackPlacements",2),is([ds({attribute:"flip-fallback-strategy"})],bl.prototype,"flipFallbackStrategy",2),is([ds({type:Object})],bl.prototype,"flipBoundary",2),is([ds({attribute:"flip-padding",type:Number})],bl.prototype,"flipPadding",2),is([ds({type:Boolean})],bl.prototype,"shift",2),is([ds({type:Object})],bl.prototype,"shiftBoundary",2),is([ds({attribute:"shift-padding",type:Number})],bl.prototype,"shiftPadding",2),is([ds({attribute:"auto-size"})],bl.prototype,"autoSize",2),is([ds()],bl.prototype,"sync",2),is([ds({type:Object})],bl.prototype,"autoSizeBoundary",2),is([ds({attribute:"auto-size-padding",type:Number})],bl.prototype,"autoSizePadding",2),is([ds({attribute:"hover-bridge",type:Boolean})],bl.prototype,"hoverBridge",2);var yl=new Map,_l=new WeakMap;function vl(t,e){return"rtl"===e.toLowerCase()?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function wl(t,e){yl.set(t,function(t){return null!=t?t:{keyframes:[],options:{duration:0}}}(e))}function xl(t,e,n){const o=_l.get(t);if(null==o?void 0:o[e])return vl(o[e],n.dir);const r=yl.get(e);return r?vl(r,n.dir):{keyframes:[],options:{duration:0}}}function Cl(t,e){return new Promise(n=>{t.addEventListener(e,function o(r){r.target===t&&(t.removeEventListener(e,o),n())})})}function Sl(t,e,n){return new Promise(o=>{if((null==n?void 0:n.duration)===1/0)throw new Error("Promise-based animations must be finite.");const r=t.animate(e,rs(os({},n),{duration:Pl()?0:n.duration}));r.addEventListener("cancel",o,{once:!0}),r.addEventListener("finish",o,{once:!0})})}function Pl(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function kl(t){return Promise.all(t.getAnimations().map(t=>new Promise(e=>{t.cancel(),requestAnimationFrame(e)})))}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let El=class extends Fs{constructor(t){if(super(t),this.it=mi,t.type!==Ls)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===mi||null==t)return this._t=void 0,this.it=t;if(t===fi)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};El.directiveName="unsafeHTML",El.resultType=1;const Al=Rs(El);var Tl=class extends fs{constructor(){super(...arguments),this.formControlController=new ws(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Ss(this,"help-text","label"),this.localize=new qi(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=t=>ui`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${e=>this.handleTagRemove(e,t)}
      >
        ${t.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{const e=t.target,n=null!==e.closest(".select__clear"),o=null!==e.closest("sl-icon-button");if(!n&&!o){if("Escape"===t.key&&this.open&&!this.closeWatcher&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),"Enter"===t.key||" "===t.key&&""===this.typeToSelectString)return t.preventDefault(),t.stopImmediatePropagation(),this.open?void(this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))):void this.show();if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const e=this.getAllOptions(),n=e.indexOf(this.currentOption);let o=Math.max(0,n);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;"ArrowDown"===t.key?(o=n+1,o>e.length-1&&(o=0)):"ArrowUp"===t.key?(o=n-1,o<0&&(o=e.length-1)):"Home"===t.key?o=0:"End"===t.key&&(o=e.length-1),this.setCurrentOption(e[o])}if(t.key&&1===t.key.length||"Backspace"===t.key){const e=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if("Backspace"===t.key)return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),"Backspace"===t.key?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const t of e){if(t.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(t);break}}}}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()}}get value(){return this._value}set value(t){t=this.multiple?Array.isArray(t)?t:t.split(" "):Array.isArray(t)?t.join(" "):t,this._value!==t&&(this.valueHasChanged=!0,this._value=t)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var t;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var t;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),null==(t=this.closeWatcher)||t.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(t){const e=t.composedPath().some(t=>t instanceof Element&&"sl-icon-button"===t.tagName.toLowerCase());this.disabled||e||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){"Tab"!==t.key&&(t.stopPropagation(),this.handleDocumentKeyDown(t))}handleClearClick(t){t.stopPropagation(),this.valueHasChanged=!0,""!==this.value&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const e=t.target.closest("sl-option"),n=this.value;e&&!e.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(e):this.setSelectedOptions(e),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==n&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());const t=this.getAllOptions(),e=this.valueHasChanged?this.value:this.defaultValue,n=Array.isArray(e)?e:[e],o=[];t.forEach(t=>o.push(t.value)),this.setSelectedOptions(t.filter(t=>n.includes(t.value)))}handleTagRemove(t,e){t.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(e,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(t){this.getAllOptions().forEach(t=>{t.current=!1,t.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){const e=this.getAllOptions(),n=Array.isArray(t)?t:[t];e.forEach(t=>t.selected=!1),n.length&&n.forEach(t=>t.selected=!0),this.selectionChanged()}toggleOptionSelection(t,e){t.selected=!0===e||!1===e?e:!t.selected,this.selectionChanged()}selectionChanged(){var t,e,n;const o=this.getAllOptions();this.selectedOptions=o.filter(t=>t.selected);const r=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(t=>t.value),this.placeholder&&0===this.value.length?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const o=this.selectedOptions[0];this.value=null!=(t=null==o?void 0:o.value)?t:"",this.displayLabel=null!=(n=null==(e=null==o?void 0:o.getTextLabel)?void 0:e.call(o))?n:""}this.valueHasChanged=r,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){const n=this.getTag(t,e);return ui`<div @sl-remove=${e=>this.handleTagRemove(e,t)}>
          ${"string"==typeof n?Al(n):n}
        </div>`}return e===this.maxOptionsVisible?ui`<sl-tag size=${this.size}>+${this.selectedOptions.length-e}</sl-tag>`:ui``})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(t,e,n){if(super.attributeChangedCallback(t,e,n),"value"===t){const t=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=t}}handleValueChange(){if(!this.valueHasChanged){const t=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=t}const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter(t=>e.includes(t.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await kl(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:t,options:e}=xl(this,"select.show",{dir:this.localize.dir()});await Sl(this.popup.popup,t,e),this.currentOption&&na(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await kl(this);const{keyframes:t,options:e}=xl(this,"select.hide",{dir:this.localize.dir()});await Sl(this.popup.popup,t,e),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(!this.open&&!this.disabled)return this.open=!0,Cl(this,"sl-after-show");this.open=!1}async hide(){if(this.open&&!this.disabled)return this.open=!1,Cl(this,"sl-after-hide");this.open=!1}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),n=!!this.label||!!t,o=!!this.helpText||!!e,r=this.clearable&&!this.disabled&&this.value.length>0,i=this.placeholder&&this.value&&this.value.length<=0;return ui`
      <div
        part="form-control"
        class=${Hs({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":n,"form-control--has-help-text":o})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${n?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${Hs({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":i,"select--top":"top"===this.placement,"select--bottom":"bottom"===this.placement,"select--small":"small"===this.size,"select--medium":"medium"===this.size,"select--large":"large"===this.size})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?ui`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${r?ui`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Tl.styles=[Wi,oa,Zs],Tl.dependencies={"sl-icon":Is,"sl-popup":bl,"sl-tag":Xs},is([hs(".select")],Tl.prototype,"popup",2),is([hs(".select__combobox")],Tl.prototype,"combobox",2),is([hs(".select__display-input")],Tl.prototype,"displayInput",2),is([hs(".select__value-input")],Tl.prototype,"valueInput",2),is([hs(".select__listbox")],Tl.prototype,"listbox",2),is([ps()],Tl.prototype,"hasFocus",2),is([ps()],Tl.prototype,"displayLabel",2),is([ps()],Tl.prototype,"currentOption",2),is([ps()],Tl.prototype,"selectedOptions",2),is([ps()],Tl.prototype,"valueHasChanged",2),is([ds()],Tl.prototype,"name",2),is([ps()],Tl.prototype,"value",1),is([ds({attribute:"value"})],Tl.prototype,"defaultValue",2),is([ds({reflect:!0})],Tl.prototype,"size",2),is([ds()],Tl.prototype,"placeholder",2),is([ds({type:Boolean,reflect:!0})],Tl.prototype,"multiple",2),is([ds({attribute:"max-options-visible",type:Number})],Tl.prototype,"maxOptionsVisible",2),is([ds({type:Boolean,reflect:!0})],Tl.prototype,"disabled",2),is([ds({type:Boolean})],Tl.prototype,"clearable",2),is([ds({type:Boolean,reflect:!0})],Tl.prototype,"open",2),is([ds({type:Boolean})],Tl.prototype,"hoist",2),is([ds({type:Boolean,reflect:!0})],Tl.prototype,"filled",2),is([ds({type:Boolean,reflect:!0})],Tl.prototype,"pill",2),is([ds()],Tl.prototype,"label",2),is([ds({reflect:!0})],Tl.prototype,"placement",2),is([ds({attribute:"help-text"})],Tl.prototype,"helpText",2),is([ds({reflect:!0})],Tl.prototype,"form",2),is([ds({type:Boolean,reflect:!0})],Tl.prototype,"required",2),is([ds()],Tl.prototype,"getTag",2),is([ks("disabled",{waitUntilFirstUpdate:!0})],Tl.prototype,"handleDisabledChange",1),is([ks(["defaultValue","value"],{waitUntilFirstUpdate:!0})],Tl.prototype,"handleValueChange",1),is([ks("open",{waitUntilFirstUpdate:!0})],Tl.prototype,"handleOpenChange",1),wl("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}}),wl("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}}),Tl.define("sl-select");var Ol=$r`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,$l=class extends fs{constructor(){super(...arguments),this.localize=new qi(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{const t=this.closest("sl-select");t&&t.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){"string"!=typeof this.value&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const t=this.childNodes;let e="";return[...t].forEach(t=>{t.nodeType===Node.ELEMENT_NODE&&(t.hasAttribute("slot")||(e+=t.textContent)),t.nodeType===Node.TEXT_NODE&&(e+=t.textContent)}),e.trim()}render(){return ui`
      <div
        part="base"
        class=${Hs({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};function*Nl(t=document.activeElement){var e,n,o,r,i;null!=t&&(yield t,"shadowRoot"in t&&t.shadowRoot&&"closed"!==t.shadowRoot.mode&&(yield*(e=Nl(t.shadowRoot.activeElement),o=e[ts("asyncIterator")],r=!1,i={},null==o?(o=e[ts("iterator")](),n=t=>i[t]=e=>o[t](e)):(o=o.call(e),n=t=>i[t]=e=>{if(r){if(r=!1,"throw"===t)throw e;return e}return r=!0,{done:!1,value:new as(new Promise(n=>{var r=o[t](e);r instanceof Object||es("Object expected"),n(r)}),1)}}),i[ts("iterator")]=()=>i,n("next"),"throw"in o?n("throw"):i.throw=t=>{throw t},"return"in o&&n("return"),i)))}function Il(){return[...Nl()].pop()}$l.styles=[Wi,Ol],$l.dependencies={"sl-icon":Is},is([hs(".option__label")],$l.prototype,"defaultSlot",2),is([ps()],$l.prototype,"current",2),is([ps()],$l.prototype,"selected",2),is([ps()],$l.prototype,"hasHover",2),is([ds({reflect:!0})],$l.prototype,"value",2),is([ds({type:Boolean,reflect:!0})],$l.prototype,"disabled",2),is([ks("disabled")],$l.prototype,"handleDisabledChange",1),is([ks("selected")],$l.prototype,"handleSelectedChange",1),is([ks("value")],$l.prototype,"handleValueChange",1),$l.define("sl-option");var Dl=new WeakMap;function Ll(t){let e=Dl.get(t);return e||(e=window.getComputedStyle(t,null),Dl.set(t,e)),e}function Ml(t){const e=t.tagName.toLowerCase(),n=Number(t.getAttribute("tabindex"));if(t.hasAttribute("tabindex")&&(isNaN(n)||n<=-1))return!1;if(t.hasAttribute("disabled"))return!1;if(t.closest("[inert]"))return!1;if("input"===e&&"radio"===t.getAttribute("type")){const e=t.getRootNode(),n=`input[type='radio'][name="${t.getAttribute("name")}"]`,o=e.querySelector(`${n}:checked`);if(o)return o===t;return e.querySelector(n)===t}if(!function(t){if("function"==typeof t.checkVisibility)return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const e=Ll(t);return"hidden"!==e.visibility&&"none"!==e.display}(t))return!1;if(("audio"===e||"video"===e)&&t.hasAttribute("controls"))return!0;if(t.hasAttribute("tabindex"))return!0;if(t.hasAttribute("contenteditable")&&"false"!==t.getAttribute("contenteditable"))return!0;return!!["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)||function(t){const e=Ll(t),{overflowY:n,overflowX:o}=e;return"scroll"===n||"scroll"===o||"auto"===n&&"auto"===o&&(t.scrollHeight>t.clientHeight&&"auto"===n||!(!(t.scrollWidth>t.clientWidth)||"auto"!==o))}(t)}function zl(t){const e=new WeakMap,n=[];return function o(r){if(r instanceof Element){if(r.hasAttribute("inert")||r.closest("[inert]"))return;if(e.has(r))return;e.set(r,!0),!n.includes(r)&&Ml(r)&&n.push(r),r instanceof HTMLSlotElement&&function(t,e){var n;return(null==(n=t.getRootNode({composed:!0}))?void 0:n.host)!==e}(r,t)&&r.assignedElements({flatten:!0}).forEach(t=>{o(t)}),null!==r.shadowRoot&&"open"===r.shadowRoot.mode&&o(r.shadowRoot)}for(const t of r.children)o(t)}(t),n.sort((t,e)=>{const n=Number(t.getAttribute("tabindex"))||0;return(Number(e.getAttribute("tabindex"))||0)-n})}var Rl=[],Fl=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var e;if("Tab"!==t.key||this.isExternalActivated)return;if(!this.isActive())return;const n=Il();if(this.previousFocus=n,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const o=zl(this.element);let r=o.findIndex(t=>t===n);this.previousFocus=this.currentFocus;const i="forward"===this.tabDirection?1:-1;for(;;){r+i>=o.length?r=0:r+i<0?r=o.length-1:r+=i,this.previousFocus=this.currentFocus;const n=o[r];if("backward"===this.tabDirection&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;if(n&&this.possiblyHasTabbableChildren(n))return;t.preventDefault(),this.currentFocus=n,null==(e=this.currentFocus)||e.focus({preventScroll:!1});const s=[...Nl()];if(s.includes(this.currentFocus)||!s.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){Rl.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Rl=Rl.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Rl[Rl.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=zl(this.element);if(!this.element.matches(":focus-within")){const e=t[0],n=t[t.length-1],o="forward"===this.tabDirection?e:n;"function"==typeof(null==o?void 0:o.focus)&&(this.currentFocus=o,o.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}},Hl=$r`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,Bl=class extends fs{constructor(){super(...arguments),this.hasSlotController=new Ss(this,"footer"),this.localize=new qi(this),this.modal=new Fl(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{"Escape"===t.key&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),ta(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),ea(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const t=xl(this,"dialog.denyClose",{dir:this.localize.dir()});return void Sl(this.panel,t.keyframes,t.options)}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),ta(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([kl(this.dialog),kl(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=xl(this,"dialog.show",{dir:this.localize.dir()}),n=xl(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([Sl(this.panel,e.keyframes,e.options),Sl(this.overlay,n.keyframes,n.options)]),this.emit("sl-after-show")}else{(t=>{var e;const{activeElement:n}=document;n&&t.contains(n)&&(null==(e=document.activeElement)||e.blur())})(this),this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([kl(this.dialog),kl(this.overlay)]);const t=xl(this,"dialog.hide",{dir:this.localize.dir()}),e=xl(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([Sl(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),Sl(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,ea(this);const n=this.originalTrigger;"function"==typeof(null==n?void 0:n.focus)&&setTimeout(()=>n.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,Cl(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Cl(this,"sl-after-hide")}render(){return ui`
      <div
        part="base"
        class=${Hs({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${Ws(this.noHeader?this.label:void 0)}
          aria-labelledby=${Ws(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":ui`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};Bl.styles=[Wi,Hl],Bl.dependencies={"sl-icon-button":Gs},is([hs(".dialog")],Bl.prototype,"dialog",2),is([hs(".dialog__panel")],Bl.prototype,"panel",2),is([hs(".dialog__overlay")],Bl.prototype,"overlay",2),is([ds({type:Boolean,reflect:!0})],Bl.prototype,"open",2),is([ds({reflect:!0})],Bl.prototype,"label",2),is([ds({attribute:"no-header",type:Boolean,reflect:!0})],Bl.prototype,"noHeader",2),is([ks("open",{waitUntilFirstUpdate:!0})],Bl.prototype,"handleOpenChange",1),wl("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),wl("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}}),wl("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}}),wl("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),wl("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}}),Bl.define("sl-dialog");var jl=$r`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ul=Rs(class extends Fs{constructor(t){if(super(t),t.type!==Ms&&t.type!==Ds&&t.type!==zs)throw Error("The `live` directive is not allowed on child or event bindings");if(!Es(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===fi||e===mi)return e;const n=t.element,o=t.name;if(t.type===Ms){if(e===n[o])return fi}else if(t.type===zs){if(!!e===n.hasAttribute(o))return fi}else if(t.type===Ds&&n.getAttribute(o)===e+"")return fi;return((t,e=As)=>{t._$AH=e})(t),e}});var Vl=class extends fs{constructor(){super(...arguments),this.formControlController=new ws(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Ss(this,"help-text","label"),this.localize=new qi(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,(null==(t=this.input)?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,(null==(t=this.input)?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){t.preventDefault(),""!==this.value&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;"Enter"!==t.key||e||setTimeout(()=>{t.defaultPrevented||t.isComposing||this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,n="none"){this.input.setSelectionRange(t,e,n)}setRangeText(t,e,n,o="preserve"){const r=null!=e?e:this.input.selectionStart,i=null!=n?n:this.input.selectionEnd;this.input.setRangeText(t,r,i,o),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),n=!!this.label||!!t,o=!!this.helpText||!!e,r=this.clearable&&!this.disabled&&!this.readonly&&("number"==typeof this.value||this.value.length>0);return ui`
      <div
        part="form-control"
        class=${Hs({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":n,"form-control--has-help-text":o})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${n?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${Hs({input:!0,"input--small":"small"===this.size,"input--medium":"medium"===this.size,"input--large":"large"===this.size,"input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${"password"===this.type&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${Ws(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${Ws(this.placeholder)}
              minlength=${Ws(this.minlength)}
              maxlength=${Ws(this.maxlength)}
              min=${Ws(this.min)}
              max=${Ws(this.max)}
              step=${Ws(this.step)}
              .value=${Ul(this.value)}
              autocapitalize=${Ws(this.autocapitalize)}
              autocomplete=${Ws(this.autocomplete)}
              autocorrect=${Ws(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${Ws(this.pattern)}
              enterkeyhint=${Ws(this.enterkeyhint)}
              inputmode=${Ws(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${r?ui`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?ui`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?ui`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:ui`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Vl.styles=[Wi,oa,jl],Vl.dependencies={"sl-icon":Is},is([hs(".input__control")],Vl.prototype,"input",2),is([ps()],Vl.prototype,"hasFocus",2),is([ds()],Vl.prototype,"title",2),is([ds({reflect:!0})],Vl.prototype,"type",2),is([ds()],Vl.prototype,"name",2),is([ds()],Vl.prototype,"value",2),is([((t="value")=>(e,n)=>{const o=e.constructor,r=o.prototype.attributeChangedCallback;o.prototype.attributeChangedCallback=function(e,i,s){var a;const l=o.getPropertyOptions(t);if(e===("string"==typeof l.attribute?l.attribute:t)){const e=l.converter||Vr,o=("function"==typeof e?e:null!=(a=null==e?void 0:e.fromAttribute)?a:Vr.fromAttribute)(s,l.type);this[t]!==o&&(this[n]=o)}r.call(this,e,i,s)}})()],Vl.prototype,"defaultValue",2),is([ds({reflect:!0})],Vl.prototype,"size",2),is([ds({type:Boolean,reflect:!0})],Vl.prototype,"filled",2),is([ds({type:Boolean,reflect:!0})],Vl.prototype,"pill",2),is([ds()],Vl.prototype,"label",2),is([ds({attribute:"help-text"})],Vl.prototype,"helpText",2),is([ds({type:Boolean})],Vl.prototype,"clearable",2),is([ds({type:Boolean,reflect:!0})],Vl.prototype,"disabled",2),is([ds()],Vl.prototype,"placeholder",2),is([ds({type:Boolean,reflect:!0})],Vl.prototype,"readonly",2),is([ds({attribute:"password-toggle",type:Boolean})],Vl.prototype,"passwordToggle",2),is([ds({attribute:"password-visible",type:Boolean})],Vl.prototype,"passwordVisible",2),is([ds({attribute:"no-spin-buttons",type:Boolean})],Vl.prototype,"noSpinButtons",2),is([ds({reflect:!0})],Vl.prototype,"form",2),is([ds({type:Boolean,reflect:!0})],Vl.prototype,"required",2),is([ds()],Vl.prototype,"pattern",2),is([ds({type:Number})],Vl.prototype,"minlength",2),is([ds({type:Number})],Vl.prototype,"maxlength",2),is([ds()],Vl.prototype,"min",2),is([ds()],Vl.prototype,"max",2),is([ds()],Vl.prototype,"step",2),is([ds()],Vl.prototype,"autocapitalize",2),is([ds()],Vl.prototype,"autocorrect",2),is([ds()],Vl.prototype,"autocomplete",2),is([ds({type:Boolean})],Vl.prototype,"autofocus",2),is([ds()],Vl.prototype,"enterkeyhint",2),is([ds({type:Boolean,converter:{fromAttribute:t=>!(!t||"false"===t),toAttribute:t=>t?"true":"false"}})],Vl.prototype,"spellcheck",2),is([ds()],Vl.prototype,"inputmode",2),is([ks("disabled",{waitUntilFirstUpdate:!0})],Vl.prototype,"handleDisabledChange",1),is([ks("step",{waitUntilFirstUpdate:!0})],Vl.prototype,"handleStepChange",1),is([ks("value",{waitUntilFirstUpdate:!0})],Vl.prototype,"handleValueChange",1),Vl.define("sl-input");const ql=document.createElement("template");ql.innerHTML="<dom-module id=\"sl-katapult-style\">\n  <template>\n    <style>\n      \n// Default styles for the elements\n    :host {\n        --header-spacing: 16px !important;\n        --body-spacing: 8px 16px !important;\n        --footer-spacing: 16px !important;\n    }\n    sl-dialog::part(panel) {\n        border-radius: 16px;\n        --width: fit-content;\n    }\n    sl-dialog::part(body), sl-dialog::part(footer), sl-dialog::part(title) {\n        padding: 16px;\n    }\n    sl-button::part(label) {\n        font-family: Roboto;\n        font-size: 16px;\n        font-weight: normal;\n    }\n    sl-button::part(base) {\n        border-radius: 16px;\n    }\n    sl-input::part(base) {\n        box-shadow: none !important;\n        font-family: Roboto;\n        outline: none;\n        border-radius: 0;\n        border: none;\n        border-bottom: 1px solid var(--sl-color-gray-500);\n    }\n    sl-input::part(form-control-label) {\n        font-size: 12px;\n    }\n    sl-input::part(password-toggle-button),\n    sl-input::part(clear-button) {\n        width: fit-content;\n        padding: 0 4px;\n    }\n    sl-icon {\n        color: var(--primary-color, darkgrey);\n        font-size: 24px;\n    }\n    sl-icon-button {\n        color: var(--primary-color, darkgrey);\n        font-size: 24px;\n    }\n    sl-avatar {\n        --size: 30px;\n    }\n    sl-menu {\n        border: none;\n        border-radius: 16px;\n    }\n    sl-icon-button::part(base) {\n        padding: 0;\n    }\n    sl-dropdown::part(panel) {\n        background: white;\n        border-radius: 16px;\n    }\n\n// Attribute styles\n    sl-dialog[no-x]::part(close-button) {\n        display: none;\n    }\n    sl-dialog[no-actions]::part(header-actions) {\n        display: none;\n    }\n    sl-dialog[filled]::part(header) {\n        color: white;\n        border-radius: 16px 16px 0 0;\n        background: var(--primary-color, grey);\n    }\n    sl-dialog[filled]::part(title) {\n        color: white;\n        border-radius: 16px 16px 0 0;\n        background: var(--primary-color, grey);\n    }\n    sl-dialog[centered]::part(header) {\n        text-align: center;\n    }\n    sl-button[variant='primary']::part(base) {\n        background: var(--primary-color, lightgrey);\n    }\n    sl-button[variant='primary']::part(base):hover {\n        border-color: var(--secondary-color, grey);\n    }\n    sl-button[variant='default']::part(base) {\n        background: white !important;\n    }\n    sl-button[variant='default']::part(base):hover {\n        background: white !important;\n        border-color: var(--primary-color, grey);\n        color: var(--primary-color, black);\n    }\n    sl-icon[small] {\n        font-size: 20px;\n    }\n\n// Revisit after searchable dropdown completed\n    sl-select::part(combobox) {\n        background: none;\n        border-radius: 0;\n        border: none;\n        border-bottom: 1px solid var(--sl-color-gray-500);\n    }\n\n    </style>\n  </template>\n</dom-module>",document.head.appendChild(ql.content),Is.define("sl-icon");const Wl=document.createElement("template");Wl.innerHTML='<dom-module id="flex">\n  <template>\n    <style>\n      \n  [flex] {\n    display: flex;\n  }\n  [column], paper-dialog[flex] {\n    flex-direction: column;\n  }\n  [overflow-hidden] {\n    overflow: hidden;\n  }\n  [overflow] {\n    overflow: unset;\n  }\n  [align-start] {\n    align-items: flex-start;\n  }\n  [align-end] {\n    align-items: flex-end;\n  }\n  [align-center] {\n    align-items: center;\n  }\n  [align-stretch] {\n    align-items: stretch;\n  }\n  [justify-start] {\n    justify-content: flex-start;\n  }         \n  [justify-center] {\n    justify-content: center;\n  }\n  [justify-end] {\n    justify-content: flex-end;\n  }\n  [justify-space-between], [space-between] {\n    justify-content: space-between;\n  }\n  [justify-stretch] {\n    justify-content: stretch;\n  }\n  [spacer], [grow] {\n    flex-grow: 1;\n  }\n  [spacer]:not([collapse]) {\n    min-width: 16px;\n  }\n  [line] {\n    border-bottom: 1px solid var(--border-color);\n  }\n  [text-center], p[center] {\n    text-align: center;\n  }\n  [pointer]:hover {\n    cursor: pointer;\n  }\n  [grab]:hover {\n    cursor: grab;\n  }\n  [faded] {\n    opacity: 0.8;\n  }\n  [border-box] {\n    box-sizing: border-box;\n  }\n  [wrap] {\n    flex-wrap: wrap;\n  }\n  [italic] {\n    font-style: italic;\n  }\n  [lighter] {\n    font-weight: lighter;\n  }\n  [bold] {\n    font-weight: bold;\n  }\n  [no-shrink] {\n    flex-shrink: 0;\n  }\n  [no-grow] {\n    flex-grow: 0;\n  }\n  [align-self-center] {\n    align-self: center;\n  }\n  [align-self-stretch] {\n    align-self: stretch;\n  }\n  [buttons-container] {\n    display: flex;\n    flex-direction: row;\n    flex-grow: 1;\n  }\n  [buttons-container] katapult-button:not(:last-of-type) {\n    margin-right: 16px;\n  }\n  [drag-handle]:hover {\n    cursor: grab;\n  }\n  [drag-handle]:active {\n    cursor: grabbing;\n  }   \n  [no-user-select] {\n    user-select: none;\n    -webkit-user-select: none; /* Safari */\n  }\n  [width-fill-available] {\n    width: -webkit-fill-available;\n  }\n\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(Wl.content);window.customElements.define("sl-job-picker",class extends _e{static get template(){return be`
      <style include="flex sl-katapult-style">
        .set-width {
          width: 312px;
        }
        #job-picker::part(overlay),
        #new-job-dialog::part(overlay) {
          display: none;
        }
        #job-picker::part(base),
        #new-job-dialog::part(base) {
          max-width: fit-content;
          max-height: fit-content;
          margin: auto;
        }
        #new-job-dialog::part(panel) {
          --width: 400px;
        }
      </style>
      <sl-dialog id="job-picker" filled centered no-actions open="[[pickerOpened]]" label="JOB PICKER">
        <div slot="header-actions"></div>
        <div flex row align-center>
          <template is="dom-if" if="{{!exists(jobData)}}">
            <sl-select class="set-width" disabled placeholder="Loading...">
              <sl-icon library="material" name="arrow_drop_down" slot="expand-icon"></sl-icon>
            </sl-select>
          </template>
          <template is="dom-if" if="{{exists(jobData)}}">
            <sl-select class="set-width" hoist placeholder="Select a Job" value="select_a_job">
              <sl-icon library="material" name="arrow_drop_down" slot="expand-icon"></sl-icon>
              <template is="dom-repeat" items="{{jobData}}">
                <sl-option>{{item.name}}</sl-option>
              </template>
            </sl-select>
          </template>
          <!-- <sl-icon style="margin-left: 12px; color: var(--sl-color-gray-700);" library="material" name="folder_round"></sl-icon> -->
        </div>
        <div flex space-between slot="footer">
          <sl-button id="job-picker-close" variant="default" on-click="close">Skip</sl-button>
          <sl-button variant="primary" on-click="openCreateJob">Create New Job</sl-button>
        </div>
      </sl-dialog>
      <sl-dialog id="new-job-dialog" filled centered no-actions open="[[newJobOpened]]" label="CREATE NEW JOB">
        <!-- <sl-input placeholder="Enter a new Job Name" label="Enter a new Job Name"></sl-input>
        <div>Searchable dropdown goes here</div> -->
        <div flex space-between slot="footer">
          <sl-button id="new-job-close" variant="default" on-click="close">Cancel</sl-button>
          <sl-button variant="primary" on-click="sendJobCall">Create Job</sl-button>
        </div>
      </sl-dialog>
    `}static get is(){return"sl-job-picker"}static get properties(){return{jobData:{type:Array,value:[]},refreshAPICheck:{type:Boolean,value:!1},apiKey:{type:String,computed:"getAPI(refreshAPICheck)"},pickerOpened:{type:Boolean,value:!0,reflect:!0},newJobOpened:{type:Boolean,value:!1,reflect:!0},currentDb:{type:String,value:"dcs"}}}static get observers(){return[]}constructor(){super()}ready(){super.ready(),window.addEventListener("apiKeyChange",async()=>{this.refreshAPICheck=!this.refreshAPICheck,await this.getJobData()}),this.apiKey&&this.getJobData()}exists(t){return 0!=t.length}close(t){switch(t.currentTarget.id){case"job-picker-close":this.set("pickerOpened",!1);break;case"new-job-close":this.set("newJobOpened",!1)}}getAPI(t){return new URLSearchParams(window.location.search).get("api_key")||localStorage.getItem("apiKey")||""}async getJobData(){const t="database"!=this.currentDb?this.currentDb+".":"",e=await fetch(`https://${t}katapultpro.com/api/v3/jobs?api_key=${this.apiKey}`,{method:"GET"}).then(t=>t.json());this.set("jobData",e.data)}openCreateJob(){this.set("newJobOpened",!0)}async sendJobCall(){const t="database"!=this.currentDb?this.currentDb+".":"";await fetch(`https://${t}katapultpro.com/api/v3/jobs?api_key=${this.apiKey}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:"Annika POST Test",model:"katapult",metadata:null})})}});var Kl=$r`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,Jl=class extends fs{constructor(){super(...arguments),this.localize=new qi(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=t=>{this.open&&"Escape"===t.key&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{var e;if("Escape"===t.key&&this.open&&!this.closeWatcher)return t.stopPropagation(),this.focusOnTrigger(),void this.hide();if("Tab"===t.key){if(this.open&&"sl-menu-item"===(null==(e=document.activeElement)?void 0:e.tagName.toLowerCase()))return t.preventDefault(),this.hide(),void this.focusOnTrigger();const n=(t,e)=>{if(!t)return null;const o=t.closest(e);if(o)return o;const r=t.getRootNode();return r instanceof ShadowRoot?n(r.host,e):null};setTimeout(()=>{var t;const e=(null==(t=this.containingElement)?void 0:t.getRootNode())instanceof ShadowRoot?Il():document.activeElement;this.containingElement&&n(e,this.containingElement.tagName.toLowerCase())===this.containingElement||this.hide()})}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{const e=t.target;this.stayOpenOnSelect||"sl-menu"!==e.tagName.toLowerCase()||(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const t=this.trigger.assignedElements({flatten:!0})[0];"function"==typeof(null==t?void 0:t.focus)&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>"sl-menu"===t.tagName.toLowerCase())}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key))return t.preventDefault(),void this.handleTriggerClick();const e=this.getMenu();if(e){const n=e.getAllItems(),o=n[0],r=n[n.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),n.length>0&&this.updateComplete.then(()=>{"ArrowDown"!==t.key&&"Home"!==t.key||(e.setCurrentItem(o),o.focus()),"ArrowUp"!==t.key&&"End"!==t.key||(e.setCurrentItem(r),r.focus())}))}}handleTriggerKeyUp(t){" "===t.key&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(t=>function(t){var e,n;const o=zl(t);return{start:null!=(e=o[0])?e:null,end:null!=(n=o[o.length-1])?n:null}}(t).start);let e;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":e=t.button;break;default:e=t}e.setAttribute("aria-haspopup","true"),e.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,Cl(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Cl(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var t;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var t;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),null==(t=this.closeWatcher)||t.destroy()}async handleOpenChange(){if(this.disabled)this.open=!1;else if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await kl(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=xl(this,"dropdown.show",{dir:this.localize.dir()});await Sl(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await kl(this);const{keyframes:t,options:e}=xl(this,"dropdown.hide",{dir:this.localize.dir()});await Sl(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return ui`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${Ws(this.sync?this.sync:void 0)}
        class=${Hs({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};Jl.styles=[Wi,Kl],Jl.dependencies={"sl-popup":bl},is([hs(".dropdown")],Jl.prototype,"popup",2),is([hs(".dropdown__trigger")],Jl.prototype,"trigger",2),is([hs(".dropdown__panel")],Jl.prototype,"panel",2),is([ds({type:Boolean,reflect:!0})],Jl.prototype,"open",2),is([ds({reflect:!0})],Jl.prototype,"placement",2),is([ds({type:Boolean,reflect:!0})],Jl.prototype,"disabled",2),is([ds({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],Jl.prototype,"stayOpenOnSelect",2),is([ds({attribute:!1})],Jl.prototype,"containingElement",2),is([ds({type:Number})],Jl.prototype,"distance",2),is([ds({type:Number})],Jl.prototype,"skidding",2),is([ds({type:Boolean})],Jl.prototype,"hoist",2),is([ds({reflect:!0})],Jl.prototype,"sync",2),is([ks("open",{waitUntilFirstUpdate:!0})],Jl.prototype,"handleOpenChange",1),wl("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}}),wl("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}}),Jl.define("sl-dropdown");var Yl=$r`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,Gl=class extends fs{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(t){const e=["menuitem","menuitemcheckbox"],n=t.composedPath(),o=n.find(t=>{var n;return e.includes((null==(n=null==t?void 0:t.getAttribute)?void 0:n.call(t,"role"))||"")});if(!o)return;if(n.find(t=>{var e;return"menu"===(null==(e=null==t?void 0:t.getAttribute)?void 0:e.call(t,"role"))})!==this)return;const r=o;"checkbox"===r.type&&(r.checked=!r.checked),this.emit("sl-select",{detail:{item:r}})}handleKeyDown(t){if("Enter"===t.key||" "===t.key){const e=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),null==e||e.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){const e=this.getAllItems(),n=this.getCurrentItem();let o=n?e.indexOf(n):0;e.length>0&&(t.preventDefault(),t.stopPropagation(),"ArrowDown"===t.key?o++:"ArrowUp"===t.key?o--:"Home"===t.key?o=0:"End"===t.key&&(o=e.length-1),o<0&&(o=e.length-1),o>e.length-1&&(o=0),this.setCurrentItem(e[o]),e[o].focus())}}handleMouseDown(t){const e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e)}handleSlotChange(){const t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0])}isMenuItem(t){var e;return"sl-menu-item"===t.tagName.toLowerCase()||["menuitem","menuitemcheckbox","menuitemradio"].includes(null!=(e=t.getAttribute("role"))?e:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.inert||!this.isMenuItem(t)))}getCurrentItem(){return this.getAllItems().find(t=>"0"===t.getAttribute("tabindex"))}setCurrentItem(t){this.getAllItems().forEach(e=>{e.setAttribute("tabindex",e===t?"0":"-1")})}render(){return ui`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Gl.styles=[Wi,Yl],is([hs("slot")],Gl.prototype,"defaultSlot",2),Gl.define("sl-menu");var Xl=$r`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;const Zl=(t,e)=>{const n=t._$AN;if(void 0===n)return!1;for(const t of n)t._$AO?.(e,!1),Zl(t,e);return!0},Ql=t=>{let e,n;do{if(void 0===(e=t._$AM))break;n=e._$AN,n.delete(t),t=e}while(0===n?.size)},tc=t=>{for(let e;e=t._$AM;t=e){let n=e._$AN;if(void 0===n)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),oc(e)}};function ec(t){void 0!==this._$AN?(Ql(this),this._$AM=t,tc(this)):this._$AM=t}function nc(t,e=!1,n=0){const o=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(e)if(Array.isArray(o))for(let t=n;t<o.length;t++)Zl(o[t],!1),Ql(o[t]);else null!=o&&(Zl(o,!1),Ql(o));else Zl(this,t)}const oc=t=>{t.type==Ls&&(t._$AP??=nc,t._$AQ??=ec)};class rc extends Fs{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,n){super._$AT(t,e,n),tc(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(Zl(this,t),Ql(this))}setValue(t){if(Es(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ic{}const sc=new WeakMap,ac=Rs(class extends rc{render(t){return mi}update(t,[e]){const n=e!==this.G;return n&&void 0!==this.G&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),mi}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.G){const e=this.ht??globalThis;let n=sc.get(e);void 0===n&&(n=new WeakMap,sc.set(e,n)),void 0!==n.get(this.G)&&this.G.call(this.ht,void 0),n.set(this.G,t),void 0!==t&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return"function"==typeof this.G?sc.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var lc=class{constructor(t,e){this.popupRef=new ic,this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=t=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${t.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${t.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=t=>{switch(t.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":t.target!==this.host&&(t.preventDefault(),t.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(t)}},this.handleClick=t=>{var e;t.target===this.host?(t.preventDefault(),t.stopPropagation()):t.target instanceof Element&&("sl-menu-item"===t.target.tagName||(null==(e=t.target.role)?void 0:e.startsWith("menuitem")))&&this.disableSubmenu()},this.handleFocusOut=t=>{t.relatedTarget&&t.relatedTarget instanceof Element&&this.host.contains(t.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=t=>{t.stopPropagation()},this.handlePopupReposition=()=>{const t=this.host.renderRoot.querySelector("slot[name='submenu']"),e=null==t?void 0:t.assignedElements({flatten:!0}).filter(t=>"sl-menu"===t.localName)[0],n="rtl"===getComputedStyle(this.host).direction;if(!e)return;const{left:o,top:r,width:i,height:s}=e.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${n?o+i:o}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${r}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${n?o+i:o}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${r+s}px`)},(this.host=t).addController(this),this.hasSlotController=e}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(t){const e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e)return void console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);let n=null;for(const t of e.assignedElements())if(n=t.querySelectorAll("sl-menu-item, [role^='menuitem']"),0!==n.length)break;if(n&&0!==n.length){n[0].setAttribute("tabindex","0");for(let t=1;t!==n.length;++t)n[t].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?n[0]instanceof HTMLElement&&n[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{n[0]instanceof HTMLElement&&n[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var t;if(!(null==(t=this.host.parentElement)?void 0:t.computedStyleMap))return;const e=this.host.parentElement.computedStyleMap(),n=["padding-top","border-top-width","margin-top"].reduce((t,n)=>{var o;const r=null!=(o=e.get(n))?o:new CSSUnitValue(0,"px");return t-(r instanceof CSSUnitValue?r:new CSSUnitValue(0,"px")).to("px").value},0);this.skidding=n}isExpanded(){return!!this.popupRef.value&&this.popupRef.value.active}renderSubmenu(){const t="rtl"===getComputedStyle(this.host).direction;return this.isConnected?ui`
      <sl-popup
        ${ac(this.popupRef)}
        placement=${t?"left-start":"right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:ui` <slot name="submenu" hidden></slot> `}},cc=class extends fs{constructor(){super(...arguments),this.localize=new qi(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new Ss(this,"submenu"),this.submenuController=new lc(this,this.hasSlotController),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const t=this.getTextLabel();void 0!==this.cachedTextLabel?t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1})):this.cachedTextLabel=t}handleCheckedChange(){if(this.checked&&"checkbox"!==this.type)return this.checked=!1,void console.error('The checked attribute can only be used on menu items with type="checkbox"',this);"checkbox"===this.type?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){"checkbox"===this.type?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return function(t){if(!t)return"";const e=t.assignedNodes({flatten:!0});let n="";return[...e].forEach(t=>{t.nodeType===Node.TEXT_NODE&&(n+=t.textContent)}),n}(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const t="rtl"===this.localize.dir(),e=this.submenuController.isExpanded();return ui`
      <div
        id="anchor"
        part="base"
        class=${Hs({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":e})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!e}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${t?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?ui` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};cc.styles=[Wi,Xl],cc.dependencies={"sl-icon":Is,"sl-popup":bl,"sl-spinner":ms},is([hs("slot:not([name])")],cc.prototype,"defaultSlot",2),is([hs(".menu-item")],cc.prototype,"menuItem",2),is([ds()],cc.prototype,"type",2),is([ds({type:Boolean,reflect:!0})],cc.prototype,"checked",2),is([ds()],cc.prototype,"value",2),is([ds({type:Boolean,reflect:!0})],cc.prototype,"loading",2),is([ds({type:Boolean,reflect:!0})],cc.prototype,"disabled",2),is([ks("checked")],cc.prototype,"handleCheckedChange",1),is([ks("disabled")],cc.prototype,"handleDisabledChange",1),is([ks("type")],cc.prototype,"handleTypeChange",1),cc.define("sl-menu-item");var dc=$r`
  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`,pc=class extends fs{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){const t=ui`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `;let e=ui``;return e=this.initials?ui`<div part="initials" class="avatar__initials">${this.initials}</div>`:ui`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,ui`
      <div
        part="base"
        class=${Hs({avatar:!0,"avatar--circle":"circle"===this.shape,"avatar--rounded":"rounded"===this.shape,"avatar--square":"square"===this.shape})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?t:e}
      </div>
    `}};pc.styles=[Wi,dc],pc.dependencies={"sl-icon":Is},is([ps()],pc.prototype,"hasError",2),is([ds()],pc.prototype,"image",2),is([ds()],pc.prototype,"label",2),is([ds()],pc.prototype,"initials",2),is([ds()],pc.prototype,"loading",2),is([ds({reflect:!0})],pc.prototype,"shape",2),is([ks("image")],pc.prototype,"handleImageChange",1),pc.define("sl-avatar"),Gs.define("sl-icon-button");const hc=function(){var t=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];function e(t,e){var n=t[0],o=t[1],r=t[2],i=t[3];o=((o+=((r=((r+=((i=((i+=((n=((n+=(o&r|~o&i)+e[0]-680876936|0)<<7|n>>>25)+o|0)&o|~n&r)+e[1]-389564586|0)<<12|i>>>20)+n|0)&n|~i&o)+e[2]+606105819|0)<<17|r>>>15)+i|0)&i|~r&n)+e[3]-1044525330|0)<<22|o>>>10)+r|0,o=((o+=((r=((r+=((i=((i+=((n=((n+=(o&r|~o&i)+e[4]-176418897|0)<<7|n>>>25)+o|0)&o|~n&r)+e[5]+1200080426|0)<<12|i>>>20)+n|0)&n|~i&o)+e[6]-1473231341|0)<<17|r>>>15)+i|0)&i|~r&n)+e[7]-45705983|0)<<22|o>>>10)+r|0,o=((o+=((r=((r+=((i=((i+=((n=((n+=(o&r|~o&i)+e[8]+1770035416|0)<<7|n>>>25)+o|0)&o|~n&r)+e[9]-1958414417|0)<<12|i>>>20)+n|0)&n|~i&o)+e[10]-42063|0)<<17|r>>>15)+i|0)&i|~r&n)+e[11]-1990404162|0)<<22|o>>>10)+r|0,o=((o+=((r=((r+=((i=((i+=((n=((n+=(o&r|~o&i)+e[12]+1804603682|0)<<7|n>>>25)+o|0)&o|~n&r)+e[13]-40341101|0)<<12|i>>>20)+n|0)&n|~i&o)+e[14]-1502002290|0)<<17|r>>>15)+i|0)&i|~r&n)+e[15]+1236535329|0)<<22|o>>>10)+r|0,o=((o+=((r=((r+=((i=((i+=((n=((n+=(o&i|r&~i)+e[1]-165796510|0)<<5|n>>>27)+o|0)&r|o&~r)+e[6]-1069501632|0)<<9|i>>>23)+n|0)&o|n&~o)+e[11]+643717713|0)<<14|r>>>18)+i|0)&n|i&~n)+e[0]-373897302|0)<<20|o>>>12)+r|0,o=((o+=((r=((r+=((i=((i+=((n=((n+=(o&i|r&~i)+e[5]-701558691|0)<<5|n>>>27)+o|0)&r|o&~r)+e[10]+38016083|0)<<9|i>>>23)+n|0)&o|n&~o)+e[15]-660478335|0)<<14|r>>>18)+i|0)&n|i&~n)+e[4]-405537848|0)<<20|o>>>12)+r|0,o=((o+=((r=((r+=((i=((i+=((n=((n+=(o&i|r&~i)+e[9]+568446438|0)<<5|n>>>27)+o|0)&r|o&~r)+e[14]-1019803690|0)<<9|i>>>23)+n|0)&o|n&~o)+e[3]-187363961|0)<<14|r>>>18)+i|0)&n|i&~n)+e[8]+1163531501|0)<<20|o>>>12)+r|0,o=((o+=((r=((r+=((i=((i+=((n=((n+=(o&i|r&~i)+e[13]-1444681467|0)<<5|n>>>27)+o|0)&r|o&~r)+e[2]-51403784|0)<<9|i>>>23)+n|0)&o|n&~o)+e[7]+1735328473|0)<<14|r>>>18)+i|0)&n|i&~n)+e[12]-1926607734|0)<<20|o>>>12)+r|0,o=((o+=((r=((r+=((i=((i+=((n=((n+=(o^r^i)+e[5]-378558|0)<<4|n>>>28)+o|0)^o^r)+e[8]-2022574463|0)<<11|i>>>21)+n|0)^n^o)+e[11]+1839030562|0)<<16|r>>>16)+i|0)^i^n)+e[14]-35309556|0)<<23|o>>>9)+r|0,o=((o+=((r=((r+=((i=((i+=((n=((n+=(o^r^i)+e[1]-1530992060|0)<<4|n>>>28)+o|0)^o^r)+e[4]+1272893353|0)<<11|i>>>21)+n|0)^n^o)+e[7]-155497632|0)<<16|r>>>16)+i|0)^i^n)+e[10]-1094730640|0)<<23|o>>>9)+r|0,o=((o+=((r=((r+=((i=((i+=((n=((n+=(o^r^i)+e[13]+681279174|0)<<4|n>>>28)+o|0)^o^r)+e[0]-358537222|0)<<11|i>>>21)+n|0)^n^o)+e[3]-722521979|0)<<16|r>>>16)+i|0)^i^n)+e[6]+76029189|0)<<23|o>>>9)+r|0,o=((o+=((r=((r+=((i=((i+=((n=((n+=(o^r^i)+e[9]-640364487|0)<<4|n>>>28)+o|0)^o^r)+e[12]-421815835|0)<<11|i>>>21)+n|0)^n^o)+e[15]+530742520|0)<<16|r>>>16)+i|0)^i^n)+e[2]-995338651|0)<<23|o>>>9)+r|0,o=((o+=((i=((i+=(o^((n=((n+=(r^(o|~i))+e[0]-198630844|0)<<6|n>>>26)+o|0)|~r))+e[7]+1126891415|0)<<10|i>>>22)+n|0)^((r=((r+=(n^(i|~o))+e[14]-1416354905|0)<<15|r>>>17)+i|0)|~n))+e[5]-57434055|0)<<21|o>>>11)+r|0,o=((o+=((i=((i+=(o^((n=((n+=(r^(o|~i))+e[12]+1700485571|0)<<6|n>>>26)+o|0)|~r))+e[3]-1894986606|0)<<10|i>>>22)+n|0)^((r=((r+=(n^(i|~o))+e[10]-1051523|0)<<15|r>>>17)+i|0)|~n))+e[1]-2054922799|0)<<21|o>>>11)+r|0,o=((o+=((i=((i+=(o^((n=((n+=(r^(o|~i))+e[8]+1873313359|0)<<6|n>>>26)+o|0)|~r))+e[15]-30611744|0)<<10|i>>>22)+n|0)^((r=((r+=(n^(i|~o))+e[6]-1560198380|0)<<15|r>>>17)+i|0)|~n))+e[13]+1309151649|0)<<21|o>>>11)+r|0,o=((o+=((i=((i+=(o^((n=((n+=(r^(o|~i))+e[4]-145523070|0)<<6|n>>>26)+o|0)|~r))+e[11]-1120210379|0)<<10|i>>>22)+n|0)^((r=((r+=(n^(i|~o))+e[2]+718787259|0)<<15|r>>>17)+i|0)|~n))+e[9]-343485551|0)<<21|o>>>11)+r|0,t[0]=n+t[0]|0,t[1]=o+t[1]|0,t[2]=r+t[2]|0,t[3]=i+t[3]|0}function n(t){var e,n=[];for(e=0;e<64;e+=4)n[e>>2]=t.charCodeAt(e)+(t.charCodeAt(e+1)<<8)+(t.charCodeAt(e+2)<<16)+(t.charCodeAt(e+3)<<24);return n}function o(t){var e,n=[];for(e=0;e<64;e+=4)n[e>>2]=t[e]+(t[e+1]<<8)+(t[e+2]<<16)+(t[e+3]<<24);return n}function r(t){var o,r,i,s,a,l,c=t.length,d=[1732584193,-271733879,-1732584194,271733878];for(o=64;o<=c;o+=64)e(d,n(t.substring(o-64,o)));for(r=(t=t.substring(o-64)).length,i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],o=0;o<r;o+=1)i[o>>2]|=t.charCodeAt(o)<<(o%4<<3);if(i[o>>2]|=128<<(o%4<<3),o>55)for(e(d,i),o=0;o<16;o+=1)i[o]=0;return s=(s=8*c).toString(16).match(/(.*?)(.{0,8})$/),a=parseInt(s[2],16),l=parseInt(s[1],16)||0,i[14]=a,i[15]=l,e(d,i),d}function i(e){var n,o="";for(n=0;n<4;n+=1)o+=t[e>>8*n+4&15]+t[e>>8*n&15];return o}function s(t){var e;for(e=0;e<t.length;e+=1)t[e]=i(t[e]);return t.join("")}function a(t){return/[\u0080-\uFFFF]/.test(t)&&(t=unescape(encodeURIComponent(t))),t}function l(t){var e,n=[],o=t.length;for(e=0;e<o-1;e+=2)n.push(parseInt(t.substr(e,2),16));return String.fromCharCode.apply(String,n)}function c(){this.reset()}return s(r("hello")),"undefined"==typeof ArrayBuffer||ArrayBuffer.prototype.slice||function(){function t(t,e){return(t=0|t||0)<0?Math.max(t+e,0):Math.min(t,e)}ArrayBuffer.prototype.slice=function(e,n){var o,r,i,s,a=this.byteLength,l=t(e,a),c=a;return void 0!==n&&(c=t(n,a)),l>c?new ArrayBuffer(0):(o=c-l,r=new ArrayBuffer(o),i=new Uint8Array(r),s=new Uint8Array(this,l,o),i.set(s),r)}}(),c.prototype.append=function(t){return this.appendBinary(a(t)),this},c.prototype.appendBinary=function(t){this._buff+=t,this._length+=t.length;var o,r=this._buff.length;for(o=64;o<=r;o+=64)e(this._hash,n(this._buff.substring(o-64,o)));return this._buff=this._buff.substring(o-64),this},c.prototype.end=function(t){var e,n,o=this._buff,r=o.length,i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(e=0;e<r;e+=1)i[e>>2]|=o.charCodeAt(e)<<(e%4<<3);return this._finish(i,r),n=s(this._hash),t&&(n=l(n)),this.reset(),n},c.prototype.reset=function(){return this._buff="",this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},c.prototype.getState=function(){return{buff:this._buff,length:this._length,hash:this._hash.slice()}},c.prototype.setState=function(t){return this._buff=t.buff,this._length=t.length,this._hash=t.hash,this},c.prototype.destroy=function(){delete this._hash,delete this._buff,delete this._length},c.prototype._finish=function(t,n){var o,r,i,s=n;if(t[s>>2]|=128<<(s%4<<3),s>55)for(e(this._hash,t),s=0;s<16;s+=1)t[s]=0;o=(o=8*this._length).toString(16).match(/(.*?)(.{0,8})$/),r=parseInt(o[2],16),i=parseInt(o[1],16)||0,t[14]=r,t[15]=i,e(this._hash,t)},c.hash=function(t,e){return c.hashBinary(a(t),e)},c.hashBinary=function(t,e){var n=s(r(t));return e?l(n):n},c.ArrayBuffer=function(){this.reset()},c.ArrayBuffer.prototype.append=function(t){var n,r,i,s,a=(r=this._buff.buffer,i=t,(s=new Uint8Array(r.byteLength+i.byteLength)).set(new Uint8Array(r)),s.set(new Uint8Array(i),r.byteLength),s),l=a.length;for(this._length+=t.byteLength,n=64;n<=l;n+=64)e(this._hash,o(a.subarray(n-64,n)));return this._buff=n-64<l?new Uint8Array(a.buffer.slice(n-64)):new Uint8Array(0),this},c.ArrayBuffer.prototype.end=function(t){var e,n,o=this._buff,r=o.length,i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(e=0;e<r;e+=1)i[e>>2]|=o[e]<<(e%4<<3);return this._finish(i,r),n=s(this._hash),t&&(n=l(n)),this.reset(),n},c.ArrayBuffer.prototype.reset=function(){return this._buff=new Uint8Array(0),this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},c.ArrayBuffer.prototype.getState=function(){var t,e=c.prototype.getState.call(this);return e.buff=(t=e.buff,String.fromCharCode.apply(null,new Uint8Array(t))),e},c.ArrayBuffer.prototype.setState=function(t){return t.buff=function(t,e){var n,o=t.length,r=new ArrayBuffer(o),i=new Uint8Array(r);for(n=0;n<o;n+=1)i[n]=t.charCodeAt(n);return e?i:r}(t.buff,!0),c.prototype.setState.call(this,t)},c.ArrayBuffer.prototype.destroy=c.prototype.destroy,c.ArrayBuffer.prototype._finish=c.prototype._finish,c.ArrayBuffer.hash=function(t,n){var r=function(t){var n,r,i,s,a,l,c=t.length,d=[1732584193,-271733879,-1732584194,271733878];for(n=64;n<=c;n+=64)e(d,o(t.subarray(n-64,n)));for(r=(t=n-64<c?t.subarray(n-64):new Uint8Array(0)).length,i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],n=0;n<r;n+=1)i[n>>2]|=t[n]<<(n%4<<3);if(i[n>>2]|=128<<(n%4<<3),n>55)for(e(d,i),n=0;n<16;n+=1)i[n]=0;return s=(s=8*c).toString(16).match(/(.*?)(.{0,8})$/),a=parseInt(s[2],16),l=parseInt(s[1],16)||0,i[14]=a,i[15]=l,e(d,i),d}(new Uint8Array(t)),i=s(r);return n?l(i):i},c}();window.customElements.define("sl-toolbar",class extends _e{static get template(){return be`
      <style include="flex sl-katapult-style">
        :host {
          display: flex;
          flex-direction: column;
          width: 100%;
          z-index: 4;
        }
        ::slotted([title]) {
          font-size: var(--sl-font-size-large);
          color: var(--primary-color);
          font-weight: var(--sl-font-weight-bold);
        }
        #toolbar {
          height: 56px;
          padding: 4px 8px 4px 16px;
          box-sizing: border-box;
          background-color: white;
          box-shadow: var(--sl-shadow-medium);
        }
        .toolbar-icon {
          padding: 6px 12px;
        }
        sl-menu-item::part(base) {
          align-items: center;
          background: none;
        }
        sl-menu-item::part(prefix) {
          margin-bottom: 5px;
        }
        #help-dropdown::part(panel) {
          max-width: 100vw;
          width: 500px;
          padding: 24px;
        }
        #nine-dot-dropdown sl-menu-item::part(checked-icon),
        #nine-dot-dropdown sl-menu-item::part(suffix),
        #nine-dot-dropdown sl-menu-item::part(submenu-icon) {
          display: none;
        }
        #nine-dot-dropdown sl-menu-item::part(base) {
          padding: 0;
          width: 78px;
          height: 78px;
          max-width: 78px;
          max-height: 78px;
          flex-direction: column;
        }
        #nine-dot-dropdown sl-menu-item::part(label) {
          flex-direction: row;
          justify-content: center;
          flex-wrap: wrap;
        }
        #nine-dot-dropdown sl-menu-item sl-icon {
          display: flex;
          align-items: center;
          margin: auto;
        }
        #nine-dot-dropdown sl-menu-item::part(label) {
          margin: 0;
          align-items: start;
          max-height: 3em;
          white-space: normal;
          text-align: center;
          line-height: normal;
          font-size: 14px;
          color: black;
        }
        #nine-dot-dropdown sl-menu {
          width: 250px;
          padding: 16px 5px 0 5px;
        }
        div.software-details {
          border-top: 1px solid var(--sl-color-gray-300);
          display: flex;
          flex-direction: column;
          font-size: 10pt;
          gap: 4px;
          padding-top: 16px;
        }
        div.software-details > p {
          margin: 0;
        }
        #logo {
          height: 36px;
          margin-right: 16px;
          pointer-events: none;
          image-rendering: -moz-crisp-edges;
          image-rendering: -o-crisp-edges;
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
          -ms-interpolation-mode: nearest-neighbor;
        }
        * {
          font-family: Roboto !important;
        }
      </style>
      <div flex row id="toolbar">
        <!-- Left Container -->
        <div flex row align-center grow justify-start>
          <slot name="leftOfLogo"></slot>
          <template is="dom-if" if="{{logoLink}}">
            <img id="logo" src="{{logoLink}}" />
          </template>
          <slot name="rightOfLogo"></slot>
        </div>
        <!-- Center Container -->
        <div flex row align-center grow justify-center>
          <slot name="center"></slot>
        </div>
        <!-- Right Container -->
        <div flex row align-center grow justify-end>
          <slot name="right"></slot>
          <div flex row align-center>
            <!-- FOR THIS DROPDOWN, WE NEED TO FIX THE ANIMATION ON DROPDOWN.HIDE FROM RESIZING WEIRD DUE TO WIDTH STYLING -->
            <sl-dropdown id="help-dropdown">
              <sl-icon-button circle slot="trigger" class="toolbar-icon" pointer library="material" name="help_round"></sl-icon-button>
              <template is="dom-if" if="{{or(supportNum, supportEmail)}}">
                <p style="margin-top: 0;">
                  If you have questions or need support, please
                  <template is="dom-if" if="{{supportNum}}">call us at [[supportNum]]</template>
                  <template is="dom-if" if="{{and(supportNum, supportEmail)}}"> or </template>
                  <template is="dom-if" if="{{supportEmail}}"
                    >email us at
                    <a style="color: var(--primary-color); text-decoration: none;" href="mailto:{{supportEmail}}"
                      >[[supportEmail]]</a
                    ></template
                  >.
                </p>
              </template>
              <template is="dom-if" if="{{!or(supportNum, supportEmail)}}"><p style="margin-top: 0;">A Katapult Pro Extension</p></template>
              <div class="software-details">
                <p>
                  This webpage is hosted
                  <template is="dom-if" if="{{companyName}}">by {{companyName}}</template>
                  using Katapult Engineering's API, and extends the Katapult Pro software.
                </p>
                <p>Katapult does not manage or hold responsibility for this domain.</p>
              </div>
            </sl-dropdown>
            <sl-dropdown id="nine-dot-dropdown">
              <sl-icon-button class="toolbar-icon" pointer library="material" name="apps" slot="trigger"></sl-icon-button>
              <sl-menu flex row align-center justify-center style="flex-wrap: wrap;">
                <template is="dom-repeat" items="[[pages]]">
                  <sl-menu-item flex column>
                    <sl-icon
                      flex
                      row
                      justify-center
                      wrap
                      slot="prefix"
                      library="material"
                      name="[[item.icon]]"
                      style="color: [[item.color]];"
                    ></sl-icon>
                    [[item.displayName]]
                  </sl-menu-item>
                </template>
              </sl-menu>
            </sl-dropdown>
            <sl-avatar class="toolbar-icon" pointer image="[[gravatarSrc]]"></sl-avatar>
            <sl-dropdown open></sl-dropdown>
          </div>
        </div>
      </div>
    `}static get is(){return"sl-toolbar"}static get properties(){return{logoLink:{type:String,value:""},companyName:{type:String,value:""},supportNum:{type:String,value:""},supportEmail:{type:String,value:""},pages:{type:Array,value:[]},gravatarSrc:{type:String,computed:"getGravatarSrc(email)"},email:{type:String,value:"nking@katapultengineering.com",notify:!0},refreshAPICheck:{type:Boolean,value:!1},apiKey:{type:String,computed:"getAPI(refreshAPICheck)"},currentDb:{type:String,value:"dcs"}}}static get observers(){return[]}constructor(){super()}ready(){super.ready(),window.addEventListener("apiKeyChange",async()=>{this.refreshAPICheck=!this.refreshAPICheck,await this.getJobData()}),this.apiKey&&this.getPages()}and(t,e){return t&&e}or(t,e){return t||e}getGravatarSrc(t){if(!t)return"";return`https://www.gravatar.com/avatar/${hc.hash(t)}?s=100&d=blank`}getAPI(t){return new URLSearchParams(window.location.search).get("api_key")||localStorage.getItem("apiKey")||""}toTitleCase(t){return t.replace(/\w\S*/g,function(t){return t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()})}async getPages(){const t="database"!=this.currentDb?this.currentDb+".":"",e=await fetch(`https://${t}katapultpro.com/api/v2/company-data/pages?api_key=${this.apiKey}`,{method:"GET"}).then(t=>t.json());console.log(e),e.forEach(t=>{t.displayName=t.name.length>20?this.toTitleCase(t.name.slice(0,15))+"...":this.toTitleCase(t.name),t.icon=t.icon+"_round"}),this.pages=e}});window.customElements.define("sl-authentication",class extends _e{static get template(){return be`
      <style include="sl-katapult-style flex">
        #loginForm::part(panel) {
          max-width: 330px;
        }
      </style>
      <!-- Api key needs to be entered, or was invalid when entered -->
      <template is="dom-if" if="[[!validApiKey]]">
        <sl-dialog id="loginForm" no-header open on-sl-request-close="keepOpen">
          <sl-input
            id="apiKeyInput"
            type="password"
            password-toggle
            clearable
            autofocus
            placeholder="API Key"
            label="API Key"
            help-text="Enter your API key for the selected database."
          >
            <sl-icon small library="material" slot="clear-icon" name="clear"></sl-icon>
            <sl-icon small library="material" slot="show-password-icon" name="visibility_off_round"></sl-icon>
            <sl-icon small library="material" slot="hide-password-icon" name="visibility_round"></sl-icon>
          </sl-input>
          <div flex column slot="footer">
            <sl-button variant="primary" on-click="checkAPI">Open API Tool</sl-button>
            <p style="color: var(--sl-color-gray-600); text-align: center; font-size: 14px; margin-bottom: 2px;">
              If you do not know how to access your API key, follow along with
              <a
                href="https://github.com/KatapultDevelopment/katapult-pro-api-documentation/blob/main/v2/DocumentationV2.MD#api-key-generation"
                >this</a
              >
              documentation.
            </p>
            <template is="dom-if" if="[[apiError]]">
              <p style="color: red; font-size: 14px; text-align: center; margin-top: 6px; margin-bottom: 2px;">
                Your API Key is invalid or is for a different database. Try again.
              </p>
            </template>
          </div>
        </sl-dialog>
      </template>

      <!-- Api key exists and is valid -->
      <template is="dom-if" if="[[validApiKey]]">
        <!-- The default slot -->
        <slot></slot>
      </template>
    `}static get properties(){return{validApiKey:{type:Boolean,computed:"checkForAPI(refreshAPICheck)"},refreshAPICheck:{type:Boolean,value:!1},apiError:{type:Boolean,value:!1},currentDb:{type:String,value:"dcs"}}}static get observers(){return[]}constructor(){super()}ready(){super.ready()}keepOpen(t){t.preventDefault()}checkForAPI(){return!(!new URLSearchParams(window.location.search).get("api_key")&&!localStorage.getItem("apiKey"))}async checkAPI(){const t=this.shadowRoot.getElementById("apiKeyInput")?.value;if(t){const e=await this.getJobData(t);if("INVALID API KEY"==e?.error)this.apiError=!0;else{localStorage.setItem("apiKey",t);const e=new CustomEvent("apiKeyChange",{detail:"data-change"});window.dispatchEvent(e),this.refreshAPICheck=!this.refreshAPICheck}}}async getJobData(t){if(t){const e="database"!=this.currentDb?this.currentDb+".":"";return await fetch(`https://${e}katapultpro.com/api/v2?api_key=${t}`,{method:"GET"}).then(t=>t.json())}}});const uc=document.createElement("template");uc.innerHTML='<dom-module id="katapult-scrollbars">\n  <template>\n    <style>\n      \n  ::-webkit-scrollbar {\n      width: 8px;\n      height:8px;\n      background: var(--paper-grey-200);\n  }\n\n  ::-webkit-scrollbar-track {\n      /* -webkit-box-shadow: inset 0 0 3px #717271; */\n  }\n\n  ::-webkit-scrollbar-thumb {\n      background: var(--paper-grey-400);\n  }\n\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(uc.content);const fc=document.createElement("template");fc.innerHTML='<dom-module id="paper-button-style">\n  <template>\n    <style>\n      @media screen and (min-device-width: 320px) and (max-device-width: 1024px) {\n        paper-button, paper-loading-button {\n          outline: 0;\n        }\n      }\n      paper-button, paper-loading-button {\n        border-radius: 999px;\n      }\n      paper-button > iron-icon, paper-loading-button > iron-icon, paper-button > material-icon, paper-loading-button > material-icon {\n        margin-right: 8px;\n      }\n      paper-button[outline] {\n        border: 1px solid rgba(0,0,0,0.06) !important;\n      }\n      paper-button[primary-color] {\n        --paper-button: {\n            background-color: var(--primary-color);\n            color: var(--primary-color-text-color);\n          };\n      }\n      paper-button[secondary-color] {\n        --paper-button: {\n            background-color: var(--secondary-color);\n            color: var(--secondary-color-text-color);\n          };\n      }\n      paper-button[grey] {\n        --paper-button: {\n          background-color: var(--paper-grey-200);\n          color: var(--paper-grey-800);\n        }\n      }\n      paper-button[red] {\n        --paper-button: {\n          background-color: var(--paper-red-500);\n          color: white;\n        };\n      }\n      paper-button[amber] {\n        --paper-button: {\n          background-color: var(--paper-amber-500);\n        };\n      }\n      paper-button[green] {\n        --paper-button: {\n          background-color: var(--paper-green-600);\n          color: white;\n        };\n      }\n      paper-button[white] {\n        --paper-button: {\n          background-color: white;\n          color: var(--primary-text-color-faded);\n        };\n      }\n      paper-loading-button[outline] {\n        border: 1px solid rgba(0,0,0,0.06) !important;\n      }\n      paper-loading-button[primary-color] {\n        background-color: var(--primary-color);\n        color: var(--primary-color-text-color);\n      }\n      paper-loading-button[secondary-color] {\n        background-color: var(--secondary-color);\n        color: var(--secondary-color-text-color);\n      }\n      paper-loading-button[grey] {\n        background-color: var(--paper-grey-200);\n        color: var(--paper-grey-800);\n      }\n      paper-loading-button[red] {\n        background-color: var(--paper-red-500);\n        color: white;\n      }\n      paper-loading-button[amber] {\n        background-color: var(--paper-amber-500);\n        color: var(--primary-text-color-faded);\n      }      \n      paper-button iron-icon, paper-loading-button iron-icon {\n        color: inherit;\n      }\n      paper-loading-button[white] {\n        background-color: white;\n        color: var(--primary-text-color-faded);\n      }\n      paper-button a, paper-loading-button a {\n        color: inherit;\n        text-decoration: none;\n      }\n      paper-loading-button[small] {\n        --paper-loading-button-iron-collapse: {\n          height: 24px;\n        }\n        --paper-loading-spinner: {\n          margin-top: 2px;\n          width: 20px;\n          height: 20px;\n        };\n      }\n      paper-button[small] {\n        font-size: 9pt;\n        padding: 5px 7px;\n        min-width: 48px;        \n      }\n      paper-button[micro] {\n        font-size: 8pt;\n        padding: 5px 7px;\n        min-width: 48px;\n      }\n      paper-button[no-uppercase] {\n        text-transform: unset;     \n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(fc.content);const mc=document.createElement("template");mc.innerHTML='<dom-module id="paper-dialog-style">\n  <template>\n    <style>\n      \n  paper-dialog > [title] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 14pt;\n    text-transform: uppercase;\n    margin-top: 0;\n    border-radius: 16px;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    padding: 16px;\n  }\n  paper-dialog > [title][column] {\n    display: flex;\n    flex-direction: column;\n  }\n  paper-dialog > [title][row] {\n    display: flex;\n    flex-direction: row;\n  }\n  paper-dialog > [title][primary-color] {\n    background-color: var(--primary-color);\n    color: var(--primary-color-text-color);\n  }\n  paper-dialog > [title][secondary-color] {\n    background-color: var(--secondary-color);\n    color: var(--secondary-color-text-color);\n  }\n  paper-dialog > [title][red] {\n    background-color: var(--paper-red-500);\n    color: white;\n  }\n  paper-dialog > [title][amber] {\n    background-color: var(--paper-amber-500);\n    color: var(--paper-grey-900);\n  }\n  paper-dialog > [title] > paper-icon-button, paper-dialog > [title] > iron-icon, paper-dialog > [title] > material-icon {\n    padding: 0;\n    margin: 0 8px;\n    height: 24px;\n    width: 24px;\n  }\n  paper-dialog > [title] iron-icon, paper-dialog > [title] material-icon {\n    margin-right: 6px;\n  }\n  paper-dialog > [title][primary-color] > paper-icon-button, paper-dialog > [title][primary-color] > iron-icon, paper-dialog > [title][primary-color] > material-icon {\n    color: var(--primary-color-text-color);\n  }\n  paper-dialog > [title][secondary-color] > paper-icon-button, paper-dialog > [title][secondary-color] > iron-icon, paper-dialog > [title][secondary-color] > material-icon {\n    color: var(--secondary-color-text-color);\n  }\n  paper-dialog [subtitle] {\n    margin-top: 4px;\n    font-size: 12pt;\n    4px; font-weight: lighter;\n    text-transform: initial;\n  }\n  paper-dialog > [content] {\n    margin: 0;\n    padding: 16px;\n  }\n  paper-dialog > [content][center] {\n    text-align: center;\n  }\n  paper-dialog > [content][column] {\n    display: flex;\n    flex-direction: column;\n  }\n  paper-dialog {\n    border-radius: 16px;\n  }\n  paper-dialog .buttons, paper-dialog [buttons] {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    margin: 0;\n    padding: 8px;\n    gap: 8px;\n  }\n  paper-dialog .buttons paper-button, paper-dialog [buttons] paper-button {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n  paper-dialog .buttons paper-button:first-child, paper-dialog [buttons] paper-button:first-child {\n    margin-left: 0;\n  }\n  paper-dialog .buttons paper-button:last-child, paper-dialog [buttons] paper-button:last-child {\n    margin-right: 0;\n  }\n  paper-dialog .buttons [spacer], paper-dialog [buttons] [spacer] {\n    flex-grow: 1; \n  }\n\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(mc.content);const gc=document.createElement("template");gc.innerHTML='<dom-module id="paper-header-style">\n  <template>\n    <style>\n      paper-header-content[white] paper-header, paper-header[white] {\n        background: white !important;\n        color: var(--primary-text-color-faded);\n      }\n      paper-header-content[light-grey] paper-header, paper-header[light-grey] {\n        background: var(--paper-grey-50);\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(gc.content);const bc=document.createElement("template");bc.innerHTML='<dom-module id="paper-icon-button-style">\n  <template>\n    <style>\n      paper-icon-button, paper-icon-loading-button {\n        border-radius: 999px;\n        --paper-icon-loading-button-paper-icon-button: {\n          border-radius: 999px;\n        };\n      }\n      paper-icon-button[raised], paper-icon-loading-button[raised] {\n        @apply --shadow-elevation-2dp;\n      }\n      paper-button[outline] {\n        border: 1px solid rgba(0,0,0,0.06);\n      }\n      paper-icon-button[primary-color], paper-icon-loading-button[primary-color] {\n        --paper-icon-button: {\n          background-color: var(--primary-color);\n          color: var(--primary-color-text-color);\n        };\n      }\n      paper-icon-button[secondary-color], paper-icon-loading-button[secondary-color] {\n        --paper-icon-button: {\n          background-color: var(--secondary-color);\n          color: var(--secondary-color-text-color);\n        };\n      }\n      paper-icon-button[grey], paper-icon-loading-button[grey] {\n        --paper-icon-button: {\n          background-color: var(--paper-grey-200);\n          color: var(--paper-grey-800);\n        };\n      }\n      paper-icon-button[white], paper-icon-loading-button[white] {\n        --paper-icon-button: {\n          background-color: white;\n          color: var(--primary-text-color-faded);\n        };\n      }\n      paper-icon-button[red], paper-icon-loading-button[red] {\n        --paper-icon-button: {\n          background-color: var(--paper-red-500);\n          color: white;\n        };\n      }\n      paper-icon-button[outline], paper-icon-loading-button[outline] {\n        border: 1px solid rgba(0,0,0,0.1);\n      }      \n    </style>\n  </template>\n</dom-module>',document.head.appendChild(bc.content);const yc=document.createElement("template");yc.innerHTML='<dom-module id="paper-input-style">\n  <template>\n    <style>\n      paper-input {\n        --primary-color: var(--secondary-color);\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(yc.content);const _c=document.createElement("template");_c.innerHTML='<dom-module id="paper-table-style">\n  <template>\n    <style>\n      \n  paper-table[rounded] {\n    border-radius: 16px;\n  }\n  paper-row[rounded] {\n    border-radius: 999px;\n  }      \n  paper-row[top-rounded]:first-of-type {\n    border-top-left-radius: 16px;\n    border-top-right-radius: 16px;\n  }\n  paper-row[bottom-rounded]:last-of-type {\n    border-bottom-left-radius: 16px;\n    border-bottom-right-radius: 16px;\n  }\n  paper-table[light-grey], paper-row[light-grey], paper-cell[light-grey] {\n    background: var(--paper-grey-50);\n  }\n  paper-table[outline], paper-row[outline] {\n    border: 1px solid rgba(0,0,0,0.06);\n  }\n  paper-table[dividers] paper-row:not(:last-of-type), paper-table[dividers] paper-header:not(:last-of-type), paper-header-content:not(:last-of-type), paper-header[divider], paper-header-content[divider], paper-row[divider] {\n    border-bottom: 1px solid rgba(0,0,0,0.06);\n  }\n  paper-table[grey], paper-row[grey], paper-cell[grey] {\n    background-color: var(--paper-grey-200);\n    color: var(--paper-grey-800);\n  }\n  paper-row[raised-on-scroll] {\n    transition: box-shadow 0.1s;\n  }\n  paper-table[scrolled] > paper-row[raised-on-scroll] {\n    @apply --shadow-elevation-2dp;\n  } \n\n  paper-table[alternating] paper-row:nth-of-type(even), paper-table[white], paper-row[white], paper-cell[white], paper-header[white] {\n    background: white;\n    color: inherit;\n  }\n\n  paper-cell[icon] > paper-checkbox {\n    --paper-checkbox-label-spacing: 0;\n  }\n\n  paper-cell > paper-input:not([underline]), paper-cell > katapult-drop-down:not([underline]), paper-cell > katapult-multi-drop-down:not([underline]) {\n    --paper-input-container-underline_-_background-color: transparent;\n    --paper-input-container-underline_-_display: none;\n    --paper-input-container-underline: {\n      background-color: transparent;\n      display: none;\n    };\n  }\n\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(_c.content);const vc=document.createElement("template");vc.innerHTML='<dom-module id="paper-tooltip-style">\n  <template>\n    <style>\n      \n  paper-tooltip {\n    --paper-tooltip: {\n      background-color: var(--paper-grey-100);\n      color: var(--primary-text-color);\n      padding: 8px;\n      border-radius: 999px;\n      text-align: center;\n      text-transform: uppercase;\n      font-size: 10pt;\n      @apply --shadow-elevation-2dp;\n    };\n    --paper-tooltip-delay-in: 300ms;\n    --paper-tooltip-duration-in: 100ms;\n    --paper-tooltip-duration-out: 100ms;\n  }\n\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(vc.content);class wc{static get delim(){return"JdReuPs2V3vy"}static copy(t){if(null==t||"object"!=typeof t)return t;var e,n,o;for(o in e=Array.isArray(t)?[]:{},t)n=t[o],e[o]="object"==typeof n?wc.copy(n):n;return e}static escape(t){return t.replace(/[.*+?^${}()|[\]\\\/]/g,"\\$&")}static equal(t,e,n){return n=n||".",t=wc.pathToArray(t,n),e=wc.pathToArray(e,n),wc.startsWith(t,e)&&t.length==e.length}static getSubset(t,e){let n={};if(null==e)return n;for(let o of e)n[o]=t[o];return n}static join(t,e){return e=e||".",wc.trim(t.filter(wc.isValidKey).map(t=>wc.trim(t,e)).join(e),e)}static replace(t,e,n){return wc.join(wc.split(t,e),n)}static shallowCopy(...t){return Object.assign({},...t)}static split(t,e){return e=e||".",null==t&&(t=""),wc.clean(t,e).split(e)}static subtract(t,e,n){n=n||".",t=wc.pathToArray(t,n),e=wc.pathToArray(e,n);let o=t.findIndex((n,o)=>e.every((n,r)=>t[o+r]==e[r]));return-1==o?t:[...t.slice(0,o),...t.slice(o+e.length)]}static startsWith(t,e,n){return n=n||".",t=wc.pathToArray(t,n),(e=wc.pathToArray(e,n)).every((n,o)=>t[o]==e[o]||"*"===t[o]&&null!=e[o]||"*"===e[o]&&null!=t[o])}static getWildcardValues(t,e,n){return n=n||".",t=wc.pathToArray(t,n),(e=wc.pathToArray(e,n)).map((t,e)=>"*"==t?e:-1).filter(t=>-1!=t).map(e=>t[e])}static setWildcardValues(t,e,n){return e=Array.isArray(e)?[...e]:[],n=n||".",t=wc.pathToArray(t,n).map((t,n)=>{if("*"==t){let n=e.shift();null!=n&&(t=n)}return t}),wc.join(t,n)}static trim(t,e){return e=e||".",null==t&&(t=""),isNaN(t)||(t=t.toString()),t.replace(new RegExp(`(^\\${e}*)|(\\${e}*$)`,"g"),"")}static clean(t,e){return wc.trim(t,e).replace(new RegExp(`\\${e}\\${e}+`,"g"),e)}static valueIsEmpty(t){let e;if(this.isObject(t)){e=!0;for(let n in t){e=!1;break}}else e=null==t;return e}static isObject(t){return"object"==typeof t&&null!=t}static isValid(t,e){return e=e||".",null!=t&&(t=wc.pathToArray(t,e)).every(t=>null!=t)}static isValidKey(t){return null!=t&&""!==t&&"object"!=typeof t}static getPathReference(t,e,n){if(n=n||".",e=wc.pathToArray(e,n),wc.isObject(t)||(t={}),e.length){let n=e.length-1,o=t;for(let t=0;t<n;t++)wc.isObject(o[e[t]])||(o[e[t]]={}),o=o[e[t]];return{base:t,item:o,key:e[n]}}return{base:t,item:t,key:""}}static get(t,e,n){n=n||".",e=wc.pathToArray(e,n);let o=t;for(let t=0;t<e.length;t++){if(null==o){o=void 0;break}if("*"==e[t]){let t;for(let e in o)if(null!=o[e]){t=o[e];break}o=t}else o=o[e[t]]}return o}static set(t,e,n,o){o=o||".",e=wc.pathToArray(e,o);let r=wc.getPathReference(t,e,o);return wc.isValidKey(r.key)?r.item[r.key]=n:r.base=n,{base:r.base,path:e,type:"set"}}static setUpdate(t,e,n){const o=wc.split(e,"/");for(let e=0;e<o.length-1;e++){const r=o.slice(0,e+1).join("/");if(t.hasOwnProperty(r)){const i=o.slice(e+1).join("/");return wc.set(t[r],i,n,"/")}}return wc.set(t,e,n)}static delete(t,e,n){n=n||".",e=wc.pathToArray(e,n);let o=wc.getPathReference(t,e,n);if(wc.isObject(o))return wc.isValidKey(o.key)&&(delete o.item[o.key],wc.valueIsEmpty(o.item))?wc.delete(o.base,e.slice(0,-1),n):{base:!e.length||wc.valueIsEmpty(o.base)?null:o.base,path:e,type:"delete"}}static setAndDelete(t,e,n,o){return wc.valueIsEmpty(n)?wc.delete(t,e,o):wc.set(t,e,n,o)}static resolve(t,e,n){n=n||".";let o=wc.split(t,n).filter(t=>t);return"http:"!==o[0]&&"https:"!==o[0]||(o[0]+=n),wc.split(e,n).filter(t=>t).forEach(t=>{".."===t?o.splice(-1,1):o.push(t)}),o.join(n)}static sanitizeDiffPath(t){return(null==t||1==t.length&&""===t[0])&&(t=[]),t.map(t=>String(t))}static flattenObject(t,e,n){n=n||{},e=e||".";let o={};for(let r in t)if(wc.isObject(t[r])){let i=wc.flattenObject(t[r],e,n);for(let t in i)o[r+e+t]=i[t]}else("function"!=typeof n.validate||n.validate(t[r],r,t))&&(o[r]=t[r]);return o}static pathToArray(t,e){return e=e||".",Array.isArray(t)||(t=wc.split(t,e)),1==t.length&&""==t[0]&&(t=[]),t}static nullify(t){return wc.valueIsEmpty(t)?null:t}}function xc(t,...e){const n=be(t,...e);return be`
    <style
      include="flex paper-button-style paper-icon-button-style paper-table-style paper-header-style paper-dialog-style paper-tooltip-style paper-input-style katapult-scrollbars"
    ></style>
    ${n}
  `}class Cc extends _e{get pageElement(){return document.getElementById("pageElement")}findDataHost(t=()=>!0){let e=this.__dataHost??this.parentNode;for(;null!=e&&!t(e);)e=e.__dataHost;return e}get parentKatapultElement(){return this.findDataHost(t=>t instanceof Cc)}ready(){super.ready(),this.regex={email:".+@.+"}}$$(t){return this.shadowRoot.querySelector(t)}exists(t){return null!=t}join(...t){return this.joinDelim(",",...t)}joinDelim(t,...e){return wc.join(e,t)}and(...t){return t.every(t=>t)}or(...t){return t.some(t=>t)}firstValid(...t){return t.find(t=>null!=t)}xor(...t){return t.reduce((t,e)=>!t!=!e)}equal(...t){return t.slice(1).every(e=>e==t[0])}getSub(t,...e){return wc.get(t,wc.join(e,"."))}includes(t,e){return(t??[]).includes(e)}isOneOf(t,...e){return e.some(e=>e==t)}sum(...t){return t.reduce((t,e)=>t+e,0)}toArray(...t){return function(t,e,n={}){n.$keyToUse??="$key";let o=[];return Array.isArray(t)?o=t:wc.isObject(t)?o=Object.keys(t).map(e=>{let o=t[e],r={};return wc.isObject(o)?r=o:r.$val=o,null==r[n.$keyToUse]&&(r[n.$keyToUse]=e),r}):null!=t&&(o=e?[{$key:"$val",$val:t}]:[t]),void 0===e||(o=e?o.map((t,e)=>(wc.isObject(t)?null==t.$key&&(t.$key=e):t={$key:e,$val:t},t)):o.map((t,e)=>{if(wc.isObject(t))if(void 0!==t.$val)t=t.$val;else for(let e in t)"$"===e[0]&&delete t[e];return t})),o}(...t)}array(...t){return t}getEventName(t){return t.detail?.name??t.currentTarget?.getAttribute("name")}getDataPath(t){const e=t.currentTarget?.dataset?.path,n=e?.replace(/\$\(.*?\)/g,e=>wc.get(t,e.slice(2,-1)));return n}getEventValue(t){let e;return e="input"==t.type?t.currentTarget?.value:t.currentTarget?.dataset?.hasOwnProperty?.("value")?t.currentTarget.dataset.value:t.detail?.value,"$true"==e&&(e=!0),"$false"==e&&(e=!1),"$null"==e&&(e=null),e}fire(t,e,n=!1){t instanceof Event&&(t=this.getEventName(t),e=null,n=!1);const o={detail:e};n&&(o.bubbles=!0,o.composed=!0),this.dispatchEvent(new CustomEvent(t,o))}deepSet(t,e){wc.set(this,t,e),this.notifyWholePath(t)}notifyWholePath(t){let e=t.split(".");for(let t=0;t<e.length;t++){const n=e.slice(0,t+1).join(".");this.notifyPath(n)}}toggleProperty(t){const e=this.getDataPath(t),n=t.detail.path??"",o=wc.join([e,n]);if(!o)return;const r=wc.get(this,o);this.deepSet(o,!r)}updateProperty(t){const e=this.getDataPath(t),n=t.detail?.path??"",o=wc.subtract(t.type,"changed","-").map((t,e)=>e?t[0].toUpperCase()+t.slice(1):t).join(""),r=wc.join([e,...wc.subtract(n,o)]);if(!r)return;let i=this.getEventValue(t);const s=t.currentTarget?.dataset?.parse;"int"==s&&(i=isNaN(parseInt(i))?"":parseInt(i)),"date"==s&&(i=Date.parse(i)),this.deepSet(r,i)}openDialog(t){const e=t.currentTarget.dataset.dialogId,n=this.$$(`#${e}`);n&&"object"==typeof n&&"function"==typeof n?.open?n.open():console.warn(`Dialog ${e} not found or not an openable dialog`)}}function Sc(t,...e){const n=xc(t,...e);return xc`
    <style include="sl-katapult-style">
      :root {
        --sl-input-focus-ring-color: none;
      }
      :host {
        font-family: Roboto !important;
        display: flex;
      }
      * {
        font-family: Roboto !important;
      }
      main {
        height: 100%;
        width: 100%;
        background: var(--sl-color-gray-50);
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        opacity: 1;
        filter: blur(0px);
        transition:
          opacity 0.3s,
          filter 0.3s;
        pointer-events: auto;
      }
    </style>
    <sl-authentication>
      <main>
        <sl-toolbar
          support-num="{{supportNum}}"
          support-email="{{supportEmail}}"
          company-name="{{companyName}}"
          logo-link="{{logoLink}}"
        ></sl-toolbar>
        <!-- <sl-job-picker></sl-job-picker> -->
        <div>${n}</div>
      </main>
    </sl-authentication>
  `}class Pc extends Cc{static get properties(){return{supportNum:{type:String,value:""},supportEmail:{type:String,value:""},companyName:{type:String,value:""},logoLink:{type:String,value:""}}}constructor(){super()}ready(){super.ready()}}window.customElements.define("extension-page-element",Pc);class kc extends Pc{static get template(){return Sc`
      <style>
        :host {
          /* Ideally the primary and secondary color should compliment each other or be different tones of the same color */
          --primary-color: var(--sl-color-indigo-700, grey) !important; /* Middle Color */
          --secondary-color: var(--sl-color-indigo-950, black) !important; /* Darkest Color */
          --accent-color: var(--sl-color-pink-700, orange) !important; /* Bright/Standout Color */
        }
      </style>
      <!-- Page Element Content -->
    `}ready(){super.ready(),this.supportNum="111-111-1111",this.supportEmail="email@company.com",this.companyName="Company Name",this.logoLink=""}}window.customElements.define("extension-template",kc);export{kc as ExtensionTemplate};
