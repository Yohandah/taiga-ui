"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[66581],{66581:(He,P,t)=>{t.r(P),t.d(P,{ExampleTuiFieldErrorModule:()=>Je});var u=t(12057),r=t(23738),O=t(12021),G=t(55970),x=t(46244),X=t(61557),E=t(37267),s=t(38780),U=t(96087),b=t(89570),e=t(74788),z=t(88331),B=t(37159),J=t(66596),H=t(57068),c=t(88135),D=t(77027),T=t(41360),f=t(10200),S=t(68874),p=t(36951),m=t(7114);const L=function(){return[]},Q=/^[a-zA-Z]+$/;function h(n){return n.value&&Q.test(n.value)?null:{other:"Only latin letters are allowed"}}function K(n){return"42"===n.value?null:{other:"Wrong"}}let j=(()=>{class n{constructor(){this.testValue1=new r.FormControl("",[r.Validators.required,h]),this.testValue3=new r.FormControl("",[r.Validators.required,h]),this.testForm=new r.FormGroup({testValue1:this.testValue1,testValue2:new r.FormControl("",[r.Validators.required,K])}),this.testValue1.valueChanges.subscribe(()=>{this.testValue1.markAsTouched()})}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-field-error-pipe-example-1"]],decls:15,vars:15,consts:function(){let i,o,F;return i=$localize`:␟c2f188eeca60463782738d8247914bf170df5098␟3772154377692784553:Type the ultimate answer`,o=$localize`:␟4de3cc8dba3c7b052f74a1db4752f51bda859e9c␟8591875090862306452:Set a password`,F=$localize`:␟55293e53f2eaf13c5a165765c4319f4527d577a4␟5532503478235461752: If you need to show validation message as early as a user started to type something, subscribe on form value changes and call markAsTouched on control on first value change `,[[1,"b-form",3,"formGroup"],["tuiLabel","","label",i,1,"tui-space_bottom-4"],["formControlName","testValue2","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["formControlName","testValue2",3,"error"],["tuiLabel","","label",o],["formControlName","testValue1","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["formControlName","testValue1",3,"error"],F]},template:function(o,F){1&o&&(e.\u0275\u0275elementStart(0,"form",0),e.\u0275\u0275elementStart(1,"label",1),e.\u0275\u0275elementStart(2,"tui-input",2),e.\u0275\u0275text(3," to the Question of Life, the Universe, and Everything "),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(4,"tui-error",3),e.\u0275\u0275pipe(5,"async"),e.\u0275\u0275pipe(6,"tuiFieldError"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"label",4),e.\u0275\u0275elementStart(8,"tui-input",5),e.\u0275\u0275text(9," Latin letters only "),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(10,"tui-error",6),e.\u0275\u0275pipe(11,"async"),e.\u0275\u0275pipe(12,"tuiFieldError"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(13,"p"),e.\u0275\u0275i18n(14,7),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&o&&(e.\u0275\u0275property("formGroup",F.testForm),e.\u0275\u0275advance(2),e.\u0275\u0275property("tuiTextfieldLabelOutside",!0),e.\u0275\u0275advance(2),e.\u0275\u0275property("error",e.\u0275\u0275pipeBind1(5,5,e.\u0275\u0275pipeBind1(6,7,e.\u0275\u0275pureFunction0(13,L)))),e.\u0275\u0275advance(4),e.\u0275\u0275property("tuiTextfieldLabelOutside",!0),e.\u0275\u0275advance(2),e.\u0275\u0275property("error",e.\u0275\u0275pipeBind1(11,9,e.\u0275\u0275pipeBind1(12,11,e.\u0275\u0275pureFunction0(14,L)))))},directives:[r.\u0275NgNoValidate,r.NgControlStatusGroup,r.FormGroupDirective,c.A,D.K,T.w,r.NgControlStatus,r.FormControlName,f.sz,S.xT,p.v],pipes:[u.Ov,m.A],encapsulation:2,changeDetection:0}),n})();var W=t(20945),Y=t(42145),Z=t(88002),w=t(39761),k=t(65009),q=t(10383);const g=function(){return[]};function ee(n){return`Maximum length \u2014 ${n.requiredLength}`}function te(n){return`Minimum length \u2014 ${n.requiredLength}`}let ne=(()=>{class n{constructor(){this.testValue1=new r.FormControl("",[r.Validators.minLength(4),r.Validators.maxLength(4)]),this.testValue2=new r.FormControl("",[r.Validators.required,r.Validators.email]),this.testValue3=new r.FormControl(2,[r.Validators.min(3)]),this.testForm=new r.FormGroup({testValue1:this.testValue1,testValue2:this.testValue2,testValue3:this.testValue3}),this.testValue1.valueChanges.subscribe(()=>{this.testValue1.markAsTouched()})}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-field-error-pipe-example-2"]],features:[e.\u0275\u0275ProvidersFeature([{provide:s.Z4Y,useValue:{required:"Enter this!",email:"Enter a valid email",maxlength:ee,minlength:te,min:(0,W.F)(2e3).pipe((0,Y.R)(i=>!i,!1),(0,Z.U)(i=>i?"Fix please":"Min number 3"),(0,w.O)("Min number 3"))}}])],decls:19,vars:20,consts:function(){let i;return i=$localize`:␟87a9e0f6ceb1444cab6185424f933a376357a91c␟3646762244302681891: Required `,[[1,"b-form",3,"formGroup"],["tuiLabel","","label","Enter an email",1,"tui-space_bottom-4"],["formControlName","testValue2","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],i,["formControlName","testValue2",3,"error"],["tuiLabel","","label","Minimum and maximum length",1,"tui-space_bottom-4"],["formControlName","testValue1","tuiTextfieldSize","m"],["formControlName","testValue1",3,"error"],["tuiLabel","","label","Minimum number"],["formControlName","testValue3","tuiTextfieldSize","m"],["formControlName","testValue3",3,"error"]]},template:function(o,F){1&o&&(e.\u0275\u0275elementStart(0,"form",0),e.\u0275\u0275elementStart(1,"label",1),e.\u0275\u0275elementStart(2,"tui-input",2),e.\u0275\u0275i18n(3,3),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(4,"tui-error",4),e.\u0275\u0275pipe(5,"async"),e.\u0275\u0275pipe(6,"tuiFieldError"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"label",5),e.\u0275\u0275elementStart(8,"tui-input",6),e.\u0275\u0275text(9," 4 letters word... "),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(10,"tui-error",7),e.\u0275\u0275pipe(11,"async"),e.\u0275\u0275pipe(12,"tuiFieldError"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(13,"label",8),e.\u0275\u0275elementStart(14,"tui-input-count",9),e.\u0275\u0275text(15," number "),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(16,"tui-error",10),e.\u0275\u0275pipe(17,"async"),e.\u0275\u0275pipe(18,"tuiFieldError"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&o&&(e.\u0275\u0275property("formGroup",F.testForm),e.\u0275\u0275advance(2),e.\u0275\u0275property("tuiTextfieldLabelOutside",!0),e.\u0275\u0275advance(2),e.\u0275\u0275property("error",e.\u0275\u0275pipeBind1(5,5,e.\u0275\u0275pipeBind1(6,7,e.\u0275\u0275pureFunction0(17,g)))),e.\u0275\u0275advance(6),e.\u0275\u0275property("error",e.\u0275\u0275pipeBind1(11,9,e.\u0275\u0275pipeBind1(12,11,e.\u0275\u0275pureFunction0(18,g)))),e.\u0275\u0275advance(6),e.\u0275\u0275property("error",e.\u0275\u0275pipeBind1(17,13,e.\u0275\u0275pipeBind1(18,15,e.\u0275\u0275pureFunction0(19,g)))))},directives:[r.\u0275NgNoValidate,r.NgControlStatusGroup,r.FormGroupDirective,c.A,D.K,T.w,r.NgControlStatus,r.FormControlName,f.sz,S.xT,p.v,k.E,q.a],pipes:[u.Ov,m.A],encapsulation:2,changeDetection:0}),n})();var d=t(82605),M=t(76189);const oe=["errorContent"],re=["bigErrorContent"];function ie(n,i){1&n&&(e.\u0275\u0275text(0," Secret number must contain "),e.\u0275\u0275elementStart(1,"strong"),e.\u0275\u0275text(2,"10 or 12 digits"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(3," . "))}function Fe(n,i){1&n&&(e.\u0275\u0275text(0," This company is already registered "),e.\u0275\u0275elementStart(1,"button",9),e.\u0275\u0275text(2," It is mine "),e.\u0275\u0275elementEnd())}const le=function(){return["required","inn"]},ae=function(){return[]},I=/^\d{10}$/,v=/^\d{12}$/;let ue=(()=>{class n{constructor(){this.errorContent="",this.bigErrorContent="",this.testValue2=new r.FormControl(""),this.testForm=new r.FormGroup({testValue1:new r.FormControl("",[r.Validators.required,this.getSecretValidator()]),testValue2:this.testValue2}),this.companyValidator=o=>o.value?{inn:new d.T8v(this.bigErrorContent)}:null}ngOnInit(){this.testValue2.setValidators([r.Validators.required,this.companyValidator])}getSecretValidator(){return o=>o.value&&(I.test(o.value)||v.test(o.value))?null:{secret:new d.T8v(this.errorContent)}}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-field-error-pipe-example-3"]],viewQuery:function(o,F){if(1&o&&(e.\u0275\u0275viewQuery(oe,5),e.\u0275\u0275viewQuery(re,5)),2&o){let l;e.\u0275\u0275queryRefresh(l=e.\u0275\u0275loadQuery())&&(F.errorContent=l.first),e.\u0275\u0275queryRefresh(l=e.\u0275\u0275loadQuery())&&(F.bigErrorContent=l.first)}},decls:15,vars:15,consts:function(){let i;return i=$localize`:␟7d66ae66a6f955b1eb6f5c00aac4d4e2584cdeed␟2295031025708706060:Enter company name`,[[1,"b-form",3,"formGroup"],["tuiLabel","","label","Secret number"],["formControlName","testValue1","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["errorContent",""],["formControlName","testValue1",3,"error"],["tuiLabel","","label",i,1,"tui-space_top-4"],["formControlName","testValue2","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["bigErrorContent",""],["formControlName","testValue2",3,"error"],["tuiButton","","type","button",1,"tui-space_top-2"]]},template:function(o,F){1&o&&(e.\u0275\u0275elementStart(0,"form",0),e.\u0275\u0275elementStart(1,"label",1),e.\u0275\u0275element(2,"tui-input",2),e.\u0275\u0275template(3,ie,4,0,"ng-template",null,3,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275element(5,"tui-error",4),e.\u0275\u0275pipe(6,"async"),e.\u0275\u0275pipe(7,"tuiFieldError"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"label",5),e.\u0275\u0275element(9,"tui-input",6),e.\u0275\u0275template(10,Fe,3,0,"ng-template",null,7,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275element(12,"tui-error",8),e.\u0275\u0275pipe(13,"async"),e.\u0275\u0275pipe(14,"tuiFieldError"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&o&&(e.\u0275\u0275property("formGroup",F.testForm),e.\u0275\u0275advance(2),e.\u0275\u0275property("tuiTextfieldLabelOutside",!0),e.\u0275\u0275advance(3),e.\u0275\u0275property("error",e.\u0275\u0275pipeBind1(6,5,e.\u0275\u0275pipeBind1(7,7,e.\u0275\u0275pureFunction0(13,le)))),e.\u0275\u0275advance(4),e.\u0275\u0275property("tuiTextfieldLabelOutside",!0),e.\u0275\u0275advance(3),e.\u0275\u0275property("error",e.\u0275\u0275pipeBind1(13,9,e.\u0275\u0275pipeBind1(14,11,e.\u0275\u0275pureFunction0(14,ae)))))},directives:[r.\u0275NgNoValidate,r.NgControlStatusGroup,r.FormGroupDirective,c.A,D.K,T.w,r.NgControlStatus,r.FormControlName,f.sz,S.xT,p.v,M.v],pipes:[u.Ov,m.A],encapsulation:2,changeDetection:0}),n})();var Ee=t(78750),se=t(45303),de=t(60332);const pe=["phoneErrorContent"];function me(n,i){1&n&&e.\u0275\u0275text(0,"Invalid phone number length")}const y=function(){return[]};function ce(n,i){if(1&n){const o=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"label",4),e.\u0275\u0275elementStart(1,"span",5),e.\u0275\u0275element(2,"tui-input-phone",6),e.\u0275\u0275elementStart(3,"button",7),e.\u0275\u0275listener("click",function(){const R=e.\u0275\u0275restoreView(o).index;return e.\u0275\u0275nextContext().removePhone(R)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(4,me,1,0,"ng-template",null,8,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275element(6,"tui-error",9),e.\u0275\u0275pipe(7,"async"),e.\u0275\u0275pipe(8,"tuiFieldError"),e.\u0275\u0275elementEnd()}if(2&n){const o=i.index;e.\u0275\u0275propertyInterpolate1("label","Phone number ",o+1,""),e.\u0275\u0275advance(2),e.\u0275\u0275propertyInterpolate("formControlName",o),e.\u0275\u0275property("tuiTextfieldLabelOutside",!0),e.\u0275\u0275advance(4),e.\u0275\u0275propertyInterpolate("formControlName",o),e.\u0275\u0275property("error",e.\u0275\u0275pipeBind1(7,5,e.\u0275\u0275pipeBind1(8,7,e.\u0275\u0275pureFunction0(9,y))))}}let De=(()=>{class n{constructor(){this.phoneErrorContent="",this.testForm=new r.FormGroup({phones:new r.FormArray([new r.FormControl("",[r.Validators.required,this.getPhoneLengthValidator()])],[this.getPhoneArrayValidator()])})}get formData(){return this.testForm.get("phones")}addPhone(){this.formData.push(new r.FormControl("",this.addValidators()))}removePhone(o){this.formData.removeAt(o);let F=0;for(;F<=1&&this.formData.controls[F];)this.formData.controls[F].setValidators([r.Validators.required,this.getPhoneLengthValidator()]),F++}addValidators(){return this.formData.controls.length<2?[r.Validators.required,this.getPhoneLengthValidator()]:null}getPhoneLengthValidator(){return o=>12!==o.value.length?{length:new d.T8v(this.phoneErrorContent)}:null}getPhoneArrayValidator(){return o=>o.controls.length<2||o.controls.filter(F=>F.errors).length&&o.controls.length?{length:new d.T8v("You should add at least 2 phone number")}:null}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-field-error-pipe-example-4"]],viewQuery:function(o,F){if(1&o&&e.\u0275\u0275viewQuery(pe,5),2&o){let l;e.\u0275\u0275queryRefresh(l=e.\u0275\u0275loadQuery())&&(F.phoneErrorContent=l.first)}},decls:7,vars:8,consts:[[3,"formGroup"],["tuiLabel","","formArrayName","phones","class","tui-space_bottom-4",3,"label",4,"ngFor","ngForOf"],["formArrayName","phones",1,"form-array-error",3,"error"],["tuiButton","","type","button","size","s",1,"tui-space_top-4",3,"click"],["tuiLabel","","formArrayName","phones",1,"tui-space_bottom-4",3,"label"],[1,"row"],["tuiTextfieldAutocomplete","off","tuiTextfieldSize","m",1,"input",3,"formControlName","tuiTextfieldLabelOutside"],["tuiIconButton","","type","button","size","m","title","Delete phone number","appearance","icon","icon","tuiIconTrash",1,"tui-space_left-2","icon",3,"click"],["phoneErrorContent",""],[3,"formControlName","error"]],template:function(o,F){1&o&&(e.\u0275\u0275elementStart(0,"form",0),e.\u0275\u0275template(1,ce,9,10,"label",1),e.\u0275\u0275element(2,"tui-error",2),e.\u0275\u0275pipe(3,"async"),e.\u0275\u0275pipe(4,"tuiFieldError"),e.\u0275\u0275elementStart(5,"button",3),e.\u0275\u0275listener("click",function(){return F.addPhone()}),e.\u0275\u0275text(6," Add a phone number "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&o&&(e.\u0275\u0275property("formGroup",F.testForm),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",F.formData.controls),e.\u0275\u0275advance(1),e.\u0275\u0275property("error",e.\u0275\u0275pipeBind1(3,3,e.\u0275\u0275pipeBind1(4,5,e.\u0275\u0275pureFunction0(7,y)))))},directives:[r.\u0275NgNoValidate,r.NgControlStatusGroup,r.FormGroupDirective,u.sg,p.v,r.FormArrayName,M.v,c.A,Ee.y,se.X,de.S8,f.sz,r.NgControlStatus,r.FormControlName,S.xT],pipes:[u.Ov,m.A],styles:[".input[_ngcontent-%COMP%]{width:20rem}.row[_ngcontent-%COMP%]{display:flex;align-items:center}.form-array-error[_ngcontent-%COMP%]{font-size:.875rem}"],changeDetection:0}),n})();var $=t(25917),A=t(71289);const Te=function(){return[]},fe=/^[a-zA-Z]+$/;let Re=(()=>{class n{constructor(o,F){this.fb=o,this.form=this.fb.group({text:["\u0440\u0443\u0441\u0441\u043a\u0438\u0439 \u0442\u0435\u043a\u0441\u0442",r.Validators.required]}),this.form.controls.text.setAsyncValidators(function(n){return i=>i.value&&fe.test(i.value)?(0,$.of)(null):(0,$.of)({error:new d.T8v("Only latin letters allowed")}).pipe((0,A.g)(n?0:5e3))}(F)),this.form.controls.text.markAsTouched()}}return n.\u0275fac=function(o){return new(o||n)(e.\u0275\u0275directiveInject(r.FormBuilder),e.\u0275\u0275directiveInject(d.B4V))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-field-error-pipe-example-5"]],decls:7,vars:7,consts:[[3,"formGroup"],[1,"tui-form__row"],["formControlName","text",1,"input"],["formControlName","text",3,"error"]],template:function(o,F){1&o&&(e.\u0275\u0275elementStart(0,"form",0),e.\u0275\u0275elementStart(1,"div",1),e.\u0275\u0275elementStart(2,"tui-input",2),e.\u0275\u0275text(3," Enter some text "),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(4,"tui-error",3),e.\u0275\u0275pipe(5,"async"),e.\u0275\u0275pipe(6,"tuiFieldError"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&o&&(e.\u0275\u0275property("formGroup",F.form),e.\u0275\u0275advance(4),e.\u0275\u0275property("error",e.\u0275\u0275pipeBind1(5,2,e.\u0275\u0275pipeBind1(6,4,e.\u0275\u0275pureFunction0(6,Te)))))},directives:[r.\u0275NgNoValidate,r.NgControlStatusGroup,r.FormGroupDirective,D.K,T.w,r.NgControlStatus,r.FormControlName,p.v],pipes:[u.Ov,m.A],styles:[".input[_ngcontent-%COMP%]{width:20rem}.row[_ngcontent-%COMP%]{display:flex;align-items:center}.form-array-error[_ngcontent-%COMP%]{font-size:.875rem}"],changeDetection:0}),n})();var Ce=t(19582),ge=t(222),_e=t(96408),Pe=t(57681),Oe=t(35459),xe=t(84190),Le=t(62818),he=t(48598),Me=t(16753),Ie=t(13735),ve=t(67446),ye=t(99886),$e=t(44457);function Ae(n,i){if(1&n&&(e.\u0275\u0275elementStart(0,"td",8),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&n){const o=e.\u0275\u0275nextContext().$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",o.name," ")}}const Ne=function(){return[]};function Ve(n,i){if(1&n&&(e.\u0275\u0275elementStart(0,"td",8),e.\u0275\u0275elementStart(1,"tui-input-number",9),e.\u0275\u0275pipe(2,"tuiCurrency"),e.\u0275\u0275pipe(3,"tuiFieldErrorContent"),e.\u0275\u0275text(4," Price "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&n){const o=e.\u0275\u0275nextContext().index,F=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("postfix",e.\u0275\u0275pipeBind1(2,3,"UGX"))("formControl",F.controls[o])("tuiHint",e.\u0275\u0275pipeBind1(3,5,e.\u0275\u0275pureFunction0(7,Ne)))}}function Ge(n,i){1&n&&(e.\u0275\u0275elementStart(0,"tr",6),e.\u0275\u0275template(1,Ae,2,1,"td",7),e.\u0275\u0275template(2,Ve,5,8,"td",7),e.\u0275\u0275elementEnd()),2&n&&(e.\u0275\u0275advance(1),e.\u0275\u0275property("tuiCell","name"),e.\u0275\u0275advance(1),e.\u0275\u0275property("tuiCell","price"))}let Xe=(()=>{class n{constructor(){this.data=[{name:"Latte"},{name:"Cappuccino"}],this.latteControl=new r.FormControl(null,[r.Validators.required,r.Validators.max(6)]),this.cappuccinoControl=new r.FormControl(null,[r.Validators.required,r.Validators.max(5)]),this.controls=[this.latteControl,this.cappuccinoControl],this.columns=["name","price"]}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-field-error-content-pipe-example-6"]],features:[e.\u0275\u0275ProvidersFeature([{provide:s.Z4Y,useValue:{required:"Enter this!",max:i=>`Too expensive, max ${i.max}`}}])],decls:9,vars:4,consts:[["tuiTable","",1,"table",3,"columns"],["tuiThGroup",""],["tuiTh","",3,"resizable"],["tuiTh",""],["tuiTbody","",3,"data"],["tuiTr","",4,"tuiRow","tuiRowOf"],["tuiTr",""],["tuiTd","",4,"tuiCell"],["tuiTd",""],["tuiHintDirection","right",3,"postfix","formControl","tuiHint"]],template:function(o,F){1&o&&(e.\u0275\u0275elementStart(0,"table",0),e.\u0275\u0275elementStart(1,"thead"),e.\u0275\u0275elementStart(2,"tr",1),e.\u0275\u0275elementStart(3,"th",2),e.\u0275\u0275text(4," Name "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"th",3),e.\u0275\u0275text(6,"Price"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"tbody",4),e.\u0275\u0275template(8,Ge,3,2,"tr",5),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&o&&(e.\u0275\u0275property("columns",F.columns),e.\u0275\u0275advance(3),e.\u0275\u0275property("resizable",!0),e.\u0275\u0275advance(4),e.\u0275\u0275property("data",F.data),e.\u0275\u0275advance(1),e.\u0275\u0275property("tuiRowOf",F.data))},directives:[Ce.c,ge.E,_e.W,Pe.j,Oe.L,xe.f,Le.B,he.K,Me.q,Ie.g,r.NgControlStatus,r.FormControlDirective,ve.D],pipes:[ye.i,$e.y],styles:[".table[_ngcontent-%COMP%]{width:100%;table-layout:fixed}.error[_ngcontent-%COMP%]{color:#fff}"],changeDetection:0}),n})();var Ue=t(76349);function be(n,i){if(1&n&&(e.\u0275\u0275i18nStart(0,3),e.\u0275\u0275elementStart(1,"p"),e.\u0275\u0275element(2,"code"),e.\u0275\u0275element(3,"code"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"p"),e.\u0275\u0275element(5,"code"),e.\u0275\u0275element(6,"code"),e.\u0275\u0275element(7,"a",4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"tui-doc-example",5),e.\u0275\u0275element(9,"tui-field-error-pipe-example-1"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"tui-doc-example",6),e.\u0275\u0275element(11,"tui-field-error-pipe-example-2"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"tui-doc-example",7),e.\u0275\u0275element(13,"tui-field-error-pipe-example-3"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"tui-doc-example",8),e.\u0275\u0275element(15,"tui-field-error-pipe-example-4"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(16,"tui-doc-example",9),e.\u0275\u0275element(17,"tui-field-error-pipe-example-5"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(18,"tui-doc-example",10),e.\u0275\u0275element(19,"tui-field-error-content-pipe-example-6"),e.\u0275\u0275elementEnd(),e.\u0275\u0275i18nEnd()),2&n){const o=e.\u0275\u0275nextContext();e.\u0275\u0275advance(8),e.\u0275\u0275property("content",o.example1),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",o.example2),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",o.example3),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",o.example4),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",o.example5),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",o.example6)}}function ze(n,i){if(1&n&&(e.\u0275\u0275elementStart(0,"ol",11),e.\u0275\u0275elementStart(1,"li"),e.\u0275\u0275elementStart(2,"p"),e.\u0275\u0275i18nStart(3,12),e.\u0275\u0275element(4,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(5,"tui-doc-code",13),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"li"),e.\u0275\u0275elementStart(7,"p"),e.\u0275\u0275i18n(8,14),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(9,"tui-doc-code",15),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&n){const o=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("code",o.exampleModule),e.\u0275\u0275advance(4),e.\u0275\u0275property("code",o.exampleHtml)}}let Be=(()=>{class n{constructor(){this.exampleModule=t.e(18410).then(t.t.bind(t,18410,17)),this.exampleHtml=t.e(42317).then(t.t.bind(t,42317,17)),this.example1={TypeScript:t.e(38210).then(t.bind(t,38210)),HTML:t.e(92122).then(t.t.bind(t,92122,17))},this.example2={TypeScript:t.e(90299).then(t.bind(t,90299)),HTML:t.e(5089).then(t.t.bind(t,5089,17))},this.example3={TypeScript:t.e(53467).then(t.bind(t,53467)),HTML:t.e(41981).then(t.t.bind(t,41981,17))},this.example4={TypeScript:t.e(37685).then(t.bind(t,37685)),HTML:t.e(19343).then(t.t.bind(t,19343,17)),LESS:t.e(15417).then(t.t.bind(t,15417,17))},this.example5={TypeScript:t.e(39180).then(t.bind(t,39180)),HTML:t.e(75998).then(t.t.bind(t,75998,17)),LESS:t.e(76402).then(t.t.bind(t,76402,17))},this.example6={TypeScript:t.e(40498).then(t.bind(t,40498)),HTML:t.e(28096).then(t.t.bind(t,28096,17)),LESS:t.e(3843).then(t.t.bind(t,3843,17))}}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["example-field-error-pipe"]],decls:3,vars:0,consts:function(){let i,o,F,l,R,_,C,N,V;return i=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,o=$localize`:␟878e6fe461fd9ca2712122350e24522f5de8fd18␟8087109270529539309:With custom messages for validators`,F=$localize`:␟beedd8b329a8f8773c3b0f41eefeeb5e601578a9␟7592818721454246340:with a template`,l=$localize`:␟f168335edcd7a2503812f5cdb86f5fdf3f53881e␟296183290148574667:With adding new controls (FormArray)`,R=$localize`:␟4dd4c0a5cc2f0b5edcf6ce49c7de250516eb991e␟2219993318238885702:async validator`,_=$localize`:␟cd32fd6943404603d4285581b8c6fc926a23eec0␟2645314855951305243:tuiFieldErrorContentPipe`,C=$localize`:␟42c69b6d2ac097886f22a489d25b3d405635b997␟362690177758388643:${"[\ufffd#1\ufffd|\ufffd#4\ufffd]"}:START_PARAGRAPH: FieldErrorPipe takes order of errors as array and transform it to ${"[\ufffd#2\ufffd|\ufffd#3\ufffd|\ufffd#5\ufffd|\ufffd#6\ufffd]"}:START_TAG_CODE:TuiValidationError${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd|\ufffd/#5\ufffd|\ufffd/#6\ufffd]"}:CLOSE_TAG_CODE: . Can be used with ${"[\ufffd#2\ufffd|\ufffd#3\ufffd|\ufffd#5\ufffd|\ufffd#6\ufffd]"}:START_TAG_CODE:TuiError${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd|\ufffd/#5\ufffd|\ufffd/#6\ufffd]"}:CLOSE_TAG_CODE:${"[\ufffd/#1\ufffd|\ufffd/#4\ufffd]"}:CLOSE_PARAGRAPH:${"[\ufffd#1\ufffd|\ufffd#4\ufffd]"}:START_PARAGRAPH: You can also use ${"[\ufffd#2\ufffd|\ufffd#3\ufffd|\ufffd#5\ufffd|\ufffd#6\ufffd]"}:START_TAG_CODE:tuiFieldErrorContentPipe${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd|\ufffd/#5\ufffd|\ufffd/#6\ufffd]"}:CLOSE_TAG_CODE: with ${"[\ufffd#2\ufffd|\ufffd#3\ufffd|\ufffd#5\ufffd|\ufffd#6\ufffd]"}:START_TAG_CODE:TuiHint${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd|\ufffd/#5\ufffd|\ufffd/#6\ufffd]"}:CLOSE_TAG_CODE: (see ${"\ufffd#7\ufffd"}:START_LINK: tuiFieldErrorContentPipe example ${"\ufffd/#7\ufffd"}:CLOSE_LINK: ). It returns a content of the TuiValidationError. ${"[\ufffd/#1\ufffd|\ufffd/#4\ufffd]"}:CLOSE_PARAGRAPH:${"\ufffd#8\ufffd"}:START_TAG_TUI_DOC_EXAMPLE:${"\ufffd#9\ufffd"}:START_TAG_TUI_FIELD_ERROR_PIPE_EXAMPLE_1:${"\ufffd/#9\ufffd"}:CLOSE_TAG_TUI_FIELD_ERROR_PIPE_EXAMPLE_1:${"[\ufffd/#8\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#14\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\ufffd#10\ufffd"}:START_TAG_TUI_DOC_EXAMPLE_1:${"\ufffd#11\ufffd"}:START_TAG_TUI_FIELD_ERROR_PIPE_EXAMPLE_2:${"\ufffd/#11\ufffd"}:CLOSE_TAG_TUI_FIELD_ERROR_PIPE_EXAMPLE_2:${"[\ufffd/#8\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#14\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\ufffd#12\ufffd"}:START_TAG_TUI_DOC_EXAMPLE_2:${"\ufffd#13\ufffd"}:START_TAG_TUI_FIELD_ERROR_PIPE_EXAMPLE_3:${"\ufffd/#13\ufffd"}:CLOSE_TAG_TUI_FIELD_ERROR_PIPE_EXAMPLE_3:${"[\ufffd/#8\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#14\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\ufffd#14\ufffd"}:START_TAG_TUI_DOC_EXAMPLE_3:${"\ufffd#15\ufffd"}:START_TAG_TUI_FIELD_ERROR_PIPE_EXAMPLE_4:${"\ufffd/#15\ufffd"}:CLOSE_TAG_TUI_FIELD_ERROR_PIPE_EXAMPLE_4:${"[\ufffd/#8\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#14\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\ufffd#16\ufffd"}:START_TAG_TUI_DOC_EXAMPLE_4:${"\ufffd#17\ufffd"}:START_TAG_TUI_FIELD_ERROR_PIPE_EXAMPLE_5:${"\ufffd/#17\ufffd"}:CLOSE_TAG_TUI_FIELD_ERROR_PIPE_EXAMPLE_5:${"[\ufffd/#8\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#14\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\ufffd#18\ufffd"}:START_TAG_TUI_DOC_EXAMPLE_5:${"\ufffd#19\ufffd"}:START_TAG_TUI_FIELD_ERROR_CONTENT_PIPE_EXAMPLE_6:${"\ufffd/#19\ufffd"}:CLOSE_TAG_TUI_FIELD_ERROR_CONTENT_PIPE_EXAMPLE_6:${"[\ufffd/#8\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#14\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:`,C=e.\u0275\u0275i18nPostprocess(C),N=$localize`:␟121f4dac7c3383d54e07bb2845ac74f2ade59411␟3384755420899190664: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiFieldErrorPipeModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,V=$localize`:␟0946c7e6e1334eb04ea506cdd9864968aecc69cb␟412868639087182729:Use pipe in template:`,[["header","FieldError","package","KIT","type","pipes"],["pageTab",""],["pageTab","Setup"],C,["tuiLink","","routerLink",".","fragment","content"],["id","base","heading",i,3,"content"],["id","customMessages","heading",o,3,"content"],["id","patterns","heading",F,3,"content"],["id","formArray","heading",l,3,"content"],["id","async","heading",R,3,"content"],["id","content","heading",_,3,"content"],[1,"b-demo-steps"],N,["filename","myComponent.module.ts",3,"code"],V,["filename","myComponent.template.html",3,"code"]]},template:function(o,F){1&o&&(e.\u0275\u0275elementStart(0,"tui-doc-page",0),e.\u0275\u0275template(1,be,20,6,"ng-template",1),e.\u0275\u0275template(2,ze,10,2,"ng-template",2),e.\u0275\u0275elementEnd())},directives:[z.q,B.n,J.V,O.yS,H.f,j,ne,ue,De,Re,Xe,Ue.c],encapsulation:2,changeDetection:0}),n})(),Je=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[u.ez,r.ReactiveFormsModule,x.fV,E.cnw,E.Shu,U.Yu,E.U8r,E.goS,s.QfL,E.fNO,s.Kjg,s.$HZ,E.jzK,X.jz,E.goS,s._Hh,G.wc,b.wq,O.Bz.forChild((0,x.Ve)(Be))]]}),n})()}}]);