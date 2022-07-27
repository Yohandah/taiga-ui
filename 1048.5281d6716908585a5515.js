(window.webpackJsonp=window.webpackJsonp||[]).push([[1048],{DdI2:function(n,e,o){"use strict";o.r(e),e.default="import {Component, Inject} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDialogContext, TuiDialogService, TuiSizeL, TuiSizeS} from '@taiga-ui/core';\nimport {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';\n\n@Component({\n    selector: `tui-multi-select-example-9`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMultiSelectExample9 {\n    readonly testValue = new FormControl([]);\n\n    readonly items: readonly string[] = [\n        `Luke Skywalker`,\n        `Leia Organa Solo`,\n        `Darth Vader`,\n        `Han Solo`,\n        `Obi-Wan Kenobi`,\n        `Yoda`,\n    ];\n\n    constructor(\n        @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,\n    ) {}\n\n    showDialog(\n        content: PolymorpheusContent<TuiDialogContext>,\n        textFieldSize: TuiSizeL | TuiSizeS,\n    ): void {\n        this.dialogService.open(content, {data: {textFieldSize}}).subscribe();\n    }\n}\n"}}]);