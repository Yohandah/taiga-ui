(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{gLjn:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiPanModule",(function(){return T}));var a=n("An66"),o=n("1VvW"),i=n("SVIu"),c=n("NE9W"),r=n("kZht"),l=n("OZlg"),d=n("e0eB"),s=n("iyc4"),m=n("ENSU"),u=n("C05f"),p=n("YtkY"),b=n("MdvI");let f=(()=>{class e{constructor(e){this.sanitizer=e,this.coordinates$=new u.a([0,0]),this.transform$=this.coordinates$.pipe(Object(p.a)(e=>this.sanitizer.bypassSecurityTrustStyle(`translate(${e[0]}px, ${e[1]}px)`)))}onPan(e){this.coordinates$.next([this.currentCoords[0]+e[0],this.currentCoords[1]+e[1]])}get currentCoords(){return this.coordinates$.value}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](m.DomSanitizer))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-pan-example-1"]],decls:3,vars:4,consts:[[1,"container","tui-text_body-l"],[1,"circle",3,"tuiPan"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"div",0),r["\u0275\u0275elementStart"](1,"div",1),r["\u0275\u0275listener"]("tuiPan",(function(e){return t.onPan(e)})),r["\u0275\u0275pipe"](2,"async"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](1),r["\u0275\u0275styleProp"]("transform",r["\u0275\u0275pipeBind1"](2,2,t.transform$)))},directives:[b.a],pipes:[a.b],styles:[".container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:12rem;height:12rem;background-color:var(--tui-secondary);overflow:hidden}.circle[_ngcontent-%COMP%]{width:6rem;height:6rem;border-radius:100%;touch-action:none;background-color:var(--tui-support-01);box-shadow:.25rem .25rem .5rem 0 rgba(34,60,80,.2);cursor:move;will-change:transform}"],changeDetection:0}),e})();var h=n("u8jZ");const v=["header",$localize`:␟7cd14ceae63b4aba71ab7935638f5d3b799f4f4b␟9128067536654850026:Pan`],g=["pageTab",$localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`];var S;S=$localize`:␟3cb7dfa255d6c41046d3cfa8bf454e2b46f4a170␟1665675151568039908:${"\ufffd#2\ufffd"}:START_TAG_CODE:tuiPan${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: The directive emits delta between mousemove / touchmove events. You can use it to change the coordinates of an element as in example below `;const y=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`];function x(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"p"),r["\u0275\u0275i18nStart"](1,S),r["\u0275\u0275element"](2,"code"),r["\u0275\u0275i18nEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](3,"tui-doc-example",3),r["\u0275\u0275i18nAttributes"](4,y),r["\u0275\u0275element"](5,"tui-pan-example-1"),r["\u0275\u0275elementEnd"]()),2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("content",e.example1)}}var C,E;function w(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"ol",4),r["\u0275\u0275elementStart"](1,"li"),r["\u0275\u0275elementStart"](2,"p"),r["\u0275\u0275i18nStart"](3,C),r["\u0275\u0275element"](4,"code"),r["\u0275\u0275i18nEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](5,"tui-doc-code",5),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](6,"li"),r["\u0275\u0275elementStart"](7,"p"),r["\u0275\u0275i18n"](8,E),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](9,"tui-doc-code",6),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](5),r["\u0275\u0275property"]("code",e.exampleModule),r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("code",e.exampleHtml)}}C=$localize`:␟6a3b47f295a88bb1c26bc0ed826becb749fcea6c␟6584529262933175347: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiPanModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our directive `,E=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let $=(()=>{class e{constructor(){this.exampleModule=n.e(1572).then(n.bind(null,"Hwek")),this.exampleHtml=n.e(1573).then(n.bind(null,"fKfC")),this.example1={TypeScript:n.e(1571).then(n.bind(null,"0jCG")),HTML:n.e(1569).then(n.bind(null,"UV0J")),LESS:n.e(1570).then(n.bind(null,"Whu1"))}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-pan"]],decls:5,vars:0,consts:[["package","CDK","type","directives",6,"header"],["pageTab",""],[6,"pageTab"],["id","base",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"tui-doc-page",0),r["\u0275\u0275i18nAttributes"](1,v),r["\u0275\u0275template"](2,x,6,1,"ng-template",1),r["\u0275\u0275template"](3,w,10,2,"ng-template",2),r["\u0275\u0275i18nAttributes"](4,g),r["\u0275\u0275elementEnd"]())},directives:[l.a,d.a,s.a,f,h.a],encapsulation:2,changeDetection:0}),e})(),T=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,c.a,i.m,o.f.forChild(Object(i.t)($))]]}),e})()}}]);