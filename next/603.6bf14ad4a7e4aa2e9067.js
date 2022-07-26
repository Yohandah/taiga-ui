(window.webpackJsonp=window.webpackJsonp||[]).push([[603],{jt43:function(n,o,e){"use strict";e.r(o),o.default='import {Component} from \'@angular/core\';\nimport {FormControl, Validators} from \'@angular/forms\';\nimport {changeDetection} from \'@demo/emulate/change-detection\';\nimport {encapsulation} from \'@demo/emulate/encapsulation\';\nimport {\n    defaultEditorExtensions,\n    tiptapEditorStyles,\n    TUI_EDITOR_EXTENSIONS,\n    TUI_EDITOR_STYLES,\n} from \'@taiga-ui/addon-editor\';\n\n@Component({\n    selector: \'tui-editor-example-1\',\n    templateUrl: \'./index.html\',\n    styleUrls: [\'./index.less\'],\n    providers: [\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            useValue: defaultEditorExtensions,\n        },\n        {\n            provide: TUI_EDITOR_STYLES,\n            useValue: tiptapEditorStyles,\n        },\n    ],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiEditorNewExample1 {\n    control = new FormControl(\n        \'<p><strong>WYSIWYG</strong> (<em>What you see is what you get</em>) \u2014 <u>Rich Text Editor</u> for using with Angular<sup> forms.</sup></p><h1>Heading</h1><p>Lorem ipsum dolor sit amet consectetur <a target="_blank" rel="noopener noreferrer nofollow" href="http://taiga-ui.dev">adipiscing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p><blockquote><p>ad minim veniam, quis nostrud exercitation <span style="color: rgb(196, 11, 8); background-color: rgb(221, 228, 237)">ullamco</span>, laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p></blockquote><p style="text-align: right">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><pre><code>class EditorExample {}</code></pre><table><tbody><tr><th colspan="1" rowspan="1"><p></p></th><th colspan="1" rowspan="1"><p>Free</p></th><th colspan="1" rowspan="1"><p>Pro</p></th></tr><tr><td colspan="1" rowspan="1"><p>24/7 support</p></td><td style="background: #FFDD2C" colspan="1" rowspan="1"><p>+</p></td><td style="background: #39b54a" colspan="1" rowspan="1"><p>+</p></td></tr></tbody></table><p style="text-align: center"><code>Code in text</code></p>\',\n        Validators.required,\n    );\n\n    example1(): void {\n        this.control.setValue(\n            \'<p>Control</p><h2>is</h2><h1><span style="color: #e01f19">updated</span></h1>\',\n        );\n    }\n\n    example2(): void {\n        this.control.setValue(\n            `\n                <ul>\n                    <li>1</li>\n                    <li>2</li>\n                </ul>\n\n                <ol>\n                    <li>A</li>\n                    <li>B</li>\n                </ol>\n            `,\n        );\n    }\n\n    example3(): void {\n        this.control.setValue(\n            `\n                <ul>\n                  <li>\n                    1\n                    <ul>\n                      <li>\n                        2\n                        <ul>\n                          <li>3</li>\n                          <li>4</li>\n                        </ul>\n                      </li>\n                    </ul>\n                  </li>\n                  <li>5</li>\n                </ul>\n\n                <ol>\n                  <li>\n                    1\n                    <ol>\n                      <li>\n                        2\n                        <ol>\n                          <li>3</li>\n                          <li>4</li>\n                        </ol>\n                      </li>\n                    </ol>\n                  </li>\n                  <li>5</li>\n                </ol>\n            `,\n        );\n    }\n}\n'}}]);