(function(e){function t(t){for(var r,a,c=t[0],i=t[1],s=t[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-033cb00f":"371b30ba","chunk-2d224962":"72e44580","chunk-61dd4b5a":"f1fb9fde","chunk-3a5b1d4c":"99606d1d","chunk-ebc89ce8":"78375aae"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-033cb00f":1,"chunk-61dd4b5a":1,"chunk-3a5b1d4c":1,"chunk-ebc89ce8":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-033cb00f":"ffcf72b3","chunk-2d224962":"31d6cfe0","chunk-61dd4b5a":"def590ee","chunk-3a5b1d4c":"b2881c3c","chunk-ebc89ce8":"3e922ebb"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],p.parentNode.removeChild(p),n(u)},p.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/static/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var p=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("router-view")],1)],1)},o=[],u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",{staticClass:"text-center"},[r("v-col",{attrs:{cols:"12"}},[r("v-img",{staticClass:"my-3",attrs:{src:n("9b19"),contain:"",height:"200"}})],1),r("v-col",{staticClass:"mb-4"},[r("h1",{staticClass:"display-2 font-weight-bold mb-3"},[e._v(" Welcome to Vuetify ")]),r("p",{staticClass:"subheading font-weight-regular"},[e._v(" For help and collaboration with other Vuetify developers, "),r("br"),e._v("please join our online "),r("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[e._v("Discord Community")])])]),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v(" What's next? ")]),r("v-row",{attrs:{justify:"center"}},e._l(e.whatsNext,(function(t,n){return r("a",{key:n,staticClass:"subheading mx-3",attrs:{href:t.href,target:"_blank"}},[e._v(" "+e._s(t.text)+" ")])})),0)],1),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v(" Important Links ")]),r("v-row",{attrs:{justify:"center"}},e._l(e.importantLinks,(function(t,n){return r("a",{key:n,staticClass:"subheading mx-3",attrs:{href:t.href,target:"_blank"}},[e._v(" "+e._s(t.text)+" ")])})),0)],1),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v(" Ecosystem ")]),r("v-row",{attrs:{justify:"center"}},e._l(e.ecosystem,(function(t,n){return r("a",{key:n,staticClass:"subheading mx-3",attrs:{href:t.href,target:"_blank"}},[e._v(" "+e._s(t.text)+" ")])})),0)],1)],1)],1)},c=[],i={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},s=i,l=n("2877"),f=n("6544"),p=n.n(f),h=n("62ad"),m=n("a523"),d=n("adda"),g=n("0fd9"),v=Object(l["a"])(s,u,c,!1,null,null,null),b=v.exports;p()(v,{VCol:h["a"],VContainer:m["a"],VImg:d["a"],VRow:g["a"]});var w={name:"App",components:{HelloWorld:b},data:function(){return{}}},x=w,k=n("7496"),y=n("f6c4"),R=Object(l["a"])(x,a,o,!1,null,null,null),_=R.exports;p()(R,{VApp:k["a"],VMain:y["a"]});n("d3b7");var O=n("8c4f"),j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("router-view")],1)},C=[],E=(n("96cf"),n("1da1")),P={name:"Root",components:{},props:{},data:function(){return{txt:"Hello World"}},mounted:function(){var e=Object(E["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),beforeRouteEnter:function(e,t,n){return Object(E["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n();case 1:case"end":return e.stop()}}),e)})))()},computed:{},methods:{load:function(){var e=Object(E["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}},A=P,I=Object(l["a"])(A,j,C,!1,null,"d294ae4e",null),T=I.exports;p()(I,{VApp:k["a"]});var S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("router-view")],1)},L=[],N={name:"Root",components:{},props:{},data:function(){return{txt:"Hello World"}},mounted:function(){var e=Object(E["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),beforeRouteEnter:function(e,t,n){return Object(E["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n();case 1:case"end":return e.stop()}}),e)})))()},computed:{},methods:{load:function(){var e=Object(E["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}},U=N,H=Object(l["a"])(U,S,L,!1,null,"e2c91e76",null),V=H.exports;p()(H,{VApp:k["a"]});var D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Hello")]),n("v-btn",{attrs:{color:"success"},on:{click:e.login}},[e._v("text")])],1)},M=[],$=n("bc3a"),z=n.n($),B={name:"Root",components:{},props:{},data:function(){return{txt:"Hello World"}},mounted:function(){var e=Object(E["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),beforeRouteEnter:function(e,t,n){return Object(E["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n();case 1:case"end":return e.stop()}}),e)})))()},computed:{},methods:{login:function(){var e=Object(E["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$auth.authenticate("live").then((function(e){console.log(e)})).catch((function(e){console.log({err:e})}));case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getProfile:function(e){return Object(E["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,z.a.get("https://graph.microsoft.com/beta/me?$select=givenName,surname,department,id,officeLocation,mail,displayName",{headers:{Authorization:"Basic ".concat(e.access_token)}}).then((function(e){return e.data})).catch((function(e){return e.reponse}));case 2:return n=t.sent,console.log(n),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))()},load:function(){var e=Object(E["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}},q=B,F=n("8336"),W=Object(l["a"])(q,D,M,!1,null,"10324573",null);W.exports;p()(W,{VBtn:F["a"]}),r["default"].use(O["a"]);var J=[{path:"/",component:T,children:[{path:"",name:"RootHome",component:function(){return Promise.all([n.e("chunk-61dd4b5a"),n.e("chunk-3a5b1d4c")]).then(n.bind(null,"5d8a"))}},{path:"/first",name:"first",component:function(){return n.e("chunk-2d224962").then(n.bind(null,"e188"))}}]},{path:"/checkin/",component:V,children:[{path:"",name:"RootHome",component:function(){return Promise.all([n.e("chunk-61dd4b5a"),n.e("chunk-ebc89ce8")]).then(n.bind(null,"ba5b"))}},{path:"/point",name:"point",component:function(){return n.e("chunk-033cb00f").then(n.bind(null,"388d"))}}]}],G=new O["a"]({relative:!0,routes:J}),K=G,Q=n("2f62"),X=n("7ffd"),Y=(n("ac1f"),n("5319"),n("2ef0"),n("8c89")),Z=n.n(Y),ee=localStorage.getItem("access_token")?"Token ".concat(localStorage.getItem("access_token")):"",te=z.a.create({headers:{common:{Authorization:ee}},baseURL:Z.a.baseURL,timeout:1e4}),ne=te,re="/api/auth",ae={USER:{},PROFILE:{}},oe={},ue=X["c"].mutations(ae),ce={login:function(e,t){return Object(E["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return delete ne.defaults.headers.common["Authorization"],n.next=3,window.localStorage.removeItem("access_token");case 3:return n.next=5,window.localStorage.clear();case 5:return n.next=7,ne.post("".concat(re,"/login/"),t).then((function(e){return e.data})).catch((function(e){return!1}));case 7:if(r=n.sent,!r){n.next=11;break}return n.next=11,ce.storeToken(e,r.token);case 11:return n.abrupt("return",r);case 12:case"end":return n.stop()}}),n)})))()},register:function(e,t){return Object(E["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return delete ne.defaults.headers.common["Authorization"],e.next=3,ne.post("".concat(re,"/register/"),t).then((function(e){return e.data})).catch((function(e){return!1}));case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))()},storeToken:function(e,t){return Object(E["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t),ne.defaults.headers.common["Authorization"]="Token ".concat(t),e.next=4,localStorage.setItem("access_token",t);case 4:return e.next=6,location.reload();case 6:case"end":return e.stop()}}),e)})))()},getProfile:function(e,t){return Object(E["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ne.get("".concat(re,"/profile/")).then((function(e){return e.data})).catch((function(e){return null}));case 2:return t=e.sent,ae.USER=t,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))()},getFullProfile:function(e,t){return Object(E["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ne.get("/api/profile/".concat(t,"/")).then((function(e){return e.data})).catch((function(e){return!1}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))()},getAllProfile:function(e,t){return Object(E["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ne.get("/api/profilefull/".concat(t,"/")).then((function(e){return e.data})).catch((function(e){return!1}));case 2:return n=e.sent,ae.PROFILE=n,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))()},storeProfile:function(e,t){return Object(E["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ne.post("/api/profile/",t).then((function(e){return e.data})).catch((function(e){return!1}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))()},logout:function(e,t){return Object(E["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,window.localStorage.removeItem("access_token");case 2:return e.next=4,window.localStorage.clear();case 4:return e.next=6,ne.post("".concat(re,"/logout/")).then((function(e){return!0})).catch((function(e){return!1}));case 6:return e.sent,e.next=9,window.location.replace("/#/");case 9:location.href="https://login.windows.net/common/oauth2/logout?post_logout_redirect_uri=https://dorm.dsq.up.ac.th/checkin/";case 10:case"end":return e.stop()}}),e)})))()}},ie={namespaced:!0,state:ae,getters:oe,mutations:ue,actions:ce},se={GEO:[],PROVINCE:[],AMPHUR:[],DIST:[]},le={},fe=X["c"].mutations(se),pe={getGeo:function(e,t){return Object(E["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ne.get("/api/geo/").then((function(e){return e.data})).catch((function(e){return[]}));case 2:return t=e.sent,se.GEO=t,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))()},getProvince:function(e,t){return Object(E["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ne.get("/api/province/".concat(t,"/")).then((function(e){return e.data})).catch((function(e){return[]}));case 2:return n=e.sent,se.PROVINCE=n,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))()},getAmphur:function(e,t){return Object(E["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ne.get("/api/amphur/".concat(t,"/")).then((function(e){return e.data})).catch((function(e){return[]}));case 2:return n=e.sent,se.AMPHUR=n,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))()},getDist:function(e,t){return Object(E["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ne.get("/api/district/".concat(t,"/")).then((function(e){return e.data})).catch((function(e){return[]}));case 2:return n=e.sent,se.DIST=n,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))()},getMyLocation:function(e,t){return Object(E["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ne.post("/api/provincesearch/",t).then((function(e){return console.log(e.data),e.data})).catch((function(e){return!1}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))()},checkinMyLocation:function(e,t){return Object(E["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ne.post("/api/gps/",t).then((function(e){return console.log(e.data),e.data})).catch((function(e){return alert(JSON.stringify(e.response)),!1}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))()}},he={namespaced:!0,state:se,getters:le,mutations:fe,actions:pe},me={POINTS:[]},de={},ge=X["c"].mutations(me),ve={getPointUser:function(e,t){return Object(E["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ne.get("/api/ponituser/".concat(t)).then((function(e){var t=e.data;return t.length>0?t:null})).catch((function(e){return null}));case 2:return n=e.sent,me.POINTS=n,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))()},updatePoint:function(e,t){return Object(E["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("Update Checkin"),e.next=3,ne.put("/api/ponit/".concat(t.id),t).then((function(e){return e.data})).catch((function(e){return!1}));case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))()},storePoint:function(e,t){return Object(E["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("New Checkin"),e.next=3,ne.post("/api/ponit/",{points:.25,points2:0,points3:0,points4:0,points5:0,points6:0,points7:0,status:1,user:t}).then((function(e){return e.data})).catch((function(e){return!1}));case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))()}},be={namespaced:!0,state:me,getters:de,mutations:ge,actions:ve};r["default"].use(Q["a"]);var we=function(){var e=new Q["a"].Store({plugins:[X["b"].plugin],modules:{auth:ie,thai:he,point:be}});return e},xe=n("f309");r["default"].use(xe["a"]);var ke=new xe["a"]({}),ye=n("755e"),Re=n("a7fe"),_e=n.n(Re),Oe=n("2c0a"),je=n.n(Oe),Ce=n("f0e2"),Ee=n.n(Ce),Pe=n("ba38");r["default"].config.productionTip=!1,r["default"].use(ye,{load:{key:"AIzaSyC04k2TIJBXUa0yJQ0N2XimbuiVubkgG6g",libraries:"places"}}),r["default"].use(je.a),r["default"].use(Ee.a),r["default"].use(_e.a,z.a),r["default"].use(Pe["a"],{baseUrl:Z.a.AUTH_CALLBACK,tokenPath:"id",providers:{live:{popupOptions:null,clientId:Z.a.CLIENT_ID,authorizationEndpoint:Z.a.AUTH_URL,scope:Z.a.SCOPE,scopeDelimiter:" ",oauthType:"2.0"}}}),new r["default"]({router:K,store:we,vuetify:ke,render:function(e){return e(_)}}).$mount("#app")},"8c89":function(e,t){var n={CLIENT_ID:"b00621f8-cf21-4368-82b2-04867fa0af77",TENANT_ID:"d7cbbb08-47a3-4bd7-8347-5018f2744cfb",SCOPE:["User.Read","profile"]},r="https://dorm.dsq.up.ac.th/",a={API:"/api/v1",API_AUTH:"/auth",PROFILE_365:"https://graph.microsoft.com/beta/me?$select=givenName,surname,department,id,officeLocation,mail,displayName",CLIENT_ID:n.CLIENT_ID,AUTH_URL:"https://login.microsoftonline.com/".concat(n.TENANT_ID,"/oauth2/authorize"),AUTH_CALLBACK:r,SCOPE:n.SCOPE,baseURL:r};e.exports=a},"9b19":function(e,t,n){e.exports=n.p+"img/logo.07d1e22e.svg"}});
//# sourceMappingURL=app.50946cf2.js.map