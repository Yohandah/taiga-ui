"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[63481],{82880:(g,c,t)=>{t.d(c,{b:()=>F});var d=t(37267),a=t(57750);const D="Bell";class F extends a.O{constructor(){super(...arguments),this.sizeVariants=["s","m","l"],this.hintContentVariants=["Some content"],this.hintDirectionVariants=["left","right","bottom-left","bottom-right","bottom-middle","top-left","top-right","top-middle"],this.hintModeVariants=["error","onDark"],this.typeVariants=["text","email","password","tel","url"],this.maxLengthVariants=[10],this.autocompleteVariants=["","off","cc-name","cc-number","cc-exp-month","cc-exp-year","cc-type","given-name","additional-name","family-name","username","email","street-address","postal-code","country-name"],this.inputModeVariants=["text","numeric"],this.customContentVariants=[D,"tuiIconSearchLarge","tuiIconCalendarLarge","tuiIconVisaMono","tuiIconMastercardMono"],this.customContentSelected="",this.inputMode=this.inputModeVariants[0],this.autocomplete="",this.maxLength=null,this.type=this.typeVariants[0],this.cleaner=!1,this.pseudoInvalid=null,this.success=!1,this.readOnly=!1,this.labelOutside=!1,this.size=this.sizeVariants[2],this.exampleText="",this.hintContent=null,this.hintDirection=this.hintDirectionVariants[2],this.hintMode=null,this.dropdownAlignVariants=["left","right"],this.dropdownAlign=this.dropdownAlignVariants[0],this.dropdownLimitWidthVariants=["fixed","min"],this.dropdownLimitWidth=this.dropdownLimitWidthVariants[0],this.dropdownDirectionVariants=["top","bottom"],this.iconLeftVariants=["","tuiIconMailLarge","tuiIconPiechartLarge"],this.iconLeft=this.iconLeftVariants[0],this.dropdownDirection=null,this.dropdownSided=!1,this.dropdownMinHeight=d.q_r,this.dropdownMaxHeight=d.zeq}get customContent(){return this.customContentSelected===D?'<svg xmlns="http://www.w3.org/2000/svg"\nwidth="24px"\nheight="24px"\nviewBox="0 0 24 24">\n<path fill="currentColor" d="M10,17v1c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2l0-1h3.6L17,15.2V11c0-2.2-1.4-4-3-4h-1V5\n   c0-0.6-0.4-1-1-1s-1,0.4-1,1v2h-1c-1.3,0-3,1.9-3,4v4.2L6.4,17H10z M3.6,19L5,14.8V11c0-2.7,1.9-5.2,4-5.8V5c0-1.7,1.3-3,3-3\n   s3,1.3,3,3v0.1c2.3,0.6,4,3,4,5.9v3.8l1.4,4.2h-4.5c-0.4,1.8-2,3-3.9,3c-1.8,0-3.4-1.2-3.9-3H3.6z"/>\n</svg>':this.customContentSelected}get disabled(){return this.control.disabled}set disabled(r){r?this.control.disable():this.control.enable()}}},94780:(g,c,t)=>{t.d(c,{V:()=>m});var d=t(12057),a=t(12021),p=t(46244),D=t(37267),F=t(74788);let m=(()=>{class r{}return r.\u0275fac=function(T){return new(T||r)},r.\u0275mod=F.\u0275\u0275defineNgModule({type:r}),r.\u0275inj=F.\u0275\u0275defineInjector({imports:[[d.ez,a.Bz,p.Lx,D.jzK]]}),r})()},77788:(g,c,t)=>{t.d(c,{I:()=>m});var d=t(12057),a=t(12021),p=t(46244),D=t(37267),F=t(74788);let m=(()=>{class r{}return r.\u0275fac=function(T){return new(T||r)},r.\u0275mod=F.\u0275\u0275defineNgModule({type:r}),r.\u0275inj=F.\u0275\u0275defineInjector({imports:[[d.ez,a.Bz,p.Lx,D.jzK]]}),r})()},98204:(g,c,t)=>{t.d(c,{x:()=>a});const a=new(t(74788).InjectionToken)("Component extends AbstractExample class")},75695:(g,c,t)=>{t.d(c,{f:()=>r});var d=t(12057),a=t(46244),p=t(94780),D=t(77788),F=t(82387),m=t(74788);let r=(()=>{class e{}return e.\u0275fac=function(M){return new(M||e)},e.\u0275mod=m.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=m.\u0275\u0275defineInjector({imports:[[d.ez,a.Lx,p.V,D.I,F.J]]}),e})()},57750:(g,c,t)=>{t.d(c,{O:()=>d});class d{constructor(){this.pseudoVariants=[!1,!0],this.focusable=!0,this.pseudoFocused=null,this.pseudoHovered=null,this.pseudoPressed=null}}},82387:(g,c,t)=>{t.d(c,{J:()=>m});var d=t(12057),a=t(12021),p=t(46244),D=t(37267),F=t(74788);let m=(()=>{class r{}return r.\u0275fac=function(T){return new(T||r)},r.\u0275mod=F.\u0275\u0275defineNgModule({type:r}),r.\u0275inj=F.\u0275\u0275defineInjector({imports:[[d.ez,a.Bz,p.Lx,D.jzK]]}),r})()},63481:(g,c,t)=>{t.r(c),t.d(c,{ExampleTuiEditorNewModule:()=>Ne});var d=t(12057),a=t(23738),p=t(12021),D=t(46244),F=t(97831),m=t(37267),r=t(75695),e=t(74788),T=t(82880),M=t(98204),W=t(88331),G=t(37159),w=t(66596),V=t(79121),U=t(57068),_=t(76189),O=t(94624),f=t(20179);let b=(()=>{class n{constructor(){this.control=new a.FormControl('<p><strong>WYSIWYG</strong> (<em>What you see is what you get</em>) \u2014 <u>Rich Text Editor</u> for using with Angular<sup> forms.</sup></p><h1>Heading</h1><p>Lorem ipsum dolor sit amet consectetur <a target="_blank" rel="noopener noreferrer nofollow" href="http://taiga-ui.dev">adipiscing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p><blockquote><p>ad minim veniam, quis nostrud exercitation <span style="color: rgb(196, 11, 8); background-color: rgb(221, 228, 237)">ullamco</span>, laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p></blockquote><p style="text-align: right">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><pre><code>class EditorExample {}</code></pre><table><tbody><tr><th colspan="1" rowspan="1"><p></p></th><th colspan="1" rowspan="1"><p>Free</p></th><th colspan="1" rowspan="1"><p>Pro</p></th></tr><tr><td colspan="1" rowspan="1"><p>24/7 support</p></td><td style="background: #FFDD2C" colspan="1" rowspan="1"><p>+</p></td><td style="background: #39b54a" colspan="1" rowspan="1"><p>+</p></td></tr></tbody></table><p style="text-align: center"><code>Code in text</code></p>',a.Validators.required)}example1(){this.control.setValue('<p>Control</p><h2>is</h2><h1><span style="color: #e01f19">updated</span></h1>')}example2(){this.control.setValue("\n                <ul>\n                    <li>1</li>\n                    <li>2</li>\n                </ul>\n\n                <ol>\n                    <li>A</li>\n                    <li>B</li>\n                </ol>\n            ")}example3(){this.control.setValue("\n                <ul>\n                  <li>\n                    1\n                    <ul>\n                      <li>\n                        2\n                        <ul>\n                          <li>3</li>\n                          <li>4</li>\n                        </ul>\n                      </li>\n                    </ul>\n                  </li>\n                  <li>5</li>\n                </ul>\n\n                <ol>\n                  <li>\n                    1\n                    <ol>\n                      <li>\n                        2\n                        <ol>\n                          <li>3</li>\n                          <li>4</li>\n                        </ol>\n                      </li>\n                    </ol>\n                  </li>\n                  <li>5</li>\n                </ol>\n            ")}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-editor-example-1"]],features:[e.\u0275\u0275ProvidersFeature([{provide:F.Wf,useValue:F.PD},{provide:F.Su,useValue:F.ly}])],decls:16,vars:3,consts:[["tuiButton","","type","button",1,"tui-space_right-3","tui-space_bottom-3",3,"click"],["new","","exampleText","exampleText",1,"editor",3,"formControl"],[3,"content"]],template:function(o,l){1&o&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275elementStart(1,"button",0),e.\u0275\u0275listener("click",function(){return l.example1()}),e.\u0275\u0275text(2," Ex. #1 "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"button",0),e.\u0275\u0275listener("click",function(){return l.example2()}),e.\u0275\u0275text(4," Ex. #2 "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"button",0),e.\u0275\u0275listener("click",function(){return l.example3()}),e.\u0275\u0275text(6," Ex. #3 "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"tui-editor",1),e.\u0275\u0275text(8," Placeholder\n"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"h4"),e.\u0275\u0275text(10,"HTML:"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(11,"tui-editor-socket",2),e.\u0275\u0275elementStart(12,"h4"),e.\u0275\u0275text(13,"Text:"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"p"),e.\u0275\u0275text(15),e.\u0275\u0275elementEnd()),2&o&&(e.\u0275\u0275advance(7),e.\u0275\u0275property("formControl",l.control),e.\u0275\u0275advance(4),e.\u0275\u0275property("content",l.control.value),e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate(l.control.value))},directives:[_.v,O.y,a.NgControlStatus,a.FormControlDirective,f.D],styles:[".editor[_ngcontent-%COMP%]{max-height:18.75rem}"],changeDetection:0}),n})();var v=t(64762),z=t(62939),B=t(36563),j=t(17163);function H(n,i){if(1&n){const o=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"button",6),e.\u0275\u0275listener("click",function(){const u=e.\u0275\u0275restoreView(o).$implicit;return e.\u0275\u0275nextContext(2).insertSmile(u)}),e.\u0275\u0275elementEnd()}2&n&&e.\u0275\u0275property("innerHTML",i.$implicit,e.\u0275\u0275sanitizeHtml)}function K(n,i){if(1&n&&(e.\u0275\u0275elementStart(0,"div",4),e.\u0275\u0275template(1,H,1,1,"button",5),e.\u0275\u0275elementEnd()),2&n){const o=i.$implicit,l=e.\u0275\u0275nextContext();e.\u0275\u0275property("tuiActiveZoneParent",o),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",l.smiles)}}let J=(()=>{class n{constructor(o){this.editor=o,this.smiles=["&#129409;","&#9200;","&#9749;","&#9989;","&#10060;","&#10071;","&#10133;","&#128064;","&#128070;","&#128076;","&#128522;","&#128640;"]}insertSmile(o){this.editor.getOriginTiptapEditor().chain().focus().insertContent(`<p data-type="emoji">${o}</p>`).insertContent(" ").run()}}return n.\u0275fac=function(o){return new(o||n)(e.\u0275\u0275directiveInject(F.$3))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["smiles-tool"]],decls:5,vars:3,consts:[["tuiDropdownAlign","left",1,"t-wrapper",3,"content"],["dropdown",""],["tuiIconButton","","type","button","size","s","icon","tuiIconStarLarge","appearance","icon","automation-id","smiles-tool__button",1,"tool-button",3,"pseudoActive","focusable"],["smileDropdown",""],[1,"smiles",3,"tuiActiveZoneParent"],["class","smile",3,"innerHTML","click",4,"ngFor","ngForOf"],[1,"smile",3,"innerHTML","click"]],template:function(o,l){if(1&o&&(e.\u0275\u0275elementStart(0,"tui-hosted-dropdown",0,1),e.\u0275\u0275element(2,"button",2),e.\u0275\u0275template(3,K,2,2,"ng-template",null,3,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275elementEnd()),2&o){const s=e.\u0275\u0275reference(1),u=e.\u0275\u0275reference(4);e.\u0275\u0275property("content",u),e.\u0275\u0275advance(2),e.\u0275\u0275property("pseudoActive",s.open)("focusable",s.open)}},directives:[z.o,B.S,_.v,j.e,d.sg],styles:[".tool-button[_ngcontent-%COMP%]{transition-property:background;transition-duration:.3s;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}.tool-button[_ngcontent-%COMP%]:hover{background:var(--tui-secondary-hover)}.smiles[_ngcontent-%COMP%]{max-width:18rem;display:flex;flex-wrap:wrap;justify-content:space-around;align-items:center}.smile[_ngcontent-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;background:none;font-size:inherit;line-height:inherit;transition-property:background;transition-duration:.3s;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;flex:1 0 21%;cursor:pointer;border-radius:var(--tui-radius-s);font:var(--tui-font-heading-4);padding:1rem}.smile[_ngcontent-%COMP%]:hover{background:var(--tui-secondary-hover)}"]}),n})();var X=t(82707),Q=t(34880);function Y(){return(0,v.mG)(this,void 0,void 0,function*(){return(yield t.e(41901).then(t.bind(t,41901))).default})}function Z(){return(0,v.mG)(this,void 0,void 0,function*(){return(yield t.e(51177).then(t.bind(t,51177))).EmojiExtension})}let k=(()=>{class n{constructor(){this.builtInTools=[F._2.Undo],this.control=new a.FormControl("",a.Validators.required)}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-editor-example-2"]],features:[e.\u0275\u0275ProvidersFeature([{provide:F.Wf,useValue:[Y(),Z()]}])],decls:7,vars:2,consts:[["new","",1,"editor",3,"formControl","tools"],["ngProjectAs","tools",5,["tools"]],["tuiItem",""],[1,"hint"],["src","tuiIconArrowLeft"]],template:function(o,l){1&o&&(e.\u0275\u0275elementStart(0,"tui-editor",0),e.\u0275\u0275text(1," Smiles are custom tool. Try it. "),e.\u0275\u0275elementContainerStart(2,1),e.\u0275\u0275element(3,"smiles-tool",2),e.\u0275\u0275elementStart(4,"span",3),e.\u0275\u0275element(5,"tui-svg",4),e.\u0275\u0275text(6," click it "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementContainerEnd(),e.\u0275\u0275elementEnd()),2&o&&e.\u0275\u0275property("formControl",l.control)("tools",l.builtInTools)},directives:[O.y,a.NgControlStatus,a.FormControlDirective,J,X.w,Q.P],styles:[".hint[_ngcontent-%COMP%]{color:var(--tui-base-05);height:100%;display:flex;align-items:center}"],changeDetection:0}),n})();var q=t(58497),S=t(19368),ee=t(43190),te=t(46782);let oe=(()=>{class n{constructor(o,l,s){this.imageLoader=o,this.http=l,this.builtInTools=[F._2.Undo,F._2.Img],this.base64Image$=this.http.get("assets/images/lumberjack.png",{responseType:"blob"}).pipe((0,ee.w)(u=>this.imageLoader(u))),this.control=new a.FormControl(""),this.base64Image$.pipe((0,te.R)(s)).subscribe(u=>{this.control.patchValue(`\n                <img data-type="image-editor" src="${u}" width="300">\n                <p>Try to drag right border of image!</p>\n\n                <p>To change min size of image use token <code>TUI_EDITOR_MIN_IMAGE_WIDTH</code>.</p>\n            `)})}}return n.\u0275fac=function(o){return new(o||n)(e.\u0275\u0275directiveInject(F.p7),e.\u0275\u0275directiveInject(q.eN),e.\u0275\u0275directiveInject(S.a31))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-editor-example-3"]],features:[e.\u0275\u0275ProvidersFeature([S.a31,{provide:F.Wf,deps:[e.Injector],useFactory:i=>[t.e(41901).then(t.bind(t,41901)).then(o=>o.default),Promise.resolve().then(t.bind(t,31471)).then(o=>o.createImageEditorExtension(i))]},{provide:F.Su,useValue:F.ly}])],decls:4,vars:3,consts:[["new","",1,"editor",3,"formControl","tools"],[3,"content"]],template:function(o,l){1&o&&(e.\u0275\u0275element(0,"tui-editor",0),e.\u0275\u0275elementStart(1,"h4"),e.\u0275\u0275text(2,"HTML:"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(3,"tui-editor-socket",1)),2&o&&(e.\u0275\u0275property("formControl",l.control)("tools",l.builtInTools),e.\u0275\u0275advance(3),e.\u0275\u0275property("content",l.control.value))},directives:[O.y,a.NgControlStatus,a.FormControlDirective,f.D],styles:[".editor[_ngcontent-%COMP%]{min-height:30rem}"],changeDetection:0}),n})(),ne=(()=>{class n{constructor(){this.imagePreview=new e.EventEmitter}click(o){o instanceof HTMLImageElement&&this.imagePreview.emit(o)}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275dir=e.\u0275\u0275defineDirective({type:n,selectors:[["tui-editor-socket","imagePreview",""]],hostAttrs:[1,"_preview-image"],hostBindings:function(o,l){1&o&&e.\u0275\u0275listener("click",function(u){return l.click(u.target)})},outputs:{imagePreview:"imagePreview"}}),n})();var I=t(45305),ie=t(10643),Fe=t(4498);const le=["previewImages"];function ae(n,i){if(1&n&&e.\u0275\u0275element(0,"img",4),2&n){const o=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("src",o.image.src,e.\u0275\u0275sanitizeUrl)}}function re(n,i){if(1&n){const o=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tui-preview",1),e.\u0275\u0275template(1,ae,1,1,"img",2),e.\u0275\u0275elementStart(2,"button",3),e.\u0275\u0275listener("click",function(){return e.\u0275\u0275restoreView(o).$implicit.complete()}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()}if(2&n){const o=e.\u0275\u0275nextContext();e.\u0275\u0275property("rotatable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",o.image)}}let se=(()=>{class n{constructor(o){this.dialogService=o}showImage(o){this.image=o,this.dialogService.open(this.template||"").subscribe()}}return n.\u0275fac=function(o){return new(o||n)(e.\u0275\u0275directiveInject(I.iK))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["image-preview-example"]],viewQuery:function(o,l){if(1&o&&e.\u0275\u0275viewQuery(le,5),2&o){let s;e.\u0275\u0275queryRefresh(s=e.\u0275\u0275loadQuery())&&(l.template=s.first)}},decls:2,vars:0,consts:[["previewImages",""],[3,"rotatable"],["loading","lazy","alt","","class","t-image-preview",3,"src",4,"ngIf"],["tuiIconButton","","tuiPreviewAction","","icon","tuiIconCloseLarge","title","Close",3,"click"],["loading","lazy","alt","",1,"t-image-preview",3,"src"]],template:function(o,l){1&o&&e.\u0275\u0275template(0,re,3,2,"ng-template",null,0,e.\u0275\u0275templateRefExtractor)},directives:[ie.m,d.O5,_.v,Fe.v],styles:[".t-image-preview[_ngcontent-%COMP%]{width:100%}"],changeDetection:0}),n})(),ue=(()=>{class n{constructor(){this.builtInTools=[F._2.Undo,F._2.Img],this.control=new a.FormControl(""),this.control.patchValue('\n                <p>Small image</p>\n                <img data-type="image-editor" src="assets/images/lumberjack.png" width="300">\n\n                <p>Big image</p>\n                <img data-type="image-editor" src="assets/images/big-wallpaper.jpg" width="500">\n            ')}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-editor-example-4"]],features:[e.\u0275\u0275ProvidersFeature([S.a31,{provide:F.Wf,deps:[e.Injector],useFactory:i=>[t.e(41901).then(t.bind(t,41901)).then(o=>o.default),Promise.resolve().then(t.bind(t,31471)).then(o=>o.createImageEditorExtension(i))]},{provide:F.Su,useValue:F.ly}])],decls:6,vars:3,consts:[["new","",1,"editor",3,"formControl","tools"],[3,"content","imagePreview"],["preview",""]],template:function(o,l){if(1&o){const s=e.\u0275\u0275getCurrentView();e.\u0275\u0275element(0,"tui-editor",0),e.\u0275\u0275elementStart(1,"h4"),e.\u0275\u0275text(2,"HTML:"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"tui-editor-socket",1),e.\u0275\u0275listener("imagePreview",function(C){return e.\u0275\u0275restoreView(s),e.\u0275\u0275reference(5).showImage(C)}),e.\u0275\u0275element(4,"image-preview-example",null,2),e.\u0275\u0275elementEnd()}2&o&&(e.\u0275\u0275property("formControl",l.control)("tools",l.builtInTools),e.\u0275\u0275advance(3),e.\u0275\u0275property("content",l.control.value))},directives:[O.y,a.NgControlStatus,a.FormControlDirective,f.D,ne,se],styles:[".editor[_ngcontent-%COMP%]{min-height:30rem}"],changeDetection:0}),n})();var de=t(31823),me=t(23618),ce=t(17023),Ee=t(76349);function De(n,i){if(1&n&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275i18nStart(1,3),e.\u0275\u0275element(2,"a",4),e.\u0275\u0275element(3,"a",5),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"tui-notification",6),e.\u0275\u0275i18n(5,7),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"tui-doc-example",8),e.\u0275\u0275element(7,"tui-editor-example-1"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"tui-doc-example",9),e.\u0275\u0275elementStart(9,"h3"),e.\u0275\u0275text(10,"You can create your own tool:"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"ul",10),e.\u0275\u0275i18nStart(12,11),e.\u0275\u0275elementStart(13,"li",12),e.\u0275\u0275element(14,"a",13),e.\u0275\u0275element(15,"code"),e.\u0275\u0275element(16,"code"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(17,"li",12),e.\u0275\u0275element(18,"code"),e.\u0275\u0275element(19,"code"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(20,"li",12),e.\u0275\u0275element(21,"code"),e.\u0275\u0275elementEnd(),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(22,"tui-editor-example-2"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(23,"tui-doc-example",14),e.\u0275\u0275element(24,"tui-editor-example-3"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(25,"tui-doc-example",15),e.\u0275\u0275element(26,"tui-editor-example-4"),e.\u0275\u0275elementEnd()),2&n){const o=e.\u0275\u0275nextContext();e.\u0275\u0275advance(6),e.\u0275\u0275property("content",o.example1),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",o.example2),e.\u0275\u0275advance(15),e.\u0275\u0275property("content",o.example3),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",o.example4)}}function pe(n,i){1&n&&(e.\u0275\u0275i18nStart(0,20),e.\u0275\u0275element(1,"code"),e.\u0275\u0275i18nEnd())}function Te(n,i){1&n&&e.\u0275\u0275i18n(0,21)}function ge(n,i){1&n&&e.\u0275\u0275i18n(0,22)}function Oe(n,i){if(1&n){const o=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tui-doc-demo"),e.\u0275\u0275elementStart(1,"tui-editor",16),e.\u0275\u0275text(2," Start typing "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"tui-doc-documentation"),e.\u0275\u0275template(4,pe,2,0,"ng-template",17),e.\u0275\u0275listener("documentationPropertyValueChange",function(s){return e.\u0275\u0275restoreView(o),e.\u0275\u0275nextContext().disabled=s}),e.\u0275\u0275template(5,Te,1,0,"ng-template",18),e.\u0275\u0275listener("documentationPropertyValueChange",function(s){return e.\u0275\u0275restoreView(o),e.\u0275\u0275nextContext().exampleText=s}),e.\u0275\u0275template(6,ge,1,0,"ng-template",19),e.\u0275\u0275listener("documentationPropertyValueChange",function(s){return e.\u0275\u0275restoreView(o),e.\u0275\u0275nextContext().tools=s}),e.\u0275\u0275elementEnd()}if(2&n){const o=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("formControl",o.control)("focusable",o.focusable)("exampleText",o.exampleText)("readOnly",o.readOnly)("tools",o.tools)("pseudoInvalid",o.pseudoInvalid)("pseudoFocus",o.pseudoFocused)("pseudoHover",o.pseudoHovered),e.\u0275\u0275advance(3),e.\u0275\u0275property("documentationPropertyValue",o.disabled),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",o.exampleText),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",o.toolsVariants)("documentationPropertyValue",o.tools)}}function Ce(n,i){if(1&n&&(e.\u0275\u0275elementStart(0,"ol",23),e.\u0275\u0275elementStart(1,"li"),e.\u0275\u0275elementStart(2,"p"),e.\u0275\u0275i18nStart(3,24),e.\u0275\u0275element(4,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(5,"tui-doc-code",25),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"li"),e.\u0275\u0275elementStart(7,"p"),e.\u0275\u0275i18n(8,26),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(9,"tui-doc-code",27),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"li"),e.\u0275\u0275elementStart(11,"p"),e.\u0275\u0275i18n(12,28),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(13,"tui-doc-code",29),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&n){const o=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("code",o.exampleModule),e.\u0275\u0275advance(4),e.\u0275\u0275property("code",o.exampleHtml),e.\u0275\u0275advance(4),e.\u0275\u0275property("code",o.provideExtensions)}}function Se(n,i){if(1&n&&(e.\u0275\u0275elementStart(0,"h2"),e.\u0275\u0275i18n(1,30),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(2," You can configure some editor's params via DI-token "),e.\u0275\u0275elementStart(3,"code"),e.\u0275\u0275text(4,"TUI_EDITOR_OPTIONS"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(5," . "),e.\u0275\u0275elementStart(6,"p"),e.\u0275\u0275elementStart(7,"strong"),e.\u0275\u0275text(8,"Usage:"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(9,"tui-doc-code",31),e.\u0275\u0275elementStart(10,"p"),e.\u0275\u0275elementStart(11,"strong"),e.\u0275\u0275text(12,"Description of the available configurations:"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(13,"dl"),e.\u0275\u0275i18nStart(14,32),e.\u0275\u0275elementStart(15,"dt"),e.\u0275\u0275element(16,"code"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(17,"dd",33),e.\u0275\u0275elementStart(18,"p"),e.\u0275\u0275element(19,"code"),e.\u0275\u0275element(20,"strong"),e.\u0275\u0275element(21,"strong"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(22,"dt"),e.\u0275\u0275element(23,"code"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(24,"dd",33),e.\u0275\u0275elementStart(25,"p"),e.\u0275\u0275element(26,"code"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd()),2&n){const o=e.\u0275\u0275nextContext();e.\u0275\u0275advance(9),e.\u0275\u0275property("code",o.exampleEditorOptionsToken)}}let he=(()=>{class n extends T.b{constructor(){super(...arguments),this.exampleModule=t.e(9563).then(t.t.bind(t,9563,17)),this.exampleHtml=t.e(58834).then(t.t.bind(t,58834,17)),this.provideExtensions=t.e(33724).then(t.t.bind(t,33724,17)),this.exampleEditorOptionsToken=t.e(8335).then(t.t.bind(t,8335,17)),this.example1={TypeScript:t.e(31870).then(t.t.bind(t,31870,17)),HTML:t.e(87338).then(t.t.bind(t,87338,17)),LESS:t.e(93213).then(t.t.bind(t,93213,17))},this.example2={HTML:t.e(98615).then(t.t.bind(t,98615,17)),TypeScript:t.e(15833).then(t.t.bind(t,15833,17)),LESS:t.e(67593).then(t.t.bind(t,67593,17)),"smiles-tool/emoji.extension.ts":t.e(86253).then(t.t.bind(t,86253,17)),"smiles-tool/smiles-tool.component.ts":t.e(87713).then(t.t.bind(t,91052,17)),"smiles-tool/smiles-tool.template.html":t.e(65164).then(t.t.bind(t,65164,17)),"smiles-tool/smiles-tool.styles.less":t.e(21168).then(t.t.bind(t,21168,17)),"smiles-tool/smiles-tool.module.ts":t.e(29741).then(t.t.bind(t,29741,17))},this.example3={TypeScript:t.e(93451).then(t.t.bind(t,93451,17)),HTML:t.e(11321).then(t.t.bind(t,11321,17)),LESS:t.e(89671).then(t.t.bind(t,89671,17))},this.example4={TypeScript:t.e(87076).then(t.t.bind(t,87076,17)),HTML:t.e(9334).then(t.t.bind(t,9334,17)),LESS:t.e(13317).then(t.t.bind(t,13317,17)),"image-preview/image-preview.component.ts":t.e(78092).then(t.t.bind(t,78092,17)),"image-preview/image-preview.module.ts":t.e(28898).then(t.t.bind(t,28898,17)),"image-preview/image-preview.style.less":t.e(26175).then(t.t.bind(t,26175,17)),"image-preview.template.html":t.e(91152).then(t.t.bind(t,91152,17))},this.control=new a.FormControl,this.toolsVariants=[F.aU,[F._2.Bold,F._2.Italic,F._2.Strikethrough,F._2.HR]],this.tools=this.toolsVariants[0]}}return n.\u0275fac=function(){let i;return function(l){return(i||(i=e.\u0275\u0275getInheritedFactory(n)))(l||n)}}(),n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["example-tui-editor-new"]],features:[e.\u0275\u0275ProvidersFeature([{provide:M.x,useExisting:(0,e.forwardRef)(()=>n)},{provide:F.Wf,useValue:F.PD}]),e.\u0275\u0275InheritDefinitionFeature],decls:5,vars:0,consts:function(){let i,o,l,s,u,C,N,P,x,R,y,L,$,A,h;return i=$localize`:␟7384ac6e9673eac2ca0755fd1c7a8f4cd617d393␟6878290531283347707: Rich Text Editor based on ${"\ufffd#2\ufffd"}:START_LINK: TipTap Editor ${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd]"}:CLOSE_LINK: for using with Angular forms. For safety reasons use a ${"\ufffd#3\ufffd"}:START_LINK_1: sanitizer ${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd]"}:CLOSE_LINK: with this component. `,i=e.\u0275\u0275i18nPostprocess(i),o=$localize`:␟afe4d6e2ec039466b1c6bbd77c7ed59d2bbf5032␟3861813736526108182: This component is experimental. Use it with caution. Expect breaking changes `,l=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,s=$localize`:␟8a5e7d40e307be087206f463dc06bbcff5e0c48e␟6700333422041027148:With custom tool`,u=$localize`:␟75c6bca72d4c15dbba4a9dea4b93967441038897␟5958880653111046562:${"[\ufffd#13\ufffd|\ufffd#17\ufffd|\ufffd#20\ufffd]"}:START_LIST_ITEM: Create component with tool button (which can get access to ${"\ufffd#14\ufffd"}:START_LINK: original TipTap editor API ${"\ufffd/#14\ufffd"}:CLOSE_LINK: via ${"[\ufffd#15\ufffd|\ufffd#16\ufffd|\ufffd#18\ufffd|\ufffd#19\ufffd|\ufffd#21\ufffd]"}:START_TAG_CODE:TuiTiptapEditorService${"[\ufffd/#15\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd|\ufffd/#19\ufffd|\ufffd/#21\ufffd]"}:CLOSE_TAG_CODE: from ${"[\ufffd#15\ufffd|\ufffd#16\ufffd|\ufffd#18\ufffd|\ufffd#19\ufffd|\ufffd#21\ufffd]"}:START_TAG_CODE:@taiga-ui/addon-editor${"[\ufffd/#15\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd|\ufffd/#19\ufffd|\ufffd/#21\ufffd]"}:CLOSE_TAG_CODE: ). ${"[\ufffd/#13\ufffd|\ufffd/#17\ufffd|\ufffd/#20\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd#13\ufffd|\ufffd#17\ufffd|\ufffd#20\ufffd]"}:START_LIST_ITEM: Pass the component as content projection (with ${"[\ufffd#15\ufffd|\ufffd#16\ufffd|\ufffd#18\ufffd|\ufffd#19\ufffd|\ufffd#21\ufffd]"}:START_TAG_CODE:ngProjectAs="tools"${"[\ufffd/#15\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd|\ufffd/#19\ufffd|\ufffd/#21\ufffd]"}:CLOSE_TAG_CODE: ) to ${"[\ufffd#15\ufffd|\ufffd#16\ufffd|\ufffd#18\ufffd|\ufffd#19\ufffd|\ufffd#21\ufffd]"}:START_TAG_CODE:<tui-editor>${"[\ufffd/#15\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd|\ufffd/#19\ufffd|\ufffd/#21\ufffd]"}:CLOSE_TAG_CODE: . ${"[\ufffd/#13\ufffd|\ufffd/#17\ufffd|\ufffd/#20\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd#13\ufffd|\ufffd#17\ufffd|\ufffd#20\ufffd]"}:START_LIST_ITEM: Mark every tool wrapper with ${"[\ufffd#15\ufffd|\ufffd#16\ufffd|\ufffd#18\ufffd|\ufffd#19\ufffd|\ufffd#21\ufffd]"}:START_TAG_CODE:tuiItem${"[\ufffd/#15\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd|\ufffd/#19\ufffd|\ufffd/#21\ufffd]"}:CLOSE_TAG_CODE: -directive ${"[\ufffd/#13\ufffd|\ufffd/#17\ufffd|\ufffd/#20\ufffd]"}:CLOSE_LIST_ITEM:`,u=e.\u0275\u0275i18nPostprocess(u),C=$localize`:␟ecf77038d883166945bdbfd71a0a2953aebf29bb␟7856608464907240497:With resizable image`,N=$localize`:␟bd23da996b8172d2a5b13c7c00e5d0d8b72bdf2b␟3095289649103149825:Show preview for images`,P=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,x=$localize`:␟4451dd975ad87c22f3e58059c2d38ee4dce01d18␟8752995704195016078: Example text shown on empty focused input `,R=$localize`:␟0cea9742234b055b1bce51470d8f030dd089acde␟2877889858952730048: Allowed edit tools `,y=$localize`:␟03a323cd3ce898d115bcdb8364920447fb35afb8␟1340683940823692236: Import an Angular module for forms and ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiEditorModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `,L=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,$=$localize`:␟97c5c1e54acb7f33324912552bd6d76d1e201310␟5735999802171173508:Provide the required extensions or use the default ones:`,A=$localize`:␟efaa49ce895f1db3267f161305f62fa8bd4c8e7b␟8578885722748078515:TUI_EDITOR_OPTIONS`,h=$localize`:␟5371228197c6562593d60fad333c3a5184d01859␟4694114107272609448:${"[\ufffd#15\ufffd|\ufffd#22\ufffd]"}:START_TAG_DT:${"[\ufffd#16\ufffd|\ufffd#19\ufffd|\ufffd#23\ufffd|\ufffd#26\ufffd]"}:START_TAG_CODE:colors${"[\ufffd/#16\ufffd|\ufffd/#19\ufffd|\ufffd/#23\ufffd|\ufffd/#26\ufffd]"}:CLOSE_TAG_CODE:${"[\ufffd/#15\ufffd|\ufffd/#22\ufffd]"}:CLOSE_TAG_DT:${"[\ufffd#17\ufffd|\ufffd#24\ufffd]"}:START_TAG_DD: map of colors in toolbar's dropdowns with color-selection. ${"[\ufffd#18\ufffd|\ufffd#25\ufffd]"}:START_PARAGRAPH: It accepts ${"[\ufffd#16\ufffd|\ufffd#19\ufffd|\ufffd#23\ufffd|\ufffd#26\ufffd]"}:START_TAG_CODE:ReadonlyMap<string, string>${"[\ufffd/#16\ufffd|\ufffd/#19\ufffd|\ufffd/#23\ufffd|\ufffd/#26\ufffd]"}:CLOSE_TAG_CODE: : the ${"[\ufffd#20\ufffd|\ufffd#21\ufffd]"}:START_TAG_STRONG:key${"[\ufffd/#20\ufffd|\ufffd/#21\ufffd]"}:CLOSE_TAG_STRONG: is the name of the color (used only for hint and accessibility), the ${"[\ufffd#20\ufffd|\ufffd#21\ufffd]"}:START_TAG_STRONG:value${"[\ufffd/#20\ufffd|\ufffd/#21\ufffd]"}:CLOSE_TAG_STRONG: – HTML color code. ${"[\ufffd/#18\ufffd|\ufffd/#25\ufffd]"}:CLOSE_PARAGRAPH:${"[\ufffd/#17\ufffd|\ufffd/#24\ufffd]"}:CLOSE_TAG_DD:${"[\ufffd#15\ufffd|\ufffd#22\ufffd]"}:START_TAG_DT:${"[\ufffd#16\ufffd|\ufffd#19\ufffd|\ufffd#23\ufffd|\ufffd#26\ufffd]"}:START_TAG_CODE:blankColor${"[\ufffd/#16\ufffd|\ufffd/#19\ufffd|\ufffd/#23\ufffd|\ufffd/#26\ufffd]"}:CLOSE_TAG_CODE:${"[\ufffd/#15\ufffd|\ufffd/#22\ufffd]"}:CLOSE_TAG_DT:${"[\ufffd#17\ufffd|\ufffd#24\ufffd]"}:START_TAG_DD: Null color. It is used in situations when there is no color selected. ${"[\ufffd#18\ufffd|\ufffd#25\ufffd]"}:START_PARAGRAPH: it accepts ${"[\ufffd#16\ufffd|\ufffd#19\ufffd|\ufffd#23\ufffd|\ufffd#26\ufffd]"}:START_TAG_CODE:string${"[\ufffd/#16\ufffd|\ufffd/#19\ufffd|\ufffd/#23\ufffd|\ufffd/#26\ufffd]"}:CLOSE_TAG_CODE: (HTML color code). ${"[\ufffd/#18\ufffd|\ufffd/#25\ufffd]"}:CLOSE_PARAGRAPH:${"[\ufffd/#17\ufffd|\ufffd/#24\ufffd]"}:CLOSE_TAG_DD:`,h=e.\u0275\u0275i18nPostprocess(h),[["header","Editor[new]","package","ADDON-EDITOR","type","components"],["pageTab",""],["pageTab","DI tokens"],i,["tuiLink","","href","https://www.tiptap.dev/"],["tuiLink","","routerLink","/icon-set","fragment","sanitizer"],["status","warning",1,"tui-space_top-4"],o,["id","basic","heading",l,3,"content"],["id","custom-tool","heading",s,3,"content"],[1,"tui-list","tui-space_bottom-6"],u,[1,"tui-list__item"],["tuiLink","","target","_blank","href","https://tiptap.dev/api/introduction"],["id","resizable-image","heading",C,3,"content"],["id","preview-image","heading",N,3,"content"],["new","",3,"formControl","focusable","exampleText","readOnly","tools","pseudoInvalid","pseudoFocus","pseudoHover"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","exampleText","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tools","documentationPropertyMode","input","documentationPropertyType","ReadonlyArray<TuiEditorTool>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],P,x,R,[1,"b-demo-steps"],y,["filename","myComponent.module.ts",3,"code"],L,["filename","myComponent.template.html",3,"code"],$,["filename","myComponent.component.ts",3,"code"],A,[3,"code"],h,[1,"tui-space_bottom-5"]]},template:function(o,l){1&o&&(e.\u0275\u0275elementStart(0,"tui-doc-page",0),e.\u0275\u0275template(1,De,27,4,"ng-template",1),e.\u0275\u0275template(2,Oe,7,12,"ng-template",1),e.\u0275\u0275template(3,Ce,14,3,"ng-template",1),e.\u0275\u0275template(4,Se,27,1,"ng-template",2),e.\u0275\u0275elementEnd())},directives:[W.q,G.n,w.V,p.yS,V.L,U.f,b,k,oe,ue,de.F,O.y,a.NgControlStatus,a.FormControlDirective,me.z,ce.B,Ee.c],encapsulation:2,changeDetection:0}),n})(),Me=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[d.ez,m.fNO,m.jhF,S.Ah6,m.CuE]]}),n})();var _e=t(89570);let fe=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[d.ez,I.E6,m.fNO,_e.wq,F.BN],F.BN,F.BN]}),n})(),Ne=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[d.ez,a.FormsModule,a.ReactiveFormsModule,F.T_,F.GK,m.HiG,m.fNO,r.f,D.fV,m.jzK,m.EIu,Me,fe,p.Bz.forChild((0,D.Ve)(he))]]}),n})()}}]);