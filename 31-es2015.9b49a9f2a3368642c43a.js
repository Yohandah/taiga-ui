(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{zSyp:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiCalendarMonthModule",(function(){return O}));var o=n("2kYt"),a=n("sEIs"),i=n("SVIu"),r=n("Qq0t"),l=n("dvRg"),u=n("l4xa"),m=n("s2A/"),c=n("EM62"),d=n("OZlg"),p=n("e0eB"),h=n("yZWP"),s=n("iyc4"),y=n("dv/p");let v=(()=>{class e{constructor(){this.value=null,this.hoveredMonth=null}onMonthClick(e){this.value=e}onMonthHovered(e){this.hoveredMonth=e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-calendar-month-example-1"]],decls:5,vars:3,consts:[[3,"value","monthClick","hoveredItemChange"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-calendar-month",0),c["\u0275\u0275listener"]("monthClick",(function(e){return t.onMonthClick(e)}))("hoveredItemChange",(function(e){return t.onMonthHovered(e)})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](1,"p"),c["\u0275\u0275text"](2),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"p"),c["\u0275\u0275text"](4),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275property"]("value",t.value),c["\u0275\u0275advance"](2),c["\u0275\u0275textInterpolate1"]("Selected month: ",t.value,""),c["\u0275\u0275advance"](2),c["\u0275\u0275textInterpolate1"]("Hovered month: ",t.hoveredMonth,""))},directives:[y.a],encapsulation:2,changeDetection:0}),e})(),M=(()=>{class e{constructor(){this.value=null,this.max=new u.TuiMonth(2021,7),this.min=new u.TuiMonth(2019,7)}onMonthClick(e){this.value=null!==this.value&&this.value.isSingleMonth?u.TuiMonthRange.sort(this.value.from,e):new u.TuiMonthRange(e,e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-calendar-month-example-2"]],decls:3,vars:4,consts:[[3,"value","min","max","monthClick"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-calendar-month",0),c["\u0275\u0275listener"]("monthClick",(function(e){return t.onMonthClick(e)})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](1,"p"),c["\u0275\u0275text"](2),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275property"]("value",t.value)("min",t.min)("max",t.max),c["\u0275\u0275advance"](2),c["\u0275\u0275textInterpolate1"]("Selected range: ",t.value,""))},directives:[y.a],encapsulation:2,changeDetection:0}),e})();var f,T=n("EPR0"),g=n("yHor"),x=n("zGJC"),C=n("u8jZ");f=$localize`:␟ce2028e0c60b9a186d20ffdd70345c553b56a58b␟697568322173342344: Month picker component. If you want a textfield, see ${"\ufffd#2\ufffd"}:START_LINK:InputMonthRange${"\ufffd/#2\ufffd"}:CLOSE_LINK:`;const V=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`],P=["heading",$localize`:␟0427b9c1f10441c6f4c53f1788242e2a97954be1␟2348971518300945764:Range`];function S(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"p"),c["\u0275\u0275i18nStart"](1,f),c["\u0275\u0275element"](2,"a",2),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"tui-doc-example",3),c["\u0275\u0275i18nAttributes"](4,V),c["\u0275\u0275element"](5,"tui-calendar-month-example-1"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"tui-doc-example",4),c["\u0275\u0275i18nAttributes"](7,P),c["\u0275\u0275element"](8,"tui-calendar-month-example-2"),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("content",e.example1),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("content",e.example2)}}var b,w,I,E,k;function A(e,t){1&e&&(c["\u0275\u0275i18nStart"](0,b),c["\u0275\u0275element"](1,"div"),c["\u0275\u0275element"](2,"strong"),c["\u0275\u0275i18nEnd"]())}function H(e,t){1&e&&c["\u0275\u0275i18n"](0,w)}function R(e,t){1&e&&c["\u0275\u0275text"](0," Minimal month ")}function _(e,t){1&e&&c["\u0275\u0275i18n"](0,I)}function L(e,t){1&e&&c["\u0275\u0275text"](0," Current year ")}function $(e,t){1&e&&c["\u0275\u0275text"](0," Selected month ")}function D(e,t){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"tui-doc-demo"),c["\u0275\u0275elementStart"](1,"tui-calendar-month",5),c["\u0275\u0275listener"]("monthClick",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().onMonthClick(t)})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](2,"tui-doc-documentation"),c["\u0275\u0275template"](3,A,3,0,"ng-template",6),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().disabledItemHandler=t})),c["\u0275\u0275template"](4,H,1,0,"ng-template",7),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().max=t})),c["\u0275\u0275template"](5,R,1,0,"ng-template",8),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().min=t})),c["\u0275\u0275template"](6,_,1,0,"ng-template",9),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().value=t})),c["\u0275\u0275template"](7,L,1,0,"ng-template",10),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().year=t})),c["\u0275\u0275template"](8,$,1,0,"ng-template",11),c["\u0275\u0275elementEnd"]()}if(2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("disabledItemHandler",e.disabledItemHandler)("min",e.min)("max",e.max)("year",e.year)("value",e.value),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("documentationPropertyValues",e.disabledItemHandlerVariants)("documentationPropertyValue",e.disabledItemHandler),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValues",e.maxVariants)("documentationPropertyValue",e.max),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValues",e.minVariants)("documentationPropertyValue",e.min),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValues",e.valueVariants)("documentationPropertyValue",e.value),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValues",e.yearVariants)("documentationPropertyValue",e.year)}}function N(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"ol",12),c["\u0275\u0275elementStart"](1,"li"),c["\u0275\u0275elementStart"](2,"p"),c["\u0275\u0275i18nStart"](3,E),c["\u0275\u0275element"](4,"code"),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](5,"tui-doc-code",13),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"li"),c["\u0275\u0275elementStart"](7,"p"),c["\u0275\u0275i18n"](8,k),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](9,"tui-doc-code",14),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](5),c["\u0275\u0275property"]("code",e.exampleImportModule),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("code",e.exampleInsertTemplate)}}b=$localize`:␟28ed9301c8db6b37f63728ee9da1ccb7de5a7627␟1177352435590552315:${"\ufffd#1\ufffd"}:START_TAG_DIV: A handler that gets a month and returns true if it is disabled. ${"\ufffd/#1\ufffd"}:CLOSE_TAG_DIV:${"\ufffd#2\ufffd"}:START_TAG_STRONG:Must be a pure function${"\ufffd/#2\ufffd"}:CLOSE_TAG_STRONG:`,w=$localize`:␟21de36d65c8d90255cbe722536ad7ffd2dc18ba7␟2184035891904629249: Maximal month `,I=$localize`:␟10d55eb5861d4ee0970065a79e957f6374271b88␟6121231479332733898: A single month or a range of months `,E=$localize`:␟b2a89a4e9d6f9b162d7fdff8ffca2c5101f6fdb2␟1703908572802672229: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiCalendarMonthModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,k=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let z=(()=>{class e{constructor(e){this.log=e,this.exampleImportModule="import {TuiCalendarMonthModule} from '@taiga-ui/kit';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiCalendarMonthModule\n    ],\n...\n",this.exampleInsertTemplate="<tui-calendar-month></tui-calendar-month>\n",this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {TuiMonth} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-calendar-month-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMonthExample1 {\n    value: TuiMonth | null = null;\n    hoveredMonth: TuiMonth | null = null;\n\n    onMonthClick(month: TuiMonth) {\n        this.value = month;\n    }\n\n    onMonthHovered(month: TuiMonth | null) {\n        this.hoveredMonth = month;\n    }\n}\n",HTML:'<tui-calendar-month\n    [value]="value"\n    (monthClick)="onMonthClick($event)"\n    (hoveredItemChange)="onMonthHovered($event)"\n></tui-calendar-month>\n<p>Selected month: {{value}}</p>\n<p>Hovered month: {{hoveredMonth}}</p>\n'},this.example2={TypeScript:"import {Component} from '@angular/core';\nimport {TuiMonth, TuiMonthRange} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-calendar-month-example-2',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMonthExample2 {\n    value: TuiMonthRange | null = null;\n\n    max = new TuiMonth(2021, 7);\n    min = new TuiMonth(2019, 7);\n\n    onMonthClick(month: TuiMonth) {\n        if (this.value === null || !this.value.isSingleMonth) {\n            this.value = new TuiMonthRange(month, month);\n\n            return;\n        }\n\n        this.value = TuiMonthRange.sort(this.value.from, month);\n    }\n}\n",HTML:'<tui-calendar-month\n    [value]="value"\n    [min]="min"\n    [max]="max"\n    (monthClick)="onMonthClick($event)"\n></tui-calendar-month>\n<p>Selected range: {{value}}</p>\n'},this.minVariants=[u.TUI_FIRST_DAY,new u.TuiMonth(2019,2),new u.TuiMonth(2007,0)],this.maxVariants=[u.TUI_LAST_DAY,new u.TuiMonth(2020,2),new u.TuiMonth(2023,0),new u.TuiMonth(2019,4)],this.min=this.minVariants[0],this.max=this.maxVariants[0],this.disabledItemHandlerVariants=[u.ALWAYS_FALSE_HANDLER,({month:e})=>e%3==0],this.disabledItemHandler=this.disabledItemHandlerVariants[0],this.valueVariants=[u.TuiDay.currentLocal(),new u.TuiMonthRange(u.TuiDay.currentLocal(),u.TuiDay.currentLocal().append({month:3})),new u.TuiMonth(2007,2)],this.value=null,this.yearVariants=[u.TuiDay.currentLocal(),new u.TuiYear(2007)],this.year=this.yearVariants[0]}onMonthClick(e){this.log.log(e)}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](m.a))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-calendar-month"]],features:[c["\u0275\u0275ProvidersFeature"]([m.a])],decls:4,vars:0,consts:[["header","CalendarMonth","package","KIT"],["pageTab",""],["tuiLink","","routerLink","/tui-input-month-range"],["id","base",3,"content",6,"heading"],["id","range",3,"content",6,"heading"],[3,"disabledItemHandler","min","max","year","value","monthClick"],["documentationPropertyName","disabledItemHandler","documentationPropertyMode","input","documentationPropertyType","TuiBooleanHandlerWithContext<TuiMonth, TuiMonthContext>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","TuiMonth",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","TuiMonth",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","value","documentationPropertyMode","input","documentationPropertyType","TuiMonth | TuiMonthRange | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","year","documentationPropertyMode","input-output","documentationPropertyType","TuiYear",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","monthClick","documentationPropertyMode","output","documentationPropertyType","TuiMonth"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-doc-page",0),c["\u0275\u0275template"](1,S,9,2,"ng-template",1),c["\u0275\u0275template"](2,D,9,15,"ng-template",1),c["\u0275\u0275template"](3,N,10,2,"ng-template",1),c["\u0275\u0275elementEnd"]())},directives:[d.a,p.a,h.a,a.e,s.a,v,M,T.a,y.a,g.a,x.a,C.a],encapsulation:2,changeDetection:0}),e})(),O=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,a.f,r.TuiLinkModule,l.TuiCalendarMonthModule,...i.e,a.f.forChild(Object(i.n)(z))]]}),e})()}}]);