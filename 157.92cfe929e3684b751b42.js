(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{"+XZ6":function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiAutoFocusModule",(function(){return $}));var o=n("An66"),a=n("3kIJ"),c=n("1VvW"),l=n("SVIu"),i=n("l4xa"),u=n("Qq0t"),r=n("dvRg"),d=n("kZht"),s=n("OZlg"),p=n("e0eB"),m=n("iyc4"),f=n("zV1d"),b=n("GdrL"),h=n("71sB"),g=n("oW5P");function C(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"tui-input",2),d["\u0275\u0275listener"]("ngModelChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().model=t})),d["\u0275\u0275text"](1," Focusable tui-input\n"),d["\u0275\u0275elementEnd"]()}if(2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275property"]("ngModel",e.model)}}let x=(()=>{class e{constructor(){this.showInput=!1,this.model="Focused after its appearance"}onClick(){this.showInput=!0}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-auto-focus-example-1"]],decls:3,vars:1,consts:[["tuiButton","","type","button",1,"tui-space_bottom-5",3,"click"],["tuiAutoFocus","",3,"ngModel","ngModelChange",4,"ngIf"],["tuiAutoFocus","",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"button",0),d["\u0275\u0275listener"]("click",(function(){return t.onClick()})),d["\u0275\u0275text"](1," Show input\n"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](2,C,2,1,"tui-input",1)),2&e&&(d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngIf",t.showInput))},directives:[f.a,o.t,b.a,h.a,g.a,a.NgControlStatus,a.NgModel],encapsulation:2,changeDetection:0}),e})();var S=n("u8jZ");const w=["header",$localize`:␟f9edaaf6c41c9cded402e1e3a7d560f335226273␟2512553398889197442:AutoFocus`],E=["pageTab",$localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`];var v;v=$localize`:␟4985c4f63a3ecbe11b6f78c1fcdbe92ce6c51b80␟3379878611927621068:${"\ufffd#2\ufffd"}:START_TAG_CODE:tuiAutoFocus${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: allows to focus HTML-element right after its appearance. It works also with focusable Taiga UI components `;const A=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`];function T(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"p"),d["\u0275\u0275i18nStart"](1,v),d["\u0275\u0275element"](2,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"tui-doc-example",3),d["\u0275\u0275i18nAttributes"](4,A),d["\u0275\u0275element"](5,"tui-auto-focus-example-1"),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",e.example1)}}var y,M;function I(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"ol",4),d["\u0275\u0275elementStart"](1,"li"),d["\u0275\u0275elementStart"](2,"p"),d["\u0275\u0275i18nStart"](3,y),d["\u0275\u0275element"](4,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](5,"tui-doc-code",5),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"li"),d["\u0275\u0275elementStart"](7,"p"),d["\u0275\u0275i18n"](8,M),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](9,"tui-doc-code",6),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("code",e.exampleModule),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("code",e.exampleHtml)}}y=$localize`:␟6eb38541c615c02bbbaa2361faeb207881234045␟1923648485573346644: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiAutoFocus${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our directive `,M=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let k=(()=>{class e{constructor(){this.exampleModule=n.e(1504).then(n.bind(null,"7JRZ")),this.exampleHtml=n.e(1505).then(n.bind(null,"9vSP")),this.example1={TypeScript:n.e(1503).then(n.bind(null,"oOeH")),HTML:n.e(1502).then(n.bind(null,"HaVf"))}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-auto-focus"]],decls:5,vars:0,consts:[["package","CDK","type","directives",6,"header"],["pageTab",""],[6,"pageTab"],["id","base",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-doc-page",0),d["\u0275\u0275i18nAttributes"](1,w),d["\u0275\u0275template"](2,T,6,1,"ng-template",1),d["\u0275\u0275template"](3,I,10,2,"ng-template",2),d["\u0275\u0275i18nAttributes"](4,E),d["\u0275\u0275elementEnd"]())},directives:[s.a,p.a,m.a,x,S.a],encapsulation:2,changeDetection:0}),e})(),$=(()=>{class e{}return e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,a.FormsModule,r.cb,i.cb,u.ab,l.m,c.f.forChild(Object(l.u)(k))]]}),e})()}}]);