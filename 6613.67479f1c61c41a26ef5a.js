"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[6613],{6613:n=>{n.exports='export default "<p class=\\"b-form\\">\\n    <tui-input-date-range\\n        [maxLength]=\\"maxLength\\"\\n        [(ngModel)]=\\"range\\"\\n    >\\n        Range\\n    </tui-input-date-range>\\n</p>\\n<tui-axes\\n    *ngIf=\\"computeLabels$(range) | async as labels\\"\\n    class=\\"axes\\"\\n    [verticalLines]=\\"labels.length\\"\\n    [horizontalLines]=\\"4\\"\\n    [axisXLabels]=\\"labels\\"\\n>\\n    <tui-line-days-chart\\n        class=\\"chart\\"\\n        [height]=\\"200\\"\\n        [value]=\\"value\\"\\n        [yStringify]=\\"yStringify\\"\\n        [xStringify]=\\"xStringify$ | async\\"\\n    ></tui-line-days-chart>\\n</tui-axes>\\n";'}}]);