"use strict";
(self["webpackChunk_nextcloud_text"] = self["webpackChunk_nextcloud_text"] || []).push([["editor-rich"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MenuBubble.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MenuBubble.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tiptap_vue_2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tiptap/vue-2 */ "./node_modules/@tiptap/vue-2/dist/tiptap-vue-2.esm.js");
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tiptap/core */ "./node_modules/@tiptap/core/dist/tiptap-core.esm.js");
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.esm.js");
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.esm.js");
/* harmony import */ var _nextcloud_vue_dist_Directives_Tooltip_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/vue/dist/Directives/Tooltip.js */ "./node_modules/@nextcloud/vue/dist/Directives/Tooltip.js");
/* harmony import */ var _nextcloud_vue_dist_Directives_Tooltip_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Directives_Tooltip_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_files_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../helpers/files.js */ "./src/helpers/files.js");
/* harmony import */ var _Editor_provider_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Editor.provider.js */ "./src/components/Editor.provider.js");
/* harmony import */ var _components_icons_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/icons.js */ "./src/components/icons.js");








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'MenuBubble',
  components: {
    BubbleMenu: _tiptap_vue_2__WEBPACK_IMPORTED_MODULE_6__.BubbleMenu,
    LinkIcon: _components_icons_js__WEBPACK_IMPORTED_MODULE_5__.LinkIcon,
    Document: _components_icons_js__WEBPACK_IMPORTED_MODULE_5__.Document,
    Delete: _components_icons_js__WEBPACK_IMPORTED_MODULE_5__.Delete,
    Check: _components_icons_js__WEBPACK_IMPORTED_MODULE_5__.Check
  },
  directives: {
    tooltip: (_nextcloud_vue_dist_Directives_Tooltip_js__WEBPACK_IMPORTED_MODULE_2___default())
  },
  mixins: [_Editor_provider_js__WEBPACK_IMPORTED_MODULE_4__.useEditorMixin],
  props: {
    // used to calculate the position based on the scrollOffset
    contentWrapper: {
      type: HTMLDivElement,
      required: false,
      default: null
    },
    filePath: {
      type: String,
      required: false,
      default: ''
    }
  },
  data: function data() {
    return {
      linkUrl: null,
      linkMenuIsActive: false,
      isUsingDirectEditing: (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_1__.loadState)('text', 'directEditingToken', null) !== null
    };
  },
  methods: {
    showLinkMenu: function showLinkMenu() {
      var _this = this;

      var attrs = (0,_tiptap_core__WEBPACK_IMPORTED_MODULE_7__.getMarkAttributes)(this.$editor.state, 'link');
      this.linkUrl = attrs.href;
      this.linkMenuIsActive = true;
      this.$nextTick(function () {
        _this.$refs.linkInput.focus();
      });
    },
    hideLinkMenu: function hideLinkMenu() {
      this.linkUrl = null;
      this.linkMenuIsActive = false;
    },
    selectFile: function selectFile() {
      var _this2 = this;

      var currentUser = (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__.getCurrentUser)();

      if (!currentUser) {
        return;
      }

      var startPath = this.filePath.split('/').slice(0, -1).join('/');
      OC.dialogs.filepicker(t('text', 'Select file to link to'), function (file) {
        var client = OC.Files.getClient();
        client.getFileInfo(file).then(function (_status, fileInfo) {
          var path = (0,_helpers_files_js__WEBPACK_IMPORTED_MODULE_3__.optimalPath)(_this2.filePath, "".concat(fileInfo.path, "/").concat(fileInfo.name));
          var encodedPath = path.split('/').map(encodeURIComponent).join('/');
          var href = "".concat(encodedPath, "?fileId=").concat(fileInfo.id);

          _this2.$editor.chain().setLink({
            href: href
          }).focus().run();

          _this2.hideLinkMenu();
        });
      }, false, [], true, undefined, startPath);
    },
    setLinkUrl: function setLinkUrl() {
      var url = this.linkUrl; // Heuristics for determining if we need a https:// prefix.

      var noPrefixes = [/^[a-zA-Z]+:/, // url with protocol ("mailTo:email@domain.tld")
      /^\//, // absolute path
      /\?fileId=/, // relative link with fileId
      /^\.\.?\//, // relative link starting with ./ or ../
      /^[^.]*[/$]/, // no dots before first '/' - not a domain name
      /^#/ // url fragment
      ];

      if (url && !noPrefixes.find(function (regex) {
        return url.match(regex);
      })) {
        url = 'https://' + url;
      } // Avoid issues when parsing urls later on in markdown that might be entered in an invalid format (e.g. "mailto: example@example.com")


      var href = url.replaceAll(' ', '%20');
      this.$editor.chain().setLink({
        href: href
      }).focus().run();
      this.hideLinkMenu();
    },
    removeLinkUrl: function removeLinkUrl() {
      this.$editor.chain().unsetLink().focus().run();
    },
    isActive: function isActive(selector) {
      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.$editor.isActive(selector, args);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/RichWorkspace.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/RichWorkspace.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.esm.js");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/event-bus */ "./node_modules/@nextcloud/event-bus/dist/index.esm.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");



var IS_PUBLIC = !!document.getElementById('isPublic');
var WORKSPACE_URL = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateOcsUrl)('apps/text' + (IS_PUBLIC ? '/public' : '') + '/workspace', 2);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'RichWorkspace',
  components: {
    Editor: function Editor() {
      return Promise.all(/*! import() | editor */[__webpack_require__.e("vendors"), __webpack_require__.e("editor")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../components/Editor.vue */ "./src/components/Editor.vue"));
    }
  },
  props: {
    path: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      focus: false,
      folder: null,
      file: null,
      loaded: false,
      ready: false,
      autofocus: false,
      autohide: true,
      darkTheme: OCA.Accessibility && OCA.Accessibility.theme === 'dark',
      enabled: OCA.Text.RichWorkspaceEnabled
    };
  },
  computed: {
    shareToken: function shareToken() {
      var _document$getElementB;

      return (_document$getElementB = document.getElementById('sharingToken')) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.value;
    },
    canCreate: function canCreate() {
      return !!(this.folder && this.folder.permissions & OC.PERMISSION_CREATE);
    },
    showEmptyWorkspace: function showEmptyWorkspace() {
      return (!this.file || this.autofocus && !this.ready) && this.canCreate;
    }
  },
  watch: {
    path: function path() {
      this.getFileInfo();
    },
    focus: function focus(newValue) {
      if (!newValue) {
        document.querySelector('#editor').scrollTo(0, 0);
      }
    }
  },
  mounted: function mounted() {
    if (this.enabled) {
      this.getFileInfo();
    }

    (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_2__.subscribe)('Text::showRichWorkspace', this.showRichWorkspace);
    (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_2__.subscribe)('Text::hideRichWorkspace', this.hideRichWorkspace);
    this.listenKeydownEvents();
  },
  beforeDestroy: function beforeDestroy() {
    (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_2__.unsubscribe)('Text::showRichWorkspace', this.showRichWorkspace);
    (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_2__.unsubscribe)('Text::hideRichWorkspace', this.hideRichWorkspace);
    this.unlistenKeydownEvents();
  },
  methods: {
    onBlur: function onBlur() {
      this.listenKeydownEvents();
    },
    onFocus: function onFocus() {
      this.focus = true;
      this.unlistenKeydownEvents();
    },
    reset: function reset() {
      var _this = this;

      this.file = null;
      this.focus = false;
      this.$nextTick(function () {
        _this.creating = false;

        _this.getFileInfo();
      });
    },
    getFileInfo: function getFileInfo() {
      var _this2 = this;

      this.loaded = false;
      this.autofocus = false;
      this.ready = false;
      var params = {
        path: this.path
      };

      if (IS_PUBLIC) {
        params.shareToken = this.shareToken;
      }

      return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(WORKSPACE_URL, {
        params: params
      }).then(function (response) {
        var data = response.data.ocs.data;
        _this2.folder = data.folder || null;
        _this2.file = data.file;
        _this2.editing = true;
        _this2.loaded = true;
        return true;
      }).catch(function (error) {
        if (error.response.data.ocs && error.response.data.ocs.data.folder) {
          _this2.folder = error.response.data.ocs.data.folder;
        } else {
          _this2.folder = null;
        }

        _this2.file = null;
        _this2.loaded = true;
        _this2.ready = true;
        _this2.creating = false;
        return false;
      });
    },
    createNew: function createNew() {
      var _this3 = this;

      if (this.creating) {
        return;
      }

      this.creating = true;
      this.getFileInfo().then(function (workspaceFileExists) {
        if (!workspaceFileExists) {
          return window.FileList.createFile('Readme.md', {
            scrollTo: false,
            animate: false
          }).then(function (status, data) {
            return _this3.getFileInfo();
          });
        }
      }).then(function () {
        _this3.autofocus = true;
      }).catch(function (err) {
        console.warn(err);
      });
    },
    showRichWorkspace: function showRichWorkspace() {
      this.enabled = true;
      this.getFileInfo();
    },
    hideRichWorkspace: function hideRichWorkspace() {
      this.enabled = false;
    },
    listenKeydownEvents: function listenKeydownEvents() {
      window.addEventListener('keydown', this.onKeydown);
    },
    unlistenKeydownEvents: function unlistenKeydownEvents() {
      clearInterval(this.$_timeoutAutohide);
      window.removeEventListener('keydown', this.onKeydown);
    },
    onTimeoutAutohide: function onTimeoutAutohide() {
      this.autohide = true;
    },
    onKeydown: function onKeydown(e) {
      if (e.key !== 'Tab') {
        return;
      } // remove previous timeout


      clearInterval(this.$_timeoutAutohide);
      this.autohide = false; // schedule to normal behaviour

      this.$_timeoutAutohide = setTimeout(this.onTimeoutAutohide, 7000); // 7s
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MenuBubble.vue?vue&type=template&id=5496a10a&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MenuBubble.vue?vue&type=template&id=5496a10a&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("BubbleMenu", {
    staticClass: "menububble",
    attrs: {
      editor: _vm.$editor,
      "tippy-options": {
        onHide: _vm.hideLinkMenu,
        duration: 200,
        placement: "bottom"
      },
      "data-text-el": "menu-bubble"
    }
  }, [_vm.linkMenuIsActive ? _c("form", {
    staticClass: "menububble__form",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.setLinkUrl();
      }
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.linkUrl,
      expression: "linkUrl"
    }],
    ref: "linkInput",
    staticClass: "menububble__input",
    attrs: {
      type: "text",
      placeholder: "https://"
    },
    domProps: {
      value: _vm.linkUrl
    },
    on: {
      keydown: function keydown($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) return null;
        return _vm.hideLinkMenu.apply(null, arguments);
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.linkUrl = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "menububble__button",
    attrs: {
      "data-text-bubble-action": "confirm",
      type: "button",
      tabindex: "0"
    },
    on: {
      click: function click($event) {
        return _vm.setLinkUrl();
      }
    }
  }, [_c("Check")], 1)]) : [_c("button", {
    staticClass: "menububble__button",
    class: {
      "is-active": _vm.isActive("link")
    },
    attrs: {
      "data-text-bubble-action": "add-link"
    },
    on: {
      click: function click($event) {
        return _vm.showLinkMenu();
      }
    }
  }, [_c("LinkIcon"), _vm._v(" "), _c("span", {
    staticClass: "menububble__buttontext"
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.isActive("link") ? _vm.t("text", "Update Link") : _vm.t("text", "Add Link")) + "\n\t\t\t")])], 1), _vm._v(" "), !_vm.isUsingDirectEditing ? _c("button", {
    staticClass: "menububble__button",
    class: {
      "is-active": _vm.isActive("link")
    },
    attrs: {
      "data-text-bubble-action": "add-file"
    },
    on: {
      click: function click($event) {
        return _vm.selectFile();
      }
    }
  }, [_c("Document"), _vm._v(" "), _c("span", {
    staticClass: "menububble__buttontext"
  }, [_vm._v(_vm._s(_vm.t("text", "Link file")))])], 1) : _vm._e(), _vm._v(" "), _vm.isActive("link") ? _c("button", {
    staticClass: "menububble__button",
    class: {
      "is-active": _vm.isActive("link")
    },
    attrs: {
      "data-text-bubble-action": "remove-link"
    },
    on: {
      click: function click($event) {
        return _vm.removeLinkUrl();
      }
    }
  }, [_c("Delete"), _vm._v(" "), _c("span", {
    staticClass: "menububble__buttontext"
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("text", "Remove Link")) + "\n\t\t\t")])], 1) : _vm._e()]], 2);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/RichWorkspace.vue?vue&type=template&id=0cce2262&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/RichWorkspace.vue?vue&type=template&id=0cce2262&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _vm.enabled ? _c("div", {
    class: {
      "icon-loading": !_vm.loaded || !_vm.ready,
      focus: _vm.focus,
      dark: _vm.darkTheme,
      creatable: _vm.canCreate,
      empty: _vm.showEmptyWorkspace
    },
    attrs: {
      id: "rich-workspace"
    }
  }, [_vm.showEmptyWorkspace ? _c("a", {
    staticClass: "empty-workspace",
    attrs: {
      tabindex: "0"
    },
    on: {
      keyup: [function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.createNew.apply(null, arguments);
      }, function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "space", 32, $event.key, [" ", "Spacebar"])) return null;
        return _vm.createNew.apply(null, arguments);
      }],
      click: _vm.createNew
    }
  }, [_c("p", {
    staticClass: "placeholder"
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("text", "Add notes, lists or links …")) + "\n\t\t")])]) : _vm._e(), _vm._v(" "), _vm.file ? _c("Editor", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.ready,
      expression: "ready"
    }],
    key: _vm.file.path,
    attrs: {
      "file-id": _vm.file.id,
      "relative-path": _vm.file.path,
      "share-token": _vm.shareToken,
      mime: _vm.file.mimetype,
      autofocus: _vm.autofocus,
      autohide: _vm.autohide,
      active: "",
      "rich-workspace": ""
    },
    on: {
      ready: function ready($event) {
        _vm.ready = true;
      },
      focus: _vm.onFocus,
      blur: _vm.onBlur,
      error: _vm.reset
    }
  }) : _vm._e()], 1) : _vm._e();
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./src/helpers/files.js":
/*!******************************!*\
  !*** ./src/helpers/files.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FILE_ACTION_IDENTIFIER": () => (/* binding */ FILE_ACTION_IDENTIFIER),
