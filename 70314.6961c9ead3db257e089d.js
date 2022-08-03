"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[70314],{70314:(ne,_,o)=>{o.r(_),o.d(_,{ExampleTuiPaginationModule:()=>te});var A=o(12057),p=o(23738),I=o(12021),P=o(46244),y=o(5696),g=o(38780),h=o(89570),e=o(74788),R=o(88331),G=o(37159),v=o(57068),s=o(44056),c=o(10200),r=o(6707),T=o(68874),u=o(31639);function $(t,a){1&t&&e.\u0275\u0275text(0,"index")}let D=(()=>{class t{constructor(){this.length=64,this.index=10}goToPage(n){this.index=n,console.info("New page:",n)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["tui-pagination-example-1"]],decls:4,vars:7,consts:[["tuiTextfieldSize","m",1,"slider",3,"tuiTextfieldCustomContent","tuiTextfieldLabelOutside","max","quantum","ngModel","ngModelChange"],["inputCustomContent",""],[3,"length","index","indexChange"]],template:function(n,i){if(1&n&&(e.\u0275\u0275elementStart(0,"tui-input-slider",0),e.\u0275\u0275listener("ngModelChange",function(d){return i.index=d}),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(1,$,1,0,"ng-template",null,1,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275elementStart(3,"tui-pagination",2),e.\u0275\u0275listener("indexChange",function(d){return i.goToPage(d)}),e.\u0275\u0275elementEnd()),2&n){const l=e.\u0275\u0275reference(2);e.\u0275\u0275property("tuiTextfieldCustomContent",l)("tuiTextfieldLabelOutside",!0)("max",i.length-1)("quantum",1)("ngModel",i.index),e.\u0275\u0275advance(3),e.\u0275\u0275property("length",i.length)("index",i.index)}},directives:[s.h,c.sz,r.B7,T.xT,p.NgControlStatus,p.NgModel,u.r],styles:[".slider[_ngcontent-%COMP%]{width:12.5rem;margin-bottom:1em}"],changeDetection:0}),t})();function L(t,a){1&t&&e.\u0275\u0275text(0,"activePadding")}let V=(()=>{class t{constructor(){this.activePadding=2}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["tui-pagination-example-2"]],decls:4,vars:8,consts:[["tuiTextfieldSize","m",1,"slider",3,"tuiTextfieldCustomContent","tuiTextfieldLabelOutside","max","quantum","ngModel","ngModelChange"],["inputCustomContent",""],[3,"activePadding","length","index"]],template:function(n,i){if(1&n&&(e.\u0275\u0275elementStart(0,"tui-input-slider",0),e.\u0275\u0275listener("ngModelChange",function(d){return i.activePadding=d}),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(1,L,1,0,"ng-template",null,1,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275element(3,"tui-pagination",2)),2&n){const l=e.\u0275\u0275reference(2);e.\u0275\u0275property("tuiTextfieldCustomContent",l)("tuiTextfieldLabelOutside",!0)("max",6)("quantum",1)("ngModel",i.activePadding),e.\u0275\u0275advance(3),e.\u0275\u0275property("activePadding",i.activePadding)("length",64)("index",10)}},directives:[s.h,c.sz,r.B7,T.xT,p.NgControlStatus,p.NgModel,u.r],styles:[".slider[_ngcontent-%COMP%]{width:12.5rem;margin-bottom:1em}"],changeDetection:0}),t})();function z(t,a){1&t&&e.\u0275\u0275text(0,"sidePadding")}let F=(()=>{class t{constructor(){this.sidePadding=3}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["tui-pagination-example-3"]],decls:4,vars:8,consts:[["tuiTextfieldSize","m",1,"slider",3,"tuiTextfieldCustomContent","tuiTextfieldLabelOutside","max","quantum","ngModel","ngModelChange"],["inputCustomContent",""],[3,"sidePadding","length","index"]],template:function(n,i){if(1&n&&(e.\u0275\u0275elementStart(0,"tui-input-slider",0),e.\u0275\u0275listener("ngModelChange",function(d){return i.sidePadding=d}),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(1,z,1,0,"ng-template",null,1,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275element(3,"tui-pagination",2)),2&n){const l=e.\u0275\u0275reference(2);e.\u0275\u0275property("tuiTextfieldCustomContent",l)("tuiTextfieldLabelOutside",!0)("max",6)("quantum",1)("ngModel",i.sidePadding),e.\u0275\u0275advance(3),e.\u0275\u0275property("sidePadding",i.sidePadding)("length",64)("index",10)}},directives:[s.h,c.sz,r.B7,T.xT,p.NgControlStatus,p.NgModel,u.r],styles:[".slider[_ngcontent-%COMP%]{width:12.5rem;margin-bottom:1em}"],changeDetection:0}),t})();function J(t,a){if(1&t&&e.\u0275\u0275text(0),2&t){const n=a.$implicit,i=e.\u0275\u0275nextContext();e.\u0275\u0275textInterpolate1(" ",i.days[n],"\n")}}let U=(()=>{class t{constructor(){this.days=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["tui-pagination-example-4"]],decls:3,vars:2,consts:[[3,"length","content"],["test",""]],template:function(n,i){if(1&n&&(e.\u0275\u0275element(0,"tui-pagination",0),e.\u0275\u0275template(1,J,1,1,"ng-template",null,1,e.\u0275\u0275templateRefExtractor)),2&n){const l=e.\u0275\u0275reference(2);e.\u0275\u0275property("length",7)("content",l)}},directives:[u.r],encapsulation:2,changeDetection:0}),t})();var X=o(31823),b=o(23618),B=o(17023),H=o(76349);function j(t,a){if(1&t&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275i18n(1,2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"tui-doc-example",3),e.\u0275\u0275element(3,"tui-pagination-example-1"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"tui-doc-example",4),e.\u0275\u0275element(5,"tui-pagination-example-2"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"tui-doc-example",5),e.\u0275\u0275element(7,"tui-pagination-example-3"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"tui-doc-example",6),e.\u0275\u0275element(9,"tui-pagination-example-4"),e.\u0275\u0275elementEnd()),2&t){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275property("content",n.example1),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",n.example2),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",n.example3),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",n.example4)}}function W(t,a){1&t&&e.\u0275\u0275i18n(0,14)}function K(t,a){1&t&&e.\u0275\u0275i18n(0,15)}function Q(t,a){1&t&&e.\u0275\u0275i18n(0,16)}function Y(t,a){1&t&&e.\u0275\u0275i18n(0,17)}function Z(t,a){1&t&&e.\u0275\u0275i18n(0,18)}function w(t,a){1&t&&e.\u0275\u0275i18n(0,19)}function k(t,a){if(1&t){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tui-doc-demo"),e.\u0275\u0275elementStart(1,"tui-pagination",7),e.\u0275\u0275listener("indexChange",function(l){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().index=l}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"tui-doc-documentation"),e.\u0275\u0275template(3,W,1,0,"ng-template",8),e.\u0275\u0275listener("documentationPropertyValueChange",function(l){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().focusable=l}),e.\u0275\u0275template(4,K,1,0,"ng-template",9),e.\u0275\u0275listener("documentationPropertyValueChange",function(l){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().index=l}),e.\u0275\u0275template(5,Q,1,0,"ng-template",10),e.\u0275\u0275listener("documentationPropertyValueChange",function(l){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().length=l}),e.\u0275\u0275template(6,Y,1,0,"ng-template",11),e.\u0275\u0275listener("documentationPropertyValueChange",function(l){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().size=l}),e.\u0275\u0275template(7,Z,1,0,"ng-template",12),e.\u0275\u0275listener("documentationPropertyValueChange",function(l){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().activePadding=l}),e.\u0275\u0275template(8,w,1,0,"ng-template",13),e.\u0275\u0275listener("documentationPropertyValueChange",function(l){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().sidePadding=l}),e.\u0275\u0275elementEnd()}if(2&t){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("focusable",n.focusable)("length",n.length)("size",n.size)("activePadding",n.activePadding)("sidePadding",n.sidePadding)("index",n.index),e.\u0275\u0275advance(2),e.\u0275\u0275property("documentationPropertyValue",n.focusable),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",n.index),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",n.length),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",n.sizeVariants)("documentationPropertyValue",n.size),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",n.activePadding),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",n.sidePadding)}}function q(t,a){if(1&t&&(e.\u0275\u0275elementStart(0,"ol",20),e.\u0275\u0275elementStart(1,"li"),e.\u0275\u0275elementStart(2,"p"),e.\u0275\u0275i18nStart(3,21),e.\u0275\u0275element(4,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(5,"tui-doc-code",22),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"li"),e.\u0275\u0275elementStart(7,"p"),e.\u0275\u0275i18n(8,23),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(9,"tui-doc-code",24),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&t){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("code",n.exampleModule),e.\u0275\u0275advance(4),e.\u0275\u0275property("code",n.exampleHtml)}}let ee=(()=>{class t{constructor(){this.exampleModule=o.e(90198).then(o.t.bind(o,90198,17)),this.exampleHtml=o.e(74636).then(o.t.bind(o,74636,17)),this.example1={TypeScript:o.e(91571).then(o.t.bind(o,91571,17)),HTML:o.e(90874).then(o.t.bind(o,90874,17)),LESS:o.e(85089).then(o.t.bind(o,85089,17))},this.example2={TypeScript:o.e(57931).then(o.t.bind(o,57931,17)),HTML:o.e(27305).then(o.t.bind(o,27305,17)),LESS:o.e(85089).then(o.t.bind(o,85089,17))},this.example3={TypeScript:o.e(60346).then(o.t.bind(o,60346,17)),HTML:o.e(28520).then(o.t.bind(o,28520,17)),LESS:o.e(85089).then(o.t.bind(o,85089,17))},this.example4={TypeScript:o.e(29433).then(o.t.bind(o,29433,17)),HTML:o.e(87293).then(o.t.bind(o,87293,17))},this.focusable=!0,this.index=0,this.length=8,this.sizeVariants=["s","m"],this.size=this.sizeVariants[1],this.activePadding=1,this.sidePadding=1}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["example-tui-pagination"]],decls:4,vars:0,consts:function(){let a,n,i,l,d,E,N,O,C,M,S,f,x;return a=$localize`:␟661de1abe57e9dcf4ef0b9887972092fa3139ec3␟4234058188529646153:Pagination component enables the user to select a specific page from a range of pages`,n=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,i=$localize`:␟7447e99a313dfd660dfdac371c1790c906afdfbc␟1343291924581059799:Visible pages around active`,l=$localize`:␟47ebd404b33f1353e628e1beaab432a604aa0267␟1450301538176787808:Visible edge pages`,d=$localize`:␟a5c05002b0ac2040f1aede5e727e0ffd06eda819␟7590013429208346303:Custom`,E=$localize`:␟30781cbf047ad38e186ad68e325b742909287b00␟1810512560805883949: Accepts focus with keyboard `,N=$localize`:␟bf69fc21a86418012f148932ebe5eb91bcae5b45␟6937522081049060052: Active page index `,O=$localize`:␟7188b68f4c0ede7f60421cd661e5d0791220c304␟4207451728711936955: Total pages count `,C=$localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `,M=$localize`:␟6ce429b0b2501d96eefb0c6f3c52e414e14909ef␟7208302007968196085: Amount of visible pages around active page `,S=$localize`:␟ce7a11e7e6703260dd3c380e666f8a12a54128ff␟8219649223317915483: Amount of visible pages at the edges `,f=$localize`:␟efadc8d4431e8d89cddff062a3ea73f171e1b8db␟4453511622032715639: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiPaginationModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,x=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","Pagination","package","KIT","type","components"],["pageTab",""],a,["id","base","heading",n,3,"content"],["id","around","heading",i,3,"content"],["id","edges","heading",l,3,"content"],["id","custom","heading",d,3,"content"],[3,"focusable","length","size","activePadding","sidePadding","index","indexChange"],["documentationPropertyName","focusable","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","index","documentationPropertyMode","input-output","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","length","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeS",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","activePadding","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","sidePadding","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],E,N,O,C,M,S,[1,"b-demo-steps"],f,["filename","myComponent.module.ts",3,"code"],x,["filename","myComponent.template.html",3,"code"]]},template:function(n,i){1&n&&(e.\u0275\u0275elementStart(0,"tui-doc-page",0),e.\u0275\u0275template(1,j,10,4,"ng-template",1),e.\u0275\u0275template(2,k,9,13,"ng-template",1),e.\u0275\u0275template(3,q,10,2,"ng-template",1),e.\u0275\u0275elementEnd())},directives:[R.q,G.n,v.f,D,V,F,U,X.F,u.r,b.z,B.B,H.c],encapsulation:2,changeDetection:0}),t})(),te=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[[g.fT6,g.iwW,g.aJT,A.ez,g.Ltw,p.FormsModule,p.ReactiveFormsModule,P.fV,y.cnw,I.Bz.forChild((0,P.Ve)(ee)),h.wq]]}),t})()}}]);