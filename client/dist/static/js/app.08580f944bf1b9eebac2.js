webpackJsonp([1],{"/yRs":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,r=(a=n("8ebl")).default||a,s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"vue-street-view-pano-container"},[e("div",{ref:"vue-street-view-pano",staticClass:"vue-street-view-pano"}),this._v(" "),this._t("default")],2)},staticRenderFns:[]};var o=n("VU/8")(r,s,!1,function(t){n("CjMs")},null,null);e.default=o.exports},"5ZbH":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,r=(a=n("hOwk")).default||a,s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"vue-map-container"},[e("div",{ref:"vue-map",staticClass:"vue-map"}),this._v(" "),e("div",{staticClass:"vue-map-hidden"},[this._t("default")],2),this._v(" "),this._t("visible")],2)},staticRenderFns:[]};var o=n("VU/8")(r,s,!1,function(t){n("dtWn")},null,null);e.default=o.exports},"5cLx":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,r=(a=n("WgA/")).default||a,s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{ref:"flyaway"},[this._t("default")],2)])},staticRenderFns:[]},o=n("VU/8")(r,s,!1,null,null,null);e.default=o.exports},"7zck":function(t,e){},"9LEN":function(t,e){},CjMs:function(t,e){},H4nB:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",{attrs:{id:"app"}},[e("v-toolbar",{attrs:{dark:"",color:"primary"}},[e("v-toolbar-title",[this._v("HouseFinder")])],1),this._v(" "),e("v-content",[e("router-view")],1)],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},r,!1,function(t){n("zAWT")},null,null).exports,o=n("/ocq"),i=n("Xxa5"),l=n.n(i),u=n("mvHQ"),c=n.n(u),d=n("exGp"),v=n.n(d),p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"elevation-6"},[n("v-toolbar",{attrs:{dense:"",dark:"",color:"primary"}},[n("v-toolbar-title",[t._v(t._s(t.title))]),t._v(" "),n("v-toolbar-items",[t._t("toolbar-item")],2)],1),t._v(" "),t._t("default",[t._v("No slot content defined.")])],2)},staticRenderFns:[]};var f=n("VU/8")({name:"Panel",props:["title","toolbar-item"]},p,!1,function(t){n("H4nB")},null,null).exports,m=n("mtWM"),h=n.n(m),_=function(){return h.a.create({baseURL:"http://localhost:5000/api/"})},y={"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS","Access-Control-Allow-Headers":"Origin, Content-Type, X-Auth-Token"},b=function(t){return _().get("customerBalances?id="+t)},g=function(t){return _().post("processTotalFunds",t,y)},x=function(t){return _().post("houseData",t,y)},w=function(t){return _().post("callZillowApi",t,y)},$={name:"HelloWorld",components:{Panel:f},data:function(){return{form:{id:null},user:{monthly_salary:null,savings:null}}},methods:{getData:function(t){var e=this;return v()(l.a.mark(function n(){var a;return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),n.next=3,b(e.form.id);case 3:a=n.sent,e.user.monthly_salary=a.data.monthly_salary,e.user.savings=a.data.savings,e.$localStorage.set("user",c()(e.user)),e.$router.push({name:"additionalinfo"});case 8:case"end":return n.stop()}},n,e)}))()}}},k={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{staticClass:"helloworld"},[n("v-flex",{attrs:{xs12:"",sm8:"","offset-sm2":""}},[n("Panel",{attrs:{title:"Start Planning!"}},[n("v-container",[n("v-card-actions",[n("v-btn",{attrs:{to:{name:"start_button"},name:"button"}},[t._v("Non Nationwide Members")]),t._v(" "),n("v-form",{on:{submit:t.getData}},[n("v-text-field",{attrs:{label:"Enter your Nationwide ID:",type:"text"},model:{value:t.form.id,callback:function(e){t.$set(t.form,"id",e)},expression:"form.id"}}),t._v(" "),n("v-btn",{attrs:{type:"submit",name:"button"}},[t._v("Nationwide")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var P=n("VU/8")($,k,!1,function(t){n("VL4d")},"data-v-216191de",null).exports,H={components:{Panel:f},data:function(){return{user:{monthly_salary:null,savings:null}}},methods:{submitHandler:function(t){t.preventDefault(),this.$localStorage.set("user",c()(this.user)),this.$router.push({name:"additionalinfo"})}}},z={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{staticClass:"start-button"},[n("v-flex",{attrs:{xs12:"",sm8:"","offset-sm2":""}},[n("Panel",{attrs:{title:"Non Nationwide Members"}},[n("v-container",[n("v-form",{on:{submit:t.submitHandler}},[n("v-text-field",{attrs:{label:"Monthly Salary:",type:"number",name:"monthly_salary",id:"monthly_salary"},model:{value:t.user.monthly_salary,callback:function(e){t.$set(t.user,"monthly_salary",e)},expression:"user.monthly_salary"}}),t._v(" "),n("v-text-field",{attrs:{label:"Savings set aside for a Home:",type:"number",name:"savings",id:"savings"},model:{value:t.user.savings,callback:function(e){t.$set(t.user,"savings",e)},expression:"user.savings"}}),t._v(" "),n("v-btn",{attrs:{type:"submit"}},[t._v("Submit")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var C=n("VU/8")(H,z,!1,function(t){n("iQcJ")},"data-v-5811e498",null).exports,S={components:{Panel:f},data:function(){return{zipcode:"",houses:[],price:this.$localStorage.get("price"),house:null,center:{lat:45.508,lng:-73.587}}},mounted:function(){this.geolocate()},methods:{submitHandler:function(){var t=this;return v()(l.a.mark(function e(){var n,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={zipcode:t.zipcode,price:t.price},e.next=3,x(n);case 3:a=e.sent,t.addMarkers(a);case 5:case"end":return e.stop()}},e,t)}))()},zillowcall:function(t){var e=this;return v()(l.a.mark(function n(){var a;return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w(t.address);case 2:a=n.sent,e.house=a.data.result,console.log(e.house);case 5:case"end":return n.stop()}},n,e)}))()},geolocate:function(){var t=this;navigator.geolocation.getCurrentPosition(function(e){t.center={lat:e.coords.latitude,lng:e.coords.longitude}})},addMarkers:function(t){for(var e in t.data.property){var n={position:{lat:parseFloat(t.data.property[e].location.latitude),lng:parseFloat(t.data.property[e].location.longitude)},address:t.data.property[e].address};this.houses.push(n)}this.center=n.position}}},A={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{staticClass:"zillowpage"},[n("v-flex",{attrs:{xs4:""}},[n("Panel",[n("v-container",[n("v-card-title",[n("h3",[t._v("Your estimated house you can afford: "+t._s(t.price))])]),t._v(" "),n("v-card-actions",[n("v-form",{on:{submit:function(e){return e.preventDefault(),t.submitHandler(e)}}},[n("v-text-field",{attrs:{label:"Zip Code",type:"text",name:"zipcode",id:"zipcode",pattern:"[0-9]{5}",maxlength:"5",title:"Please enter valid zipcode",required:""},model:{value:t.zipcode,callback:function(e){t.zipcode=e},expression:"zipcode"}}),t._v(" "),n("v-btn",{attrs:{type:"submit",name:"submit"}},[t._v("Submit")])],1)],1)],1)],1)],1),t._v(" "),n("v-flex",[n("GmapMap",{staticStyle:{width:"100%",height:"600px"},attrs:{center:t.center,zoom:18}},t._l(t.houses,function(e,a){return n("GmapMarker",{key:a,attrs:{position:e.position},on:{click:function(n){t.zillowcall(e)}}})})),t._v(" "),n("div",{attrs:{id:"zillow"}},[n("h1",[t._v(t._s(t.house))])])],1)],1)},staticRenderFns:[]};var E=n("VU/8")(S,A,!1,function(t){n("9LEN")},"data-v-0bbda334",null).exports,M={components:{Panel:f},data:function(){return{user:{monthly_salary:JSON.parse(this.$localStorage.get("user")).monthly_salary,savings:JSON.parse(this.$localStorage.get("user")).savings,percent:null,wait_months:null,mortgage_years:null}}},methods:{submitHandler:function(t){var e=this;return v()(l.a.mark(function n(){var a;return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),e.$localStorage.set("user",c()(e.user)),n.next=4,g(e.user);case 4:a=n.sent,e.$localStorage.set("price",c()(a.data.price)),console.log(a.data.price),e.$router.push({name:"zillowpage"});case 8:case"end":return n.stop()}},n,e)}))()}}},F={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{staticClass:"additionalinfo"},[n("v-flex",{attrs:{xs12:"",sm8:"","offset-sm2":""}},[n("Panel",{attrs:{title:"Additional Information"}},[n("v-container",[n("v-form",{on:{submit:function(e){return e.preventDefault(),t.submitHandler(e)}}},[n("v-text-field",{attrs:{label:"Percent of month income you want to set aside for a home",type:"number",name:"percent",id:"percent",required:""},model:{value:t.user.percent,callback:function(e){t.$set(t.user,"percent",e)},expression:"user.percent"}}),t._v(" "),n("v-text-field",{attrs:{label:"How long do you want to wait until you buy a home? (Months)",type:"number",name:"waitmonths",id:"waitmonths",required:""},model:{value:t.user.wait_months,callback:function(e){t.$set(t.user,"wait_months",e)},expression:"user.wait_months"}}),t._v(" "),n("v-text-field",{attrs:{label:"How long do you want your mortgage to be? (Years)",type:"number",name:"mortgage_years",id:"mortgage_years",required:""},model:{value:t.user.mortgage_years,callback:function(e){t.$set(t.user,"mortgage_years",e)},expression:"user.mortgage_years"}}),t._v(" "),n("v-btn",{attrs:{type:"submit",name:"submit"}},[t._v("Submit")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var N=n("VU/8")(M,F,!1,function(t){n("vc/h")},null,null).exports;a.a.use(o.a);var R=new o.a({routes:[{path:"/",name:"HelloWorld",component:P},{path:"/test",name:"start_button",component:C},{path:"/placeholder",name:"zillowpage",component:E},{path:"/test2",name:"additionalinfo",component:N}]}),T=n("3EgV"),O=n.n(T),U=(n("7zck"),n("UnSZ")),V=n.n(U),D=n("sA6N");a.a.config.productionTip=!1,a.a.use(O.a),a.a.use(V.a),a.a.use(D,{load:{key:"AIzaSyCQyeHfRq_uZkRdP7ni6XykvW2rHFnv0MA",libraries:"places"}}),new a.a({el:"#app",router:R,components:{App:s},template:"<App/>"})},T5eZ:function(t,e,n){"use strict";var a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("label",[e("span",{domProps:{textContent:this._s(this.label)}}),this._v(" "),e("input",{ref:"input",class:this.className,attrs:{type:"text",placeholder:this.placeholder}})])},staticRenderFns:[]};e.a=a},VL4d:function(t,e){},YI6p:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("jIen"),r=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);var o=n("T5eZ"),i=n("VU/8")(r.a,o.a,!1,null,null,null);e.default=i.exports},dtWn:function(t,e){},iQcJ:function(t,e){},preG:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,r=(a=n("hQTS")).default||a,s={render:function(){var t=this.$createElement;return(this._self._c||t)("input",{ref:"input",attrs:{type:"text",placeholder:this.placeholder},domProps:{value:this.value}})},staticRenderFns:[]},o=n("VU/8")(r,s,!1,null,null,null);e.default=o.exports},"vc/h":function(t,e){},zAWT:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.08580f944bf1b9eebac2.js.map