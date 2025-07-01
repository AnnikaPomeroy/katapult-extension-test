/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),o=new WeakMap;let n=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=o.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o.set(i,t))}return t}toString(){return this.cssText}};const r=t=>new n("string"==typeof t?t:t+"",void 0,i),s=(t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new n(o,t,i)},a=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return r(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,f=globalThis,m=f.trustedTypes,g=m?m.emptyScript:"",b=f.reactiveElementPolyfillSupport,_=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>!l(t,e),w={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:v};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,e);void 0!==o&&c(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){const{get:o,set:n}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:o,set(e){const r=o?.call(this);n?.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){const t=this.properties,e=[...h(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,o)=>{if(e)i.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of o){const o=document.createElement("style"),n=t.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,i.appendChild(o)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(void 0!==o&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,o=i._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=i.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=o,this[o]=n.fromAttribute(e,t.type)??this._$Ej?.get(o)??null,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const o=this.constructor,n=this[t];if(i??=o.getPropertyOptions(t),!((i.hasChanged??v)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:o,wrapped:n},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==n||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===o&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,o=this[e];!0!==t||this._$AL.has(e)||void 0===o||this.C(e,void 0,i,o)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[_("elementProperties")]=new Map,x[_("finalized")]=new Map,b?.({ReactiveElement:x}),(f.reactiveElementVersions??=[]).push("2.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const C=globalThis,S=C.trustedTypes,k=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,P="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,A="?"+E,$=`<${A}>`,T=document,O=()=>T.createComment(""),N=t=>null===t||"object"!=typeof t&&"function"!=typeof t,I=Array.isArray,D="[ \t\n\f\r]",L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,M=/>/g,R=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),F=/'/g,H=/"/g,B=/^(?:script|style|textarea|title)$/i,U=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),j=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),q=new WeakMap,W=T.createTreeWalker(T,129);function K(t,e){if(!I(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(e):e}const J=(t,e)=>{const i=t.length-1,o=[];let n,r=2===e?"<svg>":3===e?"<math>":"",s=L;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,d=0;for(;d<i.length&&(s.lastIndex=d,l=s.exec(i),null!==l);)d=s.lastIndex,s===L?"!--"===l[1]?s=z:void 0!==l[1]?s=M:void 0!==l[2]?(B.test(l[2])&&(n=RegExp("</"+l[2],"g")),s=R):void 0!==l[3]&&(s=R):s===R?">"===l[0]?(s=n??L,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?R:'"'===l[3]?H:F):s===H||s===F?s=R:s===z||s===M?s=L:(s=R,n=void 0);const h=s===R&&t[e+1].startsWith("/>")?" ":"";r+=s===L?i+$:c>=0?(o.push(a),i.slice(0,c)+P+i.slice(c)+E+h):i+E+(-2===c?e:h)}return[K(t,r+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),o]};class Y{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let n=0,r=0;const s=t.length-1,a=this.parts,[l,c]=J(t,e);if(this.el=Y.createElement(l,i),W.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=W.nextNode())&&a.length<s;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(P)){const e=c[r++],i=o.getAttribute(t).split(E),s=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:s[2],strings:i,ctor:"."===s[1]?tt:"?"===s[1]?et:"@"===s[1]?it:Q}),o.removeAttribute(t)}else t.startsWith(E)&&(a.push({type:6,index:n}),o.removeAttribute(t));if(B.test(o.tagName)){const t=o.textContent.split(E),e=t.length-1;if(e>0){o.textContent=S?S.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],O()),W.nextNode(),a.push({type:2,index:++n});o.append(t[e],O())}}}else if(8===o.nodeType)if(o.data===A)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=o.data.indexOf(E,t+1));)a.push({type:7,index:n}),t+=E.length-1}n++}}static createElement(t,e){const i=T.createElement("template");return i.innerHTML=t,i}}function G(t,e,i=t,o){if(e===j)return e;let n=void 0!==o?i._$Co?.[o]:i._$Cl;const r=N(e)?void 0:e._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(t),n._$AT(t,i,o)),void 0!==o?(i._$Co??=[])[o]=n:i._$Cl=n),void 0!==n&&(e=G(t,n._$AS(t,e.values),n,o)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,o=(t?.creationScope??T).importNode(e,!0);W.currentNode=o;let n=W.nextNode(),r=0,s=0,a=i[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new Z(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new ot(n,this,t)),this._$AV.push(e),a=i[++s]}r!==a?.index&&(n=W.nextNode(),r++)}return W.currentNode=T,o}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Z{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,o){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),N(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==j&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>I(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==V&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Y.createElement(K(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new X(o,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new Y(t)),e}k(t){I(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const n of t)o===e.length?e.push(i=new Z(this.O(O()),this.O(O()),this,this.options)):i=e[o],i._$AI(n),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,n){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}_$AI(t,e=this,i,o){const n=this.strings;let r=!1;if(void 0===n)t=G(this,t,e,0),r=!N(t)||t!==this._$AH&&t!==j,r&&(this._$AH=t);else{const o=t;let s,a;for(t=n[0],s=0;s<n.length-1;s++)a=G(this,o[i+s],e,s),a===j&&(a=this._$AH[s]),r||=!N(a)||a!==this._$AH[s],a===V?t=V:t!==V&&(t+=(a??"")+n[s+1]),this._$AH[s]=a}r&&!o&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}class et extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class it extends Q{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}_$AI(t,e=this){if((t=G(this,t,e,0)??V)===j)return;const i=this._$AH,o=t===V&&i!==V||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==V&&(i===V||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const nt=C.litHtmlPolyfillSupport;nt?.(Y,Z),(C.litHtmlVersions??=[]).push("3.3.0");const rt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let st=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const o=i?.renderBefore??e;let n=o._$litPart$;if(void 0===n){const t=i?.renderBefore??null;o._$litPart$=n=new Z(e.insertBefore(O(),t),t,void 0,i??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return j}};st._$litElement$=!0,st.finalized=!0,rt.litElementHydrateSupport?.({LitElement:st});const at=rt.litElementPolyfillSupport;
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
if(at?.({LitElement:st}),(rt.litElementVersions??=[]).push("4.2.0"),!window.polymerSkipLoadingFontRoboto){const t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.crossOrigin="anonymous",t.href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic",document.head.appendChild(t)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const lt=!(window.ShadyDOM&&window.ShadyDOM.inUse);let ct,dt;function ht(t){ct=(!t||!t.shimcssproperties)&&(lt||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(dt=window.ShadyCSS.cssBuild);const pt=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?ct=window.ShadyCSS.nativeCss:window.ShadyCSS?(ht(window.ShadyCSS),window.ShadyCSS=void 0):ht(window.WebComponents&&window.WebComponents.flags);const ut=ct;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class ft{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function mt(t){return gt(function(t){let e=new ft;e.start=0,e.end=t.length;let i=e;for(let o=0,n=t.length;o<n;o++)if(t[o]===yt){i.rules||(i.rules=[]);let t=i,e=t.rules[t.rules.length-1]||null;i=new ft,i.start=o+1,i.parent=t,i.previous=e,t.rules.push(i)}else t[o]===vt&&(i.end=o+1,i=i.parent||e);return e}(t=t.replace(wt.comments,"").replace(wt.port,"")),t)}function gt(t,e){let i=e.substring(t.start,t.end-1);if(t.parsedCssText=t.cssText=i.trim(),t.parent){let o=t.previous?t.previous.end:t.parent.start;i=e.substring(o,t.start-1),i=function(t){return t.replace(/\\([0-9a-f]{1,6})\s/gi,function(){let t=arguments[1],e=6-t.length;for(;e--;)t="0"+t;return"\\"+t})}(i),i=i.replace(wt.multipleSpaces," "),i=i.substring(i.lastIndexOf(";")+1);let n=t.parsedSelector=t.selector=i.trim();t.atRule=0===n.indexOf(St),t.atRule?0===n.indexOf(Ct)?t.type=_t.MEDIA_RULE:n.match(wt.keyframesRule)&&(t.type=_t.KEYFRAMES_RULE,t.keyframesName=t.selector.split(wt.multipleSpaces).pop()):0===n.indexOf(xt)?t.type=_t.MIXIN_RULE:t.type=_t.STYLE_RULE}let o=t.rules;if(o)for(let t,i=0,n=o.length;i<n&&(t=o[i]);i++)gt(t,e);return t}function bt(t,e,i=""){let o="";if(t.cssText||t.rules){let i=t.rules;if(i&&!function(t){let e=t[0];return Boolean(e)&&Boolean(e.selector)&&0===e.selector.indexOf(xt)}(i))for(let t,n=0,r=i.length;n<r&&(t=i[n]);n++)o=bt(t,e,o);else o=e?t.cssText:function(t){return t=function(t){return t.replace(wt.customProp,"").replace(wt.mixinProp,"")}(t),function(t){return t.replace(wt.mixinApply,"").replace(wt.varApply,"")}(t)}(t.cssText),o=o.trim(),o&&(o="  "+o+"\n")}return o&&(t.selector&&(i+=t.selector+" "+yt+"\n"),i+=o,t.selector&&(i+=vt+"\n\n")),i}const _t={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},yt="{",vt="}",wt={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},xt="--",Ct="@media",St="@",kt=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,Pt=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,Et=new Set;function At(t){const e=t.textContent;if(!Et.has(e)){Et.add(e);const t=document.createElement("style");t.setAttribute("shady-unscoped",""),t.textContent=e,document.head.appendChild(t)}}function $t(t){return t.hasAttribute("shady-unscoped")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Tt(t,e){return t?("string"==typeof t&&(t=mt(t)),bt(t,ut)):""}function Ot(t){return!t.__cssRules&&t.textContent&&(t.__cssRules=mt(t.textContent)),t.__cssRules||null}function Nt(t,e,i,o){if(!t)return;let n=!1,r=t.type;r===_t.STYLE_RULE?e(t):r===_t.MIXIN_RULE&&(n=!0);let s=t.rules;if(s&&!n)for(let t,i=0,o=s.length;i<o&&(t=s[i]);i++)Nt(t,e)}function It(t,e){let i=t.indexOf("var(");if(-1===i)return e(t,"","","");let o=function(t,e){let i=0;for(let o=e,n=t.length;o<n;o++)if("("===t[o])i++;else if(")"===t[o]&&0===--i)return o;return-1}(t,i+3),n=t.substring(i+4,o),r=t.substring(0,i),s=It(t.substring(o+1),e),a=n.indexOf(",");return-1===a?e(r,n.trim(),"",s):e(r,n.substring(0,a).trim(),n.substring(a+1).trim(),s)}window.ShadyDOM&&window.ShadyDOM.wrap;const Dt="css-build";function Lt(t){if(void 0!==dt)return dt;if(void 0===t.__cssBuild){const e=t.getAttribute(Dt);if(e)t.__cssBuild=e;else{const e=function(t){const e="template"===t.localName?t.content.firstChild:t.firstChild;if(e instanceof Comment){const t=e.textContent.trim().split(":");if(t[0]===Dt)return t[1]}return""}(t);""!==e&&function(t){const e="template"===t.localName?t.content.firstChild:t.firstChild;e.parentNode.removeChild(e)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/(t),t.__cssBuild=e}}return t.__cssBuild||""}function zt(t){return""!==Lt(t)}function Mt(t,e){for(let i in e)null===i?t.style.removeProperty(i):t.style.setProperty(i,e[i])}function Rt(t,e){const i=window.getComputedStyle(t).getPropertyValue(e);return i?i.trim():""}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Ft=/;\s*/m,Ht=/^\s*(initial)|(inherit)\s*$/,Bt=/\s*!important/,Ut="_-_";class jt{constructor(){this._map={}}set(t,e){t=t.trim(),this._map[t]={properties:e,dependants:{}}}get(t){return t=t.trim(),this._map[t]||null}}let Vt=null;class qt{constructor(){this._currentElement=null,this._measureElement=null,this._map=new jt}detectMixin(t){return function(t){const e=Pt.test(t)||kt.test(t);return Pt.lastIndex=0,kt.lastIndex=0,e}(t)}gatherStyles(t){const e=function(t){const e=[],i=t.querySelectorAll("style");for(let t=0;t<i.length;t++){const o=i[t];$t(o)?lt||(At(o),o.parentNode.removeChild(o)):(e.push(o.textContent),o.parentNode.removeChild(o))}return e.join("").trim()}(t.content);if(e){const i=document.createElement("style");return i.textContent=e,t.content.insertBefore(i,t.content.firstChild),i}return null}transformTemplate(t,e){void 0===t._gatheredStyle&&(t._gatheredStyle=this.gatherStyles(t));const i=t._gatheredStyle;return i?this.transformStyle(i,e):null}transformStyle(t,e=""){let i=Ot(t);return this.transformRules(i,e),t.textContent=Tt(i),i}transformCustomStyle(t){let e=Ot(t);return Nt(e,t=>{":root"===t.selector&&(t.selector="html"),this.transformRule(t)}),t.textContent=Tt(e),e}transformRules(t,e){this._currentElement=e,Nt(t,t=>{this.transformRule(t)}),this._currentElement=null}transformRule(t){t.cssText=this.transformCssText(t.parsedCssText,t),":root"===t.selector&&(t.selector=":host > *")}transformCssText(t,e){return t=t.replace(kt,(t,i,o,n)=>this._produceCssProperties(t,i,o,n,e)),this._consumeCssProperties(t,e)}_getInitialValueForProperty(t){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(t)}_fallbacksFromPreviousRules(t){let e=t;for(;e.parent;)e=e.parent;const i={};let o=!1;return Nt(e,e=>{o=o||e===t,o||e.selector===t.selector&&Object.assign(i,this._cssTextToMap(e.parsedCssText))}),i}_consumeCssProperties(t,e){let i=null;for(;i=Pt.exec(t);){let o=i[0],n=i[1],r=i.index,s=r+o.indexOf("@apply"),a=r+o.length,l=t.slice(0,s),c=t.slice(a),d=e?this._fallbacksFromPreviousRules(e):{};Object.assign(d,this._cssTextToMap(l));let h=this._atApplyToCssProperties(n,d);t=`${l}${h}${c}`,Pt.lastIndex=r+h.length}return t}_atApplyToCssProperties(t,e){t=t.replace(Ft,"");let i=[],o=this._map.get(t);if(o||(this._map.set(t,{}),o=this._map.get(t)),o){let n,r,s;this._currentElement&&(o.dependants[this._currentElement]=!0);const a=o.properties;for(n in a)s=e&&e[n],r=[n,": var(",t,Ut,n],s&&r.push(",",s.replace(Bt,"")),r.push(")"),Bt.test(a[n])&&r.push(" !important"),i.push(r.join(""))}return i.join("; ")}_replaceInitialOrInherit(t,e){let i=Ht.exec(e);return i&&(e=i[1]?this._getInitialValueForProperty(t):"apply-shim-inherit"),e}_cssTextToMap(t,e=!1){let i,o,n=t.split(";"),r={};for(let t,s,a=0;a<n.length;a++)t=n[a],t&&(s=t.split(":"),s.length>1&&(i=s[0].trim(),o=s.slice(1).join(":"),e&&(o=this._replaceInitialOrInherit(i,o)),r[i]=o));return r}_invalidateMixinEntry(t){if(Vt)for(let e in t.dependants)e!==this._currentElement&&Vt(e)}_produceCssProperties(t,e,i,o,n){if(i&&It(i,(t,e)=>{e&&this._map.get(e)&&(o=`@apply ${e};`)}),!o)return t;let r=this._consumeCssProperties(""+o,n),s=t.slice(0,t.indexOf("--")),a=this._cssTextToMap(r,!0),l=a,c=this._map.get(e),d=c&&c.properties;d?l=Object.assign(Object.create(d),a):this._map.set(e,l);let h,p,u=[],f=!1;for(h in l)p=a[h],void 0===p&&(p="initial"),d&&!(h in d)&&(f=!0),u.push(`${e}${Ut}${h}: ${p}`);return f&&this._invalidateMixinEntry(c),c&&(c.properties=l),i&&(s=`${t};${s}`),`${s}${u.join("; ")};`}}qt.prototype.detectMixin=qt.prototype.detectMixin,qt.prototype.transformStyle=qt.prototype.transformStyle,qt.prototype.transformCustomStyle=qt.prototype.transformCustomStyle,qt.prototype.transformRules=qt.prototype.transformRules,qt.prototype.transformRule=qt.prototype.transformRule,qt.prototype.transformTemplate=qt.prototype.transformTemplate,qt.prototype._separator=Ut,Object.defineProperty(qt.prototype,"invalidCallback",{get:()=>Vt,set(t){Vt=t}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Wt={},Kt="_applyShimCurrentVersion",Jt="_applyShimNextVersion",Yt="_applyShimValidatingVersion",Gt=Promise.resolve();
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Xt(t){let e=Wt[t];e&&function(t){t[Kt]=t[Kt]||0,t[Yt]=t[Yt]||0,t[Jt]=(t[Jt]||0)+1}(e)}function Zt(t){return t[Kt]===t[Jt]}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Qt,te=null,ee=window.HTMLImports&&window.HTMLImports.whenReady||null;function ie(t){requestAnimationFrame(function(){ee?ee(t):(te||(te=new Promise(t=>{Qt=t}),"complete"===document.readyState?Qt():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&Qt()})),te.then(function(){t&&t()}))})}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const oe="__seenByShadyCSS",ne="__shadyCSSCachedStyle";let re=null,se=null,ae=class{constructor(){this.customStyles=[],this.enqueued=!1,ie(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&se&&(this.enqueued=!0,ie(se))}addCustomStyle(t){t[oe]||(t[oe]=!0,this.customStyles.push(t),this.enqueueDocumentValidation())}getStyleForCustomStyle(t){if(t[ne])return t[ne];let e;return e=t.getStyle?t.getStyle():t,e}processStyles(){const t=this.customStyles;for(let e=0;e<t.length;e++){const i=t[e];if(i[ne])continue;const o=this.getStyleForCustomStyle(i);if(o){const t=o.__appliedElement||o;re&&re(t),i[ne]=t}}return t}};ae.prototype.addCustomStyle=ae.prototype.addCustomStyle,ae.prototype.getStyleForCustomStyle=ae.prototype.getStyleForCustomStyle,ae.prototype.processStyles=ae.prototype.processStyles,Object.defineProperties(ae.prototype,{transformCallback:{get:()=>re,set(t){re=t}},validateCallback:{get:()=>se,set(t){let e=!1;se||(e=!0),se=t,e&&this.enqueueDocumentValidation()}}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const le=new qt;class ce{constructor(){this.customStyleInterface=null,le.invalidCallback=Xt}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=t=>{le.transformCustomStyle(t)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(t,e){if(this.ensure(),zt(t))return;Wt[e]=t;let i=le.transformTemplate(t,e);t._styleAst=i}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let t=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let e=0;e<t.length;e++){let i=t[e],o=this.customStyleInterface.getStyleForCustomStyle(i);o&&le.transformCustomStyle(o)}this.customStyleInterface.enqueued=!1}}styleSubtree(t,e){if(this.ensure(),e&&Mt(t,e),t.shadowRoot){this.styleElement(t);let e=t.shadowRoot.children||t.shadowRoot.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(e[t])}else{let e=t.children||t.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(e[t])}}styleElement(t){this.ensure();let{is:e}=function(t){let e=t.localName,i="",o="";return e?e.indexOf("-")>-1?i=e:(o=e,i=t.getAttribute&&t.getAttribute("is")||""):(i=t.is,o=t.extends),{is:i,typeExtension:o}}(t),i=Wt[e];if((!i||!zt(i))&&i&&!Zt(i)){(function(t){return!Zt(t)&&t[Yt]===t[Jt]})(i)||(this.prepareTemplate(i,e),function(t){t[Yt]=t[Jt],t._validating||(t._validating=!0,Gt.then(function(){t[Kt]=t[Jt],t._validating=!1}))}(i));let o=t.shadowRoot;if(o){let t=o.querySelector("style");t&&(t.__cssRules=i._styleAst,t.textContent=Tt(i._styleAst))}}}styleDocument(t){this.ensure(),this.styleSubtree(document.body,t)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const t=new ce;let e=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(e,i,o){t.flushCustomStyles(),t.prepareTemplate(e,i)},prepareTemplateStyles(t,e,i){window.ShadyCSS.prepareTemplate(t,e,i)},prepareTemplateDom(t,e){},styleSubtree(e,i){t.flushCustomStyles(),t.styleSubtree(e,i)},styleElement(e){t.flushCustomStyles(),t.styleElement(e)},styleDocument(e){t.flushCustomStyles(),t.styleDocument(e)},getComputedStyleValue:(t,e)=>Rt(t,e),flushCustomStyles(){t.flushCustomStyles()},nativeCss:ut,nativeShadow:lt,cssBuild:dt,disableRuntime:pt},e&&(window.ShadyCSS.CustomStyleInterface=e)}window.ShadyCSS.ApplyShim=le,
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
let de,he,pe=/(url\()([^)]*)(\))/g,ue=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function fe(t,e){if(t&&ue.test(t))return t;if("//"===t)return t;if(void 0===de){de=!1;try{const t=new URL("b","http://a");t.pathname="c%20d",de="http://a/c%20d"===t.href}catch(t){}}if(e||(e=document.baseURI||window.location.href),de)try{return new URL(t,e).href}catch(e){return t}return he||(he=document.implementation.createHTMLDocument("temp"),he.base=he.createElement("base"),he.head.appendChild(he.base),he.anchor=he.createElement("a"),he.body.appendChild(he.anchor)),he.base.href=e,he.anchor.href=t,he.anchor.href||t}function me(t,e){return t.replace(pe,function(t,i,o,n){return i+"'"+fe(o.replace(/["']/g,""),e)+"'"+n})}function ge(t){return t.substring(0,t.lastIndexOf("/")+1)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const be=!window.ShadyDOM||!window.ShadyDOM.inUse;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss);const _e=be&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const t=new CSSStyleSheet;t.replaceSync("");const e=document.createElement("div");return e.attachShadow({mode:"open"}),e.shadowRoot.adoptedStyleSheets=[t],e.shadowRoot.adoptedStyleSheets[0]===t}catch(t){return!1}})();let ye=window.Polymer&&window.Polymer.rootPath||ge(document.baseURI||window.location.href),ve=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,we=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1,xe=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,Ce=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,Se=window.Polymer&&window.Polymer.legacyOptimizations||!1,ke=window.Polymer&&window.Polymer.legacyWarnings||!1,Pe=window.Polymer&&window.Polymer.syncInitialRender||!1,Ee=window.Polymer&&window.Polymer.legacyUndefined||!1,Ae=window.Polymer&&window.Polymer.orderedComputed||!1,$e=window.Polymer&&window.Polymer.removeNestedTemplates||!1,Te=window.Polymer&&window.Polymer.fastDomIf||!1,Oe=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1,Ne=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1,Ie=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1,De=0;const Le=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let i=De++;return function(o){let n=o.__mixinSet;if(n&&n[i])return o;let r=e,s=r.get(o);if(!s){s=t(o),r.set(o,s);let e=Object.create(s.__mixinSet||n||null);e[i]=!0,s.__mixinSet=e}return s}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let ze={},Me={};function Re(t,e){ze[t]=Me[t.toLowerCase()]=e}function Fe(t){return ze[t]||Me[t.toLowerCase()]}class He extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let i=Fe(t);return i&&e?i.querySelector(e):i}return null}attributeChangedCallback(t,e,i,o){e!==i&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=fe(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=ge(e)}return this.__assetpath}register(t){if(t=t||this.id){if(xe&&void 0!==Fe(t))throw Re(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,Re(t,this),(e=this).querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}var e}}He.prototype.modules=ze,customElements.define("dom-module",He);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Be="shady-unscoped";function Ue(t){return He.import(t)}function je(t){const e=me((t.body?t.body:t).textContent,t.baseURI),i=document.createElement("style");return i.textContent=e,i}function Ve(t){const e=t.trim().split(/\s+/),i=[];for(let t=0;t<e.length;t++)i.push(...qe(e[t]));return i}function qe(t){const e=Ue(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(void 0===e._styles){const t=[];t.push(...Ke(e));const i=e.querySelector("template");i&&t.push(...We(i,e.assetpath)),e._styles=t}return e._styles}function We(t,e){if(!t._styles){const i=[],o=t.content.querySelectorAll("style");for(let t=0;t<o.length;t++){let n=o[t],r=n.getAttribute("include");r&&i.push(...Ve(r).filter(function(t,e,i){return i.indexOf(t)===e})),e&&(n.textContent=me(n.textContent,e)),i.push(n)}t._styles=i}return t._styles}function Ke(t){const e=[],i=t.querySelectorAll("link[rel=import][type~=css]");for(let t=0;t<i.length;t++){let o=i[t];if(o.import){const t=o.import,i=o.hasAttribute(Be);if(i&&!t._unscopedStyle){const e=je(t);e.setAttribute(Be,""),t._unscopedStyle=e}else t._style||(t._style=je(t));e.push(i?t._unscopedStyle:t._style)}}return e}function Je(t){let e=Ue(t);if(e&&void 0===e._cssText){let t=function(t){let e="",i=Ke(t);for(let t=0;t<i.length;t++)e+=i[t].textContent;return e}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/(e),i=e.querySelector("template");i&&(t+=function(t,e){let i="";const o=We(t,e);for(let t=0;t<o.length;t++){let e=o[t];e.parentNode&&e.parentNode.removeChild(e),i+=e.textContent}return i}(i,e.assetpath)),e._cssText=t||null}return e||console.warn("Could not find style data in module named",t),e&&e._cssText||""}const Ye=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Ge(t){return t.indexOf(".")>=0}function Xe(t){let e=t.indexOf(".");return-1===e?t:t.slice(0,e)}function Ze(t,e){return 0===t.indexOf(e+".")}function Qe(t,e){return 0===e.indexOf(t+".")}function ti(t,e,i){return e+i.slice(t.length)}function ei(t){if(Array.isArray(t)){let e=[];for(let i=0;i<t.length;i++){let o=t[i].toString().split(".");for(let t=0;t<o.length;t++)e.push(o[t])}return e.join(".")}return t}function ii(t){return Array.isArray(t)?ei(t).split("."):t.toString().split(".")}function oi(t,e,i){let o=t,n=ii(e);for(let t=0;t<n.length;t++){if(!o)return;o=o[n[t]]}return i&&(i.path=n.join(".")),o}function ni(t,e,i){let o=t,n=ii(e),r=n[n.length-1];if(n.length>1){for(let t=0;t<n.length-1;t++){if(o=o[n[t]],!o)return}o[r]=i}else o[e]=i;return n.join(".")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ri={},si=/-[a-z]/g,ai=/([A-Z])/g;function li(t){return ri[t]||(ri[t]=t.indexOf("-")<0?t:t.replace(si,t=>t[1].toUpperCase()))}function ci(t){return ri[t]||(ri[t]=t.replace(ai,"-$1").toLowerCase())}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let di=0,hi=0,pi=[],ui=0,fi=!1,mi=document.createTextNode("");new window.MutationObserver(function(){fi=!1;const t=pi.length;for(let e=0;e<t;e++){let t=pi[e];if(t)try{t()}catch(t){setTimeout(()=>{throw t})}}pi.splice(0,t),hi+=t}).observe(mi,{characterData:!0});const gi={after:t=>({run:e=>window.setTimeout(e,t),cancel(t){window.clearTimeout(t)}}),run:(t,e)=>window.setTimeout(t,e),cancel(t){window.clearTimeout(t)}},bi={run:t=>(fi||(fi=!0,mi.textContent=ui++),pi.push(t),di++),cancel(t){const e=t-hi;if(e>=0){if(!pi[e])throw new Error("invalid async handle: "+t);pi[e]=null}}},_i=bi,yi=Le(t=>class extends t{static createProperties(t){const e=this.prototype;for(let i in t)i in e||e._createPropertyAccessor(i)}static attributeNameForProperty(t){return t.toLowerCase()}static typeForProperty(t){}_createPropertyAccessor(t,e){this._addPropertyToAttributeMap(t),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[t]||(this.__dataHasAccessor[t]=!0,this._definePropertyAccessor(t,e))}_addPropertyToAttributeMap(t){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let e=this.__dataAttributes[t];return e||(e=this.constructor.attributeNameForProperty(t),this.__dataAttributes[e]=t),e}_definePropertyAccessor(t,e){Object.defineProperty(this,t,{get(){return this.__data[t]},set:e?function(){}:function(e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let t in this.__dataHasAccessor)this.hasOwnProperty(t)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[t]=this[t],delete this[t])}_initializeInstanceProperties(t){Object.assign(this,t)}_setProperty(t,e){this._setPendingProperty(t,e)&&this._invalidateProperties()}_getProperty(t){return this.__data[t]}_setPendingProperty(t,e,i){let o=this.__data[t],n=this._shouldPropertyChange(t,e,o);return n&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(t in this.__dataOld)&&(this.__dataOld[t]=o),this.__data[t]=e,this.__dataPending[t]=e),n}_isPropertyPending(t){return!(!this.__dataPending||!this.__dataPending.hasOwnProperty(t))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,_i.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const t=this.__data,e=this.__dataPending,i=this.__dataOld;this._shouldPropertiesChange(t,e,i)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(t,e,i)),this.__dataCounter--}_shouldPropertiesChange(t,e,i){return Boolean(e)}_propertiesChanged(t,e,i){}_shouldPropertyChange(t,e,i){return i!==e&&(i==i||e==e)}attributeChangedCallback(t,e,i,o){e!==i&&this._attributeToProperty(t,i),super.attributeChangedCallback&&super.attributeChangedCallback(t,e,i,o)}_attributeToProperty(t,e,i){if(!this.__serializing){const o=this.__dataAttributes,n=o&&o[t]||t;this[n]=this._deserializeValue(e,i||this.constructor.typeForProperty(n))}}_propertyToAttribute(t,e,i){this.__serializing=!0,i=arguments.length<3?this[t]:i,this._valueToNodeAttribute(this,i,e||this.constructor.attributeNameForProperty(t)),this.__serializing=!1}_valueToNodeAttribute(t,e,i){const o=this._serializeValue(e);"class"!==i&&"name"!==i&&"slot"!==i||(t=Ye(t)),void 0===o?t.removeAttribute(i):t.setAttribute(i,""===o&&window.trustedTypes?window.trustedTypes.emptyScript:o)}_serializeValue(t){return"boolean"==typeof t?t?"":void 0:null!=t?t.toString():void 0}_deserializeValue(t,e){switch(e){case Boolean:return null!==t;case Number:return Number(t);default:return t}}}),vi={};let wi=HTMLElement.prototype;for(;wi;){let t=Object.getOwnPropertyNames(wi);for(let e=0;e<t.length;e++)vi[t[e]]=!0;wi=Object.getPrototypeOf(wi)}const xi=window.trustedTypes?t=>trustedTypes.isHTML(t)||trustedTypes.isScript(t)||trustedTypes.isScriptURL(t):()=>!1;const Ci=Le(t=>{const e=yi(t);return class extends e{static createPropertiesForAttributes(){let t=this.observedAttributes;for(let e=0;e<t.length;e++)this.prototype._createPropertyAccessor(li(t[e]))}static attributeNameForProperty(t){return ci(t)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(t){for(let e in t)this._setProperty(e,t[e])}_ensureAttribute(t,e){const i=this;i.hasAttribute(t)||this._valueToNodeAttribute(i,e,t)}_serializeValue(t){if("object"==typeof t){if(t instanceof Date)return t.toString();if(t){if(xi(t))return t;try{return JSON.stringify(t)}catch(t){return""}}}return super._serializeValue(t)}_deserializeValue(t,e){let i;switch(e){case Object:try{i=JSON.parse(t)}catch(e){i=t}break;case Array:try{i=JSON.parse(t)}catch(e){i=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${t}`)}break;case Date:i=isNaN(t)?String(t):Number(t),i=new Date(i);break;default:i=super._deserializeValue(t,e)}return i}_definePropertyAccessor(t,e){!function(t,e){if(!vi[e]){let i=t[e];void 0!==i&&(t.__data?t._setPendingProperty(e,i):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=i))}}(this,t),super._definePropertyAccessor(t,e)}_hasAccessor(t){return this.__dataHasAccessor&&this.__dataHasAccessor[t]}_isPropertyPending(t){return Boolean(this.__dataPending&&t in this.__dataPending)}}}),Si={"dom-if":!0,"dom-repeat":!0};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let ki=!1,Pi=!1;function Ei(t){(function(){if(!ki){ki=!0;const t=document.createElement("textarea");t.placeholder="a",Pi=t.placeholder===t.textContent}return Pi})()&&"textarea"===t.localName&&t.placeholder&&t.placeholder===t.textContent&&(t.textContent=null)}const Ai=(()=>{const t=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:t=>t});return(e,i,o)=>{const n=i.getAttribute(o);t&&o.startsWith("on-")?e.setAttribute(o,t.createScript(n,o)):e.setAttribute(o,n)}})();function $i(t){let e=t.getAttribute("is");if(e&&Si[e]){let i=t;for(i.removeAttribute("is"),t=i.ownerDocument.createElement(e),i.parentNode.replaceChild(t,i),t.appendChild(i);i.attributes.length;){const{name:e}=i.attributes[0];Ai(t,i,e),i.removeAttribute(e)}}return t}function Ti(t,e){let i=e.parentInfo&&Ti(t,e.parentInfo);if(!i)return t;for(let t=i.firstChild,o=0;t;t=t.nextSibling)if(e.parentIndex===o++)return t}function Oi(t,e,i,o){o.id&&(e[o.id]=i)}function Ni(t,e,i){if(i.events&&i.events.length)for(let o,n=0,r=i.events;n<r.length&&(o=r[n]);n++)t._addMethodEventListenerToNode(e,o.name,o.value,t)}function Ii(t,e,i,o){i.templateInfo&&(e._templateInfo=i.templateInfo,e._parentTemplateInfo=o)}const Di=Le(t=>class extends t{static _parseTemplate(t,e){if(!t._templateInfo){let i=t._templateInfo={};i.nodeInfoList=[],i.nestedTemplate=Boolean(e),i.stripWhiteSpace=e&&e.stripWhiteSpace||t.hasAttribute&&t.hasAttribute("strip-whitespace"),this._parseTemplateContent(t,i,{parent:null})}return t._templateInfo}static _parseTemplateContent(t,e,i){return this._parseTemplateNode(t.content,e,i)}static _parseTemplateNode(t,e,i){let o=!1,n=t;return"template"!=n.localName||n.hasAttribute("preserve-content")?"slot"===n.localName&&(e.hasInsertionPoint=!0):o=this._parseTemplateNestedTemplate(n,e,i)||o,Ei(n),n.firstChild&&this._parseTemplateChildNodes(n,e,i),n.hasAttributes&&n.hasAttributes()&&(o=this._parseTemplateNodeAttributes(n,e,i)||o),o||i.noted}static _parseTemplateChildNodes(t,e,i){if("script"!==t.localName&&"style"!==t.localName)for(let o,n=t.firstChild,r=0;n;n=o){if("template"==n.localName&&(n=$i(n)),o=n.nextSibling,n.nodeType===Node.TEXT_NODE){let i=o;for(;i&&i.nodeType===Node.TEXT_NODE;)n.textContent+=i.textContent,o=i.nextSibling,t.removeChild(i),i=o;if(e.stripWhiteSpace&&!n.textContent.trim()){t.removeChild(n);continue}}let s={parentIndex:r,parentInfo:i};this._parseTemplateNode(n,e,s)&&(s.infoIndex=e.nodeInfoList.push(s)-1),n.parentNode&&r++}}static _parseTemplateNestedTemplate(t,e,i){let o=t,n=this._parseTemplate(o,e);return(n.content=o.content.ownerDocument.createDocumentFragment()).appendChild(o.content),i.templateInfo=n,!0}static _parseTemplateNodeAttributes(t,e,i){let o=!1,n=Array.from(t.attributes);for(let r,s=n.length-1;r=n[s];s--)o=this._parseTemplateNodeAttribute(t,e,i,r.name,r.value)||o;return o}static _parseTemplateNodeAttribute(t,e,i,o,n){return"on-"===o.slice(0,3)?(t.removeAttribute(o),i.events=i.events||[],i.events.push({name:o.slice(3),value:n}),!0):"id"===o&&(i.id=n,!0)}static _contentForTemplate(t){let e=t._templateInfo;return e&&e.content||t.content}_stampTemplate(t,e){t&&!t.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(t);let i=(e=e||this.constructor._parseTemplate(t)).nodeInfoList,o=e.content||t.content,n=document.importNode(o,!0);n.__noInsertionPoint=!e.hasInsertionPoint;let r=n.nodeList=new Array(i.length);n.$={};for(let t,o=0,s=i.length;o<s&&(t=i[o]);o++){let i=r[o]=Ti(n,t);Oi(0,n.$,i,t),Ii(0,i,t,e),Ni(this,i,t)}return n}_addMethodEventListenerToNode(t,e,i,o){let n=function(t,e,i){return t=t._methodHost||t,function(e){t[i]?t[i](e,e.detail):console.warn("listener method `"+i+"` not defined")}}(o=o||t,0,i);return this._addEventListenerToNode(t,e,n),n}_addEventListenerToNode(t,e,i){t.addEventListener(e,i)}_removeEventListenerFromNode(t,e,i){t.removeEventListener(e,i)}});
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
 */let Li=0;const zi=[],Mi={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Ri="__computeInfo",Fi=/[A-Z]/;function Hi(t,e,i){let o=t[e];if(o){if(!t.hasOwnProperty(e)&&(o=t[e]=Object.create(t[e]),i))for(let t in o){let e=o[t],i=o[t]=Array(e.length);for(let t=0;t<e.length;t++)i[t]=e[t]}}else o=t[e]={};return o}function Bi(t,e,i,o,n,r){if(e){let s=!1;const a=Li++;for(let l in i){let c=e[n?Xe(l):l];if(c)for(let e,d=0,h=c.length;d<h&&(e=c[d]);d++)e.info&&e.info.lastRun===a||n&&!ji(l,e.trigger)||(e.info&&(e.info.lastRun=a),e.fn(t,l,i,o,e.info,n,r),s=!0)}return s}return!1}function Ui(t,e,i,o,n,r,s,a){let l=!1,c=e[s?Xe(o):o];if(c)for(let e,d=0,h=c.length;d<h&&(e=c[d]);d++)e.info&&e.info.lastRun===i||s&&!ji(o,e.trigger)||(e.info&&(e.info.lastRun=i),e.fn(t,o,n,r,e.info,s,a),l=!0);return l}function ji(t,e){if(e){let i=e.name;return i==t||!(!e.structured||!Ze(i,t))||!(!e.wildcard||!Qe(i,t))}return!0}function Vi(t,e,i,o,n){let r="string"==typeof n.method?t[n.method]:n.method,s=n.property;r?r.call(t,t.__data[s],o[s]):n.dynamicFn||console.warn("observer method `"+n.method+"` not defined")}function qi(t,e,i){let o=Xe(e);if(o!==e){return Wi(t,ci(o)+"-changed",i[e],e),!0}return!1}function Wi(t,e,i,o){let n={value:i,queueProperty:!0};o&&(n.path=o),Ye(t).dispatchEvent(new CustomEvent(e,{detail:n}))}function Ki(t,e,i,o,n,r){let s=(r?Xe(e):e)!=e?e:null,a=s?oi(t,s):t.__data[e];s&&void 0===a&&(a=i[e]),Wi(t,n.eventName,a,s)}function Ji(t,e,i,o,n){let r=t.__data[e];ve&&(r=ve(r,n.attrName,"attribute",t)),t._propertyToAttribute(e,n.attrName,r)}function Yi(t,e,i,o){let n=t[Mi.COMPUTE];if(n)if(Ae){Li++;const r=function(t){let e=t.constructor.__orderedComputedDeps;if(!e){e=new Map;const i=t[Mi.COMPUTE];let o,{counts:n,ready:r,total:s}=function(t){const e=t[Ri],i={},o=t[Mi.COMPUTE],n=[];let r=0;for(let t in e){const o=e[t];r+=i[t]=o.args.filter(t=>!t.literal).length+(o.dynamicFn?1:0)}for(let t in o)e[t]||n.push(t);return{counts:i,ready:n,total:r}}(t);for(;o=r.shift();){e.set(o,e.size);const t=i[o];t&&t.forEach(t=>{const e=t.info.methodInfo;--s,0===--n[e]&&r.push(e)})}if(0!==s){const e=t;console.warn(`Computed graph for ${e.localName} incomplete; circular?`)}t.constructor.__orderedComputedDeps=e}return e}(t),s=[];for(let t in e)Xi(t,n,s,r,o);let a;for(;a=s.shift();)Zi(t,"",e,i,a)&&Xi(a.methodInfo,n,s,r,o);Object.assign(i,t.__dataOld),Object.assign(e,t.__dataPending),t.__dataPending=null}else{let r=e;for(;Bi(t,n,r,i,o);)Object.assign(i,t.__dataOld),Object.assign(e,t.__dataPending),r=t.__dataPending,t.__dataPending=null}}const Gi=(t,e,i)=>{let o=0,n=e.length-1,r=-1;for(;o<=n;){const s=o+n>>1,a=i.get(e[s].methodInfo)-i.get(t.methodInfo);if(a<0)o=s+1;else{if(!(a>0)){r=s;break}n=s-1}}r<0&&(r=n+1),e.splice(r,0,t)},Xi=(t,e,i,o,n)=>{const r=e[n?Xe(t):t];if(r)for(let e=0;e<r.length;e++){const s=r[e];s.info.lastRun===Li||n&&!ji(t,s.trigger)||(s.info.lastRun=Li,Gi(s.info,i,o))}};function Zi(t,e,i,o,n){let r=ro(t,e,i,o,n);if(r===zi)return!1;let s=n.methodInfo;return t.__dataHasAccessor&&t.__dataHasAccessor[s]?t._setPendingProperty(s,r,!0):(t[s]=r,!1)}function Qi(t,e,i,o,n,r,s){i.bindings=i.bindings||[];let a={kind:o,target:n,parts:r,literal:s,isCompound:1!==r.length};if(i.bindings.push(a),function(t){return Boolean(t.target)&&"attribute"!=t.kind&&"text"!=t.kind&&!t.isCompound&&"{"===t.parts[0].mode}(a)){let{event:t,negate:e}=a.parts[0];a.listenerEvent=t||ci(n)+"-changed",a.listenerNegate=e}let l=e.nodeInfoList.length;for(let i=0;i<a.parts.length;i++){let o=a.parts[i];o.compoundIndex=i,to(t,e,a,o,l)}}function to(t,e,i,o,n){if(!o.literal)if("attribute"===i.kind&&"-"===i.target[0])console.warn("Cannot set attribute "+i.target+' because "-" is not a valid attribute starting character');else{let r=o.dependencies,s={index:n,binding:i,part:o,evaluator:t};for(let i=0;i<r.length;i++){let o=r[i];"string"==typeof o&&(o=uo(o),o.wildcard=!0),t._addTemplatePropertyEffect(e,o.rootProperty,{fn:eo,info:s,trigger:o})}}}function eo(t,e,i,o,n,r,s){let a=s[n.index],l=n.binding,c=n.part;if(r&&c.source&&e.length>c.source.length&&"property"==l.kind&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let o=i[e];e=ti(c.source,l.target,e),a._setPendingPropertyOrPath(e,o,!1,!0)&&t._enqueueClient(a)}else{let s=n.evaluator._evaluateBinding(t,c,e,i,o,r);s!==zi&&function(t,e,i,o,n){n=function(t,e,i,o){if(i.isCompound){let n=t.__dataCompoundStorage[i.target];n[o.compoundIndex]=e,e=n.join("")}"attribute"!==i.kind&&("textContent"!==i.target&&("value"!==i.target||"input"!==t.localName&&"textarea"!==t.localName)||(e=null==e?"":e));return e}(e,n,i,o),ve&&(n=ve(n,i.target,i.kind,e));if("attribute"==i.kind)t._valueToNodeAttribute(e,n,i.target);else{let o=i.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[o]?e[Mi.READ_ONLY]&&e[Mi.READ_ONLY][o]||e._setPendingProperty(o,n)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,o,n)}}(t,a,l,c,s)}}function io(t,e){if(e.isCompound){let i=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),o=e.parts,n=new Array(o.length);for(let t=0;t<o.length;t++)n[t]=o[t].literal;let r=e.target;i[r]=n,e.literal&&"property"==e.kind&&("className"===r&&(t=Ye(t)),t[r]=e.literal)}}function oo(t,e,i){if(i.listenerEvent){let o=i.parts[0];t.addEventListener(i.listenerEvent,function(t){!function(t,e,i,o,n){let r,s=t.detail,a=s&&s.path;a?(o=ti(i,o,a),r=s&&s.value):r=t.currentTarget[i],r=n?!r:r,e[Mi.READ_ONLY]&&e[Mi.READ_ONLY][o]||!e._setPendingPropertyOrPath(o,r,!0,Boolean(a))||s&&s.queueProperty||e._invalidateProperties()}(t,e,i.target,o.source,o.negate)})}}function no(t,e,i,o,n,r){r=e.static||r&&("object"!=typeof r||r[e.methodName]);let s={methodName:e.methodName,args:e.args,methodInfo:n,dynamicFn:r};for(let n,r=0;r<e.args.length&&(n=e.args[r]);r++)n.literal||t._addPropertyEffect(n.rootProperty,i,{fn:o,info:s,trigger:n});return r&&t._addPropertyEffect(e.methodName,i,{fn:o,info:s}),s}function ro(t,e,i,o,n){let r=t._methodHost||t,s=r[n.methodName];if(s){let o=t._marshalArgs(n.args,e,i);return o===zi?zi:s.apply(r,o)}n.dynamicFn||console.warn("method `"+n.methodName+"` not defined")}const so=[],ao="(?:[a-zA-Z_$][\\w.:$\\-*]*)",lo="(?:("+ao+"|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)",co=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?"+("("+ao+"\\s*"+("(?:\\(\\s*(?:"+("(?:"+lo+"(?:,\\s*"+lo+")*)")+"?)\\)\\s*)")+"?)")+"(?:]]|}})","g");function ho(t){let e="";for(let i=0;i<t.length;i++){e+=t[i].literal||""}return e}function po(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let t={methodName:e[1],static:!0,args:so};if(e[2].trim()){return function(t,e){return e.args=t.map(function(t){let i=uo(t);return i.literal||(e.static=!1),i},this),e}(e[2].replace(/\\,/g,"&comma;").split(","),t)}return t}return null}function uo(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),i={name:e,value:"",literal:!1},o=e[0];switch("-"===o&&(o=e[1]),o>="0"&&o<="9"&&(o="#"),o){case"'":case'"':i.value=e.slice(1,-1),i.literal=!0;break;case"#":i.value=Number(e),i.literal=!0}return i.literal||(i.rootProperty=Xe(e),i.structured=Ge(e),i.structured&&(i.wildcard=".*"==e.slice(-2),i.wildcard&&(i.name=e.slice(0,-2)))),i}function fo(t,e,i){let o=oi(t,i);return void 0===o&&(o=e[i]),o}function mo(t,e,i,o){const n={indexSplices:o};Ee&&!t._overrideLegacyUndefined&&(e.splices=n),t.notifyPath(i+".splices",n),t.notifyPath(i+".length",e.length),Ee&&!t._overrideLegacyUndefined&&(n.indexSplices=[])}function go(t,e,i,o,n,r){mo(t,e,i,[{index:o,addedCount:n,removed:r,object:e,type:"splice"}])}const bo=Le(t=>{const e=Di(Ci(t));return class extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return Mi}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(_o.length){let t=_o[_o.length-1];t._enqueueClient(this),this.__dataHost=t}}_initializeProtoProperties(t){this.__data=Object.create(t),this.__dataPending=Object.create(t),this.__dataOld={}}_initializeInstanceProperties(t){let e=this[Mi.READ_ONLY];for(let i in t)e&&e[i]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[i]=this.__dataPending[i]=t[i])}_addPropertyEffect(t,e,i){this._createPropertyAccessor(t,e==Mi.READ_ONLY);let o=Hi(this,e,!0)[t];o||(o=this[e][t]=[]),o.push(i)}_removePropertyEffect(t,e,i){let o=Hi(this,e,!0)[t],n=o.indexOf(i);n>=0&&o.splice(n,1)}_hasPropertyEffect(t,e){let i=this[e];return Boolean(i&&i[t])}_hasReadOnlyEffect(t){return this._hasPropertyEffect(t,Mi.READ_ONLY)}_hasNotifyEffect(t){return this._hasPropertyEffect(t,Mi.NOTIFY)}_hasReflectEffect(t){return this._hasPropertyEffect(t,Mi.REFLECT)}_hasComputedEffect(t){return this._hasPropertyEffect(t,Mi.COMPUTE)}_setPendingPropertyOrPath(t,e,i,o){if(o||Xe(Array.isArray(t)?t[0]:t)!==t){if(!o){let i=oi(this,t);if(!(t=ni(this,t,e))||!super._shouldPropertyChange(t,e,i))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(t,e,i))return function(t,e,i){let o=t.__dataLinkedPaths;if(o){let n;for(let r in o){let s=o[r];Qe(r,e)?(n=ti(r,s,e),t._setPendingPropertyOrPath(n,i,!0,!0)):Qe(s,e)&&(n=ti(s,r,e),t._setPendingPropertyOrPath(n,i,!0,!0))}}}(this,t,e),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[t])return this._setPendingProperty(t,e,i);this[t]=e}return!1}_setUnmanagedPropertyToNode(t,e,i){i===t[e]&&"object"!=typeof i||("className"===e&&(t=Ye(t)),t[e]=i)}_setPendingProperty(t,e,i){let o=this.__dataHasPaths&&Ge(t),n=o?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(t,e,n[t])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),t in this.__dataOld||(this.__dataOld[t]=this.__data[t]),o?this.__dataTemp[t]=e:this.__data[t]=e,this.__dataPending[t]=e,(o||this[Mi.NOTIFY]&&this[Mi.NOTIFY][t])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[t]=i),!0)}_setProperty(t,e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(t){this.__dataPendingClients=this.__dataPendingClients||[],t!==this&&this.__dataPendingClients.push(t)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let t=this.__dataPendingClients;if(t){this.__dataPendingClients=null;for(let e=0;e<t.length;e++){let i=t[e];i.__dataEnabled?i.__dataPending&&i._flushProperties():i._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(t,e){for(let i in t)!e&&this[Mi.READ_ONLY]&&this[Mi.READ_ONLY][i]||this._setPendingPropertyOrPath(i,t[i],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(t,e,i){let o,n=this.__dataHasPaths;this.__dataHasPaths=!1,Yi(this,e,i,n),o=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(e,i,n),this._flushClients(),Bi(this,this[Mi.REFLECT],e,i,n),Bi(this,this[Mi.OBSERVE],e,i,n),o&&function(t,e,i,o,n){let r,s,a=t[Mi.NOTIFY],l=Li++;for(let s in e)e[s]&&(a&&Ui(t,a,l,s,i,o,n)||n&&qi(t,s,i))&&(r=!0);r&&(s=t.__dataHost)&&s._invalidateProperties&&s._invalidateProperties()}(this,o,e,i,n),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(t,e,i){this[Mi.PROPAGATE]&&Bi(this,this[Mi.PROPAGATE],t,e,i),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,t,e,i)}_runEffectsForTemplate(t,e,i,o){const n=(e,o)=>{Bi(this,t.propertyEffects,e,i,o,t.nodeList);for(let n=t.firstChild;n;n=n.nextSibling)this._runEffectsForTemplate(n,e,i,o)};t.runEffects?t.runEffects(n,e,o):n(e,o)}linkPaths(t,e){t=ei(t),e=ei(e),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[t]=e}unlinkPaths(t){t=ei(t),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[t]}notifySplices(t,e){let i={path:""};mo(this,oi(this,t,i),i.path,e)}get(t,e){return oi(e||this,t)}set(t,e,i){i?ni(i,t,e):this[Mi.READ_ONLY]&&this[Mi.READ_ONLY][t]||this._setPendingPropertyOrPath(t,e,!0)&&this._invalidateProperties()}push(t,...e){let i={path:""},o=oi(this,t,i),n=o.length,r=o.push(...e);return e.length&&go(this,o,i.path,n,e.length,[]),r}pop(t){let e={path:""},i=oi(this,t,e),o=Boolean(i.length),n=i.pop();return o&&go(this,i,e.path,i.length,0,[n]),n}splice(t,e,i,...o){let n,r={path:""},s=oi(this,t,r);return e<0?e=s.length-Math.floor(-e):e&&(e=Math.floor(e)),n=2===arguments.length?s.splice(e):s.splice(e,i,...o),(o.length||n.length)&&go(this,s,r.path,e,o.length,n),n}shift(t){let e={path:""},i=oi(this,t,e),o=Boolean(i.length),n=i.shift();return o&&go(this,i,e.path,0,0,[n]),n}unshift(t,...e){let i={path:""},o=oi(this,t,i),n=o.unshift(...e);return e.length&&go(this,o,i.path,0,e.length,[]),n}notifyPath(t,e){let i;if(1==arguments.length){let o={path:""};e=oi(this,t,o),i=o.path}else i=Array.isArray(t)?ei(t):t;this._setPendingPropertyOrPath(i,e,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(t,e){var i;this._addPropertyEffect(t,Mi.READ_ONLY),e&&(this["_set"+(i=t,i[0].toUpperCase()+i.substring(1))]=function(e){this._setProperty(t,e)})}_createPropertyObserver(t,e,i){let o={property:t,method:e,dynamicFn:Boolean(i)};this._addPropertyEffect(t,Mi.OBSERVE,{fn:Vi,info:o,trigger:{name:t}}),i&&this._addPropertyEffect(e,Mi.OBSERVE,{fn:Vi,info:o,trigger:{name:e}})}_createMethodObserver(t,e){let i=po(t);if(!i)throw new Error("Malformed observer expression '"+t+"'");no(this,i,Mi.OBSERVE,ro,null,e)}_createNotifyingProperty(t){this._addPropertyEffect(t,Mi.NOTIFY,{fn:Ki,info:{eventName:ci(t)+"-changed",property:t}})}_createReflectedProperty(t){let e=this.constructor.attributeNameForProperty(t);"-"===e[0]?console.warn("Property "+t+" cannot be reflected to attribute "+e+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(t,Mi.REFLECT,{fn:Ji,info:{attrName:e}})}_createComputedProperty(t,e,i){let o=po(e);if(!o)throw new Error("Malformed computed expression '"+e+"'");const n=no(this,o,Mi.COMPUTE,Zi,t,i);Hi(this,Ri)[t]=n}_marshalArgs(t,e,i){const o=this.__data,n=[];for(let r=0,s=t.length;r<s;r++){let{name:s,structured:a,wildcard:l,value:c,literal:d}=t[r];if(!d)if(l){const t=Qe(s,e),n=fo(o,i,t?e:s);c={path:t?e:s,value:n,base:t?oi(o,s):n}}else c=a?fo(o,i,s):o[s];if(Ee&&!this._overrideLegacyUndefined&&void 0===c&&t.length>1)return zi;n[r]=c}return n}static addPropertyEffect(t,e,i){this.prototype._addPropertyEffect(t,e,i)}static createPropertyObserver(t,e,i){this.prototype._createPropertyObserver(t,e,i)}static createMethodObserver(t,e){this.prototype._createMethodObserver(t,e)}static createNotifyingProperty(t){this.prototype._createNotifyingProperty(t)}static createReadOnlyProperty(t,e){this.prototype._createReadOnlyProperty(t,e)}static createReflectedProperty(t){this.prototype._createReflectedProperty(t)}static createComputedProperty(t,e,i){this.prototype._createComputedProperty(t,e,i)}static bindTemplate(t){return this.prototype._bindTemplate(t)}_bindTemplate(t,e){let i=this.constructor._parseTemplate(t),o=this.__preBoundTemplateInfo==i;if(!o)for(let t in i.propertyEffects)this._createPropertyAccessor(t);if(e)if(i=Object.create(i),i.wasPreBound=o,this.__templateInfo){const e=t._parentTemplateInfo||this.__templateInfo,o=e.lastChild;i.parent=e,e.lastChild=i,i.previousSibling=o,o?o.nextSibling=i:e.firstChild=i}else this.__templateInfo=i;else this.__preBoundTemplateInfo=i;return i}static _addTemplatePropertyEffect(t,e,i){(t.hostProps=t.hostProps||{})[e]=!0;let o=t.propertyEffects=t.propertyEffects||{};(o[e]=o[e]||[]).push(i)}_stampTemplate(t,e){e=e||this._bindTemplate(t,!0),_o.push(this);let i=super._stampTemplate(t,e);if(_o.pop(),e.nodeList=i.nodeList,!e.wasPreBound){let t=e.childNodes=[];for(let e=i.firstChild;e;e=e.nextSibling)t.push(e)}return i.templateInfo=e,function(t,e){let{nodeList:i,nodeInfoList:o}=e;if(o.length)for(let e=0;e<o.length;e++){let n=o[e],r=i[e],s=n.bindings;if(s)for(let e=0;e<s.length;e++){let i=s[e];io(r,i),oo(r,t,i)}r.__dataHost=t}}(this,e),this.__dataClientsReady&&(this._runEffectsForTemplate(e,this.__data,null,!1),this._flushClients()),i}_removeBoundDom(t){const e=t.templateInfo,{previousSibling:i,nextSibling:o,parent:n}=e;i?i.nextSibling=o:n&&(n.firstChild=o),o?o.previousSibling=i:n&&(n.lastChild=i),e.nextSibling=e.previousSibling=null;let r=e.childNodes;for(let t=0;t<r.length;t++){let e=r[t];Ye(Ye(e).parentNode).removeChild(e)}}static _parseTemplateNode(t,i,o){let n=e._parseTemplateNode.call(this,t,i,o);if(t.nodeType===Node.TEXT_NODE){let e=this._parseBindings(t.textContent,i);e&&(t.textContent=ho(e)||" ",Qi(this,i,o,"text","textContent",e),n=!0)}return n}static _parseTemplateNodeAttribute(t,i,o,n,r){let s=this._parseBindings(r,i);if(s){let e=n,r="property";Fi.test(n)?r="attribute":"$"==n[n.length-1]&&(n=n.slice(0,-1),r="attribute");let a=ho(s);return a&&"attribute"==r&&("class"==n&&t.hasAttribute("class")&&(a+=" "+t.getAttribute(n)),t.setAttribute(n,a)),"attribute"==r&&"disable-upgrade$"==e&&t.setAttribute(n,""),"input"===t.localName&&"value"===e&&t.setAttribute(e,""),t.removeAttribute(e),"property"===r&&(n=li(n)),Qi(this,i,o,r,n,s,a),!0}return e._parseTemplateNodeAttribute.call(this,t,i,o,n,r)}static _parseTemplateNestedTemplate(t,i,o){let n=e._parseTemplateNestedTemplate.call(this,t,i,o);const r=t.parentNode,s=o.templateInfo,a="dom-if"===r.localName,l="dom-repeat"===r.localName;$e&&(a||l)&&(r.removeChild(t),(o=o.parentInfo).templateInfo=s,o.noted=!0,n=!1);let c=s.hostProps;if(Te&&a)c&&(i.hostProps=Object.assign(i.hostProps||{},c),$e||(o.parentInfo.noted=!0));else{let t="{";for(let e in c){Qi(this,i,o,"property","_host_"+e,[{mode:t,source:e,dependencies:[e],hostProp:!0}])}}return n}static _parseBindings(t,e){let i,o=[],n=0;for(;null!==(i=co.exec(t));){i.index>n&&o.push({literal:t.slice(n,i.index)});let r=i[1][0],s=Boolean(i[2]),a=i[3].trim(),l=!1,c="",d=-1;"{"==r&&(d=a.indexOf("::"))>0&&(c=a.substring(d+2),a=a.substring(0,d),l=!0);let h=po(a),p=[];if(h){let{args:t,methodName:i}=h;for(let e=0;e<t.length;e++){let i=t[e];i.literal||p.push(i)}let o=e.dynamicFns;(o&&o[i]||h.static)&&(p.push(i),h.dynamicFn=!0)}else p.push(a);o.push({source:a,mode:r,negate:s,customEvent:l,signature:h,dependencies:p,event:c}),n=co.lastIndex}if(n&&n<t.length){let e=t.substring(n);e&&o.push({literal:e})}return o.length?o:null}static _evaluateBinding(t,e,i,o,n,r){let s;return s=e.signature?ro(t,i,o,0,e.signature):i!=e.source?oi(t,e.source):r&&Ge(i)?oi(t,i):t.__data[i],e.negate&&(s=!s),s}}}),_o=[];const yo=Le(t=>{const e=yi(t);function i(t){const e=Object.getPrototypeOf(t);return e.prototype instanceof n?e:null}function o(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",t))){let e=null;if(t.hasOwnProperty(JSCompiler_renameProperty("properties",t))){const i=t.properties;i&&(e=
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function(t){const e={};for(let i in t){const o=t[i];e[i]="function"==typeof o?{type:o}:o}return e}(i))}t.__ownProperties=e}return t.__ownProperties}class n extends e{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const t=this._properties;this.__observedAttributes=t?Object.keys(t).map(t=>this.prototype._addPropertyToAttributeMap(t)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const t=i(this);t&&t.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const t=o(this);t&&this.createProperties(t)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const t=i(this);this.__properties=Object.assign({},t&&t._properties,o(this))}return this.__properties}static typeForProperty(t){const e=this._properties[t];return e&&e.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return n}),vo=window.ShadyCSS&&window.ShadyCSS.cssBuild,wo=Le(t=>{const e=yo(bo(t));function i(t,e,i,o){i.computed&&(i.readOnly=!0),i.computed&&(t._hasReadOnlyEffect(e)?console.warn(`Cannot redefine computed property '${e}'.`):t._createComputedProperty(e,i.computed,o)),i.readOnly&&!t._hasReadOnlyEffect(e)?t._createReadOnlyProperty(e,!i.computed):!1===i.readOnly&&t._hasReadOnlyEffect(e)&&console.warn(`Cannot make readOnly property '${e}' non-readOnly.`),i.reflectToAttribute&&!t._hasReflectEffect(e)?t._createReflectedProperty(e):!1===i.reflectToAttribute&&t._hasReflectEffect(e)&&console.warn(`Cannot make reflected property '${e}' non-reflected.`),i.notify&&!t._hasNotifyEffect(e)?t._createNotifyingProperty(e):!1===i.notify&&t._hasNotifyEffect(e)&&console.warn(`Cannot make notify property '${e}' non-notify.`),i.observer&&t._createPropertyObserver(e,i.observer,o[i.observer]),t._addPropertyToAttributeMap(e)}function o(t,e,i,o){if(!vo){const n=e.content.querySelectorAll("style"),r=We(e),s=function(t){let e=Ue(t);return e?Ke(e):[]}(i),a=e.content.firstElementChild;for(let i=0;i<s.length;i++){let n=s[i];n.textContent=t._processStyleText(n.textContent,o),e.content.insertBefore(n,a)}let l=0;for(let e=0;e<r.length;e++){let i=r[e],s=n[l];s!==i?(i=i.cloneNode(!0),s.parentNode.insertBefore(i,s)):l++,i.textContent=t._processStyleText(i.textContent,o)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(e,i),Ie&&vo&&_e){const i=e.content.querySelectorAll("style");if(i){let e="";Array.from(i).forEach(t=>{e+=t.textContent,t.parentNode.removeChild(t)}),t._styleSheet=new CSSStyleSheet,t._styleSheet.replaceSync(e)}}}return class extends e{static get polymerElementVersion(){return"3.5.2"}static _finalizeClass(){e._finalizeClass.call(this);const t=((i=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",i))||(i.__ownObservers=i.hasOwnProperty(JSCompiler_renameProperty("observers",i))?i.observers:null),i.__ownObservers);var i;t&&this.createObservers(t,this._properties),this._prepareTemplate()}static _prepareTemplate(){let t=this.template;t&&("string"==typeof t?(console.error("template getter must return HTMLTemplateElement"),t=null):Se||(t=t.cloneNode(!0))),this.prototype._template=t}static createProperties(t){for(let e in t)i(this.prototype,e,t[e],t)}static createObservers(t,e){const i=this.prototype;for(let o=0;o<t.length;o++)i._createMethodObserver(t[o],e)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let t=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;"function"==typeof t&&(t=t()),this._template=void 0!==t?t:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&function(t){let e=null;if(t&&(!xe||Ce)&&(e=He.import(t,"template"),xe&&!e))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${t}`);return e}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(t){this._template=t}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const t=this.importMeta;if(t)this._importPath=ge(t.url);else{const t=He.import(this.is);this._importPath=t&&t.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=ye,this.importPath=this.constructor.importPath;let t=function(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",t))){t.__propertyDefaults=null;let e=t._properties;for(let i in e){let o=e[i];"value"in o&&(t.__propertyDefaults=t.__propertyDefaults||{},t.__propertyDefaults[i]=o)}}return t.__propertyDefaults}(this.constructor);if(t)for(let e in t){let i=t[e];if(this._canApplyPropertyDefault(e)){let t="function"==typeof i.value?i.value.call(this):i.value;this._hasAccessor(e)?this._setPendingProperty(e,t,!0):this[e]=t}}}_canApplyPropertyDefault(t){return!this.hasOwnProperty(t)}static _processStyleText(t,e){return me(t,e)}static _finalizeTemplate(t){const e=this.prototype._template;if(e&&!e.__polymerFinalized){e.__polymerFinalized=!0;const i=this.importPath;o(this,e,t,i?fe(i):""),this.prototype._bindTemplate(e)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(t){const e=Ye(this);if(e.attachShadow)return t?(e.shadowRoot||(e.attachShadow({mode:"open",shadyUpgradeFragment:t}),e.shadowRoot.appendChild(t),this.constructor._styleSheet&&(e.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),Pe&&window.ShadyDOM&&window.ShadyDOM.flushInitial(e.shadowRoot),e.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(t){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,t)}resolveUrl(t,e){return!e&&this.importPath&&(e=fe(this.importPath)),fe(t,e)}static _parseTemplateContent(t,i,o){return i.dynamicFns=i.dynamicFns||this._properties,e._parseTemplateContent.call(this,t,i,o)}static _addTemplatePropertyEffect(t,i,o){return!ke||i in this._properties||o.info.part.signature&&o.info.part.signature.static||o.info.part.hostProp||t.nestedTemplate||console.warn(`Property '${i}' used in template but not declared in 'properties'; attribute will not be observed.`),e._addTemplatePropertyEffect.call(this,t,i,o)}}});
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
class xo{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,Co.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),Co.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(t,e,i){return t instanceof xo?t._cancelAsync():t=new xo,t.setConfig(e,i),t}}let Co=new Set;const So=function(t){Co.add(t)},ko=function(){const t=Boolean(Co.size);return Co.forEach(t=>{try{t.flush()}catch(t){setTimeout(()=>{throw t})}}),t};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Po="string"==typeof document.head.style.touchAction,Eo="__polymerGestures",Ao="__polymerGesturesHandled",$o="__polymerGesturesTouchAction",To=["mousedown","mousemove","mouseup","click"],Oo=[0,1,4,2],No=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}();function Io(t){return To.indexOf(t)>-1}let Do=!1;function Lo(t){if(!Io(t)&&"touchend"!==t)return Po&&Do&&we?{passive:!0}:void 0}!function(){try{let t=Object.defineProperty({},"passive",{get(){Do=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}}();let zo=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const Mo=[],Ro={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},Fo={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function Ho(t){return Ro[t.localName]||!1}function Bo(t){let e=Array.prototype.slice.call(t.labels||[]);if(!e.length){e=[];try{let i=t.getRootNode();if(t.id){let o=i.querySelectorAll(`label[for = '${t.id}']`);for(let t=0;t<o.length;t++)e.push(o[t])}}catch(t){}}return e}let Uo=function(t){let e=t.sourceCapabilities;if((!e||e.firesTouchEvents)&&(t[Ao]={skip:!0},"click"===t.type)){let e=!1,i=Jo(t);for(let t=0;t<i.length;t++){if(i[t].nodeType===Node.ELEMENT_NODE)if("label"===i[t].localName)Mo.push(i[t]);else if(Ho(i[t])){let o=Bo(i[t]);for(let t=0;t<o.length;t++)e=e||Mo.indexOf(o[t])>-1}if(i[t]===qo.mouse.target)return}if(e)return;t.preventDefault(),t.stopPropagation()}};function jo(t){let e=zo?["click"]:To;for(let i,o=0;o<e.length;o++)i=e[o],t?(Mo.length=0,document.addEventListener(i,Uo,!0)):document.removeEventListener(i,Uo,!0)}function Vo(t){let e=t.type;if(!Io(e))return!1;if("mousemove"===e){let e=void 0===t.buttons?1:t.buttons;return t instanceof window.MouseEvent&&!No&&(e=Oo[t.which]||0),Boolean(1&e)}return 0===(void 0===t.button?0:t.button)}let qo={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Wo(t,e,i){t.movefn=e,t.upfn=i,document.addEventListener("mousemove",e),document.addEventListener("mouseup",i)}function Ko(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}document.addEventListener("touchend",function(t){qo.mouse.mouseIgnoreJob||jo(!0),qo.mouse.target=Jo(t)[0],qo.mouse.mouseIgnoreJob=xo.debounce(qo.mouse.mouseIgnoreJob,gi.after(2500),function(){jo(),qo.mouse.target=null,qo.mouse.mouseIgnoreJob=null})},!!Do&&{passive:!0});const Jo=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],Yo={},Go=[];function Xo(t){const e=Jo(t);return e.length>0?e[0]:t.target}function Zo(t){let e,i=t.type,o=t.currentTarget[Eo];if(!o)return;let n=o[i];if(n){if(!t[Ao]&&(t[Ao]={},"touch"===i.slice(0,5))){let e=t.changedTouches[0];if("touchstart"===i&&1===t.touches.length&&(qo.touch.id=e.identifier),qo.touch.id!==e.identifier)return;Po||"touchstart"!==i&&"touchmove"!==i||function(t){let e=t.changedTouches[0],i=t.type;if("touchstart"===i)qo.touch.x=e.clientX,qo.touch.y=e.clientY,qo.touch.scrollDecided=!1;else if("touchmove"===i){if(qo.touch.scrollDecided)return;qo.touch.scrollDecided=!0;let i=function(t){let e="auto",i=Jo(t);for(let t,o=0;o<i.length;o++)if(t=i[o],t[$o]){e=t[$o];break}return e}(t),o=!1,n=Math.abs(qo.touch.x-e.clientX),r=Math.abs(qo.touch.y-e.clientY);t.cancelable&&("none"===i?o=!0:"pan-x"===i?o=r>n:"pan-y"===i&&(o=n>r)),o?t.preventDefault():rn("track")}}(t)}if(e=t[Ao],!e.skip){for(let i,o=0;o<Go.length;o++)i=Go[o],n[i.name]&&!e[i.name]&&i.flow&&i.flow.start.indexOf(t.type)>-1&&i.reset&&i.reset();for(let o,r=0;r<Go.length;r++)o=Go[r],n[o.name]&&!e[o.name]&&(e[o.name]=!0,o[i](t))}}}function Qo(t,e,i){return!!Yo[e]&&(function(t,e,i){let o=Yo[e],n=o.deps,r=o.name,s=t[Eo];s||(t[Eo]=s={});for(let e,i,o=0;o<n.length;o++)e=n[o],zo&&Io(e)&&"click"!==e||(i=s[e],i||(s[e]=i={_count:0}),0===i._count&&t.addEventListener(e,Zo,Lo(e)),i[r]=(i[r]||0)+1,i._count=(i._count||0)+1);t.addEventListener(e,i),o.touchAction&&on(t,o.touchAction)}(t,e,i),!0)}function tn(t,e,i){return!!Yo[e]&&(function(t,e,i){let o=Yo[e],n=o.deps,r=o.name,s=t[Eo];if(s)for(let e,i,o=0;o<n.length;o++)e=n[o],i=s[e],i&&i[r]&&(i[r]=(i[r]||1)-1,i._count=(i._count||1)-1,0===i._count&&t.removeEventListener(e,Zo,Lo(e)));t.removeEventListener(e,i)}(t,e,i),!0)}function en(t){Go.push(t);for(let e=0;e<t.emits.length;e++)Yo[t.emits[e]]=t}function on(t,e){Po&&t instanceof HTMLElement&&bi.run(()=>{t.style.touchAction=e}),t[$o]=e}function nn(t,e,i){let o=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(o.detail=i,Ye(t).dispatchEvent(o),o.defaultPrevented){let t=i.preventer||i.sourceEvent;t&&t.preventDefault&&t.preventDefault()}}function rn(t){let e=function(t){for(let e,i=0;i<Go.length;i++){e=Go[i];for(let i,o=0;o<e.emits.length;o++)if(i=e.emits[o],i===t)return e}return null}(t);e.info&&(e.info.prevent=!0)}function sn(t,e,i,o){e&&nn(e,t,{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:o,prevent:function(t){return rn(t)}})}function an(t,e,i){if(t.prevent)return!1;if(t.started)return!0;let o=Math.abs(t.x-e),n=Math.abs(t.y-i);return o>=5||n>=5}function ln(t,e,i){if(!e)return;let o,n=t.moves[t.moves.length-2],r=t.moves[t.moves.length-1],s=r.x-t.x,a=r.y-t.y,l=0;n&&(o=r.x-n.x,l=r.y-n.y),nn(e,"track",{state:t.state,x:i.clientX,y:i.clientY,dx:s,dy:a,ddx:o,ddy:l,sourceEvent:i,hover:function(){return function(t,e){let i=document.elementFromPoint(t,e),o=i;for(;o&&o.shadowRoot&&!window.ShadyDOM;){let n=o;if(o=o.shadowRoot.elementFromPoint(t,e),n===o)break;o&&(i=o)}return i}(i.clientX,i.clientY)}})}function cn(t,e,i){let o=Math.abs(e.clientX-t.x),n=Math.abs(e.clientY-t.y),r=Xo(i||e);!r||Fo[r.localName]&&r.hasAttribute("disabled")||(isNaN(o)||isNaN(n)||o<=25&&n<=25||function(t){if("click"===t.type){if(0===t.detail)return!0;let e=Xo(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;let i=e.getBoundingClientRect(),o=t.pageX,n=t.pageY;return!(o>=i.left&&o<=i.right&&n>=i.top&&n<=i.bottom)}return!1}(e))&&(t.prevent||nn(r,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:i}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/en({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){Ko(this.info)},mousedown:function(t){if(!Vo(t))return;let e=Xo(t),i=this;Wo(this.info,function(t){Vo(t)||(sn("up",e,t),Ko(i.info))},function(t){Vo(t)&&sn("up",e,t),Ko(i.info)}),sn("down",e,t)},touchstart:function(t){sn("down",Xo(t),t.changedTouches[0],t)},touchend:function(t){sn("up",Xo(t),t.changedTouches[0],t)}}),en({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(t){this.moves.length>2&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Ko(this.info)},mousedown:function(t){if(!Vo(t))return;let e=Xo(t),i=this,o=function(t){let o=t.clientX,n=t.clientY;an(i.info,o,n)&&(i.info.state=i.info.started?"mouseup"===t.type?"end":"track":"start","start"===i.info.state&&rn("tap"),i.info.addMove({x:o,y:n}),Vo(t)||(i.info.state="end",Ko(i.info)),e&&ln(i.info,e,t),i.info.started=!0)};Wo(this.info,o,function(t){i.info.started&&o(t),Ko(i.info)}),this.info.x=t.clientX,this.info.y=t.clientY},touchstart:function(t){let e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(t){let e=Xo(t),i=t.changedTouches[0],o=i.clientX,n=i.clientY;an(this.info,o,n)&&("start"===this.info.state&&rn("tap"),this.info.addMove({x:o,y:n}),ln(this.info,e,i),this.info.state="track",this.info.started=!0)},touchend:function(t){let e=Xo(t),i=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:i.clientX,y:i.clientY}),ln(this.info,e,i))}}),en({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(t){Vo(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click:function(t){Vo(t)&&cn(this.info,t)},touchstart:function(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(t){cn(this.info,t.changedTouches[0],t)}});const dn=Le(t=>class extends t{_addEventListenerToNode(t,e,i){Qo(t,e,i)||super._addEventListenerToNode(t,e,i)}_removeEventListenerFromNode(t,e,i){tn(t,e,i)||super._removeEventListenerFromNode(t,e,i)}}),hn=/:host\(:dir\((ltr|rtl)\)\)/g,pn=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,un=/:dir\((?:ltr|rtl)\)/,fn=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),mn=[];
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
 */let gn=null,bn="";function _n(){bn=document.documentElement.getAttribute("dir")}function yn(t){if(!t.__autoDirOptOut){t.setAttribute("dir",bn)}}function vn(){_n(),bn=document.documentElement.getAttribute("dir");for(let t=0;t<mn.length;t++)yn(mn[t])}const wn=Le(t=>{fn||gn||(_n(),gn=new MutationObserver(vn),gn.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const e=Ci(t);class i extends e{static _processStyleText(t,i){return t=e._processStyleText.call(this,t,i),!fn&&un.test(t)&&(t=this._replaceDirInCssText(t),this.__activateDir=!0),t}static _replaceDirInCssText(t){let e=t;return e=e.replace(hn,':host([dir="$1"])'),e=e.replace(pn,':host([dir="$2"]) $1'),e}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){e.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(gn&&gn.takeRecords().length&&vn(),mn.push(this),yn(this))}disconnectedCallback(){if(e.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const t=mn.indexOf(this);t>-1&&mn.splice(t,1)}}}return i.__activateDir=!1,i});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function xn(){document.body.removeAttribute("unresolved")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function Cn(t,e,i){return{index:t,removed:e,addedCount:i}}"interactive"===document.readyState||"complete"===document.readyState?xn():window.addEventListener("DOMContentLoaded",xn);function Sn(t,e,i,o,n,r){let s,a=0,l=0,c=Math.min(i-e,r-n);if(0==e&&0==n&&(a=function(t,e,i){for(let o=0;o<i;o++)if(!Pn(t[o],e[o]))return o;return i}(t,o,c)),i==t.length&&r==o.length&&(l=function(t,e,i){let o=t.length,n=e.length,r=0;for(;r<i&&Pn(t[--o],e[--n]);)r++;return r}(t,o,c-a)),n+=a,r-=l,(i-=l)-(e+=a)==0&&r-n==0)return[];if(e==i){for(s=Cn(e,[],0);n<r;)s.removed.push(o[n++]);return[s]}if(n==r)return[Cn(e,[],i-e)];let d=function(t){let e=t.length-1,i=t[0].length-1,o=t[e][i],n=[];for(;e>0||i>0;){if(0==e){n.push(2),i--;continue}if(0==i){n.push(3),e--;continue}let r,s=t[e-1][i-1],a=t[e-1][i],l=t[e][i-1];r=a<l?a<s?a:s:l<s?l:s,r==s?(s==o?n.push(0):(n.push(1),o=s),e--,i--):r==a?(n.push(3),e--,o=a):(n.push(2),i--,o=l)}return n.reverse(),n}(function(t,e,i,o,n,r){let s=r-n+1,a=i-e+1,l=new Array(s);for(let t=0;t<s;t++)l[t]=new Array(a),l[t][0]=t;for(let t=0;t<a;t++)l[0][t]=t;for(let i=1;i<s;i++)for(let r=1;r<a;r++)if(Pn(t[e+r-1],o[n+i-1]))l[i][r]=l[i-1][r-1];else{let t=l[i-1][r]+1,e=l[i][r-1]+1;l[i][r]=t<e?t:e}return l}(t,e,i,o,n,r));s=void 0;let h=[],p=e,u=n;for(let t=0;t<d.length;t++)switch(d[t]){case 0:s&&(h.push(s),s=void 0),p++,u++;break;case 1:s||(s=Cn(p,[],0)),s.addedCount++,p++,s.removed.push(o[u]),u++;break;case 2:s||(s=Cn(p,[],0)),s.addedCount++,p++;break;case 3:s||(s=Cn(p,[],0)),s.removed.push(o[u]),u++}return s&&h.push(s),h}function kn(t,e){return Sn(t,0,t.length,e,0,e.length)}function Pn(t,e){return t===e}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function En(t){return"slot"===t.localName}let An=class{static getFlattenedNodes(t){const e=Ye(t);if(En(t))return e.assignedNodes({flatten:!0});{const t=[];for(let i=0;i<e.childNodes.length;i++){const o=e.childNodes[i];if(En(o)){const e=o;t.push(...Ye(e).assignedNodes({flatten:!0}))}else t.push(o)}return t}}constructor(t,e){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=t,this.callback=e,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){En(this._target)?this._listenSlots([this._target]):Ye(this._target).children&&(this._listenSlots(Ye(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,t=>{this._processMutations(t)}):(this._nativeChildrenObserver=new MutationObserver(t=>{this._processMutations(t)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){En(this._target)?this._unlistenSlots([this._target]):Ye(this._target).children&&(this._unlistenSlots(Ye(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,bi.run(()=>this.flush()))}_processMutations(t){this._processSlotMutations(t),this.flush()}_processSlotMutations(t){if(t)for(let e=0;e<t.length;e++){let i=t[e];i.addedNodes&&this._listenSlots(i.addedNodes),i.removedNodes&&this._unlistenSlots(i.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let t={target:this._target,addedNodes:[],removedNodes:[]},e=this.constructor.getFlattenedNodes(this._target),i=kn(e,this._effectiveNodes);for(let e,o=0;o<i.length&&(e=i[o]);o++)for(let i,o=0;o<e.removed.length&&(i=e.removed[o]);o++)t.removedNodes.push(i);for(let o,n=0;n<i.length&&(o=i[n]);n++)for(let i=o.index;i<o.index+o.addedCount;i++)t.addedNodes.push(e[i]);this._effectiveNodes=e;let o=!1;return(t.addedNodes.length||t.removedNodes.length)&&(o=!0,this.callback.call(this._target,t)),o}_listenSlots(t){for(let e=0;e<t.length;e++){let i=t[e];En(i)&&i.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(t){for(let e=0;e<t.length;e++){let i=t[e];En(i)&&i.removeEventListener("slotchange",this._boundSchedule)}}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const $n=function(){let t,e;do{t=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),e=ko()}while(t||e)},Tn=Element.prototype,On=Tn.matches||Tn.matchesSelector||Tn.mozMatchesSelector||Tn.msMatchesSelector||Tn.oMatchesSelector||Tn.webkitMatchesSelector,Nn=function(t,e){return On.call(t,e)};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class In{constructor(t){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(t),this.node=t}observeNodes(t){return new An(this.node,t)}unobserveNodes(t){t.disconnect()}notifyObserver(){}deepContains(t){if(Ye(this.node).contains(t))return!0;let e=t,i=t.ownerDocument;for(;e&&e!==i&&e!==this.node;)e=Ye(e).parentNode||Ye(e).host;return e===this.node}getOwnerRoot(){return Ye(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?Ye(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let t=[],e=Ye(this.node).assignedSlot;for(;e;)t.push(e),e=Ye(e).assignedSlot;return t}importNode(t,e){let i=this.node instanceof Document?this.node:this.node.ownerDocument;return Ye(i).importNode(t,e)}getEffectiveChildNodes(){return An.getFlattenedNodes(this.node)}queryDistributedElements(t){let e=this.getEffectiveChildNodes(),i=[];for(let o,n=0,r=e.length;n<r&&(o=e[n]);n++)o.nodeType===Node.ELEMENT_NODE&&Nn(o,t)&&i.push(o);return i}get activeElement(){let t=this.node;return void 0!==t._activeElement?t._activeElement:t.activeElement}}function Dn(t,e){for(let i=0;i<e.length;i++){let o=e[i];Object.defineProperty(t,o,{get:function(){return this.node[o]},configurable:!0})}}class Ln{constructor(t){this.event=t}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}In.prototype.cloneNode,In.prototype.appendChild,In.prototype.insertBefore,In.prototype.removeChild,In.prototype.replaceChild,In.prototype.setAttribute,In.prototype.removeAttribute,In.prototype.querySelector,In.prototype.querySelectorAll,In.prototype.parentNode,In.prototype.firstChild,In.prototype.lastChild,In.prototype.nextSibling,In.prototype.previousSibling,In.prototype.firstElementChild,In.prototype.lastElementChild,In.prototype.nextElementSibling,In.prototype.previousElementSibling,In.prototype.childNodes,In.prototype.children,In.prototype.classList,In.prototype.textContent,In.prototype.innerHTML;let zn=In;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class t extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(In.prototype).forEach(e=>{"activeElement"!=e&&(t.prototype[e]=In.prototype[e])}),Dn(t.prototype,["classList"]),zn=t,Object.defineProperties(Ln.prototype,{localTarget:{get(){const t=this.event.currentTarget,e=t&&Mn(t).getOwnerRoot(),i=this.path;for(let t=0;t<i.length;t++){const o=i[t];if(Mn(o).getOwnerRoot()===e)return o}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(t,e){for(let i=0;i<e.length;i++){let o=e[i];t[o]=function(){return this.node[o].apply(this.node,arguments)}}}(In.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll","attachShadow"]),Dn(In.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList","shadowRoot"]),function(t,e){for(let i=0;i<e.length;i++){let o=e[i];Object.defineProperty(t,o,{get:function(){return this.node[o]},set:function(t){this.node[o]=t},configurable:!0})}}(In.prototype,["textContent","innerHTML","className"]);const Mn=function(t){if((t=t||document)instanceof zn)return t;if(t instanceof Ln)return t;let e=t.__domApi;return e||(e=t instanceof Event?new Ln(t):new zn(t),t.__domApi=e),e},Rn=window.ShadyDOM,Fn=window.ShadyCSS;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Hn(t,e){return Ye(t).getRootNode()===e}
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
const Bn="disable-upgrade",Un=t=>{for(;t;){const e=Object.getOwnPropertyDescriptor(t,"observedAttributes");if(e)return e.get;t=Object.getPrototypeOf(t.prototype).constructor}return()=>[]};Le(t=>{const e=wo(t);let i=Un(e);return class extends e{constructor(){super(),this.__isUpgradeDisabled}static get observedAttributes(){return i.call(this).concat(Bn)}_initializeProperties(){this.hasAttribute(Bn)?this.__isUpgradeDisabled=!0:super._initializeProperties()}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(t){return super._canApplyPropertyDefault(t)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(t))}attributeChangedCallback(t,e,i,o){t==Bn?this.__isUpgradeDisabled&&null==i&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,Ye(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(t,e,i,o)}connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const jn="disable-upgrade";let Vn=window.ShadyCSS;const qn=Le(t=>{const e=dn(wo(t)),i=vo?e:wn(e),o=Un(i),n={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class r extends i{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this.__isUpgradeDisabled,this.__needsAttributesAtConnected,this._legacyForceObservedAttributes}static get importMeta(){return this.prototype.importMeta}created(){}__attributeReaction(t,e,i){(this.__dataAttributes&&this.__dataAttributes[t]||t===jn)&&this.attributeChangedCallback(t,e,i,null)}setAttribute(t,e){if(Ne&&!this._legacyForceObservedAttributes){const i=this.getAttribute(t);super.setAttribute(t,e),this.__attributeReaction(t,i,String(e))}else super.setAttribute(t,e)}removeAttribute(t){if(Ne&&!this._legacyForceObservedAttributes){const e=this.getAttribute(t);super.removeAttribute(t),this.__attributeReaction(t,e,null)}else super.removeAttribute(t)}static get observedAttributes(){return Ne&&!this.prototype._legacyForceObservedAttributes?(this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))||(this.__observedAttributes=[],this.prototype),this.__observedAttributes):o.call(this).concat(jn)}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(t){return super._canApplyPropertyDefault(t)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(t))}connectedCallback(){this.__needsAttributesAtConnected&&this._takeAttributes(),this.__isUpgradeDisabled||(super.connectedCallback(),this.isAttached=!0,this.attached())}attached(){}disconnectedCallback(){this.__isUpgradeDisabled||(super.disconnectedCallback(),this.isAttached=!1,this.detached())}detached(){}attributeChangedCallback(t,e,i,o){e!==i&&(t==jn?this.__isUpgradeDisabled&&null==i&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,Ye(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(t,e,i,o),this.attributeChanged(t,e,i)))}attributeChanged(t,e,i){}_initializeProperties(){if(Se&&this.hasAttribute(jn))this.__isUpgradeDisabled=!0;else{let t=Object.getPrototypeOf(this);t.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",t))||(this._registered(),t.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),Ne&&!this._legacyForceObservedAttributes&&(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0)),this._applyListeners()}}_takeAttributes(){const t=this.attributes;for(let e=0,i=t.length;e<i;e++){const i=t[e];this.__attributeReaction(i.name,null,i.value)}}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(t){return this._serializeValue(t)}deserialize(t,e){return this._deserializeValue(t,e)}reflectPropertyToAttribute(t,e,i){this._propertyToAttribute(t,e,i)}serializeValueToAttribute(t,e,i){this._valueToNodeAttribute(i||this,t,e)}extend(t,e){if(!t||!e)return t||e;let i=Object.getOwnPropertyNames(e);for(let o,n=0;n<i.length&&(o=i[n]);n++){let i=Object.getOwnPropertyDescriptor(e,o);i&&Object.defineProperty(t,o,i)}return t}mixin(t,e){for(let i in e)t[i]=e[i];return t}chainObject(t,e){return t&&e&&t!==e&&(t.__proto__=e),t}instanceTemplate(t){let e=this.constructor._contentForTemplate(t);return document.importNode(e,!0)}fire(t,e,i){i=i||{},e=null==e?{}:e;let o=new Event(t,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});o.detail=e;let n=i.node||this;return Ye(n).dispatchEvent(o),o}listen(t,e,i){t=t||this;let o=this.__boundListeners||(this.__boundListeners=new WeakMap),n=o.get(t);n||(n={},o.set(t,n));let r=e+i;n[r]||(n[r]=this._addMethodEventListenerToNode(t,e,i,this))}unlisten(t,e,i){t=t||this;let o=this.__boundListeners&&this.__boundListeners.get(t),n=e+i,r=o&&o[n];r&&(this._removeEventListenerFromNode(t,e,r),o[n]=null)}setScrollDirection(t,e){on(e||this,n[t]||"auto")}$$(t){return this.root.querySelector(t)}get domHost(){let t=Ye(this).getRootNode();return t instanceof DocumentFragment?t.host:t}distributeContent(){const t=Mn(this);window.ShadyDOM&&t.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return Mn(this).getEffectiveChildNodes()}queryDistributedElements(t){return Mn(this).queryDistributedElements(t)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter(function(t){return t.nodeType===Node.ELEMENT_NODE})}getEffectiveTextContent(){let t=this.getEffectiveChildNodes(),e=[];for(let i,o=0;i=t[o];o++)i.nodeType!==Node.COMMENT_NODE&&e.push(i.textContent);return e.join("")}queryEffectiveChildren(t){let e=this.queryDistributedElements(t);return e&&e[0]}queryAllEffectiveChildren(t){return this.queryDistributedElements(t)}getContentChildNodes(t){let e=this.root.querySelector(t||"slot");return e?Mn(e).getDistributedNodes():[]}getContentChildren(t){let e=this.getContentChildNodes(t).filter(function(t){return t.nodeType===Node.ELEMENT_NODE});return e}isLightDescendant(t){const e=this;return e!==t&&Ye(e).contains(t)&&Ye(e).getRootNode()===Ye(t).getRootNode()}isLocalDescendant(t){return this.root===Ye(t).getRootNode()}scopeSubtree(t,e=!1){return function(t,e=!1){if(!Rn||!Fn)return null;if(!Rn.handlesDynamicScoping)return null;const i=Fn.ScopingShim;if(!i)return null;const o=i.scopeForNode(t),n=Ye(t).getRootNode(),r=t=>{if(!Hn(t,n))return;const e=Array.from(Rn.nativeMethods.querySelectorAll.call(t,"*"));e.push(t);for(let t=0;t<e.length;t++){const r=e[t];if(!Hn(r,n))continue;const s=i.currentScopeForNode(r);s!==o&&(""!==s&&i.unscopeNode(r,s),i.scopeNode(r,o))}};if(r(t),e){const e=new MutationObserver(t=>{for(let e=0;e<t.length;e++){const i=t[e];for(let t=0;t<i.addedNodes.length;t++){const e=i.addedNodes[t];e.nodeType===Node.ELEMENT_NODE&&r(e)}}});return e.observe(t,{childList:!0,subtree:!0}),e}return null}(t,e)}getComputedStyleValue(t){return Vn.getComputedStyleValue(this,t)}debounce(t,e,i){return this._debouncers=this._debouncers||{},this._debouncers[t]=xo.debounce(this._debouncers[t],i>0?gi.after(i):bi,e.bind(this))}isDebouncerActive(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];return!(!e||!e.isActive())}flushDebouncer(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];e&&e.flush()}cancelDebouncer(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];e&&e.cancel()}async(t,e){return e>0?gi.run(t.bind(this),e):~bi.run(t.bind(this))}cancelAsync(t){t<0?bi.cancel(~t):gi.cancel(t)}create(t,e){let i=document.createElement(t);if(e)if(i.setProperties)i.setProperties(e);else for(let t in e)i[t]=e[t];return i}elementMatches(t,e){return Nn(e||this,t)}toggleAttribute(t,e){let i=this;return 3===arguments.length&&(i=arguments[2]),1==arguments.length&&(e=!i.hasAttribute(t)),e?(Ye(i).setAttribute(t,""),!0):(Ye(i).removeAttribute(t),!1)}toggleClass(t,e,i){i=i||this,1==arguments.length&&(e=!i.classList.contains(t)),e?i.classList.add(t):i.classList.remove(t)}transform(t,e){(e=e||this).style.webkitTransform=t,e.style.transform=t}translate3d(t,e,i,o){o=o||this,this.transform("translate3d("+t+","+e+","+i+")",o)}arrayDelete(t,e){let i;if(Array.isArray(t)){if(i=t.indexOf(e),i>=0)return t.splice(i,1)}else{if(i=oi(this,t).indexOf(e),i>=0)return this.splice(t,i,1)}return null}_logger(t,e){switch(Array.isArray(e)&&1===e.length&&Array.isArray(e[0])&&(e=e[0]),t){case"log":case"warn":case"error":console[t](...e)}}_log(...t){this._logger("log",t)}_warn(...t){this._logger("warn",t)}_error(...t){this._logger("error",t)}_logf(t,...e){return["[%s::%s]",this.is,t,...e]}}return r.prototype.is="",r});
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
function Wn(t,e,i,o,n){let r;n&&(r="object"==typeof i&&null!==i,r&&(o=t.__dataTemp[e]));let s=o!==i&&(o==o||i==i);return r&&s&&(t.__dataTemp[e]=i),s}Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},{attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0}),qn(HTMLElement);const Kn=Le(t=>class extends t{_shouldPropertyChange(t,e,i){return Wn(this,t,e,i,!0)}}),Jn=Le(t=>class extends t{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(t,e,i){return Wn(this,t,e,i,this.mutableData)}});Kn._mutablePropertyChange=Wn;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Yn=null;function Gn(){return Yn}Gn.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:Gn,writable:!0}});const Xn=bo(Gn),Zn=Kn(Xn);const Qn=bo(class{});function tr(t,e){for(let i=0;i<e.length;i++){let o=e[i];if(Boolean(t)!=Boolean(o.__hideTemplateChildren__))if(o.nodeType===Node.TEXT_NODE)t?(o.__polymerTextContent__=o.textContent,o.textContent=""):o.textContent=o.__polymerTextContent__;else if("slot"===o.localName)if(t)o.__polymerReplaced__=document.createComment("hidden-slot"),Ye(Ye(o).parentNode).replaceChild(o.__polymerReplaced__,o);else{const t=o.__polymerReplaced__;t&&Ye(Ye(t).parentNode).replaceChild(o,t)}else o.style&&(t?(o.__polymerDisplay__=o.style.display,o.style.display="none"):o.style.display=o.__polymerDisplay__);o.__hideTemplateChildren__=t,o._showHideChildren&&o._showHideChildren(t)}}class er extends Qn{constructor(t){super(),this._configureProperties(t),this.root=this._stampTemplate(this.__dataHost);let e=[];this.children=e;for(let t=this.root.firstChild;t;t=t.nextSibling)e.push(t),t.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let i=this.__templatizeOptions;(t&&i.instanceProps||!i.instanceProps)&&this._enableProperties()}_configureProperties(t){if(this.__templatizeOptions.forwardHostProp)for(let t in this.__hostProps)this._setPendingProperty(t,this.__dataHost["_host_"+t]);for(let e in t)this._setPendingProperty(e,t[e])}forwardHostProp(t,e){this._setPendingPropertyOrPath(t,e,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(t,e,i){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(t,e,t=>{t.model=this,i(t)});else{let o=this.__dataHost.__dataHost;o&&o._addEventListenerToNode(t,e,i)}}_showHideChildren(t){tr(t,this.children)}_setUnmanagedPropertyToNode(t,e,i){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&"textContent"==e?t.__polymerTextContent__=i:super._setUnmanagedPropertyToNode(t,e,i)}get parentModel(){let t=this.__parentModel;if(!t){let e;t=this;do{t=t.__dataHost.__dataHost}while((e=t.__templatizeOptions)&&!e.parentModel);this.__parentModel=t}return t}dispatchEvent(t){return!0}}er.prototype.__dataHost,er.prototype.__templatizeOptions,er.prototype._methodHost,er.prototype.__templatizeOwner,er.prototype.__hostProps;const ir=Kn(er);function or(t){let e=t.__dataHost;return e&&e._methodHost||e}function nr(t,e,i){let o=i.mutableData?ir:er;cr.mixin&&(o=cr.mixin(o));let n=class extends o{};return n.prototype.__templatizeOptions=i,n.prototype._bindTemplate(t),function(t,e,i,o){let n=i.hostProps||{};for(let e in o.instanceProps){delete n[e];let i=o.notifyInstanceProp;i&&t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:ar(e,i)})}if(o.forwardHostProp&&e.__dataHost)for(let e in n)i.hasHostProps||(i.hasHostProps=!0),t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:lr()})}(n,t,e,i),n}function rr(t,e,i,o){let n=i.forwardHostProp;if(n&&e.hasHostProps){const r="template"==t.localName;let s=e.templatizeTemplateClass;if(!s){if(r){let t=i.mutableData?Zn:Xn;class o extends t{}s=e.templatizeTemplateClass=o}else{const i=t.constructor;class o extends i{}s=e.templatizeTemplateClass=o}let a=e.hostProps;for(let t in a)s.prototype._addPropertyEffect("_host_"+t,s.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:sr(t,n)}),s.prototype._createNotifyingProperty("_host_"+t);ke&&o&&function(t,e,i){const o=i.constructor._properties,{propertyEffects:n}=t,{instanceProps:r}=e;for(let t in n)if(!(o[t]||r&&r[t])){const e=n[t];for(let i=0;i<e.length;i++){const{part:o}=e[i].info;if(!o.signature||!o.signature.static){console.warn(`Property '${t}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}(e,i,o)}if(t.__dataProto&&Object.assign(t.__data,t.__dataProto),r)!function(t,e){Yn=t,Object.setPrototypeOf(t,e.prototype),new e,Yn=null}(t,s),t.__dataTemp={},t.__dataPending=null,t.__dataOld=null,t._enableProperties();else{Object.setPrototypeOf(t,s.prototype);const i=e.hostProps;for(let e in i)if(e="_host_"+e,e in t){const i=t[e];delete t[e],t.__data[e]=i}}}}function sr(t,e){return function(t,i,o){e.call(t.__templatizeOwner,i.substring(6),o[i])}}function ar(t,e){return function(t,i,o){e.call(t.__templatizeOwner,t,i,o[i])}}function lr(){return function(t,e,i){t.__dataHost._setPendingPropertyOrPath("_host_"+e,i[e],!0,!0)}}function cr(t,e,i){if(xe&&!or(t))throw new Error("strictTemplatePolicy: template owner not trusted");if(i=i||{},t.__templatizeOwner)throw new Error("A <template> can only be templatized once");t.__templatizeOwner=e;let o=(e?e.constructor:er)._parseTemplate(t),n=o.templatizeInstanceClass;n||(n=nr(t,o,i),o.templatizeInstanceClass=n);const r=or(t);rr(t,o,i,r);let s=class extends n{};return s.prototype._methodHost=r,s.prototype.__dataHost=t,s.prototype.__templatizeOwner=e,s.prototype.__hostProps=o.hostProps,s}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let dr=!1;function hr(){if(Se&&!be){if(!dr){dr=!0;const t=document.createElement("style");t.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(t)}return!0}return!1}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const pr=dn(Jn(bo(HTMLElement)));customElements.define("dom-bind",class extends pr{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),xe)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(t,e,i,o){this.mutableData=!0}connectedCallback(){hr()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){Ye(Ye(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let t=0;t<this.__children.length;t++)this.root.appendChild(this.__children[t])}render(){let t;if(!this.__children){if(t=t||this.querySelector("template"),!t){let e=new MutationObserver(()=>{if(t=this.querySelector("template"),!t)throw new Error("dom-bind requires a <template> child");e.disconnect(),this.render()});return void e.observe(this,{childList:!0})}this.root=this._stampTemplate(t),this.$=this.root.$,this.__children=[];for(let t=this.root.firstChild;t;t=t.nextSibling)this.__children[this.__children.length]=t;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const ur=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:t=>t});class fr{constructor(t,e){gr(t,e);const i=e.reduce((e,i,o)=>e+mr(i)+t[o+1],t[0]);this.value=i.toString()}toString(){return this.value}}function mr(t){if(t instanceof fr)return t.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${t}`)}const gr=(t,e)=>{if(!Array.isArray(t)||!Array.isArray(t.raw)||e.length!==t.length-1)throw new TypeError("Invalid call to the html template tag")},br=wo(HTMLElement),_r=Jn(br);class yr extends _r{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!Oe,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let t=0;t<this.__instances.length;t++)this.__detachInstance(t);this.__chunkingId&&cancelAnimationFrame(this.__chunkingId)}connectedCallback(){if(super.connectedCallback(),hr()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let t=Ye(Ye(this).parentNode);for(let e=0;e<this.__instances.length;e++)this.__attachInstance(e,t);this.__chunkingId&&this.__render()}}__ensureTemplatized(){if(!this.__ctor){const t=this;let e=this.template=t._templateInfo?t:this.querySelector("template");if(!e){let t=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}let i={};i[this.as]=!0,i[this.indexAs]=!0,i[this.itemsIndexAs]=!0,this.__ctor=cr(e,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:i,forwardHostProp:function(t,e){let i=this.__instances;for(let o,n=0;n<i.length&&(o=i[n]);n++)o.forwardHostProp(t,e)},notifyInstanceProp:function(t,e,i){if((o=this.as)===(n=e)||Ze(o,n)||Qe(o,n)){let o=t[this.itemsIndexAs];e==this.as&&(this.items[o]=i);let n=ti(this.as,`${JSCompiler_renameProperty("items",this)}.${o}`,e);this.notifyPath(n,i)}var o,n}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(t){if("string"==typeof t){let e=t,i=this.__getMethodHost();return function(){return i[e].apply(i,arguments)}}return t}__sortChanged(t){this.__sortFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__filterChanged(t){this.__filterFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(t){return Math.ceil(1e3/t)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(t){if(this.__sortFn||this.__filterFn)if(t){if(this.__observePaths){let e=this.__observePaths;for(let i=0;i<e.length;i++)0===t.indexOf(e[i])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__itemsChanged(t){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(t.path,t.value)||("items"===t.path&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(t,e=0){this.__renderDebouncer=xo.debounce(this.__renderDebouncer,e>0?gi.after(e):bi,t.bind(this)),So(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),$n()}__render(){if(!this.__ensureTemplatized())return;let t=this.items||[];const e=this.__sortAndFilterItems(t),i=this.__calculateLimit(e.length);this.__updateInstances(t,i,e),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>{this.__chunkingId=null,this.__continueChunking()})),this._setRenderedItemCount(this.__instances.length),Oe&&!this.notifyDomChange||this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(t){let e=new Array(t.length);for(let i=0;i<t.length;i++)e[i]=i;return this.__filterFn&&(e=e.filter((e,i,o)=>this.__filterFn(t[e],i,o))),this.__sortFn&&e.sort((e,i)=>this.__sortFn(t[e],t[i])),e}__calculateLimit(t){let e=t;const i=this.__instances.length;if(this.initialCount){let o;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(e=Math.min(t,this.initialCount),o=Math.max(e-i,0),this.__chunkCount=o||1):(o=Math.min(Math.max(t-i,0),this.__chunkCount),e=Math.min(i+o,t)),this.__shouldMeasureChunk=o===this.__chunkCount,this.__shouldContinueChunking=e<t,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,e}__continueChunking(){if(this.__shouldMeasureChunk){const t=performance.now()-this.__renderStartTime,e=this._targetFrameTime/t;this.__chunkCount=Math.round(this.__chunkCount*e)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(t,e,i){const o=this.__itemsIdxToInstIdx={};let n;for(n=0;n<e;n++){let e=this.__instances[n],r=i[n],s=t[r];o[r]=n,e?(e._setPendingProperty(this.as,s),e._setPendingProperty(this.indexAs,n),e._setPendingProperty(this.itemsIndexAs,r),e._flushProperties()):this.__insertInstance(s,n,r)}for(let t=this.__instances.length-1;t>=n;t--)this.__detachAndRemoveInstance(t)}__detachInstance(t){let e=this.__instances[t];const i=Ye(e.root);for(let t=0;t<e.children.length;t++){let o=e.children[t];i.appendChild(o)}return e}__attachInstance(t,e){let i=this.__instances[t];e.insertBefore(i.root,this)}__detachAndRemoveInstance(t){this.__detachInstance(t),this.__instances.splice(t,1)}__stampInstance(t,e,i){let o={};return o[this.as]=t,o[this.indexAs]=e,o[this.itemsIndexAs]=i,new this.__ctor(o)}__insertInstance(t,e,i){const o=this.__stampInstance(t,e,i);let n=this.__instances[e+1],r=n?n.children[0]:this;return Ye(Ye(this).parentNode).insertBefore(o.root,r),this.__instances[e]=o,o}_showHideChildren(t){for(let e=0;e<this.__instances.length;e++)this.__instances[e]._showHideChildren(t)}__handleItemPath(t,e){let i=t.slice(6),o=i.indexOf("."),n=o<0?i:i.substring(0,o);if(n==parseInt(n,10)){let t=o<0?"":i.substring(o+1);this.__handleObservedPaths(t);let r=this.__itemsIdxToInstIdx[n],s=this.__instances[r];if(s){let i=this.as+(t?"."+t:"");s._setPendingPropertyOrPath(i,e,!1,!0),s._flushProperties()}return!0}}itemForElement(t){let e=this.modelForElement(t);return e&&e[this.as]}indexForElement(t){let e=this.modelForElement(t);return e&&e[this.indexAs]}modelForElement(t){return function(t,e){let i;for(;e;)if(i=e.__dataHost?e:e.__templatizeInstance){if(i.__dataHost==t)return i;e=i.__dataHost}else e=Ye(e).parentNode;return null}(this.template,t)}}customElements.define(yr.is,yr);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class vr extends br{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=xo.debounce(this.__renderDebouncer,bi,()=>this.__render()),So(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const t=Ye(this).parentNode;t&&(t.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||Ye(t).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),hr()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const t=this;let e=t._templateInfo?t:Ye(t).querySelector("template");if(!e){let t=new MutationObserver(()=>{if(!Ye(this).querySelector("template"))throw new Error("dom-if requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}this.__template=e}return!0}__ensureInstance(){let t=Ye(this).parentNode;if(this.__hasInstance()){let e=this.__getInstanceNodes();if(e&&e.length){if(Ye(this).previousSibling!==e[e.length-1])for(let i,o=0;o<e.length&&(i=e[o]);o++)Ye(t).insertBefore(i,this)}}else{if(!t)return!1;if(!this.__ensureTemplate())return!1;this.__createAndInsertInstance(t)}return!0}render(){$n()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),Oe&&!this.notifyDomChange||this.if==this._lastIf||(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(t){}__teardownInstance(){}_showHideChildren(){}}const wr=Te?class extends vr{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(t){const e=this.__dataHost||this;if(xe&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const i=e._bindTemplate(this.__template,!0);i.runEffects=(t,e,i)=>{let o=this.__syncInfo;if(this.if)o&&(this.__syncInfo=null,this._showHideChildren(),e=Object.assign(o.changedProps,e)),t(e,i);else if(this.__instance)if(o||(o=this.__syncInfo={runEffects:t,changedProps:{}}),i)for(const t in e){const e=Xe(t);o.changedProps[e]=this.__dataHost[e]}else Object.assign(o.changedProps,e)},this.__instance=e._stampTemplate(this.__template,i),Ye(t).insertBefore(this.__instance,this)}__syncHostProperties(){const t=this.__syncInfo;t&&(this.__syncInfo=null,t.runEffects(t.changedProps,!1))}__teardownInstance(){const t=this.__dataHost||this;this.__instance&&(t._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const t=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==t&&(this.__instance.__hidden=t,tr(t,this.__instance.templateInfo.childNodes)),t||this.__syncHostProperties()}}:class extends vr{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(t){this.__ctor||(this.__ctor=cr(this.__template,this,{mutableData:!0,forwardHostProp:function(t,e){this.__instance&&(this.if?this.__instance.forwardHostProp(t,e):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[Xe(t)]=!0))}})),this.__instance=new this.__ctor,Ye(t).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let t=this.__instance.children;if(t&&t.length){let e=Ye(t[0]).parentNode;if(e){e=Ye(e);for(let i,o=0;o<t.length&&(i=t[o]);o++)e.removeChild(i)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let t=this.__invalidProps;if(t){this.__invalidProps=null;for(let e in t)this.__instance._setPendingProperty(e,this.__dataHost[e]);this.__instance._flushProperties()}}_showHideChildren(){const t=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==t&&(this.__instance.__hidden=t,this.__instance._showHideChildren(t)),t||this.__syncHostProperties()}};customElements.define(wr.is,wr);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let xr=Le(t=>{let e=wo(t);return class extends e{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(t,e){let i=e.path;if(i==JSCompiler_renameProperty("items",this)){let i=e.base||[],o=this.__lastItems;if(t!==this.__lastMulti&&this.clearSelection(),o){let t=kn(i,o);this.__applySplices(t)}this.__lastItems=i,this.__lastMulti=t}else if(e.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(e.value.indexSplices);else{let t=i.slice(`${JSCompiler_renameProperty("items",this)}.`.length),e=parseInt(t,10);t.indexOf(".")<0&&t==e&&this.__deselectChangedIdx(e)}}__applySplices(t){let e=this.__selectedMap;for(let i=0;i<t.length;i++){let o=t[i];e.forEach((t,i)=>{t<o.index||(t>=o.index+o.removed.length?e.set(i,t+o.addedCount-o.removed.length):e.set(i,-1))});for(let t=0;t<o.addedCount;t++){let i=o.index+t;e.has(this.items[i])&&e.set(this.items[i],i)}}this.__updateLinks();let i=0;e.forEach((t,o)=>{t<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),i,1):this.selected=this.selectedItem=null,e.delete(o)):i++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let t=0;this.__selectedMap.forEach(e=>{e>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${e}`,`${JSCompiler_renameProperty("selected",this)}.${t++}`)})}else this.__selectedMap.forEach(t=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${t}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${t}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(t){return this.__selectedMap.has(t)}isIndexSelected(t){return this.isSelected(this.items[t])}__deselectChangedIdx(t){let e=this.__selectedIndexForItemIndex(t);if(e>=0){let t=0;this.__selectedMap.forEach((i,o)=>{e==t++&&this.deselect(o)})}}__selectedIndexForItemIndex(t){let e=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${t}`];if(e)return parseInt(e.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(t){let e=this.__selectedMap.get(t);if(e>=0){let i;this.__selectedMap.delete(t),this.multi&&(i=this.__selectedIndexForItemIndex(e)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),i,1):this.selected=this.selectedItem=null}}deselectIndex(t){this.deselect(this.items[t])}select(t){this.selectIndex(this.items.indexOf(t))}selectIndex(t){let e=this.items[t];this.isSelected(e)?this.toggle&&this.deselectIndex(t):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(e,t),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),e):this.selected=this.selectedItem=e)}}}),Cr=xr(br);class Sr extends Cr{static get is(){return"array-selector"}static get template(){return null}}customElements.define(Sr.is,Sr);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const kr=new ae;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(t,e,i){},prepareTemplateDom(t,e){},prepareTemplateStyles(t,e,i){},styleSubtree(t,e){kr.processStyles(),Mt(t,e)},styleElement(t){kr.processStyles()},styleDocument(t){kr.processStyles(),Mt(document.body,t)},getComputedStyleValue:(t,e)=>Rt(t,e),flushCustomStyles(){},nativeCss:ut,nativeShadow:lt,cssBuild:dt,disableRuntime:pt}),window.ShadyCSS.CustomStyleInterface=kr;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Pr="include",Er=window.ShadyCSS.CustomStyleInterface;class Ar extends HTMLElement{constructor(){super(),this._style=null,Er.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const t=this.querySelector("style");if(!t)return null;this._style=t;const e=t.getAttribute(Pr);return e&&(t.removeAttribute(Pr),t.textContent=function(t){let e=t.trim().split(/\s+/),i="";for(let t=0;t<e.length;t++)i+=Je(e[t]);return i}(e)+t.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",Ar),
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
qn(HTMLElement).prototype;
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
const $r=(function(t,...e){gr(t,e);const i=document.createElement("template");let o=e.reduce((e,i,o)=>e+function(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof fr)return mr(t);throw new Error(`non-template value passed to Polymer's html function: ${t}`)}(i)+t[o+1],t[0]);return ur&&(o=ur.createHTML(o)),i.innerHTML=o,i})`
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
`;$r.setAttribute("style","display: none;"),document.head.appendChild($r.content);const Tr=document.createElement("template"),Or="\n// Default styles for the elements\n    :host {\n        --header-spacing: 16px !important;\n        --body-spacing: 8px 16px !important;\n        --footer-spacing: 16px !important;\n    }\n    sl-dialog::part(panel) {\n        border-radius: 16px;\n        --width: fit-content;\n    }\n    sl-dialog::part(body), sl-dialog::part(footer), sl-dialog::part(title) {\n        padding: 16px;\n    }\n    sl-button::part(label) {\n        font-family: Roboto;\n        font-size: 16px;\n        font-weight: normal;\n        color: var(--sl-color-gray-500);\n    }\n    sl-button::part(base) {\n        border-radius: 16px !important;\n        border-color: var(--sl-color-gray-200);\n    }\n    sl-input::part(base) {\n        box-shadow: none !important;\n        font-family: Roboto;\n        outline: none;\n        border-radius: 0;\n        border: none;\n        border-bottom: 1px solid var(--sl-color-gray-500);\n    }\n    sl-input::part(form-control-label) {\n        font-size: 12px;\n    }\n    sl-input::part(password-toggle-button),\n    sl-input::part(clear-button) {\n        width: fit-content;\n        padding: 0 4px;\n    }\n    sl-icon {\n        color: var(--primary-color, var(--sl-color-gray-700));\n        font-size: 24px;\n    }\n    sl-icon-button::part(base) {\n        color: var(--primary-color, var(--sl-color-gray-700));\n        font-size: 24px;\n    }\n    sl-icon-button::part(base):hover {\n        color: var(--secondary-color, black) !important;\n    }\n    sl-avatar {\n        --size: 30px;\n    }\n    sl-menu {\n        border: none;\n        border-radius: 16px;\n    }\n    sl-icon-button::part(base) {\n        padding: 0;\n    }\n    sl-dropdown::part(panel) {\n        background: white;\n        border-radius: 16px;\n    }\n    sl-alert sl-icon {\n        color: var(--accent-color, red);\n    }\n    sl-alert::part(base) {\n        border-top-color: var(--accent-color, red);\n    }\n\n// Attribute styles\n    sl-dialog[no-x]::part(close-button) {\n        display: none;\n    }\n    sl-dialog[no-actions]::part(header-actions) {\n        display: none;\n    }\n    sl-dialog[filled]::part(header) {\n        color: white;\n        border-radius: 16px 16px 0 0;\n        background: var(--primary-color, var(--sl-color-gray-500));\n    }\n    sl-dialog[filled]::part(title) {\n        color: white;\n        border-radius: 16px 16px 0 0;\n        background: var(--primary-color, var(--sl-color-gray-500));\n    }\n    sl-dialog[centered]::part(header) {\n        text-align: center;\n    }\n// Primary Buttons\n    sl-button[variant='primary'] {\n        background-color: var(--primary-color, var(--sl-color-gray-500));\n    }\n    sl-button[variant='primary']::part(label) {\n        color: white;\n    }\n    sl-button[variant='primary']::part(base) {\n        background-color: var(--primary-color, var(--sl-color-gray-500));\n    }\n    sl-button[variant='primary']::part(base):hover {\n        background-color: var(--secondary-color, var(--sl-color-gray-600));\n        border-color: var(--secondary-color, var(--sl-color-gray-600));\n        color: var(--primary-color, var(--sl-color-gray-600));\n    }\n    sl-button[variant='primary']:hover {\n        color: var(--primary-color, var(--sl-color-gray-600));\n    }\n// Default Buttons\n    sl-button[variant='default']::part(base) {\n        background: white !important;\n    }\n    sl-button[variant='default']::part(base):hover {\n        border-color: var(--primary-color, var(--sl-color-gray-400));\n        color: var(--primary-color, var(--sl-color-gray-600));\n        background: var(--sl-color-gray-50);\n    }\n    sl-button[variant='default'] {\n        color: var(--sl-color-gray-400);\n    }\n    sl-button[variant='default']:hover {\n        color: var(--primary-color, var(--sl-color-gray-600));\n    }\n    sl-button[variant='default']::part(label) {\n        color: var(--sl-color-gray-600);\n    }\n    sl-button[variant='default']::part(label):hover {\n        color: var(--primary-color, var(--sl-color-gray-600));\n    }\n    sl-icon[small] {\n        font-size: 20px;\n    }\n    sl-icon[nine-dot] {\n        font-size: 30px;\n    }\n\n// Revisit after searchable dropdown completed\n    sl-select::part(combobox) {\n        background: none;\n        border-radius: 0;\n        border: none;\n        border-bottom: 1px solid var(--sl-color-gray-500);\n    }\n";
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Nr(t,e,i){return t?e(t):i?.(t)}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Ir(t,e){if(void 0!==t){let i=0;for(const o of t)yield e(o,i++)}}Tr.innerHTML=`<dom-module id="sl-katapult-style">\n  <template>\n    <style>\n      ${Or}\n    </style>\n  </template>\n</dom-module>`,document.head.appendChild(Tr.content);var Dr=s`
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
`,Lr=s`
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
`,zr="";function Mr(t){zr=t}var Rr={name:"default",resolver:t=>function(t=""){if(!zr){const t=[...document.getElementsByTagName("script")],e=t.find(t=>t.hasAttribute("data-shoelace"));if(e)Mr(e.getAttribute("data-shoelace"));else{const e=t.find(t=>/shoelace(\.min)?\.js($|\?)/.test(t.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(t.src));let i="";e&&(i=e.getAttribute("src")),Mr(i.split("/").slice(0,-1).join("/"))}}return zr.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}(`assets/icons/${t}.svg`)},Fr={caret:'\n    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n      <polyline points="6 9 12 15 18 9"></polyline>\n    </svg>\n  ',check:'\n    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor">\n          <g transform="translate(3.428571, 3.428571)">\n            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>\n            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"chevron-down":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',"chevron-left":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>\n    </svg>\n  ',"chevron-right":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',copy:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>\n    </svg>\n  ',eye:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">\n      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>\n      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>\n    </svg>\n  ',"eye-slash":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">\n      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>\n      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>\n      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>\n    </svg>\n  ',eyedropper:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">\n      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>\n    </svg>\n  ',"grip-vertical":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">\n      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>\n    </svg>\n  ',indeterminate:'\n    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor" stroke-width="2">\n          <g transform="translate(2.285714, 6.857143)">\n            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"person-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">\n      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>\n    </svg>\n  ',"play-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">\n      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>\n    </svg>\n  ',"pause-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">\n      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>\n    </svg>\n  ',radio:'\n    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g fill="currentColor">\n          <circle cx="8" cy="8" r="3.42857143"></circle>\n        </g>\n      </g>\n    </svg>\n  ',"star-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">\n      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>\n    </svg>\n  ',"x-lg":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">\n      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>\n    </svg>\n  ',"x-circle-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">\n      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>\n    </svg>\n  '},Hr=[Rr,{name:"system",resolver:t=>t in Fr?`data:image/svg+xml,${encodeURIComponent(Fr[t])}`:""}],Br=[];function Ur(t){return Hr.find(e=>e.name===t)}function jr(t,e){!function(t){Hr=Hr.filter(e=>e.name!==t)}(t),Hr.push({name:t,resolver:e.resolver,mutator:e.mutator,spriteSheet:e.spriteSheet}),Br.forEach(e=>{e.library===t&&e.setIcon()})}var Vr=s`
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
`,qr=Object.defineProperty,Wr=Object.defineProperties,Kr=Object.getOwnPropertyDescriptor,Jr=Object.getOwnPropertyDescriptors,Yr=Object.getOwnPropertySymbols,Gr=Object.prototype.hasOwnProperty,Xr=Object.prototype.propertyIsEnumerable,Zr=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Qr=t=>{throw TypeError(t)},ts=(t,e,i)=>e in t?qr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,es=(t,e)=>{for(var i in e||(e={}))Gr.call(e,i)&&ts(t,i,e[i]);if(Yr)for(var i of Yr(e))Xr.call(e,i)&&ts(t,i,e[i]);return t},is=(t,e)=>Wr(t,Jr(e)),os=(t,e,i,o)=>{for(var n,r=o>1?void 0:o?Kr(e,i):e,s=t.length-1;s>=0;s--)(n=t[s])&&(r=(o?n(e,i,r):n(r))||r);return o&&r&&qr(e,i,r),r},ns=(t,e,i)=>e.has(t)||Qr("Cannot "+i),rs=function(t,e){this[0]=t,this[1]=e};function ss(t,e){const i=es({waitUntilFirstUpdate:!1},e);return(e,o)=>{const{update:n}=e,r=Array.isArray(t)?t:[t];e.update=function(t){r.forEach(e=>{const n=e;if(t.has(n)){const e=t.get(n),r=this[n];e!==r&&(i.waitUntilFirstUpdate&&!this.hasUpdated||this[o](e,r))}}),n.call(this,t)}}}var as=s`
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
 */;const ls={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:v},cs=(t=ls,e,i)=>{const{kind:o,metadata:n}=i;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),"setter"===o&&((t=Object.create(t)).wrapped=!0),r.set(i.name,t),"accessor"===o){const{name:o}=i;return{set(i){const n=e.get.call(this);e.set.call(this,i),this.requestUpdate(o,n,t)},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===o){const{name:o}=i;return function(i){const n=this[o];e.call(this,i),this.requestUpdate(o,n,t)}}throw Error("Unsupported decorator location: "+o)};function ds(t){return(e,i)=>"object"==typeof i?cs(t,e,i):((t,e,i)=>{const o=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),o?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function hs(t){return ds({...t,state:!0,attribute:!1})}
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
function ps(t,e){return(e,i,o)=>((t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i))(e,i,{get(){return(e=>e.renderRoot?.querySelector(t)??null)(this)}})}var us,fs=class extends st{constructor(){var t,e,i;super(),t=this,i=!1,(e=us).has(t)?Qr("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const i=new CustomEvent(t,es({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(i),i}static define(t,e=this,i={}){const o=customElements.get(t);if(!o){try{customElements.define(t,e,i)}catch(o){customElements.define(t,class extends e{},i)}return}let n=" (unknown version)",r=n;"version"in e&&e.version&&(n=" v"+e.version),"version"in o&&o.version&&(r=" v"+o.version),n&&r&&n===r||console.warn(`Attempted to register <${t}>${n}, but <${t}>${r} has already been registered.`)}attributeChangedCallback(t,e,i){var o,n;ns(o=this,n=us,"read from private field"),n.get(o)||(this.constructor.elementProperties.forEach((t,e)=>{t.reflect&&null!=this[e]&&this.initialReflectedProperties.set(e,this[e])}),((t,e,i)=>{ns(t,e,"write to private field"),e.set(t,i)})(this,us,!0)),super.attributeChangedCallback(t,e,i)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,i)=>{t.has(i)&&null==this[i]&&(this[i]=e)})}};us=new WeakMap,fs.version="2.20.1",fs.dependencies={},os([ds()],fs.prototype,"dir",2),os([ds()],fs.prototype,"lang",2);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ms=t=>void 0===t.strings,gs={};var bs,_s=Symbol(),ys=Symbol(),vs=new Map,ws=class extends fs{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var i;let o;if(null==e?void 0:e.spriteSheet)return this.svg=U`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(o=await fetch(t,{mode:"cors"}),!o.ok)return 410===o.status?_s:ys}catch(t){return ys}try{const t=document.createElement("div");t.innerHTML=await o.text();const e=t.firstElementChild;if("svg"!==(null==(i=null==e?void 0:e.tagName)?void 0:i.toLowerCase()))return _s;bs||(bs=new DOMParser);const n=bs.parseFromString(e.outerHTML,"text/html").body.querySelector("svg");return n?(n.part.add("svg"),document.adoptNode(n)):_s}catch(t){return _s}}connectedCallback(){var t;super.connectedCallback(),t=this,Br.push(t)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){var t;super.disconnectedCallback(),t=this,Br=Br.filter(e=>e!==t)}getIconSource(){const t=Ur(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){"string"==typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:i}=this.getIconSource(),o=i?Ur(this.library):void 0;if(!e)return void(this.svg=null);let n=vs.get(e);if(n||(n=this.resolveIcon(e,o),vs.set(e,n)),!this.initialRender)return;const r=await n;if(r===ys&&vs.delete(e),e===this.getIconSource().url)if((t=>void 0!==t?._$litType$)(r)){if(this.svg=r,o){await this.updateComplete;const t=this.shadowRoot.querySelector("[part='svg']");"function"==typeof o.mutator&&t&&o.mutator(t)}}else switch(r){case ys:case _s:this.svg=null,this.emit("sl-error");break;default:this.svg=r.cloneNode(!0),null==(t=null==o?void 0:o.mutator)||t.call(o,this.svg),this.emit("sl-load")}}render(){return this.svg}};ws.styles=[as,Vr],os([hs()],ws.prototype,"svg",2),os([ds({reflect:!0})],ws.prototype,"name",2),os([ds()],ws.prototype,"src",2),os([ds()],ws.prototype,"label",2),os([ds({reflect:!0})],ws.prototype,"library",2),os([ss("label")],ws.prototype,"handleLabelChange",1),os([ss(["name","src","library"])],ws.prototype,"setIcon",1);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const xs=1,Cs=2,Ss=3,ks=4,Ps=t=>(...e)=>({_$litDirective$:t,values:e});let Es=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const As=Ps(class extends Es{constructor(t){if(super(t),t.type!==xs||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const o=!!e[t];o===this.st.has(t)||this.nt?.has(t)||(o?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return j}}),$s=Symbol.for(""),Ts=t=>{if(t?.r===$s)return t?._$litStatic$},Os=(t,...e)=>({_$litStatic$:e.reduce((e,i,o)=>e+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[o+1],t[0]),r:$s}),Ns=new Map,Is=(t=>(e,...i)=>{const o=i.length;let n,r;const s=[],a=[];let l,c=0,d=!1;for(;c<o;){for(l=e[c];c<o&&void 0!==(r=i[c],n=Ts(r));)l+=n+e[++c],d=!0;c!==o&&a.push(r),s.push(l),c++}if(c===o&&s.push(e[o]),d){const t=s.join("$$lit$$");void 0===(e=Ns.get(t))&&(s.raw=s,Ns.set(t,e=s)),i=a}return t(e,...i)})(U),Ds=t=>t??V;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ls=class extends fs{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?Os`a`:Os`button`;return Is`
      <${e}
        part="base"
        class=${As({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${Ds(t?void 0:this.disabled)}
        type=${Ds(t?void 0:"button")}
        href=${Ds(t?this.href:void 0)}
        target=${Ds(t?this.target:void 0)}
        download=${Ds(t?this.download:void 0)}
        rel=${Ds(t&&this.target?"noreferrer noopener":void 0)}
        role=${Ds(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${Ds(this.name)}
          library=${Ds(this.library)}
          src=${Ds(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};Ls.styles=[as,Lr],Ls.dependencies={"sl-icon":ws},os([ps(".icon-button")],Ls.prototype,"button",2),os([hs()],Ls.prototype,"hasFocus",2),os([ds()],Ls.prototype,"name",2),os([ds()],Ls.prototype,"library",2),os([ds()],Ls.prototype,"src",2),os([ds()],Ls.prototype,"href",2),os([ds()],Ls.prototype,"target",2),os([ds()],Ls.prototype,"download",2),os([ds()],Ls.prototype,"label",2),os([ds({type:Boolean,reflect:!0})],Ls.prototype,"disabled",2);const zs=new Set,Ms=new Map;let Rs,Fs="ltr",Hs="en";const Bs="undefined"!=typeof MutationObserver&&"undefined"!=typeof document&&void 0!==document.documentElement;if(Bs){const t=new MutationObserver(js);Fs=document.documentElement.dir||"ltr",Hs=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Us(...t){t.map(t=>{const e=t.$code.toLowerCase();Ms.has(e)?Ms.set(e,Object.assign(Object.assign({},Ms.get(e)),t)):Ms.set(e,t),Rs||(Rs=t)}),js()}function js(){Bs&&(Fs=document.documentElement.dir||"ltr",Hs=document.documentElement.lang||navigator.language),[...zs.keys()].map(t=>{"function"==typeof t.requestUpdate&&t.requestUpdate()})}let Vs=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){zs.add(this.host)}hostDisconnected(){zs.delete(this.host)}dir(){return`${this.host.dir||Fs}`.toLowerCase()}lang(){return`${this.host.lang||Hs}`.toLowerCase()}getTranslationData(t){var e,i;const o=new Intl.Locale(t.replace(/_/g,"-")),n=null==o?void 0:o.language.toLowerCase(),r=null!==(i=null===(e=null==o?void 0:o.region)||void 0===e?void 0:e.toLowerCase())&&void 0!==i?i:"";return{locale:o,language:n,region:r,primary:Ms.get(`${n}-${r}`),secondary:Ms.get(n)}}exists(t,e){var i;const{primary:o,secondary:n}=this.getTranslationData(null!==(i=e.lang)&&void 0!==i?i:this.lang());return e=Object.assign({includeFallback:!1},e),!!(o&&o[t]||n&&n[t]||e.includeFallback&&Rs&&Rs[t])}term(t,...e){const{primary:i,secondary:o}=this.getTranslationData(this.lang());let n;if(i&&i[t])n=i[t];else if(o&&o[t])n=o[t];else{if(!Rs||!Rs[t])return console.error(`No translation found for: ${String(t)}`),String(t);n=Rs[t]}return"function"==typeof n?n(...e):n}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(t,e)}};var qs={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>0===t?"No options selected":1===t?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};Us(qs);var Ws=qs,Ks=class extends Vs{};Us(Ws);var Js=class extends fs{constructor(){super(...arguments),this.localize=new Ks(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return U`
      <span
        part="base"
        class=${As({tag:!0,"tag--primary":"primary"===this.variant,"tag--success":"success"===this.variant,"tag--neutral":"neutral"===this.variant,"tag--warning":"warning"===this.variant,"tag--danger":"danger"===this.variant,"tag--text":"text"===this.variant,"tag--small":"small"===this.size,"tag--medium":"medium"===this.size,"tag--large":"large"===this.size,"tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?U`
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
    `}};Js.styles=[as,Dr],Js.dependencies={"sl-icon-button":Ls},os([ds({reflect:!0})],Js.prototype,"variant",2),os([ds({reflect:!0})],Js.prototype,"size",2),os([ds({type:Boolean,reflect:!0})],Js.prototype,"pill",2),os([ds({type:Boolean})],Js.prototype,"removable",2);var Ys=s`
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
`;var Gs=new Set;function Xs(t){if(Gs.add(t),!document.documentElement.classList.contains("sl-scroll-lock")){const t=function(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}()+function(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}();let e=getComputedStyle(document.documentElement).scrollbarGutter;e&&"auto"!==e||(e="stable"),t<2&&(e=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",e),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function Zs(t){Gs.delete(t),0===Gs.size&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function Qs(t,e,i="vertical",o="smooth"){const n=function(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}(t,e),r=n.top+e.scrollTop,s=n.left+e.scrollLeft,a=e.scrollLeft,l=e.scrollLeft+e.offsetWidth,c=e.scrollTop,d=e.scrollTop+e.offsetHeight;"horizontal"!==i&&"both"!==i||(s<a?e.scrollTo({left:s,behavior:o}):s+t.clientWidth>l&&e.scrollTo({left:s-e.offsetWidth+t.clientWidth,behavior:o})),"vertical"!==i&&"both"!==i||(r<c?e.scrollTo({top:r,behavior:o}):r+t.clientHeight>d&&e.scrollTo({top:r-e.offsetHeight+t.clientHeight,behavior:o}))}var ta=s`
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
`,ea=s`
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
`;const ia=Math.min,oa=Math.max,na=Math.round,ra=Math.floor,sa=t=>({x:t,y:t}),aa={left:"right",right:"left",bottom:"top",top:"bottom"},la={start:"end",end:"start"};function ca(t,e,i){return oa(t,ia(e,i))}function da(t,e){return"function"==typeof t?t(e):t}function ha(t){return t.split("-")[0]}function pa(t){return t.split("-")[1]}function ua(t){return"x"===t?"y":"x"}function fa(t){return"y"===t?"height":"width"}const ma=new Set(["top","bottom"]);function ga(t){return ma.has(ha(t))?"y":"x"}function ba(t){return ua(ga(t))}function _a(t){return t.replace(/start|end/g,t=>la[t])}const ya=["left","right"],va=["right","left"],wa=["top","bottom"],xa=["bottom","top"];function Ca(t,e,i,o){const n=pa(t);let r=function(t,e,i){switch(t){case"top":case"bottom":return i?e?va:ya:e?ya:va;case"left":case"right":return e?wa:xa;default:return[]}}(ha(t),"start"===i,o);return n&&(r=r.map(t=>t+"-"+n),e&&(r=r.concat(r.map(_a)))),r}function Sa(t){return t.replace(/left|right|bottom|top/g,t=>aa[t])}function ka(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function Pa(t){const{x:e,y:i,width:o,height:n}=t;return{width:o,height:n,top:i,left:e,right:e+o,bottom:i+n,x:e,y:i}}function Ea(t,e,i){let{reference:o,floating:n}=t;const r=ga(e),s=ba(e),a=fa(s),l=ha(e),c="y"===r,d=o.x+o.width/2-n.width/2,h=o.y+o.height/2-n.height/2,p=o[a]/2-n[a]/2;let u;switch(l){case"top":u={x:d,y:o.y-n.height};break;case"bottom":u={x:d,y:o.y+o.height};break;case"right":u={x:o.x+o.width,y:h};break;case"left":u={x:o.x-n.width,y:h};break;default:u={x:o.x,y:o.y}}switch(pa(e)){case"start":u[s]-=p*(i&&c?-1:1);break;case"end":u[s]+=p*(i&&c?-1:1)}return u}async function Aa(t,e){var i;void 0===e&&(e={});const{x:o,y:n,platform:r,rects:s,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:h="floating",altBoundary:p=!1,padding:u=0}=da(e,t),f=ka(u),m=a[p?"floating"===h?"reference":"floating":h],g=Pa(await r.getClippingRect({element:null==(i=await(null==r.isElement?void 0:r.isElement(m)))||i?m:m.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(a.floating)),boundary:c,rootBoundary:d,strategy:l})),b="floating"===h?{x:o,y:n,width:s.floating.width,height:s.floating.height}:s.reference,_=await(null==r.getOffsetParent?void 0:r.getOffsetParent(a.floating)),y=await(null==r.isElement?void 0:r.isElement(_))&&await(null==r.getScale?void 0:r.getScale(_))||{x:1,y:1},v=Pa(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:b,offsetParent:_,strategy:l}):b);return{top:(g.top-v.top+f.top)/y.y,bottom:(v.bottom-g.bottom+f.bottom)/y.y,left:(g.left-v.left+f.left)/y.x,right:(v.right-g.right+f.right)/y.x}}const $a=new Set(["left","top"]);function Ta(){return"undefined"!=typeof window}function Oa(t){return Da(t)?(t.nodeName||"").toLowerCase():"#document"}function Na(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function Ia(t){var e;return null==(e=(Da(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function Da(t){return!!Ta()&&(t instanceof Node||t instanceof Na(t).Node)}function La(t){return!!Ta()&&(t instanceof Element||t instanceof Na(t).Element)}function za(t){return!!Ta()&&(t instanceof HTMLElement||t instanceof Na(t).HTMLElement)}function Ma(t){return!(!Ta()||"undefined"==typeof ShadowRoot)&&(t instanceof ShadowRoot||t instanceof Na(t).ShadowRoot)}const Ra=new Set(["inline","contents"]);function Fa(t){const{overflow:e,overflowX:i,overflowY:o,display:n}=Xa(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+i)&&!Ra.has(n)}const Ha=new Set(["table","td","th"]);function Ba(t){return Ha.has(Oa(t))}const Ua=[":popover-open",":modal"];function ja(t){return Ua.some(e=>{try{return t.matches(e)}catch(t){return!1}})}const Va=["transform","translate","scale","rotate","perspective"],qa=["transform","translate","scale","rotate","perspective","filter"],Wa=["paint","layout","strict","content"];function Ka(t){const e=Ja(),i=La(t)?Xa(t):t;return Va.some(t=>!!i[t]&&"none"!==i[t])||!!i.containerType&&"normal"!==i.containerType||!e&&!!i.backdropFilter&&"none"!==i.backdropFilter||!e&&!!i.filter&&"none"!==i.filter||qa.some(t=>(i.willChange||"").includes(t))||Wa.some(t=>(i.contain||"").includes(t))}function Ja(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}const Ya=new Set(["html","body","#document"]);function Ga(t){return Ya.has(Oa(t))}function Xa(t){return Na(t).getComputedStyle(t)}function Za(t){return La(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Qa(t){if("html"===Oa(t))return t;const e=t.assignedSlot||t.parentNode||Ma(t)&&t.host||Ia(t);return Ma(e)?e.host:e}function tl(t){const e=Qa(t);return Ga(e)?t.ownerDocument?t.ownerDocument.body:t.body:za(e)&&Fa(e)?e:tl(e)}function el(t,e,i){var o;void 0===e&&(e=[]),void 0===i&&(i=!0);const n=tl(t),r=n===(null==(o=t.ownerDocument)?void 0:o.body),s=Na(n);if(r){const t=il(s);return e.concat(s,s.visualViewport||[],Fa(n)?n:[],t&&i?el(t):[])}return e.concat(n,el(n,[],i))}function il(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function ol(t){const e=Xa(t);let i=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const n=za(t),r=n?t.offsetWidth:i,s=n?t.offsetHeight:o,a=na(i)!==r||na(o)!==s;return a&&(i=r,o=s),{width:i,height:o,$:a}}function nl(t){return La(t)?t:t.contextElement}function rl(t){const e=nl(t);if(!za(e))return sa(1);const i=e.getBoundingClientRect(),{width:o,height:n,$:r}=ol(e);let s=(r?na(i.width):i.width)/o,a=(r?na(i.height):i.height)/n;return s&&Number.isFinite(s)||(s=1),a&&Number.isFinite(a)||(a=1),{x:s,y:a}}const sl=sa(0);function al(t){const e=Na(t);return Ja()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:sl}function ll(t,e,i,o){void 0===e&&(e=!1),void 0===i&&(i=!1);const n=t.getBoundingClientRect(),r=nl(t);let s=sa(1);e&&(o?La(o)&&(s=rl(o)):s=rl(t));const a=function(t,e,i){return void 0===e&&(e=!1),!(!i||e&&i!==Na(t))&&e}(r,i,o)?al(r):sa(0);let l=(n.left+a.x)/s.x,c=(n.top+a.y)/s.y,d=n.width/s.x,h=n.height/s.y;if(r){const t=Na(r),e=o&&La(o)?Na(o):o;let i=t,n=il(i);for(;n&&o&&e!==i;){const t=rl(n),e=n.getBoundingClientRect(),o=Xa(n),r=e.left+(n.clientLeft+parseFloat(o.paddingLeft))*t.x,s=e.top+(n.clientTop+parseFloat(o.paddingTop))*t.y;l*=t.x,c*=t.y,d*=t.x,h*=t.y,l+=r,c+=s,i=Na(n),n=il(i)}}return Pa({width:d,height:h,x:l,y:c})}function cl(t,e){const i=Za(t).scrollLeft;return e?e.left+i:ll(Ia(t)).left+i}function dl(t,e,i){void 0===i&&(i=!1);const o=t.getBoundingClientRect();return{x:o.left+e.scrollLeft-(i?0:cl(t,o)),y:o.top+e.scrollTop}}const hl=new Set(["absolute","fixed"]);function pl(t,e,i){let o;if("viewport"===e)o=function(t,e){const i=Na(t),o=Ia(t),n=i.visualViewport;let r=o.clientWidth,s=o.clientHeight,a=0,l=0;if(n){r=n.width,s=n.height;const t=Ja();(!t||t&&"fixed"===e)&&(a=n.offsetLeft,l=n.offsetTop)}return{width:r,height:s,x:a,y:l}}(t,i);else if("document"===e)o=function(t){const e=Ia(t),i=Za(t),o=t.ownerDocument.body,n=oa(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=oa(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-i.scrollLeft+cl(t);const a=-i.scrollTop;return"rtl"===Xa(o).direction&&(s+=oa(e.clientWidth,o.clientWidth)-n),{width:n,height:r,x:s,y:a}}(Ia(t));else if(La(e))o=function(t,e){const i=ll(t,!0,"fixed"===e),o=i.top+t.clientTop,n=i.left+t.clientLeft,r=za(t)?rl(t):sa(1);return{width:t.clientWidth*r.x,height:t.clientHeight*r.y,x:n*r.x,y:o*r.y}}(e,i);else{const i=al(t);o={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return Pa(o)}function ul(t,e){const i=Qa(t);return!(i===e||!La(i)||Ga(i))&&("fixed"===Xa(i).position||ul(i,e))}function fl(t,e,i){const o=za(e),n=Ia(e),r="fixed"===i,s=ll(t,!0,r,e);let a={scrollLeft:0,scrollTop:0};const l=sa(0);function c(){l.x=cl(n)}if(o||!o&&!r)if(("body"!==Oa(e)||Fa(n))&&(a=Za(e)),o){const t=ll(e,!0,r,e);l.x=t.x+e.clientLeft,l.y=t.y+e.clientTop}else n&&c();r&&!o&&n&&c();const d=!n||o||r?sa(0):dl(n,a);return{x:s.left+a.scrollLeft-l.x-d.x,y:s.top+a.scrollTop-l.y-d.y,width:s.width,height:s.height}}function ml(t){return"static"===Xa(t).position}function gl(t,e){if(!za(t)||"fixed"===Xa(t).position)return null;if(e)return e(t);let i=t.offsetParent;return Ia(t)===i&&(i=i.ownerDocument.body),i}function bl(t,e){const i=Na(t);if(ja(t))return i;if(!za(t)){let e=Qa(t);for(;e&&!Ga(e);){if(La(e)&&!ml(e))return e;e=Qa(e)}return i}let o=gl(t,e);for(;o&&Ba(o)&&ml(o);)o=gl(o,e);return o&&Ga(o)&&ml(o)&&!Ka(o)?i:o||function(t){let e=Qa(t);for(;za(e)&&!Ga(e);){if(Ka(e))return e;if(ja(e))return null;e=Qa(e)}return null}(t)||i}const _l={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:e,rect:i,offsetParent:o,strategy:n}=t;const r="fixed"===n,s=Ia(o),a=!!e&&ja(e.floating);if(o===s||a&&r)return i;let l={scrollLeft:0,scrollTop:0},c=sa(1);const d=sa(0),h=za(o);if((h||!h&&!r)&&(("body"!==Oa(o)||Fa(s))&&(l=Za(o)),za(o))){const t=ll(o);c=rl(o),d.x=t.x+o.clientLeft,d.y=t.y+o.clientTop}const p=!s||h||r?sa(0):dl(s,l,!0);return{width:i.width*c.x,height:i.height*c.y,x:i.x*c.x-l.scrollLeft*c.x+d.x+p.x,y:i.y*c.y-l.scrollTop*c.y+d.y+p.y}},getDocumentElement:Ia,getClippingRect:function(t){let{element:e,boundary:i,rootBoundary:o,strategy:n}=t;const r=[..."clippingAncestors"===i?ja(e)?[]:function(t,e){const i=e.get(t);if(i)return i;let o=el(t,[],!1).filter(t=>La(t)&&"body"!==Oa(t)),n=null;const r="fixed"===Xa(t).position;let s=r?Qa(t):t;for(;La(s)&&!Ga(s);){const e=Xa(s),i=Ka(s);i||"fixed"!==e.position||(n=null),(r?!i&&!n:!i&&"static"===e.position&&n&&hl.has(n.position)||Fa(s)&&!i&&ul(t,s))?o=o.filter(t=>t!==s):n=e,s=Qa(s)}return e.set(t,o),o}(e,this._c):[].concat(i),o],s=r[0],a=r.reduce((t,i)=>{const o=pl(e,i,n);return t.top=oa(o.top,t.top),t.right=ia(o.right,t.right),t.bottom=ia(o.bottom,t.bottom),t.left=oa(o.left,t.left),t},pl(e,s,n));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},getOffsetParent:bl,getElementRects:async function(t){const e=this.getOffsetParent||bl,i=this.getDimensions,o=await i(t.floating);return{reference:fl(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){const{width:e,height:i}=ol(t);return{width:e,height:i}},getScale:rl,isElement:La,isRTL:function(t){return"rtl"===Xa(t).direction}};function yl(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function vl(t,e,i,o){void 0===o&&(o={});const{ancestorScroll:n=!0,ancestorResize:r=!0,elementResize:s="function"==typeof ResizeObserver,layoutShift:a="function"==typeof IntersectionObserver,animationFrame:l=!1}=o,c=nl(t),d=n||r?[...c?el(c):[],...el(e)]:[];d.forEach(t=>{n&&t.addEventListener("scroll",i,{passive:!0}),r&&t.addEventListener("resize",i)});const h=c&&a?function(t,e){let i,o=null;const n=Ia(t);function r(){var t;clearTimeout(i),null==(t=o)||t.disconnect(),o=null}return function s(a,l){void 0===a&&(a=!1),void 0===l&&(l=1),r();const c=t.getBoundingClientRect(),{left:d,top:h,width:p,height:u}=c;if(a||e(),!p||!u)return;const f={rootMargin:-ra(h)+"px "+-ra(n.clientWidth-(d+p))+"px "+-ra(n.clientHeight-(h+u))+"px "+-ra(d)+"px",threshold:oa(0,ia(1,l))||1};let m=!0;function g(e){const o=e[0].intersectionRatio;if(o!==l){if(!m)return s();o?s(!1,o):i=setTimeout(()=>{s(!1,1e-7)},1e3)}1!==o||yl(c,t.getBoundingClientRect())||s(),m=!1}try{o=new IntersectionObserver(g,{...f,root:n.ownerDocument})}catch(t){o=new IntersectionObserver(g,f)}o.observe(t)}(!0),r}(c,i):null;let p,u=-1,f=null;s&&(f=new ResizeObserver(t=>{let[o]=t;o&&o.target===c&&f&&(f.unobserve(e),cancelAnimationFrame(u),u=requestAnimationFrame(()=>{var t;null==(t=f)||t.observe(e)})),i()}),c&&!l&&f.observe(c),f.observe(e));let m=l?ll(t):null;return l&&function e(){const o=ll(t);m&&!yl(m,o)&&i();m=o,p=requestAnimationFrame(e)}(),i(),()=>{var t;d.forEach(t=>{n&&t.removeEventListener("scroll",i),r&&t.removeEventListener("resize",i)}),null==h||h(),null==(t=f)||t.disconnect(),f=null,l&&cancelAnimationFrame(p)}}const wl=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){var i,o;const{x:n,y:r,placement:s,middlewareData:a}=e,l=await async function(t,e){const{placement:i,platform:o,elements:n}=t,r=await(null==o.isRTL?void 0:o.isRTL(n.floating)),s=ha(i),a=pa(i),l="y"===ga(i),c=$a.has(s)?-1:1,d=r&&l?-1:1,h=da(e,t);let{mainAxis:p,crossAxis:u,alignmentAxis:f}="number"==typeof h?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return a&&"number"==typeof f&&(u="end"===a?-1*f:f),l?{x:u*d,y:p*c}:{x:p*c,y:u*d}}(e,t);return s===(null==(i=a.offset)?void 0:i.placement)&&null!=(o=a.arrow)&&o.alignmentOffset?{}:{x:n+l.x,y:r+l.y,data:{...l,placement:s}}}}},xl=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:i,y:o,placement:n}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:a={fn:t=>{let{x:e,y:i}=t;return{x:e,y:i}}},...l}=da(t,e),c={x:i,y:o},d=await Aa(e,l),h=ga(ha(n)),p=ua(h);let u=c[p],f=c[h];if(r){const t="y"===p?"bottom":"right";u=ca(u+d["y"===p?"top":"left"],u,u-d[t])}if(s){const t="y"===h?"bottom":"right";f=ca(f+d["y"===h?"top":"left"],f,f-d[t])}const m=a.fn({...e,[p]:u,[h]:f});return{...m,data:{x:m.x-i,y:m.y-o,enabled:{[p]:r,[h]:s}}}}}},Cl=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var i,o;const{placement:n,middlewareData:r,rects:s,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:d=!0,crossAxis:h=!0,fallbackPlacements:p,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:m=!0,...g}=da(t,e);if(null!=(i=r.arrow)&&i.alignmentOffset)return{};const b=ha(n),_=ga(a),y=ha(a)===a,v=await(null==l.isRTL?void 0:l.isRTL(c.floating)),w=p||(y||!m?[Sa(a)]:function(t){const e=Sa(t);return[_a(t),e,_a(e)]}(a)),x="none"!==f;!p&&x&&w.push(...Ca(a,m,f,v));const C=[a,...w],S=await Aa(e,g),k=[];let P=(null==(o=r.flip)?void 0:o.overflows)||[];if(d&&k.push(S[b]),h){const t=function(t,e,i){void 0===i&&(i=!1);const o=pa(t),n=ba(t),r=fa(n);let s="x"===n?o===(i?"end":"start")?"right":"left":"start"===o?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=Sa(s)),[s,Sa(s)]}(n,s,v);k.push(S[t[0]],S[t[1]])}if(P=[...P,{placement:n,overflows:k}],!k.every(t=>t<=0)){var E,A;const t=((null==(E=r.flip)?void 0:E.index)||0)+1,e=C[t];if(e){if(!("alignment"===h&&_!==ga(e))||P.every(t=>t.overflows[0]>0&&ga(t.placement)===_))return{data:{index:t,overflows:P},reset:{placement:e}}}let i=null==(A=P.filter(t=>t.overflows[0]<=0).sort((t,e)=>t.overflows[1]-e.overflows[1])[0])?void 0:A.placement;if(!i)switch(u){case"bestFit":{var $;const t=null==($=P.filter(t=>{if(x){const e=ga(t.placement);return e===_||"y"===e}return!0}).map(t=>[t.placement,t.overflows.filter(t=>t>0).reduce((t,e)=>t+e,0)]).sort((t,e)=>t[1]-e[1])[0])?void 0:$[0];t&&(i=t);break}case"initialPlacement":i=a}if(n!==i)return{reset:{placement:i}}}return{}}}},Sl=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(e){var i,o;const{placement:n,rects:r,platform:s,elements:a}=e,{apply:l=()=>{},...c}=da(t,e),d=await Aa(e,c),h=ha(n),p=pa(n),u="y"===ga(n),{width:f,height:m}=r.floating;let g,b;"top"===h||"bottom"===h?(g=h,b=p===(await(null==s.isRTL?void 0:s.isRTL(a.floating))?"start":"end")?"left":"right"):(b=h,g="end"===p?"top":"bottom");const _=m-d.top-d.bottom,y=f-d.left-d.right,v=ia(m-d[g],_),w=ia(f-d[b],y),x=!e.middlewareData.shift;let C=v,S=w;if(null!=(i=e.middlewareData.shift)&&i.enabled.x&&(S=y),null!=(o=e.middlewareData.shift)&&o.enabled.y&&(C=_),x&&!p){const t=oa(d.left,0),e=oa(d.right,0),i=oa(d.top,0),o=oa(d.bottom,0);u?S=f-2*(0!==t||0!==e?t+e:oa(d.left,d.right)):C=m-2*(0!==i||0!==o?i+o:oa(d.top,d.bottom))}await l({...e,availableWidth:S,availableHeight:C});const k=await s.getDimensions(a.floating);return f!==k.width||m!==k.height?{reset:{rects:!0}}:{}}}},kl=t=>({name:"arrow",options:t,async fn(e){const{x:i,y:o,placement:n,rects:r,platform:s,elements:a,middlewareData:l}=e,{element:c,padding:d=0}=da(t,e)||{};if(null==c)return{};const h=ka(d),p={x:i,y:o},u=ba(n),f=fa(u),m=await s.getDimensions(c),g="y"===u,b=g?"top":"left",_=g?"bottom":"right",y=g?"clientHeight":"clientWidth",v=r.reference[f]+r.reference[u]-p[u]-r.floating[f],w=p[u]-r.reference[u],x=await(null==s.getOffsetParent?void 0:s.getOffsetParent(c));let C=x?x[y]:0;C&&await(null==s.isElement?void 0:s.isElement(x))||(C=a.floating[y]||r.floating[f]);const S=v/2-w/2,k=C/2-m[f]/2-1,P=ia(h[b],k),E=ia(h[_],k),A=P,$=C-m[f]-E,T=C/2-m[f]/2+S,O=ca(A,T,$),N=!l.arrow&&null!=pa(n)&&T!==O&&r.reference[f]/2-(T<A?P:E)-m[f]/2<0,I=N?T<A?T-A:T-$:0;return{[u]:p[u]+I,data:{[u]:O,centerOffset:T-O-I,...N&&{alignmentOffset:I}},reset:N}}}),Pl=(t,e,i)=>{const o=new Map,n={platform:_l,...i},r={...n.platform,_c:o};return(async(t,e,i)=>{const{placement:o="bottom",strategy:n="absolute",middleware:r=[],platform:s}=i,a=r.filter(Boolean),l=await(null==s.isRTL?void 0:s.isRTL(e));let c=await s.getElementRects({reference:t,floating:e,strategy:n}),{x:d,y:h}=Ea(c,o,l),p=o,u={},f=0;for(let i=0;i<a.length;i++){const{name:r,fn:m}=a[i],{x:g,y:b,data:_,reset:y}=await m({x:d,y:h,initialPlacement:o,placement:p,strategy:n,middlewareData:u,rects:c,platform:s,elements:{reference:t,floating:e}});d=null!=g?g:d,h=null!=b?b:h,u={...u,[r]:{...u[r],..._}},y&&f<=50&&(f++,"object"==typeof y&&(y.placement&&(p=y.placement),y.rects&&(c=!0===y.rects?await s.getElementRects({reference:t,floating:e,strategy:n}):y.rects),({x:d,y:h}=Ea(c,p,l))),i=-1)}return{x:d,y:h,placement:p,strategy:n,middlewareData:u}})(t,e,{...n,platform:r})};function El(t){return function(t){for(let e=t;e;e=Al(e))if(e instanceof Element&&"none"===getComputedStyle(e).display)return null;for(let e=Al(t);e;e=Al(e)){if(!(e instanceof Element))continue;const t=getComputedStyle(e);if("contents"!==t.display){if("static"!==t.position||Ka(t))return e;if("BODY"===e.tagName)return e}}return null}(t)}function Al(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}var $l=class extends fs{constructor(){super(...arguments),this.localize=new Ks(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect();let i=0,o=0,n=0,r=0,s=0,a=0,l=0,c=0;this.placement.includes("top")||this.placement.includes("bottom")?t.top<e.top?(i=t.left,o=t.bottom,n=t.right,r=t.bottom,s=e.left,a=e.top,l=e.right,c=e.top):(i=e.left,o=e.bottom,n=e.right,r=e.bottom,s=t.left,a=t.top,l=t.right,c=t.top):t.left<e.left?(i=t.right,o=t.top,n=e.left,r=e.top,s=t.right,a=t.bottom,l=e.left,c=e.bottom):(i=e.right,o=e.top,n=t.left,r=t.top,s=e.right,a=e.bottom,l=t.left,c=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${o}px`),this.style.setProperty("--hover-bridge-top-right-x",`${n}px`),this.style.setProperty("--hover-bridge-top-right-y",`${r}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${c}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||function(t){return null!==t&&"object"==typeof t&&"getBoundingClientRect"in t&&(!("contextElement"in t)||t.contextElement instanceof Element)}(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&this.active&&(this.cleanup=vl(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[wl({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Sl({apply:({rects:t})=>{const e="width"===this.sync||"both"===this.sync,i="height"===this.sync||"both"===this.sync;this.popup.style.width=e?`${t.reference.width}px`:"",this.popup.style.height=i?`${t.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(Cl({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(xl({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(Sl({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:t,availableHeight:e})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${e}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${t}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(kl({element:this.arrowEl,padding:this.arrowPadding}));const e="absolute"===this.strategy?t=>_l.getOffsetParent(t,El):_l.getOffsetParent;Pl(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:is(es({},_l),{getOffsetParent:e})}).then(({x:t,y:e,middlewareData:i,placement:o})=>{const n="rtl"===this.localize.dir(),r={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${t}px`,top:`${e}px`}),this.arrow){const t=i.arrow.x,e=i.arrow.y;let o="",s="",a="",l="";if("start"===this.arrowPlacement){const i="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";o="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",s=n?i:"",l=n?"":i}else if("end"===this.arrowPlacement){const i="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";s=n?"":i,l=n?i:"",a="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(l="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":"",o="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":""):(l="number"==typeof t?`${t}px`:"",o="number"==typeof e?`${e}px`:"");Object.assign(this.arrowEl.style,{top:o,right:s,bottom:a,left:l,[r]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return U`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${As({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${As({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?U`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};$l.styles=[as,ea],os([ps(".popup")],$l.prototype,"popup",2),os([ps(".popup__arrow")],$l.prototype,"arrowEl",2),os([ds()],$l.prototype,"anchor",2),os([ds({type:Boolean,reflect:!0})],$l.prototype,"active",2),os([ds({reflect:!0})],$l.prototype,"placement",2),os([ds({reflect:!0})],$l.prototype,"strategy",2),os([ds({type:Number})],$l.prototype,"distance",2),os([ds({type:Number})],$l.prototype,"skidding",2),os([ds({type:Boolean})],$l.prototype,"arrow",2),os([ds({attribute:"arrow-placement"})],$l.prototype,"arrowPlacement",2),os([ds({attribute:"arrow-padding",type:Number})],$l.prototype,"arrowPadding",2),os([ds({type:Boolean})],$l.prototype,"flip",2),os([ds({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(t=>t.trim()).filter(t=>""!==t),toAttribute:t=>t.join(" ")}})],$l.prototype,"flipFallbackPlacements",2),os([ds({attribute:"flip-fallback-strategy"})],$l.prototype,"flipFallbackStrategy",2),os([ds({type:Object})],$l.prototype,"flipBoundary",2),os([ds({attribute:"flip-padding",type:Number})],$l.prototype,"flipPadding",2),os([ds({type:Boolean})],$l.prototype,"shift",2),os([ds({type:Object})],$l.prototype,"shiftBoundary",2),os([ds({attribute:"shift-padding",type:Number})],$l.prototype,"shiftPadding",2),os([ds({attribute:"auto-size"})],$l.prototype,"autoSize",2),os([ds()],$l.prototype,"sync",2),os([ds({type:Object})],$l.prototype,"autoSizeBoundary",2),os([ds({attribute:"auto-size-padding",type:Number})],$l.prototype,"autoSizePadding",2),os([ds({attribute:"hover-bridge",type:Boolean})],$l.prototype,"hoverBridge",2);var Tl=new WeakMap,Ol=new WeakMap,Nl=new WeakMap,Il=new WeakSet,Dl=new WeakMap,Ll=class{constructor(t,e){this.handleFormData=t=>{const e=this.options.disabled(this.host),i=this.options.name(this.host),o=this.options.value(this.host),n="sl-button"===this.host.tagName.toLowerCase();this.host.isConnected&&!e&&!n&&"string"==typeof i&&i.length>0&&void 0!==o&&(Array.isArray(o)?o.forEach(e=>{t.formData.append(i,e.toString())}):t.formData.append(i,o.toString()))},this.handleFormSubmit=t=>{var e;const i=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&(null==(e=Tl.get(this.form))||e.forEach(t=>{this.setUserInteracted(t,!0)})),!this.form||this.form.noValidate||i||o(this.host)||(t.preventDefault(),t.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Dl.set(this.host,[])},this.handleInteraction=t=>{const e=Dl.get(this.host);e.includes(t.type)||e.push(t.type),e.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if("function"==typeof e.checkValidity&&!e.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if("function"==typeof e.reportValidity&&!e.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=es({form:t=>{const e=t.form;if(e){const i=t.getRootNode().querySelector(`#${e}`);if(i)return i}return t.closest("form")},name:t=>t.name,value:t=>t.value,defaultValue:t=>t.defaultValue,disabled:t=>{var e;return null!=(e=t.disabled)&&e},reportValidity:t=>"function"!=typeof t.reportValidity||t.reportValidity(),checkValidity:t=>"function"!=typeof t.checkValidity||t.checkValidity(),setValue:(t,e)=>t.value=e,assumeInteractionOn:["sl-input"]},e)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),Dl.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Dl.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,Tl.has(this.form)?Tl.get(this.form).add(this.host):Tl.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Ol.has(this.form)||(Ol.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Nl.has(this.form)||(Nl.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=Tl.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Ol.has(this.form)&&(this.form.reportValidity=Ol.get(this.form),Ol.delete(this.form)),Nl.has(this.form)&&(this.form.checkValidity=Nl.get(this.form),Nl.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?Il.add(t):Il.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const i=document.createElement("button");i.type=t,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",e&&(i.name=e.name,i.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(t=>{e.hasAttribute(t)&&i.setAttribute(t,e.getAttribute(t))})),this.form.append(i),i.click(),i.remove()}}getForm(){var t;return null!=(t=this.form)?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,i=Boolean(Il.has(e)),o=Boolean(e.required);e.toggleAttribute("data-required",o),e.toggleAttribute("data-optional",!o),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&i),e.toggleAttribute("data-user-valid",t&&i)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||null==t||t.preventDefault()}},zl=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(is(es({},zl),{valid:!1,valueMissing:!0})),Object.freeze(is(es({},zl),{valid:!1,customError:!0}));var Ml=new Map,Rl=new WeakMap;function Fl(t,e){return"rtl"===e.toLowerCase()?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function Hl(t,e){Ml.set(t,function(t){return null!=t?t:{keyframes:[],options:{duration:0}}}(e))}function Bl(t,e,i){const o=Rl.get(t);if(null==o?void 0:o[e])return Fl(o[e],i.dir);const n=Ml.get(e);return n?Fl(n,i.dir):{keyframes:[],options:{duration:0}}}function Ul(t,e){return new Promise(i=>{t.addEventListener(e,function o(n){n.target===t&&(t.removeEventListener(e,o),i())})})}function jl(t,e,i){return new Promise(o=>{if((null==i?void 0:i.duration)===1/0)throw new Error("Promise-based animations must be finite.");const n=t.animate(e,is(es({},i),{duration:Vl()?0:i.duration}));n.addEventListener("cancel",o,{once:!0}),n.addEventListener("finish",o,{once:!0})})}function Vl(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function ql(t){return Promise.all(t.getAnimations().map(t=>new Promise(e=>{t.cancel(),requestAnimationFrame(e)})))}var Wl=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=t=>{const e=t.target;(this.slotNames.includes("[default]")&&!e.name||e.name&&this.slotNames.includes(e.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&""!==t.textContent.trim())return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if("sl-visually-hidden"===e.tagName.toLowerCase())return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return null!==this.host.querySelector(`:scope > [slot="${t}"]`)}test(t){return"[default]"===t?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let Kl=class extends Es{constructor(t){if(super(t),this.it=V,t.type!==Cs)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===V||null==t)return this._t=void 0,this.it=t;if(t===j)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};Kl.directiveName="unsafeHTML",Kl.resultType=1;const Jl=Ps(Kl);var Yl=class extends fs{constructor(){super(...arguments),this.formControlController=new Ll(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Wl(this,"help-text","label"),this.localize=new Ks(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=t=>U`
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
    `,this.handleDocumentFocusIn=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{const e=t.target,i=null!==e.closest(".select__clear"),o=null!==e.closest("sl-icon-button");if(!i&&!o){if("Escape"===t.key&&this.open&&!this.closeWatcher&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),"Enter"===t.key||" "===t.key&&""===this.typeToSelectString)return t.preventDefault(),t.stopImmediatePropagation(),this.open?void(this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))):void this.show();if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const e=this.getAllOptions(),i=e.indexOf(this.currentOption);let o=Math.max(0,i);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;"ArrowDown"===t.key?(o=i+1,o>e.length-1&&(o=0)):"ArrowUp"===t.key?(o=i-1,o<0&&(o=e.length-1)):"Home"===t.key?o=0:"End"===t.key&&(o=e.length-1),this.setCurrentOption(e[o])}if(t.key&&1===t.key.length||"Backspace"===t.key){const e=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if("Backspace"===t.key)return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),"Backspace"===t.key?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const t of e){if(t.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(t);break}}}}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()}}get value(){return this._value}set value(t){t=this.multiple?Array.isArray(t)?t:t.split(" "):Array.isArray(t)?t.join(" "):t,this._value!==t&&(this.valueHasChanged=!0,this._value=t)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var t;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var t;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),null==(t=this.closeWatcher)||t.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(t){const e=t.composedPath().some(t=>t instanceof Element&&"sl-icon-button"===t.tagName.toLowerCase());this.disabled||e||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){"Tab"!==t.key&&(t.stopPropagation(),this.handleDocumentKeyDown(t))}handleClearClick(t){t.stopPropagation(),this.valueHasChanged=!0,""!==this.value&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const e=t.target.closest("sl-option"),i=this.value;e&&!e.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(e):this.setSelectedOptions(e),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==i&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());const t=this.getAllOptions(),e=this.valueHasChanged?this.value:this.defaultValue,i=Array.isArray(e)?e:[e],o=[];t.forEach(t=>o.push(t.value)),this.setSelectedOptions(t.filter(t=>i.includes(t.value)))}handleTagRemove(t,e){t.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(e,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(t){this.getAllOptions().forEach(t=>{t.current=!1,t.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){const e=this.getAllOptions(),i=Array.isArray(t)?t:[t];e.forEach(t=>t.selected=!1),i.length&&i.forEach(t=>t.selected=!0),this.selectionChanged()}toggleOptionSelection(t,e){t.selected=!0===e||!1===e?e:!t.selected,this.selectionChanged()}selectionChanged(){var t,e,i;const o=this.getAllOptions();this.selectedOptions=o.filter(t=>t.selected);const n=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(t=>t.value),this.placeholder&&0===this.value.length?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const o=this.selectedOptions[0];this.value=null!=(t=null==o?void 0:o.value)?t:"",this.displayLabel=null!=(i=null==(e=null==o?void 0:o.getTextLabel)?void 0:e.call(o))?i:""}this.valueHasChanged=n,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){const i=this.getTag(t,e);return U`<div @sl-remove=${e=>this.handleTagRemove(e,t)}>
          ${"string"==typeof i?Jl(i):i}
        </div>`}return e===this.maxOptionsVisible?U`<sl-tag size=${this.size}>+${this.selectedOptions.length-e}</sl-tag>`:U``})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(t,e,i){if(super.attributeChangedCallback(t,e,i),"value"===t){const t=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=t}}handleValueChange(){if(!this.valueHasChanged){const t=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=t}const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter(t=>e.includes(t.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await ql(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:t,options:e}=Bl(this,"select.show",{dir:this.localize.dir()});await jl(this.popup.popup,t,e),this.currentOption&&Qs(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await ql(this);const{keyframes:t,options:e}=Bl(this,"select.hide",{dir:this.localize.dir()});await jl(this.popup.popup,t,e),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(!this.open&&!this.disabled)return this.open=!0,Ul(this,"sl-after-show");this.open=!1}async hide(){if(this.open&&!this.disabled)return this.open=!1,Ul(this,"sl-after-hide");this.open=!1}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=!!this.label||!!t,o=!!this.helpText||!!e,n=this.clearable&&!this.disabled&&this.value.length>0,r=this.placeholder&&this.value&&this.value.length<=0;return U`
      <div
        part="form-control"
        class=${As({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":i,"form-control--has-help-text":o})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${As({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":r,"select--top":"top"===this.placement,"select--bottom":"bottom"===this.placement,"select--small":"small"===this.size,"select--medium":"medium"===this.size,"select--large":"large"===this.size})}
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

              ${this.multiple?U`<div part="tags" class="select__tags">${this.tags}</div>`:""}

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

              ${n?U`
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
    `}};Yl.styles=[as,ta,Ys],Yl.dependencies={"sl-icon":ws,"sl-popup":$l,"sl-tag":Js},os([ps(".select")],Yl.prototype,"popup",2),os([ps(".select__combobox")],Yl.prototype,"combobox",2),os([ps(".select__display-input")],Yl.prototype,"displayInput",2),os([ps(".select__value-input")],Yl.prototype,"valueInput",2),os([ps(".select__listbox")],Yl.prototype,"listbox",2),os([hs()],Yl.prototype,"hasFocus",2),os([hs()],Yl.prototype,"displayLabel",2),os([hs()],Yl.prototype,"currentOption",2),os([hs()],Yl.prototype,"selectedOptions",2),os([hs()],Yl.prototype,"valueHasChanged",2),os([ds()],Yl.prototype,"name",2),os([hs()],Yl.prototype,"value",1),os([ds({attribute:"value"})],Yl.prototype,"defaultValue",2),os([ds({reflect:!0})],Yl.prototype,"size",2),os([ds()],Yl.prototype,"placeholder",2),os([ds({type:Boolean,reflect:!0})],Yl.prototype,"multiple",2),os([ds({attribute:"max-options-visible",type:Number})],Yl.prototype,"maxOptionsVisible",2),os([ds({type:Boolean,reflect:!0})],Yl.prototype,"disabled",2),os([ds({type:Boolean})],Yl.prototype,"clearable",2),os([ds({type:Boolean,reflect:!0})],Yl.prototype,"open",2),os([ds({type:Boolean})],Yl.prototype,"hoist",2),os([ds({type:Boolean,reflect:!0})],Yl.prototype,"filled",2),os([ds({type:Boolean,reflect:!0})],Yl.prototype,"pill",2),os([ds()],Yl.prototype,"label",2),os([ds({reflect:!0})],Yl.prototype,"placement",2),os([ds({attribute:"help-text"})],Yl.prototype,"helpText",2),os([ds({reflect:!0})],Yl.prototype,"form",2),os([ds({type:Boolean,reflect:!0})],Yl.prototype,"required",2),os([ds()],Yl.prototype,"getTag",2),os([ss("disabled",{waitUntilFirstUpdate:!0})],Yl.prototype,"handleDisabledChange",1),os([ss(["defaultValue","value"],{waitUntilFirstUpdate:!0})],Yl.prototype,"handleValueChange",1),os([ss("open",{waitUntilFirstUpdate:!0})],Yl.prototype,"handleOpenChange",1),Hl("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}}),Hl("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}}),Yl.define("sl-select");var Gl=s`
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
`,Xl=class extends fs{constructor(){super(...arguments),this.localize=new Ks(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{const t=this.closest("sl-select");t&&t.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){"string"!=typeof this.value&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const t=this.childNodes;let e="";return[...t].forEach(t=>{t.nodeType===Node.ELEMENT_NODE&&(t.hasAttribute("slot")||(e+=t.textContent)),t.nodeType===Node.TEXT_NODE&&(e+=t.textContent)}),e.trim()}render(){return U`
      <div
        part="base"
        class=${As({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};function*Zl(t=document.activeElement){var e,i,o,n,r;null!=t&&(yield t,"shadowRoot"in t&&t.shadowRoot&&"closed"!==t.shadowRoot.mode&&(yield*(e=Zl(t.shadowRoot.activeElement),o=e[Zr("asyncIterator")],n=!1,r={},null==o?(o=e[Zr("iterator")](),i=t=>r[t]=e=>o[t](e)):(o=o.call(e),i=t=>r[t]=e=>{if(n){if(n=!1,"throw"===t)throw e;return e}return n=!0,{done:!1,value:new rs(new Promise(i=>{var n=o[t](e);n instanceof Object||Qr("Object expected"),i(n)}),1)}}),r[Zr("iterator")]=()=>r,i("next"),"throw"in o?i("throw"):r.throw=t=>{throw t},"return"in o&&i("return"),r)))}function Ql(){return[...Zl()].pop()}Xl.styles=[as,Gl],Xl.dependencies={"sl-icon":ws},os([ps(".option__label")],Xl.prototype,"defaultSlot",2),os([hs()],Xl.prototype,"current",2),os([hs()],Xl.prototype,"selected",2),os([hs()],Xl.prototype,"hasHover",2),os([ds({reflect:!0})],Xl.prototype,"value",2),os([ds({type:Boolean,reflect:!0})],Xl.prototype,"disabled",2),os([ss("disabled")],Xl.prototype,"handleDisabledChange",1),os([ss("selected")],Xl.prototype,"handleSelectedChange",1),os([ss("value")],Xl.prototype,"handleValueChange",1),Xl.define("sl-option");var tc=new WeakMap;function ec(t){let e=tc.get(t);return e||(e=window.getComputedStyle(t,null),tc.set(t,e)),e}function ic(t){const e=t.tagName.toLowerCase(),i=Number(t.getAttribute("tabindex"));if(t.hasAttribute("tabindex")&&(isNaN(i)||i<=-1))return!1;if(t.hasAttribute("disabled"))return!1;if(t.closest("[inert]"))return!1;if("input"===e&&"radio"===t.getAttribute("type")){const e=t.getRootNode(),i=`input[type='radio'][name="${t.getAttribute("name")}"]`,o=e.querySelector(`${i}:checked`);if(o)return o===t;return e.querySelector(i)===t}if(!function(t){if("function"==typeof t.checkVisibility)return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const e=ec(t);return"hidden"!==e.visibility&&"none"!==e.display}(t))return!1;if(("audio"===e||"video"===e)&&t.hasAttribute("controls"))return!0;if(t.hasAttribute("tabindex"))return!0;if(t.hasAttribute("contenteditable")&&"false"!==t.getAttribute("contenteditable"))return!0;return!!["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)||function(t){const e=ec(t),{overflowY:i,overflowX:o}=e;return"scroll"===i||"scroll"===o||"auto"===i&&"auto"===o&&(t.scrollHeight>t.clientHeight&&"auto"===i||!(!(t.scrollWidth>t.clientWidth)||"auto"!==o))}(t)}function oc(t){const e=new WeakMap,i=[];return function o(n){if(n instanceof Element){if(n.hasAttribute("inert")||n.closest("[inert]"))return;if(e.has(n))return;e.set(n,!0),!i.includes(n)&&ic(n)&&i.push(n),n instanceof HTMLSlotElement&&function(t,e){var i;return(null==(i=t.getRootNode({composed:!0}))?void 0:i.host)!==e}(n,t)&&n.assignedElements({flatten:!0}).forEach(t=>{o(t)}),null!==n.shadowRoot&&"open"===n.shadowRoot.mode&&o(n.shadowRoot)}for(const t of n.children)o(t)}(t),i.sort((t,e)=>{const i=Number(t.getAttribute("tabindex"))||0;return(Number(e.getAttribute("tabindex"))||0)-i})}var nc=[],rc=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var e;if("Tab"!==t.key||this.isExternalActivated)return;if(!this.isActive())return;const i=Ql();if(this.previousFocus=i,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const o=oc(this.element);let n=o.findIndex(t=>t===i);this.previousFocus=this.currentFocus;const r="forward"===this.tabDirection?1:-1;for(;;){n+r>=o.length?n=0:n+r<0?n=o.length-1:n+=r,this.previousFocus=this.currentFocus;const i=o[n];if("backward"===this.tabDirection&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;if(i&&this.possiblyHasTabbableChildren(i))return;t.preventDefault(),this.currentFocus=i,null==(e=this.currentFocus)||e.focus({preventScroll:!1});const s=[...Zl()];if(s.includes(this.currentFocus)||!s.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){nc.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){nc=nc.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return nc[nc.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=oc(this.element);if(!this.element.matches(":focus-within")){const e=t[0],i=t[t.length-1],o="forward"===this.tabDirection?e:i;"function"==typeof(null==o?void 0:o.focus)&&(this.currentFocus=o,o.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}},sc=s`
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
`,ac=t=>{var e;const{activeElement:i}=document;i&&t.contains(i)&&(null==(e=document.activeElement)||e.blur())},lc=class extends fs{constructor(){super(...arguments),this.hasSlotController=new Wl(this,"footer"),this.localize=new Ks(this),this.modal=new rc(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{"Escape"===t.key&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Xs(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),Zs(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const t=Bl(this,"dialog.denyClose",{dir:this.localize.dir()});return void jl(this.panel,t.keyframes,t.options)}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Xs(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([ql(this.dialog),ql(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=Bl(this,"dialog.show",{dir:this.localize.dir()}),i=Bl(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([jl(this.panel,e.keyframes,e.options),jl(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{ac(this),this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([ql(this.dialog),ql(this.overlay)]);const t=Bl(this,"dialog.hide",{dir:this.localize.dir()}),e=Bl(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([jl(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),jl(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Zs(this);const i=this.originalTrigger;"function"==typeof(null==i?void 0:i.focus)&&setTimeout(()=>i.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,Ul(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Ul(this,"sl-after-hide")}render(){return U`
      <div
        part="base"
        class=${As({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${Ds(this.noHeader?this.label:void 0)}
          aria-labelledby=${Ds(this.noHeader?void 0:"title")}
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
    `}};lc.styles=[as,sc],lc.dependencies={"sl-icon-button":Ls},os([ps(".dialog")],lc.prototype,"dialog",2),os([ps(".dialog__panel")],lc.prototype,"panel",2),os([ps(".dialog__overlay")],lc.prototype,"overlay",2),os([ds({type:Boolean,reflect:!0})],lc.prototype,"open",2),os([ds({reflect:!0})],lc.prototype,"label",2),os([ds({attribute:"no-header",type:Boolean,reflect:!0})],lc.prototype,"noHeader",2),os([ss("open",{waitUntilFirstUpdate:!0})],lc.prototype,"handleOpenChange",1),Hl("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),Hl("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}}),Hl("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}}),Hl("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),Hl("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}}),lc.define("sl-dialog"),ws.define("sl-icon");var cc=s`
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
`,dc=class extends fs{constructor(){super(...arguments),this.localize=new Ks(this)}render(){return U`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};dc.styles=[as,cc];var hc=s`
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
`,pc=class extends fs{constructor(){super(...arguments),this.formControlController=new Ll(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new Wl(this,"[default]","prefix","suffix"),this.localize=new Ks(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:zl}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){"submit"===this.type&&this.formControlController.submit(this),"reset"===this.type&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return!this.isButton()||this.button.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.isButton()||this.button.reportValidity()}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?Os`a`:Os`button`;return Is`
      <${e}
        part="base"
        class=${As({button:!0,"button--default":"default"===this.variant,"button--primary":"primary"===this.variant,"button--success":"success"===this.variant,"button--neutral":"neutral"===this.variant,"button--warning":"warning"===this.variant,"button--danger":"danger"===this.variant,"button--text":"text"===this.variant,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":"rtl"===this.localize.dir(),"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${Ds(t?void 0:this.disabled)}
        type=${Ds(t?void 0:this.type)}
        title=${this.title}
        name=${Ds(t?void 0:this.name)}
        value=${Ds(t?void 0:this.value)}
        href=${Ds(t&&!this.disabled?this.href:void 0)}
        target=${Ds(t?this.target:void 0)}
        download=${Ds(t?this.download:void 0)}
        rel=${Ds(t?this.rel:void 0)}
        role=${Ds(t?void 0:"button")}
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
        ${this.caret?Is` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Is`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};pc.styles=[as,hc],pc.dependencies={"sl-icon":ws,"sl-spinner":dc},os([ps(".button")],pc.prototype,"button",2),os([hs()],pc.prototype,"hasFocus",2),os([hs()],pc.prototype,"invalid",2),os([ds()],pc.prototype,"title",2),os([ds({reflect:!0})],pc.prototype,"variant",2),os([ds({reflect:!0})],pc.prototype,"size",2),os([ds({type:Boolean,reflect:!0})],pc.prototype,"caret",2),os([ds({type:Boolean,reflect:!0})],pc.prototype,"disabled",2),os([ds({type:Boolean,reflect:!0})],pc.prototype,"loading",2),os([ds({type:Boolean,reflect:!0})],pc.prototype,"outline",2),os([ds({type:Boolean,reflect:!0})],pc.prototype,"pill",2),os([ds({type:Boolean,reflect:!0})],pc.prototype,"circle",2),os([ds()],pc.prototype,"type",2),os([ds()],pc.prototype,"name",2),os([ds()],pc.prototype,"value",2),os([ds()],pc.prototype,"href",2),os([ds()],pc.prototype,"target",2),os([ds()],pc.prototype,"rel",2),os([ds()],pc.prototype,"download",2),os([ds()],pc.prototype,"form",2),os([ds({attribute:"formaction"})],pc.prototype,"formAction",2),os([ds({attribute:"formenctype"})],pc.prototype,"formEnctype",2),os([ds({attribute:"formmethod"})],pc.prototype,"formMethod",2),os([ds({attribute:"formnovalidate",type:Boolean})],pc.prototype,"formNoValidate",2),os([ds({attribute:"formtarget"})],pc.prototype,"formTarget",2),os([ss("disabled",{waitUntilFirstUpdate:!0})],pc.prototype,"handleDisabledChange",1),pc.define("sl-button");var uc=s`
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
const fc=Ps(class extends Es{constructor(t){if(super(t),t.type!==Ss&&t.type!==xs&&t.type!==ks)throw Error("The `live` directive is not allowed on child or event bindings");if(!ms(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===j||e===V)return e;const i=t.element,o=t.name;if(t.type===Ss){if(e===i[o])return j}else if(t.type===ks){if(!!e===i.hasAttribute(o))return j}else if(t.type===xs&&i.getAttribute(o)===e+"")return j;return((t,e=gs)=>{t._$AH=e})(t),e}});var mc=class extends fs{constructor(){super(...arguments),this.formControlController=new Ll(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Wl(this,"help-text","label"),this.localize=new Ks(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,(null==(t=this.input)?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,(null==(t=this.input)?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){t.preventDefault(),""!==this.value&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;"Enter"!==t.key||e||setTimeout(()=>{t.defaultPrevented||t.isComposing||this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,i="none"){this.input.setSelectionRange(t,e,i)}setRangeText(t,e,i,o="preserve"){const n=null!=e?e:this.input.selectionStart,r=null!=i?i:this.input.selectionEnd;this.input.setRangeText(t,n,r,o),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=!!this.label||!!t,o=!!this.helpText||!!e,n=this.clearable&&!this.disabled&&!this.readonly&&("number"==typeof this.value||this.value.length>0);return U`
      <div
        part="form-control"
        class=${As({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":i,"form-control--has-help-text":o})}
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
            class=${As({input:!0,"input--small":"small"===this.size,"input--medium":"medium"===this.size,"input--large":"large"===this.size,"input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
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
              name=${Ds(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${Ds(this.placeholder)}
              minlength=${Ds(this.minlength)}
              maxlength=${Ds(this.maxlength)}
              min=${Ds(this.min)}
              max=${Ds(this.max)}
              step=${Ds(this.step)}
              .value=${fc(this.value)}
              autocapitalize=${Ds(this.autocapitalize)}
              autocomplete=${Ds(this.autocomplete)}
              autocorrect=${Ds(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${Ds(this.pattern)}
              enterkeyhint=${Ds(this.enterkeyhint)}
              inputmode=${Ds(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${n?U`
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
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};mc.styles=[as,ta,uc],mc.dependencies={"sl-icon":ws},os([ps(".input__control")],mc.prototype,"input",2),os([hs()],mc.prototype,"hasFocus",2),os([ds()],mc.prototype,"title",2),os([ds({reflect:!0})],mc.prototype,"type",2),os([ds()],mc.prototype,"name",2),os([ds()],mc.prototype,"value",2),os([((t="value")=>(e,i)=>{const o=e.constructor,n=o.prototype.attributeChangedCallback;o.prototype.attributeChangedCallback=function(e,r,s){var a;const l=o.getPropertyOptions(t);if(e===("string"==typeof l.attribute?l.attribute:t)){const e=l.converter||y,o=("function"==typeof e?e:null!=(a=null==e?void 0:e.fromAttribute)?a:y.fromAttribute)(s,l.type);this[t]!==o&&(this[i]=o)}n.call(this,e,r,s)}})()],mc.prototype,"defaultValue",2),os([ds({reflect:!0})],mc.prototype,"size",2),os([ds({type:Boolean,reflect:!0})],mc.prototype,"filled",2),os([ds({type:Boolean,reflect:!0})],mc.prototype,"pill",2),os([ds()],mc.prototype,"label",2),os([ds({attribute:"help-text"})],mc.prototype,"helpText",2),os([ds({type:Boolean})],mc.prototype,"clearable",2),os([ds({type:Boolean,reflect:!0})],mc.prototype,"disabled",2),os([ds()],mc.prototype,"placeholder",2),os([ds({type:Boolean,reflect:!0})],mc.prototype,"readonly",2),os([ds({attribute:"password-toggle",type:Boolean})],mc.prototype,"passwordToggle",2),os([ds({attribute:"password-visible",type:Boolean})],mc.prototype,"passwordVisible",2),os([ds({attribute:"no-spin-buttons",type:Boolean})],mc.prototype,"noSpinButtons",2),os([ds({reflect:!0})],mc.prototype,"form",2),os([ds({type:Boolean,reflect:!0})],mc.prototype,"required",2),os([ds()],mc.prototype,"pattern",2),os([ds({type:Number})],mc.prototype,"minlength",2),os([ds({type:Number})],mc.prototype,"maxlength",2),os([ds()],mc.prototype,"min",2),os([ds()],mc.prototype,"max",2),os([ds()],mc.prototype,"step",2),os([ds()],mc.prototype,"autocapitalize",2),os([ds()],mc.prototype,"autocorrect",2),os([ds()],mc.prototype,"autocomplete",2),os([ds({type:Boolean})],mc.prototype,"autofocus",2),os([ds()],mc.prototype,"enterkeyhint",2),os([ds({type:Boolean,converter:{fromAttribute:t=>!(!t||"false"===t),toAttribute:t=>t?"true":"false"}})],mc.prototype,"spellcheck",2),os([ds()],mc.prototype,"inputmode",2),os([ss("disabled",{waitUntilFirstUpdate:!0})],mc.prototype,"handleDisabledChange",1),os([ss("step",{waitUntilFirstUpdate:!0})],mc.prototype,"handleStepChange",1),os([ss("value",{waitUntilFirstUpdate:!0})],mc.prototype,"handleValueChange",1),mc.define("sl-input");const gc=document.createElement("template"),bc="\n  [flex] {\n    display: flex;\n  }\n  [column], paper-dialog[flex] {\n    flex-direction: column;\n  }\n  [overflow-hidden] {\n    overflow: hidden;\n  }\n  [overflow] {\n    overflow: unset;\n  }\n  [align-start] {\n    align-items: flex-start;\n  }\n  [align-end] {\n    align-items: flex-end;\n  }\n  [align-center] {\n    align-items: center;\n  }\n  [align-stretch] {\n    align-items: stretch;\n  }\n  [justify-start] {\n    justify-content: flex-start;\n  }         \n  [justify-center] {\n    justify-content: center;\n  }\n  [justify-end] {\n    justify-content: flex-end;\n  }\n  [justify-space-between], [space-between] {\n    justify-content: space-between;\n  }\n  [justify-stretch] {\n    justify-content: stretch;\n  }\n  [spacer], [grow] {\n    flex-grow: 1;\n  }\n  [spacer]:not([collapse]) {\n    min-width: 16px;\n  }\n  [line] {\n    border-bottom: 1px solid var(--border-color);\n  }\n  [text-center], p[center] {\n    text-align: center;\n  }\n  [pointer]:hover {\n    cursor: pointer;\n  }\n  [grab]:hover {\n    cursor: grab;\n  }\n  [faded] {\n    opacity: 0.8;\n  }\n  [border-box] {\n    box-sizing: border-box;\n  }\n  [wrap] {\n    flex-wrap: wrap;\n  }\n  [italic] {\n    font-style: italic;\n  }\n  [lighter] {\n    font-weight: lighter;\n  }\n  [bold] {\n    font-weight: bold;\n  }\n  [no-shrink] {\n    flex-shrink: 0;\n  }\n  [no-grow] {\n    flex-grow: 0;\n  }\n  [align-self-center] {\n    align-self: center;\n  }\n  [align-self-stretch] {\n    align-self: stretch;\n  }\n  [buttons-container] {\n    display: flex;\n    flex-direction: row;\n    flex-grow: 1;\n  }\n  [buttons-container] katapult-button:not(:last-of-type) {\n    margin-right: 16px;\n  }\n  [drag-handle]:hover {\n    cursor: grab;\n  }\n  [drag-handle]:active {\n    cursor: grabbing;\n  }   \n  [no-user-select] {\n    user-select: none;\n    -webkit-user-select: none; /* Safari */\n  }\n  [width-fill-available] {\n    width: -webkit-fill-available;\n  }\n";gc.innerHTML=`<dom-module id="flex">\n  <template>\n    <style>\n      ${bc}\n    </style>\n  </template>\n</dom-module>`,document.head.appendChild(gc.content);class _c extends st{static properties={_jobData:{type:Array,state:!0},_refreshAPICheck:{type:Boolean,state:!0},_apiKey:{type:String},_pickerOpened:{type:Boolean,state:!0},_newJobOpened:{type:Boolean,state:!0},_currentDb:{type:String}};static styles=[r(Or),r(bc),s`
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
    `];render(){return U`
      <sl-dialog id="job-picker" filled centered no-actions .open=${this.pickerOpened} label="JOB PICKER">
        <div slot="header-actions"></div>
        <div flex row align-center>
          ${Nr(!this.jobData||0==this.jobData.length,()=>U`
              <sl-select class="set-width" disabled placeholder="Loading...">
                <sl-icon library="material" name="arrow_drop_down" slot="expand-icon"></sl-icon>
              </sl-select>
            `)}
          ${Nr(this.jobData.length>0,()=>U`
              <sl-select class="set-width" hoist placeholder="Select a Job" value="select_a_job">
                <sl-icon library="material" name="arrow_drop_down" slot="expand-icon"></sl-icon>
                ${Ir(this.jobData,t=>U`
                    <sl-option>${t.name}</sl-option>
                  `)}
              </sl-select>
            `)}
          <!-- <sl-icon style="margin-left: 12px; color: var(--sl-color-gray-700);" library="material" name="folder_round"></sl-icon> -->
        </div>
        <div flex space-between slot="footer">
          <sl-button id="job-picker-close" variant="default" @click=${t=>this.close(t)}>Skip</sl-button>
          <sl-button variant="primary" @click=${()=>this.openCreateJob()}>Create New Job</sl-button>
        </div>
      </sl-dialog>
      <sl-dialog id="new-job-dialog" filled centered no-actions .open=${this.newJobOpened} label="CREATE NEW JOB">
        <!-- <sl-input placeholder="Enter a new Job Name" label="Enter a new Job Name"></sl-input>
        <div>Searchable dropdown goes here</div> -->
        <div flex space-between slot="footer">
          <sl-button id="new-job-close" variant="default" @click=${t=>this.close(t)}>Cancel</sl-button>
          <sl-button variant="primary" @click=${()=>this.sendJobCall()}>Create Job</sl-button>
        </div>
      </sl-dialog>
    `}constructor(){super(),this.jobData=[],this.refreshAPICheck=!1,this.apiKey=this.getAPI(this.refreshAPICheck),this.pickerOpened=!0,this.newJobOpened=!1,this.currentDb="dcs",window.addEventListener("apiKeyChange",async()=>{this.refreshAPICheck=!this.refreshAPICheck,await this.getJobData()}),this.apiKey&&this.getJobData()}close(t){switch(t.currentTarget.id){case"job-picker-close":this.pickerOpened=!1;break;case"new-job-close":this.newJobOpened=!1}this.requestUpdate()}getAPI(t){return new URLSearchParams(window.location.search).get("api_key")||localStorage.getItem("apiKey")||""}async getJobData(){const t="database"!=this.currentDb?this.currentDb+".":"",e=await fetch(`https://${t}katapultpro.com/api/v3/jobs?api_key=${this.apiKey}`,{method:"GET"}).then(t=>t.json());this.jobData=e.data,this.requestUpdate()}openCreateJob(){this.newJobOpened=!0,this.requestUpdate()}async sendJobCall(){const t="database"!=this.currentDb?this.currentDb+".":"";await fetch(`https://${t}katapultpro.com/api/v3/jobs?api_key=${this.apiKey}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:"Annika POST Test",model:"katapult",metadata:null})})}}window.customElements.define("katapult-job-picker",_c);var yc=s`
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
`,vc=class extends fs{constructor(){super(...arguments),this.localize=new Ks(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=t=>{this.open&&"Escape"===t.key&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{var e;if("Escape"===t.key&&this.open&&!this.closeWatcher)return t.stopPropagation(),this.focusOnTrigger(),void this.hide();if("Tab"===t.key){if(this.open&&"sl-menu-item"===(null==(e=document.activeElement)?void 0:e.tagName.toLowerCase()))return t.preventDefault(),this.hide(),void this.focusOnTrigger();const i=(t,e)=>{if(!t)return null;const o=t.closest(e);if(o)return o;const n=t.getRootNode();return n instanceof ShadowRoot?i(n.host,e):null};setTimeout(()=>{var t;const e=(null==(t=this.containingElement)?void 0:t.getRootNode())instanceof ShadowRoot?Ql():document.activeElement;this.containingElement&&i(e,this.containingElement.tagName.toLowerCase())===this.containingElement||this.hide()})}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{const e=t.target;this.stayOpenOnSelect||"sl-menu"!==e.tagName.toLowerCase()||(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const t=this.trigger.assignedElements({flatten:!0})[0];"function"==typeof(null==t?void 0:t.focus)&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>"sl-menu"===t.tagName.toLowerCase())}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key))return t.preventDefault(),void this.handleTriggerClick();const e=this.getMenu();if(e){const i=e.getAllItems(),o=i[0],n=i[i.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),i.length>0&&this.updateComplete.then(()=>{"ArrowDown"!==t.key&&"Home"!==t.key||(e.setCurrentItem(o),o.focus()),"ArrowUp"!==t.key&&"End"!==t.key||(e.setCurrentItem(n),n.focus())}))}}handleTriggerKeyUp(t){" "===t.key&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(t=>function(t){var e,i;const o=oc(t);return{start:null!=(e=o[0])?e:null,end:null!=(i=o[o.length-1])?i:null}}(t).start);let e;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":e=t.button;break;default:e=t}e.setAttribute("aria-haspopup","true"),e.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,Ul(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Ul(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var t;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var t;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),null==(t=this.closeWatcher)||t.destroy()}async handleOpenChange(){if(this.disabled)this.open=!1;else if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await ql(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=Bl(this,"dropdown.show",{dir:this.localize.dir()});await jl(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await ql(this);const{keyframes:t,options:e}=Bl(this,"dropdown.hide",{dir:this.localize.dir()});await jl(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return U`
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
        sync=${Ds(this.sync?this.sync:void 0)}
        class=${As({dropdown:!0,"dropdown--open":this.open})}
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
    `}};vc.styles=[as,yc],vc.dependencies={"sl-popup":$l},os([ps(".dropdown")],vc.prototype,"popup",2),os([ps(".dropdown__trigger")],vc.prototype,"trigger",2),os([ps(".dropdown__panel")],vc.prototype,"panel",2),os([ds({type:Boolean,reflect:!0})],vc.prototype,"open",2),os([ds({reflect:!0})],vc.prototype,"placement",2),os([ds({type:Boolean,reflect:!0})],vc.prototype,"disabled",2),os([ds({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],vc.prototype,"stayOpenOnSelect",2),os([ds({attribute:!1})],vc.prototype,"containingElement",2),os([ds({type:Number})],vc.prototype,"distance",2),os([ds({type:Number})],vc.prototype,"skidding",2),os([ds({type:Boolean})],vc.prototype,"hoist",2),os([ds({reflect:!0})],vc.prototype,"sync",2),os([ss("open",{waitUntilFirstUpdate:!0})],vc.prototype,"handleOpenChange",1),Hl("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}}),Hl("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}}),vc.define("sl-dropdown");var wc=s`
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
`,xc=class extends fs{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(t){const e=["menuitem","menuitemcheckbox"],i=t.composedPath(),o=i.find(t=>{var i;return e.includes((null==(i=null==t?void 0:t.getAttribute)?void 0:i.call(t,"role"))||"")});if(!o)return;if(i.find(t=>{var e;return"menu"===(null==(e=null==t?void 0:t.getAttribute)?void 0:e.call(t,"role"))})!==this)return;const n=o;"checkbox"===n.type&&(n.checked=!n.checked),this.emit("sl-select",{detail:{item:n}})}handleKeyDown(t){if("Enter"===t.key||" "===t.key){const e=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),null==e||e.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){const e=this.getAllItems(),i=this.getCurrentItem();let o=i?e.indexOf(i):0;e.length>0&&(t.preventDefault(),t.stopPropagation(),"ArrowDown"===t.key?o++:"ArrowUp"===t.key?o--:"Home"===t.key?o=0:"End"===t.key&&(o=e.length-1),o<0&&(o=e.length-1),o>e.length-1&&(o=0),this.setCurrentItem(e[o]),e[o].focus())}}handleMouseDown(t){const e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e)}handleSlotChange(){const t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0])}isMenuItem(t){var e;return"sl-menu-item"===t.tagName.toLowerCase()||["menuitem","menuitemcheckbox","menuitemradio"].includes(null!=(e=t.getAttribute("role"))?e:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.inert||!this.isMenuItem(t)))}getCurrentItem(){return this.getAllItems().find(t=>"0"===t.getAttribute("tabindex"))}setCurrentItem(t){this.getAllItems().forEach(e=>{e.setAttribute("tabindex",e===t?"0":"-1")})}render(){return U`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};xc.styles=[as,wc],os([ps("slot")],xc.prototype,"defaultSlot",2),xc.define("sl-menu");var Cc=s`
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
 */;const Sc=(t,e)=>{const i=t._$AN;if(void 0===i)return!1;for(const t of i)t._$AO?.(e,!1),Sc(t,e);return!0},kc=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===i?.size)},Pc=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),$c(e)}};function Ec(t){void 0!==this._$AN?(kc(this),this._$AM=t,Pc(this)):this._$AM=t}function Ac(t,e=!1,i=0){const o=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(e)if(Array.isArray(o))for(let t=i;t<o.length;t++)Sc(o[t],!1),kc(o[t]);else null!=o&&(Sc(o,!1),kc(o));else Sc(this,t)}const $c=t=>{t.type==Cs&&(t._$AP??=Ac,t._$AQ??=Ec)};class Tc extends Es{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),Pc(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(Sc(this,t),kc(this))}setValue(t){if(ms(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Oc{}const Nc=new WeakMap,Ic=Ps(class extends Tc{render(t){return V}update(t,[e]){const i=e!==this.G;return i&&void 0!==this.G&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),V}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.G){const e=this.ht??globalThis;let i=Nc.get(e);void 0===i&&(i=new WeakMap,Nc.set(e,i)),void 0!==i.get(this.G)&&this.G.call(this.ht,void 0),i.set(this.G,t),void 0!==t&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return"function"==typeof this.G?Nc.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Dc=class{constructor(t,e){this.popupRef=new Oc,this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=t=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${t.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${t.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=t=>{switch(t.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":t.target!==this.host&&(t.preventDefault(),t.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(t)}},this.handleClick=t=>{var e;t.target===this.host?(t.preventDefault(),t.stopPropagation()):t.target instanceof Element&&("sl-menu-item"===t.target.tagName||(null==(e=t.target.role)?void 0:e.startsWith("menuitem")))&&this.disableSubmenu()},this.handleFocusOut=t=>{t.relatedTarget&&t.relatedTarget instanceof Element&&this.host.contains(t.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=t=>{t.stopPropagation()},this.handlePopupReposition=()=>{const t=this.host.renderRoot.querySelector("slot[name='submenu']"),e=null==t?void 0:t.assignedElements({flatten:!0}).filter(t=>"sl-menu"===t.localName)[0],i="rtl"===getComputedStyle(this.host).direction;if(!e)return;const{left:o,top:n,width:r,height:s}=e.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${i?o+r:o}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${n}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${i?o+r:o}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${n+s}px`)},(this.host=t).addController(this),this.hasSlotController=e}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(t){const e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e)return void console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);let i=null;for(const t of e.assignedElements())if(i=t.querySelectorAll("sl-menu-item, [role^='menuitem']"),0!==i.length)break;if(i&&0!==i.length){i[0].setAttribute("tabindex","0");for(let t=1;t!==i.length;++t)i[t].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?i[0]instanceof HTMLElement&&i[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{i[0]instanceof HTMLElement&&i[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var t;if(!(null==(t=this.host.parentElement)?void 0:t.computedStyleMap))return;const e=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce((t,i)=>{var o;const n=null!=(o=e.get(i))?o:new CSSUnitValue(0,"px");return t-(n instanceof CSSUnitValue?n:new CSSUnitValue(0,"px")).to("px").value},0);this.skidding=i}isExpanded(){return!!this.popupRef.value&&this.popupRef.value.active}renderSubmenu(){const t="rtl"===getComputedStyle(this.host).direction;return this.isConnected?U`
      <sl-popup
        ${Ic(this.popupRef)}
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
    `:U` <slot name="submenu" hidden></slot> `}},Lc=class extends fs{constructor(){super(...arguments),this.localize=new Ks(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new Wl(this,"submenu"),this.submenuController=new Dc(this,this.hasSlotController),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const t=this.getTextLabel();void 0!==this.cachedTextLabel?t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1})):this.cachedTextLabel=t}handleCheckedChange(){if(this.checked&&"checkbox"!==this.type)return this.checked=!1,void console.error('The checked attribute can only be used on menu items with type="checkbox"',this);"checkbox"===this.type?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){"checkbox"===this.type?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return function(t){if(!t)return"";const e=t.assignedNodes({flatten:!0});let i="";return[...e].forEach(t=>{t.nodeType===Node.TEXT_NODE&&(i+=t.textContent)}),i}(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const t="rtl"===this.localize.dir(),e=this.submenuController.isExpanded();return U`
      <div
        id="anchor"
        part="base"
        class=${As({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":e})}
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
    `}};Lc.styles=[as,Cc],Lc.dependencies={"sl-icon":ws,"sl-popup":$l,"sl-spinner":dc},os([ps("slot:not([name])")],Lc.prototype,"defaultSlot",2),os([ps(".menu-item")],Lc.prototype,"menuItem",2),os([ds()],Lc.prototype,"type",2),os([ds({type:Boolean,reflect:!0})],Lc.prototype,"checked",2),os([ds()],Lc.prototype,"value",2),os([ds({type:Boolean,reflect:!0})],Lc.prototype,"loading",2),os([ds({type:Boolean,reflect:!0})],Lc.prototype,"disabled",2),os([ss("checked")],Lc.prototype,"handleCheckedChange",1),os([ss("disabled")],Lc.prototype,"handleDisabledChange",1),os([ss("type")],Lc.prototype,"handleTypeChange",1),Lc.define("sl-menu-item");var zc=s`
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
`,Mc=class extends fs{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){const t=U`
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
        class=${As({avatar:!0,"avatar--circle":"circle"===this.shape,"avatar--rounded":"rounded"===this.shape,"avatar--square":"square"===this.shape})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?t:e}
      </div>
    `}};Mc.styles=[as,zc],Mc.dependencies={"sl-icon":ws},os([hs()],Mc.prototype,"hasError",2),os([ds()],Mc.prototype,"image",2),os([ds()],Mc.prototype,"label",2),os([ds()],Mc.prototype,"initials",2),os([ds()],Mc.prototype,"loading",2),os([ds({reflect:!0})],Mc.prototype,"shape",2),os([ss("image")],Mc.prototype,"handleImageChange",1),Mc.define("sl-avatar"),Ls.define("sl-icon-button"),function(t){if("object"==typeof exports)module.exports=t();else if("function"==typeof define&&define.amd)define(t);else{var e;try{e=window}catch(t){e=self}e.SparkMD5=t()}}(function(t){var e=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];function i(t,e){var i=t[0],o=t[1],n=t[2],r=t[3];o=((o+=((n=((n+=((r=((r+=((i=((i+=(o&n|~o&r)+e[0]-680876936|0)<<7|i>>>25)+o|0)&o|~i&n)+e[1]-389564586|0)<<12|r>>>20)+i|0)&i|~r&o)+e[2]+606105819|0)<<17|n>>>15)+r|0)&r|~n&i)+e[3]-1044525330|0)<<22|o>>>10)+n|0,o=((o+=((n=((n+=((r=((r+=((i=((i+=(o&n|~o&r)+e[4]-176418897|0)<<7|i>>>25)+o|0)&o|~i&n)+e[5]+1200080426|0)<<12|r>>>20)+i|0)&i|~r&o)+e[6]-1473231341|0)<<17|n>>>15)+r|0)&r|~n&i)+e[7]-45705983|0)<<22|o>>>10)+n|0,o=((o+=((n=((n+=((r=((r+=((i=((i+=(o&n|~o&r)+e[8]+1770035416|0)<<7|i>>>25)+o|0)&o|~i&n)+e[9]-1958414417|0)<<12|r>>>20)+i|0)&i|~r&o)+e[10]-42063|0)<<17|n>>>15)+r|0)&r|~n&i)+e[11]-1990404162|0)<<22|o>>>10)+n|0,o=((o+=((n=((n+=((r=((r+=((i=((i+=(o&n|~o&r)+e[12]+1804603682|0)<<7|i>>>25)+o|0)&o|~i&n)+e[13]-40341101|0)<<12|r>>>20)+i|0)&i|~r&o)+e[14]-1502002290|0)<<17|n>>>15)+r|0)&r|~n&i)+e[15]+1236535329|0)<<22|o>>>10)+n|0,o=((o+=((n=((n+=((r=((r+=((i=((i+=(o&r|n&~r)+e[1]-165796510|0)<<5|i>>>27)+o|0)&n|o&~n)+e[6]-1069501632|0)<<9|r>>>23)+i|0)&o|i&~o)+e[11]+643717713|0)<<14|n>>>18)+r|0)&i|r&~i)+e[0]-373897302|0)<<20|o>>>12)+n|0,o=((o+=((n=((n+=((r=((r+=((i=((i+=(o&r|n&~r)+e[5]-701558691|0)<<5|i>>>27)+o|0)&n|o&~n)+e[10]+38016083|0)<<9|r>>>23)+i|0)&o|i&~o)+e[15]-660478335|0)<<14|n>>>18)+r|0)&i|r&~i)+e[4]-405537848|0)<<20|o>>>12)+n|0,o=((o+=((n=((n+=((r=((r+=((i=((i+=(o&r|n&~r)+e[9]+568446438|0)<<5|i>>>27)+o|0)&n|o&~n)+e[14]-1019803690|0)<<9|r>>>23)+i|0)&o|i&~o)+e[3]-187363961|0)<<14|n>>>18)+r|0)&i|r&~i)+e[8]+1163531501|0)<<20|o>>>12)+n|0,o=((o+=((n=((n+=((r=((r+=((i=((i+=(o&r|n&~r)+e[13]-1444681467|0)<<5|i>>>27)+o|0)&n|o&~n)+e[2]-51403784|0)<<9|r>>>23)+i|0)&o|i&~o)+e[7]+1735328473|0)<<14|n>>>18)+r|0)&i|r&~i)+e[12]-1926607734|0)<<20|o>>>12)+n|0,o=((o+=((n=((n+=((r=((r+=((i=((i+=(o^n^r)+e[5]-378558|0)<<4|i>>>28)+o|0)^o^n)+e[8]-2022574463|0)<<11|r>>>21)+i|0)^i^o)+e[11]+1839030562|0)<<16|n>>>16)+r|0)^r^i)+e[14]-35309556|0)<<23|o>>>9)+n|0,o=((o+=((n=((n+=((r=((r+=((i=((i+=(o^n^r)+e[1]-1530992060|0)<<4|i>>>28)+o|0)^o^n)+e[4]+1272893353|0)<<11|r>>>21)+i|0)^i^o)+e[7]-155497632|0)<<16|n>>>16)+r|0)^r^i)+e[10]-1094730640|0)<<23|o>>>9)+n|0,o=((o+=((n=((n+=((r=((r+=((i=((i+=(o^n^r)+e[13]+681279174|0)<<4|i>>>28)+o|0)^o^n)+e[0]-358537222|0)<<11|r>>>21)+i|0)^i^o)+e[3]-722521979|0)<<16|n>>>16)+r|0)^r^i)+e[6]+76029189|0)<<23|o>>>9)+n|0,o=((o+=((n=((n+=((r=((r+=((i=((i+=(o^n^r)+e[9]-640364487|0)<<4|i>>>28)+o|0)^o^n)+e[12]-421815835|0)<<11|r>>>21)+i|0)^i^o)+e[15]+530742520|0)<<16|n>>>16)+r|0)^r^i)+e[2]-995338651|0)<<23|o>>>9)+n|0,o=((o+=((r=((r+=(o^((i=((i+=(n^(o|~r))+e[0]-198630844|0)<<6|i>>>26)+o|0)|~n))+e[7]+1126891415|0)<<10|r>>>22)+i|0)^((n=((n+=(i^(r|~o))+e[14]-1416354905|0)<<15|n>>>17)+r|0)|~i))+e[5]-57434055|0)<<21|o>>>11)+n|0,o=((o+=((r=((r+=(o^((i=((i+=(n^(o|~r))+e[12]+1700485571|0)<<6|i>>>26)+o|0)|~n))+e[3]-1894986606|0)<<10|r>>>22)+i|0)^((n=((n+=(i^(r|~o))+e[10]-1051523|0)<<15|n>>>17)+r|0)|~i))+e[1]-2054922799|0)<<21|o>>>11)+n|0,o=((o+=((r=((r+=(o^((i=((i+=(n^(o|~r))+e[8]+1873313359|0)<<6|i>>>26)+o|0)|~n))+e[15]-30611744|0)<<10|r>>>22)+i|0)^((n=((n+=(i^(r|~o))+e[6]-1560198380|0)<<15|n>>>17)+r|0)|~i))+e[13]+1309151649|0)<<21|o>>>11)+n|0,o=((o+=((r=((r+=(o^((i=((i+=(n^(o|~r))+e[4]-145523070|0)<<6|i>>>26)+o|0)|~n))+e[11]-1120210379|0)<<10|r>>>22)+i|0)^((n=((n+=(i^(r|~o))+e[2]+718787259|0)<<15|n>>>17)+r|0)|~i))+e[9]-343485551|0)<<21|o>>>11)+n|0,t[0]=i+t[0]|0,t[1]=o+t[1]|0,t[2]=n+t[2]|0,t[3]=r+t[3]|0}function o(t){var e,i=[];for(e=0;e<64;e+=4)i[e>>2]=t.charCodeAt(e)+(t.charCodeAt(e+1)<<8)+(t.charCodeAt(e+2)<<16)+(t.charCodeAt(e+3)<<24);return i}function n(t){var e,i=[];for(e=0;e<64;e+=4)i[e>>2]=t[e]+(t[e+1]<<8)+(t[e+2]<<16)+(t[e+3]<<24);return i}function r(t){var e,n,r,s,a,l,c=t.length,d=[1732584193,-271733879,-1732584194,271733878];for(e=64;e<=c;e+=64)i(d,o(t.substring(e-64,e)));for(n=(t=t.substring(e-64)).length,r=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e=0;e<n;e+=1)r[e>>2]|=t.charCodeAt(e)<<(e%4<<3);if(r[e>>2]|=128<<(e%4<<3),e>55)for(i(d,r),e=0;e<16;e+=1)r[e]=0;return s=(s=8*c).toString(16).match(/(.*?)(.{0,8})$/),a=parseInt(s[2],16),l=parseInt(s[1],16)||0,r[14]=a,r[15]=l,i(d,r),d}function s(t){var i,o="";for(i=0;i<4;i+=1)o+=e[t>>8*i+4&15]+e[t>>8*i&15];return o}function a(t){var e;for(e=0;e<t.length;e+=1)t[e]=s(t[e]);return t.join("")}function l(t){return/[\u0080-\uFFFF]/.test(t)&&(t=unescape(encodeURIComponent(t))),t}function c(t){var e,i=[],o=t.length;for(e=0;e<o-1;e+=2)i.push(parseInt(t.substr(e,2),16));return String.fromCharCode.apply(String,i)}function d(){this.reset()}return a(r("hello")),"undefined"==typeof ArrayBuffer||ArrayBuffer.prototype.slice||function(){function e(t,e){return(t=0|t||0)<0?Math.max(t+e,0):Math.min(t,e)}ArrayBuffer.prototype.slice=function(i,o){var n,r,s,a,l=this.byteLength,c=e(i,l),d=l;return o!==t&&(d=e(o,l)),c>d?new ArrayBuffer(0):(n=d-c,r=new ArrayBuffer(n),s=new Uint8Array(r),a=new Uint8Array(this,c,n),s.set(a),r)}}(),d.prototype.append=function(t){return this.appendBinary(l(t)),this},d.prototype.appendBinary=function(t){this._buff+=t,this._length+=t.length;var e,n=this._buff.length;for(e=64;e<=n;e+=64)i(this._hash,o(this._buff.substring(e-64,e)));return this._buff=this._buff.substring(e-64),this},d.prototype.end=function(t){var e,i,o=this._buff,n=o.length,r=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(e=0;e<n;e+=1)r[e>>2]|=o.charCodeAt(e)<<(e%4<<3);return this._finish(r,n),i=a(this._hash),t&&(i=c(i)),this.reset(),i},d.prototype.reset=function(){return this._buff="",this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},d.prototype.getState=function(){return{buff:this._buff,length:this._length,hash:this._hash.slice()}},d.prototype.setState=function(t){return this._buff=t.buff,this._length=t.length,this._hash=t.hash,this},d.prototype.destroy=function(){delete this._hash,delete this._buff,delete this._length},d.prototype._finish=function(t,e){var o,n,r,s=e;if(t[s>>2]|=128<<(s%4<<3),s>55)for(i(this._hash,t),s=0;s<16;s+=1)t[s]=0;o=(o=8*this._length).toString(16).match(/(.*?)(.{0,8})$/),n=parseInt(o[2],16),r=parseInt(o[1],16)||0,t[14]=n,t[15]=r,i(this._hash,t)},d.hash=function(t,e){return d.hashBinary(l(t),e)},d.hashBinary=function(t,e){var i=a(r(t));return e?c(i):i},d.ArrayBuffer=function(){this.reset()},d.ArrayBuffer.prototype.append=function(t){var e,o,r,s,a=(o=this._buff.buffer,r=t,(s=new Uint8Array(o.byteLength+r.byteLength)).set(new Uint8Array(o)),s.set(new Uint8Array(r),o.byteLength),s),l=a.length;for(this._length+=t.byteLength,e=64;e<=l;e+=64)i(this._hash,n(a.subarray(e-64,e)));return this._buff=e-64<l?new Uint8Array(a.buffer.slice(e-64)):new Uint8Array(0),this},d.ArrayBuffer.prototype.end=function(t){var e,i,o=this._buff,n=o.length,r=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(e=0;e<n;e+=1)r[e>>2]|=o[e]<<(e%4<<3);return this._finish(r,n),i=a(this._hash),t&&(i=c(i)),this.reset(),i},d.ArrayBuffer.prototype.reset=function(){return this._buff=new Uint8Array(0),this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},d.ArrayBuffer.prototype.getState=function(){var t,e=d.prototype.getState.call(this);return e.buff=(t=e.buff,String.fromCharCode.apply(null,new Uint8Array(t))),e},d.ArrayBuffer.prototype.setState=function(t){return t.buff=function(t,e){var i,o=t.length,n=new ArrayBuffer(o),r=new Uint8Array(n);for(i=0;i<o;i+=1)r[i]=t.charCodeAt(i);return e?r:n}(t.buff,!0),d.prototype.setState.call(this,t)},d.ArrayBuffer.prototype.destroy=d.prototype.destroy,d.ArrayBuffer.prototype._finish=d.prototype._finish,d.ArrayBuffer.hash=function(t,e){var o=function(t){var e,o,r,s,a,l,c=t.length,d=[1732584193,-271733879,-1732584194,271733878];for(e=64;e<=c;e+=64)i(d,n(t.subarray(e-64,e)));for(o=(t=e-64<c?t.subarray(e-64):new Uint8Array(0)).length,r=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e=0;e<o;e+=1)r[e>>2]|=t[e]<<(e%4<<3);if(r[e>>2]|=128<<(e%4<<3),e>55)for(i(d,r),e=0;e<16;e+=1)r[e]=0;return s=(s=8*c).toString(16).match(/(.*?)(.{0,8})$/),a=parseInt(s[2],16),l=parseInt(s[1],16)||0,r[14]=a,r[15]=l,i(d,r),d}(new Uint8Array(t)),r=a(o);return e?c(r):r},d});class Rc extends st{static properties={logoLink:{type:String},companyName:{type:String},supportNum:{type:String},supportEmail:{type:String},_pages:{type:Array,state:!0},_email:{type:String,state:!0},_gravatarSrc:{type:String,state:!0},_refreshAPICheck:{type:Boolean,state:!0},_apiKey:{type:String,state:!0,reflect:!0},_currentDb:{type:String,state:!0,reflect:!0}};static styles=[r(Or),r(bc),s`
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
  `];render(){return U`
      <div flex row id="toolbar">
        <!-- Left Container -->
        <div flex row align-center grow justify-start>
          <slot name="leftOfLogo"></slot>
          ${Nr(this.logoLink,()=>U`<img id="logo" src="${this.logoLink}" />`)}
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
                ${Nr(this.supportNum||this.supportEmail,()=>U`
                    <p style="margin-top: 0;">
                        If you have questions or need support, please
                        ${Nr(this.supportNum,()=>U`call us at ${this.supportNum}`)}
                        ${Nr(this.supportNum&&this.supportEmail,()=>U` or `)}
                        ${Nr(this.supportEmail,()=>U`email us at <a style="color: var(--primary-color, blue); text-decoration: none;" href="mailto:${this.supportEmail}">${this.supportEmail}</a
                        >`)}.
                    </p>
                `)}
                ${Nr(!(this.supportNum||this.supportEmail),()=>U`<p style="margin-top: 0;">A Katapult Pro Extension</p>`)}
              <div class="software-details">
                <p>
                  This webpage is hosted
                  ${Nr(this.companyName,()=>U`by ${this.companyName}`)}
                  using Katapult Engineering's API, and extends the Katapult Pro software.
                </p>
                <p>Katapult does not manage or hold responsibility for this domain.</p>
              </div>
            </sl-dropdown>
            <sl-dropdown id="nine-dot-dropdown">
              <sl-icon-button class="toolbar-icon" pointer library="material" name="apps" slot="trigger"></sl-icon-button>
              <sl-menu flex row align-center justify-center style="flex-wrap: wrap;">
                ${Ir(this.pages,t=>U`
                        <sl-menu-item flex column @click=${t=>this.openPage(t)}>
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
                            ${t.displayName}
                        </sl-menu-item>
                    `)}
              </sl-menu>
            </sl-dropdown>
            <sl-avatar class="toolbar-icon" pointer image="${this.gravatarSrc}"></sl-avatar>
            <sl-dropdown open></sl-dropdown>
          </div>
        </div>
      </div>
      `}constructor(){super(),this.logoLink="",this.companyName="",this.supportNum="",this.supportEmail="",this.pages=[],this.email="",this.gravatarSrc=this.getGravatarSrc(this.email),this.refreshAPICheck=!1,this.apiKey=this.getAPI(this.refreshAPICheck),this.currentDb="dcs",window.addEventListener("apiKeyChange",async()=>{this.refreshAPICheck=!this.refreshAPICheck}),this.apiKey&&this.getPages()}getGravatarSrc(t){if(!t)return"";return`https://www.gravatar.com/avatar/${SparkMD5.hash(t)}?s=100&d=blank`}getAPI(t){return new URLSearchParams(window.location.search).get("api_key")||localStorage.getItem("apiKey")||""}openPage(t){const e=t.currentTarget.innerText.toLowerCase(),i=this.pages.filter(t=>t.name==e)[0],o="https://"+this.currentDb+".katapultpro.com/"+i.url;window.open(o,"_blank")}async getPages(){const t="database"!=this.currentDb?this.currentDb+".":"",e=await fetch(`https://${t}katapultpro.com/api/v2/company-data/pages?api_key=${this.apiKey}`,{method:"GET"}).then(t=>t.json());e.error||(e.forEach(t=>{t.displayName=t.name.length>20?t.name.slice(0,15)+"...":t.name,t.icon=t.icon+"_round"}),this.pages=e,this.requestUpdate())}}window.customElements.define("katapult-toolbar",Rc);class Fc extends st{static properties={_validApiKey:{type:Boolean,state:!0},_apiError:{type:Boolean,state:!0},_currentDb:{type:String,state:!0}};static styles=[r(Or),r(bc),s`
      #loginForm::part(panel) {
        max-width: 330px;
      }
      .link {
        color: var(--primary-color, blue);
        text-decoration: underline;
        cursor: pointer;
      }
    `];render(){return U`
      <!-- Api key needs to be entered, or was invalid when entered -->
      <sl-dialog id="loginForm" no-header .open=${!this.validApiKey} @sl-request-close=${t=>t.preventDefault()}>
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
          <sl-button variant="primary" @click=${()=>this.checkAPI()}>Open API Tool</sl-button>
          <p style="color: var(--sl-color-gray-600); text-align: center; font-size: 14px; margin-bottom: 2px;">
            If you do not know how to access your API key, follow along with
            <span class="link"
              @click=${()=>this.openAPIPage()}>this</span
            >
            documentation.
          </p>
          ${Nr(this.apiError,()=>U`
              <p style="color: red; font-size: 14px; text-align: center; margin-top: 6px; margin-bottom: 2px;">
                Your API Key is invalid or is for a different database. Try again.
              </p>
            `)}
        </div>
      </sl-dialog>

      <!-- Api key exists and is valid -->
       ${Nr(this.validApiKey,()=>U`
          <!-- The default slot -->
          <slot></slot>
        `)}
    `}constructor(){super(),this.validApiKey=this.checkForAPI(),this.apiError=!1,this.currentDb="dcs",this.validApiKey&&this.requestUpdate()}checkForAPI(){return!(!new URLSearchParams(window.location.search).get("api_key")&&!localStorage.getItem("apiKey"))}openAPIPage(){window.open("https://github.com/KatapultDevelopment/katapult-pro-api-documentation/blob/main/v2/DocumentationV2.MD#api-key-generation","_blank")}async checkAPI(){const t=this.shadowRoot.getElementById("apiKeyInput")?.value;if(t){const e=await this.getJobData(t);if("INVALID API KEY"==e?.error)this.apiError=!0;else{localStorage.setItem("apiKey",t);const e=new CustomEvent("apiKeyChange",{detail:"data-change"});window.dispatchEvent(e),this.validApiKey=!0}this.requestUpdate()}}async getJobData(t){if(t){const e="database"!=this.currentDb?this.currentDb+".":"";return await fetch(`https://${e}katapultpro.com/api/v2?api_key=${t}`,{method:"GET"}).then(t=>t.json())}}}window.customElements.define("katapult-authentication",Fc);var Hc=s`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
    overflow: hidden;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--has-countdown {
    border-bottom: none;
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    margin-inline-end: var(--sl-spacing-medium);
    align-self: center;
  }

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(var(--sl-panel-border-width) * 3);
    background-color: var(--sl-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
  }

  .alert--primary .alert__countdown-elapsed {
    background-color: var(--sl-color-primary-600);
  }

  .alert--success .alert__countdown-elapsed {
    background-color: var(--sl-color-success-600);
  }

  .alert--neutral .alert__countdown-elapsed {
    background-color: var(--sl-color-neutral-600);
  }

  .alert--warning .alert__countdown-elapsed {
    background-color: var(--sl-color-warning-600);
  }

  .alert--danger .alert__countdown-elapsed {
    background-color: var(--sl-color-danger-600);
  }

  .alert__timer {
    display: none;
  }
`,Bc=class t extends fs{constructor(){super(...arguments),this.hasSlotController=new Wl(this,"icon","suffix"),this.localize=new Ks(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"sl-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var t;null==(t=this.countdownAnimation)||t.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var t;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),null==(t=this.countdownAnimation)||t.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:t}=this,e="100%",i="0";this.countdownAnimation=t.animate([{width:e},{width:i}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await ql(this.base),this.base.hidden=!1;const{keyframes:t,options:e}=Bl(this,"alert.show",{dir:this.localize.dir()});await jl(this.base,t,e),this.emit("sl-after-show")}else{ac(this),this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await ql(this.base);const{keyframes:t,options:e}=Bl(this,"alert.hide",{dir:this.localize.dir()});await jl(this.base,t,e),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,Ul(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Ul(this,"sl-after-hide")}async toast(){return new Promise(e=>{this.handleCountdownChange(),null===t.toastStack.parentElement&&document.body.append(t.toastStack),t.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{t.toastStack.removeChild(this),e(),null===t.toastStack.querySelector("sl-alert")&&t.toastStack.remove()},{once:!0})})}render(){return U`
      <div
        part="base"
        class=${As({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":"primary"===this.variant,"alert--success":"success"===this.variant,"alert--neutral":"neutral"===this.variant,"alert--warning":"warning"===this.variant,"alert--danger":"danger"===this.variant})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?U`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown?U`
              <div
                class=${As({alert__countdown:!0,"alert__countdown--ltr":"ltr"===this.countdown})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};Bc.styles=[as,Hc],Bc.dependencies={"sl-icon-button":Ls},os([ps('[part~="base"]')],Bc.prototype,"base",2),os([ps(".alert__countdown-elapsed")],Bc.prototype,"countdownElement",2),os([ds({type:Boolean,reflect:!0})],Bc.prototype,"open",2),os([ds({type:Boolean,reflect:!0})],Bc.prototype,"closable",2),os([ds({reflect:!0})],Bc.prototype,"variant",2),os([ds({type:Number})],Bc.prototype,"duration",2),os([ds({type:String,reflect:!0})],Bc.prototype,"countdown",2),os([hs()],Bc.prototype,"remainingTime",2),os([ss("open",{waitUntilFirstUpdate:!0})],Bc.prototype,"handleOpenChange",1),os([ss("duration")],Bc.prototype,"handleDurationChange",1);var Uc=Bc;Hl("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),Hl("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}}),Uc.define("sl-alert");class jc extends st{static properties={};static styles=r(Or);render(){return U`
      <sl-alert open>
        <sl-icon slot="icon" library="material" name="report_problem_round"></sl-icon>
        <slot></slot>
      </sl-alert>
    `}constructor(){super()}}window.customElements.define("katapult-warning",jc);class Vc extends st{static properties={supportNum:{type:String},supportEmail:{type:String},companyName:{type:String},logoLink:{type:String}};static styles=[r(Or),s`
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
    `];render(){return U`
    <!doctype html>
    <html lang="en">
    <head>
      <title>Extension Page</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1, user-scalable=yes" />
      <meta name="robots" content="noindex" />
      <!-- Material Icons -->
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <!-- Material Symbols -->
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        rel="stylesheet"
      />
      <!-- Shoelace -->
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.1/cdn/themes/light.css" />
      <!--Favicon Code-->
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="https://storage.googleapis.com/katapult-pro-shared-files/photos/favicons/Katapult/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://storage.googleapis.com/katapult-pro-shared-files/photos/favicons/Katapult/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="https://storage.googleapis.com/katapult-pro-shared-files/photos/favicons/Katapult/favicon-16x16.png"
      />
      <link
        rel="mask-icon"
        href="https://storage.googleapis.com/katapult-pro-shared-files/photos/favicons/Katapult/safari-pinned-tab.svg"
        color="#003e51"
      />
      <link rel="shortcut icon" href="https://storage.googleapis.com/katapult-pro-shared-files/photos/favicons/Katapult/favicon.ico" />
      <meta name="theme-color" content="#003E51" />
      <!--End Favicon Code-->
      <script type="module" src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.1/cdn/shoelace-autoloader.js"></script>
    </head>
    <body>
      <katapult-authentication>
        <main>
          <katapult-toolbar
            .supportNum=${this.supportNum}
            .supportEmail=${this.supportEmail}
            .companyName=${this.companyName}
            .logoLink=${this.logoLink}
          ></katapult-toolbar>
          <slot></slot>
        </main>
      </katapult-authentication>
    </body>
    `}constructor(){super(),this.supportNum="",this.supportEmail="",this.companyName="",this.logoLink="",jr("material",{resolver:t=>{const e=t.match(/^(.*?)(_(round|sharp))?$/);return`https://material-icons.github.io/material-icons/svg/${e[1]}/${e[3]||"outline"}.svg`},mutator:t=>t.setAttribute("fill","currentColor")})}}window.customElements.define("katapult-page-element",Vc);class qc extends st{static properties={};static styles=s`
    :host{
      --primary-color: var(--paper-light-green-500);
      --secondary-color: var(--paper-light-green-600);
      --accent-color: var(--paper-amber-600);
    }
  `;render(){return U`
      <!-- Page Element Content -->
      <katapult-page-element .supportNum=${"111-111-1111"} .supportEmail=${"email@company.com"} .companyName=${"Company Name"} .logoLink=${""}>
      <!-- <katapult-job-picker></katapult-job-picker> -->
      <!-- <katapult-warning>Alert</katapult-warning> -->
      </katapult-page-element>
    `}constructor(){super()}}window.customElements.define("main-page",qc);export{qc as MainPage};
