(window.webpackJsonp=window.webpackJsonp||[]).push([[333],{"8GlR":function(e,n,t){"use strict";t.r(n),n.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {sum} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'tui-legend-item-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiLegendItemExample1 {\n    activeItemIndex = NaN;\n\n    readonly value = [13769, 12367, 10172, 3018, 2592];\n    readonly sum = sum(...this.value);\n    readonly labels = ['Food', 'Cafe', 'Open Source', 'Taxi', 'Other'];\n\n    isItemActive(index: number): boolean {\n        return this.activeItemIndex === index;\n    }\n\n    onHover(index: number, hovered: boolean): void {\n        this.activeItemIndex = hovered ? index : 0;\n    }\n\n    getColor(index: number): string {\n        return `var(--tui-chart-${index})`;\n    }\n}\n"}}]);