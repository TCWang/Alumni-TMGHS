import{x as I,C as P,f as M,F,P as q,N as V,n as J,g as A}from"./C5Tdpf0J.js";function $(t,i){if(typeof t!="string")throw new TypeError("argument str must be a string");const n={},e=i||{},r=e.decode||W;let o=0;for(;o<t.length;){const s=t.indexOf("=",o);if(s===-1)break;let c=t.indexOf(";",o);if(c===-1)c=t.length;else if(c<s){o=t.lastIndexOf(";",s-1)+1;continue}const u=t.slice(o,s).trim();if(e!=null&&e.filter&&!(e!=null&&e.filter(u))){o=c+1;continue}if(n[u]===void 0){let a=t.slice(s+1,c).trim();a.codePointAt(0)===34&&(a=a.slice(1,-1)),n[u]=X(a,r)}o=c+1}return n}function W(t){return t.includes("%")?decodeURIComponent(t):t}function X(t,i){try{return i(t)}catch{return t}}const x=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function O(t,i,n){const e=n||{},r=e.encode||encodeURIComponent;if(typeof r!="function")throw new TypeError("option encode is invalid");if(!x.test(t))throw new TypeError("argument name is invalid");const o=r(i);if(o&&!x.test(o))throw new TypeError("argument val is invalid");let s=t+"="+o;if(e.maxAge!==void 0&&e.maxAge!==null){const c=e.maxAge-0;if(Number.isNaN(c)||!Number.isFinite(c))throw new TypeError("option maxAge is invalid");s+="; Max-Age="+Math.floor(c)}if(e.domain){if(!x.test(e.domain))throw new TypeError("option domain is invalid");s+="; Domain="+e.domain}if(e.path){if(!x.test(e.path))throw new TypeError("option path is invalid");s+="; Path="+e.path}if(e.expires){if(!Y(e.expires)||Number.isNaN(e.expires.valueOf()))throw new TypeError("option expires is invalid");s+="; Expires="+e.expires.toUTCString()}if(e.httpOnly&&(s+="; HttpOnly"),e.secure&&(s+="; Secure"),e.priority)switch(typeof e.priority=="string"?e.priority.toLowerCase():e.priority){case"low":{s+="; Priority=Low";break}case"medium":{s+="; Priority=Medium";break}case"high":{s+="; Priority=High";break}default:throw new TypeError("option priority is invalid")}if(e.sameSite)switch(typeof e.sameSite=="string"?e.sameSite.toLowerCase():e.sameSite){case!0:{s+="; SameSite=Strict";break}case"lax":{s+="; SameSite=Lax";break}case"strict":{s+="; SameSite=Strict";break}case"none":{s+="; SameSite=None";break}default:throw new TypeError("option sameSite is invalid")}return e.partitioned&&(s+="; Partitioned"),s}function Y(t){return Object.prototype.toString.call(t)==="[object Date]"||t instanceof Date}const j=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function E(t,i){i?i={...j,...i}:i=j;const n=L(i);return n.dispatch(t),n.toString()}const G=Object.freeze(["prototype","__proto__","constructor"]);function L(t){let i="",n=new Map;const e=r=>{i+=r};return{toString(){return i},getContext(){return n},dispatch(r){return t.replacer&&(r=t.replacer(r)),this[r===null?"null":typeof r](r)},object(r){if(r&&typeof r.toJSON=="function")return this.object(r.toJSON());const o=Object.prototype.toString.call(r);let s="";const c=o.length;c<10?s="unknown:["+o+"]":s=o.slice(8,c-1),s=s.toLowerCase();let u=null;if((u=n.get(r))===void 0)n.set(r,n.size);else return this.dispatch("[CIRCULAR:"+u+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(r))return e("buffer:"),e(r.toString("utf8"));if(s!=="object"&&s!=="function"&&s!=="asyncfunction")this[s]?this[s](r):t.ignoreUnknown||this.unkown(r,s);else{let a=Object.keys(r);t.unorderedObjects&&(a=a.sort());let f=[];t.respectType!==!1&&!N(r)&&(f=G),t.excludeKeys&&(a=a.filter(l=>!t.excludeKeys(l)),f=f.filter(l=>!t.excludeKeys(l))),e("object:"+(a.length+f.length)+":");const d=l=>{this.dispatch(l),e(":"),t.excludeValues||this.dispatch(r[l]),e(",")};for(const l of a)d(l);for(const l of f)d(l)}},array(r,o){if(o=o===void 0?t.unorderedArrays!==!1:o,e("array:"+r.length+":"),!o||r.length<=1){for(const u of r)this.dispatch(u);return}const s=new Map,c=r.map(u=>{const a=L(t);a.dispatch(u);for(const[f,d]of a.getContext())s.set(f,d);return a.toString()});return n=s,c.sort(),this.array(c,!1)},date(r){return e("date:"+r.toJSON())},symbol(r){return e("symbol:"+r.toString())},unkown(r,o){if(e(o),!!r&&(e(":"),r&&typeof r.entries=="function"))return this.array(Array.from(r.entries()),!0)},error(r){return e("error:"+r.toString())},boolean(r){return e("bool:"+r)},string(r){e("string:"+r.length+":"),e(r)},function(r){e("fn:"),N(r)?this.dispatch("[native]"):this.dispatch(r.toString()),t.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(r.name)),t.respectFunctionProperties&&this.object(r)},number(r){return e("number:"+r)},xml(r){return e("xml:"+r.toString())},null(){return e("Null")},undefined(){return e("Undefined")},regexp(r){return e("regex:"+r.toString())},uint8array(r){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(r))},uint8clampedarray(r){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(r))},int8array(r){return e("int8array:"),this.dispatch(Array.prototype.slice.call(r))},uint16array(r){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(r))},int16array(r){return e("int16array:"),this.dispatch(Array.prototype.slice.call(r))},uint32array(r){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(r))},int32array(r){return e("int32array:"),this.dispatch(Array.prototype.slice.call(r))},float32array(r){return e("float32array:"),this.dispatch(Array.prototype.slice.call(r))},float64array(r){return e("float64array:"),this.dispatch(Array.prototype.slice.call(r))},arraybuffer(r){return e("arraybuffer:"),this.dispatch(new Uint8Array(r))},url(r){return e("url:"+r.toString())},map(r){e("map:");const o=[...r];return this.array(o,t.unorderedSets!==!1)},set(r){e("set:");const o=[...r];return this.array(o,t.unorderedSets!==!1)},file(r){return e("file:"),this.dispatch([r.name,r.size,r.type,r.lastModfied])},blob(){if(t.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return e("domwindow")},bigint(r){return e("bigint:"+r.toString())},process(){return e("process")},timer(){return e("timer")},pipe(){return e("pipe")},tcp(){return e("tcp")},udp(){return e("udp")},tty(){return e("tty")},statwatcher(){return e("statwatcher")},securecontext(){return e("securecontext")},connection(){return e("connection")},zlib(){return e("zlib")},context(){return e("context")},nodescript(){return e("nodescript")},httpparser(){return e("httpparser")},dataview(){return e("dataview")},signal(){return e("signal")},fsevent(){return e("fsevent")},tlswrap(){return e("tlswrap")}}}const U="[native code] }",Q=U.length;function N(t){return typeof t!="function"?!1:Function.prototype.toString.call(t).slice(-Q)===U}var Z=Object.defineProperty,ee=(t,i,n)=>i in t?Z(t,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[i]=n,b=(t,i,n)=>(ee(t,typeof i!="symbol"?i+"":i,n),n);class y{constructor(i,n){b(this,"words"),b(this,"sigBytes"),i=this.words=i||[],this.sigBytes=n===void 0?i.length*4:n}toString(i){return(i||te).stringify(this)}concat(i){if(this.clamp(),this.sigBytes%4)for(let n=0;n<i.sigBytes;n++){const e=i.words[n>>>2]>>>24-n%4*8&255;this.words[this.sigBytes+n>>>2]|=e<<24-(this.sigBytes+n)%4*8}else for(let n=0;n<i.sigBytes;n+=4)this.words[this.sigBytes+n>>>2]=i.words[n>>>2];return this.sigBytes+=i.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new y([...this.words])}}const te={stringify(t){const i=[];for(let n=0;n<t.sigBytes;n++){const e=t.words[n>>>2]>>>24-n%4*8&255;i.push((e>>>4).toString(16),(e&15).toString(16))}return i.join("")}},re={stringify(t){const i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=[];for(let e=0;e<t.sigBytes;e+=3){const r=t.words[e>>>2]>>>24-e%4*8&255,o=t.words[e+1>>>2]>>>24-(e+1)%4*8&255,s=t.words[e+2>>>2]>>>24-(e+2)%4*8&255,c=r<<16|o<<8|s;for(let u=0;u<4&&e*8+u*6<t.sigBytes*8;u++)n.push(i.charAt(c>>>6*(3-u)&63))}return n.join("")}},ne={parse(t){const i=t.length,n=[];for(let e=0;e<i;e++)n[e>>>2]|=(t.charCodeAt(e)&255)<<24-e%4*8;return new y(n,i)}},ie={parse(t){return ne.parse(unescape(encodeURIComponent(t)))}};class se{constructor(){b(this,"_data",new y),b(this,"_nDataBytes",0),b(this,"_minBufferSize",0),b(this,"blockSize",512/32)}reset(){this._data=new y,this._nDataBytes=0}_append(i){typeof i=="string"&&(i=ie.parse(i)),this._data.concat(i),this._nDataBytes+=i.sigBytes}_doProcessBlock(i,n){}_process(i){let n,e=this._data.sigBytes/(this.blockSize*4);i?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const r=e*this.blockSize,o=Math.min(r*4,this._data.sigBytes);if(r){for(let s=0;s<r;s+=this.blockSize)this._doProcessBlock(this._data.words,s);n=this._data.words.splice(0,r),this._data.sigBytes-=o}return new y(n,o)}}class oe extends se{update(i){return this._append(i),this._process(),this}finalize(i){i&&this._append(i)}}var ae=Object.defineProperty,ce=(t,i,n)=>i in t?ae(t,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[i]=n,ue=(t,i,n)=>(ce(t,i+"",n),n);const R=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],le=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],m=[];class fe extends oe{constructor(){super(...arguments),ue(this,"_hash",new y([...R]))}reset(){super.reset(),this._hash=new y([...R])}_doProcessBlock(i,n){const e=this._hash.words;let r=e[0],o=e[1],s=e[2],c=e[3],u=e[4],a=e[5],f=e[6],d=e[7];for(let l=0;l<64;l++){if(l<16)m[l]=i[n+l]|0;else{const v=m[l-15],H=(v<<25|v>>>7)^(v<<14|v>>>18)^v>>>3,_=m[l-2],K=(_<<15|_>>>17)^(_<<13|_>>>19)^_>>>10;m[l]=H+m[l-7]+K+m[l-16]}const k=u&a^~u&f,p=r&o^r&s^o&s,g=(r<<30|r>>>2)^(r<<19|r>>>13)^(r<<10|r>>>22),w=(u<<26|u>>>6)^(u<<21|u>>>11)^(u<<7|u>>>25),B=d+w+k+le[l]+m[l],S=g+p;d=f,f=a,a=u,u=c+B|0,c=s,s=o,o=r,r=B+S|0}e[0]=e[0]+r|0,e[1]=e[1]+o|0,e[2]=e[2]+s|0,e[3]=e[3]+c|0,e[4]=e[4]+u|0,e[5]=e[5]+a|0,e[6]=e[6]+f|0,e[7]=e[7]+d|0}finalize(i){super.finalize(i);const n=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(n/4294967296),this._data.words[(e+64>>>9<<4)+15]=n,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function de(t){return new fe().finalize(t).toString(re)}function be(t,i={}){const n=typeof t=="string"?t:E(t,i);return de(n).slice(0,10)}function he(t,i,n={}){return t===i||E(t,n)===E(i,n)}function h(t){if(typeof t!="object")return t;var i,n,e=Object.prototype.toString.call(t);if(e==="[object Object]"){if(t.constructor!==Object&&typeof t.constructor=="function"){n=new t.constructor;for(i in t)t.hasOwnProperty(i)&&n[i]!==t[i]&&(n[i]=h(t[i]))}else{n={};for(i in t)i==="__proto__"?Object.defineProperty(n,i,{value:h(t[i]),configurable:!0,enumerable:!0,writable:!0}):n[i]=h(t[i])}return n}if(e==="[object Array]"){for(i=t.length,n=Array(i);i--;)n[i]=h(t[i]);return n}return e==="[object Set]"?(n=new Set,t.forEach(function(r){n.add(h(r))}),n):e==="[object Map]"?(n=new Map,t.forEach(function(r,o){n.set(h(o),h(r))}),n):e==="[object Date]"?new Date(+t):e==="[object RegExp]"?(n=new RegExp(t.source,t.flags),n.lastIndex=t.lastIndex,n):e==="[object DataView]"?new t.constructor(h(t.buffer)):e==="[object ArrayBuffer]"?t.slice(0):e.slice(-6)==="Array]"?new t.constructor(t):t}const pe={path:"/",watch:!0,decode:t=>V(decodeURIComponent(t)),encode:t=>encodeURIComponent(typeof t=="string"?t:JSON.stringify(t))},T=window.cookieStore;function C(t,i){var u;const n={...pe,...i};n.filter??(n.filter=a=>a===t);const e=z(n)||{};let r;n.maxAge!==void 0?r=n.maxAge*1e3:n.expires&&(r=n.expires.getTime()-Date.now());const o=r!==void 0&&r<=0,s=h(o?void 0:e[t]??((u=n.default)==null?void 0:u.call(n))),c=r&&!o?we(s,r,n.watch&&n.watch!=="shallow"):I(s);{let a=null;try{!T&&typeof BroadcastChannel<"u"&&(a=new BroadcastChannel(`nuxt:cookies:${t}`))}catch{}const f=()=>{n.readonly||he(c.value,e[t])||(ge(t,c.value,n),e[t]=h(c.value),a==null||a.postMessage({value:n.encode(c.value)}))},d=p=>{var w;const g=p.refresh?(w=z(n))==null?void 0:w[t]:n.decode(p.value);l=!0,c.value=g,e[t]=h(g),J(()=>{l=!1})};let l=!1;const k=!!F();if(k&&P(()=>{l=!0,f(),a==null||a.close()}),T){const p=g=>{const w=g.changed.find(S=>S.name===t),B=g.deleted.find(S=>S.name===t);w&&d({value:w.value}),B&&d({value:null})};T.addEventListener("change",p),k&&P(()=>T.removeEventListener("change",p))}else a&&(a.onmessage=({data:p})=>d(p));n.watch?M(c,()=>{l||f()},{deep:n.watch!=="shallow"}):f()}return c}function z(t={}){return $(document.cookie,t)}function ye(t,i,n={}){return i==null?O(t,i,{...n,maxAge:-1}):O(t,i,n)}function ge(t,i,n={}){document.cookie=ye(t,i,n)}const D=2147483647;function we(t,i,n){let e,r,o=0;const s=n?I(t):{value:t};return F()&&P(()=>{r==null||r(),clearTimeout(e)}),q((c,u)=>{n&&(r=M(s,u));function a(){o=0,clearTimeout(e);const f=i-o,d=f<D?f:D;e=setTimeout(()=>{if(o+=d,o<i)return a();s.value=void 0,u()},d)}return{get(){return c(),s.value},set(f){a(),s.value=f,u()}}})}const Se=()=>({isEnabled:()=>{const e=A().query;return Object.prototype.hasOwnProperty.call(e,"preview")&&!e.preview?!1:!!(e.preview||C("previewToken").value||sessionStorage.getItem("previewToken"))},getPreviewToken:()=>C("previewToken").value||sessionStorage.getItem("previewToken")||void 0,setPreviewToken:e=>{C("previewToken").value=e,A().query.preview=e||"",e?sessionStorage.setItem("previewToken",e):sessionStorage.removeItem("previewToken"),window.location.reload()}});export{be as h,Se as u};
