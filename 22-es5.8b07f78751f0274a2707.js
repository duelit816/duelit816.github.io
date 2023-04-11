function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"0jGk":function(e,t,i){"use strict";i.r(t);var r=i("ofXK"),a=i("S48G"),n=i("tyNb"),c=i("Znnd"),o=i("LRne"),l=i("JIr8"),s=i("fXoL"),u=i("qc5V"),d=i("Olgc"),b=i("Jx61"),m=i("BamM");function p(e,t){if(1&e&&(s.Tb(0),s.Vb(1,"h5",2),s.Lc(2,"< back to users"),s.Ub(),s.Vb(3,"h4"),s.Lc(4,"Game Stat"),s.Ub(),s.Vb(5,"div",3),s.Qb(6,"duelit-metric",4),s.Qb(7,"duelit-metric",4),s.Qb(8,"duelit-metric",4),s.Qb(9,"duelit-metric",4),s.mc(10,"number"),s.Ub(),s.Vb(11,"h4"),s.Lc(12,"Challenge Stats"),s.Ub(),s.Vb(13,"div",3),s.Qb(14,"duelit-keen-api",5),s.Ub(),s.Vb(15,"div",3),s.Qb(16,"duelit-keen-api",5),s.Ub(),s.Vb(17,"h4"),s.Lc(18,"Redeem Stat"),s.Ub(),s.Vb(19,"div",3),s.Qb(20,"duelit-metric",6),s.Qb(21,"duelit-metric",7),s.Qb(22,"duelit-metric",7),s.Ub(),s.Vb(23,"h4"),s.Lc(24,"Purchase Stat"),s.Ub(),s.Vb(25,"div",3),s.Qb(26,"duelit-metric",6),s.Qb(27,"duelit-metric",7),s.Qb(28,"duelit-metric",7),s.Ub(),s.Vb(29,"div",3),s.Qb(30,"duelit-metric",8),s.Qb(31,"duelit-metric",9),s.Ub(),s.Sb()),2&e){var i=t.$implicit,r=s.lc();s.Cb(6),s.rc("metric",r.getMetric("Wins","Count - Games Won",i.games.wins)),s.Cb(1),s.rc("metric",r.getMetric("Losts","Count - Games Losts",i.games.lost)),s.Cb(1),s.rc("metric",r.getMetric("Played","Count - Games Played",i.games.completed)),s.Cb(1),s.rc("metric",r.getMetric("Win Rate","Win Percentage",s.oc(10,14,100*i.games.win_percentage,".0-2"))),s.Cb(5),s.rc("keenApiInput",r.createdChallengeStats$),s.Cb(2),s.rc("keenApiInput",r.playedChallengeStats$),s.Cb(4),s.rc("metric",r.getMetric("Redeems","Count - Redeems",i.redeemed.count)),s.Cb(1),s.rc("metric",r.getCoinDollarMetric("Total","Total - Redeems",i.redeemed.coins,i.redeemed.dollar)),s.Cb(1),s.rc("metric",r.getCoinDollarMetric("Average","Average - Redeems",i.redeemed.average.coins,i.redeemed.average.dollar,!0)),s.Cb(4),s.rc("metric",r.getMetric("Purchases","Count - Purchases",i.topup.count)),s.Cb(1),s.rc("metric",r.getCoinDollarMetric("Total","Total - Purchases",i.topup.coins,i.topup.dollar)),s.Cb(1),s.rc("metric",r.getCoinDollarMetric("Average","Average - Purchases",i.topup.average.coins,i.topup.average.dollar,!0)),s.Cb(2),s.rc("metric",r.getMetric("Watched Ads","Count - Ads",i.ads.count)),s.Cb(1),s.rc("metric",r.getCoinDollarMetric("Total","Total - Ads",i.ads.coins,i.ads.dollar))}}function g(e,t){1&e&&(s.Vb(0,"div",10),s.Qb(1,"span",11),s.Ub())}var h,C,f=[{path:"",component:(h=function(){function e(t,i,r,a){_classCallCheck(this,e),this.api=t,this.route=i,this.toast=r,this.numberPipe=a,this.createdChallengeStats$={title:"Challenge Sent",classSelector:"challenge-sent",viewType:"line",xAxisLabel:"Hour of day (in UTC)",yAxisLabel:"Count"},this.playedChallengeStats$={title:"Challenge Played",classSelector:"challenge-played",viewType:"line",xAxisLabel:"Hour of day (in UTC)",yAxisLabel:"Count"}}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this,t=this.api.buildPath(c.e.UserStats,[this.route.snapshot.params.userId]);this.stats$=this.api.get(t).pipe(Object(l.a)((function(t){return e.toast.error(t.error||t.statusText||t.message),Object(o.a)({games:{completed:0,wins:0,lost:0,win_percentage:0},redeemed:{count:0,coins:0,dollar:0,average:{coins:0,dollar:0}}})}))),this.getChallengeStats()}},{key:"getMetric",value:function(e,t,i){return{title:e,subTitle:t,data:i}}},{key:"getCoinDollarMetric",value:function(e,t,i,r){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],n="$".concat(this.numberPipe.transform(r,a?".3-3":"0.0"),"<br>").concat(this.numberPipe.transform(i,".2-2")," coins");return this.getMetric(e,t,n)}},{key:"getChallengeStats",value:function(){var e=this;this.stats$.subscribe((function(t){var i=t.createdChallengeVsHours,r=[];if(i)for(var a=0;a<24;a++)r.push({type:a,count:i[a]||0});e.createdChallengeStats$.data=r;var n=t.playedChallengeVsHours,c=[];if(n)for(var o=0;o<24;o++)c.push({type:o,count:n[o]||0});e.playedChallengeStats$.data=c}))}}]),e}(),h.\u0275fac=function(e){return new(e||h)(s.Pb(u.a),s.Pb(n.a),s.Pb(d.a),s.Pb(r.f))},h.\u0275cmp=s.Jb({type:h,selectors:[["duelit-user-stat"]],decls:4,vars:4,consts:[[4,"ngIf","ngIfElse"],["loading",""],["onclick","window.history.back()",1,"pointer"],[1,"row","container"],[1,"col-3",3,"metric"],[1,"col-12",3,"keenApiInput"],[1,"col-4",3,"metric"],[1,"col-4","coin-dollar-metric",3,"metric"],[1,"col-6",3,"metric"],[1,"col-6","coin-dollar-metric",3,"metric"],[1,"col","col-loading"],[1,"metric","loading"]],template:function(e,t){if(1&e&&(s.Jc(0,p,32,17,"ng-container",0),s.mc(1,"async"),s.Jc(2,g,2,0,"ng-template",null,1,s.Kc)),2&e){var i=s.zc(3);s.rc("ngIf",s.nc(1,2,t.stats$))("ngIfElse",i)}},directives:[r.n,b.a,m.a],pipes:[r.b,r.f],styles:["[_nghost-%COMP%]   span.metric.loading[_ngcontent-%COMP%]{height:120px;width:120px;background-size:120px 120px}[_nghost-%COMP%]   .col-loading[_ngcontent-%COMP%]{-webkit-box-pack:center;justify-content:center;display:-webkit-box;display:flex}[_nghost-%COMP%]   .row[_ngcontent-%COMP%]{margin-bottom:3em}"]}),h)}],v=((C=function e(){_classCallCheck(this,e)}).\u0275mod=s.Nb({type:C}),C.\u0275inj=s.Mb({factory:function(e){return new(e||C)},imports:[[n.e.forChild(f)],n.e]}),C),y=i("geAU");i.d(t,"UserStatModule",(function(){return w}));var P,w=((P=function e(){_classCallCheck(this,e)}).\u0275mod=s.Nb({type:P}),P.\u0275inj=s.Mb({factory:function(e){return new(e||P)},providers:[r.f],imports:[[r.c,v,a.a,y.a]]}),P)}}]);