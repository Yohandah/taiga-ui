(window.webpackJsonp=window.webpackJsonp||[]).push([[1491],{zqJW:function(t,n,o){"use strict";o.r(n),n.default='<p [tuiDropdownContext]="reportForm">Some text with mistake. Make right click on it.</p>\n\n<p [tuiDropdownContext]="reportForm">Another text</p>\n\n<ng-template\n    #reportForm\n    let-close="close"\n>\n    <form\n        class="container"\n        [formGroup]="testForm"\n    >\n        <tui-text-area formControlName="reportText">Have you found a mistake ? Write about it!</tui-text-area>\n\n        <button\n            type="button"\n            tuiButton\n            class="button"\n            (click)="report(); close()"\n        >\n            SEND IT\n        </button>\n    </form>\n</ng-template>\n'}}]);