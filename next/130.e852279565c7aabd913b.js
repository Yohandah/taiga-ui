(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{A3SN:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiPureModule",(function(){return A}));var o=n("An66"),c=n("3kIJ"),a=n("1VvW"),i=n("SVIu"),r=n("Qq0t"),l=n("dvRg"),u=n("kZht"),p=n("OZlg"),s=n("e0eB"),d=n("iyc4"),m=n("D57K"),f=n("l4xa"),h=n("zV1d");function b(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"div",2),u["\u0275\u0275text"](1),u["\u0275\u0275elementEnd"]()),2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](1),u["\u0275\u0275textInterpolate1"](" fibonacci(42) = ",e.fibonacci42," ")}}let g=(()=>{class e{constructor(){this.show=!1}get fibonacci42(){return this.fibonacci(42)}fibonacci(e){return e<=1?e:this.fibonacci(e-1)+this.fibonacci(e-2)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-pure-getter"]],decls:3,vars:1,consts:[["class","tui-space_bottom-2",4,"ngIf"],["tuiButton","","type","button",3,"click"],[1,"tui-space_bottom-2"]],template:function(e,t){1&e&&(u["\u0275\u0275template"](0,b,2,1,"div",0),u["\u0275\u0275elementStart"](1,"button",1),u["\u0275\u0275listener"]("click",(function(){return t.show=!t.show})),u["\u0275\u0275text"](2," Show/hide "),u["\u0275\u0275elementEnd"]()),2&e&&u["\u0275\u0275property"]("ngIf",t.show)},directives:[o.t,h.a],encapsulation:2,changeDetection:0}),Object(m.b)([f.jd],e.prototype,"fibonacci42",null),e})();var x=n("GdrL"),v=n("71sB");function S(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"div",1),u["\u0275\u0275text"](1),u["\u0275\u0275pipe"](2,"json"),u["\u0275\u0275elementEnd"]()),2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](1),u["\u0275\u0275textInterpolate1"](" Result: ",u["\u0275\u0275pipeBind1"](2,1,e.calculate(e.counter,e.text))," ")}}let w=(()=>{class e{constructor(){this.text="",this.show=!1,this.counter={count:0}}calculate(e,t){return e.count++,{text:t}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-pure-function"]],decls:7,vars:3,consts:[[3,"ngModel","ngModelChange"],[1,"tui-space_top-2"],["class","tui-space_top-2",4,"ngIf"],["tuiButton","","type","button",1,"tui-space_top-2",3,"click"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"tui-input",0),u["\u0275\u0275listener"]("ngModelChange",(function(e){return t.text=e})),u["\u0275\u0275text"](1,"Type a text to start computing"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](2,"div",1),u["\u0275\u0275text"](3),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](4,S,3,3,"div",2),u["\u0275\u0275elementStart"](5,"button",3),u["\u0275\u0275listener"]("click",(function(){return t.show=!t.show})),u["\u0275\u0275text"](6," Show/hide "),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275property"]("ngModel",t.text),u["\u0275\u0275advance"](3),u["\u0275\u0275textInterpolate1"]("Called times: ",t.counter.count,""),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",t.show))},directives:[x.a,v.a,c.NgControlStatus,c.NgModel,o.t,h.a],pipes:[o.k],encapsulation:2,changeDetection:0}),Object(m.b)([f.jd],e.prototype,"calculate",null),e})();var y=n("u8jZ");const E=["header",$localize`:␟6249527401fcb0d799fa087f686f23631ee46d68␟8407130897675501150:Pure`];var C,j,k,D;function I(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"div",3),u["\u0275\u0275i18n"](1,C),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](2,"p"),u["\u0275\u0275i18n"](3,j),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](4,"p"),u["\u0275\u0275i18n"](5,k),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](6,"tui-doc-example",4),u["\u0275\u0275element"](7,"example-tui-pure-getter"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](8,"tui-doc-example",5),u["\u0275\u0275element"](9,"example-tui-pure-function"),u["\u0275\u0275elementEnd"]()),2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](6),u["\u0275\u0275property"]("content",e.example1),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("content",e.example2)}}function T(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"ol",6),u["\u0275\u0275elementStart"](1,"li"),u["\u0275\u0275elementStart"](2,"p"),u["\u0275\u0275i18nStart"](3,D),u["\u0275\u0275element"](4,"code"),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](5,"tui-doc-code",7),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("code",e.exampleDecorator)}}C=$localize`:␟142c568583ee039615277b4178286ae0e46d0a56␟1148608671765112042: Decorator for memoization of pure methods and getters `,j=$localize`:␟f3bd06346fbf934c4f8a501cc1886ac7f4bb46da␟1623021968578892561: Decorator can help to cache result of methods or getters that can be computed once in the first call. The next calls to getter will just use computed static value. `,k=$localize`:␟00d1222edd5979db8d5ee12174b25f8c2c8f1b18␟2326709629297761578: If you use decorator with methods, it does not compute the result again if arguments did not change after the last call (concept similar to Angular pure pipes) `,D=$localize`:␟e7d602a6de31264108144aacb875f1e2b860de05␟4481678507740450627: Add ${"\ufffd#4\ufffd"}:START_TAG_CODE:@tuiPure${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: decorator for your method or getter: `;let _=(()=>{class e{constructor(){this.exampleDecorator=n.e(1445).then(n.bind(null,"jBNn")),this.example1={TypeScript:n.e(1447).then(n.bind(null,"l6JJ"))},this.example2={TypeScript:n.e(1446).then(n.bind(null,"3+fw"))}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-pure"]],decls:4,vars:0,consts:[["package","CDK","path","cdk/decorators/pure.ts",6,"header"],["pageTab",""],["pageTab","Setup"],[1,"tui-space_bottom-3"],["id","getter","heading","Getter",3,"content"],["id","function","heading","Function",3,"content"],[1,"b-demo-steps"],["filename","myClass.component.ts",3,"code"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"tui-doc-page",0),u["\u0275\u0275i18nAttributes"](1,E),u["\u0275\u0275template"](2,I,10,2,"ng-template",1),u["\u0275\u0275template"](3,T,6,1,"ng-template",2),u["\u0275\u0275elementEnd"]())},directives:[p.a,s.a,d.a,g,w,y.a],encapsulation:2,changeDetection:0}),e})(),A=(()=>{class e{}return e.\u0275mod=u["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,c.FormsModule,l.bb,r.ab,i.j,a.f.forChild(Object(i.q)(_))]]}),e})()}}]);