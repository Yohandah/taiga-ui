(window.webpackJsonp=window.webpackJsonp||[]).push([[1521],{"0+t2":function(e,n,t){"use strict";t.r(n),n.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-highlight-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiHighlightExample1 {\n    search = '';\n\n    readonly rows = [\n        ['King Arthur', '-', 'Arrested'],\n        ['Sir Bedevere', 'The Wise', 'Arrested'],\n        ['Sir Lancelot', 'The Brave', 'Arrested'],\n        ['Sir Galahad', 'The Chaste', 'Killed'],\n        ['Sir Robin', 'The Not-Quite-So-Brave-As-Sir-Lancelot', 'Killed'],\n    ];\n}\n"}}]);