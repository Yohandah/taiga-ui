(window.webpackJsonp=window.webpackJsonp||[]).push([[1199],{"9hEY":function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-radio-labeled-example-2`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiRadioLabeledExample2 {\n    items = [{name: `tariff1`}, {name: `tariff2`}, {name: `tariff3`}];\n\n    testForm = new FormGroup({\n        testValue1: new FormControl(this.items[0]),\n    });\n}\n"}}]);