(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{uSPj:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiSliderModule",(function(){return oe}));var o=n("An66"),a=n("3kIJ"),r=n("1VvW"),i=n("SVIu"),l=n("Qq0t"),c=n("dvRg"),s=n("kZht"),m=n("OZlg"),d=n("e0eB"),p=n("yZWP"),u=n("iyc4"),g=n("VONa");let f=(()=>{class e{constructor(){this.value=4,this.formControl=new a.FormControl(60)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-slider-example-1"]],decls:2,vars:2,consts:[["tuiSlider","","type","range","max","10","step","1","size","s",3,"ngModel","ngModelChange"],["tuiSlider","","type","range","value","60","size","m",3,"formControl"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"input",0),s["\u0275\u0275listener"]("ngModelChange",(function(e){return t.value=e})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](1,"input",1)),2&e&&(s["\u0275\u0275property"]("ngModel",t.value),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("formControl",t.formControl))},directives:[g.a,a.RangeValueAccessor,a.DefaultValueAccessor,a.NgControlStatus,a.NgModel,a.FormControlDirective],encapsulation:2,changeDetection:0}),e})(),C=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-slider-example-2"]],decls:3,vars:0,consts:[["tuiSlider","","type","range","value","65",1,"first"],["tuiSlider","","type","range","value","80",1,"second"],["tuiSlider","","type","range","value","40",1,"third"]],template:function(e,t){1&e&&(s["\u0275\u0275element"](0,"input",0),s["\u0275\u0275element"](1,"input",1),s["\u0275\u0275element"](2,"input",2))},directives:[g.a],styles:[".first[_ngcontent-%COMP%]{--tui-primary:var(--tui-support-01);--tui-primary-hover:var(--tui-support-21);--tui-primary-active:var(--tui-support-02)}.second[_ngcontent-%COMP%]{--tui-primary:var(--tui-support-03);--tui-primary-hover:var(--tui-support-04);--tui-primary-active:var(--tui-positive)}.third[_ngcontent-%COMP%]{--tui-primary:var(--tui-support-12);--tui-primary-hover:var(--tui-support-07);--tui-primary-active:var(--tui-support-08)}"],changeDetection:0}),e})();var _=n("aPft");function S(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"span"),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"]("$",e,"")}}let b=(()=>{class e{constructor(){this.labels=[0,250,500,750,1e3],this.formControl=new a.FormControl(250)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-slider-example-3"]],decls:7,vars:6,consts:[["tuiSlider","","type","range","size","m",3,"max","step","segments","formControl"],[1,"ticks-labels"],[4,"ngFor","ngForOf"]],template:function(e,t){1&e&&(s["\u0275\u0275element"](0,"input",0),s["\u0275\u0275elementStart"](1,"div",1),s["\u0275\u0275template"](2,S,2,1,"span",2),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"p"),s["\u0275\u0275text"](4," Control value: "),s["\u0275\u0275elementStart"](5,"code"),s["\u0275\u0275text"](6),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275property"]("max",1e3)("step",250)("segments",4)("formControl",t.formControl),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngForOf",t.labels),s["\u0275\u0275advance"](4),s["\u0275\u0275textInterpolate"](t.formControl.value))},directives:[g.a,a.RangeValueAccessor,a.DefaultValueAccessor,a.NgControlStatus,a.FormControlDirective,o.s],styles:[".ticks-labels[_ngcontent-%COMP%]{display:flex;margin:0 .5rem;font:var(--tui-font-text-s)}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;flex:2;text-align:center}.ticks-labels[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:first-child{left:-.5rem;flex:1;text-align:left}.ticks-labels[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:last-child{right:-.5rem;flex:1;text-align:right}tui-input-slider[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:calc(var(--tui-radius-m)/2 + .5rem)}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:1rem;margin-right:1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:first-child{left:-1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:last-child{right:-1rem}"],changeDetection:0}),e})(),y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-slider-example-4"]],decls:1,vars:0,consts:[["tuiSlider","","type","range","disabled","","value","80"]],template:function(e,t){1&e&&s["\u0275\u0275element"](0,"input",0)},directives:[g.a],encapsulation:2,changeDetection:0}),e})();var h=n("kwWx");function T(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"span"),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate"](e)}}let O=(()=>{class e{constructor(){this.labels=["5 000","100 000","300 000","1 000 000"],this.formControl=new a.FormControl(72e4),this.segments=this.labels.length-1,this.keySteps=[[0,5e3],[100/3,1e5],[100/3*2,3e5],[100,1e6]]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-slider-example-5"]],decls:8,vars:8,consts:[["tuiSlider","","type","range",3,"keySteps","max","segments","formControl"],[1,"ticks-labels"],[4,"ngFor","ngForOf"],["automation-id","key-steps-example-control-value"]],template:function(e,t){1&e&&(s["\u0275\u0275element"](0,"input",0),s["\u0275\u0275elementStart"](1,"div",1),s["\u0275\u0275template"](2,T,2,1,"span",2),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"p",3),s["\u0275\u0275text"](4," Control value: "),s["\u0275\u0275elementStart"](5,"code"),s["\u0275\u0275text"](6),s["\u0275\u0275pipe"](7,"number"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275property"]("keySteps",t.keySteps)("max",10*t.segments)("segments",t.segments)("formControl",t.formControl),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngForOf",t.labels),s["\u0275\u0275advance"](4),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](7,6,t.formControl.value)))},directives:[h.a,g.a,a.RangeValueAccessor,a.DefaultValueAccessor,a.NgControlStatus,a.FormControlDirective,o.s],pipes:[o.g],styles:[".ticks-labels[_ngcontent-%COMP%]{display:flex;margin:0 .5rem;font:var(--tui-font-text-s)}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;flex:2;text-align:center}.ticks-labels[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:first-child{left:-.5rem;flex:1;text-align:left}.ticks-labels[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:last-child{right:-.5rem;flex:1;text-align:right}tui-input-slider[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:calc(var(--tui-radius-m)/2 + .5rem)}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:1rem;margin-right:1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:first-child{left:-1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:last-child{right:-1rem}"],changeDetection:0}),e})();var P,x,E=n("EPR0"),v=n("yHor"),A=n("zGJC"),M=n("u8jZ");P=$localize`:␟adbed55b9ad040f016b7224d2376dcc556c96cde␟5051981916551990985:${"\ufffd#2\ufffd"}:START_TAG_DT:${"[\ufffd#3\ufffd|\ufffd#5\ufffd]"}:START_TAG_CODE:tuiSlider${"[\ufffd/#3\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_CODE:${"\ufffd/#2\ufffd"}:CLOSE_TAG_DT:${"\ufffd#4\ufffd"}:START_TAG_DD: attribute component for native html tag ${"[\ufffd#3\ufffd|\ufffd#5\ufffd]"}:START_TAG_CODE:<input type="range" />${"[\ufffd/#3\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_CODE: to choose a value from a limited range. ${"\ufffd/#4\ufffd"}:CLOSE_TAG_DD:`,P=s["\u0275\u0275i18nPostprocess"](P),x=$localize`:␟d17c664a1f4783e75fde9506a0cc298adc5d77b8␟6584790122390772242:${"\ufffd#13\ufffd"}:START_TAG_STRONG:Usage:${"\ufffd/#13\ufffd"}:CLOSE_TAG_STRONG:${"\ufffd#14\ufffd"}:START_TAG_CODE:<input tuiSlider type="range" min="0" max="100" step="1" />${"\ufffd/#14\ufffd"}:CLOSE_TAG_CODE: . `;const $=["heading",$localize`:␟287516b9b4b5fac08bbffe1ebbaa2575b8ef50d8␟2165905371258601036:Sizes`],D=["heading",$localize`:␟e93acd761801b3f2077278b282163a9c03283b8c␟5267754967054916445:Colors`],k=["heading",$localize`:␟2491f5c0a188387f341fc89ca14558c666c96dc9␟3070830036852627562:With visual segments`];var G,L;G=$localize`:␟b71cff54548c311b9382985ce173ddbd05b1455a␟7222770680801212686: Use mixin ${"\ufffd#26\ufffd"}:START_TAG_CODE:tui-slider-ticks-labels${"\ufffd/#26\ufffd"}:CLOSE_TAG_CODE: to arrange ticks' labels (it places them strictly below ticks). `,L=$localize`:␟b43e37a55c51eed01f3c7b31c7fb8c20e9ea09ce␟7490709384902699339: The mixin accepts only a single argument – size of the slider ( ${"[\ufffd#29\ufffd|\ufffd#30\ufffd]"}:START_TAG_CODE:m${"[\ufffd/#29\ufffd|\ufffd/#30\ufffd]"}:CLOSE_TAG_CODE: or ${"[\ufffd#29\ufffd|\ufffd#30\ufffd]"}:START_TAG_CODE:s${"[\ufffd/#29\ufffd|\ufffd/#30\ufffd]"}:CLOSE_TAG_CODE: ). `,L=s["\u0275\u0275i18nPostprocess"](L);const V=["heading",$localize`:␟f39256070bfc0714020dfee08895421fc1527014␟5769292297914455214:Disabled`],z=["heading",$localize`:␟21e3d6f0be967074ebe7bfc308ce12e1e9ef0763␟2043510449142398319:With key steps`];var R,w,N,F,I,H,W,K,j;function J(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"dl"),s["\u0275\u0275i18nStart"](1,P),s["\u0275\u0275elementStart"](2,"dt"),s["\u0275\u0275element"](3,"code"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"dd"),s["\u0275\u0275element"](5,"code"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"p"),s["\u0275\u0275text"](7," Read more about current input's type in "),s["\u0275\u0275elementStart"](8,"a",2),s["\u0275\u0275text"](9," MDN Docs "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](10," . "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](11,"p"),s["\u0275\u0275i18nStart"](12,x),s["\u0275\u0275element"](13,"strong"),s["\u0275\u0275element"](14,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](15,"tui-doc-example",3),s["\u0275\u0275i18nAttributes"](16,$),s["\u0275\u0275element"](17,"tui-slider-example-1"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](18,"tui-doc-example",4),s["\u0275\u0275i18nAttributes"](19,D),s["\u0275\u0275element"](20,"tui-slider-example-2"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](21,"tui-doc-example",5),s["\u0275\u0275i18nAttributes"](22,k),s["\u0275\u0275elementStart"](23,"tui-notification",6),s["\u0275\u0275elementStart"](24,"p",7),s["\u0275\u0275i18nStart"](25,G),s["\u0275\u0275element"](26,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](27,"p"),s["\u0275\u0275i18nStart"](28,L),s["\u0275\u0275element"](29,"code"),s["\u0275\u0275element"](30,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](31,"tui-slider-example-3"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](32,"tui-doc-example",8),s["\u0275\u0275i18nAttributes"](33,V),s["\u0275\u0275element"](34,"tui-slider-example-4"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](35,"tui-doc-example",9),s["\u0275\u0275i18nAttributes"](36,z),s["\u0275\u0275elementStart"](37,"dl",10),s["\u0275\u0275i18nStart"](38,R),s["\u0275\u0275elementStart"](39,"dt"),s["\u0275\u0275element"](40,"strong"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](41,"dd"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](42,"tui-slider-example-5"),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](15),s["\u0275\u0275property"]("content",e.example1),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",e.example2),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",e.example3),s["\u0275\u0275advance"](11),s["\u0275\u0275property"]("content",e.example4),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",e.example5)}}function U(e,t){if(1&e&&s["\u0275\u0275element"](0,"input",18),2&e){const e=s["\u0275\u0275nextContext"](2);s["\u0275\u0275property"]("max",e.max)("min",e.min)("step",e.step)("formControl",e.control)("size",e.size)("segments",e.segments)}}function Z(e,t){1&e&&(s["\u0275\u0275i18nStart"](0,w),s["\u0275\u0275element"](1,"code"),s["\u0275\u0275i18nEnd"]())}function q(e,t){1&e&&(s["\u0275\u0275i18nStart"](0,N),s["\u0275\u0275element"](1,"a",19),s["\u0275\u0275element"](2,"code"),s["\u0275\u0275i18nEnd"]())}function B(e,t){1&e&&(s["\u0275\u0275i18nStart"](0,F),s["\u0275\u0275element"](1,"a",20),s["\u0275\u0275element"](2,"code"),s["\u0275\u0275i18nEnd"]())}function Q(e,t){1&e&&(s["\u0275\u0275i18nStart"](0,I),s["\u0275\u0275element"](1,"a",21),s["\u0275\u0275element"](2,"code"),s["\u0275\u0275i18nEnd"]())}function Y(e,t){1&e&&s["\u0275\u0275i18n"](0,H)}function X(e,t){1&e&&(s["\u0275\u0275i18nStart"](0,W),s["\u0275\u0275element"](1,"p"),s["\u0275\u0275element"](2,"code"),s["\u0275\u0275i18nEnd"]())}function ee(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tui-doc-demo",11),s["\u0275\u0275template"](1,U,1,6,"ng-template"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"tui-doc-documentation"),s["\u0275\u0275template"](3,Z,2,0,"ng-template",12),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().disabled=t})),s["\u0275\u0275template"](4,q,3,0,"ng-template",13),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().max=t})),s["\u0275\u0275template"](5,B,3,0,"ng-template",14),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().min=t})),s["\u0275\u0275template"](6,Q,3,0,"ng-template",15),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().step=t})),s["\u0275\u0275template"](7,Y,1,0,"ng-template",16),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().size=t})),s["\u0275\u0275template"](8,X,3,0,"ng-template",17),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().segments=t})),s["\u0275\u0275elementEnd"]()}if(2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275property"]("control",e.control),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("documentationPropertyValue",e.disabled),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValue",e.max),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValue",e.min),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValue",e.step),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",e.sizeVariants)("documentationPropertyValue",e.size),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValue",e.segments)}}function te(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"ol",22),s["\u0275\u0275elementStart"](1,"li"),s["\u0275\u0275text"](2," Import an Angular module for forms and "),s["\u0275\u0275elementStart"](3,"code"),s["\u0275\u0275text"](4,"TuiSliderModule"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](5," in the same module where you want to use our component: "),s["\u0275\u0275element"](6,"tui-doc-code",23),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"li"),s["\u0275\u0275elementStart"](8,"p"),s["\u0275\u0275i18nStart"](9,K),s["\u0275\u0275element"](10,"code"),s["\u0275\u0275element"](11,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](12,"tui-doc-code",24),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](13,"li"),s["\u0275\u0275elementStart"](14,"p"),s["\u0275\u0275i18n"](15,j),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](16,"tui-doc-code",25),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](6),s["\u0275\u0275property"]("code",e.exampleImportModule),s["\u0275\u0275advance"](6),s["\u0275\u0275property"]("code",e.exampleDeclareForm),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("code",e.exampleInsertTemplate)}}R=$localize`:␟1d46e08d2d025f9bef376d0b06ec92af3afa4c8a␟626346517069880366:${"\ufffd#39\ufffd"}:START_TAG_DT:${"\ufffd#40\ufffd"}:START_TAG_STRONG:Key steps${"\ufffd/#40\ufffd"}:CLOSE_TAG_STRONG:${"\ufffd/#39\ufffd"}:CLOSE_TAG_DT:${"\ufffd#41\ufffd"}:START_TAG_DD:anchor points of non-uniform format between value and position${"\ufffd/#41\ufffd"}:CLOSE_TAG_DD:`,w=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,N=$localize`:␟7a9c2463dd2db1c76ddb6ab9b5ac72155b3febd3␟2441366795513240531: Native attribute ${"\ufffd#1\ufffd"}:START_LINK: max ${"\ufffd/#1\ufffd"}:CLOSE_LINK: of ${"\ufffd#2\ufffd"}:START_TAG_CODE:<input type="range" />${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE:`,F=$localize`:␟0f9865bd37150fde43d1803c880f50904f4c19e5␟8291402794161186662: Native attribute ${"\ufffd#1\ufffd"}:START_LINK: min ${"\ufffd/#1\ufffd"}:CLOSE_LINK: of ${"\ufffd#2\ufffd"}:START_TAG_CODE:<input type="range" />${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE:`,I=$localize`:␟3ef21ae73998ca229a066c4ebe6df772bcb4e1ff␟3867818126343854694: Native attribute ${"\ufffd#1\ufffd"}:START_LINK: step ${"\ufffd/#1\ufffd"}:CLOSE_LINK: of ${"\ufffd#2\ufffd"}:START_TAG_CODE:<input type="range" />${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE:`,H=$localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `,W=$localize`:␟a02033b049807cde07365ac37e1d79258c6f8b38␟1000197536572415972:${"\ufffd#1\ufffd"}:START_PARAGRAPH:A number of visual segments${"\ufffd/#1\ufffd"}:CLOSE_PARAGRAPH: (use ${"\ufffd#2\ufffd"}:START_TAG_CODE:1${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: for no ticks) `,K=$localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\ufffd#10\ufffd|\ufffd#11\ufffd]"}:START_TAG_CODE:FormGroup${"[\ufffd/#10\ufffd|\ufffd/#11\ufffd]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\ufffd#10\ufffd|\ufffd#11\ufffd]"}:START_TAG_CODE:FormControl${"[\ufffd/#10\ufffd|\ufffd/#11\ufffd]"}:CLOSE_TAG_CODE: ) in your component: `,K=s["\u0275\u0275i18nPostprocess"](K),j=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let ne=(()=>{class e{constructor(){this.sizeVariants=["s","m"],this.control=new a.FormControl(1),this.max=5,this.min=0,this.step=1,this.size=this.sizeVariants[1],this.segments=this.max,this.exampleImportModule=n.e(1295).then(n.bind(null,"9onM")),this.exampleDeclareForm=n.e(1294).then(n.bind(null,"WkiS")),this.exampleInsertTemplate=n.e(1296).then(n.bind(null,"C16L")),this.example1={HTML:n.e(1281).then(n.bind(null,"L19o")),TypeScript:n.e(1282).then(n.bind(null,"JdZO"))},this.example2={HTML:n.e(1283).then(n.bind(null,"jPzD")),LESS:n.e(1284).then(n.bind(null,"FYff")),TypeScript:n.e(1285).then(n.bind(null,"fxdJ"))},this.example3={HTML:n.e(1286).then(n.bind(null,"s8uW")),LESS:n.e(1287).then(n.bind(null,"fkFy")),TypeScript:n.e(1288).then(n.bind(null,"hS2T"))},this.example4={HTML:n.e(1289).then(n.bind(null,"Pdsk")),TypeScript:n.e(1290).then(n.bind(null,"uI4/"))},this.example5={HTML:n.e(1291).then(n.bind(null,"qrso")),TypeScript:n.e(1293).then(n.bind(null,"RrIZ")),LESS:n.e(1292).then(n.bind(null,"wGMC"))}}get disabled(){return this.control.disabled}set disabled(e){e?this.control.disable():this.control.enable()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["example-slider"]],decls:4,vars:0,consts:[["header","Slider","package","KIT","type","components"],["pageTab",""],["tuiLink","","target","_blank","href","https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input/range"],["id","sizes",3,"content",6,"heading"],["id","colors",3,"content",6,"heading"],["id","segments",3,"content",6,"heading"],[1,"tui-space_bottom-8"],[1,"tui-space_top-0"],["id","disabled",3,"content",6,"heading"],["id","keySteps",3,"content",6,"heading"],[1,"tui-space_bottom-8","tui-space_top-0"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","step","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeS",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","segments","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["tuiSlider","","type","range",3,"max","min","step","formControl","size","segments"],["tuiLink","","href","https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#max","target","_blank"],["tuiLink","","href","https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#min","target","_blank"],["tuiLink","","href","https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#step","target","_blank"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.component.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-doc-page",0),s["\u0275\u0275template"](1,J,43,5,"ng-template",1),s["\u0275\u0275template"](2,ee,9,8,"ng-template",1),s["\u0275\u0275template"](3,te,17,3,"ng-template",1),s["\u0275\u0275elementEnd"]())},directives:[m.a,d.a,p.a,u.a,f,C,_.a,b,y,O,E.a,v.a,A.a,g.a,a.RangeValueAccessor,a.DefaultValueAccessor,a.NgControlStatus,a.FormControlDirective,M.a],encapsulation:2,changeDetection:0}),e})(),oe=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,i.m,c.Fb,a.FormsModule,a.ReactiveFormsModule,l.yb,l.Gb,r.f.forChild(Object(i.t)(ne))]]}),e})()}}]);