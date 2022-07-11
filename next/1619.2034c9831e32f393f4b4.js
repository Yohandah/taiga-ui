(window.webpackJsonp=window.webpackJsonp||[]).push([[1619],{e108:function(n,e,t){"use strict";t.r(e),e.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {clamp, TuiZoom} from '@taiga-ui/cdk';\nimport {Subject} from 'rxjs';\nimport {map, scan, startWith} from 'rxjs/operators';\n\n@Component({\n    selector: 'tui-zoom-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiZoomExample1 {\n    readonly delta$ = new Subject<number>();\n\n    readonly scale$ = this.delta$.pipe(\n        scan((scale, next) => clamp(scale + next, 0.5, 3), 1),\n        startWith(1),\n    );\n\n    readonly transform$ = this.scale$.pipe(map(scale => `scale(${scale})`));\n\n    onZoom({delta}: TuiZoom): void {\n        this.delta$.next(delta);\n    }\n}\n"}}]);