function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function _templateObject5(){var e=_taggedTemplateLiteral([":\u241f856efa24b2b203ad1c001649937b5c5738e38f97\u241f8042412267862615798:Add to the template:"]);return _templateObject5=function(){return e},e}function _templateObject4(){var e=_taggedTemplateLiteral([":\u241f3be437ac2b68210476d432cb943672d071eafbf4\u241f7666486264713414021: Import ",":START_TAG_CODE:TuiPullToRefreshModule",":CLOSE_TAG_CODE: into a module where you want to use our component "]);return _templateObject4=function(){return e},e}function _templateObject3(){var e=_taggedTemplateLiteral([":\u241f520ec4e90b03d08172340c9f3dc2f81c282852d2\u241f6098455402556127341:",":START_TAG_DIV: It emits ",":START_TAG_CODE:(pulled)",":CLOSE_TAG_CODE: event when user wants to start loading. ",":CLOSE_TAG_DIV:",":START_TAG_DIV_1: You can finish loading with ",":START_TAG_CODE:TUI_LOADED",":CLOSE_TAG_CODE: stream token that can be provided in DI ",":CLOSE_TAG_DIV:"]);return _templateObject3=function(){return e},e}function _templateObject2(){var e=_taggedTemplateLiteral([":\u241fc95150488c7a4f60330a03c445b32b0771f50a96\u241f3888961141546541647: Component to refresh content after pull top. It emulates appearance of native iOS and Android components "]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral([":\u241fff3774138bffaf62a4b812046dfbb9939c42657e\u241f6492831808763156510:Setup"]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{cIny:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiPullToRefreshModule",(function(){return P}));var i,o,a,r,l,u,c=n("2kYt"),s=n("sEIs"),p=n("SVIu"),d=n("hLNI"),m=n("Qq0t"),f=n("EM62"),b=n("OZlg"),_=n("e0eB"),h=n("aPft"),T=n("iyc4"),v=n("l4xa"),g=n("ZTXN"),I=n("XoZ0"),S=n("zV1d"),y=new g.a,O=((i=function(){function e(t){_classCallCheck(this,e),this.notifications=t}return _createClass(e,[{key:"onPull",value:function(){this.notifications.show("\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043d\u043e\u0432\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445...").subscribe()}},{key:"finishLoading",value:function(){y.next()}}]),e}()).\u0275fac=function(e){return new(e||i)(f["\u0275\u0275directiveInject"](m.TuiNotificationsService))},i.\u0275cmp=f["\u0275\u0275defineComponent"]({type:i,selectors:[["tui-pull-to-refresh-example-1"]],features:[f["\u0275\u0275ProvidersFeature"]([{provide:v.TUI_IS_IOS,useValue:!1},{provide:v.TUI_IS_ANDROID,useValue:!0},{provide:d.TUI_LOADED,useValue:y.asObservable()}])],decls:4,vars:0,consts:[[3,"pulled"],["tuiButton","","type","button",1,"tui-space_top-8","tui-space_bottom-8",3,"click"]],template:function(e,t){1&e&&(f["\u0275\u0275elementStart"](0,"tui-pull-to-refresh",0),f["\u0275\u0275listener"]("pulled",(function(){return t.onPull()})),f["\u0275\u0275text"](1," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),f["\u0275\u0275elementStart"](2,"button",1),f["\u0275\u0275listener"]("click",(function(){return t.finishLoading()})),f["\u0275\u0275text"](3," Finish loading "),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"]())},directives:[I.a,S.a],encapsulation:2,changeDetection:0}),i),x=new g.a,A=((o=function(){function e(t){_classCallCheck(this,e),this.notifications=t}return _createClass(e,[{key:"onPull",value:function(){this.notifications.show("\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043d\u043e\u0432\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445...").subscribe()}},{key:"finishLoading",value:function(){x.next()}}]),e}()).\u0275fac=function(e){return new(e||o)(f["\u0275\u0275directiveInject"](m.TuiNotificationsService))},o.\u0275cmp=f["\u0275\u0275defineComponent"]({type:o,selectors:[["tui-pull-to-refresh-example-2"]],features:[f["\u0275\u0275ProvidersFeature"]([{provide:v.TUI_IS_IOS,useValue:!0},{provide:v.TUI_IS_ANDROID,useValue:!1},{provide:d.TUI_LOADED,useValue:x.asObservable()}])],decls:4,vars:0,consts:[[3,"pulled"],["tuiButton","","type","button",1,"tui-space_top-8","tui-space_bottom-8",3,"click"]],template:function(e,t){1&e&&(f["\u0275\u0275elementStart"](0,"tui-pull-to-refresh",0),f["\u0275\u0275listener"]("pulled",(function(){return t.onPull()})),f["\u0275\u0275text"](1," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),f["\u0275\u0275elementStart"](2,"button",1),f["\u0275\u0275listener"]("click",(function(){return t.finishLoading()})),f["\u0275\u0275text"](3," Finish loading "),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"]())},directives:[I.a,S.a],encapsulation:2,changeDetection:0}),o),D=n("u8jZ"),E=["pageTab",$localize(_templateObject())];function C(e,t){if(1&e&&(f["\u0275\u0275elementStart"](0,"p"),f["\u0275\u0275i18n"](1,a),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](2,"tui-notification",3),f["\u0275\u0275i18nStart"](3,r),f["\u0275\u0275elementStart"](4,"div"),f["\u0275\u0275element"](5,"code"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](6,"div",4),f["\u0275\u0275element"](7,"code"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275i18nEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](8,"tui-doc-example",5),f["\u0275\u0275element"](9,"tui-pull-to-refresh-example-1"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](10,"tui-doc-example",6),f["\u0275\u0275element"](11,"tui-pull-to-refresh-example-2"),f["\u0275\u0275elementEnd"]()),2&e){var n=f["\u0275\u0275nextContext"]();f["\u0275\u0275advance"](8),f["\u0275\u0275property"]("content",n.example1),f["\u0275\u0275advance"](2),f["\u0275\u0275property"]("content",n.example2)}}function L(e,t){if(1&e&&(f["\u0275\u0275elementStart"](0,"ol",7),f["\u0275\u0275elementStart"](1,"li"),f["\u0275\u0275elementStart"](2,"p"),f["\u0275\u0275i18nStart"](3,l),f["\u0275\u0275element"](4,"code"),f["\u0275\u0275i18nEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275element"](5,"tui-doc-code",8),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](6,"li"),f["\u0275\u0275elementStart"](7,"p"),f["\u0275\u0275i18n"](8,u),f["\u0275\u0275elementEnd"](),f["\u0275\u0275element"](9,"tui-doc-code",9),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"]()),2&e){var n=f["\u0275\u0275nextContext"]();f["\u0275\u0275advance"](5),f["\u0275\u0275property"]("code",n.exampleImportModule),f["\u0275\u0275advance"](4),f["\u0275\u0275property"]("code",n.exampleInsertTemplate)}}a=$localize(_templateObject2()),r=$localize(_templateObject3(),"\ufffd#4\ufffd","[\ufffd#5\ufffd|\ufffd#7\ufffd]","[\ufffd/#5\ufffd|\ufffd/#7\ufffd]","[\ufffd/#4\ufffd|\ufffd/#6\ufffd]","\ufffd#6\ufffd","[\ufffd#5\ufffd|\ufffd#7\ufffd]","[\ufffd/#5\ufffd|\ufffd/#7\ufffd]","[\ufffd/#4\ufffd|\ufffd/#6\ufffd]"),r=f["\u0275\u0275i18nPostprocess"](r),l=$localize(_templateObject4(),"\ufffd#4\ufffd","\ufffd/#4\ufffd"),u=$localize(_templateObject5());var j,w,k=((w=function e(){_classCallCheck(this,e),this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {TUI_LOADED} from '@taiga-ui/addon-mobile';\nimport {TUI_IS_ANDROID, TUI_IS_IOS} from '@taiga-ui/cdk';\nimport {TuiNotificationsService} from '@taiga-ui/core';\nimport {Subject} from 'rxjs';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\nconst loaded$ = new Subject<void>();\n\n@Component({\n    selector: 'tui-pull-to-refresh-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n    providers: [\n        {\n            provide: TUI_IS_IOS,\n            useValue: false,\n        },\n        {\n            provide: TUI_IS_ANDROID,\n            useValue: true,\n        },\n        {\n            provide: TUI_LOADED,\n            useValue: loaded$.asObservable(),\n        },\n    ],\n})\nexport class TuiPullToRefreshExample1 {\n    constructor(private readonly notifications: TuiNotificationsService) {}\n\n    onPull() {\n        this.notifications.show('\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043d\u043e\u0432\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445...').subscribe();\n    }\n\n    finishLoading() {\n        loaded$.next();\n    }\n}\n",HTML:'<tui-pull-to-refresh (pulled)="onPull()">\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n    <button\n        tuiButton\n        type="button"\n        class="tui-space_top-8 tui-space_bottom-8"\n        (click)="finishLoading()"\n    >\n        Finish loading\n    </button>\n</tui-pull-to-refresh>\n'},this.example2={TypeScript:"import {Component} from '@angular/core';\nimport {TUI_LOADED} from '@taiga-ui/addon-mobile';\nimport {TUI_IS_ANDROID, TUI_IS_IOS} from '@taiga-ui/cdk';\nimport {TuiNotificationsService} from '@taiga-ui/core';\nimport {Subject} from 'rxjs';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\nconst loaded$ = new Subject<void>();\n\n@Component({\n    selector: 'tui-pull-to-refresh-example-2',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n    providers: [\n        {\n            provide: TUI_IS_IOS,\n            useValue: true,\n        },\n        {\n            provide: TUI_IS_ANDROID,\n            useValue: false,\n        },\n        {\n            provide: TUI_LOADED,\n            useValue: loaded$.asObservable(),\n        },\n    ],\n})\nexport class TuiPullToRefreshExample2 {\n    constructor(private readonly notifications: TuiNotificationsService) {}\n\n    onPull() {\n        this.notifications.show('\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043d\u043e\u0432\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445...').subscribe();\n    }\n\n    finishLoading() {\n        loaded$.next();\n    }\n}\n",HTML:'<tui-pull-to-refresh (pulled)="onPull()">\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n    <button\n        tuiButton\n        type="button"\n        class="tui-space_top-8 tui-space_bottom-8"\n        (click)="finishLoading()"\n    >\n        Finish loading\n    </button>\n</tui-pull-to-refresh>\n'},this.exampleImportModule="import {TuiPullToRefreshModule} from '@taiga-ui/addon-mobile';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiPullToRefreshModule,\n    ],\n...\n",this.exampleInsertTemplate='<tui-pull-to-refresh (pulled)="onPulled()">\n    content\n</tui-pull-to-refresh>\n'}).\u0275fac=function(e){return new(e||w)},w.\u0275cmp=f["\u0275\u0275defineComponent"]({type:w,selectors:[["example-mobile-pull-to-refresh-page"]],decls:4,vars:0,consts:[["header","PullToRefresh","package","ADDON-MOBILE"],["pageTab",""],[6,"pageTab"],[1,"tui-space_top-4"],[1,"tui-space_top-2"],["id","android","heading","Android",3,"content"],["id","ios","heading","iOS",3,"content"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(f["\u0275\u0275elementStart"](0,"tui-doc-page",0),f["\u0275\u0275template"](1,C,12,2,"ng-template",1),f["\u0275\u0275template"](2,L,10,2,"ng-template",2),f["\u0275\u0275i18nAttributes"](3,E),f["\u0275\u0275elementEnd"]())},directives:[b.a,_.a,h.a,T.a,O,A,D.a],encapsulation:2,changeDetection:0}),w),P=((j=function e(){_classCallCheck(this,e)}).\u0275mod=f["\u0275\u0275defineNgModule"]({type:j}),j.\u0275inj=f["\u0275\u0275defineInjector"]({factory:function(e){return new(e||j)},imports:[[c.c,d.TuiPullToRefreshModule,m.TuiButtonModule,m.TuiNotificationModule].concat(_toConsumableArray(p.e),[s.f.forChild(Object(p.n)(k))])]}),j)}}]);