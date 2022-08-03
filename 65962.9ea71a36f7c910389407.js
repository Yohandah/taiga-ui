"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[65962],{65962:(b,r,n)=>{n.r(r),n.d(r,{ExampleTuiFilterByInputModule:()=>J});var T=n(12057),l=n(23738),D=n(12021),s=n(46244),S=n(5696),u=n(38780),t=n(74788),C=n(88331),g=n(37159),y=n(57068),x=n(77027),P=n(41360),m=n(52219),E=n(50020),c=n(68800);function M(e,i){if(1&e&&(t.\u0275\u0275element(0,"tui-data-list-wrapper",3),t.\u0275\u0275pipe(1,"tuiFilterByInput")),2&e){const o=t.\u0275\u0275nextContext();t.\u0275\u0275property("items",t.\u0275\u0275pipeBind1(1,1,o.items))}}let N=(()=>{class e{constructor(){this.items=["John Cleese","Eric Idle","Graham Chapman","Michael Palin","Terry Gilliam","Terry Jones"],this.form=new l.FormGroup({user:new l.FormControl})}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.\u0275\u0275defineComponent({type:e,selectors:[["tui-filter-by-input-example-1"]],decls:4,vars:1,consts:[[1,"b-form",3,"formGroup"],["formControlName","user"],[3,"items",4,"tuiDataList"],[3,"items"]],template:function(o,a){1&o&&(t.\u0275\u0275elementStart(0,"form",0),t.\u0275\u0275elementStart(1,"tui-input",1),t.\u0275\u0275text(2," User "),t.\u0275\u0275template(3,M,2,3,"tui-data-list-wrapper",2),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd()),2&o&&t.\u0275\u0275property("formGroup",a.form)},directives:[l.\u0275NgNoValidate,l.NgControlStatusGroup,l.FormGroupDirective,x.K,P.w,l.NgControlStatus,l.FormControlName,m.g,E.e],pipes:[c.b],encapsulation:2,changeDetection:0}),e})();var d=n(41967),I=n(89290);function L(e,i){if(1&e&&(t.\u0275\u0275element(0,"tui-data-list-wrapper",3),t.\u0275\u0275pipe(1,"tuiFilterByInput")),2&e){const o=t.\u0275\u0275nextContext();t.\u0275\u0275property("items",t.\u0275\u0275pipeBind2(1,1,o.items,o.matcher))}}let B=(()=>{class e{constructor(){this.items=["John Cleese","Eric Idle","Graham Chapman","Michael Palin","Terry Gilliam","Terry Jones"],this.form=new l.FormGroup({user:new l.FormControl}),this.matcher=(o,a)=>o.split(" ").pop().toLowerCase().startsWith(a.toLowerCase())}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.\u0275\u0275defineComponent({type:e,selectors:[["tui-filter-by-input-example-2"]],decls:4,vars:1,consts:[[1,"b-form",3,"formGroup"],["formControlName","user"],[3,"items",4,"tuiDataList"],[3,"items"]],template:function(o,a){1&o&&(t.\u0275\u0275elementStart(0,"form",0),t.\u0275\u0275elementStart(1,"tui-combo-box",1),t.\u0275\u0275text(2," Search by last name "),t.\u0275\u0275template(3,L,2,4,"tui-data-list-wrapper",2),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd()),2&o&&t.\u0275\u0275property("formGroup",a.form)},directives:[l.\u0275NgNoValidate,l.NgControlStatusGroup,l.FormGroupDirective,d._,I.m,l.NgControlStatus,l.FormControlName,m.g,E.e],pipes:[c.b],encapsulation:2,changeDetection:0}),e})();var O=n(20933),R=n(35065),U=n(30114);function $(e,i){if(1&e&&(t.\u0275\u0275elementStart(0,"button",4),t.\u0275\u0275text(1),t.\u0275\u0275elementEnd()),2&e){const o=i.$implicit;t.\u0275\u0275property("value",o),t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate1(" ",o.name," ")}}function h(e,i){if(1&e&&(t.\u0275\u0275elementStart(0,"tui-data-list"),t.\u0275\u0275template(1,$,2,2,"button",3),t.\u0275\u0275pipe(2,"tuiFilterByInputWith"),t.\u0275\u0275elementEnd()),2&e){const o=t.\u0275\u0275nextContext();t.\u0275\u0275advance(1),t.\u0275\u0275property("ngForOf",t.\u0275\u0275pipeBind2(2,1,o.items,o.stringify))}}let v=(()=>{class e{constructor(){this.items=[{name:"John Cleese"},{name:"Eric Idle"},{name:"Graham Chapman"},{name:"Michael Palin"},{name:"Terry Gilliam"},{name:"Terry Jones"}],this.form=new l.FormGroup({user:new l.FormControl}),this.stringify=({name:o})=>o}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.\u0275\u0275defineComponent({type:e,selectors:[["tui-filter-by-input-example-3"]],decls:4,vars:2,consts:[[1,"b-form",3,"formGroup"],["formControlName","user",3,"stringify"],[4,"tuiDataList"],["tuiOption","",3,"value",4,"ngFor","ngForOf"],["tuiOption","",3,"value"]],template:function(o,a){1&o&&(t.\u0275\u0275elementStart(0,"form",0),t.\u0275\u0275elementStart(1,"tui-combo-box",1),t.\u0275\u0275text(2," User "),t.\u0275\u0275template(3,h,3,4,"tui-data-list",2),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd()),2&o&&(t.\u0275\u0275property("formGroup",a.form),t.\u0275\u0275advance(1),t.\u0275\u0275property("stringify",a.stringify))},directives:[l.\u0275NgNoValidate,l.NgControlStatusGroup,l.FormGroupDirective,d._,I.m,l.NgControlStatus,l.FormControlName,m.g,O.q,T.sg,R.v],pipes:[U.Y],encapsulation:2,changeDetection:0}),e})();var G=n(76349);function A(e,i){if(1&e&&(t.\u0275\u0275i18nStart(0,3),t.\u0275\u0275elementStart(1,"tui-doc-example",4),t.\u0275\u0275element(2,"tui-filter-by-input-example-1"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(3,"tui-doc-example",5),t.\u0275\u0275element(4,"tui-filter-by-input-example-2"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(5,"tui-doc-example",6),t.\u0275\u0275element(6,"tui-filter-by-input-example-3"),t.\u0275\u0275elementEnd(),t.\u0275\u0275i18nEnd()),2&e){const o=t.\u0275\u0275nextContext();t.\u0275\u0275advance(1),t.\u0275\u0275property("content",o.example1),t.\u0275\u0275advance(2),t.\u0275\u0275property("content",o.example2),t.\u0275\u0275advance(2),t.\u0275\u0275property("content",o.example3)}}function Y(e,i){if(1&e&&(t.\u0275\u0275elementStart(0,"ol",7),t.\u0275\u0275elementStart(1,"li"),t.\u0275\u0275elementStart(2,"p"),t.\u0275\u0275i18nStart(3,8),t.\u0275\u0275element(4,"code"),t.\u0275\u0275i18nEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275element(5,"tui-doc-code",9),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(6,"li"),t.\u0275\u0275elementStart(7,"p"),t.\u0275\u0275i18n(8,10),t.\u0275\u0275elementEnd(),t.\u0275\u0275element(9,"tui-doc-code",11),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd()),2&e){const o=t.\u0275\u0275nextContext();t.\u0275\u0275advance(5),t.\u0275\u0275property("code",o.exampleModule),t.\u0275\u0275advance(4),t.\u0275\u0275property("code",o.exampleHtml)}}let X=(()=>{class e{constructor(){this.exampleModule=n.e(69031).then(n.t.bind(n,69031,17)),this.exampleHtml=n.e(9370).then(n.t.bind(n,9370,17)),this.example1={TypeScript:n.e(60077).then(n.t.bind(n,60077,17)),HTML:n.e(83339).then(n.t.bind(n,83339,17))},this.example2={TypeScript:n.e(16699).then(n.t.bind(n,16699,17)),HTML:n.e(2013).then(n.t.bind(n,2013,17))},this.example3={TypeScript:n.e(97208).then(n.t.bind(n,97208,17)),HTML:n.e(67705).then(n.t.bind(n,67705,17))}}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.\u0275\u0275defineComponent({type:e,selectors:[["example-tui-filter-by-input"]],decls:3,vars:0,consts:function(){let i,o,a,p,_,f;return i=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,o=$localize`:␟e44cbeb2204ab3f18f2fc48550ff5f3154790975␟4997832321224755259:Custom matcher`,a=$localize`:␟8ea1c797573c9676df67b83748a331433703a6da␟4166966430858792974:Custom stringify`,p=$localize`:␟bc963fb63de70d2e76559d18d31fe0c914d05a74␟7316437354589455408: Pipe for filtering an array by value entered in a textfield ${"\ufffd#1\ufffd"}:START_TAG_TUI_DOC_EXAMPLE:${"\ufffd#2\ufffd"}:START_TAG_TUI_FILTER_BY_INPUT_EXAMPLE_1:${"\ufffd/#2\ufffd"}:CLOSE_TAG_TUI_FILTER_BY_INPUT_EXAMPLE_1:${"[\ufffd/#1\ufffd|\ufffd/#3\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\ufffd#3\ufffd"}:START_TAG_TUI_DOC_EXAMPLE_1:${"\ufffd#4\ufffd"}:START_TAG_TUI_FILTER_BY_INPUT_EXAMPLE_2:${"\ufffd/#4\ufffd"}:CLOSE_TAG_TUI_FILTER_BY_INPUT_EXAMPLE_2:${"[\ufffd/#1\ufffd|\ufffd/#3\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\ufffd#5\ufffd"}:START_TAG_TUI_DOC_EXAMPLE_2:${"\ufffd#6\ufffd"}:START_TAG_TUI_FILTER_BY_INPUT_EXAMPLE_3:${"\ufffd/#6\ufffd"}:CLOSE_TAG_TUI_FILTER_BY_INPUT_EXAMPLE_3:${"[\ufffd/#1\ufffd|\ufffd/#3\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:`,p=t.\u0275\u0275i18nPostprocess(p),_=$localize`:␟a2a28ebef82d20cde2d7eaa173ac3450dc1f83f3␟2012985248889759702: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiFilterByInputPipeModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,f=$localize`:␟8dbd1dc3f7db0c83ba44d241601f87aaaccb1e13␟4082988165397565907:Use pipe in template under Taiga UI control:`,[["header","FilterByInput","package","KIT","type","pipes"],["pageTab",""],["pageTab","Setup"],p,["id","base","heading",i,3,"content"],["id","matcher","heading",o,3,"content"],["id","stringify","heading",a,3,"content"],[1,"b-demo-steps"],_,["filename","myComponent.module.ts",3,"code"],f,["filename","myComponent.template.html",3,"code"]]},template:function(o,a){1&o&&(t.\u0275\u0275elementStart(0,"tui-doc-page",0),t.\u0275\u0275template(1,A,7,3,"ng-template",1),t.\u0275\u0275template(2,Y,10,2,"ng-template",2),t.\u0275\u0275elementEnd())},directives:[C.q,g.n,y.f,N,B,v,G.c],encapsulation:2,changeDetection:0}),e})(),J=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=t.\u0275\u0275defineInjector({imports:[[T.ez,l.ReactiveFormsModule,u.pMh,s.fV,u.QfL,S.pcV,u.zXW,u.jpe,D.Bz.forChild((0,s.Ve)(X))]]}),e})()}}]);