(window.webpackJsonp=window.webpackJsonp||[]).push([[1028],{"7lSG":function(e,n,a){"use strict";a.r(n),n.default="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_DEFAULT_MATCHER} from '@taiga-ui/cdk';\nimport {Observable, of, Subject} from 'rxjs';\nimport {delay, filter, startWith, switchMap} from 'rxjs/operators';\n\nimport {default as avatar} from '!!file-loader!../../../../../assets/images/avatar.jpg';\n\nclass User {\n    constructor(\n        readonly firstName: string,\n        readonly lastName: string,\n        readonly avatarUrl: string | null = null,\n    ) {}\n\n    toString(): string {\n        return `${this.firstName} ${this.lastName}`;\n    }\n}\n\nconst databaseMockData: readonly User[] = [\n    new User('Roman', 'Sedov', 'http://marsibarsi.me/images/1x1small.jpg'),\n    new User('Alex', 'Inkin', avatar),\n    new User('Dmitriy', 'Demenskiy'),\n    new User('Evgeniy', 'Mamaev'),\n    new User('Ivan', 'Ishmametiev'),\n    new User('Igor', 'Katsuba'),\n    new User('Yulia', 'Tsareva'),\n];\n\n@Component({\n    selector: 'tui-multi-select-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMultiSelectExample2 {\n    readonly search$ = new Subject<string | null>();\n\n    readonly items$: Observable<readonly User[] | null> = this.search$.pipe(\n        filter(value => value !== null),\n        switchMap(search =>\n            this.serverRequest(search).pipe(startWith<readonly User[] | null>(null)),\n        ),\n        startWith(databaseMockData),\n    );\n\n    readonly testValue = new FormControl([databaseMockData[0]]);\n\n    onSearchChange(searchQuery: string | null): void {\n        this.search$.next(searchQuery);\n    }\n\n    /**\n     * Server request emulation\n     */\n    private serverRequest(searchQuery: string | null): Observable<readonly User[]> {\n        const result = databaseMockData.filter(user =>\n            TUI_DEFAULT_MATCHER(user, searchQuery || ''),\n        );\n\n        return of(result).pipe(delay(Math.random() * 1000 + 500));\n    }\n}\n"}}]);