(window.webpackJsonp=window.webpackJsonp||[]).push([[1864],{"35lE":function(n,e,o){"use strict";o.r(e),e.default="import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_MONTHS} from '@taiga-ui/core';\nimport {Observable} from 'rxjs';\n\n@Component({\n    selector: `tui-token-example-7`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTokensExample7 {\n    constructor(@Inject(TUI_MONTHS) readonly months$: Observable<string[]>) {}\n}\n"}}]);