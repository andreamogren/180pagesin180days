webpackJsonp([1],{

/***/ "+gcB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'dogGenerator',
  data: () => ({
    gifs: {},
    errors: []
  }),
  methods: {
    randomDog() {
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(`http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=dog`).then(response => {
        // JSON responses are automatically parsed.
        this.gifs = response.data.data.image_url;
        this.$refs.imageContainer.innerHTML = '<center><img src = "' + this.gifs + '"  title="GIF via Giphy"></center>';
      }).catch(e => {
        this.errors.push(e);
        console.log(errors);
      });
    }
  },
  computed: {}
});

/***/ }),

/***/ "2nKV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_cookie_law__ = __webpack_require__("xvGj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_cookie_law___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_cookie_law__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'topbar',
  data() {
    return {
      menuItems: [{ name: 'Vanishing button', state: 'vanishingbutton' }, { name: 'Crystal ball', state: 'crystalball' }, { name: 'Hangry Sami', state: 'hangrysami' }, { name: 'Dog Generator', state: 'dogGenerator' }, { name: 'Halloween Playlist', state: 'halloweenPlaylist' }]
    };
  },
  components: {},
  methods: {},
  computed: {}
});

/***/ }),

/***/ "4DLa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"topbar"},[_c('h1',[_vm._v("Welcome to Andrea's Vue challenge!")]),_vm._v(" "),_c('p',[_vm._v("I started on the 20th of September 2017.")]),_vm._v(" "),_c('nav',{staticClass:"topbar-navigation"},[_c('ul',_vm._l((_vm.menuItems),function(item){return _c('li',[_c('router-link',{attrs:{"to":{ name: item.state }}},[_vm._v(_vm._s(item.name))])],1)}))])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "6H8i":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vanishingbutton"},[_c('h1',[_vm._v("Do not anger the button")]),_vm._v(" "),(_vm.seen)?_c('button',{on:{"~click":function($event){_vm.noodle()},"click":function($event){_vm.seen = !_vm.seen}}},[_vm._v("Click me I dare you")]):_vm._e(),_vm._v(" "),_c('a',{attrs:{"href":"/"}},[_vm._v("Back to home page")])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "6z2O":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "8fKG":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "HEdy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'vanishingbutton',
  data() {
    return {
      seen: 'true'
    };
  },
  methods: {
    noodle() {
      alert('Argh! You have clicked me... this shall not happen again!!');
      seen = !seen;
    }
  },
  computed: {}
});

/***/ }),

/***/ "I2li":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_halloweenPlaylist_vue__ = __webpack_require__("KKqL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e58f7636_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_halloweenPlaylist_vue__ = __webpack_require__("R89z");
function injectStyle (ssrContext) {
  __webpack_require__("yQas")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_halloweenPlaylist_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e58f7636_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_halloweenPlaylist_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "KKqL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'halloweenPlaylist',
  data() {
    return {};
  },
  methods: {
    playSong() {
      var spookySong = new Array();
      spookySong[0] = "../../static/songs/spooky_scary_skeletons.mp3";
      spookySong[1] = "../../static/songs/GhostnGhost - Sir Ghostington.mp3";
      spookySong[2] = "../../static/songs/Haunted Scottish Castle.mp3";
      spookySong[3] = "../../static/songs/This Is Halloween.mp3";
      spookySong[4] = "../../static/songs/Thriller.mp3";
      spookySong[5] = "../../static/songs/Lavender Town.mp3";
      spookySong[6] = "../../static/songs/Superstition.mp3";
      spookySong[7] = "../../static/songs/Monsters.mp3";
      spookySong[8] = "../../static/songs/Boogeyman.mp3";
      spookySong[9] = "../../static/songs/Boos Haunted Bash.mp3";

      const generateSpook = Math.floor(Math.random() * spookySong.length);
      this.$refs.songcontainer.innerHTML = '<audio autoplay><source src="' + spookySong[generateSpook] + '" type="audio/mpeg"></audio>';
      console.log(spookySong[generateSpook]);
    }
  },
  computed: {}
});

/***/ }),

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("xJD8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_30220f72_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("gAbY");
function injectStyle (ssrContext) {
  __webpack_require__("ya8Y")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_30220f72_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__("M93x");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__("YaEn");
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.




__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */] }
});

/***/ }),

