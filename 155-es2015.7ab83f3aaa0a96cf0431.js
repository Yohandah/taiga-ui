(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{G3iW:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleMiscellaneousModule",(function(){return k}));var a=n("2kYt"),r=n("nIj0"),o=n("sEIs"),s=n("SVIu"),i=n("Qq0t"),l=n("dvRg"),m=n("EM62"),c=n("OZlg"),p=n("e0eB"),u=n("iyc4"),d=n("l4xa");let f=(()=>{class e{get assertResult(){const e=5===(new Date).getDay();return d.tuiAssert.assert(e,"\u0421\u0435\u0433\u043e\u0434\u043d\u044f \u043d\u0435 \u043f\u044f\u0442\u043d\u0438\u0446\u0430"),e?"\u0412 \u043a\u043e\u043d\u0441\u043e\u043b\u044c \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0432\u044b\u0432\u0435\u0434\u0435\u043d\u043e":"\u0412 \u043a\u043e\u043d\u0441\u043e\u043b\u044c \u0432\u044b\u0432\u0435\u0434\u0435\u043d assert: '\u0421\u0435\u0433\u043e\u0434\u043d\u044f \u043d\u0435 \u043f\u044f\u0442\u043d\u0438\u0446\u0430'"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-miscellaneous-example-1"]],decls:2,vars:1,template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"p"),m["\u0275\u0275text"](1),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate"](t.assertResult))},encapsulation:2,changeDetection:0}),e})(),g=(()=>{class e{get flatted(){return Object(d.flatLength)([[1,2],[3,4],[5,6]])}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-miscellaneous-example-2"]],decls:2,vars:1,template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"p"),m["\u0275\u0275text"](1),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate1"]("",t.flatted," = flatLength([[1, 2], [3, 4], [5, 6]]);"))},encapsulation:2,changeDetection:0}),e})();var y=n("T8fS"),x=n("TjIJ"),v=n("fP8s"),h=n("OWJi");function b(e,t){if(1&e&&m["\u0275\u0275element"](0,"tui-data-list-wrapper",4),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275property"]("items",e.items)}}let S=(()=>{class e{constructor(){this.items=["6734567890123456","5536567890123456","2202567890123456","4405567890123456","4000567890123456"],this.parametersForm=new r.FormGroup({cardNumber:new r.FormControl("")})}get paymentSystem(){const{cardNumber:e}=this.parametersForm.value;return Object(y.getPaymentSystem)(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-miscellaneous-example-4"]],decls:6,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","cardNumber",1,"tui-space_top-2"],[3,"items",4,"tuiDataList"],[3,"items"]],template:function(e,t){1&e&&(m["\u0275\u0275text"](0),m["\u0275\u0275elementStart"](1,"form",0),m["\u0275\u0275elementStart"](2,"div",1),m["\u0275\u0275elementStart"](3,"tui-select",2),m["\u0275\u0275text"](4," \u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043d\u043e\u043c\u0435\u0440 \u043a\u0430\u0440\u0442\u044b "),m["\u0275\u0275template"](5,b,1,1,"tui-data-list-wrapper",3),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275textInterpolate1"]("'",t.paymentSystem,"' = getPaymentSystem(cardNumber); "),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[r["\u0275angular_packages_forms_forms_y"],r.NgControlStatusGroup,r.FormGroupDirective,x.a,r.NgControlStatus,r.FormControlName,v.a,h.a],styles:[".parameters[_ngcontent-%COMP%]{margin-top:12px;width:220px}"],changeDetection:0}),e})();function C(e,t){if(1&e&&m["\u0275\u0275element"](0,"tui-data-list-wrapper",4),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275property"]("items",e.items)}}let w=(()=>{class e{constructor(){this.items=["\u0421\u0442\u0440\u043e\u0447\u043a\u0430","null","undefined"],this.parametersForm=new r.FormGroup({value:new r.FormControl(null)})}get isPresent(){const{value:e}=this.parametersForm.value,t=this.objectifyValue(e);return Object(d.isPresent)(t)}objectifyValue(e){return"null"===e?null:"undefined"!==e?e:void 0}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-miscellaneous-example-5"]],decls:6,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],[3,"items",4,"tuiDataList"],[3,"items"]],template:function(e,t){1&e&&(m["\u0275\u0275text"](0),m["\u0275\u0275elementStart"](1,"form",0),m["\u0275\u0275elementStart"](2,"div",1),m["\u0275\u0275elementStart"](3,"tui-select",2),m["\u0275\u0275text"](4," value "),m["\u0275\u0275template"](5,C,1,1,"tui-data-list-wrapper",3),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275textInterpolate1"]("",t.isPresent," = isPresent(value); "),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[r["\u0275angular_packages_forms_forms_y"],r.NgControlStatusGroup,r.FormGroupDirective,x.a,r.NgControlStatus,r.FormControlName,v.a,h.a],styles:[".parameters[_ngcontent-%COMP%]{margin-top:12px;width:220px}"],changeDetection:0}),e})();var F=n("u8jZ");const E=["header",$localize`:␟f398ef0b34074b4560e84ef5317ea054e78a752a␟788967566322079082:Miscellaneous`];var D;D=$localize`:␟a1713be7b96a87e87b8308644936dbb2cb0e186e␟7268521284559971763:Some utils to simplify development`;const P=["description",$localize`:␟f10d1538fd526ebffa07d75e2380b111f5438a1c␟6294798745949256000:Logs assert into console in dev mode`],N=["description",$localize`:␟2f599a78aea67c3b476d1c718f2e8c3b464a9257␟5469082953515383630:Calculates a length of elements of two dimensional array`],L=["description",$localize`:␟5105c7dbe368aca66ee4710b6940836ace147001␟7224030121581173286:Card number to its payment system`],M=["description",$localize`:␟f6929faea8489787de4425621b6b893ee9a50c10␟2199641579905414520:Checks value not to be null or undefined`];function T(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"p"),m["\u0275\u0275i18n"](1,D),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](2,"tui-doc-example",2),m["\u0275\u0275i18nAttributes"](3,P),m["\u0275\u0275element"](4,"tui-miscellaneous-example-1"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](5,"tui-doc-example",3),m["\u0275\u0275i18nAttributes"](6,N),m["\u0275\u0275element"](7,"tui-miscellaneous-example-2"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](8,"tui-doc-example",4),m["\u0275\u0275i18nAttributes"](9,L),m["\u0275\u0275element"](10,"tui-miscellaneous-example-4"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](11,"tui-doc-example",5),m["\u0275\u0275i18nAttributes"](12,M),m["\u0275\u0275element"](13,"tui-miscellaneous-example-5"),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("content",e.example1),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("content",e.example2),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("content",e.example4),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("content",e.example5)}}var G;function j(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"ol",6),m["\u0275\u0275elementStart"](1,"li"),m["\u0275\u0275elementStart"](2,"p"),m["\u0275\u0275i18n"](3,G),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](4,"tui-doc-code",7),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("code",e.importComponentExample)}}G=$localize`:␟331439c9b8ee5b975fc037bbc742a75012cb302f␟5059560669993049040:Import into component and use:`;let _=(()=>{class e{constructor(){this.importComponentExample="import {getPaymentSystem} from '@taiga-ui/kit';\n\n...\n    paymentSystem = getPaymentSystem(cardNumber);\n...\n",this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {tuiAssert} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-miscellaneous-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMiscellaneousExample1 {\n    get assertResult(): string {\n        const dayOfWeek = new Date().getDay();\n        const isFriday = dayOfWeek === 5;\n\n        tuiAssert.assert(isFriday, '\u0421\u0435\u0433\u043e\u0434\u043d\u044f \u043d\u0435 \u043f\u044f\u0442\u043d\u0438\u0446\u0430');\n\n        return isFriday\n            ? '\u0412 \u043a\u043e\u043d\u0441\u043e\u043b\u044c \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0432\u044b\u0432\u0435\u0434\u0435\u043d\u043e'\n            : `\u0412 \u043a\u043e\u043d\u0441\u043e\u043b\u044c \u0432\u044b\u0432\u0435\u0434\u0435\u043d assert: '\u0421\u0435\u0433\u043e\u0434\u043d\u044f \u043d\u0435 \u043f\u044f\u0442\u043d\u0438\u0446\u0430'`;\n    }\n}\n",HTML:"<p>{{ assertResult }}</p>\n"},this.example2={TypeScript:"import {Component} from '@angular/core';\nimport {flatLength} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-miscellaneous-example-2',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMiscellaneousExample2 {\n    get flatted(): number {\n        return flatLength([\n            [1, 2],\n            [3, 4],\n            [5, 6],\n        ]);\n    }\n}\n",HTML:"<p>{{ flatted }} = flatLength([[1, 2], [3, 4], [5, 6]]);</p>\n"},this.example4={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {getPaymentSystem} from '@taiga-ui/addon-commerce';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-miscellaneous-example-4',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMiscellaneousExample4 {\n    readonly items = [\n        '6734567890123456',\n        '5536567890123456',\n        '2202567890123456',\n        '4405567890123456',\n        '4000567890123456',\n    ];\n\n    parametersForm = new FormGroup({\n        cardNumber: new FormControl(''),\n    });\n\n    get paymentSystem(): string | null {\n        const {cardNumber} = this.parametersForm.value;\n\n        return getPaymentSystem(cardNumber);\n    }\n}\n",HTML:'\'{{ paymentSystem }}\' = getPaymentSystem(cardNumber);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-select formControlName="cardNumber" class="tui-space_top-2">\n            \u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043d\u043e\u043c\u0435\u0440 \u043a\u0430\u0440\u0442\u044b\n            <tui-data-list-wrapper\n                *tuiDataList\n                [items]="items"\n            ></tui-data-list-wrapper>\n        </tui-select>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 12px;\n    width: 220px;\n}\n"},this.example5={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {isPresent} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-miscellaneous-example-5',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMiscellaneousExample5 {\n    readonly items = ['\u0421\u0442\u0440\u043e\u0447\u043a\u0430', 'null', 'undefined'];\n\n    parametersForm = new FormGroup({\n        value: new FormControl(null),\n    });\n\n    get isPresent(): boolean {\n        const {value} = this.parametersForm.value;\n        const objectedValue = this.objectifyValue(value);\n\n        return isPresent(objectedValue);\n    }\n\n    private objectifyValue(value: string): string | null | undefined {\n        if (value === 'null') {\n            return null;\n        }\n\n        if (value === 'undefined') {\n            return undefined;\n        }\n\n        return value;\n    }\n}\n",HTML:'{{ isPresent }} = isPresent(value);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-select formControlName="value" class="tui-space_top-2">\n            value\n            <tui-data-list-wrapper\n                *tuiDataList\n                [items]="items"\n            ></tui-data-list-wrapper>\n        </tui-select>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 12px;\n    width: 220px;\n}\n"}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["example-format"]],decls:4,vars:0,consts:[["package","CDK",6,"header"],["pageTab",""],["id","assert","heading","assert",3,"content",6,"description"],["id","flatLength","heading","flatLength",3,"content",6,"description"],["id","getPaymentSystem","heading","getPaymentSystem",3,"content",6,"description"],["id","isPresent","heading","isPresent",3,"content",6,"description"],[1,"b-demo-steps"],["filename","myComponent.component.ts",3,"code"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"tui-doc-page",0),m["\u0275\u0275i18nAttributes"](1,E),m["\u0275\u0275template"](2,T,14,4,"ng-template",1),m["\u0275\u0275template"](3,j,5,1,"ng-template",1),m["\u0275\u0275elementEnd"]())},directives:[c.a,p.a,u.a,f,g,S,w,F.a],encapsulation:2,changeDetection:0}),e})(),k=(()=>{class e{}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,r.FormsModule,r.ReactiveFormsModule,l.TuiSelectModule,i.TuiDataListModule,l.TuiDataListWrapperModule,...s.e,o.f.forChild(Object(s.n)(_))]]}),e})()}}]);