(window.webpackJsonp=window.webpackJsonp||[]).push([[586],{qmmB:function(n,t,i){"use strict";i.r(t),t.default='<tui-hosted-dropdown\n    #dropdown\n    [content]="content"\n    [(open)]="dropdownOpen"\n>\n    <button\n        tuiIconButton\n        appearance="flat"\n        icon="tuiIconMoreVer"\n        type="button"\n        [pseudoHovered]="dropdown.open || null"\n    ></button>\n</tui-hosted-dropdown>\n<ng-template\n    #content\n    let-activeZone\n>\n    <tui-data-list\n        tuiDataListDropdownManager\n        [tuiActiveZoneParent]="activeZone"\n    >\n        <button\n            *tuiLet="\'French Fries\' as item"\n            tuiOption\n            [size]="size"\n            (click)="selectOption(item)"\n        >\n            {{ item }}\n        </button>\n        <button\n            tuiOption\n            tuiDropdownAlign="right"\n            [size]="size"\n            [tuiDropdown]="false"\n            [tuiDropdownContent]="burgersTmp"\n            [tuiDropdownSided]="true"\n        >\n            Burgers\n        </button>\n        <button\n            tuiOption\n            tuiDropdownAlign="right"\n            [size]="size"\n            [tuiDropdown]="false"\n            [tuiDropdownContent]="drinksTmp"\n            [tuiDropdownSided]="true"\n        >\n            Drinks\n        </button>\n        <button\n            *tuiLet="\'Ice Cream\' as item"\n            tuiOption\n            [size]="size"\n            (click)="selectOption(item)"\n        >\n            {{ item }}\n        </button>\n    </tui-data-list>\n    <ng-template #burgersTmp>\n        <tui-data-list\n            tuiDataListDropdownManager\n            [tuiActiveZoneParent]="activeZone"\n        >\n            <button\n                *ngFor="let burger of burgers"\n                tuiOption\n                [size]="size"\n                (click)="selectOption(burger)"\n            >\n                {{ burger }}\n            </button>\n            <button\n                tuiOption\n                tuiDropdownAlign="right"\n                [size]="size"\n                [tuiDropdown]="false"\n                [tuiDropdownContent]="drinksTmp"\n                [tuiDropdownSided]="true"\n            >\n                Nested menu\n            </button>\n        </tui-data-list>\n    </ng-template>\n    <ng-template #drinksTmp>\n        <tui-data-list>\n            <button\n                *ngFor="let drink of drinks"\n                tuiOption\n                [size]="size"\n                (click)="selectOption(drink)"\n            >\n                {{ drink }}\n            </button>\n        </tui-data-list>\n    </ng-template>\n</ng-template>\n'}}]);