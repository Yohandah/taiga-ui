(window.webpackJsonp=window.webpackJsonp||[]).push([[1485],{iNJl:function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-dropdown-controller-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiDropdownControllerExample1 {\n    open = false;\n\n    onClick(): void {\n        this.open = !this.open;\n    }\n}\n"}}]);