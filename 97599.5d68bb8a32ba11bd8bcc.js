"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[97599],{97599:(X,T,a)=>{a.r(T),a.d(T,{ExampleTuiTablePaginationModule:()=>J});var P=a(12057),C=a(12021),r=a(46244),s=a(61557),e=a(74788),O=a(88331),S=a(37159),N=a(57068),m=a(56946);let f=(()=>{class t{constructor(){this.page=3,this.size=10}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["tui-table-pagination-example-1"]],decls:5,vars:5,consts:[[3,"total","page","size","pageChange","sizeChange"]],template:function(n,i){1&n&&(e.\u0275\u0275elementStart(0,"tui-table-pagination",0),e.\u0275\u0275listener("pageChange",function(_){return i.page=_})("sizeChange",function(_){return i.size=_}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(1,"p"),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"p"),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd()),2&n&&(e.\u0275\u0275property("total",237)("page",i.page)("size",i.size),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1("Current page: ",i.page,""),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1("Items per page: ",i.size,""))},directives:[m.W],encapsulation:2,changeDetection:0}),t})();const M=({$implicit:t,total:o})=>{switch(t){case 10:return"Ten";case o:return"Show all rows";default:return t}};let F=(()=>{class t{constructor(){this.total=350,this.sizeOptions=[10,50,100,this.total]}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["tui-table-pagination-example-2"]],features:[e.\u0275\u0275ProvidersFeature([(0,s.PT)({sizeOptionContent:M})])],decls:1,vars:2,consts:[[3,"total","items"]],template:function(n,i){1&n&&e.\u0275\u0275element(0,"tui-table-pagination",0),2&n&&e.\u0275\u0275property("total",i.total)("items",i.sizeOptions)},directives:[m.W],encapsulation:2,changeDetection:0}),t})();var I=a(31823),L=a(23618),x=a(17023),D=a(76349);function y(t,o){1&t&&(e.\u0275\u0275text(0," You can customize the component via DI-token "),e.\u0275\u0275elementStart(1,"code"),e.\u0275\u0275text(2,"TUI_TABLE_PAGINATION_OPTIONS"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(3," . "),e.\u0275\u0275elementStart(4,"p",6),e.\u0275\u0275text(5," Use function "),e.\u0275\u0275elementStart(6,"code"),e.\u0275\u0275text(7,"tuiTablePaginationOptionsProvider"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(8," to provide new value of this token. "),e.\u0275\u0275elementEnd())}function h(t,o){if(1&t&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275i18n(1,2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"tui-doc-example",3),e.\u0275\u0275element(3,"tui-table-pagination-example-1"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"tui-doc-example",4),e.\u0275\u0275template(5,y,9,0,"ng-template",null,5,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275element(7,"tui-table-pagination-example-2"),e.\u0275\u0275elementEnd()),2&t){const n=e.\u0275\u0275reference(6),i=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275property("content",i.example1),e.\u0275\u0275advance(2),e.\u0275\u0275property("description",n)("content",i.example2)}}function R(t,o){1&t&&e.\u0275\u0275i18n(0,16)}function G(t,o){1&t&&(e.\u0275\u0275i18nStart(0,17),e.\u0275\u0275elementStart(1,"p"),e.\u0275\u0275element(2,"code"),e.\u0275\u0275elementEnd(),e.\u0275\u0275i18nEnd())}function b(t,o){1&t&&(e.\u0275\u0275i18nStart(0,18),e.\u0275\u0275element(1,"p"),e.\u0275\u0275i18nEnd())}function $(t,o){1&t&&e.\u0275\u0275i18n(0,19)}function B(t,o){1&t&&e.\u0275\u0275i18n(0,20)}function z(t,o){1&t&&(e.\u0275\u0275i18nStart(0,21),e.\u0275\u0275element(1,"code"),e.\u0275\u0275i18nEnd())}function v(t,o){if(1&t){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tui-doc-demo"),e.\u0275\u0275elementStart(1,"tui-table-pagination",7),e.\u0275\u0275listener("pageChange",function(l){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().page=l})("sizeChange",function(l){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().size=l})("pageChange",function(l){return e.\u0275\u0275restoreView(n),e.\u0275\u0275reference(8).emitEvent(l)})("sizeChange",function(l){return e.\u0275\u0275restoreView(n),e.\u0275\u0275reference(10).emitEvent(l)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"tui-doc-documentation"),e.\u0275\u0275template(3,R,1,0,"ng-template",8),e.\u0275\u0275listener("documentationPropertyValueChange",function(l){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().total=l}),e.\u0275\u0275template(4,G,3,0,"ng-template",9),e.\u0275\u0275listener("documentationPropertyValueChange",function(l){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().size=l}),e.\u0275\u0275template(5,b,2,0,"ng-template",10),e.\u0275\u0275listener("documentationPropertyValueChange",function(l){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().page=l}),e.\u0275\u0275template(6,$,1,0,"ng-template",11),e.\u0275\u0275listener("documentationPropertyValueChange",function(l){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().items=l}),e.\u0275\u0275template(7,B,1,0,"ng-template",12,13,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275template(9,z,2,0,"ng-template",14,15,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275elementEnd()}if(2&t){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("items",n.items)("total",n.total)("page",n.page)("size",n.size),e.\u0275\u0275advance(2),e.\u0275\u0275property("documentationPropertyValue",n.total),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",n.size),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",n.page),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",n.itemsVariants)("documentationPropertyValue",n.items)}}function V(t,o){if(1&t&&(e.\u0275\u0275elementStart(0,"ol",22),e.\u0275\u0275elementStart(1,"li"),e.\u0275\u0275elementStart(2,"p"),e.\u0275\u0275i18nStart(3,23),e.\u0275\u0275element(4,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(5,"tui-doc-code",24),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"li"),e.\u0275\u0275elementStart(7,"p"),e.\u0275\u0275i18n(8,25),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(9,"tui-doc-code",26),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&t){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("code",n.exampleModule),e.\u0275\u0275advance(4),e.\u0275\u0275property("code",n.exampleHtml)}}let U=(()=>{class t{constructor(){this.itemsVariants=[[10,20,50,100],[10,100,500]],this.total=1e3,this.page=5,this.items=this.itemsVariants[0],this.size=this.items[0],this.example1={HTML:a.e(90693).then(a.t.bind(a,90693,17)),TypeScript:a.e(53046).then(a.bind(a,53046))},this.example2={TypeScript:a.e(92362).then(a.bind(a,92362)),HTML:a.e(55427).then(a.t.bind(a,55427,17))},this.exampleModule=a.e(96699).then(a.t.bind(a,96699,17)),this.exampleHtml=a.e(33001).then(a.t.bind(a,33001,17))}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["example-tui-table-pagination"]],decls:4,vars:0,consts:function(){let o,n,i,l,_,u,E,g,c,d,A;return o=$localize`:␟6848d6df5be6ff4b71028617c374e17b8f9c36c8␟1478194324430836348:Component to show pagination in table footer`,n=$localize`:␟45f210b96a2a6e91f52f153a4f8dc30662629f8e␟142654590491855672:Usage`,i=$localize`:␟5ed3a7caf5293f1c78ac7cbc21dbd599df19b3fa␟6053806451915629650:Custom size-option content`,l=$localize`:␟eaf6d24a0f009870b331ae9d771e001e06155f34␟6816839641464864911: Total amount of items/lines in the table. `,_=$localize`:␟35463f4b77f9ff5411e98522c622e91581136bc8␟472889151489355337: Items/Lines per page. ${"\ufffd#1\ufffd"}:START_PARAGRAPH: Uses the first element inside ${"\ufffd#2\ufffd"}:START_TAG_CODE:items${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: by default. ${"\ufffd/#1\ufffd"}:CLOSE_PARAGRAPH:`,u=$localize`:␟eae5c93afe4b3193ae93b7c73f9f78a3b17f7219␟6481797631087629204: Current page. ${"\ufffd#1\ufffd"}:START_PARAGRAPH:Indexing starts at zero.${"\ufffd/#1\ufffd"}:CLOSE_PARAGRAPH:`,E=$localize`:␟5945646525a4f23c75ba8716e4f1087acb1b89a7␟8829701352843744315: Options to select amount of lines per page. `,g=$localize`:␟31776859d3ef1d6442876c807f289e80836a2261␟8720838308796482253: Emits the selected page when user navigates by spin buttons or selects new size of items per page. `,c=$localize`:␟a2c03c2522a598de3b28473d219c75c3d84150e2␟7639320364970904664: Emits the new ${"\ufffd#1\ufffd"}:START_TAG_CODE:size${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: -property (user selects new amount of lines per page). `,d=$localize`:␟29846a83e0cdbad86f552b549fcde62d80c7bf90␟3424664730177588095: Import an Angular module for forms and ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiTablePaginationModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `,A=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","TablePagination","package","ADDON-TABLE","type","components"],["pageTab",""],o,["id","usage","heading",n,3,"content"],["id","custom-size-option-content","heading",i,3,"description","content"],["tokenDescription",""],[1,"tui-space_bottom-0"],[3,"items","total","page","size","pageChange","sizeChange"],["documentationPropertyName","total","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","page","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","items","documentationPropertyMode","input","documentationPropertyType","readonly number[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","pageChange","documentationPropertyMode","output","documentationPropertyType","number"],["documentationPropertyPageChange","documentationProperty"],["documentationPropertyName","sizeChange","documentationPropertyMode","output","documentationPropertyType","number"],["documentationPropertySizeChange","documentationProperty"],l,_,u,E,g,c,[1,"b-demo-steps"],d,["filename","myComponent.module.ts",3,"code"],A,["filename","myComponent.template.html",3,"code"]]},template:function(n,i){1&n&&(e.\u0275\u0275elementStart(0,"tui-doc-page",0),e.\u0275\u0275template(1,h,8,3,"ng-template",1),e.\u0275\u0275template(2,v,11,9,"ng-template",1),e.\u0275\u0275template(3,V,10,2,"ng-template",1),e.\u0275\u0275elementEnd())},directives:[O.q,S.n,N.f,f,F,I.F,m.W,L.z,x.B,D.c],encapsulation:2,changeDetection:0}),t})(),J=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[[P.ez,s.y3,r.fV,C.Bz.forChild((0,r.Ve)(U))]]}),t})()}}]);