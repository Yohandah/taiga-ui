(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{imrO:function(e,t,n){"use strict";n.r(t),n.d(t,"ThemeModule",(function(){return L}));var a=n("2kYt"),i=n("nIj0"),o=n("sEIs"),r=n("SVIu"),l=n("Qq0t"),s=n("dvRg"),c=n("zaj/"),d=n("EM62"),u=n("OZlg"),p=n("yZWP"),m=n("QK/x"),f=n("1Nkj"),b=n("GdrL"),g=n("pQcr"),T=n("2wTY"),h=n("zV1d"),S=n("YfVi"),I=n("S0IH"),E=n("D1a4");const v=["header",$localize`:␟daad089ce86fb00b12d9eb7ca5e88c3feb9da2a7␟73001596297098332:Theming`];var x,_,C;function w(e,t){1&e&&d["\u0275\u0275element"](0,"bootstrap")}function y(e,t){1&e&&d["\u0275\u0275element"](0,"material")}function M(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"button",13),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate"](e)}}x=$localize`:␟348a52eaf733b2ff81c955ca9a48f0edd6dc3f80␟6040547629448403786: Taiga UI uses ${"\ufffd#6\ufffd"}:START_TAG_STRONG:CSS custom properties${"\ufffd/#6\ufffd"}:CLOSE_TAG_STRONG: for colors and component styles. If you need to support IE browser that does not work with CSS custom properties, use ${"\ufffd#7\ufffd"}:START_LINK:polyfill${"[\ufffd/#7\ufffd|\ufffd/#10\ufffd]"}:CLOSE_LINK:. Reassign variables in ${"[\ufffd#8\ufffd|\ufffd#9\ufffd|\ufffd#11\ufffd]"}:START_TAG_CODE::root${"[\ufffd/#8\ufffd|\ufffd/#9\ufffd|\ufffd/#11\ufffd]"}:CLOSE_TAG_CODE: block in CSS to make a custom theme. You can also reassign a speficic component styles with ${"[\ufffd#8\ufffd|\ufffd#9\ufffd|\ufffd#11\ufffd]"}:START_TAG_CODE:tui-wrapper${"[\ufffd/#8\ufffd|\ufffd/#9\ufffd|\ufffd/#11\ufffd]"}:CLOSE_TAG_CODE:. Theme can be switched in runtime with a ${"\ufffd#10\ufffd"}:START_LINK_1:${"[\ufffd#8\ufffd|\ufffd#9\ufffd|\ufffd#11\ufffd]"}:START_TAG_CODE:ThemeSwitcher${"[\ufffd/#8\ufffd|\ufffd/#9\ufffd|\ufffd/#11\ufffd]"}:CLOSE_TAG_CODE:${"[\ufffd/#7\ufffd|\ufffd/#10\ufffd]"}:CLOSE_LINK: component. More advanced theming tools and techniques are planned for future releases. `,x=d["\u0275\u0275i18nPostprocess"](x),_=$localize`:␟a2bc91450b112ede8580872033c4824a84516121␟4109308793132522600: Examples `,C=$localize`:␟71c77bb8cecdf11ec3eead24dd1ba506573fa9cd␟935187492052582731:Submit`;let O=(()=>{class e{constructor(){this.tabs=["Taiga UI","Bootstrap","Material Design"],this.activeItem=0,this.value=""}get isTinkoff(){return 0===this.activeItem}get isBootstrap(){return 1===this.activeItem}get isMaterial(){return 2===this.activeItem}get size(){return this.isBootstrap?"s":"l"}get placeholder(){return this.isBootstrap?"you@example.com":"Email"}get label(){return this.isBootstrap?"Email":""}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["theme"]],decls:24,vars:10,consts:[[6,"header"],[4,"ngIf"],["tuiLink","","routerLink","/getting-started#ie"],["tuiLink","","routerLink","/tui-theme-switcher"],[1,"tui-text_h3","tui-space_top-0","tui-space_bottom-4"],[1,"theme-wrapper"],[3,"underline","activeItemIndex","activeItemIndexChange"],["tuiTab","",4,"ngFor","ngForOf"],[1,"wrapper"],["tuiLabel","",3,"label"],["tuiTextfieldExampleText","you@example.com",1,"input",3,"tuiTextfieldSize","ngModel","ngModelChange"],[1,"demo-placeholder"],["tuiButton","","type","button",3,"size"],["tuiTab",""]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-doc-page",0),d["\u0275\u0275i18nAttributes"](1,v),d["\u0275\u0275template"](2,w,1,0,"bootstrap",1),d["\u0275\u0275template"](3,y,1,0,"material",1),d["\u0275\u0275elementStart"](4,"p"),d["\u0275\u0275i18nStart"](5,x),d["\u0275\u0275element"](6,"strong"),d["\u0275\u0275element"](7,"a",2),d["\u0275\u0275element"](8,"code"),d["\u0275\u0275element"](9,"code"),d["\u0275\u0275elementStart"](10,"a",3),d["\u0275\u0275element"](11,"code"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](12,"h3",4),d["\u0275\u0275i18n"](13,_),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](14,"div",5),d["\u0275\u0275elementStart"](15,"tui-tabs",6),d["\u0275\u0275listener"]("activeItemIndexChange",(function(e){return t.activeItem=e})),d["\u0275\u0275template"](16,M,2,1,"button",7),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](17,"div",8),d["\u0275\u0275elementStart"](18,"label",9),d["\u0275\u0275elementStart"](19,"tui-input",10),d["\u0275\u0275listener"]("ngModelChange",(function(e){return t.value=e})),d["\u0275\u0275elementStart"](20,"span",11),d["\u0275\u0275text"](21),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](22,"button",12),d["\u0275\u0275i18n"](23,C),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngIf",t.isBootstrap),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",t.isMaterial),d["\u0275\u0275advance"](12),d["\u0275\u0275property"]("underline",!t.isBootstrap)("activeItemIndex",t.activeItem),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngForOf",t.tabs),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("label",t.label),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("tuiTextfieldSize",t.size)("ngModel",t.value),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate"](t.placeholder),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("size",t.size))},directives:[u.a,a.t,p.a,o.e,m.a,a.s,f.a,b.a,g.b,T.b,i.NgControlStatus,i.NgModel,h.a,S.a,I.a,E.a],styles:[".wrapper[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;margin-top:24px}.input[_ngcontent-%COMP%]{width:320px;margin-top:4px;margin-right:20px}"],changeDetection:0}),e})(),L=(()=>{class e{}return e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,i.FormsModule,c.a,l.TuiLinkModule,s.TuiTabsModule,l.TuiLabelModule,s.TuiInputModule,l.TuiButtonModule,l.TuiTextfieldControllerModule,...r.e,o.f.forChild(Object(r.n)(O))]]}),e})()}}]);