/* harmony export */   "FilesWorkspacePlugin": () => (/* binding */ FilesWorkspacePlugin),
/* harmony export */   "optimalPath": () => (/* binding */ optimalPath),
/* harmony export */   "registerFileActionFallback": () => (/* binding */ registerFileActionFallback),
/* harmony export */   "registerFileCreate": () => (/* binding */ registerFileCreate)
/* harmony export */ });
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.esm.js");
/* harmony import */ var _mime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mime.js */ "./src/helpers/mime.js");
/* harmony import */ var _token_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token.js */ "./src/helpers/token.js");
/* harmony import */ var _views_RichWorkspace_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/RichWorkspace.vue */ "./src/views/RichWorkspace.vue");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _store_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/index.js */ "./src/store/index.js");
/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */






var FILE_ACTION_IDENTIFIER = 'Edit with text app';

var optimalPath = function optimalPath(from, to) {
  var current = from.split('/');
  var target = to.split('/');
  current.pop(); // ignore filename

  while (current[0] === target[0]) {
    current.shift();
    target.shift();
  }

  var relativePath = current.fill('..').concat(target);
  var absolutePath = to.split('/');
  return relativePath.length < absolutePath.length ? relativePath.join('/') : to;
};

var registerFileCreate = function registerFileCreate() {
  var newFileMenuPlugin = {
    attach: function attach(menu) {
      var fileList = menu.fileList; // only attach to main file list, public view is not supported yet

      if (fileList.id !== 'files' && fileList.id !== 'files.public') {
        return;
      } // register the new menu entry


      menu.addMenuEntry({
        id: 'file',
        displayName: t('text', 'New text file'),
        templateName: t('text', 'New text file') + '.' + (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__.loadState)('text', 'default_file_extension'),
        iconClass: 'icon-filetype-text',
        fileType: 'file',
        actionHandler: function actionHandler(name) {
          fileList.createFile(name).then(function (status, data) {
            var fileInfoModel = new OCA.Files.FileInfoModel(data);

            if (typeof OCA.Viewer !== 'undefined') {
              OCA.Files.fileActions.triggerAction('view', fileInfoModel, fileList);
            } else if (typeof OCA.Viewer === 'undefined') {
              OCA.Files.fileActions.triggerAction(FILE_ACTION_IDENTIFIER, fileInfoModel, fileList);
            }
          });
        }
      });
    }
  };
  OC.Plugins.register('OCA.Files.NewFileMenu', newFileMenuPlugin);
};

