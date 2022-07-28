(window.webpackJsonp=window.webpackJsonp||[]).push([[1272],{mnln:function(n,e,t){"use strict";t.r(e),e.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiSheetOptions} from '@taiga-ui/addon-mobile';\n\n@Component({\n    selector: `tui-sheet-example-4`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiSheetExample4 {\n    open = false;\n\n    elastic = 1;\n\n    readonly options: Partial<TuiSheetOptions> = {\n        stops: [`12rem`],\n    };\n\n    get transform(): string {\n        return `scale(${this.elastic * this.elastic})`;\n    }\n\n    toggle(): void {\n        this.elastic = 1;\n        this.open = !this.open;\n    }\n\n    onElastic(elastic: number): void {\n        this.elastic = elastic;\n    }\n}\n"}}]);