(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"5OWl":function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiComboBoxModule",(function(){return Be}));var a=n("2kYt"),o=n("nIj0"),r=n("sEIs"),i=n("SVIu"),l=n("l4xa"),s=n("Qq0t"),c=n("dvRg"),u=n("kiPw"),m=n("Piem"),p=n("D57K"),d=n("EM62"),f=n("K/iL"),h=n("WupT"),x=n("OZlg"),y=n("e0eB"),g=n("iyc4"),C=n("+SFL"),b=n("ZTXN"),v=n("ROBh"),T=n("xVbo"),S=n("TLy2"),w=n("jIqt"),E=n("BwBJ"),M=n("Kl/4"),O=n("BBBb"),V=n("2wTY"),D=n("pQcr"),_=n("fP8s"),$=n("OWJi"),P=n("cweO");function A(e,t){if(1&e&&d["\u0275\u0275element"](0,"tui-data-list-wrapper",7),2&e){const e=d["\u0275\u0275nextContext"]().tuiLet;d["\u0275\u0275nextContext"]();const t=d["\u0275\u0275reference"](3);d["\u0275\u0275property"]("items",e)("itemContent",t)}}function L(e,t){if(1&e&&d["\u0275\u0275element"](0,"tui-data-list-wrapper",7),2&e){const e=d["\u0275\u0275nextContext"]().tuiLet;d["\u0275\u0275nextContext"]();const t=d["\u0275\u0275reference"](3);d["\u0275\u0275property"]("items",e)("itemContent",t)}}function R(e,t){if(1&e&&d["\u0275\u0275element"](0,"tui-data-list-wrapper",7),2&e){const e=d["\u0275\u0275nextContext"]().tuiLet;d["\u0275\u0275nextContext"]();const t=d["\u0275\u0275reference"](3);d["\u0275\u0275property"]("items",e)("itemContent",t)}}function U(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"form",2),d["\u0275\u0275elementStart"](1,"tui-combo-box",3),d["\u0275\u0275listener"]("searchChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().onSearchChange(t)})),d["\u0275\u0275text"](2," Find the best employees "),d["\u0275\u0275template"](3,A,1,2,"tui-data-list-wrapper",4),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](4,"tui-combo-box",5),d["\u0275\u0275listener"]("searchChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().onSearchChange(t)})),d["\u0275\u0275text"](5," Find the best employees "),d["\u0275\u0275template"](6,L,1,2,"tui-data-list-wrapper",4),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](7,"tui-combo-box",6),d["\u0275\u0275listener"]("searchChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().onSearchChange(t)})),d["\u0275\u0275text"](8," Choose a developer "),d["\u0275\u0275template"](9,R,1,2,"tui-data-list-wrapper",4),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()}if(2&e){const e=d["\u0275\u0275nextContext"](),t=d["\u0275\u0275reference"](3);d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("formControl",e.testValue)("valueContent",t),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("formControl",e.testValue)("valueContent",t),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("formControl",e.testValue)("valueContent",t)}}function F(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"div",8),d["\u0275\u0275element"](1,"tui-avatar",9),d["\u0275\u0275elementStart"](2,"div",10),d["\u0275\u0275text"](3),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("avatarUrl",e.avatarUrl||null)("text",e.toString()),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate"](e)}}class I{constructor(e,t,n=null){this.firstName=e,this.lastName=t,this.avatarUrl=n}toString(){return`${this.firstName} ${this.lastName}`}}const j=[new I("Roman","Sedov","http://marsibarsi.me/images/1x1small.jpg"),new I("Alex","Inkin",C.a)];let N=(()=>{class e{constructor(){this.search$=new b.a,this.items$=this.search$.pipe(Object(T.a)(e=>null!==e),Object(S.a)(e=>this.serverRequest(e).pipe(Object(w.a)(null))),Object(w.a)(j)),this.testValue=new o.FormControl(null)}onSearchChange(e){this.search$.next(e)}serverRequest(e){const t=j.filter(t=>-1!==t.toString().toLowerCase().indexOf(e.toLowerCase()));return Object(v.a)(t).pipe(Object(E.a)(1e3*Math.random()+500))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-combo-box-example-1"]],decls:4,vars:3,consts:[["class","form",4,"tuiLet"],["content",""],[1,"form"],["tuiTextfieldSize","s","tuiTextfieldExampleText","Type a name",3,"formControl","valueContent","searchChange"],[3,"items","itemContent",4,"tuiDataList"],["tuiTextfieldSize","m","tuiTextfieldExampleText","Type a name",1,"tui-space_vertical-5",3,"formControl","valueContent","searchChange"],["tuiTextfieldExampleText","Type a name",3,"formControl","valueContent","searchChange"],[3,"items","itemContent"],[1,"template"],["size","xs",1,"avatar",3,"avatarUrl","text"],[1,"name"]],template:function(e,t){1&e&&(d["\u0275\u0275template"](0,U,10,6,"form",0),d["\u0275\u0275pipe"](1,"async"),d["\u0275\u0275template"](2,F,4,3,"ng-template",null,1,d["\u0275\u0275templateRefExtractor"])),2&e&&d["\u0275\u0275property"]("tuiLet",d["\u0275\u0275pipeBind1"](1,1,t.items$))},directives:[M.a,o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.NgForm,O.a,V.b,D.b,o.NgControlStatus,o.FormControlDirective,_.a,$.a,P.a],pipes:[a.b],styles:[".form[_ngcontent-%COMP%]{max-width:320px}.template[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.avatar[_ngcontent-%COMP%]{margin:0 8px 0 0;-ms-flex-negative:0;flex-shrink:0}.name[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-ms-flex-negative:1;flex-shrink:1}"],changeDetection:0}),e})();var G=n("Ohay"),k=n("kuMc"),z=n("wqq/"),H=n("cVyY"),q=n("xcN3"),B=n("HUEM");function W(e,t){if(1&e&&(d["\u0275\u0275element"](0,"tui-avatar",4),d["\u0275\u0275elementStart"](1,"span",5),d["\u0275\u0275text"](2),d["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;d["\u0275\u0275property"]("avatarUrl",e.avatarUrl||null)("text",e.toString()),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate1"](" ",e," ")}}function Q(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"button",9),d["\u0275\u0275element"](1,"tui-avatar",4),d["\u0275\u0275elementStart"](2,"span",5),d["\u0275\u0275text"](3),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;d["\u0275\u0275property"]("value",e)("disabled",e.disabled),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("avatarUrl",e.avatarUrl||null)("text",e.toString()),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate1"](" ",e," ")}}function K(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"tui-data-list"),d["\u0275\u0275template"](1,Q,4,5,"button",8),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"](2).tuiLet;d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngForOf",e)}}function J(e,t){1&e&&d["\u0275\u0275element"](0,"tui-loader",10)}function Y(e,t){if(1&e&&(d["\u0275\u0275template"](0,K,2,1,"tui-data-list",6),d["\u0275\u0275template"](1,J,1,0,"ng-template",null,7,d["\u0275\u0275templateRefExtractor"])),2&e){const e=d["\u0275\u0275reference"](2),t=d["\u0275\u0275nextContext"]().tuiLet;d["\u0275\u0275property"]("ngIf",t)("ngIfElse",e)}}function Z(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"tui-combo-box",1),d["\u0275\u0275listener"]("searchChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().search=t})),d["\u0275\u0275text"](1," Find the best employees "),d["\u0275\u0275template"](2,W,3,3,"ng-template",null,2,d["\u0275\u0275templateRefExtractor"]),d["\u0275\u0275template"](4,Y,3,2,"ng-template",3),d["\u0275\u0275elementEnd"]()}if(2&e){const e=d["\u0275\u0275reference"](3),t=d["\u0275\u0275nextContext"]();d["\u0275\u0275property"]("formControl",t.control)("valueContent",e)("search",t.search)}}class X{constructor(e,t,n=null,a=!1){this.firstName=e,this.lastName=t,this.avatarUrl=n,this.disabled=a}toString(){return`${this.firstName} ${this.lastName}`}}const ee=[new X("Roman","Sedov","http://marsibarsi.me/images/1x1small.jpg"),new X("Alex","Inkin",C.a)];let te=(()=>{class e{constructor(e){this.destroy$=e,this.request$=new b.a,this.response$=this.request$.pipe(Object(G.a)(),Object(S.a)(e=>Object(v.a)(ee.filter(t=>Object(l.TUI_DEFAULT_MATCHER)(t,e))).pipe(Object(E.a)(1e3*Math.random()+500),Object(w.a)(null))),Object(k.a)(this.destroy$),Object(z.a)(1))}request(e){return this.request$.next(e||""),this.response$}}return e.\u0275fac=function(t){return new(t||e)(d["\u0275\u0275inject"](l.TuiDestroyService))},e.\u0275prov=d["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})(),ne=(()=>{class e{constructor(e){this.service=e,this.search="",this.control=new o.FormControl}}return e.\u0275fac=function(t){return new(t||e)(d["\u0275\u0275directiveInject"](te))},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-combo-box-example-2"]],features:[d["\u0275\u0275ProvidersFeature"]([te,l.TuiDestroyService])],decls:2,vars:3,consts:[["class","control","tuiTextfieldExampleText","Type a name",3,"formControl","valueContent","search","searchChange",4,"tuiLet"],["tuiTextfieldExampleText","Type a name",1,"control",3,"formControl","valueContent","search","searchChange"],["value",""],["tuiDataList",""],["size","xs",1,"avatar",3,"avatarUrl","text"],[1,"name"],[4,"ngIf","ngIfElse"],["loading",""],["tuiOption","",3,"value","disabled",4,"ngFor","ngForOf"],["tuiOption","",3,"value","disabled"],[1,"tui-space_vertical-4"]],template:function(e,t){1&e&&(d["\u0275\u0275template"](0,Z,5,3,"tui-combo-box",0),d["\u0275\u0275pipe"](1,"async")),2&e&&d["\u0275\u0275property"]("tuiLet",d["\u0275\u0275pipeBind1"](1,1,t.service.request(t.search)))},directives:[M.a,O.a,D.b,o.NgControlStatus,o.FormControlDirective,_.a,P.a,a.t,H.a,a.s,q.a,B.a],pipes:[a.b],styles:[".control[_ngcontent-%COMP%]{width:320px}.avatar[_ngcontent-%COMP%]{margin:0 8px 0 0;-ms-flex-negative:0;flex-shrink:0}.name[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-ms-flex-negative:1;flex-shrink:1}"],changeDetection:0}),e})();var ae=n("EPR0"),oe=n("zV1d"),re=n("yHor"),ie=n("zGJC"),le=n("FSyC"),se=n("SUM+"),ce=n("RlDx"),ue=n("eB8V"),me=n("KzL3"),pe=n("gEyt"),de=n("ONKv"),fe=n("u8jZ");const he=["valueTemplateContent"];var xe;xe=$localize`:␟d8d5a9c9e8a829ae5807cb1fa5af4512060d714b␟1191883932280172592:${"\ufffd#2\ufffd"}:START_TAG_CODE:ComboBox${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: is a textfield with a dropdown with items. You can choose one of available options or input a value manually. `;const ye=["heading",$localize`:␟69c22e16da706bb601a0de9b79bf4032e21f238f␟4520248067908818846:Async data loading`];function ge(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"div",2),d["\u0275\u0275i18nStart"](1,xe),d["\u0275\u0275element"](2,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"tui-doc-example",3),d["\u0275\u0275i18nAttributes"](4,ye),d["\u0275\u0275element"](5,"tui-combo-box-example-1"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"tui-doc-example",4),d["\u0275\u0275element"](7,"tui-combo-box-example-2"),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",e.example1),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",e.example2)}}var Ce,be,ve,Te,Se,we,Ee,Me,Oe,Ve,De,_e;function $e(e,t){if(1&e&&d["\u0275\u0275element"](0,"tui-data-list-wrapper",19),2&e){const e=d["\u0275\u0275nextContext"](3);d["\u0275\u0275property"]("items",e.filter(e.search))}}function Pe(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"tui-combo-box",17),d["\u0275\u0275listener"]("searchChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"](2).search=t})),d["\u0275\u0275text"](1," Choose an account "),d["\u0275\u0275template"](2,$e,1,1,"tui-data-list-wrapper",18),d["\u0275\u0275elementEnd"]()}if(2&e){const e=d["\u0275\u0275nextContext"](2);d["\u0275\u0275property"]("formControl",e.control)("focusable",e.focusable)("valueContent",e.valueContent)("identityMatcher",e.identityMatcher)("readOnly",e.readOnly)("strict",e.strict)("stringify",e.stringify)("strictMatcher",e.strictMatcher)("pseudoInvalid",e.pseudoInvalid)("pseudoFocused",e.pseudoFocused)("pseudoHovered",e.pseudoHovered)("pseudoPressed",e.pseudoPressed)("tuiDropdownAlign",e.dropdownAlign)("tuiDropdownDirection",e.dropdownDirection)("tuiDropdownLimitWidth",e.dropdownLimitWidth)("tuiDropdownMinHeight",e.dropdownMinHeight)("tuiDropdownMaxHeight",e.dropdownMaxHeight)("tuiHintContent",e.hintContent)("tuiHintDirection",e.hintDirection)("tuiHintMode",e.hintMode)("tuiTextfieldCleaner",e.cleaner)("tuiTextfieldMaxLength",e.maxLength)("tuiTextfieldExampleText",e.exampleText)("tuiTextfieldLabelOutside",e.labelOutside)("tuiTextfieldSize",e.size)("search",e.search)}}function Ae(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"div",20),d["\u0275\u0275element"](1,"tui-svg",21),d["\u0275\u0275elementStart"](2,"span"),d["\u0275\u0275text"](3),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;d["\u0275\u0275advance"](3),d["\u0275\u0275textInterpolate"](e)}}function Le(e,t){1&e&&(d["\u0275\u0275i18nStart"](0,be),d["\u0275\u0275element"](1,"code"),d["\u0275\u0275i18nEnd"]())}function Re(e,t){1&e&&(d["\u0275\u0275i18nStart"](0,ve),d["\u0275\u0275element"](1,"code"),d["\u0275\u0275i18nEnd"]())}function Ue(e,t){1&e&&(d["\u0275\u0275i18nStart"](0,Te),d["\u0275\u0275element"](1,"strong"),d["\u0275\u0275i18nEnd"]())}function Fe(e,t){1&e&&d["\u0275\u0275i18n"](0,Se)}function Ie(e,t){1&e&&(d["\u0275\u0275i18nStart"](0,we),d["\u0275\u0275element"](1,"strong"),d["\u0275\u0275i18nEnd"]())}function je(e,t){1&e&&(d["\u0275\u0275i18nStart"](0,Ee),d["\u0275\u0275element"](1,"code"),d["\u0275\u0275element"](2,"strong"),d["\u0275\u0275i18nEnd"]())}function Ne(e,t){1&e&&d["\u0275\u0275i18n"](0,Me)}function Ge(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"tui-doc-demo",5),d["\u0275\u0275template"](1,Pe,3,26,"ng-template"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](2,Ae,4,1,"ng-template",6,7,d["\u0275\u0275templateRefExtractor"]),d["\u0275\u0275elementStart"](4,"div"),d["\u0275\u0275i18nStart"](5,Ce),d["\u0275\u0275elementStart"](6,"p"),d["\u0275\u0275element"](7,"code"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](8,"button",8),d["\u0275\u0275listener"]("click",(function(){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().setValue()})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](9,"tui-doc-documentation"),d["\u0275\u0275template"](10,Le,2,0,"ng-template",9),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().disabled=t})),d["\u0275\u0275template"](11,Re,2,0,"ng-template",10),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().search=t})),d["\u0275\u0275template"](12,Ue,2,0,"ng-template",11),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().identityMatcher=t})),d["\u0275\u0275template"](13,Fe,1,0,"ng-template",12),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().strict=t})),d["\u0275\u0275template"](14,Ie,2,0,"ng-template",13),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().strictMatcher=t})),d["\u0275\u0275template"](15,je,3,0,"ng-template",14),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().stringify=t})),d["\u0275\u0275template"](16,Ne,1,0,"ng-template",15),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().selectedValueTemplate=t})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](17,"inherited-documentation",16)}if(2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275property"]("control",e.control),d["\u0275\u0275advance"](10),d["\u0275\u0275property"]("documentationPropertyValue",e.disabled),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValue",e.search),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",e.identityMatcherVariants)("documentationPropertyValue",e.identityMatcher),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValue",e.strict),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",e.strictMatcherVariants)("documentationPropertyValue",e.strictMatcher),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",e.stringifyVariants)("documentationPropertyValue",e.stringify),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",e.valueTemplateVariants)("documentationPropertyValue",e.selectedValueTemplate),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("dropdown",!0)}}function ke(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"ol",22),d["\u0275\u0275elementStart"](1,"li"),d["\u0275\u0275elementStart"](2,"p"),d["\u0275\u0275i18nStart"](3,Oe),d["\u0275\u0275element"](4,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](5,"tui-doc-code",23),d["\u0275\u0275elementStart"](6,"p"),d["\u0275\u0275i18nStart"](7,Ve),d["\u0275\u0275element"](8,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](9,"li"),d["\u0275\u0275elementStart"](10,"p"),d["\u0275\u0275i18nStart"](11,De),d["\u0275\u0275element"](12,"code"),d["\u0275\u0275element"](13,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](14,"tui-doc-code",24),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](15,"li"),d["\u0275\u0275elementStart"](16,"p"),d["\u0275\u0275i18n"](17,_e),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](18,"tui-doc-code",25),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("code",e.exampleImportModule),d["\u0275\u0275advance"](9),d["\u0275\u0275property"]("code",e.exampleDeclareForm),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("code",e.exampleInsertTemplate)}}Ce=$localize`:␟0950c31bd22e27ca947bf81f0aabae85a65b9c72␟8577017572751078697:${"\ufffd#6\ufffd"}:START_PARAGRAPH: Set a value with copied object from items to check ${"\ufffd#7\ufffd"}:START_TAG_CODE:identityMatcher${"\ufffd/#7\ufffd"}:CLOSE_TAG_CODE:: ${"\ufffd/#6\ufffd"}:CLOSE_PARAGRAPH:${"\ufffd#8\ufffd"}:START_TAG_BUTTON: Set ${"\ufffd/#8\ufffd"}:CLOSE_TAG_BUTTON:`,be=$localize`:␟31216ee7e86a9a777c7e1c7cad3dc3bb8dc54c35␟472633322147615044: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE:) `,ve=$localize`:␟68d01361295936cf20525b99ddd3e262b51ca3de␟5799457917008384065: Textfield value to subscribe on input or setting it from the outside (emits ${"\ufffd#1\ufffd"}:START_TAG_CODE:null${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: when item from list selected) `,Te=$localize`:␟46a6a9dd4dfb87c0a67a5750f97761f787fe470b␟2331731453094406593: A function that compares search and value to define a match between them. ${"\ufffd#1\ufffd"}:START_TAG_STRONG:Must be a pure function${"\ufffd/#1\ufffd"}:CLOSE_TAG_STRONG:`,Se=$localize`:␟2c1a5ef85cfe45786377741c0183990b41f7dfe3␟421661528828485902: Value must be only item of items `,we=$localize`:␟3e8341854fcc6ce68697a434bf2362d0927c5f93␟3498814777172888150: A function that compares search text and item to define a match between them. Lowercase string comparasion function by default. ${"\ufffd#1\ufffd"}:START_TAG_STRONG:Should be a pure function${"\ufffd/#1\ufffd"}:CLOSE_TAG_STRONG:`,Ee=$localize`:␟5fd72482c49bed76b9fe0271bca62541919c384a␟8148825215070523743: A function that transforms object into a string. ${"\ufffd#1\ufffd"}:START_TAG_CODE:String(value)${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: by default. ${"\ufffd#2\ufffd"}:START_TAG_STRONG:Should be a pure function${"\ufffd/#2\ufffd"}:CLOSE_TAG_STRONG:`,Me=$localize`:␟bd1797fbae774d643fe66cd7ddbd2dc9b405a294␟5590474436936398231: A template for custom view of selected value `,Oe=$localize`:␟56f54879252e929cce583bcd930c12f3187e3ab4␟8226396606934872834: Import an Angular module for forms and ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiComboBoxModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `,Ve=$localize`:␟e7d5575f019f581080a40ce08c6fa2fd9e6682b7␟7349353437260515866: See samples to learn more about working with ${"\ufffd#8\ufffd"}:START_TAG_CODE:tui-data-list-wrapper${"\ufffd/#8\ufffd"}:CLOSE_TAG_CODE: or without them `,De=$localize`:␟24bd9acf98b087a0155b1bc8707249be28559a1e␟3960939324467592851: Declare a form (${"[\ufffd#12\ufffd|\ufffd#13\ufffd]"}:START_TAG_CODE:FormGroup${"[\ufffd/#12\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_CODE:) or a control (${"[\ufffd#12\ufffd|\ufffd#13\ufffd]"}:START_TAG_CODE:FormControl${"[\ufffd/#12\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_CODE:) in your component: `,De=d["\u0275\u0275i18nPostprocess"](De),_e=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;class ze{constructor(e,t){this.name=e,this.balance=t}toString(){return`${this.name} (${this.balance})`}}let He=(()=>{class e extends h.a{constructor(){super(...arguments),this.exampleDeclareForm="import {FormControl, FormGroup} from '@angular/forms';\n\n...\n\n@Component({\n    ...\n})\nexport class MyComponent {\n    testForm = new FormGroup({\n        testValue: new FormControl()\n    });\n}\n",this.exampleImportModule="import {FormsModule, ReactiveFormsModule} from '@angular/forms';\nimport {TuiDataListModule} from '@taiga-ui/core';\nimport {TuiComboBoxModule, TuiDataListWrapperModule} from '@taiga-ui/kit';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        FormsModule,\n        ReactiveFormsModule,\n        TuiComboBoxModule,\n        TuiDataListModule,\n        TuiDataListWrapperModule,\n    ],\n...\n",this.exampleInsertTemplate='<form [formGroup]="testForm">\n    <tui-combo-box formControlName="testValue">\n        <tui-data-list-wrapper\n            *tuiDataList\n            [items]="items"\n        ></tui-data-list-wrapper>\n    </tui-combo-box>\n</form>\n',this.example1={TypeScript:"import {default as avatar} from '!!file-loader!../../../../../assets/images/avatar.jpg';\nimport {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {Observable, of, Subject} from 'rxjs';\nimport {delay, filter, startWith, switchMap} from 'rxjs/operators';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\nclass User {\n    constructor(\n        readonly firstName: string,\n        readonly lastName: string,\n        readonly avatarUrl: string | null = null,\n    ) {}\n\n    toString(): string {\n        return `${this.firstName} ${this.lastName}`;\n    }\n}\n\nconst databaseMockData: ReadonlyArray<User> = [\n    new User('Roman', 'Sedov', 'http://marsibarsi.me/images/1x1small.jpg'),\n    new User('Alex', 'Inkin', avatar),\n];\n\n@Component({\n    selector: 'tui-combo-box-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiComboBoxExample1 {\n    readonly search$ = new Subject<string>();\n\n    readonly items$: Observable<ReadonlyArray<User> | null> = this.search$.pipe(\n        filter(value => value !== null),\n        switchMap(search =>\n            this.serverRequest(search).pipe(startWith<ReadonlyArray<User> | null>(null)),\n        ),\n        startWith(databaseMockData),\n    );\n\n    readonly testValue = new FormControl(null);\n\n    onSearchChange(searchQuery: string) {\n        this.search$.next(searchQuery);\n    }\n\n    /**\n     * Service request emulation\n     */\n    private serverRequest(searchQuery: string): Observable<ReadonlyArray<User>> {\n        const result = databaseMockData.filter(\n            user =>\n                user.toString().toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1,\n        );\n\n        return of(result).pipe(delay(Math.random() * 1000 + 500));\n    }\n}\n",HTML:'<form *tuiLet="items$ | async as items" class="form">\n    <tui-combo-box\n        tuiTextfieldSize="s"\n        tuiTextfieldExampleText="Type a name"\n        [formControl]="testValue"\n        [valueContent]="content"\n        (searchChange)="onSearchChange($event)"\n    >\n        Find the best employees\n        <tui-data-list-wrapper\n            *tuiDataList\n            [items]="items"\n            [itemContent]="content"\n        ></tui-data-list-wrapper>\n    </tui-combo-box>\n    <tui-combo-box\n        class="tui-space_vertical-5"\n        tuiTextfieldSize="m"\n        tuiTextfieldExampleText="Type a name"\n        [formControl]="testValue"\n        [valueContent]="content"\n        (searchChange)="onSearchChange($event)"\n    >\n        Find the best employees\n        <tui-data-list-wrapper\n            *tuiDataList\n            [items]="items"\n            [itemContent]="content"\n        ></tui-data-list-wrapper>\n    </tui-combo-box>\n    <tui-combo-box\n        tuiTextfieldExampleText="Type a name"\n        [formControl]="testValue"\n        [valueContent]="content"\n        (searchChange)="onSearchChange($event)"\n    >\n        Choose a developer\n        <tui-data-list-wrapper\n            *tuiDataList\n            [items]="items"\n            [itemContent]="content"\n        ></tui-data-list-wrapper>\n    </tui-combo-box>\n</form>\n\n<ng-template #content let-data>\n    <div class="template">\n        <tui-avatar\n            class="avatar"\n            size="xs"\n            [avatarUrl]="data.avatarUrl || null"\n            [text]="data.toString()"\n        ></tui-avatar>\n        <div class="name">{{data}}</div>\n    </div>\n</ng-template>\n',LESS:"@import 'taiga-ui-local';\n\n.form {\n    max-width: 320px;\n}\n\n.template {\n    display: flex;\n    align-items: center;\n}\n\n.avatar {\n    margin: 0 @space * 2 0 0;\n    flex-shrink: 0;\n}\n\n.name {\n    .text-overflow();\n    flex-shrink: 1;\n}\n"},this.example2={TypeScript:"import {default as avatar} from '!!file-loader!../../../../../assets/images/avatar.jpg';\nimport {Component, Inject, Injectable} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {TUI_DEFAULT_MATCHER, TuiDestroyService} from '@taiga-ui/cdk';\nimport {Observable, of, Subject} from 'rxjs';\nimport {\n    delay,\n    distinctUntilChanged,\n    shareReplay,\n    startWith,\n    switchMap,\n    takeUntil,\n} from 'rxjs/operators';\nimport {changeDetection} from '../../../../../change-detection-strategy';\n\nclass User {\n    constructor(\n        readonly firstName: string,\n        readonly lastName: string,\n        readonly avatarUrl: string | null = null,\n        readonly disabled: boolean = false,\n    ) {}\n\n    toString(): string {\n        return `${this.firstName} ${this.lastName}`;\n    }\n}\n\nconst databaseMockData: ReadonlyArray<User> = [\n    new User('Roman', 'Sedov', 'http://marsibarsi.me/images/1x1small.jpg'),\n    new User('Alex', 'Inkin', avatar),\n];\n\n// @dynamic\n@Injectable()\nexport class Service {\n    private readonly request$ = new Subject<string>();\n\n    // Imitating server request with switchMap + delay pair\n    private readonly response$ = this.request$.pipe(\n        distinctUntilChanged(),\n        switchMap(query =>\n            of(databaseMockData.filter(user => TUI_DEFAULT_MATCHER(user, query))).pipe(\n                delay(Math.random() * 1000 + 500),\n                startWith(null),\n            ),\n        ),\n        takeUntil(this.destroy$),\n        shareReplay(1),\n    );\n\n    constructor(@Inject(TuiDestroyService) private readonly destroy$: Observable<void>) {}\n\n    request(query: string | null): Observable<ReadonlyArray<User> | null> {\n        this.request$.next(query || '');\n\n        return this.response$;\n    }\n}\n\n@Component({\n    selector: 'tui-combo-box-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    providers: [Service, TuiDestroyService],\n    changeDetection,\n})\nexport class TuiComboBoxExample2 {\n    search = '';\n\n    readonly control = new FormControl();\n\n    constructor(@Inject(Service) readonly service: Service) {}\n}\n",HTML:'<tui-combo-box\n    *tuiLet="service.request(search) | async as filtered"\n    class="control"\n    tuiTextfieldExampleText="Type a name"\n    [formControl]="control"\n    [valueContent]="value"\n    [(search)]="search"\n>\n    Find the best employees\n    <ng-template #value let-item>\n        <tui-avatar\n            class="avatar"\n            size="xs"\n            [avatarUrl]="item.avatarUrl || null"\n            [text]="item.toString()"\n        ></tui-avatar>\n        <span class="name"> {{item}} </span>\n    </ng-template>\n    <ng-template tuiDataList>\n        <tui-data-list *ngIf="filtered; else loading">\n            <button\n                *ngFor="let item of filtered"\n                tuiOption\n                [value]="item"\n                [disabled]="item.disabled"\n            >\n                <tui-avatar\n                    class="avatar"\n                    size="xs"\n                    [avatarUrl]="item.avatarUrl || null"\n                    [text]="item.toString()"\n                ></tui-avatar>\n                <span class="name"> {{item}} </span>\n            </button>\n        </tui-data-list>\n        <ng-template #loading>\n            <tui-loader class="tui-space_vertical-4"></tui-loader>\n        </ng-template>\n    </ng-template>\n</tui-combo-box>\n',LESS:"@import 'taiga-ui-local';\n\n.control {\n    width: 320px;\n}\n\n.avatar {\n    margin: 0 @space * 2 0 0;\n    flex-shrink: 0;\n}\n\n.name {\n    .text-overflow();\n    flex-shrink: 1;\n}\n"},this.items=[new ze("Rubles",500),new ze("Dollars",237)],this.strict=!0,this.search="",this.valueTemplateVariants=["","Template"],this.selectedValueTemplate="",this.stringifyVariants=[l.TUI_DEFAULT_STRINGIFY,e=>String(String(e).match(/\d+/))],this.stringify=this.stringifyVariants[0],this.strictMatcherVariants=[l.TUI_STRICT_MATCHER,(e,t,n)=>Number.parseInt(n(e).match(/\d+/g)[0],10)===Number.parseInt(t,10),null],this.strictMatcher=this.strictMatcherVariants[0],this.identityMatcherVariants=[(e,t)=>e===t,(e,t)=>e.balance===t.balance],this.identityMatcher=this.identityMatcherVariants[0],this.control=new o.FormControl(null,o.Validators.required)}get valueContent(){return this.valueTemplateRef&&this.selectedValueTemplate?this.valueTemplateRef:null}filter(e){return this.items.filter(t=>Object(l.TUI_DEFAULT_MATCHER)(t,e||""))}setValue(){this.control.setValue(new ze("Dollars",237))}}return e.\u0275fac=function(t){return qe(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-combo-box"]],viewQuery:function(e,t){var n;1&e&&d["\u0275\u0275viewQuery"](he,!0),2&e&&d["\u0275\u0275queryRefresh"](n=d["\u0275\u0275loadQuery"]())&&(t.valueTemplateRef=n.first)},features:[d["\u0275\u0275ProvidersFeature"]([{provide:f.a,useExisting:Object(d.forwardRef)(()=>e)}]),d["\u0275\u0275InheritDefinitionFeature"]],decls:4,vars:0,consts:[["header","ComboBox","package","KIT"],["pageTab",""],[1,"tui-space_bottom-3"],["id","async",3,"content",6,"heading"],["id","datalist","heading","DataList",3,"content"],[3,"control"],["polymorpheus",""],["valueTemplateContent","polymorpheus"],["tuiButton","","type","button","size","m",3,"click"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","search","documentationPropertyMode","input-output","documentationPropertyType","string | null",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","identityMatcher","documentationPropertyMode","input","documentationPropertyType","TuiIdentityMatcher",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","strict","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","strictMatcher","documentationPropertyMode","input","documentationPropertyType","TuiStringMatcher | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","stringify","documentationPropertyMode","input","documentationPropertyType","TuiStringHandler",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","valueContent","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"dropdown"],[3,"formControl","focusable","valueContent","identityMatcher","readOnly","strict","stringify","strictMatcher","pseudoInvalid","pseudoFocused","pseudoHovered","pseudoPressed","tuiDropdownAlign","tuiDropdownDirection","tuiDropdownLimitWidth","tuiDropdownMinHeight","tuiDropdownMaxHeight","tuiHintContent","tuiHintDirection","tuiHintMode","tuiTextfieldCleaner","tuiTextfieldMaxLength","tuiTextfieldExampleText","tuiTextfieldLabelOutside","tuiTextfieldSize","search","searchChange"],[3,"items",4,"tuiDataList"],[3,"items"],[1,"item-template"],["src","tuiIconCheck",1,"item-template-icon"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.component.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-doc-page",0),d["\u0275\u0275template"](1,ge,8,2,"ng-template",1),d["\u0275\u0275template"](2,Ge,18,13,"ng-template",1),d["\u0275\u0275template"](3,ke,19,3,"ng-template",1),d["\u0275\u0275elementEnd"]())},directives:[x.a,y.a,g.a,N,ne,ae.a,u.e,oe.a,re.a,ie.a,le.a,O.a,o.NgControlStatus,o.FormControlDirective,se.a,ce.a,ue.b,me.b,D.b,pe.b,V.b,_.a,$.a,de.a,fe.a],styles:[".item-template[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.item-template-icon[_ngcontent-%COMP%]{margin-right:6px}"],changeDetection:0}),Object(p.a)([l.tuiPure],e.prototype,"filter",null),e})();const qe=d["\u0275\u0275getInheritedFactory"](He);let Be=(()=>{class e{}return e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,o.FormsModule,o.ReactiveFormsModule,c.TuiComboBoxModule,s.TuiButtonModule,s.TuiLinkModule,c.TuiAvatarModule,s.TuiSvgModule,s.TuiDataListModule,s.TuiLoaderModule,l.TuiLetModule,s.TuiTextfieldControllerModule,s.TuiHintControllerModule,s.TuiDropdownControllerModule,c.TuiDataListWrapperModule,u.c,...i.e,m.a,r.f.forChild(Object(i.n)(He))]]}),e})()}}]);