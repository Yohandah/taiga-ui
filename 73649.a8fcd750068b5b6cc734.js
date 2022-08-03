"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[73649],{73649:(K,c,o)=>{o.r(c),o.d(c,{ExampleTuiAvatarModule:()=>j});var S=o(12057),d=o(23738),M=o(12021),_=o(46244),f=o(5696),p=o(38780),e=o(74788),v=o(88331),P=o(37159),y=o(57068),u=o(44124);let N=(()=>{class n{constructor(){this.avatar="https://ng-web-apis.github.io/dist/assets/images/web-api.svg"}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-avatar-example-1"]],decls:3,vars:2,consts:[[1,"tui-space_top-1",3,"avatarUrl"],["text","alex inkin",1,"tui-space_top-1"],["text","dmitry demensky","size","l",1,"tui-space_top-1",3,"rounded"]],template:function(t,i){1&t&&(e.\u0275\u0275element(0,"tui-avatar",0),e.\u0275\u0275element(1,"tui-avatar",1),e.\u0275\u0275element(2,"tui-avatar",2)),2&t&&(e.\u0275\u0275property("avatarUrl",i.avatar),e.\u0275\u0275advance(2),e.\u0275\u0275property("rounded",!0))},directives:[u.J],encapsulation:2,changeDetection:0}),n})(),R=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-avatar-example-2"]],decls:4,vars:3,consts:[["text","yuliya tsareva",1,"tui-space_top-1",3,"autoColor"],["text","alex inkin",1,"tui-space_top-1",3,"autoColor"],["text","dmitry demensky",1,"tui-space_top-1",3,"autoColor"],["text","evgeniy mamaev",1,"custom","tui-space_top-1"]],template:function(t,i){1&t&&(e.\u0275\u0275element(0,"tui-avatar",0),e.\u0275\u0275element(1,"tui-avatar",1),e.\u0275\u0275element(2,"tui-avatar",2),e.\u0275\u0275element(3,"tui-avatar",3)),2&t&&(e.\u0275\u0275property("autoColor",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("autoColor",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("autoColor",!0))},directives:[u.J],styles:[".custom[_ngcontent-%COMP%]{--tui-avatar-color: #fff;--tui-avatar-background: linear-gradient(to bottom right, #cd56c2, #6e48aa)}"],changeDetection:0}),n})(),x=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-avatar-example-3"]],features:[e.\u0275\u0275ProvidersFeature([(0,p.ugC)({size:"l",autoColor:!0,rounded:!0})])],decls:1,vars:0,consts:[["text","yuliya tsareva",1,"tui-space_top-1"]],template:function(t,i){1&t&&e.\u0275\u0275element(0,"tui-avatar",0)},directives:[u.J],encapsulation:2,changeDetection:0}),n})();var V=o(31823),h=o(23618),D=o(17023),$=o(76349);function F(n,a){if(1&n&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275i18n(1,2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"tui-doc-example",3),e.\u0275\u0275element(3,"tui-avatar-example-1"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"tui-doc-example",4),e.\u0275\u0275element(5,"tui-avatar-example-2"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"tui-doc-example",5),e.\u0275\u0275element(7,"tui-avatar-example-3"),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275property("content",t.example1),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",t.example2),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",t.example3)}}function L(n,a){1&n&&e.\u0275\u0275i18n(0,15)}function U(n,a){1&n&&e.\u0275\u0275i18n(0,16)}function I(n,a){1&n&&e.\u0275\u0275i18n(0,17)}function z(n,a){1&n&&e.\u0275\u0275i18n(0,18)}function J(n,a){1&n&&e.\u0275\u0275i18n(0,19)}function G(n,a){1&n&&e.\u0275\u0275text(0," Color of the text ")}function X(n,a){1&n&&e.\u0275\u0275text(0," Background ")}function b(n,a){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tui-doc-demo"),e.\u0275\u0275element(1,"tui-avatar",6),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"tui-doc-documentation"),e.\u0275\u0275template(3,L,1,0,"ng-template",7),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().autoColor=r}),e.\u0275\u0275template(4,U,1,0,"ng-template",8),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().avatarUrl=r}),e.\u0275\u0275template(5,I,1,0,"ng-template",9),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().rounded=r}),e.\u0275\u0275template(6,z,1,0,"ng-template",10),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().size=r}),e.\u0275\u0275template(7,J,1,0,"ng-template",11),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().text=r}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"tui-doc-documentation",12),e.\u0275\u0275template(9,G,1,0,"ng-template",13),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().color=r}),e.\u0275\u0275template(10,X,1,0,"ng-template",14),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().background=r}),e.\u0275\u0275elementEnd()}if(2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275styleProp("--tui-avatar-color",t.color)("--tui-avatar-background",t.background),e.\u0275\u0275property("avatarUrl",t.avatarUrl)("text",t.text)("rounded",t.rounded)("size",t.size)("autoColor",t.autoColor),e.\u0275\u0275advance(2),e.\u0275\u0275property("documentationPropertyValue",t.autoColor),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",t.avatarUrlVariants)("documentationPropertyValue",t.avatarUrl),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",t.rounded),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",t.sizeVariants)("documentationPropertyValue",t.size),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",t.text),e.\u0275\u0275advance(2),e.\u0275\u0275property("documentationPropertyValue",t.color),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",t.background)}}function B(n,a){if(1&n&&(e.\u0275\u0275elementStart(0,"ol",20),e.\u0275\u0275elementStart(1,"li"),e.\u0275\u0275elementStart(2,"p"),e.\u0275\u0275i18nStart(3,21),e.\u0275\u0275element(4,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(5,"tui-doc-code",22),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"li"),e.\u0275\u0275elementStart(7,"p"),e.\u0275\u0275i18n(8,23),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(9,"tui-doc-code",24),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"li"),e.\u0275\u0275elementStart(11,"p"),e.\u0275\u0275i18nStart(12,25),e.\u0275\u0275element(13,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(14,"tui-doc-code",22),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("code",t.exampleModule),e.\u0275\u0275advance(4),e.\u0275\u0275property("code",t.exampleHtml),e.\u0275\u0275advance(5),e.\u0275\u0275property("code",t.exampleOptions)}}let H=(()=>{class n{constructor(){this.exampleOptions=o.e(71297).then(o.t.bind(o,71297,17)),this.exampleModule=o.e(52352).then(o.t.bind(o,52352,17)),this.exampleHtml=o.e(95593).then(o.t.bind(o,95593,17)),this.example1={TypeScript:o.e(89885).then(o.t.bind(o,89885,17)),HTML:o.e(31119).then(o.t.bind(o,31119,17))},this.example2={TypeScript:o.e(72557).then(o.t.bind(o,72557,17)),HTML:o.e(74879).then(o.t.bind(o,74879,17))},this.example3={TypeScript:o.e(70634).then(o.t.bind(o,70634,17)),HTML:o.e(17696).then(o.t.bind(o,17696,17))},this.avatarUrlVariants=["https://ng-web-apis.github.io/dist/assets/images/web-api.svg"],this.avatarUrl=null,this.text="daenerys targaryen",this.rounded=!1,this.autoColor=!1,this.sizeVariants=["xs","s","m","l","xl","xxl"],this.size=this.sizeVariants[2],this.color="var(--tui-text-01)",this.background="var(--tui-secondary-active)"}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["example-avatar"]],decls:4,vars:0,consts:function(){let a,t,i,r,l,s,T,A,E,C,g,O;return a=$localize`:␟0812e0922281753776de81e397100e03cb85e62c␟354985861363080987:Use Avatar to view person or company. It can be photo, icon or first letters of name.`,t=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,i=$localize`:␟e93acd761801b3f2077278b282163a9c03283b8c␟5267754967054916445:Colors`,r=$localize`:␟24813b8a3e45f0b57136c18d003027262cfe2d1f␟8432562579042371182:Options`,l=$localize`:␟eafc1f8053cdb087893cc48f55a6cc52a818863e␟630069659234858085: Autocolor if there is no image `,s=$localize`:␟ed3fb1c3703f12853a737f89c76a7f712a51df66␟3492353892379571209: Avatar URL `,T=$localize`:␟6f3bd0a381b0f06876aa2784116206982c42c257␟8720720071780904257: Rounded mode `,A=$localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `,E=$localize`:␟32fcdad138fd1b5d1840a1723406b851f8db90b1␟3319915161488619622: Name (Avatar shows first letters of name if there is no image) `,C=$localize`:␟c586e5429efff808d191d3bce9465d7555d9c17d␟302743281526660294: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiAvatarModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,g=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,O=$localize`:␟32a70286ff0a610834fb31ecc76ac76efc7baa1d␟6990820332502485209: Optionally use the ${"\ufffd#13\ufffd"}:START_TAG_CODE:TUI_AVATAR_OPTIONS${"\ufffd/#13\ufffd"}:CLOSE_TAG_CODE: injection token to override the default options for the component. `,[["header","Avatar","package","KIT","type","components"],["pageTab",""],a,["id","base","heading",t,3,"content"],["id","autocolor","heading",i,3,"content"],["id","options","heading",r,3,"content"],[3,"avatarUrl","text","rounded","size","autoColor"],["documentationPropertyName","autoColor","documentationPropertyType","boolean","documentationPropertyMode","input",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","avatarUrl","documentationPropertyType","string | null","documentationPropertyMode","input",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","rounded","documentationPropertyType","boolean","documentationPropertyMode","input",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyType","TuiSizeXS | TuiSizeXXL","documentationPropertyMode","input",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","text","documentationPropertyType","string","documentationPropertyMode","input",3,"documentationPropertyValue","documentationPropertyValueChange"],["heading","CSS variables"],["documentationPropertyName","--tui-avatar-color","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","--tui-avatar-background","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],l,s,T,A,E,[1,"b-demo-steps"],C,["filename","myComponent.module.ts",3,"code"],g,["filename","myComponent.template.html",3,"code"],O]},template:function(t,i){1&t&&(e.\u0275\u0275elementStart(0,"tui-doc-page",0),e.\u0275\u0275template(1,F,8,3,"ng-template",1),e.\u0275\u0275template(2,b,11,18,"ng-template",1),e.\u0275\u0275template(3,B,15,3,"ng-template",1),e.\u0275\u0275elementEnd())},directives:[v.q,P.n,y.f,N,R,x,V.F,u.J,h.z,D.B,$.c],encapsulation:2,changeDetection:0}),n})(),j=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[p.JmR,S.ez,_.fV,p.Ltw,f.EIu,d.FormsModule,d.ReactiveFormsModule,M.Bz.forChild((0,_.Ve)(H))]]}),n})()}}]);