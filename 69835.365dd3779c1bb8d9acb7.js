"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[69835],{69835:(te,T,n)=>{n.r(T),n.d(T,{ExampleTuiLegendItemModule:()=>ee});var E=n(12057),N=n(12021),C=n(50179),h=n(55970),M=n(46244),s=n(82605),_=n(37267),v=n(89570),e=n(74788),y=n(88331),D=n(37159),P=n(57068),S=n(57464),u=n(16996),g=n(57416),R=n(61369);function G(o,a){if(1&o&&(e.\u0275\u0275element(0,"tui-money",5),e.\u0275\u0275elementStart(1,"div"),e.\u0275\u0275text(2,"Total"),e.\u0275\u0275elementEnd()),2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275property("singleColor",!0)("value",t.sum)}}function $(o,a){if(1&o){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tui-legend-item",6),e.\u0275\u0275listener("tuiHoveredChange",function(l){const m=e.\u0275\u0275restoreView(t).index;return e.\u0275\u0275nextContext().onHover(m,l)}),e.\u0275\u0275element(1,"tui-money",5),e.\u0275\u0275elementEnd()}if(2&o){const t=a.$implicit,i=a.index,l=e.\u0275\u0275nextContext();e.\u0275\u0275property("color",l.getColor(i))("text",t)("active",l.isItemActive(i)),e.\u0275\u0275advance(1),e.\u0275\u0275property("singleColor",!0)("value",l.value[i])}}let A=(()=>{class o{constructor(){this.activeItemIndex=NaN,this.value=[13769,12367,10172,3018,2592],this.sum=(0,s.Smz)(...this.value),this.labels=["Food","Cafe","Open Source","Taxi","Other"]}isItemActive(t){return this.activeItemIndex===t}onHover(t,i){this.activeItemIndex=i?t:0}getColor(t){return`var(--tui-chart-${t})`}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["tui-legend-item-example-1"]],decls:6,vars:4,consts:[[1,"wrapper"],[3,"value","content","activeItemIndex","activeItemIndexChange"],["content",""],[1,"legend"],["size","s","class","item",3,"color","text","active","tuiHoveredChange",4,"ngFor","ngForOf"],[3,"singleColor","value"],["size","s",1,"item",3,"color","text","active","tuiHoveredChange"]],template:function(t,i){if(1&t&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275elementStart(1,"tui-ring-chart",1),e.\u0275\u0275listener("activeItemIndexChange",function(r){return i.activeItemIndex=r}),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(2,G,3,2,"ng-template",null,2,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275elementStart(4,"div",3),e.\u0275\u0275template(5,$,2,5,"tui-legend-item",4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&t){const l=e.\u0275\u0275reference(3);e.\u0275\u0275advance(1),e.\u0275\u0275property("value",i.value)("content",l)("activeItemIndex",i.activeItemIndex),e.\u0275\u0275advance(4),e.\u0275\u0275property("ngForOf",i.labels)}},directives:[S.i,E.sg,u.o,g._,R.c],styles:["[_nghost-%COMP%]{--tui-chart-0: #c779d0;--tui-chart-1: #feac5e;--tui-chart-2: #ff5f6d;--tui-chart-3: #4bc0c8;--tui-chart-4: #9795cd}.wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}@media screen and (max-width: 37.4375em){.wrapper[_ngcontent-%COMP%]{flex-direction:column}}.legend[_ngcontent-%COMP%]{margin:0 0 0 2rem}@media screen and (max-width: 37.4375em){.legend[_ngcontent-%COMP%]{margin:2rem 0 0}}.item[_ngcontent-%COMP%]{margin:0 .5rem .75rem 0}"],changeDetection:0}),o})();var F=n(64762),V=n(79121),b=n(80868),H=n(34880);function z(o,a){if(1&o){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tui-legend-item",4,5),e.\u0275\u0275listener("click",function(){const r=e.\u0275\u0275restoreView(t).index;return e.\u0275\u0275nextContext().onClick(r)})("keydown.delete",function(){const r=e.\u0275\u0275restoreView(t).index;return e.\u0275\u0275nextContext().toggle(r)}),e.\u0275\u0275element(2,"tui-primitive-checkbox",6),e.\u0275\u0275element(3,"tui-money",7),e.\u0275\u0275elementStart(4,"tui-svg",8),e.\u0275\u0275listener("click.stop",function(){const r=e.\u0275\u0275restoreView(t).index;return e.\u0275\u0275nextContext().toggle(r)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()}if(2&o){const t=a.$implicit,i=a.index,l=e.\u0275\u0275reference(1),r=e.\u0275\u0275nextContext();e.\u0275\u0275property("color",r.getColor(i))("text",t)("disabled",!r.isEnabled(i)),e.\u0275\u0275advance(2),e.\u0275\u0275property("value",!l.disabled),e.\u0275\u0275advance(1),e.\u0275\u0275property("singleColor",!0)("value",r.data[i]),e.\u0275\u0275advance(1),e.\u0275\u0275classProp("disable_rotated",l.disabled)}}class c{constructor(a){this.alertService=a,this.enabled=new Array(5).fill(!0),this.data=[13769,12367,10172,3018,2592],this.sum=(0,s.Smz)(...this.data),this.labels=["Axes","Faxes","Taxes","Saxes","Other"]}get value(){return this.getValue(this.data,this.enabled)}isEnabled(a){return this.enabled[a]}toggle(a){this.enabled=this.enabled.map((t,i)=>i===a?!t:t)}onClick(a){this.isEnabled(a)?this.alertService.open(`Category spendings: ${(0,_.ufS)(this.data[a])} \u20bd`,{label:this.labels[a]}).subscribe():this.toggle(a)}getColor(a){return`var(--tui-chart-${a})`}getValue(a,t){return a.map((i,l)=>t[l]?i:0)}}c.\u0275fac=function(a){return new(a||c)(e.\u0275\u0275directiveInject(_.J9F))},c.\u0275cmp=e.\u0275\u0275defineComponent({type:c,selectors:[["tui-legend-item-example-2"]],decls:6,vars:2,consts:[[1,"wrapper"],["size","s",1,"chart",3,"value"],[1,"legend"],["class","item",3,"color","text","disabled","click","keydown.delete",4,"ngFor","ngForOf"],[1,"item",3,"color","text","disabled","click","keydown.delete"],["item",""],[3,"value"],[3,"singleColor","value"],["src","tuiIconCloseLarge",1,"disable",3,"click.stop"]],template:function(a,t){1&a&&(e.\u0275\u0275elementStart(0,"tui-notification"),e.\u0275\u0275text(1," In case you need to be able to toggle a category by separate action, for example, if clicking on it should expand it for more details\n"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"div",0),e.\u0275\u0275element(3,"tui-ring-chart",1),e.\u0275\u0275elementStart(4,"div",2),e.\u0275\u0275template(5,z,5,8,"tui-legend-item",3),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&a&&(e.\u0275\u0275advance(3),e.\u0275\u0275property("value",t.value),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngForOf",t.labels))},directives:[V.L,S.i,E.sg,g._,b.r,u.o,H.P],styles:["[_nghost-%COMP%]{--tui-chart-0: #c779d0;--tui-chart-1: #feac5e;--tui-chart-2: #ff5f6d;--tui-chart-3: #4bc0c8;--tui-chart-4: #9795cd}.chart[_ngcontent-%COMP%]{pointer-events:none}.wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;margin-top:1rem}@media screen and (max-width: 37.4375em){.wrapper[_ngcontent-%COMP%]{flex-direction:column}}.disable[_ngcontent-%COMP%]{transition-property:transform,color;transition-duration:.3s;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;margin-left:.25rem;will-change:transform;color:var(--tui-text-02);pointer-events:auto}.disable[_ngcontent-%COMP%]:hover{color:var(--tui-text-01)}.disable_rotated[_ngcontent-%COMP%]{transform:rotate(45deg)}.legend[_ngcontent-%COMP%]{margin:0 0 0 2rem;justify-content:center}@media screen and (max-width: 37.4375em){.legend[_ngcontent-%COMP%]{margin:2rem 0 0}}.item[_ngcontent-%COMP%]{margin:0 .5rem .75rem 0}"],changeDetection:0}),(0,F.gn)([s.UMq],c.prototype,"getValue",null);var J=n(31823),U=n(23618),X=n(17023),j=n(76349);function B(o,a){if(1&o&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275i18n(1,2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"tui-doc-example",3),e.\u0275\u0275element(3,"tui-legend-item-example-1"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"tui-doc-example",4),e.\u0275\u0275element(5,"tui-legend-item-example-2"),e.\u0275\u0275elementEnd()),2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275property("content",t.example1),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",t.example2)}}function W(o,a){1&o&&e.\u0275\u0275i18n(0,13)}function K(o,a){1&o&&e.\u0275\u0275i18n(0,14)}function Q(o,a){1&o&&e.\u0275\u0275i18n(0,15)}function Y(o,a){1&o&&e.\u0275\u0275i18n(0,16)}function Z(o,a){1&o&&e.\u0275\u0275i18n(0,17)}function w(o,a){if(1&o){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tui-doc-demo"),e.\u0275\u0275elementStart(1,"tui-legend-item",5),e.\u0275\u0275element(2,"tui-money",6),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"p"),e.\u0275\u0275i18nStart(4,7),e.\u0275\u0275element(5,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"tui-doc-documentation"),e.\u0275\u0275template(7,W,1,0,"ng-template",8),e.\u0275\u0275listener("documentationPropertyValueChange",function(l){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().active=l}),e.\u0275\u0275template(8,K,1,0,"ng-template",9),e.\u0275\u0275listener("documentationPropertyValueChange",function(l){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().color=l}),e.\u0275\u0275template(9,Q,1,0,"ng-template",10),e.\u0275\u0275listener("documentationPropertyValueChange",function(l){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().disabled=l}),e.\u0275\u0275template(10,Y,1,0,"ng-template",11),e.\u0275\u0275listener("documentationPropertyValueChange",function(l){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().size=l}),e.\u0275\u0275template(11,Z,1,0,"ng-template",12),e.\u0275\u0275listener("documentationPropertyValueChange",function(l){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().text=l}),e.\u0275\u0275elementEnd()}if(2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("active",t.active)("disabled",t.disabled)("color",t.color)("text",t.text)("size",t.size),e.\u0275\u0275advance(1),e.\u0275\u0275property("value",123456)("singleColor",!0),e.\u0275\u0275advance(5),e.\u0275\u0275property("documentationPropertyValue",t.active),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",t.colorVariants)("documentationPropertyValue",t.color),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",t.disabled),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",t.sizeVariants)("documentationPropertyValue",t.size),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",t.text)}}function k(o,a){if(1&o&&(e.\u0275\u0275elementStart(0,"ol",18),e.\u0275\u0275elementStart(1,"li"),e.\u0275\u0275elementStart(2,"p"),e.\u0275\u0275i18nStart(3,19),e.\u0275\u0275element(4,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(5,"tui-doc-code",20),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"li"),e.\u0275\u0275elementStart(7,"p"),e.\u0275\u0275i18n(8,21),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(9,"tui-doc-code",22),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("code",t.exampleModule),e.\u0275\u0275advance(4),e.\u0275\u0275property("code",t.exampleHtml)}}let q=(()=>{class o{constructor(){this.exampleModule=n.e(10957).then(n.t.bind(n,10957,17)),this.exampleHtml=n.e(56585).then(n.t.bind(n,56585,17)),this.example1={TypeScript:n.e(1406).then(n.bind(n,1406)),HTML:n.e(98867).then(n.t.bind(n,98867,17)),LESS:n.e(71724).then(n.t.bind(n,71724,17))},this.example2={TypeScript:n.e(80053).then(n.bind(n,80053)),HTML:n.e(65258).then(n.t.bind(n,65258,17)),LESS:n.e(34318).then(n.t.bind(n,34318,17))},this.text="Text inside",this.active=!1,this.sizeVariants=["s","m"],this.colorVariants=["var(--tui-support-04)","var(--tui-primary)","var(--tui-secondary)"],this.size=this.sizeVariants[0],this.disabled=!1,this.color=""}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["example-tui-legend-item"]],decls:4,vars:0,consts:function(){let a,t,i,l,r,m,p,f,x,O,L,I;return a=$localize`:␟c3d93006062f75d305b66685eaedb021d62229ea␟1570614066977040018:LegendItem`,t=$localize`:␟a984adcd40e5ae696a4b3641b5ebd09b4e409959␟6137055992947046886:A button for a legend of ring or pie charts`,i=$localize`:␟c5f83f5f1db2e4c97d30936845035e24a84e150c␟1963043015047934208:With a ring chart`,l=$localize`:␟5abc3c7f09f347eb78d681bbc90e16a25693d41b␟5802298788264875787:Toggling`,r=$localize`:␟40d57b3cc3417571e6bc8c7bf65f54c61f261bd0␟4646256599536584910:${"\ufffd#5\ufffd"}:START_TAG_CODE:tui-money${"\ufffd/#5\ufffd"}:CLOSE_TAG_CODE: is used to format currency and fraction `,m=$localize`:␟341b67b8b895f827a618e320d690de69209958c9␟4436855227670865152: Active state from outside `,p=$localize`:␟a6f48a1d27dd6e40e08f07ea7d1c2c39684112e5␟3329374499952540134: Indicator color `,f=$localize`:␟59f0d21ea503569692512c570b231cddeb9cd489␟4151472353635131004: Disabled item (i.e. hidden from the related chart) `,x=$localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `,O=$localize`:␟998a01f32aef31a3065d9bfa168ba0a037f2ce0a␟7702365343132985223: Text inside `,L=$localize`:␟9e13c6dcecd09092521578f08847018f409f0433␟7576166659982546507: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiBarModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,I=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header",a,"package","ADDON-CHARTS","type","components"],["pageTab",""],t,["id","ring","heading",i,3,"content"],["id","toggle","heading",l,3,"content"],[3,"active","disabled","color","text","size"],[3,"value","singleColor"],r,["documentationPropertyName","active","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","color","documentationPropertyMode","input","documentationPropertyType","TuiColor | string | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","disabled","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeS",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","value","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],m,p,f,x,O,[1,"b-demo-steps"],L,["filename","myComponent.module.ts",3,"code"],I,["filename","myComponent.template.html",3,"code"]]},template:function(t,i){1&t&&(e.\u0275\u0275elementStart(0,"tui-doc-page",0),e.\u0275\u0275template(1,B,6,2,"ng-template",1),e.\u0275\u0275template(2,w,12,14,"ng-template",1),e.\u0275\u0275template(3,k,10,2,"ng-template",1),e.\u0275\u0275elementEnd())},directives:[y.q,D.n,P.f,A,c,J.F,g._,u.o,U.z,X.B,j.c],encapsulation:2,changeDetection:0}),o})(),ee=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=e.\u0275\u0275defineInjector({imports:[[E.ez,C.Gn,C.R7,h.DC,_.fBj,_.EIu,_.HiG,v.wq,s.VE3,M.fV,N.Bz.forChild((0,M.Ve)(q))]]}),o})()}}]);