/***/ "R89z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('button',{on:{"click":function($event){_vm.playSong()}}},[_vm._v("Play a spooky song!")]),_vm._v(" "),_c('div',{ref:"songcontainer"}),_vm._v(" "),_c('a',{attrs:{"id":"back-home","href":"/"}},[_vm._v("Back to home page")])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "TqpT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"crystalball"},[_c('h1',[_vm._v("Gaze into the crystal ball")]),_vm._v(" "),_c('iframe',{staticClass:"giphy-embed",attrs:{"src":"https://giphy.com/embed/3o6ZsXWwgTWagYMikw","width":"480","height":"355","frameBorder":"0","allowFullScreen":""}}),_vm._v(" "),_c('button',{on:{"click":function($event){_vm.randomFortune()}}},[_vm._v("Fancy a fortune?")]),_vm._v(" "),_c('h3',[_vm._v(_vm._s(_vm.selectedFortune))]),_vm._v(" "),_c('a',{attrs:{"href":"/"}},[_vm._v("Back to home page")])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "UNZN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'crystalball',
  data() {
    return {
      selectedFortuneNumber: '',
      selectedFortune: '',

      fortunes: ['Today it\'s up to you to create the peacefulness you long for.', 'A friend asks only for your time not your money.', 'If you refuse to accept anything but the best, you very often get it.', 'A smile is your passport into the hearts of others.', 'A good way to keep healthy is to eat more Chinese food.', 'Your high-minded principles spell success.', 'Hard work pays off in the future, laziness pays off now.', 'Change can hurt, but it leads a path to something better.', 'Enjoy the good luck a companion brings you.', 'People are naturally attracted to you.', 'Hidden in a valley beside an open stream- This will be the type of place where you will find your dream.', 'A chance meeting opens new doors to success and friendship.', 'You learn from your mistakes... You will learn a lot today.', 'If you have something good in your life, don\'t let it go!', 'What ever you\'re goal is in life, embrace it visualize it, and for it will be yours.', 'Your shoes will make you happy today.', 'You cannot love life until you live the life you love.', 'Be on the lookout for coming events, They cast their shadows beforehand.', 'Land is always on the mind of a flying bird.', 'The man or woman you desire feels the same about you.', 'Meeting adversity well is the source of your strength.', 'A dream you have will come true.', 'Our deeds determine us, as much as we determine our deeds.', 'Never give up. You\'re not a failure if you don\'t give up.', 'You will become great if you believe in yourself.', 'There is no greater pleasure than seeing your loved ones prosper.', 'You will marry your lover.', 'A very attractive person has a message for you.', 'You already know the answer to the questions lingering inside your head.', 'It is now, and in this world, that we must live.', 'You must try, or hate yourself for not trying.', 'You can make your own happiness.', 'The greatest risk is not taking one.', 'The love of your life is stepping into your planet this summer.', 'Love can last a lifetime, if you want it to.', 'Adversity is the parent of virtue.', 'Serious trouble will bypass you.', 'A short stranger will soon enter your life with blessings to share.', 'Now is the time to try something new.', 'Wealth awaits you very soon.', 'If you feel you are right, stand firmly by your convictions.', 'If winter comes, can spring be far behind?', 'Keep your eye out for someone special.', 'You are very talented in many ways.', 'A stranger, is a friend you have not spoken to yet.', 'A new voyage will fill your life with untold memories.', 'You will travel to many exotic places in your lifetime.', 'Your ability for accomplishment will follow with success.', 'Nothing astonishes men so much as common sense and plain dealing.', 'Its amazing how much good you can do if you don\'t care who gets the credit.']
    };
  },
  methods: {
    randomFortune() {
      this.selectedFortuneNumber = Math.floor(Math.random() * this.fortunes.length);
      this.selectedFortune = this.fortunes[this.selectedFortuneNumber];
    }
  },
  computed: {}
});

/***/ }),

