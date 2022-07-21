"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[44577],{44577:(I,d,n)=>{n.r(d),n.d(d,{ExampleTuiPresentModule:()=>N});var i=n(12057),r=n(12021),T=n(46244),u=n(82605),F=n(38780),e=n(74788),m=n(88331),c=n(37159),p=n(57068),C=n(61369),_=n(9568),D=n(4123);function g(o,a){if(1&o){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275i18nStart(0,1,1),e.\u0275\u0275elementStart(1,"span",2),e.\u0275\u0275listener("tuiPresentChange",function(s){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().onIf(s)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275i18nEnd()}}let M=(()=>{class o{constructor(){this.counterCSS=0,this.counterIf=0,this.hovered=!1}onHovered(t){this.hovered=t}onCSS(t){this.counterCSS+=t?1:-1}onIf(t){this.counterIf+=t?1:-1}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["tui-present-example-1"]],decls:12,vars:5,consts:function(){let a,t;return a=$localize`:␟ae22a3cf2aa4f558b8e5339a8828934dca1db1cc␟9077025469050371295:Counter of component appearance minus counter of its disappearance:`,t=$localize`:␟7cd644c498b69bc3f7194ce48190b3df87292d9e␟7044645915109166344: Hover ${"\ufffd#2\ufffd"}:START_TAG_SPAN: I am a component hidden with CSS ${"[\ufffd/#2\ufffd|\ufffd/#1:1\ufffd\ufffd/*3:1\ufffd]"}:CLOSE_TAG_SPAN:${"\ufffd*3:1\ufffd\ufffd#1:1\ufffd"}:START_TAG_SPAN_1: I am a component hidden with *ngIf ${"[\ufffd/#2\ufffd|\ufffd/#1:1\ufffd\ufffd/*3:1\ufffd]"}:CLOSE_TAG_SPAN:`,t=e.\u0275\u0275i18nPostprocess(t),[[3,"tuiHoveredChange"],t,[3,"tuiPresentChange"],[3,"tuiPresentChange",4,"ngIf"],a,[3,"value"]]},template:function(t,E){1&t&&(e.\u0275\u0275elementStart(0,"p",0),e.\u0275\u0275listener("tuiHoveredChange",function(l){return E.onHovered(l)}),e.\u0275\u0275i18nStart(1,1),e.\u0275\u0275elementStart(2,"span",2),e.\u0275\u0275listener("tuiPresentChange",function(l){return E.onCSS(l)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(3,g,2,0,"span",3),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"p"),e.\u0275\u0275i18n(5,4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"p"),e.\u0275\u0275text(7," CSS: "),e.\u0275\u0275element(8,"tui-badge",5),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"p"),e.\u0275\u0275text(10," ngIf: "),e.\u0275\u0275element(11,"tui-badge",5),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275advance(2),e.\u0275\u0275classProp("hidden",!E.hovered),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",E.hovered),e.\u0275\u0275advance(5),e.\u0275\u0275property("value",E.counterCSS),e.\u0275\u0275advance(3),e.\u0275\u0275property("value",E.counterIf))},directives:[C.c,_.j,i.O5,D.g],styles:[".hidden[_ngcontent-%COMP%]{display:none}"],changeDetection:0}),o})();var P=n(76349);function R(o,a){if(1&o&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275i18nStart(1,3),e.\u0275\u0275element(2,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"tui-doc-example",4),e.\u0275\u0275element(4,"tui-present-example-1"),e.\u0275\u0275elementEnd()),2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(3),e.\u0275\u0275property("content",t.example1)}}function f(o,a){if(1&o&&(e.\u0275\u0275elementStart(0,"ol",5),e.\u0275\u0275elementStart(1,"li"),e.\u0275\u0275elementStart(2,"p"),e.\u0275\u0275i18nStart(3,6),e.\u0275\u0275element(4,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(5,"tui-doc-code",7),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"li"),e.\u0275\u0275elementStart(7,"p"),e.\u0275\u0275i18n(8,8),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(9,"tui-doc-code",9),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("code",t.exampleModule),e.\u0275\u0275advance(4),e.\u0275\u0275property("code",t.exampleHtml)}}let O=(()=>{class o{constructor(){this.exampleModule=n.e(25120).then(n.t.bind(n,25120,17)),this.exampleHtml=n.e(2288).then(n.t.bind(n,2288,17)),this.example1={TypeScript:n.e(59472).then(n.bind(n,59472)),HTML:n.e(37087).then(n.t.bind(n,37087,17)),LESS:n.e(60044).then(n.t.bind(n,60044,17))}}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["example-tui-present"]],decls:3,vars:0,consts:function(){let a,t,E,s,l;return a=$localize`:␟9acc685ba486c486bf39972d10827622a7acbd02␟6522877977962061564:Present`,t=$localize`:␟68ffa88b424884f6f5d007587d01553dd130a576␟9105695448473968927:${"\ufffd#2\ufffd"}:START_TAG_CODE:tuiPresentChange${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: allows to detect appearance of elements in DOM `,E=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,s=$localize`:␟a8301097342fdee8e7a9cce37a8a87560c6f4cd7␟3451653107334231798: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiPresentModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,l=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header",a,"package","CORE","path","kit/directives/present"],["pageTab",""],["pageTab","Setup"],t,["id","base","heading",E,3,"content"],[1,"b-demo-steps"],s,["filename","myComponent.module.ts",3,"code"],l,["filename","myComponent.template.html",3,"code"]]},template:function(t,E){1&t&&(e.\u0275\u0275elementStart(0,"tui-doc-page",0),e.\u0275\u0275template(1,R,5,1,"ng-template",1),e.\u0275\u0275template(2,f,10,2,"ng-template",2),e.\u0275\u0275elementEnd())},directives:[m.q,c.n,p.f,M,P.c],encapsulation:2,changeDetection:0}),o})(),N=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=e.\u0275\u0275defineInjector({imports:[[i.ez,u.WDk,F.Q7m,u.VE3,F.fT6,T.fV,r.Bz.forChild((0,T.Ve)(O))]]}),o})()}}]);