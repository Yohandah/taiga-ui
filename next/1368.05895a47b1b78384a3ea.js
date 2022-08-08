(window.webpackJsonp=window.webpackJsonp||[]).push([[1368],{"9Ae7":function(n,e,t){"use strict";t.r(e),e.default="import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAlertService} from '@taiga-ui/core';\n\n@Component({\n    selector: `tui-tabs-example-6`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTabsExample6 {\n    activeItemIndex = 0;\n\n    readonly steps = [`Sales`, `Settings`, `News`];\n\n    constructor(\n        @Inject(TuiAlertService)\n        private readonly notifications: TuiAlertService,\n    ) {}\n\n    onClick(item: string): void {\n        this.notifications.open(item).subscribe();\n    }\n}\n"}}]);