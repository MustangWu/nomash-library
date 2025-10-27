const Td=()=>{};var qa={};/**
 * @license
 * Copyright 2017 Google LLC
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
 */const _u=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Id=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[t++];e[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[t++],a=n[t++],u=n[t++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return e.join("")},yu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,u=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,p=o>>2,y=(o&3)<<4|u>>4;let w=(u&15)<<2|d>>6,C=d&63;h||(C=64,a||(w=64)),r.push(t[p],t[y],t[w],t[C])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(_u(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Id(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=t[n.charAt(s++)],u=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const y=s<n.length?t[n.charAt(s)]:64;if(++s,o==null||u==null||d==null||y==null)throw new wd;const w=o<<2|u>>4;if(r.push(w),d!==64){const C=u<<4&240|d>>2;if(r.push(C),y!==64){const N=d<<6&192|y;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class wd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vd=function(n){const e=_u(n);return yu.encodeByteArray(e,!0)},Jr=function(n){return vd(n).replace(/\./g,"")},Eu=function(n){try{return yu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
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
 */function Ad(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const Rd=()=>Ad().__FIREBASE_DEFAULTS__,Sd=()=>{if(typeof process>"u"||typeof qa>"u")return;const n=qa.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Pd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Eu(n[1]);return e&&JSON.parse(e)},gs=()=>{try{return Td()||Rd()||Sd()||Pd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Tu=n=>{var e,t;return(t=(e=gs())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Cd=n=>{const e=Tu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Iu=()=>{var n;return(n=gs())==null?void 0:n.config},wu=n=>{var e;return(e=gs())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class bd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function pn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function vu(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function Vd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Jr(JSON.stringify(t)),Jr(JSON.stringify(a)),""].join(".")}const $n={};function kd(){const n={prod:[],emulator:[]};for(const e of Object.keys($n))$n[e]?n.emulator.push(e):n.prod.push(e);return n}function Nd(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let ja=!1;function Au(n,e){if(typeof window>"u"||typeof document>"u"||!pn(window.location.host)||$n[n]===e||$n[n]||ja)return;$n[n]=e;function t(w){return`__firebase__banner__${w}`}const r="__firebase__banner",o=kd().prod.length>0;function a(){const w=document.getElementById(r);w&&w.remove()}function u(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function h(w,C){w.setAttribute("width","24"),w.setAttribute("id",C),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function d(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{ja=!0,a()},w}function p(w,C){w.setAttribute("id",C),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function y(){const w=Nd(r),C=t("text"),N=document.getElementById(C)||document.createElement("span"),O=t("learnmore"),V=document.getElementById(O)||document.createElement("a"),W=t("preprendIcon"),z=document.getElementById(W)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const K=w.element;u(K),p(V,O);const ue=d();h(z,W),K.append(z,N,V,ue),document.body.appendChild(K)}o?(N.innerText="Preview backend disconnected.",z.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(z.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",C)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Dd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())}function Od(){var e;const n=(e=gs())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Md(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ld(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function xd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Fd(){const n=Te();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Ud(){return!Od()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Bd(){try{return typeof indexedDB=="object"}catch{return!1}}function qd(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var o;e(((o=s.error)==null?void 0:o.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const jd="FirebaseError";class Je extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=jd,Object.setPrototypeOf(this,Je.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ar.prototype.create)}}class ar{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?$d(o,r):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new Je(s,u,r)}}function $d(n,e){return n.replace(zd,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const zd=/\{\$([^}]+)}/g;function Hd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Lt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const o=n[s],a=e[s];if($a(o)&&$a(a)){if(!Lt(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function $a(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function cr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Fn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,o]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(o)}}),e}function Un(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Wd(n,e){const t=new Gd(n,e);return t.subscribe.bind(t)}class Gd{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Kd(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=ci),s.error===void 0&&(s.error=ci),s.complete===void 0&&(s.complete=ci);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Kd(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ci(){}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function de(n){return n&&n._delegate?n._delegate:n}class xt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Ot="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Qd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new bd;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xd(e))try{this.getOrInitializeService({instanceIdentifier:Ot})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(e=Ot){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ot){return this.instances.has(e)}getOptions(e=Ot){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Yd(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ot){return this.component?this.component.multipleInstances?e:Ot:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yd(n){return n===Ot?void 0:n}function Xd(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Jd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Qd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */var q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(q||(q={}));const Zd={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},ef=q.INFO,tf={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},nf=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=tf[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wi{constructor(e){this.name=e,this._logLevel=ef,this._logHandler=nf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Zd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...e),this._logHandler(this,q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...e),this._logHandler(this,q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,q.INFO,...e),this._logHandler(this,q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,q.WARN,...e),this._logHandler(this,q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...e),this._logHandler(this,q.ERROR,...e)}}const rf=(n,e)=>e.some(t=>n instanceof t);let za,Ha;function sf(){return za||(za=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function of(){return Ha||(Ha=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ru=new WeakMap,Ti=new WeakMap,Su=new WeakMap,ui=new WeakMap,Gi=new WeakMap;function af(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(ht(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Ru.set(t,n)}).catch(()=>{}),Gi.set(e,n),e}function cf(n){if(Ti.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Ti.set(n,e)}let Ii={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ti.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Su.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ht(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function uf(n){Ii=n(Ii)}function lf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(li(this),e,...t);return Su.set(r,e.sort?e.sort():[e]),ht(r)}:of().includes(n)?function(...e){return n.apply(li(this),e),ht(Ru.get(this))}:function(...e){return ht(n.apply(li(this),e))}}function hf(n){return typeof n=="function"?lf(n):(n instanceof IDBTransaction&&cf(n),rf(n,sf())?new Proxy(n,Ii):n)}function ht(n){if(n instanceof IDBRequest)return af(n);if(ui.has(n))return ui.get(n);const e=hf(n);return e!==n&&(ui.set(n,e),Gi.set(e,n)),e}const li=n=>Gi.get(n);function df(n,e,{blocked:t,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,e),u=ht(a);return r&&a.addEventListener("upgradeneeded",h=>{r(ht(a.result),h.oldVersion,h.newVersion,ht(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const ff=["get","getKey","getAll","getAllKeys","count"],pf=["put","add","delete","clear"],hi=new Map;function Wa(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(hi.get(e))return hi.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=pf.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ff.includes(t)))return;const o=async function(a,...u){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[t](...u),s&&h.done]))[0]};return hi.set(e,o),o}uf(n=>({...n,get:(e,t,r)=>Wa(e,t)||n.get(e,t,r),has:(e,t)=>!!Wa(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
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
 */class mf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(gf(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function gf(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wi="@firebase/app",Ga="0.14.3";/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Ke=new Wi("@firebase/app"),_f="@firebase/app-compat",yf="@firebase/analytics-compat",Ef="@firebase/analytics",Tf="@firebase/app-check-compat",If="@firebase/app-check",wf="@firebase/auth",vf="@firebase/auth-compat",Af="@firebase/database",Rf="@firebase/data-connect",Sf="@firebase/database-compat",Pf="@firebase/functions",Cf="@firebase/functions-compat",bf="@firebase/installations",Vf="@firebase/installations-compat",kf="@firebase/messaging",Nf="@firebase/messaging-compat",Df="@firebase/performance",Of="@firebase/performance-compat",Mf="@firebase/remote-config",Lf="@firebase/remote-config-compat",xf="@firebase/storage",Ff="@firebase/storage-compat",Uf="@firebase/firestore",Bf="@firebase/ai",qf="@firebase/firestore-compat",jf="firebase",$f="12.3.0";/**
 * @license
 * Copyright 2019 Google LLC
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
 */const vi="[DEFAULT]",zf={[wi]:"fire-core",[_f]:"fire-core-compat",[Ef]:"fire-analytics",[yf]:"fire-analytics-compat",[If]:"fire-app-check",[Tf]:"fire-app-check-compat",[wf]:"fire-auth",[vf]:"fire-auth-compat",[Af]:"fire-rtdb",[Rf]:"fire-data-connect",[Sf]:"fire-rtdb-compat",[Pf]:"fire-fn",[Cf]:"fire-fn-compat",[bf]:"fire-iid",[Vf]:"fire-iid-compat",[kf]:"fire-fcm",[Nf]:"fire-fcm-compat",[Df]:"fire-perf",[Of]:"fire-perf-compat",[Mf]:"fire-rc",[Lf]:"fire-rc-compat",[xf]:"fire-gcs",[Ff]:"fire-gcs-compat",[Uf]:"fire-fst",[qf]:"fire-fst-compat",[Bf]:"fire-vertex","fire-js":"fire-js",[jf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Qn=new Map,Hf=new Map,Ai=new Map;function Ka(n,e){try{n.container.addComponent(e)}catch(t){Ke.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function an(n){const e=n.name;if(Ai.has(e))return Ke.debug(`There were multiple attempts to register component ${e}.`),!1;Ai.set(e,n);for(const t of Qn.values())Ka(t,n);for(const t of Hf.values())Ka(t,n);return!0}function Ki(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function be(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Wf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},dt=new ar("app","Firebase",Wf);/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Gf{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const mn=$f;function Pu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:vi,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw dt.create("bad-app-name",{appName:String(s)});if(t||(t=Iu()),!t)throw dt.create("no-options");const o=Qn.get(s);if(o){if(Lt(t,o.options)&&Lt(r,o.config))return o;throw dt.create("duplicate-app",{appName:s})}const a=new Jd(s);for(const h of Ai.values())a.addComponent(h);const u=new Gf(t,r,a);return Qn.set(s,u),u}function Cu(n=vi){const e=Qn.get(n);if(!e&&n===vi&&Iu())return Pu();if(!e)throw dt.create("no-app",{appName:n});return e}function Qa(){return Array.from(Qn.values())}function ft(n,e,t){let r=zf[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ke.warn(a.join(" "));return}an(new xt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const Kf="firebase-heartbeat-database",Qf=1,Yn="firebase-heartbeat-store";let di=null;function bu(){return di||(di=df(Kf,Qf,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Yn)}catch(t){console.warn(t)}}}}).catch(n=>{throw dt.create("idb-open",{originalErrorMessage:n.message})})),di}async function Yf(n){try{const t=(await bu()).transaction(Yn),r=await t.objectStore(Yn).get(Vu(n));return await t.done,r}catch(e){if(e instanceof Je)Ke.warn(e.message);else{const t=dt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ke.warn(t.message)}}}async function Ya(n,e){try{const r=(await bu()).transaction(Yn,"readwrite");await r.objectStore(Yn).put(e,Vu(n)),await r.done}catch(t){if(t instanceof Je)Ke.warn(t.message);else{const r=dt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ke.warn(r.message)}}}function Vu(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const Xf=1024,Jf=30;class Zf{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new tp(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Xa();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>Jf){const a=np(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ke.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Xa(),{heartbeatsToSend:r,unsentEntries:s}=ep(this._heartbeatsCache.heartbeats),o=Jr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return Ke.warn(t),""}}}function Xa(){return new Date().toISOString().substring(0,10)}function ep(n,e=Xf){const t=[];let r=n.slice();for(const s of n){const o=t.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Ja(t)>e){o.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Ja(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class tp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bd()?qd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Yf(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ya(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ya(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ja(n){return Jr(JSON.stringify({version:2,heartbeats:n})).length}function np(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
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
 */function rp(n){an(new xt("platform-logger",e=>new mf(e),"PRIVATE")),an(new xt("heartbeat",e=>new Zf(e),"PRIVATE")),ft(wi,Ga,n),ft(wi,Ga,"esm2020"),ft("fire-js","")}rp("");var sp="firebase",ip="12.3.0";/**
 * @license
 * Copyright 2020 Google LLC
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
 */ft(sp,ip,"app");function ku(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const op=ku,Nu=new ar("auth","Firebase",ku());/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Zr=new Wi("@firebase/auth");function ap(n,...e){Zr.logLevel<=q.WARN&&Zr.warn(`Auth (${mn}): ${n}`,...e)}function jr(n,...e){Zr.logLevel<=q.ERROR&&Zr.error(`Auth (${mn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function De(n,...e){throw Qi(n,...e)}function Fe(n,...e){return Qi(n,...e)}function Du(n,e,t){const r={...op(),[e]:t};return new ar("auth","Firebase",r).create(e,{appName:n.name})}function Ge(n){return Du(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Qi(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Nu.create(n,...e)}function L(n,e,...t){if(!n)throw Qi(e,...t)}function He(n){const e="INTERNAL ASSERTION FAILED: "+n;throw jr(e),new Error(e)}function Qe(n,e){n||He(e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Ri(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function cp(){return Za()==="http:"||Za()==="https:"}function Za(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function up(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cp()||Ld()||"connection"in navigator)?navigator.onLine:!0}function lp(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class ur{constructor(e,t){this.shortDelay=e,this.longDelay=t,Qe(t>e,"Short delay should be less than long delay!"),this.isMobile=Dd()||xd()}get(){return up()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Yi(n,e){Qe(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Ou{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;He("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;He("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;He("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const hp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
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
 */const dp=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],fp=new ur(3e4,6e4);function vt(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function At(n,e,t,r,s={}){return Mu(n,s,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const u=cr({key:n.config.apiKey,...a}).slice(1),h=await n._getAdditionalHeaders();h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:h,...o};return Md()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&pn(n.emulatorConfig.host)&&(d.credentials="include"),Ou.fetch()(await Lu(n,n.config.apiHost,t,u),d)})}async function Mu(n,e,t){n._canInitEmulator=!1;const r={...hp,...e};try{const s=new mp(n),o=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Mr(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const u=o.ok?a.errorMessage:a.error.message,[h,d]=u.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Mr(n,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw Mr(n,"email-already-in-use",a);if(h==="USER_DISABLED")throw Mr(n,"user-disabled",a);const p=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Du(n,p,d);De(n,p)}}catch(s){if(s instanceof Je)throw s;De(n,"network-request-failed",{message:String(s)})}}async function lr(n,e,t,r,s={}){const o=await At(n,e,t,r,s);return"mfaPendingCredential"in o&&De(n,"multi-factor-auth-required",{_serverResponse:o}),o}async function Lu(n,e,t,r){const s=`${e}${t}?${r}`,o=n,a=o.config.emulator?Yi(n.config,s):`${n.config.apiScheme}://${s}`;return dp.includes(t)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}function pp(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class mp{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Fe(this.auth,"network-request-failed")),fp.get())})}}function Mr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Fe(n,e,r);return s.customData._tokenResponse=t,s}function ec(n){return n!==void 0&&n.enterprise!==void 0}class gp{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return pp(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function _p(n,e){return At(n,"GET","/v2/recaptchaConfig",vt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function yp(n,e){return At(n,"POST","/v1/accounts:delete",e)}async function es(n,e){return At(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function zn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ep(n,e=!1){const t=de(n),r=await t.getIdToken(e),s=Xi(r);L(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:s,token:r,authTime:zn(fi(s.auth_time)),issuedAtTime:zn(fi(s.iat)),expirationTime:zn(fi(s.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function fi(n){return Number(n)*1e3}function Xi(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return jr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Eu(t);return s?JSON.parse(s):(jr("Failed to decode base64 JWT payload"),null)}catch(s){return jr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function tc(n){const e=Xi(n);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function Xn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Je&&Tp(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Tp({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Ip{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Si{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=zn(this.lastLoginAt),this.creationTime=zn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function ts(n){var y;const e=n.auth,t=await n.getIdToken(),r=await Xn(n,es(e,{idToken:t}));L(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const o=(y=s.providerUserInfo)!=null&&y.length?xu(s.providerUserInfo):[],a=vp(n.providerData,o),u=n.isAnonymous,h=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),d=u?h:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Si(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,p)}async function wp(n){const e=de(n);await ts(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vp(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function xu(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function Ap(n,e){const t=await Mu(n,{},async()=>{const r=cr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:o}=n.config,a=await Lu(n,s,"/v1/token",`key=${o}`),u=await n._getAdditionalHeaders();u["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:u,body:r};return n.emulatorConfig&&pn(n.emulatorConfig.host)&&(h.credentials="include"),Ou.fetch()(a,h)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Rp(n,e){return At(n,"POST","/v2/accounts:revokeToken",vt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class en{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):tc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){L(e.length!==0,"internal-error");const t=tc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(L(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:o}=await Ap(e,t);this.updateTokensAndExpiration(r,s,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:o}=t,a=new en;return r&&(L(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(L(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),o&&(L(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new en,this.toJSON())}_performRefresh(){return He("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function it(n,e){L(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ke{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Ip(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Si(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Xn(this,this.stsTokenManager.getToken(this.auth,e));return L(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ep(this,e)}reload(){return wp(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ke({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ts(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(be(this.auth.app))return Promise.reject(Ge(this.auth));const e=await this.getIdToken();return await Xn(this,yp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,o=t.phoneNumber??void 0,a=t.photoURL??void 0,u=t.tenantId??void 0,h=t._redirectEventId??void 0,d=t.createdAt??void 0,p=t.lastLoginAt??void 0,{uid:y,emailVerified:w,isAnonymous:C,providerData:N,stsTokenManager:O}=t;L(y&&O,e,"internal-error");const V=en.fromJSON(this.name,O);L(typeof y=="string",e,"internal-error"),it(r,e.name),it(s,e.name),L(typeof w=="boolean",e,"internal-error"),L(typeof C=="boolean",e,"internal-error"),it(o,e.name),it(a,e.name),it(u,e.name),it(h,e.name),it(d,e.name),it(p,e.name);const W=new ke({uid:y,auth:e,email:s,emailVerified:w,displayName:r,isAnonymous:C,photoURL:a,phoneNumber:o,tenantId:u,stsTokenManager:V,createdAt:d,lastLoginAt:p});return N&&Array.isArray(N)&&(W.providerData=N.map(z=>({...z}))),h&&(W._redirectEventId=h),W}static async _fromIdTokenResponse(e,t,r=!1){const s=new en;s.updateFromServerResponse(t);const o=new ke({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ts(o),o}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];L(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?xu(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(o!=null&&o.length),u=new en;u.updateFromIdToken(r);const h=new ke({uid:s.localId,auth:e,stsTokenManager:u,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Si(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(o!=null&&o.length)};return Object.assign(h,d),h}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const nc=new Map;function We(n){Qe(n instanceof Function,"Expected a class definition");let e=nc.get(n);return e?(Qe(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,nc.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Fu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Fu.type="NONE";const rc=Fu;/**
 * @license
 * Copyright 2019 Google LLC
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
 */function $r(n,e,t){return`firebase:${n}:${e}:${t}`}class tn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:o}=this.auth;this.fullUserKey=$r(this.userKey,s.apiKey,o),this.fullPersistenceKey=$r("persistence",s.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await es(this.auth,{idToken:e}).catch(()=>{});return t?ke._fromGetAccountInfoResponse(this.auth,t,e):null}return ke._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new tn(We(rc),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=s[0]||We(rc);const a=$r(r,e.config.apiKey,e.name);let u=null;for(const d of t)try{const p=await d._get(a);if(p){let y;if(typeof p=="string"){const w=await es(e,{idToken:p}).catch(()=>{});if(!w)break;y=await ke._fromGetAccountInfoResponse(e,w,p)}else y=ke._fromJSON(e,p);d!==o&&(u=y),o=d;break}}catch{}const h=s.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new tn(o,e,r):(o=h[0],u&&await o._set(a,u.toJSON()),await Promise.all(t.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new tn(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function sc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ju(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Uu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zu(e))return"Blackberry";if(Hu(e))return"Webos";if(Bu(e))return"Safari";if((e.includes("chrome/")||qu(e))&&!e.includes("edge/"))return"Chrome";if($u(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Uu(n=Te()){return/firefox\//i.test(n)}function Bu(n=Te()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qu(n=Te()){return/crios\//i.test(n)}function ju(n=Te()){return/iemobile/i.test(n)}function $u(n=Te()){return/android/i.test(n)}function zu(n=Te()){return/blackberry/i.test(n)}function Hu(n=Te()){return/webos/i.test(n)}function Ji(n=Te()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Sp(n=Te()){var e;return Ji(n)&&!!((e=window.navigator)!=null&&e.standalone)}function Pp(){return Fd()&&document.documentMode===10}function Wu(n=Te()){return Ji(n)||$u(n)||Hu(n)||zu(n)||/windows phone/i.test(n)||ju(n)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Gu(n,e=[]){let t;switch(n){case"Browser":t=sc(Te());break;case"Worker":t=`${sc(Te())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${mn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Cp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((a,u)=>{try{const h=e(o);a(h)}catch(h){u(h)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function bp(n,e={}){return At(n,"GET","/v2/passwordPolicy",vt(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const Vp=6;class kp{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Vp,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Np{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ic(this),this.idTokenSubscription=new ic(this),this.beforeStateQueue=new Cp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=We(t)),this._initializationPromise=this.queue(async()=>{var r,s,o;if(!this._deleted&&(this.persistenceManager=await tn.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)==null?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await es(this,{idToken:e}),r=await ke._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var o;if(be(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(o=this.redirectUser)==null?void 0:o._redirectEventId,u=r==null?void 0:r._redirectEventId,h=await this.tryRedirectSignIn(e);(!a||a===u)&&(h!=null&&h.user)&&(r=h.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ts(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(be(this.app))return Promise.reject(Ge(this));const t=e?de(e):null;return t&&L(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return be(this.app)?Promise.reject(Ge(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return be(this.app)?Promise.reject(Ge(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(We(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await bp(this),t=new kp(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ar("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Rp(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&We(e)||this._popupRedirectResolver;L(t,this,"argument-error"),this.redirectPersistenceManager=await tn.create(this,[We(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let a=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(u,this,"internal-error"),u.then(()=>{a||o(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,r,s);return()=>{a=!0,h()}}else{const h=e.addObserver(t);return()=>{a=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Gu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(be(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&ap(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function $t(n){return de(n)}class ic{constructor(e){this.auth=e,this.observer=null,this.addObserver=Wd(t=>this.observer=t)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */let _s={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Dp(n){_s=n}function Ku(n){return _s.loadJS(n)}function Op(){return _s.recaptchaEnterpriseScript}function Mp(){return _s.gapiScript}function Lp(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class xp{constructor(){this.enterprise=new Fp}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Fp{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Up="recaptcha-enterprise",Qu="NO_RECAPTCHA";class Bp{constructor(e){this.type=Up,this.auth=$t(e)}async verify(e="verify",t=!1){async function r(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(a,u)=>{_p(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{const d=new gp(h);return o.tenantId==null?o._agentRecaptchaConfig=d:o._tenantRecaptchaConfigs[o.tenantId]=d,a(d.siteKey)}}).catch(h=>{u(h)})})}function s(o,a,u){const h=window.grecaptcha;ec(h)?h.enterprise.ready(()=>{h.enterprise.execute(o,{action:e}).then(d=>{a(d)}).catch(()=>{a(Qu)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new xp().execute("siteKey",{action:"verify"}):new Promise((o,a)=>{r(this.auth).then(u=>{if(!t&&ec(window.grecaptcha))s(u,o,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let h=Op();h.length!==0&&(h+=u),Ku(h).then(()=>{s(u,o,a)}).catch(d=>{a(d)})}}).catch(u=>{a(u)})})}}async function oc(n,e,t,r=!1,s=!1){const o=new Bp(n);let a;if(s)a=Qu;else try{a=await o.verify(t)}catch{a=await o.verify(t,!0)}const u={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in u){const h=u.phoneEnrollmentInfo.phoneNumber,d=u.phoneEnrollmentInfo.recaptchaToken;Object.assign(u,{phoneEnrollmentInfo:{phoneNumber:h,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in u){const h=u.phoneSignInInfo.recaptchaToken;Object.assign(u,{phoneSignInInfo:{recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return u}return r?Object.assign(u,{captchaResp:a}):Object.assign(u,{captchaResponse:a}),Object.assign(u,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(u,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),u}async function Pi(n,e,t,r,s){var o;if((o=n._getRecaptchaConfig())!=null&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await oc(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await oc(n,e,t,t==="getOobCode");return r(n,u)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function qp(n,e){const t=Ki(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),o=t.getOptions();if(Lt(o,e??{}))return s;De(s,"already-initialized")}return t.initialize({options:e})}function jp(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(We);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Yu(n,e,t){const r=$t(n);L(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),o=Xu(e),{host:a,port:u}=$p(e),h=u===null?"":`:${u}`,d={url:`${o}//${a}${h}/`},p=Object.freeze({host:a,port:u,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){L(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),L(Lt(d,r.config.emulator)&&Lt(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,pn(a)?(vu(`${o}//${a}${h}`),Au("Auth",!0)):zp()}function Xu(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function $p(n){const e=Xu(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const o=s[1];return{host:o,port:ac(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:ac(a)}}}function ac(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function zp(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Zi{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return He("not implemented")}_getIdTokenResponse(e){return He("not implemented")}_linkToIdToken(e,t){return He("not implemented")}_getReauthenticationResolver(e){return He("not implemented")}}async function Hp(n,e){return At(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function Wp(n,e){return lr(n,"POST","/v1/accounts:signInWithPassword",vt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function Gp(n,e){return lr(n,"POST","/v1/accounts:signInWithEmailLink",vt(n,e))}async function Kp(n,e){return lr(n,"POST","/v1/accounts:signInWithEmailLink",vt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Jn extends Zi{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Jn(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Jn(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Pi(e,t,"signInWithPassword",Wp);case"emailLink":return Gp(e,{email:this._email,oobCode:this._password});default:De(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Pi(e,r,"signUpPassword",Hp);case"emailLink":return Kp(e,{idToken:t,email:this._email,oobCode:this._password});default:De(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function nn(n,e){return lr(n,"POST","/v1/accounts:signInWithIdp",vt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Qp="http://localhost";class Ft extends Zi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ft(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):De("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...o}=t;if(!r||!s)return null;const a=new Ft(r,s);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return nn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,nn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,nn(e,t)}buildRequest(){const e={requestUri:Qp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=cr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Yp(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Xp(n){const e=Fn(Un(n)).link,t=e?Fn(Un(e)).deep_link_id:null,r=Fn(Un(n)).deep_link_id;return(r?Fn(Un(r)).link:null)||r||t||e||n}class eo{constructor(e){const t=Fn(Un(e)),r=t.apiKey??null,s=t.oobCode??null,o=Yp(t.mode??null);L(r&&s&&o,"argument-error"),this.apiKey=r,this.operation=o,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Xp(e);try{return new eo(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class gn{constructor(){this.providerId=gn.PROVIDER_ID}static credential(e,t){return Jn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=eo.parseLink(t);return L(r,"argument-error"),Jn._fromEmailAndCode(e,r.code,r.tenantId)}}gn.PROVIDER_ID="password";gn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";gn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Ju{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class hr extends Ju{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class ot extends hr{constructor(){super("facebook.com")}static credential(e){return Ft._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ot.credential(e.oauthAccessToken)}catch{return null}}}ot.FACEBOOK_SIGN_IN_METHOD="facebook.com";ot.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
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
 */class at extends hr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ft._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return at.credential(t,r)}catch{return null}}}at.GOOGLE_SIGN_IN_METHOD="google.com";at.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
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
 */class ct extends hr{constructor(){super("github.com")}static credential(e){return Ft._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ct.credential(e.oauthAccessToken)}catch{return null}}}ct.GITHUB_SIGN_IN_METHOD="github.com";ct.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
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
 */class ut extends hr{constructor(){super("twitter.com")}static credential(e,t){return Ft._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return ut.credential(t,r)}catch{return null}}}ut.TWITTER_SIGN_IN_METHOD="twitter.com";ut.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function Jp(n,e){return lr(n,"POST","/v1/accounts:signUp",vt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Ut{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const o=await ke._fromIdTokenResponse(e,r,s),a=cc(r);return new Ut({user:o,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=cc(r);return new Ut({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function cc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class ns extends Je{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ns.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new ns(e,t,r,s)}}function Zu(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ns._fromErrorAndOperation(n,o,e,r):o})}async function Zp(n,e,t=!1){const r=await Xn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ut._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function em(n,e,t=!1){const{auth:r}=n;if(be(r.app))return Promise.reject(Ge(r));const s="reauthenticate";try{const o=await Xn(n,Zu(r,s,e,n),t);L(o.idToken,r,"internal-error");const a=Xi(o.idToken);L(a,r,"internal-error");const{sub:u}=a;return L(n.uid===u,r,"user-mismatch"),Ut._forOperation(n,s,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&De(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function el(n,e,t=!1){if(be(n.app))return Promise.reject(Ge(n));const r="signIn",s=await Zu(n,r,e),o=await Ut._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(o.user),o}async function tm(n,e){return el($t(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function tl(n){const e=$t(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ME(n,e,t){if(be(n.app))return Promise.reject(Ge(n));const r=$t(n),a=await Pi(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Jp).catch(h=>{throw h.code==="auth/password-does-not-meet-requirements"&&tl(n),h}),u=await Ut._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(u.user),u}function LE(n,e,t){return be(n.app)?Promise.reject(Ge(n)):tm(de(n),gn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&tl(n),r})}function nm(n,e,t,r){return de(n).onIdTokenChanged(e,t,r)}function rm(n,e,t){return de(n).beforeAuthStateChanged(e,t)}function xE(n,e,t,r){return de(n).onAuthStateChanged(e,t,r)}function FE(n){return de(n).signOut()}const rs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
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
 */class nl{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(rs,"1"),this.storage.removeItem(rs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const sm=1e3,im=10;class rl extends nl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Wu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,u,h)=>{this.notifyListeners(a,h)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);Pp()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,im):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},sm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}rl.type="LOCAL";const om=rl;/**
 * @license
 * Copyright 2020 Google LLC
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
 */class sl extends nl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}sl.type="SESSION";const il=sl;/**
 * @license
 * Copyright 2019 Google LLC
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
 */function am(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class ys{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new ys(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:o}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const u=Array.from(a).map(async d=>d(t.origin,o)),h=await am(u);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ys.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
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
 */function to(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class cm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,a;return new Promise((u,h)=>{const d=to("",20);s.port1.start();const p=setTimeout(()=>{h(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(y){const w=y;if(w.data.eventId===d)switch(w.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),u(w.data.response);break;default:clearTimeout(p),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Ue(){return window}function um(n){Ue().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function ol(){return typeof Ue().WorkerGlobalScope<"u"&&typeof Ue().importScripts=="function"}async function lm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hm(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function dm(){return ol()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const al="firebaseLocalStorageDb",fm=1,ss="firebaseLocalStorage",cl="fbase_key";class dr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Es(n,e){return n.transaction([ss],e?"readwrite":"readonly").objectStore(ss)}function pm(){const n=indexedDB.deleteDatabase(al);return new dr(n).toPromise()}function Ci(){const n=indexedDB.open(al,fm);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ss,{keyPath:cl})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ss)?e(r):(r.close(),await pm(),e(await Ci()))})})}async function uc(n,e,t){const r=Es(n,!0).put({[cl]:e,value:t});return new dr(r).toPromise()}async function mm(n,e){const t=Es(n,!1).get(e),r=await new dr(t).toPromise();return r===void 0?null:r.value}function lc(n,e){const t=Es(n,!0).delete(e);return new dr(t).toPromise()}const gm=800,_m=3;class ul{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ci(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>_m)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ol()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ys._getInstance(dm()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await lm(),!this.activeServiceWorker)return;this.sender=new cm(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||hm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ci();return await uc(e,rs,"1"),await lc(e,rs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>uc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>mm(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>lc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const o=Es(s,!1).getAll();return new dr(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:o}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ul.type="LOCAL";const ym=ul;new ur(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
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
 */function Em(n,e){return e?We(e):(L(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class no extends Zi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return nn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return nn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return nn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Tm(n){return el(n.auth,new no(n),n.bypassAuthState)}function Im(n){const{auth:e,user:t}=n;return L(t,e,"internal-error"),em(t,new no(n),n.bypassAuthState)}async function wm(n){const{auth:e,user:t}=n;return L(t,e,"internal-error"),Zp(t,new no(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class ll{constructor(e,t,r,s,o=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:o,error:a,type:u}=e;if(a){this.reject(a);return}const h={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(h))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Tm;case"linkViaPopup":case"linkViaRedirect":return wm;case"reauthViaPopup":case"reauthViaRedirect":return Im;default:De(this.auth,"internal-error")}}resolve(e){Qe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const vm=new ur(2e3,1e4);class Zt extends ll{constructor(e,t,r,s,o){super(e,t,s,o),this.provider=r,this.authWindow=null,this.pollId=null,Zt.currentPopupAction&&Zt.currentPopupAction.cancel(),Zt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){Qe(this.filter.length===1,"Popup operations only handle one event");const e=to();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Fe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Fe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Fe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vm.get())};e()}}Zt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Am="pendingRedirect",zr=new Map;class Rm extends ll{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=zr.get(this.auth._key());if(!e){try{const r=await Sm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}zr.set(this.auth._key(),e)}return this.bypassAuthState||zr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Sm(n,e){const t=bm(e),r=Cm(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Pm(n,e){zr.set(n._key(),e)}function Cm(n){return We(n._redirectPersistence)}function bm(n){return $r(Am,n.config.apiKey,n.name)}async function Vm(n,e,t=!1){if(be(n.app))return Promise.reject(Ge(n));const r=$t(n),s=Em(r,e),a=await new Rm(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const km=10*60*1e3;class Nm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Dm(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!hl(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(Fe(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=km&&this.cachedEventUids.clear(),this.cachedEventUids.has(hc(e))}saveEventToCache(e){this.cachedEventUids.add(hc(e)),this.lastProcessedEventTime=Date.now()}}function hc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function hl({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Dm(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hl(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function Om(n,e={}){return At(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Mm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Lm=/^https?/;async function xm(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Om(n);for(const t of e)try{if(Fm(t))return}catch{}De(n,"unauthorized-domain")}function Fm(n){const e=Ri(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Lm.test(t))return!1;if(Mm.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Um=new ur(3e4,6e4);function dc(){const n=Ue().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Bm(n){return new Promise((e,t)=>{var s,o,a;function r(){dc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dc(),t(Fe(n,"network-request-failed"))},timeout:Um.get()})}if((o=(s=Ue().gapi)==null?void 0:s.iframes)!=null&&o.Iframe)e(gapi.iframes.getContext());else if((a=Ue().gapi)!=null&&a.load)r();else{const u=Lp("iframefcb");return Ue()[u]=()=>{gapi.load?r():t(Fe(n,"network-request-failed"))},Ku(`${Mp()}?onload=${u}`).catch(h=>t(h))}}).catch(e=>{throw Hr=null,e})}let Hr=null;function qm(n){return Hr=Hr||Bm(n),Hr}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const jm=new ur(5e3,15e3),$m="__/auth/iframe",zm="emulator/auth/iframe",Hm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Wm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Gm(n){const e=n.config;L(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Yi(e,zm):`https://${n.config.authDomain}/${$m}`,r={apiKey:e.apiKey,appName:n.name,v:mn},s=Wm.get(n.config.apiHost);s&&(r.eid=s);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${cr(r).slice(1)}`}async function Km(n){const e=await qm(n),t=Ue().gapi;return L(t,n,"internal-error"),e.open({where:document.body,url:Gm(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Hm,dontclear:!0},r=>new Promise(async(s,o)=>{await r.restyle({setHideOnLeave:!1});const a=Fe(n,"network-request-failed"),u=Ue().setTimeout(()=>{o(a)},jm.get());function h(){Ue().clearTimeout(u),s(r)}r.ping(h).then(h,()=>{o(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Qm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ym=500,Xm=600,Jm="_blank",Zm="http://localhost";class fc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function eg(n,e,t,r=Ym,s=Xm){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const h={...Qm,width:r.toString(),height:s.toString(),top:o,left:a},d=Te().toLowerCase();t&&(u=qu(d)?Jm:t),Uu(d)&&(e=e||Zm,h.scrollbars="yes");const p=Object.entries(h).reduce((w,[C,N])=>`${w}${C}=${N},`,"");if(Sp(d)&&u!=="_self")return tg(e||"",u),new fc(null);const y=window.open(e||"",u,p);L(y,n,"popup-blocked");try{y.focus()}catch{}return new fc(y)}function tg(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const ng="__/auth/handler",rg="emulator/auth/handler",sg=encodeURIComponent("fac");async function pc(n,e,t,r,s,o){L(n.config.authDomain,n,"auth-domain-config-required"),L(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:mn,eventId:s};if(e instanceof Ju){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Hd(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,y]of Object.entries({}))a[p]=y}if(e instanceof hr){const p=e.getScopes().filter(y=>y!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const u=a;for(const p of Object.keys(u))u[p]===void 0&&delete u[p];const h=await n._getAppCheckToken(),d=h?`#${sg}=${encodeURIComponent(h)}`:"";return`${ig(n)}?${cr(u).slice(1)}${d}`}function ig({config:n}){return n.emulator?Yi(n,rg):`https://${n.authDomain}/${ng}`}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const pi="webStorageSupport";class og{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=il,this._completeRedirectFn=Vm,this._overrideRedirectResult=Pm}async _openPopup(e,t,r,s){var a;Qe((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const o=await pc(e,t,r,Ri(),s);return eg(e,o,to())}async _openRedirect(e,t,r,s){await this._originValidation(e);const o=await pc(e,t,r,Ri(),s);return um(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:o}=this.eventManagers[t];return s?Promise.resolve(s):(Qe(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Km(e),r=new Nm(e);return t.register("authEvent",s=>(L(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(pi,{type:pi},s=>{var a;const o=(a=s==null?void 0:s[0])==null?void 0:a[pi];o!==void 0&&t(!!o),De(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=xm(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Wu()||Bu()||Ji()}}const ag=og;var mc="@firebase/auth",gc="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
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
 */class cg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function ug(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function lg(n){an(new xt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=r.options;L(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:a,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gu(n)},d=new Np(r,s,o,h);return jp(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),an(new xt("auth-internal",e=>{const t=$t(e.getProvider("auth").getImmediate());return(r=>new cg(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ft(mc,gc,ug(n)),ft(mc,gc,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const hg=5*60,dg=wu("authIdTokenMaxAge")||hg;let _c=null;const fg=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>dg)return;const s=t==null?void 0:t.token;_c!==s&&(_c=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function pg(n=Cu()){const e=Ki(n,"auth");if(e.isInitialized())return e.getImmediate();const t=qp(n,{popupRedirectResolver:ag,persistence:[ym,om,il]}),r=wu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=fg(o.toString());rm(t,a,()=>a(t.currentUser)),nm(t,u=>a(u))}}const s=Tu("auth");return s&&Yu(t,`http://${s}`),t}function mg(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}Dp({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const o=Fe("internal-error");o.customData=s,t(o)},r.type="text/javascript",r.charset="UTF-8",mg().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});lg("Browser");var yc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pt,dl;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,m){function _(){}_.prototype=m.prototype,T.F=m.prototype,T.prototype=new _,T.prototype.constructor=T,T.D=function(I,E,A){for(var g=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)g[ve-2]=arguments[ve];return m.prototype[E].apply(I,g)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,m,_){_||(_=0);const I=Array(16);if(typeof m=="string")for(var E=0;E<16;++E)I[E]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(E=0;E<16;++E)I[E]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=T.g[0],_=T.g[1],E=T.g[2];let A=T.g[3],g;g=m+(A^_&(E^A))+I[0]+3614090360&4294967295,m=_+(g<<7&4294967295|g>>>25),g=A+(E^m&(_^E))+I[1]+3905402710&4294967295,A=m+(g<<12&4294967295|g>>>20),g=E+(_^A&(m^_))+I[2]+606105819&4294967295,E=A+(g<<17&4294967295|g>>>15),g=_+(m^E&(A^m))+I[3]+3250441966&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(A^_&(E^A))+I[4]+4118548399&4294967295,m=_+(g<<7&4294967295|g>>>25),g=A+(E^m&(_^E))+I[5]+1200080426&4294967295,A=m+(g<<12&4294967295|g>>>20),g=E+(_^A&(m^_))+I[6]+2821735955&4294967295,E=A+(g<<17&4294967295|g>>>15),g=_+(m^E&(A^m))+I[7]+4249261313&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(A^_&(E^A))+I[8]+1770035416&4294967295,m=_+(g<<7&4294967295|g>>>25),g=A+(E^m&(_^E))+I[9]+2336552879&4294967295,A=m+(g<<12&4294967295|g>>>20),g=E+(_^A&(m^_))+I[10]+4294925233&4294967295,E=A+(g<<17&4294967295|g>>>15),g=_+(m^E&(A^m))+I[11]+2304563134&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(A^_&(E^A))+I[12]+1804603682&4294967295,m=_+(g<<7&4294967295|g>>>25),g=A+(E^m&(_^E))+I[13]+4254626195&4294967295,A=m+(g<<12&4294967295|g>>>20),g=E+(_^A&(m^_))+I[14]+2792965006&4294967295,E=A+(g<<17&4294967295|g>>>15),g=_+(m^E&(A^m))+I[15]+1236535329&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(E^A&(_^E))+I[1]+4129170786&4294967295,m=_+(g<<5&4294967295|g>>>27),g=A+(_^E&(m^_))+I[6]+3225465664&4294967295,A=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(A^m))+I[11]+643717713&4294967295,E=A+(g<<14&4294967295|g>>>18),g=_+(A^m&(E^A))+I[0]+3921069994&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(E^A&(_^E))+I[5]+3593408605&4294967295,m=_+(g<<5&4294967295|g>>>27),g=A+(_^E&(m^_))+I[10]+38016083&4294967295,A=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(A^m))+I[15]+3634488961&4294967295,E=A+(g<<14&4294967295|g>>>18),g=_+(A^m&(E^A))+I[4]+3889429448&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(E^A&(_^E))+I[9]+568446438&4294967295,m=_+(g<<5&4294967295|g>>>27),g=A+(_^E&(m^_))+I[14]+3275163606&4294967295,A=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(A^m))+I[3]+4107603335&4294967295,E=A+(g<<14&4294967295|g>>>18),g=_+(A^m&(E^A))+I[8]+1163531501&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(E^A&(_^E))+I[13]+2850285829&4294967295,m=_+(g<<5&4294967295|g>>>27),g=A+(_^E&(m^_))+I[2]+4243563512&4294967295,A=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(A^m))+I[7]+1735328473&4294967295,E=A+(g<<14&4294967295|g>>>18),g=_+(A^m&(E^A))+I[12]+2368359562&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(_^E^A)+I[5]+4294588738&4294967295,m=_+(g<<4&4294967295|g>>>28),g=A+(m^_^E)+I[8]+2272392833&4294967295,A=m+(g<<11&4294967295|g>>>21),g=E+(A^m^_)+I[11]+1839030562&4294967295,E=A+(g<<16&4294967295|g>>>16),g=_+(E^A^m)+I[14]+4259657740&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(_^E^A)+I[1]+2763975236&4294967295,m=_+(g<<4&4294967295|g>>>28),g=A+(m^_^E)+I[4]+1272893353&4294967295,A=m+(g<<11&4294967295|g>>>21),g=E+(A^m^_)+I[7]+4139469664&4294967295,E=A+(g<<16&4294967295|g>>>16),g=_+(E^A^m)+I[10]+3200236656&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(_^E^A)+I[13]+681279174&4294967295,m=_+(g<<4&4294967295|g>>>28),g=A+(m^_^E)+I[0]+3936430074&4294967295,A=m+(g<<11&4294967295|g>>>21),g=E+(A^m^_)+I[3]+3572445317&4294967295,E=A+(g<<16&4294967295|g>>>16),g=_+(E^A^m)+I[6]+76029189&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(_^E^A)+I[9]+3654602809&4294967295,m=_+(g<<4&4294967295|g>>>28),g=A+(m^_^E)+I[12]+3873151461&4294967295,A=m+(g<<11&4294967295|g>>>21),g=E+(A^m^_)+I[15]+530742520&4294967295,E=A+(g<<16&4294967295|g>>>16),g=_+(E^A^m)+I[2]+3299628645&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(E^(_|~A))+I[0]+4096336452&4294967295,m=_+(g<<6&4294967295|g>>>26),g=A+(_^(m|~E))+I[7]+1126891415&4294967295,A=m+(g<<10&4294967295|g>>>22),g=E+(m^(A|~_))+I[14]+2878612391&4294967295,E=A+(g<<15&4294967295|g>>>17),g=_+(A^(E|~m))+I[5]+4237533241&4294967295,_=E+(g<<21&4294967295|g>>>11),g=m+(E^(_|~A))+I[12]+1700485571&4294967295,m=_+(g<<6&4294967295|g>>>26),g=A+(_^(m|~E))+I[3]+2399980690&4294967295,A=m+(g<<10&4294967295|g>>>22),g=E+(m^(A|~_))+I[10]+4293915773&4294967295,E=A+(g<<15&4294967295|g>>>17),g=_+(A^(E|~m))+I[1]+2240044497&4294967295,_=E+(g<<21&4294967295|g>>>11),g=m+(E^(_|~A))+I[8]+1873313359&4294967295,m=_+(g<<6&4294967295|g>>>26),g=A+(_^(m|~E))+I[15]+4264355552&4294967295,A=m+(g<<10&4294967295|g>>>22),g=E+(m^(A|~_))+I[6]+2734768916&4294967295,E=A+(g<<15&4294967295|g>>>17),g=_+(A^(E|~m))+I[13]+1309151649&4294967295,_=E+(g<<21&4294967295|g>>>11),g=m+(E^(_|~A))+I[4]+4149444226&4294967295,m=_+(g<<6&4294967295|g>>>26),g=A+(_^(m|~E))+I[11]+3174756917&4294967295,A=m+(g<<10&4294967295|g>>>22),g=E+(m^(A|~_))+I[2]+718787259&4294967295,E=A+(g<<15&4294967295|g>>>17),g=_+(A^(E|~m))+I[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(E+(g<<21&4294967295|g>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+A&4294967295}r.prototype.v=function(T,m){m===void 0&&(m=T.length);const _=m-this.blockSize,I=this.C;let E=this.h,A=0;for(;A<m;){if(E==0)for(;A<=_;)s(this,T,A),A+=this.blockSize;if(typeof T=="string"){for(;A<m;)if(I[E++]=T.charCodeAt(A++),E==this.blockSize){s(this,I),E=0;break}}else for(;A<m;)if(I[E++]=T[A++],E==this.blockSize){s(this,I),E=0;break}}this.h=E,this.o+=m},r.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;m=this.o*8;for(var _=T.length-8;_<T.length;++_)T[_]=m&255,m/=256;for(this.v(T),T=Array(16),m=0,_=0;_<4;++_)for(let I=0;I<32;I+=8)T[m++]=this.g[_]>>>I&255;return T};function o(T,m){var _=u;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=m(T)}function a(T,m){this.h=m;const _=[];let I=!0;for(let E=T.length-1;E>=0;E--){const A=T[E]|0;I&&A==m||(_[E]=A,I=!1)}this.g=_}var u={};function h(T){return-128<=T&&T<128?o(T,function(m){return new a([m|0],m<0?-1:0)}):new a([T|0],T<0?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return y;if(T<0)return V(d(-T));const m=[];let _=1;for(let I=0;T>=_;I++)m[I]=T/_|0,_*=4294967296;return new a(m,0)}function p(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,m<2||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return V(p(T.substring(1),m));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=d(Math.pow(m,8));let I=y;for(let A=0;A<T.length;A+=8){var E=Math.min(8,T.length-A);const g=parseInt(T.substring(A,A+E),m);E<8?(E=d(Math.pow(m,E)),I=I.j(E).add(d(g))):(I=I.j(_),I=I.add(d(g)))}return I}var y=h(0),w=h(1),C=h(16777216);n=a.prototype,n.m=function(){if(O(this))return-V(this).m();let T=0,m=1;for(let _=0;_<this.g.length;_++){const I=this.i(_);T+=(I>=0?I:4294967296+I)*m,m*=4294967296}return T},n.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(N(this))return"0";if(O(this))return"-"+V(this).toString(T);const m=d(Math.pow(T,6));var _=this;let I="";for(;;){const E=ue(_,m).g;_=W(_,E.j(m));let A=((_.g.length>0?_.g[0]:_.h)>>>0).toString(T);if(_=E,N(_))return A+I;for(;A.length<6;)A="0"+A;I=A+I}},n.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function N(T){if(T.h!=0)return!1;for(let m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function O(T){return T.h==-1}n.l=function(T){return T=W(this,T),O(T)?-1:N(T)?0:1};function V(T){const m=T.g.length,_=[];for(let I=0;I<m;I++)_[I]=~T.g[I];return new a(_,~T.h).add(w)}n.abs=function(){return O(this)?V(this):this},n.add=function(T){const m=Math.max(this.g.length,T.g.length),_=[];let I=0;for(let E=0;E<=m;E++){let A=I+(this.i(E)&65535)+(T.i(E)&65535),g=(A>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);I=g>>>16,A&=65535,g&=65535,_[E]=g<<16|A}return new a(_,_[_.length-1]&-2147483648?-1:0)};function W(T,m){return T.add(V(m))}n.j=function(T){if(N(this)||N(T))return y;if(O(this))return O(T)?V(this).j(V(T)):V(V(this).j(T));if(O(T))return V(this.j(V(T)));if(this.l(C)<0&&T.l(C)<0)return d(this.m()*T.m());const m=this.g.length+T.g.length,_=[];for(var I=0;I<2*m;I++)_[I]=0;for(I=0;I<this.g.length;I++)for(let E=0;E<T.g.length;E++){const A=this.i(I)>>>16,g=this.i(I)&65535,ve=T.i(E)>>>16,Ct=T.i(E)&65535;_[2*I+2*E]+=g*Ct,z(_,2*I+2*E),_[2*I+2*E+1]+=A*Ct,z(_,2*I+2*E+1),_[2*I+2*E+1]+=g*ve,z(_,2*I+2*E+1),_[2*I+2*E+2]+=A*ve,z(_,2*I+2*E+2)}for(T=0;T<m;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=m;T<2*m;T++)_[T]=0;return new a(_,0)};function z(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function K(T,m){this.g=T,this.h=m}function ue(T,m){if(N(m))throw Error("division by zero");if(N(T))return new K(y,y);if(O(T))return m=ue(V(T),m),new K(V(m.g),V(m.h));if(O(m))return m=ue(T,V(m)),new K(V(m.g),m.h);if(T.g.length>30){if(O(T)||O(m))throw Error("slowDivide_ only works with positive integers.");for(var _=w,I=m;I.l(T)<=0;)_=Se(_),I=Se(I);var E=ie(_,1),A=ie(I,1);for(I=ie(I,2),_=ie(_,2);!N(I);){var g=A.add(I);g.l(T)<=0&&(E=E.add(_),A=g),I=ie(I,1),_=ie(_,1)}return m=W(T,E.j(m)),new K(E,m)}for(E=y;T.l(m)>=0;){for(_=Math.max(1,Math.floor(T.m()/m.m())),I=Math.ceil(Math.log(_)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),A=d(_),g=A.j(m);O(g)||g.l(T)>0;)_-=I,A=d(_),g=A.j(m);N(A)&&(A=w),E=E.add(A),T=W(T,g)}return new K(E,T)}n.B=function(T){return ue(this,T).h},n.and=function(T){const m=Math.max(this.g.length,T.g.length),_=[];for(let I=0;I<m;I++)_[I]=this.i(I)&T.i(I);return new a(_,this.h&T.h)},n.or=function(T){const m=Math.max(this.g.length,T.g.length),_=[];for(let I=0;I<m;I++)_[I]=this.i(I)|T.i(I);return new a(_,this.h|T.h)},n.xor=function(T){const m=Math.max(this.g.length,T.g.length),_=[];for(let I=0;I<m;I++)_[I]=this.i(I)^T.i(I);return new a(_,this.h^T.h)};function Se(T){const m=T.g.length+1,_=[];for(let I=0;I<m;I++)_[I]=T.i(I)<<1|T.i(I-1)>>>31;return new a(_,T.h)}function ie(T,m){const _=m>>5;m%=32;const I=T.g.length-_,E=[];for(let A=0;A<I;A++)E[A]=m>0?T.i(A+_)>>>m|T.i(A+_+1)<<32-m:T.i(A+_);return new a(E,T.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,dl=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,pt=a}).apply(typeof yc<"u"?yc:typeof self<"u"?self:typeof window<"u"?window:{});var Lr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fl,Bn,pl,Wr,bi,ml,gl,_l;(function(){var n,e=Object.defineProperty;function t(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Lr=="object"&&Lr];for(var c=0;c<i.length;++c){var l=i[c];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=t(this);function s(i,c){if(c)e:{var l=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var v=i[f];if(!(v in l))break e;l=l[v]}i=i[i.length-1],f=l[i],c=c(f),c!=f&&c!=null&&e(l,i,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(i){return i||function(c){var l=[],f;for(f in c)Object.prototype.hasOwnProperty.call(c,f)&&l.push([f,c[f]]);return l}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(i){var c=typeof i;return c=="object"&&i!=null||c=="function"}function h(i,c,l){return i.call.apply(i.bind,arguments)}function d(i,c,l){return d=h,d.apply(null,arguments)}function p(i,c){var l=Array.prototype.slice.call(arguments,1);return function(){var f=l.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function y(i,c){function l(){}l.prototype=c.prototype,i.Z=c.prototype,i.prototype=new l,i.prototype.constructor=i,i.Ob=function(f,v,R){for(var b=Array(arguments.length-2),B=2;B<arguments.length;B++)b[B-2]=arguments[B];return c.prototype[v].apply(f,b)}}var w=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function C(i){const c=i.length;if(c>0){const l=Array(c);for(let f=0;f<c;f++)l[f]=i[f];return l}return[]}function N(i,c){for(let f=1;f<arguments.length;f++){const v=arguments[f];var l=typeof v;if(l=l!="object"?l:v?Array.isArray(v)?"array":l:"null",l=="array"||l=="object"&&typeof v.length=="number"){l=i.length||0;const R=v.length||0;i.length=l+R;for(let b=0;b<R;b++)i[l+b]=v[b]}else i.push(v)}}class O{constructor(c,l){this.i=c,this.j=l,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function V(i){a.setTimeout(()=>{throw i},0)}function W(){var i=T;let c=null;return i.g&&(c=i.g,i.g=i.g.next,i.g||(i.h=null),c.next=null),c}class z{constructor(){this.h=this.g=null}add(c,l){const f=K.get();f.set(c,l),this.h?this.h.next=f:this.g=f,this.h=f}}var K=new O(()=>new ue,i=>i.reset());class ue{constructor(){this.next=this.g=this.h=null}set(c,l){this.h=c,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Se,ie=!1,T=new z,m=()=>{const i=Promise.resolve(void 0);Se=()=>{i.then(_)}};function _(){for(var i;i=W();){try{i.h.call(i.g)}catch(l){V(l)}var c=K;c.j(i),c.h<100&&(c.h++,i.next=c.g,c.g=i)}ie=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(i,c){this.type=i,this.g=this.target=c,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var i=!1,c=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};a.addEventListener("test",l,c),a.removeEventListener("test",l,c)}catch{}return i}();function g(i){return/^[\s\xa0]*$/.test(i)}function ve(i,c){E.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,c)}y(ve,E),ve.prototype.init=function(i,c){const l=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=c,c=i.relatedTarget,c||(l=="mouseover"?c=i.fromElement:l=="mouseout"&&(c=i.toElement)),this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&ve.Z.h.call(this)},ve.prototype.h=function(){ve.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Ct="closure_listenable_"+(Math.random()*1e6|0),jh=0;function $h(i,c,l,f,v){this.listener=i,this.proxy=null,this.src=c,this.type=l,this.capture=!!f,this.ha=v,this.key=++jh,this.da=this.fa=!1}function Tr(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Ir(i,c,l){for(const f in i)c.call(l,i[f],f,i)}function zh(i,c){for(const l in i)c.call(void 0,i[l],l,i)}function Bo(i){const c={};for(const l in i)c[l]=i[l];return c}const qo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function jo(i,c){let l,f;for(let v=1;v<arguments.length;v++){f=arguments[v];for(l in f)i[l]=f[l];for(let R=0;R<qo.length;R++)l=qo[R],Object.prototype.hasOwnProperty.call(f,l)&&(i[l]=f[l])}}function wr(i){this.src=i,this.g={},this.h=0}wr.prototype.add=function(i,c,l,f,v){const R=i.toString();i=this.g[R],i||(i=this.g[R]=[],this.h++);const b=Us(i,c,f,v);return b>-1?(c=i[b],l||(c.fa=!1)):(c=new $h(c,this.src,R,!!f,v),c.fa=l,i.push(c)),c};function Fs(i,c){const l=c.type;if(l in i.g){var f=i.g[l],v=Array.prototype.indexOf.call(f,c,void 0),R;(R=v>=0)&&Array.prototype.splice.call(f,v,1),R&&(Tr(c),i.g[l].length==0&&(delete i.g[l],i.h--))}}function Us(i,c,l,f){for(let v=0;v<i.length;++v){const R=i[v];if(!R.da&&R.listener==c&&R.capture==!!l&&R.ha==f)return v}return-1}var Bs="closure_lm_"+(Math.random()*1e6|0),qs={};function $o(i,c,l,f,v){if(Array.isArray(c)){for(let R=0;R<c.length;R++)$o(i,c[R],l,f,v);return null}return l=Wo(l),i&&i[Ct]?i.J(c,l,u(f)?!!f.capture:!!f,v):Hh(i,c,l,!1,f,v)}function Hh(i,c,l,f,v,R){if(!c)throw Error("Invalid event type");const b=u(v)?!!v.capture:!!v;let B=$s(i);if(B||(i[Bs]=B=new wr(i)),l=B.add(c,l,f,b,R),l.proxy)return l;if(f=Wh(),l.proxy=f,f.src=i,f.listener=l,i.addEventListener)A||(v=b),v===void 0&&(v=!1),i.addEventListener(c.toString(),f,v);else if(i.attachEvent)i.attachEvent(Ho(c.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Wh(){function i(l){return c.call(i.src,i.listener,l)}const c=Gh;return i}function zo(i,c,l,f,v){if(Array.isArray(c))for(var R=0;R<c.length;R++)zo(i,c[R],l,f,v);else f=u(f)?!!f.capture:!!f,l=Wo(l),i&&i[Ct]?(i=i.i,R=String(c).toString(),R in i.g&&(c=i.g[R],l=Us(c,l,f,v),l>-1&&(Tr(c[l]),Array.prototype.splice.call(c,l,1),c.length==0&&(delete i.g[R],i.h--)))):i&&(i=$s(i))&&(c=i.g[c.toString()],i=-1,c&&(i=Us(c,l,f,v)),(l=i>-1?c[i]:null)&&js(l))}function js(i){if(typeof i!="number"&&i&&!i.da){var c=i.src;if(c&&c[Ct])Fs(c.i,i);else{var l=i.type,f=i.proxy;c.removeEventListener?c.removeEventListener(l,f,i.capture):c.detachEvent?c.detachEvent(Ho(l),f):c.addListener&&c.removeListener&&c.removeListener(f),(l=$s(c))?(Fs(l,i),l.h==0&&(l.src=null,c[Bs]=null)):Tr(i)}}}function Ho(i){return i in qs?qs[i]:qs[i]="on"+i}function Gh(i,c){if(i.da)i=!0;else{c=new ve(c,this);const l=i.listener,f=i.ha||i.src;i.fa&&js(i),i=l.call(f,c)}return i}function $s(i){return i=i[Bs],i instanceof wr?i:null}var zs="__closure_events_fn_"+(Math.random()*1e9>>>0);function Wo(i){return typeof i=="function"?i:(i[zs]||(i[zs]=function(c){return i.handleEvent(c)}),i[zs])}function ge(){I.call(this),this.i=new wr(this),this.M=this,this.G=null}y(ge,I),ge.prototype[Ct]=!0,ge.prototype.removeEventListener=function(i,c,l,f){zo(this,i,c,l,f)};function Ie(i,c){var l,f=i.G;if(f)for(l=[];f;f=f.G)l.push(f);if(i=i.M,f=c.type||c,typeof c=="string")c=new E(c,i);else if(c instanceof E)c.target=c.target||i;else{var v=c;c=new E(f,i),jo(c,v)}v=!0;let R,b;if(l)for(b=l.length-1;b>=0;b--)R=c.g=l[b],v=vr(R,f,!0,c)&&v;if(R=c.g=i,v=vr(R,f,!0,c)&&v,v=vr(R,f,!1,c)&&v,l)for(b=0;b<l.length;b++)R=c.g=l[b],v=vr(R,f,!1,c)&&v}ge.prototype.N=function(){if(ge.Z.N.call(this),this.i){var i=this.i;for(const c in i.g){const l=i.g[c];for(let f=0;f<l.length;f++)Tr(l[f]);delete i.g[c],i.h--}}this.G=null},ge.prototype.J=function(i,c,l,f){return this.i.add(String(i),c,!1,l,f)},ge.prototype.K=function(i,c,l,f){return this.i.add(String(i),c,!0,l,f)};function vr(i,c,l,f){if(c=i.i.g[String(c)],!c)return!0;c=c.concat();let v=!0;for(let R=0;R<c.length;++R){const b=c[R];if(b&&!b.da&&b.capture==l){const B=b.listener,oe=b.ha||b.src;b.fa&&Fs(i.i,b),v=B.call(oe,f)!==!1&&v}}return v&&!f.defaultPrevented}function Kh(i,c){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=d(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(i,c||0)}function Go(i){i.g=Kh(()=>{i.g=null,i.i&&(i.i=!1,Go(i))},i.l);const c=i.h;i.h=null,i.m.apply(null,c)}class Qh extends I{constructor(c,l){super(),this.m=c,this.l=l,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Go(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wn(i){I.call(this),this.h=i,this.g={}}y(wn,I);var Ko=[];function Qo(i){Ir(i.g,function(c,l){this.g.hasOwnProperty(l)&&js(c)},i),i.g={}}wn.prototype.N=function(){wn.Z.N.call(this),Qo(this)},wn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Hs=a.JSON.stringify,Yh=a.JSON.parse,Xh=class{stringify(i){return a.JSON.stringify(i,void 0)}parse(i){return a.JSON.parse(i,void 0)}};function Yo(){}function Xo(){}var vn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ws(){E.call(this,"d")}y(Ws,E);function Gs(){E.call(this,"c")}y(Gs,E);var bt={},Jo=null;function Ar(){return Jo=Jo||new ge}bt.Ia="serverreachability";function Zo(i){E.call(this,bt.Ia,i)}y(Zo,E);function An(i){const c=Ar();Ie(c,new Zo(c))}bt.STAT_EVENT="statevent";function ea(i,c){E.call(this,bt.STAT_EVENT,i),this.stat=c}y(ea,E);function we(i){const c=Ar();Ie(c,new ea(c,i))}bt.Ja="timingevent";function ta(i,c){E.call(this,bt.Ja,i),this.size=c}y(ta,E);function Rn(i,c){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){i()},c)}function Sn(){this.g=!0}Sn.prototype.ua=function(){this.g=!1};function Jh(i,c,l,f,v,R){i.info(function(){if(i.g)if(R){var b="",B=R.split("&");for(let Q=0;Q<B.length;Q++){var oe=B[Q].split("=");if(oe.length>1){const le=oe[0];oe=oe[1];const Le=le.split("_");b=Le.length>=2&&Le[1]=="type"?b+(le+"="+oe+"&"):b+(le+"=redacted&")}}}else b=null;else b=R;return"XMLHTTP REQ ("+f+") [attempt "+v+"]: "+c+`
`+l+`
`+b})}function Zh(i,c,l,f,v,R,b){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+v+"]: "+c+`
`+l+`
`+R+" "+b})}function Wt(i,c,l,f){i.info(function(){return"XMLHTTP TEXT ("+c+"): "+td(i,l)+(f?" "+f:"")})}function ed(i,c){i.info(function(){return"TIMEOUT: "+c})}Sn.prototype.info=function(){};function td(i,c){if(!i.g)return c;if(!c)return null;try{const R=JSON.parse(c);if(R){for(i=0;i<R.length;i++)if(Array.isArray(R[i])){var l=R[i];if(!(l.length<2)){var f=l[1];if(Array.isArray(f)&&!(f.length<1)){var v=f[0];if(v!="noop"&&v!="stop"&&v!="close")for(let b=1;b<f.length;b++)f[b]=""}}}}return Hs(R)}catch{return c}}var Rr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},na={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ra;function Ks(){}y(Ks,Yo),Ks.prototype.g=function(){return new XMLHttpRequest},ra=new Ks;function Pn(i){return encodeURIComponent(String(i))}function nd(i){var c=1;i=i.split(":");const l=[];for(;c>0&&i.length;)l.push(i.shift()),c--;return i.length&&l.push(i.join(":")),l}function Ze(i,c,l,f){this.j=i,this.i=c,this.l=l,this.S=f||1,this.V=new wn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new sa}function sa(){this.i=null,this.g="",this.h=!1}var ia={},Qs={};function Ys(i,c,l){i.M=1,i.A=Pr(Me(c)),i.u=l,i.R=!0,oa(i,null)}function oa(i,c){i.F=Date.now(),Sr(i),i.B=Me(i.A);var l=i.B,f=i.S;Array.isArray(f)||(f=[String(f)]),Ea(l.i,"t",f),i.C=0,l=i.j.L,i.h=new sa,i.g=xa(i.j,l?c:null,!i.u),i.P>0&&(i.O=new Qh(d(i.Y,i,i.g),i.P)),c=i.V,l=i.g,f=i.ba;var v="readystatechange";Array.isArray(v)||(v&&(Ko[0]=v.toString()),v=Ko);for(let R=0;R<v.length;R++){const b=$o(l,v[R],f||c.handleEvent,!1,c.h||c);if(!b)break;c.g[b.key]=b}c=i.J?Bo(i.J):{},i.u?(i.v||(i.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,c)):(i.v="GET",i.g.ea(i.B,i.v,null,c)),An(),Jh(i.i,i.v,i.B,i.l,i.S,i.u)}Ze.prototype.ba=function(i){i=i.target;const c=this.O;c&&nt(i)==3?c.j():this.Y(i)},Ze.prototype.Y=function(i){try{if(i==this.g)e:{const B=nt(this.g),oe=this.g.ya(),Q=this.g.ca();if(!(B<3)&&(B!=3||this.g&&(this.h.h||this.g.la()||Sa(this.g)))){this.K||B!=4||oe==7||(oe==8||Q<=0?An(3):An(2)),Xs(this);var c=this.g.ca();this.X=c;var l=rd(this);if(this.o=c==200,Zh(this.i,this.v,this.B,this.l,this.S,B,c),this.o){if(this.U&&!this.L){t:{if(this.g){var f,v=this.g;if((f=v.g?v.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(f)){var R=f;break t}}R=null}if(i=R)Wt(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Js(this,i);else{this.o=!1,this.m=3,we(12),Vt(this),Cn(this);break e}}if(this.R){i=!0;let le;for(;!this.K&&this.C<l.length;)if(le=sd(this,l),le==Qs){B==4&&(this.m=4,we(14),i=!1),Wt(this.i,this.l,null,"[Incomplete Response]");break}else if(le==ia){this.m=4,we(15),Wt(this.i,this.l,l,"[Invalid Chunk]"),i=!1;break}else Wt(this.i,this.l,le,null),Js(this,le);if(aa(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),B!=4||l.length!=0||this.h.h||(this.m=1,we(16),i=!1),this.o=this.o&&i,!i)Wt(this.i,this.l,l,"[Invalid Chunked Response]"),Vt(this),Cn(this);else if(l.length>0&&!this.W){this.W=!0;var b=this.j;b.g==this&&b.aa&&!b.P&&(b.j.info("Great, no buffering proxy detected. Bytes received: "+l.length),oi(b),b.P=!0,we(11))}}else Wt(this.i,this.l,l,null),Js(this,l);B==4&&Vt(this),this.o&&!this.K&&(B==4?Da(this.j,this):(this.o=!1,Sr(this)))}else yd(this.g),c==400&&l.indexOf("Unknown SID")>0?(this.m=3,we(12)):(this.m=0,we(13)),Vt(this),Cn(this)}}}catch{}finally{}};function rd(i){if(!aa(i))return i.g.la();const c=Sa(i.g);if(c==="")return"";let l="";const f=c.length,v=nt(i.g)==4;if(!i.h.i){if(typeof TextDecoder>"u")return Vt(i),Cn(i),"";i.h.i=new a.TextDecoder}for(let R=0;R<f;R++)i.h.h=!0,l+=i.h.i.decode(c[R],{stream:!(v&&R==f-1)});return c.length=0,i.h.g+=l,i.C=0,i.h.g}function aa(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function sd(i,c){var l=i.C,f=c.indexOf(`
`,l);return f==-1?Qs:(l=Number(c.substring(l,f)),isNaN(l)?ia:(f+=1,f+l>c.length?Qs:(c=c.slice(f,f+l),i.C=f+l,c)))}Ze.prototype.cancel=function(){this.K=!0,Vt(this)};function Sr(i){i.T=Date.now()+i.H,ca(i,i.H)}function ca(i,c){if(i.D!=null)throw Error("WatchDog timer not null");i.D=Rn(d(i.aa,i),c)}function Xs(i){i.D&&(a.clearTimeout(i.D),i.D=null)}Ze.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?(ed(this.i,this.B),this.M!=2&&(An(),we(17)),Vt(this),this.m=2,Cn(this)):ca(this,this.T-i)};function Cn(i){i.j.I==0||i.K||Da(i.j,i)}function Vt(i){Xs(i);var c=i.O;c&&typeof c.dispose=="function"&&c.dispose(),i.O=null,Qo(i.V),i.g&&(c=i.g,i.g=null,c.abort(),c.dispose())}function Js(i,c){try{var l=i.j;if(l.I!=0&&(l.g==i||Zs(l.h,i))){if(!i.L&&Zs(l.h,i)&&l.I==3){try{var f=l.Ba.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var v=f;if(v[0]==0){e:if(!l.v){if(l.g)if(l.g.F+3e3<i.F)Nr(l),Vr(l);else break e;ii(l),we(18)}}else l.xa=v[1],0<l.xa-l.K&&v[2]<37500&&l.F&&l.A==0&&!l.C&&(l.C=Rn(d(l.Va,l),6e3));ha(l.h)<=1&&l.ta&&(l.ta=void 0)}else Nt(l,11)}else if((i.L||l.g==i)&&Nr(l),!g(c))for(v=l.Ba.g.parse(c),c=0;c<v.length;c++){let Q=v[c];const le=Q[0];if(!(le<=l.K))if(l.K=le,Q=Q[1],l.I==2)if(Q[0]=="c"){l.M=Q[1],l.ba=Q[2];const Le=Q[3];Le!=null&&(l.ka=Le,l.j.info("VER="+l.ka));const Dt=Q[4];Dt!=null&&(l.za=Dt,l.j.info("SVER="+l.za));const rt=Q[5];rt!=null&&typeof rt=="number"&&rt>0&&(f=1.5*rt,l.O=f,l.j.info("backChannelRequestTimeoutMs_="+f)),f=l;const st=i.g;if(st){const Or=st.g?st.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Or){var R=f.h;R.g||Or.indexOf("spdy")==-1&&Or.indexOf("quic")==-1&&Or.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(ei(R,R.h),R.h=null))}if(f.G){const ai=st.g?st.g.getResponseHeader("X-HTTP-Session-Id"):null;ai&&(f.wa=ai,X(f.J,f.G,ai))}}l.I=3,l.l&&l.l.ra(),l.aa&&(l.T=Date.now()-i.F,l.j.info("Handshake RTT: "+l.T+"ms")),f=l;var b=i;if(f.na=La(f,f.L?f.ba:null,f.W),b.L){da(f.h,b);var B=b,oe=f.O;oe&&(B.H=oe),B.D&&(Xs(B),Sr(B)),f.g=b}else ka(f);l.i.length>0&&kr(l)}else Q[0]!="stop"&&Q[0]!="close"||Nt(l,7);else l.I==3&&(Q[0]=="stop"||Q[0]=="close"?Q[0]=="stop"?Nt(l,7):si(l):Q[0]!="noop"&&l.l&&l.l.qa(Q),l.A=0)}}An(4)}catch{}}var id=class{constructor(i,c){this.g=i,this.map=c}};function ua(i){this.l=i||10,a.PerformanceNavigationTiming?(i=a.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function la(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function ha(i){return i.h?1:i.g?i.g.size:0}function Zs(i,c){return i.h?i.h==c:i.g?i.g.has(c):!1}function ei(i,c){i.g?i.g.add(c):i.h=c}function da(i,c){i.h&&i.h==c?i.h=null:i.g&&i.g.has(c)&&i.g.delete(c)}ua.prototype.cancel=function(){if(this.i=fa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function fa(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let c=i.i;for(const l of i.g.values())c=c.concat(l.G);return c}return C(i.i)}var pa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function od(i,c){if(i){i=i.split("&");for(let l=0;l<i.length;l++){const f=i[l].indexOf("=");let v,R=null;f>=0?(v=i[l].substring(0,f),R=i[l].substring(f+1)):v=i[l],c(v,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function et(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;i instanceof et?(this.l=i.l,bn(this,i.j),this.o=i.o,this.g=i.g,Vn(this,i.u),this.h=i.h,ti(this,Ta(i.i)),this.m=i.m):i&&(c=String(i).match(pa))?(this.l=!1,bn(this,c[1]||"",!0),this.o=kn(c[2]||""),this.g=kn(c[3]||"",!0),Vn(this,c[4]),this.h=kn(c[5]||"",!0),ti(this,c[6]||"",!0),this.m=kn(c[7]||"")):(this.l=!1,this.i=new Dn(null,this.l))}et.prototype.toString=function(){const i=[];var c=this.j;c&&i.push(Nn(c,ma,!0),":");var l=this.g;return(l||c=="file")&&(i.push("//"),(c=this.o)&&i.push(Nn(c,ma,!0),"@"),i.push(Pn(l).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.u,l!=null&&i.push(":",String(l))),(l=this.h)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(Nn(l,l.charAt(0)=="/"?ud:cd,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",Nn(l,hd)),i.join("")},et.prototype.resolve=function(i){const c=Me(this);let l=!!i.j;l?bn(c,i.j):l=!!i.o,l?c.o=i.o:l=!!i.g,l?c.g=i.g:l=i.u!=null;var f=i.h;if(l)Vn(c,i.u);else if(l=!!i.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var v=c.h.lastIndexOf("/");v!=-1&&(f=c.h.slice(0,v+1)+f)}if(v=f,v==".."||v==".")f="";else if(v.indexOf("./")!=-1||v.indexOf("/.")!=-1){f=v.lastIndexOf("/",0)==0,v=v.split("/");const R=[];for(let b=0;b<v.length;){const B=v[b++];B=="."?f&&b==v.length&&R.push(""):B==".."?((R.length>1||R.length==1&&R[0]!="")&&R.pop(),f&&b==v.length&&R.push("")):(R.push(B),f=!0)}f=R.join("/")}else f=v}return l?c.h=f:l=i.i.toString()!=="",l?ti(c,Ta(i.i)):l=!!i.m,l&&(c.m=i.m),c};function Me(i){return new et(i)}function bn(i,c,l){i.j=l?kn(c,!0):c,i.j&&(i.j=i.j.replace(/:$/,""))}function Vn(i,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);i.u=c}else i.u=null}function ti(i,c,l){c instanceof Dn?(i.i=c,dd(i.i,i.l)):(l||(c=Nn(c,ld)),i.i=new Dn(c,i.l))}function X(i,c,l){i.i.set(c,l)}function Pr(i){return X(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function kn(i,c){return i?c?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Nn(i,c,l){return typeof i=="string"?(i=encodeURI(i).replace(c,ad),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function ad(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var ma=/[#\/\?@]/g,cd=/[#\?:]/g,ud=/[#\?]/g,ld=/[#\?@]/g,hd=/#/g;function Dn(i,c){this.h=this.g=null,this.i=i||null,this.j=!!c}function kt(i){i.g||(i.g=new Map,i.h=0,i.i&&od(i.i,function(c,l){i.add(decodeURIComponent(c.replace(/\+/g," ")),l)}))}n=Dn.prototype,n.add=function(i,c){kt(this),this.i=null,i=Gt(this,i);let l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(c),this.h+=1,this};function ga(i,c){kt(i),c=Gt(i,c),i.g.has(c)&&(i.i=null,i.h-=i.g.get(c).length,i.g.delete(c))}function _a(i,c){return kt(i),c=Gt(i,c),i.g.has(c)}n.forEach=function(i,c){kt(this),this.g.forEach(function(l,f){l.forEach(function(v){i.call(c,v,f,this)},this)},this)};function ya(i,c){kt(i);let l=[];if(typeof c=="string")_a(i,c)&&(l=l.concat(i.g.get(Gt(i,c))));else for(i=Array.from(i.g.values()),c=0;c<i.length;c++)l=l.concat(i[c]);return l}n.set=function(i,c){return kt(this),this.i=null,i=Gt(this,i),_a(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[c]),this.h+=1,this},n.get=function(i,c){return i?(i=ya(this,i),i.length>0?String(i[0]):c):c};function Ea(i,c,l){ga(i,c),l.length>0&&(i.i=null,i.g.set(Gt(i,c),C(l)),i.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],c=Array.from(this.g.keys());for(let f=0;f<c.length;f++){var l=c[f];const v=Pn(l);l=ya(this,l);for(let R=0;R<l.length;R++){let b=v;l[R]!==""&&(b+="="+Pn(l[R])),i.push(b)}}return this.i=i.join("&")};function Ta(i){const c=new Dn;return c.i=i.i,i.g&&(c.g=new Map(i.g),c.h=i.h),c}function Gt(i,c){return c=String(c),i.j&&(c=c.toLowerCase()),c}function dd(i,c){c&&!i.j&&(kt(i),i.i=null,i.g.forEach(function(l,f){const v=f.toLowerCase();f!=v&&(ga(this,f),Ea(this,v,l))},i)),i.j=c}function fd(i,c){const l=new Sn;if(a.Image){const f=new Image;f.onload=p(tt,l,"TestLoadImage: loaded",!0,c,f),f.onerror=p(tt,l,"TestLoadImage: error",!1,c,f),f.onabort=p(tt,l,"TestLoadImage: abort",!1,c,f),f.ontimeout=p(tt,l,"TestLoadImage: timeout",!1,c,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else c(!1)}function pd(i,c){const l=new Sn,f=new AbortController,v=setTimeout(()=>{f.abort(),tt(l,"TestPingServer: timeout",!1,c)},1e4);fetch(i,{signal:f.signal}).then(R=>{clearTimeout(v),R.ok?tt(l,"TestPingServer: ok",!0,c):tt(l,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(v),tt(l,"TestPingServer: error",!1,c)})}function tt(i,c,l,f,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),f(l)}catch{}}function md(){this.g=new Xh}function ni(i){this.i=i.Sb||null,this.h=i.ab||!1}y(ni,Yo),ni.prototype.g=function(){return new Cr(this.i,this.h)};function Cr(i,c){ge.call(this),this.H=i,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}y(Cr,ge),n=Cr.prototype,n.open=function(i,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=c,this.readyState=1,Mn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(c.body=i),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,On(this)),this.readyState=0},n.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Mn(this)),this.g&&(this.readyState=3,Mn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ia(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function Ia(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}n.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var c=i.value?i.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!i.done}))&&(this.response=this.responseText+=c)}i.done?On(this):Mn(this),this.readyState==3&&Ia(this)}},n.Oa=function(i){this.g&&(this.response=this.responseText=i,On(this))},n.Na=function(i){this.g&&(this.response=i,On(this))},n.ga=function(){this.g&&On(this)};function On(i){i.readyState=4,i.l=null,i.j=null,i.B=null,Mn(i)}n.setRequestHeader=function(i,c){this.A.append(i,c)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],c=this.h.entries();for(var l=c.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=c.next();return i.join(`\r
`)};function Mn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Cr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function wa(i){let c="";return Ir(i,function(l,f){c+=f,c+=":",c+=l,c+=`\r
`}),c}function ri(i,c,l){e:{for(f in l){var f=!1;break e}f=!0}f||(l=wa(l),typeof i=="string"?l!=null&&Pn(l):X(i,c,l))}function ee(i){ge.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}y(ee,ge);var gd=/^https?$/i,_d=["POST","PUT"];n=ee.prototype,n.Fa=function(i){this.H=i},n.ea=function(i,c,l,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);c=c?c.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ra.g(),this.g.onreadystatechange=w(d(this.Ca,this));try{this.B=!0,this.g.open(c,String(i),!0),this.B=!1}catch(R){va(this,R);return}if(i=l||"",l=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var v in f)l.set(v,f[v]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())l.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(l.keys()).find(R=>R.toLowerCase()=="content-type"),v=a.FormData&&i instanceof a.FormData,!(Array.prototype.indexOf.call(_d,c,void 0)>=0)||f||v||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,b]of l)this.g.setRequestHeader(R,b);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(R){va(this,R)}};function va(i,c){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=c,i.o=5,Aa(i),br(i)}function Aa(i){i.A||(i.A=!0,Ie(i,"complete"),Ie(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,Ie(this,"complete"),Ie(this,"abort"),br(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),br(this,!0)),ee.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Ra(this):this.Xa())},n.Xa=function(){Ra(this)};function Ra(i){if(i.h&&typeof o<"u"){if(i.v&&nt(i)==4)setTimeout(i.Ca.bind(i),0);else if(Ie(i,"readystatechange"),nt(i)==4){i.h=!1;try{const R=i.ca();e:switch(R){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var l;if(!(l=c)){var f;if(f=R===0){let b=String(i.D).match(pa)[1]||null;!b&&a.self&&a.self.location&&(b=a.self.location.protocol.slice(0,-1)),f=!gd.test(b?b.toLowerCase():"")}l=f}if(l)Ie(i,"complete"),Ie(i,"success");else{i.o=6;try{var v=nt(i)>2?i.g.statusText:""}catch{v=""}i.l=v+" ["+i.ca()+"]",Aa(i)}}finally{br(i)}}}}function br(i,c){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const l=i.g;i.g=null,c||Ie(i,"ready");try{l.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function nt(i){return i.g?i.g.readyState:0}n.ca=function(){try{return nt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(i){if(this.g){var c=this.g.responseText;return i&&c.indexOf(i)==0&&(c=c.substring(i.length)),Yh(c)}};function Sa(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function yd(i){const c={};i=(i.g&&nt(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(g(i[f]))continue;var l=nd(i[f]);const v=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const R=c[v]||[];c[v]=R,R.push(l)}zh(c,function(f){return f.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ln(i,c,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||c}function Pa(i){this.za=0,this.i=[],this.j=new Sn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ln("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ln("baseRetryDelayMs",5e3,i),this.Za=Ln("retryDelaySeedMs",1e4,i),this.Ta=Ln("forwardChannelMaxRetries",2,i),this.va=Ln("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new ua(i&&i.concurrentRequestLimit),this.Ba=new md,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Pa.prototype,n.ka=8,n.I=1,n.connect=function(i,c,l,f){we(0),this.W=i,this.H=c||{},l&&f!==void 0&&(this.H.OSID=l,this.H.OAID=f),this.F=this.X,this.J=La(this,null,this.W),kr(this)};function si(i){if(Ca(i),i.I==3){var c=i.V++,l=Me(i.J);if(X(l,"SID",i.M),X(l,"RID",c),X(l,"TYPE","terminate"),xn(i,l),c=new Ze(i,i.j,c),c.M=2,c.A=Pr(Me(l)),l=!1,a.navigator&&a.navigator.sendBeacon)try{l=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!l&&a.Image&&(new Image().src=c.A,l=!0),l||(c.g=xa(c.j,null),c.g.ea(c.A)),c.F=Date.now(),Sr(c)}Ma(i)}function Vr(i){i.g&&(oi(i),i.g.cancel(),i.g=null)}function Ca(i){Vr(i),i.v&&(a.clearTimeout(i.v),i.v=null),Nr(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&a.clearTimeout(i.m),i.m=null)}function kr(i){if(!la(i.h)&&!i.m){i.m=!0;var c=i.Ea;Se||m(),ie||(Se(),ie=!0),T.add(c,i),i.D=0}}function Ed(i,c){return ha(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=c.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=Rn(d(i.Ea,i,c),Oa(i,i.D)),i.D++,!0)}n.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const v=new Ze(this,this.j,i);let R=this.o;if(this.U&&(R?(R=Bo(R),jo(R,this.U)):R=this.U),this.u!==null||this.R||(v.J=R,R=null),this.S)e:{for(var c=0,l=0;l<this.i.length;l++){t:{var f=this.i[l];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,c>4096){c=l;break e}if(c===4096||l===this.i.length-1){c=l+1;break e}}c=1e3}else c=1e3;c=Va(this,v,c),l=Me(this.J),X(l,"RID",i),X(l,"CVER",22),this.G&&X(l,"X-HTTP-Session-Id",this.G),xn(this,l),R&&(this.R?c="headers="+Pn(wa(R))+"&"+c:this.u&&ri(l,this.u,R)),ei(this.h,v),this.Ra&&X(l,"TYPE","init"),this.S?(X(l,"$req",c),X(l,"SID","null"),v.U=!0,Ys(v,l,null)):Ys(v,l,c),this.I=2}}else this.I==3&&(i?ba(this,i):this.i.length==0||la(this.h)||ba(this))};function ba(i,c){var l;c?l=c.l:l=i.V++;const f=Me(i.J);X(f,"SID",i.M),X(f,"RID",l),X(f,"AID",i.K),xn(i,f),i.u&&i.o&&ri(f,i.u,i.o),l=new Ze(i,i.j,l,i.D+1),i.u===null&&(l.J=i.o),c&&(i.i=c.G.concat(i.i)),c=Va(i,l,1e3),l.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),ei(i.h,l),Ys(l,f,c)}function xn(i,c){i.H&&Ir(i.H,function(l,f){X(c,f,l)}),i.l&&Ir({},function(l,f){X(c,f,l)})}function Va(i,c,l){l=Math.min(i.i.length,l);const f=i.l?d(i.l.Ka,i.l,i):null;e:{var v=i.i;let B=-1;for(;;){const oe=["count="+l];B==-1?l>0?(B=v[0].g,oe.push("ofs="+B)):B=0:oe.push("ofs="+B);let Q=!0;for(let le=0;le<l;le++){var R=v[le].g;const Le=v[le].map;if(R-=B,R<0)B=Math.max(0,v[le].g-100),Q=!1;else try{R="req"+R+"_"||"";try{var b=Le instanceof Map?Le:Object.entries(Le);for(const[Dt,rt]of b){let st=rt;u(rt)&&(st=Hs(rt)),oe.push(R+Dt+"="+encodeURIComponent(st))}}catch(Dt){throw oe.push(R+"type="+encodeURIComponent("_badmap")),Dt}}catch{f&&f(Le)}}if(Q){b=oe.join("&");break e}}b=void 0}return i=i.i.splice(0,l),c.G=i,b}function ka(i){if(!i.g&&!i.v){i.Y=1;var c=i.Da;Se||m(),ie||(Se(),ie=!0),T.add(c,i),i.A=0}}function ii(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=Rn(d(i.Da,i),Oa(i,i.A)),i.A++,!0)}n.Da=function(){if(this.v=null,Na(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=Rn(d(this.Wa,this),i)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,we(10),Vr(this),Na(this))};function oi(i){i.B!=null&&(a.clearTimeout(i.B),i.B=null)}function Na(i){i.g=new Ze(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var c=Me(i.na);X(c,"RID","rpc"),X(c,"SID",i.M),X(c,"AID",i.K),X(c,"CI",i.F?"0":"1"),!i.F&&i.ia&&X(c,"TO",i.ia),X(c,"TYPE","xmlhttp"),xn(i,c),i.u&&i.o&&ri(c,i.u,i.o),i.O&&(i.g.H=i.O);var l=i.g;i=i.ba,l.M=1,l.A=Pr(Me(c)),l.u=null,l.R=!0,oa(l,i)}n.Va=function(){this.C!=null&&(this.C=null,Vr(this),ii(this),we(19))};function Nr(i){i.C!=null&&(a.clearTimeout(i.C),i.C=null)}function Da(i,c){var l=null;if(i.g==c){Nr(i),oi(i),i.g=null;var f=2}else if(Zs(i.h,c))l=c.G,da(i.h,c),f=1;else return;if(i.I!=0){if(c.o)if(f==1){l=c.u?c.u.length:0,c=Date.now()-c.F;var v=i.D;f=Ar(),Ie(f,new ta(f,l)),kr(i)}else ka(i);else if(v=c.m,v==3||v==0&&c.X>0||!(f==1&&Ed(i,c)||f==2&&ii(i)))switch(l&&l.length>0&&(c=i.h,c.i=c.i.concat(l)),v){case 1:Nt(i,5);break;case 4:Nt(i,10);break;case 3:Nt(i,6);break;default:Nt(i,2)}}}function Oa(i,c){let l=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(l*=2),l*c}function Nt(i,c){if(i.j.info("Error code "+c),c==2){var l=d(i.bb,i),f=i.Ua;const v=!f;f=new et(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||bn(f,"https"),Pr(f),v?fd(f.toString(),l):pd(f.toString(),l)}else we(2);i.I=0,i.l&&i.l.pa(c),Ma(i),Ca(i)}n.bb=function(i){i?(this.j.info("Successfully pinged google.com"),we(2)):(this.j.info("Failed to ping google.com"),we(1))};function Ma(i){if(i.I=0,i.ja=[],i.l){const c=fa(i.h);(c.length!=0||i.i.length!=0)&&(N(i.ja,c),N(i.ja,i.i),i.h.i.length=0,C(i.i),i.i.length=0),i.l.oa()}}function La(i,c,l){var f=l instanceof et?Me(l):new et(l);if(f.g!="")c&&(f.g=c+"."+f.g),Vn(f,f.u);else{var v=a.location;f=v.protocol,c=c?c+"."+v.hostname:v.hostname,v=+v.port;const R=new et(null);f&&bn(R,f),c&&(R.g=c),v&&Vn(R,v),l&&(R.h=l),f=R}return l=i.G,c=i.wa,l&&c&&X(f,l,c),X(f,"VER",i.ka),xn(i,f),f}function xa(i,c,l){if(c&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=i.Aa&&!i.ma?new ee(new ni({ab:l})):new ee(i.ma),c.Fa(i.L),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fa(){}n=Fa.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Dr(){}Dr.prototype.g=function(i,c){return new Pe(i,c)};function Pe(i,c){ge.call(this),this.g=new Pa(c),this.l=i,this.h=c&&c.messageUrlParams||null,i=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(i?i["X-WebChannel-Content-Type"]=c.messageContentType:i={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(i?i["X-WebChannel-Client-Profile"]=c.sa:i={"X-WebChannel-Client-Profile":c.sa}),this.g.U=i,(i=c&&c.Qb)&&!g(i)&&(this.g.u=i),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!g(c)&&(this.g.G=c,i=this.h,i!==null&&c in i&&(i=this.h,c in i&&delete i[c])),this.j=new Kt(this)}y(Pe,ge),Pe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Pe.prototype.close=function(){si(this.g)},Pe.prototype.o=function(i){var c=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.v&&(l={},l.__data__=Hs(i),i=l);c.i.push(new id(c.Ya++,i)),c.I==3&&kr(c)},Pe.prototype.N=function(){this.g.l=null,delete this.j,si(this.g),delete this.g,Pe.Z.N.call(this)};function Ua(i){Ws.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var c=i.__sm__;if(c){e:{for(const l in c){i=l;break e}i=void 0}(this.i=i)&&(i=this.i,c=c!==null&&i in c?c[i]:void 0),this.data=c}else this.data=i}y(Ua,Ws);function Ba(){Gs.call(this),this.status=1}y(Ba,Gs);function Kt(i){this.g=i}y(Kt,Fa),Kt.prototype.ra=function(){Ie(this.g,"a")},Kt.prototype.qa=function(i){Ie(this.g,new Ua(i))},Kt.prototype.pa=function(i){Ie(this.g,new Ba)},Kt.prototype.oa=function(){Ie(this.g,"b")},Dr.prototype.createWebChannel=Dr.prototype.g,Pe.prototype.send=Pe.prototype.o,Pe.prototype.open=Pe.prototype.m,Pe.prototype.close=Pe.prototype.close,_l=function(){return new Dr},gl=function(){return Ar()},ml=bt,bi={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Rr.NO_ERROR=0,Rr.TIMEOUT=8,Rr.HTTP_ERROR=6,Wr=Rr,na.COMPLETE="complete",pl=na,Xo.EventType=vn,vn.OPEN="a",vn.CLOSE="b",vn.ERROR="c",vn.MESSAGE="d",ge.prototype.listen=ge.prototype.J,Bn=Xo,ee.prototype.listenOnce=ee.prototype.K,ee.prototype.getLastError=ee.prototype.Ha,ee.prototype.getLastErrorCode=ee.prototype.ya,ee.prototype.getStatus=ee.prototype.ca,ee.prototype.getResponseJson=ee.prototype.La,ee.prototype.getResponseText=ee.prototype.la,ee.prototype.send=ee.prototype.ea,ee.prototype.setWithCredentials=ee.prototype.Fa,fl=ee}).apply(typeof Lr<"u"?Lr:typeof self<"u"?self:typeof window<"u"?window:{});const Ec="@firebase/firestore",Tc="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ye{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ye.UNAUTHENTICATED=new ye(null),ye.GOOGLE_CREDENTIALS=new ye("google-credentials-uid"),ye.FIRST_PARTY=new ye("first-party-uid"),ye.MOCK_USER=new ye("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
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
 */let _n="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Bt=new Wi("@firebase/firestore");function Qt(){return Bt.logLevel}function D(n,...e){if(Bt.logLevel<=q.DEBUG){const t=e.map(ro);Bt.debug(`Firestore (${_n}): ${n}`,...t)}}function Ye(n,...e){if(Bt.logLevel<=q.ERROR){const t=e.map(ro);Bt.error(`Firestore (${_n}): ${n}`,...t)}}function cn(n,...e){if(Bt.logLevel<=q.WARN){const t=e.map(ro);Bt.warn(`Firestore (${_n}): ${n}`,...t)}}function ro(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function x(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,yl(n,r,t)}function yl(n,e,t){let r=`FIRESTORE (${_n}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Ye(r),new Error(r)}function G(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||yl(e,s,r)}function U(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends Je{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class mt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class El{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ye.UNAUTHENTICATED))}shutdown(){}}class _g{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class yg{constructor(e){this.t=e,this.currentUser=ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){G(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,t(h)):Promise.resolve();let o=new mt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new mt,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},u=h=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new mt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(G(typeof r.accessToken=="string",31837,{l:r}),new El(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return G(e===null||typeof e=="string",2055,{h:e}),new ye(e)}}class Eg{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=ye.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Tg{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Eg(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ic{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ig{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,be(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){G(this.o===void 0,3512);const r=o=>{o.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,D("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const s=o=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ic(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(G(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ic(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function wg(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class so{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=wg(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<t&&(r+=e.charAt(s[o]%62))}return r}}function j(n,e){return n<e?-1:n>e?1:0}function Vi(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),o=e.charAt(r);if(s!==o)return mi(s)===mi(o)?j(s,o):mi(s)?1:-1}return j(n.length,e.length)}const vg=55296,Ag=57343;function mi(n){const e=n.charCodeAt(0);return e>=vg&&e<=Ag}function un(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const wc="__name__";class xe{constructor(e,t,r){t===void 0?t=0:t>e.length&&x(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&x(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return xe.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof xe?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const o=xe.compareSegments(e.get(s),t.get(s));if(o!==0)return o}return j(e.length,t.length)}static compareSegments(e,t){const r=xe.isNumericId(e),s=xe.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?xe.extractNumericId(e).compare(xe.extractNumericId(t)):Vi(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return pt.fromString(e.substring(4,e.length-2))}}class Y extends xe{construct(e,t,r){return new Y(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new k(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new Y(t)}static emptyPath(){return new Y([])}}const Rg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pe extends xe{construct(e,t,r){return new pe(e,t,r)}static isValidIdentifier(e){return Rg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===wc}static keyField(){return new pe([wc])}static fromServerFormat(e){const t=[];let r="",s=0;const o=()=>{if(r.length===0)throw new k(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const u=e[s];if(u==="\\"){if(s+1===e.length)throw new k(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new k(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(r+=u,s++):(o(),s++)}if(o(),a)throw new k(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pe(t)}static emptyPath(){return new pe([])}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(Y.fromString(e))}static fromName(e){return new M(Y.fromString(e).popFirst(5))}static empty(){return new M(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Y.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Y.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new Y(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Tl(n,e,t){if(!t)throw new k(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Sg(n,e,t,r){if(e===!0&&r===!0)throw new k(S.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function vc(n){if(!M.isDocumentKey(n))throw new k(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ac(n){if(M.isDocumentKey(n))throw new k(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Il(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ts(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":x(12329,{type:typeof n})}function qt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new k(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ts(n);throw new k(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function se(n,e){const t={typeString:n};return e&&(t.value=e),t}function fr(n,e){if(!Il(n))throw new k(S.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,o="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){t=`Expected '${r}' field to equal '${o.value}'`;break}}if(t)throw new k(S.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Rc=-62135596800,Sc=1e6;class J{static now(){return J.fromMillis(Date.now())}static fromDate(e){return J.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Sc);return new J(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new k(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new k(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Rc)throw new k(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new k(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Sc}_compareTo(e){return this.seconds===e.seconds?j(this.nanoseconds,e.nanoseconds):j(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:J._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(fr(e,J._jsonSchema))return new J(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Rc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}J._jsonSchemaVersion="firestore/timestamp/1.0",J._jsonSchema={type:se("string",J._jsonSchemaVersion),seconds:se("number"),nanoseconds:se("number")};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class F{static fromTimestamp(e){return new F(e)}static min(){return new F(new J(0,0))}static max(){return new F(new J(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const Zn=-1;function Pg(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=F.fromTimestamp(r===1e9?new J(t+1,0):new J(t,r));return new _t(s,M.empty(),e)}function Cg(n){return new _t(n.readTime,n.key,Zn)}class _t{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new _t(F.min(),M.empty(),Zn)}static max(){return new _t(F.max(),M.empty(),Zn)}}function bg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=M.comparator(n.documentKey,e.documentKey),t!==0?t:j(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Vg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */async function yn(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==Vg)throw n;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&x(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):P.reject(t)}static resolve(e){return new P((t,r)=>{t(e)})}static reject(e){return new P((t,r)=>{r(e)})}static waitFor(e){return new P((t,r)=>{let s=0,o=0,a=!1;e.forEach(u=>{++s,u.next(()=>{++o,a&&o===s&&t()},h=>r(h))}),a=!0,o===s&&t()})}static or(e){let t=P.resolve(!1);for(const r of e)t=t.next(s=>s?P.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,o)=>{r.push(t.call(this,s,o))}),this.waitFor(r)}static mapArray(e,t){return new P((r,s)=>{const o=e.length,a=new Array(o);let u=0;for(let h=0;h<o;h++){const d=h;t(e[d]).next(p=>{a[d]=p,++u,u===o&&r(a)},p=>s(p))}})}static doWhile(e,t){return new P((r,s)=>{const o=()=>{e()===!0?t().next(()=>{o()},s):r()};o()})}}function Ng(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function En(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Is{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Is.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
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
 */const io=-1;function ws(n){return n==null}function is(n){return n===0&&1/n==-1/0}function Dg(n){return typeof n=="number"&&Number.isInteger(n)&&!is(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const wl="";function Og(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Pc(e)),e=Mg(n.get(t),e);return Pc(e)}function Mg(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":t+="";break;case wl:t+="";break;default:t+=o}}return t}function Pc(n){return n+wl+""}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Cc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Rt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function vl(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Z{constructor(e,t){this.comparator=e,this.root=t||fe.EMPTY}insert(e,t){return new Z(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,fe.BLACK,null,null))}remove(e){return new Z(this.comparator,this.root.remove(e,this.comparator).copy(null,null,fe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xr(this.root,e,this.comparator,!1)}getReverseIterator(){return new xr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xr(this.root,e,this.comparator,!0)}}class xr{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&s&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class fe{constructor(e,t,r,s,o){this.key=e,this.value=t,this.color=r??fe.RED,this.left=s??fe.EMPTY,this.right=o??fe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,o){return new fe(e??this.key,t??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const o=r(e,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(e,t,r),null):o===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return fe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return fe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw x(43730,{key:this.key,value:this.value});if(this.right.isRed())throw x(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw x(27949);return e+(this.isRed()?0:1)}}fe.EMPTY=null,fe.RED=!0,fe.BLACK=!1;fe.EMPTY=new class{constructor(){this.size=0}get key(){throw x(57766)}get value(){throw x(16141)}get color(){throw x(16727)}get left(){throw x(29726)}get right(){throw x(36894)}copy(e,t,r,s,o){return this}insert(e,t,r){return new fe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ce{constructor(e){this.comparator=e,this.data=new Z(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new bc(this.data.getIterator())}getIteratorFrom(e){return new bc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ce)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ce(this.comparator);return t.data=e,t}}class bc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Ce{constructor(e){this.fields=e,e.sort(pe.comparator)}static empty(){return new Ce([])}unionWith(e){let t=new ce(pe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ce(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return un(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Al extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class me{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Al("Invalid base64 string: "+o):o}}(e);return new me(t)}static fromUint8Array(e){const t=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(e);return new me(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return j(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}me.EMPTY_BYTE_STRING=new me("");const Lg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yt(n){if(G(!!n,39018),typeof n=="string"){let e=0;const t=Lg.exec(n);if(G(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:te(n.seconds),nanos:te(n.nanos)}}function te(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Et(n){return typeof n=="string"?me.fromBase64String(n):me.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Rl="server_timestamp",Sl="__type__",Pl="__previous_value__",Cl="__local_write_time__";function oo(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Sl])==null?void 0:r.stringValue)===Rl}function vs(n){const e=n.mapValue.fields[Pl];return oo(e)?vs(e):e}function er(n){const e=yt(n.mapValue.fields[Cl].timestampValue);return new J(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class xg{constructor(e,t,r,s,o,a,u,h,d,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=p}}const os="(default)";class tr{constructor(e,t){this.projectId=e,this.database=t||os}static empty(){return new tr("","")}get isDefaultDatabase(){return this.database===os}isEqual(e){return e instanceof tr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const bl="__type__",Vl="__max__",Fr={mapValue:{fields:{__type__:{stringValue:Vl}}}},kl="__vector__",as="value";function Tt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?oo(n)?4:Ug(n)?9007199254740991:Fg(n)?10:11:x(28295,{value:n})}function ze(n,e){if(n===e)return!0;const t=Tt(n);if(t!==Tt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return er(n).isEqual(er(e));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=yt(s.timestampValue),u=yt(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,o){return Et(s.bytesValue).isEqual(Et(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,o){return te(s.geoPointValue.latitude)===te(o.geoPointValue.latitude)&&te(s.geoPointValue.longitude)===te(o.geoPointValue.longitude)}(n,e);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return te(s.integerValue)===te(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=te(s.doubleValue),u=te(o.doubleValue);return a===u?is(a)===is(u):isNaN(a)&&isNaN(u)}return!1}(n,e);case 9:return un(n.arrayValue.values||[],e.arrayValue.values||[],ze);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},u=o.mapValue.fields||{};if(Cc(a)!==Cc(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!ze(a[h],u[h])))return!1;return!0}(n,e);default:return x(52216,{left:n})}}function nr(n,e){return(n.values||[]).find(t=>ze(t,e))!==void 0}function ln(n,e){if(n===e)return 0;const t=Tt(n),r=Tt(e);if(t!==r)return j(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return j(n.booleanValue,e.booleanValue);case 2:return function(o,a){const u=te(o.integerValue||o.doubleValue),h=te(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,e);case 3:return Vc(n.timestampValue,e.timestampValue);case 4:return Vc(er(n),er(e));case 5:return Vi(n.stringValue,e.stringValue);case 6:return function(o,a){const u=Et(o),h=Et(a);return u.compareTo(h)}(n.bytesValue,e.bytesValue);case 7:return function(o,a){const u=o.split("/"),h=a.split("/");for(let d=0;d<u.length&&d<h.length;d++){const p=j(u[d],h[d]);if(p!==0)return p}return j(u.length,h.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,a){const u=j(te(o.latitude),te(a.latitude));return u!==0?u:j(te(o.longitude),te(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return kc(n.arrayValue,e.arrayValue);case 10:return function(o,a){var w,C,N,O;const u=o.fields||{},h=a.fields||{},d=(w=u[as])==null?void 0:w.arrayValue,p=(C=h[as])==null?void 0:C.arrayValue,y=j(((N=d==null?void 0:d.values)==null?void 0:N.length)||0,((O=p==null?void 0:p.values)==null?void 0:O.length)||0);return y!==0?y:kc(d,p)}(n.mapValue,e.mapValue);case 11:return function(o,a){if(o===Fr.mapValue&&a===Fr.mapValue)return 0;if(o===Fr.mapValue)return 1;if(a===Fr.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),d=a.fields||{},p=Object.keys(d);h.sort(),p.sort();for(let y=0;y<h.length&&y<p.length;++y){const w=Vi(h[y],p[y]);if(w!==0)return w;const C=ln(u[h[y]],d[p[y]]);if(C!==0)return C}return j(h.length,p.length)}(n.mapValue,e.mapValue);default:throw x(23264,{he:t})}}function Vc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return j(n,e);const t=yt(n),r=yt(e),s=j(t.seconds,r.seconds);return s!==0?s:j(t.nanos,r.nanos)}function kc(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const o=ln(t[s],r[s]);if(o)return o}return j(t.length,r.length)}function hn(n){return ki(n)}function ki(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=yt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Et(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return M.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const o of t.values||[])s?s=!1:r+=",",r+=ki(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${ki(t.fields[a])}`;return s+"}"}(n.mapValue):x(61005,{value:n})}function Gr(n){switch(Tt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=vs(n);return e?16+Gr(e):16;case 5:return 2*n.stringValue.length;case 6:return Et(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,o)=>s+Gr(o),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Rt(r.fields,(o,a)=>{s+=o.length+Gr(a)}),s}(n.mapValue);default:throw x(13486,{value:n})}}function Nc(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Ni(n){return!!n&&"integerValue"in n}function ao(n){return!!n&&"arrayValue"in n}function Dc(n){return!!n&&"nullValue"in n}function Oc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Kr(n){return!!n&&"mapValue"in n}function Fg(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[bl])==null?void 0:r.stringValue)===kl}function Hn(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Rt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Hn(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Hn(n.arrayValue.values[t]);return e}return{...n}}function Ug(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Vl}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Re{constructor(e){this.value=e}static empty(){return new Re({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Kr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Hn(t)}setAll(e){let t=pe.emptyPath(),r={},s=[];e.forEach((a,u)=>{if(!t.isImmediateParentOf(u)){const h=this.getFieldsMap(t);this.applyChanges(h,r,s),r={},s=[],t=u.popLast()}a?r[u.lastSegment()]=Hn(a):s.push(u.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,s)}delete(e){const t=this.field(e.popLast());Kr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ze(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Kr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Rt(t,(s,o)=>e[s]=o);for(const s of r)delete e[s]}clone(){return new Re(Hn(this.value))}}function Nl(n){const e=[];return Rt(n.fields,(t,r)=>{const s=new pe([t]);if(Kr(r)){const o=Nl(r.mapValue).fields;if(o.length===0)e.push(s);else for(const a of o)e.push(s.child(a))}else e.push(s)}),new Ce(e)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ee{constructor(e,t,r,s,o,a,u){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(e){return new Ee(e,0,F.min(),F.min(),F.min(),Re.empty(),0)}static newFoundDocument(e,t,r,s){return new Ee(e,1,t,F.min(),r,s,0)}static newNoDocument(e,t){return new Ee(e,2,t,F.min(),F.min(),Re.empty(),0)}static newUnknownDocument(e,t){return new Ee(e,3,t,F.min(),F.min(),Re.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Re.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Re.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ee&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ee(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class cs{constructor(e,t){this.position=e,this.inclusive=t}}function Mc(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const o=e[s],a=n.position[s];if(o.field.isKeyField()?r=M.comparator(M.fromName(a.referenceValue),t.key):r=ln(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Lc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ze(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class rr{constructor(e,t="asc"){this.field=e,this.dir=t}}function Bg(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Dl{}class re extends Dl{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new jg(e,t,r):t==="array-contains"?new Hg(e,r):t==="in"?new Wg(e,r):t==="not-in"?new Gg(e,r):t==="array-contains-any"?new Kg(e,r):new re(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new $g(e,r):new zg(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(ln(t,this.value)):t!==null&&Tt(this.value)===Tt(t)&&this.matchesComparison(ln(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return x(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Oe extends Dl{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Oe(e,t)}matches(e){return Ol(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Ol(n){return n.op==="and"}function Ml(n){return qg(n)&&Ol(n)}function qg(n){for(const e of n.filters)if(e instanceof Oe)return!1;return!0}function Di(n){if(n instanceof re)return n.field.canonicalString()+n.op.toString()+hn(n.value);if(Ml(n))return n.filters.map(e=>Di(e)).join(",");{const e=n.filters.map(t=>Di(t)).join(",");return`${n.op}(${e})`}}function Ll(n,e){return n instanceof re?function(r,s){return s instanceof re&&r.op===s.op&&r.field.isEqual(s.field)&&ze(r.value,s.value)}(n,e):n instanceof Oe?function(r,s){return s instanceof Oe&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,u)=>o&&Ll(a,s.filters[u]),!0):!1}(n,e):void x(19439)}function xl(n){return n instanceof re?function(t){return`${t.field.canonicalString()} ${t.op} ${hn(t.value)}`}(n):n instanceof Oe?function(t){return t.op.toString()+" {"+t.getFilters().map(xl).join(" ,")+"}"}(n):"Filter"}class jg extends re{constructor(e,t,r){super(e,t,r),this.key=M.fromName(r.referenceValue)}matches(e){const t=M.comparator(e.key,this.key);return this.matchesComparison(t)}}class $g extends re{constructor(e,t){super(e,"in",t),this.keys=Fl("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class zg extends re{constructor(e,t){super(e,"not-in",t),this.keys=Fl("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Fl(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>M.fromName(r.referenceValue))}class Hg extends re{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ao(t)&&nr(t.arrayValue,this.value)}}class Wg extends re{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&nr(this.value.arrayValue,t)}}class Gg extends re{constructor(e,t){super(e,"not-in",t)}matches(e){if(nr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!nr(this.value.arrayValue,t)}}class Kg extends re{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ao(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>nr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Qg{constructor(e,t=null,r=[],s=[],o=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=u,this.Te=null}}function xc(n,e=null,t=[],r=[],s=null,o=null,a=null){return new Qg(n,e,t,r,s,o,a)}function co(n){const e=U(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Di(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),ws(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>hn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>hn(r)).join(",")),e.Te=t}return e.Te}function uo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Bg(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Ll(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Lc(n.startAt,e.startAt)&&Lc(n.endAt,e.endAt)}function Oi(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Tn{constructor(e,t=null,r=[],s=[],o=null,a="F",u=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Yg(n,e,t,r,s,o,a,u){return new Tn(n,e,t,r,s,o,a,u)}function Ul(n){return new Tn(n)}function Fc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Bl(n){return n.collectionGroup!==null}function Wn(n){const e=U(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const o of e.explicitOrderBy)e.Ie.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new ce(pe.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.Ie.push(new rr(o,r))}),t.has(pe.keyField().canonicalString())||e.Ie.push(new rr(pe.keyField(),r))}return e.Ie}function Be(n){const e=U(n);return e.Ee||(e.Ee=Xg(e,Wn(n))),e.Ee}function Xg(n,e){if(n.limitType==="F")return xc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new rr(s.field,o)});const t=n.endAt?new cs(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new cs(n.startAt.position,n.startAt.inclusive):null;return xc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Mi(n,e){const t=n.filters.concat([e]);return new Tn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function us(n,e,t){return new Tn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function As(n,e){return uo(Be(n),Be(e))&&n.limitType===e.limitType}function ql(n){return`${co(Be(n))}|lt:${n.limitType}`}function Yt(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>xl(s)).join(", ")}]`),ws(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>hn(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>hn(s)).join(",")),`Target(${r})`}(Be(n))}; limitType=${n.limitType})`}function Rs(n,e){return e.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):M.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,s){for(const o of Wn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,u,h){const d=Mc(a,u,h);return a.inclusive?d<=0:d<0}(r.startAt,Wn(r),s)||r.endAt&&!function(a,u,h){const d=Mc(a,u,h);return a.inclusive?d>=0:d>0}(r.endAt,Wn(r),s))}(n,e)}function Jg(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function jl(n){return(e,t)=>{let r=!1;for(const s of Wn(n)){const o=Zg(s,e,t);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function Zg(n,e,t){const r=n.field.isKeyField()?M.comparator(e.key,t.key):function(o,a,u){const h=a.data.field(o),d=u.data.field(o);return h!==null&&d!==null?ln(h,d):x(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return x(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class zt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return void(s[o]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Rt(this.inner,(t,r)=>{for(const[s,o]of r)e(s,o)})}isEmpty(){return vl(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const e_=new Z(M.comparator);function Xe(){return e_}const $l=new Z(M.comparator);function qn(...n){let e=$l;for(const t of n)e=e.insert(t.key,t);return e}function zl(n){let e=$l;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Mt(){return Gn()}function Hl(){return Gn()}function Gn(){return new zt(n=>n.toString(),(n,e)=>n.isEqual(e))}const t_=new Z(M.comparator),n_=new ce(M.comparator);function $(...n){let e=n_;for(const t of n)e=e.add(t);return e}const r_=new ce(j);function s_(){return r_}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function lo(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:is(e)?"-0":e}}function Wl(n){return{integerValue:""+n}}function i_(n,e){return Dg(e)?Wl(e):lo(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Ss{constructor(){this._=void 0}}function o_(n,e,t){return n instanceof sr?function(s,o){const a={fields:{[Sl]:{stringValue:Rl},[Cl]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&oo(o)&&(o=vs(o)),o&&(a.fields[Pl]=o),{mapValue:a}}(t,e):n instanceof ir?Kl(n,e):n instanceof or?Ql(n,e):function(s,o){const a=Gl(s,o),u=Uc(a)+Uc(s.Ae);return Ni(a)&&Ni(s.Ae)?Wl(u):lo(s.serializer,u)}(n,e)}function a_(n,e,t){return n instanceof ir?Kl(n,e):n instanceof or?Ql(n,e):t}function Gl(n,e){return n instanceof ls?function(r){return Ni(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class sr extends Ss{}class ir extends Ss{constructor(e){super(),this.elements=e}}function Kl(n,e){const t=Yl(e);for(const r of n.elements)t.some(s=>ze(s,r))||t.push(r);return{arrayValue:{values:t}}}class or extends Ss{constructor(e){super(),this.elements=e}}function Ql(n,e){let t=Yl(e);for(const r of n.elements)t=t.filter(s=>!ze(s,r));return{arrayValue:{values:t}}}class ls extends Ss{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Uc(n){return te(n.integerValue||n.doubleValue)}function Yl(n){return ao(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class c_{constructor(e,t){this.field=e,this.transform=t}}function u_(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof ir&&s instanceof ir||r instanceof or&&s instanceof or?un(r.elements,s.elements,ze):r instanceof ls&&s instanceof ls?ze(r.Ae,s.Ae):r instanceof sr&&s instanceof sr}(n.transform,e.transform)}class l_{constructor(e,t){this.version=e,this.transformResults=t}}class Ne{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ne}static exists(e){return new Ne(void 0,e)}static updateTime(e){return new Ne(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Qr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ps{}function Xl(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ho(n.key,Ne.none()):new pr(n.key,n.data,Ne.none());{const t=n.data,r=Re.empty();let s=new ce(pe.comparator);for(let o of e.fields)if(!s.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new St(n.key,r,new Ce(s.toArray()),Ne.none())}}function h_(n,e,t){n instanceof pr?function(s,o,a){const u=s.value.clone(),h=qc(s.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):n instanceof St?function(s,o,a){if(!Qr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const u=qc(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Jl(s)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,e,t):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Kn(n,e,t,r){return n instanceof pr?function(o,a,u,h){if(!Qr(o.precondition,a))return u;const d=o.value.clone(),p=jc(o.fieldTransforms,h,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof St?function(o,a,u,h){if(!Qr(o.precondition,a))return u;const d=jc(o.fieldTransforms,h,a),p=a.data;return p.setAll(Jl(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(y=>y.field))}(n,e,t,r):function(o,a,u){return Qr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,e,t)}function d_(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),o=Gl(r.transform,s||null);o!=null&&(t===null&&(t=Re.empty()),t.set(r.field,o))}return t||null}function Bc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&un(r,s,(o,a)=>u_(o,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class pr extends Ps{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class St extends Ps{constructor(e,t,r,s,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Jl(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function qc(n,e,t){const r=new Map;G(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let s=0;s<t.length;s++){const o=n[s],a=o.transform,u=e.data.field(o.field);r.set(o.field,a_(a,u,t[s]))}return r}function jc(n,e,t){const r=new Map;for(const s of n){const o=s.transform,a=t.data.field(s.field);r.set(s.field,o_(o,a,e))}return r}class ho extends Ps{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class f_ extends Ps{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class p_{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(e.key)&&h_(o,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Kn(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Kn(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Hl();return this.mutations.forEach(s=>{const o=e.get(s.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=t.has(s.key)?null:u;const h=Xl(a,u);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(F.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),$())}isEqual(e){return this.batchId===e.batchId&&un(this.mutations,e.mutations,(t,r)=>Bc(t,r))&&un(this.baseMutations,e.baseMutations,(t,r)=>Bc(t,r))}}class fo{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){G(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return t_}();const o=e.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new fo(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class m_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class g_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */var ne,H;function __(n){switch(n){case S.OK:return x(64938);case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return x(15467,{code:n})}}function Zl(n){if(n===void 0)return Ye("GRPC error has no .code"),S.UNKNOWN;switch(n){case ne.OK:return S.OK;case ne.CANCELLED:return S.CANCELLED;case ne.UNKNOWN:return S.UNKNOWN;case ne.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case ne.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case ne.INTERNAL:return S.INTERNAL;case ne.UNAVAILABLE:return S.UNAVAILABLE;case ne.UNAUTHENTICATED:return S.UNAUTHENTICATED;case ne.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case ne.NOT_FOUND:return S.NOT_FOUND;case ne.ALREADY_EXISTS:return S.ALREADY_EXISTS;case ne.PERMISSION_DENIED:return S.PERMISSION_DENIED;case ne.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case ne.ABORTED:return S.ABORTED;case ne.OUT_OF_RANGE:return S.OUT_OF_RANGE;case ne.UNIMPLEMENTED:return S.UNIMPLEMENTED;case ne.DATA_LOSS:return S.DATA_LOSS;default:return x(39323,{code:n})}}(H=ne||(ne={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function y_(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const E_=new pt([4294967295,4294967295],0);function $c(n){const e=y_().encode(n),t=new dl;return t.update(e),new Uint8Array(t.digest())}function zc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new pt([t,r],0),new pt([s,o],0)]}class po{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new jn(`Invalid padding: ${t}`);if(r<0)throw new jn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new jn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new jn(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=pt.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(pt.fromNumber(r)));return s.compare(E_)===1&&(s=new pt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=$c(e),[r,s]=zc(t);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new po(o,s,t);return r.forEach(u=>a.insert(u)),a}insert(e){if(this.ge===0)return;const t=$c(e),[r,s]=zc(t);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class jn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Cs{constructor(e,t,r,s,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,mr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Cs(F.min(),s,new Z(j),Xe(),$())}}class mr{constructor(e,t,r,s,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new mr(r,t,$(),$(),$())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Yr{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class eh{constructor(e,t){this.targetId=e,this.Ce=t}}class th{constructor(e,t,r=me.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Hc{constructor(){this.ve=0,this.Fe=Wc(),this.Me=me.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=$(),t=$(),r=$();return this.Fe.forEach((s,o)=>{switch(o){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:x(38017,{changeType:o})}}),new mr(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=Wc()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,G(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class T_{constructor(e){this.Ge=e,this.ze=new Map,this.je=Xe(),this.Je=Ur(),this.He=Ur(),this.Ye=new Z(j)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:x(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const o=s.target;if(Oi(o))if(r===0){const a=new M(o.path);this.et(t,a,Ee.newNoDocument(a,F.min()))}else G(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const u=this.ut(e),h=u?this.ct(u,e,a):1;if(h!==0){this.it(t);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=t;let a,u;try{a=Et(r).toUint8Array()}catch(h){if(h instanceof Al)return cn("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new po(a,s,o)}catch(h){return cn(h instanceof jn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.ge===0?null:u}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach(o=>{const a=this.Ge.ht(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(u)||(this.et(t,o,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((o,a)=>{const u=this.ot(a);if(u){if(o.current&&Oi(u.target)){const h=new M(u.target.path);this.It(h).has(a)||this.Et(a,h)||this.et(a,h,Ee.newNoDocument(h,e))}o.Be&&(t.set(a,o.ke()),o.qe())}});let r=$();this.He.forEach((o,a)=>{let u=!0;a.forEachWhile(h=>{const d=this.ot(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(o))}),this.je.forEach((o,a)=>a.setReadTime(e));const s=new Cs(e,t,this.Ye,this.je,r);return this.je=Xe(),this.Je=Ur(),this.He=Ur(),this.Ye=new Z(j),s}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Hc,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new ce(j),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new ce(j),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||D("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Hc),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Ur(){return new Z(M.comparator)}function Wc(){return new Z(M.comparator)}const I_={asc:"ASCENDING",desc:"DESCENDING"},w_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},v_={and:"AND",or:"OR"};class A_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Li(n,e){return n.useProto3Json||ws(e)?e:{value:e}}function hs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function nh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function R_(n,e){return hs(n,e.toTimestamp())}function qe(n){return G(!!n,49232),F.fromTimestamp(function(t){const r=yt(t);return new J(r.seconds,r.nanos)}(n))}function mo(n,e){return xi(n,e).canonicalString()}function xi(n,e){const t=function(s){return new Y(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function rh(n){const e=Y.fromString(n);return G(ch(e),10190,{key:e.toString()}),e}function Fi(n,e){return mo(n.databaseId,e.path)}function gi(n,e){const t=rh(e);if(t.get(1)!==n.databaseId.projectId)throw new k(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new k(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new M(ih(t))}function sh(n,e){return mo(n.databaseId,e)}function S_(n){const e=rh(n);return e.length===4?Y.emptyPath():ih(e)}function Ui(n){return new Y(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ih(n){return G(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Gc(n,e,t){return{name:Fi(n,e),fields:t.value.mapValue.fields}}function P_(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:x(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],o=function(d,p){return d.useProto3Json?(G(p===void 0||typeof p=="string",58123),me.fromBase64String(p||"")):(G(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),me.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(d){const p=d.code===void 0?S.UNKNOWN:Zl(d.code);return new k(p,d.message||"")}(a);t=new th(r,s,o,u||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=gi(n,r.document.name),o=qe(r.document.updateTime),a=r.document.createTime?qe(r.document.createTime):F.min(),u=new Re({mapValue:{fields:r.document.fields}}),h=Ee.newFoundDocument(s,o,a,u),d=r.targetIds||[],p=r.removedTargetIds||[];t=new Yr(d,p,h.key,h)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=gi(n,r.document),o=r.readTime?qe(r.readTime):F.min(),a=Ee.newNoDocument(s,o),u=r.removedTargetIds||[];t=new Yr([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=gi(n,r.document),o=r.removedTargetIds||[];t=new Yr([],o,s,null)}else{if(!("filter"in e))return x(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new g_(s,o),u=r.targetId;t=new eh(u,a)}}return t}function C_(n,e){let t;if(e instanceof pr)t={update:Gc(n,e.key,e.value)};else if(e instanceof ho)t={delete:Fi(n,e.key)};else if(e instanceof St)t={update:Gc(n,e.key,e.data),updateMask:x_(e.fieldMask)};else{if(!(e instanceof f_))return x(16599,{Vt:e.type});t={verify:Fi(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,a){const u=a.transform;if(u instanceof sr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof ir)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof or)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof ls)return{fieldPath:a.field.canonicalString(),increment:u.Ae};throw x(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:R_(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:x(27497)}(n,e.precondition)),t}function b_(n,e){return n&&n.length>0?(G(e!==void 0,14353),n.map(t=>function(s,o){let a=s.updateTime?qe(s.updateTime):qe(o);return a.isEqual(F.min())&&(a=qe(o)),new l_(a,s.transformResults||[])}(t,e))):[]}function V_(n,e){return{documents:[sh(n,e.path)]}}function k_(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=sh(n,s);const o=function(d){if(d.length!==0)return ah(Oe.create(d,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(p=>function(w){return{field:Xt(w.field),direction:O_(w.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const u=Li(n,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ft:t,parent:s}}function N_(n){let e=S_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){G(r===1,65062);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let o=[];t.where&&(o=function(y){const w=oh(y);return w instanceof Oe&&Ml(w)?w.getFilters():[w]}(t.where));let a=[];t.orderBy&&(a=function(y){return y.map(w=>function(N){return new rr(Jt(N.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(w))}(t.orderBy));let u=null;t.limit&&(u=function(y){let w;return w=typeof y=="object"?y.value:y,ws(w)?null:w}(t.limit));let h=null;t.startAt&&(h=function(y){const w=!!y.before,C=y.values||[];return new cs(C,w)}(t.startAt));let d=null;return t.endAt&&(d=function(y){const w=!y.before,C=y.values||[];return new cs(C,w)}(t.endAt)),Yg(e,s,a,o,u,"F",h,d)}function D_(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return x(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function oh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Jt(t.unaryFilter.field);return re.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Jt(t.unaryFilter.field);return re.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Jt(t.unaryFilter.field);return re.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Jt(t.unaryFilter.field);return re.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return x(61313);default:return x(60726)}}(n):n.fieldFilter!==void 0?function(t){return re.create(Jt(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return x(58110);default:return x(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Oe.create(t.compositeFilter.filters.map(r=>oh(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return x(1026)}}(t.compositeFilter.op))}(n):x(30097,{filter:n})}function O_(n){return I_[n]}function M_(n){return w_[n]}function L_(n){return v_[n]}function Xt(n){return{fieldPath:n.canonicalString()}}function Jt(n){return pe.fromServerFormat(n.fieldPath)}function ah(n){return n instanceof re?function(t){if(t.op==="=="){if(Oc(t.value))return{unaryFilter:{field:Xt(t.field),op:"IS_NAN"}};if(Dc(t.value))return{unaryFilter:{field:Xt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Oc(t.value))return{unaryFilter:{field:Xt(t.field),op:"IS_NOT_NAN"}};if(Dc(t.value))return{unaryFilter:{field:Xt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xt(t.field),op:M_(t.op),value:t.value}}}(n):n instanceof Oe?function(t){const r=t.getFilters().map(s=>ah(s));return r.length===1?r[0]:{compositeFilter:{op:L_(t.op),filters:r}}}(n):x(54877,{filter:n})}function x_(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function ch(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class lt{constructor(e,t,r,s,o=F.min(),a=F.min(),u=me.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(e){return new lt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new lt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new lt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new lt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class F_{constructor(e){this.yt=e}}function U_(n){const e=N_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?us(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class B_{constructor(){this.Cn=new q_}addToCollectionParentIndex(e,t){return this.Cn.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(_t.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(_t.min())}updateCollectionGroup(e,t,r){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class q_{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new ce(Y.comparator),o=!s.has(r);return this.index[t]=s.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ce(Y.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Kc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},uh=41943040;class Ae{static withCacheSize(e){return new Ae(e,Ae.DEFAULT_COLLECTION_PERCENTILE,Ae.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */Ae.DEFAULT_COLLECTION_PERCENTILE=10,Ae.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ae.DEFAULT=new Ae(uh,Ae.DEFAULT_COLLECTION_PERCENTILE,Ae.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ae.DISABLED=new Ae(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
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
 */class dn{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new dn(0)}static cr(){return new dn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Qc="LruGarbageCollector",j_=1048576;function Yc([n,e],[t,r]){const s=j(n,t);return s===0?j(e,r):s}class $_{constructor(e){this.Ir=e,this.buffer=new ce(Yc),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Yc(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class z_{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){D(Qc,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){En(t)?D(Qc,"Ignoring IndexedDB error during garbage collection: ",t):await yn(t)}await this.Vr(3e5)})}}class H_{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return P.resolve(Is.ce);const r=new $_(t);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(Kc)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Kc):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,s,o,a,u,h,d;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(y=>(y>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),s=this.params.maximumSequenceNumbersToCollect):s=y,a=Date.now(),this.nthSequenceNumber(e,s))).next(y=>(r=y,u=Date.now(),this.removeTargets(e,r,t))).next(y=>(o=y,h=Date.now(),this.removeOrphanedDocuments(e,r))).next(y=>(d=Date.now(),Qt()<=q.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${o} targets in `+(h-u)+`ms
	Removed ${y} documents in `+(d-h)+`ms
Total Duration: ${d-p}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:y})))}}function W_(n,e){return new H_(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class G_{constructor(){this.changes=new zt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ee.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?P.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
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
 *//**
 * @license
 * Copyright 2022 Google LLC
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
 */class K_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Q_{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Kn(r.mutation,s,Ce.empty(),J.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,$()).next(()=>r))}getLocalViewOfDocuments(e,t,r=$()){const s=Mt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(o=>{let a=qn();return o.forEach((u,h)=>{a=a.insert(u,h.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Mt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,$()))}populateOverlays(e,t,r){const s=[];return r.forEach(o=>{t.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(e,s).next(o=>{o.forEach((a,u)=>{t.set(a,u)})})}computeViews(e,t,r,s){let o=Xe();const a=Gn(),u=function(){return Gn()}();return t.forEach((h,d)=>{const p=r.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof St)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),Kn(p.mutation,d,p.mutation.getFieldMask(),J.now())):a.set(d.key,Ce.empty())}),this.recalculateAndSaveOverlays(e,o).next(h=>(h.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>u.set(d,new K_(p,a.get(d)??null))),u))}recalculateAndSaveOverlays(e,t){const r=Gn();let s=new Z((a,u)=>a-u),o=$();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const u of a)u.keys().forEach(h=>{const d=t.get(h);if(d===null)return;let p=r.get(h)||Ce.empty();p=u.applyToLocalView(d,p),r.set(h,p);const y=(s.get(u.batchId)||$()).add(h);s=s.insert(u.batchId,y)})}).next(()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),d=h.key,p=h.value,y=Hl();p.forEach(w=>{if(!o.has(w)){const C=Xl(t.get(w),r.get(w));C!==null&&y.set(w,C),o=o.add(w)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,y))}return P.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return M.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Bl(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-o.size):P.resolve(Mt());let u=Zn,h=o;return a.next(d=>P.forEach(d,(p,y)=>(u<y.largestBatchId&&(u=y.largestBatchId),o.get(p)?P.resolve():this.remoteDocumentCache.getEntry(e,p).next(w=>{h=h.insert(p,w)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,h,d,$())).next(p=>({batchId:u,changes:zl(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new M(t)).next(r=>{let s=qn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const o=t.collectionGroup;let a=qn();return this.indexManager.getCollectionParents(e,o).next(u=>P.forEach(u,h=>{const d=function(y,w){return new Tn(w,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(p=>{p.forEach((y,w)=>{a=a.insert(y,w)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,s))).next(a=>{o.forEach((h,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,Ee.newInvalidDocument(p)))});let u=qn();return a.forEach((h,d)=>{const p=o.get(h);p!==void 0&&Kn(p.mutation,d,Ce.empty(),J.now()),Rs(t,d)&&(u=u.insert(h,d))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Y_{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return P.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:qe(s.createTime)}}(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(s){return{name:s.name,query:U_(s.bundledQuery),readTime:qe(s.readTime)}}(t)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class X_{constructor(){this.overlays=new Z(M.comparator),this.qr=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Mt();return P.forEach(t,s=>this.getOverlay(e,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,o)=>{this.St(e,t,o)}),P.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.qr.delete(r)),P.resolve()}getOverlaysForCollection(e,t,r){const s=Mt(),o=t.length+1,a=new M(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,d=h.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return P.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let o=new Z((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=o.get(d.largestBatchId);p===null&&(p=Mt(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const u=Mt(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,p)=>u.set(d,p)),!(u.size()>=s)););return P.resolve(u)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new m_(t,r));let o=this.qr.get(t);o===void 0&&(o=$(),this.qr.set(t,o)),this.qr.set(t,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class J_{constructor(){this.sessionToken=me.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class go{constructor(){this.Qr=new ce(he.$r),this.Ur=new ce(he.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new he(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Gr(new he(e,t))}zr(e,t){e.forEach(r=>this.removeReference(r,t))}jr(e){const t=new M(new Y([])),r=new he(t,e),s=new he(t,e+1),o=[];return this.Ur.forEachInRange([r,s],a=>{this.Gr(a),o.push(a.key)}),o}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new M(new Y([])),r=new he(t,e),s=new he(t,e+1);let o=$();return this.Ur.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(e){const t=new he(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class he{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return M.comparator(e.key,t.key)||j(e.Yr,t.Yr)}static Kr(e,t){return j(e.Yr,t.Yr)||M.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Z_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new ce(he.$r)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new p_(o,t,r,s);this.mutationQueue.push(a);for(const u of s)this.Zr=this.Zr.add(new he(u.key,o)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return P.resolve(a)}lookupMutationBatch(e,t){return P.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ei(r),o=s<0?0:s;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?io:this.tr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new he(t,0),s=new he(t,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([r,s],a=>{const u=this.Xr(a.Yr);o.push(u)}),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ce(j);return t.forEach(s=>{const o=new he(s,0),a=new he(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,a],u=>{r=r.add(u.Yr)})}),P.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let o=r;M.isDocumentKey(o)||(o=o.child(""));const a=new he(new M(o),0);let u=new ce(j);return this.Zr.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(u=u.add(h.Yr)),!0)},a),P.resolve(this.ti(u))}ti(e){const t=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){G(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return P.forEach(t.mutations,s=>{const o=new he(s.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,t){const r=new he(t,0),s=this.Zr.firstAfterOrEqual(r);return P.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ey{constructor(e){this.ri=e,this.docs=function(){return new Z(M.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),o=s?s.size:0,a=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return P.resolve(r?r.document.mutableCopy():Ee.newInvalidDocument(t))}getEntries(e,t){let r=Xe();return t.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():Ee.newInvalidDocument(s))}),P.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let o=Xe();const a=t.path,u=new M(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:d,value:{document:p}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||bg(Cg(p),r)<=0||(s.has(p.key)||Rs(t,p))&&(o=o.insert(p.key,p.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(e,t,r,s){x(9500)}ii(e,t){return P.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new ty(this)}getSize(e){return P.resolve(this.size)}}class ty extends G_{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),P.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ny{constructor(e){this.persistence=e,this.si=new zt(t=>co(t),uo),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.oi=0,this._i=new go,this.targetCount=0,this.ai=dn.ur()}forEachTarget(e,t){return this.si.forEach((r,s)=>t(s)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),P.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new dn(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.Pr(t),P.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,r){let s=0;const o=[];return this.si.forEach((a,u)=>{u.sequenceNumber<=t&&r.get(u.targetId)===null&&(this.si.delete(a),o.push(this.removeMatchingKeysForTargetId(e,u.targetId)),s++)}),P.waitFor(o).next(()=>s)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return P.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),P.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const s=this.persistence.referenceDelegate,o=[];return s&&t.forEach(a=>{o.push(s.markPotentiallyOrphaned(e,a))}),P.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return P.resolve(r)}containsKey(e,t){return P.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class lh{constructor(e,t){this.ui={},this.overlays={},this.ci=new Is(0),this.li=!1,this.li=!0,this.hi=new J_,this.referenceDelegate=e(this),this.Pi=new ny(this),this.indexManager=new B_,this.remoteDocumentCache=function(s){return new ey(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new F_(t),this.Ii=new Y_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new X_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new Z_(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){D("MemoryPersistence","Starting transaction:",e);const s=new ry(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(o=>this.referenceDelegate.di(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Ai(e,t){return P.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,t)))}}class ry extends kg{constructor(e){super(),this.currentSequenceNumber=e}}class _o{constructor(e){this.persistence=e,this.Ri=new go,this.Vi=null}static mi(e){return new _o(e)}get fi(){if(this.Vi)return this.Vi;throw x(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),P.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),P.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(o=>this.fi.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.fi,r=>{const s=M.fromPath(r);return this.gi(e,s).next(o=>{o||t.removeEntry(s,F.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return P.or([()=>P.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class ds{constructor(e,t){this.persistence=e,this.pi=new zt(r=>Og(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=W_(this,t)}static mi(e,t){return new ds(e,t)}Ei(){}di(e){return P.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}wr(e){let t=0;return this.pr(e,r=>{t++}).next(()=>t)}pr(e,t){return P.forEach(this.pi,(r,s)=>this.br(e,r,s).next(o=>o?P.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ii(e,a=>this.br(e,a,t).next(u=>{u||(r++,o.removeEntry(a,F.min()))})).next(()=>o.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),P.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),P.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),P.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),P.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Gr(e.data.value)),t}br(e,t,r){return P.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return P.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class yo{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=s}static As(e,t){let r=$(),s=$();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new yo(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class sy{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class iy{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return Ud()?8:Ng(Te())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const o={result:null};return this.ys(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ws(e,t,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new sy;return this.Ss(e,t,a).next(u=>{if(o.result=u,this.Vs)return this.bs(e,t,a,u.size)})}).next(()=>o.result)}bs(e,t,r,s){return r.documentReadCount<this.fs?(Qt()<=q.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",Yt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),P.resolve()):(Qt()<=q.DEBUG&&D("QueryEngine","Query:",Yt(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Qt()<=q.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",Yt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Be(t))):P.resolve())}ys(e,t){if(Fc(t))return P.resolve(null);let r=Be(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=us(t,null,"F"),r=Be(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const a=$(...o);return this.ps.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,r).next(h=>{const d=this.Ds(t,u);return this.Cs(t,d,a,h.readTime)?this.ys(e,us(t,null,"F")):this.vs(e,d,t,h)}))})))}ws(e,t,r,s){return Fc(t)||s.isEqual(F.min())?P.resolve(null):this.ps.getDocuments(e,r).next(o=>{const a=this.Ds(t,o);return this.Cs(t,a,r,s)?P.resolve(null):(Qt()<=q.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Yt(t)),this.vs(e,a,t,Pg(s,Zn)).next(u=>u))})}Ds(e,t){let r=new ce(jl(e));return t.forEach((s,o)=>{Rs(e,o)&&(r=r.add(o))}),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ss(e,t,r){return Qt()<=q.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",Yt(t)),this.ps.getDocumentsMatchingQuery(e,t,_t.min(),r)}vs(e,t,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Eo="LocalStore",oy=3e8;class ay{constructor(e,t,r,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new Z(j),this.xs=new zt(o=>co(o),uo),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Q_(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function cy(n,e,t,r){return new ay(n,e,t,r)}async function hh(n,e){const t=U(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,t.Bs(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],u=[];let h=$();for(const d of s){a.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}for(const d of o){u.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}return t.localDocuments.getDocuments(r,h).next(d=>({Ls:d,removedBatchIds:a,addedBatchIds:u}))})})}function uy(n,e){const t=U(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),o=t.Ns.newChangeBuffer({trackRemovals:!0});return function(u,h,d,p){const y=d.batch,w=y.keys();let C=P.resolve();return w.forEach(N=>{C=C.next(()=>p.getEntry(h,N)).next(O=>{const V=d.docVersions.get(N);G(V!==null,48541),O.version.compareTo(V)<0&&(y.applyToRemoteDocument(O,d),O.isValidDocument()&&(O.setReadTime(d.commitVersion),p.addEntry(O)))})}),C.next(()=>u.mutationQueue.removeMutationBatch(h,y))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let h=$();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(h=h.add(u.batch.mutations[d].key));return h}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function dh(n){const e=U(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function ly(n,e){const t=U(n),r=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const u=[];e.targetChanges.forEach((p,y)=>{const w=s.get(y);if(!w)return;u.push(t.Pi.removeMatchingKeys(o,p.removedDocuments,y).next(()=>t.Pi.addMatchingKeys(o,p.addedDocuments,y)));let C=w.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(y)!==null?C=C.withResumeToken(me.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):p.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(p.resumeToken,r)),s=s.insert(y,C),function(O,V,W){return O.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=oy?!0:W.addedDocuments.size+W.modifiedDocuments.size+W.removedDocuments.size>0}(w,C,p)&&u.push(t.Pi.updateTargetData(o,C))});let h=Xe(),d=$();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(o,p))}),u.push(hy(o,a,e.documentUpdates).next(p=>{h=p.ks,d=p.qs})),!r.isEqual(F.min())){const p=t.Pi.getLastRemoteSnapshotVersion(o).next(y=>t.Pi.setTargetsMetadata(o,o.currentSequenceNumber,r));u.push(p)}return P.waitFor(u).next(()=>a.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(t.Ms=s,o))}function hy(n,e,t){let r=$(),s=$();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let a=Xe();return t.forEach((u,h)=>{const d=o.get(u);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),h.isNoDocument()&&h.version.isEqual(F.min())?(e.removeEntry(u,h.readTime),a=a.insert(u,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(h),a=a.insert(u,h)):D(Eo,"Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",h.version)}),{ks:a,qs:s}})}function dy(n,e){const t=U(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=io),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function fy(n,e){const t=U(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Pi.getTargetData(r,e).next(o=>o?(s=o,P.resolve(s)):t.Pi.allocateTargetId(r).next(a=>(s=new lt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r})}async function Bi(n,e,t){const r=U(n),s=r.Ms.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!En(a))throw a;D(Eo,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Xc(n,e,t){const r=U(n);let s=F.min(),o=$();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,p){const y=U(h),w=y.xs.get(p);return w!==void 0?P.resolve(y.Ms.get(w)):y.Pi.getTargetData(d,p)}(r,a,Be(e)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,u.targetId).next(h=>{o=h})}).next(()=>r.Fs.getDocumentsMatchingQuery(a,e,t?s:F.min(),t?o:$())).next(u=>(py(r,Jg(e),u),{documents:u,Qs:o})))}function py(n,e,t){let r=n.Os.get(e)||F.min();t.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Os.set(e,r)}class Jc{constructor(){this.activeTargetIds=s_()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class my{constructor(){this.Mo=new Jc,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Jc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class gy{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Zc="ConnectivityMonitor";class eu{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){D(Zc,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){D(Zc,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Br=null;function qi(){return Br===null?Br=function(){return 268435456+Math.round(2147483648*Math.random())}():Br++,"0x"+Br.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const _i="RestConnection",_y={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class yy{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===os?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,t,r,s,o){const a=qi(),u=this.zo(e,t.toUriEncodedString());D(_i,`Sending RPC '${e}' ${a}:`,u,r);const h={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(h,s,o);const{host:d}=new URL(u),p=pn(d);return this.Jo(e,u,h,r,p).then(y=>(D(_i,`Received RPC '${e}' ${a}: `,y),y),y=>{throw cn(_i,`RPC '${e}' ${a} failed with error: `,y,"url: ",u,"request:",r),y})}Ho(e,t,r,s,o,a){return this.Go(e,t,r,s,o)}jo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+_n}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,o)=>e[o]=s),r&&r.headers.forEach((s,o)=>e[o]=s)}zo(e,t){const r=_y[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ey{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const _e="WebChannelConnection";class Ty extends yy{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,o){const a=qi();return new Promise((u,h)=>{const d=new fl;d.setWithCredentials(!0),d.listenOnce(pl.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Wr.NO_ERROR:const y=d.getResponseJson();D(_e,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(y)),u(y);break;case Wr.TIMEOUT:D(_e,`RPC '${e}' ${a} timed out`),h(new k(S.DEADLINE_EXCEEDED,"Request time out"));break;case Wr.HTTP_ERROR:const w=d.getStatus();if(D(_e,`RPC '${e}' ${a} failed with status:`,w,"response text:",d.getResponseText()),w>0){let C=d.getResponseJson();Array.isArray(C)&&(C=C[0]);const N=C==null?void 0:C.error;if(N&&N.status&&N.message){const O=function(W){const z=W.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(z)>=0?z:S.UNKNOWN}(N.status);h(new k(O,N.message))}else h(new k(S.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new k(S.UNAVAILABLE,"Connection failed."));break;default:x(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{D(_e,`RPC '${e}' ${a} completed.`)}});const p=JSON.stringify(s);D(_e,`RPC '${e}' ${a} sending request:`,s),d.send(t,"POST",p,r,15)})}T_(e,t,r){const s=qi(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=_l(),u=gl(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.jo(h.initMessageHeaders,t,r),h.encodeInitMessageHeaders=!0;const p=o.join("");D(_e,`Creating RPC '${e}' stream ${s}: ${p}`,h);const y=a.createWebChannel(p,h);this.I_(y);let w=!1,C=!1;const N=new Ey({Yo:V=>{C?D(_e,`Not sending because RPC '${e}' stream ${s} is closed:`,V):(w||(D(_e,`Opening RPC '${e}' stream ${s} transport.`),y.open(),w=!0),D(_e,`RPC '${e}' stream ${s} sending:`,V),y.send(V))},Zo:()=>y.close()}),O=(V,W,z)=>{V.listen(W,K=>{try{z(K)}catch(ue){setTimeout(()=>{throw ue},0)}})};return O(y,Bn.EventType.OPEN,()=>{C||(D(_e,`RPC '${e}' stream ${s} transport opened.`),N.o_())}),O(y,Bn.EventType.CLOSE,()=>{C||(C=!0,D(_e,`RPC '${e}' stream ${s} transport closed`),N.a_(),this.E_(y))}),O(y,Bn.EventType.ERROR,V=>{C||(C=!0,cn(_e,`RPC '${e}' stream ${s} transport errored. Name:`,V.name,"Message:",V.message),N.a_(new k(S.UNAVAILABLE,"The operation could not be completed")))}),O(y,Bn.EventType.MESSAGE,V=>{var W;if(!C){const z=V.data[0];G(!!z,16349);const K=z,ue=(K==null?void 0:K.error)||((W=K[0])==null?void 0:W.error);if(ue){D(_e,`RPC '${e}' stream ${s} received error:`,ue);const Se=ue.status;let ie=function(_){const I=ne[_];if(I!==void 0)return Zl(I)}(Se),T=ue.message;ie===void 0&&(ie=S.INTERNAL,T="Unknown error status: "+Se+" with message "+ue.message),C=!0,N.a_(new k(ie,T)),y.close()}else D(_e,`RPC '${e}' stream ${s} received:`,z),N.u_(z)}}),O(u,ml.STAT_EVENT,V=>{V.stat===bi.PROXY?D(_e,`RPC '${e}' stream ${s} detected buffering proxy`):V.stat===bi.NOPROXY&&D(_e,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{N.__()},0),N}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function yi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function bs(n){return new A_(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class fh{constructor(e,t,r=1e3,s=1.5,o=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=s,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&D("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const tu="PersistentStream";class ph{constructor(e,t,r,s,o,a,u,h){this.Mi=e,this.S_=r,this.b_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new fh(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===S.RESOURCE_EXHAUSTED?(Ye(t.toString()),Ye("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===t&&this.G_(r,s)},r=>{e(()=>{const s=new k(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return D(tu,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(D(tu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Iy extends ph{constructor(e,t,r,s,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=o}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=P_(this.serializer,e),r=function(o){if(!("targetChange"in o))return F.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?F.min():a.readTime?qe(a.readTime):F.min()}(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=Ui(this.serializer),t.addTarget=function(o,a){let u;const h=a.target;if(u=Oi(h)?{documents:V_(o,h)}:{query:k_(o,h).ft},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=nh(o,a.resumeToken);const d=Li(o,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(F.min())>0){u.readTime=hs(o,a.snapshotVersion.toTimestamp());const d=Li(o,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,e);const r=D_(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=Ui(this.serializer),t.removeTarget=e,this.q_(t)}}class wy extends ph{constructor(e,t,r,s,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=o}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return G(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,G(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){G(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=b_(e.writeResults,e.commitTime),r=qe(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=Ui(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>C_(this.serializer,r))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class vy{}class Ay extends vy{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new k(S.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Go(e,xi(t,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new k(S.UNKNOWN,o.toString())})}Ho(e,t,r,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Ho(e,xi(t,r),s,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new k(S.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class Ry{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ye(t),this.aa=!1):D("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const jt="RemoteStore";class Sy{constructor(e,t,r,s,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo(a=>{r.enqueueAndForget(async()=>{Ht(this)&&(D(jt,"Restarting streams for network reachability change."),await async function(h){const d=U(h);d.Ea.add(4),await gr(d),d.Ra.set("Unknown"),d.Ea.delete(4),await Vs(d)}(this))})}),this.Ra=new Ry(r,s)}}async function Vs(n){if(Ht(n))for(const e of n.da)await e(!0)}async function gr(n){for(const e of n.da)await e(!1)}function mh(n,e){const t=U(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),vo(t)?wo(t):In(t).O_()&&Io(t,e))}function To(n,e){const t=U(n),r=In(t);t.Ia.delete(e),r.O_()&&gh(t,e),t.Ia.size===0&&(r.O_()?r.L_():Ht(t)&&t.Ra.set("Unknown"))}function Io(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(F.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}In(n).Y_(e)}function gh(n,e){n.Va.Ue(e),In(n).Z_(e)}function wo(n){n.Va=new T_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),In(n).start(),n.Ra.ua()}function vo(n){return Ht(n)&&!In(n).x_()&&n.Ia.size>0}function Ht(n){return U(n).Ea.size===0}function _h(n){n.Va=void 0}async function Py(n){n.Ra.set("Online")}async function Cy(n){n.Ia.forEach((e,t)=>{Io(n,e)})}async function by(n,e){_h(n),vo(n)?(n.Ra.ha(e),wo(n)):n.Ra.set("Unknown")}async function Vy(n,e,t){if(n.Ra.set("Online"),e instanceof th&&e.state===2&&e.cause)try{await async function(s,o){const a=o.cause;for(const u of o.targetIds)s.Ia.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.Ia.delete(u),s.Va.removeTarget(u))}(n,e)}catch(r){D(jt,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await fs(n,r)}else if(e instanceof Yr?n.Va.Ze(e):e instanceof eh?n.Va.st(e):n.Va.tt(e),!t.isEqual(F.min()))try{const r=await dh(n.localStore);t.compareTo(r)>=0&&await function(o,a){const u=o.Va.Tt(a);return u.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const p=o.Ia.get(d);p&&o.Ia.set(d,p.withResumeToken(h.resumeToken,a))}}),u.targetMismatches.forEach((h,d)=>{const p=o.Ia.get(h);if(!p)return;o.Ia.set(h,p.withResumeToken(me.EMPTY_BYTE_STRING,p.snapshotVersion)),gh(o,h);const y=new lt(p.target,h,d,p.sequenceNumber);Io(o,y)}),o.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(r){D(jt,"Failed to raise snapshot:",r),await fs(n,r)}}async function fs(n,e,t){if(!En(e))throw e;n.Ea.add(1),await gr(n),n.Ra.set("Offline"),t||(t=()=>dh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{D(jt,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Vs(n)})}function yh(n,e){return e().catch(t=>fs(n,t,e))}async function ks(n){const e=U(n),t=It(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:io;for(;ky(e);)try{const s=await dy(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,Ny(e,s)}catch(s){await fs(e,s)}Eh(e)&&Th(e)}function ky(n){return Ht(n)&&n.Ta.length<10}function Ny(n,e){n.Ta.push(e);const t=It(n);t.O_()&&t.X_&&t.ea(e.mutations)}function Eh(n){return Ht(n)&&!It(n).x_()&&n.Ta.length>0}function Th(n){It(n).start()}async function Dy(n){It(n).ra()}async function Oy(n){const e=It(n);for(const t of n.Ta)e.ea(t.mutations)}async function My(n,e,t){const r=n.Ta.shift(),s=fo.from(r,e,t);await yh(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await ks(n)}async function Ly(n,e){e&&It(n).X_&&await async function(r,s){if(function(a){return __(a)&&a!==S.ABORTED}(s.code)){const o=r.Ta.shift();It(r).B_(),await yh(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await ks(r)}}(n,e),Eh(n)&&Th(n)}async function nu(n,e){const t=U(n);t.asyncQueue.verifyOperationInProgress(),D(jt,"RemoteStore received new credentials");const r=Ht(t);t.Ea.add(3),await gr(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Vs(t)}async function xy(n,e){const t=U(n);e?(t.Ea.delete(2),await Vs(t)):e||(t.Ea.add(2),await gr(t),t.Ra.set("Unknown"))}function In(n){return n.ma||(n.ma=function(t,r,s){const o=U(t);return o.sa(),new Iy(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Xo:Py.bind(null,n),t_:Cy.bind(null,n),r_:by.bind(null,n),H_:Vy.bind(null,n)}),n.da.push(async e=>{e?(n.ma.B_(),vo(n)?wo(n):n.Ra.set("Unknown")):(await n.ma.stop(),_h(n))})),n.ma}function It(n){return n.fa||(n.fa=function(t,r,s){const o=U(t);return o.sa(),new wy(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:Dy.bind(null,n),r_:Ly.bind(null,n),ta:Oy.bind(null,n),na:My.bind(null,n)}),n.da.push(async e=>{e?(n.fa.B_(),await ks(n)):(await n.fa.stop(),n.Ta.length>0&&(D(jt,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ao{constructor(e,t,r,s,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new mt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,o){const a=Date.now()+r,u=new Ao(e,t,a,s,o);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ro(n,e){if(Ye("AsyncQueue",`${e}: ${n}`),En(n))return new k(S.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class rn{static emptySet(e){return new rn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||M.comparator(t.key,r.key):(t,r)=>M.comparator(t.key,r.key),this.keyedMap=qn(),this.sortedSet=new Z(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof rn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new rn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ru{constructor(){this.ga=new Z(M.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):x(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,r)=>{e.push(r)}),e}}class fn{constructor(e,t,r,s,o,a,u,h,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,o){const a=[];return t.forEach(u=>{a.push({type:0,doc:u})}),new fn(e,t,rn.emptySet(t),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&As(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Fy{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class Uy{constructor(){this.queries=su(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=U(t),o=s.queries;s.queries=su(),o.forEach((a,u)=>{for(const h of u.Sa)h.onError(r)})})(this,new k(S.ABORTED,"Firestore shutting down"))}}function su(){return new zt(n=>ql(n),As)}async function By(n,e){const t=U(n);let r=3;const s=e.query;let o=t.queries.get(s);o?!o.ba()&&e.Da()&&(r=2):(o=new Fy,r=e.Da()?0:1);try{switch(r){case 0:o.wa=await t.onListen(s,!0);break;case 1:o.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const u=Ro(a,`Initialization of query '${Yt(e.query)}' failed`);return void e.onError(u)}t.queries.set(s,o),o.Sa.push(e),e.va(t.onlineState),o.wa&&e.Fa(o.wa)&&So(t)}async function qy(n,e){const t=U(n),r=e.query;let s=3;const o=t.queries.get(r);if(o){const a=o.Sa.indexOf(e);a>=0&&(o.Sa.splice(a,1),o.Sa.length===0?s=e.Da()?0:1:!o.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function jy(n,e){const t=U(n);let r=!1;for(const s of e){const o=s.query,a=t.queries.get(o);if(a){for(const u of a.Sa)u.Fa(s)&&(r=!0);a.wa=s}}r&&So(t)}function $y(n,e,t){const r=U(n),s=r.queries.get(e);if(s)for(const o of s.Sa)o.onError(t);r.queries.delete(e)}function So(n){n.Ca.forEach(e=>{e.next()})}var ji,iu;(iu=ji||(ji={})).Ma="default",iu.Cache="cache";class zy{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new fn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=fn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ji.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ih{constructor(e){this.key=e}}class wh{constructor(e){this.key=e}}class Hy{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=$(),this.mutatedKeys=$(),this.eu=jl(e),this.tu=new rn(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new ru,s=t?t.tu:this.tu;let o=t?t.mutatedKeys:this.mutatedKeys,a=s,u=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,y)=>{const w=s.get(p),C=Rs(this.query,y)?y:null,N=!!w&&this.mutatedKeys.has(w.key),O=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let V=!1;w&&C?w.data.isEqual(C.data)?N!==O&&(r.track({type:3,doc:C}),V=!0):this.su(w,C)||(r.track({type:2,doc:C}),V=!0,(h&&this.eu(C,h)>0||d&&this.eu(C,d)<0)&&(u=!0)):!w&&C?(r.track({type:0,doc:C}),V=!0):w&&!C&&(r.track({type:1,doc:w}),V=!0,(h||d)&&(u=!0)),V&&(C?(a=a.add(C),o=O?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{tu:a,iu:r,Cs:u,mutatedKeys:o}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const o=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((p,y)=>function(C,N){const O=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return x(20277,{Rt:V})}};return O(C)-O(N)}(p.type,y.type)||this.eu(p.doc,y.doc)),this.ou(r),s=s??!1;const u=t&&!s?this._u():[],h=this.Xa.size===0&&this.current&&!s?1:0,d=h!==this.Za;return this.Za=h,a.length!==0||d?{snapshot:new fn(this.query,e.tu,o,a,e.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:u}:{au:u}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ru,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=$(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const t=[];return e.forEach(r=>{this.Xa.has(r)||t.push(new wh(r))}),this.Xa.forEach(r=>{e.has(r)||t.push(new Ih(r))}),t}cu(e){this.Ya=e.Qs,this.Xa=$();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return fn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Po="SyncEngine";class Wy{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Gy{constructor(e){this.key=e,this.hu=!1}}class Ky{constructor(e,t,r,s,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new zt(u=>ql(u),As),this.Iu=new Map,this.Eu=new Set,this.du=new Z(M.comparator),this.Au=new Map,this.Ru=new go,this.Vu={},this.mu=new Map,this.fu=dn.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Qy(n,e,t=!0){const r=Ch(n);let s;const o=r.Tu.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.lu()):s=await vh(r,e,t,!0),s}async function Yy(n,e){const t=Ch(n);await vh(t,e,!0,!1)}async function vh(n,e,t,r){const s=await fy(n.localStore,Be(e)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,t);let u;return r&&(u=await Xy(n,e,o,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&mh(n.remoteStore,s),u}async function Xy(n,e,t,r,s){n.pu=(y,w,C)=>async function(O,V,W,z){let K=V.view.ru(W);K.Cs&&(K=await Xc(O.localStore,V.query,!1).then(({documents:T})=>V.view.ru(T,K)));const ue=z&&z.targetChanges.get(V.targetId),Se=z&&z.targetMismatches.get(V.targetId)!=null,ie=V.view.applyChanges(K,O.isPrimaryClient,ue,Se);return au(O,V.targetId,ie.au),ie.snapshot}(n,y,w,C);const o=await Xc(n.localStore,e,!0),a=new Hy(e,o.Qs),u=a.ru(o.documents),h=mr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(u,n.isPrimaryClient,h);au(n,t,d.au);const p=new Wy(e,t,a);return n.Tu.set(e,p),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),d.snapshot}async function Jy(n,e,t){const r=U(n),s=r.Tu.get(e),o=r.Iu.get(s.targetId);if(o.length>1)return r.Iu.set(s.targetId,o.filter(a=>!As(a,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Bi(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&To(r.remoteStore,s.targetId),$i(r,s.targetId)}).catch(yn)):($i(r,s.targetId),await Bi(r.localStore,s.targetId,!0))}async function Zy(n,e){const t=U(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),To(t.remoteStore,r.targetId))}async function eE(n,e,t){const r=aE(n);try{const s=await function(a,u){const h=U(a),d=J.now(),p=u.reduce((C,N)=>C.add(N.key),$());let y,w;return h.persistence.runTransaction("Locally write mutations","readwrite",C=>{let N=Xe(),O=$();return h.Ns.getEntries(C,p).next(V=>{N=V,N.forEach((W,z)=>{z.isValidDocument()||(O=O.add(W))})}).next(()=>h.localDocuments.getOverlayedDocuments(C,N)).next(V=>{y=V;const W=[];for(const z of u){const K=d_(z,y.get(z.key).overlayedDocument);K!=null&&W.push(new St(z.key,K,Nl(K.value.mapValue),Ne.exists(!0)))}return h.mutationQueue.addMutationBatch(C,d,W,u)}).next(V=>{w=V;const W=V.applyToLocalDocumentSet(y,O);return h.documentOverlayCache.saveOverlays(C,V.batchId,W)})}).then(()=>({batchId:w.batchId,changes:zl(y)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,u,h){let d=a.Vu[a.currentUser.toKey()];d||(d=new Z(j)),d=d.insert(u,h),a.Vu[a.currentUser.toKey()]=d}(r,s.batchId,t),await _r(r,s.changes),await ks(r.remoteStore)}catch(s){const o=Ro(s,"Failed to persist write");t.reject(o)}}async function Ah(n,e){const t=U(n);try{const r=await ly(t.localStore,e);e.targetChanges.forEach((s,o)=>{const a=t.Au.get(o);a&&(G(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?G(a.hu,14607):s.removedDocuments.size>0&&(G(a.hu,42227),a.hu=!1))}),await _r(t,r,e)}catch(r){await yn(r)}}function ou(n,e,t){const r=U(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach((o,a)=>{const u=a.view.va(e);u.snapshot&&s.push(u.snapshot)}),function(a,u){const h=U(a);h.onlineState=u;let d=!1;h.queries.forEach((p,y)=>{for(const w of y.Sa)w.va(u)&&(d=!0)}),d&&So(h)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function tE(n,e,t){const r=U(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),o=s&&s.key;if(o){let a=new Z(M.comparator);a=a.insert(o,Ee.newNoDocument(o,F.min()));const u=$().add(o),h=new Cs(F.min(),new Map,new Z(j),a,u);await Ah(r,h),r.du=r.du.remove(o),r.Au.delete(e),Co(r)}else await Bi(r.localStore,e,!1).then(()=>$i(r,e,t)).catch(yn)}async function nE(n,e){const t=U(n),r=e.batch.batchId;try{const s=await uy(t.localStore,e);Sh(t,r,null),Rh(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await _r(t,s)}catch(s){await yn(s)}}async function rE(n,e,t){const r=U(n);try{const s=await function(a,u){const h=U(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return h.mutationQueue.lookupMutationBatch(d,u).next(y=>(G(y!==null,37113),p=y.keys(),h.mutationQueue.removeMutationBatch(d,y))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,p,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>h.localDocuments.getDocuments(d,p))})}(r.localStore,e);Sh(r,e,t),Rh(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await _r(r,s)}catch(s){await yn(s)}}function Rh(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function Sh(n,e,t){const r=U(n);let s=r.Vu[r.currentUser.toKey()];if(s){const o=s.get(e);o&&(t?o.reject(t):o.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function $i(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach(r=>{n.Ru.containsKey(r)||Ph(n,r)})}function Ph(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(To(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),Co(n))}function au(n,e,t){for(const r of t)r instanceof Ih?(n.Ru.addReference(r.key,e),sE(n,r)):r instanceof wh?(D(Po,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||Ph(n,r.key)):x(19791,{wu:r})}function sE(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(D(Po,"New document in limbo: "+t),n.Eu.add(r),Co(n))}function Co(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new M(Y.fromString(e)),r=n.fu.next();n.Au.set(r,new Gy(t)),n.du=n.du.insert(t,r),mh(n.remoteStore,new lt(Be(Ul(t.path)),r,"TargetPurposeLimboResolution",Is.ce))}}async function _r(n,e,t){const r=U(n),s=[],o=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((u,h)=>{a.push(r.pu(h,e,t).then(d=>{var p;if((d||t)&&r.isPrimaryClient){const y=d?!d.fromCache:(p=t==null?void 0:t.targetChanges.get(h.targetId))==null?void 0:p.current;r.sharedClientState.updateQueryState(h.targetId,y?"current":"not-current")}if(d){s.push(d);const y=yo.As(h.targetId,d);o.push(y)}}))}),await Promise.all(a),r.Pu.H_(s),await async function(h,d){const p=U(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>P.forEach(d,w=>P.forEach(w.Es,C=>p.persistence.referenceDelegate.addReference(y,w.targetId,C)).next(()=>P.forEach(w.ds,C=>p.persistence.referenceDelegate.removeReference(y,w.targetId,C)))))}catch(y){if(!En(y))throw y;D(Eo,"Failed to update sequence numbers: "+y)}for(const y of d){const w=y.targetId;if(!y.fromCache){const C=p.Ms.get(w),N=C.snapshotVersion,O=C.withLastLimboFreeSnapshotVersion(N);p.Ms=p.Ms.insert(w,O)}}}(r.localStore,o))}async function iE(n,e){const t=U(n);if(!t.currentUser.isEqual(e)){D(Po,"User change. New user:",e.toKey());const r=await hh(t.localStore,e);t.currentUser=e,function(o,a){o.mu.forEach(u=>{u.forEach(h=>{h.reject(new k(S.CANCELLED,a))})}),o.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await _r(t,r.Ls)}}function oE(n,e){const t=U(n),r=t.Au.get(e);if(r&&r.hu)return $().add(r.key);{let s=$();const o=t.Iu.get(e);if(!o)return s;for(const a of o){const u=t.Tu.get(a);s=s.unionWith(u.view.nu)}return s}}function Ch(n){const e=U(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ah.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=oE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=tE.bind(null,e),e.Pu.H_=jy.bind(null,e.eventManager),e.Pu.yu=$y.bind(null,e.eventManager),e}function aE(n){const e=U(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=nE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=rE.bind(null,e),e}class ps{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=bs(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return cy(this.persistence,new iy,e.initialUser,this.serializer)}Cu(e){return new lh(_o.mi,this.serializer)}Du(e){return new my}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ps.provider={build:()=>new ps};class cE extends ps{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){G(this.persistence.referenceDelegate instanceof ds,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new z_(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Ae.withCacheSize(this.cacheSizeBytes):Ae.DEFAULT;return new lh(r=>ds.mi(r,t),this.serializer)}}class zi{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ou(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=iE.bind(null,this.syncEngine),await xy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Uy}()}createDatastore(e){const t=bs(e.databaseInfo.databaseId),r=function(o){return new Ty(o)}(e.databaseInfo);return function(o,a,u,h){return new Ay(o,a,u,h)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,o,a,u){return new Sy(r,s,o,a,u)}(this.localStore,this.datastore,e.asyncQueue,t=>ou(this.syncEngine,t,0),function(){return eu.v()?new eu:new gy}())}createSyncEngine(e,t){return function(s,o,a,u,h,d,p){const y=new Ky(s,o,a,u,h,d);return p&&(y.gu=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const o=U(s);D(jt,"RemoteStore shutting down."),o.Ea.add(5),await gr(o),o.Aa.shutdown(),o.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}zi.provider={build:()=>new zi};/**
 * @license
 * Copyright 2020 Google LLC
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
 *//**
 * @license
 * Copyright 2017 Google LLC
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
 */class uE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Ye("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const wt="FirestoreClient";class lE{constructor(e,t,r,s,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=ye.UNAUTHENTICATED,this.clientId=so.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{D(wt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(D(wt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Ro(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ei(n,e){n.asyncQueue.verifyOperationInProgress(),D(wt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await hh(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function cu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await hE(n);D(wt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>nu(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>nu(e.remoteStore,s)),n._onlineComponents=e}async function hE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){D(wt,"Using user provided OfflineComponentProvider");try{await Ei(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===S.FAILED_PRECONDITION||s.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;cn("Error using user provided cache. Falling back to memory cache: "+t),await Ei(n,new ps)}}else D(wt,"Using default OfflineComponentProvider"),await Ei(n,new cE(void 0));return n._offlineComponents}async function bh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(D(wt,"Using user provided OnlineComponentProvider"),await cu(n,n._uninitializedComponentsProvider._online)):(D(wt,"Using default OnlineComponentProvider"),await cu(n,new zi))),n._onlineComponents}function dE(n){return bh(n).then(e=>e.syncEngine)}async function fE(n){const e=await bh(n),t=e.eventManager;return t.onListen=Qy.bind(null,e.syncEngine),t.onUnlisten=Jy.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Yy.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Zy.bind(null,e.syncEngine),t}function pE(n,e,t={}){const r=new mt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,d){const p=new uE({next:w=>{p.Nu(),a.enqueueAndForget(()=>qy(o,y)),w.fromCache&&h.source==="server"?d.reject(new k(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(w)},error:w=>d.reject(w)}),y=new zy(u,p,{includeMetadataChanges:!0,qa:!0});return By(o,y)}(await fE(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Vh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const uu=new Map;/**
 * @license
 * Copyright 2020 Google LLC
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
 */const kh="firestore.googleapis.com",lu=!0;class hu{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new k(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=kh,this.ssl=lu}else this.host=e.host,this.ssl=e.ssl??lu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=uh;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<j_)throw new k(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Sg("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Vh(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new k(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new k(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new k(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ns{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new k(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new k(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new gg;switch(r.type){case"firstParty":return new Tg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new k(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=uu.get(t);r&&(D("ComponentProvider","Removing Datastore"),uu.delete(t),r.terminate())}(this),Promise.resolve()}}function Nh(n,e,t,r={}){var d;n=qt(n,Ns);const s=pn(e),o=n._getSettings(),a={...o,emulatorOptions:n._getEmulatorOptions()},u=`${e}:${t}`;s&&(vu(`https://${u}`),Au("Firestore",!0)),o.host!==kh&&o.host!==u&&cn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:u,ssl:s,emulatorOptions:r};if(!Lt(h,a)&&(n._setSettings(h),r.mockUserToken)){let p,y;if(typeof r.mockUserToken=="string")p=r.mockUserToken,y=ye.MOCK_USER;else{p=Vd(r.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const w=r.mockUserToken.sub||r.mockUserToken.user_id;if(!w)throw new k(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new ye(w)}n._authCredentials=new _g(new El(p,y))}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Pt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Pt(this.firestore,e,this._query)}}class ae{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ae(this.firestore,e,this._key)}toJSON(){return{type:ae._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(fr(t,ae._jsonSchema))return new ae(e,r||null,new M(Y.fromString(t.referencePath)))}}ae._jsonSchemaVersion="firestore/documentReference/1.0",ae._jsonSchema={type:se("string",ae._jsonSchemaVersion),referencePath:se("string")};class gt extends Pt{constructor(e,t,r){super(e,t,Ul(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ae(this.firestore,null,new M(e))}withConverter(e){return new gt(this.firestore,e,this._path)}}function BE(n,e,...t){if(n=de(n),Tl("collection","path",e),n instanceof Ns){const r=Y.fromString(e,...t);return Ac(r),new gt(n,null,r)}{if(!(n instanceof ae||n instanceof gt))throw new k(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Y.fromString(e,...t));return Ac(r),new gt(n.firestore,null,r)}}function mE(n,e,...t){if(n=de(n),arguments.length===1&&(e=so.newId()),Tl("doc","path",e),n instanceof Ns){const r=Y.fromString(e,...t);return vc(r),new ae(n,null,new M(r))}{if(!(n instanceof ae||n instanceof gt))throw new k(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Y.fromString(e,...t));return vc(r),new ae(n.firestore,n instanceof gt?n.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const du="AsyncQueue";class fu{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new fh(this,"async_queue_retry"),this._c=()=>{const r=yi();r&&D(du,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=yi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=yi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new mt;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!En(e))throw e;D(du,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Ye("INTERNAL UNHANDLED ERROR: ",pu(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=Ao.createAndSchedule(this,e,t,r,o=>this.hc(o));return this.tc.push(s),s}uc(){this.nc&&x(47125,{Pc:pu(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function pu(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class yr extends Ns{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new fu,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new fu(e),this._firestoreClient=void 0,await e}}}function gE(n,e){const t=typeof n=="object"?n:Cu(),r=typeof n=="string"?n:os,s=Ki(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Cd("firestore");o&&Nh(s,...o)}return s}function Dh(n){if(n._terminated)throw new k(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||_E(n),n._firestoreClient}function _E(n){var r,s,o;const e=n._freezeSettings(),t=function(u,h,d,p){return new xg(u,h,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Vh(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)}(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new lE(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Ve{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ve(me.fromBase64String(e))}catch(t){throw new k(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ve(me.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ve._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(fr(e,Ve._jsonSchema))return Ve.fromBase64String(e.bytes)}}Ve._jsonSchemaVersion="firestore/bytes/1.0",Ve._jsonSchema={type:se("string",Ve._jsonSchemaVersion),bytes:se("string")};/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Ds{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new k(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Os{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class je{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new k(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new k(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return j(this._lat,e._lat)||j(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:je._jsonSchemaVersion}}static fromJSON(e){if(fr(e,je._jsonSchema))return new je(e.latitude,e.longitude)}}je._jsonSchemaVersion="firestore/geoPoint/1.0",je._jsonSchema={type:se("string",je._jsonSchemaVersion),latitude:se("number"),longitude:se("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class $e{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,e._values)}toJSON(){return{type:$e._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(fr(e,$e._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new $e(e.vectorValues);throw new k(S.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}$e._jsonSchemaVersion="firestore/vectorValue/1.0",$e._jsonSchema={type:se("string",$e._jsonSchemaVersion),vectorValues:se("object")};/**
 * @license
 * Copyright 2017 Google LLC
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
 */const yE=/^__.*__$/;class EE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new St(e,this.data,this.fieldMask,t,this.fieldTransforms):new pr(e,this.data,t,this.fieldTransforms)}}class Oh{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new St(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Mh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x(40011,{Ac:n})}}class bo{constructor(e,t,r,s,o,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Rc(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new bo({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return ms(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Mh(this.Ac)&&yE.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class TE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||bs(e)}Cc(e,t,r,s=!1){return new bo({Ac:e,methodName:t,Dc:r,path:pe.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Vo(n){const e=n._freezeSettings(),t=bs(n._databaseId);return new TE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function IE(n,e,t,r,s,o={}){const a=n.Cc(o.merge||o.mergeFields?2:0,e,t,s);No("Data must be an object, but it was:",a,r);const u=Lh(r,a);let h,d;if(o.merge)h=new Ce(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const y of o.mergeFields){const w=Hi(e,y,t);if(!a.contains(w))throw new k(S.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);Fh(p,w)||p.push(w)}h=new Ce(p),d=a.fieldTransforms.filter(y=>h.covers(y.field))}else h=null,d=a.fieldTransforms;return new EE(new Re(u),h,d)}class Ms extends Os{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ms}}class ko extends Os{_toFieldTransform(e){return new c_(e.path,new sr)}isEqual(e){return e instanceof ko}}function wE(n,e,t,r){const s=n.Cc(1,e,t);No("Data must be an object, but it was:",s,r);const o=[],a=Re.empty();Rt(r,(h,d)=>{const p=Do(e,h,t);d=de(d);const y=s.yc(p);if(d instanceof Ms)o.push(p);else{const w=Er(d,y);w!=null&&(o.push(p),a.set(p,w))}});const u=new Ce(o);return new Oh(a,u,s.fieldTransforms)}function vE(n,e,t,r,s,o){const a=n.Cc(1,e,t),u=[Hi(e,r,t)],h=[s];if(o.length%2!=0)throw new k(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<o.length;w+=2)u.push(Hi(e,o[w])),h.push(o[w+1]);const d=[],p=Re.empty();for(let w=u.length-1;w>=0;--w)if(!Fh(d,u[w])){const C=u[w];let N=h[w];N=de(N);const O=a.yc(C);if(N instanceof Ms)d.push(C);else{const V=Er(N,O);V!=null&&(d.push(C),p.set(C,V))}}const y=new Ce(d);return new Oh(p,y,a.fieldTransforms)}function AE(n,e,t,r=!1){return Er(t,n.Cc(r?4:3,e))}function Er(n,e){if(xh(n=de(n)))return No("Unsupported field value:",e,n),Lh(n,e);if(n instanceof Os)return function(r,s){if(!Mh(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const u of r){let h=Er(u,s.wc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,e)}return function(r,s){if((r=de(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return i_(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=J.fromDate(r);return{timestampValue:hs(s.serializer,o)}}if(r instanceof J){const o=new J(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:hs(s.serializer,o)}}if(r instanceof je)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ve)return{bytesValue:nh(s.serializer,r._byteString)};if(r instanceof ae){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:mo(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof $e)return function(a,u){return{mapValue:{fields:{[bl]:{stringValue:kl},[as]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw u.Sc("VectorValues must only contain numeric values.");return lo(u.serializer,d)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${Ts(r)}`)}(n,e)}function Lh(n,e){const t={};return vl(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Rt(n,(r,s)=>{const o=Er(s,e.mc(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function xh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof J||n instanceof je||n instanceof Ve||n instanceof ae||n instanceof Os||n instanceof $e)}function No(n,e,t){if(!xh(t)||!Il(t)){const r=Ts(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function Hi(n,e,t){if((e=de(e))instanceof Ds)return e._internalPath;if(typeof e=="string")return Do(n,e);throw ms("Field path arguments must be of type string or ",n,!1,void 0,t)}const RE=new RegExp("[~\\*/\\[\\]]");function Do(n,e,t){if(e.search(RE)>=0)throw ms(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ds(...e.split("."))._internalPath}catch{throw ms(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ms(n,e,t,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new k(S.INVALID_ARGUMENT,u+n+h)}function Fh(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Uh{constructor(e,t,r,s,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new ae(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new SE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ls("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class SE extends Uh{data(){return super.data()}}function Ls(n,e){return typeof e=="string"?Do(n,e):e instanceof Ds?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function PE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new k(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Oo{}class Mo extends Oo{}function qE(n,e,...t){let r=[];e instanceof Oo&&r.push(e),r=r.concat(t),function(o){const a=o.filter(h=>h instanceof Lo).length,u=o.filter(h=>h instanceof xs).length;if(a>1||a>0&&u>0)throw new k(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class xs extends Mo{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new xs(e,t,r)}_apply(e){const t=this._parse(e);return Bh(e._query,t),new Pt(e.firestore,e.converter,Mi(e._query,t))}_parse(e){const t=Vo(e.firestore);return function(o,a,u,h,d,p,y){let w;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new k(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){gu(y,p);const N=[];for(const O of y)N.push(mu(h,o,O));w={arrayValue:{values:N}}}else w=mu(h,o,y)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||gu(y,p),w=AE(u,a,y,p==="in"||p==="not-in");return re.create(d,p,w)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function jE(n,e,t){const r=e,s=Ls("where",n);return xs._create(s,r,t)}class Lo extends Oo{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Lo(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Oe.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,o){let a=s;const u=o.getFlattenedFilters();for(const h of u)Bh(a,h),a=Mi(a,h)}(e._query,t),new Pt(e.firestore,e.converter,Mi(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class xo extends Mo{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new xo(e,t)}_apply(e){const t=function(s,o,a){if(s.startAt!==null)throw new k(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new k(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new rr(o,a)}(e._query,this._field,this._direction);return new Pt(e.firestore,e.converter,function(s,o){const a=s.explicitOrderBy.concat([o]);return new Tn(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function $E(n,e="asc"){const t=e,r=Ls("orderBy",n);return xo._create(r,t)}class Fo extends Mo{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Fo(e,t,r)}_apply(e){return new Pt(e.firestore,e.converter,us(e._query,this._limit,this._limitType))}}function zE(n){return Fo._create("limit",n,"F")}function mu(n,e,t){if(typeof(t=de(t))=="string"){if(t==="")throw new k(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Bl(e)&&t.indexOf("/")!==-1)throw new k(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Y.fromString(t));if(!M.isDocumentKey(r))throw new k(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Nc(n,new M(r))}if(t instanceof ae)return Nc(n,t._key);throw new k(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ts(t)}.`)}function gu(n,e){if(!Array.isArray(n)||n.length===0)throw new k(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Bh(n,e){const t=function(s,o){for(const a of s)for(const u of a.getFlattenedFilters())if(o.indexOf(u.op)>=0)return u.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new k(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new k(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class CE{convertValue(e,t="none"){switch(Tt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return te(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Et(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw x(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Rt(e,(s,o)=>{r[s]=this.convertValue(o,t)}),r}convertVectorValue(e){var r,s,o;const t=(o=(s=(r=e.fields)==null?void 0:r[as].arrayValue)==null?void 0:s.values)==null?void 0:o.map(a=>te(a.doubleValue));return new $e(t)}convertGeoPoint(e){return new je(te(e.latitude),te(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=vs(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(er(e));default:return null}}convertTimestamp(e){const t=yt(e);return new J(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Y.fromString(e);G(ch(r),9688,{name:e});const s=new tr(r.get(1),r.get(3)),o=new M(r.popFirst(5));return s.isEqual(t)||Ye(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function bE(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class qr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class sn extends Uh{constructor(e,t,r,s,o,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Xr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Ls("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new k(S.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=sn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}sn._jsonSchemaVersion="firestore/documentSnapshot/1.0",sn._jsonSchema={type:se("string",sn._jsonSchemaVersion),bundleSource:se("string","DocumentSnapshot"),bundleName:se("string"),bundle:se("string")};class Xr extends sn{data(e={}){return super.data(e)}}class on{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new qr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Xr(this._firestore,this._userDataWriter,r.key,r,new qr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new k(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(u=>{const h=new Xr(s._firestore,s._userDataWriter,u.doc.key,u.doc,new qr(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>o||u.type!==3).map(u=>{const h=new Xr(s._firestore,s._userDataWriter,u.doc.key,u.doc,new qr(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),p=a.indexOf(u.doc.key)),{type:VE(u.type),doc:h,oldIndex:d,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new k(S.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=on._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=so.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(o=>{o._document!==null&&(t.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function VE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return x(61501,{type:n})}}on._jsonSchemaVersion="firestore/querySnapshot/1.0",on._jsonSchema={type:se("string",on._jsonSchemaVersion),bundleSource:se("string","QuerySnapshot"),bundleName:se("string"),bundle:se("string")};class kE extends CE{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ve(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ae(this.firestore,null,t)}}function HE(n){n=qt(n,Pt);const e=qt(n.firestore,yr),t=Dh(e),r=new kE(e);return PE(n._query),pE(t,n._query).then(s=>new on(e,r,n,s))}function WE(n,e,t,...r){n=qt(n,ae);const s=qt(n.firestore,yr),o=Vo(s);let a;return a=typeof(e=de(e))=="string"||e instanceof Ds?vE(o,"updateDoc",n._key,e,t,r):wE(o,"updateDoc",n._key,e),Uo(s,[a.toMutation(n._key,Ne.exists(!0))])}function GE(n){return Uo(qt(n.firestore,yr),[new ho(n._key,Ne.none())])}function KE(n,e){const t=qt(n.firestore,yr),r=mE(n),s=bE(n.converter,e);return Uo(t,[IE(Vo(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Ne.exists(!1))]).then(()=>r)}function Uo(n,e){return function(r,s){const o=new mt;return r.asyncQueue.enqueueAndForget(async()=>eE(await dE(r),s,o)),o.promise}(Dh(n),e)}function QE(){return new ko("serverTimestamp")}(function(e,t=!0){(function(s){_n=s})(mn),an(new xt("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),u=new yr(new yg(r.getProvider("auth-internal")),new Ig(a,r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new k(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new tr(d.options.projectId,p)}(a,s),a);return o={useFetchStreams:t,...o},u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),ft(Ec,Tc,e),ft(Ec,Tc,"esm2020")})();const NE={apiKey:"AIzaSyAjFi-wNkEiEFtjNuqfum2wz_Yc5_GBYEo",authDomain:"nomash-lib.firebaseapp.com",projectId:"nomash-lib",storageBucket:"nomash-lib.firebasestorage.app",messagingSenderId:"449484454483",appId:"1:449484454483:web:abbc93f19ce248e60464a6",measurementId:"G-DNHF03VXY5"},qh=Qa().length?Qa()[0]:Pu(NE),DE=pg(qh),OE=gE(qh);if(location.hostname==="localhost"||location.hostname==="127.0.0.1")try{Yu(DE,"http://127.0.0.1:9099"),Nh(OE,"127.0.0.1",8080)}catch{}export{DE as a,$E as b,ME as c,BE as d,OE as e,mE as f,HE as g,GE as h,KE as i,QE as j,FE as k,zE as l,xE as o,qE as q,LE as s,WE as u,jE as w};
