(window.webpackJsonp=window.webpackJsonp||[]).push([[541],{MEVc:function(t,n,i){"use strict";i.r(n),n.default='<tui-combo-box\n    class="b-form"\n    [(ngModel)]="value"\n>\n    Country\n    <ng-container *tuiDataList>\n        <cdk-virtual-scroll-viewport\n            *tuiLet="countries | tuiFilterByInput as items"\n            tuiScrollable\n            class="scroll"\n            [style.height.px]="items.length * 44"\n            [itemSize]="44"\n        >\n            <tui-data-list>\n                <button\n                    *cdkVirtualFor="let item of items"\n                    tuiOption\n                    [value]="item"\n                >\n                    {{item}}\n                </button>\n            </tui-data-list>\n        </cdk-virtual-scroll-viewport>\n    </ng-container>\n</tui-combo-box>\n'}}]);