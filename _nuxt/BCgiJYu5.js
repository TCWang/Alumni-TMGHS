import{_ as f,o as s,c as t,a as e,g,F as u,f as c,t as p,a8 as h,b as k,a7 as x}from"./Cx_i7Csu.js";const w={data(){return{mobileMenuOpen:!1,menuItems:[{name:"1964同學會",open:!1,submenu:[{name:"感言與後記",link:"/album/alb1"},{name:"校園回顧",link:"/album/alb2"},{name:"畢業相冊",link:"/album/alb3"}]},{name:"60週年重聚會",open:!1,submenu:[{name:"團體群像",link:"/anniversary/ann1"},{name:"班級個照",link:"/anniversary/ann2"},{name:"工作人員",link:"/anniversary/ann3"},{name:"表演節目",link:"/anniversary/ann4"}]},{name:"班級專刊",open:!1,submenu:[{name:"1964級1-5班",link:"/class/class1"},{name:"1964級6-10班",link:"/class/class2"},{name:"1964級11-17班",link:"/class/class3"},{name:"總召及執行長專輯",link:"/class/class4"}]},{name:"個人聚會回憶",open:!1,submenu:[{name:"個人沙龍",link:"/personal/per1"},{name:"大龍蝦餐廳",link:"/personal/per2"},{name:"美食回憶",link:"/personal/per3"}]}]}},methods:{toggleDropdown(l){this.menuItems.forEach((n,a)=>{a===l?n.open=!n.open:n.open=!1})},toggleMobileMenu(){this.mobileMenuOpen=!this.mobileMenuOpen}}},_={class:"bg-indigo-800 text-white"},v={class:"container mx-auto px-4 md:flex items-center gap-6"},y={class:"flex items-center justify-between md:w-auto w-full"},M={class:"md:hidden flex items-center"},C=["onClick"],B={class:"pointer-events-none"},O={key:0,class:"dropdown-menu absolute bg-indigo-500 text-white rounded-b-lg pb-2 w-64 z-10"},j=["href"];function I(l,n,a,z,r,i){return s(),t("nav",_,[e("div",v,[e("div",y,[n[2]||(n[2]=e("a",{href:"/",class:"flex items-center py-2 px-1 text-white flex-1"},[e("span",{class:"font-bold text-xl text-yellow-400"},"市女中")],-1)),e("div",M,[e("button",{onClick:n[0]||(n[0]=(...o)=>i.toggleMobileMenu&&i.toggleMobileMenu(...o)),class:"mobile-menu-button"},n[1]||(n[1]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("title",null,"bars-3-bottom-left"),e("g",{fill:"none"},[e("path",{d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})])],-1)]))])]),e("div",{class:g([{hidden:!r.mobileMenuOpen,block:r.mobileMenuOpen,"md:flex":!0},"md:flex-row flex-col items-center justify-start md:space-x-1 navigation-menu pb-3 md:pb-0"])},[(s(!0),t(u,null,c(r.menuItems,(o,d)=>(s(),t("div",{class:"relative",key:d},[e("button",{onClick:m=>i.toggleDropdown(d),class:"dropdown-toggle py-2 px-3 hover:bg-indigo-500 flex items-center gap-2 rounded"},[e("span",B,p(o.name),1),n[3]||(n[3]=e("svg",{class:"w-3 h-3 pointer-events-none",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("title",null,"chevron-down"),e("g",{fill:"none"},[e("path",{d:"M19.5 8.25l-7.5 7.5-7.5-7.5",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})])],-1))],8,C),o.open?(s(),t("div",O,[(s(!0),t(u,null,c(o.submenu,(m,b)=>(s(),t("a",{key:b,href:m.link,class:"block pl-4 md:pl-4 pr-2 py-2 hover:bg-indigo-800 text-white"},p(m.name),9,j))),128))])):h("",!0)]))),128)),n[4]||(n[4]=e("a",{class:"py-2 px-3 block text-white",href:"/personal"},"同學錄",-1))],2)])])}const N=f(w,[["render",I],["__scopeId","data-v-263f3ffb"]]),D={},V={class:"container mx-auto max-w-8xl p-2"};function $(l,n){const a=N;return s(),t("div",V,[k(a),x(l.$slots,"default")])}const F=f(D,[["render",$]]);export{F as default};
