(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{vD8y:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiSwipeModule",(function(){return A}));var i=n("An66"),o=n("1VvW"),a=n("SVIu"),l=n("hLNI"),c=n("l4xa"),r=n("kZht"),d=n("OZlg"),p=n("e0eB"),s=n("iyc4"),u=n("FnSC");let m=(()=>{class e{constructor(){this.swiped="default"}onSwipe(e){this.swiped=e.direction}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-swipe-example-1"]],hostVars:2,hostBindings:function(e,t){2&e&&r["\u0275\u0275classMap"](t.swiped)},decls:2,vars:2,consts:[[1,"box","tui-text_body-l",3,"ngClass","tuiSwipe"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"div",0),r["\u0275\u0275listener"]("tuiSwipe",(function(e){return t.onSwipe(e)})),r["\u0275\u0275text"](1),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275property"]("ngClass",t.swiped),r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate1"](" Swiped ",t.swiped,"\n"))},directives:[i.q,u.a],styles:[".box[_ngcontent-%COMP%]{width:200px;height:200px;background-color:var(--tui-primary);transition:all .5s ease-out;display:flex;justify-content:center;align-items:center;touch-action:none}.box.left[_ngcontent-%COMP%]{background-color:var(--tui-support-12)}.box.right[_ngcontent-%COMP%]{background-color:var(--tui-support-03)}.box.top[_ngcontent-%COMP%]{background-color:var(--tui-support-08)}.box.bottom[_ngcontent-%COMP%]{background-color:var(--tui-support-10)}"],changeDetection:0}),e})();var b=n("ZTXN"),S=n("jLdB");function f(e,t){if(1&e){const e=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"div",2),r["\u0275\u0275listener"]("tuiSwipe",(function(t){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().onSwipe(t)})),r["\u0275\u0275text"](1," Swipe right to close "),r["\u0275\u0275elementEnd"]()}}let h=(()=>{class e{constructor(){this.open$=new b.a}toggle(e){this.open$.next(e)}onSwipe(e){console.info(e.direction),"left"===e.direction&&this.toggle(!0),"right"===e.direction&&this.toggle(!1)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-swipe-example-2"]],decls:4,vars:4,consts:[[1,"container","tui-text_body-l",3,"tuiSwipe"],["class","sidebar tui-text_body-l",3,"tuiSwipe",4,"tuiSidebar","tuiSidebarDirection"],[1,"sidebar","tui-text_body-l",3,"tuiSwipe"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"div",0),r["\u0275\u0275listener"]("tuiSwipe",(function(e){return t.onSwipe(e)})),r["\u0275\u0275text"](1," Swipe left to open "),r["\u0275\u0275template"](2,f,2,0,"div",1),r["\u0275\u0275pipe"](3,"async"),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("tuiSidebar",!!r["\u0275\u0275pipeBind1"](3,2,t.open$))("tuiSidebarDirection","right"))},directives:[u.a,S.a],pipes:[i.b],styles:[".container[_ngcontent-%COMP%]{width:200px;height:200px}.sidebar[_ngcontent-%COMP%]{width:100%;height:100%}.container[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}"],changeDetection:0}),e})();var w=n("u8jZ");const g=["header",$localize`:␟692d3486522b76f188e85c329a8dee83471e833d␟2599663742744214450:Swipe`],x=["pageTab",$localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`];var E,v;E=$localize`:␟a34630ac655c7ae6ca59883b8038230b9a706cd1␟2985041163238726247:${"\ufffd#2\ufffd"}:START_TAG_CODE:tuiSwipe${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: directive allows detecting swipes on mobile devices. `,v=$localize`:␟9c102467fc96b921efb10bbc95fb3d3eeca98348␟1350150750840159964: You can configure the directive with ${"\ufffd#5\ufffd"}:START_TAG_CODE:TUI_SWIPE_OPTIONS${"\ufffd/#5\ufffd"}:CLOSE_TAG_CODE: token. ${"\ufffd#6\ufffd\ufffd/#6\ufffd"}:LINE_BREAK: Allowed options: `;const C=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`],y=["heading",$localize`:␟a3fa24e288faa8addbc361884d78e4bf1fa3937d␟5947747490679912275:With sidebar`];function _(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"p"),r["\u0275\u0275i18nStart"](1,E),r["\u0275\u0275element"](2,"code"),r["\u0275\u0275i18nEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](3,"p"),r["\u0275\u0275i18nStart"](4,v),r["\u0275\u0275element"](5,"code"),r["\u0275\u0275element"](6,"br"),r["\u0275\u0275i18nEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](7,"dl"),r["\u0275\u0275elementStart"](8,"dt"),r["\u0275\u0275elementStart"](9,"strong"),r["\u0275\u0275text"](10,"timeout:"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](11,"dd"),r["\u0275\u0275text"](12,"max time between touchstart and touchend"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](13,"dt"),r["\u0275\u0275elementStart"](14,"strong"),r["\u0275\u0275text"](15,"threshold"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](16," : "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](17,"dd"),r["\u0275\u0275text"](18,"min distance between touchstart and touchend."),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](19,"tui-doc-example",3),r["\u0275\u0275i18nAttributes"](20,C),r["\u0275\u0275element"](21,"tui-swipe-example-1"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](22,"tui-doc-example",3),r["\u0275\u0275i18nAttributes"](23,y),r["\u0275\u0275element"](24,"tui-swipe-example-2"),r["\u0275\u0275elementEnd"]()),2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](19),r["\u0275\u0275property"]("content",e.example1),r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("content",e.example2)}}var T,O;function M(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"ol",4),r["\u0275\u0275elementStart"](1,"li"),r["\u0275\u0275elementStart"](2,"p"),r["\u0275\u0275i18nStart"](3,T),r["\u0275\u0275element"](4,"code"),r["\u0275\u0275i18nEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](5,"tui-doc-code",5),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](6,"li"),r["\u0275\u0275elementStart"](7,"p"),r["\u0275\u0275i18n"](8,O),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](9,"tui-doc-code",6),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](5),r["\u0275\u0275property"]("code",e.exampleModule),r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("code",e.exampleHtml)}}T=$localize`:␟4531ea54619a566db576498d7b988287093002a3␟4746491400247048532: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiSwipeModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our directive `,O=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let $=(()=>{class e{constructor(){this.exampleModule=n.e(1607).then(n.bind(null,"jZRJ")),this.exampleHtml=n.e(1608).then(n.bind(null,"tSKT")),this.example1={TypeScript:n.e(1603).then(n.bind(null,"BDkL")),HTML:n.e(1601).then(n.bind(null,"rrMQ")),LESS:n.e(1602).then(n.bind(null,"jnZQ"))},this.example2={TypeScript:n.e(1606).then(n.bind(null,"8b0E")),HTML:n.e(1604).then(n.bind(null,"c8fj")),LESS:n.e(1605).then(n.bind(null,"9kOI"))}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-swipe"]],decls:5,vars:0,consts:[["package","CDK","type","directives",6,"header"],["pageTab",""],[6,"pageTab"],["id","base",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"tui-doc-page",0),r["\u0275\u0275i18nAttributes"](1,g),r["\u0275\u0275template"](2,_,25,2,"ng-template",1),r["\u0275\u0275template"](3,M,10,2,"ng-template",2),r["\u0275\u0275i18nAttributes"](4,x),r["\u0275\u0275elementEnd"]())},directives:[d.a,p.a,s.a,m,h,w.a],encapsulation:2,changeDetection:0}),e})(),A=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.c,c.Yb,a.m,l.p,c.ab,o.f.forChild(Object(a.t)($))]]}),e})()}}]);