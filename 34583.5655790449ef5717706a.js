"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[34583],{34583:n=>{n.exports='export default "<div class=\\"tui-player\\">\\n    <audio\\n        #audio\\n        tuiMedia\\n        src=\\"assets/media/strays.mp3\\"\\n        [(currentTime)]=\\"currentTime\\"\\n        [(paused)]=\\"paused\\"\\n    ></audio>\\n    <button\\n        tuiIconButton\\n        type=\\"button\\"\\n        shape=\\"rounded\\"\\n        appearance=\\"secondary\\"\\n        title=\\"Play/Pause\\"\\n        [icon]=\\"icon\\"\\n        (click)=\\"toggleState()\\"\\n    ></button>\\n    <div>\\n        <a\\n            tuiLink\\n            href=\\"https://waterplea.bandcamp.com/\\"\\n        >\\n            Waterplea\\n        </a>\\n        \u2014 Strays\\n        <tui-slider\\n            class=\\"slider\\"\\n            [max]=\\"audio.duration\\"\\n            [(ngModel)]=\\"currentTime\\"\\n        ></tui-slider>\\n    </div>\\n</div>\\n";'}}]);