"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[14084],{14084:t=>{t.exports='export default "<nav\\n    tuiTabs\\n    [(activeItemIndex)]=\\"index\\"\\n>\\n    <button tuiTab>Just a tab</button>\\n    <tui-hosted-dropdown\\n        tuiDropdownHover\\n        [content]=\\"content\\"\\n        [(open)]=\\"open\\"\\n    >\\n        <button\\n            tuiTab\\n            (tui-tab-activate.stop)=\\"(0)\\"\\n        >\\n            Hoverable/Clickable\\n        </button>\\n        <ng-template #content>\\n            <tui-data-list (click)=\\"onClick()\\">\\n                <button tuiOption>Option 1</button>\\n                <button tuiOption>Option 2</button>\\n                <button tuiOption>Option 3</button>\\n            </tui-data-list>\\n        </ng-template>\\n    </tui-hosted-dropdown>\\n    <button tuiTab>Another tab</button>\\n</nav>\\n";'}}]);