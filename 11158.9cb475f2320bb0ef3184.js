"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[11158],{11158:(J,d,t)=>{t.r(d),t.d(d,{ExampleTuiErrorModule:()=>V});var T=t(12057),m=t(23738),F=t(12021),s=t(46244),u=t(82605),c=t(37267),C=t(38780),O=t(89570),e=t(74788),R=t(88331),g=t(37159),S=t(66596),M=t(57068),f=t(82535),p=t(36951);let D=(()=>{class o{constructor(){this.enabled=!1,this.error=new u.T8v("An error")}get computedError(){return this.enabled?this.error:null}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["tui-error-example-1"]],decls:3,vars:2,consts:[[3,"ngModel","ngModelChange"],[3,"error"]],template:function(n,l){1&n&&(e.\u0275\u0275elementStart(0,"tui-toggle",0),e.\u0275\u0275listener("ngModelChange",function(i){return l.enabled=i}),e.\u0275\u0275text(1,"Show"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(2,"tui-error",1)),2&n&&(e.\u0275\u0275property("ngModel",l.enabled),e.\u0275\u0275advance(2),e.\u0275\u0275property("error",l.computedError))},directives:[f.p,m.NgControlStatus,m.NgModel,p.v],encapsulation:2,changeDetection:0}),o})();var _=t(31823),N=t(23618),x=t(17023),h=t(76349);const y=["errorContent"],$=function(){return["/pipes/field-error"]};function v(o,r){if(1&o&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275i18nStart(1,2),e.\u0275\u0275element(2,"code"),e.\u0275\u0275elementStart(3,"a",3),e.\u0275\u0275element(4,"code"),e.\u0275\u0275elementEnd(),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"tui-doc-example",4),e.\u0275\u0275element(6,"tui-error-example-1"),e.\u0275\u0275elementEnd()),2&o){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(3),e.\u0275\u0275property("routerLink",e.\u0275\u0275pureFunction0(2,$)),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",n.example1)}}function P(o,r){1&o&&(e.\u0275\u0275text(0," Error with "),e.\u0275\u0275elementStart(1,"em"),e.\u0275\u0275elementStart(2,"strong"),e.\u0275\u0275text(3,"HTML"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd())}function L(o,r){1&o&&(e.\u0275\u0275i18nStart(0,8),e.\u0275\u0275element(1,"code"),e.\u0275\u0275i18nEnd())}function A(o,r){if(1&o){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tui-doc-demo"),e.\u0275\u0275element(1,"tui-error",5),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(2,P,4,0,"ng-template",null,6,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275elementStart(4,"tui-doc-documentation"),e.\u0275\u0275template(5,L,2,0,"ng-template",7),e.\u0275\u0275listener("documentationPropertyValueChange",function(a){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().selectedError=a}),e.\u0275\u0275elementEnd()}if(2&o){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("error",n.error),e.\u0275\u0275advance(4),e.\u0275\u0275property("documentationPropertyValues",n.errorVariants)("documentationPropertyValue",n.selectedError)}}function G(o,r){if(1&o&&(e.\u0275\u0275elementStart(0,"ol",9),e.\u0275\u0275elementStart(1,"li"),e.\u0275\u0275elementStart(2,"p"),e.\u0275\u0275i18nStart(3,10),e.\u0275\u0275element(4,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(5,"tui-doc-code",11),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"li"),e.\u0275\u0275elementStart(7,"p"),e.\u0275\u0275i18n(8,12),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(9,"tui-doc-code",13),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&o){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("code",n.exampleModule),e.\u0275\u0275advance(4),e.\u0275\u0275property("code",n.exampleHtml)}}let I=(()=>{class o{constructor(){this.exampleModule=t.e(91962).then(t.t.bind(t,91962,17)),this.exampleHtml=t.e(26244).then(t.t.bind(t,36989,17)),this.example1={TypeScript:t.e(25822).then(t.bind(t,25822)),HTML:t.e(83816).then(t.t.bind(t,83816,17))},this.errorVariants=["Error as string","Error as HTML content"],this.selectedError=this.errorVariants[0]}get error(){return null===this.selectedError?null:this.selectedError===this.errorVariants[0]?this.selectedError:new u.T8v(this.errorContent||"")}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["example-tui-error"]],viewQuery:function(n,l){if(1&n&&e.\u0275\u0275viewQuery(y,5),2&n){let a;e.\u0275\u0275queryRefresh(a=e.\u0275\u0275loadQuery())&&(l.errorContent=a.first)}},decls:4,vars:0,consts:function(){let r,n,l,a,i;return r=$localize`:␟e3a016b8e7670ad0631485363cf4a2807fa23877␟6514627498355334136:${"[\ufffd#2\ufffd|\ufffd#4\ufffd]"}:START_TAG_CODE:Error${"[\ufffd/#2\ufffd|\ufffd/#4\ufffd]"}:CLOSE_TAG_CODE: allows to show an error. If you work with a form, see ${"\ufffd#3\ufffd"}:START_LINK:${"[\ufffd#2\ufffd|\ufffd#4\ufffd]"}:START_TAG_CODE:tuiFieldError${"[\ufffd/#2\ufffd|\ufffd/#4\ufffd]"}:CLOSE_TAG_CODE:${"\ufffd/#3\ufffd"}:CLOSE_LINK: . `,r=e.\u0275\u0275i18nPostprocess(r),n=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,l=$localize`:␟6bb0fe2848c9231f09868951164d61899af84e77␟2999611618373406443: Active state for ${"\ufffd#1\ufffd"}:START_TAG_CODE:routerLinkActive${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: , for example `,a=$localize`:␟b1de08c442ae1c5128ffb30368c65f72085703ff␟2233161597921029410: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiErrorModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,i=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","Error","package","CORE","type","components"],["pageTab",""],r,["tuiLink","",3,"routerLink"],["id","base","heading",n,3,"content"],[3,"error"],["errorContent",""],["documentationPropertyName","error","documentationPropertyMode","input","documentationPropertyType","TuiValidationError | string | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],l,[1,"b-demo-steps"],a,["filename","myComponent.module.ts",3,"code"],i,["filename","myComponent.template.html",3,"code"]]},template:function(n,l){1&n&&(e.\u0275\u0275elementStart(0,"tui-doc-page",0),e.\u0275\u0275template(1,v,7,3,"ng-template",1),e.\u0275\u0275template(2,A,6,3,"ng-template",1),e.\u0275\u0275template(3,G,10,2,"ng-template",1),e.\u0275\u0275elementEnd())},directives:[R.q,g.n,S.V,F.yS,M.f,D,_.F,p.v,N.z,x.B,h.c],encapsulation:2,changeDetection:0}),o})(),V=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=e.\u0275\u0275defineInjector({imports:[[T.ez,m.FormsModule,C.YMv,c.Shu,c.jzK,O.wq,u.I1h,s.fV,F.Bz.forChild((0,s.Ve)(I))]]}),o})()}}]);