(window.webpackJsonp=window.webpackJsonp||[]).push([[1685],{aZ0m:function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {FormControl, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_VALIDATION_ERRORS} from '@taiga-ui/kit';\n\n@Component({\n    selector: `tui-field-error-content-pipe-example-6`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n    providers: [\n        {\n            provide: TUI_VALIDATION_ERRORS,\n            useValue: {\n                required: `Enter this!`,\n                max: (context: {max: number}): string =>\n                    `Too expensive, max ${context.max}`,\n            },\n        },\n    ],\n})\nexport class TuiFieldErrorContentPipeExample6 {\n    readonly data = [{name: `Latte`}, {name: `Cappuccino`}] as const;\n\n    latteControl = new FormControl(null, [Validators.required, Validators.max(6)]);\n    cappuccinoControl = new FormControl(null, [Validators.required, Validators.max(5)]);\n    controls = [this.latteControl, this.cappuccinoControl];\n\n    readonly columns = [`name`, `price`];\n}\n"}}]);