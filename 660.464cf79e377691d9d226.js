(window.webpackJsonp=window.webpackJsonp||[]).push([[660],{wAPO:function(n,e,t){"use strict";t.r(e),e.default='<form [formGroup]="form">\n    <tui-filter\n        formControlName="filters"\n        [identityMatcher]="identityMatcher"\n        [content]="content"\n        [badgeHandler]="badgeHandler"\n        [items]="items"\n    ></tui-filter>\n</form>\n<ng-template\n    #content\n    let-item\n>\n    {{ item.title }}\n</ng-template>\n<div>\n    <pre>Form value: {{ form.value | json }}</pre>\n</div>\n'}}]);