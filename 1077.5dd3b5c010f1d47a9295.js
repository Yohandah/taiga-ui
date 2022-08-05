(window.webpackJsonp=window.webpackJsonp||[]).push([[1077],{Wi7w:function(e,n,i){"use strict";i.r(n),n.default="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {\n    TuiContextWithImplicit,\n    TuiIdentityMatcher,\n    TuiStringHandler,\n} from '@taiga-ui/cdk';\nimport {tuiItemsHandlersProvider} from '@taiga-ui/kit';\n\ninterface Employee {\n    readonly id: number;\n    readonly name: string;\n    readonly dept: {\n        readonly id: number;\n        readonly title: string;\n    };\n}\n\nconst STRINGIFY_EMPLOYEE: TuiStringHandler<\n    Employee | TuiContextWithImplicit<Employee>\n> = (item: Employee | TuiContextWithImplicit<Employee>) =>\n    `name` in item\n        ? `${item.name} (${item.dept.title})`\n        : `${item.$implicit.name} (${item.$implicit.dept.title})`;\n\nconst ID_MATCHER_EMPLOYEE: TuiIdentityMatcher<Employee> = (\n    item1: Employee,\n    item2: Employee,\n) => item1.id === item2.id;\n\n@Component({\n    selector: `tui-multi-select-example-8`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n    providers: [\n        tuiItemsHandlersProvider({\n            stringify: STRINGIFY_EMPLOYEE,\n            identityMatcher: ID_MATCHER_EMPLOYEE,\n        }),\n    ],\n})\nexport class TuiMultiSelectExample8 {\n    readonly testValue = new FormControl([]);\n\n    readonly items: readonly Employee[] = [\n        {id: 42, name: `John Cleese`, dept: {id: 566, title: `Financial`}},\n        {id: 237, name: `Eric Idle`, dept: {id: 560, title: `Staffing`}},\n        {id: 666, name: `Michael Palin`, dept: {id: 566, title: `Financial`}},\n        {id: 123, name: `Terry Gilliam`, dept: {id: 500, title: `Administrative`}},\n        {id: 777, name: `Terry Jones`, dept: {id: 566, title: `Financial`}},\n        {id: 999, name: `Graham Chapman`, dept: {id: 560, title: `Staffing`}},\n    ];\n}\n"}}]);