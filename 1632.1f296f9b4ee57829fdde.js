(window.webpackJsonp=window.webpackJsonp||[]).push([[1632],{RsUp:function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {FormControl, FormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {TuiCurrency} from '@taiga-ui/addon-commerce';\nimport {TuiDay, TuiTime} from '@taiga-ui/cdk';\nimport {TuiPluralize} from '@taiga-ui/core';\n\nclass User {\n    constructor(readonly firstName: string, readonly lastName: string) {}\n\n    toString(): string {\n        return `${this.firstName} ${this.lastName}`;\n    }\n}\n\nclass Account {\n    constructor(\n        readonly id: string,\n        readonly name: string,\n        readonly amount: number,\n        readonly currency: TuiCurrency,\n        readonly cardSvg: string,\n    ) {}\n}\n\n@Component({\n    selector: `tui-form-example-1`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.style.less`],\n    changeDetection,\n})\nexport class TuiExample {\n    readonly svgIcons = {\n        common: `https://ng-web-apis.github.io/dist/assets/images/common.svg`,\n        universal: `https://ng-web-apis.github.io/dist/assets/images/universal.svg`,\n        intersection: `https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg`,\n        mutation: `https://ng-web-apis.github.io/dist/assets/images/mutation-observer.svg`,\n    };\n\n    persons = [new User(`Roman`, `Sedov`), new User(`Alex`, `Inkin`)];\n\n    pluralize: TuiPluralize = [`\u20bd`, `\u20bd`, `\u20bd`];\n\n    accounts = [\n        new Account(`1`, `Common`, 24876.55, TuiCurrency.Ruble, this.svgIcons.common),\n        new Account(`2`, `Universal`, 335, TuiCurrency.Dollar, this.svgIcons.universal),\n        new Account(\n            `3`,\n            `Intersection`,\n            10000,\n            TuiCurrency.Euro,\n            this.svgIcons.intersection,\n        ),\n        new Account(`4`, `Mutation`, 100, TuiCurrency.Pound, this.svgIcons.mutation),\n    ];\n\n    testForm = new FormGroup({\n        nameValue: new FormControl(``, Validators.required),\n        textValue: new FormControl(``, Validators.required),\n        passwordValue: new FormControl(``, Validators.required),\n        phoneValue: new FormControl(``, Validators.required),\n        moneyValue: new FormControl(`100`, Validators.required),\n        periodValue: new FormControl(new TuiDay(2017, 2, 15), Validators.required),\n        timeValue: new FormControl(new TuiTime(12, 30), Validators.required),\n        personValue: new FormControl(this.persons[0]),\n        quantityValue: new FormControl(0, Validators.required),\n        radioValue: new FormControl(`with-commission`),\n        accountWherefrom: new FormControl(null),\n        accountWhere: new FormControl(null),\n        checkboxValue: new FormControl(false),\n        osnoValue: new FormControl(false),\n        usnValue: new FormControl(false),\n        eshnValue: new FormControl(false),\n        envdValue: new FormControl(false),\n        usn2Value: new FormControl(false),\n        patentValue: new FormControl(false),\n    });\n}\n"}}]);