"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[48339],{48339:(me,c,n)=>{n.r(c),n.d(c,{ExampleTuiInputCountModule:()=>re});var $=n(12057),i=n(23738),O=n(12021),N=n(46244),r=n(5696),S=n(38780),h=n(75695),e=n(74788),b=n(82880),A=n(98204),v=n(88331),G=n(37159),X=n(66596),V=n(57068),J=n(79121),p=n(88135),m=n(65009),d=n(10383),z=n(91030),C=n(68874);let B=(()=>{class o{constructor(){this.testForm=new i.FormGroup({testValue1:new i.FormControl(10,i.Validators.required),testValue2:new i.FormControl(10,i.Validators.required),testValue3:new i.FormControl(-10,i.Validators.required)})}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["tui-input-count-example-1"]],decls:9,vars:8,consts:function(){let a,t,l;return a=$localize`:␟b159ec7c42ae077a8407364cc726a54b1adb6b12␟4517713429238727398:Step is 1 by default`,t=$localize`:␟c81f9040e56ff2939bfcc8f7303ea190fc62a518␟2290251155545250605:Step is 100`,l=$localize`:␟b4300d745195687ae85fb9b2cbcbdb97af131830␟2074374908429047288:Also works with negative values`,[[1,"b-form",3,"formGroup"],["tuiLabel",a],["formControlName","testValue1",3,"min","max"],["tuiTextfield","","placeholder","1.. 2.. 3.."],["tuiLabel",t,1,"tui-space_top-4"],["formControlName","testValue2",3,"tuiTextfieldLabelOutside","step"],["tuiLabel",l,1,"tui-space_top-4"],["formControlName","testValue3",3,"tuiTextfieldLabelOutside","min","max"]]},template:function(t,l){1&t&&(e.\u0275\u0275elementStart(0,"form",0),e.\u0275\u0275elementStart(1,"label",1),e.\u0275\u0275elementStart(2,"tui-input-count",2),e.\u0275\u0275text(3," Count something "),e.\u0275\u0275element(4,"input",3),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"label",4),e.\u0275\u0275element(6,"tui-input-count",5),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"label",6),e.\u0275\u0275element(8,"tui-input-count",7),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275property("formGroup",l.testForm),e.\u0275\u0275advance(2),e.\u0275\u0275property("min",1)("max",200),e.\u0275\u0275advance(4),e.\u0275\u0275property("tuiTextfieldLabelOutside",!0)("step",100),e.\u0275\u0275advance(2),e.\u0275\u0275property("tuiTextfieldLabelOutside",!0)("min",-100)("max",100))},directives:[i.\u0275NgNoValidate,i.NgControlStatusGroup,i.FormGroupDirective,p.A,m.E,d.a,i.NgControlStatus,i.FormControlName,z.M,C.x],encapsulation:2,changeDetection:0}),o})();var E=n(10200);let H=(()=>{class o{constructor(){this.testForm=new i.FormGroup({testValue1:new i.FormControl(10,i.Validators.required),testValue2:new i.FormControl(10,i.Validators.required)})}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["tui-input-count-example-2"]],decls:5,vars:6,consts:function(){let a,t;return a=$localize`:␟b159ec7c42ae077a8407364cc726a54b1adb6b12␟4517713429238727398:Step is 1 by default`,t=$localize`:␟c81f9040e56ff2939bfcc8f7303ea190fc62a518␟2290251155545250605:Step is 100`,[[1,"b-form",3,"formGroup"],["tuiLabel",a],["formControlName","testValue1","tuiTextfieldSize","m",3,"max","tuiTextfieldLabelOutside"],["tuiLabel",t,1,"tui-space_top-4"],["formControlName","testValue2","tuiTextfieldSize","m",3,"step","max","tuiTextfieldLabelOutside"]]},template:function(t,l){1&t&&(e.\u0275\u0275elementStart(0,"form",0),e.\u0275\u0275elementStart(1,"label",1),e.\u0275\u0275element(2,"tui-input-count",2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"label",3),e.\u0275\u0275element(4,"tui-input-count",4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275property("formGroup",l.testForm),e.\u0275\u0275advance(2),e.\u0275\u0275property("max",999999)("tuiTextfieldLabelOutside",!0),e.\u0275\u0275advance(2),e.\u0275\u0275property("step",100)("max",999999)("tuiTextfieldLabelOutside",!0))},directives:[i.\u0275NgNoValidate,i.NgControlStatusGroup,i.FormGroupDirective,p.A,m.E,d.a,i.NgControlStatus,i.FormControlName,E.s,C.x],encapsulation:2,changeDetection:0}),o})(),j=(()=>{class o{constructor(){this.testForm=new i.FormGroup({testValue1:new i.FormControl(10,i.Validators.required),testValue2:new i.FormControl(10,i.Validators.required)})}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["tui-input-count-example-3"]],features:[e.\u0275\u0275ProvidersFeature([(0,S.iLQ)({icons:{up:"tuiIconChevronUp",down:"tuiIconChevronDown"},appearance:"secondary",step:10,min:10,max:100})])],decls:5,vars:3,consts:function(){let a,t;return a=$localize`:␟ca426ccdbb6cc86ab33b1135e42c32e2786d4700␟5758694726409722369:With custom options`,t=$localize`:␟bf0cf1e190f62dac6e22474c00ebd6f99d2889b0␟2713636921764569690:With custom options and medium size`,[[1,"b-form",3,"formGroup"],["tuiLabel",a],["formControlName","testValue1",3,"tuiTextfieldLabelOutside"],["tuiLabel",t,1,"tui-space_top-4"],["formControlName","testValue2","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"]]},template:function(t,l){1&t&&(e.\u0275\u0275elementStart(0,"form",0),e.\u0275\u0275elementStart(1,"label",1),e.\u0275\u0275element(2,"tui-input-count",2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"label",3),e.\u0275\u0275element(4,"tui-input-count",4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275property("formGroup",l.testForm),e.\u0275\u0275advance(2),e.\u0275\u0275property("tuiTextfieldLabelOutside",!0),e.\u0275\u0275advance(2),e.\u0275\u0275property("tuiTextfieldLabelOutside",!0))},directives:[i.\u0275NgNoValidate,i.NgControlStatusGroup,i.FormGroupDirective,p.A,m.E,d.a,i.NgControlStatus,i.FormControlName,C.x,E.s],encapsulation:2,changeDetection:0}),o})();var K=n(31823),W=n(23618),Q=n(17023),Z=n(54218),Y=n(3729),w=n(76349);function k(o,a){if(1&o&&(e.\u0275\u0275elementStart(0,"div",2),e.\u0275\u0275i18nStart(1,3),e.\u0275\u0275element(2,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",2),e.\u0275\u0275i18n(4,4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"p"),e.\u0275\u0275i18n(6,5),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"p"),e.\u0275\u0275i18nStart(8,6),e.\u0275\u0275element(9,"a",7),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"tui-doc-example",8),e.\u0275\u0275elementStart(11,"tui-notification",9),e.\u0275\u0275text(12," If you need to set some attributes or listen to events on native "),e.\u0275\u0275elementStart(13,"code"),e.\u0275\u0275text(14,"input"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(15," , you can put it inside with "),e.\u0275\u0275elementStart(16,"code"),e.\u0275\u0275text(17,"Textfield"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(18," directive as shown below "),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(19,"tui-input-count-example-1"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(20,"tui-doc-example",10),e.\u0275\u0275element(21,"tui-input-count-example-2"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(22,"tui-doc-example",11),e.\u0275\u0275element(23,"tui-input-count-example-3"),e.\u0275\u0275elementEnd()),2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(10),e.\u0275\u0275property("content",t.example1),e.\u0275\u0275advance(10),e.\u0275\u0275property("content",t.example2),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",t.example3)}}function q(o,a){if(1&o&&(e.\u0275\u0275elementStart(0,"tui-input-count",20),e.\u0275\u0275text(1," Number of accounts "),e.\u0275\u0275elementEnd()),2&o){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("formControl",t.control)("focusable",t.focusable)("min",t.min)("max",t.max)("hideButtons",t.hideButtons)("step",t.step)("prefix",t.prefix)("postfix",t.postfix)("readOnly",t.readOnly)("tuiTextfieldIconLeft",t.iconLeft)("tuiTextfieldLabelOutside",t.labelOutside)("tuiTextfieldSize",t.size)}}function ee(o,a){1&o&&(e.\u0275\u0275i18nStart(0,21),e.\u0275\u0275element(1,"code"),e.\u0275\u0275i18nEnd())}function te(o,a){1&o&&e.\u0275\u0275i18n(0,22)}function ne(o,a){1&o&&e.\u0275\u0275i18n(0,23)}function oe(o,a){1&o&&(e.\u0275\u0275i18nStart(0,24),e.\u0275\u0275element(1,"code"),e.\u0275\u0275i18nEnd())}function ae(o,a){1&o&&e.\u0275\u0275i18n(0,25)}function ie(o,a){1&o&&e.\u0275\u0275i18n(0,26)}function le(o,a){1&o&&e.\u0275\u0275i18n(0,27)}function _e(o,a){if(1&o){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tui-doc-demo",12),e.\u0275\u0275template(1,q,2,12,"ng-template"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"tui-doc-documentation"),e.\u0275\u0275template(3,ee,2,0,"ng-template",13),e.\u0275\u0275listener("documentationPropertyValueChange",function(_){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().disabled=_}),e.\u0275\u0275template(4,te,1,0,"ng-template",14),e.\u0275\u0275listener("documentationPropertyValueChange",function(_){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().hideButtons=_}),e.\u0275\u0275template(5,ne,1,0,"ng-template",15),e.\u0275\u0275listener("documentationPropertyValueChange",function(_){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().min=_}),e.\u0275\u0275template(6,oe,2,0,"ng-template",16),e.\u0275\u0275listener("documentationPropertyValueChange",function(_){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().max=_}),e.\u0275\u0275template(7,ae,1,0,"ng-template",17),e.\u0275\u0275listener("documentationPropertyValueChange",function(_){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().prefix=_}),e.\u0275\u0275template(8,ie,1,0,"ng-template",18),e.\u0275\u0275listener("documentationPropertyValueChange",function(_){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().postfix=_}),e.\u0275\u0275template(9,le,1,0,"ng-template",19),e.\u0275\u0275listener("documentationPropertyValueChange",function(_){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().step=_}),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(10,"inherited-documentation")}if(2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275property("control",t.control),e.\u0275\u0275advance(3),e.\u0275\u0275property("documentationPropertyValue",t.disabled),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",t.hideButtons),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",t.min),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",t.max),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",t.prefix),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",t.postfix),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",t.stepValues)("documentationPropertyValue",t.step)}}function ue(o,a){if(1&o&&(e.\u0275\u0275elementStart(0,"ol",28),e.\u0275\u0275elementStart(1,"li"),e.\u0275\u0275elementStart(2,"p"),e.\u0275\u0275i18nStart(3,29),e.\u0275\u0275element(4,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(5,"tui-doc-code",30),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"li"),e.\u0275\u0275elementStart(7,"p"),e.\u0275\u0275i18nStart(8,31),e.\u0275\u0275element(9,"code"),e.\u0275\u0275element(10,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(11,"tui-doc-code",32),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"li"),e.\u0275\u0275elementStart(13,"p"),e.\u0275\u0275i18n(14,33),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(15,"tui-doc-code",34),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(16,"li"),e.\u0275\u0275elementStart(17,"p"),e.\u0275\u0275i18nStart(18,35),e.\u0275\u0275element(19,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(20,"tui-doc-code",30),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("code",t.exampleModule),e.\u0275\u0275advance(6),e.\u0275\u0275property("code",t.exampleForm),e.\u0275\u0275advance(4),e.\u0275\u0275property("code",t.exampleHtml),e.\u0275\u0275advance(5),e.\u0275\u0275property("code",t.exampleOptions)}}let Te=(()=>{class o extends b.b{constructor(){super(...arguments),this.exampleForm=n.e(45884).then(n.t.bind(n,45884,17)),this.exampleModule=n.e(566).then(n.t.bind(n,566,17)),this.exampleHtml=n.e(14847).then(n.t.bind(n,14847,17)),this.exampleOptions=n.e(45252).then(n.t.bind(n,45252,17)),this.example1={TypeScript:n.e(63227).then(n.t.bind(n,63227,17)),HTML:n.e(84798).then(n.t.bind(n,84798,17))},this.example2={TypeScript:n.e(49084).then(n.t.bind(n,49084,17)),HTML:n.e(14108).then(n.t.bind(n,14108,17))},this.example3={TypeScript:n.e(17486).then(n.t.bind(n,17486,17)),HTML:n.e(6701).then(n.t.bind(n,6701,17))},this.min=0,this.max=999,this.step=1,this.stepValues=[1,2,3,4,5],this.sizeVariants=["m","l"],this.size=this.sizeVariants[1],this.hideButtons=!1,this.control=new i.FormControl,this.prefix="",this.postfix=""}}return o.\u0275fac=function(){let a;return function(l){return(a||(a=e.\u0275\u0275getInheritedFactory(o)))(l||o)}}(),o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["example-tui-input-count"]],features:[e.\u0275\u0275ProvidersFeature([{provide:A.x,useExisting:(0,e.forwardRef)(()=>o)}]),e.\u0275\u0275InheritDefinitionFeature],decls:4,vars:0,consts:function(){let a,t,l,_,T,M,f,P,g,F,U,I,D,x,R,s,y,L;return a=$localize`:␟b9669bf4d7cd2041365aecab26edefeae395b627␟7116640048935486801:${"\ufffd#2\ufffd"}:START_TAG_CODE:InputCount${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: is a good choice to input integer positive numbers under 999 `,t=$localize`:␟93ac744bf41984c8f980cafd646b71db909b71a3␟6434254909743697518: It allows limit value with min and max and handles such cases `,l=$localize`:␟756f0b4a649d274f59cdcd92ecebd22121a58de5␟3317726340623526124:It does not indicate validation status`,_=$localize`:␟0e557432cc61605fc75bbddcf8b886ac4208be05␟6882510303030671599: Number formatting can be customized by using ${"\ufffd#9\ufffd"}:START_LINK: TUI_NUMBER_FORMAT ${"\ufffd/#9\ufffd"}:CLOSE_LINK:`,T=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,M=$localize`:␟0d72ce2c862fae2cccbe564228d17758c058bc20␟7861254305604213764:Size M`,f=$localize`:␟24813b8a3e45f0b57136c18d003027262cfe2d1f␟8432562579042371182:Options`,P=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,g=$localize`:␟ea14b95b26f0ac7cd0db32a42bd60e8ef5eb7cdc␟4295858242233154356: Hide icon buttons `,F=$localize`:␟41d4dbb03bf5617301e95d4fbce6b0e39ca47f01␟1090761179854672750: Minimum value `,U=$localize`:␟ff319fe89f5215270e87674b1c4bc8696341e90a␟4080008404588596650: Maximum value ( ${"\ufffd#1\ufffd"}:START_TAG_CODE:Infinity${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: by default) `,I=$localize`:␟658adf15e902084053811153efcee4ab1a098c01␟889438292388771446: A prefix symbol, like currency `,D=$localize`:␟f5cf6d36f821cf714fb502d79cd966b650bfa4f7␟7436553299672149610: Some string after value `,x=$localize`:␟95f52be4795cdd2b39ffd9707f83e9721e0e17e9␟5700630542385259856: Step for buttons `,R=$localize`:␟4033559e8c5b3ecd794da4fd8d5d21edd63b93eb␟5253084050799099966: Import an Angular module for forms and ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiInputCountModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `,s=$localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:FormGroup${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:FormControl${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE: ) in your component: `,s=e.\u0275\u0275i18nPostprocess(s),y=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,L=$localize`:␟5159db99b1a8aa0ecf3deb24f56aaf37ea98f7b0␟6054484045241435137: Optionally use the ${"\ufffd#19\ufffd"}:START_TAG_CODE:TUI_INPUT_COUNT_OPTIONS${"\ufffd/#19\ufffd"}:CLOSE_TAG_CODE: injection token to override the default options for the component. `,[["header","InputCount","package","KIT","type","components"],["pageTab",""],[1,"tui-space_bottom-3"],a,t,l,_,["tuiLink","","routerLink","/utils/tokens","fragment","number-format"],["id","base","heading",T,3,"content"],[1,"tui-space_bottom-4","b-form"],["id","medium-large","heading",M,3,"content"],["id","options","heading",f,3,"content"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","hideButtons","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","prefix","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","postfix","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","step","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"formControl","focusable","min","max","hideButtons","step","prefix","postfix","readOnly","tuiTextfieldIconLeft","tuiTextfieldLabelOutside","tuiTextfieldSize"],P,g,F,U,I,D,x,[1,"b-demo-steps"],R,["filename","myComponent.module.ts",3,"code"],s,["filename","myComponent.component.ts",3,"code"],y,["filename","myComponent.template.html",3,"code"],L]},template:function(t,l){1&t&&(e.\u0275\u0275elementStart(0,"tui-doc-page",0),e.\u0275\u0275template(1,k,24,3,"ng-template",1),e.\u0275\u0275template(2,_e,11,9,"ng-template",1),e.\u0275\u0275template(3,ue,21,4,"ng-template",1),e.\u0275\u0275elementEnd())},directives:[v.q,G.n,X.V,O.yS,V.f,J.L,B,H,j,K.F,W.z,Q.B,Z.w,m.E,d.a,i.NgControlStatus,i.FormControlDirective,Y.aR,C.x,E.s,w.c],encapsulation:2,changeDetection:0}),o})(),re=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=e.\u0275\u0275defineInjector({imports:[[$.ez,i.FormsModule,i.ReactiveFormsModule,S.$HZ,r.U8r,r.jzK,N.fV,r.cnw,r.HiG,h.f,O.Bz.forChild((0,N.Ve)(Te))]]}),o})()}}]);