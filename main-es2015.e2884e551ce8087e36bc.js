(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{0:function(t,e,n){t.exports=n("zUnb")},"2Did":function(t,e,n){"use strict";n("UdTj");var o=n("ofXK"),i=n("fXoL");let r=(()=>{class t{}return t.\u0275mod=i.Nb({type:t}),t.\u0275inj=i.Mb({factory:function(e){return new(e||t)},imports:[[o.c]]}),t})();n.d(e,"a",(function(){return r}))},"2FTj":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var o=n("fXoL"),i=n("twzC"),r=n("tyNb");let c=(()=>{class t{constructor(t,e){this.loginService=t,this.router=e}canActivate(t,e){return!!this.loginService.isAuthenticated||this.router.createUrlTree(["login"])}}return t.\u0275fac=function(e){return new(e||t)(o.dc(i.a),o.dc(r.b))},t.\u0275prov=o.Lb({token:t,factory:t.\u0275fac}),t})()},AytR:function(t,e,n){"use strict";var o=n("LzQu");const i={production:!1,application:o.a.Dev,api:{host:"http://localhost:3000",security:{custom_uid:"f6d28b7a-407f-4c11-aca4-56e6a2b72900",device_type:"site",device_token:"none"}},paypal:{returnUrl:"http://127.0.0.1:4200/paypal/user-data",apiId:"Ac-2xq8OnqwFgZ4wJp7BUOADkOTCwHItSeJ4iTfZep7O8PHfiDFj4eW587SgxCpoGbsGi7dA0QXsuYHb",environment:"sandbox"},keenio:{projectId:"576d9e9c07271955aad3c825",readKey:"4801d9d377f9ea0aa63b7a72639c2a08aee27a5bf8a068bcc2c8df3b5538fcfac6b27f05709930eab29d2985336214f436548b58c538cfaa493fe2def65a56dc71771cce0ceaa5ab8f2a171337a8b9a4e702325afcec519b2bfbe6330c7f82bc"}};n.d(e,"a",(function(){return r}));const r=Object.assign(Object.assign({},i),{production:!0,application:o.a.Admin,api:Object.assign(Object.assign({},i.api),{host:"https://api-dot-duelit-1288.appspot.com"})})},D5Oy:function(t,e,n){"use strict";n.r(e);var o=n("ofXK"),i=n("3Pt+"),r=n("2Did"),c=n("tyNb"),s=n("SMdK"),a=n("fXoL"),u=n("twzC"),l=n("Olgc"),d=n("UdTj");function f(t,e){1&t&&(a.Vb(0,"span",10),a.Lc(1,"This field is required."),a.Ub())}function b(t,e){1&t&&(a.Vb(0,"span",10),a.Lc(1,"This field must be a valid email address."),a.Ub())}function g(t,e){if(1&t&&(a.Tb(0),a.Jc(1,f,2,0,"span",9),a.Jc(2,b,2,0,"span",9),a.Sb()),2&t){const t=a.lc();a.Cb(1),a.rc("ngIf",t.loginForm.get("email").errors.required),a.Cb(1),a.rc("ngIf",t.loginForm.get("email").errors.email)}}function p(t,e){1&t&&(a.Vb(0,"span",10),a.Lc(1,"This field is required."),a.Ub())}function m(t,e){if(1&t&&(a.Vb(0,"span",10),a.Lc(1),a.Ub()),2&t){const t=a.lc(2);a.Cb(1),a.Nc("This field can not be less than ",t.loginForm.get("password").errors.minlength.requiredLength," characters.")}}function h(t,e){if(1&t&&(a.Vb(0,"span",10),a.Lc(1),a.Ub()),2&t){const t=a.lc(2);a.Cb(1),a.Nc("This field can be at most ",t.loginForm.get("password").errors.maxlength.requiredLength," characters long.")}}function C(t,e){if(1&t&&(a.Tb(0),a.Jc(1,p,2,0,"span",9),a.Jc(2,m,2,1,"span",9),a.Jc(3,h,2,1,"span",9),a.Sb()),2&t){const t=a.lc();a.Cb(1),a.rc("ngIf",t.loginForm.get("password").errors.required),a.Cb(1),a.rc("ngIf",t.loginForm.get("password").errors.minlength),a.Cb(1),a.rc("ngIf",t.loginForm.get("password").errors.maxlength)}}function v(t,e){1&t&&a.Qb(0,"span",11)}function k(t,e){1&t&&a.Lc(0,"Login")}const w=function(){return["/forgot-password"]},O=[{path:"",component:(()=>{class t{constructor(t,e,n,o){this.fb=t,this.loginService=e,this.toast=n,this.router=o,this.isLoginInProgress=!1}ngOnInit(){this.loginForm=this.fb.group({email:new i.d("",[s.a,i.s.required]),password:new i.d("",[i.s.required,i.s.maxLength(24),i.s.minLength(8)])})}doLogin(){const{email:t,password:e}=this.loginForm.value;this.isLoginInProgress||(this.isLoginInProgress=!0,this.loginService.login(t,e).subscribe(t=>{this.isLoginInProgress=!1,t?this.toast.success("Successfully logged in."):this.toast.error("Provided credentials are not correct.")}))}}return t.\u0275fac=function(e){return new(e||t)(a.Pb(i.c),a.Pb(u.a),a.Pb(l.a),a.Pb(c.b))},t.\u0275cmp=a.Jb({type:t,selectors:[["duelit-login"]],decls:12,vars:8,consts:[["head","Login"],[1,"form-group",3,"formGroup"],["type","email","placeholder","Email","autocomplete","off","formControlName","email",1,"form-control","custom"],[4,"ngIf"],["type","password","placeholder","Password","autocomplete","off","formControlName","password",1,"form-control","custom"],[1,"btn","custom","primary",3,"disabled","click"],["class","loading",4,"ngIf","ngIfElse"],["login",""],[3,"routerLink"],["class","error",4,"ngIf"],[1,"error"],[1,"loading"]],template:function(t,e){if(1&t&&(a.Vb(0,"duelit-panel",0),a.Vb(1,"div",1),a.Qb(2,"input",2),a.Jc(3,g,3,2,"ng-container",3),a.Qb(4,"input",4),a.Jc(5,C,4,3,"ng-container",3),a.Vb(6,"button",5),a.hc("click",(function(){return e.doLogin()})),a.Jc(7,v,1,0,"span",6),a.Jc(8,k,1,0,"ng-template",null,7,a.Kc),a.Ub(),a.Vb(10,"span",8),a.Lc(11,"Forgot your Password?"),a.Ub(),a.Ub(),a.Ub()),2&t){const t=a.zc(9);a.Cb(1),a.rc("formGroup",e.loginForm),a.Cb(2),a.rc("ngIf",e.loginForm.get("email").invalid&&e.loginForm.get("email").touched),a.Cb(2),a.rc("ngIf",e.loginForm.get("password").invalid&&e.loginForm.get("password").touched),a.Cb(1),a.rc("disabled",e.loginForm.invalid||e.isLoginInProgress),a.Cb(1),a.rc("ngIf",e.isLoginInProgress)("ngIfElse",t),a.Cb(3),a.rc("routerLink",a.uc(7,w))}},directives:[d.a,i.m,i.g,i.b,i.l,i.f,o.m,c.c],styles:[".form-group[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;display:-webkit-box;display:flex;justify-items:center;text-align:center}span[_ngcontent-%COMP%]{color:#4093f7;cursor:pointer;padding-top:15px}span.error[_ngcontent-%COMP%]{color:red;cursor:unset;padding-top:unset;align-self:flex-start;padding-bottom:10px}span.loading[_ngcontent-%COMP%]{padding:0;background-size:15px 15px}[_nghost-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;width:100%;height:100%}[_nghost-%COMP%]   duelit-panel[_ngcontent-%COMP%]{max-width:720px;-webkit-box-flex:1;flex-grow:1}button[_ngcontent-%COMP%]{font-size:15px}"]}),t})()}];let x=(()=>{class t{}return t.\u0275mod=a.Nb({type:t}),t.\u0275inj=a.Mb({factory:function(e){return new(e||t)},imports:[[c.e.forChild(O)],c.e]}),t})();n.d(e,"LoginModule",(function(){return y}));let y=(()=>{class t{}return t.\u0275mod=a.Nb({type:t}),t.\u0275inj=a.Mb({factory:function(e){return new(e||t)},imports:[[o.c,x,r.a,i.q]]}),t})()},LzQu:function(t,e,n){"use strict";var o=function(t){return t.Redeem="redeem",t.Admin="admin",t.Dev="local",t}({});n.d(e,"a",(function(){return o}))},Olgc:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n("fXoL");let i=(()=>{class t{constructor(){this.toasts=[]}show(t){this.toasts.push(t)}remove(t){this.toasts=this.toasts.filter(e=>e!==t)}success(t){this.toasts.push({class:"success",textOrTpl:t})}error(t){this.toasts.push({class:"danger",textOrTpl:t})}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},SMdK:function(t,e,n){"use strict";const o=/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;function i(t){return 0===t.value.length?null:o.test(t.value)?null:{email:!0}}n.d(e,"a",(function(){return i}))},Tk1w:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var o=n("fXoL"),i=n("twzC"),r=n("Olgc"),c=n("tyNb");let s=(()=>{class t{constructor(t,e,n){this.loginService=t,this.toast=e,this.router=n}canActivate(t,e){return!("admin"!==this.loginService.user.role&&(this.toast.error("You have been logged out. You must be an admin to access this page."),this.loginService.logout(),1))}}return t.\u0275fac=function(e){return new(e||t)(o.dc(i.a),o.dc(r.a),o.dc(c.b))},t.\u0275prov=o.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},UdTj:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var o=n("fXoL"),i=n("ofXK");function r(t,e){if(1&t&&(o.Tb(0),o.Vb(1,"div",2),o.Lc(2),o.Ub(),o.Qb(3,"div",3),o.Sb()),2&t){const t=o.lc();o.Cb(2),o.Nc(" ",t.head," ")}}const c=["*"];let s=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Jb({type:t,selectors:[["duelit-panel"]],inputs:{head:"head"},ngContentSelectors:c,decls:3,vars:1,consts:[[4,"ngIf"],[1,"panel-body"],[1,"panel-heading"],[1,"divider"]],template:function(t,e){1&t&&(o.qc(),o.Jc(0,r,4,1,"ng-container",0),o.Vb(1,"div",1),o.pc(2),o.Ub()),2&t&&o.rc("ngIf",e.head)},directives:[i.m],styles:["[_nghost-%COMP%]{border-radius:6px;background-color:#fff;box-shadow:1px 2px 3px 0 rgba(0,0,0,.1);display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}[_nghost-%COMP%]   .panel-body[_ngcontent-%COMP%], [_nghost-%COMP%]   .panel-heading[_ngcontent-%COMP%]{padding:25px}[_nghost-%COMP%]   .panel-heading[_ngcontent-%COMP%]{padding-bottom:15px;text-align:center;font-weight:700}.divider[_ngcontent-%COMP%]{border:1px solid #ebf0f5}"]}),t})()},Znnd:function(t,e,n){"use strict";n.d(e,"e",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return r})),n.d(e,"f",(function(){return c})),n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return a}));var o=function(t){return t.ValidateToken="/api/v1/users/validate-token/:token:",t.MyProfile="/api/v1/users/me",t.Login="/api/v1/users/login",t.Logout="/api/v1/users/logout",t.GetPaypalUserInfo="/api/v1/users/login/paypal",t.ResetPasswordRequest="/api/v1/users/reset-password-request",t.ResetPassword="/api/v1/users/reset-password",t.UsersCountByStatus="/api/v1/admin/users-by-status/:userStatus:/count",t.UsersByStatus="/api/v1/admin/users-by-status/:userStatus:",t.UsersByTransaction="/api/v1/admin/users-by-transaction/:transactionType:",t.GetUserById="/api/v1/users/:userId:",t.UpdateUser="/api/v1/users/update-user",t.UserStats="/api/v1/users/stats/:userId:",t.CreateUser="/api/v1/users/create-by-admin",t.UnregisterDevice="/api/v1/users/unregister-apple-device",t}({}),i=function(t){return t.Credits="/api/v1/credits",t.CreditsByUser="/api/v1/credits/:userId:",t.CreditsHistoryByUser="/api/v1/credits/history/:userId:",t.CashoutRequest="/api/v1/transactions/redeem-coins",t.RedeemedCoins="/api/v1/transactions/redeemedCoinsData",t.TotalCredits="/api/v1/credits/total",t.PurchasedCoins="/api/v1/credits/purchasedCoinsData",t}({}),r=function(t){return t.GetOccupiedOpenTournaments="/api/v1/tournament/open/occupied",t.GetOccupiedPublicTournaments="/api/v1/tournament/public/occupied",t.CreateTournament="/api/v1/tournament/create",t}({}),c=function(t){return t.Countries="/api/v1/countries",t.States="/api/v1/states",t.Games="/api/v1/games",t}({}),s=function(t){return t.CountriesPaginated="/api/v1/countries/:page:/:limit:/:order:",t.UpdateCountry="/api/v1/country/update",t}({}),a=function(t){return t.MaintenanceStatus="/api/v1/maintenance",t}({})},pKmL:function(t,e,n){"use strict";n.r(e);var o=n("ofXK"),i=n("tyNb"),r=n("6NWb"),c=n("1kSV"),s=n("fXoL"),a=n("twzC");const u=[{path:"login",loadChildren:()=>Promise.resolve().then(n.bind(null,"D5Oy")).then(t=>t.LoginModule),canActivate:[(()=>{class t{constructor(t){this.login=t}canActivate(t,e){return!this.login.isAuthenticated||this.login.urlTreeForLoggedUser()}}return t.\u0275fac=function(e){return new(e||t)(s.dc(a.a))},t.\u0275prov=s.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()]},{path:"reset-password/:token",loadChildren:()=>Promise.all([n.e(0),n.e(14)]).then(n.bind(null,"kXEd")).then(t=>t.ResetPasswordModule)},{path:"forgot-password",loadChildren:()=>n.e(13).then(n.bind(null,"Pdii")).then(t=>t.ForgotPasswordModule)},{path:"**",redirectTo:"/login"}];let l=(()=>{class t{}return t.\u0275mod=s.Nb({type:t}),t.\u0275inj=s.Mb({factory:function(e){return new(e||t)},imports:[[i.e.forChild(u)],i.e]}),t})();var d=n("D5Oy");n.d(e,"CoreModule",(function(){return f}));let f=(()=>{class t{static forRoot(){return{ngModule:t,providers:[a.a]}}}return t.\u0275mod=s.Nb({type:t}),t.\u0275inj=s.Mb({factory:function(e){return new(e||t)},imports:[[o.c,l,d.LoginModule,c.z,i.e,r.b]]}),t})()},qc5V:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var o=n("AytR"),i=n("fXoL"),r=n("tk/3");const c={addSecurity:!0};let s=(()=>{class t{constructor(t){this.http=t,this.baseuri=o.a.api.host}get(t,e={query:{}}){return this.http.get(this.buildRequestUrl(t,e.query))}delete(t,e={query:{}}){return this.http.delete(this.buildRequestUrl(t,e.query))}post(t,e={query:{}}){const n=Object.assign(Object.assign({},c),e.opts),i=Object.assign({},e.body);return n.addSecurity&&(i.custom_uid=o.a.api.security.custom_uid,i.device_type=o.a.api.security.device_type,i.device_token=o.a.api.security.device_token),this.http.post(this.buildRequestUrl(t,e.query),i)}put(t,e={query:{}}){const n=Object.assign(Object.assign({},c),e.opts),i=Object.assign({},e.body);return n.addSecurity&&(i.custom_uid=o.a.api.security.custom_uid,i.device_type=o.a.api.security.device_type,i.device_token=o.a.api.security.device_token),this.http.put(this.buildRequestUrl(t,e.query),i)}buildRequestUrl(t,e={}){const n=Object.keys(e).map(t=>`${t}=${e[t]}`);return`${this.baseuri}${t}${n.length>0?"?":""}${n.join("&")}`}buildPath(t,e=[]){let n=t;return Array.isArray(e)?e.forEach(t=>n=n.replace(/:.*?:/,`${t}`)):Object.entries(e).forEach(([t,e])=>{n=n.replace(`:${t}:`,`${e}`)}),n}}return t.\u0275fac=function(e){return new(e||t)(i.dc(r.b))},t.\u0275prov=i.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},twzC:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var o=n("LRne"),i=n("lJxs"),r=n("JIr8"),c=n("LzQu"),s=n("Znnd"),a=n("AytR"),u=n("fXoL"),l=n("tyNb"),d=n("qc5V");let f=(()=>{class t{constructor(t,e,n){this.router=t,this.api=e,this.zone=n,this.isAuthenticated=!1,this.DUELIT_TOKEN="duelitToken"}get token(){return localStorage.getItem(this.DUELIT_TOKEN)}set token(t){t?localStorage.setItem(this.DUELIT_TOKEN,t):localStorage.removeItem(this.DUELIT_TOKEN)}Init(){return this.token?this.api.get(s.e.MyProfile).toPromise().then(t=>(this.isAuthenticated=!!t.token,this.user=t,this.token=t.token,!!t.token)).catch(()=>(this.isAuthenticated=!1,!1)):(this.isAuthenticated=!1,Promise.resolve(!1))}login(t,e){return this.api.post(s.e.Login,{body:{email:t,password:e,country:"United States"}}).pipe(Object(i.a)(t=>t?(this.user=t,this.token=t.token,this.isAuthenticated=!0,this.router.navigate(this.getUrlForLoggedUser()),t):(this.isAuthenticated=!1,!1)),Object(r.a)(t=>Object(o.a)(!1)))}getUrlForLoggedUser(){return a.a.application===c.a.Redeem?["/redeem"]:["/admin"]}urlTreeForLoggedUser(){return this.router.createUrlTree(this.getUrlForLoggedUser())}navigateToHomePage(){this.router.navigate(this.getUrlForLoggedUser())}setToken(t){localStorage.setItem(this.DUELIT_TOKEN,t)}logout(){this.api.post(s.e.Logout,{body:{device_token:"none"},opts:{addSecurity:!1}}).subscribe(()=>{localStorage.removeItem(this.DUELIT_TOKEN),this.router.navigate(["/login"]),this.isAuthenticated=!1,this.user=null,this.token=null})}}return t.\u0275fac=function(e){return new(e||t)(u.dc(l.b),u.dc(d.a),u.dc(u.A))},t.\u0275prov=u.Lb({token:t,factory:t.\u0275fac}),t})()},zUnb:function(t,e,n){"use strict";n.r(e);var o=n("fXoL"),i=n("AytR"),r=n("tk/3"),c=n("jhN1"),s=n("R1ws"),a=n("tyNb"),u=n("pKmL"),l=n("twzC"),d=n("ReVU"),f=n("Tk1w"),b=n("2FTj");const g=[{path:"redeem",loadChildren:()=>Promise.all([n.e(0),n.e(24)]).then(n.bind(null,"N8ez")).then(t=>t.RedeemModule),canActivate:[b.a]},{path:"paypal/user-data",loadChildren:()=>Promise.all([n.e(0),n.e(23)]).then(n.bind(null,"86gd")).then(t=>t.PaypalModule),canActivate:[b.a]},{path:"admin",loadChildren:()=>n.e(11).then(n.bind(null,"xDfr")).then(t=>t.AdminModule),canActivate:[f.a]},{path:"",loadChildren:()=>Promise.resolve().then(n.bind(null,"pKmL")).then(t=>t.CoreModule)},{path:"**",pathMatch:"full",redirectTo:"/login"}];let p=(()=>{class t{}return t.\u0275mod=o.Nb({type:t}),t.\u0275inj=o.Mb({factory:function(e){return new(e||t)},imports:[[a.e.forRoot(g)],a.e]}),t})();var m=n("LzQu"),h=n("wHSu"),C=n("ofXK"),v=n("6NWb"),k=n("STbY");function w(t,e){if(1&t){const t=o.Wb();o.Tb(0),o.Vb(1,"button",10),o.hc("click",(function(){o.Cc(t);const e=o.lc(2);return e.isMenuOpened=!e.isMenuOpened})),o.Qb(2,"fa-icon",11),o.Ub(),o.Sb()}if(2&t){const t=o.lc(2);o.Cb(2),o.rc("icon",t.menu)}}function O(t,e){if(1&t&&(o.Tb(0),o.Jc(1,w,3,1,"ng-container",9),o.Sb()),2&t){const t=o.lc();o.Cb(1),o.rc("ngIf",t.authenticated)}}function x(t,e){if(1&t&&(o.Vb(0,"button",20),o.Lc(1),o.Ub()),2&t){const t=e.$implicit;o.rc("routerLink",t.path),o.Cb(1),o.Mc(t.name)}}const y=function(){return["/admin/profile"]};function M(t,e){1&t&&(o.Vb(0,"button",21),o.Lc(1,"Profile"),o.Ub()),2&t&&o.rc("routerLink",o.uc(1,y))}const P=function(){return["/admin/users/create"]};function _(t,e){1&t&&(o.Vb(0,"button",21),o.Lc(1,"Create User"),o.Ub()),2&t&&o.rc("routerLink",o.uc(1,P))}const L=function(){return["/admin/app-control"]};function U(t,e){1&t&&(o.Vb(0,"button",21),o.Lc(1,"Application Control"),o.Ub()),2&t&&o.rc("routerLink",o.uc(1,L))}function I(t,e){if(1&t){const t=o.Wb();o.Tb(0),o.Jc(1,x,2,2,"button",13),o.Vb(2,"button",14),o.Lc(3),o.Qb(4,"span",15),o.Ub(),o.Vb(5,"mat-menu",16,17),o.Vb(7,"button",18),o.hc("click",(function(){return o.Cc(t),o.lc(2).doLogout()})),o.Lc(8,"Logout"),o.Ub(),o.Jc(9,M,2,2,"button",19),o.Jc(10,_,2,2,"button",19),o.Jc(11,U,2,2,"button",19),o.Ub(),o.Sb()}if(2&t){const t=o.zc(6),e=o.lc(2);o.Cb(1),o.rc("ngForOf",e.navList),o.Cb(1),o.rc("matMenuTriggerFor",t),o.Cb(1),o.Nc(" Welcome ",e.firstName," "),o.Cb(6),o.rc("ngIf",e.isEnvironmentAdmin()),o.Cb(1),o.rc("ngIf",e.isEnvironmentAdmin()),o.Cb(1),o.rc("ngIf",e.isEnvironmentAdmin())}}const T=function(){return["/login"]};function S(t,e){1&t&&(o.Vb(0,"button",22),o.Lc(1,"Login"),o.Ub()),2&t&&o.rc("routerLink",o.uc(1,T))}function V(t,e){if(1&t&&(o.Jc(0,I,12,6,"ng-container",6),o.Jc(1,S,2,2,"ng-template",null,12,o.Kc)),2&t){const t=o.zc(2),e=o.lc();o.rc("ngIf",e.authenticated)("ngIfElse",t)}}function A(t,e){if(1&t){const t=o.Wb();o.Vb(0,"div",30),o.hc("click",(function(){return o.Cc(t),o.lc(3).isMenuOpened=!1})),o.Lc(1),o.Ub()}if(2&t){const t=e.$implicit,n=o.lc(3);o.Hb("opened",!n.isMenuOpened),o.rc("routerLink",t.path),o.Cb(1),o.Nc(" ",t.name," ")}}function z(t,e){if(1&t){const t=o.Wb();o.Vb(0,"div",31),o.hc("click",(function(){return o.Cc(t),o.lc(3).isMenuOpened=!1})),o.Lc(1," Profile "),o.Ub()}if(2&t){const t=o.lc(3);o.Hb("opened",!t.isMenuOpened),o.rc("routerLink",o.uc(3,y))}}function E(t,e){if(1&t){const t=o.Wb();o.Vb(0,"div",31),o.hc("click",(function(){return o.Cc(t),o.lc(3).isMenuOpened=!1})),o.Lc(1," Create User "),o.Ub()}if(2&t){const t=o.lc(3);o.Hb("opened",!t.isMenuOpened),o.rc("routerLink",o.uc(3,P))}}function N(t,e){if(1&t){const t=o.Wb();o.Vb(0,"div",31),o.hc("click",(function(){return o.Cc(t),o.lc(3).isMenuOpened=!1})),o.Lc(1," Application Control "),o.Ub()}if(2&t){const t=o.lc(3);o.Hb("opened",!t.isMenuOpened),o.rc("routerLink",o.uc(3,L))}}function J(t,e){if(1&t){const t=o.Wb();o.Tb(0),o.Jc(1,A,2,4,"div",26),o.Vb(2,"div",27),o.hc("click",(function(){o.Cc(t);const e=o.lc(2);return e.doLogout(),e.isMenuOpened=!1})),o.Lc(3," Logout "),o.Ub(),o.Jc(4,z,2,4,"div",28),o.Jc(5,E,2,4,"div",28),o.Jc(6,N,2,4,"div",28),o.Vb(7,"div",29),o.hc("click",(function(){return o.Cc(t),o.lc(2).isMenuOpened=!1})),o.Ub(),o.Sb()}if(2&t){const t=o.lc(2);o.Cb(1),o.rc("ngForOf",t.navList),o.Cb(1),o.Hb("opened",!t.isMenuOpened),o.Cb(2),o.rc("ngIf",t.isEnvironmentAdmin()),o.Cb(1),o.rc("ngIf",t.isEnvironmentAdmin()),o.Cb(1),o.rc("ngIf",t.isEnvironmentAdmin())}}function j(t,e){if(1&t){const t=o.Wb();o.Vb(0,"div",31),o.hc("click",(function(){return o.Cc(t),o.lc(2).isMenuOpened=!1})),o.Lc(1," Login "),o.Ub()}if(2&t){const t=o.lc(2);o.Hb("opened",!t.isMenuOpened),o.rc("routerLink",o.uc(3,T))}}function F(t,e){if(1&t){const t=o.Wb();o.Vb(0,"div",23,24),o.hc("blur",(function(){return o.Cc(t),o.lc().isMenuOpened=!1})),o.Jc(2,J,8,6,"ng-container",6),o.Jc(3,j,2,4,"ng-template",null,25,o.Kc),o.Ub()}if(2&t){const t=o.zc(4),e=o.lc();o.Cb(2),o.rc("ngIf",e.authenticated)("ngIfElse",t)}}let R=(()=>{class t{constructor(){this.authenticated=!1,this.logout=new o.o,this.logoClicked=new o.o,this.menu=h.a,this.WIDE_SCREEN_LIMIT=768,this._navList=[{name:"Redeem",path:["/redeem"],env:m.a.Redeem},{name:"Dashboard",path:["/admin/dashboard"],env:m.a.Admin},{name:"Users",path:["/admin/users"],env:m.a.Admin},{name:"Tournaments",path:["/admin/tournaments"],env:m.a.Admin},{name:"Countries",path:["/admin/countries"],env:m.a.Admin}],this.isMenuOpened=!1}get navList(){return i.a.application===m.a.Dev?this._navList:this._navList.filter(t=>t.env===i.a.application)}get innerWidth(){return this._innerWidth}set innerWidth(t){t>=this.WIDE_SCREEN_LIMIT&&(this.isMenuOpened=!1),this._innerWidth=t}onResize(t){this.innerWidth=window.innerWidth}ngOnInit(){this.innerWidth=window.innerWidth}doLogout(){this.logout.emit()}isEnvironmentAdmin(){return i.a.application===m.a.Admin||i.a.application===m.a.Dev}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Jb({type:t,selectors:[["duelit-header"]],hostVars:2,hostBindings:function(t,e){1&t&&o.hc("resize",(function(t){return e.onResize(t)}),!1,o.Bc),2&t&&o.Hb("opened-menu",e.isMenuOpened)},inputs:{authenticated:"authenticated",firstName:"firstName"},outputs:{logout:"logout",logoClicked:"logoClicked"},decls:11,vars:5,consts:[[1,"container"],[1,"center-container","flex-align-center"],[1,"title-logo-container",3,"click"],["src","assets/img/dingding-logo.png",1,"logo"],[1,"title"],[1,"flex-align-center"],[4,"ngIf","ngIfElse"],["wideScreen",""],["class","menu-container","tabindex","-1","autofocus","",3,"blur",4,"ngIf"],[4,"ngIf"],[1,"welcome",3,"click"],[1,"fa-lg",3,"icon"],["login",""],["class","welcome","routerLinkActive","active-route",3,"routerLink",4,"ngFor","ngForOf"],[1,"welcome",3,"matMenuTriggerFor"],[1,"caret"],["xPosition","before"],["menu","matMenu"],["mat-menu-item","",3,"click"],["mat-menu-item","",3,"routerLink",4,"ngIf"],["routerLinkActive","active-route",1,"welcome",3,"routerLink"],["mat-menu-item","",3,"routerLink"],[1,"welcome",3,"routerLink"],["tabindex","-1","autofocus","",1,"menu-container",3,"blur"],["menuContainer",""],["mobileLogin",""],["class","menu-item","routerLinkActive","active-route",3,"opened","routerLink","click",4,"ngFor","ngForOf"],[1,"menu-item","logout",3,"click"],["class","menu-item logout",3,"opened","routerLink","click",4,"ngIf"],[1,"menu-hidden",3,"click"],["routerLinkActive","active-route",1,"menu-item",3,"routerLink","click"],[1,"menu-item","logout",3,"routerLink","click"]],template:function(t,e){if(1&t&&(o.Vb(0,"header",0),o.Vb(1,"div",1),o.Vb(2,"div",2),o.hc("click",(function(){return e.logoClicked.emit()})),o.Qb(3,"img",3),o.Vb(4,"span",4),o.Lc(5,"Duelit"),o.Ub(),o.Ub(),o.Vb(6,"div",5),o.Jc(7,O,2,1,"ng-container",6),o.Jc(8,V,3,2,"ng-template",null,7,o.Kc),o.Ub(),o.Ub(),o.Ub(),o.Jc(10,F,5,2,"div",8)),2&t){const t=o.zc(9);o.Hb("opened",e.isMenuOpened),o.Cb(7),o.rc("ngIf",e.innerWidth<e.WIDE_SCREEN_LIMIT)("ngIfElse",t),o.Cb(3),o.rc("ngIf",e.innerWidth<e.WIDE_SCREEN_LIMIT&&e.isMenuOpened)}},directives:[C.m,v.a,C.l,k.c,k.d,k.a,a.d,a.c],styles:[".opened-menu[_nghost-%COMP%]{min-height:100%;position:fixed!important}header[_ngcontent-%COMP%]{background:#358ed7;max-height:80px;min-height:75px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;max-width:unset}.logo[_ngcontent-%COMP%]{width:50px;height:50px}.title[_ngcontent-%COMP%]{font-size:30px;color:#fff;padding-left:10px}.center-container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-flex:1;flex-grow:1;-webkit-box-pack:justify;justify-content:space-between}.welcome[_ngcontent-%COMP%], li[_ngcontent-%COMP%]{-webkit-transition:all .25s ease;transition:all .25s ease;font-family:Nexa;font-size:15px;color:#fff;list-style:none;padding:15px;cursor:pointer}.welcome.active-route[_ngcontent-%COMP%], .welcome[_ngcontent-%COMP%]:active, .welcome[_ngcontent-%COMP%]:focus, li.active-route[_ngcontent-%COMP%], li[_ngcontent-%COMP%]:active, li[_ngcontent-%COMP%]:focus{background-color:#4e5866;color:#fff}.welcome.active-route[_ngcontent-%COMP%], li.active-route[_ngcontent-%COMP%]{cursor:default}.welcome[_ngcontent-%COMP%]:hover, li[_ngcontent-%COMP%]:hover{background-color:#fff;color:#000}.welcome[_ngcontent-%COMP%]{border:0;background-color:#358ed7;height:45px}.title-logo-container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}button[_ngcontent-%COMP%]{font-family:Nexa}@-webkit-keyframes slide-down{0%{opacity:0;-webkit-transform:translateY(-80%);transform:translateY(-80%);z-index:-1}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes slide-down{0%{opacity:0;-webkit-transform:translateY(-80%);transform:translateY(-80%);z-index:-1}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes slide-up{0%{-webkit-transform:scaleY(1);transform:scaleY(1)}to{-webkit-transform:scaleY(0);transform:scaleY(0)}}@keyframes slide-up{0%{-webkit-transform:scaleY(1);transform:scaleY(1)}to{-webkit-transform:scaleY(0);transform:scaleY(0)}}.menu-container[_ngcontent-%COMP%]{display:contents;-webkit-box-flex:1;flex-grow:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;position:relative}.menu-container[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]{-webkit-transform-origin:top center;transform-origin:top center;-webkit-animation:slide-down .125s ease-in forwards;animation:slide-down .125s ease-in forwards;display:-webkit-box;display:flex;-webkit-box-flex:1;flex-grow:1;padding:10px;border-top:1px solid #fff;background-color:#358ed7;color:#fff;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;cursor:pointer}.menu-container[_ngcontent-%COMP%]   .menu-item.opened[_ngcontent-%COMP%]{-webkit-animation:slide-up .125s ease-out forwards;animation:slide-up .125s ease-out forwards}.menu-container[_ngcontent-%COMP%]   .menu-item.active-route[_ngcontent-%COMP%], .menu-container[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover{background-color:#fff;color:#000}.menu-container[_ngcontent-%COMP%]   .menu-item.logout[_ngcontent-%COMP%]{border-bottom:1px solid #fff}.menu-container[_ngcontent-%COMP%]   .menu-hidden[_ngcontent-%COMP%]{-webkit-transform-origin:top center;transform-origin:top center;-webkit-animation:slide-down .125s ease-in forwards;animation:slide-down .125s ease-in forwards;position:absolute;bottom:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.25);z-index:-1}.menu-container[_ngcontent-%COMP%]   .menu-hidden.opened[_ngcontent-%COMP%]{-webkit-animation:slide-up .125s ease-out forwards;animation:slide-up .125s ease-out forwards}"]}),t})();var q=n("8tEE");let D=(()=>{class t{constructor(){this.icons={facebook:q.a,twitter:q.c,instagram:q.b,email:h.d}}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Jb({type:t,selectors:[["duelit-footer"]],decls:22,vars:4,consts:[[1,"duelit-links"],["href","https://duelit.com/terms-and-conditions/"],["href","https://duelit.com/privacy-policy/"],["href","https://duelit.com/faq/"],[1,"social-medias"],["href","https://bit.ly/2wPRRat","target","_blank"],[1,"fa-lg",3,"icon"],["href","https://bit.ly/2iDzlvr","target","_blank"],["href","https://bit.ly/2vHjLjJ","target","_blank"],["href","mailto:contact@duelit.com?Subject=Website%20Feedback","rel","nofollow"],[1,"copyright"]],template:function(t,e){1&t&&(o.Vb(0,"footer"),o.Vb(1,"div",0),o.Vb(2,"span"),o.Vb(3,"a",1),o.Lc(4,"TERMS & CONDITIONS"),o.Ub(),o.Ub(),o.Vb(5,"span"),o.Vb(6,"a",2),o.Lc(7,"PRIVACY POLICY"),o.Ub(),o.Ub(),o.Vb(8,"span"),o.Vb(9,"a",3),o.Lc(10,"FAQ"),o.Ub(),o.Ub(),o.Ub(),o.Vb(11,"div",4),o.Vb(12,"a",5),o.Qb(13,"fa-icon",6),o.Ub(),o.Vb(14,"a",7),o.Qb(15,"fa-icon",6),o.Ub(),o.Vb(16,"a",8),o.Qb(17,"fa-icon",6),o.Ub(),o.Vb(18,"a",9),o.Qb(19,"fa-icon",6),o.Ub(),o.Ub(),o.Vb(20,"div",10),o.Lc(21," \xa9 2020 Play & Earn Inc. All rights reserved. "),o.Ub(),o.Ub()),2&t&&(o.Cb(13),o.rc("icon",e.icons.facebook),o.Cb(2),o.rc("icon",e.icons.twitter),o.Cb(2),o.rc("icon",e.icons.instagram),o.Cb(2),o.rc("icon",e.icons.email))},directives:[v.a],styles:["[_nghost-%COMP%]{background-color:#fff;display:-webkit-box;display:flex;height:90px}@media (max-width:1020px){[_nghost-%COMP%]{min-height:140px}}[_nghost-%COMP%]   footer[_ngcontent-%COMP%], [_nghost-%COMP%]   footer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-flex:1;flex-grow:1;-webkit-box-align:center;align-items:center}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]{flex-wrap:wrap;-webkit-box-pack:space-evenly;justify-content:space-evenly;padding:15px}@media (max-width:1020px){[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{min-width:100%}}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   .duelit-links[_ngcontent-%COMP%]{color:#4093f7}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   .duelit-links[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:33%;text-align:center;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;align-content:center}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   .duelit-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin:10px;font-size:10pt}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   .social-medias[_ngcontent-%COMP%]{color:#fff;-webkit-box-pack:center;justify-content:center}@media (max-width:1020px){[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   .social-medias[_ngcontent-%COMP%]{-webkit-box-ordinal-group:0;order:-1}}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   .social-medias[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;width:40px;height:40px;background-color:#4093f7;border-radius:20px;border:0 solid #4093f7;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   .social-medias[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]     fill{color:#fff}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]{-webkit-box-pack:center;justify-content:center;font-size:10pt;text-align:center}a[_ngcontent-%COMP%]{text-decoration:none;margin:5px}a[_ngcontent-%COMP%]:visited{color:unset}"]}),t})();function W(t,e){1&t&&o.Qb(0,"duelit-footer")}const K=["*"];let Q=(()=>{class t{constructor(t){this.loginService=t}ngOnInit(){}get isAuthenticated(){return this.loginService.isAuthenticated}doLogout(){this.loginService.logout()}onLogoClick(){this.loginService.navigateToHomePage()}isRedeem(){return i.a.application===m.a.Redeem}}return t.\u0275fac=function(e){return new(e||t)(o.Pb(l.a))},t.\u0275cmp=o.Jb({type:t,selectors:[["duelit-core-container"]],ngContentSelectors:K,decls:5,vars:3,consts:[[3,"authenticated","firstName","logout","logoClicked"],[1,"container"],[1,"center-container"],[4,"ngIf"]],template:function(t,e){1&t&&(o.qc(),o.Vb(0,"duelit-header",0),o.hc("logout",(function(){return e.doLogout()}))("logoClicked",(function(){return e.onLogoClick()})),o.Ub(),o.Vb(1,"div",1),o.Vb(2,"div",2),o.pc(3),o.Ub(),o.Ub(),o.Jc(4,W,1,0,"duelit-footer",3)),2&t&&(o.rc("authenticated",e.isAuthenticated)("firstName",null==e.loginService.user?null:e.loginService.user.firstName),o.Cb(4),o.rc("ngIf",e.isRedeem()))},directives:[R,C.m,D],styles:["[_nghost-%COMP%]{height:100%;width:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}[_nghost-%COMP%]   duelit-header[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:0;z-index:500;width:100%}@media (max-width:768px){[_nghost-%COMP%]   duelit-header[_ngcontent-%COMP%]{min-width:100%;display:block;position:absolute;top:0;left:0;z-index:500}}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{position:relative;padding:30px 0;background-color:#f9f9f9;min-height:-webkit-min-content;min-height:-moz-min-content;min-height:min-content;-webkit-box-flex:1;flex-grow:1;max-width:unset}@media (max-width:768px){[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{margin-top:80px}}"]}),t})();var Y=n("Olgc"),$=n("1kSV");function X(t,e){if(1&t){const t=o.Wb();o.Vb(0,"button",6),o.hc("click",(function(){o.Cc(t);const e=o.lc(2).$implicit;return o.lc().toastService.remove(e)})),o.Qb(1,"fa-icon",7),o.Ub()}if(2&t){const t=o.lc(2).$implicit,e=o.lc();o.rc("ngClass",t.class),o.Cb(1),o.rc("icon",e.close)}}function H(t,e){}function B(t,e){if(1&t&&(o.Jc(0,X,2,2,"button",4),o.Jc(1,H,0,0,"ng-template",5)),2&t){const t=o.lc().$implicit;o.rc("ngIf",t.dismissible),o.Cb(1),o.rc("ngTemplateOutlet",t.textOrTpl)}}function G(t,e){if(1&t){const t=o.Wb();o.Vb(0,"button",6),o.hc("click",(function(){o.Cc(t);const e=o.lc(2).$implicit;return o.lc().toastService.remove(e)})),o.Qb(1,"fa-icon",7),o.Ub()}if(2&t){const t=o.lc(2).$implicit,e=o.lc();o.rc("ngClass",t.class),o.Cb(1),o.rc("icon",e.close)}}function Z(t,e){if(1&t&&(o.Lc(0),o.Jc(1,G,2,2,"button",4)),2&t){const t=o.lc().$implicit;o.Nc("",t.textOrTpl," "),o.Cb(1),o.rc("ngIf",t.dismissible)}}function tt(t,e){if(1&t){const t=o.Wb();o.Vb(0,"ngb-toast",1),o.hc("hide",(function(){o.Cc(t);const n=e.$implicit;return o.lc().toastService.remove(n)})),o.Jc(1,B,2,2,"ng-template",2),o.Jc(2,Z,2,2,"ng-template",null,3,o.Kc),o.Ub()}if(2&t){const t=e.$implicit,n=o.zc(3),i=o.lc();o.Eb(t.class),o.rc("header",t.header)("autohide",!0)("delay",t.delay||5e3),o.Cb(1),o.rc("ngIf",i.isTemplate(t))("ngIfElse",n)}}let et=(()=>{class t{constructor(t){this.toastService=t,this.close=h.e}isTemplate(t){return t.textOrTpl instanceof o.M}}return t.\u0275fac=function(e){return new(e||t)(o.Pb(Y.a))},t.\u0275cmp=o.Jb({type:t,selectors:[["duelit-toast-container"]],decls:1,vars:1,consts:[[3,"class","header","autohide","delay","hide",4,"ngFor","ngForOf"],[3,"header","autohide","delay","hide"],[3,"ngIf","ngIfElse"],["text",""],[3,"ngClass","click",4,"ngIf"],[3,"ngTemplateOutlet"],[3,"ngClass","click"],[1,"fa-lg",3,"icon"]],template:function(t,e){1&t&&o.Jc(0,tt,4,7,"ngb-toast",0),2&t&&o.rc("ngForOf",e.toastService.toasts)},directives:[C.l,$.y,C.m,C.q,C.k,v.a],styles:["[_nghost-%COMP%]{position:fixed;top:0;right:0;margin:.5em;z-index:1200}[_nghost-%COMP%]   button[_ngcontent-%COMP%]{border:0;color:#fff}[_nghost-%COMP%]   button.success[_ngcontent-%COMP%]{background-color:#28a745}[_nghost-%COMP%]   button.danger[_ngcontent-%COMP%]{background-color:#dc3545}[_nghost-%COMP%]   button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]     fill{color:#fff}"]}),t})(),nt=(()=>{class t{constructor(){this.title="admin-redeem-dashboard"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Jb({type:t,selectors:[["duelit-root"]],decls:3,vars:0,template:function(t,e){1&t&&(o.Vb(0,"duelit-core-container"),o.Qb(1,"router-outlet"),o.Ub(),o.Qb(2,"duelit-toast-container"))},directives:[Q,a.f,et],styles:[""]}),t})();const ot=[b.a];let it=(()=>{class t{constructor(t){this.loginService=t}intercept(t,e){let n=t;const o=[/reset-password-request/].findIndex(e=>e.test(t.url))>=0;return this.loginService.token&&!o&&(n=t.clone({headers:t.headers.set("token",this.loginService.token)})),e.handle(n)}}return t.\u0275fac=function(e){return new(e||t)(o.dc(l.a))},t.\u0275prov=o.Lb({token:t,factory:t.\u0275fac}),t})(),rt=(()=>{class t{}return t.\u0275mod=o.Nb({type:t}),t.\u0275inj=o.Mb({factory:function(e){return new(e||t)},imports:[[C.c,k.b,v.b,a.e]]}),t})();const ct=t=>()=>t.Init();let st=(()=>{class t{}return t.\u0275mod=o.Nb({type:t,bootstrap:[nt]}),t.\u0275inj=o.Mb({factory:function(e){return new(e||t)},providers:[...ot,d.a,l.a,{provide:o.d,useFactory:ct,multi:!0,deps:[l.a]},{provide:r.a,useClass:it,multi:!0,deps:[l.a]}],imports:[[c.a,p,u.CoreModule,u.CoreModule.forRoot(),rt,a.e,s.b,r.c]]}),t})();i.a.production&&Object(o.T)(),c.d().bootstrapModule(st).catch(t=>console.error(t))},zn8P:function(t,e){function n(t){return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}))}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="zn8P"}},[[0,3,10]]]);