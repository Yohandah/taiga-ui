(window.webpackJsonp=window.webpackJsonp||[]).push([[1434],{Ls7I:function(n,o,i){"use strict";i.r(o),o.default="```ts\nimport {TUI_SANITIZER} from '@taiga-ui/core';\nimport {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';\n\n// ...\n\n@NgModule({\n  // ...\n  providers: [\n    {\n      provide: TUI_SANITIZER,\n      useClass: NgDompurifySanitizer,\n    },\n  ],\n})\nexport class AppModule {}\n```\n"}}]);