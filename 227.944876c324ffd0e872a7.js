(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{Pnkg:function(n,t,e){"use strict";e.r(t),t.default="@padding: 1rem;\n@padding-large: 1.25rem;\n\n.tui-island {\n    position: relative;\n    border-radius: var(--tui-radius-l);\n    background-color: var(--tui-base-01);\n    word-wrap: break-word;\n    text-decoration: none;\n    color: var(--tui-text-01);\n    outline: none;\n    box-sizing: content-box;\n\n    &:not(&_hoverable):before {\n        .fullsize();\n        content: '';\n        box-sizing: border-box;\n        border: 1px solid var(--tui-base-03);\n        border-radius: inherit;\n        pointer-events: none;\n    }\n\n    &:after {\n        content: '';\n        display: table;\n        clear: both;\n    }\n\n    &:focus,\n    &:hover:focus {\n        &:before {\n            border-color: var(--tui-focus);\n        }\n    }\n\n    &_transparent {\n        background-color: transparent;\n    }\n\n    &_hoverable {\n        .hoverable-with-shadow();\n        background: var(--tui-elevation-02);\n    }\n\n    &_size_s {\n        font: var(--tui-font-text-s);\n        padding: @padding;\n    }\n\n    &_size_m {\n        font: var(--tui-font-text-m);\n        padding: @padding;\n    }\n\n    &_size_l {\n        font: var(--tui-font-text-m);\n        padding: @padding-large;\n    }\n\n    &_text-align_left {\n        text-align: left;\n    }\n\n    &_text-align_center {\n        text-align: center;\n    }\n\n    &_text-align_right {\n        text-align: right;\n    }\n\n    &__content {\n        display: flex;\n        justify-content: space-between;\n\n        .tui-island_text-align_center & {\n            display: block;\n        }\n\n        & > * {\n            min-width: 0;\n        }\n    }\n\n    &__category {\n        font-size: 0.6875rem;\n        line-height: 1rem;\n        text-transform: uppercase;\n        letter-spacing: 0.075em;\n        margin: 0 0 @space * 2;\n        color: var(--tui-text-02);\n\n        .tui-island_size_l & {\n            margin: 0 0 @space * 3;\n        }\n    }\n\n    &__title {\n        font: var(--tui-font-text-m);\n        margin: 0 0 @space * 2;\n\n        .tui-island_size_m & {\n            font: var(--tui-font-heading-6);\n            margin: 0 0 @space * 3;\n        }\n\n        .tui-island_size_l & {\n            font: var(--tui-font-heading-6);\n        }\n    }\n\n    &__paragraph {\n        margin: 0;\n        color: var(--tui-text-02);\n\n        &_link.tui-island__paragraph {\n            margin-top: @space * 4;\n\n            .tui-island_size_l & {\n                margin: @space * 4 0 0;\n            }\n        }\n\n        &_button.tui-island__paragraph {\n            margin-top: @space * 5;\n\n            .tui-island_size_l & {\n                margin: @space * 5 0 0;\n            }\n        }\n    }\n\n    &__figure {\n        display: flex;\n        justify-content: center;\n        order: 1;\n        flex-shrink: 0;\n        margin: 0 0 0 @space * 4;\n\n        .tui-island_size_l & {\n            margin-left: @space * 9;\n        }\n\n        .tui-island_text-align_center & {\n            margin: 0 0 @space * 3 0;\n        }\n    }\n\n    &__carousel-controls {\n        display: flex;\n        padding-bottom: 1rem;\n        margin-bottom: 1rem;\n        border-bottom: 1px solid var(--tui-base-03);\n        white-space: nowrap;\n    }\n\n    &__carousel-pages {\n        margin-left: auto;\n        color: var(--tui-text-02);\n    }\n\n    &__carousel-button {\n        margin-right: @space * 2;\n    }\n\n    .tui-island &__footer-button {\n        display: block;\n        width: ~'calc(100% + 1.875rem);'; // margin compensation\n        margin: @padding calc(-1rem + 1px) calc(-1rem + 1px); // 1px is compensations of border\n        border-top: 1px solid var(--tui-base-03);\n        border-radius: 0 0 var(--tui-radius-l) var(--tui-radius-l);\n    }\n\n    .tui-island_size_l &__footer-button {\n        width: ~'calc(100% + 2.375rem);'; // margin compensation\n        margin: @padding-large calc(-1.25rem + 1px) calc(-1.25rem + 1px); // 1px is compensations of border\n    }\n}\n"}}]);