var registerFileActionFallback = function registerFileActionFallback() {
  var sharingToken = (0,_token_js__WEBPACK_IMPORTED_MODULE_2__.getSharingToken)();
  var filesTable = document.querySelector('#preview table.files-filestable');

  if (!sharingToken || !filesTable) {
    var ViewerRoot = document.createElement('div');
    ViewerRoot.id = 'text-viewer-fallback';
    document.body.appendChild(ViewerRoot);

    var registerAction = function registerAction(mime) {
      return OCA.Files.fileActions.register(mime, FILE_ACTION_IDENTIFIER, OC.PERMISSION_UPDATE | OC.PERMISSION_READ, (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_4__.imagePath)('core', 'actions/rename'), function (filename) {
        var file = window.FileList.findFile(filename);
        Promise.all([Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js")), Promise.all(/*! import() | files-modal */[__webpack_require__.e("vendors"), __webpack_require__.e("files-modal")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../components/PublicFilesEditor.vue */ "./src/components/PublicFilesEditor.vue"))]).then(function (imports) {
          var path = window.FileList.getCurrentDirectory() + '/' + filename;
          var Vue = imports[0].default;
          Vue.prototype.t = window.t;
          Vue.prototype.n = window.n;
          Vue.prototype.OCA = window.OCA;
          var Editor = imports[1].default;
          var vm = new Vue({
            render: function render(h) {
              // eslint-disable-line
              var self = this;
              return h(Editor, {
                props: {
                  fileId: file ? file.id : null,
                  active: true,
                  shareToken: sharingToken,
                  relativePath: path,
                  mimeType: file.mimetype
                },
                on: {
                  close: function close() {
                    // eslint-disable-line
                    self.$destroy();
                  }
                }
              });
            }
          });
          vm.$mount(ViewerRoot);
        });
      }, t('text', 'Edit'));
    };

    for (var i = 0; i < _mime_js__WEBPACK_IMPORTED_MODULE_1__.openMimetypes.length; i++) {
      registerAction(_mime_js__WEBPACK_IMPORTED_MODULE_1__.openMimetypes[i]);
      OCA.Files.fileActions.setDefault(_mime_js__WEBPACK_IMPORTED_MODULE_1__.openMimetypes[i], FILE_ACTION_IDENTIFIER);
    }
  }
};

