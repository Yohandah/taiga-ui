(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{S1s2:function(e,n,t){"use strict";t.r(n),t.d(n,"ExampleMathModule",(function(){return M}));var r=t("2kYt"),o=t("nIj0"),a=t("sEIs"),m=t("SVIu"),i=t("dvRg"),l=t("EM62"),u=t("OZlg"),p=t("e0eB"),c=t("iyc4"),s=t("l4xa"),d=t("YjIA");let f=(()=>{class e{constructor(){this.parametersForm=new o.FormGroup({value:new o.FormControl(1.005),precision:new o.FormControl(2)})}get rounded(){const{value:e,precision:n}=this.parametersForm.value;return Object(s.round)(e,n)}get floored(){const{value:e,precision:n}=this.parametersForm.value;return Object(s.floor)(e,n)}get ceiled(){const{value:e,precision:n}=this.parametersForm.value;return Object(s.ceil)(e,n)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-math-example-1"]],decls:12,vars:5,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2",3,"precision"],["formControlName","precision",1,"tui-space_top-2"]],template:function(e,n){1&e&&(l["\u0275\u0275elementStart"](0,"p"),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](2,"p"),l["\u0275\u0275text"](3),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](4,"p"),l["\u0275\u0275text"](5),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](6,"form",0),l["\u0275\u0275elementStart"](7,"div",1),l["\u0275\u0275elementStart"](8,"tui-input-number",2),l["\u0275\u0275text"](9," value "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](10,"tui-input-number",3),l["\u0275\u0275text"](11," precision "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate1"]("",n.rounded," = round(value, precision);"),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate1"]("",n.floored," = floor(value, precision);"),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate1"]("",n.ceiled," = ceil(value, precision);"),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("formGroup",n.parametersForm),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("precision",3))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,d.a,o.NgControlStatus,o.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:12px;width:220px}"],changeDetection:0}),e})(),v=(()=>{class e{constructor(){this.parametersForm=new o.FormGroup({value:new o.FormControl(13),fromInclude:new o.FormControl(5),toExclude:new o.FormControl(42)})}get ranged(){const{value:e,fromInclude:n,toExclude:t}=this.parametersForm.value;return Object(s.inRange)(e,n,t)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-math-example-2"]],decls:9,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],["formControlName","fromInclude",1,"tui-space_top-2"],["formControlName","toExclude",1,"tui-space_top-2"]],template:function(e,n){1&e&&(l["\u0275\u0275text"](0),l["\u0275\u0275elementStart"](1,"form",0),l["\u0275\u0275elementStart"](2,"div",1),l["\u0275\u0275elementStart"](3,"tui-input-number",2),l["\u0275\u0275text"](4," value "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](5,"tui-input-number",3),l["\u0275\u0275text"](6," fromInclude "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](7,"tui-input-number",4),l["\u0275\u0275text"](8," toExclude "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275textInterpolate1"]("",n.ranged," = inRange(value, fromInclude, toExclude); "),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("formGroup",n.parametersForm))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,d.a,o.NgControlStatus,o.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:12px;width:220px}"],changeDetection:0}),e})(),x=(()=>{class e{constructor(){this.parametersForm=new o.FormGroup({value:new o.FormControl(0),min:new o.FormControl(5),max:new o.FormControl(42)})}get normalized(){const{value:e,min:n,max:t}=this.parametersForm.value;return Object(s.normalizeToIntNumber)(e,n,t)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-math-example-3"]],decls:9,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],["formControlName","min",1,"tui-space_top-2"],["formControlName","max",1,"tui-space_top-2"]],template:function(e,n){1&e&&(l["\u0275\u0275text"](0),l["\u0275\u0275elementStart"](1,"form",0),l["\u0275\u0275elementStart"](2,"div",1),l["\u0275\u0275elementStart"](3,"tui-input-number",2),l["\u0275\u0275text"](4," value "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](5,"tui-input-number",3),l["\u0275\u0275text"](6," min "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](7,"tui-input-number",4),l["\u0275\u0275text"](8," max "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275textInterpolate1"]("",n.normalized," = normalizeToIntNumber(value, min, max); "),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("formGroup",n.parametersForm))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,d.a,o.NgControlStatus,o.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:12px;width:220px}"],changeDetection:0}),e})(),g=(()=>{class e{constructor(){this.parametersForm=new o.FormGroup({value:new o.FormControl(3),quantum:new o.FormControl(2)})}get quantized(){const{value:e,quantum:n}=this.parametersForm.value;return Object(s.quantize)(e,n)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-math-example-4"]],decls:7,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],["formControlName","quantum",1,"tui-space_top-2"]],template:function(e,n){1&e&&(l["\u0275\u0275text"](0),l["\u0275\u0275elementStart"](1,"form",0),l["\u0275\u0275elementStart"](2,"div",1),l["\u0275\u0275elementStart"](3,"tui-input-number",2),l["\u0275\u0275text"](4," value "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](5,"tui-input-number",3),l["\u0275\u0275text"](6," quantum "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275textInterpolate1"]("",n.quantized," = quantize(value, quantum); "),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("formGroup",n.parametersForm))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,d.a,o.NgControlStatus,o.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:12px;width:220px}"],changeDetection:0}),e})(),b=(()=>{class e{constructor(){this.parametersForm=new o.FormGroup({value:new o.FormControl(0),min:new o.FormControl(5),max:new o.FormControl(42)})}get clamped(){const{value:e,min:n,max:t}=this.parametersForm.value;return Object(s.clamp)(e,n,t)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-math-example-5"]],decls:9,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],["formControlName","min",1,"tui-space_top-2"],["formControlName","max",1,"tui-space_top-2"]],template:function(e,n){1&e&&(l["\u0275\u0275text"](0),l["\u0275\u0275elementStart"](1,"form",0),l["\u0275\u0275elementStart"](2,"div",1),l["\u0275\u0275elementStart"](3,"tui-input-number",2),l["\u0275\u0275text"](4," value "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](5,"tui-input-number",3),l["\u0275\u0275text"](6," min "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](7,"tui-input-number",4),l["\u0275\u0275text"](8," max "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275textInterpolate1"]("",n.clamped," = clamp(value, min, max); "),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("formGroup",n.parametersForm))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,d.a,o.NgControlStatus,o.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:12px;width:220px}"],changeDetection:0}),e})();var C=t("u8jZ");const h=["header",$localize`:␟eef2307cf678cdf74d7144079256b7fc344c4950␟5686247209877234159:Math utils`],F=["pageTab",$localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`];var w;w=$localize`:␟dd7f17d22638f1551ac688f17563777ddf34163b␟5211598598885509667:A set of utils to calculate math`;const S=["description",$localize`:␟49e3fcef24f18647990d6a9fa1ba78c9f3b862ff␟3234087131078550251:round, floor and ceil with fixed common problems of the native implementation`],E=["description",$localize`:␟5fcae35432bf500967c987df7ee13cfd897f95ca␟984110598713888465:Checks if the value is in range`],N=["description",$localize`:␟5756cf697456ca17c1bfcfce7ab2da2a2976bbcb␟6385777968328902844:Normalizes any number to an integer within inclusive range`],_=["description",$localize`:␟1fa93f4bf5540e71f14d1c49c60f0aa77cccd7d9␟7695262008739590886:Rounds a number to the closest value in a fixed discrete series`],y=["description",$localize`:␟3788fc82353479c593b85fecef9b30b97b44c431␟2743889011977351178:Clamps a value between two inclusive limits`];function G(e,n){if(1&e&&(l["\u0275\u0275elementStart"](0,"p"),l["\u0275\u0275i18n"](1,w),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](2,"tui-doc-example",3),l["\u0275\u0275i18nAttributes"](3,S),l["\u0275\u0275element"](4,"tui-math-example-1"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](5,"tui-doc-example",4),l["\u0275\u0275i18nAttributes"](6,E),l["\u0275\u0275element"](7,"tui-math-example-2"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](8,"tui-doc-example",5),l["\u0275\u0275i18nAttributes"](9,N),l["\u0275\u0275element"](10,"tui-math-example-3"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](11,"tui-doc-example",6),l["\u0275\u0275i18nAttributes"](12,_),l["\u0275\u0275element"](13,"tui-math-example-4"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](14,"tui-doc-example",7),l["\u0275\u0275i18nAttributes"](15,y),l["\u0275\u0275element"](16,"tui-math-example-5"),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("content",e.example1),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("content",e.example2),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("content",e.example3),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("content",e.example4),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("content",e.example5)}}var z;function I(e,n){if(1&e&&(l["\u0275\u0275elementStart"](0,"ol",8),l["\u0275\u0275elementStart"](1,"li"),l["\u0275\u0275elementStart"](2,"p"),l["\u0275\u0275i18n"](3,z),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](4,"tui-doc-code",9),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("code",e.importComponentExample)}}z=$localize`:␟331439c9b8ee5b975fc037bbc742a75012cb302f␟5059560669993049040:Import into component and use:`;let T=(()=>{class e{constructor(){this.importComponentExample="import {clamp} from '@taiga-ui/cdk';\n\n...\n    clamped = clamp(value, min, max)\n...\n",this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {ceil, floor, round} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-math-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMathExample1 {\n    parametersForm = new FormGroup({\n        value: new FormControl(1.005),\n        precision: new FormControl(2),\n    });\n\n    get rounded(): number {\n        const {value, precision} = this.parametersForm.value;\n\n        return round(value, precision);\n    }\n\n    get floored(): number {\n        const {value, precision} = this.parametersForm.value;\n\n        return floor(value, precision);\n    }\n\n    get ceiled(): number {\n        const {value, precision} = this.parametersForm.value;\n\n        return ceil(value, precision);\n    }\n}\n",HTML:'<p>{{ rounded }} = round(value, precision);</p>\n<p>{{ floored }} = floor(value, precision);</p>\n<p>{{ ceiled }} = ceil(value, precision);</p>\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-input-number\n            formControlName="value"\n            class="tui-space_top-2"\n            [precision]="3"\n        >\n            value\n        </tui-input-number>\n        <tui-input-number formControlName="precision" class="tui-space_top-2">\n            precision\n        </tui-input-number>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 12px;\n    width: 220px;\n}\n"},this.example2={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {inRange} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-math-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMathExample2 {\n    parametersForm = new FormGroup({\n        value: new FormControl(13),\n        fromInclude: new FormControl(5),\n        toExclude: new FormControl(42),\n    });\n\n    get ranged(): boolean {\n        const {value, fromInclude, toExclude} = this.parametersForm.value;\n\n        return inRange(value, fromInclude, toExclude);\n    }\n}\n",HTML:'{{ ranged }} = inRange(value, fromInclude, toExclude);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-input-number formControlName="value" class="tui-space_top-2">\n            value\n        </tui-input-number>\n        <tui-input-number formControlName="fromInclude" class="tui-space_top-2">\n            fromInclude\n        </tui-input-number>\n        <tui-input-number formControlName="toExclude" class="tui-space_top-2">\n            toExclude\n        </tui-input-number>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 12px;\n    width: 220px;\n}\n"},this.example3={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {normalizeToIntNumber} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-math-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMathExample3 {\n    parametersForm = new FormGroup({\n        value: new FormControl(0),\n        min: new FormControl(5),\n        max: new FormControl(42),\n    });\n\n    get normalized(): number {\n        const {value, min, max} = this.parametersForm.value;\n\n        return normalizeToIntNumber(value, min, max);\n    }\n}\n",HTML:'{{ normalized }} = normalizeToIntNumber(value, min, max);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-input-number formControlName="value" class="tui-space_top-2">\n            value\n        </tui-input-number>\n        <tui-input-number formControlName="min" class="tui-space_top-2">\n            min\n        </tui-input-number>\n        <tui-input-number formControlName="max" class="tui-space_top-2">\n            max\n        </tui-input-number>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 12px;\n    width: 220px;\n}\n"},this.example4={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {quantize} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-math-example-4',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMathExample4 {\n    parametersForm = new FormGroup({\n        value: new FormControl(3),\n        quantum: new FormControl(2),\n    });\n\n    get quantized(): number {\n        const {value, quantum} = this.parametersForm.value;\n\n        return quantize(value, quantum);\n    }\n}\n",HTML:'{{ quantized }} = quantize(value, quantum);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-input-number formControlName="value" class="tui-space_top-2">\n            value\n        </tui-input-number>\n        <tui-input-number formControlName="quantum" class="tui-space_top-2">\n            quantum\n        </tui-input-number>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 12px;\n    width: 220px;\n}\n"},this.example5={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {clamp} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-math-example-5',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMathExample5 {\n    parametersForm = new FormGroup({\n        value: new FormControl(0),\n        min: new FormControl(5),\n        max: new FormControl(42),\n    });\n\n    get clamped(): number {\n        const {value, min, max} = this.parametersForm.value;\n\n        return clamp(value, min, max);\n    }\n}\n",HTML:'{{ clamped }} = clamp(value, min, max);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-input-number formControlName="value" class="tui-space_top-2">\n            value\n        </tui-input-number>\n        <tui-input-number formControlName="min" class="tui-space_top-2">\n            min\n        </tui-input-number>\n        <tui-input-number formControlName="max" class="tui-space_top-2">\n            max\n        </tui-input-number>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 12px;\n    width: 220px;\n}\n"}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["example-math"]],decls:5,vars:0,consts:[["package","CDK",6,"header"],["pageTab",""],[6,"pageTab"],["id","round","heading","round",3,"content",6,"description"],["id","inRange","heading","inRange",3,"content",6,"description"],["id","normalizeToIntNumber","heading","normalizeToIntNumber",3,"content",6,"description"],["id","quantize","heading","quantize",3,"content",6,"description"],["id","clamp","heading","clamp",3,"content",6,"description"],[1,"b-demo-steps"],["filename","myComponent.component.ts",3,"code"]],template:function(e,n){1&e&&(l["\u0275\u0275elementStart"](0,"tui-doc-page",0),l["\u0275\u0275i18nAttributes"](1,h),l["\u0275\u0275template"](2,G,17,5,"ng-template",1),l["\u0275\u0275template"](3,I,5,1,"ng-template",2),l["\u0275\u0275i18nAttributes"](4,F),l["\u0275\u0275elementEnd"]())},directives:[u.a,p.a,c.a,f,v,x,g,b,C.a],encapsulation:2,changeDetection:0}),e})(),M=(()=>{class e{}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(n){return new(n||e)},imports:[[r.c,i.TuiInputNumberModule,o.FormsModule,o.ReactiveFormsModule,...m.e,a.f.forChild(Object(m.n)(T))]]}),e})()}}]);