"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[39507],{39507:(B,d,t)=>{t.r(d),t.d(d,{ExampleTuiLineClampModule:()=>z});var L=t(12057),T=t(12021),c=t(46244),_=t(37267),r=t(38780),e=t(74788),f=t(88331),S=t(37159),h=t(57068),E=t(70329),s=t(80275);function O(n,i){1&n&&(e.\u0275\u0275elementStart(0,"div",3),e.\u0275\u0275text(1," Daenerys of the House Targaryen, the First of Her Name, The Unburnt, Queen of the Andals, the Rhoynar and the First Men, Queen of Meereen, Khaleesi of the Great Grass Sea, Protector of the Realm, Lady Regent of the Seven Kingdoms, Breaker of Chains and Mother of Dragons "),e.\u0275\u0275elementEnd())}let N=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-line-clamp-example-1"]],decls:4,vars:3,consts:[[1,"island"],[3,"content","lineHeight","linesLimit"],["content",""],[1,"hint"]],template:function(o,l){if(1&o&&(e.\u0275\u0275elementStart(0,"tui-island",0),e.\u0275\u0275element(1,"tui-line-clamp",1),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(2,O,2,0,"ng-template",null,2,e.\u0275\u0275templateRefExtractor)),2&o){const a=e.\u0275\u0275reference(3);e.\u0275\u0275advance(1),e.\u0275\u0275property("content",a)("lineHeight",20)("linesLimit",2)}},directives:[E.h,s.b],styles:["[_nghost-%COMP%]{display:block}.island[_ngcontent-%COMP%]{width:20rem}.hint[_ngcontent-%COMP%]{font:var(--tui-font-text-s)}"],changeDetection:0}),n})();var P=t(76189);let x=(()=>{class n{constructor(){this.linesLimit=2}toggle(){this.linesLimit=this.collpased?10:2}get collpased(){return 2===this.linesLimit}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-line-clamp-example-2"]],decls:4,vars:1,consts:[["size","l",1,"island"],["content","Daenerys of the House Targaryen, the First of Her Name, The Unburnt, Queen of the Andals, the Rhoynar and the First Men, Queen of Meereen, Khaleesi of the Great Grass Sea, Protector of the Realm, Lady Regent of the Seven Kingdoms, Breaker of Chains and Mother of Dragons",1,"clamp",3,"linesLimit"],["tuiButton","",1,"tui-space_top-4",3,"click"]],template:function(o,l){1&o&&(e.\u0275\u0275elementStart(0,"tui-island",0),e.\u0275\u0275element(1,"tui-line-clamp",1),e.\u0275\u0275elementStart(2,"button",2),e.\u0275\u0275listener("click",function(){return l.toggle()}),e.\u0275\u0275text(3," Toggle "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&o&&(e.\u0275\u0275advance(1),e.\u0275\u0275property("linesLimit",l.linesLimit))},directives:[E.h,s.b,P.v],styles:[".island[_ngcontent-%COMP%]{max-width:20rem}.clamp[_ngcontent-%COMP%]{pointer-events:none}"],changeDetection:0}),n})();var y=t(62579);function I(n,i){1&n&&e.\u0275\u0275text(0," Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ")}let R=(()=>{class n{constructor(o){this.windowRef=o}getDynamicLineHeight(o){return parseInt(this.windowRef.getComputedStyle(o).lineHeight)}getDynamicLineLimit(o){return Math.floor(o.offsetHeight/24)}}return n.\u0275fac=function(o){return new(o||n)(e.\u0275\u0275directiveInject(y.m9))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-line-clamp-example-3"]],decls:6,vars:3,consts:[[1,"example"],[1,"line-clamp-box"],["parent",""],[1,"line-clamp",3,"lineHeight","linesLimit","content"],["content",""]],template:function(o,l){if(1&o&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275elementStart(1,"div",1,2),e.\u0275\u0275element(3,"tui-line-clamp",3),e.\u0275\u0275template(4,I,1,0,"ng-template",null,4,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&o){const a=e.\u0275\u0275reference(2),m=e.\u0275\u0275reference(5);e.\u0275\u0275advance(3),e.\u0275\u0275property("lineHeight",l.getDynamicLineHeight(a))("linesLimit",l.getDynamicLineLimit(a))("content",m)}},directives:[s.b],styles:[".example[_ngcontent-%COMP%]{min-height:15rem;max-height:15rem}.line-clamp-box[_ngcontent-%COMP%]{height:5.75rem;min-height:1.5rem;resize:both;overflow:auto;padding:.5rem;border-radius:var(--tui-radius-l);border:1px solid var(--tui-base-03)}"],changeDetection:0}),n})();var v=t(31823),A=t(23618),D=t(17023),$=t(76349);function F(n,i){if(1&n&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275i18n(1,2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"tui-doc-example",3),e.\u0275\u0275element(3,"tui-line-clamp-example-1"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"tui-doc-example",4),e.\u0275\u0275element(5,"tui-line-clamp-example-2"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"tui-doc-example",5),e.\u0275\u0275element(7,"tui-line-clamp-example-3"),e.\u0275\u0275elementEnd()),2&n){const o=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275property("content",o.example1),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",o.example2),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",o.example3)}}function H(n,i){1&n&&(e.\u0275\u0275text(0," Lorem ipsum "),e.\u0275\u0275element(1,"br"),e.\u0275\u0275text(2," Gaudeamus igitur "),e.\u0275\u0275element(3,"br"),e.\u0275\u0275elementStart(4,"strong"),e.\u0275\u0275text(5,"Carpe diem"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(6,"br"),e.\u0275\u0275text(7," Veni, vidi, vici "))}function G(n,i){1&n&&e.\u0275\u0275i18n(0,11)}function b(n,i){1&n&&e.\u0275\u0275i18n(0,12)}function V(n,i){1&n&&e.\u0275\u0275i18n(0,13)}function U(n,i){if(1&n){const o=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tui-doc-demo"),e.\u0275\u0275element(1,"tui-line-clamp",6),e.\u0275\u0275template(2,H,8,0,"ng-template",null,7,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"tui-doc-documentation"),e.\u0275\u0275template(5,G,1,0,"ng-template",8),e.\u0275\u0275listener("documentationPropertyValueChange",function(a){return e.\u0275\u0275restoreView(o),e.\u0275\u0275nextContext().content=a}),e.\u0275\u0275template(6,b,1,0,"ng-template",9),e.\u0275\u0275listener("documentationPropertyValueChange",function(a){return e.\u0275\u0275restoreView(o),e.\u0275\u0275nextContext().lineHeight=a}),e.\u0275\u0275template(7,V,1,0,"ng-template",10),e.\u0275\u0275listener("documentationPropertyValueChange",function(a){return e.\u0275\u0275restoreView(o),e.\u0275\u0275nextContext().linesLimit=a}),e.\u0275\u0275elementEnd()}if(2&n){const o=e.\u0275\u0275reference(3),l=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275styleProp("width",100,"px"),e.\u0275\u0275property("content",l.content||o)("linesLimit",l.linesLimit)("lineHeight",l.lineHeight),e.\u0275\u0275advance(4),e.\u0275\u0275property("documentationPropertyValue",l.content),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",l.lineHeight),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",l.linesLimit)}}function J(n,i){if(1&n&&(e.\u0275\u0275elementStart(0,"ol",14),e.\u0275\u0275elementStart(1,"li"),e.\u0275\u0275elementStart(2,"p"),e.\u0275\u0275i18nStart(3,15),e.\u0275\u0275element(4,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(5,"tui-doc-code",16),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"li"),e.\u0275\u0275elementStart(7,"p"),e.\u0275\u0275i18n(8,17),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(9,"tui-doc-code",18),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&n){const o=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("code",o.exampleModule),e.\u0275\u0275advance(4),e.\u0275\u0275property("code",o.exampleHtml)}}let X=(()=>{class n{constructor(){this.linesLimit=1,this.lineHeight=24,this.content="",this.exampleModule=t.e(2925).then(t.t.bind(t,2925,17)),this.exampleHtml=t.e(78584).then(t.t.bind(t,78584,17)),this.example1={TypeScript:t.e(77322).then(t.bind(t,77322)),HTML:t.e(24576).then(t.t.bind(t,24576,17)),LESS:t.e(76162).then(t.t.bind(t,76162,17))},this.example2={TypeScript:t.e(96638).then(t.bind(t,96638)),HTML:t.e(78268).then(t.t.bind(t,78268,17)),LESS:t.e(74215).then(t.t.bind(t,74215,17))},this.example3={TypeScript:t.e(61161).then(t.bind(t,61161)),HTML:t.e(45867).then(t.t.bind(t,45867,17)),LESS:t.e(16696).then(t.t.bind(t,16696,17))}}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["example-tui-line-clamp"]],decls:4,vars:0,consts:function(){let i,o,l,a,m,C,u,M,g;return i=$localize`:␟63e34955ff24c5ac8963560ca1ab0861e66f3087␟9157867013566634412:Component cuts overflowed text with "..." and shows it by hover`,o=$localize`:␟ad75bb2791c6ac20f42eba727b4d5843bd2e2759␟6390623107955601371:Styles change`,l=$localize`:␟c3466e18890f12ffac5010471ddf34cd9d873f19␟3142541476125634673:Expanding`,a=$localize`:␟ea6a9a75f5c4c8b91eb116c27915e88ff3d6b0e6␟7735399201342576360:Resize parent container`,m=$localize`:␟ee84d3c7de163b96c6606f2d0af612463026e07d␟741899295101860675: Content `,C=$localize`:␟25d2954f348774dab7dc98536b7b1638b43eda20␟757303190321201319: Height of single line. It used to limit component's height. `,u=$localize`:␟5350d4ee26589c53830208851ec2ee9ff9c5bb38␟9220644262211067839: Number of visible lines `,M=$localize`:␟7e8642bb2c9a6cd3383644b763b6118025d81967␟2311692943199158011: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiLineClampModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,g=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","LineClamp","package","KIT","type","components"],["pageTab",""],i,["id","basic","heading",o,3,"content"],["id","expand","heading",l,3,"content"],["id","resize","heading",a,3,"content"],[3,"content","linesLimit","lineHeight"],["defaultExampleContent",""],["documentationPropertyName","content","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","lineHeight","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","linesLimit","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],m,C,u,[1,"b-demo-steps"],M,["filename","myComponent.module.ts",3,"code"],g,["filename","myComponent.template.html",3,"code"]]},template:function(o,l){1&o&&(e.\u0275\u0275elementStart(0,"tui-doc-page",0),e.\u0275\u0275template(1,F,8,3,"ng-template",1),e.\u0275\u0275template(2,U,8,8,"ng-template",1),e.\u0275\u0275template(3,J,10,2,"ng-template",1),e.\u0275\u0275elementEnd())},directives:[f.q,S.n,h.f,N,x,R,v.F,s.b,A.z,D.B,$.c],styles:[".text[_ngcontent-%COMP%]{max-width:60%}"],changeDetection:0}),n})(),z=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[L.ez,r.sp5,c.fV,T.Bz.forChild((0,c.Ve)(X)),_.fNO,r.ydP]]}),n})()}}]);