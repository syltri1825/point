import{a as e,j as n,L as t,F as i}from"./app.504b6824.js";import{L as l}from"./Logo.5c1cdee1.js";function c({type:s="submit",className:a="",processing:r,children:d}){return e("button",{type:s,className:`inline-flex items-center px-4 py-2 bg-gray-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150 ${r&&"opacity-25"} `+a,disabled:r,children:d})}function g({auth:s,children:a,rule:r}){if(r=="a")return n("div",{className:"min-h-screen pt-6 sm:pt-0 bg--guest",children:[e("div",{className:"you--cent",children:e(t,{href:"/",children:e(l,{className:"text-gray-500 asl--style"})})}),e("div",{className:"fixed top-0 right-10 px-6 py-4 sm:block",children:s.user?e(t,{href:route("dashboard"),className:"bg--color text-sm text-gray-700 btn btn-lg btn-light dark:text-gray-500 underline",children:"Dashboard"}):e(i,{children:e(t,{href:route("register"),className:"bg--color text-sm text-gray-700 btn btn-lg btn-warning dark:text-gray-500 underline",children:"Register"})})}),e("div",{className:"w-full sm:max-w-md mt-6 px-6 py-5 bg-white pos shadow-md overflow-hidden sm:rounded-lg bg--purple",children:a})]});if(r=="b")return n("div",{className:"min-h-screen pt-6 sm:pt-0 bg--guest",children:[e("div",{className:"you--cent",children:e(t,{href:"/",children:e(l,{className:"text-gray-500 asl--style"})})}),e("div",{className:"fixed top-0 right-10 px-6 py-4 sm:block",children:s.user?e(t,{href:route("dashboard"),className:"bg--color text-sm text-gray-700 btn btn-lg btn-light dark:text-gray-500 underline",children:"Dashboard"}):e(i,{children:e(t,{href:route("login"),className:"bg--color text-sm text-gray-700 btn btn-lg btn-light dark:text-gray-500 underline",children:"Log In"})})}),e("div",{className:"w-full sm:max-w-md mt-6 px-6 py-5 bg-white pos shadow-md overflow-hidden sm:rounded-lg bg--purple",children:a})]})}export{c as B,g as G};
