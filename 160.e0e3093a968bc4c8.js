"use strict";(self.webpackChunktracy_portfolio=self.webpackChunktracy_portfolio||[]).push([[160],{7160:(j,m,s)=>{s.r(m),s.d(m,{HomePageModule:()=>J});var a=s(6895),l=s(2655),i=s(2997),c=s(1867);const f=(0,i.PH)("[Home] Load"),p=(0,i.PH)("[Home] Load Success",(0,i.Ky)()),g=(0,i.PH)("[Home] Load Fail",(0,i.Ky)()),u=((0,i.PH)("[Home] Load Slide Data"),(0,i.ZF)("home")),A=(0,i.P1)(u,o=>o.metrics);(0,i.P1)(u,o=>o.error);var e=s(4650);function H(o,n){if(1&o&&(e.TgZ(0,"p")(1,"a",14),e._uU(2),e.qZA()()),2&o){const t=e.oxw().$implicit;e.xp6(1),e.s9C("routerLink",t.routerLink),e.xp6(1),e.Oqu(t.additionalInfo)}}function y(o,n){if(1&o&&(e.TgZ(0,"li"),e._UZ(1,"div",11),e.TgZ(2,"div",12)(3,"div",6)(4,"div",13)(5,"div",13)(6,"h1"),e._uU(7),e.qZA(),e.TgZ(8,"h2"),e._uU(9),e.qZA(),e.YNc(10,H,3,2,"p",8),e.qZA()()()()()),2&o){const t=n.$implicit;e.Jzz("background-image: url(",t.slideInfo.slidePath,");"),e.xp6(4),e.Q6J("ngClass","Left"===t.placement?"col-md-6 col-md-offset-3 col-md-pull-3 slider-text":"col-md-6 col-md-offset-3 slider-text"),e.xp6(1),e.Q6J("ngClass","Left"===t.placement?"slider-text-inner":"slider-text-inner text-center"),e.xp6(2),e.Oqu(t.slideInfo.slideTitle),e.xp6(2),e.Oqu(t.slideInfo.slideDescription),e.xp6(1),e.Q6J("ngIf",t.additionalInfo)}}function I(o,n){if(1&o&&(e.TgZ(0,"div")(1,"p"),e._uU(2),e.qZA()()),2&o){const t=n.ngIf;e.xp6(2),e.Oqu(t.title)}}function P(o,n){if(1&o&&(e.TgZ(0,"div",17),e._UZ(1,"span",18)(2,"span"),e.TgZ(3,"span",19),e._uU(4),e.qZA()()),2&o){const t=n.$implicit;e.xp6(1),e.uIk("data-to",t.totalYears),e.xp6(1),e.Tol(t.iconPath),e.xp6(2),e.Oqu(t.technology)}}function x(o,n){if(1&o&&(e.TgZ(0,"div",15)(1,"div",6),e.YNc(2,P,5,5,"div",16),e.qZA()()),2&o){const t=n.ngIf;e.xp6(2),e.Q6J("ngForOf",t.metrics)}}let h=(()=>{class o{constructor(t){this.store=t,this.slides=[{slideInfo:{slideTitle:"Emily Tracy",slideDescription:"Creating user interfaces for over 20 years",slidePath:"assets/images/Lighthouse_bg_1_grayscale.jpg"},placement:"Left",hasAdditionalInfo:!1,additionalInfo:"",routerLink:""},{slideInfo:{slideTitle:"About Me",slideDescription:"Explore my education and career",slidePath:"assets/images/AboutMe_bg.jpg"},placement:"Center",hasAdditionalInfo:!0,additionalInfo:"LEARN MORE",routerLink:"/about"},{slideInfo:{slideTitle:"My Work",slideDescription:"Samplings of my professional and personal projects",slidePath:"assets/images/MyWork_bg.jpg"},placement:"Center",hasAdditionalInfo:!0,additionalInfo:"VIEW MORE",routerLink:"/portfolio"},{slideInfo:{slideTitle:"Timeline",slideDescription:"A visual history of my credentials",slidePath:"assets/images/Footsteps_bg.jpg"},placement:"Left",hasAdditionalInfo:!0,additionalInfo:"VIEW MORE",routerLink:"/timeline"}]}ngOnInit(){this.store.dispatch(f()),this.metricsAtAGlance$=this.store.select(A)}ngAfterViewInit(){contentWayPoint(),sliderMain(),dropdown(),goToTop(),loaderPage(),counterWayPoint()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(i.yh))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-home-page"]],decls:13,vars:7,consts:[[1,"container-wrap"],["id","fh5co-hero"],[1,"flexslider"],[1,"slides"],[3,"style",4,"ngFor","ngForOf"],["id","fh5co-counter",1,"fh5co-counters"],[1,"row"],[1,"col-md-6","col-md-offset-3","text-center","animate-box"],[4,"ngIf"],[1,"row","animate-box"],["class","col-md-8 col-md-offset-2",4,"ngIf"],[1,"overlay-gradient"],[1,"container-fluid"],[3,"ngClass"],[1,"btn","btn-primary","btn-demo",3,"routerLink"],[1,"col-md-8","col-md-offset-2"],["class","col-md-2 text-center",4,"ngFor","ngForOf"],[1,"col-md-2","text-center"],["data-from","0","data-speed","5000","data-refresh-interval","50",1,"fh5co-counter","js-counter"],[1,"fh5co-counter-label"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"aside",1)(2,"div",2)(3,"ul",3),e.YNc(4,y,11,8,"li",4),e.qZA()()(),e.TgZ(5,"div",5)(6,"div",6)(7,"div",7),e.YNc(8,I,3,1,"div",8),e.ALo(9,"async"),e.qZA(),e.TgZ(10,"div",9),e.YNc(11,x,3,1,"div",10),e.ALo(12,"async"),e.qZA()()()()),2&t&&(e.xp6(4),e.Q6J("ngForOf",r.slides),e.xp6(4),e.Q6J("ngIf",e.lcZ(9,3,r.metricsAtAGlance$)),e.xp6(3),e.Q6J("ngIf",e.lcZ(12,5,r.metricsAtAGlance$)))},dependencies:[c.yS,a.mk,a.sg,a.O5,a.Ov],changeDetection:0}),o})();const T=[{path:"",component:h}];let Z=(()=>{class o{}return o.components=[h],o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[c.Bz.forChild(T),c.Bz]}),o})();var L=s(9646),C=s(5577),F=s(4004),M=s(262),O=s(4560);let E=(()=>{class o{constructor(t,r){this.actions$=t,this.portfolioService=r,this.loadHomeInfo$=(0,l.GW)(()=>this.actions$.pipe((0,l.l4)(f),(0,C.z)(()=>this.portfolioService.getMasterPortfolioObs().pipe((0,F.U)(d=>p({metrics:d.metrics})),(0,M.K)(d=>(0,L.of)(g({error:d})))))))}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(l.eX),e.LFG(O.M))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac}),o})();const v={metrics:s(4444).jP,error:""},S=(0,i.Lq)(v,(0,i.on)(p,(o,n)=>({...o,metrics:n.metrics,error:""})),(0,i.on)(g,(o,n)=>({...o,metrics:v.metrics,error:n.error})));let J=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[Z,a.ez,i.Aw.forFeature("home",S),l.sQ.forFeature([E])]}),o})()}}]);