/***/ "X1C2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hangrysami"},[_c('h1',[_vm._v("Hangry hangry Sami")]),_vm._v(" "),_c('div',{class:{ content: _vm.happy },attrs:{"id":"sami"}}),_vm._v(" "),_c('div',{attrs:{"id":"hanger-level"}},[_c('div',{style:({ width: _vm.hanger + '%' })})]),_vm._v(" "),_c('div',{attrs:{"id":"controls"}},[_c('button',{directives:[{name:"show",rawName:"v-show",value:(!_vm.happy),expression:"!happy"}],on:{"click":_vm.nom}},[_vm._v("Feed Sami")]),_vm._v(" "),_c('button',{on:{"click":_vm.restart}},[_vm._v("Restart")])]),_vm._v(" "),_c('a',{attrs:{"href":"/"}},[_vm._v("Back to home page")])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "YaEn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("/ocq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_vanishingbutton__ = __webpack_require__("c05M");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_crystalball__ = __webpack_require__("xpro");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_topbar__ = __webpack_require__("looZ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_hangrysami__ = __webpack_require__("xEli");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_dogGenerator__ = __webpack_require__("us1d");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_halloweenPlaylist__ = __webpack_require__("I2li");









__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/vanishingbutton',
    name: 'vanishingbutton',
    component: __WEBPACK_IMPORTED_MODULE_2__components_vanishingbutton__["a" /* default */]
  }, {
    path: '/crystalball',
    name: 'crystalball',
    component: __WEBPACK_IMPORTED_MODULE_3__components_crystalball__["a" /* default */]
  }, {
    path: '/',
    name: 'topbar',
    component: __WEBPACK_IMPORTED_MODULE_4__components_topbar__["a" /* default */]
  }, {
    path: '/hangrysami',
    name: 'hangrysami',
    component: __WEBPACK_IMPORTED_MODULE_5__components_hangrysami__["a" /* default */]
  }, {
    path: '/dogGenerator',
    name: 'dogGenerator',
    component: __WEBPACK_IMPORTED_MODULE_6__components_dogGenerator__["a" /* default */]
  }, {
    path: '/halloweenPlaylist',
    name: 'halloweenPlaylist',
    component: __WEBPACK_IMPORTED_MODULE_7__components_halloweenPlaylist__["a" /* default */]
  }]
}));

/***/ }),

/***/ "c05M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vanishingbutton_vue__ = __webpack_require__("HEdy");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0b82db9f_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_vanishingbutton_vue__ = __webpack_require__("6H8i");
function injectStyle (ssrContext) {
  __webpack_require__("vZ9y")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0b82db9f"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vanishingbutton_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0b82db9f_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_vanishingbutton_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "gAbY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "jxUQ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "looZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_topbar_vue__ = __webpack_require__("2nKV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1a2d8a68_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_topbar_vue__ = __webpack_require__("4DLa");
function injectStyle (ssrContext) {
  __webpack_require__("jxUQ")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1a2d8a68"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_topbar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1a2d8a68_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_topbar_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "mFL/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dogGenerator"},[_c('h1',[_vm._v("Happy Dog Generator 2.0")]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('h3',{staticClass:"subheader"},[_vm._v("Happiness and fluffyness is just a click away")]),_vm._v(" "),_c('div',{ref:"imageContainer"}),_vm._v(" "),_c('button',{staticClass:"gif-button",on:{"click":function($event){_vm.randomDog()}}},[_vm._v("Click away!")]),_vm._v(" "),_c('br'),_c('a',{attrs:{"href":"/"}},[_vm._v("Back to home page")])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"headers-div"},[_c('h1',[_vm._v(" Having a bad day?")]),_vm._v(" "),_c('h1',[_vm._v(" Not anymore! ")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "o/+R":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'hangrysami',
    data() {
        return {
            hanger: 0,
            happy: false
        };
    },
    components: {},
    methods: {
        nom: function () {
            this.hanger += 10;
            if (this.hanger >= 100) {
                this.happy = true;
            }
        },
        restart: function () {
            this.hanger = 0;
            this.happy = false;
        }
    },
    computed: {}
});

/***/ }),

/***/ "us1d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dogGenerator_vue__ = __webpack_require__("+gcB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_21c0e2c1_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_dogGenerator_vue__ = __webpack_require__("mFL/");
function injectStyle (ssrContext) {
  __webpack_require__("8fKG")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dogGenerator_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_21c0e2c1_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_dogGenerator_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "vZ9y":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "wYZB":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "xEli":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_hangrysami_vue__ = __webpack_require__("o/+R");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1866e326_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_hangrysami_vue__ = __webpack_require__("X1C2");
function injectStyle (ssrContext) {
  __webpack_require__("6z2O")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1866e326"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_hangrysami_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1866e326_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_hangrysami_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "xJD8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app'
});

/***/ }),

/***/ "xpro":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_crystalball_vue__ = __webpack_require__("UNZN");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ea9d754a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_crystalball_vue__ = __webpack_require__("TqpT");
function injectStyle (ssrContext) {
  __webpack_require__("wYZB")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ea9d754a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_crystalball_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ea9d754a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_crystalball_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "yQas":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ya8Y":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.c7876c1a09aad6f1da4a.js.map