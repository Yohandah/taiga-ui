"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[29160],{29160:(pe,c,a)=>{a.r(c),a.d(c,{ExampleTuiAxesModule:()=>ce});var p=a(12057),u=a(12021),_=a(50179),V=a(55970),E=a(46244),S=a(5696),$=a(89570),e=a(74788),D=a(88331),b=a(37159),v=a(57068),d=a(70390);let Y=(()=>{class n{constructor(){this.axisXLabels=["Jan 2019","Feb","Mar"],this.axisYLabels=["","25%","50%","75%","100%"],this.axisYSecondaryLabels=["80 k","100 k","120 k"],this.verticalLinesHandler=(t,l)=>t===l-1?"none":"dashed"}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-axes-example-1"]],decls:1,vars:7,consts:[["axisYName","Target","axisYSecondaryName","Sum",1,"axes",3,"axisYInset","horizontalLines","verticalLines","axisXLabels","axisYLabels","axisYSecondaryLabels","verticalLinesHandler"]],template:function(t,l){1&t&&e.\u0275\u0275element(0,"tui-axes",0),2&t&&e.\u0275\u0275property("axisYInset",!0)("horizontalLines",2)("verticalLines",3)("axisXLabels",l.axisXLabels)("axisYLabels",l.axisYLabels)("axisYSecondaryLabels",l.axisYSecondaryLabels)("verticalLinesHandler",l.verticalLinesHandler)},directives:[d.v],styles:[".axes[_ngcontent-%COMP%]{height:18.75rem;width:37.5rem}"],changeDetection:0}),n})();var H=a(64762),T=a(19368),I=a(88549),F=a(14133),z=a(16996);function G(n,o){if(1&n&&(e.\u0275\u0275elementStart(0,"p",4),e.\u0275\u0275element(1,"span",5),e.\u0275\u0275elementStart(2,"span",6),e.\u0275\u0275text(3),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(4,"tui-money",7),e.\u0275\u0275elementEnd()),2&n){const t=o.$implicit,l=o.index,r=e.\u0275\u0275nextContext().$implicit,i=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275styleProp("background",i.getBackground(l)),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(i.getSetName(l)),e.\u0275\u0275advance(1),e.\u0275\u0275property("singleColor",!0)("value",1e3*t[r])}}function J(n,o){if(1&n&&e.\u0275\u0275template(0,G,5,5,"p",3),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275property("ngForOf",t.value)}}class m{constructor(){this.setNames=["cdk","core","kit","charts"],this.value=[[10,20,3,7],[15,18,24,1],[34,23,12,9],[30,14,18,14]],this.axisYSecondaryLabels=["",this.getMax(this.value)/2+" k",`${this.getMax(this.value)} k`],this.axisXLabels=["Q1","Q2","Q3","Q4"],this.horizontalLinesHandler=_.oG,this.verticalLinesHandler=_.BK}getPercent(o){return 100*Math.max(...o)/this.getMax(this.value)}getSetName(o){return this.setNames[o]}getBackground(o){return`var(--tui-chart-${o})`}getMax(o){return(0,T.BrH)(o.reduce((t,l)=>Math.max(...l,t),0),-1)}}m.\u0275fac=function(o){return new(o||m)},m.\u0275cmp=e.\u0275\u0275defineComponent({type:m,selectors:[["tui-axes-example-2"]],decls:4,vars:8,consts:[["axisY","none",1,"axes",3,"axisXLabels","axisYSecondaryLabels","horizontalLines","verticalLines","horizontalLinesHandler","verticalLinesHandler"],[1,"chart",3,"value","tuiHintContent"],["hint",""],["class","hint",4,"ngFor","ngForOf"],[1,"hint"],[1,"dot"],[1,"name"],[3,"singleColor","value"]],template:function(o,t){if(1&o&&(e.\u0275\u0275elementStart(0,"tui-axes",0),e.\u0275\u0275element(1,"tui-bar-chart",1),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(2,J,1,1,"ng-template",null,2,e.\u0275\u0275templateRefExtractor)),2&o){const l=e.\u0275\u0275reference(3);e.\u0275\u0275property("axisXLabels",t.axisXLabels)("axisYSecondaryLabels",t.axisYSecondaryLabels)("horizontalLines",2)("verticalLines",4)("horizontalLinesHandler",t.horizontalLinesHandler)("verticalLinesHandler",t.verticalLinesHandler),e.\u0275\u0275advance(1),e.\u0275\u0275property("value",t.value)("tuiHintContent",l)}},directives:[d.v,I.g,F.m,p.sg,z.o],styles:["[_nghost-%COMP%], .hint[_ngcontent-%COMP%]{--tui-chart-0: #c779d0;--tui-chart-1: #feac5e;--tui-chart-2: #ff5f6d;--tui-chart-3: #4bc0c8}.axes[_ngcontent-%COMP%]{height:18.75rem;width:37.5rem}.chart[_ngcontent-%COMP%]{height:100%}.wrapper[_ngcontent-%COMP%]{position:relative;display:flex;flex:1;align-items:flex-end;justify-content:center;height:100%;margin-bottom:-.0625rem;cursor:pointer}.wrapper[_ngcontent-%COMP%]:hover{background-color:rgba(0,0,0,.05)}.hint[_ngcontent-%COMP%]{display:flex;align-items:center}.dot[_ngcontent-%COMP%]{border-radius:100%;width:.75rem;height:.75rem;margin-right:.5rem}.name[_ngcontent-%COMP%]{margin-right:.5rem}"],changeDetection:0}),(0,H.gn)([T.UMq],m.prototype,"getMax",null);var B=a(31823),Q=a(23618),j=a(17023),W=a(76349);function K(n,o){if(1&n&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275i18n(1,2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"tui-doc-example",3),e.\u0275\u0275element(3,"tui-axes-example-1"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"tui-doc-example",4),e.\u0275\u0275element(5,"tui-axes-example-2"),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275property("content",t.example1),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",t.example2)}}function Z(n,o){1&n&&e.\u0275\u0275i18n(0,19)}function w(n,o){1&n&&(e.\u0275\u0275i18nStart(0,20),e.\u0275\u0275element(1,"code"),e.\u0275\u0275i18nEnd())}function k(n,o){1&n&&e.\u0275\u0275i18n(0,21)}function q(n,o){1&n&&e.\u0275\u0275i18n(0,22)}function ee(n,o){1&n&&e.\u0275\u0275i18n(0,23)}function te(n,o){1&n&&e.\u0275\u0275i18n(0,24)}function ne(n,o){1&n&&e.\u0275\u0275i18n(0,25)}function ae(n,o){1&n&&e.\u0275\u0275i18n(0,26)}function oe(n,o){1&n&&e.\u0275\u0275i18n(0,27)}function ie(n,o){1&n&&e.\u0275\u0275i18n(0,28)}function le(n,o){1&n&&e.\u0275\u0275i18n(0,29)}function re(n,o){1&n&&e.\u0275\u0275i18n(0,30)}function se(n,o){1&n&&e.\u0275\u0275i18n(0,31)}function _e(n,o){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tui-doc-demo"),e.\u0275\u0275element(1,"tui-axes",5),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"tui-doc-documentation"),e.\u0275\u0275template(3,Z,1,0,"ng-template",6),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().axisX=r}),e.\u0275\u0275template(4,w,2,0,"ng-template",7),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().axisXLabels=r}),e.\u0275\u0275template(5,k,1,0,"ng-template",8),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().axisY=r}),e.\u0275\u0275template(6,q,1,0,"ng-template",9),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().axisYInset=r}),e.\u0275\u0275template(7,ee,1,0,"ng-template",10),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().axisYLabels=r}),e.\u0275\u0275template(8,te,1,0,"ng-template",11),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().axisYName=r}),e.\u0275\u0275template(9,ne,1,0,"ng-template",12),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().axisYSecondaryInset=r}),e.\u0275\u0275template(10,ae,1,0,"ng-template",13),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().axisYSecondaryLabels=r}),e.\u0275\u0275template(11,oe,1,0,"ng-template",14),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().axisYSecondaryName=r}),e.\u0275\u0275template(12,ie,1,0,"ng-template",15),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().horizontalLines=r}),e.\u0275\u0275template(13,le,1,0,"ng-template",16),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().horizontalLinesHandler=r}),e.\u0275\u0275template(14,re,1,0,"ng-template",17),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().verticalLines=r}),e.\u0275\u0275template(15,se,1,0,"ng-template",18),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().verticalLinesHandler=r}),e.\u0275\u0275elementEnd()}if(2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("axisX",t.axisX)("axisXLabels",t.axisXLabels)("axisY",t.axisY)("axisYInset",t.axisYInset)("axisYLabels",t.axisYLabels)("axisYName",t.axisYName)("axisYSecondaryInset",t.axisYSecondaryInset)("axisYSecondaryLabels",t.axisYSecondaryLabels)("axisYSecondaryName",t.axisYSecondaryName)("horizontalLines",t.horizontalLines)("horizontalLinesHandler",t.horizontalLinesHandler)("verticalLines",t.verticalLines)("verticalLinesHandler",t.verticalLinesHandler),e.\u0275\u0275advance(2),e.\u0275\u0275property("documentationPropertyValues",t.lineVariants)("documentationPropertyValue",t.axisX),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",t.labelsXVariants)("documentationPropertyValue",t.axisXLabels),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",t.lineVariants)("documentationPropertyValue",t.axisY),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",t.axisYInset),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",t.labelsYVariants)("documentationPropertyValue",t.axisYLabels),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",t.axisYName),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",t.axisYSecondaryInset),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",t.labelsYVariants)("documentationPropertyValue",t.axisYSecondaryLabels),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",t.axisYSecondaryName),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",t.horizontalLines),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",t.handlerVariants)("documentationPropertyValue",t.horizontalLinesHandler),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",t.verticalLines),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",t.handlerVariants)("documentationPropertyValue",t.verticalLinesHandler)}}function me(n,o){if(1&n&&(e.\u0275\u0275elementStart(0,"ol",32),e.\u0275\u0275elementStart(1,"li"),e.\u0275\u0275elementStart(2,"p"),e.\u0275\u0275i18nStart(3,33),e.\u0275\u0275element(4,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(5,"tui-doc-code",34),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"li"),e.\u0275\u0275elementStart(7,"p"),e.\u0275\u0275i18n(8,35),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(9,"tui-doc-code",36),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("code",t.exampleModule),e.\u0275\u0275advance(4),e.\u0275\u0275property("code",t.exampleHtml)}}let de=(()=>{class n{constructor(){this.exampleModule=a.e(49477).then(a.t.bind(a,49477,17)),this.exampleHtml=a.e(70123).then(a.t.bind(a,70123,17)),this.example1={TypeScript:a.e(79766).then(a.t.bind(a,79766,17)),HTML:a.e(67112).then(a.t.bind(a,67112,17)),LESS:a.e(43475).then(a.t.bind(a,43475,17))},this.example2={TypeScript:a.e(77781).then(a.t.bind(a,77781,17)),HTML:a.e(72570).then(a.t.bind(a,72570,17)),LESS:a.e(49767).then(a.t.bind(a,49767,17))},this.lineVariants=["solid","dashed","none","hidden"],this.labelsXVariants=[[],["","25%","50%","100%"],["One","Two","Three"],["One",null,"","Two and a half","Three",null]],this.labelsYVariants=[[],["","25%","50%","100%"],["One","Two","Three"],["One","","Two and a half","Three"]],this.handlerVariants=[_.Fy,_.oG,t=>t%2?"dashed":"solid"],this.axisX=this.lineVariants[0],this.axisXLabels=this.labelsXVariants[0],this.axisY=this.lineVariants[0],this.axisYInset=!1,this.axisYLabels=this.labelsYVariants[0],this.axisYName="",this.axisYSecondaryInset=!1,this.axisYSecondaryLabels=this.labelsYVariants[0],this.axisYSecondaryName="",this.horizontalLines=0,this.horizontalLinesHandler=this.handlerVariants[0],this.verticalLines=0,this.verticalLinesHandler=this.handlerVariants[1]}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["example-tui-axes"]],decls:4,vars:0,consts:function(){let o,t,l,r,i,C,x,g,M,y,f,A,O,P,h,L,R,N,X;return o=$localize`:␟157063b95e7de3b711a5e65f8b1b4a66bf51a9a7␟3176053473328457908:Axes`,t=$localize`:␟299892581b7c29a4afe856bb50e83f932e7c19f9␟3749794859286359761:Just axes for charts`,l=$localize`:␟9b735478d27ada48a6cc734cb7f499ffe3b60f31␟5400608477820076858:Cool one`,r=$localize`:␟befa476ed5c37d3ed4be47fe5759c340c6e24cd4␟927609271953315702:With bars`,i=$localize`:␟f64e1f5d1e794dab4b787c26bf022a2c9898d1ef␟7040174970690647937: Axis X `,C=$localize`:␟2f8e23a3f6977505fbbb8b3213e5912e32a2188d␟5270458325684962839: Labels for X. Emptry string is empty stroke, ${"\ufffd#1\ufffd"}:START_TAG_CODE:null${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: — no stroke `,x=$localize`:␟2642d8e7bc40dbf7276fb69cb640c80ac1c07be9␟5140923464869546529: Axis Y `,g=$localize`:␟60800456eca99202fc6cebb2fc9f5a10a5e0a72d␟2837390181413385612: Inset of labels on axis Y `,M=$localize`:␟06d8e98f8b5258586ff187e97dae0d16518e9ab5␟2657129922321475589: Labels for Y `,y=$localize`:␟7e478ef44515adc35026c32852851c7f7d84d651␟4037762709948884159: Name of Y axis `,f=$localize`:␟ac60157a8311a55856019cafd6b36016eb669dab␟1884145993509521583: Inset labels for Y `,A=$localize`:␟83b47ed4c100d02f8d9266656e0a0cd4868829a1␟5391635047792570800: Secondary Y axis labels `,O=$localize`:␟264edf3e9d07bdae2defe9a9a8083e92d020d303␟1495535954616436734: Secondary Y axis name `,P=$localize`:␟b320bfbd957dcc40c0482581c996f149ec3ffbf5␟8249773395630076811: Horizontal lines number `,h=$localize`:␟36af86f2988f299294e7c3e39259c33da740851b␟7177151488130232990: Horizontal lines type handler `,L=$localize`:␟5495dd2570db74aef538977c664775059a1554c9␟6546346680735354696: Number of vertical lines `,R=$localize`:␟cf738f0fc8a03a466440318b0f21a2b9199b10c6␟1142374539392645294: Vertical lines type handler `,N=$localize`:␟44a035fbfcb4f3f0ef301785a4fea1e80b4afe55␟2561454909924995663: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiAxesModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,X=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header",o,"package","ADDON-CHARTS","type","components"],["pageTab",""],t,["id","advanced","heading",l,3,"content"],["id","bars","heading",r,3,"content"],[1,"axes",3,"axisX","axisXLabels","axisY","axisYInset","axisYLabels","axisYName","axisYSecondaryInset","axisYSecondaryLabels","axisYSecondaryName","horizontalLines","horizontalLinesHandler","verticalLines","verticalLinesHandler"],["documentationPropertyName","axisX","documentationPropertyMode","input","documentationPropertyType","TuiLineTypeT",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","axisXLabels","documentationPropertyMode","input","documentationPropertyType","ReadonlyArray<string | null>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","axisY","documentationPropertyMode","input","documentationPropertyType","TuiLineTypeT",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","axisYInset","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","axisYLabels","documentationPropertyMode","input","documentationPropertyType","readonly string[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","axisYName","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","axisYSecondaryInset","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","axisYSecondaryLabels","documentationPropertyMode","input","documentationPropertyType","readonly string[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","axisYSecondaryName","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","horizontalLines","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","horizontalLinesHandler","documentationPropertyMode","input","documentationPropertyType","TuiLineHandler",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","verticalLines","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","verticalLinesHandler","documentationPropertyMode","input","documentationPropertyType","TuiLineHandler",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],i,C,x,g,M,y,f,A,O,P,h,L,R,[1,"b-demo-steps"],N,["filename","myComponent.module.ts",3,"code"],X,["filename","myComponent.template.html",3,"code"]]},template:function(t,l){1&t&&(e.\u0275\u0275elementStart(0,"tui-doc-page",0),e.\u0275\u0275template(1,K,6,2,"ng-template",1),e.\u0275\u0275template(2,_e,16,33,"ng-template",1),e.\u0275\u0275template(3,me,10,2,"ng-template",1),e.\u0275\u0275elementEnd())},directives:[D.q,b.n,v.f,Y,m,B.F,d.v,Q.z,j.B,W.c],styles:[".axes[_ngcontent-%COMP%]{height:12.5rem}"],changeDetection:0}),n})(),ce=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[p.ez,u.Bz,_.Ep,_.dd,S.goS,S.cyX,$.wq,V.DC,E.fV,u.Bz.forChild((0,E.Ve)(de))]]}),n})()}}]);