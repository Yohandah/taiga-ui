(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{uSPj:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiSliderModule",(function(){return B}));var o=n("2kYt"),r=n("nIj0"),a=n("sEIs"),i=n("SVIu"),l=n("dvRg"),m=n("EM62"),s=n("OZlg"),u=n("e0eB"),c=n("iyc4"),p=n("VONa");let d=(()=>{class e{constructor(){this.testValue=new r.FormControl}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-slider-example-1"]],decls:1,vars:2,consts:[[3,"formControl","max"]],template:function(e,t){1&e&&m["\u0275\u0275element"](0,"tui-slider",0),2&e&&m["\u0275\u0275property"]("formControl",t.testValue)("max",10)},directives:[p.a,r.NgControlStatus,r.FormControlDirective],encapsulation:2,changeDetection:0}),e})(),y=(()=>{class e{constructor(){this.testValue=new r.FormControl,this.keySteps=[[100/3*1,1e5],[100/3*2,3e5]]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-slider-example-2"]],decls:1,vars:6,consts:[[3,"formControl","keySteps","min","max","segments","steps"]],template:function(e,t){1&e&&m["\u0275\u0275element"](0,"tui-slider",0),2&e&&m["\u0275\u0275property"]("formControl",t.testValue)("keySteps",t.keySteps)("min",5e3)("max",1e6)("segments",3)("steps",3)},directives:[p.a,r.NgControlStatus,r.FormControlDirective],encapsulation:2,changeDetection:0}),e})();var f,V=n("EPR0"),C=n("yHor"),g=n("zGJC"),P=n("u8jZ");f=$localize`:␟aeb664c78563c11df7f40b74231ec865fc378e28␟7632745187572614377:Choose a value from a limited range`;const x=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`],h=["heading",$localize`:␟9fe22938b33e61823958a9ea05965fd05614d79d␟1124866631741983664:With separators`];function S(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"p"),m["\u0275\u0275i18n"](1,f),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](2,"tui-doc-example",2),m["\u0275\u0275i18nAttributes"](3,x),m["\u0275\u0275element"](4,"tui-slider-example-1"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](5,"tui-doc-example",3),m["\u0275\u0275i18nAttributes"](6,h),m["\u0275\u0275element"](7,"tui-slider-example-2"),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("content",e.example1),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("content",e.example2)}}function b(e,t){if(1&e&&m["\u0275\u0275element"](0,"tui-slider",13),2&e){const e=m["\u0275\u0275nextContext"](2);m["\u0275\u0275property"]("formControl",e.control)("min",e.min)("max",e.max)("steps",e.steps)("segments",e.segments)("pluralize",e.pluralize)("keySteps",e.keySteps)("size",e.size)}}var T,v,z,w,E,M,F,k,D,$;function A(e,t){1&e&&(m["\u0275\u0275i18nStart"](0,T),m["\u0275\u0275element"](1,"code"),m["\u0275\u0275i18nEnd"]())}function N(e,t){1&e&&m["\u0275\u0275i18n"](0,v)}function O(e,t){1&e&&m["\u0275\u0275i18n"](0,z)}function _(e,t){1&e&&m["\u0275\u0275i18n"](0,w)}function G(e,t){1&e&&m["\u0275\u0275i18n"](0,E)}function I(e,t){1&e&&m["\u0275\u0275i18n"](0,M)}function R(e,t){1&e&&m["\u0275\u0275i18n"](0,F)}function j(e,t){1&e&&m["\u0275\u0275i18n"](0,k)}function L(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"tui-doc-demo",4),m["\u0275\u0275template"](1,b,1,8,"ng-template"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](2,"tui-doc-documentation"),m["\u0275\u0275template"](3,A,2,0,"ng-template",5),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().disabled=t})),m["\u0275\u0275template"](4,N,1,0,"ng-template",6),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().min=t})),m["\u0275\u0275template"](5,O,1,0,"ng-template",7),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().max=t})),m["\u0275\u0275template"](6,_,1,0,"ng-template",8),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().pluralize=t})),m["\u0275\u0275template"](7,G,1,0,"ng-template",9),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().segments=t})),m["\u0275\u0275template"](8,I,1,0,"ng-template",10),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().steps=t})),m["\u0275\u0275template"](9,R,1,0,"ng-template",11),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().keySteps=t})),m["\u0275\u0275template"](10,j,1,0,"ng-template",12),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().size=t})),m["\u0275\u0275elementEnd"]()}if(2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275property"]("control",e.control),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("documentationPropertyValue",e.disabled),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",e.minVariants)("documentationPropertyValue",e.min),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",e.maxVariants)("documentationPropertyValue",e.max),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",e.pluralizeVariants)("documentationPropertyValue",e.pluralize),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",e.segmentsVariants)("documentationPropertyValue",e.segments),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",e.stepsVariants)("documentationPropertyValue",e.steps),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",e.keyStepsVariants)("documentationPropertyValue",e.keySteps),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",e.sizeVariants)("documentationPropertyValue",e.size)}}function H(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"ol",14),m["\u0275\u0275elementStart"](1,"li"),m["\u0275\u0275text"](2," Import an Angular module for forms and "),m["\u0275\u0275elementStart"](3,"code"),m["\u0275\u0275text"](4,"TuiSliderModule"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275text"](5," in the same module where you want to use our component: "),m["\u0275\u0275element"](6,"tui-doc-code",15),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](7,"li"),m["\u0275\u0275elementStart"](8,"p"),m["\u0275\u0275i18nStart"](9,D),m["\u0275\u0275element"](10,"code"),m["\u0275\u0275element"](11,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](12,"tui-doc-code",16),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](13,"li"),m["\u0275\u0275elementStart"](14,"p"),m["\u0275\u0275i18n"](15,$),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](16,"tui-doc-code",17),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](6),m["\u0275\u0275property"]("code",e.exampleImportModule),m["\u0275\u0275advance"](6),m["\u0275\u0275property"]("code",e.exampleDeclareForm),m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("code",e.exampleInsertTemplate)}}T=$localize`:␟31216ee7e86a9a777c7e1c7cad3dc3bb8dc54c35␟472633322147615044: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE:) `,v=$localize`:␟a11028ca3c10ed474edf5dbfa2754e26d3d18cd2␟5313959728516521310: Min value `,z=$localize`:␟e19aee5686b43d533c4778f15c66a64584c493d3␟7525448588827957289: Max value `,w=$localize`:␟fa2e6f7ce5d0f0f8e59f4919ffb6095e48d11be6␟3705851861311583144: Plural forms for labels `,E=$localize`:␟7d601e1c1a940ef8835249f19cb47d2311d8fd1e␟4941460931129258402: A number of visual segments `,M=$localize`:␟8dfc46111873255f9a00be9bbc894f8b5f38f108␟2083976673220646394: Number of actual discrete slider steps `,F=$localize`:␟2883d0ab4e0e0af2984d0424198392cd5a3d234d␟5861269790634284762: Anchor points of non-uniform format between value and position `,k=$localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `,D=$localize`:␟24bd9acf98b087a0155b1bc8707249be28559a1e␟3960939324467592851: Declare a form (${"[\ufffd#10\ufffd|\ufffd#11\ufffd]"}:START_TAG_CODE:FormGroup${"[\ufffd/#10\ufffd|\ufffd/#11\ufffd]"}:CLOSE_TAG_CODE:) or a control (${"[\ufffd#10\ufffd|\ufffd#11\ufffd]"}:START_TAG_CODE:FormControl${"[\ufffd/#10\ufffd|\ufffd/#11\ufffd]"}:CLOSE_TAG_CODE:) in your component: `,D=m["\u0275\u0275i18nPostprocess"](D),$=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let J=(()=>{class e{constructor(){this.exampleImportModule="import {FormsModule, ReactiveFormsModule} from '@angular/forms';\nimport {TuiSliderModule} from '@taiga-ui/kit';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        FormsModule,\n        ReactiveFormsModule,\n        TuiSliderModule\n    ],\n...\n",this.exampleInsertTemplate='<tui-slider [formControl]="control"\n            max="10"></tui-slider>\n\n<tui-slider [formControl]="testValue"\n            [max]="10"></tui-slider>\n\n',this.exampleDeclareForm="import {FormControl, FormGroup} from '@angular/forms';\n\n...\n\n@Component({\n    ...\n})\nexport class MyComponent {\n    testForm = new FormGroup({\n        testValue: new FormControl(0)\n    });\n}\n",this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-slider-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiSliderExample1 {\n    testValue = new FormControl();\n}\n",HTML:'<tui-slider [formControl]="testValue" [max]="10"></tui-slider>\n'},this.example2={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-slider-example-2',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiSliderExample2 {\n    readonly testValue = new FormControl();\n\n    keySteps = [\n        [(100 / 3) * 1, 100000],\n        [(100 / 3) * (1 + 1), 300000],\n    ];\n}\n",HTML:'<tui-slider\n    [formControl]="testValue"\n    [keySteps]="keySteps"\n    [min]="5000"\n    [max]="1000000"\n    [segments]="3"\n    [steps]="3"\n></tui-slider>\n'},this.control=new r.FormControl(8),this.sizeVariants=["s","m"],this.size=this.sizeVariants[1],this.minVariants=[0,1,5,7.77,5e3],this.min=this.minVariants[0],this.maxVariants=[10,100,1e4,1e6],this.max=this.maxVariants[0],this.segmentsVariants=[0,1,3,5,13],this.segments=this.segmentsVariants[0],this.stepsVariants=[0,3,4,10],this.steps=this.stepsVariants[0],this.pluralizeVariants=[["\u0433\u043e\u0434","\u0433\u043e\u0434\u0430","\u043b\u0435\u0442"],["\u0448\u0442","\u0448\u0442","\u0448\u0442"],["\u0433\u043e\u0434\u0430","\u043b\u0435\u0442","\u043b\u0435\u0442"],["\u20bd","\u20bd","\u20bd"]],this.pluralize=null,this.keyStepsVariants=[[[50,1e3]],[[100/3,1e5],[100/3*2,3e5]]],this.keySteps=null}get disabled(){return this.control.disabled}set disabled(e){e?this.control.disable():this.control.enable()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["example-slider"]],decls:4,vars:0,consts:[["header","Slider","package","KIT"],["pageTab",""],["id","base",3,"content",6,"heading"],["id","segments",3,"content",6,"heading"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","pluralize","documentationPropertyMode","input","documentationPropertyType","TuiPluralize",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","segments","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","steps","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","keySteps","documentationPropertyMode","input","documentationPropertyType","TuiKeySteps",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeS",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"formControl","min","max","steps","segments","pluralize","keySteps","size"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.component.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"tui-doc-page",0),m["\u0275\u0275template"](1,S,8,2,"ng-template",1),m["\u0275\u0275template"](2,L,11,16,"ng-template",1),m["\u0275\u0275template"](3,H,17,3,"ng-template",1),m["\u0275\u0275elementEnd"]())},directives:[s.a,u.a,c.a,d,y,V.a,C.a,g.a,p.a,r.NgControlStatus,r.FormControlDirective,P.a],encapsulation:2,changeDetection:0}),e})(),B=(()=>{class e{}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[l.TuiRadioListModule,l.TuiSliderModule,o.c,r.FormsModule,r.ReactiveFormsModule,...i.e,a.f.forChild(Object(i.n)(J))]]}),e})()}}]);