(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{"6siK":function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiThemeSwitcherModule",(function(){return w}));var a=n("An66"),i=n("3kIJ"),o=n("1VvW"),r=n("SVIu"),c=n("Qq0t"),l=n("dvRg"),s=n("kZht"),d=n("OZlg"),m=n("e0eB"),u=n("aPft"),p=n("iyc4"),f=n("/ASf"),b=n("l4xa");let h=(()=>{class e extends b.k{}return e.\u0275fac=function(t){return g(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["elderly"]],features:[s["\u0275\u0275InheritDefinitionFeature"]],decls:0,vars:0,template:function(e,t){},styles:[":root{--tui-primary-text:#fff;--tui-primary:#299d37;--tui-primary-hover:#2c7a35;--tui-primary-active:#2c7a35;--tui-link:#f59726;--tui-link-hover:#fab00b;--tui-selection:#f3fadc}"],encapsulation:2,changeDetection:0}),e})();const g=s["\u0275\u0275getInheritedFactory"](h);var S;function C(e,t){1&e&&s["\u0275\u0275element"](0,"elderly")}S=$localize`:␟57965de445a0e14fc9f275dfa15df51c6588ae2a␟2349548101776240308: Samples of ${"[\ufffd#2\ufffd|\ufffd#3\ufffd|\ufffd#4\ufffd]"}:START_TAG_CODE:LESS${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd|\ufffd/#4\ufffd]"}:CLOSE_TAG_CODE: and ${"[\ufffd#2\ufffd|\ufffd#3\ufffd|\ufffd#4\ufffd]"}:START_TAG_CODE:TypeScript${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd|\ufffd/#4\ufffd]"}:CLOSE_TAG_CODE: are in ${"[\ufffd#2\ufffd|\ufffd#3\ufffd|\ufffd#4\ufffd]"}:START_TAG_CODE:elderly${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd|\ufffd/#4\ufffd]"}:CLOSE_TAG_CODE: component.
`,S=s["\u0275\u0275i18nPostprocess"](S);let T=(()=>{class e{constructor(){this.enabled=!1}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-theme-switcher-1"]],decls:9,vars:2,consts:[[4,"ngIf"],["size","l",1,"tui-space_right-1",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"p"),s["\u0275\u0275i18nStart"](1,S),s["\u0275\u0275element"](2,"code"),s["\u0275\u0275element"](3,"code"),s["\u0275\u0275element"](4,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](5,C,1,0,"elderly",0),s["\u0275\u0275elementStart"](6,"label"),s["\u0275\u0275elementStart"](7,"tui-toggle",1),s["\u0275\u0275listener"]("ngModelChange",(function(e){return t.enabled=e})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](8," Senior Citizen mode\n"),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("ngIf",t.enabled),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngModel",t.enabled))},directives:[a.t,f.a,i.NgControlStatus,i.NgModel,h],encapsulation:2,changeDetection:0}),e})();const E=["header",$localize`:␟aa28493a738be584031c0ab5ad92491d69ceb7f9␟5051158689905388764:ThemeSwitcher`];var y;y=$localize`:␟2647bf95c5f901bf7ff7a979761aec04bc9802b9␟1350615909534605037:${"[\ufffd#2\ufffd|\ufffd#3\ufffd]"}:START_TAG_CODE:AbstractTuiThemeSwitcher${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd]"}:CLOSE_TAG_CODE: is an abstract class to be used for dynamic theme switching. In the sample below you can see a component that extends ${"[\ufffd#2\ufffd|\ufffd#3\ufffd]"}:START_TAG_CODE:AbstractTuiThemeSwitcher${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd]"}:CLOSE_TAG_CODE: and reassigns some CSS variables. `,y=s["\u0275\u0275i18nPostprocess"](y);const _=["heading",$localize`:␟9e7dfdd12e894b57966fa2f8312284bf76d57389␟4661923683013028003:Green theme`];function v(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"p"),s["\u0275\u0275i18nStart"](1,y),s["\u0275\u0275element"](2,"code"),s["\u0275\u0275element"](3,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"tui-notification",2),s["\u0275\u0275text"](5," Use "),s["\u0275\u0275elementStart"](6,"code"),s["\u0275\u0275text"](7,"*ngIf"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](8," to switch theme on the fly "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](9,"tui-notification",3),s["\u0275\u0275text"](10," Component must have "),s["\u0275\u0275elementStart"](11,"code"),s["\u0275\u0275text"](12,"encapsulation: ViewEncapsulation.None"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](13,"tui-doc-example",4),s["\u0275\u0275i18nAttributes"](14,_),s["\u0275\u0275element"](15,"tui-theme-switcher-1"),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](13),s["\u0275\u0275property"]("content",e.example1)}}let x=(()=>{class e{constructor(){this.example1={TypeScript:n.e(1412).then(n.bind(null,"9f8S")),HTML:n.e(1411).then(n.bind(null,"lWTP")),LESS:n.e(1413).then(n.bind(null,"LlKW"))}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-theme-switcher"]],decls:3,vars:0,consts:[["package","CDK","path","cdk/abstract/theme-switcher.ts",6,"header"],["pageTab",""],[1,"tui-space_bottom-4"],["status","warning"],["id","green",3,"content",6,"heading"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-doc-page",0),s["\u0275\u0275i18nAttributes"](1,E),s["\u0275\u0275template"](2,v,16,1,"ng-template",1),s["\u0275\u0275elementEnd"]())},directives:[d.a,m.a,u.a,p.a,T],styles:['.tooltip[_ngcontent-%COMP%]{position:relative}.tooltip[_ngcontent-%COMP%]:hover   .bubble[_ngcontent-%COMP%]{opacity:1}.bubble[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration,.3s);transition-timing-function:ease-in-out;position:absolute;left:3.125rem;bottom:1.875rem;width:15.625rem;background:var(--tui-text-01);color:var(--tui-base-01);border-radius:.25rem;padding:.625rem;opacity:0}.bubble[_ngcontent-%COMP%]:after{content:"";position:absolute;left:50%;bottom:-15px;border-top:15px solid var(--tui-text-01);border-left:10px solid transparent;border-right:10px solid transparent;transform:translate(-10px)}'],changeDetection:0}),e})(),w=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,i.FormsModule,l.Mb,c.Gb,r.m,o.f.forChild(Object(r.u)(x))]]}),e})()}}]);