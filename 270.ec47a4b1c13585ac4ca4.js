(window.webpackJsonp=window.webpackJsonp||[]).push([[270],{liKt:function(n,t,e){"use strict";e.r(t),t.default="import {Component, Input} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiPure} from '@taiga-ui/cdk';\nimport {TuiDurationOptions, tuiWidthCollapse} from '@taiga-ui/core';\n\n@Component({\n    selector: `tui-width-collapse-example`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n    animations: [tuiWidthCollapse],\n})\nexport class TuiWidthCollapseExample {\n    @Input()\n    speed = 0;\n\n    isOpen = true;\n\n    @tuiPure\n    getAnimation(duration: number): TuiDurationOptions {\n        return {value: ``, params: {duration}};\n    }\n}\n"}}]);