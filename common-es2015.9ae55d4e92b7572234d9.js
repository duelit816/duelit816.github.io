(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{GJmQ:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("7o/Q");function o(e,t=!1){return n=>n.lift(new r(e,t))}class r{constructor(e,t){this.predicate=e,this.inclusive=t}call(e,t){return t.subscribe(new a(e,this.predicate,this.inclusive))}}class a extends i.a{constructor(e,t,n){super(e),this.predicate=t,this.inclusive=n,this.index=0}_next(e){const t=this.destination;let n;try{n=this.predicate(e,this.index++)}catch(i){return void t.error(i)}this.nextOrComplete(e,n)}nextOrComplete(e,t){const n=this.destination;Boolean(t)?n.next(e):(this.inclusive&&n.next(e),n.complete())}}},IGGr:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("PqYM"),o=n("lJxs"),r=n("GJmQ");function a(e){return Object(i.a)(0,1e3).pipe(Object(o.a)(t=>e-t),Object(r.a)(e=>e>=0))}},Jx61:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n("fXoL"),o=n("ofXK");let r=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Jb({type:e,selectors:[["duelit-metric"]],inputs:{metric:"metric"},decls:6,vars:4,consts:[[1,"keen-widget","keen-metric"],[1,"keen-metric-value",3,"innerHTML","ngClass"],[1,"keen-metric-title"]],template:function(e,t){1&e&&(i.Vb(0,"h6"),i.Lc(1),i.Ub(),i.Vb(2,"div",0),i.Qb(3,"span",1),i.Vb(4,"span",2),i.Lc(5),i.Ub(),i.Ub()),2&e&&(i.Cb(1),i.Nc(" ",null==t.metric?null:t.metric.title,"\n"),i.Cb(2),i.rc("innerHTML",null==t.metric?null:t.metric.data,i.Dc)("ngClass",null==t.metric?null:t.metric.class),i.Cb(2),i.Mc(null==t.metric?null:t.metric.subTitle))},directives:[o.k],styles:["[_nghost-%COMP%]   .keen-metric[_ngcontent-%COMP%]{background:#49c5b1;border-radius:4px;color:#fff;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;padding:10px 0;text-align:center}[_nghost-%COMP%]   .keen-metric[_ngcontent-%COMP%]   .keen-metric-value[_ngcontent-%COMP%]{display:block;font-size:84px;font-weight:700;line-height:84px}[_nghost-%COMP%]   .keen-metric[_ngcontent-%COMP%]   .keen-metric-title[_ngcontent-%COMP%]{display:block;font-size:24px;font-weight:200}.coin-dollar-metric[_nghost-%COMP%]   .keen-metric[_ngcontent-%COMP%]   .keen-metric-value[_ngcontent-%COMP%]{font-size:42px;line-height:42px}.coin-dollar-metric[_ngcontent-%COMP%]{font-size:42px!important;line-height:42px!important}"]}),e})()},S48G:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n("ofXK"),o=n("fXoL");let r=(()=>{class e{}return e.\u0275mod=o.Nb({type:e}),e.\u0275inj=o.Mb({factory:function(t){return new(t||e)},imports:[[i.c]]}),e})()},SLWe:function(e,t,n){"use strict";var i=function(e){return e.Active="active",e.Inactive="inactive",e.Banned="banned",e.Deactived="deactivated",e.Pending="pending",e}({}),o=function(e){return e.Add="add",e.AdminCredits="adminCredits",e.Transaction="transaction",e.RedeemCoinsRequest="redeemCoinsRequest",e}({});function r(e){return Object.keys(o).findIndex(t=>o[t]===e)>=0}n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return s})),n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return o})),n.d(t,"f",(function(){return r}));const a="cashout-request-amount",c="YYYY-MM-DD",s="-"},YGOX:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var i=n("1kSV"),o=n("wd/R");function r(e){return o().year(e.year).month(e.month-1).date(e.day)}function a(e){return new i.c(e.year(),e.month()+1,e.date())}},ftNi:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i=n("ofXK"),o=n("6NWb"),r=n("1kSV"),a=n("fXoL");let c=(()=>{class e{}return e.\u0275mod=a.Nb({type:e}),e.\u0275inj=a.Mb({factory:function(t){return new(t||e)},imports:[[i.c,r.f,r.j,o.b]]}),e})()},lbBO:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var i=n("fXoL"),o=n("3Pt+"),r=n("twK/"),a=n("1kSV"),c=n("YGOX"),s=n("wd/R"),l=n("ofXK"),u=n("6NWb");function d(e,t){if(1&e){const e=i.Wb();i.Vb(0,"button",22),i.hc("click",(function(){i.Cc(e);const t=i.lc().$implicit;return i.lc().setPreSelectedDate(t.value)})),i.Lc(1),i.Ub()}if(2&e){const e=i.lc().$implicit,t=i.lc();i.Hb("selected",t.isPreSelectedItemSelected(e)),i.Cb(1),i.Nc(" ",e.label," ")}}function b(e,t){if(1&e&&(i.Tb(0),i.Jc(1,d,2,3,"button",21),i.Sb()),2&e){const e=t.$implicit;i.Cb(1),i.rc("ngIf",!e.hidden)}}function f(e,t){if(1&e){const e=i.Wb();i.Vb(0,"span",23),i.hc("mouseenter",(function(){i.Cc(e);const n=t.$implicit;return i.lc().hoveredDate=n}))("mouseleave",(function(){return i.Cc(e),i.lc().hoveredDate=null})),i.Lc(1),i.Ub()}if(2&e){const e=t.$implicit,n=t.focused,o=i.lc();i.Hb("focused",n)("range",o.isRange(e))("faded",o.isHovered(e)||o.isInside(e))("disabled",o.isDisabled(e)),i.Cb(1),i.Nc(" ",e.day," ")}}let m=(()=>{class e{constructor(e,t){this.calendar=e,this.formatter=t,this.allTimeMinDate=Object(c.a)(s("2010-01-01")),this.preSelectedDates=[{label:"Today",value:0},{label:"This week",value:"week"},{label:"This month",value:"month"},{label:"This quarter",value:"quarter"},{label:"This year",value:"year"},{label:"2 days ago",value:1},{label:"3 days ago",value:2},{label:"5 days ago",value:4},{label:"7 days ago",value:6},{label:"All time",value:-2},{label:"Custom",value:-1,hidden:!0}],this.preSelectedDate=new o.d(-1),this.maxDate=null,this.minDate=null,this.calendarIcon=r.a,this.hoveredDate=null,this.onChange=()=>{},this.onTouch=()=>{},this.maxDate=e.getToday(),this.minDate=e.getToday(),this.minDate.year=2010,this.minDate.month=1,this.minDate.day=1}get fromDate(){return this._from}set fromDate(e){e&&!e.equals(this._from)&&setTimeout(()=>{this.preSelectedDate.setValue(-1)},0),this._from=e,this.onChange({from:e,to:this.toDate})}get toDate(){return this._to}set toDate(e){e&&!e.equals(this._to)&&setTimeout(()=>{this.preSelectedDate.setValue(-1)},0),this._to=e,this.onChange({from:this.fromDate,to:e})}ngOnInit(){}ngAfterViewInit(){setTimeout(()=>this.setInitValueOfPresetDate(),0)}onDateSelection(e){this.fromDate||this.toDate?this.fromDate&&!this.toDate&&e.after(this.fromDate)?this.toDate=e:(this.toDate=null,this.fromDate=e):this.fromDate=e,this.preSelectedDate.value(-1)}isHovered(e){return this.fromDate&&!this.toDate&&this.hoveredDate&&e.after(this.fromDate)&&e.before(this.hoveredDate)}isInside(e){return this.toDate&&e.after(this.fromDate)&&e.before(this.toDate)}isRange(e){return e.equals(this.fromDate)||this.toDate&&e.equals(this.toDate)||this.isInside(e)||this.isHovered(e)}isDisabled(e){return e.after(this.maxDate)||e.before(this.minDate)}validateInput(e,t){const n=this.formatter.parse(t);return n&&this.calendar.isValid(a.c.from(n))?a.c.from(n):e}writeValue(e){this.fromDate=e.from,this.toDate=e.to}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouch=e}setPreSelectedDate(e){this.preSelectedDate.setValue(e),this._to=Object(c.a)(s()),-2!==e?(this._from="number"==typeof e?Object(c.a)(s().subtract(e,"days")):Object(c.a)(s().startOf(e)),this.onChange({from:this.fromDate,to:this.toDate})):this._from=this.allTimeMinDate}getPreSelectedDateLabel(){return this.preSelectedDates.find(e=>e.value===this.preSelectedDate.value).label}isPreSelectedItemSelected(e){return this.preSelectedDate.value===e.value}setInitValueOfPresetDate(){const e=Object(c.b)(this.fromDate),t=Object(c.b)(this.toDate),n=t.diff(e,"days");this.preSelectedDates.findIndex(e=>e.value===n)>=0?this.preSelectedDate.setValue(n):["year","quarter","month","week"].forEach(e=>{t.diff(s().startOf(e),"days")===n&&this.preSelectedDate.setValue(e)})}}return e.\u0275fac=function(t){return new(t||e)(i.Pb(a.b),i.Pb(a.d))},e.\u0275cmp=i.Jb({type:e,selectors:[["duelit-date-picker-range"]],features:[i.Bb([{provide:o.j,useExisting:Object(i.U)(()=>e),multi:!0}])],decls:31,vars:10,consts:[[1,"flex"],[1,"col"],["ngbDropdown","",1,"d-inline-block"],["id","dropdownBasic1","ngbDropdownToggle","",1,"btn","btn-outline-primary"],["ngbDropdownMenu","","aria-labelledby","dropdownBasic1"],[4,"ngFor","ngForOf"],[1,"form-group","hidden"],[1,"input-group"],["name","datepicker","ngbDatepicker","","outsideDays","hidden",1,"form-control","hidden",3,"autoClose","displayMonths","dayTemplate","startDate","dateSelect"],["datepicker","ngbDatepicker"],["t",""],[1,"form-group"],["placeholder","yyyy-mm-dd","name","dpFromDate",1,"form-control",3,"value","input"],["dpFromDate",""],[1,"input-group-append"],["type","button",1,"btn","btn-outline-secondary","calendar",3,"click"],[3,"icon"],[1,"form-group","ml-2"],[1,"to"],["placeholder","yyyy-mm-dd","name","dpToDate",1,"form-control",3,"value","input"],["dpToDate",""],["ngbDropdownItem","",3,"selected","click",4,"ngIf"],["ngbDropdownItem","",3,"click"],[1,"custom-day",3,"mouseenter","mouseleave"]],template:function(e,t){if(1&e){const e=i.Wb();i.Vb(0,"div",0),i.Vb(1,"div",1),i.Vb(2,"div",2),i.Vb(3,"button",3),i.Lc(4),i.Ub(),i.Vb(5,"div",4),i.Jc(6,b,2,1,"ng-container",5),i.Ub(),i.Ub(),i.Ub(),i.Vb(7,"div",6),i.Vb(8,"div",7),i.Vb(9,"input",8,9),i.hc("dateSelect",(function(e){return t.onDateSelection(e)})),i.Ub(),i.Jc(11,f,2,9,"ng-template",null,10,i.Kc),i.Ub(),i.Ub(),i.Vb(13,"div",11),i.Vb(14,"span"),i.Lc(15,"From: "),i.Ub(),i.Vb(16,"div",7),i.Vb(17,"input",12,13),i.hc("input",(function(){i.Cc(e);const n=i.zc(18);return t.fromDate=t.validateInput(t.fromDate,n.value)})),i.Ub(),i.Vb(19,"div",14),i.Vb(20,"button",15),i.hc("click",(function(){return i.Cc(e),i.zc(10).toggle()})),i.Qb(21,"fa-icon",16),i.Ub(),i.Ub(),i.Ub(),i.Ub(),i.Vb(22,"div",17),i.Vb(23,"span",18),i.Lc(24,"To: "),i.Ub(),i.Vb(25,"div",7),i.Vb(26,"input",19,20),i.hc("input",(function(){i.Cc(e);const n=i.zc(27);return t.toDate=t.validateInput(t.toDate,n.value)})),i.Ub(),i.Vb(28,"div",14),i.Vb(29,"button",15),i.hc("click",(function(){return i.Cc(e),i.zc(10).toggle()})),i.Qb(30,"fa-icon",16),i.Ub(),i.Ub(),i.Ub(),i.Ub(),i.Ub()}if(2&e){const e=i.zc(12);i.Cb(4),i.Mc(t.getPreSelectedDateLabel()),i.Cb(2),i.rc("ngForOf",t.preSelectedDates),i.Cb(3),i.rc("autoClose","outside")("displayMonths",2)("dayTemplate",e)("startDate",t.fromDate),i.Cb(8),i.rc("value",t.formatter.format(t.fromDate)),i.Cb(4),i.rc("icon",t.calendarIcon),i.Cb(5),i.rc("value",t.formatter.format(t.toDate)),i.Cb(4),i.rc("icon",t.calendarIcon)}},directives:[a.g,a.k,a.i,l.l,a.l,u.a,l.m,a.h],styles:[".custom-day[_ngcontent-%COMP%]{text-align:center;padding:.185rem .25rem;display:inline-block;height:2rem;width:2rem}.custom-day.focused[_ngcontent-%COMP%]{background-color:#e6e6e6}.custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover{background-color:#0275d8;color:#fff}.custom-day.faded[_ngcontent-%COMP%]{background-color:rgba(2,117,216,.5)}.custom-day.disabled[_ngcontent-%COMP%], .custom-day.disabled[_ngcontent-%COMP%]:hover{opacity:.5;cursor:not-allowed;background-color:unset;color:unset}.hidden[_ngcontent-%COMP%]{width:0;margin:0;border:none;padding:0}.form-group[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;margin-bottom:0}.form-group[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:1em}.form-group[_ngcontent-%COMP%]   span.to[_ngcontent-%COMP%]{margin-left:1em}.flex[_ngcontent-%COMP%]{flex-wrap:wrap}"]}),e})()}}]);