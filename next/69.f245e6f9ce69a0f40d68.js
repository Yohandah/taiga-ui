(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{tP0T:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiInputNumberModule",(function(){return ye}));var o=n("An66"),i=n("3kIJ"),r=n("1VvW"),a=n("T8fS"),l=n("SVIu"),u=n("Qq0t"),m=n("dvRg"),c=n("Piem"),p=n("kZht"),d=n("LusI"),s=n("K/iL"),f=n("OZlg"),T=n("e0eB"),y=n("yZWP"),x=n("iyc4"),S=n("YjIA"),b=n("xCPM"),C=n("RlDx"),E=n("vgAd");let h=(()=>{class e{constructor(){this.control=new i.FormControl(100)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-number-example-1"]],decls:9,vars:12,consts:[["tuiHintContent","Dollar sign is commonly placed BEFORE the amount. Use [prefix].",3,"formControl","prefix"],["tuiHintContent","Euro sign (numeric code 978) is commonly placed AFTER the amount. Use [postfix].",3,"formControl","postfix"],["tuiHintContent","Pound sign (numeric code 826) is commonly placed BEFORE the amount. Use [prefix].",3,"formControl","prefix"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-input-number",0),p["\u0275\u0275pipe"](1,"tuiCurrency"),p["\u0275\u0275text"](2," Type a sum\n"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](3,"tui-input-number",1),p["\u0275\u0275pipe"](4,"tuiCurrency"),p["\u0275\u0275text"](5," Type a sum\n"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"tui-input-number",2),p["\u0275\u0275pipe"](7,"tuiCurrency"),p["\u0275\u0275text"](8," Type a sum\n"),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275property"]("formControl",t.control)("prefix",p["\u0275\u0275pipeBind1"](1,6,"USD")),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("formControl",t.control)("postfix",p["\u0275\u0275pipeBind1"](4,8,"978")),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("formControl",t.control)("prefix",p["\u0275\u0275pipeBind1"](7,10,826)))},directives:[S.a,b.a,C.a,i.NgControlStatus,i.FormControlDirective],pipes:[E.a],styles:["tui-input-number[_ngcontent-%COMP%]{max-width:20rem}tui-input-number[_ngcontent-%COMP%]:not(:last-child){margin-bottom:1rem}"],changeDetection:0}),e})();var _=n("aPft"),g=n("2wTY"),V=n("vwaW"),P=n("gEyt");let L=(()=>{class e{constructor(){this.testForm=new i.FormGroup({testValue:new i.FormControl})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-number-example-2"]],decls:10,vars:2,consts:[[1,"b-form",3,"formGroup"],["formControlName","testValue","tuiTextfieldSize","s","postfix","kg"],["tuiTextfield","","name","potato"],["formControlName","testValue","postfix","L","tuiTextfieldSize","m",1,"tui-space_top-2",3,"tuiTextfieldLabelOutside"],["id","milk","tuiTextfield",""],["postfix","cm","formControlName","testValue",1,"tui-space_top-2"],["tuiTextfield","",2,"color","orange"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"form",0),p["\u0275\u0275elementStart"](1,"tui-input-number",1),p["\u0275\u0275text"](2," Potatos "),p["\u0275\u0275element"](3,"input",2),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](4,"tui-input-number",3),p["\u0275\u0275text"](5," Milk "),p["\u0275\u0275element"](6,"input",4),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](7,"tui-input-number",5),p["\u0275\u0275text"](8," Carrot "),p["\u0275\u0275element"](9,"input",6),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275property"]("formGroup",t.testForm),p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0))},directives:[i["\u0275angular_packages_forms_forms_y"],i.NgControlStatusGroup,i.FormGroupDirective,S.a,b.a,i.NgControlStatus,i.FormControlName,g.b,V.a,P.b],encapsulation:2,changeDetection:0}),e})(),A=(()=>{class e{constructor(){this.testForm=new i.FormGroup({testValue:new i.FormControl})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-number-example-3"]],decls:3,vars:2,consts:[[1,"b-form",3,"formGroup"],["decimal","not-zero","formControlName","testValue",3,"precision"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"form",0),p["\u0275\u0275elementStart"](1,"tui-input-number",1),p["\u0275\u0275text"](2," Type a sum "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275property"]("formGroup",t.testForm),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("precision",4))},directives:[i["\u0275angular_packages_forms_forms_y"],i.NgControlStatusGroup,i.FormGroupDirective,S.a,b.a,i.NgControlStatus,i.FormControlName],encapsulation:2,changeDetection:0}),e})(),O=(()=>{class e{constructor(){this.value=1234.56}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-number-example-4"]],features:[p["\u0275\u0275ProvidersFeature"]([{provide:u.H,useValue:{decimalSeparator:".",thousandSeparator:","}}])],decls:2,vars:1,consts:[["prefix","$","tuiHintContent","Using cleaner is not recommended ;)",1,"input",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-input-number",0),p["\u0275\u0275listener"]("ngModelChange",(function(e){return t.value=e})),p["\u0275\u0275text"](1," Type a sum\n"),p["\u0275\u0275elementEnd"]()),2&e&&p["\u0275\u0275property"]("ngModel",t.value)},directives:[S.a,b.a,C.a,i.NgControlStatus,i.NgModel],styles:[".input[_ngcontent-%COMP%]{text-align:right;width:320px}"],changeDetection:0}),e})();var $,v,I,N=n("EPR0"),R=n("yHor"),G=n("zGJC"),D=n("FSyC"),M=n("CDxv"),w=n("eB8V"),F=n("pQcr"),z=n("u8jZ");$=$localize`:␟10ffa175baed8ebf9062197a5bad595f5480f78e␟1048262239433767130: A component to input numbers. Control value is also of number type. `,v=$localize`:␟135d3647ed7a3ea1b3d5080b3113250a2f018540␟5806261041507532016:${"\ufffd#4\ufffd"}:START_HEADING_LEVEL3:There are also other components to input numbers:${"\ufffd/#4\ufffd"}:CLOSE_HEADING_LEVEL3:${"\ufffd#5\ufffd"}:START_UNORDERED_LIST:${"[\ufffd#6\ufffd|\ufffd#9\ufffd|\ufffd#12\ufffd|\ufffd#16\ufffd]"}:START_LIST_ITEM:${"\ufffd#7\ufffd"}:START_LINK:${"[\ufffd#8\ufffd|\ufffd#11\ufffd|\ufffd#14\ufffd|\ufffd#18\ufffd]"}:START_TAG_STRONG:InputCount${"[\ufffd/#8\ufffd|\ufffd/#11\ufffd|\ufffd/#14\ufffd|\ufffd/#18\ufffd]"}:CLOSE_TAG_STRONG:${"[\ufffd/#7\ufffd|\ufffd/#10\ufffd|\ufffd/#13\ufffd|\ufffd/#17\ufffd]"}:CLOSE_LINK: (integers only) ${"[\ufffd/#6\ufffd|\ufffd/#9\ufffd|\ufffd/#12\ufffd|\ufffd/#16\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd#6\ufffd|\ufffd#9\ufffd|\ufffd#12\ufffd|\ufffd#16\ufffd]"}:START_LIST_ITEM:${"\ufffd#10\ufffd"}:START_LINK_1:${"[\ufffd#8\ufffd|\ufffd#11\ufffd|\ufffd#14\ufffd|\ufffd#18\ufffd]"}:START_TAG_STRONG:Slider${"[\ufffd/#8\ufffd|\ufffd/#11\ufffd|\ufffd/#14\ufffd|\ufffd/#18\ufffd]"}:CLOSE_TAG_STRONG:${"[\ufffd/#7\ufffd|\ufffd/#10\ufffd|\ufffd/#13\ufffd|\ufffd/#17\ufffd]"}:CLOSE_LINK:${"[\ufffd/#6\ufffd|\ufffd/#9\ufffd|\ufffd/#12\ufffd|\ufffd/#16\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd#6\ufffd|\ufffd#9\ufffd|\ufffd#12\ufffd|\ufffd#16\ufffd]"}:START_LIST_ITEM:${"\ufffd#13\ufffd"}:START_LINK_2:${"[\ufffd#8\ufffd|\ufffd#11\ufffd|\ufffd#14\ufffd|\ufffd#18\ufffd]"}:START_TAG_STRONG:InputSlider${"[\ufffd/#8\ufffd|\ufffd/#11\ufffd|\ufffd/#14\ufffd|\ufffd/#18\ufffd]"}:CLOSE_TAG_STRONG:${"[\ufffd/#7\ufffd|\ufffd/#10\ufffd|\ufffd/#13\ufffd|\ufffd/#17\ufffd]"}:CLOSE_LINK: (it uses ${"[\ufffd#15\ufffd|\ufffd#19\ufffd]"}:START_TAG_CODE:InputNumber${"[\ufffd/#15\ufffd|\ufffd/#19\ufffd]"}:CLOSE_TAG_CODE: inside) ${"[\ufffd/#6\ufffd|\ufffd/#9\ufffd|\ufffd/#12\ufffd|\ufffd/#16\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd#6\ufffd|\ufffd#9\ufffd|\ufffd#12\ufffd|\ufffd#16\ufffd]"}:START_LIST_ITEM:${"\ufffd#17\ufffd"}:START_LINK_3:${"[\ufffd#8\ufffd|\ufffd#11\ufffd|\ufffd#14\ufffd|\ufffd#18\ufffd]"}:START_TAG_STRONG:InputRange${"[\ufffd/#8\ufffd|\ufffd/#11\ufffd|\ufffd/#14\ufffd|\ufffd/#18\ufffd]"}:CLOSE_TAG_STRONG:${"[\ufffd/#7\ufffd|\ufffd/#10\ufffd|\ufffd/#13\ufffd|\ufffd/#17\ufffd]"}:CLOSE_LINK: (it uses ${"[\ufffd#15\ufffd|\ufffd#19\ufffd]"}:START_TAG_CODE:InputNumber${"[\ufffd/#15\ufffd|\ufffd/#19\ufffd]"}:CLOSE_TAG_CODE: inside) ${"[\ufffd/#6\ufffd|\ufffd/#9\ufffd|\ufffd/#12\ufffd|\ufffd/#16\ufffd]"}:CLOSE_LIST_ITEM:${"\ufffd/#5\ufffd"}:CLOSE_UNORDERED_LIST:`,v=p["\u0275\u0275i18nPostprocess"](v),I=$localize`:␟f04807d740cad8bf4061798407cd7d4eda1851b1␟5187759459933626480: Number formatting can be customized with ${"\ufffd#22\ufffd"}:START_LINK: TUI_NUMBER_FORMAT ${"\ufffd/#22\ufffd"}:CLOSE_LINK: token. `;const k=["heading",$localize`:␟32072c7fb0469aaf82d256a59b3e0d6ecce973b9␟4327471061205783634:Currency`],H=["heading",$localize`:␟10d6f83eef18aa9fca4e651a15e9af7b5b9bdbfd␟5960739619447908905:sizes`],K=["heading",$localize`:␟97125e9c35df1413be39dd205e9fc11a9633b06b␟7725141119845469877:4 digits after comma`],B=["heading",$localize`:␟1e39c3e479610bfcb275d70e5797a7c144e9846e␟4961291854954937284:Align to the right`];var U,j,W,q,Z,J,Q,Y,X,ee,te;function ne(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"p"),p["\u0275\u0275i18nStart"](1,U),p["\u0275\u0275element"](2,"code"),p["\u0275\u0275element"](3,"code"),p["\u0275\u0275element"](4,"a",16),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"]())}function oe(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"div",2),p["\u0275\u0275i18n"](1,$),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](2,"section"),p["\u0275\u0275i18nStart"](3,v),p["\u0275\u0275element"](4,"h3"),p["\u0275\u0275elementStart"](5,"ul",3),p["\u0275\u0275elementStart"](6,"li",4),p["\u0275\u0275elementStart"](7,"a",5),p["\u0275\u0275element"](8,"strong"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](9,"li",4),p["\u0275\u0275elementStart"](10,"a",6),p["\u0275\u0275element"](11,"strong"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](12,"li",4),p["\u0275\u0275elementStart"](13,"a",7),p["\u0275\u0275element"](14,"strong"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](15,"code"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](16,"li",4),p["\u0275\u0275elementStart"](17,"a",8),p["\u0275\u0275element"](18,"strong"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](19,"code"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](20,"p"),p["\u0275\u0275i18nStart"](21,I),p["\u0275\u0275element"](22,"a",9),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](23,"tui-doc-example",10),p["\u0275\u0275i18nAttributes"](24,k),p["\u0275\u0275template"](25,ne,5,0,"ng-template",null,11,p["\u0275\u0275templateRefExtractor"]),p["\u0275\u0275element"](27,"tui-input-number-example-1"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](28,"tui-doc-example",12),p["\u0275\u0275i18nAttributes"](29,H),p["\u0275\u0275elementStart"](30,"tui-notification",13),p["\u0275\u0275text"](31," If you need to set some attributes or listen to events on native "),p["\u0275\u0275elementStart"](32,"code"),p["\u0275\u0275text"](33,"input"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](34," , you can put it inside with "),p["\u0275\u0275elementStart"](35,"code"),p["\u0275\u0275text"](36,"Textfield"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](37," directive as shown below "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](38,"tui-input-number-example-2"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](39,"tui-doc-example",14),p["\u0275\u0275i18nAttributes"](40,K),p["\u0275\u0275element"](41,"tui-input-number-example-3"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](42,"tui-doc-example",15),p["\u0275\u0275i18nAttributes"](43,B),p["\u0275\u0275element"](44,"tui-input-number-example-4"),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275reference"](26),t=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](23),p["\u0275\u0275property"]("content",t.example1)("description",e),p["\u0275\u0275advance"](5),p["\u0275\u0275property"]("content",t.example2),p["\u0275\u0275advance"](11),p["\u0275\u0275property"]("content",t.example3),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("content",t.example4)}}function ie(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"tui-input-number",25),p["\u0275\u0275text"](1," Type a sum "),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"](2);p["\u0275\u0275property"]("formControl",e.control)("focusable",e.focusable)("tuiTextfieldAutocomplete",e.autocomplete)("tuiTextfieldCleaner",e.cleaner)("tuiTextfieldExampleText",e.exampleText)("tuiTextfieldLabelOutside",e.labelOutside)("tuiTextfieldSize",e.size)("min",e.min)("max",e.max)("pseudoInvalid",e.pseudoInvalid)("pseudoFocused",e.pseudoFocused)("pseudoHovered",e.pseudoHovered)("precision",e.precision)("readOnly",e.readOnly)("decimal",e.decimal)("prefix",e.prefix)("postfix",e.postfix)("tuiHintContent",e.hintContent)("tuiHintDirection",e.hintDirection)("tuiHintMode",e.hintMode)}}function re(e,t){1&e&&(p["\u0275\u0275i18nStart"](0,j),p["\u0275\u0275element"](1,"code"),p["\u0275\u0275i18nEnd"]())}function ae(e,t){1&e&&p["\u0275\u0275i18n"](0,W)}function le(e,t){1&e&&p["\u0275\u0275i18n"](0,q)}function ue(e,t){1&e&&p["\u0275\u0275i18n"](0,Z)}function me(e,t){1&e&&p["\u0275\u0275i18n"](0,J)}function ce(e,t){1&e&&p["\u0275\u0275i18n"](0,Q)}function pe(e,t){1&e&&p["\u0275\u0275i18n"](0,Y)}function de(e,t){if(1&e){const e=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"tui-doc-demo",17),p["\u0275\u0275template"](1,ie,2,20,"ng-template"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](2,"tui-doc-documentation"),p["\u0275\u0275template"](3,re,2,0,"ng-template",18),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().disabled=t})),p["\u0275\u0275template"](4,ae,1,0,"ng-template",19),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().min=t})),p["\u0275\u0275template"](5,le,1,0,"ng-template",20),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().max=t})),p["\u0275\u0275template"](6,ue,1,0,"ng-template",21),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().prefix=t})),p["\u0275\u0275template"](7,me,1,0,"ng-template",22),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().postfix=t})),p["\u0275\u0275template"](8,ce,1,0,"ng-template",23),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().precision=t})),p["\u0275\u0275template"](9,pe,1,0,"ng-template",24),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().decimal=t})),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](10,"inherited-documentation")}if(2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275property"]("control",e.control),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("documentationPropertyValue",e.disabled),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",e.minVariants)("documentationPropertyValue",e.min),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",e.maxVariants)("documentationPropertyValue",e.max),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",e.postfixVariants)("documentationPropertyValue",e.prefix),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",e.postfixVariants)("documentationPropertyValue",e.postfix),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",e.precisionVariants)("documentationPropertyValue",e.precision),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",e.decimalVariants)("documentationPropertyValue",e.decimal)}}function se(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"ol",26),p["\u0275\u0275elementStart"](1,"li"),p["\u0275\u0275elementStart"](2,"p"),p["\u0275\u0275i18nStart"](3,X),p["\u0275\u0275element"](4,"code"),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](5,"tui-doc-code",27),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"li"),p["\u0275\u0275elementStart"](7,"p"),p["\u0275\u0275i18nStart"](8,ee),p["\u0275\u0275element"](9,"code"),p["\u0275\u0275element"](10,"code"),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](11,"tui-doc-code",28),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](12,"li"),p["\u0275\u0275elementStart"](13,"p"),p["\u0275\u0275i18n"](14,te),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](15,"tui-doc-code",29),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](5),p["\u0275\u0275property"]("code",e.exampleModule),p["\u0275\u0275advance"](6),p["\u0275\u0275property"]("code",e.exampleForm),p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("code",e.exampleHtml)}}U=$localize`:␟704ffcbd53b377c11d2bc072068ffa7a5ee5312b␟4971956858864594750: To input money use properties ${"[\ufffd#2\ufffd|\ufffd#3\ufffd]"}:START_TAG_CODE:[postfix]${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd]"}:CLOSE_TAG_CODE: or ${"[\ufffd#2\ufffd|\ufffd#3\ufffd]"}:START_TAG_CODE:[prefix]${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd]"}:CLOSE_TAG_CODE: . To get currency symbol use pipe ${"\ufffd#4\ufffd"}:START_LINK: tuiCurrency ${"\ufffd/#4\ufffd"}:CLOSE_LINK: . `,U=p["\u0275\u0275i18nPostprocess"](U),j=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,W=$localize`:␟a11028ca3c10ed474edf5dbfa2754e26d3d18cd2␟5313959728516521310: Min value `,q=$localize`:␟e19aee5686b43d533c4778f15c66a64584c493d3␟7525448588827957289: Max value `,Z=$localize`:␟658adf15e902084053811153efcee4ab1a098c01␟889438292388771446: A prefix symbol, like currency `,J=$localize`:␟6cd740eb34e19b39e7b5823575a0a337c2347ba3␟8021237919117600846: A postfix symbol, like currency `,Q=$localize`:␟4d605907abe7259a5f8375543b52c8a01272002c␟7859588428304649828: A number of digits after comma `,Y=$localize`:␟29ca7cd63e443b8d4cc789b248893976685ce792␟4020917276602472682: Show/hide decimal `,X=$localize`:␟ff39c2adbe221092857a8cdbd75bce39a6e5d5e5␟4070105638851960915: Import an Angular module for forms and ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiInputNumberModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `,ee=$localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:FormGroup${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:FormControl${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE: ) in your component: `,ee=p["\u0275\u0275i18nPostprocess"](ee),te=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let fe=(()=>{class e extends d.a{constructor(){super(...arguments),this.exampleForm=n.e(550).then(n.bind(null,"Van9")),this.exampleModule=n.e(551).then(n.bind(null,"VBFr")),this.exampleHtml=n.e(552).then(n.bind(null,"WOC3")),this.example1={HTML:n.e(540).then(n.bind(null,"3aqf")),TypeScript:n.e(542).then(n.bind(null,"7qmQ")),LESS:n.e(541).then(n.bind(null,"xYSv"))},this.example2={TypeScript:n.e(544).then(n.bind(null,"EWLQ")),HTML:n.e(543).then(n.bind(null,"kPlf"))},this.example3={TypeScript:n.e(546).then(n.bind(null,"9zuW")),HTML:n.e(545).then(n.bind(null,"ZqBR"))},this.example4={TypeScript:n.e(549).then(n.bind(null,"BFFr")),HTML:n.e(547).then(n.bind(null,"jBTT")),LESS:n.e(548).then(n.bind(null,"uyMS"))},this.minVariants=[-1/0,-500,5,25],this.min=this.minVariants[0],this.maxVariants=[1/0,10,500],this.max=this.maxVariants[0],this.autocompleteVariants=["off","transaction-amount"],this.autocomplete="",this.decimalVariants=["not-zero","always","never"],this.decimal=this.decimalVariants[0],this.cleaner=!1,this.precisionVariants=[2,3,4],this.precision=this.precisionVariants[0],this.postfixVariants=["","$","GBP"],this.prefix=this.postfixVariants[0],this.postfix=this.postfixVariants[0],this.control=new i.FormControl(6432,i.Validators.required)}}return e.\u0275fac=function(t){return Te(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-input-number"]],features:[p["\u0275\u0275ProvidersFeature"]([{provide:s.a,useExisting:Object(p.forwardRef)(()=>e)}]),p["\u0275\u0275InheritDefinitionFeature"]],decls:4,vars:0,consts:[["header","InputNumber","package","KIT","type","components"],["pageTab",""],[1,"tui-space_bottom-3"],[1,"tui-list","tui-list_small"],[1,"tui-list__item"],["tuiLink","","routerLink","/components/input-count"],["tuiLink","","routerLink","/components/slider"],["tuiLink","","routerLink","/components/input-slider"],["tuiLink","","routerLink","/components/input-range"],["tuiLink","","routerLink","/utils/tokens","fragment","number-format"],["id","currency",3,"content","description",6,"heading"],["currencyPipeDescription",""],["id","sizes",3,"content",6,"heading"],[1,"tui-space_bottom-4","b-form"],["id","precision",3,"content",6,"heading"],["id","align","description","With currency symbol as prefix and custom format",3,"content",6,"heading"],["tuiLink","","routerLink","/pipes/currency"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","prefix","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","postfix","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","precision","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","decimal","documentationPropertyMode","input","documentationPropertyType","TuiDecimalT",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"formControl","focusable","tuiTextfieldAutocomplete","tuiTextfieldCleaner","tuiTextfieldExampleText","tuiTextfieldLabelOutside","tuiTextfieldSize","min","max","pseudoInvalid","pseudoFocused","pseudoHovered","precision","readOnly","decimal","prefix","postfix","tuiHintContent","tuiHintDirection","tuiHintMode"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.component.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-doc-page",0),p["\u0275\u0275template"](1,oe,45,5,"ng-template",1),p["\u0275\u0275template"](2,de,11,14,"ng-template",1),p["\u0275\u0275template"](3,se,16,3,"ng-template",1),p["\u0275\u0275elementEnd"]())},directives:[f.a,T.a,y.a,r.e,x.a,h,_.a,L,A,O,N.a,R.a,G.a,D.a,S.a,b.a,i.NgControlStatus,i.FormControlDirective,M.b,w.b,F.b,P.b,g.b,C.a,z.a],encapsulation:2,changeDetection:0}),e})();const Te=p["\u0275\u0275getInheritedFactory"](fe);let ye=(()=>{class e{}return e.\u0275mod=p["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,i.FormsModule,i.ReactiveFormsModule,m.eb,a.b,u.Vb,m.zb,u.ab,u.yb,u.Yb,u.tb,u.Gb,l.j,c.a,u.ub,r.f.forChild(Object(l.q)(fe))]]}),e})()}}]);