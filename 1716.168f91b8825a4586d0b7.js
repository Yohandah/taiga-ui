(window.webpackJsonp=window.webpackJsonp||[]).push([[1716],{"r+9J":function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-stringify-example1`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiStringifyExample1 {\n    value = null;\n\n    readonly items = [\n        {\n            name: `John Cleese`,\n            role: `Black Knight`,\n        },\n        {\n            name: `Eric Idle`,\n            role: `Dead collector`,\n        },\n    ] as const;\n}\n"}}]);