var FilesWorkspacePlugin = {
  el: null,
  attach: function attach(fileList) {
    if (fileList.id !== 'files' && fileList.id !== 'files.public') {
      return;
    }

    this.el = document.createElement('div');
    fileList.registerHeader({
      id: 'workspace',
      el: this.el,
      render: this.render.bind(this),
      priority: 10
    });
  },
  render: function render(fileList) {
    var _this = this;

    if (fileList.id !== 'files' && fileList.id !== 'files.public') {
      return;
    }

    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js")).then(function (module) {
      var Vue = module.default;
      _this.el.id = 'files-workspace-wrapper';
      Vue.prototype.t = window.t;
      Vue.prototype.n = window.n;
      Vue.prototype.OCA = window.OCA;
      var View = Vue.extend(_views_RichWorkspace_vue__WEBPACK_IMPORTED_MODULE_3__["default"]);
      var vm = new View({
        propsData: {
          path: fileList.getCurrentDirectory()
        },
        store: _store_index_js__WEBPACK_IMPORTED_MODULE_5__["default"]
      }).$mount(_this.el);
      fileList.$el.on('urlChanged', function (data) {
        vm.path = data.dir.toString();
      });
      fileList.$el.on('changeDirectory', function (data) {
        vm.path = data.dir.toString();
      });
    });
  }
};


