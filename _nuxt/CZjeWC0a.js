import{_ as c,r as g,o as t,c as l,a as s,F as i,f as m,n as f,g as v,u as j,d as b,b as p}from"./DztnRDOa.js";const S={class:"relative w-full overflow-hidden"},G=["src"],M={class:"absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"},h={__name:"Carousel1",setup(_){const o=g(["/images/IMG9/S_011.jpg","/images/IMG9/S_012.jpg","/images/IMG9/S_021.jpg","/images/IMG9/S_022.jpg","/images/IMG9/S_031.jpg","/images/IMG9/S_032.jpg","/images/IMG9/S_041.jpg","/images/IMG9/S_042.jpg","/images/IMG9/S_051.jpg","/images/IMG9/S_052.jpg","/images/IMG9/S_061.jpg","/images/IMG9/S_062.jpg","/images/IMG9/S_071.jpg","/images/IMG9/S_072.jpg","/images/IMG9/S_081.jpg","/images/IMG9/S_082.jpg","/images/IMG9/S_091.jpg","/images/IMG9/S_092.jpg","/images/IMG9/S_101.jpg","/images/IMG9/S_102.jpg"]),e=g(0),n=()=>{e.value=(e.value+1)%o.value.length},r=()=>{e.value=e.value===0?o.value.length-1:e.value-1};return(d,I)=>(t(),l("div",S,[s("div",{class:"flex transition-transform ease-out duration-500",style:f({transform:`translateX(-${e.value*100}%)`})},[(t(!0),l(i,null,m(o.value,(u,a)=>(t(),l("div",{key:a,class:"min-w-full h-auto"},[s("img",{src:u,alt:"Carousel Image",class:"w-full h-full object-cover"},null,8,G)]))),128))],4),s("button",{onClick:r,class:"absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"}," < "),s("button",{onClick:n,class:"absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"}," > "),s("div",M,[(t(!0),l(i,null,m(o.value,(u,a)=>(t(),l("span",{key:a,class:v([{"bg-blue-500":a===e.value,"bg-gray-400":a!==e.value},"block w-2 h-2 rounded-full"])},null,2))),128))])]))}},x=c(h,[["__scopeId","data-v-5b3fe5b4"]]),y={class:"relative w-full overflow-hidden"},w=["src"],k={class:"absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"},C={__name:"Carousel2",setup(_){const o=g(["/images/IMG9/S_111.jpg","/images/IMG9/S_112.jpg","/images/IMG9/S_121.jpg","/images/IMG9/S_122.jpg","/images/IMG9/S_131.jpg","/images/IMG9/S_132.jpg","/images/IMG9/S_141.jpg","/images/IMG9/S_142.jpg","/images/IMG9/S_151.jpg","/images/IMG9/S_152.jpg","/images/IMG9/S_161.jpg","/images/IMG9/S_162.jpg","/images/IMG9/S_171.jpg","/images/IMG9/S_172.jpg"]),e=g(0),n=()=>{e.value=(e.value+1)%o.value.length},r=()=>{e.value=e.value===0?o.value.length-1:e.value-1};return(d,I)=>(t(),l("div",y,[s("div",{class:"flex transition-transform ease-out duration-500",style:f({transform:`translateX(-${e.value*100}%)`})},[(t(!0),l(i,null,m(o.value,(u,a)=>(t(),l("div",{key:a,class:"min-w-full h-auto"},[s("img",{src:u,alt:"Carousel Image",class:"w-full h-full object-cover"},null,8,w)]))),128))],4),s("button",{onClick:r,class:"absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"}," < "),s("button",{onClick:n,class:"absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"}," > "),s("div",k,[(t(!0),l(i,null,m(o.value,(u,a)=>(t(),l("span",{key:a,class:v([{"bg-blue-500":a===e.value,"bg-gray-400":a!==e.value},"block w-2 h-2 rounded-full"])},null,2))),128))])]))}},$=c(C,[["__scopeId","data-v-02c4e3a8"]]),B={class:"container w-full max-w-full columns-1 md:columns-2 prose lg:prose-base prose-h2:my-1 prose-h2:text-lg prose-h3:my-1 prose-h3:text-base prose-img:w-full"},V={__name:"alb3",setup(_){return j({title:"市女中 - 畢業電子相冊"}),(o,e)=>{const n=x,r=$;return t(),l("div",B,[e[0]||(e[0]=s("h2",null,"1964市女中 - 畢業電子相冊",-1)),e[1]||(e[1]=b(" 請點選 相片中的左右鍵 輪播相片 ")),e[2]||(e[2]=s("h3",null,"1-10 班相冊",-1)),p(n),e[3]||(e[3]=s("br",null,null,-1)),e[4]||(e[4]=s("h3",null,"11 - 17 班相冊",-1)),p(r)])}}};export{V as default};
