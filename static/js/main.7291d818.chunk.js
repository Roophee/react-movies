(this["webpackJsonponline-cinema"]=this["webpackJsonponline-cinema"]||[]).push([[0],{10:function(e,c,t){},12:function(e,c,t){"use strict";t.r(c);var s=t(1),a=t.n(s),n=t(4),i=t.n(n),r=(t(10),t(0)),l=function(e){return Object(r.jsx)("nav",{className:"green darken-3",children:Object(r.jsxs)("div",{className:"nav-wrapper",children:[Object(r.jsx)("a",{href:"#",className:"brand-logo",children:"React Movies"}),Object(r.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://github.com/Roophee",children:"GitHub"})})})]})})},j=function(e){return Object(r.jsxs)("footer",{className:"page-footer green darken-3",children:[Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col l6 s12",children:Object(r.jsx)("h5",{className:"white-text",children:"React Movies"})}),Object(r.jsxs)("div",{className:"col l4 offset-l2 s12",children:[Object(r.jsx)("h5",{className:"white-text",children:"Links"}),Object(r.jsx)("ul",{children:Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"grey-text text-lighten-3",href:"https://github.com/Roophee/react-movies",children:"Code Base"})})})]})]})}),Object(r.jsx)("div",{className:"footer-copyright",children:Object(r.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(r.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"More Links"})]})})]})},o=t(2),d=t(5),h=function(e){var c=e.Title,t=e.Year,s=e.Poster,a=(e.imdbID,e.Type);return Object(r.jsxs)("div",{className:"card movie",children:[Object(r.jsx)("div",{className:"card-image waves-effect waves-block waves-light",children:"N/A"===s?Object(r.jsx)("img",{className:"activator",src:"https://via.placeholder.com/300x420?text=".concat(c)}):Object(r.jsx)("img",{src:s})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsx)("span",{className:"card-title activator grey-text text-darken-4",children:c}),Object(r.jsx)("br",{}),Object(r.jsxs)("p",{children:[t," ",Object(r.jsx)("span",{className:"right",children:a})]})]})]})},b=function(e){var c=e.movies,t=void 0===c?[]:c;return Object(r.jsx)("div",{className:"movies",children:t.length?t.map((function(e){return Object(r.jsx)(h,Object(d.a)({},e),e.imdbID)})):Object(r.jsx)("h3",{children:"Nothing found"})})},x=function(e){return Object(r.jsx)("div",{className:"preloader",children:Object(r.jsx)("div",{className:"preloader-wrapper big active",children:Object(r.jsxs)("div",{className:"spinner-layer spinner-green-only",children:[Object(r.jsx)("div",{className:"circle-clipper left ",children:Object(r.jsx)("div",{className:"circle"})}),Object(r.jsx)("div",{className:"gap-patch",children:Object(r.jsx)("div",{className:"circle"})}),Object(r.jsx)("div",{className:"circle-clipper right",children:Object(r.jsx)("div",{className:"circle "})})]})})})},O=function(e){var c=e.searchMovies,t=void 0===c?Function.prototype:c,a=Object(s.useState)(""),n=Object(o.a)(a,2),i=n[0],l=n[1],j=Object(s.useState)("all"),d=Object(o.a)(j,2),h=d[0],b=d[1],x=function(e){b((function(){return e.target.dataset.type})),t(i,e.target.dataset.type)};return Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"input-field ",children:[Object(r.jsx)("input",{className:"validate",id:"email_inline",placeholder:"Search",type:"search",value:i,onChange:function(e){l(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&t(i,h)}}),Object(r.jsx)("button",{className:"btn search-btn",onClick:function(){t(i,h)},children:"Search"})]}),Object(r.jsxs)("div",{className:"",children:[Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"all",onChange:x,checked:"all"===h}),Object(r.jsx)("span",{children:"All"})]}),Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"movie",onChange:x,checked:"movie"===h}),Object(r.jsx)("span",{children:"Movies only"})]}),Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"series",onChange:x,checked:"series"===h}),Object(r.jsx)("span",{children:"Series only"})]})]})]})},m="480d2bb6",p=function(){var e=Object(s.useState)([]),c=Object(o.a)(e,2),t=c[0],a=c[1],n=Object(s.useState)(!0),i=Object(o.a)(n,2),l=i[0],j=i[1];Object(s.useEffect)((function(){return fetch("https://www.omdbapi.com/?apikey=".concat(m,"&s=road")).then((function(e){return e.json()})).then((function(e){a(e.Search),j(!1)})).catch((function(e){console.log(e),j(!1)}))}),[]);return Object(r.jsxs)("main",{className:"container content",children:[Object(r.jsx)(O,{searchMovies:function(e){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";j(!0),fetch("https://www.omdbapi.com/?apikey=".concat(m,"&s=").concat(e).concat("all"!==c?"&type=".concat(c):"")).then((function(e){return e.json()})).then((function(e){a(e.Search),j(!1)})).catch((function(e){console.log(e),j(!1)}))}}),l?Object(r.jsx)(x,{}):Object(r.jsx)(b,{movies:t})]})};var u=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(l,{}),Object(r.jsx)(p,{}),Object(r.jsx)(j,{})]})};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(u,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.7291d818.chunk.js.map