/***/ }),

/***/ "./src/helpers/token.js":
/*!******************************!*\
  !*** ./src/helpers/token.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSharingToken": () => (/* binding */ getSharingToken)
/* harmony export */ });
var getSharingToken = function getSharingToken() {
  return document.getElementById('sharingToken') ? document.getElementById('sharingToken').value : null;
};



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MenuBubble.vue?vue&type=style&index=0&id=5496a10a&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MenuBubble.vue?vue&type=style&index=0&id=5496a10a&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".menububble[data-v-5496a10a] {\n  display: flex;\n  z-index: 10020;\n  background: var(--color-main-background-translucent);\n  box-shadow: 0 1px 5px var(--color-box-shadow);\n  border-radius: var(--border-radius-large);\n  overflow: hidden;\n  padding: 0;\n  margin-left: 10px;\n  height: 44px;\n}\n.menububble__button[data-v-5496a10a] {\n  flex-grow: 1;\n  border: 0;\n  padding: 0.9rem 0.7rem;\n  margin: 0;\n  border-radius: 0;\n  cursor: pointer;\n  background-color: var(--color-main-background);\n  border-right: 1px solid var(--color-border);\n  display: flex;\n  align-items: center;\n}\n.menububble__button[data-v-5496a10a]:focus, .menububble__button[data-v-5496a10a]:hover {\n  background-color: var(--color-background-hover);\n  border: 0;\n  border-right: 1px solid var(--color-border) !important;\n}\n.menububble__button[data-v-5496a10a]:last-child {\n  border: 0 !important;\n}\n.menububble__buttontext[data-v-5496a10a] {\n  padding: 0.4rem;\n  padding-right: 0;\n}\n.menububble__form[data-v-5496a10a] {\n  display: flex;\n  align-items: center;\n}\n.menububble__input[data-v-5496a10a] {\n  font: inherit;\n  border: none;\n  background: transparent;\n  min-width: 250px;\n  margin: 0 0.5em 0 1em;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/RichWorkspace.vue?vue&type=style&index=0&id=0cce2262&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/RichWorkspace.vue?vue&type=style&index=0&id=0cce2262&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#rich-workspace[data-v-0cce2262] {\n  padding: 0 50px;\n  /* Slightly reduce vertical space */\n  margin-bottom: -24px;\n  text-align: left;\n  max-height: 0;\n  transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);\n  z-index: 61;\n  position: relative;\n}\n#rich-workspace.creatable[data-v-0cce2262] {\n  min-height: 90px;\n}\n\n/* For subfolders, where there are no Recommendations */\n#rich-workspace[data-v-0cce2262]:only-child {\n  margin-bottom: 0;\n}\n.empty-workspace[data-v-0cce2262] {\n  cursor: pointer;\n  display: block;\n  padding-top: 43px;\n  color: var(--color-text-maxcontrast);\n}\n#rich-workspace[data-v-0cce2262] div[contenteditable=false] {\n  width: 100%;\n  padding: 0px;\n  background-color: var(--color-main-background);\n  opacity: 1;\n  border: none;\n}\n#rich-workspace[data-v-0cce2262] .text-editor {\n  height: 100%;\n  position: unset !important;\n  top: auto !important;\n}\n#rich-workspace[data-v-0cce2262] .text-editor__wrapper {\n  position: unset !important;\n  overflow: visible;\n}\n#rich-workspace[data-v-0cce2262] .text-editor__main {\n  overflow: visible !important;\n}\n#rich-workspace[data-v-0cce2262] .content-wrapper {\n  overflow: scroll !important;\n  max-height: calc(40vh - 50px);\n  padding-left: 10px;\n  padding-bottom: 60px; /* ensure menububble fits below */\n}\n#rich-workspace[data-v-0cce2262] .text-editor__wrapper .ProseMirror {\n  padding: 0px;\n  margin: 0;\n}\n#rich-workspace[data-v-0cce2262] .editor__content {\n  margin: 0;\n}\n#rich-workspace.focus[data-v-0cce2262] {\n  max-height: 50vh;\n}\n#rich-workspace[data-v-0cce2262]:not(.focus) {\n  max-height: 30vh;\n  position: relative;\n  overflow: hidden;\n}\n#rich-workspace[data-v-0cce2262]:not(.focus):not(.icon-loading):not(.empty):after {\n  content: \"\";\n  position: absolute;\n  z-index: 1;\n  bottom: 0;\n  left: 0;\n  pointer-events: none;\n  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), var(--color-main-background));\n  width: 100%;\n  height: 4em;\n}\n#rich-workspace.dark[data-v-0cce2262]:not(.focus):not(.icon-loading):after {\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), var(--color-main-background));\n}\n@media only screen and (max-width: 1024px) {\n#rich-workspace[data-v-0cce2262]:not(.focus) {\n    max-height: 30vh;\n}\n}\nhtml.ie #rich-workspace[data-v-0cce2262] .text-editor {\n  position: initial;\n}\nhtml.ie #rich-workspace[data-v-0cce2262] .text-editor__wrapper {\n  position: relative !important;\n  top: auto !important;\n}\nhtml.ie #rich-workspace[data-v-0cce2262] .text-editor__main {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden !important;\n}\nhtml.ie #rich-workspace[data-v-0cce2262] .menubar {\n  position: relative;\n  overflow: hidden;\n  flex-shrink: 0;\n  height: 44px;\n  top: auto;\n}\nhtml.ie #rich-workspace[data-v-0cce2262] .text-editor__main > div:nth-child(2) {\n  min-height: 44px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  flex-shrink: 1;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MenuBubble.vue?vue&type=style&index=0&id=5496a10a&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MenuBubble.vue?vue&type=style&index=0&id=5496a10a&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBubble_vue_vue_type_style_index_0_id_5496a10a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MenuBubble.vue?vue&type=style&index=0&id=5496a10a&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MenuBubble.vue?vue&type=style&index=0&id=5496a10a&scoped=true&lang=scss&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBubble_vue_vue_type_style_index_0_id_5496a10a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBubble_vue_vue_type_style_index_0_id_5496a10a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBubble_vue_vue_type_style_index_0_id_5496a10a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBubble_vue_vue_type_style_index_0_id_5496a10a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/RichWorkspace.vue?vue&type=style&index=0&id=0cce2262&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/RichWorkspace.vue?vue&type=style&index=0&id=0cce2262&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RichWorkspace_vue_vue_type_style_index_0_id_0cce2262_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RichWorkspace.vue?vue&type=style&index=0&id=0cce2262&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/RichWorkspace.vue?vue&type=style&index=0&id=0cce2262&lang=scss&scoped=true&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RichWorkspace_vue_vue_type_style_index_0_id_0cce2262_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RichWorkspace_vue_vue_type_style_index_0_id_0cce2262_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RichWorkspace_vue_vue_type_style_index_0_id_0cce2262_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RichWorkspace_vue_vue_type_style_index_0_id_0cce2262_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/MenuBubble.vue":
/*!***************************************!*\
  !*** ./src/components/MenuBubble.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MenuBubble_vue_vue_type_template_id_5496a10a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuBubble.vue?vue&type=template&id=5496a10a&scoped=true& */ "./src/components/MenuBubble.vue?vue&type=template&id=5496a10a&scoped=true&");
