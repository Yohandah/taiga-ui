(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{SVcV:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiInputPhoneModule",(function(){return Ee}));var o=n("2kYt"),r=n("nIj0"),a=n("sEIs"),i=n("SVIu"),l=n("l4xa"),s=n("Qq0t"),u=n("dvRg"),p=n("kiPw"),c=n("Piem"),m=n("EM62"),d=n("K/iL"),h=n("WupT"),f=n("OZlg"),g=n("e0eB"),C=n("iyc4"),x=n("bYz0"),y=n("zV1d");let b=(()=>{class e{constructor(){this.testForm=new r.FormGroup({testValue:new r.FormControl("+77777777777",r.Validators.required)})}setValue(){this.testForm.get("testValue").setValue("+79926775676")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-phone-example-1"]],decls:8,vars:4,consts:[[3,"formGroup"],["formControlName","testValue",1,"input"],[1,"tui-space_bottom-3"],["tuiButton","","type","button","size","m",3,"click"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"form",0),m["\u0275\u0275elementStart"](1,"tui-input-phone",1),m["\u0275\u0275text"](2," Type a phone number "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](3,"pre",2),m["\u0275\u0275text"](4),m["\u0275\u0275pipe"](5,"json"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"button",3),m["\u0275\u0275listener"]("click",(function(){return t.setValue()})),m["\u0275\u0275text"](7," Set value from outside: +79926775676\n"),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275property"]("formGroup",t.testForm),m["\u0275\u0275advance"](4),m["\u0275\u0275textInterpolate1"]("Form value: ",m["\u0275\u0275pipeBind1"](5,2,t.testForm.value),""))},directives:[r["\u0275angular_packages_forms_forms_y"],r.NgControlStatusGroup,r.FormGroupDirective,x.a,r.NgControlStatus,r.FormControlName,y.a],pipes:[o.k],styles:[".input[_ngcontent-%COMP%]{max-width:320px}"],changeDetection:0}),e})(),v=(()=>{class e{constructor(){this.testForm=new r.FormGroup({testValue:new r.FormControl("",r.Validators.minLength(12))})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-phone-example-2"]],decls:6,vars:4,consts:[[3,"formGroup"],["formControlName","testValue",1,"input"],[1,"b-demo-example__item"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"form",0),m["\u0275\u0275elementStart"](1,"tui-input-phone",1),m["\u0275\u0275text"](2," Type phone number "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](3,"pre",2),m["\u0275\u0275text"](4),m["\u0275\u0275pipe"](5,"json"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275property"]("formGroup",t.testForm),m["\u0275\u0275advance"](4),m["\u0275\u0275textInterpolate1"]("Form value: ",m["\u0275\u0275pipeBind1"](5,2,t.testForm.value),""))},directives:[r["\u0275angular_packages_forms_forms_y"],r.NgControlStatusGroup,r.FormGroupDirective,x.a,r.NgControlStatus,r.FormControlName],pipes:[o.k],styles:[".input[_ngcontent-%COMP%]{max-width:320px}"],changeDetection:0}),e})();var T=n("D57K"),w=n("+SFL"),M=n("ZTXN"),S=n("g6G6"),E=n("HM3f"),F=n("ROBh"),_=n("TLy2"),D=n("YtkY"),A=n("8j5Y"),O=n("jIqt"),V=n("7ntQ"),$=n("Kl/4"),P=n("RKv1"),I=n("fP8s"),L=n("cVyY"),k=n("xcN3"),U=n("cweO");function N(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"button",6),m["\u0275\u0275listener"]("click",(function(){m["\u0275\u0275restoreView"](e);const n=t.$implicit;return m["\u0275\u0275nextContext"](4).onClick(n)})),m["\u0275\u0275element"](1,"tui-avatar",7),m["\u0275\u0275elementStart"](2,"span",8),m["\u0275\u0275elementStart"](3,"span"),m["\u0275\u0275text"](4),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](5,"span",9),m["\u0275\u0275text"](6),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;m["\u0275\u0275property"]("value",e.phone)("disabled",e.disabled),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("avatarUrl",e.avatarUrl||null)("text",e.firstName),m["\u0275\u0275advance"](3),m["\u0275\u0275textInterpolate2"]("",e.firstName," ",e.lastName,""),m["\u0275\u0275advance"](2),m["\u0275\u0275textInterpolate"](e.phone)}}function j(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"tui-data-list"),m["\u0275\u0275template"](1,N,7,7,"button",5),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"](2).tuiLet;m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngForOf",e)}}function G(e,t){1&e&&(m["\u0275\u0275elementContainerStart"](0),m["\u0275\u0275template"](1,j,2,1,"tui-data-list",4),m["\u0275\u0275elementContainerEnd"]())}function H(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"tui-input-phone",2),m["\u0275\u0275listener"]("ngModelChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().value=t}))("searchChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().onSearch(t)})),m["\u0275\u0275text"](1),m["\u0275\u0275pipe"](2,"async"),m["\u0275\u0275template"](3,G,2,0,"ng-container",3),m["\u0275\u0275elementEnd"]()}if(2&e){const e=t.tuiLet,n=m["\u0275\u0275nextContext"](),o=m["\u0275\u0275reference"](3);m["\u0275\u0275property"]("tuiTextfieldCustomContent",o)("allowText",!0)("ngModel",n.value),m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate1"](" ",m["\u0275\u0275pipeBind1"](2,5,n.placeholder$)," "),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("ngIf",e.length)}}function z(e,t){if(1&e&&m["\u0275\u0275element"](0,"tui-avatar",11),2&e){const e=t.ngIf;m["\u0275\u0275property"]("rounded",!0)("avatarUrl",e.avatarUrl||null)("text",e.firstName)}}function R(e,t){if(1&e&&(m["\u0275\u0275template"](0,z,1,3,"tui-avatar",10),m["\u0275\u0275pipe"](1,"async")),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275property"]("ngIf",m["\u0275\u0275pipeBind1"](1,1,e.user$))}}class q{constructor(e,t,n,o=null,r=!1){this.firstName=e,this.lastName=t,this.phone=n,this.avatarUrl=o,this.disabled=r}toString(){return`${this.firstName} ${this.lastName}`}}const W=[new q("\u0420\u043e\u043c\u0430\u043d","\u0421\u0435\u0434\u043e\u0432","+75678901234","http://marsibarsi.me/images/1x1small.jpg"),new q("\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440","\u0418\u043d\u043a\u0438\u043d","+75678901234",w.a)];let B=(()=>{class e{constructor(){this.search$=new M.a,this.selected$=new M.a,this.value="",this.user$=Object(S.a)(this.selected$,this.search$.pipe(Object(_.a)(e=>this.request(e).pipe(Object(D.a)(t=>this.isFullMatch(t,e)?t[0]:null))))).pipe(Object(A.a)(e=>{e&&(this.value=e.phone)})),this.items$=this.search$.pipe(Object(O.a)(""),Object(_.a)(e=>this.request(e).pipe(Object(D.a)(t=>this.isFullMatch(t,e)?[]:t)))),this.placeholder$=Object(E.a)(this.user$,this.search$).pipe(Object(D.a)(([e,t])=>e||this.getPlaceholder(t)),Object(O.a)("\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0438\u043b\u0438 \u0438\u043c\u044f"))}onSearch(e){this.search$.next(e)}onClick(e){this.selected$.next(e)}getPlaceholder(e){return e?e.startsWith("+")?"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430":"\u0418\u043c\u044f":"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0438\u043b\u0438 \u0438\u043c\u044f"}isFullMatch(e,t){return 1===e.length&&(String(e[0])===t||e[0].phone===t)}request(e){return Object(F.a)(W.filter(t=>Object(l.TUI_DEFAULT_MATCHER)(t,e)||Object(l.TUI_DEFAULT_MATCHER)(t.phone,e))).pipe(Object(V.a)())}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-phone-example-3"]],decls:6,vars:4,consts:[["class","control",3,"tuiTextfieldCustomContent","allowText","ngModel","ngModelChange","searchChange",4,"tuiLet"],["avatar",""],[1,"control",3,"tuiTextfieldCustomContent","allowText","ngModel","ngModelChange","searchChange"],[4,"ngIf"],[4,"tuiDataList"],["tuiOption","",3,"value","disabled","click",4,"ngFor","ngForOf"],["tuiOption","",3,"value","disabled","click"],["size","s",1,"tui-space_right-3",3,"avatarUrl","text"],[1,"user"],[1,"phone"],["size","s",3,"rounded","avatarUrl","text",4,"ngIf"],["size","s",3,"rounded","avatarUrl","text"]],template:function(e,t){1&e&&(m["\u0275\u0275template"](0,H,4,7,"tui-input-phone",0),m["\u0275\u0275pipe"](1,"async"),m["\u0275\u0275template"](2,R,2,3,"ng-template",null,1,m["\u0275\u0275templateRefExtractor"]),m["\u0275\u0275elementStart"](4,"p"),m["\u0275\u0275text"](5),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275property"]("tuiLet",m["\u0275\u0275pipeBind1"](1,2,t.items$)),m["\u0275\u0275advance"](5),m["\u0275\u0275textInterpolate1"]("Value: ",t.value,""))},directives:[$.a,x.a,P.b,r.NgControlStatus,r.NgModel,o.t,I.a,L.a,o.s,k.a,U.a],pipes:[o.b],styles:['.control[_ngcontent-%COMP%]{max-width:320px}.user[_ngcontent-%COMP%]{margin-right:auto}.phone[_ngcontent-%COMP%]{font-weight:"normal";font-size:13px;font-family:var(--tui-text-font);line-height:20px;display:block;color:var(--tui-text-03)}'],changeDetection:0}),Object(T.a)([l.tuiPure],e.prototype,"request",null),e})();var Y,K=n("EPR0"),J=n("yHor"),Z=n("zGJC"),Q=n("FSyC"),X=n("CDxv"),ee=n("eB8V"),te=n("gEyt"),ne=n("2wTY"),oe=n("SUM+"),re=n("RlDx"),ae=n("u8jZ");Y=$localize`:␟e3244651d75af86de64521df482e14a70a224513␟5446897904176660385:${"\ufffd#2\ufffd"}:START_TAG_CODE:InputPhone${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: allows to input a phone number`;const ie=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`],le=["heading",$localize`:␟3d7fa81ead9d15f29cb4d813100cad4c816553cd␟577318767938750368:With length validator`],se=["heading",$localize`:␟f7801e64b274854b74c1e808598fc1ddd2f44e16␟7072553736290807084:With autocomplete`,"description",$localize`:␟7a074c8c6837e68463062476f13f9646e4b3ffb8␟3923198094532276941:By number and by name`];function ue(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"p"),m["\u0275\u0275i18nStart"](1,Y),m["\u0275\u0275element"](2,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](3,"tui-doc-example",2),m["\u0275\u0275i18nAttributes"](4,ie),m["\u0275\u0275element"](5,"tui-input-phone-example-1"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"tui-doc-example",3),m["\u0275\u0275i18nAttributes"](7,le),m["\u0275\u0275element"](8,"tui-input-phone-example-2"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](9,"tui-doc-example",4),m["\u0275\u0275i18nAttributes"](10,se),m["\u0275\u0275element"](11,"tui-input-phone-example-3"),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("content",e.example1),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("content",e.example2),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("content",e.example3)}}function pe(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"tui-input-phone",11),m["\u0275\u0275text"](1," Type a phone number "),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"](2);m["\u0275\u0275property"]("formControl",e.control)("focusable",e.focusable)("readOnly",e.readOnly)("tuiTextfieldAutocomplete",e.autocomplete)("tuiTextfieldCleaner",e.cleaner)("tuiTextfieldCustomContent",e.customContent)("tuiTextfieldLabelOutside",e.labelOutside)("tuiTextfieldSize",e.size)("countryCode",e.countryCode)("phoneMaskAfterCountryCode",e.phoneMaskAfterCountryCode)("pseudoInvalid",e.pseudoInvalid)("pseudoFocused",e.pseudoFocused)("pseudoHovered",e.pseudoHovered)("tuiDropdownAlign",e.dropdownAlign)("tuiDropdownDirection",e.dropdownDirection)("tuiDropdownLimitWidth",e.dropdownLimitWidth)("tuiDropdownMinHeight",e.dropdownMinHeight)("tuiDropdownMaxHeight",e.dropdownMaxHeight)("tuiHintContent",e.hintContent)("tuiHintDirection",e.hintDirection)("tuiHintMode",e.hintMode)}}var ce,me,de,he,fe,ge,Ce;function xe(e,t){1&e&&(m["\u0275\u0275i18nStart"](0,ce),m["\u0275\u0275element"](1,"code"),m["\u0275\u0275i18nEnd"]())}function ye(e,t){1&e&&m["\u0275\u0275i18n"](0,me)}function be(e,t){1&e&&(m["\u0275\u0275i18nStart"](0,de),m["\u0275\u0275element"](1,"code"),m["\u0275\u0275element"](2,"code"),m["\u0275\u0275i18nEnd"]())}function ve(e,t){1&e&&m["\u0275\u0275i18n"](0,he)}function Te(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"tui-doc-demo",5),m["\u0275\u0275template"](1,pe,2,21,"ng-template"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](2,"tui-doc-documentation"),m["\u0275\u0275template"](3,xe,2,0,"ng-template",6),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().disabled=t})),m["\u0275\u0275template"](4,ye,1,0,"ng-template",7),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().countryCode=t})),m["\u0275\u0275template"](5,be,3,0,"ng-template",8),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().phoneMaskAfterCountryCode=t})),m["\u0275\u0275template"](6,ve,1,0,"ng-template",9),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](7,"inherited-documentation",10)}if(2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275property"]("control",e.control),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("documentationPropertyValue",e.disabled),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",e.countryCodes)("documentationPropertyValue",e.countryCode),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",e.phoneMasksAfterCountryCode)("documentationPropertyValue",e.phoneMaskAfterCountryCode),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("dropdown",!0)}}function we(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"ol",12),m["\u0275\u0275elementStart"](1,"li"),m["\u0275\u0275elementStart"](2,"p"),m["\u0275\u0275i18nStart"](3,fe),m["\u0275\u0275element"](4,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](5,"tui-doc-code",13),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"li"),m["\u0275\u0275elementStart"](7,"p"),m["\u0275\u0275i18nStart"](8,ge),m["\u0275\u0275element"](9,"code"),m["\u0275\u0275element"](10,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](11,"tui-doc-code",14),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](12,"li"),m["\u0275\u0275elementStart"](13,"p"),m["\u0275\u0275i18n"](14,Ce),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](15,"tui-doc-code",15),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("code",e.exampleImportModule),m["\u0275\u0275advance"](6),m["\u0275\u0275property"]("code",e.exampleDeclareForm),m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("code",e.exampleInsertTemplate)}}ce=$localize`:␟31216ee7e86a9a777c7e1c7cad3dc3bb8dc54c35␟472633322147615044: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE:) `,me=$localize`:␟3796d9edaba5839bc345b9dc9c1d22bec3e806b3␟2828194013486797327: Country code `,de=$localize`:␟4ec1e6ad3804de7fc6dbd123edd6e9465ed9e719␟8997014208942918619: Text mask after country code. You can use ${"[\ufffd#1\ufffd|\ufffd#2\ufffd]"}:START_TAG_CODE:#${"[\ufffd/#1\ufffd|\ufffd/#2\ufffd]"}:CLOSE_TAG_CODE:,${"[\ufffd#1\ufffd|\ufffd#2\ufffd]"}:START_TAG_CODE:-${"[\ufffd/#1\ufffd|\ufffd/#2\ufffd]"}:CLOSE_TAG_CODE: and spaces as a template sumbol `,de=m["\u0275\u0275i18nPostprocess"](de),he=$localize`:␟0ec866a9ec689912cd4a6a95bc762ea569b9ff1c␟5614373748421345116: Textfield value to subscribe on input or setting it from the outside `,fe=$localize`:␟7d1248f06089eb760d4c8c6815388f4131823f45␟2188371771522021976: Import an Angular module for forms and ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiInputPhoneModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `,ge=$localize`:␟24bd9acf98b087a0155b1bc8707249be28559a1e␟3960939324467592851: Declare a form (${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:FormGroup${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE:) or a control (${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:FormControl${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE:) in your component: `,ge=m["\u0275\u0275i18nPostprocess"](ge),Ce=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let Me=(()=>{class e extends h.a{constructor(){super(...arguments),this.exampleDeclareForm="import {FormControl, FormGroup} from '@angular/forms';\n\n...\n\n@Component({\n...\n})\nexport class MyComponent {\n    testForm = new FormGroup({\n        // +78005553535 - \u043f\u0440\u0435\u0434\u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435, \u043c\u043e\u0436\u043d\u043e \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c\n        testValue: new FormControl('+78005553535')\n    });\n}\n",this.exampleImportModule="import {ReactiveFormsModule} from '@angular/forms';\nimport {TuiInputPhoneModule} from '@taiga-ui/kit';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        ReactiveFormsModule,\n        TuiInputPhoneModule\n    ],\n...\n",this.exampleInsertTemplate='<form [formGroup]="testForm">\n    <tui-input-phone formControlName="testValue">Type phone number</tui-input-phone>\n</form>\n',this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-input-phone-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputPhoneExample1 {\n    testForm = new FormGroup({\n        testValue: new FormControl('+77777777777', Validators.required),\n    });\n\n    setValue() {\n        this.testForm.get('testValue')!.setValue('+79926775676');\n    }\n}\n",HTML:'<form [formGroup]="testForm">\n    <tui-input-phone class="input" formControlName="testValue">\n        Type a phone number\n    </tui-input-phone>\n    <pre class="tui-space_bottom-3">Form value: {{testForm.value | json}}</pre>\n</form>\n<button tuiButton type="button" size="m" (click)="setValue()">\n    Set value from outside: +79926775676\n</button>\n',LESS:".input {\n    max-width: 320px;\n}\n"},this.example2={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-input-phone-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputPhoneExample2 {\n    testForm = new FormGroup({\n        testValue: new FormControl('', Validators.minLength(12)),\n    });\n}\n",HTML:'<form [formGroup]="testForm">\n    <tui-input-phone class="input" formControlName="testValue">\n        Type phone number\n    </tui-input-phone>\n    <pre class="b-demo-example__item">\nForm value: {{testForm.value | json}}</pre\n    >\n</form>\n',LESS:".input {\n    max-width: 320px;\n}\n"},this.example3={TypeScript:"import {default as avatar} from '!!file-loader!../../../../../assets/images/avatar.jpg';\nimport {Component} from '@angular/core';\nimport {TUI_DEFAULT_MATCHER, tuiPure} from '@taiga-ui/cdk';\nimport {combineLatest, merge, Observable, of, Subject} from 'rxjs';\nimport {map, share, startWith, switchMap, tap} from 'rxjs/operators';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\nclass User {\n    constructor(\n        readonly firstName: string,\n        readonly lastName: string,\n        readonly phone: string,\n        readonly avatarUrl: string | null = null,\n        readonly disabled: boolean = false,\n    ) {}\n\n    toString(): string {\n        return `${this.firstName} ${this.lastName}`;\n    }\n}\n\nconst DATA: ReadonlyArray<User> = [\n    new User(\n        '\u0420\u043e\u043c\u0430\u043d',\n        '\u0421\u0435\u0434\u043e\u0432',\n        '+75678901234',\n        'http://marsibarsi.me/images/1x1small.jpg',\n    ),\n    new User('\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440', '\u0418\u043d\u043a\u0438\u043d', '+75678901234', avatar),\n];\n\n@Component({\n    selector: 'tui-input-phone-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputPhoneExample3 {\n    private readonly search$ = new Subject<string>();\n\n    private readonly selected$ = new Subject<User>();\n\n    value = '';\n\n    readonly user$ = merge(\n        this.selected$,\n        this.search$.pipe(\n            switchMap(value =>\n                this.request(value).pipe(\n                    map(response =>\n                        this.isFullMatch(response, value) ? response[0] : null,\n                    ),\n                ),\n            ),\n        ),\n    ).pipe(\n        tap(user => {\n            if (user) {\n                this.value = user.phone;\n            }\n        }),\n    );\n\n    readonly items$ = this.search$.pipe(\n        startWith(''),\n        switchMap(value =>\n            this.request(value).pipe(\n                map(response => (this.isFullMatch(response, value) ? [] : response)),\n            ),\n        ),\n    );\n\n    readonly placeholder$ = combineLatest(this.user$, this.search$).pipe(\n        map(([user, search]) => user || this.getPlaceholder(search)),\n        startWith('\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0438\u043b\u0438 \u0438\u043c\u044f'),\n    );\n\n    onSearch(search: string) {\n        this.search$.next(search);\n    }\n\n    onClick(user: User) {\n        this.selected$.next(user);\n    }\n\n    private getPlaceholder(search: string): string {\n        if (!search) {\n            return '\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0438\u043b\u0438 \u0438\u043c\u044f';\n        }\n\n        if (search.startsWith('+')) {\n            return '\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430';\n        }\n\n        return '\u0418\u043c\u044f';\n    }\n\n    private isFullMatch(response: ReadonlyArray<User>, value: string): boolean {\n        return (\n            response.length === 1 &&\n            (String(response[0]) === value || response[0].phone === value)\n        );\n    }\n\n    // Request imitation\n    @tuiPure\n    private request(query: string): Observable<ReadonlyArray<User>> {\n        return of(\n            DATA.filter(\n                item =>\n                    TUI_DEFAULT_MATCHER(item, query) ||\n                    TUI_DEFAULT_MATCHER(item.phone, query),\n            ),\n        ).pipe(share());\n    }\n}\n",HTML:'<tui-input-phone\n    *tuiLet="items$ | async as items"\n    class="control"\n    [tuiTextfieldCustomContent]="avatar"\n    [allowText]="true"\n    [(ngModel)]="value"\n    (searchChange)="onSearch($event)"\n>\n    {{ placeholder$ | async }}\n    <ng-container *ngIf="items.length">\n        <tui-data-list *tuiDataList>\n            <button\n                *ngFor="let item of items"\n                tuiOption\n                [value]="item.phone"\n                [disabled]="item.disabled"\n                (click)="onClick(item)"\n            >\n                <tui-avatar\n                    class="tui-space_right-3"\n                    size="s"\n                    [avatarUrl]="item.avatarUrl || null"\n                    [text]="item.firstName"\n                ></tui-avatar>\n                <span class="user">\n                    <span>{{item.firstName}} {{item.lastName}}</span>\n                    <span class="phone">{{item.phone}}</span>\n                </span>\n            </button>\n        </tui-data-list>\n    </ng-container>\n</tui-input-phone>\n<ng-template #avatar>\n    <tui-avatar\n        *ngIf="user$ | async as user"\n        size="s"\n        [rounded]="true"\n        [avatarUrl]="user.avatarUrl || null"\n        [text]="user.firstName"\n    ></tui-avatar>\n</ng-template>\n<p>Value: {{value}}</p>\n',LESS:"@import 'taiga-ui-local';\n\n.control {\n    max-width: 320px;\n}\n\n.user {\n    margin-right: auto;\n}\n\n.phone {\n    .text-body-s();\n    display: block;\n    color: var(--tui-text-03);\n}\n"},this.cleaner=!1,this.dropdownAlignVariants=["left","right"],this.dropdownAlign=this.dropdownAlignVariants[0],this.dropdownLimitWidthVariants=["fixed","min"],this.dropdownLimitWidth=this.dropdownLimitWidthVariants[0],this.dropdownDirectionVariants=["top","bottom"],this.dropdownDirection=null,this.dropdownMinHeight=s.DEFAULT_MIN_HEIGHT,this.dropdownMaxHeight=s.DEFAULT_MAX_HEIGHT,this.control=new r.FormControl("",[r.Validators.required,r.Validators.minLength(12)]),this.countryCodes=["+7","+850","+1","+52"],this.countryCode=this.countryCodes[0],this.phoneMasksAfterCountryCode=["(###) ###-##-##","(####)+____:-#############","### ###-####"],this.phoneMaskAfterCountryCode=this.phoneMasksAfterCountryCode[0]}}return e.\u0275fac=function(t){return Se(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-input-phone"]],features:[m["\u0275\u0275ProvidersFeature"]([{provide:d.a,useExisting:Object(m.forwardRef)(()=>e)}]),m["\u0275\u0275InheritDefinitionFeature"]],decls:4,vars:0,consts:[["header","InputPhone","package","KIT"],["pageTab",""],["id","base",3,"content",6,"heading"],["id","validated",3,"content",6,"heading"],["id","autocomplete",3,"content",6,"heading","description"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","countryCode","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","phoneMaskAfterCountryCode","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","search","documentationPropertyMode","input-output","documentationPropertyType","string"],[3,"dropdown"],[3,"formControl","focusable","readOnly","tuiTextfieldAutocomplete","tuiTextfieldCleaner","tuiTextfieldCustomContent","tuiTextfieldLabelOutside","tuiTextfieldSize","countryCode","phoneMaskAfterCountryCode","pseudoInvalid","pseudoFocused","pseudoHovered","tuiDropdownAlign","tuiDropdownDirection","tuiDropdownLimitWidth","tuiDropdownMinHeight","tuiDropdownMaxHeight","tuiHintContent","tuiHintDirection","tuiHintMode"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.component.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"tui-doc-page",0),m["\u0275\u0275template"](1,ue,12,3,"ng-template",1),m["\u0275\u0275template"](2,Te,8,7,"ng-template",1),m["\u0275\u0275template"](3,we,16,3,"ng-template",1),m["\u0275\u0275elementEnd"]())},directives:[f.a,g.a,C.a,b,v,B,K.a,J.a,Z.a,Q.a,x.a,r.NgControlStatus,r.FormControlDirective,X.b,ee.b,P.b,te.b,ne.b,oe.a,re.a,ae.a],styles:['.item[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%;margin:-10px 0}.avatar[_ngcontent-%COMP%]{margin-left:12px}.name[_ngcontent-%COMP%], .phone[_ngcontent-%COMP%]{margin:0}.phone[_ngcontent-%COMP%]{font-weight:"normal";font-size:13px;font-family:var(--tui-text-font);line-height:20px;color:var(--tui-text-03)}'],changeDetection:0}),e})();const Se=m["\u0275\u0275getInheritedFactory"](Me);let Ee=(()=>{class e{}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,r.FormsModule,r.ReactiveFormsModule,p.c,l.TuiLetModule,s.TuiDataListModule,s.TuiButtonModule,s.TuiSvgModule,u.TuiAvatarModule,s.TuiDropdownControllerModule,s.TuiTextfieldControllerModule,s.TuiHintControllerModule,u.TuiInputPhoneModule,s.TuiLinkModule,c.a,...i.e,a.f.forChild(Object(i.n)(Me))]]}),e})()}}]);