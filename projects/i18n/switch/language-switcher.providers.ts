import type {Provider} from '@angular/core';
import {TuiLanguageLoader} from '@taiga-ui/i18n/interfaces';
import {TUI_LANGUAGE_LOADER} from '@taiga-ui/i18n/tokens';
import {TUI_LANGUAGE} from '@taiga-ui/i18n/tools';

import {TuiLanguageSwitcher} from './language-switcher.service';

export function tuiLanguageSwitcher(loader: TuiLanguageLoader): Provider[] {
    return [
        {
            provide: TUI_LANGUAGE_LOADER,
            useFactory: () => loader,
        },
        {
            provide: TUI_LANGUAGE,
            useExisting: TuiLanguageSwitcher,
        },
    ];
}
