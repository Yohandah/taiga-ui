"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[97466],{97466:(I,_,o)=>{o.r(_),o.d(_,{ExampleTuiFormatNumberModule:()=>h});var S=o(12057),u=o(23738),E=o(12021),d=o(46244),p=o(5696),c=o(38780),e=o(74788),O=o(88331),R=o(37159),N=o(66596),g=o(57068),M=o(59544);let C=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["tui-format-number-example-1"]],decls:6,vars:8,template:function(n,l){1&n&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275text(1),e.\u0275\u0275pipe(2,"tuiFormatNumber"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"p"),e.\u0275\u0275text(4),e.\u0275\u0275pipe(5,"tuiFormatNumber"),e.\u0275\u0275elementEnd()),2&n&&(e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1("Formatted number by default: ",e.\u0275\u0275pipeBind1(2,2,10500.33),""),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate1("Formatted number with custom params: ",e.\u0275\u0275pipeBind3(5,4,10500.33,4,"."),""))},pipes:[M.m],encapsulation:2,changeDetection:0}),t})();var f=o(44056),P=o(23618),D=o(17023),x=o(76349);function A(t,a){if(1&t&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275i18n(1,2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"p"),e.\u0275\u0275i18nStart(3,3),e.\u0275\u0275element(4,"a",4),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"tui-doc-example",5),e.\u0275\u0275element(6,"tui-format-number-example-1"),e.\u0275\u0275elementEnd()),2&t){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("content",n.example1)}}function y(t,a){1&t&&(e.\u0275\u0275i18nStart(0,11),e.\u0275\u0275element(1,"code"),e.\u0275\u0275i18nEnd())}function U(t,a){1&t&&e.\u0275\u0275i18n(0,12)}function $(t,a){if(1&t){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"p",6),e.\u0275\u0275i18n(1,7),e.\u0275\u0275pipe(2,"tuiFormatNumber"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"tui-input-slider",8),e.\u0275\u0275listener("ngModelChange",function(m){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().value=m}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"tui-doc-documentation"),e.\u0275\u0275template(5,y,2,0,"ng-template",9),e.\u0275\u0275listener("documentationPropertyValueChange",function(m){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().decimalLimit=m}),e.\u0275\u0275template(6,U,1,0,"ng-template",10),e.\u0275\u0275listener("documentationPropertyValueChange",function(m){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().decimalSeparator=m}),e.\u0275\u0275elementEnd()}if(2&t){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275i18nExp(e.\u0275\u0275pipeBind3(2,8,n.value,n.decimalLimit,n.decimalSeparator)),e.\u0275\u0275i18nApply(1),e.\u0275\u0275advance(1),e.\u0275\u0275property("max",1e7)("quantum",.111)("ngModel",n.value),e.\u0275\u0275advance(2),e.\u0275\u0275property("documentationPropertyValues",n.decimalLimitVariants)("documentationPropertyValue",n.decimalLimit),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",n.decimalSeparatorVariants)("documentationPropertyValue",n.decimalSeparator)}}function L(t,a){if(1&t&&(e.\u0275\u0275elementStart(0,"ol",13),e.\u0275\u0275elementStart(1,"li"),e.\u0275\u0275elementStart(2,"p"),e.\u0275\u0275i18nStart(3,14),e.\u0275\u0275element(4,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(5,"tui-doc-code",15),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"li"),e.\u0275\u0275elementStart(7,"p"),e.\u0275\u0275i18n(8,16),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(9,"tui-doc-code",17),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&t){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("code",n.exampleModule),e.\u0275\u0275advance(4),e.\u0275\u0275property("code",n.exampleHtml)}}let b=(()=>{class t{constructor(){this.exampleModule=o.e(59969).then(o.t.bind(o,59969,17)),this.exampleHtml=o.e(29178).then(o.t.bind(o,29178,17)),this.example1={TypeScript:o.e(46844).then(o.t.bind(o,46844,17)),HTML:o.e(48364).then(o.t.bind(o,48364,17))},this.value=100,this.decimalLimitVariants=[0,2,4],this.decimalLimit=null,this.decimalSeparatorVariants=[",",".","/"],this.decimalSeparator=this.decimalSeparatorVariants[0]}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["example-tui-format-number"]],decls:4,vars:0,consts:function(){let a,n,l,m,i,s,T,F;return a=$localize`:␟799bc21ea304574853b3a233c5fd7ade5ceb99f7␟4562263761854336809:Pipe to format number values to separate thousands`,n=$localize`:␟0e557432cc61605fc75bbddcf8b886ac4208be05␟6882510303030671599: Number formatting can be customized by using ${"\ufffd#4\ufffd"}:START_LINK: TUI_NUMBER_FORMAT ${"\ufffd/#4\ufffd"}:CLOSE_LINK:`,l=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,m=$localize`:␟731b026540aaf007731d10c8e21c035b0b4c7ff3␟191049356598165313: Formatted number: ${"\ufffd0\ufffd"}:INTERPOLATION: `,i=$localize`:␟aeb43e1bfdb629dd83ff36b41224284e06e1e372␟4472373434645547204: Digits after comma (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:null${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: not to change) `,s=$localize`:␟66eb6cf6218c547a2ec9635a00ef187009e46892␟588884307384509273: Symbol for separating fraction `,T=$localize`:␟eaaccbdd2f44fbc362efb5e7add38f2f31235558␟6706651127349434236: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiFormatNumberPipe${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,F=$localize`:␟6ef7ff8ead6f93c0fac4fb8403f5069f4439cc57␟1250387402385487280:Use pipe in template with function and its arguments:`,[["header","FormatNumber","package","CORE","type","pipes"],["pageTab",""],a,n,["tuiLink","","routerLink","/utils/tokens","fragment","number-format"],["id","base","heading",l,3,"content"],[1,"text","b-full-width"],m,["size","m",1,"slider",3,"max","quantum","ngModel","ngModelChange"],["documentationPropertyName","decimalLimit","documentationPropertyType","number | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","decimalSeparator","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],i,s,[1,"b-demo-steps"],T,["filename","myComponent.module.ts",3,"code"],F,["filename","myComponent.template.html",3,"code"]]},template:function(n,l){1&n&&(e.\u0275\u0275elementStart(0,"tui-doc-page",0),e.\u0275\u0275template(1,A,7,1,"ng-template",1),e.\u0275\u0275template(2,$,7,12,"ng-template",1),e.\u0275\u0275template(3,L,10,2,"ng-template",1),e.\u0275\u0275elementEnd())},directives:[O.q,R.n,N.V,E.yS,g.f,C,f.h,u.NgControlStatus,u.NgModel,P.z,D.B,x.c],pipes:[M.m],styles:[".text[_ngcontent-%COMP%]{font-size:1.1875rem}.slider[_ngcontent-%COMP%]{margin-top:.75rem;width:9.375rem}"],changeDetection:0}),t})(),h=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[[p.acE,c.aJT,u.ReactiveFormsModule,u.FormsModule,S.ez,c.Ltw,d.fV,p.jzK,E.Bz.forChild((0,d.Ve)(b))]]}),t})()}}]);