(window.webpackJsonp=window.webpackJsonp||[]).push([[596],{"bho+":function(n,o,e){"use strict";e.r(o),o.default="```ts\nimport {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';\nimport {TuiDialogService} from '@taiga-ui/core';\n\n// ...\n\nexport class MyComponent {\n  constructor(\n    @Inject(TuiDialogService)\n    private readonly dialogService: TuiDialogService,\n  ) {}\n\n  // ...\n\n  open() {\n    this.dialogService.open('Hello!').subscribe();\n  }\n}\n```\n"}}]);