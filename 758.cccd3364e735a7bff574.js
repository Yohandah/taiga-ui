(window.webpackJsonp=window.webpackJsonp||[]).push([[758],{QV82:function(e,n,t){"use strict";t.r(n),n.default="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiPure} from '@taiga-ui/cdk';\nimport {TuiFileLike} from '@taiga-ui/kit';\nimport {Observable, of, timer} from 'rxjs';\nimport {map, mapTo, share, startWith, switchMap, tap} from 'rxjs/operators';\n\nclass RejectedFile {\n    constructor(readonly file: TuiFileLike, readonly reason: string) {}\n}\n\nfunction convertRejected({file, reason}: RejectedFile): TuiFileLike {\n    return {\n        name: file.name,\n        size: file.size,\n        type: file.type,\n        content: reason,\n    };\n}\n\n@Component({\n    selector: `tui-input-file-example-1`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputFileExample1 {\n    readonly control = new FormControl();\n\n    @tuiPure\n    get loading$(): Observable<readonly File[]> {\n        return this.requests$.pipe(\n            map(file => (file instanceof File ? [file] : [])),\n            startWith([]),\n        );\n    }\n\n    @tuiPure\n    get rejected$(): Observable<readonly TuiFileLike[]> {\n        return this.requests$.pipe(\n            map(file => (file instanceof RejectedFile ? [convertRejected(file)] : [])),\n            tap(({length}) => {\n                if (length) {\n                    this.control.setValue(null);\n                }\n            }),\n            startWith([]),\n        );\n    }\n\n    @tuiPure\n    private get requests$(): Observable<RejectedFile | File | null> {\n        return this.control.valueChanges.pipe(\n            switchMap(file =>\n                file ? this.serverRequest(file).pipe(startWith(file)) : of(null),\n            ),\n            share(),\n        );\n    }\n\n    private serverRequest(file: File): Observable<RejectedFile | File | null> {\n        const delay = Math.round(Math.random() * 5000 + 500);\n        const result =\n            delay % 2\n                ? null\n                : new RejectedFile(file, `Server responded for odd number of time`);\n\n        return timer(delay).pipe(mapTo(result));\n    }\n}\n"}}]);