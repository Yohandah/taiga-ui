import {InjectionToken} from '@angular/core';

export const TUI_ICONS = new InjectionToken<Record<string, string>>(
    `A key/value dictionary of icon names and src to be defined with TuiSvgService`,
    {
        factory: () => ({}),
    },
);
