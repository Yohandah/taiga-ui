(window.webpackJsonp=window.webpackJsonp||[]).push([[614],{"0QPO":function(e,n,t){"use strict";t.r(n),n.default="import {HttpClient} from '@angular/common/http';\nimport {Component, Inject, Injector} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {\n    tiptapEditorStyles,\n    TUI_EDITOR_EXTENSIONS,\n    TUI_EDITOR_STYLES,\n    TUI_IMAGE_LOADER,\n    TuiEditorTool,\n} from '@taiga-ui/addon-editor';\nimport {TuiDestroyService, TuiHandler} from '@taiga-ui/cdk';\nimport {Observable} from 'rxjs';\nimport {switchMap, takeUntil} from 'rxjs/operators';\n\n@Component({\n    selector: `tui-editor-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    providers: [\n        TuiDestroyService,\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            deps: [Injector],\n            useFactory: (injector: Injector) => [\n                import(`@taiga-ui/addon-editor/extensions/starter-kit`).then(\n                    m => m.StarterKit,\n                ),\n                import(`@taiga-ui/addon-editor/extensions/image-editor`).then(m =>\n                    m.createImageEditorExtension(injector),\n                ),\n            ],\n        },\n        {\n            provide: TUI_EDITOR_STYLES,\n            useValue: tiptapEditorStyles,\n        },\n    ],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiEditorNewExample3 {\n    readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Img];\n\n    base64Image$ = this.http\n        .get(`assets/images/lumberjack.png`, {responseType: `blob`})\n        .pipe(switchMap(file => this.imageLoader(file)));\n\n    control = new FormControl(``);\n\n    constructor(\n        @Inject(TUI_IMAGE_LOADER)\n        private readonly imageLoader: TuiHandler<Blob, Observable<string>>,\n        @Inject(HttpClient) private readonly http: HttpClient,\n        @Inject(TuiDestroyService) destroy$: TuiDestroyService,\n    ) {\n        this.base64Image$.pipe(takeUntil(destroy$)).subscribe(src => {\n            this.control.patchValue(`\n                <img data-type=\"image-editor\" src=\"${src}\" width=\"300\">\n                <p>Try to drag right border of image!</p>\n\n                <p>To change min size of image use token <code>TUI_EDITOR_MIN_IMAGE_WIDTH</code>.</p>\n            `);\n        });\n    }\n}\n"}}]);