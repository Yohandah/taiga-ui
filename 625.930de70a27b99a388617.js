(window.webpackJsonp=window.webpackJsonp||[]).push([[625],{uGod:function(n,o,t){"use strict";t.r(o),o.default="```ts\nimport {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';\nimport {TuiDialogContext} from '@taiga-ui/core';\n\n// ...\n\nexport class MyDialogComponent {\n  constructor(@Inject(POLYMORPHEUS_CONTEXT) private readonly context: TuiDialogContext<boolean>) {}\n\n  ok() {\n    this.context.completeWith(true);\n  }\n\n  cancel() {\n    this.context.completeWith(false);\n  }\n}\n```\n"}}]);