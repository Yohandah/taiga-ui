(window.webpackJsonp=window.webpackJsonp||[]).push([[625],{Dtwb:function(e,n,t){"use strict";t.r(n),n.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-editor-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiEditorExample1 {\n    model =\n        'WYSIWYG (What you see is what you get) \u2014 Rich Text Editor for using with Angular forms.' +\n        '<p><font size=\"6\">Heading</font></p><font size=\"4\">Lorem ipsum dolor sit amet <font color=\"#ff78a7\">' +\n        'consectetur adipiscing elit</font>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +\n        '<span style=\"background-color: rgb(163, 129, 255);\">Ut enim </span></font><blockquote>ad minim veniam, ' +\n        '<u>quis nostrud exercitation</u> <b>ullamco</b>, laboris nisi ut aliquip ex ea commodo consequat. ' +\n        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</blockquote>' +\n        '<p style=\"text-align: right;\">Excepteur sint occaecat ' +\n        'cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>';\n\n    onClick(): void {\n        this.model = '<b>HTML FTW!</b>';\n    }\n}\n"}}]);