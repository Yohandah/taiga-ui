(window.webpackJsonp=window.webpackJsonp||[]).push([[1458],{S2Z5:function(n,t,e){"use strict";e.r(t),t.default="```ts\nexport class MyComponent {\n  @Input()\n  @tuiRequiredSetter(\n    quantity => Number.isInteger(quantity) && quantity >= 10,\n    'Should be integer number more than min value',\n  )\n  set quantity(quantity: number) {\n    this.items = new Array(quantity).fill(Math.floor(Math.random() * Math.floor(100)));\n  }\n\n  items: Array<number>;\n}\n```\n"}}]);