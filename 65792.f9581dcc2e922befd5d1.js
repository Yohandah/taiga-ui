"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[65792],{65792:(Fe,E,n)=>{n.r(E),n.d(E,{ExampleTuiSliderModule:()=>ue});var m=n(12057),i=n(23738),x=n(12021),g=n(46244),c=n(37267),$=n(38780),e=n(74788),y=n(88331),h=n(37159),I=n(66596),v=n(57068),F=n(47044);let A=(()=>{class o{constructor(){this.value=4,this.formControl=new i.FormControl(60)}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["tui-slider-example-1"]],decls:2,vars:2,consts:[["tuiSlider","","type","range","max","10","step","1","size","s",3,"ngModel","ngModelChange"],["tuiSlider","","type","range","value","60","size","m",3,"formControl"]],template:function(t,a){1&t&&(e.\u0275\u0275elementStart(0,"input",0),e.\u0275\u0275listener("ngModelChange",function(r){return a.value=r}),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(1,"input",1)),2&t&&(e.\u0275\u0275property("ngModel",a.value),e.\u0275\u0275advance(1),e.\u0275\u0275property("formControl",a.formControl))},directives:[F.i,i.RangeValueAccessor,i.DefaultValueAccessor,i.NgControlStatus,i.NgModel,i.FormControlDirective],encapsulation:2,changeDetection:0}),o})(),b=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["tui-slider-example-2"]],decls:3,vars:0,consts:[["tuiSlider","","type","range","value","65",1,"first"],["tuiSlider","","type","range","value","80",1,"second"],["tuiSlider","","type","range","value","40",1,"third"]],template:function(t,a){1&t&&(e.\u0275\u0275element(0,"input",0),e.\u0275\u0275element(1,"input",1),e.\u0275\u0275element(2,"input",2))},directives:[F.i],styles:[".first[_ngcontent-%COMP%]{--tui-primary: var(--tui-support-01);--tui-primary-hover: var(--tui-support-21);--tui-primary-active: var(--tui-support-02)}.second[_ngcontent-%COMP%]{--tui-primary: var(--tui-support-03);--tui-primary-hover: var(--tui-support-04);--tui-primary-active: var(--tui-positive)}.third[_ngcontent-%COMP%]{--tui-primary: var(--tui-support-12);--tui-primary-hover: var(--tui-support-07);--tui-primary-active: var(--tui-support-08)}"],changeDetection:0}),o})();var G=n(79121);function V(o,l){if(1&o){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"button",3),e.\u0275\u0275listener("click",function(){const r=e.\u0275\u0275restoreView(t).$implicit;return e.\u0275\u0275nextContext().patchValue(r)}),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()}if(2&o){const t=l.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" $",t," ")}}let z=(()=>{class o{constructor(){this.labels=[0,250,500,750,1e3],this.formControl=new i.FormControl(250)}patchValue(t){this.formControl.patchValue(t)}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["tui-slider-example-3"]],decls:7,vars:6,consts:[["tuiSlider","","type","range","size","m",3,"max","step","segments","formControl"],[1,"ticks-labels"],["class","tick-label",3,"click",4,"ngFor","ngForOf"],[1,"tick-label",3,"click"]],template:function(t,a){1&t&&(e.\u0275\u0275element(0,"input",0),e.\u0275\u0275elementStart(1,"div",1),e.\u0275\u0275template(2,V,2,1,"button",2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"p"),e.\u0275\u0275text(4," Control value: "),e.\u0275\u0275elementStart(5,"code"),e.\u0275\u0275text(6),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275property("max",1e3)("step",250)("segments",4)("formControl",a.formControl),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngForOf",a.labels),e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate(a.formControl.value))},directives:[F.i,i.RangeValueAccessor,i.DefaultValueAccessor,i.NgControlStatus,i.FormControlDirective,m.sg],styles:[".ticks-labels[_ngcontent-%COMP%]{display:flex;margin:0 .5rem;font:var(--tui-font-text-s)}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;flex:2;text-align:center}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.5rem;flex:1;text-align:left}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.5rem;flex:1;text-align:right}tui-input-slider[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:calc(var(--tui-radius-m) / 2 + .5rem)}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:1rem;margin-right:1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-1rem}.tick-label[_ngcontent-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;outline:0;cursor:pointer}"],changeDetection:0}),o})(),U=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["tui-slider-example-4"]],decls:1,vars:0,consts:[["tuiSlider","","type","range","disabled","","value","80"]],template:function(t,a){1&t&&e.\u0275\u0275element(0,"input",0)},directives:[F.i],encapsulation:2,changeDetection:0}),o})();var J=n(32003);function X(o,l){if(1&o&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&o){const t=l.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(t)}}let H=(()=>{class o{constructor(){this.labels=["5 000","100 000","300 000","1 000 000"],this.formControl=new i.FormControl(72e4),this.segments=this.labels.length-1,this.keySteps=[[0,5e3],[100/3,1e5],[100/3*2,3e5],[100,1e6]]}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["tui-slider-example-5"]],decls:8,vars:8,consts:[["tuiSlider","","type","range",3,"keySteps","max","segments","formControl"],[1,"ticks-labels"],[4,"ngFor","ngForOf"],["automation-id","key-steps-example-control-value"]],template:function(t,a){1&t&&(e.\u0275\u0275element(0,"input",0),e.\u0275\u0275elementStart(1,"div",1),e.\u0275\u0275template(2,X,2,1,"span",2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"p",3),e.\u0275\u0275text(4," Control value: "),e.\u0275\u0275elementStart(5,"code"),e.\u0275\u0275text(6),e.\u0275\u0275pipe(7,"number"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275property("keySteps",a.keySteps)("max",10*a.segments)("segments",a.segments)("formControl",a.formControl),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngForOf",a.labels),e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(7,6,a.formControl.value)))},directives:[J.t,F.i,i.RangeValueAccessor,i.DefaultValueAccessor,i.NgControlStatus,i.FormControlDirective,m.sg],pipes:[m.JJ],styles:[".ticks-labels[_ngcontent-%COMP%]{display:flex;margin:0 .5rem;font:var(--tui-font-text-s)}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;flex:2;text-align:center}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.5rem;flex:1;text-align:left}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.5rem;flex:1;text-align:right}tui-input-slider[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:calc(var(--tui-radius-m) / 2 + .5rem)}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:1rem;margin-right:1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-1rem}"],changeDetection:0}),o})();var K=n(82605),k=n(76189),W=n(30644);let B=(()=>{class o{constructor(){this.min=.5,this.max=2,this.value=1}change(t){this.value=(0,K.Kiv)(this.value+t,this.min,this.max)}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["tui-slider-example-6"]],decls:4,vars:3,consts:[[1,"zoom-controller"],["tuiIconButton","","appearance","flat","tuiMode","onDark","size","s","icon","tuiIconMinus",1,"minus",3,"click"],["tuiSlider","","type","range","step","any",3,"min","max","ngModel","ngModelChange"],["tuiIconButton","","appearance","flat","tuiMode","onDark","size","s","icon","tuiIconPlus",1,"plus",3,"click"]],template:function(t,a){1&t&&(e.\u0275\u0275elementStart(0,"article",0),e.\u0275\u0275elementStart(1,"button",1),e.\u0275\u0275listener("click",function(){return a.change(-.25)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"input",2),e.\u0275\u0275listener("ngModelChange",function(r){return a.value=r}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"button",3),e.\u0275\u0275listener("click",function(){return a.change(.25)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275advance(2),e.\u0275\u0275property("min",a.min)("max",a.max)("ngModel",a.value))},directives:[k.v,W.w,F.i,i.RangeValueAccessor,i.DefaultValueAccessor,i.NgControlStatus,i.NgModel],styles:[".zoom-controller[_ngcontent-%COMP%]{border-radius:1rem;background:var(--tui-base-05);display:flex;justify-content:space-between;align-items:center;max-width:18rem;grid-column-gap:.5rem;column-gap:.5rem}@media screen and (max-width: 37.4375em){.zoom-controller[_ngcontent-%COMP%]{max-width:100%}}.minus[_ngcontent-%COMP%]{border-radius:1rem 0 0 1rem}.plus[_ngcontent-%COMP%]{border-radius:0 1rem 1rem 0}"],changeDetection:0}),o})();var j=n(31823),Q=n(23618),Y=n(17023),Z=n(76349);function w(o,l){if(1&o&&(e.\u0275\u0275elementStart(0,"dl"),e.\u0275\u0275i18nStart(1,2),e.\u0275\u0275elementStart(2,"dt"),e.\u0275\u0275element(3,"code"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"dd"),e.\u0275\u0275element(5,"code"),e.\u0275\u0275elementEnd(),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"p"),e.\u0275\u0275text(7," Read more about current input's type in "),e.\u0275\u0275elementStart(8,"a",3),e.\u0275\u0275text(9," MDN Docs "),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(10," . "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"p"),e.\u0275\u0275i18nStart(12,4),e.\u0275\u0275element(13,"strong"),e.\u0275\u0275element(14,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(15,"tui-doc-example",5),e.\u0275\u0275element(16,"tui-slider-example-1"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(17,"tui-doc-example",6),e.\u0275\u0275element(18,"tui-slider-example-2"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(19,"tui-doc-example",7),e.\u0275\u0275elementStart(20,"tui-notification",8),e.\u0275\u0275elementStart(21,"p",9),e.\u0275\u0275i18nStart(22,10),e.\u0275\u0275element(23,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(24,"p"),e.\u0275\u0275i18nStart(25,11),e.\u0275\u0275element(26,"code"),e.\u0275\u0275element(27,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(28,"tui-slider-example-3"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(29,"tui-doc-example",12),e.\u0275\u0275element(30,"tui-slider-example-4"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(31,"tui-doc-example",13),e.\u0275\u0275elementStart(32,"dl",14),e.\u0275\u0275i18nStart(33,15),e.\u0275\u0275elementStart(34,"dt"),e.\u0275\u0275element(35,"strong"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(36,"dd"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(37,"tui-slider-example-5"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(38,"tui-doc-example",16),e.\u0275\u0275element(39,"tui-slider-example-6"),e.\u0275\u0275elementEnd()),2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(15),e.\u0275\u0275property("content",t.example1),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",t.example2),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",t.example3),e.\u0275\u0275advance(10),e.\u0275\u0275property("content",t.example4),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",t.example5),e.\u0275\u0275advance(7),e.\u0275\u0275property("content",t.example6)}}function q(o,l){if(1&o&&e.\u0275\u0275element(0,"input",24),2&o){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("max",t.max)("min",t.min)("step",t.step)("formControl",t.control)("size",t.size)("segments",t.segments)}}function ee(o,l){1&o&&(e.\u0275\u0275i18nStart(0,25),e.\u0275\u0275element(1,"code"),e.\u0275\u0275i18nEnd())}function te(o,l){1&o&&(e.\u0275\u0275i18nStart(0,26),e.\u0275\u0275element(1,"a",27),e.\u0275\u0275element(2,"code"),e.\u0275\u0275i18nEnd())}function ne(o,l){1&o&&(e.\u0275\u0275i18nStart(0,28),e.\u0275\u0275element(1,"a",29),e.\u0275\u0275element(2,"code"),e.\u0275\u0275i18nEnd())}function oe(o,l){1&o&&(e.\u0275\u0275i18nStart(0,30),e.\u0275\u0275element(1,"a",31),e.\u0275\u0275element(2,"code"),e.\u0275\u0275i18nEnd())}function le(o,l){1&o&&e.\u0275\u0275i18n(0,32)}function ae(o,l){1&o&&(e.\u0275\u0275i18nStart(0,33),e.\u0275\u0275element(1,"p"),e.\u0275\u0275element(2,"code"),e.\u0275\u0275i18nEnd())}function ie(o,l){if(1&o){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tui-doc-demo",17),e.\u0275\u0275template(1,q,1,6,"ng-template"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"tui-doc-documentation"),e.\u0275\u0275template(3,ee,2,0,"ng-template",18),e.\u0275\u0275listener("documentationPropertyValueChange",function(s){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().disabled=s}),e.\u0275\u0275template(4,te,3,0,"ng-template",19),e.\u0275\u0275listener("documentationPropertyValueChange",function(s){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().max=s}),e.\u0275\u0275template(5,ne,3,0,"ng-template",20),e.\u0275\u0275listener("documentationPropertyValueChange",function(s){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().min=s}),e.\u0275\u0275template(6,oe,3,0,"ng-template",21),e.\u0275\u0275listener("documentationPropertyValueChange",function(s){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().step=s}),e.\u0275\u0275template(7,le,1,0,"ng-template",22),e.\u0275\u0275listener("documentationPropertyValueChange",function(s){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().size=s}),e.\u0275\u0275template(8,ae,3,0,"ng-template",23),e.\u0275\u0275listener("documentationPropertyValueChange",function(s){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().segments=s}),e.\u0275\u0275elementEnd()}if(2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275property("control",t.control),e.\u0275\u0275advance(3),e.\u0275\u0275property("documentationPropertyValue",t.disabled),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",t.max),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",t.min),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",t.step),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",t.sizeVariants)("documentationPropertyValue",t.size),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",t.segments)}}function re(o,l){if(1&o&&(e.\u0275\u0275elementStart(0,"ol",34),e.\u0275\u0275elementStart(1,"li"),e.\u0275\u0275text(2," Import an Angular module for forms and "),e.\u0275\u0275elementStart(3,"code"),e.\u0275\u0275text(4,"TuiSliderModule"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(5," in the same module where you want to use our component: "),e.\u0275\u0275element(6,"tui-doc-code",35),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"li"),e.\u0275\u0275elementStart(8,"p"),e.\u0275\u0275i18nStart(9,36),e.\u0275\u0275element(10,"code"),e.\u0275\u0275element(11,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(12,"tui-doc-code",37),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(13,"li"),e.\u0275\u0275elementStart(14,"p"),e.\u0275\u0275i18n(15,38),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(16,"tui-doc-code",39),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(6),e.\u0275\u0275property("code",t.exampleImportModule),e.\u0275\u0275advance(6),e.\u0275\u0275property("code",t.exampleDeclareForm),e.\u0275\u0275advance(4),e.\u0275\u0275property("code",t.exampleInsertTemplate)}}let se=(()=>{class o{constructor(){this.sizeVariants=["s","m"],this.control=new i.FormControl(1),this.max=5,this.min=0,this.step=1,this.size=this.sizeVariants[1],this.segments=this.max,this.exampleImportModule=n.e(18720).then(n.t.bind(n,18720,17)),this.exampleDeclareForm=n.e(17579).then(n.t.bind(n,17579,17)),this.exampleInsertTemplate=n.e(16291).then(n.t.bind(n,16291,17)),this.example1={HTML:n.e(65037).then(n.t.bind(n,65037,17)),TypeScript:n.e(58967).then(n.bind(n,58967))},this.example2={HTML:n.e(17017).then(n.t.bind(n,17017,17)),LESS:n.e(42959).then(n.t.bind(n,42959,17)),TypeScript:n.e(61704).then(n.bind(n,61704))},this.example3={HTML:n.e(39090).then(n.t.bind(n,39090,17)),LESS:n.e(50436).then(n.t.bind(n,50436,17)),TypeScript:n.e(7885).then(n.bind(n,7885))},this.example4={HTML:n.e(7464).then(n.t.bind(n,7464,17)),TypeScript:n.e(70270).then(n.bind(n,70270))},this.example5={HTML:n.e(13743).then(n.t.bind(n,13743,17)),TypeScript:n.e(7965).then(n.bind(n,7965)),LESS:n.e(85091).then(n.t.bind(n,85091,17))},this.example6={HTML:n.e(56612).then(n.t.bind(n,56612,17)),LESS:n.e(97332).then(n.t.bind(n,97332,17)),TypeScript:n.e(61459).then(n.bind(n,61459))}}get disabled(){return this.control.disabled}set disabled(t){t?this.control.disable():this.control.enable()}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["example-slider"]],decls:4,vars:0,consts:function(){let l,t,a,s,r,S,d,T,_,C,D,O,M,f,P,R,N,p,L;return l=$localize`:␟adbed55b9ad040f016b7224d2376dcc556c96cde␟5051981916551990985:${"\ufffd#2\ufffd"}:START_TAG_DT:${"[\ufffd#3\ufffd|\ufffd#5\ufffd]"}:START_TAG_CODE:tuiSlider${"[\ufffd/#3\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_CODE:${"\ufffd/#2\ufffd"}:CLOSE_TAG_DT:${"\ufffd#4\ufffd"}:START_TAG_DD: attribute component for native html tag ${"[\ufffd#3\ufffd|\ufffd#5\ufffd]"}:START_TAG_CODE:<input type="range" />${"[\ufffd/#3\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_CODE: to choose a value from a limited range. ${"\ufffd/#4\ufffd"}:CLOSE_TAG_DD:`,l=e.\u0275\u0275i18nPostprocess(l),t=$localize`:␟d17c664a1f4783e75fde9506a0cc298adc5d77b8␟6584790122390772242:${"\ufffd#13\ufffd"}:START_TAG_STRONG:Usage:${"\ufffd/#13\ufffd"}:CLOSE_TAG_STRONG:${"\ufffd#14\ufffd"}:START_TAG_CODE:<input tuiSlider type="range" min="0" max="100" step="1" />${"\ufffd/#14\ufffd"}:CLOSE_TAG_CODE: . `,a=$localize`:␟287516b9b4b5fac08bbffe1ebbaa2575b8ef50d8␟2165905371258601036:Sizes`,s=$localize`:␟e93acd761801b3f2077278b282163a9c03283b8c␟5267754967054916445:Colors`,r=$localize`:␟2491f5c0a188387f341fc89ca14558c666c96dc9␟3070830036852627562:With visual segments`,S=$localize`:␟b71cff54548c311b9382985ce173ddbd05b1455a␟7222770680801212686: Use mixin ${"\ufffd#23\ufffd"}:START_TAG_CODE:tui-slider-ticks-labels${"\ufffd/#23\ufffd"}:CLOSE_TAG_CODE: to arrange ticks' labels (it places them strictly below ticks). `,d=$localize`:␟b43e37a55c51eed01f3c7b31c7fb8c20e9ea09ce␟7490709384902699339: The mixin accepts only a single argument – size of the slider ( ${"[\ufffd#26\ufffd|\ufffd#27\ufffd]"}:START_TAG_CODE:m${"[\ufffd/#26\ufffd|\ufffd/#27\ufffd]"}:CLOSE_TAG_CODE: or ${"[\ufffd#26\ufffd|\ufffd#27\ufffd]"}:START_TAG_CODE:s${"[\ufffd/#26\ufffd|\ufffd/#27\ufffd]"}:CLOSE_TAG_CODE: ). `,d=e.\u0275\u0275i18nPostprocess(d),T=$localize`:␟f39256070bfc0714020dfee08895421fc1527014␟5769292297914455214:Disabled`,_=$localize`:␟21e3d6f0be967074ebe7bfc308ce12e1e9ef0763␟2043510449142398319:With key steps`,C=$localize`:␟1d46e08d2d025f9bef376d0b06ec92af3afa4c8a␟626346517069880366:${"\ufffd#34\ufffd"}:START_TAG_DT:${"\ufffd#35\ufffd"}:START_TAG_STRONG:Key steps${"\ufffd/#35\ufffd"}:CLOSE_TAG_STRONG:${"\ufffd/#34\ufffd"}:CLOSE_TAG_DT:${"\ufffd#36\ufffd"}:START_TAG_DD:anchor points of non-uniform format between value and position${"\ufffd/#36\ufffd"}:CLOSE_TAG_DD:`,D=$localize`:␟e75362b1b5b0d9038fcafc9670ef18bba17e61d0␟7049130908974374044:Complex`,O=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,M=$localize`:␟7a9c2463dd2db1c76ddb6ab9b5ac72155b3febd3␟2441366795513240531: Native attribute ${"\ufffd#1\ufffd"}:START_LINK: max ${"\ufffd/#1\ufffd"}:CLOSE_LINK: of ${"\ufffd#2\ufffd"}:START_TAG_CODE:<input type="range" />${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE:`,f=$localize`:␟0f9865bd37150fde43d1803c880f50904f4c19e5␟8291402794161186662: Native attribute ${"\ufffd#1\ufffd"}:START_LINK: min ${"\ufffd/#1\ufffd"}:CLOSE_LINK: of ${"\ufffd#2\ufffd"}:START_TAG_CODE:<input type="range" />${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE:`,P=$localize`:␟3ef21ae73998ca229a066c4ebe6df772bcb4e1ff␟3867818126343854694: Native attribute ${"\ufffd#1\ufffd"}:START_LINK: step ${"\ufffd/#1\ufffd"}:CLOSE_LINK: of ${"\ufffd#2\ufffd"}:START_TAG_CODE:<input type="range" />${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE:`,R=$localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `,N=$localize`:␟a02033b049807cde07365ac37e1d79258c6f8b38␟1000197536572415972:${"\ufffd#1\ufffd"}:START_PARAGRAPH:A number of visual segments${"\ufffd/#1\ufffd"}:CLOSE_PARAGRAPH: (use ${"\ufffd#2\ufffd"}:START_TAG_CODE:1${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: for no ticks) `,p=$localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\ufffd#10\ufffd|\ufffd#11\ufffd]"}:START_TAG_CODE:FormGroup${"[\ufffd/#10\ufffd|\ufffd/#11\ufffd]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\ufffd#10\ufffd|\ufffd#11\ufffd]"}:START_TAG_CODE:FormControl${"[\ufffd/#10\ufffd|\ufffd/#11\ufffd]"}:CLOSE_TAG_CODE: ) in your component: `,p=e.\u0275\u0275i18nPostprocess(p),L=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","Slider","package","KIT","type","components"],["pageTab",""],l,["tuiLink","","target","_blank","href","https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input/range"],t,["id","sizes","heading",a,3,"content"],["id","colors","heading",s,3,"content"],["id","segments","heading",r,3,"content"],[1,"tui-space_bottom-8"],[1,"tui-space_top-0"],S,d,["id","disabled","heading",T,3,"content"],["id","keySteps","heading",_,3,"content"],[1,"tui-space_bottom-8","tui-space_top-0"],C,["id","complex","heading",D,3,"content"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","step","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeS",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","segments","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["tuiSlider","","type","range",3,"max","min","step","formControl","size","segments"],O,M,["tuiLink","","href","https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#max","target","_blank"],f,["tuiLink","","href","https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#min","target","_blank"],P,["tuiLink","","href","https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#step","target","_blank"],R,N,[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],p,["filename","myComponent.component.ts",3,"code"],L,["filename","myComponent.template.html",3,"code"]]},template:function(t,a){1&t&&(e.\u0275\u0275elementStart(0,"tui-doc-page",0),e.\u0275\u0275template(1,w,40,6,"ng-template",1),e.\u0275\u0275template(2,ie,9,8,"ng-template",1),e.\u0275\u0275template(3,re,17,3,"ng-template",1),e.\u0275\u0275elementEnd())},directives:[y.q,h.n,I.V,v.f,A,b,G.L,z,U,H,B,j.F,Q.z,Y.B,F.i,i.RangeValueAccessor,i.DefaultValueAccessor,i.NgControlStatus,i.FormControlDirective,Z.c],encapsulation:2,changeDetection:0}),o})(),ue=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=e.\u0275\u0275defineInjector({imports:[[m.ez,g.fV,$.c2K,i.FormsModule,i.ReactiveFormsModule,c.jzK,c.HiG,c.zw7,c.fNO,x.Bz.forChild((0,g.Ve)(se))]]}),o})()}}]);