function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function _templateObject10(){var e=_taggedTemplateLiteral([":\u241f856efa24b2b203ad1c001649937b5c5738e38f97\u241f8042412267862615798:Add to the template:"]);return _templateObject10=function(){return e},e}function _templateObject9(){var e=_taggedTemplateLiteral([":\u241f218ef47ee70a1ea1ab66e40514ffa9210bf82c74\u241f4958728332946008265: Import ",":START_TAG_CODE:TuiPaginationModule",":CLOSE_TAG_CODE: into a module where you want to use our component "]);return _templateObject9=function(){return e},e}function _templateObject8(){var e=_taggedTemplateLiteral([":\u241f179c074c54faa08ac2cd371aae91270430094cb4\u241f5919257397270847364: Size "]);return _templateObject8=function(){return e},e}function _templateObject7(){var e=_taggedTemplateLiteral([":\u241f7188b68f4c0ede7f60421cd661e5d0791220c304\u241f4207451728711936955: Total pages count "]);return _templateObject7=function(){return e},e}function _templateObject6(){var e=_taggedTemplateLiteral([":\u241fbf69fc21a86418012f148932ebe5eb91bcae5b45\u241f6937522081049060052: Active page index "]);return _templateObject6=function(){return e},e}function _templateObject5(){var e=_taggedTemplateLiteral([":\u241f30781cbf047ad38e186ad68e325b742909287b00\u241f1810512560805883949: Accepts focus with keyboard "]);return _templateObject5=function(){return e},e}function _templateObject4(){var e=_taggedTemplateLiteral([":\u241fa5c05002b0ac2040f1aede5e727e0ffd06eda819\u241f7590013429208346303:Custom"]);return _templateObject4=function(){return e},e}function _templateObject3(){var e=_taggedTemplateLiteral([":\u241f47ebd404b33f1353e628e1beaab432a604aa0267\u241f1450301538176787808:Visible edge pages"]);return _templateObject3=function(){return e},e}function _templateObject2(){var e=_taggedTemplateLiteral([":\u241f7447e99a313dfd660dfdac371c1790c906afdfbc\u241f1343291924581059799:Visible pages around active"]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral([":\u241f380ab580741bec31346978e7cab8062d6970408d\u241f8643289769990675407:Basic"]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{G5ph:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiPaginationModule",(function(){return X}));var a,i,o,r=n("2kYt"),l=n("nIj0"),c=n("sEIs"),d=n("SVIu"),u=n("dvRg"),p=n("kiPw"),m=".slider {\n    width: 200px;\n    margin-bottom: 1em;\n}\n",s=n("EM62"),g=n("OZlg"),f=n("e0eB"),h=n("iyc4"),y=n("cc69"),x=n("X03X"),b=((o=function(){function e(){_classCallCheck(this,e),this.length=64,this.index=10}return _createClass(e,[{key:"goToPage",value:function(e){this.index=e,console.log("New page:",e)}}]),e}()).\u0275fac=function(e){return new(e||o)},o.\u0275cmp=s["\u0275\u0275defineComponent"]({type:o,selectors:[["tui-pagination-example-1"]],decls:2,vars:5,consts:[["secondary","index","size","m",1,"slider",3,"max","quantum","ngModel","ngModelChange"],[3,"length","index","indexChange"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-input-slider",0),s["\u0275\u0275listener"]("ngModelChange",(function(e){return t.index=e})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](1,"tui-pagination",1),s["\u0275\u0275listener"]("indexChange",(function(e){return t.goToPage(e)})),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275property"]("max",t.length-1)("quantum",1)("ngModel",t.index),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("length",t.length)("index",t.index))},directives:[y.a,l.NgControlStatus,l.NgModel,x.a],styles:[".slider[_ngcontent-%COMP%]{width:200px;margin-bottom:1em}"],changeDetection:0}),o),P=((i=function e(){_classCallCheck(this,e),this.activePadding=2}).\u0275fac=function(e){return new(e||i)},i.\u0275cmp=s["\u0275\u0275defineComponent"]({type:i,selectors:[["tui-pagination-example-2"]],decls:2,vars:6,consts:[["secondary","activePadding","size","m",1,"slider",3,"max","quantum","ngModel","ngModelChange"],[3,"activePadding","length","index"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-input-slider",0),s["\u0275\u0275listener"]("ngModelChange",(function(e){return t.activePadding=e})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](1,"tui-pagination",1)),2&e&&(s["\u0275\u0275property"]("max",6)("quantum",1)("ngModel",t.activePadding),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("activePadding",t.activePadding)("length",64)("index",10))},directives:[y.a,l.NgControlStatus,l.NgModel,x.a],styles:[".slider[_ngcontent-%COMP%]{width:200px;margin-bottom:1em}"],changeDetection:0}),i),C=((a=function e(){_classCallCheck(this,e),this.sidePadding=3}).\u0275fac=function(e){return new(e||a)},a.\u0275cmp=s["\u0275\u0275defineComponent"]({type:a,selectors:[["tui-pagination-example-3"]],decls:2,vars:6,consts:[["secondary","sidePadding","size","m",1,"slider",3,"max","quantum","ngModel","ngModelChange"],[3,"sidePadding","length","index"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-input-slider",0),s["\u0275\u0275listener"]("ngModelChange",(function(e){return t.sidePadding=e})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](1,"tui-pagination",1)),2&e&&(s["\u0275\u0275property"]("max",6)("quantum",1)("ngModel",t.sidePadding),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("sidePadding",t.sidePadding)("length",64)("index",10))},directives:[y.a,l.NgControlStatus,l.NgModel,x.a],styles:[".slider[_ngcontent-%COMP%]{width:200px;margin-bottom:1em}"],changeDetection:0}),a);function v(e,t){if(1&e&&s["\u0275\u0275text"](0),2&e){var n=t.$implicit,a=s["\u0275\u0275nextContext"]();s["\u0275\u0275textInterpolate1"](" ",a.days[n],"\n")}}var _,T,S,M,O,j,w,E=((_=function e(){_classCallCheck(this,e),this.days=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}).\u0275fac=function(e){return new(e||_)},_.\u0275cmp=s["\u0275\u0275defineComponent"]({type:_,selectors:[["tui-pagination-example-4"]],decls:3,vars:2,consts:[[3,"length","content"],["polymorpheus",""],["test","polymorpheus"]],template:function(e,t){if(1&e&&(s["\u0275\u0275element"](0,"tui-pagination",0),s["\u0275\u0275template"](1,v,1,1,"ng-template",1,2,s["\u0275\u0275templateRefExtractor"])),2&e){var n=s["\u0275\u0275reference"](2);s["\u0275\u0275property"]("length",7)("content",n)}},directives:[x.a,p.e],encapsulation:2,changeDetection:0}),_),z=n("EPR0"),V=n("yHor"),A=n("zGJC"),L=n("u8jZ"),k=["heading",$localize(_templateObject())],I=["heading",$localize(_templateObject2())],D=["heading",$localize(_templateObject3())],N=["heading",$localize(_templateObject4())];function $(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"tui-doc-example",2),s["\u0275\u0275i18nAttributes"](1,k),s["\u0275\u0275element"](2,"tui-pagination-example-1"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"tui-doc-example",3),s["\u0275\u0275i18nAttributes"](4,I),s["\u0275\u0275element"](5,"tui-pagination-example-2"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"tui-doc-example",4),s["\u0275\u0275i18nAttributes"](7,D),s["\u0275\u0275element"](8,"tui-pagination-example-3"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](9,"tui-doc-example",5),s["\u0275\u0275i18nAttributes"](10,N),s["\u0275\u0275element"](11,"tui-pagination-example-4"),s["\u0275\u0275elementEnd"]()),2&e){var n=s["\u0275\u0275nextContext"]();s["\u0275\u0275property"]("content",n.example1),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",n.example2),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",n.example3),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",n.example4)}}function q(e,t){1&e&&s["\u0275\u0275i18n"](0,T)}function U(e,t){1&e&&s["\u0275\u0275i18n"](0,S)}function H(e,t){1&e&&s["\u0275\u0275i18n"](0,M)}function R(e,t){1&e&&s["\u0275\u0275i18n"](0,O)}function F(e,t){if(1&e){var n=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tui-doc-demo"),s["\u0275\u0275elementStart"](1,"tui-pagination",6),s["\u0275\u0275listener"]("indexChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().index=e})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"tui-doc-documentation"),s["\u0275\u0275template"](3,q,1,0,"ng-template",7),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().focusable=e})),s["\u0275\u0275template"](4,U,1,0,"ng-template",8),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().index=e})),s["\u0275\u0275template"](5,H,1,0,"ng-template",9),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().length=e})),s["\u0275\u0275template"](6,R,1,0,"ng-template",10),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().size=e})),s["\u0275\u0275elementEnd"]()}if(2&e){var a=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("focusable",a.focusable)("length",a.length)("size",a.size)("index",a.index),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("documentationPropertyValue",a.focusable),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValue",a.index),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValue",a.length),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",a.sizeVariants)("documentationPropertyValue",a.size)}}function G(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"ol",11),s["\u0275\u0275elementStart"](1,"li"),s["\u0275\u0275elementStart"](2,"p"),s["\u0275\u0275i18nStart"](3,j),s["\u0275\u0275element"](4,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](5,"tui-doc-code",12),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"li"),s["\u0275\u0275elementStart"](7,"p"),s["\u0275\u0275i18n"](8,w),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](9,"tui-doc-code",13),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){var n=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("code",n.exampleImportModule),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("code",n.exampleInsertTemplate)}}T=$localize(_templateObject5()),S=$localize(_templateObject6()),M=$localize(_templateObject7()),O=$localize(_templateObject8()),j=$localize(_templateObject9(),"\ufffd#4\ufffd","\ufffd/#4\ufffd"),w=$localize(_templateObject10());var W,B,J=((B=function e(){_classCallCheck(this,e),this.exampleImportModule="import {TuiPaginationModule} from '@taiga-ui/kit';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiPaginationModule\n    ],\n...\n",this.exampleInsertTemplate='<tui-pagination [length]="pageCount"\n                [index]="currentPage"\n                (indexChange)="goToPage($event)"></tui-pagination>\n',this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-pagination-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiPaginationExample1 {\n    length = 64;\n\n    index = 10;\n\n    goToPage(index: number) {\n        this.index = index;\n        console.log('New page:', index);\n    }\n}\n",HTML:'<tui-input-slider\n    class="slider"\n    secondary="index"\n    size="m"\n    [max]="length - 1"\n    [quantum]="1"\n    [(ngModel)]="index"\n></tui-input-slider>\n\n<tui-pagination\n    [length]="length"\n    [index]="index"\n    (indexChange)="goToPage($event)"\n></tui-pagination>\n',LESS:m},this.example2={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-pagination-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiPaginationExample2 {\n    activePadding = 2;\n}\n",HTML:'<tui-input-slider\n    class="slider"\n    secondary="activePadding"\n    size="m"\n    [max]="6"\n    [quantum]="1"\n    [(ngModel)]="activePadding"\n></tui-input-slider>\n\n<tui-pagination\n    [activePadding]="activePadding"\n    [length]="64"\n    [index]="10"\n></tui-pagination>\n',LESS:m},this.example3={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-pagination-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiPaginationExample3 {\n    sidePadding = 3;\n}\n",HTML:'<tui-input-slider\n    class="slider"\n    secondary="sidePadding"\n    size="m"\n    [max]="6"\n    [quantum]="1"\n    [(ngModel)]="sidePadding"\n></tui-input-slider>\n\n<tui-pagination\n    [sidePadding]="sidePadding"\n    [length]="64"\n    [index]="10"\n></tui-pagination>\n',LESS:m},this.example4={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-pagination-example-4',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiPaginationExample4 {\n    readonly days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];\n}\n",HTML:'<tui-pagination [length]="7" [content]="test"></tui-pagination>\n<ng-template #test="polymorpheus" polymorpheus let-index>\n    {{days[index]}}\n</ng-template>\n'},this.focusable=!0,this.index=0,this.length=8,this.sizeVariants=["s","m"],this.size=this.sizeVariants[1]}).\u0275fac=function(e){return new(e||B)},B.\u0275cmp=s["\u0275\u0275defineComponent"]({type:B,selectors:[["example-tui-pagination"]],decls:4,vars:0,consts:[["header","Pagination","package","KIT"],["pageTab",""],["id","base",3,"content",6,"heading"],["id","around",3,"content",6,"heading"],["id","edges",3,"content",6,"heading"],["id","custom",3,"content",6,"heading"],[3,"focusable","length","size","index","indexChange"],["documentationPropertyName","focusable","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","index","documentationPropertyMode","input-output","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","length","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeS",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-doc-page",0),s["\u0275\u0275template"](1,$,12,4,"ng-template",1),s["\u0275\u0275template"](2,F,7,9,"ng-template",1),s["\u0275\u0275template"](3,G,10,2,"ng-template",1),s["\u0275\u0275elementEnd"]())},directives:[g.a,f.a,h.a,b,P,C,E,z.a,x.a,V.a,A.a,L.a],encapsulation:2,changeDetection:0}),B),X=((W=function e(){_classCallCheck(this,e)}).\u0275mod=s["\u0275\u0275defineNgModule"]({type:W}),W.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(e){return new(e||W)},imports:[[u.TuiBadgeModule,u.TuiPaginationModule,u.TuiInputSliderModule,r.c,u.TuiRadioListModule,l.FormsModule,l.ReactiveFormsModule].concat(_toConsumableArray(d.e),[c.f.forChild(Object(d.n)(J)),p.c])]}),W)}}]);