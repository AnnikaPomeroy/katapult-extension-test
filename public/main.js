/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),r=new WeakMap;let o=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=r.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&r.set(i,t))}return t}toString(){return this.cssText}};const n=t=>new o("string"==typeof t?t:t+"",void 0,i),s=(t,...e)=>{const r=1===t.length?t[0]:e.reduce((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1],t[0]);return new o(r,t,i)},a=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return n(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,f=globalThis,m=f.trustedTypes,g=m?m.emptyScript:"",_=f.reactiveElementPolyfillSupport,b=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>!l(t,e),w={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:v};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);void 0!==r&&c(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:o}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:r,set(e){const n=r?.call(this);o?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,r)=>{if(e)i.adoptedStyleSheets=r.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of r){const r=document.createElement("style"),o=t.litNonce;void 0!==o&&r.setAttribute("nonce",o),r.textContent=e.cssText,i.appendChild(r)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(void 0!==r&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,r=i._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=i.getPropertyOptions(r),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=r,this[r]=o.fromAttribute(e,t.type)??this._$Ej?.get(r)??null,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const r=this.constructor,o=this[t];if(i??=r.getPropertyOptions(t),!((i.hasChanged??v)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:r,wrapped:o},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==o||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===r&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,r=this[e];!0!==t||this._$AL.has(e)||void 0===r||this.C(e,void 0,i,r)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[b("elementProperties")]=new Map,x[b("finalized")]=new Map,_?.({ReactiveElement:x}),(f.reactiveElementVersions??=[]).push("2.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const C=globalThis,S=C.trustedTypes,k=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",P=`lit$${Math.random().toFixed(9).slice(2)}$`,A="?"+P,$=`<${A}>`,T=document,O=()=>T.createComment(""),I=t=>null===t||"object"!=typeof t&&"function"!=typeof t,N=Array.isArray,L="[ \t\n\f\r]",z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,M=/>/g,R=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),F=/'/g,B=/"/g,H=/^(?:script|style|textarea|title)$/i,U=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),j=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),q=new WeakMap,W=T.createTreeWalker(T,129);function K(t,e){if(!N(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(e):e}class J{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let o=0,n=0;const s=t.length-1,a=this.parts,[l,c]=((t,e)=>{const i=t.length-1,r=[];let o,n=2===e?"<svg>":3===e?"<math>":"",s=z;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,h=0;for(;h<i.length&&(s.lastIndex=h,l=s.exec(i),null!==l);)h=s.lastIndex,s===z?"!--"===l[1]?s=D:void 0!==l[1]?s=M:void 0!==l[2]?(H.test(l[2])&&(o=RegExp("</"+l[2],"g")),s=R):void 0!==l[3]&&(s=R):s===R?">"===l[0]?(s=o??z,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?R:'"'===l[3]?B:F):s===B||s===F?s=R:s===D||s===M?s=z:(s=R,o=void 0);const d=s===R&&t[e+1].startsWith("/>")?" ":"";n+=s===z?i+$:c>=0?(r.push(a),i.slice(0,c)+E+i.slice(c)+P+d):i+P+(-2===c?e:d)}return[K(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),r]})(t,e);if(this.el=J.createElement(l,i),W.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=W.nextNode())&&a.length<s;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(E)){const e=c[n++],i=r.getAttribute(t).split(P),s=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:s[2],strings:i,ctor:"."===s[1]?Q:"?"===s[1]?tt:"@"===s[1]?et:Z}),r.removeAttribute(t)}else t.startsWith(P)&&(a.push({type:6,index:o}),r.removeAttribute(t));if(H.test(r.tagName)){const t=r.textContent.split(P),e=t.length-1;if(e>0){r.textContent=S?S.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],O()),W.nextNode(),a.push({type:2,index:++o});r.append(t[e],O())}}}else if(8===r.nodeType)if(r.data===A)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=r.data.indexOf(P,t+1));)a.push({type:7,index:o}),t+=P.length-1}o++}}static createElement(t,e){const i=T.createElement("template");return i.innerHTML=t,i}}function Y(t,e,i=t,r){if(e===j)return e;let o=void 0!==r?i._$Co?.[r]:i._$Cl;const n=I(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(t),o._$AT(t,i,r)),void 0!==r?(i._$Co??=[])[r]=o:i._$Cl=o),void 0!==o&&(e=Y(t,o._$AS(t,e.values),o,r)),e}let G=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,r=(t?.creationScope??T).importNode(e,!0);W.currentNode=r;let o=W.nextNode(),n=0,s=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new X(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new it(o,this,t)),this._$AV.push(e),a=i[++s]}n!==a?.index&&(o=W.nextNode(),n++)}return W.currentNode=T,r}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}};class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,r){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),I(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==j&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>N(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==V&&I(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=J.createElement(K(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(e);else{const t=new G(r,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new J(t)),e}k(t){N(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const o of t)r===e.length?e.push(i=new X(this.O(O()),this.O(O()),this,this.options)):i=e[r],i._$AI(o),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,o){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}_$AI(t,e=this,i,r){const o=this.strings;let n=!1;if(void 0===o)t=Y(this,t,e,0),n=!I(t)||t!==this._$AH&&t!==j,n&&(this._$AH=t);else{const r=t;let s,a;for(t=o[0],s=0;s<o.length-1;s++)a=Y(this,r[i+s],e,s),a===j&&(a=this._$AH[s]),n||=!I(a)||a!==this._$AH[s],a===V?t=V:t!==V&&(t+=(a??"")+o[s+1]),this._$AH[s]=a}n&&!r&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Q extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}class tt extends Z{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class et extends Z{constructor(t,e,i,r,o){super(t,e,i,r,o),this.type=5}_$AI(t,e=this){if((t=Y(this,t,e,0)??V)===j)return;const i=this._$AH,r=t===V&&i!==V||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==V&&(i===V||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const rt={I:X},ot=C.litHtmlPolyfillSupport;ot?.(J,X),(C.litHtmlVersions??=[]).push("3.3.0");const nt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let st=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const r=i?.renderBefore??e;let o=r._$litPart$;if(void 0===o){const t=i?.renderBefore??null;r._$litPart$=o=new X(e.insertBefore(O(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return j}};st._$litElement$=!0,st.finalized=!0,nt.litElementHydrateSupport?.({LitElement:st});const at=nt.litElementPolyfillSupport;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function lt(t,e,i){return t?e(t):i?.(t)}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*ct(t,e){if(void 0!==t){let i=0;for(const r of t)yield e(r,i++)}}
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/if(at?.({LitElement:st}),(nt.litElementVersions??=[]).push("4.2.0"),!window.polymerSkipLoadingFontRoboto){const t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.crossOrigin="anonymous",t.href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic",document.head.appendChild(t)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ht=!(window.ShadyDOM&&window.ShadyDOM.inUse);let dt,pt;function ut(t){dt=(!t||!t.shimcssproperties)&&(ht||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(pt=window.ShadyCSS.cssBuild);const ft=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?dt=window.ShadyCSS.nativeCss:window.ShadyCSS?(ut(window.ShadyCSS),window.ShadyCSS=void 0):ut(window.WebComponents&&window.WebComponents.flags);const mt=dt;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class gt{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function _t(t){return bt(function(t){let e=new gt;e.start=0,e.end=t.length;let i=e;for(let r=0,o=t.length;r<o;r++)if(t[r]===wt){i.rules||(i.rules=[]);let t=i,e=t.rules[t.rules.length-1]||null;i=new gt,i.start=r+1,i.parent=t,i.previous=e,t.rules.push(i)}else t[r]===xt&&(i.end=r+1,i=i.parent||e);return e}(t=t.replace(Ct.comments,"").replace(Ct.port,"")),t)}function bt(t,e){let i=e.substring(t.start,t.end-1);if(t.parsedCssText=t.cssText=i.trim(),t.parent){let r=t.previous?t.previous.end:t.parent.start;i=e.substring(r,t.start-1),i=function(t){return t.replace(/\\([0-9a-f]{1,6})\s/gi,function(){let t=arguments[1],e=6-t.length;for(;e--;)t="0"+t;return"\\"+t})}(i),i=i.replace(Ct.multipleSpaces," "),i=i.substring(i.lastIndexOf(";")+1);let o=t.parsedSelector=t.selector=i.trim();t.atRule=0===o.indexOf(Et),t.atRule?0===o.indexOf(kt)?t.type=vt.MEDIA_RULE:o.match(Ct.keyframesRule)&&(t.type=vt.KEYFRAMES_RULE,t.keyframesName=t.selector.split(Ct.multipleSpaces).pop()):0===o.indexOf(St)?t.type=vt.MIXIN_RULE:t.type=vt.STYLE_RULE}let r=t.rules;if(r)for(let t,i=0,o=r.length;i<o&&(t=r[i]);i++)bt(t,e);return t}function yt(t,e,i=""){let r="";if(t.cssText||t.rules){let i=t.rules;if(i&&!function(t){let e=t[0];return Boolean(e)&&Boolean(e.selector)&&0===e.selector.indexOf(St)}(i))for(let t,o=0,n=i.length;o<n&&(t=i[o]);o++)r=yt(t,e,r);else r=e?t.cssText:function(t){return t=function(t){return t.replace(Ct.customProp,"").replace(Ct.mixinProp,"")}(t),function(t){return t.replace(Ct.mixinApply,"").replace(Ct.varApply,"")}(t)}(t.cssText),r=r.trim(),r&&(r="  "+r+"\n")}return r&&(t.selector&&(i+=t.selector+" "+wt+"\n"),i+=r,t.selector&&(i+=xt+"\n\n")),i}const vt={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},wt="{",xt="}",Ct={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},St="--",kt="@media",Et="@",Pt=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,At=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,$t=new Set;function Tt(t){const e=t.textContent;if(!$t.has(e)){$t.add(e);const t=document.createElement("style");t.setAttribute("shady-unscoped",""),t.textContent=e,document.head.appendChild(t)}}function Ot(t){return t.hasAttribute("shady-unscoped")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function It(t,e){return t?("string"==typeof t&&(t=_t(t)),yt(t,mt)):""}function Nt(t){return!t.__cssRules&&t.textContent&&(t.__cssRules=_t(t.textContent)),t.__cssRules||null}function Lt(t,e,i,r){if(!t)return;let o=!1,n=t.type;n===vt.STYLE_RULE?e(t):n===vt.MIXIN_RULE&&(o=!0);let s=t.rules;if(s&&!o)for(let t,i=0,r=s.length;i<r&&(t=s[i]);i++)Lt(t,e)}function zt(t,e){let i=t.indexOf("var(");if(-1===i)return e(t,"","","");let r=function(t,e){let i=0;for(let r=e,o=t.length;r<o;r++)if("("===t[r])i++;else if(")"===t[r]&&0===--i)return r;return-1}(t,i+3),o=t.substring(i+4,r),n=t.substring(0,i),s=zt(t.substring(r+1),e),a=o.indexOf(",");return-1===a?e(n,o.trim(),"",s):e(n,o.substring(0,a).trim(),o.substring(a+1).trim(),s)}window.ShadyDOM&&window.ShadyDOM.wrap;const Dt="css-build";function Mt(t){if(void 0!==pt)return pt;if(void 0===t.__cssBuild){const e=t.getAttribute(Dt);if(e)t.__cssBuild=e;else{const e=function(t){const e="template"===t.localName?t.content.firstChild:t.firstChild;if(e instanceof Comment){const t=e.textContent.trim().split(":");if(t[0]===Dt)return t[1]}return""}(t);""!==e&&function(t){const e="template"===t.localName?t.content.firstChild:t.firstChild;e.parentNode.removeChild(e)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/(t),t.__cssBuild=e}}return t.__cssBuild||""}function Rt(t){return""!==Mt(t)}function Ft(t,e){for(let i in e)null===i?t.style.removeProperty(i):t.style.setProperty(i,e[i])}function Bt(t,e){const i=window.getComputedStyle(t).getPropertyValue(e);return i?i.trim():""}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Ht=/;\s*/m,Ut=/^\s*(initial)|(inherit)\s*$/,jt=/\s*!important/,Vt="_-_";class qt{constructor(){this._map={}}set(t,e){t=t.trim(),this._map[t]={properties:e,dependants:{}}}get(t){return t=t.trim(),this._map[t]||null}}let Wt=null;class Kt{constructor(){this._currentElement=null,this._measureElement=null,this._map=new qt}detectMixin(t){return function(t){const e=At.test(t)||Pt.test(t);return At.lastIndex=0,Pt.lastIndex=0,e}(t)}gatherStyles(t){const e=function(t){const e=[],i=t.querySelectorAll("style");for(let t=0;t<i.length;t++){const r=i[t];Ot(r)?ht||(Tt(r),r.parentNode.removeChild(r)):(e.push(r.textContent),r.parentNode.removeChild(r))}return e.join("").trim()}(t.content);if(e){const i=document.createElement("style");return i.textContent=e,t.content.insertBefore(i,t.content.firstChild),i}return null}transformTemplate(t,e){void 0===t._gatheredStyle&&(t._gatheredStyle=this.gatherStyles(t));const i=t._gatheredStyle;return i?this.transformStyle(i,e):null}transformStyle(t,e=""){let i=Nt(t);return this.transformRules(i,e),t.textContent=It(i),i}transformCustomStyle(t){let e=Nt(t);return Lt(e,t=>{":root"===t.selector&&(t.selector="html"),this.transformRule(t)}),t.textContent=It(e),e}transformRules(t,e){this._currentElement=e,Lt(t,t=>{this.transformRule(t)}),this._currentElement=null}transformRule(t){t.cssText=this.transformCssText(t.parsedCssText,t),":root"===t.selector&&(t.selector=":host > *")}transformCssText(t,e){return t=t.replace(Pt,(t,i,r,o)=>this._produceCssProperties(t,i,r,o,e)),this._consumeCssProperties(t,e)}_getInitialValueForProperty(t){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(t)}_fallbacksFromPreviousRules(t){let e=t;for(;e.parent;)e=e.parent;const i={};let r=!1;return Lt(e,e=>{r=r||e===t,r||e.selector===t.selector&&Object.assign(i,this._cssTextToMap(e.parsedCssText))}),i}_consumeCssProperties(t,e){let i=null;for(;i=At.exec(t);){let r=i[0],o=i[1],n=i.index,s=n+r.indexOf("@apply"),a=n+r.length,l=t.slice(0,s),c=t.slice(a),h=e?this._fallbacksFromPreviousRules(e):{};Object.assign(h,this._cssTextToMap(l));let d=this._atApplyToCssProperties(o,h);t=`${l}${d}${c}`,At.lastIndex=n+d.length}return t}_atApplyToCssProperties(t,e){t=t.replace(Ht,"");let i=[],r=this._map.get(t);if(r||(this._map.set(t,{}),r=this._map.get(t)),r){let o,n,s;this._currentElement&&(r.dependants[this._currentElement]=!0);const a=r.properties;for(o in a)s=e&&e[o],n=[o,": var(",t,Vt,o],s&&n.push(",",s.replace(jt,"")),n.push(")"),jt.test(a[o])&&n.push(" !important"),i.push(n.join(""))}return i.join("; ")}_replaceInitialOrInherit(t,e){let i=Ut.exec(e);return i&&(e=i[1]?this._getInitialValueForProperty(t):"apply-shim-inherit"),e}_cssTextToMap(t,e=!1){let i,r,o=t.split(";"),n={};for(let t,s,a=0;a<o.length;a++)t=o[a],t&&(s=t.split(":"),s.length>1&&(i=s[0].trim(),r=s.slice(1).join(":"),e&&(r=this._replaceInitialOrInherit(i,r)),n[i]=r));return n}_invalidateMixinEntry(t){if(Wt)for(let e in t.dependants)e!==this._currentElement&&Wt(e)}_produceCssProperties(t,e,i,r,o){if(i&&zt(i,(t,e)=>{e&&this._map.get(e)&&(r=`@apply ${e};`)}),!r)return t;let n=this._consumeCssProperties(""+r,o),s=t.slice(0,t.indexOf("--")),a=this._cssTextToMap(n,!0),l=a,c=this._map.get(e),h=c&&c.properties;h?l=Object.assign(Object.create(h),a):this._map.set(e,l);let d,p,u=[],f=!1;for(d in l)p=a[d],void 0===p&&(p="initial"),h&&!(d in h)&&(f=!0),u.push(`${e}${Vt}${d}: ${p}`);return f&&this._invalidateMixinEntry(c),c&&(c.properties=l),i&&(s=`${t};${s}`),`${s}${u.join("; ")};`}}Kt.prototype.detectMixin=Kt.prototype.detectMixin,Kt.prototype.transformStyle=Kt.prototype.transformStyle,Kt.prototype.transformCustomStyle=Kt.prototype.transformCustomStyle,Kt.prototype.transformRules=Kt.prototype.transformRules,Kt.prototype.transformRule=Kt.prototype.transformRule,Kt.prototype.transformTemplate=Kt.prototype.transformTemplate,Kt.prototype._separator=Vt,Object.defineProperty(Kt.prototype,"invalidCallback",{get:()=>Wt,set(t){Wt=t}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Jt={},Yt="_applyShimCurrentVersion",Gt="_applyShimNextVersion",Xt="_applyShimValidatingVersion",Zt=Promise.resolve();
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Qt(t){let e=Jt[t];e&&function(t){t[Yt]=t[Yt]||0,t[Xt]=t[Xt]||0,t[Gt]=(t[Gt]||0)+1}(e)}function te(t){return t[Yt]===t[Gt]}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let ee,ie=null,re=window.HTMLImports&&window.HTMLImports.whenReady||null;function oe(t){requestAnimationFrame(function(){re?re(t):(ie||(ie=new Promise(t=>{ee=t}),"complete"===document.readyState?ee():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&ee()})),ie.then(function(){t&&t()}))})}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ne="__seenByShadyCSS",se="__shadyCSSCachedStyle";let ae=null,le=null,ce=class{constructor(){this.customStyles=[],this.enqueued=!1,oe(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&le&&(this.enqueued=!0,oe(le))}addCustomStyle(t){t[ne]||(t[ne]=!0,this.customStyles.push(t),this.enqueueDocumentValidation())}getStyleForCustomStyle(t){if(t[se])return t[se];let e;return e=t.getStyle?t.getStyle():t,e}processStyles(){const t=this.customStyles;for(let e=0;e<t.length;e++){const i=t[e];if(i[se])continue;const r=this.getStyleForCustomStyle(i);if(r){const t=r.__appliedElement||r;ae&&ae(t),i[se]=t}}return t}};ce.prototype.addCustomStyle=ce.prototype.addCustomStyle,ce.prototype.getStyleForCustomStyle=ce.prototype.getStyleForCustomStyle,ce.prototype.processStyles=ce.prototype.processStyles,Object.defineProperties(ce.prototype,{transformCallback:{get:()=>ae,set(t){ae=t}},validateCallback:{get:()=>le,set(t){let e=!1;le||(e=!0),le=t,e&&this.enqueueDocumentValidation()}}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const he=new Kt;class de{constructor(){this.customStyleInterface=null,he.invalidCallback=Qt}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=t=>{he.transformCustomStyle(t)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(t,e){if(this.ensure(),Rt(t))return;Jt[e]=t;let i=he.transformTemplate(t,e);t._styleAst=i}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let t=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let e=0;e<t.length;e++){let i=t[e],r=this.customStyleInterface.getStyleForCustomStyle(i);r&&he.transformCustomStyle(r)}this.customStyleInterface.enqueued=!1}}styleSubtree(t,e){if(this.ensure(),e&&Ft(t,e),t.shadowRoot){this.styleElement(t);let e=t.shadowRoot.children||t.shadowRoot.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(e[t])}else{let e=t.children||t.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(e[t])}}styleElement(t){this.ensure();let{is:e}=function(t){let e=t.localName,i="",r="";return e?e.indexOf("-")>-1?i=e:(r=e,i=t.getAttribute&&t.getAttribute("is")||""):(i=t.is,r=t.extends),{is:i,typeExtension:r}}(t),i=Jt[e];if((!i||!Rt(i))&&i&&!te(i)){(function(t){return!te(t)&&t[Xt]===t[Gt]})(i)||(this.prepareTemplate(i,e),function(t){t[Xt]=t[Gt],t._validating||(t._validating=!0,Zt.then(function(){t[Yt]=t[Gt],t._validating=!1}))}(i));let r=t.shadowRoot;if(r){let t=r.querySelector("style");t&&(t.__cssRules=i._styleAst,t.textContent=It(i._styleAst))}}}styleDocument(t){this.ensure(),this.styleSubtree(document.body,t)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const t=new de;let e=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(e,i,r){t.flushCustomStyles(),t.prepareTemplate(e,i)},prepareTemplateStyles(t,e,i){window.ShadyCSS.prepareTemplate(t,e,i)},prepareTemplateDom(t,e){},styleSubtree(e,i){t.flushCustomStyles(),t.styleSubtree(e,i)},styleElement(e){t.flushCustomStyles(),t.styleElement(e)},styleDocument(e){t.flushCustomStyles(),t.styleDocument(e)},getComputedStyleValue:(t,e)=>Bt(t,e),flushCustomStyles(){t.flushCustomStyles()},nativeCss:mt,nativeShadow:ht,cssBuild:pt,disableRuntime:ft},e&&(window.ShadyCSS.CustomStyleInterface=e)}window.ShadyCSS.ApplyShim=he,
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
window.JSCompiler_renameProperty=function(t,e){return t};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let pe,ue,fe=/(url\()([^)]*)(\))/g,me=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function ge(t,e){if(t&&me.test(t))return t;if("//"===t)return t;if(void 0===pe){pe=!1;try{const t=new URL("b","http://a");t.pathname="c%20d",pe="http://a/c%20d"===t.href}catch(t){}}if(e||(e=document.baseURI||window.location.href),pe)try{return new URL(t,e).href}catch(e){return t}return ue||(ue=document.implementation.createHTMLDocument("temp"),ue.base=ue.createElement("base"),ue.head.appendChild(ue.base),ue.anchor=ue.createElement("a"),ue.body.appendChild(ue.anchor)),ue.base.href=e,ue.anchor.href=t,ue.anchor.href||t}function _e(t,e){return t.replace(fe,function(t,i,r,o){return i+"'"+ge(r.replace(/["']/g,""),e)+"'"+o})}function be(t){return t.substring(0,t.lastIndexOf("/")+1)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ye=!window.ShadyDOM||!window.ShadyDOM.inUse;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss);const ve=ye&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const t=new CSSStyleSheet;t.replaceSync("");const e=document.createElement("div");return e.attachShadow({mode:"open"}),e.shadowRoot.adoptedStyleSheets=[t],e.shadowRoot.adoptedStyleSheets[0]===t}catch(t){return!1}})();let we=window.Polymer&&window.Polymer.rootPath||be(document.baseURI||window.location.href),xe=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,Ce=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1,Se=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,ke=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,Ee=window.Polymer&&window.Polymer.legacyOptimizations||!1,Pe=window.Polymer&&window.Polymer.legacyWarnings||!1,Ae=window.Polymer&&window.Polymer.syncInitialRender||!1,$e=window.Polymer&&window.Polymer.legacyUndefined||!1,Te=window.Polymer&&window.Polymer.orderedComputed||!1,Oe=window.Polymer&&window.Polymer.removeNestedTemplates||!1,Ie=window.Polymer&&window.Polymer.fastDomIf||!1,Ne=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1,Le=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1,ze=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1,De=0;const Me=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let i=De++;return function(r){let o=r.__mixinSet;if(o&&o[i])return r;let n=e,s=n.get(r);if(!s){s=t(r),n.set(r,s);let e=Object.create(s.__mixinSet||o||null);e[i]=!0,s.__mixinSet=e}return s}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Re={},Fe={};function Be(t,e){Re[t]=Fe[t.toLowerCase()]=e}function He(t){return Re[t]||Fe[t.toLowerCase()]}class Ue extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let i=He(t);return i&&e?i.querySelector(e):i}return null}attributeChangedCallback(t,e,i,r){e!==i&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=ge(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=be(e)}return this.__assetpath}register(t){if(t=t||this.id){if(Se&&void 0!==He(t))throw Be(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,Be(t,this),(e=this).querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}var e}}Ue.prototype.modules=Re,customElements.define("dom-module",Ue);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const je="shady-unscoped";function Ve(t){return Ue.import(t)}function qe(t){const e=_e((t.body?t.body:t).textContent,t.baseURI),i=document.createElement("style");return i.textContent=e,i}function We(t){const e=t.trim().split(/\s+/),i=[];for(let t=0;t<e.length;t++)i.push(...Ke(e[t]));return i}function Ke(t){const e=Ve(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(void 0===e._styles){const t=[];t.push(...Ye(e));const i=e.querySelector("template");i&&t.push(...Je(i,e.assetpath)),e._styles=t}return e._styles}function Je(t,e){if(!t._styles){const i=[],r=t.content.querySelectorAll("style");for(let t=0;t<r.length;t++){let o=r[t],n=o.getAttribute("include");n&&i.push(...We(n).filter(function(t,e,i){return i.indexOf(t)===e})),e&&(o.textContent=_e(o.textContent,e)),i.push(o)}t._styles=i}return t._styles}function Ye(t){const e=[],i=t.querySelectorAll("link[rel=import][type~=css]");for(let t=0;t<i.length;t++){let r=i[t];if(r.import){const t=r.import,i=r.hasAttribute(je);if(i&&!t._unscopedStyle){const e=qe(t);e.setAttribute(je,""),t._unscopedStyle=e}else t._style||(t._style=qe(t));e.push(i?t._unscopedStyle:t._style)}}return e}function Ge(t){let e=Ve(t);if(e&&void 0===e._cssText){let t=function(t){let e="",i=Ye(t);for(let t=0;t<i.length;t++)e+=i[t].textContent;return e}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/(e),i=e.querySelector("template");i&&(t+=function(t,e){let i="";const r=Je(t,e);for(let t=0;t<r.length;t++){let e=r[t];e.parentNode&&e.parentNode.removeChild(e),i+=e.textContent}return i}(i,e.assetpath)),e._cssText=t||null}return e||console.warn("Could not find style data in module named",t),e&&e._cssText||""}const Xe=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Ze(t){return t.indexOf(".")>=0}function Qe(t){let e=t.indexOf(".");return-1===e?t:t.slice(0,e)}function ti(t,e){return 0===t.indexOf(e+".")}function ei(t,e){return 0===e.indexOf(t+".")}function ii(t,e,i){return e+i.slice(t.length)}function ri(t){if(Array.isArray(t)){let e=[];for(let i=0;i<t.length;i++){let r=t[i].toString().split(".");for(let t=0;t<r.length;t++)e.push(r[t])}return e.join(".")}return t}function oi(t){return Array.isArray(t)?ri(t).split("."):t.toString().split(".")}function ni(t,e,i){let r=t,o=oi(e);for(let t=0;t<o.length;t++){if(!r)return;r=r[o[t]]}return i&&(i.path=o.join(".")),r}function si(t,e,i){let r=t,o=oi(e),n=o[o.length-1];if(o.length>1){for(let t=0;t<o.length-1;t++){if(r=r[o[t]],!r)return}r[n]=i}else r[e]=i;return o.join(".")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ai={},li=/-[a-z]/g,ci=/([A-Z])/g;function hi(t){return ai[t]||(ai[t]=t.indexOf("-")<0?t:t.replace(li,t=>t[1].toUpperCase()))}function di(t){return ai[t]||(ai[t]=t.replace(ci,"-$1").toLowerCase())}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let pi=0,ui=0,fi=[],mi=0,gi=!1,_i=document.createTextNode("");new window.MutationObserver(function(){gi=!1;const t=fi.length;for(let e=0;e<t;e++){let t=fi[e];if(t)try{t()}catch(t){setTimeout(()=>{throw t})}}fi.splice(0,t),ui+=t}).observe(_i,{characterData:!0});const bi={after:t=>({run:e=>window.setTimeout(e,t),cancel(t){window.clearTimeout(t)}}),run:(t,e)=>window.setTimeout(t,e),cancel(t){window.clearTimeout(t)}},yi={run:t=>(gi||(gi=!0,_i.textContent=mi++),fi.push(t),pi++),cancel(t){const e=t-ui;if(e>=0){if(!fi[e])throw new Error("invalid async handle: "+t);fi[e]=null}}},vi=yi,wi=Me(t=>class extends t{static createProperties(t){const e=this.prototype;for(let i in t)i in e||e._createPropertyAccessor(i)}static attributeNameForProperty(t){return t.toLowerCase()}static typeForProperty(t){}_createPropertyAccessor(t,e){this._addPropertyToAttributeMap(t),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[t]||(this.__dataHasAccessor[t]=!0,this._definePropertyAccessor(t,e))}_addPropertyToAttributeMap(t){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let e=this.__dataAttributes[t];return e||(e=this.constructor.attributeNameForProperty(t),this.__dataAttributes[e]=t),e}_definePropertyAccessor(t,e){Object.defineProperty(this,t,{get(){return this.__data[t]},set:e?function(){}:function(e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let t in this.__dataHasAccessor)this.hasOwnProperty(t)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[t]=this[t],delete this[t])}_initializeInstanceProperties(t){Object.assign(this,t)}_setProperty(t,e){this._setPendingProperty(t,e)&&this._invalidateProperties()}_getProperty(t){return this.__data[t]}_setPendingProperty(t,e,i){let r=this.__data[t],o=this._shouldPropertyChange(t,e,r);return o&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(t in this.__dataOld)&&(this.__dataOld[t]=r),this.__data[t]=e,this.__dataPending[t]=e),o}_isPropertyPending(t){return!(!this.__dataPending||!this.__dataPending.hasOwnProperty(t))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,vi.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const t=this.__data,e=this.__dataPending,i=this.__dataOld;this._shouldPropertiesChange(t,e,i)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(t,e,i)),this.__dataCounter--}_shouldPropertiesChange(t,e,i){return Boolean(e)}_propertiesChanged(t,e,i){}_shouldPropertyChange(t,e,i){return i!==e&&(i==i||e==e)}attributeChangedCallback(t,e,i,r){e!==i&&this._attributeToProperty(t,i),super.attributeChangedCallback&&super.attributeChangedCallback(t,e,i,r)}_attributeToProperty(t,e,i){if(!this.__serializing){const r=this.__dataAttributes,o=r&&r[t]||t;this[o]=this._deserializeValue(e,i||this.constructor.typeForProperty(o))}}_propertyToAttribute(t,e,i){this.__serializing=!0,i=arguments.length<3?this[t]:i,this._valueToNodeAttribute(this,i,e||this.constructor.attributeNameForProperty(t)),this.__serializing=!1}_valueToNodeAttribute(t,e,i){const r=this._serializeValue(e);"class"!==i&&"name"!==i&&"slot"!==i||(t=Xe(t)),void 0===r?t.removeAttribute(i):t.setAttribute(i,""===r&&window.trustedTypes?window.trustedTypes.emptyScript:r)}_serializeValue(t){return"boolean"==typeof t?t?"":void 0:null!=t?t.toString():void 0}_deserializeValue(t,e){switch(e){case Boolean:return null!==t;case Number:return Number(t);default:return t}}}),xi={};let Ci=HTMLElement.prototype;for(;Ci;){let t=Object.getOwnPropertyNames(Ci);for(let e=0;e<t.length;e++)xi[t[e]]=!0;Ci=Object.getPrototypeOf(Ci)}const Si=window.trustedTypes?t=>trustedTypes.isHTML(t)||trustedTypes.isScript(t)||trustedTypes.isScriptURL(t):()=>!1;const ki=Me(t=>{const e=wi(t);return class extends e{static createPropertiesForAttributes(){let t=this.observedAttributes;for(let e=0;e<t.length;e++)this.prototype._createPropertyAccessor(hi(t[e]))}static attributeNameForProperty(t){return di(t)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(t){for(let e in t)this._setProperty(e,t[e])}_ensureAttribute(t,e){const i=this;i.hasAttribute(t)||this._valueToNodeAttribute(i,e,t)}_serializeValue(t){if("object"==typeof t){if(t instanceof Date)return t.toString();if(t){if(Si(t))return t;try{return JSON.stringify(t)}catch(t){return""}}}return super._serializeValue(t)}_deserializeValue(t,e){let i;switch(e){case Object:try{i=JSON.parse(t)}catch(e){i=t}break;case Array:try{i=JSON.parse(t)}catch(e){i=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${t}`)}break;case Date:i=isNaN(t)?String(t):Number(t),i=new Date(i);break;default:i=super._deserializeValue(t,e)}return i}_definePropertyAccessor(t,e){!function(t,e){if(!xi[e]){let i=t[e];void 0!==i&&(t.__data?t._setPendingProperty(e,i):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=i))}}(this,t),super._definePropertyAccessor(t,e)}_hasAccessor(t){return this.__dataHasAccessor&&this.__dataHasAccessor[t]}_isPropertyPending(t){return Boolean(this.__dataPending&&t in this.__dataPending)}}}),Ei={"dom-if":!0,"dom-repeat":!0};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Pi=!1,Ai=!1;function $i(t){(function(){if(!Pi){Pi=!0;const t=document.createElement("textarea");t.placeholder="a",Ai=t.placeholder===t.textContent}return Ai})()&&"textarea"===t.localName&&t.placeholder&&t.placeholder===t.textContent&&(t.textContent=null)}const Ti=(()=>{const t=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:t=>t});return(e,i,r)=>{const o=i.getAttribute(r);t&&r.startsWith("on-")?e.setAttribute(r,t.createScript(o,r)):e.setAttribute(r,o)}})();function Oi(t){let e=t.getAttribute("is");if(e&&Ei[e]){let i=t;for(i.removeAttribute("is"),t=i.ownerDocument.createElement(e),i.parentNode.replaceChild(t,i),t.appendChild(i);i.attributes.length;){const{name:e}=i.attributes[0];Ti(t,i,e),i.removeAttribute(e)}}return t}function Ii(t,e){let i=e.parentInfo&&Ii(t,e.parentInfo);if(!i)return t;for(let t=i.firstChild,r=0;t;t=t.nextSibling)if(e.parentIndex===r++)return t}function Ni(t,e,i,r){r.id&&(e[r.id]=i)}function Li(t,e,i){if(i.events&&i.events.length)for(let r,o=0,n=i.events;o<n.length&&(r=n[o]);o++)t._addMethodEventListenerToNode(e,r.name,r.value,t)}function zi(t,e,i,r){i.templateInfo&&(e._templateInfo=i.templateInfo,e._parentTemplateInfo=r)}const Di=Me(t=>class extends t{static _parseTemplate(t,e){if(!t._templateInfo){let i=t._templateInfo={};i.nodeInfoList=[],i.nestedTemplate=Boolean(e),i.stripWhiteSpace=e&&e.stripWhiteSpace||t.hasAttribute&&t.hasAttribute("strip-whitespace"),this._parseTemplateContent(t,i,{parent:null})}return t._templateInfo}static _parseTemplateContent(t,e,i){return this._parseTemplateNode(t.content,e,i)}static _parseTemplateNode(t,e,i){let r=!1,o=t;return"template"!=o.localName||o.hasAttribute("preserve-content")?"slot"===o.localName&&(e.hasInsertionPoint=!0):r=this._parseTemplateNestedTemplate(o,e,i)||r,$i(o),o.firstChild&&this._parseTemplateChildNodes(o,e,i),o.hasAttributes&&o.hasAttributes()&&(r=this._parseTemplateNodeAttributes(o,e,i)||r),r||i.noted}static _parseTemplateChildNodes(t,e,i){if("script"!==t.localName&&"style"!==t.localName)for(let r,o=t.firstChild,n=0;o;o=r){if("template"==o.localName&&(o=Oi(o)),r=o.nextSibling,o.nodeType===Node.TEXT_NODE){let i=r;for(;i&&i.nodeType===Node.TEXT_NODE;)o.textContent+=i.textContent,r=i.nextSibling,t.removeChild(i),i=r;if(e.stripWhiteSpace&&!o.textContent.trim()){t.removeChild(o);continue}}let s={parentIndex:n,parentInfo:i};this._parseTemplateNode(o,e,s)&&(s.infoIndex=e.nodeInfoList.push(s)-1),o.parentNode&&n++}}static _parseTemplateNestedTemplate(t,e,i){let r=t,o=this._parseTemplate(r,e);return(o.content=r.content.ownerDocument.createDocumentFragment()).appendChild(r.content),i.templateInfo=o,!0}static _parseTemplateNodeAttributes(t,e,i){let r=!1,o=Array.from(t.attributes);for(let n,s=o.length-1;n=o[s];s--)r=this._parseTemplateNodeAttribute(t,e,i,n.name,n.value)||r;return r}static _parseTemplateNodeAttribute(t,e,i,r,o){return"on-"===r.slice(0,3)?(t.removeAttribute(r),i.events=i.events||[],i.events.push({name:r.slice(3),value:o}),!0):"id"===r&&(i.id=o,!0)}static _contentForTemplate(t){let e=t._templateInfo;return e&&e.content||t.content}_stampTemplate(t,e){t&&!t.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(t);let i=(e=e||this.constructor._parseTemplate(t)).nodeInfoList,r=e.content||t.content,o=document.importNode(r,!0);o.__noInsertionPoint=!e.hasInsertionPoint;let n=o.nodeList=new Array(i.length);o.$={};for(let t,r=0,s=i.length;r<s&&(t=i[r]);r++){let i=n[r]=Ii(o,t);Ni(0,o.$,i,t),zi(0,i,t,e),Li(this,i,t)}return o}_addMethodEventListenerToNode(t,e,i,r){let o=function(t,e,i){return t=t._methodHost||t,function(e){t[i]?t[i](e,e.detail):console.warn("listener method `"+i+"` not defined")}}(r=r||t,0,i);return this._addEventListenerToNode(t,e,o),o}_addEventListenerToNode(t,e,i){t.addEventListener(e,i)}_removeEventListenerFromNode(t,e,i){t.removeEventListener(e,i)}});
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
 */let Mi=0;const Ri=[],Fi={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Bi="__computeInfo",Hi=/[A-Z]/;function Ui(t,e,i){let r=t[e];if(r){if(!t.hasOwnProperty(e)&&(r=t[e]=Object.create(t[e]),i))for(let t in r){let e=r[t],i=r[t]=Array(e.length);for(let t=0;t<e.length;t++)i[t]=e[t]}}else r=t[e]={};return r}function ji(t,e,i,r,o,n){if(e){let s=!1;const a=Mi++;for(let l in i){let c=e[o?Qe(l):l];if(c)for(let e,h=0,d=c.length;h<d&&(e=c[h]);h++)e.info&&e.info.lastRun===a||o&&!qi(l,e.trigger)||(e.info&&(e.info.lastRun=a),e.fn(t,l,i,r,e.info,o,n),s=!0)}return s}return!1}function Vi(t,e,i,r,o,n,s,a){let l=!1,c=e[s?Qe(r):r];if(c)for(let e,h=0,d=c.length;h<d&&(e=c[h]);h++)e.info&&e.info.lastRun===i||s&&!qi(r,e.trigger)||(e.info&&(e.info.lastRun=i),e.fn(t,r,o,n,e.info,s,a),l=!0);return l}function qi(t,e){if(e){let i=e.name;return i==t||!(!e.structured||!ti(i,t))||!(!e.wildcard||!ei(i,t))}return!0}function Wi(t,e,i,r,o){let n="string"==typeof o.method?t[o.method]:o.method,s=o.property;n?n.call(t,t.__data[s],r[s]):o.dynamicFn||console.warn("observer method `"+o.method+"` not defined")}function Ki(t,e,i){let r=Qe(e);if(r!==e){return Ji(t,di(r)+"-changed",i[e],e),!0}return!1}function Ji(t,e,i,r){let o={value:i,queueProperty:!0};r&&(o.path=r),Xe(t).dispatchEvent(new CustomEvent(e,{detail:o}))}function Yi(t,e,i,r,o,n){let s=(n?Qe(e):e)!=e?e:null,a=s?ni(t,s):t.__data[e];s&&void 0===a&&(a=i[e]),Ji(t,o.eventName,a,s)}function Gi(t,e,i,r,o){let n=t.__data[e];xe&&(n=xe(n,o.attrName,"attribute",t)),t._propertyToAttribute(e,o.attrName,n)}function Xi(t,e,i,r){let o=t[Fi.COMPUTE];if(o)if(Te){Mi++;const n=function(t){let e=t.constructor.__orderedComputedDeps;if(!e){e=new Map;const i=t[Fi.COMPUTE];let r,{counts:o,ready:n,total:s}=function(t){const e=t[Bi],i={},r=t[Fi.COMPUTE],o=[];let n=0;for(let t in e){const r=e[t];n+=i[t]=r.args.filter(t=>!t.literal).length+(r.dynamicFn?1:0)}for(let t in r)e[t]||o.push(t);return{counts:i,ready:o,total:n}}(t);for(;r=n.shift();){e.set(r,e.size);const t=i[r];t&&t.forEach(t=>{const e=t.info.methodInfo;--s,0===--o[e]&&n.push(e)})}if(0!==s){const e=t;console.warn(`Computed graph for ${e.localName} incomplete; circular?`)}t.constructor.__orderedComputedDeps=e}return e}(t),s=[];for(let t in e)Qi(t,o,s,n,r);let a;for(;a=s.shift();)tr(t,"",e,i,a)&&Qi(a.methodInfo,o,s,n,r);Object.assign(i,t.__dataOld),Object.assign(e,t.__dataPending),t.__dataPending=null}else{let n=e;for(;ji(t,o,n,i,r);)Object.assign(i,t.__dataOld),Object.assign(e,t.__dataPending),n=t.__dataPending,t.__dataPending=null}}const Zi=(t,e,i)=>{let r=0,o=e.length-1,n=-1;for(;r<=o;){const s=r+o>>1,a=i.get(e[s].methodInfo)-i.get(t.methodInfo);if(a<0)r=s+1;else{if(!(a>0)){n=s;break}o=s-1}}n<0&&(n=o+1),e.splice(n,0,t)},Qi=(t,e,i,r,o)=>{const n=e[o?Qe(t):t];if(n)for(let e=0;e<n.length;e++){const s=n[e];s.info.lastRun===Mi||o&&!qi(t,s.trigger)||(s.info.lastRun=Mi,Zi(s.info,i,r))}};function tr(t,e,i,r,o){let n=ar(t,e,i,r,o);if(n===Ri)return!1;let s=o.methodInfo;return t.__dataHasAccessor&&t.__dataHasAccessor[s]?t._setPendingProperty(s,n,!0):(t[s]=n,!1)}function er(t,e,i,r,o,n,s){i.bindings=i.bindings||[];let a={kind:r,target:o,parts:n,literal:s,isCompound:1!==n.length};if(i.bindings.push(a),function(t){return Boolean(t.target)&&"attribute"!=t.kind&&"text"!=t.kind&&!t.isCompound&&"{"===t.parts[0].mode}(a)){let{event:t,negate:e}=a.parts[0];a.listenerEvent=t||di(o)+"-changed",a.listenerNegate=e}let l=e.nodeInfoList.length;for(let i=0;i<a.parts.length;i++){let r=a.parts[i];r.compoundIndex=i,ir(t,e,a,r,l)}}function ir(t,e,i,r,o){if(!r.literal)if("attribute"===i.kind&&"-"===i.target[0])console.warn("Cannot set attribute "+i.target+' because "-" is not a valid attribute starting character');else{let n=r.dependencies,s={index:o,binding:i,part:r,evaluator:t};for(let i=0;i<n.length;i++){let r=n[i];"string"==typeof r&&(r=fr(r),r.wildcard=!0),t._addTemplatePropertyEffect(e,r.rootProperty,{fn:rr,info:s,trigger:r})}}}function rr(t,e,i,r,o,n,s){let a=s[o.index],l=o.binding,c=o.part;if(n&&c.source&&e.length>c.source.length&&"property"==l.kind&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let r=i[e];e=ii(c.source,l.target,e),a._setPendingPropertyOrPath(e,r,!1,!0)&&t._enqueueClient(a)}else{let s=o.evaluator._evaluateBinding(t,c,e,i,r,n);s!==Ri&&function(t,e,i,r,o){o=function(t,e,i,r){if(i.isCompound){let o=t.__dataCompoundStorage[i.target];o[r.compoundIndex]=e,e=o.join("")}"attribute"!==i.kind&&("textContent"!==i.target&&("value"!==i.target||"input"!==t.localName&&"textarea"!==t.localName)||(e=null==e?"":e));return e}(e,o,i,r),xe&&(o=xe(o,i.target,i.kind,e));if("attribute"==i.kind)t._valueToNodeAttribute(e,o,i.target);else{let r=i.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[r]?e[Fi.READ_ONLY]&&e[Fi.READ_ONLY][r]||e._setPendingProperty(r,o)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,r,o)}}(t,a,l,c,s)}}function or(t,e){if(e.isCompound){let i=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),r=e.parts,o=new Array(r.length);for(let t=0;t<r.length;t++)o[t]=r[t].literal;let n=e.target;i[n]=o,e.literal&&"property"==e.kind&&("className"===n&&(t=Xe(t)),t[n]=e.literal)}}function nr(t,e,i){if(i.listenerEvent){let r=i.parts[0];t.addEventListener(i.listenerEvent,function(t){!function(t,e,i,r,o){let n,s=t.detail,a=s&&s.path;a?(r=ii(i,r,a),n=s&&s.value):n=t.currentTarget[i],n=o?!n:n,e[Fi.READ_ONLY]&&e[Fi.READ_ONLY][r]||!e._setPendingPropertyOrPath(r,n,!0,Boolean(a))||s&&s.queueProperty||e._invalidateProperties()}(t,e,i.target,r.source,r.negate)})}}function sr(t,e,i,r,o,n){n=e.static||n&&("object"!=typeof n||n[e.methodName]);let s={methodName:e.methodName,args:e.args,methodInfo:o,dynamicFn:n};for(let o,n=0;n<e.args.length&&(o=e.args[n]);n++)o.literal||t._addPropertyEffect(o.rootProperty,i,{fn:r,info:s,trigger:o});return n&&t._addPropertyEffect(e.methodName,i,{fn:r,info:s}),s}function ar(t,e,i,r,o){let n=t._methodHost||t,s=n[o.methodName];if(s){let r=t._marshalArgs(o.args,e,i);return r===Ri?Ri:s.apply(n,r)}o.dynamicFn||console.warn("method `"+o.methodName+"` not defined")}const lr=[],cr="(?:[a-zA-Z_$][\\w.:$\\-*]*)",hr="(?:("+cr+"|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)",dr=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?"+("("+cr+"\\s*"+("(?:\\(\\s*(?:"+("(?:"+hr+"(?:,\\s*"+hr+")*)")+"?)\\)\\s*)")+"?)")+"(?:]]|}})","g");function pr(t){let e="";for(let i=0;i<t.length;i++){e+=t[i].literal||""}return e}function ur(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let t={methodName:e[1],static:!0,args:lr};if(e[2].trim()){return function(t,e){return e.args=t.map(function(t){let i=fr(t);return i.literal||(e.static=!1),i},this),e}(e[2].replace(/\\,/g,"&comma;").split(","),t)}return t}return null}function fr(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),i={name:e,value:"",literal:!1},r=e[0];switch("-"===r&&(r=e[1]),r>="0"&&r<="9"&&(r="#"),r){case"'":case'"':i.value=e.slice(1,-1),i.literal=!0;break;case"#":i.value=Number(e),i.literal=!0}return i.literal||(i.rootProperty=Qe(e),i.structured=Ze(e),i.structured&&(i.wildcard=".*"==e.slice(-2),i.wildcard&&(i.name=e.slice(0,-2)))),i}function mr(t,e,i){let r=ni(t,i);return void 0===r&&(r=e[i]),r}function gr(t,e,i,r){const o={indexSplices:r};$e&&!t._overrideLegacyUndefined&&(e.splices=o),t.notifyPath(i+".splices",o),t.notifyPath(i+".length",e.length),$e&&!t._overrideLegacyUndefined&&(o.indexSplices=[])}function _r(t,e,i,r,o,n){gr(t,e,i,[{index:r,addedCount:o,removed:n,object:e,type:"splice"}])}const br=Me(t=>{const e=Di(ki(t));return class extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return Fi}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(yr.length){let t=yr[yr.length-1];t._enqueueClient(this),this.__dataHost=t}}_initializeProtoProperties(t){this.__data=Object.create(t),this.__dataPending=Object.create(t),this.__dataOld={}}_initializeInstanceProperties(t){let e=this[Fi.READ_ONLY];for(let i in t)e&&e[i]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[i]=this.__dataPending[i]=t[i])}_addPropertyEffect(t,e,i){this._createPropertyAccessor(t,e==Fi.READ_ONLY);let r=Ui(this,e,!0)[t];r||(r=this[e][t]=[]),r.push(i)}_removePropertyEffect(t,e,i){let r=Ui(this,e,!0)[t],o=r.indexOf(i);o>=0&&r.splice(o,1)}_hasPropertyEffect(t,e){let i=this[e];return Boolean(i&&i[t])}_hasReadOnlyEffect(t){return this._hasPropertyEffect(t,Fi.READ_ONLY)}_hasNotifyEffect(t){return this._hasPropertyEffect(t,Fi.NOTIFY)}_hasReflectEffect(t){return this._hasPropertyEffect(t,Fi.REFLECT)}_hasComputedEffect(t){return this._hasPropertyEffect(t,Fi.COMPUTE)}_setPendingPropertyOrPath(t,e,i,r){if(r||Qe(Array.isArray(t)?t[0]:t)!==t){if(!r){let i=ni(this,t);if(!(t=si(this,t,e))||!super._shouldPropertyChange(t,e,i))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(t,e,i))return function(t,e,i){let r=t.__dataLinkedPaths;if(r){let o;for(let n in r){let s=r[n];ei(n,e)?(o=ii(n,s,e),t._setPendingPropertyOrPath(o,i,!0,!0)):ei(s,e)&&(o=ii(s,n,e),t._setPendingPropertyOrPath(o,i,!0,!0))}}}(this,t,e),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[t])return this._setPendingProperty(t,e,i);this[t]=e}return!1}_setUnmanagedPropertyToNode(t,e,i){i===t[e]&&"object"!=typeof i||("className"===e&&(t=Xe(t)),t[e]=i)}_setPendingProperty(t,e,i){let r=this.__dataHasPaths&&Ze(t),o=r?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(t,e,o[t])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),t in this.__dataOld||(this.__dataOld[t]=this.__data[t]),r?this.__dataTemp[t]=e:this.__data[t]=e,this.__dataPending[t]=e,(r||this[Fi.NOTIFY]&&this[Fi.NOTIFY][t])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[t]=i),!0)}_setProperty(t,e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(t){this.__dataPendingClients=this.__dataPendingClients||[],t!==this&&this.__dataPendingClients.push(t)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let t=this.__dataPendingClients;if(t){this.__dataPendingClients=null;for(let e=0;e<t.length;e++){let i=t[e];i.__dataEnabled?i.__dataPending&&i._flushProperties():i._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(t,e){for(let i in t)!e&&this[Fi.READ_ONLY]&&this[Fi.READ_ONLY][i]||this._setPendingPropertyOrPath(i,t[i],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(t,e,i){let r,o=this.__dataHasPaths;this.__dataHasPaths=!1,Xi(this,e,i,o),r=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(e,i,o),this._flushClients(),ji(this,this[Fi.REFLECT],e,i,o),ji(this,this[Fi.OBSERVE],e,i,o),r&&function(t,e,i,r,o){let n,s,a=t[Fi.NOTIFY],l=Mi++;for(let s in e)e[s]&&(a&&Vi(t,a,l,s,i,r,o)||o&&Ki(t,s,i))&&(n=!0);n&&(s=t.__dataHost)&&s._invalidateProperties&&s._invalidateProperties()}(this,r,e,i,o),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(t,e,i){this[Fi.PROPAGATE]&&ji(this,this[Fi.PROPAGATE],t,e,i),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,t,e,i)}_runEffectsForTemplate(t,e,i,r){const o=(e,r)=>{ji(this,t.propertyEffects,e,i,r,t.nodeList);for(let o=t.firstChild;o;o=o.nextSibling)this._runEffectsForTemplate(o,e,i,r)};t.runEffects?t.runEffects(o,e,r):o(e,r)}linkPaths(t,e){t=ri(t),e=ri(e),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[t]=e}unlinkPaths(t){t=ri(t),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[t]}notifySplices(t,e){let i={path:""};gr(this,ni(this,t,i),i.path,e)}get(t,e){return ni(e||this,t)}set(t,e,i){i?si(i,t,e):this[Fi.READ_ONLY]&&this[Fi.READ_ONLY][t]||this._setPendingPropertyOrPath(t,e,!0)&&this._invalidateProperties()}push(t,...e){let i={path:""},r=ni(this,t,i),o=r.length,n=r.push(...e);return e.length&&_r(this,r,i.path,o,e.length,[]),n}pop(t){let e={path:""},i=ni(this,t,e),r=Boolean(i.length),o=i.pop();return r&&_r(this,i,e.path,i.length,0,[o]),o}splice(t,e,i,...r){let o,n={path:""},s=ni(this,t,n);return e<0?e=s.length-Math.floor(-e):e&&(e=Math.floor(e)),o=2===arguments.length?s.splice(e):s.splice(e,i,...r),(r.length||o.length)&&_r(this,s,n.path,e,r.length,o),o}shift(t){let e={path:""},i=ni(this,t,e),r=Boolean(i.length),o=i.shift();return r&&_r(this,i,e.path,0,0,[o]),o}unshift(t,...e){let i={path:""},r=ni(this,t,i),o=r.unshift(...e);return e.length&&_r(this,r,i.path,0,e.length,[]),o}notifyPath(t,e){let i;if(1==arguments.length){let r={path:""};e=ni(this,t,r),i=r.path}else i=Array.isArray(t)?ri(t):t;this._setPendingPropertyOrPath(i,e,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(t,e){var i;this._addPropertyEffect(t,Fi.READ_ONLY),e&&(this["_set"+(i=t,i[0].toUpperCase()+i.substring(1))]=function(e){this._setProperty(t,e)})}_createPropertyObserver(t,e,i){let r={property:t,method:e,dynamicFn:Boolean(i)};this._addPropertyEffect(t,Fi.OBSERVE,{fn:Wi,info:r,trigger:{name:t}}),i&&this._addPropertyEffect(e,Fi.OBSERVE,{fn:Wi,info:r,trigger:{name:e}})}_createMethodObserver(t,e){let i=ur(t);if(!i)throw new Error("Malformed observer expression '"+t+"'");sr(this,i,Fi.OBSERVE,ar,null,e)}_createNotifyingProperty(t){this._addPropertyEffect(t,Fi.NOTIFY,{fn:Yi,info:{eventName:di(t)+"-changed",property:t}})}_createReflectedProperty(t){let e=this.constructor.attributeNameForProperty(t);"-"===e[0]?console.warn("Property "+t+" cannot be reflected to attribute "+e+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(t,Fi.REFLECT,{fn:Gi,info:{attrName:e}})}_createComputedProperty(t,e,i){let r=ur(e);if(!r)throw new Error("Malformed computed expression '"+e+"'");const o=sr(this,r,Fi.COMPUTE,tr,t,i);Ui(this,Bi)[t]=o}_marshalArgs(t,e,i){const r=this.__data,o=[];for(let n=0,s=t.length;n<s;n++){let{name:s,structured:a,wildcard:l,value:c,literal:h}=t[n];if(!h)if(l){const t=ei(s,e),o=mr(r,i,t?e:s);c={path:t?e:s,value:o,base:t?ni(r,s):o}}else c=a?mr(r,i,s):r[s];if($e&&!this._overrideLegacyUndefined&&void 0===c&&t.length>1)return Ri;o[n]=c}return o}static addPropertyEffect(t,e,i){this.prototype._addPropertyEffect(t,e,i)}static createPropertyObserver(t,e,i){this.prototype._createPropertyObserver(t,e,i)}static createMethodObserver(t,e){this.prototype._createMethodObserver(t,e)}static createNotifyingProperty(t){this.prototype._createNotifyingProperty(t)}static createReadOnlyProperty(t,e){this.prototype._createReadOnlyProperty(t,e)}static createReflectedProperty(t){this.prototype._createReflectedProperty(t)}static createComputedProperty(t,e,i){this.prototype._createComputedProperty(t,e,i)}static bindTemplate(t){return this.prototype._bindTemplate(t)}_bindTemplate(t,e){let i=this.constructor._parseTemplate(t),r=this.__preBoundTemplateInfo==i;if(!r)for(let t in i.propertyEffects)this._createPropertyAccessor(t);if(e)if(i=Object.create(i),i.wasPreBound=r,this.__templateInfo){const e=t._parentTemplateInfo||this.__templateInfo,r=e.lastChild;i.parent=e,e.lastChild=i,i.previousSibling=r,r?r.nextSibling=i:e.firstChild=i}else this.__templateInfo=i;else this.__preBoundTemplateInfo=i;return i}static _addTemplatePropertyEffect(t,e,i){(t.hostProps=t.hostProps||{})[e]=!0;let r=t.propertyEffects=t.propertyEffects||{};(r[e]=r[e]||[]).push(i)}_stampTemplate(t,e){e=e||this._bindTemplate(t,!0),yr.push(this);let i=super._stampTemplate(t,e);if(yr.pop(),e.nodeList=i.nodeList,!e.wasPreBound){let t=e.childNodes=[];for(let e=i.firstChild;e;e=e.nextSibling)t.push(e)}return i.templateInfo=e,function(t,e){let{nodeList:i,nodeInfoList:r}=e;if(r.length)for(let e=0;e<r.length;e++){let o=r[e],n=i[e],s=o.bindings;if(s)for(let e=0;e<s.length;e++){let i=s[e];or(n,i),nr(n,t,i)}n.__dataHost=t}}(this,e),this.__dataClientsReady&&(this._runEffectsForTemplate(e,this.__data,null,!1),this._flushClients()),i}_removeBoundDom(t){const e=t.templateInfo,{previousSibling:i,nextSibling:r,parent:o}=e;i?i.nextSibling=r:o&&(o.firstChild=r),r?r.previousSibling=i:o&&(o.lastChild=i),e.nextSibling=e.previousSibling=null;let n=e.childNodes;for(let t=0;t<n.length;t++){let e=n[t];Xe(Xe(e).parentNode).removeChild(e)}}static _parseTemplateNode(t,i,r){let o=e._parseTemplateNode.call(this,t,i,r);if(t.nodeType===Node.TEXT_NODE){let e=this._parseBindings(t.textContent,i);e&&(t.textContent=pr(e)||" ",er(this,i,r,"text","textContent",e),o=!0)}return o}static _parseTemplateNodeAttribute(t,i,r,o,n){let s=this._parseBindings(n,i);if(s){let e=o,n="property";Hi.test(o)?n="attribute":"$"==o[o.length-1]&&(o=o.slice(0,-1),n="attribute");let a=pr(s);return a&&"attribute"==n&&("class"==o&&t.hasAttribute("class")&&(a+=" "+t.getAttribute(o)),t.setAttribute(o,a)),"attribute"==n&&"disable-upgrade$"==e&&t.setAttribute(o,""),"input"===t.localName&&"value"===e&&t.setAttribute(e,""),t.removeAttribute(e),"property"===n&&(o=hi(o)),er(this,i,r,n,o,s,a),!0}return e._parseTemplateNodeAttribute.call(this,t,i,r,o,n)}static _parseTemplateNestedTemplate(t,i,r){let o=e._parseTemplateNestedTemplate.call(this,t,i,r);const n=t.parentNode,s=r.templateInfo,a="dom-if"===n.localName,l="dom-repeat"===n.localName;Oe&&(a||l)&&(n.removeChild(t),(r=r.parentInfo).templateInfo=s,r.noted=!0,o=!1);let c=s.hostProps;if(Ie&&a)c&&(i.hostProps=Object.assign(i.hostProps||{},c),Oe||(r.parentInfo.noted=!0));else{let t="{";for(let e in c){er(this,i,r,"property","_host_"+e,[{mode:t,source:e,dependencies:[e],hostProp:!0}])}}return o}static _parseBindings(t,e){let i,r=[],o=0;for(;null!==(i=dr.exec(t));){i.index>o&&r.push({literal:t.slice(o,i.index)});let n=i[1][0],s=Boolean(i[2]),a=i[3].trim(),l=!1,c="",h=-1;"{"==n&&(h=a.indexOf("::"))>0&&(c=a.substring(h+2),a=a.substring(0,h),l=!0);let d=ur(a),p=[];if(d){let{args:t,methodName:i}=d;for(let e=0;e<t.length;e++){let i=t[e];i.literal||p.push(i)}let r=e.dynamicFns;(r&&r[i]||d.static)&&(p.push(i),d.dynamicFn=!0)}else p.push(a);r.push({source:a,mode:n,negate:s,customEvent:l,signature:d,dependencies:p,event:c}),o=dr.lastIndex}if(o&&o<t.length){let e=t.substring(o);e&&r.push({literal:e})}return r.length?r:null}static _evaluateBinding(t,e,i,r,o,n){let s;return s=e.signature?ar(t,i,r,0,e.signature):i!=e.source?ni(t,e.source):n&&Ze(i)?ni(t,i):t.__data[i],e.negate&&(s=!s),s}}}),yr=[];const vr=Me(t=>{const e=wi(t);function i(t){const e=Object.getPrototypeOf(t);return e.prototype instanceof o?e:null}function r(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",t))){let e=null;if(t.hasOwnProperty(JSCompiler_renameProperty("properties",t))){const i=t.properties;i&&(e=
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function(t){const e={};for(let i in t){const r=t[i];e[i]="function"==typeof r?{type:r}:r}return e}(i))}t.__ownProperties=e}return t.__ownProperties}class o extends e{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const t=this._properties;this.__observedAttributes=t?Object.keys(t).map(t=>this.prototype._addPropertyToAttributeMap(t)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const t=i(this);t&&t.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const t=r(this);t&&this.createProperties(t)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const t=i(this);this.__properties=Object.assign({},t&&t._properties,r(this))}return this.__properties}static typeForProperty(t){const e=this._properties[t];return e&&e.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return o}),wr=window.ShadyCSS&&window.ShadyCSS.cssBuild,xr=Me(t=>{const e=vr(br(t));function i(t,e,i,r){i.computed&&(i.readOnly=!0),i.computed&&(t._hasReadOnlyEffect(e)?console.warn(`Cannot redefine computed property '${e}'.`):t._createComputedProperty(e,i.computed,r)),i.readOnly&&!t._hasReadOnlyEffect(e)?t._createReadOnlyProperty(e,!i.computed):!1===i.readOnly&&t._hasReadOnlyEffect(e)&&console.warn(`Cannot make readOnly property '${e}' non-readOnly.`),i.reflectToAttribute&&!t._hasReflectEffect(e)?t._createReflectedProperty(e):!1===i.reflectToAttribute&&t._hasReflectEffect(e)&&console.warn(`Cannot make reflected property '${e}' non-reflected.`),i.notify&&!t._hasNotifyEffect(e)?t._createNotifyingProperty(e):!1===i.notify&&t._hasNotifyEffect(e)&&console.warn(`Cannot make notify property '${e}' non-notify.`),i.observer&&t._createPropertyObserver(e,i.observer,r[i.observer]),t._addPropertyToAttributeMap(e)}function r(t,e,i,r){if(!wr){const o=e.content.querySelectorAll("style"),n=Je(e),s=function(t){let e=Ve(t);return e?Ye(e):[]}(i),a=e.content.firstElementChild;for(let i=0;i<s.length;i++){let o=s[i];o.textContent=t._processStyleText(o.textContent,r),e.content.insertBefore(o,a)}let l=0;for(let e=0;e<n.length;e++){let i=n[e],s=o[l];s!==i?(i=i.cloneNode(!0),s.parentNode.insertBefore(i,s)):l++,i.textContent=t._processStyleText(i.textContent,r)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(e,i),ze&&wr&&ve){const i=e.content.querySelectorAll("style");if(i){let e="";Array.from(i).forEach(t=>{e+=t.textContent,t.parentNode.removeChild(t)}),t._styleSheet=new CSSStyleSheet,t._styleSheet.replaceSync(e)}}}return class extends e{static get polymerElementVersion(){return"3.5.2"}static _finalizeClass(){e._finalizeClass.call(this);const t=((i=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",i))||(i.__ownObservers=i.hasOwnProperty(JSCompiler_renameProperty("observers",i))?i.observers:null),i.__ownObservers);var i;t&&this.createObservers(t,this._properties),this._prepareTemplate()}static _prepareTemplate(){let t=this.template;t&&("string"==typeof t?(console.error("template getter must return HTMLTemplateElement"),t=null):Ee||(t=t.cloneNode(!0))),this.prototype._template=t}static createProperties(t){for(let e in t)i(this.prototype,e,t[e],t)}static createObservers(t,e){const i=this.prototype;for(let r=0;r<t.length;r++)i._createMethodObserver(t[r],e)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let t=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;"function"==typeof t&&(t=t()),this._template=void 0!==t?t:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&function(t){let e=null;if(t&&(!Se||ke)&&(e=Ue.import(t,"template"),Se&&!e))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${t}`);return e}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(t){this._template=t}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const t=this.importMeta;if(t)this._importPath=be(t.url);else{const t=Ue.import(this.is);this._importPath=t&&t.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=we,this.importPath=this.constructor.importPath;let t=function(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",t))){t.__propertyDefaults=null;let e=t._properties;for(let i in e){let r=e[i];"value"in r&&(t.__propertyDefaults=t.__propertyDefaults||{},t.__propertyDefaults[i]=r)}}return t.__propertyDefaults}(this.constructor);if(t)for(let e in t){let i=t[e];if(this._canApplyPropertyDefault(e)){let t="function"==typeof i.value?i.value.call(this):i.value;this._hasAccessor(e)?this._setPendingProperty(e,t,!0):this[e]=t}}}_canApplyPropertyDefault(t){return!this.hasOwnProperty(t)}static _processStyleText(t,e){return _e(t,e)}static _finalizeTemplate(t){const e=this.prototype._template;if(e&&!e.__polymerFinalized){e.__polymerFinalized=!0;const i=this.importPath;r(this,e,t,i?ge(i):""),this.prototype._bindTemplate(e)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(t){const e=Xe(this);if(e.attachShadow)return t?(e.shadowRoot||(e.attachShadow({mode:"open",shadyUpgradeFragment:t}),e.shadowRoot.appendChild(t),this.constructor._styleSheet&&(e.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),Ae&&window.ShadyDOM&&window.ShadyDOM.flushInitial(e.shadowRoot),e.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(t){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,t)}resolveUrl(t,e){return!e&&this.importPath&&(e=ge(this.importPath)),ge(t,e)}static _parseTemplateContent(t,i,r){return i.dynamicFns=i.dynamicFns||this._properties,e._parseTemplateContent.call(this,t,i,r)}static _addTemplatePropertyEffect(t,i,r){return!Pe||i in this._properties||r.info.part.signature&&r.info.part.signature.static||r.info.part.hostProp||t.nestedTemplate||console.warn(`Property '${i}' used in template but not declared in 'properties'; attribute will not be observed.`),e._addTemplatePropertyEffect.call(this,t,i,r)}}});
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
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class Cr{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,Sr.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),Sr.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(t,e,i){return t instanceof Cr?t._cancelAsync():t=new Cr,t.setConfig(e,i),t}}let Sr=new Set;const kr=function(t){Sr.add(t)},Er=function(){const t=Boolean(Sr.size);return Sr.forEach(t=>{try{t.flush()}catch(t){setTimeout(()=>{throw t})}}),t};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Pr="string"==typeof document.head.style.touchAction,Ar="__polymerGestures",$r="__polymerGesturesHandled",Tr="__polymerGesturesTouchAction",Or=["mousedown","mousemove","mouseup","click"],Ir=[0,1,4,2],Nr=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}();function Lr(t){return Or.indexOf(t)>-1}let zr=!1;function Dr(t){if(!Lr(t)&&"touchend"!==t)return Pr&&zr&&Ce?{passive:!0}:void 0}!function(){try{let t=Object.defineProperty({},"passive",{get(){zr=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}}();let Mr=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const Rr=[],Fr={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},Br={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function Hr(t){return Fr[t.localName]||!1}function Ur(t){let e=Array.prototype.slice.call(t.labels||[]);if(!e.length){e=[];try{let i=t.getRootNode();if(t.id){let r=i.querySelectorAll(`label[for = '${t.id}']`);for(let t=0;t<r.length;t++)e.push(r[t])}}catch(t){}}return e}let jr=function(t){let e=t.sourceCapabilities;if((!e||e.firesTouchEvents)&&(t[$r]={skip:!0},"click"===t.type)){let e=!1,i=Yr(t);for(let t=0;t<i.length;t++){if(i[t].nodeType===Node.ELEMENT_NODE)if("label"===i[t].localName)Rr.push(i[t]);else if(Hr(i[t])){let r=Ur(i[t]);for(let t=0;t<r.length;t++)e=e||Rr.indexOf(r[t])>-1}if(i[t]===Wr.mouse.target)return}if(e)return;t.preventDefault(),t.stopPropagation()}};function Vr(t){let e=Mr?["click"]:Or;for(let i,r=0;r<e.length;r++)i=e[r],t?(Rr.length=0,document.addEventListener(i,jr,!0)):document.removeEventListener(i,jr,!0)}function qr(t){let e=t.type;if(!Lr(e))return!1;if("mousemove"===e){let e=void 0===t.buttons?1:t.buttons;return t instanceof window.MouseEvent&&!Nr&&(e=Ir[t.which]||0),Boolean(1&e)}return 0===(void 0===t.button?0:t.button)}let Wr={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Kr(t,e,i){t.movefn=e,t.upfn=i,document.addEventListener("mousemove",e),document.addEventListener("mouseup",i)}function Jr(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}document.addEventListener("touchend",function(t){Wr.mouse.mouseIgnoreJob||Vr(!0),Wr.mouse.target=Yr(t)[0],Wr.mouse.mouseIgnoreJob=Cr.debounce(Wr.mouse.mouseIgnoreJob,bi.after(2500),function(){Vr(),Wr.mouse.target=null,Wr.mouse.mouseIgnoreJob=null})},!!zr&&{passive:!0});const Yr=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],Gr={},Xr=[];function Zr(t){const e=Yr(t);return e.length>0?e[0]:t.target}function Qr(t){let e,i=t.type,r=t.currentTarget[Ar];if(!r)return;let o=r[i];if(o){if(!t[$r]&&(t[$r]={},"touch"===i.slice(0,5))){let e=t.changedTouches[0];if("touchstart"===i&&1===t.touches.length&&(Wr.touch.id=e.identifier),Wr.touch.id!==e.identifier)return;Pr||"touchstart"!==i&&"touchmove"!==i||function(t){let e=t.changedTouches[0],i=t.type;if("touchstart"===i)Wr.touch.x=e.clientX,Wr.touch.y=e.clientY,Wr.touch.scrollDecided=!1;else if("touchmove"===i){if(Wr.touch.scrollDecided)return;Wr.touch.scrollDecided=!0;let i=function(t){let e="auto",i=Yr(t);for(let t,r=0;r<i.length;r++)if(t=i[r],t[Tr]){e=t[Tr];break}return e}(t),r=!1,o=Math.abs(Wr.touch.x-e.clientX),n=Math.abs(Wr.touch.y-e.clientY);t.cancelable&&("none"===i?r=!0:"pan-x"===i?r=n>o:"pan-y"===i&&(r=o>n)),r?t.preventDefault():no("track")}}(t)}if(e=t[$r],!e.skip){for(let i,r=0;r<Xr.length;r++)i=Xr[r],o[i.name]&&!e[i.name]&&i.flow&&i.flow.start.indexOf(t.type)>-1&&i.reset&&i.reset();for(let r,n=0;n<Xr.length;n++)r=Xr[n],o[r.name]&&!e[r.name]&&(e[r.name]=!0,r[i](t))}}}function to(t,e,i){return!!Gr[e]&&(function(t,e,i){let r=Gr[e],o=r.deps,n=r.name,s=t[Ar];s||(t[Ar]=s={});for(let e,i,r=0;r<o.length;r++)e=o[r],Mr&&Lr(e)&&"click"!==e||(i=s[e],i||(s[e]=i={_count:0}),0===i._count&&t.addEventListener(e,Qr,Dr(e)),i[n]=(i[n]||0)+1,i._count=(i._count||0)+1);t.addEventListener(e,i),r.touchAction&&ro(t,r.touchAction)}(t,e,i),!0)}function eo(t,e,i){return!!Gr[e]&&(function(t,e,i){let r=Gr[e],o=r.deps,n=r.name,s=t[Ar];if(s)for(let e,i,r=0;r<o.length;r++)e=o[r],i=s[e],i&&i[n]&&(i[n]=(i[n]||1)-1,i._count=(i._count||1)-1,0===i._count&&t.removeEventListener(e,Qr,Dr(e)));t.removeEventListener(e,i)}(t,e,i),!0)}function io(t){Xr.push(t);for(let e=0;e<t.emits.length;e++)Gr[t.emits[e]]=t}function ro(t,e){Pr&&t instanceof HTMLElement&&yi.run(()=>{t.style.touchAction=e}),t[Tr]=e}function oo(t,e,i){let r=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(r.detail=i,Xe(t).dispatchEvent(r),r.defaultPrevented){let t=i.preventer||i.sourceEvent;t&&t.preventDefault&&t.preventDefault()}}function no(t){let e=function(t){for(let e,i=0;i<Xr.length;i++){e=Xr[i];for(let i,r=0;r<e.emits.length;r++)if(i=e.emits[r],i===t)return e}return null}(t);e.info&&(e.info.prevent=!0)}function so(t,e,i,r){e&&oo(e,t,{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:r,prevent:function(t){return no(t)}})}function ao(t,e,i){if(t.prevent)return!1;if(t.started)return!0;let r=Math.abs(t.x-e),o=Math.abs(t.y-i);return r>=5||o>=5}function lo(t,e,i){if(!e)return;let r,o=t.moves[t.moves.length-2],n=t.moves[t.moves.length-1],s=n.x-t.x,a=n.y-t.y,l=0;o&&(r=n.x-o.x,l=n.y-o.y),oo(e,"track",{state:t.state,x:i.clientX,y:i.clientY,dx:s,dy:a,ddx:r,ddy:l,sourceEvent:i,hover:function(){return function(t,e){let i=document.elementFromPoint(t,e),r=i;for(;r&&r.shadowRoot&&!window.ShadyDOM;){let o=r;if(r=r.shadowRoot.elementFromPoint(t,e),o===r)break;r&&(i=r)}return i}(i.clientX,i.clientY)}})}function co(t,e,i){let r=Math.abs(e.clientX-t.x),o=Math.abs(e.clientY-t.y),n=Zr(i||e);!n||Br[n.localName]&&n.hasAttribute("disabled")||(isNaN(r)||isNaN(o)||r<=25&&o<=25||function(t){if("click"===t.type){if(0===t.detail)return!0;let e=Zr(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;let i=e.getBoundingClientRect(),r=t.pageX,o=t.pageY;return!(r>=i.left&&r<=i.right&&o>=i.top&&o<=i.bottom)}return!1}(e))&&(t.prevent||oo(n,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:i}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/io({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){Jr(this.info)},mousedown:function(t){if(!qr(t))return;let e=Zr(t),i=this;Kr(this.info,function(t){qr(t)||(so("up",e,t),Jr(i.info))},function(t){qr(t)&&so("up",e,t),Jr(i.info)}),so("down",e,t)},touchstart:function(t){so("down",Zr(t),t.changedTouches[0],t)},touchend:function(t){so("up",Zr(t),t.changedTouches[0],t)}}),io({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(t){this.moves.length>2&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Jr(this.info)},mousedown:function(t){if(!qr(t))return;let e=Zr(t),i=this,r=function(t){let r=t.clientX,o=t.clientY;ao(i.info,r,o)&&(i.info.state=i.info.started?"mouseup"===t.type?"end":"track":"start","start"===i.info.state&&no("tap"),i.info.addMove({x:r,y:o}),qr(t)||(i.info.state="end",Jr(i.info)),e&&lo(i.info,e,t),i.info.started=!0)};Kr(this.info,r,function(t){i.info.started&&r(t),Jr(i.info)}),this.info.x=t.clientX,this.info.y=t.clientY},touchstart:function(t){let e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(t){let e=Zr(t),i=t.changedTouches[0],r=i.clientX,o=i.clientY;ao(this.info,r,o)&&("start"===this.info.state&&no("tap"),this.info.addMove({x:r,y:o}),lo(this.info,e,i),this.info.state="track",this.info.started=!0)},touchend:function(t){let e=Zr(t),i=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:i.clientX,y:i.clientY}),lo(this.info,e,i))}}),io({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(t){qr(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click:function(t){qr(t)&&co(this.info,t)},touchstart:function(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(t){co(this.info,t.changedTouches[0],t)}});const ho=Me(t=>class extends t{_addEventListenerToNode(t,e,i){to(t,e,i)||super._addEventListenerToNode(t,e,i)}_removeEventListenerFromNode(t,e,i){eo(t,e,i)||super._removeEventListenerFromNode(t,e,i)}}),po=/:host\(:dir\((ltr|rtl)\)\)/g,uo=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,fo=/:dir\((?:ltr|rtl)\)/,mo=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),go=[];
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
 */let _o=null,bo="";function yo(){bo=document.documentElement.getAttribute("dir")}function vo(t){if(!t.__autoDirOptOut){t.setAttribute("dir",bo)}}function wo(){yo(),bo=document.documentElement.getAttribute("dir");for(let t=0;t<go.length;t++)vo(go[t])}const xo=Me(t=>{mo||_o||(yo(),_o=new MutationObserver(wo),_o.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const e=ki(t);class i extends e{static _processStyleText(t,i){return t=e._processStyleText.call(this,t,i),!mo&&fo.test(t)&&(t=this._replaceDirInCssText(t),this.__activateDir=!0),t}static _replaceDirInCssText(t){let e=t;return e=e.replace(po,':host([dir="$1"])'),e=e.replace(uo,':host([dir="$2"]) $1'),e}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){e.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(_o&&_o.takeRecords().length&&wo(),go.push(this),vo(this))}disconnectedCallback(){if(e.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const t=go.indexOf(this);t>-1&&go.splice(t,1)}}}return i.__activateDir=!1,i});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Co(){document.body.removeAttribute("unresolved")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function So(t,e,i){return{index:t,removed:e,addedCount:i}}"interactive"===document.readyState||"complete"===document.readyState?Co():window.addEventListener("DOMContentLoaded",Co);function ko(t,e,i,r,o,n){let s,a=0,l=0,c=Math.min(i-e,n-o);if(0==e&&0==o&&(a=function(t,e,i){for(let r=0;r<i;r++)if(!Po(t[r],e[r]))return r;return i}(t,r,c)),i==t.length&&n==r.length&&(l=function(t,e,i){let r=t.length,o=e.length,n=0;for(;n<i&&Po(t[--r],e[--o]);)n++;return n}(t,r,c-a)),o+=a,n-=l,(i-=l)-(e+=a)==0&&n-o==0)return[];if(e==i){for(s=So(e,[],0);o<n;)s.removed.push(r[o++]);return[s]}if(o==n)return[So(e,[],i-e)];let h=function(t){let e=t.length-1,i=t[0].length-1,r=t[e][i],o=[];for(;e>0||i>0;){if(0==e){o.push(2),i--;continue}if(0==i){o.push(3),e--;continue}let n,s=t[e-1][i-1],a=t[e-1][i],l=t[e][i-1];n=a<l?a<s?a:s:l<s?l:s,n==s?(s==r?o.push(0):(o.push(1),r=s),e--,i--):n==a?(o.push(3),e--,r=a):(o.push(2),i--,r=l)}return o.reverse(),o}(function(t,e,i,r,o,n){let s=n-o+1,a=i-e+1,l=new Array(s);for(let t=0;t<s;t++)l[t]=new Array(a),l[t][0]=t;for(let t=0;t<a;t++)l[0][t]=t;for(let i=1;i<s;i++)for(let n=1;n<a;n++)if(Po(t[e+n-1],r[o+i-1]))l[i][n]=l[i-1][n-1];else{let t=l[i-1][n]+1,e=l[i][n-1]+1;l[i][n]=t<e?t:e}return l}(t,e,i,r,o,n));s=void 0;let d=[],p=e,u=o;for(let t=0;t<h.length;t++)switch(h[t]){case 0:s&&(d.push(s),s=void 0),p++,u++;break;case 1:s||(s=So(p,[],0)),s.addedCount++,p++,s.removed.push(r[u]),u++;break;case 2:s||(s=So(p,[],0)),s.addedCount++,p++;break;case 3:s||(s=So(p,[],0)),s.removed.push(r[u]),u++}return s&&d.push(s),d}function Eo(t,e){return ko(t,0,t.length,e,0,e.length)}function Po(t,e){return t===e}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Ao(t){return"slot"===t.localName}let $o=class{static getFlattenedNodes(t){const e=Xe(t);if(Ao(t))return e.assignedNodes({flatten:!0});{const t=[];for(let i=0;i<e.childNodes.length;i++){const r=e.childNodes[i];if(Ao(r)){const e=r;t.push(...Xe(e).assignedNodes({flatten:!0}))}else t.push(r)}return t}}constructor(t,e){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=t,this.callback=e,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){Ao(this._target)?this._listenSlots([this._target]):Xe(this._target).children&&(this._listenSlots(Xe(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,t=>{this._processMutations(t)}):(this._nativeChildrenObserver=new MutationObserver(t=>{this._processMutations(t)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){Ao(this._target)?this._unlistenSlots([this._target]):Xe(this._target).children&&(this._unlistenSlots(Xe(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,yi.run(()=>this.flush()))}_processMutations(t){this._processSlotMutations(t),this.flush()}_processSlotMutations(t){if(t)for(let e=0;e<t.length;e++){let i=t[e];i.addedNodes&&this._listenSlots(i.addedNodes),i.removedNodes&&this._unlistenSlots(i.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let t={target:this._target,addedNodes:[],removedNodes:[]},e=this.constructor.getFlattenedNodes(this._target),i=Eo(e,this._effectiveNodes);for(let e,r=0;r<i.length&&(e=i[r]);r++)for(let i,r=0;r<e.removed.length&&(i=e.removed[r]);r++)t.removedNodes.push(i);for(let r,o=0;o<i.length&&(r=i[o]);o++)for(let i=r.index;i<r.index+r.addedCount;i++)t.addedNodes.push(e[i]);this._effectiveNodes=e;let r=!1;return(t.addedNodes.length||t.removedNodes.length)&&(r=!0,this.callback.call(this._target,t)),r}_listenSlots(t){for(let e=0;e<t.length;e++){let i=t[e];Ao(i)&&i.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(t){for(let e=0;e<t.length;e++){let i=t[e];Ao(i)&&i.removeEventListener("slotchange",this._boundSchedule)}}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const To=function(){let t,e;do{t=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),e=Er()}while(t||e)},Oo=Element.prototype,Io=Oo.matches||Oo.matchesSelector||Oo.mozMatchesSelector||Oo.msMatchesSelector||Oo.oMatchesSelector||Oo.webkitMatchesSelector,No=function(t,e){return Io.call(t,e)};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class Lo{constructor(t){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(t),this.node=t}observeNodes(t){return new $o(this.node,t)}unobserveNodes(t){t.disconnect()}notifyObserver(){}deepContains(t){if(Xe(this.node).contains(t))return!0;let e=t,i=t.ownerDocument;for(;e&&e!==i&&e!==this.node;)e=Xe(e).parentNode||Xe(e).host;return e===this.node}getOwnerRoot(){return Xe(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?Xe(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let t=[],e=Xe(this.node).assignedSlot;for(;e;)t.push(e),e=Xe(e).assignedSlot;return t}importNode(t,e){let i=this.node instanceof Document?this.node:this.node.ownerDocument;return Xe(i).importNode(t,e)}getEffectiveChildNodes(){return $o.getFlattenedNodes(this.node)}queryDistributedElements(t){let e=this.getEffectiveChildNodes(),i=[];for(let r,o=0,n=e.length;o<n&&(r=e[o]);o++)r.nodeType===Node.ELEMENT_NODE&&No(r,t)&&i.push(r);return i}get activeElement(){let t=this.node;return void 0!==t._activeElement?t._activeElement:t.activeElement}}function zo(t,e){for(let i=0;i<e.length;i++){let r=e[i];Object.defineProperty(t,r,{get:function(){return this.node[r]},configurable:!0})}}class Do{constructor(t){this.event=t}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}Lo.prototype.cloneNode,Lo.prototype.appendChild,Lo.prototype.insertBefore,Lo.prototype.removeChild,Lo.prototype.replaceChild,Lo.prototype.setAttribute,Lo.prototype.removeAttribute,Lo.prototype.querySelector,Lo.prototype.querySelectorAll,Lo.prototype.parentNode,Lo.prototype.firstChild,Lo.prototype.lastChild,Lo.prototype.nextSibling,Lo.prototype.previousSibling,Lo.prototype.firstElementChild,Lo.prototype.lastElementChild,Lo.prototype.nextElementSibling,Lo.prototype.previousElementSibling,Lo.prototype.childNodes,Lo.prototype.children,Lo.prototype.classList,Lo.prototype.textContent,Lo.prototype.innerHTML;let Mo=Lo;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class t extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(Lo.prototype).forEach(e=>{"activeElement"!=e&&(t.prototype[e]=Lo.prototype[e])}),zo(t.prototype,["classList"]),Mo=t,Object.defineProperties(Do.prototype,{localTarget:{get(){const t=this.event.currentTarget,e=t&&Ro(t).getOwnerRoot(),i=this.path;for(let t=0;t<i.length;t++){const r=i[t];if(Ro(r).getOwnerRoot()===e)return r}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(t,e){for(let i=0;i<e.length;i++){let r=e[i];t[r]=function(){return this.node[r].apply(this.node,arguments)}}}(Lo.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll","attachShadow"]),zo(Lo.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList","shadowRoot"]),function(t,e){for(let i=0;i<e.length;i++){let r=e[i];Object.defineProperty(t,r,{get:function(){return this.node[r]},set:function(t){this.node[r]=t},configurable:!0})}}(Lo.prototype,["textContent","innerHTML","className"]);const Ro=function(t){if((t=t||document)instanceof Mo)return t;if(t instanceof Do)return t;let e=t.__domApi;return e||(e=t instanceof Event?new Do(t):new Mo(t),t.__domApi=e),e},Fo=window.ShadyDOM,Bo=window.ShadyCSS;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Ho(t,e){return Xe(t).getRootNode()===e}
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
const Uo="disable-upgrade",jo=t=>{for(;t;){const e=Object.getOwnPropertyDescriptor(t,"observedAttributes");if(e)return e.get;t=Object.getPrototypeOf(t.prototype).constructor}return()=>[]};Me(t=>{const e=xr(t);let i=jo(e);return class extends e{constructor(){super(),this.__isUpgradeDisabled}static get observedAttributes(){return i.call(this).concat(Uo)}_initializeProperties(){this.hasAttribute(Uo)?this.__isUpgradeDisabled=!0:super._initializeProperties()}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(t){return super._canApplyPropertyDefault(t)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(t))}attributeChangedCallback(t,e,i,r){t==Uo?this.__isUpgradeDisabled&&null==i&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,Xe(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(t,e,i,r)}connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Vo="disable-upgrade";let qo=window.ShadyCSS;const Wo=Me(t=>{const e=ho(xr(t)),i=wr?e:xo(e),r=jo(i),o={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class n extends i{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this.__isUpgradeDisabled,this.__needsAttributesAtConnected,this._legacyForceObservedAttributes}static get importMeta(){return this.prototype.importMeta}created(){}__attributeReaction(t,e,i){(this.__dataAttributes&&this.__dataAttributes[t]||t===Vo)&&this.attributeChangedCallback(t,e,i,null)}setAttribute(t,e){if(Le&&!this._legacyForceObservedAttributes){const i=this.getAttribute(t);super.setAttribute(t,e),this.__attributeReaction(t,i,String(e))}else super.setAttribute(t,e)}removeAttribute(t){if(Le&&!this._legacyForceObservedAttributes){const e=this.getAttribute(t);super.removeAttribute(t),this.__attributeReaction(t,e,null)}else super.removeAttribute(t)}static get observedAttributes(){return Le&&!this.prototype._legacyForceObservedAttributes?(this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))||(this.__observedAttributes=[],this.prototype),this.__observedAttributes):r.call(this).concat(Vo)}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(t){return super._canApplyPropertyDefault(t)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(t))}connectedCallback(){this.__needsAttributesAtConnected&&this._takeAttributes(),this.__isUpgradeDisabled||(super.connectedCallback(),this.isAttached=!0,this.attached())}attached(){}disconnectedCallback(){this.__isUpgradeDisabled||(super.disconnectedCallback(),this.isAttached=!1,this.detached())}detached(){}attributeChangedCallback(t,e,i,r){e!==i&&(t==Vo?this.__isUpgradeDisabled&&null==i&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,Xe(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(t,e,i,r),this.attributeChanged(t,e,i)))}attributeChanged(t,e,i){}_initializeProperties(){if(Ee&&this.hasAttribute(Vo))this.__isUpgradeDisabled=!0;else{let t=Object.getPrototypeOf(this);t.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",t))||(this._registered(),t.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),Le&&!this._legacyForceObservedAttributes&&(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0)),this._applyListeners()}}_takeAttributes(){const t=this.attributes;for(let e=0,i=t.length;e<i;e++){const i=t[e];this.__attributeReaction(i.name,null,i.value)}}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(t){return this._serializeValue(t)}deserialize(t,e){return this._deserializeValue(t,e)}reflectPropertyToAttribute(t,e,i){this._propertyToAttribute(t,e,i)}serializeValueToAttribute(t,e,i){this._valueToNodeAttribute(i||this,t,e)}extend(t,e){if(!t||!e)return t||e;let i=Object.getOwnPropertyNames(e);for(let r,o=0;o<i.length&&(r=i[o]);o++){let i=Object.getOwnPropertyDescriptor(e,r);i&&Object.defineProperty(t,r,i)}return t}mixin(t,e){for(let i in e)t[i]=e[i];return t}chainObject(t,e){return t&&e&&t!==e&&(t.__proto__=e),t}instanceTemplate(t){let e=this.constructor._contentForTemplate(t);return document.importNode(e,!0)}fire(t,e,i){i=i||{},e=null==e?{}:e;let r=new Event(t,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});r.detail=e;let o=i.node||this;return Xe(o).dispatchEvent(r),r}listen(t,e,i){t=t||this;let r=this.__boundListeners||(this.__boundListeners=new WeakMap),o=r.get(t);o||(o={},r.set(t,o));let n=e+i;o[n]||(o[n]=this._addMethodEventListenerToNode(t,e,i,this))}unlisten(t,e,i){t=t||this;let r=this.__boundListeners&&this.__boundListeners.get(t),o=e+i,n=r&&r[o];n&&(this._removeEventListenerFromNode(t,e,n),r[o]=null)}setScrollDirection(t,e){ro(e||this,o[t]||"auto")}$$(t){return this.root.querySelector(t)}get domHost(){let t=Xe(this).getRootNode();return t instanceof DocumentFragment?t.host:t}distributeContent(){const t=Ro(this);window.ShadyDOM&&t.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return Ro(this).getEffectiveChildNodes()}queryDistributedElements(t){return Ro(this).queryDistributedElements(t)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter(function(t){return t.nodeType===Node.ELEMENT_NODE})}getEffectiveTextContent(){let t=this.getEffectiveChildNodes(),e=[];for(let i,r=0;i=t[r];r++)i.nodeType!==Node.COMMENT_NODE&&e.push(i.textContent);return e.join("")}queryEffectiveChildren(t){let e=this.queryDistributedElements(t);return e&&e[0]}queryAllEffectiveChildren(t){return this.queryDistributedElements(t)}getContentChildNodes(t){let e=this.root.querySelector(t||"slot");return e?Ro(e).getDistributedNodes():[]}getContentChildren(t){let e=this.getContentChildNodes(t).filter(function(t){return t.nodeType===Node.ELEMENT_NODE});return e}isLightDescendant(t){const e=this;return e!==t&&Xe(e).contains(t)&&Xe(e).getRootNode()===Xe(t).getRootNode()}isLocalDescendant(t){return this.root===Xe(t).getRootNode()}scopeSubtree(t,e=!1){return function(t,e=!1){if(!Fo||!Bo)return null;if(!Fo.handlesDynamicScoping)return null;const i=Bo.ScopingShim;if(!i)return null;const r=i.scopeForNode(t),o=Xe(t).getRootNode(),n=t=>{if(!Ho(t,o))return;const e=Array.from(Fo.nativeMethods.querySelectorAll.call(t,"*"));e.push(t);for(let t=0;t<e.length;t++){const n=e[t];if(!Ho(n,o))continue;const s=i.currentScopeForNode(n);s!==r&&(""!==s&&i.unscopeNode(n,s),i.scopeNode(n,r))}};if(n(t),e){const e=new MutationObserver(t=>{for(let e=0;e<t.length;e++){const i=t[e];for(let t=0;t<i.addedNodes.length;t++){const e=i.addedNodes[t];e.nodeType===Node.ELEMENT_NODE&&n(e)}}});return e.observe(t,{childList:!0,subtree:!0}),e}return null}(t,e)}getComputedStyleValue(t){return qo.getComputedStyleValue(this,t)}debounce(t,e,i){return this._debouncers=this._debouncers||{},this._debouncers[t]=Cr.debounce(this._debouncers[t],i>0?bi.after(i):yi,e.bind(this))}isDebouncerActive(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];return!(!e||!e.isActive())}flushDebouncer(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];e&&e.flush()}cancelDebouncer(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];e&&e.cancel()}async(t,e){return e>0?bi.run(t.bind(this),e):~yi.run(t.bind(this))}cancelAsync(t){t<0?yi.cancel(~t):bi.cancel(t)}create(t,e){let i=document.createElement(t);if(e)if(i.setProperties)i.setProperties(e);else for(let t in e)i[t]=e[t];return i}elementMatches(t,e){return No(e||this,t)}toggleAttribute(t,e){let i=this;return 3===arguments.length&&(i=arguments[2]),1==arguments.length&&(e=!i.hasAttribute(t)),e?(Xe(i).setAttribute(t,""),!0):(Xe(i).removeAttribute(t),!1)}toggleClass(t,e,i){i=i||this,1==arguments.length&&(e=!i.classList.contains(t)),e?i.classList.add(t):i.classList.remove(t)}transform(t,e){(e=e||this).style.webkitTransform=t,e.style.transform=t}translate3d(t,e,i,r){r=r||this,this.transform("translate3d("+t+","+e+","+i+")",r)}arrayDelete(t,e){let i;if(Array.isArray(t)){if(i=t.indexOf(e),i>=0)return t.splice(i,1)}else{if(i=ni(this,t).indexOf(e),i>=0)return this.splice(t,i,1)}return null}_logger(t,e){switch(Array.isArray(e)&&1===e.length&&Array.isArray(e[0])&&(e=e[0]),t){case"log":case"warn":case"error":console[t](...e)}}_log(...t){this._logger("log",t)}_warn(...t){this._logger("warn",t)}_error(...t){this._logger("error",t)}_logf(t,...e){return["[%s::%s]",this.is,t,...e]}}return n.prototype.is="",n});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function Ko(t,e,i,r,o){let n;o&&(n="object"==typeof i&&null!==i,n&&(r=t.__dataTemp[e]));let s=r!==i&&(r==r||i==i);return n&&s&&(t.__dataTemp[e]=i),s}Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},{attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0}),Wo(HTMLElement);const Jo=Me(t=>class extends t{_shouldPropertyChange(t,e,i){return Ko(this,t,e,i,!0)}}),Yo=Me(t=>class extends t{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(t,e,i){return Ko(this,t,e,i,this.mutableData)}});Jo._mutablePropertyChange=Ko;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Go=null;function Xo(){return Go}Xo.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:Xo,writable:!0}});const Zo=br(Xo),Qo=Jo(Zo);const tn=br(class{});function en(t,e){for(let i=0;i<e.length;i++){let r=e[i];if(Boolean(t)!=Boolean(r.__hideTemplateChildren__))if(r.nodeType===Node.TEXT_NODE)t?(r.__polymerTextContent__=r.textContent,r.textContent=""):r.textContent=r.__polymerTextContent__;else if("slot"===r.localName)if(t)r.__polymerReplaced__=document.createComment("hidden-slot"),Xe(Xe(r).parentNode).replaceChild(r.__polymerReplaced__,r);else{const t=r.__polymerReplaced__;t&&Xe(Xe(t).parentNode).replaceChild(r,t)}else r.style&&(t?(r.__polymerDisplay__=r.style.display,r.style.display="none"):r.style.display=r.__polymerDisplay__);r.__hideTemplateChildren__=t,r._showHideChildren&&r._showHideChildren(t)}}class rn extends tn{constructor(t){super(),this._configureProperties(t),this.root=this._stampTemplate(this.__dataHost);let e=[];this.children=e;for(let t=this.root.firstChild;t;t=t.nextSibling)e.push(t),t.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let i=this.__templatizeOptions;(t&&i.instanceProps||!i.instanceProps)&&this._enableProperties()}_configureProperties(t){if(this.__templatizeOptions.forwardHostProp)for(let t in this.__hostProps)this._setPendingProperty(t,this.__dataHost["_host_"+t]);for(let e in t)this._setPendingProperty(e,t[e])}forwardHostProp(t,e){this._setPendingPropertyOrPath(t,e,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(t,e,i){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(t,e,t=>{t.model=this,i(t)});else{let r=this.__dataHost.__dataHost;r&&r._addEventListenerToNode(t,e,i)}}_showHideChildren(t){en(t,this.children)}_setUnmanagedPropertyToNode(t,e,i){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&"textContent"==e?t.__polymerTextContent__=i:super._setUnmanagedPropertyToNode(t,e,i)}get parentModel(){let t=this.__parentModel;if(!t){let e;t=this;do{t=t.__dataHost.__dataHost}while((e=t.__templatizeOptions)&&!e.parentModel);this.__parentModel=t}return t}dispatchEvent(t){return!0}}rn.prototype.__dataHost,rn.prototype.__templatizeOptions,rn.prototype._methodHost,rn.prototype.__templatizeOwner,rn.prototype.__hostProps;const on=Jo(rn);function nn(t){let e=t.__dataHost;return e&&e._methodHost||e}function sn(t,e,i){let r=i.mutableData?on:rn;dn.mixin&&(r=dn.mixin(r));let o=class extends r{};return o.prototype.__templatizeOptions=i,o.prototype._bindTemplate(t),function(t,e,i,r){let o=i.hostProps||{};for(let e in r.instanceProps){delete o[e];let i=r.notifyInstanceProp;i&&t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:cn(e,i)})}if(r.forwardHostProp&&e.__dataHost)for(let e in o)i.hasHostProps||(i.hasHostProps=!0),t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:hn()})}(o,t,e,i),o}function an(t,e,i,r){let o=i.forwardHostProp;if(o&&e.hasHostProps){const n="template"==t.localName;let s=e.templatizeTemplateClass;if(!s){if(n){let t=i.mutableData?Qo:Zo;class r extends t{}s=e.templatizeTemplateClass=r}else{const i=t.constructor;class r extends i{}s=e.templatizeTemplateClass=r}let a=e.hostProps;for(let t in a)s.prototype._addPropertyEffect("_host_"+t,s.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:ln(t,o)}),s.prototype._createNotifyingProperty("_host_"+t);Pe&&r&&function(t,e,i){const r=i.constructor._properties,{propertyEffects:o}=t,{instanceProps:n}=e;for(let t in o)if(!(r[t]||n&&n[t])){const e=o[t];for(let i=0;i<e.length;i++){const{part:r}=e[i].info;if(!r.signature||!r.signature.static){console.warn(`Property '${t}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}(e,i,r)}if(t.__dataProto&&Object.assign(t.__data,t.__dataProto),n)!function(t,e){Go=t,Object.setPrototypeOf(t,e.prototype),new e,Go=null}(t,s),t.__dataTemp={},t.__dataPending=null,t.__dataOld=null,t._enableProperties();else{Object.setPrototypeOf(t,s.prototype);const i=e.hostProps;for(let e in i)if(e="_host_"+e,e in t){const i=t[e];delete t[e],t.__data[e]=i}}}}function ln(t,e){return function(t,i,r){e.call(t.__templatizeOwner,i.substring(6),r[i])}}function cn(t,e){return function(t,i,r){e.call(t.__templatizeOwner,t,i,r[i])}}function hn(){return function(t,e,i){t.__dataHost._setPendingPropertyOrPath("_host_"+e,i[e],!0,!0)}}function dn(t,e,i){if(Se&&!nn(t))throw new Error("strictTemplatePolicy: template owner not trusted");if(i=i||{},t.__templatizeOwner)throw new Error("A <template> can only be templatized once");t.__templatizeOwner=e;let r=(e?e.constructor:rn)._parseTemplate(t),o=r.templatizeInstanceClass;o||(o=sn(t,r,i),r.templatizeInstanceClass=o);const n=nn(t);an(t,r,i,n);let s=class extends o{};return s.prototype._methodHost=n,s.prototype.__dataHost=t,s.prototype.__templatizeOwner=e,s.prototype.__hostProps=r.hostProps,s}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let pn=!1;function un(){if(Ee&&!ye){if(!pn){pn=!0;const t=document.createElement("style");t.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(t)}return!0}return!1}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const fn=ho(Yo(br(HTMLElement)));customElements.define("dom-bind",class extends fn{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),Se)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(t,e,i,r){this.mutableData=!0}connectedCallback(){un()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){Xe(Xe(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let t=0;t<this.__children.length;t++)this.root.appendChild(this.__children[t])}render(){let t;if(!this.__children){if(t=t||this.querySelector("template"),!t){let e=new MutationObserver(()=>{if(t=this.querySelector("template"),!t)throw new Error("dom-bind requires a <template> child");e.disconnect(),this.render()});return void e.observe(this,{childList:!0})}this.root=this._stampTemplate(t),this.$=this.root.$,this.__children=[];for(let t=this.root.firstChild;t;t=t.nextSibling)this.__children[this.__children.length]=t;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const mn=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:t=>t});class gn{constructor(t,e){bn(t,e);const i=e.reduce((e,i,r)=>e+_n(i)+t[r+1],t[0]);this.value=i.toString()}toString(){return this.value}}function _n(t){if(t instanceof gn)return t.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${t}`)}const bn=(t,e)=>{if(!Array.isArray(t)||!Array.isArray(t.raw)||e.length!==t.length-1)throw new TypeError("Invalid call to the html template tag")},yn=xr(HTMLElement),vn=Yo(yn);class wn extends vn{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!Ne,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let t=0;t<this.__instances.length;t++)this.__detachInstance(t);this.__chunkingId&&cancelAnimationFrame(this.__chunkingId)}connectedCallback(){if(super.connectedCallback(),un()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let t=Xe(Xe(this).parentNode);for(let e=0;e<this.__instances.length;e++)this.__attachInstance(e,t);this.__chunkingId&&this.__render()}}__ensureTemplatized(){if(!this.__ctor){const t=this;let e=this.template=t._templateInfo?t:this.querySelector("template");if(!e){let t=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}let i={};i[this.as]=!0,i[this.indexAs]=!0,i[this.itemsIndexAs]=!0,this.__ctor=dn(e,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:i,forwardHostProp:function(t,e){let i=this.__instances;for(let r,o=0;o<i.length&&(r=i[o]);o++)r.forwardHostProp(t,e)},notifyInstanceProp:function(t,e,i){if((r=this.as)===(o=e)||ti(r,o)||ei(r,o)){let r=t[this.itemsIndexAs];e==this.as&&(this.items[r]=i);let o=ii(this.as,`${JSCompiler_renameProperty("items",this)}.${r}`,e);this.notifyPath(o,i)}var r,o}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(t){if("string"==typeof t){let e=t,i=this.__getMethodHost();return function(){return i[e].apply(i,arguments)}}return t}__sortChanged(t){this.__sortFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__filterChanged(t){this.__filterFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(t){return Math.ceil(1e3/t)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(t){if(this.__sortFn||this.__filterFn)if(t){if(this.__observePaths){let e=this.__observePaths;for(let i=0;i<e.length;i++)0===t.indexOf(e[i])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__itemsChanged(t){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(t.path,t.value)||("items"===t.path&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(t,e=0){this.__renderDebouncer=Cr.debounce(this.__renderDebouncer,e>0?bi.after(e):yi,t.bind(this)),kr(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),To()}__render(){if(!this.__ensureTemplatized())return;let t=this.items||[];const e=this.__sortAndFilterItems(t),i=this.__calculateLimit(e.length);this.__updateInstances(t,i,e),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>{this.__chunkingId=null,this.__continueChunking()})),this._setRenderedItemCount(this.__instances.length),Ne&&!this.notifyDomChange||this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(t){let e=new Array(t.length);for(let i=0;i<t.length;i++)e[i]=i;return this.__filterFn&&(e=e.filter((e,i,r)=>this.__filterFn(t[e],i,r))),this.__sortFn&&e.sort((e,i)=>this.__sortFn(t[e],t[i])),e}__calculateLimit(t){let e=t;const i=this.__instances.length;if(this.initialCount){let r;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(e=Math.min(t,this.initialCount),r=Math.max(e-i,0),this.__chunkCount=r||1):(r=Math.min(Math.max(t-i,0),this.__chunkCount),e=Math.min(i+r,t)),this.__shouldMeasureChunk=r===this.__chunkCount,this.__shouldContinueChunking=e<t,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,e}__continueChunking(){if(this.__shouldMeasureChunk){const t=performance.now()-this.__renderStartTime,e=this._targetFrameTime/t;this.__chunkCount=Math.round(this.__chunkCount*e)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(t,e,i){const r=this.__itemsIdxToInstIdx={};let o;for(o=0;o<e;o++){let e=this.__instances[o],n=i[o],s=t[n];r[n]=o,e?(e._setPendingProperty(this.as,s),e._setPendingProperty(this.indexAs,o),e._setPendingProperty(this.itemsIndexAs,n),e._flushProperties()):this.__insertInstance(s,o,n)}for(let t=this.__instances.length-1;t>=o;t--)this.__detachAndRemoveInstance(t)}__detachInstance(t){let e=this.__instances[t];const i=Xe(e.root);for(let t=0;t<e.children.length;t++){let r=e.children[t];i.appendChild(r)}return e}__attachInstance(t,e){let i=this.__instances[t];e.insertBefore(i.root,this)}__detachAndRemoveInstance(t){this.__detachInstance(t),this.__instances.splice(t,1)}__stampInstance(t,e,i){let r={};return r[this.as]=t,r[this.indexAs]=e,r[this.itemsIndexAs]=i,new this.__ctor(r)}__insertInstance(t,e,i){const r=this.__stampInstance(t,e,i);let o=this.__instances[e+1],n=o?o.children[0]:this;return Xe(Xe(this).parentNode).insertBefore(r.root,n),this.__instances[e]=r,r}_showHideChildren(t){for(let e=0;e<this.__instances.length;e++)this.__instances[e]._showHideChildren(t)}__handleItemPath(t,e){let i=t.slice(6),r=i.indexOf("."),o=r<0?i:i.substring(0,r);if(o==parseInt(o,10)){let t=r<0?"":i.substring(r+1);this.__handleObservedPaths(t);let n=this.__itemsIdxToInstIdx[o],s=this.__instances[n];if(s){let i=this.as+(t?"."+t:"");s._setPendingPropertyOrPath(i,e,!1,!0),s._flushProperties()}return!0}}itemForElement(t){let e=this.modelForElement(t);return e&&e[this.as]}indexForElement(t){let e=this.modelForElement(t);return e&&e[this.indexAs]}modelForElement(t){return function(t,e){let i;for(;e;)if(i=e.__dataHost?e:e.__templatizeInstance){if(i.__dataHost==t)return i;e=i.__dataHost}else e=Xe(e).parentNode;return null}(this.template,t)}}customElements.define(wn.is,wn);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class xn extends yn{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=Cr.debounce(this.__renderDebouncer,yi,()=>this.__render()),kr(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const t=Xe(this).parentNode;t&&(t.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||Xe(t).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),un()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const t=this;let e=t._templateInfo?t:Xe(t).querySelector("template");if(!e){let t=new MutationObserver(()=>{if(!Xe(this).querySelector("template"))throw new Error("dom-if requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}this.__template=e}return!0}__ensureInstance(){let t=Xe(this).parentNode;if(this.__hasInstance()){let e=this.__getInstanceNodes();if(e&&e.length){if(Xe(this).previousSibling!==e[e.length-1])for(let i,r=0;r<e.length&&(i=e[r]);r++)Xe(t).insertBefore(i,this)}}else{if(!t)return!1;if(!this.__ensureTemplate())return!1;this.__createAndInsertInstance(t)}return!0}render(){To()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),Ne&&!this.notifyDomChange||this.if==this._lastIf||(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(t){}__teardownInstance(){}_showHideChildren(){}}const Cn=Ie?class extends xn{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(t){const e=this.__dataHost||this;if(Se&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const i=e._bindTemplate(this.__template,!0);i.runEffects=(t,e,i)=>{let r=this.__syncInfo;if(this.if)r&&(this.__syncInfo=null,this._showHideChildren(),e=Object.assign(r.changedProps,e)),t(e,i);else if(this.__instance)if(r||(r=this.__syncInfo={runEffects:t,changedProps:{}}),i)for(const t in e){const e=Qe(t);r.changedProps[e]=this.__dataHost[e]}else Object.assign(r.changedProps,e)},this.__instance=e._stampTemplate(this.__template,i),Xe(t).insertBefore(this.__instance,this)}__syncHostProperties(){const t=this.__syncInfo;t&&(this.__syncInfo=null,t.runEffects(t.changedProps,!1))}__teardownInstance(){const t=this.__dataHost||this;this.__instance&&(t._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const t=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==t&&(this.__instance.__hidden=t,en(t,this.__instance.templateInfo.childNodes)),t||this.__syncHostProperties()}}:class extends xn{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(t){this.__ctor||(this.__ctor=dn(this.__template,this,{mutableData:!0,forwardHostProp:function(t,e){this.__instance&&(this.if?this.__instance.forwardHostProp(t,e):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[Qe(t)]=!0))}})),this.__instance=new this.__ctor,Xe(t).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let t=this.__instance.children;if(t&&t.length){let e=Xe(t[0]).parentNode;if(e){e=Xe(e);for(let i,r=0;r<t.length&&(i=t[r]);r++)e.removeChild(i)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let t=this.__invalidProps;if(t){this.__invalidProps=null;for(let e in t)this.__instance._setPendingProperty(e,this.__dataHost[e]);this.__instance._flushProperties()}}_showHideChildren(){const t=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==t&&(this.__instance.__hidden=t,this.__instance._showHideChildren(t)),t||this.__syncHostProperties()}};customElements.define(Cn.is,Cn);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Sn=Me(t=>{let e=xr(t);return class extends e{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(t,e){let i=e.path;if(i==JSCompiler_renameProperty("items",this)){let i=e.base||[],r=this.__lastItems;if(t!==this.__lastMulti&&this.clearSelection(),r){let t=Eo(i,r);this.__applySplices(t)}this.__lastItems=i,this.__lastMulti=t}else if(e.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(e.value.indexSplices);else{let t=i.slice(`${JSCompiler_renameProperty("items",this)}.`.length),e=parseInt(t,10);t.indexOf(".")<0&&t==e&&this.__deselectChangedIdx(e)}}__applySplices(t){let e=this.__selectedMap;for(let i=0;i<t.length;i++){let r=t[i];e.forEach((t,i)=>{t<r.index||(t>=r.index+r.removed.length?e.set(i,t+r.addedCount-r.removed.length):e.set(i,-1))});for(let t=0;t<r.addedCount;t++){let i=r.index+t;e.has(this.items[i])&&e.set(this.items[i],i)}}this.__updateLinks();let i=0;e.forEach((t,r)=>{t<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),i,1):this.selected=this.selectedItem=null,e.delete(r)):i++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let t=0;this.__selectedMap.forEach(e=>{e>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${e}`,`${JSCompiler_renameProperty("selected",this)}.${t++}`)})}else this.__selectedMap.forEach(t=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${t}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${t}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(t){return this.__selectedMap.has(t)}isIndexSelected(t){return this.isSelected(this.items[t])}__deselectChangedIdx(t){let e=this.__selectedIndexForItemIndex(t);if(e>=0){let t=0;this.__selectedMap.forEach((i,r)=>{e==t++&&this.deselect(r)})}}__selectedIndexForItemIndex(t){let e=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${t}`];if(e)return parseInt(e.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(t){let e=this.__selectedMap.get(t);if(e>=0){let i;this.__selectedMap.delete(t),this.multi&&(i=this.__selectedIndexForItemIndex(e)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),i,1):this.selected=this.selectedItem=null}}deselectIndex(t){this.deselect(this.items[t])}select(t){this.selectIndex(this.items.indexOf(t))}selectIndex(t){let e=this.items[t];this.isSelected(e)?this.toggle&&this.deselectIndex(t):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(e,t),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),e):this.selected=this.selectedItem=e)}}}),kn=Sn(yn);class En extends kn{static get is(){return"array-selector"}static get template(){return null}}customElements.define(En.is,En);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Pn=new ce;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(t,e,i){},prepareTemplateDom(t,e){},prepareTemplateStyles(t,e,i){},styleSubtree(t,e){Pn.processStyles(),Ft(t,e)},styleElement(t){Pn.processStyles()},styleDocument(t){Pn.processStyles(),Ft(document.body,t)},getComputedStyleValue:(t,e)=>Bt(t,e),flushCustomStyles(){},nativeCss:mt,nativeShadow:ht,cssBuild:pt,disableRuntime:ft}),window.ShadyCSS.CustomStyleInterface=Pn;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const An="include",$n=window.ShadyCSS.CustomStyleInterface;class Tn extends HTMLElement{constructor(){super(),this._style=null,$n.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const t=this.querySelector("style");if(!t)return null;this._style=t;const e=t.getAttribute(An);return e&&(t.removeAttribute(An),t.textContent=function(t){let e=t.trim().split(/\s+/),i="";for(let t=0;t<e.length;t++)i+=Ge(e[t]);return i}(e)+t.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",Tn),
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
Wo(HTMLElement).prototype;
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
const On=(function(t,...e){bn(t,e);const i=document.createElement("template");let r=e.reduce((e,i,r)=>e+function(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof gn)return _n(t);throw new Error(`non-template value passed to Polymer's html function: ${t}`)}(i)+t[r+1],t[0]);return mn&&(r=mn.createHTML(r)),i.innerHTML=r,i})`
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
`;On.setAttribute("style","display: none;"),document.head.appendChild(On.content);const In=document.createElement("template"),Nn="\n// Default styles for the elements\n    :host {\n        --header-spacing: 16px !important;\n        --body-spacing: 8px 16px !important;\n        --footer-spacing: 16px !important;\n    }\n    sl-dialog::part(panel) {\n        border-radius: 16px;\n    }\n    sl-dialog::part(body), sl-dialog::part(footer), sl-dialog::part(title) {\n        padding: 16px;\n    }\n    sl-button::part(label) {\n        font-family: Roboto;\n        font-size: 16px;\n        font-weight: normal;\n        color: var(--sl-color-gray-500);\n    }\n    sl-button::part(base) {\n        border-radius: 16px !important;\n        border-color: var(--sl-color-gray-200);\n    }\n    sl-input::part(base) {\n        box-shadow: none !important;\n        font-family: Roboto;\n        outline: none;\n        border-radius: 0;\n        border: none;\n        border-bottom: 1px solid var(--sl-color-gray-500);\n    }\n    sl-input::part(form-control-label) {\n        font-size: 12px;\n    }\n    sl-input::part(password-toggle-button),\n    sl-input::part(clear-button) {\n        width: fit-content;\n        padding: 0 4px;\n    }\n    sl-icon {\n        color: var(--primary-color, var(--sl-color-gray-700));\n        font-size: 24px;\n    }\n    sl-icon-button::part(base) {\n        color: var(--primary-color, var(--sl-color-gray-700));\n        font-size: 24px;\n    }\n    sl-icon-button::part(base):hover {\n        color: var(--secondary-color, black) !important;\n    }\n    sl-menu {\n        border: none;\n        border-radius: 16px;\n    }\n    sl-icon-button::part(base) {\n        padding: 0;\n    }\n    sl-dropdown::part(panel) {\n        background: white;\n        border-radius: 16px;\n    }\n    sl-alert::part(icon) {\n        color: var(--accent-color, red);\n    }\n    sl-alert::part(base) {\n        border-top-color: var(--accent-color, red);\n    }\n    sl-checkbox::part(label) {\n        font-family: Roboto !important;\n    }\n\n// Attribute styles\n    sl-dialog[no-x]::part(close-button) {\n        display: none;\n    }\n    sl-dialog[no-actions]::part(header-actions) {\n        display: none;\n    }\n    sl-dialog[filled]::part(header) {\n        color: white;\n        border-radius: 16px 16px 0 0;\n        background: var(--primary-color, var(--sl-color-gray-500));\n    }\n    sl-dialog[filled]::part(title) {\n        color: white;\n        border-radius: 16px 16px 0 0;\n        background: var(--primary-color, var(--sl-color-gray-500));\n    }\n    sl-dialog[centered]::part(header) {\n        text-align: center;\n    }\n// Primary Buttons\n    sl-button[variant='primary'] {\n        background-color: var(--primary-color, var(--sl-color-gray-500));\n    }\n    sl-button[variant='primary']::part(label) {\n        color: white;\n    }\n    sl-button[variant='primary']::part(base) {\n        background-color: var(--primary-color, var(--sl-color-gray-500));\n    }\n    sl-button[variant='primary']::part(base):hover {\n        background-color: var(--secondary-color, var(--sl-color-gray-600));\n        border-color: var(--secondary-color, var(--sl-color-gray-600));\n        color: var(--primary-color, var(--sl-color-gray-600));\n    }\n    sl-button[variant='primary']:hover {\n        color: var(--primary-color, var(--sl-color-gray-600));\n    }\n// Default Buttons\n    sl-button[variant='default']::part(base) {\n        background: white !important;\n    }\n    sl-button[variant='default']::part(base):hover {\n        border-color: var(--primary-color, var(--sl-color-gray-400));\n        color: var(--primary-color, var(--sl-color-gray-600));\n        background: white !important;\n    }\n    sl-button[variant='default'] {\n        color: var(--sl-color-gray-400);\n    }\n    sl-button[variant='default']:hover {\n        color: var(--primary-color, var(--sl-color-gray-600));\n    }\n    sl-button[variant='default']::part(label) {\n        color: var(--sl-color-gray-600);\n    }\n    sl-button[variant='default']::part(label):hover {\n        color: var(--primary-color, var(--sl-color-gray-600));\n    }\n    sl-icon[small] {\n        font-size: 20px;\n    }\n    sl-icon[nine-dot] {\n        font-size: 30px;\n    }\n    sl-checkbox[checked]::part(control) {\n        border-color: var(--primary-color, var(--sl-color-gray-600));\n        background-color: var(--primary-color, var(--sl-color-gray-600));\n    }\n";In.innerHTML=`<dom-module id="katapult-shoelace">\n  <template>\n    <style>\n      ${Nn}\n    </style>\n  </template>\n</dom-module>`,document.head.appendChild(In.content);const Ln=document.createElement("template"),zn="\n  ::-webkit-scrollbar {\n      width: 8px;\n      height:8px;\n      background: var(--paper-grey-200);\n  }\n\n  ::-webkit-scrollbar-track {\n      /* -webkit-box-shadow: inset 0 0 3px #717271; */\n  }\n\n  ::-webkit-scrollbar-thumb {\n      background: var(--paper-grey-400);\n  }\n";Ln.innerHTML=`<dom-module id="katapult-scrollbars">\n  <template>\n    <style>\n      ${zn}\n    </style>\n  </template>\n</dom-module>`,document.head.appendChild(Ln.content);var Dn=s`
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
`,Mn=Object.defineProperty,Rn=Object.defineProperties,Fn=Object.getOwnPropertyDescriptor,Bn=Object.getOwnPropertyDescriptors,Hn=Object.getOwnPropertySymbols,Un=Object.prototype.hasOwnProperty,jn=Object.prototype.propertyIsEnumerable,Vn=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),qn=t=>{throw TypeError(t)},Wn=(t,e,i)=>e in t?Mn(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Kn=(t,e)=>{for(var i in e||(e={}))Un.call(e,i)&&Wn(t,i,e[i]);if(Hn)for(var i of Hn(e))jn.call(e,i)&&Wn(t,i,e[i]);return t},Jn=(t,e)=>Rn(t,Bn(e)),Yn=(t,e,i,r)=>{for(var o,n=r>1?void 0:r?Fn(e,i):e,s=t.length-1;s>=0;s--)(o=t[s])&&(n=(r?o(e,i,n):o(n))||n);return r&&n&&Mn(e,i,n),n},Gn=(t,e,i)=>e.has(t)||qn("Cannot "+i),Xn=function(t,e){this[0]=t,this[1]=e};function*Zn(t=document.activeElement){var e,i,r,o,n;null!=t&&(yield t,"shadowRoot"in t&&t.shadowRoot&&"closed"!==t.shadowRoot.mode&&(yield*(e=Zn(t.shadowRoot.activeElement),r=e[Vn("asyncIterator")],o=!1,n={},null==r?(r=e[Vn("iterator")](),i=t=>n[t]=e=>r[t](e)):(r=r.call(e),i=t=>n[t]=e=>{if(o){if(o=!1,"throw"===t)throw e;return e}return o=!0,{done:!1,value:new Xn(new Promise(i=>{var o=r[t](e);o instanceof Object||qn("Object expected"),i(o)}),1)}}),n[Vn("iterator")]=()=>n,i("next"),"throw"in r?i("throw"):n.throw=t=>{throw t},"return"in r&&i("return"),n)))}function Qn(){return[...Zn()].pop()}var ts=new WeakMap;function es(t){let e=ts.get(t);return e||(e=window.getComputedStyle(t,null),ts.set(t,e)),e}function is(t){const e=t.tagName.toLowerCase(),i=Number(t.getAttribute("tabindex"));if(t.hasAttribute("tabindex")&&(isNaN(i)||i<=-1))return!1;if(t.hasAttribute("disabled"))return!1;if(t.closest("[inert]"))return!1;if("input"===e&&"radio"===t.getAttribute("type")){const e=t.getRootNode(),i=`input[type='radio'][name="${t.getAttribute("name")}"]`,r=e.querySelector(`${i}:checked`);if(r)return r===t;return e.querySelector(i)===t}if(!function(t){if("function"==typeof t.checkVisibility)return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const e=es(t);return"hidden"!==e.visibility&&"none"!==e.display}(t))return!1;if(("audio"===e||"video"===e)&&t.hasAttribute("controls"))return!0;if(t.hasAttribute("tabindex"))return!0;if(t.hasAttribute("contenteditable")&&"false"!==t.getAttribute("contenteditable"))return!0;return!!["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)||function(t){const e=es(t),{overflowY:i,overflowX:r}=e;return"scroll"===i||"scroll"===r||"auto"===i&&"auto"===r&&(t.scrollHeight>t.clientHeight&&"auto"===i||!(!(t.scrollWidth>t.clientWidth)||"auto"!==r))}(t)}function rs(t){const e=new WeakMap,i=[];return function r(o){if(o instanceof Element){if(o.hasAttribute("inert")||o.closest("[inert]"))return;if(e.has(o))return;e.set(o,!0),!i.includes(o)&&is(o)&&i.push(o),o instanceof HTMLSlotElement&&function(t,e){var i;return(null==(i=t.getRootNode({composed:!0}))?void 0:i.host)!==e}(o,t)&&o.assignedElements({flatten:!0}).forEach(t=>{r(t)}),null!==o.shadowRoot&&"open"===o.shadowRoot.mode&&r(o.shadowRoot)}for(const t of o.children)r(t)}(t),i.sort((t,e)=>{const i=Number(t.getAttribute("tabindex"))||0;return(Number(e.getAttribute("tabindex"))||0)-i})}var os=s`
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
`;const ns=new Set,ss=new Map;let as,ls="ltr",cs="en";const hs="undefined"!=typeof MutationObserver&&"undefined"!=typeof document&&void 0!==document.documentElement;if(hs){const t=new MutationObserver(ps);ls=document.documentElement.dir||"ltr",cs=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function ds(...t){t.map(t=>{const e=t.$code.toLowerCase();ss.has(e)?ss.set(e,Object.assign(Object.assign({},ss.get(e)),t)):ss.set(e,t),as||(as=t)}),ps()}function ps(){hs&&(ls=document.documentElement.dir||"ltr",cs=document.documentElement.lang||navigator.language),[...ns.keys()].map(t=>{"function"==typeof t.requestUpdate&&t.requestUpdate()})}let us=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){ns.add(this.host)}hostDisconnected(){ns.delete(this.host)}dir(){return`${this.host.dir||ls}`.toLowerCase()}lang(){return`${this.host.lang||cs}`.toLowerCase()}getTranslationData(t){var e,i;const r=new Intl.Locale(t.replace(/_/g,"-")),o=null==r?void 0:r.language.toLowerCase(),n=null!==(i=null===(e=null==r?void 0:r.region)||void 0===e?void 0:e.toLowerCase())&&void 0!==i?i:"";return{locale:r,language:o,region:n,primary:ss.get(`${o}-${n}`),secondary:ss.get(o)}}exists(t,e){var i;const{primary:r,secondary:o}=this.getTranslationData(null!==(i=e.lang)&&void 0!==i?i:this.lang());return e=Object.assign({includeFallback:!1},e),!!(r&&r[t]||o&&o[t]||e.includeFallback&&as&&as[t])}term(t,...e){const{primary:i,secondary:r}=this.getTranslationData(this.lang());let o;if(i&&i[t])o=i[t];else if(r&&r[t])o=r[t];else{if(!as||!as[t])return console.error(`No translation found for: ${String(t)}`),String(t);o=as[t]}return"function"==typeof o?o(...e):o}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(t,e)}};var fs={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>0===t?"No options selected":1===t?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};ds(fs);var ms=fs,gs=class extends us{};ds(ms);var _s=s`
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
`
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;const bs={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:v},ys=(t=bs,e,i)=>{const{kind:r,metadata:o}=i;let n=globalThis.litPropertyMetadata.get(o);if(void 0===n&&globalThis.litPropertyMetadata.set(o,n=new Map),"setter"===r&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),"accessor"===r){const{name:r}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(r,o,t)},init(e){return void 0!==e&&this.C(r,void 0,t,e),e}}}if("setter"===r){const{name:r}=i;return function(i){const o=this[r];e.call(this,i),this.requestUpdate(r,o,t)}}throw Error("Unsupported decorator location: "+r)};function vs(t){return(e,i)=>"object"==typeof i?ys(t,e,i):((t,e,i)=>{const r=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),r?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ws(t){return vs({...t,state:!0,attribute:!1})}
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
function xs(t,e){return(e,i,r)=>((t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i))(e,i,{get(){return(e=>e.renderRoot?.querySelector(t)??null)(this)}})}var Cs,Ss=class extends st{constructor(){var t,e,i;super(),t=this,i=!1,(e=Cs).has(t)?qn("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const i=new CustomEvent(t,Kn({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(i),i}static define(t,e=this,i={}){const r=customElements.get(t);if(!r){try{customElements.define(t,e,i)}catch(r){customElements.define(t,class extends e{},i)}return}let o=" (unknown version)",n=o;"version"in e&&e.version&&(o=" v"+e.version),"version"in r&&r.version&&(n=" v"+r.version),o&&n&&o===n||console.warn(`Attempted to register <${t}>${o}, but <${t}>${n} has already been registered.`)}attributeChangedCallback(t,e,i){var r,o;Gn(r=this,o=Cs,"read from private field"),o.get(r)||(this.constructor.elementProperties.forEach((t,e)=>{t.reflect&&null!=this[e]&&this.initialReflectedProperties.set(e,this[e])}),((t,e,i)=>{Gn(t,e,"write to private field"),e.set(t,i)})(this,Cs,!0)),super.attributeChangedCallback(t,e,i)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,i)=>{t.has(i)&&null==this[i]&&(this[i]=e)})}};Cs=new WeakMap,Ss.version="2.20.1",Ss.dependencies={},Yn([vs()],Ss.prototype,"dir",2),Yn([vs()],Ss.prototype,"lang",2);const ks=Math.min,Es=Math.max,Ps=Math.round,As=Math.floor,$s=t=>({x:t,y:t}),Ts={left:"right",right:"left",bottom:"top",top:"bottom"},Os={start:"end",end:"start"};function Is(t,e,i){return Es(t,ks(e,i))}function Ns(t,e){return"function"==typeof t?t(e):t}function Ls(t){return t.split("-")[0]}function zs(t){return t.split("-")[1]}function Ds(t){return"x"===t?"y":"x"}function Ms(t){return"y"===t?"height":"width"}const Rs=new Set(["top","bottom"]);function Fs(t){return Rs.has(Ls(t))?"y":"x"}function Bs(t){return Ds(Fs(t))}function Hs(t){return t.replace(/start|end/g,t=>Os[t])}const Us=["left","right"],js=["right","left"],Vs=["top","bottom"],qs=["bottom","top"];function Ws(t,e,i,r){const o=zs(t);let n=function(t,e,i){switch(t){case"top":case"bottom":return i?e?js:Us:e?Us:js;case"left":case"right":return e?Vs:qs;default:return[]}}(Ls(t),"start"===i,r);return o&&(n=n.map(t=>t+"-"+o),e&&(n=n.concat(n.map(Hs)))),n}function Ks(t){return t.replace(/left|right|bottom|top/g,t=>Ts[t])}function Js(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function Ys(t){const{x:e,y:i,width:r,height:o}=t;return{width:r,height:o,top:i,left:e,right:e+r,bottom:i+o,x:e,y:i}}function Gs(t,e,i){let{reference:r,floating:o}=t;const n=Fs(e),s=Bs(e),a=Ms(s),l=Ls(e),c="y"===n,h=r.x+r.width/2-o.width/2,d=r.y+r.height/2-o.height/2,p=r[a]/2-o[a]/2;let u;switch(l){case"top":u={x:h,y:r.y-o.height};break;case"bottom":u={x:h,y:r.y+r.height};break;case"right":u={x:r.x+r.width,y:d};break;case"left":u={x:r.x-o.width,y:d};break;default:u={x:r.x,y:r.y}}switch(zs(e)){case"start":u[s]-=p*(i&&c?-1:1);break;case"end":u[s]+=p*(i&&c?-1:1)}return u}async function Xs(t,e){var i;void 0===e&&(e={});const{x:r,y:o,platform:n,rects:s,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:d="floating",altBoundary:p=!1,padding:u=0}=Ns(e,t),f=Js(u),m=a[p?"floating"===d?"reference":"floating":d],g=Ys(await n.getClippingRect({element:null==(i=await(null==n.isElement?void 0:n.isElement(m)))||i?m:m.contextElement||await(null==n.getDocumentElement?void 0:n.getDocumentElement(a.floating)),boundary:c,rootBoundary:h,strategy:l})),_="floating"===d?{x:r,y:o,width:s.floating.width,height:s.floating.height}:s.reference,b=await(null==n.getOffsetParent?void 0:n.getOffsetParent(a.floating)),y=await(null==n.isElement?void 0:n.isElement(b))&&await(null==n.getScale?void 0:n.getScale(b))||{x:1,y:1},v=Ys(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:_,offsetParent:b,strategy:l}):_);return{top:(g.top-v.top+f.top)/y.y,bottom:(v.bottom-g.bottom+f.bottom)/y.y,left:(g.left-v.left+f.left)/y.x,right:(v.right-g.right+f.right)/y.x}}const Zs=new Set(["left","top"]);function Qs(){return"undefined"!=typeof window}function ta(t){return ra(t)?(t.nodeName||"").toLowerCase():"#document"}function ea(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function ia(t){var e;return null==(e=(ra(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function ra(t){return!!Qs()&&(t instanceof Node||t instanceof ea(t).Node)}function oa(t){return!!Qs()&&(t instanceof Element||t instanceof ea(t).Element)}function na(t){return!!Qs()&&(t instanceof HTMLElement||t instanceof ea(t).HTMLElement)}function sa(t){return!(!Qs()||"undefined"==typeof ShadowRoot)&&(t instanceof ShadowRoot||t instanceof ea(t).ShadowRoot)}const aa=new Set(["inline","contents"]);function la(t){const{overflow:e,overflowX:i,overflowY:r,display:o}=va(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+i)&&!aa.has(o)}const ca=new Set(["table","td","th"]);function ha(t){return ca.has(ta(t))}const da=[":popover-open",":modal"];function pa(t){return da.some(e=>{try{return t.matches(e)}catch(t){return!1}})}const ua=["transform","translate","scale","rotate","perspective"],fa=["transform","translate","scale","rotate","perspective","filter"],ma=["paint","layout","strict","content"];function ga(t){const e=_a(),i=oa(t)?va(t):t;return ua.some(t=>!!i[t]&&"none"!==i[t])||!!i.containerType&&"normal"!==i.containerType||!e&&!!i.backdropFilter&&"none"!==i.backdropFilter||!e&&!!i.filter&&"none"!==i.filter||fa.some(t=>(i.willChange||"").includes(t))||ma.some(t=>(i.contain||"").includes(t))}function _a(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}const ba=new Set(["html","body","#document"]);function ya(t){return ba.has(ta(t))}function va(t){return ea(t).getComputedStyle(t)}function wa(t){return oa(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function xa(t){if("html"===ta(t))return t;const e=t.assignedSlot||t.parentNode||sa(t)&&t.host||ia(t);return sa(e)?e.host:e}function Ca(t){const e=xa(t);return ya(e)?t.ownerDocument?t.ownerDocument.body:t.body:na(e)&&la(e)?e:Ca(e)}function Sa(t,e,i){var r;void 0===e&&(e=[]),void 0===i&&(i=!0);const o=Ca(t),n=o===(null==(r=t.ownerDocument)?void 0:r.body),s=ea(o);if(n){const t=ka(s);return e.concat(s,s.visualViewport||[],la(o)?o:[],t&&i?Sa(t):[])}return e.concat(o,Sa(o,[],i))}function ka(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Ea(t){const e=va(t);let i=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const o=na(t),n=o?t.offsetWidth:i,s=o?t.offsetHeight:r,a=Ps(i)!==n||Ps(r)!==s;return a&&(i=n,r=s),{width:i,height:r,$:a}}function Pa(t){return oa(t)?t:t.contextElement}function Aa(t){const e=Pa(t);if(!na(e))return $s(1);const i=e.getBoundingClientRect(),{width:r,height:o,$:n}=Ea(e);let s=(n?Ps(i.width):i.width)/r,a=(n?Ps(i.height):i.height)/o;return s&&Number.isFinite(s)||(s=1),a&&Number.isFinite(a)||(a=1),{x:s,y:a}}const $a=$s(0);function Ta(t){const e=ea(t);return _a()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:$a}function Oa(t,e,i,r){void 0===e&&(e=!1),void 0===i&&(i=!1);const o=t.getBoundingClientRect(),n=Pa(t);let s=$s(1);e&&(r?oa(r)&&(s=Aa(r)):s=Aa(t));const a=function(t,e,i){return void 0===e&&(e=!1),!(!i||e&&i!==ea(t))&&e}(n,i,r)?Ta(n):$s(0);let l=(o.left+a.x)/s.x,c=(o.top+a.y)/s.y,h=o.width/s.x,d=o.height/s.y;if(n){const t=ea(n),e=r&&oa(r)?ea(r):r;let i=t,o=ka(i);for(;o&&r&&e!==i;){const t=Aa(o),e=o.getBoundingClientRect(),r=va(o),n=e.left+(o.clientLeft+parseFloat(r.paddingLeft))*t.x,s=e.top+(o.clientTop+parseFloat(r.paddingTop))*t.y;l*=t.x,c*=t.y,h*=t.x,d*=t.y,l+=n,c+=s,i=ea(o),o=ka(i)}}return Ys({width:h,height:d,x:l,y:c})}function Ia(t,e){const i=wa(t).scrollLeft;return e?e.left+i:Oa(ia(t)).left+i}function Na(t,e,i){void 0===i&&(i=!1);const r=t.getBoundingClientRect();return{x:r.left+e.scrollLeft-(i?0:Ia(t,r)),y:r.top+e.scrollTop}}const La=new Set(["absolute","fixed"]);function za(t,e,i){let r;if("viewport"===e)r=function(t,e){const i=ea(t),r=ia(t),o=i.visualViewport;let n=r.clientWidth,s=r.clientHeight,a=0,l=0;if(o){n=o.width,s=o.height;const t=_a();(!t||t&&"fixed"===e)&&(a=o.offsetLeft,l=o.offsetTop)}return{width:n,height:s,x:a,y:l}}(t,i);else if("document"===e)r=function(t){const e=ia(t),i=wa(t),r=t.ownerDocument.body,o=Es(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),n=Es(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight);let s=-i.scrollLeft+Ia(t);const a=-i.scrollTop;return"rtl"===va(r).direction&&(s+=Es(e.clientWidth,r.clientWidth)-o),{width:o,height:n,x:s,y:a}}(ia(t));else if(oa(e))r=function(t,e){const i=Oa(t,!0,"fixed"===e),r=i.top+t.clientTop,o=i.left+t.clientLeft,n=na(t)?Aa(t):$s(1);return{width:t.clientWidth*n.x,height:t.clientHeight*n.y,x:o*n.x,y:r*n.y}}(e,i);else{const i=Ta(t);r={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return Ys(r)}function Da(t,e){const i=xa(t);return!(i===e||!oa(i)||ya(i))&&("fixed"===va(i).position||Da(i,e))}function Ma(t,e,i){const r=na(e),o=ia(e),n="fixed"===i,s=Oa(t,!0,n,e);let a={scrollLeft:0,scrollTop:0};const l=$s(0);function c(){l.x=Ia(o)}if(r||!r&&!n)if(("body"!==ta(e)||la(o))&&(a=wa(e)),r){const t=Oa(e,!0,n,e);l.x=t.x+e.clientLeft,l.y=t.y+e.clientTop}else o&&c();n&&!r&&o&&c();const h=!o||r||n?$s(0):Na(o,a);return{x:s.left+a.scrollLeft-l.x-h.x,y:s.top+a.scrollTop-l.y-h.y,width:s.width,height:s.height}}function Ra(t){return"static"===va(t).position}function Fa(t,e){if(!na(t)||"fixed"===va(t).position)return null;if(e)return e(t);let i=t.offsetParent;return ia(t)===i&&(i=i.ownerDocument.body),i}function Ba(t,e){const i=ea(t);if(pa(t))return i;if(!na(t)){let e=xa(t);for(;e&&!ya(e);){if(oa(e)&&!Ra(e))return e;e=xa(e)}return i}let r=Fa(t,e);for(;r&&ha(r)&&Ra(r);)r=Fa(r,e);return r&&ya(r)&&Ra(r)&&!ga(r)?i:r||function(t){let e=xa(t);for(;na(e)&&!ya(e);){if(ga(e))return e;if(pa(e))return null;e=xa(e)}return null}(t)||i}const Ha={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:e,rect:i,offsetParent:r,strategy:o}=t;const n="fixed"===o,s=ia(r),a=!!e&&pa(e.floating);if(r===s||a&&n)return i;let l={scrollLeft:0,scrollTop:0},c=$s(1);const h=$s(0),d=na(r);if((d||!d&&!n)&&(("body"!==ta(r)||la(s))&&(l=wa(r)),na(r))){const t=Oa(r);c=Aa(r),h.x=t.x+r.clientLeft,h.y=t.y+r.clientTop}const p=!s||d||n?$s(0):Na(s,l,!0);return{width:i.width*c.x,height:i.height*c.y,x:i.x*c.x-l.scrollLeft*c.x+h.x+p.x,y:i.y*c.y-l.scrollTop*c.y+h.y+p.y}},getDocumentElement:ia,getClippingRect:function(t){let{element:e,boundary:i,rootBoundary:r,strategy:o}=t;const n=[..."clippingAncestors"===i?pa(e)?[]:function(t,e){const i=e.get(t);if(i)return i;let r=Sa(t,[],!1).filter(t=>oa(t)&&"body"!==ta(t)),o=null;const n="fixed"===va(t).position;let s=n?xa(t):t;for(;oa(s)&&!ya(s);){const e=va(s),i=ga(s);i||"fixed"!==e.position||(o=null),(n?!i&&!o:!i&&"static"===e.position&&o&&La.has(o.position)||la(s)&&!i&&Da(t,s))?r=r.filter(t=>t!==s):o=e,s=xa(s)}return e.set(t,r),r}(e,this._c):[].concat(i),r],s=n[0],a=n.reduce((t,i)=>{const r=za(e,i,o);return t.top=Es(r.top,t.top),t.right=ks(r.right,t.right),t.bottom=ks(r.bottom,t.bottom),t.left=Es(r.left,t.left),t},za(e,s,o));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},getOffsetParent:Ba,getElementRects:async function(t){const e=this.getOffsetParent||Ba,i=this.getDimensions,r=await i(t.floating);return{reference:Ma(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){const{width:e,height:i}=Ea(t);return{width:e,height:i}},getScale:Aa,isElement:oa,isRTL:function(t){return"rtl"===va(t).direction}};function Ua(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function ja(t,e,i,r){void 0===r&&(r={});const{ancestorScroll:o=!0,ancestorResize:n=!0,elementResize:s="function"==typeof ResizeObserver,layoutShift:a="function"==typeof IntersectionObserver,animationFrame:l=!1}=r,c=Pa(t),h=o||n?[...c?Sa(c):[],...Sa(e)]:[];h.forEach(t=>{o&&t.addEventListener("scroll",i,{passive:!0}),n&&t.addEventListener("resize",i)});const d=c&&a?function(t,e){let i,r=null;const o=ia(t);function n(){var t;clearTimeout(i),null==(t=r)||t.disconnect(),r=null}return function s(a,l){void 0===a&&(a=!1),void 0===l&&(l=1),n();const c=t.getBoundingClientRect(),{left:h,top:d,width:p,height:u}=c;if(a||e(),!p||!u)return;const f={rootMargin:-As(d)+"px "+-As(o.clientWidth-(h+p))+"px "+-As(o.clientHeight-(d+u))+"px "+-As(h)+"px",threshold:Es(0,ks(1,l))||1};let m=!0;function g(e){const r=e[0].intersectionRatio;if(r!==l){if(!m)return s();r?s(!1,r):i=setTimeout(()=>{s(!1,1e-7)},1e3)}1!==r||Ua(c,t.getBoundingClientRect())||s(),m=!1}try{r=new IntersectionObserver(g,{...f,root:o.ownerDocument})}catch(t){r=new IntersectionObserver(g,f)}r.observe(t)}(!0),n}(c,i):null;let p,u=-1,f=null;s&&(f=new ResizeObserver(t=>{let[r]=t;r&&r.target===c&&f&&(f.unobserve(e),cancelAnimationFrame(u),u=requestAnimationFrame(()=>{var t;null==(t=f)||t.observe(e)})),i()}),c&&!l&&f.observe(c),f.observe(e));let m=l?Oa(t):null;return l&&function e(){const r=Oa(t);m&&!Ua(m,r)&&i();m=r,p=requestAnimationFrame(e)}(),i(),()=>{var t;h.forEach(t=>{o&&t.removeEventListener("scroll",i),n&&t.removeEventListener("resize",i)}),null==d||d(),null==(t=f)||t.disconnect(),f=null,l&&cancelAnimationFrame(p)}}const Va=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){var i,r;const{x:o,y:n,placement:s,middlewareData:a}=e,l=await async function(t,e){const{placement:i,platform:r,elements:o}=t,n=await(null==r.isRTL?void 0:r.isRTL(o.floating)),s=Ls(i),a=zs(i),l="y"===Fs(i),c=Zs.has(s)?-1:1,h=n&&l?-1:1,d=Ns(e,t);let{mainAxis:p,crossAxis:u,alignmentAxis:f}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return a&&"number"==typeof f&&(u="end"===a?-1*f:f),l?{x:u*h,y:p*c}:{x:p*c,y:u*h}}(e,t);return s===(null==(i=a.offset)?void 0:i.placement)&&null!=(r=a.arrow)&&r.alignmentOffset?{}:{x:o+l.x,y:n+l.y,data:{...l,placement:s}}}}},qa=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:i,y:r,placement:o}=e,{mainAxis:n=!0,crossAxis:s=!1,limiter:a={fn:t=>{let{x:e,y:i}=t;return{x:e,y:i}}},...l}=Ns(t,e),c={x:i,y:r},h=await Xs(e,l),d=Fs(Ls(o)),p=Ds(d);let u=c[p],f=c[d];if(n){const t="y"===p?"bottom":"right";u=Is(u+h["y"===p?"top":"left"],u,u-h[t])}if(s){const t="y"===d?"bottom":"right";f=Is(f+h["y"===d?"top":"left"],f,f-h[t])}const m=a.fn({...e,[p]:u,[d]:f});return{...m,data:{x:m.x-i,y:m.y-r,enabled:{[p]:n,[d]:s}}}}}},Wa=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var i,r;const{placement:o,middlewareData:n,rects:s,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:h=!0,crossAxis:d=!0,fallbackPlacements:p,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:m=!0,...g}=Ns(t,e);if(null!=(i=n.arrow)&&i.alignmentOffset)return{};const _=Ls(o),b=Fs(a),y=Ls(a)===a,v=await(null==l.isRTL?void 0:l.isRTL(c.floating)),w=p||(y||!m?[Ks(a)]:function(t){const e=Ks(t);return[Hs(t),e,Hs(e)]}(a)),x="none"!==f;!p&&x&&w.push(...Ws(a,m,f,v));const C=[a,...w],S=await Xs(e,g),k=[];let E=(null==(r=n.flip)?void 0:r.overflows)||[];if(h&&k.push(S[_]),d){const t=function(t,e,i){void 0===i&&(i=!1);const r=zs(t),o=Bs(t),n=Ms(o);let s="x"===o?r===(i?"end":"start")?"right":"left":"start"===r?"bottom":"top";return e.reference[n]>e.floating[n]&&(s=Ks(s)),[s,Ks(s)]}(o,s,v);k.push(S[t[0]],S[t[1]])}if(E=[...E,{placement:o,overflows:k}],!k.every(t=>t<=0)){var P,A;const t=((null==(P=n.flip)?void 0:P.index)||0)+1,e=C[t];if(e){if(!("alignment"===d&&b!==Fs(e))||E.every(t=>t.overflows[0]>0&&Fs(t.placement)===b))return{data:{index:t,overflows:E},reset:{placement:e}}}let i=null==(A=E.filter(t=>t.overflows[0]<=0).sort((t,e)=>t.overflows[1]-e.overflows[1])[0])?void 0:A.placement;if(!i)switch(u){case"bestFit":{var $;const t=null==($=E.filter(t=>{if(x){const e=Fs(t.placement);return e===b||"y"===e}return!0}).map(t=>[t.placement,t.overflows.filter(t=>t>0).reduce((t,e)=>t+e,0)]).sort((t,e)=>t[1]-e[1])[0])?void 0:$[0];t&&(i=t);break}case"initialPlacement":i=a}if(o!==i)return{reset:{placement:i}}}return{}}}},Ka=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(e){var i,r;const{placement:o,rects:n,platform:s,elements:a}=e,{apply:l=()=>{},...c}=Ns(t,e),h=await Xs(e,c),d=Ls(o),p=zs(o),u="y"===Fs(o),{width:f,height:m}=n.floating;let g,_;"top"===d||"bottom"===d?(g=d,_=p===(await(null==s.isRTL?void 0:s.isRTL(a.floating))?"start":"end")?"left":"right"):(_=d,g="end"===p?"top":"bottom");const b=m-h.top-h.bottom,y=f-h.left-h.right,v=ks(m-h[g],b),w=ks(f-h[_],y),x=!e.middlewareData.shift;let C=v,S=w;if(null!=(i=e.middlewareData.shift)&&i.enabled.x&&(S=y),null!=(r=e.middlewareData.shift)&&r.enabled.y&&(C=b),x&&!p){const t=Es(h.left,0),e=Es(h.right,0),i=Es(h.top,0),r=Es(h.bottom,0);u?S=f-2*(0!==t||0!==e?t+e:Es(h.left,h.right)):C=m-2*(0!==i||0!==r?i+r:Es(h.top,h.bottom))}await l({...e,availableWidth:S,availableHeight:C});const k=await s.getDimensions(a.floating);return f!==k.width||m!==k.height?{reset:{rects:!0}}:{}}}},Ja=t=>({name:"arrow",options:t,async fn(e){const{x:i,y:r,placement:o,rects:n,platform:s,elements:a,middlewareData:l}=e,{element:c,padding:h=0}=Ns(t,e)||{};if(null==c)return{};const d=Js(h),p={x:i,y:r},u=Bs(o),f=Ms(u),m=await s.getDimensions(c),g="y"===u,_=g?"top":"left",b=g?"bottom":"right",y=g?"clientHeight":"clientWidth",v=n.reference[f]+n.reference[u]-p[u]-n.floating[f],w=p[u]-n.reference[u],x=await(null==s.getOffsetParent?void 0:s.getOffsetParent(c));let C=x?x[y]:0;C&&await(null==s.isElement?void 0:s.isElement(x))||(C=a.floating[y]||n.floating[f]);const S=v/2-w/2,k=C/2-m[f]/2-1,E=ks(d[_],k),P=ks(d[b],k),A=E,$=C-m[f]-P,T=C/2-m[f]/2+S,O=Is(A,T,$),I=!l.arrow&&null!=zs(o)&&T!==O&&n.reference[f]/2-(T<A?E:P)-m[f]/2<0,N=I?T<A?T-A:T-$:0;return{[u]:p[u]+N,data:{[u]:O,centerOffset:T-O-N,...I&&{alignmentOffset:N}},reset:I}}}),Ya=(t,e,i)=>{const r=new Map,o={platform:Ha,...i},n={...o.platform,_c:r};return(async(t,e,i)=>{const{placement:r="bottom",strategy:o="absolute",middleware:n=[],platform:s}=i,a=n.filter(Boolean),l=await(null==s.isRTL?void 0:s.isRTL(e));let c=await s.getElementRects({reference:t,floating:e,strategy:o}),{x:h,y:d}=Gs(c,r,l),p=r,u={},f=0;for(let i=0;i<a.length;i++){const{name:n,fn:m}=a[i],{x:g,y:_,data:b,reset:y}=await m({x:h,y:d,initialPlacement:r,placement:p,strategy:o,middlewareData:u,rects:c,platform:s,elements:{reference:t,floating:e}});h=null!=g?g:h,d=null!=_?_:d,u={...u,[n]:{...u[n],...b}},y&&f<=50&&(f++,"object"==typeof y&&(y.placement&&(p=y.placement),y.rects&&(c=!0===y.rects?await s.getElementRects({reference:t,floating:e,strategy:o}):y.rects),({x:h,y:d}=Gs(c,p,l))),i=-1)}return{x:h,y:d,placement:p,strategy:o,middlewareData:u}})(t,e,{...o,platform:n})},Ga=1,Xa=2,Za=3,Qa=4,tl=t=>(...e)=>({_$litDirective$:t,values:e});let el=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const il=tl(class extends el{constructor(t){if(super(t),t.type!==Ga||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const r=!!e[t];r===this.st.has(t)||this.nt?.has(t)||(r?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return j}});function rl(t){return function(t){for(let e=t;e;e=ol(e))if(e instanceof Element&&"none"===getComputedStyle(e).display)return null;for(let e=ol(t);e;e=ol(e)){if(!(e instanceof Element))continue;const t=getComputedStyle(e);if("contents"!==t.display){if("static"!==t.position||ga(t))return e;if("BODY"===e.tagName)return e}}return null}(t)}function ol(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}var nl=class extends Ss{constructor(){super(...arguments),this.localize=new gs(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect();let i=0,r=0,o=0,n=0,s=0,a=0,l=0,c=0;this.placement.includes("top")||this.placement.includes("bottom")?t.top<e.top?(i=t.left,r=t.bottom,o=t.right,n=t.bottom,s=e.left,a=e.top,l=e.right,c=e.top):(i=e.left,r=e.bottom,o=e.right,n=e.bottom,s=t.left,a=t.top,l=t.right,c=t.top):t.left<e.left?(i=t.right,r=t.top,o=e.left,n=e.top,s=t.right,a=t.bottom,l=e.left,c=e.bottom):(i=e.right,r=e.top,o=t.left,n=t.top,s=e.right,a=e.bottom,l=t.left,c=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${o}px`),this.style.setProperty("--hover-bridge-top-right-y",`${n}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${c}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||function(t){return null!==t&&"object"==typeof t&&"getBoundingClientRect"in t&&(!("contextElement"in t)||t.contextElement instanceof Element)}(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&this.active&&(this.cleanup=ja(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[Va({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Ka({apply:({rects:t})=>{const e="width"===this.sync||"both"===this.sync,i="height"===this.sync||"both"===this.sync;this.popup.style.width=e?`${t.reference.width}px`:"",this.popup.style.height=i?`${t.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(Wa({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(qa({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(Ka({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:t,availableHeight:e})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${e}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${t}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(Ja({element:this.arrowEl,padding:this.arrowPadding}));const e="absolute"===this.strategy?t=>Ha.getOffsetParent(t,rl):Ha.getOffsetParent;Ya(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:Jn(Kn({},Ha),{getOffsetParent:e})}).then(({x:t,y:e,middlewareData:i,placement:r})=>{const o="rtl"===this.localize.dir(),n={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];if(this.setAttribute("data-current-placement",r),Object.assign(this.popup.style,{left:`${t}px`,top:`${e}px`}),this.arrow){const t=i.arrow.x,e=i.arrow.y;let r="",s="",a="",l="";if("start"===this.arrowPlacement){const i="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";r="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",s=o?i:"",l=o?"":i}else if("end"===this.arrowPlacement){const i="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";s=o?"":i,l=o?i:"",a="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(l="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":"",r="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":""):(l="number"==typeof t?`${t}px`:"",r="number"==typeof e?`${e}px`:"");Object.assign(this.arrowEl.style,{top:r,right:s,bottom:a,left:l,[n]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return U`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${il({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${il({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?U`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};nl.styles=[_s,os],Yn([xs(".popup")],nl.prototype,"popup",2),Yn([xs(".popup__arrow")],nl.prototype,"arrowEl",2),Yn([vs()],nl.prototype,"anchor",2),Yn([vs({type:Boolean,reflect:!0})],nl.prototype,"active",2),Yn([vs({reflect:!0})],nl.prototype,"placement",2),Yn([vs({reflect:!0})],nl.prototype,"strategy",2),Yn([vs({type:Number})],nl.prototype,"distance",2),Yn([vs({type:Number})],nl.prototype,"skidding",2),Yn([vs({type:Boolean})],nl.prototype,"arrow",2),Yn([vs({attribute:"arrow-placement"})],nl.prototype,"arrowPlacement",2),Yn([vs({attribute:"arrow-padding",type:Number})],nl.prototype,"arrowPadding",2),Yn([vs({type:Boolean})],nl.prototype,"flip",2),Yn([vs({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(t=>t.trim()).filter(t=>""!==t),toAttribute:t=>t.join(" ")}})],nl.prototype,"flipFallbackPlacements",2),Yn([vs({attribute:"flip-fallback-strategy"})],nl.prototype,"flipFallbackStrategy",2),Yn([vs({type:Object})],nl.prototype,"flipBoundary",2),Yn([vs({attribute:"flip-padding",type:Number})],nl.prototype,"flipPadding",2),Yn([vs({type:Boolean})],nl.prototype,"shift",2),Yn([vs({type:Object})],nl.prototype,"shiftBoundary",2),Yn([vs({attribute:"shift-padding",type:Number})],nl.prototype,"shiftPadding",2),Yn([vs({attribute:"auto-size"})],nl.prototype,"autoSize",2),Yn([vs()],nl.prototype,"sync",2),Yn([vs({type:Object})],nl.prototype,"autoSizeBoundary",2),Yn([vs({attribute:"auto-size-padding",type:Number})],nl.prototype,"autoSizePadding",2),Yn([vs({attribute:"hover-bridge",type:Boolean})],nl.prototype,"hoverBridge",2);var sl=new Map,al=new WeakMap;function ll(t,e){return"rtl"===e.toLowerCase()?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function cl(t,e){sl.set(t,function(t){return null!=t?t:{keyframes:[],options:{duration:0}}}(e))}function hl(t,e,i){const r=al.get(t);if(null==r?void 0:r[e])return ll(r[e],i.dir);const o=sl.get(e);return o?ll(o,i.dir):{keyframes:[],options:{duration:0}}}function dl(t,e){return new Promise(i=>{t.addEventListener(e,function r(o){o.target===t&&(t.removeEventListener(e,r),i())})})}function pl(t,e,i){return new Promise(r=>{if((null==i?void 0:i.duration)===1/0)throw new Error("Promise-based animations must be finite.");const o=t.animate(e,Jn(Kn({},i),{duration:ul()?0:i.duration}));o.addEventListener("cancel",r,{once:!0}),o.addEventListener("finish",r,{once:!0})})}function ul(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function fl(t){return Promise.all(t.getAnimations().map(t=>new Promise(e=>{t.cancel(),requestAnimationFrame(e)})))}function ml(t,e){const i=Kn({waitUntilFirstUpdate:!1},e);return(e,r)=>{const{update:o}=e,n=Array.isArray(t)?t:[t];e.update=function(t){n.forEach(e=>{const o=e;if(t.has(o)){const e=t.get(o),n=this[o];e!==n&&(i.waitUntilFirstUpdate&&!this.hasUpdated||this[r](e,n))}}),o.call(this,t)}}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gl=t=>t??V;var _l=class extends Ss{constructor(){super(...arguments),this.localize=new gs(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=t=>{this.open&&"Escape"===t.key&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{var e;if("Escape"===t.key&&this.open&&!this.closeWatcher)return t.stopPropagation(),this.focusOnTrigger(),void this.hide();if("Tab"===t.key){if(this.open&&"sl-menu-item"===(null==(e=document.activeElement)?void 0:e.tagName.toLowerCase()))return t.preventDefault(),this.hide(),void this.focusOnTrigger();const i=(t,e)=>{if(!t)return null;const r=t.closest(e);if(r)return r;const o=t.getRootNode();return o instanceof ShadowRoot?i(o.host,e):null};setTimeout(()=>{var t;const e=(null==(t=this.containingElement)?void 0:t.getRootNode())instanceof ShadowRoot?Qn():document.activeElement;this.containingElement&&i(e,this.containingElement.tagName.toLowerCase())===this.containingElement||this.hide()})}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{const e=t.target;this.stayOpenOnSelect||"sl-menu"!==e.tagName.toLowerCase()||(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const t=this.trigger.assignedElements({flatten:!0})[0];"function"==typeof(null==t?void 0:t.focus)&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>"sl-menu"===t.tagName.toLowerCase())}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key))return t.preventDefault(),void this.handleTriggerClick();const e=this.getMenu();if(e){const i=e.getAllItems(),r=i[0],o=i[i.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),i.length>0&&this.updateComplete.then(()=>{"ArrowDown"!==t.key&&"Home"!==t.key||(e.setCurrentItem(r),r.focus()),"ArrowUp"!==t.key&&"End"!==t.key||(e.setCurrentItem(o),o.focus())}))}}handleTriggerKeyUp(t){" "===t.key&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(t=>function(t){var e,i;const r=rs(t);return{start:null!=(e=r[0])?e:null,end:null!=(i=r[r.length-1])?i:null}}(t).start);let e;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":e=t.button;break;default:e=t}e.setAttribute("aria-haspopup","true"),e.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,dl(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,dl(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var t;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var t;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),null==(t=this.closeWatcher)||t.destroy()}async handleOpenChange(){if(this.disabled)this.open=!1;else if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await fl(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=hl(this,"dropdown.show",{dir:this.localize.dir()});await pl(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await fl(this);const{keyframes:t,options:e}=hl(this,"dropdown.hide",{dir:this.localize.dir()});await pl(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return U`
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
        sync=${gl(this.sync?this.sync:void 0)}
        class=${il({dropdown:!0,"dropdown--open":this.open})}
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
    `}};_l.styles=[_s,Dn],_l.dependencies={"sl-popup":nl},Yn([xs(".dropdown")],_l.prototype,"popup",2),Yn([xs(".dropdown__trigger")],_l.prototype,"trigger",2),Yn([xs(".dropdown__panel")],_l.prototype,"panel",2),Yn([vs({type:Boolean,reflect:!0})],_l.prototype,"open",2),Yn([vs({reflect:!0})],_l.prototype,"placement",2),Yn([vs({type:Boolean,reflect:!0})],_l.prototype,"disabled",2),Yn([vs({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],_l.prototype,"stayOpenOnSelect",2),Yn([vs({attribute:!1})],_l.prototype,"containingElement",2),Yn([vs({type:Number})],_l.prototype,"distance",2),Yn([vs({type:Number})],_l.prototype,"skidding",2),Yn([vs({type:Boolean})],_l.prototype,"hoist",2),Yn([vs({reflect:!0})],_l.prototype,"sync",2),Yn([ml("open",{waitUntilFirstUpdate:!0})],_l.prototype,"handleOpenChange",1),cl("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}}),cl("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}}),_l.define("sl-dropdown");var bl=s`
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
`,yl=class extends Ss{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(t){const e=["menuitem","menuitemcheckbox"],i=t.composedPath(),r=i.find(t=>{var i;return e.includes((null==(i=null==t?void 0:t.getAttribute)?void 0:i.call(t,"role"))||"")});if(!r)return;if(i.find(t=>{var e;return"menu"===(null==(e=null==t?void 0:t.getAttribute)?void 0:e.call(t,"role"))})!==this)return;const o=r;"checkbox"===o.type&&(o.checked=!o.checked),this.emit("sl-select",{detail:{item:o}})}handleKeyDown(t){if("Enter"===t.key||" "===t.key){const e=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),null==e||e.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){const e=this.getAllItems(),i=this.getCurrentItem();let r=i?e.indexOf(i):0;e.length>0&&(t.preventDefault(),t.stopPropagation(),"ArrowDown"===t.key?r++:"ArrowUp"===t.key?r--:"Home"===t.key?r=0:"End"===t.key&&(r=e.length-1),r<0&&(r=e.length-1),r>e.length-1&&(r=0),this.setCurrentItem(e[r]),e[r].focus())}}handleMouseDown(t){const e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e)}handleSlotChange(){const t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0])}isMenuItem(t){var e;return"sl-menu-item"===t.tagName.toLowerCase()||["menuitem","menuitemcheckbox","menuitemradio"].includes(null!=(e=t.getAttribute("role"))?e:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.inert||!this.isMenuItem(t)))}getCurrentItem(){return this.getAllItems().find(t=>"0"===t.getAttribute("tabindex"))}setCurrentItem(t){this.getAllItems().forEach(e=>{e.setAttribute("tabindex",e===t?"0":"-1")})}render(){return U`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};yl.styles=[_s,bl],Yn([xs("slot")],yl.prototype,"defaultSlot",2),yl.define("sl-menu");var vl=s`
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
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;const{I:wl}=rt,xl=t=>void 0===t.strings,Cl=()=>document.createComment(""),Sl=(t,e,i)=>{const r=t._$AA.parentNode,o=void 0===e?t._$AB:e._$AA;if(void 0===i){const e=r.insertBefore(Cl(),o),n=r.insertBefore(Cl(),o);i=new wl(e,n,t,t.options)}else{const e=i._$AB.nextSibling,n=i._$AM,s=n!==t;if(s){let e;i._$AQ?.(t),i._$AM=t,void 0!==i._$AP&&(e=t._$AU)!==n._$AU&&i._$AP(e)}if(e!==o||s){let t=i._$AA;for(;t!==e;){const e=t.nextSibling;r.insertBefore(t,o),t=e}}}return i},kl=(t,e,i=t)=>(t._$AI(e,i),t),El={},Pl=(t,e=El)=>t._$AH=e,Al=t=>{t._$AP?.(!1,!0);let e=t._$AA;const i=t._$AB.nextSibling;for(;e!==i;){const t=e.nextSibling;e.remove(),e=t}},$l=(t,e)=>{const i=t._$AN;if(void 0===i)return!1;for(const t of i)t._$AO?.(e,!1),$l(t,e);return!0},Tl=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===i?.size)},Ol=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),Ll(e)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Il(t){void 0!==this._$AN?(Tl(this),this._$AM=t,Ol(this)):this._$AM=t}function Nl(t,e=!1,i=0){const r=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size)if(e)if(Array.isArray(r))for(let t=i;t<r.length;t++)$l(r[t],!1),Tl(r[t]);else null!=r&&($l(r,!1),Tl(r));else $l(this,t)}const Ll=t=>{t.type==Xa&&(t._$AP??=Nl,t._$AQ??=Il)};class zl extends el{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),Ol(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&($l(this,t),Tl(this))}setValue(t){if(xl(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dl=()=>new Ml;class Ml{}const Rl=new WeakMap,Fl=tl(class extends zl{render(t){return V}update(t,[e]){const i=e!==this.G;return i&&void 0!==this.G&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),V}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.G){const e=this.ht??globalThis;let i=Rl.get(e);void 0===i&&(i=new WeakMap,Rl.set(e,i)),void 0!==i.get(this.G)&&this.G.call(this.ht,void 0),i.set(this.G,t),void 0!==t&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return"function"==typeof this.G?Rl.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Bl=class{constructor(t,e){this.popupRef=Dl(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=t=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${t.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${t.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=t=>{switch(t.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":t.target!==this.host&&(t.preventDefault(),t.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(t)}},this.handleClick=t=>{var e;t.target===this.host?(t.preventDefault(),t.stopPropagation()):t.target instanceof Element&&("sl-menu-item"===t.target.tagName||(null==(e=t.target.role)?void 0:e.startsWith("menuitem")))&&this.disableSubmenu()},this.handleFocusOut=t=>{t.relatedTarget&&t.relatedTarget instanceof Element&&this.host.contains(t.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=t=>{t.stopPropagation()},this.handlePopupReposition=()=>{const t=this.host.renderRoot.querySelector("slot[name='submenu']"),e=null==t?void 0:t.assignedElements({flatten:!0}).filter(t=>"sl-menu"===t.localName)[0],i="rtl"===getComputedStyle(this.host).direction;if(!e)return;const{left:r,top:o,width:n,height:s}=e.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${i?r+n:r}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${o}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${i?r+n:r}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${o+s}px`)},(this.host=t).addController(this),this.hasSlotController=e}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(t){const e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e)return void console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);let i=null;for(const t of e.assignedElements())if(i=t.querySelectorAll("sl-menu-item, [role^='menuitem']"),0!==i.length)break;if(i&&0!==i.length){i[0].setAttribute("tabindex","0");for(let t=1;t!==i.length;++t)i[t].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?i[0]instanceof HTMLElement&&i[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{i[0]instanceof HTMLElement&&i[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var t;if(!(null==(t=this.host.parentElement)?void 0:t.computedStyleMap))return;const e=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce((t,i)=>{var r;const o=null!=(r=e.get(i))?r:new CSSUnitValue(0,"px");return t-(o instanceof CSSUnitValue?o:new CSSUnitValue(0,"px")).to("px").value},0);this.skidding=i}isExpanded(){return!!this.popupRef.value&&this.popupRef.value.active}renderSubmenu(){const t="rtl"===getComputedStyle(this.host).direction;return this.isConnected?U`
      <sl-popup
        ${Fl(this.popupRef)}
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
    `:U` <slot name="submenu" hidden></slot> `}},Hl=s`
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
`,Ul=class extends Ss{constructor(){super(...arguments),this.localize=new gs(this)}render(){return U`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Ul.styles=[_s,Hl];var jl=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=t=>{const e=t.target;(this.slotNames.includes("[default]")&&!e.name||e.name&&this.slotNames.includes(e.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&""!==t.textContent.trim())return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if("sl-visually-hidden"===e.tagName.toLowerCase())return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return null!==this.host.querySelector(`:scope > [slot="${t}"]`)}test(t){return"[default]"===t?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};var Vl="";function ql(t){Vl=t}var Wl={name:"default",resolver:t=>function(t=""){if(!Vl){const t=[...document.getElementsByTagName("script")],e=t.find(t=>t.hasAttribute("data-shoelace"));if(e)ql(e.getAttribute("data-shoelace"));else{const e=t.find(t=>/shoelace(\.min)?\.js($|\?)/.test(t.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(t.src));let i="";e&&(i=e.getAttribute("src")),ql(i.split("/").slice(0,-1).join("/"))}}return Vl.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}(`assets/icons/${t}.svg`)},Kl={caret:'\n    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n      <polyline points="6 9 12 15 18 9"></polyline>\n    </svg>\n  ',check:'\n    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor">\n          <g transform="translate(3.428571, 3.428571)">\n            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>\n            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"chevron-down":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',"chevron-left":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>\n    </svg>\n  ',"chevron-right":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',copy:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>\n    </svg>\n  ',eye:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">\n      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>\n      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>\n    </svg>\n  ',"eye-slash":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">\n      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>\n      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>\n      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>\n    </svg>\n  ',eyedropper:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">\n      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>\n    </svg>\n  ',"grip-vertical":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">\n      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>\n    </svg>\n  ',indeterminate:'\n    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor" stroke-width="2">\n          <g transform="translate(2.285714, 6.857143)">\n            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"person-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">\n      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>\n    </svg>\n  ',"play-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">\n      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>\n    </svg>\n  ',"pause-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">\n      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>\n    </svg>\n  ',radio:'\n    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g fill="currentColor">\n          <circle cx="8" cy="8" r="3.42857143"></circle>\n        </g>\n      </g>\n    </svg>\n  ',"star-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">\n      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>\n    </svg>\n  ',"x-lg":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">\n      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>\n    </svg>\n  ',"x-circle-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">\n      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>\n    </svg>\n  '},Jl=[Wl,{name:"system",resolver:t=>t in Kl?`data:image/svg+xml,${encodeURIComponent(Kl[t])}`:""}],Yl=[];function Gl(t){return Jl.find(e=>e.name===t)}function Xl(t,e){!function(t){Jl=Jl.filter(e=>e.name!==t)}(t),Jl.push({name:t,resolver:e.resolver,mutator:e.mutator,spriteSheet:e.spriteSheet}),Yl.forEach(e=>{e.library===t&&e.setIcon()})}var Zl,Ql=s`
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
`,tc=Symbol(),ec=Symbol(),ic=new Map,rc=class extends Ss{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var i;let r;if(null==e?void 0:e.spriteSheet)return this.svg=U`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(r=await fetch(t,{mode:"cors"}),!r.ok)return 410===r.status?tc:ec}catch(t){return ec}try{const t=document.createElement("div");t.innerHTML=await r.text();const e=t.firstElementChild;if("svg"!==(null==(i=null==e?void 0:e.tagName)?void 0:i.toLowerCase()))return tc;Zl||(Zl=new DOMParser);const o=Zl.parseFromString(e.outerHTML,"text/html").body.querySelector("svg");return o?(o.part.add("svg"),document.adoptNode(o)):tc}catch(t){return tc}}connectedCallback(){var t;super.connectedCallback(),t=this,Yl.push(t)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){var t;super.disconnectedCallback(),t=this,Yl=Yl.filter(e=>e!==t)}getIconSource(){const t=Gl(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){"string"==typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:i}=this.getIconSource(),r=i?Gl(this.library):void 0;if(!e)return void(this.svg=null);let o=ic.get(e);if(o||(o=this.resolveIcon(e,r),ic.set(e,o)),!this.initialRender)return;const n=await o;if(n===ec&&ic.delete(e),e===this.getIconSource().url)if((t=>void 0!==t?._$litType$)(n)){if(this.svg=n,r){await this.updateComplete;const t=this.shadowRoot.querySelector("[part='svg']");"function"==typeof r.mutator&&t&&r.mutator(t)}}else switch(n){case ec:case tc:this.svg=null,this.emit("sl-error");break;default:this.svg=n.cloneNode(!0),null==(t=null==r?void 0:r.mutator)||t.call(r,this.svg),this.emit("sl-load")}}render(){return this.svg}};rc.styles=[_s,Ql],Yn([ws()],rc.prototype,"svg",2),Yn([vs({reflect:!0})],rc.prototype,"name",2),Yn([vs()],rc.prototype,"src",2),Yn([vs()],rc.prototype,"label",2),Yn([vs({reflect:!0})],rc.prototype,"library",2),Yn([ml("label")],rc.prototype,"handleLabelChange",1),Yn([ml(["name","src","library"])],rc.prototype,"setIcon",1);var oc=class extends Ss{constructor(){super(...arguments),this.localize=new gs(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new jl(this,"submenu"),this.submenuController=new Bl(this,this.hasSlotController),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const t=this.getTextLabel();void 0!==this.cachedTextLabel?t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1})):this.cachedTextLabel=t}handleCheckedChange(){if(this.checked&&"checkbox"!==this.type)return this.checked=!1,void console.error('The checked attribute can only be used on menu items with type="checkbox"',this);"checkbox"===this.type?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){"checkbox"===this.type?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return function(t){if(!t)return"";const e=t.assignedNodes({flatten:!0});let i="";return[...e].forEach(t=>{t.nodeType===Node.TEXT_NODE&&(i+=t.textContent)}),i}(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const t="rtl"===this.localize.dir(),e=this.submenuController.isExpanded();return U`
      <div
        id="anchor"
        part="base"
        class=${il({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":e})}
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
        ${this.loading?U` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};oc.styles=[_s,vl],oc.dependencies={"sl-icon":rc,"sl-popup":nl,"sl-spinner":Ul},Yn([xs("slot:not([name])")],oc.prototype,"defaultSlot",2),Yn([xs(".menu-item")],oc.prototype,"menuItem",2),Yn([vs()],oc.prototype,"type",2),Yn([vs({type:Boolean,reflect:!0})],oc.prototype,"checked",2),Yn([vs()],oc.prototype,"value",2),Yn([vs({type:Boolean,reflect:!0})],oc.prototype,"loading",2),Yn([vs({type:Boolean,reflect:!0})],oc.prototype,"disabled",2),Yn([ml("checked")],oc.prototype,"handleCheckedChange",1),Yn([ml("disabled")],oc.prototype,"handleDisabledChange",1),Yn([ml("type")],oc.prototype,"handleTypeChange",1),oc.define("sl-menu-item");var nc=s`
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
`,sc=class extends Ss{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){const t=U`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `;let e=U``;return e=this.initials?U`<div part="initials" class="avatar__initials">${this.initials}</div>`:U`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,U`
      <div
        part="base"
        class=${il({avatar:!0,"avatar--circle":"circle"===this.shape,"avatar--rounded":"rounded"===this.shape,"avatar--square":"square"===this.shape})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?t:e}
      </div>
    `}};sc.styles=[_s,nc],sc.dependencies={"sl-icon":rc},Yn([ws()],sc.prototype,"hasError",2),Yn([vs()],sc.prototype,"image",2),Yn([vs()],sc.prototype,"label",2),Yn([vs()],sc.prototype,"initials",2),Yn([vs()],sc.prototype,"loading",2),Yn([vs({reflect:!0})],sc.prototype,"shape",2),Yn([ml("image")],sc.prototype,"handleImageChange",1),sc.define("sl-avatar"),rc.define("sl-icon");var ac=s`
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
`
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;const lc=Symbol.for(""),cc=t=>{if(t?.r===lc)return t?._$litStatic$},hc=(t,...e)=>({_$litStatic$:e.reduce((e,i,r)=>e+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[r+1],t[0]),r:lc}),dc=new Map,pc=(t=>(e,...i)=>{const r=i.length;let o,n;const s=[],a=[];let l,c=0,h=!1;for(;c<r;){for(l=e[c];c<r&&void 0!==(n=i[c],o=cc(n));)l+=o+e[++c],h=!0;c!==r&&a.push(n),s.push(l),c++}if(c===r&&s.push(e[r]),h){const t=s.join("$$lit$$");void 0===(e=dc.get(t))&&(s.raw=s,dc.set(t,e=s)),i=a}return t(e,...i)})(U);var uc=class extends Ss{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?hc`a`:hc`button`;return pc`
      <${e}
        part="base"
        class=${il({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${gl(t?void 0:this.disabled)}
        type=${gl(t?void 0:"button")}
        href=${gl(t?this.href:void 0)}
        target=${gl(t?this.target:void 0)}
        download=${gl(t?this.download:void 0)}
        rel=${gl(t&&this.target?"noreferrer noopener":void 0)}
        role=${gl(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${gl(this.name)}
          library=${gl(this.library)}
          src=${gl(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};uc.styles=[_s,ac],uc.dependencies={"sl-icon":rc},Yn([xs(".icon-button")],uc.prototype,"button",2),Yn([ws()],uc.prototype,"hasFocus",2),Yn([vs()],uc.prototype,"name",2),Yn([vs()],uc.prototype,"library",2),Yn([vs()],uc.prototype,"src",2),Yn([vs()],uc.prototype,"href",2),Yn([vs()],uc.prototype,"target",2),Yn([vs()],uc.prototype,"download",2),Yn([vs()],uc.prototype,"label",2),Yn([vs({type:Boolean,reflect:!0})],uc.prototype,"disabled",2),uc.define("sl-icon-button"),Ul.define("sl-spinner");const fc=document.createElement("template"),mc="\n  [flex] {\n    display: flex;\n  }\n  [column], paper-dialog[flex] {\n    flex-direction: column;\n  }\n  [overflow-hidden] {\n    overflow: hidden;\n  }\n  [overflow] {\n    overflow: unset;\n  }\n  [align-start] {\n    align-items: flex-start;\n  }\n  [align-end] {\n    align-items: flex-end;\n  }\n  [align-center] {\n    align-items: center;\n  }\n  [align-stretch] {\n    align-items: stretch;\n  }\n  [justify-start] {\n    justify-content: flex-start;\n  }         \n  [justify-center] {\n    justify-content: center;\n  }\n  [justify-end] {\n    justify-content: flex-end;\n  }\n  [justify-space-between], [space-between] {\n    justify-content: space-between;\n  }\n  [justify-stretch] {\n    justify-content: stretch;\n  }\n  [spacer], [grow] {\n    flex-grow: 1;\n  }\n  [spacer]:not([collapse]) {\n    min-width: 16px;\n  }\n  [line] {\n    border-bottom: 1px solid var(--border-color);\n  }\n  [text-center], p[center] {\n    text-align: center;\n  }\n  [pointer]:hover {\n    cursor: pointer;\n  }\n  [grab]:hover {\n    cursor: grab;\n  }\n  [faded] {\n    opacity: 0.8;\n  }\n  [border-box] {\n    box-sizing: border-box;\n  }\n  [wrap] {\n    flex-wrap: wrap;\n  }\n  [italic] {\n    font-style: italic;\n  }\n  [lighter] {\n    font-weight: lighter;\n  }\n  [bold] {\n    font-weight: bold;\n  }\n  [no-shrink] {\n    flex-shrink: 0;\n  }\n  [no-grow] {\n    flex-grow: 0;\n  }\n  [align-self-center] {\n    align-self: center;\n  }\n  [align-self-stretch] {\n    align-self: stretch;\n  }\n  [buttons-container] {\n    display: flex;\n    flex-direction: row;\n    flex-grow: 1;\n  }\n  [buttons-container] katapult-button:not(:last-of-type) {\n    margin-right: 16px;\n  }\n  [drag-handle]:hover {\n    cursor: grab;\n  }\n  [drag-handle]:active {\n    cursor: grabbing;\n  }   \n  [no-user-select] {\n    user-select: none;\n    -webkit-user-select: none; /* Safari */\n  }\n  [width-fill-available] {\n    width: -webkit-fill-available;\n  }\n";function gc(t,e=42){const i=t?atob(t).split(",").map(t=>parseInt(t,10)):"",r=""==i?"":String.fromCharCode(...i.map(t=>t^e));return r}fc.innerHTML=`<dom-module id="katapult-flex">\n  <template>\n    <style>\n      ${mc}\n    </style>\n  </template>\n</dom-module>`,document.head.appendChild(fc.content),function(t){if("object"==typeof exports)module.exports=t();else if("function"==typeof define&&define.amd)define(t);else{var e;try{e=window}catch(t){e=self}e.SparkMD5=t()}}(function(t){var e=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];function i(t,e){var i=t[0],r=t[1],o=t[2],n=t[3];r=((r+=((o=((o+=((n=((n+=((i=((i+=(r&o|~r&n)+e[0]-680876936|0)<<7|i>>>25)+r|0)&r|~i&o)+e[1]-389564586|0)<<12|n>>>20)+i|0)&i|~n&r)+e[2]+606105819|0)<<17|o>>>15)+n|0)&n|~o&i)+e[3]-1044525330|0)<<22|r>>>10)+o|0,r=((r+=((o=((o+=((n=((n+=((i=((i+=(r&o|~r&n)+e[4]-176418897|0)<<7|i>>>25)+r|0)&r|~i&o)+e[5]+1200080426|0)<<12|n>>>20)+i|0)&i|~n&r)+e[6]-1473231341|0)<<17|o>>>15)+n|0)&n|~o&i)+e[7]-45705983|0)<<22|r>>>10)+o|0,r=((r+=((o=((o+=((n=((n+=((i=((i+=(r&o|~r&n)+e[8]+1770035416|0)<<7|i>>>25)+r|0)&r|~i&o)+e[9]-1958414417|0)<<12|n>>>20)+i|0)&i|~n&r)+e[10]-42063|0)<<17|o>>>15)+n|0)&n|~o&i)+e[11]-1990404162|0)<<22|r>>>10)+o|0,r=((r+=((o=((o+=((n=((n+=((i=((i+=(r&o|~r&n)+e[12]+1804603682|0)<<7|i>>>25)+r|0)&r|~i&o)+e[13]-40341101|0)<<12|n>>>20)+i|0)&i|~n&r)+e[14]-1502002290|0)<<17|o>>>15)+n|0)&n|~o&i)+e[15]+1236535329|0)<<22|r>>>10)+o|0,r=((r+=((o=((o+=((n=((n+=((i=((i+=(r&n|o&~n)+e[1]-165796510|0)<<5|i>>>27)+r|0)&o|r&~o)+e[6]-1069501632|0)<<9|n>>>23)+i|0)&r|i&~r)+e[11]+643717713|0)<<14|o>>>18)+n|0)&i|n&~i)+e[0]-373897302|0)<<20|r>>>12)+o|0,r=((r+=((o=((o+=((n=((n+=((i=((i+=(r&n|o&~n)+e[5]-701558691|0)<<5|i>>>27)+r|0)&o|r&~o)+e[10]+38016083|0)<<9|n>>>23)+i|0)&r|i&~r)+e[15]-660478335|0)<<14|o>>>18)+n|0)&i|n&~i)+e[4]-405537848|0)<<20|r>>>12)+o|0,r=((r+=((o=((o+=((n=((n+=((i=((i+=(r&n|o&~n)+e[9]+568446438|0)<<5|i>>>27)+r|0)&o|r&~o)+e[14]-1019803690|0)<<9|n>>>23)+i|0)&r|i&~r)+e[3]-187363961|0)<<14|o>>>18)+n|0)&i|n&~i)+e[8]+1163531501|0)<<20|r>>>12)+o|0,r=((r+=((o=((o+=((n=((n+=((i=((i+=(r&n|o&~n)+e[13]-1444681467|0)<<5|i>>>27)+r|0)&o|r&~o)+e[2]-51403784|0)<<9|n>>>23)+i|0)&r|i&~r)+e[7]+1735328473|0)<<14|o>>>18)+n|0)&i|n&~i)+e[12]-1926607734|0)<<20|r>>>12)+o|0,r=((r+=((o=((o+=((n=((n+=((i=((i+=(r^o^n)+e[5]-378558|0)<<4|i>>>28)+r|0)^r^o)+e[8]-2022574463|0)<<11|n>>>21)+i|0)^i^r)+e[11]+1839030562|0)<<16|o>>>16)+n|0)^n^i)+e[14]-35309556|0)<<23|r>>>9)+o|0,r=((r+=((o=((o+=((n=((n+=((i=((i+=(r^o^n)+e[1]-1530992060|0)<<4|i>>>28)+r|0)^r^o)+e[4]+1272893353|0)<<11|n>>>21)+i|0)^i^r)+e[7]-155497632|0)<<16|o>>>16)+n|0)^n^i)+e[10]-1094730640|0)<<23|r>>>9)+o|0,r=((r+=((o=((o+=((n=((n+=((i=((i+=(r^o^n)+e[13]+681279174|0)<<4|i>>>28)+r|0)^r^o)+e[0]-358537222|0)<<11|n>>>21)+i|0)^i^r)+e[3]-722521979|0)<<16|o>>>16)+n|0)^n^i)+e[6]+76029189|0)<<23|r>>>9)+o|0,r=((r+=((o=((o+=((n=((n+=((i=((i+=(r^o^n)+e[9]-640364487|0)<<4|i>>>28)+r|0)^r^o)+e[12]-421815835|0)<<11|n>>>21)+i|0)^i^r)+e[15]+530742520|0)<<16|o>>>16)+n|0)^n^i)+e[2]-995338651|0)<<23|r>>>9)+o|0,r=((r+=((n=((n+=(r^((i=((i+=(o^(r|~n))+e[0]-198630844|0)<<6|i>>>26)+r|0)|~o))+e[7]+1126891415|0)<<10|n>>>22)+i|0)^((o=((o+=(i^(n|~r))+e[14]-1416354905|0)<<15|o>>>17)+n|0)|~i))+e[5]-57434055|0)<<21|r>>>11)+o|0,r=((r+=((n=((n+=(r^((i=((i+=(o^(r|~n))+e[12]+1700485571|0)<<6|i>>>26)+r|0)|~o))+e[3]-1894986606|0)<<10|n>>>22)+i|0)^((o=((o+=(i^(n|~r))+e[10]-1051523|0)<<15|o>>>17)+n|0)|~i))+e[1]-2054922799|0)<<21|r>>>11)+o|0,r=((r+=((n=((n+=(r^((i=((i+=(o^(r|~n))+e[8]+1873313359|0)<<6|i>>>26)+r|0)|~o))+e[15]-30611744|0)<<10|n>>>22)+i|0)^((o=((o+=(i^(n|~r))+e[6]-1560198380|0)<<15|o>>>17)+n|0)|~i))+e[13]+1309151649|0)<<21|r>>>11)+o|0,r=((r+=((n=((n+=(r^((i=((i+=(o^(r|~n))+e[4]-145523070|0)<<6|i>>>26)+r|0)|~o))+e[11]-1120210379|0)<<10|n>>>22)+i|0)^((o=((o+=(i^(n|~r))+e[2]+718787259|0)<<15|o>>>17)+n|0)|~i))+e[9]-343485551|0)<<21|r>>>11)+o|0,t[0]=i+t[0]|0,t[1]=r+t[1]|0,t[2]=o+t[2]|0,t[3]=n+t[3]|0}function r(t){var e,i=[];for(e=0;e<64;e+=4)i[e>>2]=t.charCodeAt(e)+(t.charCodeAt(e+1)<<8)+(t.charCodeAt(e+2)<<16)+(t.charCodeAt(e+3)<<24);return i}function o(t){var e,i=[];for(e=0;e<64;e+=4)i[e>>2]=t[e]+(t[e+1]<<8)+(t[e+2]<<16)+(t[e+3]<<24);return i}function n(t){var e,o,n,s,a,l,c=t.length,h=[1732584193,-271733879,-1732584194,271733878];for(e=64;e<=c;e+=64)i(h,r(t.substring(e-64,e)));for(o=(t=t.substring(e-64)).length,n=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e=0;e<o;e+=1)n[e>>2]|=t.charCodeAt(e)<<(e%4<<3);if(n[e>>2]|=128<<(e%4<<3),e>55)for(i(h,n),e=0;e<16;e+=1)n[e]=0;return s=(s=8*c).toString(16).match(/(.*?)(.{0,8})$/),a=parseInt(s[2],16),l=parseInt(s[1],16)||0,n[14]=a,n[15]=l,i(h,n),h}function s(t){var i,r="";for(i=0;i<4;i+=1)r+=e[t>>8*i+4&15]+e[t>>8*i&15];return r}function a(t){var e;for(e=0;e<t.length;e+=1)t[e]=s(t[e]);return t.join("")}function l(t){return/[\u0080-\uFFFF]/.test(t)&&(t=unescape(encodeURIComponent(t))),t}function c(t){var e,i=[],r=t.length;for(e=0;e<r-1;e+=2)i.push(parseInt(t.substr(e,2),16));return String.fromCharCode.apply(String,i)}function h(){this.reset()}return a(n("hello")),"undefined"==typeof ArrayBuffer||ArrayBuffer.prototype.slice||function(){function e(t,e){return(t=0|t||0)<0?Math.max(t+e,0):Math.min(t,e)}ArrayBuffer.prototype.slice=function(i,r){var o,n,s,a,l=this.byteLength,c=e(i,l),h=l;return r!==t&&(h=e(r,l)),c>h?new ArrayBuffer(0):(o=h-c,n=new ArrayBuffer(o),s=new Uint8Array(n),a=new Uint8Array(this,c,o),s.set(a),n)}}(),h.prototype.append=function(t){return this.appendBinary(l(t)),this},h.prototype.appendBinary=function(t){this._buff+=t,this._length+=t.length;var e,o=this._buff.length;for(e=64;e<=o;e+=64)i(this._hash,r(this._buff.substring(e-64,e)));return this._buff=this._buff.substring(e-64),this},h.prototype.end=function(t){var e,i,r=this._buff,o=r.length,n=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(e=0;e<o;e+=1)n[e>>2]|=r.charCodeAt(e)<<(e%4<<3);return this._finish(n,o),i=a(this._hash),t&&(i=c(i)),this.reset(),i},h.prototype.reset=function(){return this._buff="",this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},h.prototype.getState=function(){return{buff:this._buff,length:this._length,hash:this._hash.slice()}},h.prototype.setState=function(t){return this._buff=t.buff,this._length=t.length,this._hash=t.hash,this},h.prototype.destroy=function(){delete this._hash,delete this._buff,delete this._length},h.prototype._finish=function(t,e){var r,o,n,s=e;if(t[s>>2]|=128<<(s%4<<3),s>55)for(i(this._hash,t),s=0;s<16;s+=1)t[s]=0;r=(r=8*this._length).toString(16).match(/(.*?)(.{0,8})$/),o=parseInt(r[2],16),n=parseInt(r[1],16)||0,t[14]=o,t[15]=n,i(this._hash,t)},h.hash=function(t,e){return h.hashBinary(l(t),e)},h.hashBinary=function(t,e){var i=a(n(t));return e?c(i):i},h.ArrayBuffer=function(){this.reset()},h.ArrayBuffer.prototype.append=function(t){var e,r,n,s,a=(r=this._buff.buffer,n=t,(s=new Uint8Array(r.byteLength+n.byteLength)).set(new Uint8Array(r)),s.set(new Uint8Array(n),r.byteLength),s),l=a.length;for(this._length+=t.byteLength,e=64;e<=l;e+=64)i(this._hash,o(a.subarray(e-64,e)));return this._buff=e-64<l?new Uint8Array(a.buffer.slice(e-64)):new Uint8Array(0),this},h.ArrayBuffer.prototype.end=function(t){var e,i,r=this._buff,o=r.length,n=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(e=0;e<o;e+=1)n[e>>2]|=r[e]<<(e%4<<3);return this._finish(n,o),i=a(this._hash),t&&(i=c(i)),this.reset(),i},h.ArrayBuffer.prototype.reset=function(){return this._buff=new Uint8Array(0),this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},h.ArrayBuffer.prototype.getState=function(){var t,e=h.prototype.getState.call(this);return e.buff=(t=e.buff,String.fromCharCode.apply(null,new Uint8Array(t))),e},h.ArrayBuffer.prototype.setState=function(t){return t.buff=function(t,e){var i,r=t.length,o=new ArrayBuffer(r),n=new Uint8Array(o);for(i=0;i<r;i+=1)n[i]=t.charCodeAt(i);return e?n:o}(t.buff,!0),h.prototype.setState.call(this,t)},h.ArrayBuffer.prototype.destroy=h.prototype.destroy,h.ArrayBuffer.prototype._finish=h.prototype._finish,h.ArrayBuffer.hash=function(t,e){var r=function(t){var e,r,n,s,a,l,c=t.length,h=[1732584193,-271733879,-1732584194,271733878];for(e=64;e<=c;e+=64)i(h,o(t.subarray(e-64,e)));for(r=(t=e-64<c?t.subarray(e-64):new Uint8Array(0)).length,n=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e=0;e<r;e+=1)n[e>>2]|=t[e]<<(e%4<<3);if(n[e>>2]|=128<<(e%4<<3),e>55)for(i(h,n),e=0;e<16;e+=1)n[e]=0;return s=(s=8*c).toString(16).match(/(.*?)(.{0,8})$/),a=parseInt(s[2],16),l=parseInt(s[1],16)||0,n[14]=a,n[15]=l,i(h,n),h}(new Uint8Array(t)),n=a(r);return e?c(n):n},h});class _c extends st{static properties={logoLink:{type:String},companyName:{type:String},supportNum:{type:String},supportEmail:{type:String},_pages:{type:Array,state:!0},_extensionPages:{type:Array,state:!0},_email:{type:String,state:!0},_gravatarSrc:{type:String,state:!0},_apiKey:{type:String,state:!0,reflect:!0},_currentDb:{type:String,state:!0,reflect:!0}};static styles=[n(Nn),n(mc),s`
    :host {
        display: flex;
        flex-direction: column;
        width: 100%;
        z-index: 4;
    }
    ::slotted([title]) {
        font-size: var(--sl-font-size-large);
        color: var(--primary-color, black);
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
        line-height: 1.2em;
        font-size: 14px;
        color: black;
        text-transform: capitalize;
    }
    #nine-dot-dropdown::part(panel) {
      width: 250px !important;
    }
    #nine-dot-dropdown sl-menu {
      width: 250px !important;
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
    sl-avatar.toolbar-icon {
        --size: 30px;
    }
  `];render(){return U`
      <div flex row id="toolbar">
        <!-- Left Container -->
        <div flex row align-center grow justify-start>
          <slot name="left-of-logo"></slot>
          ${lt(this.logoLink,()=>U`<img id="logo" src="${this.logoLink}" />`)}
          <slot name="left"></slot>
        </div>
        <!-- Center Container -->
        <div flex row align-center grow justify-center>
          <slot name="center"></slot>
        </div>
        <!-- Right Container -->
        <div flex row align-center grow justify-end>
          <slot name="right"></slot>
          <div flex row align-center>
            <sl-dropdown id="help-dropdown" placement="bottom-end">
                <sl-icon-button circle slot="trigger" class="toolbar-icon" pointer library="material" name="help_round"></sl-icon-button>
                ${lt(this.supportNum||this.supportEmail,()=>U`
                    <p style="margin-top: 0;">
                        If you have questions or need support, please
                        ${lt(this.supportNum,()=>U`call us at ${this.supportNum}`)}
                        ${lt(this.supportNum&&this.supportEmail,()=>U` or `)}
                        ${lt(this.supportEmail,()=>U`email us at <a style="color: var(--primary-color, blue); text-decoration: none;" href="mailto:${this.supportEmail}">${this.supportEmail}</a
                        >`)}.
                    </p>
                `)}
                ${lt(!(this.supportNum||this.supportEmail),()=>U`<p style="margin-top: 0;">A Katapult Pro Extension</p>`)}
              <div class="software-details">
                <p>
                  This webpage is hosted
                  ${lt(this.companyName,()=>U`by ${this.companyName}`)}
                  using Katapult Engineering's API, and extends the Katapult Pro software.
                </p>
                <p>Katapult does not manage or hold responsibility for this domain.</p>
              </div>
            </sl-dropdown>
            <sl-dropdown id="nine-dot-dropdown" placement="bottom-end">
              <sl-icon-button class="toolbar-icon" pointer library="material" name="apps" slot="trigger"></sl-icon-button>
              <sl-menu>
                <!-- Non-extension pages -->
                ${lt(this._pages.length>0,()=>U`
                    <div flex row align-center justify-center style="flex-wrap: wrap; padding: 8px 5px 0 5px;">
                      ${ct(this._pages,t=>U`
                              <sl-menu-item flex column @click=${t=>this.#t(t)}>
                                  <sl-icon
                                  nine-dot
                                  flex
                                  row
                                  justify-center
                                  wrap
                                  slot="prefix"
                                  library="material"
                                  name="${t.icon}"
                                  style="color: ${t.color};"
                                  ></sl-icon>
                                  ${t.name}
                              </sl-menu-item>
                        `)}
                    </div>
                `)}
                <!-- Extension pages -->
                ${lt(this._extensionPages.length>0,()=>U`
                    <div style="width: 100%; margin: 12px 0; height: 16px; display: flex; align-items: center;">
                      <div style="flex: 1; height: 1px; background-color: #ccc;"></div>
                      <div style="padding: 0 8px; font-size: 12px; color: #888; white-space: nowrap;">External Links</div>
                      <div style="flex: 1; height: 1px; background-color: #ccc;"></div>
                    </div>
                    <div flex row align-center justify-center style="flex-wrap: wrap; padding: 8px 5px 0 5px;">
                      ${ct(this._extensionPages,t=>U`
                              <sl-menu-item flex column @click=${t=>this.#t(t)}>
                                  <sl-icon
                                  nine-dot
                                  flex
                                  row
                                  justify-center
                                  wrap
                                  slot="prefix"
                                  library="material"
                                  name="${t.icon}"
                                  style="color: ${t.color};"
                                  ></sl-icon>
                                  ${t.name}
                              </sl-menu-item>
                        `)}
                    </div>
                `)}
                <!-- No pages -->
                ${lt(0===this._pages.length&&0===this._extensionPages.length,()=>U`
                    <div flex row align-center justify-start style="border: 3px solid var(--primary-color, var(--sl-color-gray-500)); border-radius: 15px; margin: 0 8px;">
                      <sl-spinner style="font-size: 40px; --track-width: 4px; --indicator-color: var(--primary-color, var(--sl-color-gray-400)); --track-color: var(--sl-color-gray-200); margin: 8px; margin-left: 12px;"></sl-spinner>
                      <div style="font-size: 18px; color: var(--sl-color-gray-400); margin-left: 32px;">Loading...</div>
                    </div>
                `)}
              </sl-menu>
            </sl-dropdown>
            <sl-dropdown placement="bottom-end">
              <sl-avatar class="toolbar-icon" pointer image="${this._gravatarSrc}" slot="trigger"></sl-avatar>
              <sl-menu flex column justify-center align-center style="padding: 16px;">
                <div flex row justify-center align-center>
                  <sl-avatar pointer image="${this._gravatarSrc}"></sl-avatar>
                  ${lt(this._email,()=>U`<span style="margin-left: 12px;">${this._email}</span>`)}
                </div>
                <sl-button variant="default" style="margin-top: 12px;" @click=${()=>this.#e()}>
                  <sl-icon slot="prefix" library="material" name="logout"></sl-icon>
                  Sign Out
                </sl-button>
              </sl-menu>
            </sl-dropdown>
          </div>
        </div>
      </div>
      `}constructor(){super();const t=new Date,e=localStorage.getItem("apiKey")?JSON.parse(localStorage.getItem("apiKey")):"";t>=e?.expiry&&localStorage.removeItem("apiKey");const i=localStorage.getItem("db")?JSON.parse(localStorage.getItem("db")):"";t>=i?.expiry&&localStorage.removeItem("db"),this.logoLink="",this.companyName="",this.supportNum="",this.supportEmail="",this._pages=[],this._extensionPages=[],this._email="",this._gravatarSrc=this.#i(this._email),this._apiKey=e?.data?gc(e.data):"",this._currentDb=i?.data||"",this._apiKey&&this.#r(),window.addEventListener("apiChange",async t=>{this._apiKey=gc(t.detail?.key),this._currentDb=t.detail?.db,this._apiKey?await this.#r():this.requestUpdate()})}#e(){localStorage.removeItem("apiKey"),localStorage.removeItem("db"),window.dispatchEvent(new CustomEvent("apiChange",{detail:null}))}#i(t){if(!t)return"";return`https://www.gravatar.com/avatar/${SparkMD5.hash(t)}?s=100&d=blank`}#t(t){const e=t.currentTarget.innerText.toLowerCase(),i=this._pages.filter(t=>t.name==e)[0],r=this._currentDb+"/"+i.url;window.open(r,"_blank")}async#r(){setTimeout(async()=>{if(this._apiKey){const t=await fetch(`${this._currentDb}/api/v2/company-data/pages?api_key=${this._apiKey}`,{method:"GET"}).then(t=>t.json());t.error?this.#r():(t.forEach(t=>{t.name=t.name.length>20?t.name.slice(0,15)+"...":t.name,t.icon=t.icon+"_round","var(--primary-color)"===t.color&&(t.color="#003e51")}),this._extensionPages=t.filter(t=>t.isExtension),this._pages=t.filter(t=>!t.isExtension),this.requestUpdate())}},2500)}}window.customElements.define("katapult-toolbar",_c);var bc=new WeakMap,yc=new WeakMap,vc=new WeakMap,wc=new WeakSet,xc=new WeakMap,Cc=class{constructor(t,e){this.handleFormData=t=>{const e=this.options.disabled(this.host),i=this.options.name(this.host),r=this.options.value(this.host),o="sl-button"===this.host.tagName.toLowerCase();this.host.isConnected&&!e&&!o&&"string"==typeof i&&i.length>0&&void 0!==r&&(Array.isArray(r)?r.forEach(e=>{t.formData.append(i,e.toString())}):t.formData.append(i,r.toString()))},this.handleFormSubmit=t=>{var e;const i=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&(null==(e=bc.get(this.form))||e.forEach(t=>{this.setUserInteracted(t,!0)})),!this.form||this.form.noValidate||i||r(this.host)||(t.preventDefault(),t.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),xc.set(this.host,[])},this.handleInteraction=t=>{const e=xc.get(this.host);e.includes(t.type)||e.push(t.type),e.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if("function"==typeof e.checkValidity&&!e.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if("function"==typeof e.reportValidity&&!e.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=Kn({form:t=>{const e=t.form;if(e){const i=t.getRootNode().querySelector(`#${e}`);if(i)return i}return t.closest("form")},name:t=>t.name,value:t=>t.value,defaultValue:t=>t.defaultValue,disabled:t=>{var e;return null!=(e=t.disabled)&&e},reportValidity:t=>"function"!=typeof t.reportValidity||t.reportValidity(),checkValidity:t=>"function"!=typeof t.checkValidity||t.checkValidity(),setValue:(t,e)=>t.value=e,assumeInteractionOn:["sl-input"]},e)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),xc.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),xc.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,bc.has(this.form)?bc.get(this.form).add(this.host):bc.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),yc.has(this.form)||(yc.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),vc.has(this.form)||(vc.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=bc.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),yc.has(this.form)&&(this.form.reportValidity=yc.get(this.form),yc.delete(this.form)),vc.has(this.form)&&(this.form.checkValidity=vc.get(this.form),vc.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?wc.add(t):wc.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const i=document.createElement("button");i.type=t,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",e&&(i.name=e.name,i.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(t=>{e.hasAttribute(t)&&i.setAttribute(t,e.getAttribute(t))})),this.form.append(i),i.click(),i.remove()}}getForm(){var t;return null!=(t=this.form)?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,i=Boolean(wc.has(e)),r=Boolean(e.required);e.toggleAttribute("data-required",r),e.toggleAttribute("data-optional",!r),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&i),e.toggleAttribute("data-user-valid",t&&i)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||null==t||t.preventDefault()}},Sc=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(Jn(Kn({},Sc),{valid:!1,valueMissing:!0})),Object.freeze(Jn(Kn({},Sc),{valid:!1,customError:!0}));var kc=s`
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
`,Ec=class extends Ss{constructor(){super(...arguments),this.formControlController=new Cc(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new jl(this,"[default]","prefix","suffix"),this.localize=new gs(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Sc}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){"submit"===this.type&&this.formControlController.submit(this),"reset"===this.type&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return!this.isButton()||this.button.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.isButton()||this.button.reportValidity()}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?hc`a`:hc`button`;return pc`
      <${e}
        part="base"
        class=${il({button:!0,"button--default":"default"===this.variant,"button--primary":"primary"===this.variant,"button--success":"success"===this.variant,"button--neutral":"neutral"===this.variant,"button--warning":"warning"===this.variant,"button--danger":"danger"===this.variant,"button--text":"text"===this.variant,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":"rtl"===this.localize.dir(),"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${gl(t?void 0:this.disabled)}
        type=${gl(t?void 0:this.type)}
        title=${this.title}
        name=${gl(t?void 0:this.name)}
        value=${gl(t?void 0:this.value)}
        href=${gl(t&&!this.disabled?this.href:void 0)}
        target=${gl(t?this.target:void 0)}
        download=${gl(t?this.download:void 0)}
        rel=${gl(t?this.rel:void 0)}
        role=${gl(t?void 0:"button")}
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
        ${this.caret?pc` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?pc`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};Ec.styles=[_s,kc],Ec.dependencies={"sl-icon":rc,"sl-spinner":Ul},Yn([xs(".button")],Ec.prototype,"button",2),Yn([ws()],Ec.prototype,"hasFocus",2),Yn([ws()],Ec.prototype,"invalid",2),Yn([vs()],Ec.prototype,"title",2),Yn([vs({reflect:!0})],Ec.prototype,"variant",2),Yn([vs({reflect:!0})],Ec.prototype,"size",2),Yn([vs({type:Boolean,reflect:!0})],Ec.prototype,"caret",2),Yn([vs({type:Boolean,reflect:!0})],Ec.prototype,"disabled",2),Yn([vs({type:Boolean,reflect:!0})],Ec.prototype,"loading",2),Yn([vs({type:Boolean,reflect:!0})],Ec.prototype,"outline",2),Yn([vs({type:Boolean,reflect:!0})],Ec.prototype,"pill",2),Yn([vs({type:Boolean,reflect:!0})],Ec.prototype,"circle",2),Yn([vs()],Ec.prototype,"type",2),Yn([vs()],Ec.prototype,"name",2),Yn([vs()],Ec.prototype,"value",2),Yn([vs()],Ec.prototype,"href",2),Yn([vs()],Ec.prototype,"target",2),Yn([vs()],Ec.prototype,"rel",2),Yn([vs()],Ec.prototype,"download",2),Yn([vs()],Ec.prototype,"form",2),Yn([vs({attribute:"formaction"})],Ec.prototype,"formAction",2),Yn([vs({attribute:"formenctype"})],Ec.prototype,"formEnctype",2),Yn([vs({attribute:"formmethod"})],Ec.prototype,"formMethod",2),Yn([vs({attribute:"formnovalidate",type:Boolean})],Ec.prototype,"formNoValidate",2),Yn([vs({attribute:"formtarget"})],Ec.prototype,"formTarget",2),Yn([ml("disabled",{waitUntilFirstUpdate:!0})],Ec.prototype,"handleDisabledChange",1),Ec.define("sl-button");var Pc=[],Ac=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var e;if("Tab"!==t.key||this.isExternalActivated)return;if(!this.isActive())return;const i=Qn();if(this.previousFocus=i,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const r=rs(this.element);let o=r.findIndex(t=>t===i);this.previousFocus=this.currentFocus;const n="forward"===this.tabDirection?1:-1;for(;;){o+n>=r.length?o=0:o+n<0?o=r.length-1:o+=n,this.previousFocus=this.currentFocus;const i=r[o];if("backward"===this.tabDirection&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;if(i&&this.possiblyHasTabbableChildren(i))return;t.preventDefault(),this.currentFocus=i,null==(e=this.currentFocus)||e.focus({preventScroll:!1});const s=[...Zn()];if(s.includes(this.currentFocus)||!s.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){Pc.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Pc=Pc.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Pc[Pc.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=rs(this.element);if(!this.element.matches(":focus-within")){const e=t[0],i=t[t.length-1],r="forward"===this.tabDirection?e:i;"function"==typeof(null==r?void 0:r.focus)&&(this.currentFocus=r,r.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}},$c=new Set;function Tc(t){if($c.add(t),!document.documentElement.classList.contains("sl-scroll-lock")){const t=function(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}()+function(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}();let e=getComputedStyle(document.documentElement).scrollbarGutter;e&&"auto"!==e||(e="stable"),t<2&&(e=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",e),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function Oc(t){$c.delete(t),0===$c.size&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}var Ic=s`
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
`,Nc=class extends Ss{constructor(){super(...arguments),this.hasSlotController=new jl(this,"footer"),this.localize=new gs(this),this.modal=new Ac(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{"Escape"===t.key&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Tc(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),Oc(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const t=hl(this,"dialog.denyClose",{dir:this.localize.dir()});return void pl(this.panel,t.keyframes,t.options)}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Tc(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([fl(this.dialog),fl(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=hl(this,"dialog.show",{dir:this.localize.dir()}),i=hl(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([pl(this.panel,e.keyframes,e.options),pl(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{(t=>{var e;const{activeElement:i}=document;i&&t.contains(i)&&(null==(e=document.activeElement)||e.blur())})(this),this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([fl(this.dialog),fl(this.overlay)]);const t=hl(this,"dialog.hide",{dir:this.localize.dir()}),e=hl(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([pl(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),pl(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Oc(this);const i=this.originalTrigger;"function"==typeof(null==i?void 0:i.focus)&&setTimeout(()=>i.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,dl(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,dl(this,"sl-after-hide")}render(){return U`
      <div
        part="base"
        class=${il({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${gl(this.noHeader?this.label:void 0)}
          aria-labelledby=${gl(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":U`
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
    `}};Nc.styles=[_s,Ic],Nc.dependencies={"sl-icon-button":uc},Yn([xs(".dialog")],Nc.prototype,"dialog",2),Yn([xs(".dialog__panel")],Nc.prototype,"panel",2),Yn([xs(".dialog__overlay")],Nc.prototype,"overlay",2),Yn([vs({type:Boolean,reflect:!0})],Nc.prototype,"open",2),Yn([vs({reflect:!0})],Nc.prototype,"label",2),Yn([vs({attribute:"no-header",type:Boolean,reflect:!0})],Nc.prototype,"noHeader",2),Yn([ml("open",{waitUntilFirstUpdate:!0})],Nc.prototype,"handleOpenChange",1),cl("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),cl("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}}),cl("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}}),cl("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),cl("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}}),Nc.define("sl-dialog");var Lc=s`
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
`,zc=(t="value")=>(e,i)=>{const r=e.constructor,o=r.prototype.attributeChangedCallback;r.prototype.attributeChangedCallback=function(e,n,s){var a;const l=r.getPropertyOptions(t);if(e===("string"==typeof l.attribute?l.attribute:t)){const e=l.converter||y,r=("function"==typeof e?e:null!=(a=null==e?void 0:e.fromAttribute)?a:y.fromAttribute)(s,l.type);this[t]!==r&&(this[i]=r)}o.call(this,e,n,s)}},Dc=s`
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
`
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;const Mc=tl(class extends el{constructor(t){if(super(t),t.type!==Za&&t.type!==Ga&&t.type!==Qa)throw Error("The `live` directive is not allowed on child or event bindings");if(!xl(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===j||e===V)return e;const i=t.element,r=t.name;if(t.type===Za){if(e===i[r])return j}else if(t.type===Qa){if(!!e===i.hasAttribute(r))return j}else if(t.type===Ga&&i.getAttribute(r)===e+"")return j;return Pl(t),e}});var Rc=class extends Ss{constructor(){super(...arguments),this.formControlController=new Cc(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new jl(this,"help-text","label"),this.localize=new gs(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,(null==(t=this.input)?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,(null==(t=this.input)?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){t.preventDefault(),""!==this.value&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;"Enter"!==t.key||e||setTimeout(()=>{t.defaultPrevented||t.isComposing||this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,i="none"){this.input.setSelectionRange(t,e,i)}setRangeText(t,e,i,r="preserve"){const o=null!=e?e:this.input.selectionStart,n=null!=i?i:this.input.selectionEnd;this.input.setRangeText(t,o,n,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=!!this.label||!!t,r=!!this.helpText||!!e,o=this.clearable&&!this.disabled&&!this.readonly&&("number"==typeof this.value||this.value.length>0);return U`
      <div
        part="form-control"
        class=${il({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":i,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${il({input:!0,"input--small":"small"===this.size,"input--medium":"medium"===this.size,"input--large":"large"===this.size,"input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
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
              name=${gl(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${gl(this.placeholder)}
              minlength=${gl(this.minlength)}
              maxlength=${gl(this.maxlength)}
              min=${gl(this.min)}
              max=${gl(this.max)}
              step=${gl(this.step)}
              .value=${Mc(this.value)}
              autocapitalize=${gl(this.autocapitalize)}
              autocomplete=${gl(this.autocomplete)}
              autocorrect=${gl(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${gl(this.pattern)}
              enterkeyhint=${gl(this.enterkeyhint)}
              inputmode=${gl(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${o?U`
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
            ${this.passwordToggle&&!this.disabled?U`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?U`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:U`
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
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Rc.styles=[_s,Dc,Lc],Rc.dependencies={"sl-icon":rc},Yn([xs(".input__control")],Rc.prototype,"input",2),Yn([ws()],Rc.prototype,"hasFocus",2),Yn([vs()],Rc.prototype,"title",2),Yn([vs({reflect:!0})],Rc.prototype,"type",2),Yn([vs()],Rc.prototype,"name",2),Yn([vs()],Rc.prototype,"value",2),Yn([zc()],Rc.prototype,"defaultValue",2),Yn([vs({reflect:!0})],Rc.prototype,"size",2),Yn([vs({type:Boolean,reflect:!0})],Rc.prototype,"filled",2),Yn([vs({type:Boolean,reflect:!0})],Rc.prototype,"pill",2),Yn([vs()],Rc.prototype,"label",2),Yn([vs({attribute:"help-text"})],Rc.prototype,"helpText",2),Yn([vs({type:Boolean})],Rc.prototype,"clearable",2),Yn([vs({type:Boolean,reflect:!0})],Rc.prototype,"disabled",2),Yn([vs()],Rc.prototype,"placeholder",2),Yn([vs({type:Boolean,reflect:!0})],Rc.prototype,"readonly",2),Yn([vs({attribute:"password-toggle",type:Boolean})],Rc.prototype,"passwordToggle",2),Yn([vs({attribute:"password-visible",type:Boolean})],Rc.prototype,"passwordVisible",2),Yn([vs({attribute:"no-spin-buttons",type:Boolean})],Rc.prototype,"noSpinButtons",2),Yn([vs({reflect:!0})],Rc.prototype,"form",2),Yn([vs({type:Boolean,reflect:!0})],Rc.prototype,"required",2),Yn([vs()],Rc.prototype,"pattern",2),Yn([vs({type:Number})],Rc.prototype,"minlength",2),Yn([vs({type:Number})],Rc.prototype,"maxlength",2),Yn([vs()],Rc.prototype,"min",2),Yn([vs()],Rc.prototype,"max",2),Yn([vs()],Rc.prototype,"step",2),Yn([vs()],Rc.prototype,"autocapitalize",2),Yn([vs()],Rc.prototype,"autocorrect",2),Yn([vs()],Rc.prototype,"autocomplete",2),Yn([vs({type:Boolean})],Rc.prototype,"autofocus",2),Yn([vs()],Rc.prototype,"enterkeyhint",2),Yn([vs({type:Boolean,converter:{fromAttribute:t=>!(!t||"false"===t),toAttribute:t=>t?"true":"false"}})],Rc.prototype,"spellcheck",2),Yn([vs()],Rc.prototype,"inputmode",2),Yn([ml("disabled",{waitUntilFirstUpdate:!0})],Rc.prototype,"handleDisabledChange",1),Yn([ml("step",{waitUntilFirstUpdate:!0})],Rc.prototype,"handleStepChange",1),Yn([ml("value",{waitUntilFirstUpdate:!0})],Rc.prototype,"handleValueChange",1),Rc.define("sl-input");var Fc=s`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,Bc=class extends Ss{constructor(){super(...arguments),this.formControlController=new Cc(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new jl(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=!!this.helpText||!!t;return U`
      <div
        class=${il({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${il({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":"small"===this.size,"checkbox--medium":"medium"===this.size,"checkbox--large":"large"===this.size})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${gl(this.value)}
            .indeterminate=${Mc(this.indeterminate)}
            .checked=${Mc(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
            class="checkbox__control"
          >
            ${this.checked?U`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:""}
            ${!this.checked&&this.indeterminate?U`
                  <sl-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></sl-icon>
                `:""}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${e?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Bc.styles=[_s,Dc,Fc],Bc.dependencies={"sl-icon":rc},Yn([xs('input[type="checkbox"]')],Bc.prototype,"input",2),Yn([ws()],Bc.prototype,"hasFocus",2),Yn([vs()],Bc.prototype,"title",2),Yn([vs()],Bc.prototype,"name",2),Yn([vs()],Bc.prototype,"value",2),Yn([vs({reflect:!0})],Bc.prototype,"size",2),Yn([vs({type:Boolean,reflect:!0})],Bc.prototype,"disabled",2),Yn([vs({type:Boolean,reflect:!0})],Bc.prototype,"checked",2),Yn([vs({type:Boolean,reflect:!0})],Bc.prototype,"indeterminate",2),Yn([zc("checked")],Bc.prototype,"defaultChecked",2),Yn([vs({reflect:!0})],Bc.prototype,"form",2),Yn([vs({type:Boolean,reflect:!0})],Bc.prototype,"required",2),Yn([vs({attribute:"help-text"})],Bc.prototype,"helpText",2),Yn([ml("disabled",{waitUntilFirstUpdate:!0})],Bc.prototype,"handleDisabledChange",1),Yn([ml(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],Bc.prototype,"handleStateChange",1),Bc.define("sl-checkbox");class Hc extends st{static properties={_validApiKey:{type:Boolean,state:!0},_apiError:{type:Boolean,state:!0},_saveApiData:{type:Boolean},_emptyError:{type:Boolean},_apiLoading:{type:Boolean}};static styles=[n(Nn),n(mc),s`
      #loginForm::part(panel) {
        max-width: 335px;
      }
      #loginForm::part(body) {
        padding-bottom: 8px;
      }
      .link {
        color: var(--primary-color, blue);
        text-decoration: underline;
        cursor: pointer;
      }
      .helpText {
        color: var(--sl-color-gray-600);
        text-align: center;
        font-size: 14px;
      }
      #open-api-btn::part(label) {
        display: flex;
        align-items: center;
      }
    `];render(){return U`
      <!-- Api key needs to be entered, or was invalid when entered -->
      <sl-dialog id="loginForm" no-header .open=${!this._validApiKey} @sl-request-close=${t=>t.preventDefault()}>
        <sl-input
          id="apiServerInput"
          clearable
          autofocus
          placeholder="Enter server url"
          label="API Server URL"
          style="margin-bottom: 12px;"
        >
          <sl-icon small library="material" slot="clear-icon" name="clear"></sl-icon>
        </sl-input>
        <sl-input
          id="apiKeyInput"
          type="password"
          password-toggle
          clearable
          placeholder="Enter user API"
          label="API Key"
        >
          <sl-icon small library="material" slot="clear-icon" name="clear"></sl-icon>
          <sl-icon small library="material" slot="show-password-icon" name="visibility_off_round"></sl-icon>
          <sl-icon small library="material" slot="hide-password-icon" name="visibility_round"></sl-icon>
        </sl-input>
        <sl-checkbox id="rememberMe" size="small" @sl-change=${t=>this._saveApiData=t.currentTarget.checked} style="margin-top: 12px; color: var(--sl-color-gray-600);">Remember device for 30 days</sl-checkbox>
        <div flex column slot="footer">
          <sl-button id="open-api-btn" flex variant="primary" @click=${()=>this.#o()} style="height: 45px;">
            ${lt(!this._apiLoading,()=>U`Open API Tool`)}
            ${lt(this._apiLoading,()=>U`<sl-spinner style="font-size: 20px; --track-width: 3px; --indicator-color: var(--primary-color, var(--sl-color-gray-400)); --track-color: var(--sl-color-gray-200);"></sl-spinner>`)}
          </sl-button>
          <p class="helpText" style="margin-bottom: 0; margin-top: 24px;">
            If you don't know how to access your API key, follow along with
            <span class="link"
              @click=${()=>this.#n()}>this</span
            >
            documentation.
          </p>
          <p class="helpText" style="margin-bottom: 2px;">The server url is your Katapult Pro url, starting with <span style="color: var(--primary-color, blue);">https://</span> and ending with <span style="color: var(--primary-color, blue);">.com</span></p>
          ${lt(this._apiError,()=>U`
              <p style="color: red; font-size: 14px; text-align: center; margin-top: 12px; margin-bottom: 2px;">
                Your API Key is invalid or is for a different database. Try again.
              </p>
            `)}
          ${lt(this._emptyError,()=>U`
              <p style="color: red; font-size: 14px; text-align: center; margin-top: 12px; margin-bottom: 2px;">
                You need to fill in all fields.
              </p>
            `)}
        </div>
      </sl-dialog>

      <!-- Api key exists and is valid -->
       ${lt(this._validApiKey,()=>U`
          <!-- The default slot -->
          <slot></slot>
        `)}
    `}constructor(){super();const t=new Date,e=localStorage.getItem("apiKey")?JSON.parse(localStorage.getItem("apiKey")):"";t>=e?.expiry&&localStorage.removeItem("apiKey"),this._validApiKey=!!e?.data,this._apiError=!1,this._emptyError=!1,this._apiLoading=!1,this._validApiKey&&this.requestUpdate(),window.addEventListener("apiChange",async t=>{t.detail?.key||(this._validApiKey=!1,this.shadowRoot.getElementById("rememberMe").checked=!1,this.shadowRoot.getElementById("apiKeyInput").value="",this.shadowRoot.getElementById("apiServerInput").value="",this.requestUpdate())})}#n(){window.open("https://github.com/KatapultDevelopment/katapult-pro-api-documentation/blob/main/v2/DocumentationV2.MD#api-key-generation","_blank")}async#o(){this._apiLoading=!0,this.requestUpdate();const t=this.shadowRoot.getElementById("apiKeyInput")?.value,e=function(t,e=42){return btoa([...t].map(t=>t.charCodeAt(0)^e).join(","))}(t),i=this.shadowRoot.getElementById("apiServerInput")?.value?.trim()?.replace(/\/$/,"")||"";if(e&&i){this._emptyError=!1;const t=await this.#s(e,i);if(200!==t?.status)this._apiError=!0;else{if(this._apiError=!1,this._saveApiData){const t=(new Date).getTime()+2592e6;localStorage.setItem("apiKey",JSON.stringify({data:e,expiry:t})),localStorage.setItem("db",JSON.stringify({data:i,expiry:t}))}window.dispatchEvent(new CustomEvent("apiChange",{detail:{key:e,db:i}})),this._validApiKey=!0}this.requestUpdate()}else this._emptyError=!0,this._apiError=!1;this._apiLoading=!1}async#s(t,e){return await fetch(`${e}/api/v2?api_key=${gc(t)}`,{method:"GET"})}}window.customElements.define("katapult-authentication",Hc);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Uc="important",jc=" !"+Uc,Vc=tl(class extends el{constructor(t){if(super(t),t.type!==Ga||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const r=t[i];return null==r?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(const t in e){const r=e[t];if(null!=r){this.ft.add(t);const e="string"==typeof r&&r.endsWith(jc);t.includes("-")||e?i.setProperty(t,e?r.slice(0,-11):r,e?Uc:""):i[t]=r}}return j}});function qc(t,e,i,r){var o,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,i,s):o(e,i))||s);return n>3&&s&&Object.defineProperty(e,i,s),s}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Wc=(t,e,i)=>{const r=new Map;for(let o=e;o<=i;o++)r.set(t[o],o);return r},Kc=tl(class extends el{constructor(t){if(super(t),t.type!==Xa)throw Error("repeat() can only be used in text expressions")}dt(t,e,i){let r;void 0===i?i=e:void 0!==e&&(r=e);const o=[],n=[];let s=0;for(const e of t)o[s]=r?r(e,s):s,n[s]=i(e,s),s++;return{values:n,keys:o}}render(t,e,i){return this.dt(t,e,i).values}update(t,[e,i,r]){const o=(t=>t._$AH)(t),{values:n,keys:s}=this.dt(e,i,r);if(!Array.isArray(o))return this.ut=s,n;const a=this.ut??=[],l=[];let c,h,d=0,p=o.length-1,u=0,f=n.length-1;for(;d<=p&&u<=f;)if(null===o[d])d++;else if(null===o[p])p--;else if(a[d]===s[u])l[u]=kl(o[d],n[u]),d++,u++;else if(a[p]===s[f])l[f]=kl(o[p],n[f]),p--,f--;else if(a[d]===s[f])l[f]=kl(o[d],n[f]),Sl(t,l[f+1],o[d]),d++,f--;else if(a[p]===s[u])l[u]=kl(o[p],n[u]),Sl(t,o[d],o[p]),p--,u++;else if(void 0===c&&(c=Wc(s,u,f),h=Wc(a,d,p)),c.has(a[d]))if(c.has(a[p])){const e=h.get(s[u]),i=void 0!==e?o[e]:null;if(null===i){const e=Sl(t,o[d]);kl(e,n[u]),l[u]=e}else l[u]=kl(i,n[u]),Sl(t,o[d],i),o[e]=null;u++}else Al(o[p]),p--;else Al(o[d]),d++;for(;u<=f;){const e=Sl(t,l[f+1]);kl(e,n[u]),l[u++]=e}for(;d<=p;){const t=o[d++];null!==t&&Al(t)}return this.ut=s,Pl(t,l),j}});
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Jc extends Event{constructor(t){super(Jc.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}}Jc.eventName="rangeChanged";class Yc extends Event{constructor(t){super(Yc.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}}Yc.eventName="visibilityChanged";class Gc extends Event{constructor(){super(Gc.eventName,{bubbles:!1})}}Gc.eventName="unpinned";
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Xc{constructor(t){this._element=null;const e=t??window;this._node=e,t&&(this._element=t)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class Zc extends Xc{constructor(t,e){super(e),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const i=this._node;this._originalScrollTo=i.scrollTo,this._originalScrollBy=i.scrollBy,this._originalScroll=i.scroll,this._attach(t)}get _destination(){return this.__destination}get scrolling(){return null!==this._destination}scrollTo(t,e){const i="number"==typeof t&&"number"==typeof e?{left:t,top:e}:t;this._scrollTo(i)}scrollBy(t,e){const i="number"==typeof t&&"number"==typeof e?{left:t,top:e}:t;void 0!==i.top&&(i.top+=this.scrollTop),void 0!==i.left&&(i.left+=this.scrollLeft),this._scrollTo(i)}_nativeScrollTo(t){this._originalScrollTo.bind(this._element||window)(t)}_scrollTo(t,e=null,i=null){null!==this._end&&this._end(),"smooth"===t.behavior?(this._setDestination(t),this._retarget=e,this._end=i):this._resetScrollState(),this._nativeScrollTo(t)}_setDestination(t){let{top:e,left:i}=t;return e=void 0===e?void 0:Math.max(0,Math.min(e,this.maxScrollTop)),i=void 0===i?void 0:Math.max(0,Math.min(i,this.maxScrollLeft)),(null===this._destination||i!==this._destination.left||e!==this._destination.top)&&(this.__destination={top:e,left:i,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(t){this._destination&&this._setDestination(t)&&this._nativeScrollTo(this._destination)}managedScrollTo(t,e,i){return this._scrollTo(t,e,i),this._updateManagedScrollTo}correctScrollError(t){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(t),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(null!==this._destination){const{scrollTop:t,scrollLeft:e}=this;let{top:i,left:r}=this._destination;i=Math.min(i||0,this.maxScrollTop),r=Math.min(r||0,this.maxScrollLeft);const o=Math.abs(i-t),n=Math.abs(r-e);o<1&&n<1&&(this._end&&this._end(),this._resetScrollState())}}detach(t){return this._clients.delete(t),0===this._clients.size&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(t){this._clients.add(t),1===this._clients.size&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Qc="undefined"!=typeof window?window.ResizeObserver:void 0;const th=Symbol("virtualizerRef"),eh="virtualizer-sizer";let ih;class rh{constructor(t){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!t)throw new Error("Virtualizer constructor requires a configuration object");if(!t.hostElement)throw new Error('Virtualizer configuration requires the "hostElement" property');this._init(t)}set items(t){Array.isArray(t)&&t!==this._items&&(this._itemsChanged=!0,this._items=t,this._schedule(this._updateLayout))}_init(t){this._isScroller=!!t.scroller,this._initHostElement(t);const e=t.layout||{};this._layoutInitialized=this._initLayout(e)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new Qc(()=>this._hostElementSizeChanged()),this._childrenRO=new Qc(this._childrenSizeChanged.bind(this))}_initHostElement(t){const e=this._hostElement=t.hostElement;this._applyVirtualizerStyles(),e[th]=this}connected(){this._initObservers();const t=this._isScroller;this._clippingAncestors=function(t,e=!1){let i=!1;return function(t,e=!1){const i=[];let r=e?t:nh(t);for(;null!==r;)i.push(r),r=nh(r);return i}(t,e).filter(t=>{if(i)return!1;const e=getComputedStyle(t);return i="fixed"===e.position,"visible"!==e.overflow})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */(this._hostElement,t),this._scrollerController=new Zc(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(t=>{t.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(t),this._hostElementRO.observe(t)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(t=>this._childrenRO.observe(t)),this._scrollEventListeners.forEach(t=>t.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(t=>t.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){const t=this._hostElement.style;t.display=t.display||"block",t.position=t.position||"relative",t.contain=t.contain||"size layout",this._isScroller&&(t.overflow=t.overflow||"auto",t.minHeight=t.minHeight||"150px")}_getSizer(){const t=this._hostElement;if(!this._sizer){let e=t.querySelector(`[${eh}]`);e||(e=document.createElement("div"),e.setAttribute(eh,""),t.appendChild(e)),Object.assign(e.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),e.textContent="&nbsp;",e.setAttribute(eh,""),this._sizer=e}return this._sizer}async updateLayoutConfig(t){await this._layoutInitialized;const e=t.type||ih;if("function"==typeof e&&this._layout instanceof e){const e={...t};return delete e.type,this._layout.config=e,!0}return!1}async _initLayout(t){let e,i;if("function"==typeof t.type){i=t.type;const r={...t};delete r.type,e=r}else e=t;void 0===i&&(ih=i=(await import("./flow-DCUyAMWo.js")).FlowLayout),this._layout=new i(t=>this._handleLayoutMessage(t),e),this._layout.measureChildren&&"function"==typeof this._layout.updateItemSizes&&("function"==typeof this._layout.measureChildren&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){null===this._benchmarkStart&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(null!==this._benchmarkStart){const t=window.performance.now(),e=t-this._benchmarkStart,i=performance.getEntriesByName("uv-virtualizing","measure").filter(e=>e.startTime>=this._benchmarkStart&&e.startTime<t).reduce((t,e)=>t+e.duration,0);return this._benchmarkStart=null,{timeElapsed:e,virtualizationTime:i}}return null}_measureChildren(){const t={},e=this._children,i=this._measureChildOverride||this._measureChild;for(let r=0;r<e.length;r++){const o=e[r],n=this._first+r;(this._itemsChanged||this._toBeMeasured.has(o))&&(t[n]=i.call(this,o,this._items[n]))}this._childMeasurements=t,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(t){const{width:e,height:i}=t.getBoundingClientRect();return Object.assign({width:e,height:i},function(t){const e=window.getComputedStyle(t);return{marginTop:oh(e.marginTop),marginRight:oh(e.marginRight),marginBottom:oh(e.marginBottom),marginLeft:oh(e.marginLeft)}}(t))}async _schedule(t){this._scheduled.has(t)||(this._scheduled.add(t),await Promise.resolve(),this._scheduled.delete(t),t.call(this))}async _updateDOM(t){this._scrollSize=t.scrollSize,this._adjustRange(t.range),this._childrenPos=t.childPositions,this._scrollError=t.scrollError||null;const{_rangeChanged:e,_itemsChanged:i}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(e||i)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(t=>this._childrenRO.observe(t)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),null!==this._childMeasurements&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(t){console.warn("Error measuring performance data: ",t)}window.performance.mark("uv-start")}!1===this._scrollerController.correctingScrollError&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(t){if("scroll"===t.type)(t.currentTarget===window||this._clippingAncestors.includes(t.currentTarget))&&this._handleScrollEvent();else console.warn("event not handled",t)}_handleLayoutMessage(t){"stateChanged"===t.type?this._updateDOM(t):"visibilityChanged"===t.type?(this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._notifyVisibility()):"unpinned"===t.type&&this._hostElement.dispatchEvent(new Gc)}get _children(){const t=[];let e=this._hostElement.firstElementChild;for(;e;)e.hasAttribute(eh)||t.push(e),e=e.nextElementSibling;return t}_updateView(){const t=this._hostElement,e=this._scrollerController?.element,i=this._layout;if(t&&e&&i){let r,o,n,s;const a=t.getBoundingClientRect();r=0,o=0,n=window.innerHeight,s=window.innerWidth;const l=this._clippingAncestors.map(t=>t.getBoundingClientRect());l.unshift(a);for(const t of l)r=Math.max(r,t.top),o=Math.max(o,t.left),n=Math.min(n,t.bottom),s=Math.min(s,t.right);const c=e.getBoundingClientRect(),h={left:a.left-c.left,top:a.top-c.top},d={width:e.scrollWidth,height:e.scrollHeight},p=r-a.top+t.scrollTop,u=o-a.left+t.scrollLeft,f=Math.max(0,n-r),m=Math.max(0,s-o);i.viewportSize={width:m,height:f},i.viewportScroll={top:p,left:u},i.totalScrollSize=d,i.offsetWithinScroller=h}}_sizeHostElement(t){const e=82e5,i=t&&null!==t.width?Math.min(e,t.width):0,r=t&&null!==t.height?Math.min(e,t.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${i}px, ${r}px)`;else{const t=this._hostElement.style;t.minWidth=i?`${i}px`:"100%",t.minHeight=r?`${r}px`:"100%"}}_positionChildren(t){t&&t.forEach(({top:t,left:e,width:i,height:r,xOffset:o,yOffset:n},s)=>{const a=this._children[s-this._first];a&&(a.style.position="absolute",a.style.boxSizing="border-box",a.style.transform=`translate(${e}px, ${t}px)`,void 0!==i&&(a.style.width=i+"px"),void 0!==r&&(a.style.height=r+"px"),a.style.left=void 0===o?null:o+"px",a.style.top=void 0===n?null:n+"px")})}async _adjustRange(t){const{_first:e,_last:i,_firstVisible:r,_lastVisible:o}=this;this._first=t.first,this._last=t.last,this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==e||this._last!==i,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==r||this._lastVisible!==o}_correctScrollError(){if(this._scrollError){const{scrollTop:t,scrollLeft:e}=this._scrollerController,{top:i,left:r}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:t-i,left:e-r})}}element(t){return t===1/0&&(t=this._items.length-1),void 0===this._items?.[t]?void 0:{scrollIntoView:(e={})=>this._scrollElementIntoView({...e,index:t})}}_scrollElementIntoView(t){if(t.index>=this._first&&t.index<=this._last)this._children[t.index-this._first].scrollIntoView(t);else if(t.index=Math.min(t.index,this._items.length-1),"smooth"===t.behavior){const e=this._layout.getScrollIntoViewCoordinates(t),{behavior:i}=t;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(e,{behavior:i}),()=>this._layout.getScrollIntoViewCoordinates(t),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=t}else this._layout.pin=t}_checkScrollIntoViewTarget(t){const{index:e}=this._scrollIntoViewTarget||{};e&&t?.has(e)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new Jc({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new Yc({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((t,e)=>{this._layoutCompleteResolver=t,this._layoutCompleteRejecter=e})),this._layoutCompletePromise}_rejectLayoutCompletePromise(t){null!==this._layoutCompleteRejecter&&this._layoutCompleteRejecter(t),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&null===this._pendingLayoutComplete&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){null!==this._layoutCompleteResolver&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(t){if(this._layout?.measureChildren){for(const e of t)this._toBeMeasured.set(e.target,e.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function oh(t){const e=t?parseFloat(t):NaN;return Number.isNaN(e)?0:e}function nh(t){if(null!==t.assignedSlot)return t.assignedSlot;if(null!==t.parentElement)return t.parentElement;const e=t.parentNode;return e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host||null}const sh=t=>t,ah=(t,e)=>U`${e}: ${JSON.stringify(t,null,2)}`;const lh=tl(class extends zl{constructor(t){if(super(t),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(t,e)=>ah(t,e+this._first),this._keyFunction=(t,e)=>sh(t,this._first),this._items=[],t.type!==Xa)throw new Error("The virtualize directive can only be used in child expressions")}render(t){t&&this._setFunctions(t);const e=[];if(this._first>=0&&this._last>=this._first)for(let t=this._first;t<=this._last;t++)e.push(this._items[t]);return Kc(e,this._keyFunction,this._renderItem)}update(t,[e]){this._setFunctions(e);const i=this._items!==e.items;return this._items=e.items||[],this._virtualizer?this._updateVirtualizerConfig(t,e):this._initialize(t,e),i?j:this.render()}async _updateVirtualizerConfig(t,e){if(!await this._virtualizer.updateLayoutConfig(e.layout||{})){const i=t.parentNode;this._makeVirtualizer(i,e)}this._virtualizer.items=this._items}_setFunctions(t){const{renderItem:e,keyFunction:i}=t;e&&(this._renderItem=(t,i)=>e(t,i+this._first)),i&&(this._keyFunction=(t,e)=>i(t,e+this._first))}_makeVirtualizer(t,e){this._virtualizer&&this._virtualizer.disconnected();const{layout:i,scroller:r,items:o}=e;this._virtualizer=new rh({hostElement:t,layout:i,scroller:r}),this._virtualizer.items=o,this._virtualizer.connected()}_initialize(t,e){const i=t.parentNode;i&&1===i.nodeType&&(i.addEventListener("rangeChanged",t=>{this._first=t.first,this._last=t.last,this.setValue(this.render())}),this._makeVirtualizer(i,e))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}});
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ch extends st{constructor(){super(...arguments),this.items=[],this.renderItem=ah,this.keyFunction=sh,this.layout={},this.scroller=!1}createRenderRoot(){return this}render(){const{items:t,renderItem:e,keyFunction:i,layout:r,scroller:o}=this;return U`${lh({items:t,renderItem:e,keyFunction:i,layout:r,scroller:o})}`}element(t){return this[th]?.element(t)}get layoutComplete(){return this[th]?.layoutComplete}scrollToIndex(t,e="start"){this.element(t)?.scrollIntoView({block:e})}}qc([vs({attribute:!1})],ch.prototype,"items",void 0),qc([vs()],ch.prototype,"renderItem",void 0),qc([vs()],ch.prototype,"keyFunction",void 0),qc([vs({attribute:!1})],ch.prototype,"layout",void 0),qc([vs({reflect:!0,type:Boolean})],ch.prototype,"scroller",void 0),
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
customElements.define("lit-virtualizer",ch);var hh=s`
  :root,
  :host,
  .sl-theme-light {
    --sl-font-sans: 'Roboto', 'Helvetica Neue';

    /* The following colors are set via app-configuration:
        --sl-color-primary
        --sl-color-primary-text
        --sl-color-secondary
        --sl-color-secondary-text
      */

    --sl-color-primary-50: var(--sl-color-primary);
    --sl-color-primary-100: var(--sl-color-primary);
    --sl-color-primary-200: var(--sl-color-primary);
    --sl-color-primary-300: var(--sl-color-primary);
    --sl-color-primary-400: var(--sl-color-primary);
    --sl-color-primary-500: var(--sl-color-primary);
    --sl-color-primary-600: var(--sl-color-primary);
    --sl-color-primary-700: var(--sl-color-primary);
    --sl-color-primary-800: var(--sl-color-primary);
    --sl-color-primary-900: var(--sl-color-primary);

    /* --sl-color-secondary set via app-configuration */
    --sl-color-secondary: var(--primary-color);
    --sl-color-secondary-50: var(--sl-color-secondary);
    --sl-color-secondary-100: var(--sl-color-secondary);
    --sl-color-secondary-200: var(--sl-color-secondary);
    --sl-color-secondary-300: var(--sl-color-secondary);
    --sl-color-secondary-400: var(--sl-color-secondary);
    --sl-color-secondary-500: var(--sl-color-secondary);
    --sl-color-secondary-600: var(--sl-color-secondary);
    --sl-color-secondary-700: var(--sl-color-secondary);
    --sl-color-secondary-800: var(--sl-color-secondary);
    --sl-color-secondary-900: var(--sl-color-secondary);

    /* Katapult Brand Grey Palletized via https://m2.material.io/design/color/the-color-system.html#tools-for-picking-colors */
    --sl-color-neutral-50: #f9faf9;
    --sl-color-neutral-100: #f3f4f3;
    --sl-color-neutral-200: #ebeceb;
    --sl-color-neutral-300: #dcdddc;
    --sl-color-neutral-400: #b9bab9;
    --sl-color-neutral-500: #9a9b9a;
    --sl-color-neutral-600: #717271;
    --sl-color-neutral-700: #5d5e5d;
    --sl-color-neutral-800: #3e3f3e;
    --sl-color-neutral-900: #1e1f1e;
    --sl-color-neutral: var(--sl-color-neutral-600);

    /* Google Material Green */
    --sl-color-success-50: #f1f8e9;
    --sl-color-success-100: #dcedc8;
    --sl-color-success-200: #c5e1a5;
    --sl-color-success-300: #aed581;
    --sl-color-success-400: #9ccc65;
    --sl-color-success-500: #8bc34a;
    --sl-color-success-600: #7cb342;
    --sl-color-success-700: #689f38;
    --sl-color-success-800: #558b2f;
    --sl-color-success-900: #33691e;
    --sl-color-success: var(--sl-color-success-500);

    /* Google Material Amber */
    --sl-color-warning-50: #fff8e1;
    --sl-color-warning-100: #ffecb3;
    --sl-color-warning-200: #ffe082;
    --sl-color-warning-300: #ffd54f;
    --sl-color-warning-400: #ffca28;
    --sl-color-warning-500: #ffc107;
    --sl-color-warning-600: #ffb300;
    --sl-color-warning-700: #ffa000;
    --sl-color-warning-800: #ff8f00;
    --sl-color-warning-900: #ff6f00;
    --sl-color-warning: var(--sl-color-warning-500);

    /* Google Material Red */
    --sl-color-danger-50: #ffebee;
    --sl-color-danger-100: #ffcdd2;
    --sl-color-danger-200: #ef9a9a;
    --sl-color-danger-300: #e57373;
    --sl-color-danger-400: #ef5350;
    --sl-color-danger-500: #f44336;
    --sl-color-danger-600: #e53935;
    --sl-color-danger-700: #d32f2f;
    --sl-color-danger-800: #c62828;
    --sl-color-danger-900: #b71c1c;
    --sl-color-danger: var(--sl-color-danger-500);
  }
  .sl-toast-stack {
    top: 3.5rem;
  }
  sl-button[variant='default']:not([disabled]):hover::part(base) {
    background-color: var(--sl-color-neutral-0);
  }
  /* SlSelect Material Style */
  sl-select[look-like-paper-element]::part(combobox) {
    border: none;
    --sl-input-placeholder-color: var(--sl-color-neutral-600);
    --sl-focus-ring-width: 0;
    background: none;
  }
  sl-select[look-like-paper-element]::part(expand-icon) {
    height: 0;
    width: 0;
    border-top: 5px solid var(--sl-color-primary);
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
  }
  sl-dropdown[look-like-paper-element] sl-button::part(base) {
    border: none;
    --sl-input-placeholder-color: var(--sl-color-neutral-600);
    --sl-focus-ring-width: 0;
    background: none;
    font-size: 16px;
    color: var(--primary-text-color);
    font-weight: normal;
  }
  sl-dropdown[look-like-paper-element] sl-button::part(caret) {
    align-self: center;
    height: 0;
    width: 0;
    border-top: 5px solid var(--sl-color-primary);
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
  }
  /* SlInput Material Style */
  sl-input[look-like-paper-element]::part(base) {
    border: none;
    --sl-focus-ring-width: 0;
  }
  sl-input[look-like-paper-element]::part(input) {
    border-bottom: var(--sl-input-paper-border-bottom-width, 1px) solid var(--sl-color-neutral-900);
  }
  sl-input[look-like-paper-element]::part(input):focus {
    border-bottom: 2px solid var(--sl-color-primary);
  }
  /* Katapult Drop Down Material Style */
  katapult-dropdown[look-like-paper-element]::part(expand-icon) {
    height: 0;
    width: 0;
    border-top: 5px solid var(--sl-color-primary);
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
  }
`;class dh extends st{static DEFAULT_RENDER_ITEM=function(t,e,i){return U` <sl-menu-item value=${t.value} ?disabled=${t?.disabled}>${t.label}</sl-menu-item>`};static properties={open:{type:Boolean,reflect:!0},placement:{type:String},stayOpenOnSelect:{type:Boolean,attribute:"stay-open-on-select",reflect:!0},containingElement:{type:Object},hoist:{type:Boolean},autocomplete:{type:String},size:{type:String},filled:{type:Boolean},pill:{type:Boolean},label:{type:String},helpText:{type:String},clearable:{type:Boolean},placeholder:{type:String},disabled:{type:Boolean},items:{type:Array,shouldUpdate:!1},value:{type:String,shouldUpdate:!1},renderItem:{type:Function},autoFilter:{type:Boolean,attribute:"auto-filter",reflect:!0,shouldUpdate:!1},lookLikePaperElement:{type:Boolean,attribute:"look-like-paper-element",reflect:!0},_filteredItems:{type:Array,state:!0},_userInput:{type:String,shouldUpdate:!1,state:!0},_valueLabel:{type:String,shouldUpdate:!1,state:!0},_inputValue:{type:String,state:!0},_virtualizerRange:{type:Object,state:!0,shouldUpdate:!1},_highlightIndex:{type:Number,state:!0,shouldUpdate:!1},_highlightElement:{type:Object,state:!0,shouldUpdate:!1},_selectedElement:{type:Object,state:!0,shouldUpdate:!1}};static styles=[hh,n(zn),s`
      /* Add your component styles here */
      :host {
        display: contents;
      }

      sl-dropdown {
        min-width: 300px;
        height: inherit;
        width: inherit;
      }

      sl-menu {
        min-width: 300px;
      }

      sl-menu-item::part(base) {
        margin: 2px 0;
      }

      lit-virtualizer > * {
        width: -webkit-fill-available;
      }

      /* Sl Menu Item Selected Style */
      lit-virtualizer > sl-menu-item.selected {
        background: var(--sl-color-neutral-50);
        color: var(--sl-color-neutral-800);
        font-weight: var(--sl-font-weight-bold);
      }
      lit-virtualizer > sl-menu-item.selected::part(base) {
        color: inherit;
        font-weight: inherit;
      }

      /* Sl Menu Item Highlight Style */
      lit-virtualizer > sl-menu-item.highlight::part(base) {
        background: var(--primary-color, var(--sl-color-gray-400));
        color: var(--sl-color-neutral-0);
      }

      sl-input::part(clear-button) {
        color: var(--primary-color, var(--sl-color-gray-400))
      }

      .footer {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: var(--sl-spacing-sx-small);
        padding: var(--sl-spacing-2x-small);
        font-size: var(--sl-font-size-small);
        font-weight: var(--sl-font-weight-semibold);
        color: var(--sl-color-neutral-500);
      }
    `];render(){return U`
      <sl-dropdown
        ${Fl(this._dropdownRef)}
        part="dropdown"
        .open=${this.open}
        .placement=${this.placement}
        .hoist=${this.hoist}
        .stayOpenOnSelect=${this.stayOpenOnSelect}
        .containingElement=${this.containingElement}
        sync="width"
        @sl-select=${t=>this.#a(t.detail.item)}
        @sl-show=${()=>{this.open=!0,this.#l(),window.addEventListener("keydown",this._keydownHandler),setTimeout(()=>this.#c(this._selectedIndex,"center"))}}
        @sl-hide=${()=>{this.open=!1,this.blur(),this.#h(),window.removeEventListener("keydown",this._keydownHandler)}}
      >
        <sl-input
          ${Fl(this._inputRef)}
          ?look-like-paper-element=${this.lookLikePaperElement}
          slot="trigger"
          part="input"
          .value=${this._inputValue}
          .autocomplete=${this.autocomplete}
          .size=${this.size}
          ?filled=${this.filled}
          ?pill=${this.pill}
          .label=${this.label}
          .helpText=${this.helpText}
          .clearable=${this.clearable}
          .disabled=${this.disabled}
          .placeholder=${this.placeholder}
          @focus=${t=>t.currentTarget.select()}
          @blur=${t=>{t.target.value=this._inputValue}}
          @click=${t=>{t.stopPropagation(),this.show()}}
          @sl-input=${t=>this._userInput=t.currentTarget.value}
          @keydown=${t=>{["ArrowDown","ArrowUp"].includes(t.code)&&t.preventDefault(),"Enter"===t.code&&(t.stopPropagation(),this.#d()),"Space"==t.code&&t.stopPropagation()}}
          @sl-clear=${this.clear.bind(this)}
        >
          <slot name="label">${this.label}</slot>
          <slot name="prefix" slot="prefix"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <slot name="help-text">${this.helpText}</slot>
          ${lt(!this.clearable||!this._inputValue,()=>U`
              <sl-icon
                library="system"
                name="chevron-down"
                style=${Vc({color:"var(--sl-input-icon-color)",transition:"transform 0.3s",transform:this.open?"rotate(-180deg)":"rotate(0deg)"})}
                part="expand-icon"
                slot="suffix"
              >
              </sl-icon>
            `)}
          ${lt(this.clearable,()=>U`
              <sl-icon small library="material" slot="clear-icon" name="clear"></sl-icon>
            `)}
        </sl-input>
        <sl-menu part="menu">
          <lit-virtualizer
            ${Fl(this._virtualizerRef)}
            part="virtualizer"
            .renderItem=${(t,e)=>lt(void 0!==t,()=>this.renderItem(t,e,this._filteredItems))}
            .keyFunction=${t=>t?.value}
            .items=${this._filteredItems}
            @rangeChanged=${t=>this._virtualizerRange={first:t.first,last:t.last}}
          ></lit-virtualizer>
          ${lt(0===this._filteredItems.length,()=>U`
              <div class="footer">
                <material-icon icon="search_off"></material-icon>
                <span>No Results</span>
              </div>
            `)}
        </sl-menu>
      </sl-dropdown>
    `}constructor(){super(),this._inputRef=Dl(),this._dropdownRef=Dl(),this._virtualizerRef=Dl(),this.open=!1,this.placement="bottom",this.disabled=!1,this.stayOpenOnSelect=!1,this.containingElement=void 0,this.hoist=!1,this.autocomplete="off",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.placeholder="",this.items=[],this.value="",this.renderItem=dh.DEFAULT_RENDER_ITEM,this.autoFilter=!1,this.lookLikePaperElement=!1,this._filteredItems=[],this._userInput=null,this._inputValue="",this._selectedIndex=-1,this._selectedElement=null,this._highlightIndex=0,this._highlightElement=null,this._virtualizerRange={first:-1,last:-1},this._keydownHandler=t=>{if(t instanceof KeyboardEvent!=!1)switch(t.code){case"ArrowDown":{t.preventDefault();const e=this._filteredItems.length-1,i=this._highlightIndex===e?0:this._highlightIndex+1;this.#c(i);break}case"ArrowUp":{t.preventDefault();const e=this._filteredItems.length-1,i=0===this._highlightIndex?e:this._highlightIndex-1;this.#c(i);break}case"Enter":this.#d()}}}disconnectedCallback(){window.removeEventListener("keydown",this._keydownHandler)}shouldUpdate(t){if(t.has("value")&&(this.value??=""),t.has("disabled")&&this.disabled&&this.hide(),t.has("value")&&this.dispatchEvent(new CustomEvent("value-changed")),t.has("_userInput")&&void 0!==t.get("_userInput")&&this.dispatchEvent(new CustomEvent("user-input",{detail:{value:this._userInput??""}})),["items","_userInput","autoFilter"].some(e=>t.has(e))){const t=this.items??[],e=this._userInput?.trim().toLowerCase()??"";if(this.autoFilter&&""!==e){const i=t.filter(t=>(t.label?.trim().toLowerCase()??"").includes(e));this._filteredItems=i}else this._filteredItems=t}if(["value","items"].some(e=>t.has(e)))if(""===this.value)this._valueLabel="";else{const t=this.items.find(t=>t.value===this.value)?.label??"";""!==t&&(this._valueLabel=t)}["_userInput","_valueLabel"].some(e=>t.has(e))&&(this._inputValue=this._userInput??this._valueLabel??""),["value","_filteredItems"].some(e=>t.has(e))&&(this._selectedIndex=this._filteredItems.findIndex(t=>t.value===this.value)),["_selectedIndex","_virtualizerRange"].some(e=>t.has(e))&&this.#p(),t.has("_selectedElement")&&(t.get("_selectedElement")?.classList.remove("selected"),this._selectedElement?.classList.add("selected")),t.has("_filteredItems")&&this.#c(0,"start"),["_highlightIndex","_filteredItems"].some(e=>t.has(e))&&(this._highlightIndex=this.clamp(this._highlightIndex,0,this._filteredItems.length-1)),["_highlightIndex","_virtualizerRange"].some(e=>t.has(e))&&this.#u(),t.has("_highlightElement")&&(t.get("_highlightElement")?.classList.remove("highlight"),this._highlightElement?.classList.add("highlight"));const e=this.shadowRoot.querySelector("slot[name=label]"),i=this.shadowRoot.querySelector("slot[name=help-text]");let r=!1;if(e||i){const t=!!(e?.innerText||e?.assignedElements()?.length>0),o=!!(i?.innerText||i?.assignedElements()?.length>0);t&&!e.hasAttribute("slot")?(e.setAttribute("slot","label"),r=!0):!t&&e.hasAttribute("slot")&&(e.removeAttribute("slot"),r=!0),o&&!i.hasAttribute("slot")?(i.setAttribute("slot","help-text"),r=!0):!o&&i.hasAttribute("slot")&&(i.removeAttribute("slot"),r=!0)}const o=0==t.size,n=Array.from(t.keys()).some(t=>!1!==this.constructor.properties[t].shouldUpdate);return o||n||r}show(){const t=this._dropdownRef.value;t&&(!0!==t.open&&t.show(),this.#l())}hide(){const t=this._dropdownRef.value;t&&!1!==t.open&&t.hide()}clear(){this.#h(),this.#f("")}clamp(t,e,i){return null==i&&(i=1/0),null==e&&(e=-1/0),t>i?i:t<e?e:t}#a(t){if(!t)return;const e=new CustomEvent("select",{cancelable:!0,detail:{item:t}});if(!this.dispatchEvent(e))return;null!=t.getAttribute("value")&&(this.#f(t.value),this.#h()),this.stayOpenOnSelect||this.hide()}#d(){this.#a(this._highlightElement)}#f(t){const e=t??"";this.value!=e&&(this.value=e,this.dispatchEvent(new CustomEvent("change")))}#h(){this._userInput=null}#p(){const t=this._virtualizerRef.value,e=this._virtualizerRange.first;if(!t||-1===e)return void(this._selectedElement=null);const i=this._selectedIndex-this._virtualizerRange.first,r=t.children[i]??null;this._selectedElement=r}#c(t,e="nearest"){this._highlightIndex=this.clamp(t,0,this._filteredItems.length-1);const i=this._virtualizerRef.value;i?.scrollToIndex(this._highlightIndex,e)}#u(){const t=this._virtualizerRef.value,e=this._virtualizerRange.first;if(!t||-1===e)return void(this._highlightElement=null);const i=this._highlightIndex-this._virtualizerRange.first,r=t.children[i]??null;this._highlightElement=r}#l(){const t=this._inputRef.value;t&&t.focus()}}window.customElements.define("katapult-dropdown",dh);window.customElements.define("katapult-job-dropdown",class extends st{static properties={_jobData:{type:Array,state:!0},_jobNames:{type:Array,state:!0},_apiKey:{type:String},_currentJobData:{type:Object}};render(){return U`
      ${lt(!this._jobNames||0==this._jobNames.length,()=>U`
          <katapult-dropdown
            .disabled=${!0}
            .placeholder=${"Loading..."}
            .lookLikePaperElement=${!0}
          ></katapult-dropdown>
        `)}
      ${lt(this._jobNames?.length>0,()=>U`
          <katapult-dropdown
            id="active-dropdown"
            .hoist=${!0}
            .clearable=${!0}
            .autoFilter=${!0}
            .items=${this._jobNames}
            .lookLikePaperElement=${!0}
            .placeholder=${"Select a Job"}
            @change=${t=>this.#m(t)}
          ></katapult-dropdown>
        `)}
    `}constructor(){super();const t=new Date,e=localStorage.getItem("apiKey")?JSON.parse(localStorage.getItem("apiKey")):"";t>=e?.expiry&&localStorage.removeItem("apiKey");const i=localStorage.getItem("db")?JSON.parse(localStorage.getItem("db")):"";t>=i?.expiry&&localStorage.removeItem("db"),this._jobData=[],this._jobNames=[],this._apiKey=e?.data?gc(e.data):"",this._currentJobData={},window.addEventListener("apiChange",async t=>{this._apiKey=gc(t.detail?.key),this._apiKey?await this.#g(t.detail.db):null==t.detail&&(this.shadowRoot.getElementById("active-dropdown").setAttribute("value",""),this._currentJobData={},this.dispatchEvent(new CustomEvent("change")))}),this._apiKey&&this.#g(i?.data)}getSelectedJob(){return this._currentJobData||{}}#m(t){const e=this._jobData.filter(e=>e.name===t.currentTarget.value)[0]||{};this._currentJobData=e,this.dispatchEvent(new CustomEvent("change"))}async#g(t){setTimeout(async()=>{const e=await fetch(`${t}/api/v3/jobs?api_key=${this._apiKey}`,{method:"GET"}).then(t=>t.json());this._jobData=e.data,this._jobData&&(this._jobNames=this._jobData.map(t=>({value:t.name,label:t.name}))),this.requestUpdate()},200)}});class ph extends st{static properties={supportNum:{type:String},supportEmail:{type:String},companyName:{type:String},logoLink:{type:String}};static styles=[n(Nn),n(zn),s`
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
      body {
        height: 100vh;
        margin: 0;
      }
      #main {
        display: flex;
        flex-direction: column;
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
    `];render(){return U`
    <!doctype html>
    <html lang="en">
    <head>
      <title>Extension Page</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1, user-scalable=yes" />
      <!-- Material Icons -->
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <!-- Material Symbols -->
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        rel="stylesheet"
      />
      <!-- Shoelace -->
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.1/cdn/themes/light.css" />
      <meta name="theme-color" content="#003E51" />
      <script type="module" src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.1/cdn/shoelace-autoloader.js"></script>
    </head>
    <body>
      <katapult-authentication>
        <main id="main">
          <katapult-toolbar
            .supportNum=${this.supportNum}
            .supportEmail=${this.supportEmail}
            .companyName=${this.companyName}
            .logoLink=${this.logoLink}
          >
            <slot name="toolbar-left-of-logo" slot="left-of-logo"></slot>
            <slot name="toolbar-left" slot="left"></slot>
            <slot name="toolbar-center" slot="center"></slot>
            <slot name="toolbar-right" slot="right"></slot>
          </katapult-toolbar>
          <!-- 100% minus the toolbar -->
          <div part="content-wrapper" style="overflow: auto; flex-grow: 1;">
            <slot></slot>
          </div>
        </main>
      </katapult-authentication>
    </body>
    `}constructor(){super(),this.supportNum="",this.supportEmail="",this.companyName="",this.logoLink="",Xl("material",{resolver:t=>{const e=t.match(/^(.*?)(_(round|sharp))?$/);return`https://material-icons.github.io/material-icons/svg/${e[1]}/${e[3]||"outline"}.svg`},mutator:t=>t.setAttribute("fill","currentColor")}),cl("dropdown.hide",{keyframes:[{opacity:"0"},{opacity:"0"}],options:{duration:100}}),cl("dropdown.show",{keyframes:[{opacity:"1"},{opacity:"1"}],options:{duration:100}})}}window.customElements.define("katapult-page-element",ph);var uh=s`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,fh=class extends Ss{constructor(){super(...arguments),this.hasSlotController=new jl(this,"footer","header","image")}render(){return U`
      <div
        part="base"
        class=${il({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};fh.styles=[_s,uh],fh.define("sl-card");class mh extends st{static properties={jobData:{type:Array}};static styles=[n(mc),s`
      :host {
        --primary-color: var(--paper-light-green-500);
        --secondary-color: var(--paper-light-green-600);
        --accent-color: var(--paper-amber-600);
      }
      katapult-page-element::part(content-wrapper) {
        align-content: center;
      }
      sl-card::part(body) {
        display: flex;
        flex-direction: row;
      }
  `];render(){return U`
      <!-- Page Element Content -->
      <katapult-page-element .supportNum=${"111-111-1111"} .supportEmail=${"email@company.com"} .companyName=${"Company Name"} .logoLink=${""} .includeToolbarJobPicker=${!0}>
        <!-- Slotted content -->
        <katapult-job-dropdown id="job-dropdown" slot="toolbar-left" @change=${()=>this.displayJobData()}></katapult-job-dropdown>

        <!-- Default Slot Content -->
        ${lt(this.jobData?.length>0,()=>U`
            <sl-card flex row style="justify-self: center; text-align: center;">
              ${ct(this.jobData,t=>U`
                <div style="width: fit-content; margin: 0 12px;">
                  <div style="color: var(--primary-color, black);"><strong>${t.name}</strong></div>
                  <div>${t.value}</div>
                </div>
                `)}
            </sl-card>
          `)}
      </katapult-page-element>
    `}constructor(){super()}displayJobData(){const t=this.shadowRoot.getElementById("job-dropdown").getSelectedJob();this.jobData=Object.entries(t).map(t=>({name:t[0],value:t[1]}))}}window.customElements.define("main-page",mh);export{mh as MainPage};
