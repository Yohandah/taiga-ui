(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{tdHe:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiLineDaysChartModule",(function(){return be}));var a=n("An66"),o=n("3kIJ"),i=n("1VvW"),r=n("UTYu"),l=n("SVIu"),c=n("l4xa"),p=n("Qq0t"),u=n("dvRg"),m=n("YtkY"),d=n("kZht"),s=n("OZlg"),h=n("e0eB"),g=n("iyc4"),y=n("D57K"),f=n("Yj6K"),b=n("y9tQ"),x=n("ae/2"),C=n("ItKm");function S(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"tui-axes",3),d["\u0275\u0275element"](1,"tui-line-days-chart",4),d["\u0275\u0275pipe"](2,"async"),d["\u0275\u0275elementEnd"]()),2&e){const e=t.ngIf,n=d["\u0275\u0275nextContext"]();d["\u0275\u0275property"]("verticalLines",e.length)("horizontalLines",4)("axisXLabels",e),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("height",200)("value",n.value)("yStringify",n.yStringify)("xStringify",d["\u0275\u0275pipeBind1"](2,7,n.xStringify$))}}let v=(()=>{class e{constructor(e){this.months$=e,this.range=new c.ib(c.hb.currentLocal(),c.hb.currentLocal().append({year:1})),this.maxLength={month:12},this.xStringify$=this.months$.pipe(Object(m.a)(e=>({month:t,day:n})=>`${e[t]}, ${n}`)),this.yStringify=e=>(10*e).toLocaleString("en-US",{maximumFractionDigits:0})+" $"}get value(){return this.computeValue(this.range)}computeLabels$({from:e,to:t}){return this.months$.pipe(Object(m.a)(n=>Array.from({length:c.Ib.lengthBetween(e,t)+1},(t,a)=>n[e.append({month:a}).month])))}computeValue({from:e,to:t}){return new Array(c.hb.lengthBetween(e,t)+1).fill(0).reduce((t,n,a)=>[...t,[e.append({day:a}),(a?t[a-1][1]:100)+10*Math.random()-5]],[])}}return e.\u0275fac=function(t){return new(t||e)(d["\u0275\u0275directiveInject"](p.C))},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-line-days-chart-example-1"]],decls:5,vars:5,consts:[[1,"b-form"],[3,"maxLength","ngModel","ngModelChange"],["class","axes",3,"verticalLines","horizontalLines","axisXLabels",4,"ngIf"],[1,"axes",3,"verticalLines","horizontalLines","axisXLabels"],[1,"chart",3,"height","value","yStringify","xStringify"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"p",0),d["\u0275\u0275elementStart"](1,"tui-input-date-range",1),d["\u0275\u0275listener"]("ngModelChange",(function(e){return t.range=e})),d["\u0275\u0275text"](2," Range "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](3,S,3,9,"tui-axes",2),d["\u0275\u0275pipe"](4,"async")),2&e&&(d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("maxLength",t.maxLength)("ngModel",t.range),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngIf",d["\u0275\u0275pipeBind1"](4,3,t.computeLabels$(t.range))))},directives:[f.a,b.a,o.NgControlStatus,o.NgModel,a.t,x.a,C.a],pipes:[a.b],styles:[".axes[_ngcontent-%COMP%]{height:12.5rem;color:#bc71c9}"],changeDetection:0}),Object(y.b)([c.qd],e.prototype,"computeLabels$",null),Object(y.b)([c.qd],e.prototype,"computeValue",null),e})();var P=n("aPft"),V=n("JPmT"),w=n("+JAB"),O=n("Hot6"),L=n("ROBh");let $=(()=>{class e{constructor(e){this.months$=e}transform({from:e,to:t}){const n=c.hb.lengthBetween(e,t);if(n>90)return this.months$.pipe(Object(m.a)(n=>Array.from({length:c.Ib.lengthBetween(e,t)+1},(t,a)=>n[e.append({month:a}).month])));const a=Array.from({length:n},(t,n)=>e.append({day:n})),o=function(e){return e.filter(e=>!e.dayOfWeek()).map(String)}(a),i=a.map(String);return n>60?Object(L.a)(M(o)):n>14?Object(L.a)(o):n>7?Object(L.a)(M(i)):Object(L.a)(i)}}return e.\u0275fac=function(t){return new(t||e)(d["\u0275\u0275directiveInject"](p.C))},e.\u0275pipe=d["\u0275\u0275definePipe"]({name:"labels",type:e,pure:!0}),e})();function M(e){return e.filter((e,t)=>!(t%2))}var E,T=n("DzXc"),D=n("M03u");function _(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"span",7),d["\u0275\u0275elementStart"](1,"small",8),d["\u0275\u0275text"](2),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){const e=t.index;d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate1"]("Chart ",e+1,"")}}function A(e,t){if(1&e&&(d["\u0275\u0275element"](0,"tui-line-days-chart",13),d["\u0275\u0275pipe"](1,"tuiFilter")),2&e){const e=t.$implicit,n=d["\u0275\u0275nextContext"](3);d["\u0275\u0275property"]("height",200)("value",d["\u0275\u0275pipeBind3"](1,2,e,n.filter,n.range))}}function j(e,t){if(1&e&&(d["\u0275\u0275elementContainerStart"](0),d["\u0275\u0275template"](1,A,2,6,"tui-line-days-chart",12),d["\u0275\u0275elementContainerEnd"]()),2&e){const e=d["\u0275\u0275nextContext"](2);d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngForOf",e.days)}}function B(e,t){if(1&e&&(d["\u0275\u0275element"](0,"tui-line-chart",15),d["\u0275\u0275pipe"](1,"tuiMapper"),d["\u0275\u0275pipe"](2,"tuiFilter")),2&e){const e=t.$implicit,n=d["\u0275\u0275nextContext"](3);d["\u0275\u0275property"]("height",200)("width",n.getWidth(n.range))("value",d["\u0275\u0275pipeBind3"](1,3,d["\u0275\u0275pipeBind3"](2,7,e,n.filter,n.range),n.toNumbers,n.range))}}function F(e,t){if(1&e&&d["\u0275\u0275template"](0,B,3,11,"tui-line-chart",14),2&e){const e=d["\u0275\u0275nextContext"](2);d["\u0275\u0275property"]("ngForOf",e.days)}}function z(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"tui-axes",9),d["\u0275\u0275template"](1,j,2,1,"ng-container",10),d["\u0275\u0275template"](2,F,1,1,"ng-template",null,11,d["\u0275\u0275templateRefExtractor"]),d["\u0275\u0275elementEnd"]()),2&e){const e=t.ngIf,n=d["\u0275\u0275reference"](3),a=d["\u0275\u0275nextContext"](),o=d["\u0275\u0275reference"](14);d["\u0275\u0275property"]("verticalLines",e.length)("horizontalLines",4)("axisXLabels",e)("tuiLineChartHint",o),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",a.getWidth(a.show)>90)("ngIfElse",n)}}function I(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"div",7),d["\u0275\u0275elementStart"](1,"span",17),d["\u0275\u0275text"](2),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate1"]("$",e[1].toFixed(0),"")}}function N(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"div",16),d["\u0275\u0275elementStart"](1,"strong"),d["\u0275\u0275text"](2),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"div"),d["\u0275\u0275template"](4,I,3,1,"div",4),d["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit,n=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate"](n.getDate(e[0][0],n.range.from)),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngForOf",e)}}E=$localize`:␟54790dc0dc9d3d244bf99ebbb89d1a8a62195075␟6846673182472139923:${"\ufffd#2\ufffd"}:START_TAG_CODE:TuiLineDaysChart${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: is used to show data of several months to simplify working with different number of days in months
`;let R=(()=>{class e{constructor(){this.data=new c.ib(c.hb.currentLocal(),c.hb.currentLocal().append({month:5})),this.show=this.data,this.days=this.computeArrays(this.data),this.maxLength={month:6},this.filter=([e],{from:t,to:n})=>e.daySameOrAfter(t)&&e.daySameOrBefore(n),this.toNumbers=(e,{from:t})=>e.map(([e,n])=>[c.hb.lengthBetween(t,e),n])}get range(){return this.computeRange(this.show)}getWidth({from:e,to:t}){return c.hb.lengthBetween(e,t)}getDate(e,t){return e instanceof c.hb?e:t.append({day:e})}onDataChange(e){this.days=this.computeArrays(e)}computeRange(e){const{from:t,to:n}=e,a=c.hb.lengthBetween(t,n),o=t.dayOfWeek(),i=n.dayOfWeek(),r=o?t.append({day:7-o}):t,l=i?n.append({day:7-i}):n,p=c.hb.lengthBetween(r,l);return a>60?new c.ib(r,l.append({day:p%14})):a>14?new c.ib(r,l):a>7?new c.ib(t,n.append({day:a%2})):e}computeData({from:e,to:t},n){return new Array(c.hb.lengthBetween(e,t)+1).fill(0).reduce((t,a,o)=>[...t,[e.append({day:o}),Math.max((o?t[o-1][1]:n)+10*Math.random()-5,0)]],[]).filter(([e])=>e.dayOfWeek()<5)}computeArrays(e){return[this.computeData(e,100),this.computeData(e,75),this.computeData(e,50)]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-line-days-chart-example-2"]],decls:15,vars:10,consts:[[1,"controls"],[1,"b-form",3,"maxLength","ngModel","ngModelChange"],[1,"b-form","tui-space_left-4",3,"maxLength","ngModel","ngModelChange"],[1,"legend"],["class","item",4,"ngFor","ngForOf"],["class","axes",3,"verticalLines","horizontalLines","axisXLabels","tuiLineChartHint",4,"ngIf"],["hint",""],[1,"item"],[1,"name"],[1,"axes",3,"verticalLines","horizontalLines","axisXLabels","tuiLineChartHint"],[4,"ngIf","ngIfElse"],["line",""],["class","chart",3,"height","value",4,"ngFor","ngForOf"],[1,"chart",3,"height","value"],["class","chart",3,"height","width","value",4,"ngFor","ngForOf"],[1,"chart",3,"height","width","value"],[1,"tui-space_bottom-2"],[1,"value"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-notification"),d["\u0275\u0275i18nStart"](1,E),d["\u0275\u0275element"](2,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"p",0),d["\u0275\u0275elementStart"](4,"tui-input-date-range",1),d["\u0275\u0275listener"]("ngModelChange",(function(e){return t.data=e}))("ngModelChange",(function(e){return t.onDataChange(e)})),d["\u0275\u0275text"](5," Data "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"tui-input-date-range",2),d["\u0275\u0275listener"]("ngModelChange",(function(e){return t.show=e})),d["\u0275\u0275text"](7," Visible range "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](8,"p",3),d["\u0275\u0275template"](9,_,3,1,"span",4),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](10,z,4,6,"tui-axes",5),d["\u0275\u0275pipe"](11,"async"),d["\u0275\u0275pipe"](12,"labels"),d["\u0275\u0275template"](13,N,5,2,"ng-template",null,6,d["\u0275\u0275templateRefExtractor"])),2&e&&(d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("maxLength",t.maxLength)("ngModel",t.data),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("maxLength",t.maxLength)("ngModel",t.show),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("ngForOf",t.days),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",d["\u0275\u0275pipeBind1"](11,6,d["\u0275\u0275pipeBind1"](12,8,t.show))))},directives:[P.a,f.a,b.a,o.NgControlStatus,o.NgModel,a.s,a.t,x.a,V.a,w.a,C.a,O.a],pipes:[a.b,$,T.a,D.a],styles:['.axes[_ngcontent-%COMP%]{height:12.5rem}.controls[_ngcontent-%COMP%]{display:flex}.controls[_ngcontent-%COMP%]   .b-form[_ngcontent-%COMP%]{flex:1}.legend[_ngcontent-%COMP%]{justify-content:center}.item[_ngcontent-%COMP%], .legend[_ngcontent-%COMP%]{display:flex;align-items:center}.item[_ngcontent-%COMP%]{color:var(--tui-support-01);margin:0 .75rem}.item[_ngcontent-%COMP%]:first-child{color:var(--tui-support-08)}.item[_ngcontent-%COMP%]:last-child{color:var(--tui-support-12)}.item[_ngcontent-%COMP%]:before{content:"";border-bottom:.125rem solid;width:1rem;margin-right:.5rem}.name[_ngcontent-%COMP%]{color:var(--tui-text-01)}.value[_ngcontent-%COMP%]{color:var(--tui-text-01-night)}.chart[_ngcontent-%COMP%]{color:var(--tui-support-01);position:absolute;top:0;left:0;width:100%;height:100%}.chart[_ngcontent-%COMP%]:first-child{color:var(--tui-support-08)}.chart[_ngcontent-%COMP%]:last-child{color:var(--tui-support-12)}'],changeDetection:0}),Object(y.b)([c.qd],e.prototype,"getWidth",null),Object(y.b)([c.qd],e.prototype,"getDate",null),Object(y.b)([c.qd],e.prototype,"computeRange",null),Object(y.b)([c.qd],e.prototype,"computeData",null),e})();var k,H=n("EPR0"),G=n("yHor"),X=n("zGJC"),W=n("u8jZ");k=$localize`:␟8b3686ee0181ab81f9ff51025cf35b0a03e625e7␟590759144044987818:Line chart but for days`;const Y=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`],q=["heading",$localize`:␟e75362b1b5b0d9038fcafc9670ef18bba17e61d0␟7049130908974374044:Complex`];function J(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"p"),d["\u0275\u0275i18n"](1,k),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](2,"tui-doc-example",2),d["\u0275\u0275i18nAttributes"](3,Y),d["\u0275\u0275element"](4,"tui-line-days-chart-example-1"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"tui-doc-example",3),d["\u0275\u0275i18nAttributes"](6,q),d["\u0275\u0275element"](7,"tui-line-days-chart-example-2"),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("content",e.example1),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",e.example2)}}var K,U,Q,Z,ee,te,ne,ae;function oe(e,t){1&e&&d["\u0275\u0275i18n"](0,K)}function ie(e,t){1&e&&(d["\u0275\u0275i18nStart"](0,U),d["\u0275\u0275element"](1,"code"),d["\u0275\u0275element"](2,"code"),d["\u0275\u0275i18nEnd"]())}function re(e,t){1&e&&d["\u0275\u0275i18n"](0,Q)}function le(e,t){1&e&&d["\u0275\u0275i18n"](0,Z)}function ce(e,t){1&e&&d["\u0275\u0275i18n"](0,ee)}function pe(e,t){1&e&&d["\u0275\u0275i18n"](0,te)}function ue(e,t){1&e&&d["\u0275\u0275i18n"](0,ne)}function me(e,t){1&e&&d["\u0275\u0275i18n"](0,ae)}K=$localize`:␟c4d83e70435953f62ccae3cbf6016420df475424␟4740076445307023096: Show dots on chart `,U=$localize`:␟bedcb3b37d5f24d2f77a8c3cb483fdf13759efd7␟6338178794566893901: Content of hint for hover. It has ${"[\ufffd#1\ufffd|\ufffd#2\ufffd]"}:START_TAG_CODE:$implicit${"[\ufffd/#1\ufffd|\ufffd/#2\ufffd]"}:CLOSE_TAG_CODE: in context with a tuple ${"[\ufffd#1\ufffd|\ufffd#2\ufffd]"}:START_TAG_CODE:[TuiDay, number]${"[\ufffd/#1\ufffd|\ufffd/#2\ufffd]"}:CLOSE_TAG_CODE:`,U=d["\u0275\u0275i18nPostprocess"](U),Q=$localize`:␟1148b851b9d07a503fe83074185fada4c56bc932␟4329060505650601384: Axis Y range, pixel scale is 1:1 `,Z=$localize`:␟f33f8b3f2cfd7ef519194cc1ae13fc8fb91fb8d7␟9084820970498059965: Start of Y axis `,ee=$localize`:␟dbcff3658adbc7241a4e120d0403b9b59203cf6f␟7622132382477188848: Smoothing factor from 0 to 99 `,te=$localize`:␟2eb20b3adec45476e892d48624603eec29f04ca7␟620827304048157009: Array of data `,ne=$localize`:␟a95376fd00f2c7de89ef1205191f686e9bb93ceb␟8840512580092681625: Function to stringify a value number to a string in axis X hint `,ae=$localize`:␟aa03eea8f292367391947b1ee6d45d8e5fe1c884␟8439308556823064311: Function to stringify a value number to a string in axis Y hint `;const de=function(){return[]};function se(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"tui-doc-demo"),d["\u0275\u0275elementStart"](1,"tui-axes",4),d["\u0275\u0275pipe"](2,"async"),d["\u0275\u0275element"](3,"tui-line-days-chart",5),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](4,"tui-doc-documentation"),d["\u0275\u0275template"](5,oe,1,0,"ng-template",6),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().dots=t})),d["\u0275\u0275template"](6,ie,3,0,"ng-template",7),d["\u0275\u0275pipe"](7,"async"),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().hintContent=t})),d["\u0275\u0275template"](8,re,1,0,"ng-template",8),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().height=t})),d["\u0275\u0275template"](9,le,1,0,"ng-template",9),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().y=t})),d["\u0275\u0275template"](10,ce,1,0,"ng-template",10),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().smoothingFactor=t})),d["\u0275\u0275template"](11,pe,1,0,"ng-template",11),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().value=t})),d["\u0275\u0275template"](12,ue,1,0,"ng-template",12),d["\u0275\u0275pipe"](13,"async"),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().xStringify=t})),d["\u0275\u0275template"](14,me,1,0,"ng-template",13),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().yStringify=t})),d["\u0275\u0275elementEnd"]()}if(2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("verticalLines",3)("horizontalLines",4)("axisXLabels",d["\u0275\u0275pipeBind1"](2,23,e.labels$)||d["\u0275\u0275pureFunction0"](29,de)),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("value",e.value)("y",e.y)("height",e.height)("hintContent",e.hintContent)("xStringify",e.xStringify)("yStringify",e.yStringify)("smoothingFactor",e.smoothingFactor)("dots",e.dots),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("documentationPropertyValue",e.dots),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",d["\u0275\u0275pipeBind1"](7,25,e.hintContentVariants$))("documentationPropertyValue",e.hintContent),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("documentationPropertyValue",e.height),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValue",e.y),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValue",e.smoothingFactor),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",e.valueVariants)("documentationPropertyValue",e.value),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",d["\u0275\u0275pipeBind1"](13,27,e.xStringifyVariants$))("documentationPropertyValue",e.xStringify),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("documentationPropertyValues",e.yStringifyVariants)("documentationPropertyValue",e.yStringify)}}var he,ge;function ye(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"ol",14),d["\u0275\u0275elementStart"](1,"li"),d["\u0275\u0275elementStart"](2,"p"),d["\u0275\u0275i18nStart"](3,he),d["\u0275\u0275element"](4,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](5,"tui-doc-code",15),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"li"),d["\u0275\u0275elementStart"](7,"p"),d["\u0275\u0275i18n"](8,ge),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](9,"tui-doc-code",16),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("code",e.exampleModule),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("code",e.exampleHtml)}}he=$localize`:␟3faf4a45d660c91f821e2f11c0184ec80a25404a␟5226796676451500758: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiLineDaysChartModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,ge=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let fe=(()=>{class e{constructor(e){this.months$=e,this.exampleModule=n.e(362).then(n.bind(null,"/AcR")),this.exampleHtml=n.e(363).then(n.bind(null,"s19l")),this.example1={TypeScript:n.e(357).then(n.bind(null,"06Vu")),HTML:n.e(355).then(n.bind(null,"7BPm")),LESS:n.e(356).then(n.bind(null,"p1Qe"))},this.example2={TypeScript:n.e(360).then(n.bind(null,"Yhji")),HTML:n.e(358).then(n.bind(null,"ym0C")),LESS:n.e(359).then(n.bind(null,"ckBe")),"pipe.ts":n.e(361).then(n.bind(null,"LuBK"))},this.valueVariants=[new Array(91).fill(0).reduce((e,t,n)=>[...e,[new c.hb(2020,0,1).append({day:n}),(n?e[n-1][1]:100)+20*Math.random()-10]],[]),[[new c.hb(2020,1,10),10],[new c.hb(2020,1,15),150],[new c.hb(2020,1,17),10],[new c.hb(2020,1,20),10],[new c.hb(2020,1,25),150],[new c.hb(2020,1,27),10]]],this.value=this.valueVariants[0],this.labels$=this.months$.pipe(Object(m.a)(e=>Array.from({length:3},(t,n)=>e[n]))),this.yStringifyVariants=[e=>(10*e).toLocaleString("en-US",{maximumFractionDigits:0})+" $"],this.xStringifyVariants$=this.months$.pipe(Object(m.a)(e=>[({month:t,day:n})=>`${e[t]}, ${n}`])),this.hintContentVariants$=this.months$.pipe(Object(m.a)(e=>["",({$implicit:t})=>`${e[t[0].month]}, ${t[0].day}\n${(10*t[1]).toLocaleString("en-US",{maximumFractionDigits:0})} $`])),this.yStringify=null,this.xStringify=null,this.hintContent="",this.dots=!1,this.smoothingFactor=0,this.y=0,this.height=200}}return e.\u0275fac=function(t){return new(t||e)(d["\u0275\u0275directiveInject"](p.C))},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-line-days-chart"]],decls:4,vars:0,consts:[["header","LineDaysChart","package","ADDON-CHARTS","type","components"],["pageTab",""],["id","base",3,"content",6,"heading"],["id","complex",3,"content",6,"heading"],[1,"axes",3,"verticalLines","horizontalLines","axisXLabels"],[3,"value","y","height","hintContent","xStringify","yStringify","smoothingFactor","dots"],["documentationPropertyName","dots","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","hintContent","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","height","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","y","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","smoothingFactor","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","value","documentationPropertyMode","input","documentationPropertyType","[TuiDay, number][]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","xStringify","documentationPropertyMode","input","documentationPropertyType","TuiStringHandler<TuiDay> | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","yStringify","documentationPropertyMode","input","documentationPropertyType","TuiStringHandler<number> | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-doc-page",0),d["\u0275\u0275template"](1,J,8,2,"ng-template",1),d["\u0275\u0275template"](2,se,15,30,"ng-template",1),d["\u0275\u0275template"](3,ye,10,2,"ng-template",1),d["\u0275\u0275elementEnd"]())},directives:[s.a,h.a,g.a,v,R,H.a,x.a,C.a,G.a,X.a,W.a],pipes:[a.b],styles:[".axes[_ngcontent-%COMP%]{height:12.5rem;width:45.5rem;color:#bc71c9}"],changeDetection:0}),e})(),be=(()=>{class e{}return e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,o.FormsModule,r.e,u.Eb,r.j,c.Gb,p.Gb,c.rb,r.k,u.X,l.m,i.f.forChild(Object(l.t)(fe))]]}),e})()}}]);