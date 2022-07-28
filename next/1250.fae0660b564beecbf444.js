(window.webpackJsonp=window.webpackJsonp||[]).push([[1250],{jocV:function(n,e,t){"use strict";t.r(e),e.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {EMPTY_ARRAY, TuiStringHandler} from '@taiga-ui/cdk';\nimport {TuiValueContentContext} from '@taiga-ui/core';\n\ninterface Account {\n    readonly name: string;\n    readonly account: string;\n}\n\nconst BANK: readonly Account[] = [\n    {\n        name: `Ruble`,\n        account: `1234567890987654321`,\n    },\n    {\n        name: `Dollar`,\n        account: `1234567890987654321`,\n    },\n];\n\nconst OTHERS: readonly Account[] = [\n    {\n        name: `Bank`,\n        account: `1234567890987654321`,\n    },\n    {\n        name: `Other bank`,\n        account: `1234567890987654321`,\n    },\n    {\n        name: `Bank of America`,\n        account: `1234567890987654321`,\n    },\n];\n\nconst CASH: Account = {\n    name: `Cash`,\n    account: ``,\n};\n\n@Component({\n    selector: `tui-select-example-7`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiSelectExample7 {\n    value = EMPTY_ARRAY;\n\n    readonly all = EMPTY_ARRAY;\n    readonly cash = CASH;\n    readonly bank = BANK;\n    readonly others = OTHERS;\n\n    readonly content: TuiStringHandler<TuiValueContentContext<readonly unknown[]>> = ({\n        $implicit: {length},\n    }) => (length ? `${length} accounts` : `All`);\n}\n"}}]);