(this["webpackJsonpdraftbox-react"]=this["webpackJsonpdraftbox-react"]||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var s=c(1),i=c.n(s),n=c(16),a=c.n(n),j=(c(22),c(6)),r=c(2),o=(c(23),c(9)),l=c(0);var b=function(e){var t=e.children,c=Object(s.useState)(!1),i=Object(o.a)(c,2),n=i[0],a=i[1];function r(){a(!n)}function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Home";a(!1),document.title="Draftbox Design"+("Home"===e?"":" / ".concat(e))}return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{id:"container",className:"container "+(n?"openMenu":""),children:[Object(l.jsxs)("div",{className:n?"openMenu":"",children:[Object(l.jsx)("img",{src:"../images/draftbox.svg",alt:"Draftbox Logo",style:{width:"100px"}}),Object(l.jsx)("div",{children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{onClick:function(){return b("Home")},children:Object(l.jsx)(j.c,{exact:!0,activeClassName:"active",to:"/",children:"Home"})}),Object(l.jsx)("li",{onClick:function(){return b("Portfolio")},children:Object(l.jsx)(j.c,{exact:!0,activeClassName:"active",to:"/portfolio",children:"Portfolio"})}),Object(l.jsx)("li",{onClick:function(){return b("Contact")},children:Object(l.jsx)(j.c,{exact:!0,activeClassName:"active",to:"/contact",children:"Contact"})}),Object(l.jsx)("li",{onClick:function(){return b("About")},children:Object(l.jsx)(j.c,{exact:!0,activeClassName:"active",to:"/about",children:"About"})})]})}),Object(l.jsx)("div",{children:Object(l.jsx)("ul",{style:{padding:"6px 0"}})}),Object(l.jsx)("div",{children:Object(l.jsx)("ul",{style:{padding:"2px 0"}})})]}),Object(l.jsxs)("div",{className:n?"openMenu":"",children:[t,Object(l.jsx)("section",{className:"footer",children:"Draftbox Design \xa9 2021"}),Object(l.jsx)("section",{onClick:r,className:"mobileOverlay "+(n?"openMenu":"")})]})]}),Object(l.jsx)("div",{id:"svgLogoAnim",children:Object(l.jsxs)("div",{id:"svgImgs",children:[Object(l.jsx)("img",{id:"petal3",src:"../images/petal3.svg",alt:""}),Object(l.jsx)("img",{id:"petal2",src:"../images/petal2.svg",alt:""}),Object(l.jsx)("img",{id:"petal1",src:"../images/petal1.svg",alt:""}),Object(l.jsx)("img",{id:"box3",src:"../images/box3.svg",alt:""}),Object(l.jsx)("img",{id:"box2",src:"../images/box2.svg",alt:""}),Object(l.jsx)("img",{id:"box1",src:"../images/box1.svg",alt:""}),Object(l.jsx)("div",{id:"logoContainer",children:Object(l.jsx)("div",{id:"logoLayer1",children:Object(l.jsx)("div",{id:"logoLayer2"})})})]})}),Object(l.jsx)("section",{onClick:r,className:"mobileMenu "+(n?"openMenu":""),children:Object(l.jsx)("i",{className:"fa fa-bars"})})]})};var d=function(e){return Object(s.useEffect)((function(){document.title="Draftbox Design / About"}),[]),Object(l.jsxs)("div",{className:"about",children:[Object(l.jsxs)("h3",{children:[Object(l.jsx)("img",{src:"../images/minibox.png",alt:"",style:{height:"25px",marginRight:"5px"}}),"\xa0About"]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{className:"fa fa-rocket"}),Object(l.jsx)("span",{style:{padding:"0 8px"},children:"stay tuned..."})]})]})};var x=function(e){return Object(s.useEffect)((function(){document.title="Draftbox Design / Contact"}),[]),Object(l.jsxs)("div",{className:"contact",children:[Object(l.jsxs)("h3",{children:[Object(l.jsx)("img",{src:"../images/minibox.png",alt:"",style:{height:"25px",marginRight:"5px"}}),"\xa0Contact"]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:Object(l.jsx)("i",{className:"fa fa-envelope"})}),Object(l.jsx)("a",{href:"mailto:draftboxdesign@gmail.com",children:"draftboxdesign@gmail.com"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:Object(l.jsx)("i",{className:"fa fa-facebook-square"})}),Object(l.jsx)("a",{href:"https://www.facebook.com/draftboxdesign",target:"_blank",rel:"noreferrer",children:"fb.com/draftboxdesign"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:Object(l.jsx)("i",{className:"fa fa-rocket"})}),Object(l.jsx)("span",{children:"more to come..."})]})]})};var h=function(e){var t=[];[1,2,3,4,5].forEach((function(e){t.push("house".concat(e,".jpg"))})),[1,2,3,4,5,6,7,8].forEach((function(e){t.push("building".concat(e,".jpg"))})),[1,2,3,4,5].forEach((function(e){t.push("port".concat(e,".jpg"))}));var c=Object(s.useState)(0),i=Object(o.a)(c,2),n=i[0],a=i[1],j=Object(s.useState)(!1),r=Object(o.a)(j,2),b=r[0],d=r[1],x=Object(s.useState)([t.length-1,0,1]),h=Object(o.a)(x,2),O=h[0],g=h[1];function f(e){g([0===e?t.length-1:e-1,e,e===t.length-1?0:e+1])}function m(){var e=n+1;e===t.length&&(e=0),d(!1),a(e),f(e)}return Object(s.useEffect)((function(){document.title="Draftbox Design / Porfolio";var e=setInterval((function(){b&&m()}),8e3);return function(){return clearInterval(e)}})),Object(l.jsxs)("div",{className:"portfolio",children:[Object(l.jsxs)("h3",{style:{zIndex:1},children:[Object(l.jsx)("img",{src:"../images/minibox.png",alt:"",style:{height:"25px",marginRight:"5px"}}),"\xa0Portfolio"]}),Object(l.jsxs)("div",{className:"imgPreview "+(b?"imgReady":""),children:[Object(l.jsxs)("div",{style:{zIndex:1},className:"imgNav",children:[Object(l.jsx)("div",{onClick:function(){var e=n-1;-1===e&&(e=t.length-1),d(!1),a(e),f(e)},children:Object(l.jsx)("i",{className:"fa fa-chevron-left"})}),Object(l.jsx)("div",{children:b?"":"loading..."}),Object(l.jsx)("div",{onClick:m,children:Object(l.jsx)("i",{className:"fa fa-chevron-right"})})]}),Object(l.jsx)("div",{className:"imgsToShow",children:O.map((function(e){return Object(l.jsx)("div",{style:{backgroundImage:"url(../portfolio/".concat(t[e],")")}},e)}))}),Object(l.jsx)("img",{style:{height:"10px",opacity:0},alt:"".concat(t[n]),src:"../portfolio/".concat(t[n]),onLoad:function(){d(!0)}})]})]})};var O=function(e){return Object(s.useEffect)((function(){document.title="Draftbox Design"}),[]),Object(l.jsxs)("div",{children:[Object(l.jsxs)("h3",{children:[Object(l.jsx)("img",{src:"../images/minibox.png",alt:"",style:{height:"25px",marginRight:"5px"}}),"\xa0Draftbox Design"]}),Object(l.jsxs)("div",{style:{paddingBottom:0},children:[Object(l.jsx)("span",{children:Object(l.jsx)("i",{className:"fa fa-user-circle"})}),Object(l.jsx)("span",{children:"Architect Raffiel Fetalvero "})]}),Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:Object(l.jsx)("i",{className:"fa fa-edit"})}),Object(l.jsx)("span",{children:"Architectural Design, Structural Design, Interior Design"})]}),Object(l.jsxs)("div",{style:{paddingBottom:0},children:[Object(l.jsx)("span",{children:Object(l.jsx)("i",{className:"fa fa-wrench"})}),Object(l.jsx)("span",{children:"Electrical, Plumbing, 3D Models "})]}),Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:Object(l.jsx)("i",{className:"fa fa-check-square"})}),Object(l.jsx)("span",{children:"Planner / Offlaner / Javachip Only "})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:Object(l.jsx)("i",{className:"fa fa-envelope"})}),Object(l.jsx)("a",{href:"mailto:draftboxdesign@gmail.com",children:"draftboxdesign@gmail.com"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:Object(l.jsx)("i",{className:"fa fa-facebook-square"})}),Object(l.jsx)("a",{href:"https://www.facebook.com/draftboxdesign",target:"_blank",rel:"noreferrer",children:"fb.com/draftboxdesign"})]}),Object(l.jsx)("div",{id:"imgContainer",style:{backgroundImage:"url(../images/bg-print.jpg)"},children:Object(l.jsx)("img",{src:"../images/bg-print.jpg",alt:"",style:{width:"100%",opacity:0}})})]})};var g=function(e){return Object(s.useEffect)((function(){document.title="Draftbox Design / Not Found"}),[]),Object(l.jsxs)("div",{className:"notfound",children:[Object(l.jsxs)("h3",{children:[Object(l.jsx)("img",{src:"../images/minibox.png",alt:"",style:{height:"25px",marginRight:"5px"}}),"\xa0Page Not Found"]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:Object(l.jsx)("i",{className:"fa fa-ban"})}),Object(l.jsx)("span",{children:"Error 404 - there's nothing in here."})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:Object(l.jsx)("i",{className:"fa fa-sitemap"})}),Object(l.jsxs)("span",{children:[Object(l.jsx)(j.b,{to:"/",children:"Home"})," \u2022 ",Object(l.jsx)(j.b,{to:"/portfolio",children:"Portfolio"})," \u2022"," ",Object(l.jsx)(j.b,{to:"/contact",children:"Contact"})," \u2022 ",Object(l.jsx)(j.b,{to:"/about",children:"About"})]})]})]})};var f=function(){return console.log("v1.03"),Object(l.jsx)(j.a,{path:"/",children:Object(l.jsx)(b,{children:Object(l.jsxs)(r.c,{children:[Object(l.jsx)(r.a,{exact:!0,path:"/portfolio",children:Object(l.jsx)(h,{})}),Object(l.jsx)(r.a,{exact:!0,path:"/contact",children:Object(l.jsx)(x,{})}),Object(l.jsx)(r.a,{exact:!0,path:"/about",children:Object(l.jsx)(d,{})}),Object(l.jsx)(r.a,{exact:!0,path:"/",children:Object(l.jsx)(O,{})}),Object(l.jsx)(r.a,{path:"*",children:Object(l.jsx)(g,{})})]})})})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,31)).then((function(t){var c=t.getCLS,s=t.getFID,i=t.getFCP,n=t.getLCP,a=t.getTTFB;c(e),s(e),i(e),n(e),a(e)}))};a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),m()}},[[30,1,2]]]);
//# sourceMappingURL=main.7fbc2e57.chunk.js.map