(window.webpackJsonp=window.webpackJsonp||[]).push([[1202],{oBXg:function(n,t,i){"use strict";i.r(t),t.default='<div class="example">\n    <h2>Custom colors</h2>\n\n    <p>\n        <b>Yellow / value = {{ firstRate }}</b>\n    </p>\n    <tui-rating\n        class="yellow"\n        [(ngModel)]="firstRate"\n    ></tui-rating>\n\n    <p>\n        <b>10 stars / value = {{ secondRate }}</b>\n    </p>\n    <tui-rating\n        class="pink"\n        [max]="10"\n        [(ngModel)]="secondRate"\n    ></tui-rating>\n</div>\n\n<div class="example">\n    <h2>Custom icons</h2>\n\n    <p>\n        <b>Controlled / value = {{ thirdRate }}</b>\n    </p>\n    <tui-rating\n        iconNormal="tuiIconHeart"\n        iconFilled="tuiIconHeartFilledLarge"\n        class="red"\n        [(ngModel)]="thirdRate"\n    ></tui-rating>\n</div>\n'}}]);