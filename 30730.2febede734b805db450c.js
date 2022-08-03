"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[30730],{30730:(j,S,e)=>{e.r(S),e.d(S,{ExampleFormatModule:()=>B});var O=e(12057),a=e(23738),F=e(12021),E=e(46244),s=e(5696),p=e(38780),t=e(74788),g=e(88331),R=e(37159),N=e(57068),x=e(19368),v=e(16753),h=e(13735);let y=(()=>{class n{constructor(){this.parametersForm=new a.FormGroup({value:new a.FormControl(11)})}get px(){const{value:o}=this.parametersForm.value;return(0,x.O9r)(o)}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["tui-format-example-1"]],decls:5,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"]],template:function(o,r){1&o&&(t.\u0275\u0275text(0),t.\u0275\u0275elementStart(1,"form",0),t.\u0275\u0275elementStart(2,"div",1),t.\u0275\u0275elementStart(3,"tui-input-number",2),t.\u0275\u0275text(4," value "),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd()),2&o&&(t.\u0275\u0275textInterpolate1("'",r.px,"' = px(value); "),t.\u0275\u0275advance(1),t.\u0275\u0275property("formGroup",r.parametersForm))},directives:[a.\u0275NgNoValidate,a.NgControlStatusGroup,a.FormGroupDirective,v.q,h.g,a.NgControlStatus,a.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),n})();var L=e(55970),A=e(50170),D=e(1414),P=e(52219),I=e(50020);function $(n,m){if(1&n&&t.\u0275\u0275element(0,"tui-data-list-wrapper",4),2&n){const o=t.\u0275\u0275nextContext();t.\u0275\u0275property("items",o.items)}}let G=(()=>{class n{constructor(){this.items=["USD","RUB","643","KZT","051","KRW","CHF","EUR","GBP"],this.parametersForm=new a.FormGroup({currency:new a.FormControl(null)})}get currency(){const{currency:o}=this.parametersForm.value;return(0,L.CE)(o)}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["tui-format-example-3"]],decls:6,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","currency",1,"tui-space_top-2"],[3,"items",4,"tuiDataList"],[3,"items"]],template:function(o,r){1&o&&(t.\u0275\u0275text(0),t.\u0275\u0275elementStart(1,"form",0),t.\u0275\u0275elementStart(2,"div",1),t.\u0275\u0275elementStart(3,"tui-select",2),t.\u0275\u0275text(4," currency "),t.\u0275\u0275template(5,$,1,1,"tui-data-list-wrapper",3),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd()),2&o&&(t.\u0275\u0275textInterpolate1("",r.currency," = getCurrencySymbol(currency); "),t.\u0275\u0275advance(1),t.\u0275\u0275property("formGroup",r.parametersForm))},directives:[a.\u0275NgNoValidate,a.NgControlStatusGroup,a.FormGroupDirective,A.u,D.O,a.NgControlStatus,a.FormControlName,P.g,I.e],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),n})();var c=e(77027),u=e(41360);let U=(()=>{class n{constructor(){this.parametersForm=new a.FormGroup({value:new a.FormControl("roman sEdOv")})}get capitalized(){const{value:o}=this.parametersForm.value;return(0,s.kC2)(o)}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["tui-format-example-4"]],decls:5,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"]],template:function(o,r){1&o&&(t.\u0275\u0275text(0),t.\u0275\u0275elementStart(1,"form",0),t.\u0275\u0275elementStart(2,"div",1),t.\u0275\u0275elementStart(3,"tui-input",2),t.\u0275\u0275text(4," value "),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd()),2&o&&(t.\u0275\u0275textInterpolate1("'",r.capitalized,"' = capitalize(value); "),t.\u0275\u0275advance(1),t.\u0275\u0275property("formGroup",r.parametersForm))},directives:[a.\u0275NgNoValidate,a.NgControlStatusGroup,a.FormGroupDirective,c.K,u.w,a.NgControlStatus,a.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),n})(),z=(()=>{class n{constructor(){this.parametersForm=new a.FormGroup({value:new a.FormControl("+79991234567"),countryCode:new a.FormControl("+7"),phoneMask:new a.FormControl("### ###-##-##")})}get formattedPhone(){const{value:o,countryCode:r,phoneMask:i}=this.parametersForm.value;return(0,s.CNt)(o,r,i)}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["tui-format-example-5"]],decls:9,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],["formControlName","countryCode",1,"tui-space_top-2"],["formControlName","phoneMask",1,"tui-space_top-2"]],template:function(o,r){1&o&&(t.\u0275\u0275text(0),t.\u0275\u0275elementStart(1,"form",0),t.\u0275\u0275elementStart(2,"div",1),t.\u0275\u0275elementStart(3,"tui-input",2),t.\u0275\u0275text(4," value "),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(5,"tui-input",3),t.\u0275\u0275text(6," countryCode "),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(7,"tui-input",4),t.\u0275\u0275text(8," phoneMask "),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd()),2&o&&(t.\u0275\u0275textInterpolate1("'",r.formattedPhone,"' = formatPhone(value, countryCode, phoneMask); "),t.\u0275\u0275advance(1),t.\u0275\u0275property("formGroup",r.parametersForm))},directives:[a.\u0275NgNoValidate,a.NgControlStatusGroup,a.FormGroupDirective,c.K,u.w,a.NgControlStatus,a.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),n})(),J=(()=>{class n{constructor(){this.parametersForm=new a.FormGroup({value:new a.FormControl(123456.789),decimalLimit:new a.FormControl(2),decimalSeparator:new a.FormControl("."),thousandSeparator:new a.FormControl(" ")})}get formattedNumber(){const{value:o,decimalLimit:r,decimalSeparator:i,thousandSeparator:d}=this.parametersForm.value;return(0,s.ufS)(o,r,i,d)}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["tui-format-example-6"]],decls:11,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],["formControlName","decimalLimit",1,"tui-space_top-2"],["formControlName","decimalSeparator",1,"tui-space_top-2"],["formControlName","thousandSeparator",1,"tui-space_top-2"]],template:function(o,r){1&o&&(t.\u0275\u0275text(0),t.\u0275\u0275elementStart(1,"form",0),t.\u0275\u0275elementStart(2,"div",1),t.\u0275\u0275elementStart(3,"tui-input",2),t.\u0275\u0275text(4," value "),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(5,"tui-input",3),t.\u0275\u0275text(6," decimalLimit "),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(7,"tui-input",4),t.\u0275\u0275text(8," decimalSeparator "),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(9,"tui-input",5),t.\u0275\u0275text(10," thousandSeparator "),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd()),2&o&&(t.\u0275\u0275textInterpolate1("'",r.formattedNumber,"' = formatNumber(value, decimalLimit, decimalSeparator, thousandSeparator); "),t.\u0275\u0275advance(1),t.\u0275\u0275property("formGroup",r.parametersForm))},directives:[a.\u0275NgNoValidate,a.NgControlStatusGroup,a.FormGroupDirective,c.K,u.w,a.NgControlStatus,a.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),n})();var X=e(76349);function V(n,m){if(1&n&&(t.\u0275\u0275elementStart(0,"p"),t.\u0275\u0275i18n(1,3),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(2,"tui-doc-example",4),t.\u0275\u0275element(3,"tui-format-example-1"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(4,"tui-doc-example",5),t.\u0275\u0275element(5,"tui-format-example-3"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(6,"tui-doc-example",6),t.\u0275\u0275element(7,"tui-format-example-4"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(8,"tui-doc-example",7),t.\u0275\u0275element(9,"tui-format-example-5"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(10,"tui-doc-example",8),t.\u0275\u0275element(11,"tui-format-example-6"),t.\u0275\u0275elementEnd()),2&n){const o=t.\u0275\u0275nextContext();t.\u0275\u0275advance(2),t.\u0275\u0275property("content",o.example1),t.\u0275\u0275advance(2),t.\u0275\u0275property("content",o.example3),t.\u0275\u0275advance(2),t.\u0275\u0275property("content",o.example4),t.\u0275\u0275advance(2),t.\u0275\u0275property("content",o.example5),t.\u0275\u0275advance(2),t.\u0275\u0275property("content",o.example6)}}function H(n,m){if(1&n&&(t.\u0275\u0275elementStart(0,"ol",9),t.\u0275\u0275elementStart(1,"li"),t.\u0275\u0275elementStart(2,"p"),t.\u0275\u0275i18n(3,10),t.\u0275\u0275elementEnd(),t.\u0275\u0275element(4,"tui-doc-code",11),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd()),2&n){const o=t.\u0275\u0275nextContext();t.\u0275\u0275advance(4),t.\u0275\u0275property("code",o.importComponentExample)}}let K=(()=>{class n{constructor(){this.importComponentExample=e.e(50377).then(e.t.bind(e,50377,17)),this.example1={TypeScript:e.e(56174).then(e.t.bind(e,56174,17)),HTML:e.e(75052).then(e.t.bind(e,75052,17)),LESS:e.e(35374).then(e.t.bind(e,35374,17))},this.example3={TypeScript:e.e(20392).then(e.t.bind(e,20392,17)),HTML:e.e(94506).then(e.t.bind(e,94506,17)),LESS:e.e(54796).then(e.t.bind(e,54796,17))},this.example4={TypeScript:e.e(33342).then(e.t.bind(e,33342,17)),HTML:e.e(43978).then(e.t.bind(e,43978,17)),LESS:e.e(17154).then(e.t.bind(e,17154,17))},this.example5={TypeScript:e.e(84254).then(e.t.bind(e,84254,17)),HTML:e.e(18343).then(e.t.bind(e,18343,17)),LESS:e.e(50475).then(e.t.bind(e,50475,17))},this.example6={TypeScript:e.e(29259).then(e.t.bind(e,29259,17)),HTML:e.e(97007).then(e.t.bind(e,97007,17)),LESS:e.e(33189).then(e.t.bind(e,33189,17))}}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["example-format"]],decls:3,vars:0,consts:function(){let m,o,r,i,d,T,M,f,C;return m=$localize`:␟8b68cb0e9623325effd2712982bfc6c2ddc96d58␟5358165867706649494:Format utils`,o=$localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`,r=$localize`:␟1da832a39ea4c0c3bd7976d78c971ebce6435c13␟1341457636714080363:A set of format utils`,i=$localize`:␟8603e981f7ca02a7bf59688e4767351180b4250d␟5245623836371299072:Adds 'px' to a number`,d=$localize`:␟f58552f0761b83792b2492e1439aa12357c39d15␟7442713877787930163:Returns a currency symbol from its three letter code or ISO 4217`,T=$localize`:␟ff19b55733851de9847ac9886b9640b108dadb82␟6708488179256599720:Capitalizes every word in a string`,M=$localize`:␟b945a41118e9fa647ee7e77517ecf6f5b69643d2␟1504114262974304913:Formats a phone number with separators`,f=$localize`:␟1980b95105c67951c5039793433db28092117edb␟7477502181232818354:Formats a number with separators`,C=$localize`:␟331439c9b8ee5b975fc037bbc742a75012cb302f␟5059560669993049040:Import into component and use:`,[["header",m,"package","CDK / CORE","path","cdk/utils/format"],["pageTab",""],["pageTab",o],r,["id","px","heading","px","description",i,3,"content"],["id","getCurrencySymbol","heading","getCurrencySymbol","description",d,3,"content"],["id","capitalize","heading","capitalize","description",T,3,"content"],["id","formatPhone","heading","formatPhone","description",M,3,"content"],["id","formatNumber","heading","formatNumber","description",f,3,"content"],[1,"b-demo-steps"],C,["filename","myComponent.component.ts",3,"code"]]},template:function(o,r){1&o&&(t.\u0275\u0275elementStart(0,"tui-doc-page",0),t.\u0275\u0275template(1,V,12,5,"ng-template",1),t.\u0275\u0275template(2,H,5,1,"ng-template",2),t.\u0275\u0275elementEnd())},directives:[g.q,R.n,N.f,y,G,U,z,J,X.c],encapsulation:2,changeDetection:0}),n})(),B=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=t.\u0275\u0275defineInjector({imports:[[O.ez,p._Hh,a.FormsModule,a.ReactiveFormsModule,p.QfL,p.Jyo,s.pcV,p.zXW,E.fV,F.Bz.forChild((0,E.Ve)(K))]]}),n})()}}]);