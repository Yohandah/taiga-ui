(window.webpackJsonp=window.webpackJsonp||[]).push([[365],{"d/sY":function(n,t,e){"use strict";e.r(t),t.default="@import 'taiga-ui-local';\n\n:host {\n    --tui-chart-0: #c779d0;\n    --tui-chart-1: #feac5e;\n    --tui-chart-2: #ff5f6d;\n    --tui-chart-3: #4bc0c8;\n    --tui-chart-4: #9795cd;\n}\n\n.chart {\n    pointer-events: none;\n}\n\n.wrapper {\n    display: flex;\n    align-items: center;\n    margin-top: 1rem;\n\n    @media @mobile {\n        flex-direction: column;\n    }\n}\n\n.disable {\n    .transition(~'transform, color');\n    margin-left: 0.25rem;\n    will-change: transform;\n    color: var(--tui-text-02);\n    pointer-events: auto;\n\n    &:hover {\n        color: var(--tui-text-01);\n    }\n\n    &_rotated {\n        transform: rotate(45deg);\n    }\n}\n\n.legend {\n    margin: 0 0 0 2rem;\n    justify-content: center;\n\n    @media @mobile {\n        margin: 2rem 0 0;\n    }\n}\n\n.item {\n    margin: 0 0.5rem 0.75rem 0;\n}\n"}}]);