(window.webpackJsonp=window.webpackJsonp||[]).push([[1562],{"KiK+":function(n,e,t){"use strict";t.r(e),e.default="import {Component, ViewEncapsulation} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\n\n@Component({\n    selector: `tui-media-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    encapsulation: ViewEncapsulation.None,\n    changeDetection,\n})\nexport class TuiMediaExample3 {\n    currentTime = 0;\n    paused = true;\n\n    get icon(): string {\n        return this.paused ? `tuiIconPlayLarge` : `tuiIconPauseLarge`;\n    }\n\n    toggleState(): void {\n        this.paused = !this.paused;\n    }\n}\n"}}]);