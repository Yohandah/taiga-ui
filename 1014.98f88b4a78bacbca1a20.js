(window.webpackJsonp=window.webpackJsonp||[]).push([[1014],{UGie:function(e,n,o){"use strict";o.r(n),n.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_IS_ANDROID, TUI_IS_IOS, TUI_IS_MOBILE} from '@taiga-ui/cdk';\n\n@Component({\n    selector: `tui-mobile-themes-example-2`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n    providers: [\n        {\n            provide: TUI_IS_MOBILE,\n            useValue: true,\n        },\n        {\n            provide: TUI_IS_ANDROID,\n            useValue: false,\n        },\n        {\n            provide: TUI_IS_IOS,\n            useValue: true,\n        },\n    ],\n})\nexport class TuiMobileThemesExample2 {}\n"}}]);