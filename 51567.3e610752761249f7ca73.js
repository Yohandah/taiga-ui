"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[51567],{51567:(G,r,t)=>{t.r(r),t.d(r,{ExampleTuiFormatPhoneModule:()=>V});var T=t(12057),p=t(23738),O=t(12021),u=t(46244),E=t(5696),s=t(38780),e=t(74788),M=t(88331),C=t(37159),g=t(57068),c=t(3520);let f=(()=>{class o{constructor(){this.phone="+78005557778"}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["tui-format-phone-example-1"]],decls:6,vars:8,template:function(n,i){1&n&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275text(1),e.\u0275\u0275pipe(2,"tuiFormatPhone"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"p"),e.\u0275\u0275text(4),e.\u0275\u0275pipe(5,"tuiFormatPhone"),e.\u0275\u0275elementEnd()),2&n&&(e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1("Formatted number by default: ",e.\u0275\u0275pipeBind1(2,2,i.phone),""),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate1(" Formatted number with custom params: ",e.\u0275\u0275pipeBind3(5,4,i.phone,void 0,"###-###-##-##"),"\n"))},pipes:[c.r],encapsulation:2,changeDetection:0}),o})();var S=t(77027),h=t(41360),F=t(10200),x=t(72107),N=t(68874),R=t(23618),y=t(17023),A=t(76349);function D(o,a){if(1&o&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275i18n(1,2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"tui-doc-example",3),e.\u0275\u0275element(3,"tui-format-phone-example-1"),e.\u0275\u0275elementEnd()),2&o){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275property("content",n.example1)}}function $(o,a){1&o&&e.\u0275\u0275i18n(0,9)}function L(o,a){1&o&&e.\u0275\u0275i18n(0,10)}function v(o,a){if(1&o){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"p",4),e.\u0275\u0275i18n(1,5),e.\u0275\u0275pipe(2,"tuiFormatPhone"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"tui-input",6),e.\u0275\u0275listener("ngModelChange",function(l){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().index=l}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"tui-doc-documentation"),e.\u0275\u0275template(5,$,1,0,"ng-template",7),e.\u0275\u0275listener("documentationPropertyValueChange",function(l){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().countryCode=l}),e.\u0275\u0275template(6,L,1,0,"ng-template",8),e.\u0275\u0275listener("documentationPropertyValueChange",function(l){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().phoneMask=l}),e.\u0275\u0275elementEnd()}if(2&o){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275i18nExp(e.\u0275\u0275pipeBind3(2,8,n.index,n.countryCode,n.phoneMask)),e.\u0275\u0275i18nApply(1),e.\u0275\u0275advance(1),e.\u0275\u0275property("tuiTextfieldMaxLength",n.maxLength)("tuiTextfieldLabelOutside",!0)("ngModel",n.index),e.\u0275\u0275advance(2),e.\u0275\u0275property("documentationPropertyValues",n.countryCodes)("documentationPropertyValue",n.countryCode),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",n.phoneMasks)("documentationPropertyValue",n.phoneMask)}}function I(o,a){if(1&o&&(e.\u0275\u0275elementStart(0,"ol",11),e.\u0275\u0275elementStart(1,"li"),e.\u0275\u0275elementStart(2,"p"),e.\u0275\u0275i18nStart(3,12),e.\u0275\u0275element(4,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(5,"tui-doc-code",13),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"li"),e.\u0275\u0275elementStart(7,"p"),e.\u0275\u0275i18n(8,14),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(9,"tui-doc-code",15),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&o){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("code",n.exampleModule),e.\u0275\u0275advance(4),e.\u0275\u0275property("code",n.exampleHtml)}}let H=(()=>{class o{constructor(){this.exampleModule=t.e(14203).then(t.t.bind(t,14203,17)),this.exampleHtml=t.e(66398).then(t.t.bind(t,66398,17)),this.example1={TypeScript:t.e(37904).then(t.t.bind(t,37904,17)),HTML:t.e(99280).then(t.t.bind(t,99280,17))},this.index="+78005557778",this.countryCodes=[void 0,"+850","+1","+52"],this.countryCode=this.countryCodes[0],this.phoneMasks=[void 0,"####-#############","### ###-####","### ###-####"],this.phoneMask=this.phoneMasks[0]}get maxLength(){return this.countryCode&&this.phoneMask?this.countryCode.length+this.phoneMask.length-2:12}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["example-tui-format-phone"]],decls:4,vars:0,consts:function(){let a,n,i,l,m,_,P;return a=$localize`:␟cd4920b3e2119c03dc9a0972eb03498c55067410␟3893505654228026214:Pipe to format phone number`,n=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,i=$localize`:␟068fcd8de4e089518ee98843f32cf943ab61d085␟2451968025740707050: Formatted phone number: ${"\ufffd0\ufffd"}:INTERPOLATION: `,l=$localize`:␟3796d9edaba5839bc345b9dc9c1d22bec3e806b3␟2828194013486797327: Country code `,m=$localize`:␟688a3500e6ff8f090a2c0a000bbbd585fbfdff04␟3740414349373353425: Phone number mask `,_=$localize`:␟dd3aa76033a533126a3d6c744507d5293e90dff7␟4370129277364205625: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiFormatPhonePipe${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,P=$localize`:␟6ef7ff8ead6f93c0fac4fb8403f5069f4439cc57␟1250387402385487280:Use pipe in template with function and its arguments:`,[["header","FormatPhone","package","CORE","type","pipes"],["pageTab",""],a,["id","base","heading",n,3,"content"],[1,"text","b-full-width"],i,["tuiTextfieldSize","m",1,"slider",3,"tuiTextfieldMaxLength","tuiTextfieldLabelOutside","ngModel","ngModelChange"],["documentationPropertyName","countryCode","documentationPropertyType","string | undefined",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","phoneMask","documentationPropertyType","string | undefined",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],l,m,[1,"b-demo-steps"],_,["filename","myComponent.module.ts",3,"code"],P,["filename","myComponent.template.html",3,"code"]]},template:function(n,i){1&n&&(e.\u0275\u0275elementStart(0,"tui-doc-page",0),e.\u0275\u0275template(1,D,4,1,"ng-template",1),e.\u0275\u0275template(2,v,7,12,"ng-template",1),e.\u0275\u0275template(3,I,10,2,"ng-template",1),e.\u0275\u0275elementEnd())},directives:[M.q,C.n,g.f,f,S.K,h.w,F.sz,x.fy,N.xT,p.NgControlStatus,p.NgModel,R.z,y.B,A.c],pipes:[c.r],styles:[".text[_ngcontent-%COMP%]{font-size:1.1875rem}.slider[_ngcontent-%COMP%]{margin-top:.75rem;width:9.375rem}"],changeDetection:0}),o})(),V=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=e.\u0275\u0275defineInjector({imports:[[E.bKl,s.QfL,p.ReactiveFormsModule,p.FormsModule,T.ez,s.Ltw,E.cnw,u.fV,O.Bz.forChild((0,u.Ve)(H))]]}),o})()}}]);