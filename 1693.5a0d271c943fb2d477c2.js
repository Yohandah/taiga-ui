(window.webpackJsonp=window.webpackJsonp||[]).push([[1693],{OM1p:function(n,t,i){"use strict";i.r(t),t.default='<form\n    class="b-form"\n    [formGroup]="form"\n>\n    <tui-combo-box\n        formControlName="user"\n        [stringify]="stringify"\n    >\n        User\n        <tui-data-list *tuiDataList>\n            <button\n                *ngFor="let item of items | tuiFilterByInputWith: stringify"\n                tuiOption\n                [value]="item"\n            >\n                {{ item.name }}\n            </button>\n        </tui-data-list>\n    </tui-combo-box>\n</form>\n'}}]);