import{r as a,j as s,a as e,H as d,d as o}from"./app.504b6824.js";import{S as c}from"./SimpleLayouts.6c9aeb54.js";import{B as m}from"./BackLink.490ea384.js";import{T as h}from"./Title.a7273414.js";import"./Logo.5c1cdee1.js";import"./Input.66cd63e1.js";import"./Dropdown.875845db.js";import"./LinkBack.986295e9.js";function w(r){const[t,N]=a.exports.useState({nGrid:"n-grid",nGrid1:"n-grid1",nGrid2:"n-grid2",nGrid3:"n-grid3",nFlex:"n-flex",nBlock:"n-block"}),[l,u]=a.exports.useState(),n=i=>{o.Inertia.delete(`/dashboard/delete/ask/${i}`)};return s(c,{auth:r.auth,error:r.error,header:e("h2",{className:"font-semibold",children:"News Order"}),activeNew:route().current("news"),lengthNew:l,children:[e(d,{title:"News"}),e(h,{intituleTitle:e("h3",{children:"Notification of mail received and new report"})}),e("div",{className:"col-md-12 text-left backlink--style",children:e(m,{backLink:route("dashboard")})}),s("div",{className:t.nGrid,children:[e("div",{className:t.nGrid1}),e("div",{className:t.nGrid2,children:e("div",{className:t.nFlex,children:r.ask.map(i=>s("div",{className:t.nBlock,children:[e("h1",{style:{textAlign:"left"},children:i.id}),e("p",{style:{textAlign:"left"},dangerouslySetInnerHTML:{__html:i.message}}),e("div",{className:"col-md-12 text-left mb-3",children:e("button",{className:"button-a4",onClick:()=>n(i.id),children:"Delete"})})]},i.id))})}),e("div",{className:t.nGrid3})]})]})}export{w as default};