/* harmony import */ var _MenuBubble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuBubble.vue?vue&type=script&lang=js& */ "./src/components/MenuBubble.vue?vue&type=script&lang=js&");
/* harmony import */ var _MenuBubble_vue_vue_type_style_index_0_id_5496a10a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuBubble.vue?vue&type=style&index=0&id=5496a10a&scoped=true&lang=scss& */ "./src/components/MenuBubble.vue?vue&type=style&index=0&id=5496a10a&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MenuBubble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MenuBubble_vue_vue_type_template_id_5496a10a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _MenuBubble_vue_vue_type_template_id_5496a10a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5496a10a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/MenuBubble.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/views/RichWorkspace.vue":
/*!*************************************!*\
  !*** ./src/views/RichWorkspace.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RichWorkspace_vue_vue_type_template_id_0cce2262_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RichWorkspace.vue?vue&type=template&id=0cce2262&scoped=true& */ "./src/views/RichWorkspace.vue?vue&type=template&id=0cce2262&scoped=true&");
/* harmony import */ var _RichWorkspace_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RichWorkspace.vue?vue&type=script&lang=js& */ "./src/views/RichWorkspace.vue?vue&type=script&lang=js&");
/* harmony import */ var _RichWorkspace_vue_vue_type_style_index_0_id_0cce2262_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RichWorkspace.vue?vue&type=style&index=0&id=0cce2262&lang=scss&scoped=true& */ "./src/views/RichWorkspace.vue?vue&type=style&index=0&id=0cce2262&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RichWorkspace_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RichWorkspace_vue_vue_type_template_id_0cce2262_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _RichWorkspace_vue_vue_type_template_id_0cce2262_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0cce2262",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/RichWorkspace.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/MenuBubble.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/components/MenuBubble.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBubble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MenuBubble.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MenuBubble.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBubble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/RichWorkspace.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./src/views/RichWorkspace.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RichWorkspace_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RichWorkspace.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/RichWorkspace.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RichWorkspace_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/MenuBubble.vue?vue&type=template&id=5496a10a&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./src/components/MenuBubble.vue?vue&type=template&id=5496a10a&scoped=true& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBubble_vue_vue_type_template_id_5496a10a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBubble_vue_vue_type_template_id_5496a10a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBubble_vue_vue_type_template_id_5496a10a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MenuBubble.vue?vue&type=template&id=5496a10a&scoped=true& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MenuBubble.vue?vue&type=template&id=5496a10a&scoped=true&");


