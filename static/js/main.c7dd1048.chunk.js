(this["webpackJsonprandom-walk-example"]=this["webpackJsonprandom-walk-example"]||[]).push([[0],{173:function(e,t,n){},174:function(e,t,n){},175:function(e,t,n){},176:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(58),s=n.n(i),c=n(60),m=n(59),l=n.n(m),o=new(function(){function e(e,t,n,a,r){this.min=e,this.max=t,this.maxTrend=a,this.maxStep=r,this.value=n||Math.random()*((t-e)/2)+e,this.trendRem=0,this.trendDir=0}var t=e.prototype;return t.createTrend=function(){this.trendDir=Math.round(2*Math.random()-1),this.trendRem=Math.random()*this.maxTrend},t.next=function(){this.trendRem<=0&&this.createTrend();var e=Math.random()*this.maxStep;return this.trendRem-=e,this.value+=e*this.trendDir,this.value>=this.max&&(this.createTrend(),this.trendDir=-1,this.value-=e),this.value<=this.min&&(this.createTrend(),this.trendDir=1,this.value+=e),this.value},e}())(1,1e3,500,10,10),h=function(){var e=Object(a.useState)(0),t=Object(c.a)(e,2),n=t[0],i=t[1];Object(a.useEffect)((function(){!function e(){i(o.next()),setTimeout(e,200)}()}),[i]);var s=Object(a.useMemo)((function(){return{box:{border:"4px solid #ffffff",padding:30},price:{fontSize:"3rem",margin:"0 0 15px 0"}}}),[]);return r.a.createElement("div",null,r.a.createElement("div",{className:"flex column align-center"},r.a.createElement("h1",null,"@reactiff/random-walk"),r.a.createElement("p",null,"Generates random number sequences that are more characteristic of Price Movements i.e. trending."),r.a.createElement(l.a,null,"\n[![NPM](https://img.shields.io/npm/v/@reactiff/random-walk.svg)](https://www.npmjs.com/package/@reactiff/random-walk) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)\n"),r.a.createElement("div",{className:"flex column align-center",style:s.box},r.a.createElement("h1",{style:s.price},n.toFixed(2)),r.a.createElement("div",null,"RANDOM WALK")),r.a.createElement("p",null,r.a.createElement("a",{href:"https://www.npmjs.com/package/@reactiff/random-walk"},"npm")," | ",r.a.createElement("a",{href:"https://github.com/reactiff/random-walk"},"git")," | MIT \xa9 ",r.a.createElement("a",{href:"https://github.com/reactiff"},"Rick Ellis"))))};n(173),n(174),n(175);s.a.render(r.a.createElement(h,null),document.getElementById("root"))},61:function(e,t,n){e.exports=n(176)}},[[61,1,2]]]);
//# sourceMappingURL=main.c7dd1048.chunk.js.map