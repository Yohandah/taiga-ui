(window.webpackJsonp=window.webpackJsonp||[]).push([[461],{cEY6:function(n,e,a){"use strict";a.r(e),e.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDay, TuiDayRange} from '@taiga-ui/cdk';\nimport {TUI_CALENDAR_DATA_STREAM} from '@taiga-ui/kit';\nimport {of} from 'rxjs';\n\nexport const calendarStream$ = of(\n    new TuiDayRange(new TuiDay(2019, 2, 11), new TuiDay(2019, 2, 14)),\n);\n\n@Component({\n    selector: 'tui-range-example-2',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n    providers: [\n        {\n            provide: TUI_CALENDAR_DATA_STREAM,\n            useValue: calendarStream$,\n        },\n    ],\n})\nexport class TuiRangeExample2 {}\n"}}]);