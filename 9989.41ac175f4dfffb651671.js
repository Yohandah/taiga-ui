"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[9989],{9989:t=>{t.exports='<p>\n    <button\n        tuiButton\n        type="button"\n        class="tui-space_right-3 tui-space_bottom-3"\n        (click)="example1()"\n    >\n        Ex. #1\n    </button>\n\n    <button\n        tuiButton\n        type="button"\n        class="tui-space_right-3 tui-space_bottom-3"\n        (click)="example2()"\n    >\n        Ex. #2\n    </button>\n\n    <button\n        tuiButton\n        type="button"\n        class="tui-space_right-3 tui-space_bottom-3"\n        (click)="example3()"\n    >\n        Ex. #3\n    </button>\n</p>\n\n<tui-editor\n    new\n    exampleText="exampleText"\n    class="editor"\n    [formControl]="control"\n>\n    Placeholder\n</tui-editor>\n\n<h4>HTML:</h4>\n<tui-editor-socket [content]="control.value"></tui-editor-socket>\n\n<h4>Text:</h4>\n<p>{{ control.value }}</p>\n'}}]);