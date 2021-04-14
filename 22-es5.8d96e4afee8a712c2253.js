function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"0jGk":function(e,t,i){"use strict";i.r(t);var n=i("ofXK"),r=i("S48G"),a=i("tyNb"),c=i("Znnd"),o=i("LRne"),s=i("JIr8"),l=i("fXoL"),u=i("qc5V"),b=i("Olgc"),d=i("Jx61"),m=i("BamM");function g(e,t){if(1&e&&(l.Tb(0),l.Vb(1,"h5",2),l.Lc(2,"< back to users"),l.Ub(),l.Vb(3,"h4"),l.Lc(4,"Game Stat"),l.Ub(),l.Vb(5,"div",3),l.Qb(6,"duelit-metric",4),l.Qb(7,"duelit-metric",4),l.Qb(8,"duelit-metric",4),l.Qb(9,"duelit-metric",4),l.mc(10,"number"),l.Ub(),l.Vb(11,"h4"),l.Lc(12,"Challenge Stats"),l.Ub(),l.Vb(13,"div",3),l.Qb(14,"duelit-keen-api",5),l.Ub(),l.Vb(15,"h4"),l.Lc(16,"Redeem Stat"),l.Ub(),l.Vb(17,"div",3),l.Qb(18,"duelit-metric",6),l.Qb(19,"duelit-metric",7),l.Qb(20,"duelit-metric",7),l.Ub(),l.Vb(21,"h4"),l.Lc(22,"Purchase Stat"),l.Ub(),l.Vb(23,"div",3),l.Qb(24,"duelit-metric",6),l.Qb(25,"duelit-metric",7),l.Qb(26,"duelit-metric",7),l.Ub(),l.Sb()),2&e){var i=t.$implicit,n=l.lc();l.Cb(6),l.rc("metric",n.getMetric("Wins","Count - Games Won",i.games.wins)),l.Cb(1),l.rc("metric",n.getMetric("Losts","Count - Games Losts",i.games.lost)),l.Cb(1),l.rc("metric",n.getMetric("Played","Count - Games Played",i.games.completed)),l.Cb(1),l.rc("metric",n.getMetric("Win Rate","Win Percentage",l.oc(10,11,100*i.games.win_percentage,".0-2"))),l.Cb(5),l.rc("keenApiInput",n.challengeStats$),l.Cb(4),l.rc("metric",n.getMetric("Redeems","Count - Redeems",i.redeemed.count)),l.Cb(1),l.rc("metric",n.getCoinDollarMetric("Total","Total - Redeems",i.redeemed.coins,i.redeemed.dollar)),l.Cb(1),l.rc("metric",n.getCoinDollarMetric("Average","Average - Redeems",i.redeemed.average.coins,i.redeemed.average.dollar,!0)),l.Cb(4),l.rc("metric",n.getMetric("Purchases","Count - Purchases",i.topup.count)),l.Cb(1),l.rc("metric",n.getCoinDollarMetric("Total","Total - Purchases",i.topup.coins,i.topup.dollar)),l.Cb(1),l.rc("metric",n.getCoinDollarMetric("Average","Average - Purchases",i.topup.average.coins,i.topup.average.dollar,!0))}}function p(e,t){1&e&&(l.Vb(0,"div",8),l.Qb(1,"span",9),l.Ub())}var h,f,C=[{path:"",component:(h=function(){function e(t,i,n,r){_classCallCheck(this,e),this.api=t,this.route=i,this.toast=n,this.numberPipe=r,this.challengeStats$={title:"Challenge Stats",classSelector:"challenge-stats",viewType:"line"}}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this,t=this.api.buildPath(c.e.UserStats,[this.route.snapshot.params.userId]);this.stats$=this.api.get(t).pipe(Object(s.a)((function(t){return e.toast.error(t.error||t.statusText||t.message),Object(o.a)({games:{completed:0,wins:0,lost:0,win_percentage:0},redeemed:{count:0,coins:0,dollar:0,average:{coins:0,dollar:0}}})}))),this.getChallengeStats()}},{key:"getMetric",value:function(e,t,i){return{title:e,subTitle:t,data:i}}},{key:"getCoinDollarMetric",value:function(e,t,i,n){var r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a="$".concat(this.numberPipe.transform(n,r?".3-3":"0.0"),"<br>").concat(this.numberPipe.transform(i,".2-2")," coins");return this.getMetric(e,t,a)}},{key:"getChallengeStats",value:function(){var e=this;this.stats$.subscribe((function(t){var i=t.challengeVsHours,n=[];if(i)for(var r=1;r<=24;r++)n.push({type:r,count:i[r]||0});e.challengeStats$={title:"Challenge Stats",classSelector:"challenge-stats",viewType:"line",xAxisLabel:"Hour of day (in UTC)",data:n}}))}}]),e}(),h.\u0275fac=function(e){return new(e||h)(l.Pb(u.a),l.Pb(a.a),l.Pb(b.a),l.Pb(n.f))},h.\u0275cmp=l.Jb({type:h,selectors:[["duelit-user-stat"]],decls:4,vars:4,consts:[[4,"ngIf","ngIfElse"],["loading",""],["onclick","window.history.back()",1,"pointer"],[1,"row","container"],[1,"col-3",3,"metric"],[1,"col-12",3,"keenApiInput"],[1,"col-4",3,"metric"],[1,"col-4","coin-dollar-metric",3,"metric"],[1,"col","col-loading"],[1,"metric","loading"]],template:function(e,t){if(1&e&&(l.Jc(0,g,27,14,"ng-container",0),l.mc(1,"async"),l.Jc(2,p,2,0,"ng-template",null,1,l.Kc)),2&e){var i=l.zc(3);l.rc("ngIf",l.nc(1,2,t.stats$))("ngIfElse",i)}},directives:[n.n,d.a,m.a],pipes:[n.b,n.f],styles:["[_nghost-%COMP%]   span.metric.loading[_ngcontent-%COMP%]{height:120px;width:120px;background-size:120px 120px}[_nghost-%COMP%]   .col-loading[_ngcontent-%COMP%]{-webkit-box-pack:center;justify-content:center;display:-webkit-box;display:flex}[_nghost-%COMP%]   .row[_ngcontent-%COMP%]{margin-bottom:3em}"]}),h)}],v=((f=function e(){_classCallCheck(this,e)}).\u0275mod=l.Nb({type:f}),f.\u0275inj=l.Mb({factory:function(e){return new(e||f)},imports:[[a.e.forChild(C)],a.e]}),f),y=i("geAU");i.d(t,"UserStatModule",(function(){return w}));var P,w=((P=function e(){_classCallCheck(this,e)}).\u0275mod=l.Nb({type:P}),P.\u0275inj=l.Mb({factory:function(e){return new(e||P)},providers:[n.f],imports:[[n.c,v,r.a,y.a]]}),P)}}]);