(window.webpackJsonp=window.webpackJsonp||[]).push([[1120],{Q9d1:function(e,n,t){"use strict";t.r(n),n.default="import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_IS_CYPRESS} from '@taiga-ui/cdk';\nimport {of, timer} from 'rxjs';\nimport {map, startWith, takeWhile} from 'rxjs/operators';\n\n@Component({\n    selector: `tui-progress-circle-example-1`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiProgressCircleExample1 {\n    readonly max = 100;\n    readonly value$ = this.isCypress\n        ? of(30)\n        : timer(300, 200).pipe(\n              map(i => i + 30),\n              startWith(30),\n              takeWhile(value => value <= this.max),\n          );\n\n    constructor(@Inject(TUI_IS_CYPRESS) private readonly isCypress: boolean) {}\n}\n"}}]);