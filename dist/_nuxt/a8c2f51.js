(window.webpackJsonp=window.webpackJsonp||[]).push([[10,9],{442:function(t,n,e){"use strict";e(14),e(20),e(25),e(26);var r=e(3),o=(e(6),e(64),e(79),e(37),e(17),e(27),e(55),e(272),e(41),e(273),e(274),e(275),e(276),e(277),e(278),e(279),e(280),e(281),e(282),e(283),e(284),e(285),e(42),e(16),e(271),e(0)),c=e(125),l=e(1);function d(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(n){Object(r.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}var m=["sm","md","lg","xl"],y=["start","end","center"];function v(t,n){return m.reduce((function(e,r){return e[t+Object(l.q)(r)]=n(),e}),{})}var j=function(t){return[].concat(y,["baseline","stretch"]).includes(t)},O=v("align",(function(){return{type:String,default:null,validator:j}})),h=function(t){return[].concat(y,["space-between","space-around"]).includes(t)},w=v("justify",(function(){return{type:String,default:null,validator:h}})),_=function(t){return[].concat(y,["space-between","space-around","stretch"]).includes(t)},C=v("alignContent",(function(){return{type:String,default:null,validator:_}})),S={align:Object.keys(O),justify:Object.keys(w),alignContent:Object.keys(C)},P={align:"align",justify:"justify",alignContent:"align-content"};function k(t,n,e){var r=P[t];if(null!=e){if(n){var o=n.replace(t,"");r+="-".concat(o)}return(r+="-".concat(e)).toLowerCase()}}var x=new Map;n.a=o.a.extend({name:"v-row",functional:!0,props:f(f(f({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:j}},O),{},{justify:{type:String,default:null,validator:h}},w),{},{alignContent:{type:String,default:null,validator:_}},C),render:function(t,n){var e=n.props,data=n.data,o=n.children,l="";for(var d in e)l+=String(e[d]);var f=x.get(l);if(!f){var m,y;for(y in f=[],S)S[y].forEach((function(t){var n=e[t],r=k(y,t,n);r&&f.push(r)}));f.push((m={"no-gutters":e.noGutters,"row--dense":e.dense},Object(r.a)(m,"align-".concat(e.align),e.align),Object(r.a)(m,"justify-".concat(e.justify),e.justify),Object(r.a)(m,"align-content-".concat(e.alignContent),e.alignContent),m)),x.set(l,f)}return t(e.tag,Object(c.a)(data,{staticClass:"row",class:f}),o)}})},444:function(t,n,e){"use strict";e(20),e(6),e(17),e(71),e(37),e(286),e(271),e(104),e(88);var r=e(0);var o,c=e(125);n.a=(o="container",r.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,n){var e=n.props,data=n.data,r=n.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var n=c[t];return t.startsWith("data-")?(data.attrs[t]=n,!1):n||"string"==typeof n}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return e.id&&(data.domProps=data.domProps||{},data.domProps.id=e.id),t(e.tag,data,r)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,n){var e,r=n.props,data=n.data,o=n.children,l=data.attrs;return l&&(data.attrs={},e=Object.keys(l).filter((function(t){if("slot"===t)return!1;var n=l[t];return t.startsWith("data-")?(data.attrs[t]=n,!1):n||"string"==typeof n}))),r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(e||[])}),o)}})},451:function(t,n,e){"use strict";e.r(n);var r=e(462),o=e(269),c={props:{imageUrl:{type:String,required:!0}}},l=e(57),component=Object(l.a)(c,(function(){var t=this._self._c;return t(r.a,{attrs:{shaped:""}},[t(o.a,{attrs:{src:this.imageUrl}})],1)}),[],!1,null,null,null);n.default=component.exports},468:function(t,n,e){"use strict";e.r(n);var r=e(462),o=e(431),c=e(444),l=e(269),d=e(442),f={components:{TestimonialCard:e(451).default},data:function(){return{testimonials:["/comment_1.png","/comment_3.png","/comment_4.png","/comment_5.png","/comment_6.png","/comment_7.png","/comment_8.png","/comment_9.png","/comment_10.png"]}}},m=e(57),component=Object(m.a)(f,(function(){var t=this,n=t._self._c;return n(c.a,{staticClass:"fe-body-width"},[n("div",{staticClass:"text-center my-12"},[n("h2",{staticClass:"my-6 display-1"},[t._v("What Students Say")]),t._v(" "),n(d.a,[n(o.a,{attrs:{cols:"12"}},[n(r.a,{staticClass:"rounded-xl"},[n(l.a,{attrs:{src:"/comment_2.png"}})],1)],1),t._v(" "),t._l(t.testimonials,(function(t,i){return n(o.a,{key:i+t,attrs:{md:"6"}},[n("testimonial-card",{attrs:{imageUrl:t}})],1)}))],2)],1)])}),[],!1,null,null,null);n.default=component.exports}}]);