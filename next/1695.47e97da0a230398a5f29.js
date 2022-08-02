(window.webpackJsonp=window.webpackJsonp||[]).push([[1695],{"9lvk":function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-filter-by-input-example-2`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFilterByInputExample2 {\n    readonly items = [\n        `John Cleese`,\n        `Eric Idle`,\n        `Graham Chapman`,\n        `Michael Palin`,\n        `Terry Gilliam`,\n        `Terry Jones`,\n    ];\n\n    readonly form = new FormGroup({\n        user: new FormControl(),\n    });\n\n    readonly matcher = (name: string, search: string): boolean =>\n        name.split(` `).pop()!.toLowerCase().startsWith(search.toLowerCase());\n}\n"}}]);