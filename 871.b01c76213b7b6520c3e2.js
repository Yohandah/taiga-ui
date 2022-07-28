(window.webpackJsonp=window.webpackJsonp||[]).push([[871],{kWlT:function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiKeySteps} from '@taiga-ui/kit';\n\n@Component({\n    selector: `tui-input-slider-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputSliderExample3 {\n    readonly control = new FormControl(10_000);\n    readonly max = 1_000_000;\n    readonly min = 0;\n    readonly totalSteps = 100;\n    readonly ticksLabels = [`0`, `10K`, `100K`, `500k`, `1000K`];\n\n    readonly keySteps: TuiKeySteps = [\n        // [percent, value]\n        [25, 10_000],\n        [50, 100_000],\n        [75, 500_000],\n    ];\n}\n"}}]);