/***/ }),

/***/ "./src/views/RichWorkspace.vue?vue&type=template&id=0cce2262&scoped=true&":
/*!********************************************************************************!*\
  !*** ./src/views/RichWorkspace.vue?vue&type=template&id=0cce2262&scoped=true& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RichWorkspace_vue_vue_type_template_id_0cce2262_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RichWorkspace_vue_vue_type_template_id_0cce2262_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RichWorkspace_vue_vue_type_template_id_0cce2262_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RichWorkspace.vue?vue&type=template&id=0cce2262&scoped=true& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/RichWorkspace.vue?vue&type=template&id=0cce2262&scoped=true&");


/***/ }),

/***/ "./src/components/MenuBubble.vue?vue&type=style&index=0&id=5496a10a&scoped=true&lang=scss&":
/*!*************************************************************************************************!*\
  !*** ./src/components/MenuBubble.vue?vue&type=style&index=0&id=5496a10a&scoped=true&lang=scss& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuBubble_vue_vue_type_style_index_0_id_5496a10a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MenuBubble.vue?vue&type=style&index=0&id=5496a10a&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MenuBubble.vue?vue&type=style&index=0&id=5496a10a&scoped=true&lang=scss&");


/***/ }),

/***/ "./src/views/RichWorkspace.vue?vue&type=style&index=0&id=0cce2262&lang=scss&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./src/views/RichWorkspace.vue?vue&type=style&index=0&id=0cce2262&lang=scss&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RichWorkspace_vue_vue_type_style_index_0_id_0cce2262_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RichWorkspace.vue?vue&type=style&index=0&id=0cce2262&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/RichWorkspace.vue?vue&type=style&index=0&id=0cce2262&lang=scss&scoped=true&");


/***/ })

}]);
//# sourceMappingURL=editor-rich.js.map?v=f083b2a540fc9fae28f1