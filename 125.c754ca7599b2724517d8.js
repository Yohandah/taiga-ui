(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{JSON:function(e,t,n){"use strict";n.r(t),n.d(t,"IconSetModule",(function(){return z}));var o=n("wdR4"),a=n("An66"),i=n("3kIJ"),r=n("1VvW"),c=n("SVIu"),d=n("Qq0t"),s=n("dvRg"),l=n("4C5Q"),u=n("kZht"),p=n("OZlg"),m=n("yZWP"),f=n("zV1d"),S=n("fRC/"),T=n("aPft"),_=n("iyc4"),C=n("Yj6K"),E=n("y9tQ"),g=n("RlDx"),h=n("eB8V");const b={tuiIconCalendarLarge:"date_range-24px",tuiIconTooltipLarge:"help-24px",tuiIconInfo:"info-16px",tuiIconCloseLarge:"clear-24px",tuiIconChevronLeftLarge:"keyboard_arrow_left-24px",tuiIconChevronRightLarge:"keyboard_arrow_right-24px"};function y(e){return`assets/icons/${b[e]}.svg#${b[e]}`}let O=(()=>{class e{constructor(){this.date=null}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-icon-set-example-1"]],features:[u["\u0275\u0275ProvidersFeature"]([{provide:d.y,useValue:y}])],decls:8,vars:2,consts:[[1,"b-form"],["tuiHintContent","You can use any icons you want",1,"tui-space_top-4",3,"tuiTextfieldCleaner","ngModel","ngModelChange"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"div",0),u["\u0275\u0275elementStart"](1,"tui-notification"),u["\u0275\u0275text"](2," As usual with the DI this is hierarchical. Meaning you can provide different "),u["\u0275\u0275elementStart"](3,"code"),u["\u0275\u0275text"](4,"TUI_ICONS_PATH"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](5," and use different icons across your app. "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](6,"tui-input-date-range",1),u["\u0275\u0275listener"]("ngModelChange",(function(e){return t.date=e})),u["\u0275\u0275text"](7," Pick your favorite date range "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275advance"](6),u["\u0275\u0275property"]("tuiTextfieldCleaner",!0)("ngModel",t.date))},directives:[T.a,C.a,E.a,g.a,h.b,i.NgControlStatus,i.NgModel],encapsulation:2}),e})();var x=n("u8jZ"),A=n("ER+R");const I=["header",$localize`:␟c08189fb00c55f045ae49b6c01419138998d0e41␟8811200965267882277:Icons set`];var $,v,L,k;$=$localize`:␟046f07409bddebdd63222d401bf0aad7690bfa7d␟2065126203376070983: Taiga UI uses ${"\ufffd#4\ufffd"}:START_LINK:${"\ufffd#5\ufffd"}:START_TAG_CODE:tui-svg${"\ufffd/#5\ufffd"}:CLOSE_TAG_CODE:${"\ufffd/#4\ufffd"}:CLOSE_LINK: component to display SVG icons. It can show icons by name, link or source code. Several icon names are hardcoded into kit components so if you want to switch to a different icon set you would need to provide a mapping. `,v=$localize`:␟3f0038890ba46d9aa21b924adee1c72c505a0f39␟3842005636025308996: These are keys of following dictionaries: ${"[\ufffd#14\ufffd|\ufffd#15\ufffd]"}:START_TAG_CODE:tuiCoreIcons${"[\ufffd/#14\ufffd|\ufffd/#15\ufffd]"}:CLOSE_TAG_CODE: and ${"[\ufffd#14\ufffd|\ufffd#15\ufffd]"}:START_TAG_CODE:tuiKitIcons${"[\ufffd/#14\ufffd|\ufffd/#15\ufffd]"}:CLOSE_TAG_CODE: . It is not required to provide all those icons, you can gradually add the ones you need depending on components you use. `,v=u["\u0275\u0275i18nPostprocess"](v),L=$localize`:␟2ef378ecb9aa4fd37eaba2fcca8dfed62a561c14␟1836251479999697458: There are two ways to add icons: bundled and as assets. Bundled icons have the benefit of immediate display but increase your app size. Assets work like regular ${"[\ufffd#18\ufffd|\ufffd#19\ufffd]"}:START_TAG_CODE:img src="xxx"${"[\ufffd/#18\ufffd|\ufffd/#19\ufffd]"}:CLOSE_TAG_CODE: with all the benefits of caching. In both cases you can control color with CSS ${"[\ufffd#18\ufffd|\ufffd#19\ufffd]"}:START_TAG_CODE:color${"[\ufffd/#18\ufffd|\ufffd/#19\ufffd]"}:CLOSE_TAG_CODE: style. `,L=u["\u0275\u0275i18nPostprocess"](L),k=$localize`:␟47b8ba6aff6dc60fd31e3dc5c5c9d51c4eae76b3␟971802390501079989: If you want to bundle your icons, you need to provide ${"[\ufffd#30\ufffd|\ufffd#31\ufffd|\ufffd#32\ufffd|\ufffd#33\ufffd]"}:START_TAG_CODE:TUI_ICONS${"[\ufffd/#30\ufffd|\ufffd/#31\ufffd|\ufffd/#32\ufffd|\ufffd/#33\ufffd]"}:CLOSE_TAG_CODE: token with a dictionary of name to source code. Also you need to process your icons by ${"[\ufffd#30\ufffd|\ufffd#31\ufffd|\ufffd#32\ufffd|\ufffd#33\ufffd]"}:START_TAG_CODE:processIcons${"[\ufffd/#30\ufffd|\ufffd/#31\ufffd|\ufffd/#32\ufffd|\ufffd/#33\ufffd]"}:CLOSE_TAG_CODE: from ${"[\ufffd#30\ufffd|\ufffd#31\ufffd|\ufffd#32\ufffd|\ufffd#33\ufffd]"}:START_TAG_CODE:@taiga-ui/icons/scripts${"[\ufffd/#30\ufffd|\ufffd/#31\ufffd|\ufffd/#32\ufffd|\ufffd/#33\ufffd]"}:CLOSE_TAG_CODE: package. Then move icons to the assets folder and provide ${"[\ufffd#30\ufffd|\ufffd#31\ufffd|\ufffd#32\ufffd|\ufffd#33\ufffd]"}:START_TAG_CODE:TUI_ICONS_PATH${"[\ufffd/#30\ufffd|\ufffd/#31\ufffd|\ufffd/#32\ufffd|\ufffd/#33\ufffd]"}:CLOSE_TAG_CODE: as seen in example below: `,k=u["\u0275\u0275i18nPostprocess"](k);const w=["heading",$localize`:␟0dc56b110b85e3f82dc8a031661e63c1bb5ac2c4␟4928000514802786074:Material icons`];var D;function G(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"tui-doc-copy",13),u["\u0275\u0275elementStart"](1,"code"),u["\u0275\u0275text"](2),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;u["\u0275\u0275property"]("cdkCopyToClipboard",e),u["\u0275\u0275advance"](2),u["\u0275\u0275textInterpolate"](e)}}D=$localize`:␟43d5adc1c36771c92be7a48fa3ed020c4aebb9b1␟6714212981041286774: If you use unsafe icons or ${"\ufffd#42\ufffd"}:START_LINK: Editor component ${"[\ufffd/#42\ufffd|\ufffd/#44\ufffd|\ufffd/#45\ufffd]"}:CLOSE_LINK: you need to provide ${"\ufffd#43\ufffd"}:START_TAG_CODE:TUI_SANITIZER${"\ufffd/#43\ufffd"}:CLOSE_TAG_CODE: token, which is responsible for removing malicious code from the svg. We recommend to use ${"\ufffd#44\ufffd"}:START_LINK_1: NgDompurify ${"[\ufffd/#42\ufffd|\ufffd/#44\ufffd|\ufffd/#45\ufffd]"}:CLOSE_LINK: as a sanitizer. This library implements ${"\ufffd#45\ufffd"}:START_LINK_2: DOMPurify ${"[\ufffd/#42\ufffd|\ufffd/#44\ufffd|\ufffd/#45\ufffd]"}:CLOSE_LINK: as Angular Sanitizer or Pipe. It delegates sanitizing to DOMPurify and supports the same configuration. `,D=u["\u0275\u0275i18nPostprocess"](D);let R=(()=>{class e{constructor(){this.exampleSanitizer=n.e(1443).then(n.bind(null,"Ls7I")),this.example1={"process-icons.js":n.e(1441).then(n.bind(null,"qXXK")),"process-icons.ts":n.e(1442).then(n.bind(null,"+MUj")),TypeScript:n.e(1440).then(n.bind(null,"pCrD")),HTML:n.e(1439).then(n.bind(null,"Unll"))},this.names=Object.keys(l.tuiKitIcons),this.expanded=!1}toggle(){this.expanded=!this.expanded}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["icon-set"]],decls:47,vars:4,consts:[[6,"header"],["tuiLink","","routerLink","/components/svg"],["tuiButton","",3,"click"],[3,"expanded"],[1,"wrapper"],[3,"cdkCopyToClipboard",4,"ngFor","ngForOf"],["status","warning"],["id","material",3,"content",6,"heading"],["id","sanitizer",1,"sanitizer-example"],["tuiLink","","routerLink","/components/editor"],["tuiLink","","href","https://github.com/tinkoff/ng-dompurify","target","_blank"],["tuiLink","","href","https://github.com/cure53/DOMPurify","target","_blank"],["filename","app.module.ts",3,"code"],[3,"cdkCopyToClipboard"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"tui-doc-page",0),u["\u0275\u0275i18nAttributes"](1,I),u["\u0275\u0275elementStart"](2,"p"),u["\u0275\u0275i18nStart"](3,$),u["\u0275\u0275elementStart"](4,"a",1),u["\u0275\u0275element"](5,"code"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](6,"p"),u["\u0275\u0275elementStart"](7,"button",2),u["\u0275\u0275listener"]("click",(function(){return t.toggle()})),u["\u0275\u0275text"](8," Show names "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](9,"tui-expand",3),u["\u0275\u0275elementStart"](10,"div",4),u["\u0275\u0275template"](11,G,3,2,"tui-doc-copy",5),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](12,"p"),u["\u0275\u0275i18nStart"](13,v),u["\u0275\u0275element"](14,"code"),u["\u0275\u0275element"](15,"code"),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](16,"p"),u["\u0275\u0275i18nStart"](17,L),u["\u0275\u0275element"](18,"code"),u["\u0275\u0275element"](19,"code"),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](20,"tui-notification",6),u["\u0275\u0275text"](21," Make sure you mark regions in your icons that need to be colored with "),u["\u0275\u0275elementStart"](22,"code"),u["\u0275\u0275text"](23,'fill="currentColor"'),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](24," or "),u["\u0275\u0275elementStart"](25,"code"),u["\u0275\u0275text"](26,'stroke="currentColor"'),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](27," . "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](28,"p"),u["\u0275\u0275i18nStart"](29,k),u["\u0275\u0275element"](30,"code"),u["\u0275\u0275element"](31,"code"),u["\u0275\u0275element"](32,"code"),u["\u0275\u0275element"](33,"code"),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](34,"tui-doc-example",7),u["\u0275\u0275i18nAttributes"](35,w),u["\u0275\u0275element"](36,"tui-icon-set-example-1"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](37,"section",8),u["\u0275\u0275elementStart"](38,"h2"),u["\u0275\u0275text"](39,"Sanitizer"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](40,"p"),u["\u0275\u0275i18nStart"](41,D),u["\u0275\u0275element"](42,"a",9),u["\u0275\u0275element"](43,"code"),u["\u0275\u0275element"](44,"a",10),u["\u0275\u0275element"](45,"a",11),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](46,"tui-doc-code",12),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275advance"](9),u["\u0275\u0275property"]("expanded",t.expanded),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("ngForOf",t.names),u["\u0275\u0275advance"](23),u["\u0275\u0275property"]("content",t.example1),u["\u0275\u0275advance"](12),u["\u0275\u0275property"]("code",t.exampleSanitizer))},directives:[p.a,m.a,r.e,f.a,S.a,a.s,T.a,_.a,O,x.a,A.a,o.a],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start}.sanitizer-example[_ngcontent-%COMP%]{display:block;padding-top:3.5rem}"],changeDetection:0}),e})(),z=(()=>{class e{}return e.\u0275mod=u["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,i.FormsModule,o.c,c.o,d.yb,d.pb,d.ab,s.X,d.Gb,d.Yb,d.tb,c.m,r.f.forChild(Object(c.t)(R))]]}),e})()}}]);