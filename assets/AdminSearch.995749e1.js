import{j as t,a as e,H as c}from"./app.504b6824.js";import{P as d}from"./Footer.a3af2d9f.js";import{T as i}from"./Title.a7273414.js";import{S as m}from"./SimpleLayouts.6c9aeb54.js";import{N as s}from"./NavLink.2449ef08.js";import{B as r}from"./BackLink.490ea384.js";import"./Logo.5c1cdee1.js";import"./Input.66cd63e1.js";import"./Dropdown.875845db.js";import"./LinkBack.986295e9.js";function k(a){const o=a.free,n=a.info;return a.linkee,o==!0?t(m,{auth:a.auth,errors:a.errors,header:e("h2",{className:"font-semibold",children:"Search Results"}),children:[e(c,{title:"Search Result"}),e(i,{intituleTitle:e("h3",{children:"Result of Search"})}),e("h1",{className:"bg-war text-center",children:a.info}),e("div",{className:"col-md-12 text-left backlink--style",children:e(r,{backLink:route("dashboard")})}),e("div",{className:"col-md-12",children:t("div",{className:"row",children:[a.smarttv.map(l=>e("div",{className:"col-md-6 px-5 py-3 text--black text-left",children:e(s,{className:"col-md-12",href:`/dashboard/details/smarttv/${l.id}`,children:t("div",{style:{borderRadius:"10px 10px 0 0",maxWidth:"500px",maxHeight:"400px",marginBottom:"100px"},className:"col-md-12 p-3 bg-warn",children:[e("span",{className:"col-md-12 mb-3 rond--span",children:e("strong",{className:"rond--comp",children:l.id})}),t("div",{className:"col-md-12 des--style",children:[e("img",{src:`http://localhost:8000/${l.article}`,className:"form--img mb-3 mt-3 im--style"}),e("div",{className:"col-md-12 mt-3 text-left",children:e("h6",{className:"col-md-12 mb-3 mt-3 pl-3",children:l.title})})]})]})})},l.id)),a.smartphone.map(l=>e("div",{className:"col-md-6 px-5 py-3 text--black text-left",children:e(s,{className:"col-md-12",href:`/dashboard/details/smartphone/${l.id}`,children:t("div",{style:{borderRadius:"10px 10px 0 0",maxWidth:"500px",maxHeight:"400px",marginBottom:"100px"},className:"col-md-12 p-3 bg-warn",children:[e("span",{className:"col-md-12 mb-3 rond--span",children:e("strong",{className:"rond--comp",children:l.id})}),t("div",{className:"col-md-12 des--style",children:[e("img",{src:`http://localhost:8000/${l.article}`,className:"form--img mb-3 mt-3 im--style"}),e("div",{className:"col-md-12 mt-3 text-left",children:e("h6",{className:"col-md-12 mb-3 mt-3 pl-3",children:l.title})})]})]})})},l.id)),a.produit.map(l=>e("div",{className:"col-md-6 px-5 py-3 text--black text-left",children:e(s,{className:"col-md-12",href:`/dashboard/details/produit/${l.id}`,children:t("div",{style:{borderRadius:"10px 10px 0 0",maxWidth:"500px",maxHeight:"400px",marginBottom:"100px"},className:"col-md-12 p-3 bg-warn",children:[e("span",{className:"col-md-12 mb-3 rond--span",children:e("strong",{className:"rond--comp",children:l.id})}),t("div",{className:"col-md-12 des--style",children:[e("img",{src:`http://localhost:8000/${l.article}`,className:"form--img mb-3 mt-3 im--style"}),e("div",{className:"col-md-12 mt-3 text-left",children:e("h6",{className:"col-md-12 mb-3 mt-3 pl-3",children:l.title})})]})]})})},l.id)),a.computer.map(l=>e("div",{className:"col-md-6 px-5 py-3 text--black text-left",children:e(s,{className:"col-md-12",href:`/dashboard/details/computer/${l.id}`,children:t("div",{style:{borderRadius:"10px 10px 0 0",maxWidth:"500px",maxHeight:"400px",marginBottom:"100px"},className:"col-md-12 p-3 bg-warn",children:[e("span",{className:"col-md-12 mb-3 rond--span",children:e("strong",{className:"rond--comp",children:l.id})}),t("div",{className:"col-md-12 des--style",children:[e("img",{src:`http://localhost:8000/${l.article}`,className:"form--img mb-3 mt-3 im--style"}),e("div",{className:"col-md-12 mt-3 text-left",children:e("h6",{className:"col-md-12 mb-3 mt-3 pl-3",children:l.title})})]})]})})},l.id))]})}),e(d,{})]}):t(m,{auth:a.auth,errors:a.errors,header:e("h2",{className:"font-semibold",children:"Search Results"}),children:[e(c,{title:"Search Result"}),e(i,{intituleTitle:e("h3",{children:"Result of Search"})}),e("div",{className:"col-md-12 text-left backlink--style",children:e(r,{backLink:route("dashboard")})}),e("div",{className:"col-md-12",children:e("h1",{className:"m-5 bg-wa text-center",children:n})}),e(d,{})]})}export{k as default};
