(window.webpackJsonp=window.webpackJsonp||[]).push([[1599],{"sZ1+":function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-sidebar-example-1`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiSidebarExample1 {\n    open = false;\n\n    readonly webApis = [`Common`, `Audio`, `Canvas`, `Geolocation`, `MIDI`, `Workers`];\n\n    readonly tinkoff = [\n        `Taiga-UI`,\n        `ng-event-plugins`,\n        `ng-polymorpheus`,\n        `ng-dompurify`,\n    ];\n\n    toggle(open: boolean): void {\n        this.open = open;\n    }\n}\n"}}]);