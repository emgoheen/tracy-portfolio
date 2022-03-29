"use strict";(self.webpackChunktracy_portfolio=self.webpackChunktracy_portfolio||[]).push([[419],{7419:(z,p,i)=>{i.r(p),i.d(p,{PortfolioPageSingleModule:()=>$});var a=i(9808),f=i(6517),r=i(951),g=i(7199);const d=(0,r.PH)("[Project] Load",(0,r.Ky)()),u=(0,r.PH)("[Project] Load Success",(0,r.Ky)()),Z=(0,r.PH)("[Project] Load Fail",(0,r.Ky)()),P=(0,r.ZF)("project"),v=(0,r.P1)(P,t=>t.project);(0,r.P1)(P,t=>t.error);var o=i(5e3);function T(t,n){if(1&t&&(o.TgZ(0,"div",13),o.TgZ(1,"h1"),o._uU(2),o.qZA(),o.TgZ(3,"h2"),o._uU(4),o.qZA(),o.qZA()),2&t){const e=n.ngIf;o.xp6(2),o.Oqu(e.slideInfo.slideTitle),o.xp6(2),o.Oqu(e.slideInfo.slideDescription)}}function A(t,n){if(1&t&&(o.TgZ(0,"li"),o._uU(1),o.qZA()),2&t){const e=n.$implicit;o.xp6(1),o.Oqu(e)}}function y(t,n){if(1&t&&(o.TgZ(0,"div",14),o.TgZ(1,"h2",15),o._uU(2),o.qZA(),o.TgZ(3,"span",16),o._uU(4),o.qZA(),o._UZ(5,"p",17),o.TgZ(6,"div",18),o.TgZ(7,"h3"),o._uU(8,"Client-side and supporting technologies:"),o.qZA(),o.TgZ(9,"ul"),o.YNc(10,A,2,1,"li",19),o.qZA(),o.qZA(),o.qZA()),2&t){const e=n.ngIf;o.xp6(2),o.Oqu(e.title),o.xp6(2),o.Oqu(e.source),o.xp6(1),o.Q6J("innerHTML",e.description,o.oJD),o.xp6(5),o.Q6J("ngForOf",e.fullTechList)}}let j=(()=>{class t{constructor(e,c){this.route=e,this.store=c}ngOnInit(){this.route.params.subscribe(e=>{this.store.dispatch(d({projectId:e.id})),this.projectInfo$=this.store.select(v)})}ngAfterViewInit(){initializePopups(),contentWayPoint(),sliderMain(),dropdown(),goToTop(),loaderPage(),counterWayPoint()}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(g.gz),o.Y36(r.yh))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-portfolio-page-single"]],decls:20,vars:17,consts:[[1,"container-wrap"],["id","fh5co-hero"],[1,"flexslider"],[1,"slides"],[1,"overlay-gradient"],[1,"row"],[1,"col-md-6","col-md-offset-3","slider-text","slider-text-bg"],["class","slider-text-inner text-center",4,"ngIf"],["id","fh5co-work"],[1,"col-md-8"],[1,"image-popup","img-portfolio-detail",3,"href"],[1,"img-responsive",3,"src"],["class","col-md-4 fh5co-project-detail",4,"ngIf"],[1,"slider-text-inner","text-center"],[1,"col-md-4","fh5co-project-detail"],[1,"fh5co-project-title"],[1,"fh5co-project-sub"],[3,"innerHTML"],[1,"fh5co-project-service"],[4,"ngFor","ngForOf"]],template:function(e,c){if(1&e&&(o.TgZ(0,"div",0),o.TgZ(1,"aside",1),o.TgZ(2,"div",2),o.TgZ(3,"ul",3),o.TgZ(4,"li"),o.ALo(5,"async"),o._UZ(6,"div",4),o.TgZ(7,"div",5),o.TgZ(8,"div",6),o.YNc(9,T,5,2,"div",7),o.ALo(10,"async"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(11,"div",8),o.TgZ(12,"div",5),o.TgZ(13,"div",9),o.TgZ(14,"a",10),o.ALo(15,"async"),o._UZ(16,"img",11),o.ALo(17,"async"),o.qZA(),o.qZA(),o.YNc(18,y,11,4,"div",12),o.ALo(19,"async"),o.qZA(),o.qZA(),o.qZA()),2&e){let s,l,h;o.xp6(4),o.Jzz("background-image: url(",null==(s=o.lcZ(5,7,c.projectInfo$))||null==s.slideInfo?null:s.slideInfo.slidePath,");"),o.xp6(5),o.Q6J("ngIf",o.lcZ(10,9,c.projectInfo$)),o.xp6(5),o.s9C("href",null==(l=o.lcZ(15,11,c.projectInfo$))?null:l.imagePath,o.LSH),o.xp6(2),o.s9C("src",null==(h=o.lcZ(17,13,c.projectInfo$))?null:h.imagePath,o.LSH),o.xp6(2),o.Q6J("ngIf",o.lcZ(19,15,c.projectInfo$))}},directives:[a.O5,a.sg],pipes:[a.Ov],styles:[""],changeDetection:0}),t})();const S=[{path:"",component:j}];let I=(()=>{class t{}return t.components=[j],t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[g.Bz.forChild(S)],g.Bz]}),t})();var x=i(1086),F=i(1406),L=i(4850),q=i(7221),O=i(4560);let C=(()=>{class t{constructor(e,c){this.actions$=e,this.portfolioService=c,this.loadProjectInfo$=(0,f.GW)(()=>this.actions$.pipe((0,f.l4)(d),(0,F.b)(s=>this.portfolioService.getProject(s.projectId).pipe((0,L.U)(l=>u({project:l})),(0,q.K)(l=>(0,x.of)(Z({error:l})))))))}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(f.eX),o.LFG(O.M))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac}),t})();const m={project:i(4444).yF,error:""},U=(0,r.Lq)(m,(0,r.on)(u,(t,n)=>Object.assign(Object.assign({},t),{project:n.project,error:""})),(0,r.on)(Z,(t,n)=>Object.assign(Object.assign({},t),{project:m.project,error:n.error})));let $=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[I,a.ez,r.Aw.forFeature("project",U),f.sQ.forFeature([C])]]}),t})()}}]);