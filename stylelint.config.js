module.exports = {
    extends: ['@tinkoff/stylelint-config/less', '@tinkoff/stylelint-config/angular'],
    ignoreFiles: [
        '**/demo/**',
        '**/dist/**',
        '**/coverage/**',
        '**/node_modules/**',

        // TODO: remove in v3.0
        '**/slider-old.style.less',
        '**/slider.common.style.less',
    ],
    rules: {
        'unit-allowed-list': [
            'px',
            'rem',
            'em',
            'deg',
            's',
            'ms',
            'dpcm',
            'turn',
            'ch',
            '%',
            // 'vw/vh' have a big problem in Safari, when developers set viewport=width~1280px in Application
        ],
        'function-no-unknown': [
            true,
            {
                ignoreFunctions: ['/fade/'],
            },
        ],
        'selector-class-pattern': '^(_.*)|(t-.*)|(tui-.*)|(ng-.*)|(hljs.*)$',
    },
};
