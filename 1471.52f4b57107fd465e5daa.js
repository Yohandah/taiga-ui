(window.webpackJsonp=window.webpackJsonp||[]).push([[1471],{oOeH:function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-auto-focus-example-1`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiAutoFocusExample1 {\n    showInput = false;\n    model = `Focused after its appearance`;\n\n    onClick(): void {\n        this.showInput = true;\n    }\n}\n"}}]);