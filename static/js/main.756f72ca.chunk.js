(this["webpackJsonpnasa-api-hackathon"]=this["webpackJsonpnasa-api-hackathon"]||[]).push([[0],{41:function(e,t,a){},42:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(9),i=a.n(s),r=(a(41),a(8)),l=a(2),j=a(13),o=(a(42),a(35)),b=(a(43),a(0));function d(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"centre",children:Object(b.jsx)("h1",{children:e.image_heading})}),Object(b.jsx)(o.a,{children:Object(b.jsx)("img",{className:"img-fluid",src:e.image_src,alt:e.img_alt})}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"centre",children:Object(b.jsx)("h1",{children:e.informationTitle})})]})}function h(e){return Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)(r.b,{className:"navbar-brand",to:"/",children:e.title}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(b.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(r.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(r.b,{className:"nav-link",to:e.aboutLink,children:e.aboutText})})]})})]})})}d.defaultProps={image_heading:"Set The image by image_heading in the props",image_src:"Set the img src by image_src in the props",informationTitle:"Set the Title here by informationTitle from the props",img_alt:"Set the img alt by img_alt from the props"},h.defaultProps={title:"Set title here",aboutText:"About Text here",aboutLink:"/about"};var m=a(12),x=a.n(m);var u=function(){var e=Object(c.useState)({date:""}),t=Object(j.a)(e,2),a=t[0],s=t[1];return n.a.useEffect((function(){x.a.get("https://api.nasa.gov/planetary/apod?api_key=".concat("BaJdMCMCqaioVVTgQals11eQWDF1B5U3fTT1sYVZ")).then((function(e){s(e.data)}))}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{title:"Nasa Picture of the day",aboutText:"About us",aboutLink:"/about"}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(d,{image_heading:a.title,image_src:a.hdurl,img_alt:"Seen of the day",informationTitle:"Information about the Picture"}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"centre",children:Object(b.jsxs)("p",{children:["This picture was taken by ",Object(b.jsx)("b",{children:a.copyright})," on ",Object(b.jsx)("b",{children:function(e){var t=e.substring(0,4),a=e.substring(4,6),c=e.substring(6,8);return new Date(t,a-1,c).toDateString()}(a.date.replace("-",""))})]})}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"centre",children:Object(b.jsx)("h1",{children:"Explanation"})}),Object(b.jsxs)("div",{className:"col-md-3 box",children:[Object(b.jsx)("br",{}),Object(b.jsx)("b",{children:a.explanation}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{})]})]})};function O(){return Object(b.jsx)("h1",{children:"Hello This is my about"})}var g,p=a(34),v=!0;function f(){var e=Object(c.useState)("none"),t=Object(j.a)(e,2),a=t[0],n=t[1];return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("h1",{className:"centre",children:"Enter the search term"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter the search term here",id:"input"})]}),Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){console.log("Once more");var e=document.getElementById("input").value;x.a.get("https://images-api.nasa.gov/search?page=1&q=".concat(e)).then((function(t){if(n(""),v){console.log(t),g!==e?i.a.unmountComponentAtNode(document.getElementById("data_div")):g=e;var a=Object(b.jsx)("div",{className:"row",children:t.data.collection.items.map((function(e){try{return Object(b.jsx)("div",{className:"col-lg-4 d-flex align-items-stretch",children:Object(b.jsxs)("div",{className:"card",style:{width:"18rem"},children:[Object(b.jsx)("img",{src:e.links[0].href,className:"card-img-top",alt:"Search Result"}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h5",{className:"card-title",children:e.data[0].title}),Object(b.jsx)("p",{className:"card-text",children:Object(b.jsx)("b",{children:e.data[0].description})})]}),Object(b.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(b.jsxs)("li",{className:"list-group-item",children:["Taken on - ",Object(b.jsx)("b",{children:e.data[0].date_created})]},0),Object(b.jsxs)("li",{className:"list-group-item",children:["Center -",Object(b.jsx)("b",{children:e.data[0].center})]},1),Object(b.jsxs)("li",{className:"list-group-item",children:["NASA Id - ",e.data[0].nasa_id]},2)]}),Object(b.jsx)("div",{className:"card-body",children:Object(b.jsxs)(r.a,{children:[Object(b.jsx)(r.b,{to:"/search",className:"card-link",children:"Card link"}),Object(b.jsx)(r.b,{to:"#",className:"card-link",children:"Another link"})]})})]})})}catch(t){console.log("Done")}}))});i.a.render(a,document.getElementById("data_div"));try{var c,s=Object(p.a)(t.data.collection.links);try{for(s.s();!(c=s.n()).done;){if("next"===c.value.rel)return v=!0,void 1}}catch(l){s.e(l)}finally{s.f()}}catch(j){v=!1}v=!1}}))},children:"Search for it"}),Object(b.jsxs)("div",{style:{textAlign:"center",display:a},children:[Object(b.jsx)("div",{id:"data_div"}),Object(b.jsxs)("div",{style:{textAlign:"center"},children:[Object(b.jsx)("button",{id:"more",className:"btn btn-primary",style:{display:"none"},children:"Load more"}),Object(b.jsx)("h3",{id:"end",style:{display:"none"},children:"Sorry There are no more results"})]})]})]})})}var N=function(){return Object(b.jsx)(r.a,{children:Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{path:"/",exact:!0,component:u}),Object(b.jsx)(l.a,{path:"/about",exact:!0,component:O}),Object(b.jsx)(l.a,{path:"/search",exact:!0,component:f})]})})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,75)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))};i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root")),y()}},[[73,1,2]]]);
//# sourceMappingURL=main.756f72ca.chunk.js.map