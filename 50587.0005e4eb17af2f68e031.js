"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[50587],{50587:(Y,C,n)=>{n.r(C),n.d(C,{ExampleTuiCurrencyModule:()=>G});var S=n(12057),r=n(23738),p=n(12021),E=n(55970),F=n(46244),D=n(37267),R=n(38780),e=n(74788),y=n(88331),_=n(37159),g=n(66596),M=n(57068),m=n(99886);let f=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["tui-currency-example1"]],decls:3,vars:3,template:function(o,a){1&o&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275text(1),e.\u0275\u0275pipe(2,"tuiCurrency"),e.\u0275\u0275elementEnd()),2&o&&(e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1("100 ",e.\u0275\u0275pipeBind1(2,1,"RUB"),""))},pipes:[m.i],encapsulation:2,changeDetection:0}),t})();var s=n(16753),T=n(13735);let x=(()=>{class t{constructor(){this.testForm=new r.FormGroup({testValue:new r.FormControl(100)})}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["tui-currency-example2"]],decls:4,vars:4,consts:[[3,"formGroup"],["formControlName","testValue",3,"postfix"]],template:function(o,a){1&o&&(e.\u0275\u0275elementStart(0,"form",0),e.\u0275\u0275elementStart(1,"tui-input-number",1),e.\u0275\u0275pipe(2,"tuiCurrency"),e.\u0275\u0275text(3," Type a sum "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&o&&(e.\u0275\u0275property("formGroup",a.testForm),e.\u0275\u0275advance(1),e.\u0275\u0275property("postfix",e.\u0275\u0275pipeBind1(2,2,826)))},directives:[r.\u0275NgNoValidate,r.NgControlStatusGroup,r.FormGroupDirective,s.q,T.g,r.NgControlStatus,r.FormControlName],pipes:[m.i],encapsulation:2,changeDetection:0}),t})();var N=n(23618),O=n(31823),P=n(17023),$=n(76349);function U(t,u){if(1&t&&(e.\u0275\u0275i18nStart(0,2),e.\u0275\u0275elementStart(1,"a",3),e.\u0275\u0275element(2,"code"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"tui-doc-example",4),e.\u0275\u0275element(4,"tui-currency-example1"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"tui-doc-example",5),e.\u0275\u0275element(6,"tui-currency-example2"),e.\u0275\u0275elementEnd(),e.\u0275\u0275i18nEnd()),2&t){const o=e.\u0275\u0275nextContext();e.\u0275\u0275advance(3),e.\u0275\u0275property("content",o.example1),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",o.example2)}}function L(t,u){if(1&t&&(e.\u0275\u0275elementStart(0,"tui-input-number",8),e.\u0275\u0275pipe(1,"tuiCurrency"),e.\u0275\u0275text(2," Type a sum "),e.\u0275\u0275elementEnd()),2&t){const o=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("formControl",o.control)("postfix",e.\u0275\u0275pipeBind1(1,2,o.currency))}}function I(t,u){1&t&&e.\u0275\u0275i18n(0,9)}function A(t,u){if(1&t){const o=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tui-doc-documentation"),e.\u0275\u0275elementStart(1,"tui-doc-demo",6),e.\u0275\u0275template(2,L,3,4,"ng-template"),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(3,I,1,0,"ng-template",7),e.\u0275\u0275listener("documentationPropertyValueChange",function(c){return e.\u0275\u0275restoreView(o),e.\u0275\u0275nextContext().currency=c}),e.\u0275\u0275elementEnd()}if(2&t){const o=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("control",o.control),e.\u0275\u0275advance(2),e.\u0275\u0275property("documentationPropertyValues",o.currencyVariants)("documentationPropertyValue",o.currency)}}function h(t,u){if(1&t&&(e.\u0275\u0275elementStart(0,"ol",10),e.\u0275\u0275elementStart(1,"li"),e.\u0275\u0275elementStart(2,"p"),e.\u0275\u0275i18nStart(3,11),e.\u0275\u0275element(4,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(5,"tui-doc-code",12),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"li"),e.\u0275\u0275elementStart(7,"p"),e.\u0275\u0275i18n(8,13),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(9,"tui-doc-code",14),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&t){const o=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("code",o.exampleModule),e.\u0275\u0275advance(4),e.\u0275\u0275property("code",o.exampleHtml)}}let v=(()=>{class t{constructor(){this.exampleModule=n.e(65769).then(n.t.bind(n,65769,17)),this.exampleHtml=n.e(76036).then(n.t.bind(n,76036,17)),this.example1={HTML:n.e(36253).then(n.t.bind(n,36253,17))},this.example2={TypeScript:n.e(71713).then(n.bind(n,71713)),HTML:n.e(2108).then(n.t.bind(n,2108,17))},this.currencyVariants=[null,826,840,"EUR","RUB","UGX","USD"],this.currency=this.currencyVariants[0],this.control=new r.FormControl(6432,r.Validators.required)}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["example-tui-currency"]],decls:4,vars:0,consts:function(){let u,o,a,c,i,d;return u=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,o=$localize`:␟96bdc0b7f954e93557510ae70b833743c300d653␟2572384218273688291:With Input`,a=$localize`:␟c9d1e275ce56cedba8fb6c09babe88f7db78b1c9␟1811243633647313273: Pipe for transforming number into money. It is usually used with ${"\ufffd#1\ufffd"}:START_LINK:${"\ufffd#2\ufffd"}:START_TAG_CODE:InputNumber${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE:${"\ufffd/#1\ufffd"}:CLOSE_LINK:${"\ufffd#3\ufffd"}:START_TAG_TUI_DOC_EXAMPLE:${"\ufffd#4\ufffd"}:START_TAG_TUI_CURRENCY_EXAMPLE1:${"\ufffd/#4\ufffd"}:CLOSE_TAG_TUI_CURRENCY_EXAMPLE1:${"[\ufffd/#3\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\ufffd#5\ufffd"}:START_TAG_TUI_DOC_EXAMPLE_1:${"\ufffd#6\ufffd"}:START_TAG_TUI_CURRENCY_EXAMPLE2:${"\ufffd/#6\ufffd"}:CLOSE_TAG_TUI_CURRENCY_EXAMPLE2:${"[\ufffd/#3\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:`,a=e.\u0275\u0275i18nPostprocess(a),c=$localize`:␟530c774891e15083e0ccaeafe4c297a539edf552␟1951189859517522583: Currency symbol `,i=$localize`:␟1bad6b65fccb2e60efe1ce559d3436a49cf19565␟960347934321337844: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiCurrencyPipeModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,d=$localize`:␟0ea7f0392ec03341377efee339ad5f8d8de0d93d␟3015667190571581067:Use pipe in template with input:`,[["header","Currency","package","ADDON-COMMERCE","path","addon-commerce/pipes/currency.pipe.ts"],["pageTab",""],a,["tuiLink","","routerLink","/components/input-number"],["id","base","heading",u,3,"content"],["id","withInput","heading",o,3,"content"],[3,"control"],["documentationPropertyName","currency","documentationPropertyMode","input","documentationPropertyType","TuiCurrencyVariants",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"formControl","postfix"],c,[1,"b-demo-steps"],i,["filename","myComponent.module.ts",3,"code"],d,["filename","myComponent.template.html",3,"code"]]},template:function(o,a){1&o&&(e.\u0275\u0275elementStart(0,"tui-doc-page",0),e.\u0275\u0275template(1,U,7,2,"ng-template",1),e.\u0275\u0275template(2,A,4,3,"ng-template",1),e.\u0275\u0275template(3,h,10,2,"ng-template",1),e.\u0275\u0275elementEnd())},directives:[y.q,_.n,g.V,p.yS,M.f,f,x,N.z,O.F,P.B,s.q,T.g,r.NgControlStatus,r.FormControlDirective,$.c],pipes:[m.i],encapsulation:2,changeDetection:0}),t})(),G=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[[E.wc,R._Hh,r.ReactiveFormsModule,r.FormsModule,E.DC,D.jzK,S.ez,F.fV,p.Bz.forChild((0,F.Ve)(v))]]}),t})()}}]);