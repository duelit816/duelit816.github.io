(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{ATrY:function(e,t,r){"use strict";r.r(t);var n=r("ofXK"),c=r("3Pt+"),i=r("6NWb"),o=r("1kSV"),s=r("tyNb"),a=r("twK/"),l=r("wHSu"),b=r("Znnd"),u=r("YGOX"),f=r("IGGr"),d=r("SMdK"),m=r("wd/R"),g=r("2Vo4"),p=r("5yfJ"),h=r("lJxs"),C=r("JIr8"),U=r("fXoL"),D=r("qc5V"),V=r("Olgc");function w(e,t){if(1&e){const e=U.Wb();U.Tb(0),U.Vb(1,"div",4),U.Qb(2,"fa-icon",5),U.Vb(3,"label",6),U.Lc(4,"Failed to create user!"),U.Ub(),U.Vb(5,"label",6),U.Lc(6),U.Ub(),U.Vb(7,"button",7),U.hc("click",(function(){return U.Cc(e),U.lc(2).goBack()})),U.Lc(8,"Go back to user details"),U.Ub(),U.Vb(9,"button",7),U.hc("click",(function(){return U.Cc(e),U.lc(2).createUser()})),U.Lc(10,"Retry"),U.Ub(),U.Ub(),U.Sb()}if(2&e){const e=U.lc(2);U.Cb(2),U.rc("icon",e.failedIcon),U.Cb(4),U.Nc("Error: ",e.createError,"")}}function v(e,t){if(1&e){const e=U.Wb();U.Tb(0),U.Vb(1,"div",4),U.Qb(2,"fa-icon",8),U.Vb(3,"label",9),U.Lc(4,"Successfully Created User!"),U.Ub(),U.Vb(5,"label",9),U.Lc(6),U.mc(7,"async"),U.Ub(),U.Vb(8,"button",7),U.hc("click",(function(){return U.Cc(e),U.lc(2).navigateToUserProfile()})),U.Lc(9,"Redirect now"),U.Ub(),U.Ub(),U.Sb()}if(2&e){const e=U.lc(2);U.Cb(2),U.rc("icon",e.successIcon),U.Cb(4),U.Nc("Redirecting to user profile in ",U.nc(7,2,e.timer$),"")}}function I(e,t){if(1&e&&(U.Tb(0),U.Jc(1,w,11,2,"ng-container",3),U.Jc(2,v,10,4,"ng-container",3),U.Sb()),2&e){const e=U.lc();U.Cb(1),U.rc("ngIf",e.createError),U.Cb(1),U.rc("ngIf",e.isCreatingDone)}}function y(e,t){1&e&&(U.Vb(0,"span",35),U.Lc(1,"This field is required."),U.Ub())}function F(e,t){if(1&e&&(U.Tb(0),U.Jc(1,y,2,0,"span",34),U.Sb()),2&e){const e=U.lc(2);U.Cb(1),U.rc("ngIf",e.userDetailsForm.get("firstName").errors.required)}}function L(e,t){1&e&&(U.Vb(0,"span",35),U.Lc(1,"This field is required."),U.Ub())}function P(e,t){if(1&e&&(U.Tb(0),U.Jc(1,L,2,0,"span",34),U.Sb()),2&e){const e=U.lc(2);U.Cb(1),U.rc("ngIf",e.userDetailsForm.get("lastName").errors.required)}}function J(e,t){1&e&&(U.Vb(0,"span",35),U.Lc(1,"This field is required."),U.Ub())}function M(e,t){1&e&&(U.Vb(0,"span",35),U.Lc(1,"This field must be a valid email address."),U.Ub())}function O(e,t){if(1&e&&(U.Tb(0),U.Jc(1,J,2,0,"span",34),U.Jc(2,M,2,0,"span",34),U.Sb()),2&e){const e=U.lc(2);U.Cb(1),U.rc("ngIf",e.userDetailsForm.get("email").errors.required),U.Cb(1),U.rc("ngIf",e.userDetailsForm.get("email").errors.email)}}function N(e,t){if(1&e&&(U.Vb(0,"option",38),U.Lc(1),U.Ub()),2&e){const e=t.$implicit;U.rc("value",e),U.Cb(1),U.Mc(e)}}function x(e,t){if(1&e&&(U.Vb(0,"select",36),U.Jc(1,N,2,2,"option",37),U.Ub()),2&e){const e=t.$implicit;U.Cb(1),U.rc("ngForOf",e)}}function T(e,t){1&e&&(U.Vb(0,"span",35),U.Lc(1,"This field is required."),U.Ub())}function _(e,t){if(1&e&&(U.Tb(0),U.Jc(1,T,2,0,"span",34),U.Sb()),2&e){const e=U.lc(2);U.Cb(1),U.rc("ngIf",e.userDetailsForm.get("country").errors.required)}}function q(e,t){if(1&e&&(U.Vb(0,"option",38),U.Lc(1),U.Ub()),2&e){const e=t.$implicit;U.rc("value",e),U.Cb(1),U.Mc(e)}}function S(e,t){if(1&e&&(U.Vb(0,"select",40),U.Jc(1,q,2,2,"option",37),U.Ub()),2&e){const e=t.$implicit;U.Cb(1),U.rc("ngForOf",e)}}function k(e,t){if(1&e&&(U.Vb(0,"div",18),U.Vb(1,"label"),U.Lc(2,"State / Province"),U.Ub(),U.Jc(3,S,2,1,"select",39),U.mc(4,"async"),U.Ub()),2&e){U.lc();const e=U.zc(29),t=U.lc();U.Cb(3),U.rc("ngIf",U.nc(4,2,t.states$))("ngIfElse",e)}}function E(e,t){1&e&&U.Qb(0,"input",41)}function $(e,t){1&e&&(U.Vb(0,"span",35),U.Lc(1,"This field is required."),U.Ub())}function Q(e,t){if(1&e&&(U.Tb(0),U.Jc(1,$,2,0,"span",34),U.Sb()),2&e){const e=U.lc(2);U.Cb(1),U.rc("ngIf",e.userDetailsForm.get("birthDate").errors.required)}}function Y(e,t){1&e&&(U.Vb(0,"span",35),U.Lc(1,"This field is required."),U.Ub())}function j(e,t){if(1&e&&(U.Vb(0,"span",35),U.Lc(1),U.Ub()),2&e){const e=U.lc(3);U.Cb(1),U.Nc("This field can not be less than ",e.userDetailsForm.get("password").errors.minlength.requiredLength," characters.")}}function z(e,t){if(1&e&&(U.Vb(0,"span",35),U.Lc(1),U.Ub()),2&e){const e=U.lc(3);U.Cb(1),U.Nc("This field can be at most ",e.userDetailsForm.get("password").errors.maxlength.requiredLength," characters long.")}}function G(e,t){if(1&e&&(U.Tb(0),U.Jc(1,Y,2,0,"span",34),U.Jc(2,j,2,1,"span",34),U.Jc(3,z,2,1,"span",34),U.Sb()),2&e){const e=U.lc(2);U.Cb(1),U.rc("ngIf",e.userDetailsForm.get("password").errors.required),U.Cb(1),U.rc("ngIf",e.userDetailsForm.get("password").errors.minlength),U.Cb(1),U.rc("ngIf",e.userDetailsForm.get("password").errors.maxlength)}}function K(e,t){1&e&&(U.Vb(0,"span",35),U.Lc(1,"This field is required."),U.Ub())}function B(e,t){if(1&e&&(U.Vb(0,"span",35),U.Lc(1),U.Ub()),2&e){const e=U.lc(3);U.Cb(1),U.Nc("This field can not be less than ",e.userDetailsForm.get("confirm").errors.minlength.requiredLength," characters.")}}function R(e,t){if(1&e&&(U.Vb(0,"span",35),U.Lc(1),U.Ub()),2&e){const e=U.lc(3);U.Cb(1),U.Nc("This field can be at most ",e.userDetailsForm.get("confirm").errors.maxlength.requiredLength," characters long.")}}function W(e,t){1&e&&(U.Vb(0,"span",35),U.Lc(1,"Passwords do not match."),U.Ub())}function X(e,t){if(1&e&&(U.Tb(0),U.Jc(1,K,2,0,"span",34),U.Jc(2,B,2,1,"span",34),U.Jc(3,R,2,1,"span",34),U.Jc(4,W,2,0,"span",34),U.Sb()),2&e){const e=U.lc(2);U.Cb(1),U.rc("ngIf",e.userDetailsForm.get("confirm").errors.required),U.Cb(1),U.rc("ngIf",e.userDetailsForm.get("confirm").errors.minlength),U.Cb(1),U.rc("ngIf",e.userDetailsForm.get("confirm").errors.maxlength),U.Cb(1),U.rc("ngIf",e.userDetailsForm.get("confirm").errors.mustMatch)}}function A(e,t){1&e&&U.Qb(0,"span",42)}function H(e,t){1&e&&U.Lc(0,"Create")}function Z(e,t){if(1&e){const e=U.Wb();U.Vb(0,"div",10),U.Vb(1,"span"),U.Lc(2,"Create User"),U.Ub(),U.Ub(),U.Vb(3,"div",11),U.Vb(4,"div",12),U.Vb(5,"div",13),U.Vb(6,"label"),U.Lc(7,"First Name"),U.Ub(),U.Qb(8,"input",14),U.Jc(9,F,2,1,"ng-container",3),U.Ub(),U.Vb(10,"div",13),U.Vb(11,"label"),U.Lc(12,"Last Name"),U.Ub(),U.Qb(13,"input",15),U.Jc(14,P,2,1,"ng-container",3),U.Ub(),U.Ub(),U.Vb(15,"div",16),U.Vb(16,"label"),U.Lc(17,"Email"),U.Ub(),U.Qb(18,"input",17),U.Jc(19,O,3,2,"ng-container",3),U.Ub(),U.Vb(20,"div",12),U.Vb(21,"div",18),U.Vb(22,"label"),U.Lc(23,"Country"),U.Ub(),U.Jc(24,x,2,1,"select",19),U.mc(25,"async"),U.Jc(26,_,2,1,"ng-container",3),U.Ub(),U.Jc(27,k,5,4,"div",20),U.Jc(28,E,1,0,"ng-template",null,21,U.Kc),U.Ub(),U.Vb(30,"div",12),U.Vb(31,"div",22),U.Vb(32,"label"),U.Lc(33,"Birthday"),U.Ub(),U.Vb(34,"div",23),U.Qb(35,"input",24,25),U.Vb(37,"div",26),U.Vb(38,"button",27),U.hc("click",(function(){return U.Cc(e),U.zc(36).toggle()})),U.Qb(39,"fa-icon",28),U.Ub(),U.Ub(),U.Ub(),U.Jc(40,Q,2,1,"ng-container",3),U.Ub(),U.Ub(),U.Vb(41,"div",12),U.Vb(42,"div",22),U.Vb(43,"label"),U.Lc(44,"Password"),U.Ub(),U.Qb(45,"input",29),U.Jc(46,G,4,3,"ng-container",3),U.Ub(),U.Ub(),U.Vb(47,"div",12),U.Vb(48,"div",22),U.Vb(49,"label"),U.Lc(50,"Confirm Password"),U.Ub(),U.Qb(51,"input",30),U.Jc(52,X,5,4,"ng-container",3),U.Ub(),U.Ub(),U.Vb(53,"button",31),U.hc("click",(function(){return U.Cc(e),U.lc().createUser()})),U.Jc(54,A,1,0,"span",32),U.Jc(55,H,1,0,"ng-template",null,33,U.Kc),U.Ub(),U.Vb(57,"div"),U.Lc(58,' Note: This will only create a normal user. For admin, update the newly created user\'s role to "Admin". '),U.Ub(),U.Ub()}if(2&e){const e=U.zc(29),t=U.zc(56),r=U.lc();U.Cb(3),U.rc("formGroup",r.userDetailsForm),U.Cb(6),U.rc("ngIf",r.userDetailsForm.get("firstName").invalid&&r.userDetailsForm.get("firstName").touched),U.Cb(5),U.rc("ngIf",r.userDetailsForm.get("lastName").invalid&&r.userDetailsForm.get("lastName").touched),U.Cb(5),U.rc("ngIf",r.userDetailsForm.get("email").invalid&&r.userDetailsForm.get("email").touched),U.Cb(5),U.rc("ngIf",U.nc(25,17,r.countries$))("ngIfElse",e),U.Cb(2),U.rc("ngIf",r.userDetailsForm.get("country").invalid&&r.userDetailsForm.get("country").touched),U.Cb(1),U.rc("ngIf","United States"===r.userDetailsForm.get("country").value),U.Cb(8),U.rc("maxDate",r.maxDate)("minDate",r.minDate),U.Cb(4),U.rc("icon",r.calendarIcon),U.Cb(1),U.rc("ngIf",r.userDetailsForm.get("birthDate").invalid&&r.userDetailsForm.get("birthDate").touched),U.Cb(6),U.rc("ngIf",r.userDetailsForm.get("password").invalid&&r.userDetailsForm.get("password").touched),U.Cb(6),U.rc("ngIf",r.userDetailsForm.get("confirm").invalid&&r.userDetailsForm.get("confirm").touched),U.Cb(1),U.rc("disabled",r.userDetailsForm.invalid||r.isCreatingUser),U.Cb(1),U.rc("ngIf",r.isCreatingUser)("ngIfElse",t)}}const ee=[{path:"",component:(()=>{class e{constructor(e,t,r,n){this.api=e,this.fb=t,this.toast=r,this.router=n,this.countdown=5,this.calendarIcon=a.a,this.successIcon=l.b,this.failedIcon=l.f,this.isCreatingUser=!1,this.createError=null,this.isCreatingDone=!1,this.minDate=new o.c(1900,1,1),this.timer$=new g.a(this.countdown)}ngOnInit(){this.countries$=this.api.get(b.f.Countries).pipe(Object(h.a)((e=[])=>e.map(e=>e.name))),this.states$=this.api.get(b.f.States).pipe(Object(h.a)((e=[])=>e.map(e=>e.name)));const e=m();this.maxDate=new o.c(e.year(),e.month()+1,e.day()),this.userDetailsForm=this.fb.group({firstName:new c.d("",c.s.required),lastName:new c.d("",c.s.required),email:new c.d("",[d.a,c.s.required]),country:new c.d("",c.s.required),state:new c.d,birthDate:new c.d("",c.s.required),password:new c.d("",[c.s.required,c.s.minLength(8)]),confirm:new c.d("",[c.s.required,c.s.minLength(8)])},{validators:[e=>{const t=e.controls.confirm;t.errors&&!t.errors.mustMatch||t.setErrors(e.controls.password.value!==t.value?{mustMatch:!0}:null)}]})}createUser(){this.isCreatingUser=!0,this.createError=null;const e=Object.assign({},this.userDetailsForm.value),t={email:e.email,password:e.password,first_name:e.firstName,last_name:e.lastName,country:e.country,state:e.state,birth_date:Object(u.b)(e.birthDate).format("YYYY-MM-DD")};this.api.post(b.e.CreateUser,{body:t}).pipe(Object(C.a)(e=>(this.isCreatingUser=!1,this.createError=e.error||e.statusText||e.message||"Something went wrong on creating the user.",this.toast.error(this.createError),p.a))).subscribe(e=>{this.createdUser=e,Object(f.a)(this.countdown).subscribe(e=>{this.timer$.next(e),e<=0&&(this.timer$.complete(),this.navigateToUserProfile())}),this.isCreatingUser=!1,this.isCreatingDone=!0})}navigateToUserProfile(){this.router.navigate(["/admin/user",this.createdUser.id])}goBack(){this.createError=null}}return e.\u0275fac=function(t){return new(t||e)(U.Pb(D.a),U.Pb(c.c),U.Pb(V.a),U.Pb(s.b))},e.\u0275cmp=U.Jb({type:e,selectors:[["duelit-user-create"]],decls:4,vars:2,consts:[[1,"card"],[4,"ngIf","ngIfElse"],["createUserTemplate",""],[4,"ngIf"],[1,"card-body","result"],[1,"fa-9x","failed",3,"icon"],[1,"failed"],[1,"btn","btn-primary","custom","col",3,"click"],[1,"fa-9x","success",3,"icon"],[1,"success"],[1,"card-header","d-flex"],[1,"card-body",3,"formGroup"],[1,"row"],[1,"form-group","col-6"],["type","text","formControlName","firstName",1,"form-control"],["type","text","formControlName","lastName",1,"form-control"],[1,"form-group"],["type","email","formControlName","email",1,"form-control"],[1,"col-6","form-group"],["class","form-control","formControlName","country","aria-placeholder","Select Country",4,"ngIf","ngIfElse"],["class","col-6 form-group",4,"ngIf"],["loadingSelect",""],[1,"col","form-group"],[1,"input-group"],["placeholder","YYYY-MM-DD","formControlName","birthDate","ngbDatepicker","",1,"form-control",3,"maxDate","minDate"],["d","ngbDatepicker"],[1,"input-group-append"],["type","button",1,"btn","btn-outline-secondary","calendar",3,"click"],[3,"icon"],["type","password","formControlName","password",1,"form-control"],["type","password","formControlName","confirm",1,"form-control"],[1,"btn","btn-primary","custom","col",3,"disabled","click"],["class","loading",4,"ngIf","ngIfElse"],["createButton",""],["class","error",4,"ngIf"],[1,"error"],["formControlName","country","aria-placeholder","Select Country",1,"form-control"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["class","form-control","formControlName","states","aria-placeholder","Select States / Province",4,"ngIf","ngIfElse"],["formControlName","states","aria-placeholder","Select States / Province",1,"form-control"],["readonly","","disabled","","type","text","placeholder","Loading...",1,"form-control-plaintext"],[1,"loading"]],template:function(e,t){if(1&e&&(U.Vb(0,"div",0),U.Jc(1,I,3,2,"ng-container",1),U.Jc(2,Z,59,19,"ng-template",null,2,U.Kc),U.Ub()),2&e){const e=U.zc(3);U.Cb(1),U.rc("ngIf",t.createError||t.isCreatingDone)("ngIfElse",e)}},directives:[n.n,i.a,c.m,c.g,c.b,c.l,c.f,o.l,c.r,n.m,c.o,c.t],pipes:[n.b],styles:["[_nghost-%COMP%]{width:100%;align-content:center;-webkit-box-pack:center;justify-content:center}[_nghost-%COMP%], [_nghost-%COMP%]   .result[_ngcontent-%COMP%]{display:-webkit-box;display:flex}[_nghost-%COMP%]   .result[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;padding:50px}[_nghost-%COMP%]   .result[_ngcontent-%COMP%]   fa-icon.success[_ngcontent-%COMP%], [_nghost-%COMP%]   .result[_ngcontent-%COMP%]   label.success[_ngcontent-%COMP%]{color:#28a745}[_nghost-%COMP%]   .result[_ngcontent-%COMP%]   fa-icon.failed[_ngcontent-%COMP%], [_nghost-%COMP%]   .result[_ngcontent-%COMP%]   label.failed[_ngcontent-%COMP%]{color:#dc3545}[_nghost-%COMP%]   .result[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{display:-webkit-box;display:flex}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]{max-width:512px}[_nghost-%COMP%]   span.loading[_ngcontent-%COMP%]{padding:0;background-size:15px 15px}"]}),e})()}];let te=(()=>{class e{}return e.\u0275mod=U.Nb({type:e}),e.\u0275inj=U.Mb({factory:function(t){return new(t||e)},imports:[[s.e.forChild(ee)],s.e]}),e})();r.d(t,"UserCreateModule",(function(){return re}));let re=(()=>{class e{}return e.\u0275mod=U.Nb({type:e}),e.\u0275inj=U.Mb({factory:function(t){return new(t||e)},imports:[[n.c,te,c.q,i.b,o.f]]}),e})()}}]);