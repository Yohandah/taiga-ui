(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{eg8U:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleFormatModule",(function(){return U}));var r=n("2kYt"),o=n("nIj0"),a=n("sEIs"),m=n("SVIu"),i=n("Qq0t"),p=n("dvRg"),l=n("EM62"),s=n("OZlg"),c=n("e0eB"),u=n("iyc4"),d=n("l4xa"),f=n("YjIA");let g=(()=>{class e{constructor(){this.parametersForm=new o.FormGroup({value:new o.FormControl(11)})}get px(){const{value:e}=this.parametersForm.value;return Object(d.px)(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-format-example-1"]],decls:5,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"]],template:function(e,t){1&e&&(l["\u0275\u0275text"](0),l["\u0275\u0275elementStart"](1,"form",0),l["\u0275\u0275elementStart"](2,"div",1),l["\u0275\u0275elementStart"](3,"tui-input-number",2),l["\u0275\u0275text"](4," value "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275textInterpolate1"]("'",t.px,"' = px(value); "),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,f.a,o.NgControlStatus,o.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:12px;width:220px}"],changeDetection:0}),e})();var x=n("GdrL");let C=(()=>{class e{constructor(){this.parametersForm=new o.FormGroup({sourceString:new o.FormControl("\u0434\u0440\u0443\u0433!"),minResultLength:new o.FormControl(21),padString:new o.FormControl("\u043f\u0440\u0438\u0432\u0435\u0442, ")})}get paddedStart(){const{sourceString:e,minResultLength:t,padString:n}=this.parametersForm.value;return Object(d.padStart)(e||"",t||0,n||" ")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-format-example-2"]],decls:9,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","sourceString",1,"tui-space_top-2"],["formControlName","minResultLength",1,"tui-space_top-2"],["formControlName","padString",1,"tui-space_top-2"]],template:function(e,t){1&e&&(l["\u0275\u0275text"](0),l["\u0275\u0275elementStart"](1,"form",0),l["\u0275\u0275elementStart"](2,"div",1),l["\u0275\u0275elementStart"](3,"tui-input",2),l["\u0275\u0275text"](4," sourceString "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](5,"tui-input-number",3),l["\u0275\u0275text"](6," minResultLength "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](7,"tui-input",4),l["\u0275\u0275text"](8," padString "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275textInterpolate1"]("",t.paddedStart," = padStart(sourceString, minResultLength, padString); "),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,x.a,o.NgControlStatus,o.FormControlName,f.a],styles:[".parameters[_ngcontent-%COMP%]{margin-top:12px;width:220px}"],changeDetection:0}),e})();var h=n("T8fS"),S=n("TjIJ"),v=n("fP8s"),y=n("OWJi");function F(e,t){if(1&e&&l["\u0275\u0275element"](0,"tui-data-list-wrapper",4),2&e){const e=l["\u0275\u0275nextContext"]();l["\u0275\u0275property"]("items",e.items)}}let b=(()=>{class e{constructor(){this.items=["USD","RUB","643","KZT","051","KRW","CHF"],this.parametersForm=new o.FormGroup({currency:new o.FormControl(null)})}get currency(){const{currency:e}=this.parametersForm.value;return Object(h.getCurrencySymbol)(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-format-example-3"]],decls:6,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","currency",1,"tui-space_top-2"],[3,"items",4,"tuiDataList"],[3,"items"]],template:function(e,t){1&e&&(l["\u0275\u0275text"](0),l["\u0275\u0275elementStart"](1,"form",0),l["\u0275\u0275elementStart"](2,"div",1),l["\u0275\u0275elementStart"](3,"tui-select",2),l["\u0275\u0275text"](4," currency "),l["\u0275\u0275template"](5,F,1,1,"tui-data-list-wrapper",3),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275textInterpolate1"]("",t.currency," = getCurrencySymbol(currency); "),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,S.a,o.NgControlStatus,o.FormControlName,v.a,y.a],styles:[".parameters[_ngcontent-%COMP%]{margin-top:12px;width:220px}"],changeDetection:0}),e})(),w=(()=>{class e{constructor(){this.parametersForm=new o.FormGroup({value:new o.FormControl("roman sEdOv")})}get capitalized(){const{value:e}=this.parametersForm.value;return Object(i.capitalize)(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-format-example-4"]],decls:5,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"]],template:function(e,t){1&e&&(l["\u0275\u0275text"](0),l["\u0275\u0275elementStart"](1,"form",0),l["\u0275\u0275elementStart"](2,"div",1),l["\u0275\u0275elementStart"](3,"tui-input",2),l["\u0275\u0275text"](4," value "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275textInterpolate1"]("'",t.capitalized,"' = capitalize(value); "),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,x.a,o.NgControlStatus,o.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:12px;width:220px}"],changeDetection:0}),e})(),E=(()=>{class e{constructor(){this.parametersForm=new o.FormGroup({value:new o.FormControl("+79991234567"),countryCode:new o.FormControl("+7"),phoneMask:new o.FormControl("### ###-##-##")})}get formattedPhone(){const{value:e,countryCode:t,phoneMask:n}=this.parametersForm.value;return Object(i.formatPhone)(e,t,n)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-format-example-5"]],decls:9,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],["formControlName","countryCode",1,"tui-space_top-2"],["formControlName","phoneMask",1,"tui-space_top-2"]],template:function(e,t){1&e&&(l["\u0275\u0275text"](0),l["\u0275\u0275elementStart"](1,"form",0),l["\u0275\u0275elementStart"](2,"div",1),l["\u0275\u0275elementStart"](3,"tui-input",2),l["\u0275\u0275text"](4," value "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](5,"tui-input",3),l["\u0275\u0275text"](6," countryCode "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](7,"tui-input",4),l["\u0275\u0275text"](8," phoneMask "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275textInterpolate1"]("'",t.formattedPhone,"' = formatPhone(value, countryCode, phoneMask); "),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,x.a,o.NgControlStatus,o.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:12px;width:220px}"],changeDetection:0}),e})();var _=n("u8jZ");const G=["header",$localize`:␟8b68cb0e9623325effd2712982bfc6c2ddc96d58␟5358165867706649494:Format utils`],N=["pageTab",$localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`];var M;M=$localize`:␟1da832a39ea4c0c3bd7976d78c971ebce6435c13␟1341457636714080363:A set of format utils`;const D=["description",$localize`:␟8603e981f7ca02a7bf59688e4767351180b4250d␟5245623836371299072:Adds 'px' to a number`],T=["description",$localize`:␟7d1831d06991cb25671ca5b74e6c0327bbf87280␟1473019084371139706:Adds a fillter to a string`],L=["description",$localize`:␟f58552f0761b83792b2492e1439aa12357c39d15␟7442713877787930163:Returns a currency symbol from its three letter code or ISO 4217`],k=["description",$localize`:␟08b8bd768a1f3b92b5342f011fc4194c36252dca␟1815937469662675044:Capitalizes every work in a string`],z=["description",$localize`:␟b945a41118e9fa647ee7e77517ecf6f5b69643d2␟1504114262974304913:Formats a phone number with separators`];function R(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"p"),l["\u0275\u0275i18n"](1,M),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](2,"tui-doc-example",3),l["\u0275\u0275i18nAttributes"](3,D),l["\u0275\u0275element"](4,"tui-format-example-1"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](5,"tui-doc-example",4),l["\u0275\u0275i18nAttributes"](6,T),l["\u0275\u0275element"](7,"tui-format-example-2"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](8,"tui-doc-example",5),l["\u0275\u0275i18nAttributes"](9,L),l["\u0275\u0275element"](10,"tui-format-example-3"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](11,"tui-doc-example",6),l["\u0275\u0275i18nAttributes"](12,k),l["\u0275\u0275element"](13,"tui-format-example-4"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](14,"tui-doc-example",7),l["\u0275\u0275i18nAttributes"](15,z),l["\u0275\u0275element"](16,"tui-format-example-5"),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("content",e.example1),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("content",e.example2),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("content",e.example3),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("content",e.example4),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("content",e.example5)}}var O;function P(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"ol",8),l["\u0275\u0275elementStart"](1,"li"),l["\u0275\u0275elementStart"](2,"p"),l["\u0275\u0275i18n"](3,O),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](4,"tui-doc-code",9),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("code",e.importComponentExample)}}O=$localize`:␟331439c9b8ee5b975fc037bbc742a75012cb302f␟5059560669993049040:Import into component and use:`;let I=(()=>{class e{constructor(){this.importComponentExample="import {getCurrencySymbol} from '@taiga-ui/kit';\n\n...\n    currency = getCurrencySymbol(currency);\n...\n",this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {px} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-format-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFormatExample1 {\n    parametersForm = new FormGroup({\n        value: new FormControl(11),\n    });\n\n    get px(): string {\n        const {value} = this.parametersForm.value;\n\n        return px(value);\n    }\n}\n",HTML:'\'{{ px }}\' = px(value);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-input-number formControlName="value" class="tui-space_top-2">\n            value\n        </tui-input-number>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 12px;\n    width: 220px;\n}\n"},this.example2={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {padStart} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-format-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFormatExample2 {\n    parametersForm = new FormGroup({\n        sourceString: new FormControl('\u0434\u0440\u0443\u0433!'),\n        minResultLength: new FormControl(21),\n        padString: new FormControl('\u043f\u0440\u0438\u0432\u0435\u0442, '),\n    });\n\n    get paddedStart(): string {\n        const {sourceString, minResultLength, padString} = this.parametersForm.value;\n\n        return padStart(sourceString || '', minResultLength || 0, padString || ' ');\n    }\n}\n",HTML:'{{ paddedStart }} = padStart(sourceString, minResultLength, padString);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-input formControlName="sourceString" class="tui-space_top-2">\n            sourceString\n        </tui-input>\n        <tui-input-number\n            formControlName="minResultLength"\n            class="tui-space_top-2"\n        >\n            minResultLength\n        </tui-input-number>\n        <tui-input formControlName="padString" class="tui-space_top-2">\n            padString\n        </tui-input>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 12px;\n    width: 220px;\n}\n"},this.example3={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {getCurrencySymbol} from '@taiga-ui/addon-commerce';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-format-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFormatExample3 {\n    readonly items = ['USD', 'RUB', '643', 'KZT', '051', 'KRW', 'CHF'];\n\n    parametersForm = new FormGroup({\n        currency: new FormControl(null),\n    });\n\n    get currency(): string | null {\n        const {currency} = this.parametersForm.value;\n\n        return getCurrencySymbol(currency);\n    }\n}\n",HTML:'{{ currency }} = getCurrencySymbol(currency);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-select formControlName="currency" class="tui-space_top-2">\n            currency\n            <tui-data-list-wrapper\n                *tuiDataList\n                [items]="items"\n            ></tui-data-list-wrapper>\n        </tui-select>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 12px;\n    width: 220px;\n}\n"},this.example4={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {capitalize} from '@taiga-ui/core';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-format-example-4',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFormatExample4 {\n    parametersForm = new FormGroup({\n        value: new FormControl('roman sEdOv'),\n    });\n\n    get capitalized(): string {\n        const {value} = this.parametersForm.value;\n\n        return capitalize(value);\n    }\n}\n",HTML:'\'{{ capitalized }}\' = capitalize(value);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-input formControlName="value" class="tui-space_top-2">\n            value\n        </tui-input>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 12px;\n    width: 220px;\n}\n"},this.example5={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {formatPhone} from '@taiga-ui/core';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-format-example-5',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFormatExample5 {\n    parametersForm = new FormGroup({\n        value: new FormControl('+79991234567'),\n        countryCode: new FormControl('+7'),\n        phoneMask: new FormControl('### ###-##-##'),\n    });\n\n    get formattedPhone(): string {\n        const {value, countryCode, phoneMask} = this.parametersForm.value;\n\n        return formatPhone(value, countryCode, phoneMask);\n    }\n}\n",HTML:'\'{{ formattedPhone }}\' = formatPhone(value, countryCode, phoneMask);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-input formControlName="value" class="tui-space_top-2">\n            value\n        </tui-input>\n        <tui-input formControlName="countryCode" class="tui-space_top-2">\n            countryCode\n        </tui-input>\n        <tui-input formControlName="phoneMask" class="tui-space_top-2">\n            phoneMask\n        </tui-input>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 12px;\n    width: 220px;\n}\n"}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["example-format"]],decls:5,vars:0,consts:[["package","CDK / CORE",6,"header"],["pageTab",""],[6,"pageTab"],["id","px","heading","px",3,"content",6,"description"],["id","padStart","heading","padStart",3,"content",6,"description"],["id","getCurrencySymbol","heading","getCurrencySymbol",3,"content",6,"description"],["id","capitalize","heading","capitalize",3,"content",6,"description"],["id","formatPhone","heading","formatPhone",3,"content",6,"description"],[1,"b-demo-steps"],["filename","myComponent.component.ts",3,"code"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"tui-doc-page",0),l["\u0275\u0275i18nAttributes"](1,G),l["\u0275\u0275template"](2,R,17,5,"ng-template",1),l["\u0275\u0275template"](3,P,5,1,"ng-template",2),l["\u0275\u0275i18nAttributes"](4,N),l["\u0275\u0275elementEnd"]())},directives:[s.a,c.a,u.a,g,C,b,w,E,_.a],encapsulation:2,changeDetection:0}),e})(),U=(()=>{class e{}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.c,p.TuiInputNumberModule,o.FormsModule,o.ReactiveFormsModule,p.TuiInputModule,p.TuiSelectModule,i.TuiDataListModule,p.TuiDataListWrapperModule,...m.e,a.f.forChild(Object(m.n)(I))]]}),e})()}}]);