(window.webpackJsonp=window.webpackJsonp||[]).push([[783],{"wru/":function(n,t,o){"use strict";o.r(t),t.default='<h3>Control\'s output as TuiDay (default)</h3>\n<tui-input-date\n    class="b-form"\n    [formControl]="defaultControl"\n>\n    Choose a date\n</tui-input-date>\n<p>Stringified control value:</p>\n<p>\n    <code>{{ defaultControl.value }}</code>\n</p>\n\n<hr />\n\n<h3>Control\'s output as native Date</h3>\n<p>\n    (see\n    <code>toNativeDate</code>\n    directive)\n</p>\n<tui-input-date\n    toNativeDate\n    class="b-form"\n    [formControl]="nativeDateControl"\n>\n    Choose a date\n</tui-input-date>\n<p>Stringified control value:</p>\n<p>\n    <code>{{ nativeDateControl.value }}</code>\n</p>\n'}}]);