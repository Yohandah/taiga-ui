"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[26555],{82880:(C,c,t)=>{t.d(c,{b:()=>p});var s=t(5696),r=t(57750);const d="Bell";class p extends r.O{constructor(){super(...arguments),this.sizeVariants=["s","m","l"],this.hintContentVariants=["Some content"],this.hintDirectionVariants=s.FwI,this.hintAppearanceVariants=["","error","onDark"],this.typeVariants=["text","email","password","tel","url"],this.maxLengthVariants=[10],this.autocompleteVariants=["","off","cc-name","cc-number","cc-exp-month","cc-exp-year","cc-type","given-name","additional-name","family-name","username","email","street-address","postal-code","country-name"],this.inputModeVariants=["text","numeric"],this.customContentVariants=[d,"tuiIconSearchLarge","tuiIconCalendarLarge","tuiIconVisaMono","tuiIconMastercardMono"],this.customContentSelected="",this.inputMode=this.inputModeVariants[0],this.autocomplete="",this.maxLength=null,this.type=this.typeVariants[0],this.cleaner=!1,this.pseudoInvalid=null,this.success=!1,this.readOnly=!1,this.labelOutside=!1,this.size=this.sizeVariants[2],this.exampleText="",this.maxHeight=null,this.iconLeftVariants=["","tuiIconMailLarge","tuiIconPiechartLarge"],this.iconLeft=this.iconLeftVariants[0],this.hintContent=null,this.hintDirection=this.hintDirectionVariants[0],this.hintAppearance=this.hintAppearanceVariants[0],this.dropdownAlignVariants=["left","right"],this.dropdownAlign=s.Ehk.align,this.dropdownLimitWidthVariants=["fixed","min","auto"],this.dropdownLimitWidth=this.dropdownLimitWidthVariants[0],this.dropdownDirectionVariants=["bottom","top"],this.dropdownDirection=s.Ehk.direction,this.dropdownMinHeight=s.Ehk.minHeight,this.dropdownMaxHeight=s.Ehk.maxHeight}get customContent(){return this.customContentSelected===d?'<svg xmlns="http://www.w3.org/2000/svg"\nwidth="24px"\nheight="24px"\nviewBox="0 0 24 24">\n<path fill="currentColor" d="M10,17v1c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2l0-1h3.6L17,15.2V11c0-2.2-1.4-4-3-4h-1V5\n   c0-0.6-0.4-1-1-1s-1,0.4-1,1v2h-1c-1.3,0-3,1.9-3,4v4.2L6.4,17H10z M3.6,19L5,14.8V11c0-2.7,1.9-5.2,4-5.8V5c0-1.7,1.3-3,3-3\n   s3,1.3,3,3v0.1c2.3,0.6,4,3,4,5.9v3.8l1.4,4.2h-4.5c-0.4,1.8-2,3-3.9,3c-1.8,0-3.4-1.2-3.9-3H3.6z"/>\n</svg>':this.customContentSelected}get disabled(){return this.control.disabled}set disabled(u){u?this.control.disable():this.control.enable()}}},19180:(C,c,t)=>{t.d(c,{F:()=>E});var s=t(12057),r=t(12021),g=t(78697),d=t(5696),p=t(74788);let E=(()=>{class u{}return u.\u0275fac=function(T){return new(T||u)},u.\u0275mod=p.\u0275\u0275defineNgModule({type:u}),u.\u0275inj=p.\u0275\u0275defineInjector({imports:[[s.ez,r.Bz,g.Lx,d.jzK]]}),u})()},77788:(C,c,t)=>{t.d(c,{I:()=>E});var s=t(12057),r=t(12021),g=t(78697),d=t(5696),p=t(74788);let E=(()=>{class u{}return u.\u0275fac=function(T){return new(T||u)},u.\u0275mod=p.\u0275\u0275defineNgModule({type:u}),u.\u0275inj=p.\u0275\u0275defineInjector({imports:[[s.ez,r.Bz,g.Lx,d.jzK]]}),u})()},98204:(C,c,t)=>{t.d(c,{x:()=>r});const r=new(t(74788).InjectionToken)("Component extends AbstractExample class")},75695:(C,c,t)=>{t.d(c,{f:()=>u});var s=t(12057),r=t(78697),g=t(19180),d=t(77788),p=t(82387),E=t(74788);let u=(()=>{class e{}return e.\u0275fac=function(N){return new(N||e)},e.\u0275mod=E.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=E.\u0275\u0275defineInjector({imports:[[s.ez,r.Lx,g.F,d.I,p.J]]}),e})()},57750:(C,c,t)=>{t.d(c,{O:()=>s});class s{constructor(){this.pseudoVariants=[!1,!0],this.focusable=!0,this.pseudoFocused=null,this.pseudoHovered=null,this.pseudoPressed=null}}},82387:(C,c,t)=>{t.d(c,{J:()=>E});var s=t(12057),r=t(12021),g=t(78697),d=t(5696),p=t(74788);let E=(()=>{class u{}return u.\u0275fac=function(T){return new(T||u)},u.\u0275mod=p.\u0275\u0275defineNgModule({type:u}),u.\u0275inj=p.\u0275\u0275defineInjector({imports:[[s.ez,r.Bz,g.Lx,d.jzK]]}),u})()},26555:(C,c,t)=>{t.r(c),t.d(c,{ExampleTuiInputRangeModule:()=>ye});var s=t(12057),r=t(23738),g=t(12021),d=t(78697),p=t(5696),E=t(38780),u=t(75695),e=t(74788),T=t(82880),N=t(98204),B=t(88331),W=t(37159),w=t(66596),H=t(57068),O=t(71290),P=t(10200),M=t(68874);let j=(()=>{class o{constructor(){this.min=0,this.max=20,this.sliderStep=1,this.steps=(this.max-this.min)/this.sliderStep,this.quantum=1e-5,this.control=new r.FormControl([3.14159,15])}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["tui-input-range-example-1"]],decls:1,vars:7,consts:[[3,"min","max","quantum","steps","formControl","tuiTextfieldSize","tuiTextfieldLabelOutside"]],template:function(n,i){1&n&&e.\u0275\u0275element(0,"tui-input-range",0),2&n&&e.\u0275\u0275property("min",i.min)("max",i.max)("quantum",i.quantum)("steps",i.steps)("formControl",i.control)("tuiTextfieldSize","m")("tuiTextfieldLabelOutside",!0)},directives:[O.E,r.NgControlStatus,r.FormControlDirective,P.s,M.x],styles:["tui-input-range[_ngcontent-%COMP%]{max-width:30rem}"],changeDetection:0}),o})(),k=(()=>{class o{constructor(){this.max=50000001,this.min=5001,this.control=new r.FormControl([this.min,this.max/2])}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["tui-input-range-example-2"]],features:[e.\u0275\u0275ProvidersFeature([{provide:p.HOy,useValue:{decimalSeparator:".",thousandSeparator:",",zeroPadding:!0}}])],decls:1,vars:4,consts:[[3,"min","max","formControl","tuiTextfieldLabelOutside"]],template:function(n,i){1&n&&e.\u0275\u0275element(0,"tui-input-range",0),2&n&&e.\u0275\u0275property("min",i.min)("max",i.max)("formControl",i.control)("tuiTextfieldLabelOutside",!0)},directives:[O.E,r.NgControlStatus,r.FormControlDirective,M.x],styles:["tui-input-range[_ngcontent-%COMP%]{max-width:30rem}"],changeDetection:0}),o})();function Q(o,a){1&o&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275text(1,"Today"),e.\u0275\u0275elementEnd())}function Y(o,a){1&o&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275text(1,"Tomorrow"),e.\u0275\u0275elementEnd())}function Z(o,a){1&o&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275text(1,"In a week"),e.\u0275\u0275elementEnd())}function q(o,a){if(1&o&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275text(1),e.\u0275\u0275pipe(2,"i18nPlural"),e.\u0275\u0275elementEnd()),2&o){const n=e.\u0275\u0275nextContext().$implicit,i=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate2("",n,"\xa0",e.\u0275\u0275pipeBind2(2,2,n,i.pluralize),"")}}function ee(o,a){1&o&&(e.\u0275\u0275elementContainerStart(0,2),e.\u0275\u0275template(1,Q,2,0,"span",3),e.\u0275\u0275template(2,Y,2,0,"span",3),e.\u0275\u0275template(3,Z,2,0,"span",3),e.\u0275\u0275template(4,q,3,5,"span",4),e.\u0275\u0275elementContainerEnd()),2&o&&(e.\u0275\u0275property("ngSwitch",a.$implicit),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngSwitchCase",0),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngSwitchCase",1),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngSwitchCase",7))}let te=(()=>{class o{constructor(){this.control=new r.FormControl([0,7]),this.pluralize={"=0":"days later","=1":"day later",other:"days later"}}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["tui-input-range-example-3"]],decls:4,vars:6,consts:[[3,"min","max","leftValueContent","rightValueContent","pluralize","formControl"],["valueContent",""],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"]],template:function(n,i){if(1&n&&(e.\u0275\u0275elementStart(0,"tui-input-range",0),e.\u0275\u0275text(1," Desired departure day\n"),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(2,ee,5,4,"ng-template",null,1,e.\u0275\u0275templateRefExtractor)),2&n){const l=e.\u0275\u0275reference(3);e.\u0275\u0275property("min",0)("max",10)("leftValueContent",l)("rightValueContent",l)("pluralize",i.pluralize)("formControl",i.control)}},directives:[O.E,r.NgControlStatus,r.FormControlDirective,s.RF,s.n9,s.ED],pipes:[s.Gx],styles:["tui-input-range[_ngcontent-%COMP%]{max-width:30rem}"],changeDetection:0}),o})();var ne=t(79121),oe=t(34880);let ae=(()=>{class o{constructor(){this.control=new r.FormControl([20,40]),this.pluralize={other:"%"}}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["tui-input-range-example-4"]],decls:16,vars:6,consts:[[1,"wrapper"],[3,"min","max","segments","steps","pluralize","formControl"],[1,"ticks-labels"],["src","tuiIconSoundOff"],["src","tuiIconSound"]],template:function(n,i){1&n&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275elementStart(1,"tui-input-range",1),e.\u0275\u0275text(2," Select volume range "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",2),e.\u0275\u0275elementStart(4,"span"),e.\u0275\u0275element(5,"tui-svg",3),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"span"),e.\u0275\u0275text(7,"20%"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"span"),e.\u0275\u0275text(9,"40%"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"span"),e.\u0275\u0275text(11,"60%"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"span"),e.\u0275\u0275text(13,"80%"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"span"),e.\u0275\u0275element(15,"tui-svg",4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&n&&(e.\u0275\u0275advance(1),e.\u0275\u0275property("min",0)("max",100)("segments",5)("steps",5)("pluralize",i.pluralize)("formControl",i.control))},directives:[O.E,r.NgControlStatus,r.FormControlDirective,oe.P],styles:[".wrapper[_ngcontent-%COMP%]{max-width:30rem}.ticks-labels[_ngcontent-%COMP%]{display:flex;margin:.25rem .5rem 0;font:var(--tui-font-text-s);color:var(--tui-text-02);align-items:center}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;flex:2;text-align:center}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.5rem;flex:1;text-align:left}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.5rem;flex:1;text-align:right}tui-input-slider[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:calc(var(--tui-radius-m) / 2 + .5rem)}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:1rem;margin-right:1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-1rem}"],changeDetection:0}),o})();function ie(o,a){if(1&o&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&o){const n=a.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(n)}}let le=(()=>{class o{constructor(){this.control=new r.FormControl([1e5,5e5]),this.max=1e6,this.min=0,this.totalSteps=100,this.ticksLabels=["0","10K","100K","500k","1000K"],this.segments=this.ticksLabels.length-1,this.keySteps=[[0,this.min],[25,1e4],[50,1e5],[75,5e5],[100,this.max]]}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["tui-input-range-example-5"]],decls:11,vars:10,consts:[[1,"wrapper"],["id","input-range-with-key-steps",3,"min","max","steps","keySteps","segments","formControl"],[1,"ticks-labels"],[4,"ngFor","ngForOf"],[1,"tui-space_top-12","tui-space_bottom-0"],["for","input-range-with-key-steps"]],template:function(n,i){1&n&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275elementStart(1,"tui-input-range",1),e.\u0275\u0275text(2," Not linear growing sliders "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",2),e.\u0275\u0275template(4,ie,2,1,"span",3),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"p",4),e.\u0275\u0275text(6," Control value: "),e.\u0275\u0275elementStart(7,"output",5),e.\u0275\u0275elementStart(8,"code"),e.\u0275\u0275text(9),e.\u0275\u0275pipe(10,"json"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&n&&(e.\u0275\u0275advance(1),e.\u0275\u0275property("min",i.min)("max",i.max)("steps",i.totalSteps)("keySteps",i.keySteps)("segments",i.segments)("formControl",i.control),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngForOf",i.ticksLabels),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(10,8,i.control.value)))},directives:[O.E,r.NgControlStatus,r.FormControlDirective,s.sg],pipes:[s.Ts],styles:[".wrapper[_ngcontent-%COMP%]{max-width:30rem}.ticks-labels[_ngcontent-%COMP%]{display:flex;margin:.25rem .5rem 0;font:var(--tui-font-text-s);color:var(--tui-text-02)}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;flex:2;text-align:center}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.5rem;flex:1;text-align:left}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.5rem;flex:1;text-align:right}tui-input-slider[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:calc(var(--tui-radius-m) / 2 + .5rem)}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:1rem;margin-right:1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-1rem}"],changeDetection:0}),o})();var re=t(31823),_e=t(44051),ue=t(17023),se=t(76349);function me(o,a){1&o&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275text(1," Look into this example to understand difference between input-props "),e.\u0275\u0275elementStart(2,"code"),e.\u0275\u0275text(3,"[steps]"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(4," and "),e.\u0275\u0275elementStart(5,"code"),e.\u0275\u0275text(6,"[quantum]"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(7," . "),e.\u0275\u0275elementEnd())}function pe(o,a){1&o&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275i18nStart(1,17),e.\u0275\u0275element(2,"a",4),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd())}function ce(o,a){if(1&o&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275i18n(1,2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"p"),e.\u0275\u0275i18nStart(3,3),e.\u0275\u0275element(4,"a",4),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"tui-doc-example",5),e.\u0275\u0275template(6,me,8,0,"ng-template",null,6,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275elementStart(8,"p",7),e.\u0275\u0275text(9," Slider's step changes value by "),e.\u0275\u0275elementStart(10,"code"),e.\u0275\u0275text(11,"1"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(12," . "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(13,"p"),e.\u0275\u0275text(14," But text inputs allow to type decimal number which is multiple of "),e.\u0275\u0275elementStart(15,"code"),e.\u0275\u0275text(16,"0.00001"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(17," . "),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(18,"tui-input-range-example-1"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(19,"tui-doc-example",8),e.\u0275\u0275template(20,pe,3,0,"ng-template",null,9,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275element(22,"tui-input-range-example-2"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(23,"tui-doc-example",10),e.\u0275\u0275element(24,"tui-input-range-example-3"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(25,"tui-doc-example",11),e.\u0275\u0275elementStart(26,"tui-notification",12),e.\u0275\u0275i18nStart(27,13),e.\u0275\u0275element(28,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(29,"tui-input-range-example-4"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(30,"tui-doc-example",14),e.\u0275\u0275elementStart(31,"dl",15),e.\u0275\u0275i18nStart(32,16),e.\u0275\u0275elementStart(33,"dt"),e.\u0275\u0275element(34,"strong"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(35,"dd"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(36,"tui-input-range-example-5"),e.\u0275\u0275elementEnd()),2&o){const n=e.\u0275\u0275reference(7),i=e.\u0275\u0275reference(21),l=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("content",l.example1)("description",n),e.\u0275\u0275advance(14),e.\u0275\u0275property("content",l.example2)("description",i),e.\u0275\u0275advance(4),e.\u0275\u0275property("content",l.example3),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",l.example4),e.\u0275\u0275advance(5),e.\u0275\u0275property("content",l.example5)}}function de(o,a){if(1&o&&(e.\u0275\u0275elementStart(0,"tui-input-range",35),e.\u0275\u0275text(1," Just a very long label. Don't afraid it does not overflow the wrapper, the label is just cut off with ellipsis when it does not fit the wrapper. "),e.\u0275\u0275elementEnd()),2&o){const n=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("formControl",n.control)("min",n.min)("max",n.max)("segments",n.segments)("keySteps",n.keySteps)("pluralize",n.pluralize)("steps",n.steps)("quantum",n.quantum)("leftValueContent",n.leftValueContent)("rightValueContent",n.rightValueContent)("tuiTextfieldLabelOutside",n.labelOutside)("tuiTextfieldSize",n.size)("readOnly",n.readOnly)}}function Ee(o,a){1&o&&(e.\u0275\u0275i18nStart(0,36),e.\u0275\u0275element(1,"code"),e.\u0275\u0275i18nEnd())}function ge(o,a){1&o&&e.\u0275\u0275i18n(0,37)}function Te(o,a){1&o&&e.\u0275\u0275i18n(0,38)}function Ce(o,a){1&o&&e.\u0275\u0275i18n(0,39)}function Oe(o,a){1&o&&e.\u0275\u0275i18n(0,40)}function Ne(o,a){1&o&&e.\u0275\u0275i18n(0,41)}function Me(o,a){1&o&&e.\u0275\u0275i18n(0,42)}function Pe(o,a){1&o&&e.\u0275\u0275i18n(0,43)}function Se(o,a){1&o&&e.\u0275\u0275i18n(0,44)}function fe(o,a){1&o&&(e.\u0275\u0275i18nStart(0,45),e.\u0275\u0275elementStart(1,"p"),e.\u0275\u0275element(2,"a",46),e.\u0275\u0275elementEnd(),e.\u0275\u0275i18nEnd())}function Re(o,a){1&o&&e.\u0275\u0275i18n(0,47)}function Fe(o,a){1&o&&(e.\u0275\u0275i18nStart(0,48),e.\u0275\u0275elementStart(1,"a",49),e.\u0275\u0275element(2,"code"),e.\u0275\u0275elementEnd(),e.\u0275\u0275i18nEnd())}function he(o,a){1&o&&e.\u0275\u0275i18n(0,50)}function De(o,a){if(1&o){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tui-doc-demo",18),e.\u0275\u0275template(1,de,2,13,"ng-template"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"tui-doc-documentation"),e.\u0275\u0275template(3,Ee,2,0,"ng-template",19),e.\u0275\u0275listener("documentationPropertyValueChange",function(l){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().disabled=l}),e.\u0275\u0275template(4,ge,1,0,"ng-template",20),e.\u0275\u0275listener("documentationPropertyValueChange",function(l){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().min=l}),e.\u0275\u0275template(5,Te,1,0,"ng-template",21),e.\u0275\u0275listener("documentationPropertyValueChange",function(l){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().max=l}),e.\u0275\u0275template(6,Ce,1,0,"ng-template",22),e.\u0275\u0275listener("documentationPropertyValueChange",function(l){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().quantum=l}),e.\u0275\u0275template(7,Oe,1,0,"ng-template",23),e.\u0275\u0275listener("documentationPropertyValueChange",function(l){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().steps=l}),e.\u0275\u0275template(8,Ne,1,0,"ng-template",24),e.\u0275\u0275listener("documentationPropertyValueChange",function(l){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().segments=l}),e.\u0275\u0275template(9,Me,1,0,"ng-template",25),e.\u0275\u0275listener("documentationPropertyValueChange",function(l){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().keySteps=l}),e.\u0275\u0275template(10,Pe,1,0,"ng-template",26),e.\u0275\u0275listener("documentationPropertyValueChange",function(l){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().leftValueContent=l}),e.\u0275\u0275template(11,Se,1,0,"ng-template",27),e.\u0275\u0275listener("documentationPropertyValueChange",function(l){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().rightValueContent=l}),e.\u0275\u0275template(12,fe,3,0,"ng-template",28),e.\u0275\u0275listener("documentationPropertyValueChange",function(l){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().pluralize=l}),e.\u0275\u0275template(13,Re,1,0,"ng-template",29),e.\u0275\u0275listener("documentationPropertyValueChange",function(l){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().readOnly=l}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"h6",30),e.\u0275\u0275i18nStart(15,31),e.\u0275\u0275element(16,"a",32),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(17,"p"),e.\u0275\u0275text(18," Requires you to import "),e.\u0275\u0275elementStart(19,"code"),e.\u0275\u0275text(20,"TuiTextfieldControllerModule"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(21,"tui-doc-documentation"),e.\u0275\u0275template(22,Fe,3,0,"ng-template",33),e.\u0275\u0275listener("documentationPropertyValueChange",function(l){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().labelOutside=l}),e.\u0275\u0275template(23,he,1,0,"ng-template",34),e.\u0275\u0275listener("documentationPropertyValueChange",function(l){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().size=l}),e.\u0275\u0275elementEnd()}if(2&o){const n=e.\u0275\u0275nextContext();e.\u0275\u0275property("control",n.control),e.\u0275\u0275advance(3),e.\u0275\u0275property("documentationPropertyValue",n.disabled),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",n.minVariants)("documentationPropertyValue",n.min),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",n.maxVariants)("documentationPropertyValue",n.max),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",n.quantumVariants)("documentationPropertyValue",n.quantum),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",n.steps),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",n.segments),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",n.keyStepsVariants)("documentationPropertyValue",n.keySteps),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",n.valueContentVariants)("documentationPropertyValue",n.leftValueContent),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",n.valueContentVariants)("documentationPropertyValue",n.rightValueContent),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",n.pluralizeVariants)("documentationPropertyValue",n.pluralize),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",n.readOnly),e.\u0275\u0275advance(9),e.\u0275\u0275property("documentationPropertyValue",n.labelOutside),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",n.sizeVariants)("documentationPropertyValue",n.size)}}function xe(o,a){if(1&o&&(e.\u0275\u0275elementStart(0,"ol",51),e.\u0275\u0275elementStart(1,"li"),e.\u0275\u0275elementStart(2,"p"),e.\u0275\u0275i18nStart(3,52),e.\u0275\u0275element(4,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(5,"tui-doc-code",53),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"li"),e.\u0275\u0275elementStart(7,"p"),e.\u0275\u0275i18n(8,54),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(9,"tui-doc-code",55),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&o){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("code",n.exampleModule),e.\u0275\u0275advance(4),e.\u0275\u0275property("code",n.exampleHtml)}}let Ie=(()=>{class o extends T.b{constructor(){super(...arguments),this.exampleModule=t.e(98131).then(t.t.bind(t,98131,17)),this.exampleHtml=t.e(80169).then(t.t.bind(t,80169,17)),this.example1={HTML:t.e(53553).then(t.t.bind(t,53553,17)),TypeScript:t.e(2387).then(t.t.bind(t,2387,17))},this.example2={TypeScript:t.e(2642).then(t.t.bind(t,2642,17)),HTML:t.e(80334).then(t.t.bind(t,80334,17))},this.example3={HTML:t.e(76989).then(t.t.bind(t,76989,17)),TypeScript:t.e(90486).then(t.t.bind(t,90486,17))},this.example4={HTML:t.e(72066).then(t.t.bind(t,72066,17)),LESS:t.e(61802).then(t.t.bind(t,61802,17)),TypeScript:t.e(92585).then(t.t.bind(t,92585,17))},this.example5={TypeScript:t.e(1997).then(t.t.bind(t,1997,17)),HTML:t.e(18455).then(t.t.bind(t,18455,17)),LESS:t.e(1182).then(t.t.bind(t,1182,17))},this.control=new r.FormControl([0,10]),this.minVariants=[0,5,7.77,-10],this.min=this.minVariants[0],this.maxVariants=[10,100,1e4],this.max=this.maxVariants[0],this.segments=1,this.steps=0,this.quantumVariants=[1,.001,10,100],this.quantum=this.quantumVariants[0],this.sizeVariants=["m","l"],this.size=this.sizeVariants[1],this.pluralizeVariants=[{one:"thing",few:"things",many:"things",other:"things"},{one:"year",other:"years"}],this.pluralize=null,this.keyStepsVariants=[[[0,0],[50,1e3],[100,1e4]]],this.keySteps=null,this.valueContentVariants=["","TOP SECRET",({$implicit:n})=>n===this.max?"MAX":`${n}`,({$implicit:n})=>n===this.min?"MIN":`${n}`,({$implicit:n})=>5===n?"FIVE":`${n}`],this.leftValueContent=this.valueContentVariants[0],this.rightValueContent=this.valueContentVariants[0]}}return o.\u0275fac=function(){let a;return function(i){return(a||(a=e.\u0275\u0275getInheritedFactory(o)))(i||o)}}(),o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["example-tui-input-range"]],features:[e.\u0275\u0275ProvidersFeature([{provide:N.x,useExisting:(0,e.forwardRef)(()=>o)}]),e.\u0275\u0275InheritDefinitionFeature],decls:4,vars:0,consts:function(){let a,n,i,l,_,S,f,R,F,h,D,x,I,y,A,L,U,$,G,v,V,b,z,J,X,K;return a=$localize`:␟884e67f64e19bad9159bd976e34d0cb28b977c8e␟4886205873004282227:Component to input a range of values`,n=$localize`:␟0e557432cc61605fc75bbddcf8b886ac4208be05␟6882510303030671599: Number formatting can be customized by using ${"\ufffd#4\ufffd"}:START_LINK: TUI_NUMBER_FORMAT ${"\ufffd/#4\ufffd"}:CLOSE_LINK:`,i=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,l=$localize`:␟b6abdc66a9baa55f673af8772d69a86e5825d58e␟416952624038072227:Override number format`,_=$localize`:␟43b7d4bc7a9e19323730882e0a7e164992ae8241␟8145104323566549928:Custom value content`,S=$localize`:␟da3ee626899400b20e2eec11b3ddadea8a3ddcc5␟7433618922144942348:Visual segments + labels for ticks`,f=$localize`:␟792f0f73e29c38e731983b9276ab0ffd1de01441␟6496774841790769025: Use mixin ${"\ufffd#28\ufffd"}:START_TAG_CODE:tui-slider-ticks-labels${"\ufffd/#28\ufffd"}:CLOSE_TAG_CODE: to arrange ticks' labels (it places them strictly below ticks). `,R=$localize`:␟1c2f048f4281e4ee3db216fc44e19c2c36fb4478␟8285530445387044058:KeySteps`,F=$localize`:␟1d46e08d2d025f9bef376d0b06ec92af3afa4c8a␟626346517069880366:${"\ufffd#33\ufffd"}:START_TAG_DT:${"\ufffd#34\ufffd"}:START_TAG_STRONG:Key steps${"\ufffd/#34\ufffd"}:CLOSE_TAG_STRONG:${"\ufffd/#33\ufffd"}:CLOSE_TAG_DT:${"\ufffd#35\ufffd"}:START_TAG_DD:anchor points of non-uniform format between value and position${"\ufffd/#35\ufffd"}:CLOSE_TAG_DD:`,h=$localize`:␟be9dc2f76de6fa7386bee26f61e50e5056fd59fa␟3422900533866721611: Number formatting can be customized by using ${"\ufffd#2\ufffd"}:START_LINK: TUI_NUMBER_FORMAT ${"\ufffd/#2\ufffd"}:CLOSE_LINK: . `,D=$localize`:␟c650a3e713b58901a3b840e10c4051f561778c62␟3370799093568900154: Can be expanded with ${"\ufffd#16\ufffd"}:START_LINK: TuiTextfieldController ${"\ufffd/#16\ufffd"}:CLOSE_LINK:`,x=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,I=$localize`:␟a11028ca3c10ed474edf5dbfa2754e26d3d18cd2␟5313959728516521310: Min value `,y=$localize`:␟e19aee5686b43d533c4778f15c66a64584c493d3␟7525448588827957289: Max value `,A=$localize`:␟f26a39c14b6a1067d75ea1628e8b28ef256949db␟1397462847420435865: Minimum indivisible value `,L=$localize`:␟8dfc46111873255f9a00be9bbc894f8b5f38f108␟2083976673220646394: Number of actual discrete slider steps `,U=$localize`:␟7d601e1c1a940ef8835249f19cb47d2311d8fd1e␟4941460931129258402: A number of visual segments `,$=$localize`:␟2883d0ab4e0e0af2984d0424198392cd5a3d234d␟5861269790634284762: Anchor points of non-uniform format between value and position `,G=$localize`:␟f716bc1e8539db3ccdc8cd0d8b11655e2e367346␟8137484247214191672: A template for custom view of the left selected value. `,v=$localize`:␟50722b05fc2feefac0326777c1fd2c38a9b91fbf␟9113561072138988969: A template for custom view of the right selected value. `,V=$localize`:␟e3ded9e1b58cb93227552bbcc85bc87bb7aea484␟8945845948151000582: Plural forms for labels. ${"\ufffd#1\ufffd"}:START_PARAGRAPH: Use object that mimics the ${"\ufffd#2\ufffd"}:START_LINK: ICU format ${"\ufffd/#2\ufffd"}:CLOSE_LINK: for i18nPlural ${"\ufffd/#1\ufffd"}:CLOSE_PARAGRAPH:`,b=$localize`:␟88dd77c990e5f7fb83a3e3e006bb58f82260ca7e␟2592823355336045770: Component is read only `,z=$localize`:␟8755715075b5b08f672f5adda7f1629e1845d0ec␟2914660250050831108: Label is outside a component and made with ${"\ufffd#1\ufffd"}:START_LINK:${"\ufffd#2\ufffd"}:START_TAG_CODE:Label${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE:${"\ufffd/#1\ufffd"}:CLOSE_LINK:`,J=$localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `,X=$localize`:␟5bb45ac9857e1ec4af4c52fff5d02d8d4f344da1␟2768974860076608761: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiInputRangeModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,K=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","InputRange","package","KIT","type","components"],["pageTab",""],a,n,["tuiLink","","routerLink","/utils/tokens","fragment","number-format"],["id","base","heading",i,3,"content","description"],["stepQuantumDescription",""],[1,"tui-space_top-0"],["id","numberFormat","heading",l,3,"content","description"],["numberFormatTokenDescription",""],["id","valueContent","heading",_,3,"content"],["id","segments","heading",S,3,"content"],[1,"tui-space_bottom-8"],f,["id","keySteps","heading",R,3,"content"],[1,"tui-space_bottom-8","tui-space_top-0"],F,h,[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","quantum","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","steps","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","segments","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","keySteps","documentationPropertyMode","input","documentationPropertyType","TuiKeySteps",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","leftValueContent","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","rightValueContent","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","pluralize","documentationPropertyMode","input","documentationPropertyType","Record<string, string>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","readOnly","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],[1,"tui-text_h6"],D,["tuiLink","","target","_blank","routerLink","/directives/textfield-controller"],["documentationPropertyName","tuiTextfieldLabelOutside","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiTextfieldSize","documentationPropertyMode","input","documentationPropertyType","TuiSizeL",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"formControl","min","max","segments","keySteps","pluralize","steps","quantum","leftValueContent","rightValueContent","tuiTextfieldLabelOutside","tuiTextfieldSize","readOnly"],x,I,y,A,L,U,$,G,v,V,["tuiLink","","href","https://unicode-org.github.io/icu/userguide/format_parse/messages/"],b,z,["tuiLink","","routerLink","/components/label"],J,[1,"b-demo-steps"],X,["filename","myComponent.module.ts",3,"code"],K,["filename","myComponent.template.html",3,"code"]]},template:function(n,i){1&n&&(e.\u0275\u0275elementStart(0,"tui-doc-page",0),e.\u0275\u0275template(1,ce,37,7,"ng-template",1),e.\u0275\u0275template(2,De,24,22,"ng-template",1),e.\u0275\u0275template(3,xe,10,2,"ng-template",1),e.\u0275\u0275elementEnd())},directives:[B.q,W.n,w.V,g.yS,H.f,j,k,te,ne.L,ae,le,re.F,_e.z,ue.B,O.E,r.NgControlStatus,r.FormControlDirective,M.x,P.s,se.c],encapsulation:2,changeDetection:0}),o})(),ye=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=e.\u0275\u0275defineInjector({imports:[[E.$qG,E.aJT,u.f,r.ReactiveFormsModule,r.FormsModule,s.ez,E.Ltw,d.fV,p.fNO,p.jzK,p.cnw,p.EIu,p.HiG,g.Bz.forChild((0,d.Ve)(Ie))]]}),o})()}}]);