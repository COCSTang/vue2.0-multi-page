webpackJsonp([3,6],{40:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{loadingText:"数据加载中...",finishText:"没有更多数据了",errorText:"出错了，请点击重试"}}}},44:function(t,e){},46:function(t,e,s){var n,a;s(44),n=s(40);var i=s(49);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,a._scopeId="data-v-76da220c",t.exports=n},49:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"list_bottom"},[s("span",{staticClass:"text"},[t._v(t._s(t.loadingText))])])},staticRenderFns:[]}},139:function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=s(57),i=n(a),o=s(56),r=n(o),c=s(10),l=n(c),f=(s(4),s(6)),d=s(75),u=n(d),h=s(46),_=n(h);e.default={data:function(){return{loading:!1,first:!0}},created:function(){this.$store.dispatch("setPageInfo",{headerTitle:"我的收藏",left:{className:"back"},right:{hide:!0,userFont:!0,font:"編輯",fontClass:"font"}})},computed:(0,l.default)({},(0,f.mapState)({checkboxShow:function(t){return t.collect.showCheckbox},list:function(t,e){return t.collect.collectList},hasMore:function(t,e){return e.collectHasMore}})),components:{MugenScroll:u.default,listBottom:_.default},methods:{fetchData:function(){var t=this;if(!this.loading){if(this.loading=!0,!this.hasMore)return this.finishAction(),!1;(0,r.default)(i.default.mark(function e(){return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("getCollectList");case 2:if(t.$store.getters.collectHasMore){e.next=7;break}return t.finishAction(),e.abrupt("return",!1);case 7:t.first&&t.$store.getters.collectHasMore&&(t.fetchData(),t.first=!1);case 8:case"end":return e.stop()}},e,t)}))(),this.loading=!1}},finishAction:function(){this.loading=!0,this.$refs.listBottom.$el.children[0].classList.add("finished"),this.$refs.listBottom.$el.children[0].textContent=this.$refs.listBottom.$data.finishText}}}},250:function(t,e,s){var n,a;n=s(139);var i=s(269);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=n},269:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container collect"},[s("ul",{staticClass:"bg_white"},t._l(t.list,function(e){return s("li",[s("a",{staticClass:"flex padding_24",attrs:{href:""}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.checkboxShow,expression:"checkboxShow"}],staticClass:"checkbox_wrap"},[t._m(0,!0)]),t._v(" "),s("div",{staticClass:"bg bg_lazyload",attrs:{lazy:"loading"}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.image,expression:"item.image"}]})]),t._v(" "),s("div",{staticClass:"flex_item itemInfo flex"},[s("h1",[t._v(t._s(e.name))]),t._v(" "),s("div",{staticClass:"flex bottom"},[s("div",{staticClass:"price flex_item"},[t._v(t._s(e.price))]),t._v(" "),s("div",{staticClass:"num flex_item text_right"},[t._v("总销量"+t._s(e.sale_amount)+"份")])])])])])}),0),t._v(" "),s("mugen-scroll",{attrs:{handler:t.fetchData,"should-handle":!t.loading}},[s("list-bottom",{ref:"listBottom"})],1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{staticClass:"checkbox_label"},[s("input",{attrs:{type:"checkbox",name:"cb"}}),s("span")])}]}}});