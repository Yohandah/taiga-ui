"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[73720],{73720:(X,c,o)=>{o.r(c),o.d(c,{ExampleTuiCalendarMonthModule:()=>J});var E=o(12057),d=o(12021),_=o(46244),s=o(5696),h=o(38780),i=o(19368),e=o(74788),N=o(88331),O=o(37159),g=o(66596),S=o(57068),p=o(33313);let y=(()=>{class n{constructor(){this.value=null,this.hoveredMonth=null}onMonthClick(t){this.value=t}onMonthHovered(t){this.hoveredMonth=t}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-calendar-month-example-1"]],decls:5,vars:3,consts:[[3,"value","monthClick","hoveredItemChange"]],template:function(t,a){1&t&&(e.\u0275\u0275elementStart(0,"tui-calendar-month",0),e.\u0275\u0275listener("monthClick",function(m){return a.onMonthClick(m)})("hoveredItemChange",function(m){return a.onMonthHovered(m)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(1,"p"),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"p"),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275property("value",a.value),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1("Selected month: ",a.value,""),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1("Hovered month: ",a.hoveredMonth,""))},directives:[p.o],encapsulation:2,changeDetection:0}),n})(),x=(()=>{class n{constructor(){this.value=null,this.max=new i.qld(2021,7),this.min=new i.qld(2019,7)}onMonthClick(t){this.value=null!==this.value&&this.value.isSingleMonth?i.dtp.sort(this.value.from,t):new i.dtp(t,t)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-calendar-month-example-2"]],decls:3,vars:4,consts:[[3,"value","min","max","monthClick"]],template:function(t,a){1&t&&(e.\u0275\u0275elementStart(0,"tui-calendar-month",0),e.\u0275\u0275listener("monthClick",function(m){return a.onMonthClick(m)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(1,"p"),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275property("value",a.value)("min",a.min)("max",a.max),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1("Selected range: ",a.value,""))},directives:[p.o],encapsulation:2,changeDetection:0}),n})();var D=o(31823),f=o(23618),F=o(17023),P=o(76349);function A(n,l){if(1&n&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275i18nStart(1,2),e.\u0275\u0275element(2,"a",3),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"tui-doc-example",4),e.\u0275\u0275element(4,"tui-calendar-month-example-1"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"tui-doc-example",5),e.\u0275\u0275element(6,"tui-calendar-month-example-2"),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(3),e.\u0275\u0275property("content",t.example1),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",t.example2)}}function R(n,l){1&n&&(e.\u0275\u0275i18nStart(0,13),e.\u0275\u0275element(1,"div"),e.\u0275\u0275element(2,"strong"),e.\u0275\u0275i18nEnd())}function L(n,l){1&n&&e.\u0275\u0275i18n(0,14)}function v(n,l){1&n&&e.\u0275\u0275text(0," Minimal month ")}function V(n,l){1&n&&e.\u0275\u0275i18n(0,15)}function $(n,l){1&n&&e.\u0275\u0275text(0," Current year ")}function H(n,l){1&n&&e.\u0275\u0275text(0," Selected month ")}function I(n,l){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tui-doc-demo"),e.\u0275\u0275elementStart(1,"tui-calendar-month",6),e.\u0275\u0275listener("monthClick",function(r){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().onMonthClick(r)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"tui-doc-documentation"),e.\u0275\u0275template(3,R,3,0,"ng-template",7),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().disabledItemHandler=r}),e.\u0275\u0275template(4,L,1,0,"ng-template",8),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().max=r}),e.\u0275\u0275template(5,v,1,0,"ng-template",9),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().min=r}),e.\u0275\u0275template(6,V,1,0,"ng-template",10),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().value=r}),e.\u0275\u0275template(7,$,1,0,"ng-template",11),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().year=r}),e.\u0275\u0275template(8,H,1,0,"ng-template",12),e.\u0275\u0275elementEnd()}if(2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("disabledItemHandler",t.disabledItemHandler)("min",t.min)("max",t.max)("year",t.year)("value",t.value),e.\u0275\u0275advance(2),e.\u0275\u0275property("documentationPropertyValues",t.disabledItemHandlerVariants)("documentationPropertyValue",t.disabledItemHandler),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",t.maxVariants)("documentationPropertyValue",t.max),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",t.minVariants)("documentationPropertyValue",t.min),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",t.valueVariants)("documentationPropertyValue",t.value),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",t.yearVariants)("documentationPropertyValue",t.year)}}function G(n,l){if(1&n&&(e.\u0275\u0275elementStart(0,"ol",16),e.\u0275\u0275elementStart(1,"li"),e.\u0275\u0275elementStart(2,"p"),e.\u0275\u0275i18nStart(3,17),e.\u0275\u0275element(4,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(5,"tui-doc-code",18),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"li"),e.\u0275\u0275elementStart(7,"p"),e.\u0275\u0275i18n(8,19),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(9,"tui-doc-code",20),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("code",t.exampleModule),e.\u0275\u0275advance(4),e.\u0275\u0275property("code",t.exampleHtml)}}let U=(()=>{class n{constructor(t){this.alertService=t,this.exampleModule=o.e(1697).then(o.t.bind(o,1697,17)),this.exampleHtml=o.e(79434).then(o.t.bind(o,79434,17)),this.example1={TypeScript:o.e(89300).then(o.t.bind(o,89300,17)),HTML:o.e(73106).then(o.t.bind(o,73106,17))},this.example2={TypeScript:o.e(87945).then(o.t.bind(o,87945,17)),HTML:o.e(50584).then(o.t.bind(o,50584,17))},this.minVariants=[i.nNo,new i.qld(2019,2),new i.qld(2007,0)],this.maxVariants=[i.OyN,new i.qld(2020,2),new i.qld(2023,0),new i.qld(2019,4)],this.min=this.minVariants[0],this.max=this.maxVariants[0],this.disabledItemHandlerVariants=[i.IyD,({month:a})=>a%3==0],this.disabledItemHandler=this.disabledItemHandlerVariants[0],this.valueVariants=[i.TU1.currentLocal(),new i.dtp(i.TU1.currentLocal(),i.TU1.currentLocal().append({month:3})),new i.qld(2007,2)],this.value=null,this.yearVariants=[i.TU1.currentLocal(),new i.F4U(2007)],this.year=this.yearVariants[0]}onMonthClick(t){this.alertService.open(String(t)).subscribe()}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(s.J9F))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["example-tui-calendar-month"]],decls:4,vars:0,consts:function(){let l,t,a,r,m,C,T,M;return l=$localize`:␟1c677168edd7fab101b47647d0e0c6408932436e␟7706503232819829138: Month picker component. If you want a textfield, see ${"\ufffd#2\ufffd"}:START_LINK: InputMonthRange ${"\ufffd/#2\ufffd"}:CLOSE_LINK:`,t=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,a=$localize`:␟0427b9c1f10441c6f4c53f1788242e2a97954be1␟2348971518300945764:Range`,r=$localize`:␟5acb2fc15a092ea08e97136e74cb7441fee5a74b␟3402892514282812900:${"\ufffd#1\ufffd"}:START_TAG_DIV:A handler that gets a month and returns true if it is disabled.${"\ufffd/#1\ufffd"}:CLOSE_TAG_DIV:${"\ufffd#2\ufffd"}:START_TAG_STRONG:Must be a pure function${"\ufffd/#2\ufffd"}:CLOSE_TAG_STRONG:`,m=$localize`:␟21de36d65c8d90255cbe722536ad7ffd2dc18ba7␟2184035891904629249: Maximal month `,C=$localize`:␟10d55eb5861d4ee0970065a79e957f6374271b88␟6121231479332733898: A single month or a range of months `,T=$localize`:␟7e49cae11b32705d7cff0ad772b81e8e2f773f55␟2970267431945466119: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiCalendarMonthModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,M=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","CalendarMonth","package","KIT","type","components"],["pageTab",""],l,["tuiLink","","routerLink","/components/input-month-range"],["id","base","heading",t,3,"content"],["id","range","heading",a,3,"content"],[3,"disabledItemHandler","min","max","year","value","monthClick"],["documentationPropertyName","disabledItemHandler","documentationPropertyMode","input","documentationPropertyType","TuiBooleanHandlerWithContext<TuiMonth, TuiMonthContext>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","TuiMonth",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","TuiMonth",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","value","documentationPropertyMode","input","documentationPropertyType","TuiMonth | TuiMonthRange | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","year","documentationPropertyMode","input-output","documentationPropertyType","TuiYear",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","monthClick","documentationPropertyMode","output","documentationPropertyType","TuiMonth"],r,m,C,[1,"b-demo-steps"],T,["filename","myComponent.module.ts",3,"code"],M,["filename","myComponent.template.html",3,"code"]]},template:function(t,a){1&t&&(e.\u0275\u0275elementStart(0,"tui-doc-page",0),e.\u0275\u0275template(1,A,7,2,"ng-template",1),e.\u0275\u0275template(2,I,9,15,"ng-template",1),e.\u0275\u0275template(3,G,10,2,"ng-template",1),e.\u0275\u0275elementEnd())},directives:[N.q,O.n,g.V,d.yS,S.f,y,x,D.F,p.o,f.z,F.B,P.c],encapsulation:2,changeDetection:0}),n})(),J=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[E.ez,d.Bz,s.jzK,h.mlC,_.fV,d.Bz.forChild((0,_.Ve)(U))]]}),n})()}}]);