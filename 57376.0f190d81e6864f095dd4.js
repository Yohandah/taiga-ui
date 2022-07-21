"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[57376],{57376:(o,e,n)=>{n.r(e),n.d(e,{default:()=>t});const t="import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAlertService} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-alerts-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiAlertsExampleComponent1 {\n    constructor(\n        @Inject(TuiAlertService)\n        private readonly alertService: TuiAlertService,\n    ) {}\n\n    showNotification(): void {\n        this.alertService.open('A simple option', {label: 'With a heading!'}).subscribe();\n    }\n}\n"}}]);