(window.webpackJsonp=window.webpackJsonp||[]).push([[1416],{"tYI+":function(e,n,t){"use strict";t.r(n),n.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {EMPTY_ARRAY, TuiHandler} from '@taiga-ui/cdk';\n\ninterface TreeNode {\n    readonly text: string;\n    readonly children?: readonly TreeNode[];\n}\n\n@Component({\n    selector: `tui-tree-example-4`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTreeExample4 {\n    readonly data: TreeNode = {\n        text: `Topmost`,\n        children: [\n            {\n                text: `Top level 1`,\n                children: [\n                    {\n                        text: `Another item`,\n                        children: [\n                            {text: `Next level 1`},\n                            {text: `Next level 2`},\n                            {text: `Next level 3`},\n                        ],\n                    },\n                ],\n            },\n            {text: `Top level 2`},\n            {\n                text: `Top level 3`,\n                children: [{text: `Test 1`}, {text: `Test 2`}],\n            },\n        ],\n    };\n\n    readonly map = new Map<TreeNode, boolean>();\n\n    readonly handler: TuiHandler<TreeNode, readonly TreeNode[]> = item =>\n        item.children || EMPTY_ARRAY;\n\n    toggleTopmost(): void {\n        this.map.set(this.data, !this.map.get(this.data));\n    }\n\n    toggleLevel(): void {\n        this.map.set(this.data.children![0], !this.map.get(this.data.children![0]));\n    }\n}\n"}}]);