function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function _templateObject7(){var e=_taggedTemplateLiteral([":\u241fd96ae21b5f9b7981f17002f4c6f6bc0e4365dc95\u241f2855971164966194574:Subscribe on changes and scale elements:"]);return _templateObject7=function(){return e},e}function _templateObject6(){var e=_taggedTemplateLiteral([":\u241f856efa24b2b203ad1c001649937b5c5738e38f97\u241f8042412267862615798:Add to the template:"]);return _templateObject6=function(){return e},e}function _templateObject5(){var e=_taggedTemplateLiteral([":\u241f06f4046cfe411dd7ef67e900390d410f169e75d7\u241f3352750824374120008: Import ",":START_TAG_CODE:TuiScrollbarModule",":CLOSE_TAG_CODE: and ",":START_TAG_CODE:TuiElasticStickyModule",":CLOSE_TAG_CODE: into your component module: "]);return _templateObject5=function(){return e},e}function _templateObject4(){var e=_taggedTemplateLiteral([":\u241f380ab580741bec31346978e7cab8062d6970408d\u241f8643289769990675407:Basic"]);return _templateObject4=function(){return e},e}function _templateObject3(){var e=_taggedTemplateLiteral([':\u241f252fa1a3909d21c44af8137d34c320f1793627eb\u241f9097558465533500646: Directive allows to scale "stuck" sticky heading. It can be also used as service ',":START_TAG_CODE:TuiElasticStickyService",":CLOSE_TAG_CODE:"]);return _templateObject3=function(){return e},e}function _templateObject2(){var e=_taggedTemplateLiteral([":\u241fff3774138bffaf62a4b812046dfbb9939c42657e\u241f6492831808763156510:Setup"]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral([":\u241f1bbe38f3d6e9ed9c99d121016ed7736383159712\u241f2999418804116570988:ElasticSticky"]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{"JyY/":function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiElasticStickyModule",(function(){return $}));var a,i,r=n("2kYt"),l=n("sEIs"),c=n("T8fS"),o=n("SVIu"),s=n("hLNI"),p=n("Qq0t"),m=n("EM62"),u=n("OZlg"),d=n("e0eB"),b=n("iyc4"),y=n("l4xa"),f=n("YtkY"),h=n("jIqt"),k=n("Ohay"),S=n("3OZ8"),g=n("B5kp"),w=n("0/K7"),_=((a=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngAfterViewInit",value:function(){this.elasticSticky&&(this.scale$=this.elasticSticky.tuiElasticSticky.pipe(Object(f.a)((function(e){return Object(y.clamp)(e,.5,1)})),Object(h.a)(1),Object(k.a)()))}}]),e}()).\u0275fac=function(e){return new(e||a)},a.\u0275cmp=m["\u0275\u0275defineComponent"]({type:a,selectors:[["tui-elastic-sticky-example-1"]],viewQuery:function(e,t){var n;1&e&&m["\u0275\u0275viewQuery"](s.TuiElasticStickyDirective,!0),2&e&&m["\u0275\u0275queryRefresh"](n=m["\u0275\u0275loadQuery"]())&&(t.elasticSticky=n.first)},decls:23,vars:5,consts:[[1,"scrollbar"],["tuiElasticSticky","",1,"header"],[1,"wrapper"],[1,"money",3,"value"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"tui-scrollbar",0),m["\u0275\u0275elementStart"](1,"p"),m["\u0275\u0275text"](2,"I never wanted to do this in the first place!"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](3,"header",1),m["\u0275\u0275elementStart"](4,"div",2),m["\u0275\u0275elementStart"](5,"tui-money",3),m["\u0275\u0275pipe"](6,"async"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](7,"p"),m["\u0275\u0275text"](8,"I always wanted to be... a lumberjack!"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](9,"p"),m["\u0275\u0275text"](10,"I always wanted to be... a lumberjack!"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](11,"p"),m["\u0275\u0275text"](12,"I always wanted to be... a lumberjack!"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](13,"p"),m["\u0275\u0275text"](14,"I always wanted to be... a lumberjack!"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](15,"p"),m["\u0275\u0275text"](16,"I always wanted to be... a lumberjack!"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](17,"p"),m["\u0275\u0275text"](18,"I always wanted to be... a lumberjack!"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](19,"p"),m["\u0275\u0275text"](20,"I always wanted to be... a lumberjack!"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](21,"p"),m["\u0275\u0275text"](22,"I always wanted to be... a lumberjack!"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](5),m["\u0275\u0275styleProp"]("font-size",m["\u0275\u0275pipeBind1"](6,3,t.scale$),"em"),m["\u0275\u0275property"]("value",237e3))},directives:[S.a,g.a,w.a],pipes:[r.b],styles:["[_nghost-%COMP%]{display:block}.scrollbar[_ngcontent-%COMP%]{height:200px}.header[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:0;height:88px;pointer-events:none}.wrapper[_ngcontent-%COMP%]{color:var(--tui-base-01);background:#bc71c9;font-size:32px;pointer-events:auto}.money[_ngcontent-%COMP%]{display:block;line-height:1em;padding:1em 24px}"],changeDetection:0}),a),E=n("u8jZ"),v=["header",$localize(_templateObject())],j=["pageTab",$localize(_templateObject2())];i=$localize(_templateObject3(),"\ufffd#2\ufffd","\ufffd/#2\ufffd");var O,T,C,I=["heading",$localize(_templateObject4())];function x(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"p"),m["\u0275\u0275i18nStart"](1,i),m["\u0275\u0275element"](2,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](3,"tui-doc-example",3),m["\u0275\u0275i18nAttributes"](4,I),m["\u0275\u0275element"](5,"tui-elastic-sticky-example-1"),m["\u0275\u0275elementEnd"]()),2&e){var n=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("content",n.example1)}}function A(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"ol",4),m["\u0275\u0275elementStart"](1,"li"),m["\u0275\u0275elementStart"](2,"p"),m["\u0275\u0275i18nStart"](3,O),m["\u0275\u0275element"](4,"code"),m["\u0275\u0275element"](5,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](6,"tui-doc-code",5),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](7,"li"),m["\u0275\u0275elementStart"](8,"p"),m["\u0275\u0275i18n"](9,T),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](10,"tui-doc-code",6),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](11,"li"),m["\u0275\u0275elementStart"](12,"p"),m["\u0275\u0275i18n"](13,C),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](14,"tui-doc-code",7),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){var n=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](6),m["\u0275\u0275property"]("code",n.exampleImportModule),m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("code",n.exampleInsertTemplate),m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("code",n.exampleComponent)}}O=$localize(_templateObject5(),"[\ufffd#4\ufffd|\ufffd#5\ufffd]","[\ufffd/#4\ufffd|\ufffd/#5\ufffd]","[\ufffd#4\ufffd|\ufffd#5\ufffd]","[\ufffd/#4\ufffd|\ufffd/#5\ufffd]"),O=m["\u0275\u0275i18nPostprocess"](O),T=$localize(_templateObject6()),C=$localize(_templateObject7());var M,L,D=((L=function e(){_classCallCheck(this,e),this.example1={TypeScript:"import {AfterViewInit, Component, ViewChild} from '@angular/core';\nimport {TuiElasticStickyDirective} from '@taiga-ui/addon-mobile';\nimport {clamp} from '@taiga-ui/cdk';\nimport {Observable} from 'rxjs';\nimport {distinctUntilChanged, map, startWith} from 'rxjs/operators';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-elastic-sticky-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiElasticStickyExample1 implements AfterViewInit {\n    @ViewChild(TuiElasticStickyDirective)\n    readonly elasticSticky?: TuiElasticStickyDirective;\n\n    scale$?: Observable<number>;\n\n    ngAfterViewInit() {\n        if (!this.elasticSticky) {\n            return;\n        }\n\n        // If we use it like that instead of (tuiElasticSticky)=\"onElasticSticky($event)\"\n        // we will not trigger unnecessary change detection when scale is less than 0.5\n        this.scale$ = this.elasticSticky.tuiElasticSticky.pipe(\n            map(scale => clamp(scale, 0.5, 1)),\n            startWith(1),\n            distinctUntilChanged(),\n        );\n    }\n}\n",HTML:'<tui-scrollbar class="scrollbar">\n    <p>I never wanted to do this in the first place!</p>\n    <header class="header" tuiElasticSticky>\n        <div class="wrapper">\n            <tui-money\n                class="money"\n                [style.fontSize.em]="scale$ | async"\n                [value]="237000"\n            ></tui-money>\n        </div>\n    </header>\n    <p>I always wanted to be... a lumberjack!</p>\n    <p>I always wanted to be... a lumberjack!</p>\n    <p>I always wanted to be... a lumberjack!</p>\n    <p>I always wanted to be... a lumberjack!</p>\n    <p>I always wanted to be... a lumberjack!</p>\n    <p>I always wanted to be... a lumberjack!</p>\n    <p>I always wanted to be... a lumberjack!</p>\n    <p>I always wanted to be... a lumberjack!</p>\n</tui-scrollbar>\n',LESS:":host {\n    display: block;\n}\n\n.scrollbar {\n    height: 200px;\n}\n\n.header {\n    position: sticky;\n    top: 0;\n    height: 88px;\n    pointer-events: none;\n}\n\n.wrapper {\n    color: var(--tui-base-01);\n    background: #bc71c9;\n    font-size: 32px;\n    pointer-events: auto;\n}\n\n.money {\n    display: block;\n    line-height: 1em;\n    padding: 1em 24px;\n}\n"},this.exampleImportModule="import {TuiElasticStickyModule} from '@taiga-ui/addon-mobile';\nimport {TuiScrollbarModule} from '@taiga-ui/core';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiScrollbarModule,\n        TuiElasticStickyModule,\n    ],\n...\n",this.exampleInsertTemplate='<tui-scrollbar>\n    <header (tuiElasticSticky)="onElastic($event)"">\n        I\'m sticky\n    </header>\n    ...\n</tui-scrollbar>\n',this.exampleComponent="import {clamp} from '@taiga-ui/cdk';\n\n...\n\nscale = 1;\n\n...\n\nonElastic(scale: number) {\n    this.scale = clamp(scale, 0.5, 1); // We do not want to scale below 50%\n}\n"}).\u0275fac=function(e){return new(e||L)},L.\u0275cmp=m["\u0275\u0275defineComponent"]({type:L,selectors:[["example-tui-elastic-sticky"]],decls:5,vars:0,consts:[["package","ADDON-MOBILE",6,"header"],["pageTab",""],[6,"pageTab"],["id","basic",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"],["filename","myComponent.component.ts",3,"code"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"tui-doc-page",0),m["\u0275\u0275i18nAttributes"](1,v),m["\u0275\u0275template"](2,x,6,1,"ng-template",1),m["\u0275\u0275template"](3,A,15,3,"ng-template",2),m["\u0275\u0275i18nAttributes"](4,j),m["\u0275\u0275elementEnd"]())},directives:[u.a,d.a,b.a,_,E.a],encapsulation:2,changeDetection:0}),L),$=((M=function e(){_classCallCheck(this,e)}).\u0275mod=m["\u0275\u0275defineNgModule"]({type:M}),M.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(e){return new(e||M)},imports:[[r.c,c.TuiMoneyModule,p.TuiScrollbarModule,s.TuiElasticStickyModule].concat(_toConsumableArray(o.e),[l.f.forChild(Object(o.n)(D))])]}),M)}}]);