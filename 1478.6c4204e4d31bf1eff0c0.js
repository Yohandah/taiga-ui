(window.webpackJsonp=window.webpackJsonp||[]).push([[1478],{yAZ1:function(e,t,n){"use strict";n.r(t),t.default="import {Component, EmbeddedViewRef, Inject, TemplateRef} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\n\nimport {CustomPortalService} from './portal/custom-portal.service';\n\n@Component({\n    selector: `tui-portals-example-1`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n})\nexport class TuiPortalsExample1 {\n    templates: Array<EmbeddedViewRef<unknown>> = [];\n\n    constructor(\n        @Inject(CustomPortalService)\n        private readonly customPortalService: CustomPortalService,\n    ) {}\n\n    addTemplate(template: TemplateRef<unknown>): void {\n        this.templates.push(this.customPortalService.addTemplate(template));\n    }\n\n    removeTemplate(): void {\n        const viewRef = this.templates.pop();\n\n        if (viewRef) {\n            this.customPortalService.removeTemplate(viewRef);\n        }\n    }\n}\n"}}]);