"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[12763],{12763:(ce,S,a)=>{a.r(S),a.d(S,{ExampleTuiDropdownSelectionModule:()=>ue});var D=a(12057),s=a(23738),I=a(12021),O=a(46244),p=a(37267),u=a(38780),y=a(89570),e=a(74788),h=a(88331),x=a(37159),L=a(57068),T=a(81889);let $=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["tui-dropdown-selection-example-1"]],decls:3,vars:0,consts:[["tuiDropdownSelection","","tuiDropdownSelectionPosition","selection","tuiDropdownContent","\xa0\xa0Dropdown text\xa0\xa0"]],template:function(o,i){1&o&&(e.\u0275\u0275text(0,"Dropdown will be shown text selection:\n"),e.\u0275\u0275elementStart(1,"p",0),e.\u0275\u0275text(2," Select a text to see dropdown\n"),e.\u0275\u0275elementEnd())},directives:[T.y],encapsulation:2,changeDetection:0}),t})();var V=a(64762),v=a(27075),c=a(82605),A=a(40329),W=a(78665),G=a(20933),U=a(35065),J=a(44124);function b(t,n){if(1&t){const o=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"button",6),e.\u0275\u0275listener("click",function(){const l=e.\u0275\u0275restoreView(o).$implicit,E=e.\u0275\u0275nextContext(3),m=e.\u0275\u0275reference(1);return E.onClick(l.login,m.nativeFocusableElement)}),e.\u0275\u0275text(1),e.\u0275\u0275element(2,"tui-avatar",7),e.\u0275\u0275elementEnd()}if(2&t){const o=n.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",o.name," "),e.\u0275\u0275advance(1),e.\u0275\u0275property("rounded",!0)("avatarUrl",o.avatar)("text",o.name)}}function X(t,n){if(1&t){const o=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tui-data-list",4),e.\u0275\u0275listener("keydown.escape",function(){return e.\u0275\u0275restoreView(o),e.\u0275\u0275nextContext(2),e.\u0275\u0275reference(1).nativeFocusableElement.focus()}),e.\u0275\u0275template(1,b,3,4,"button",5),e.\u0275\u0275elementEnd()}if(2&t){const o=e.\u0275\u0275nextContext(2),i=e.\u0275\u0275reference(1);e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",o.filterItems(i.nativeFocusableElement))}}function H(t,n){if(1&t&&e.\u0275\u0275template(0,X,2,1,"tui-data-list",3),2&t){e.\u0275\u0275nextContext();const o=e.\u0275\u0275reference(1);e.\u0275\u0275property("ngIf",o.nativeFocusableElement)}}class _{constructor(){this.options=c.Mmc,this.value="Type @ to see a dropdown",this.items=[{name:"Alexander Inkin",avatar:v.L`/images/avatar.jpg`,login:"a.inkin"},{name:"Roman Sedov",avatar:"",login:"r.sedov"}],this.predicate=n=>(0,u.S7o)(n).toString().startsWith("@")}get focused(){return!!this.options.length||null}onArrow(n,o){const i=this.options[o];!i||(n.preventDefault(),(0,c.NYF)(i.nativeElement))}filterItems(n){const o=this.getCurrentSearch(n).replace("@","");return this.getFilteredItems(this.items,o)}onClick(n,o){const i=this.getCurrentSearch(o),r=this.value.replace(i,n),l=r.indexOf(n)+n.length;this.value=r,(0,c.NYF)(o),o.value=r,o.setSelectionRange(l,l)}getFilteredItems(n,o){return n.filter(({name:i,login:r})=>r.startsWith(o)||i.startsWith(o))}getCurrentSearch(n){return n.value.slice(n.value.indexOf("@"),n.selectionStart)}}_.\u0275fac=function(n){return new(n||_)},_.\u0275cmp=e.\u0275\u0275defineComponent({type:_,selectors:[["tui-dropdown-selection-example-2"]],viewQuery:function(n,o){if(1&n&&e.\u0275\u0275viewQuery(p.vKW,5,e.ElementRef),2&n){let i;e.\u0275\u0275queryRefresh(i=e.\u0275\u0275loadQuery())&&(o.options=i)}},decls:5,vars:4,consts:[["tuiDropdownSelectionPosition","word",3,"tuiDropdownContent","tuiDropdownSelection","pseudoFocus","ngModel","ngModelChange","keydown.arrowUp","keydown.arrowDown"],["textarea",""],["dropdown",""],["class","menu",3,"keydown.escape",4,"ngIf"],[1,"menu",3,"keydown.escape"],["tuiOption","",3,"click",4,"ngFor","ngForOf"],["tuiOption","",3,"click"],["size","s",3,"rounded","avatarUrl","text"]],template:function(n,o){if(1&n&&(e.\u0275\u0275elementStart(0,"tui-text-area",0,1),e.\u0275\u0275listener("ngModelChange",function(r){return o.value=r})("keydown.arrowUp",function(r){return o.onArrow(r,"last")})("keydown.arrowDown",function(r){return o.onArrow(r,"first")}),e.\u0275\u0275text(2," Type a message\n"),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(3,H,1,1,"ng-template",null,2,e.\u0275\u0275templateRefExtractor)),2&n){const i=e.\u0275\u0275reference(4);e.\u0275\u0275property("tuiDropdownContent",i)("tuiDropdownSelection",o.predicate)("pseudoFocus",o.focused)("ngModel",o.value)}},directives:[A.Jl,W.e,T.y,s.NgControlStatus,s.NgModel,D.O5,G.q,D.sg,U.v,J.J],styles:[".menu[_ngcontent-%COMP%]{width:12.5rem}"],changeDetection:0}),(0,V.gn)([c.UMq],_.prototype,"getFilteredItems",null);var z=a(31823),B=a(23618),j=a(17023),Q=a(76189),Y=a(76349);function K(t,n){if(1&t&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275i18nStart(1,2),e.\u0275\u0275element(2,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"tui-doc-example",3),e.\u0275\u0275element(4,"tui-dropdown-selection-example-1"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"tui-doc-example",4),e.\u0275\u0275element(6,"tui-dropdown-selection-example-2"),e.\u0275\u0275elementEnd()),2&t){const o=e.\u0275\u0275nextContext();e.\u0275\u0275advance(3),e.\u0275\u0275property("content",o.example1),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",o.example2)}}function Z(t,n){1&t&&(e.\u0275\u0275elementStart(0,"div",18),e.\u0275\u0275i18nStart(1,19),e.\u0275\u0275element(2,"p"),e.\u0275\u0275element(3,"button",20),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd())}function k(t,n){1&t&&e.\u0275\u0275i18n(0,21)}function q(t,n){1&t&&(e.\u0275\u0275i18nStart(0,22),e.\u0275\u0275element(1,"code"),e.\u0275\u0275i18nEnd())}function ee(t,n){1&t&&e.\u0275\u0275i18n(0,23)}function te(t,n){1&t&&e.\u0275\u0275i18n(0,24)}function oe(t,n){1&t&&e.\u0275\u0275i18n(0,25)}function ne(t,n){1&t&&(e.\u0275\u0275i18nStart(0,26),e.\u0275\u0275element(1,"code"),e.\u0275\u0275i18nEnd())}function ie(t,n){1&t&&e.\u0275\u0275i18n(0,27)}function ae(t,n){1&t&&(e.\u0275\u0275i18nStart(0,28),e.\u0275\u0275element(1,"strong"),e.\u0275\u0275element(2,"code"),e.\u0275\u0275i18nEnd())}function re(t,n){1&t&&e.\u0275\u0275i18n(0,29)}function le(t,n){1&t&&e.\u0275\u0275i18n(0,30)}function de(t,n){if(1&t){const o=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tui-doc-demo"),e.\u0275\u0275elementStart(1,"p",5),e.\u0275\u0275i18nStart(2,6),e.\u0275\u0275element(3,"strong"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(4,Z,4,0,"ng-template",null,7,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"tui-doc-documentation"),e.\u0275\u0275template(7,k,1,0,"ng-template",8),e.\u0275\u0275template(8,q,2,0,"ng-template",9),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(o),e.\u0275\u0275nextContext().tuiDropdownAlign=r}),e.\u0275\u0275template(9,ee,1,0,"ng-template",10),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(o),e.\u0275\u0275nextContext().tuiDropdownDirection=r}),e.\u0275\u0275template(10,te,1,0,"ng-template",11),e.\u0275\u0275template(11,oe,1,0,"ng-template",12),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(o),e.\u0275\u0275nextContext().tuiDropdownLimitWidth=r}),e.\u0275\u0275template(12,ne,2,0,"ng-template",13),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(o),e.\u0275\u0275nextContext().tuiDropdownMinHeight=r}),e.\u0275\u0275template(13,ie,1,0,"ng-template",14),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(o),e.\u0275\u0275nextContext().tuiDropdownMaxHeight=r}),e.\u0275\u0275template(14,ae,3,0,"ng-template",15),e.\u0275\u0275template(15,re,1,0,"ng-template",16),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(o),e.\u0275\u0275nextContext().position=r}),e.\u0275\u0275template(16,le,1,0,"ng-template",17),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(o),e.\u0275\u0275nextContext().tuiDropdownSided=r}),e.\u0275\u0275elementEnd()}if(2&t){const o=e.\u0275\u0275reference(5),i=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("tuiDropdownSelectionPosition",i.position)("tuiDropdownContent",o)("tuiDropdownMinHeight",i.tuiDropdownMinHeight)("tuiDropdownMaxHeight",i.tuiDropdownMaxHeight)("tuiDropdownAlign",i.tuiDropdownAlign)("tuiDropdownDirection",i.tuiDropdownDirection)("tuiDropdownLimitWidth",i.tuiDropdownLimitWidth)("tuiDropdownSided",i.tuiDropdownSided),e.\u0275\u0275advance(7),e.\u0275\u0275property("documentationPropertyValues",i.alignVariants)("documentationPropertyValue",i.tuiDropdownAlign),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",i.dropdownDirectionVariants)("documentationPropertyValue",i.tuiDropdownDirection),e.\u0275\u0275advance(2),e.\u0275\u0275property("documentationPropertyValues",i.tuiDropdownLimitWidthVariants)("documentationPropertyValue",i.tuiDropdownLimitWidth),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",i.tuiDropdownMinHeight),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",i.tuiDropdownMaxHeight),e.\u0275\u0275advance(2),e.\u0275\u0275property("documentationPropertyValues",i.positionVariants)("documentationPropertyValue",i.position),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",i.tuiDropdownSided)}}function _e(t,n){if(1&t&&(e.\u0275\u0275elementStart(0,"ol",31),e.\u0275\u0275elementStart(1,"li"),e.\u0275\u0275elementStart(2,"p"),e.\u0275\u0275i18nStart(3,32),e.\u0275\u0275element(4,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(5,"tui-doc-code",33),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"li"),e.\u0275\u0275elementStart(7,"p"),e.\u0275\u0275i18n(8,34),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(9,"tui-doc-code",35),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&t){const o=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("code",o.exampleModule),e.\u0275\u0275advance(4),e.\u0275\u0275property("code",o.exampleHtml)}}let pe=(()=>{class t{constructor(){this.exampleModule=a.e(11687).then(a.t.bind(a,11687,17)),this.exampleHtml=a.e(48049).then(a.t.bind(a,48049,17)),this.example1={TypeScript:a.e(82997).then(a.bind(a,82997)),HTML:a.e(82312).then(a.t.bind(a,82312,17))},this.example2={TypeScript:a.e(94488).then(a.bind(a,94488)),HTML:a.e(96121).then(a.t.bind(a,96121,17)),LESS:a.e(2965).then(a.t.bind(a,2965,17))},this.positionVariants=["selection","word","tag"],this.open=!1,this.position=this.positionVariants[0],this.tuiDropdownMinHeight=p.q_r,this.tuiDropdownMaxHeight=p.zeq,this.tuiDropdownSided=!1,this.alignVariants=["right","left"],this.tuiDropdownAlign=this.alignVariants[0],this.dropdownDirectionVariants=["top","bottom"],this.tuiDropdownDirection=null,this.tuiDropdownLimitWidthVariants=["fixed","min","auto"],this.tuiDropdownLimitWidth=this.tuiDropdownLimitWidthVariants[0]}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["example-tui-dropdown-selection"]],decls:4,vars:0,consts:function(){let n,o,i,r,l,E,m,C,g,N,F,M,P,R,f,w;return n=$localize`:␟432c55cd71cfc37ae765480b4e27ffbef9174a01␟2979268708696318460:${"\ufffd#2\ufffd"}:START_TAG_CODE:tuiDropdownSelection${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: shows dropdown with custom template on selected text `,o=$localize`:␟86bd4c895bf70b35a58305b7d107a2f1b67b141c␟1238358838717941284:Sample`,i=$localize`:␟2a35c99c7df15ae5710562ef89d46774fd4550ea␟2266199980508326983: Select a text to ${"\ufffd#3\ufffd"}:START_TAG_STRONG:see a dropdown${"\ufffd/#3\ufffd"}:CLOSE_TAG_STRONG:`,r=$localize`:␟57dfffe78ad66f88475054d12e085cc38d437029␟3745698783499999973: Here you can have any content ${"\ufffd#2\ufffd"}:START_PARAGRAPH:You can select a text inside a dropdown and it will not close a dropdown${"\ufffd/#2\ufffd"}:CLOSE_PARAGRAPH:${"\ufffd#3\ufffd"}:START_TAG_BUTTON: Button ${"\ufffd/#3\ufffd"}:CLOSE_TAG_BUTTON:`,l=$localize`:␟ee84d3c7de163b96c6606f2d0af612463026e07d␟741899295101860675: Content `,E=$localize`:␟4e5cb2c74dfb392802e7e005883b9be2c781fd4a␟905186926226823365: Align of dropdown (does not work together with ${"\ufffd#1\ufffd"}:START_TAG_CODE:limitWidth === 'fixed'${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,m=$localize`:␟bfe17793e6e84334e10951e36a771ad1ac58ef05␟8707958835080744644: Set a vertical direction of dropdown `,C=$localize`:␟1a7f7dfc794f8e7c30e09adad92f0525112970a5␟7162739121343086934: Set dropdown host manually. For example, it will be a target if someone blurs dropdown with Tab/Shift+Tab. Element with a directive is used by default. `,g=$localize`:␟da2ca1c17abdc5578724541ebd2b9c6d044d248e␟1790691801673246110: Limit dropdown width `,N=$localize`:␟e848cc13a18e3647fb148f5d1c19ae5f888e1557␟5799599437390794628: Minimum height to calculate that dropdown fits to setted ${"\ufffd#1\ufffd"}:START_TAG_CODE:tuiDropdownDirection${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE:`,F=$localize`:␟b16442aff8c447ade67e3d9a81f268796ea113fa␟34813109637476177: Maximum height of dropdown `,M=$localize`:␟5c15cd8f1ed7cb2bd17b60a6af84c911cd1699cc␟1070006108743271766:${"\ufffd#1\ufffd"}:START_TAG_STRONG:Directive selector${"\ufffd/#1\ufffd"}:CLOSE_TAG_STRONG: . Optional: you can also set a handler that gets ${"\ufffd#2\ufffd"}:START_TAG_CODE:Range${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: and returns show/close dropdown `,P=$localize`:␟7b2fe7a08c93ab872d983500d94a057f31327d32␟1537393581077902015: Position of dropdown near text selection `,R=$localize`:␟8ce8395bd49b9bbee585ad617dad9e48eb6a8c49␟3925785757038900199: Dropdown is sided by host `,f=$localize`:␟8a62be1bbab6430a7d42c204d2b6d6ba8d65fffe␟1816878685679044442: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiDropdownModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,w=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","DropdownSelection","package","KIT","type","directives"],["pageTab",""],n,["id","selection","heading",o,3,"content"],["id","textarea","heading","textarea",3,"content"],["tuiDropdownSelection","",3,"tuiDropdownSelectionPosition","tuiDropdownContent","tuiDropdownMinHeight","tuiDropdownMaxHeight","tuiDropdownAlign","tuiDropdownDirection","tuiDropdownLimitWidth","tuiDropdownSided"],i,["dropdownContent",""],["documentationPropertyName","tuiDropdownContent","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent"],["documentationPropertyName","tuiDropdownAlign","documentationPropertyMode","input","documentationPropertyType","TuiHorizontalDirection",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownDirection","documentationPropertyMode","input","documentationPropertyType","TuiVerticalDirection | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownHost","documentationPropertyMode","input","documentationPropertyType","HTMLElement | null"],["documentationPropertyName","tuiDropdownLimitWidth","documentationPropertyMode","input","documentationPropertyType","TuiDropdownWidthT",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownMinHeight","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownMaxHeight","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownSelection","documentationPropertyMode","input","documentationPropertyType","TuiBooleanHandler<Range>"],["documentationPropertyName","tuiDropdownSelectionPosition","documentationPropertyMode","input","documentationPropertyType","'selection' | 'word' | 'tag'",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownSided","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],[1,"dropdown"],r,["tuiButton","","type","button"],l,E,m,C,g,N,F,M,P,R,[1,"b-demo-steps"],f,["filename","myComponent.module.ts",3,"code"],w,["filename","myComponent.template.html",3,"code"]]},template:function(o,i){1&o&&(e.\u0275\u0275elementStart(0,"tui-doc-page",0),e.\u0275\u0275template(1,K,7,2,"ng-template",1),e.\u0275\u0275template(2,de,17,19,"ng-template",1),e.\u0275\u0275template(3,_e,10,2,"ng-template",1),e.\u0275\u0275elementEnd())},directives:[h.q,x.n,L.f,$,_,z.F,T.y,B.z,j.B,Q.v,Y.c],styles:[".dropdown[_ngcontent-%COMP%]{max-width:20rem;padding:.5rem 1.25rem}"],changeDetection:0}),t})(),ue=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[[D.ez,s.FormsModule,y.wq,u.lOj,p.fNO,u.U1B,u.JmR,p.pcV,O.fV,I.Bz.forChild((0,O.Ve)(pe))]]}),t})()}}]);