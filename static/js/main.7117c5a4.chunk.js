(this["webpackJsonpreact-showcase"]=this["webpackJsonpreact-showcase"]||[]).push([[0],{19:function(e,t,a){e.exports=a(33)},24:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),c=a.n(r),o=a(3),i=(a(24),a(1)),m=function(){return l.a.createElement("div",{className:"navigation"},l.a.createElement("ul",null,l.a.createElement(o.b,{to:"/",exact:!0,activeClassName:"nav-active",className:"hover"},l.a.createElement("li",null,"accueil")),l.a.createElement("li",{className:"nav-portfolio"},"portfolio",l.a.createElement("ul",{className:"nav-projects"},l.a.createElement(o.b,{to:"/projet-1",activeClassName:"nav-active",className:"hover"},l.a.createElement("li",null,"projet 1")),l.a.createElement(o.b,{to:"/projet-2",activeClassName:"nav-active",className:"hover"},l.a.createElement("li",null,"projet 2")),l.a.createElement(o.b,{to:"/projet-3",activeClassName:"nav-active",className:"hover"},l.a.createElement("li",null,"projet 3")),l.a.createElement(o.b,{to:"/projet-4",activeClassName:"nav-active",className:"hover"},l.a.createElement("li",null,"projet 4")),l.a.createElement(o.b,{to:"/projet-5",activeClassName:"nav-active",className:"hover"},l.a.createElement("li",null,"projet 5")),l.a.createElement(o.b,{to:"/projet-6",activeClassName:"nav-active",className:"hover"},l.a.createElement("li",null,"projet 6")),l.a.createElement(o.b,{to:"/projet-7",activeClassName:"nav-active",className:"hover"},l.a.createElement("li",null,"projet 7")))),l.a.createElement(o.b,{to:"/contact",activeClassName:"nav-active",className:"hover"},l.a.createElement("li",null,"contact"))))},s=function(){var e=function(){document.querySelectorAll(".social-network a").forEach((function(e){console.log(e),e.addEventListener("mouseover",(function(t){var a=t.offsetX-20,n=t.offsetY-13;e.style.transform="translate(".concat(a,"px, ").concat(n,"px)")})),e.addEventListener("mouseout",(function(){e.style.transform=""}))}))};return l.a.createElement("div",{className:"social-network"},l.a.createElement("ul",{className:"content"},l.a.createElement("a",{href:"https://www.facebook.com",target:"_blank",rel:"noopener noreferrer",className:"hover",onMouseOver:e},l.a.createElement("li",null,l.a.createElement("i",{className:"fab fa-facebook-f"}))),l.a.createElement("a",{href:"https://www.twitter.com",target:"_blank",rel:"noopener noreferrer",className:"hover",onMouseOver:e},l.a.createElement("li",null,l.a.createElement("i",{className:"fab fa-twitter"}))),l.a.createElement("a",{href:"https://www.instagram.com",target:"_blank",rel:"noopener noreferrer",className:"hover",onMouseOver:e},l.a.createElement("li",null,l.a.createElement("i",{className:"fab fa-instagram"})))))},u=function(e){return l.a.createElement("div",{className:"scroll-bottom"},l.a.createElement("div",{className:"sb-main"},e.left&&l.a.createElement(o.b,{to:e.left,className:"left hover"},l.a.createElement("span",null,"\u276c")),l.a.createElement("p",{className:"center"},"scroll"),e.right&&l.a.createElement(o.b,{to:e.right,className:"right hover"},l.a.createElement("span",null,"\u276d"))))},p=function(){var e=["Laravel","Full-stack","Nodejs","backend"],t=0,a=0;return Object(n.useEffect)((function(){var n=document.getElementById("text-target");!function l(){setTimeout((function(){t>=e.length?(t=0,a=0,l()):a<e[t].length?(!function(){var l=document.createElement("span");n.appendChild(l),l.classList.add("letter"),l.style.opacity="0",l.style.animation="anim 5s ease forwards",l.textContent=e[t][a],setTimeout((function(){l.remove()}),2e3)}(),a++,l()):(a=0,t++,setTimeout((function(){l()}),2e3))}),80)}()}),[]),l.a.createElement("span",{className:"dynamic-text"},l.a.createElement("span",{className:"simply"},"d\xe9veloppeur"),l.a.createElement("span",{id:"text-target"}))},E=function(){return Object(n.useEffect)((function(){window.addEventListener("mousemove",(function(e){document.querySelector(".cursor").style.top=e.pageY+"px",document.querySelector(".cursor").style.left=e.pageX+"px"}));var e=function(){document.querySelector(".cursor").classList.add("hovered")},t=function(){document.querySelector(".cursor").style.transition=".3s ease-out",document.querySelector(".cursor").classList.remove("hovered")};document.querySelectorAll(".hover").forEach((function(a){a.addEventListener("mouseover",e),a.addEventListener("mouseleave",t)}))}),[]),l.a.createElement("span",{className:"cursor"})},d=a(7),v=function(){return l.a.createElement("main",null,l.a.createElement(E,null),l.a.createElement(d.b.div,{className:"home",initial:"initial",animate:"visible",exit:"exit",variants:{initial:{opacity:0,transition:{duration:.5},x:100},visible:{opacity:1,x:0},exit:{opacity:0,transition:{duration:.3},x:-100}}},l.a.createElement(m,null),l.a.createElement(s,null),l.a.createElement("div",{className:"home-main"},l.a.createElement("div",{className:"main-content"},l.a.createElement(d.b.h1,{drag:!0,onDragEnd:!0,dragConstraints:{left:-250,right:950,top:-200,bottom:250}},"Rodrigue Aime"),l.a.createElement(d.b.h2,{drag:!0,onDragEnd:!0,dragConstraints:{left:-250,right:1250,top:-200,bottom:250}},l.a.createElement(p,null)))),l.a.createElement(u,{right:"/projet-1"})))},g=function(){return l.a.createElement("span",{className:"logo"},"RA")},f=a(8),h=[{id:1,title:"Le-CoCon-Nayki",date:"2021-2022",languages:["HTML-CSS-Javascript","Laravel","Bootstrap-Jquery"],infos:"application de gestion des caves et meubl\xe9s.",img:"./assets/img/lecoconnaykie.PNG",link:"http://www.google.com"},{id:2,title:"Gescom",date:"2023",languages:["API Rest","Laravel","Vuejs"],infos:"Application de Gestion Commerciale cas de laquintinie.",img:"./assets/img/app-laquintinie.PNG",link:"http://www.google.com"},{id:3,title:"E-commerce",date:"2022",languages:["API Restfull","Laravel","Vuejs"],infos:"Application de E-commerce.",img:"./assets/img/ecommerce.PNG",link:"http://www.google.com"},{id:4,title:"Marvel Quiz",date:"2021",languages:["API rest","Laravel","Reactjs"],infos:"Application Quiz Question a choix Multiple.",img:"./assets/img/projet-marvel-quiz.PNG",link:"http://www.google.com"},{id:5,title:"Nat-E-Learning",date:"2022",languages:["HTML-CSS-Javscript","Laravel-PHP","Bootstrap"],infos:"Application E-learning.",img:"./assets/img/e-Learning.PNG",link:"http://www.google.com"},{id:6,title:"Ecole primaire KE",date:"2020",languages:["HTML-CSS-Javscript","PHP"],infos:"Application Gestion des inscriptions d'une ecole Primaire.",img:"./assets/img/ecole.PNG",link:"http://www.google.com"},{id:7,title:"Reseau Sociaux",date:"2020",languages:["Reactjs","Nodejs","css/sass"],infos:"Site web de r\xe9seau sociaux.",img:"./assets/img/reseau.PNG",link:"http://www.google.com"}],N=function(e){var t=Object(n.useState)(h),a=Object(f.a)(t,1)[0][e.projectNumber],r=Math.floor(200*Math.random()+700)+"px",c=Math.floor(200*Math.random()+150)+"px",o="scale("+(Math.random()+.7)+")",i=Math.random()>.4?1:-1,m={initial:{opacity:0,x:350*Math.random()*i,y:120*Math.random()*i},visible:{opacity:1,x:0,y:0}};return l.a.createElement(d.b.div,{className:"project-main",initial:"initial",animate:"visible",exit:"exit",transition:{ease:[.03,.87,.73,.9],duration:.6},variants:{initial:{opacity:0,transition:{duration:.5},x:200},visible:{opacity:1,x:0},exit:{opacity:.4,transition:{duration:.35},x:-800}}},l.a.createElement("div",{className:"project-content"},l.a.createElement("h1",null,a.title),l.a.createElement("p",null,a.date),l.a.createElement("ul",{className:"languages"},a.languages.map((function(e){return l.a.createElement("li",{key:e},e)})))),l.a.createElement(d.b.div,{className:"img-content",initial:"initial",animate:"visible",variants:m,transition:{duration:1.2}},l.a.createElement("div",{className:"img-container hover"},l.a.createElement("span",null,l.a.createElement("h3",null,a.title),l.a.createElement("p",null,a.infos)),l.a.createElement("img",{src:a.img,alt:a.title,className:"img"})),l.a.createElement("div",{className:"button-container"},l.a.createElement("a",{href:a.link,target:"_blank",rel:"noopener noreferrer",className:"hover"},l.a.createElement("span",{className:"button"},"voir le site")))),l.a.createElement("span",{className:"random-circle",style:{left:r,top:c,transform:o}}))},b=function(){return l.a.createElement("main",null,l.a.createElement(E,null),l.a.createElement("div",{className:"project"},l.a.createElement(m,null),l.a.createElement(g,null),l.a.createElement(N,{projectNumber:0}),l.a.createElement(u,{left:"/",right:"/projet-2"})))},j=function(){return l.a.createElement("main",null,l.a.createElement(E,null),l.a.createElement("div",{className:"project"},l.a.createElement(m,null),l.a.createElement(g,null),l.a.createElement(N,{projectNumber:1}),l.a.createElement(u,{left:"/projet-1",right:"/projet-3"})))},y=function(){return l.a.createElement("main",null,l.a.createElement(E,null),l.a.createElement("div",{className:"project"},l.a.createElement(m,null),l.a.createElement(g,null),l.a.createElement(N,{projectNumber:2}),l.a.createElement(u,{left:"/projet-2",right:"/projet-4"})))},w=function(){return l.a.createElement("main",null,l.a.createElement(E,null),l.a.createElement("div",{className:"project"},l.a.createElement(m,null),l.a.createElement(g,null),l.a.createElement(N,{projectNumber:3}),l.a.createElement(u,{left:"/projet-3",right:"/projet-5"})))},x=function(){return l.a.createElement("main",null,l.a.createElement(E,null),l.a.createElement("div",{className:"project"},l.a.createElement(m,null),l.a.createElement(g,null),l.a.createElement(N,{projectNumber:4}),l.a.createElement(u,{left:"/projet-4",right:"/projet-6"})))},k=function(){return l.a.createElement("main",null,l.a.createElement(E,null),l.a.createElement("div",{className:"project"},l.a.createElement(m,null),l.a.createElement(g,null),l.a.createElement(N,{projectNumber:5}),l.a.createElement(u,{left:"/projet-5",right:"/projet-7"})))},L=function(){return l.a.createElement("main",null,l.a.createElement(E,null),l.a.createElement("div",{className:"project"},l.a.createElement(m,null),l.a.createElement(g,null),l.a.createElement(N,{projectNumber:6}),l.a.createElement(u,{left:"/projet-6",right:"/contact"})))},C=function(){var e=Object(n.useState)(""),t=Object(f.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),o=Object(f.a)(c,2),i=o[0],m=o[1],s=Object(n.useState)(""),u=Object(f.a)(s,2),p=u[0],E=u[1],d=Object(n.useState)(""),v=Object(f.a)(d,2),g=v[0],h=v[1],N=Object(n.useState)(""),b=Object(f.a)(N,2),j=b[0],y=b[1],w=function(e,t){var a=document.querySelector(".form-message");window.emailjs.send("gmail",e,t).then((function(e){a.innerHTML="Message envoy\xe9 ! Nous vous recontacterons d\xe8s que possible.",a.style.background="#00c1ec",a.style.opacity="1",document.getElementById("name").classList.remove("error"),document.getElementById("email").classList.remove("error"),document.getElementById("message").classList.remove("error"),r(""),m(""),E(""),h(""),y(""),setTimeout((function(){a.style.opacity="0"}),5e3)})).catch((function(e){return a.innerHTML="Une erreur s'est produite, veuillez r\xe9essayer."}))};return l.a.createElement("form",{className:"contact-form"},l.a.createElement("h2",null,"contactez-nous"),l.a.createElement("div",{className:"form-content"},l.a.createElement("input",{type:"text",id:"name",name:"name",required:!0,onChange:function(e){return r(e.target.value)},placeholder:"nom *",value:a}),l.a.createElement("input",{type:"text",id:"company",name:"company",onChange:function(e){return m(e.target.value)},placeholder:"soci\xe9t\xe9",value:i}),l.a.createElement("input",{type:"text",id:"phone",name:"phone",onChange:function(e){return E(e.target.value)},placeholder:"t\xe9l\xe9phone",value:p}),l.a.createElement("div",{className:"email-content"},l.a.createElement("label",{id:"not-mail"},"Email non valide"),l.a.createElement("input",{type:"mail",id:"email",name:"email",required:!0,onChange:function(e){return h(e.target.value)},placeholder:"email *",value:g})),l.a.createElement("textarea",{id:"message",name:"message",onChange:function(e){return y(e.target.value)},placeholder:"message *",value:j,required:!0})),l.a.createElement("input",{className:"button hover",type:"submit",value:"envoyer",onClick:function(e){e.preventDefault();var t=document.getElementById("name"),n=document.getElementById("email"),l=document.getElementById("message"),r=document.querySelector(".form-message");if(a&&function(){var e=document.getElementById("not-mail");return g.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)?(e.style.display="none",!0):(e.style.display="block",e.style.animation="dongle 1s",setTimeout((function(){e.style.animation="none"}),1e3),!1)}()&&j){t.classList.remove("red"),n.classList.remove("red"),l.classList.remove("red"),w("template_aofmtvBG",{name:a,company:i,phone:p,email:g,message:j})}else r.innerHTML="Merci de remplir correctement les champs requis *",r.style.background="rgb(253, 87, 87)",r.style.opacity="1",a||t.classList.add("error"),g||n.classList.add("error"),j||l.classList.add("error")}}),l.a.createElement("div",{className:"form-message"}))},S=a(13),M=function(){return l.a.createElement("main",null,l.a.createElement(E,null),l.a.createElement(d.b.div,{className:"contact",exit:"out",animate:"in",initial:"out",variants:{in:{opacity:1,x:0},out:{opacity:0,x:300}},transition:{ease:[.03,.87,.73,.9],duration:.6}},l.a.createElement(m,null),l.a.createElement(g,null),l.a.createElement(C,null),l.a.createElement("div",{className:"contact-infos"},l.a.createElement("div",{className:"address"},l.a.createElement("div",{className:"content"},l.a.createElement("h4",null,"adresse"),l.a.createElement("p",null,"Douala-Ndogpassi III"))),l.a.createElement("div",{className:"phone"},l.a.createElement("div",{className:"content"},l.a.createElement("h4",null,"t\xe9l\xe9phone"),l.a.createElement(S.CopyToClipboard,{text:"(+237)699505392",className:"hover"},l.a.createElement("p",{style:{cursor:"pointer"},className:"clipboard",onClick:function(){alert("T\xe9l\xe9phone copi\xe9 !")}},"(+237) 699 50 53 92")))),l.a.createElement("div",{className:"email"},l.a.createElement("div",{className:"content"},l.a.createElement("h4",null,"email"),l.a.createElement(S.CopyToClipboard,{text:"mfeutgniarodrigue@gmail.com",className:"hover"},l.a.createElement("p",{style:{cursor:"pointer"},className:"clipboard",onClick:function(){alert("Email copi\xe9 !")}},"mfeutgniarodrigue@gmail.com")))),l.a.createElement(s,null),l.a.createElement("div",{className:"credits"},l.a.createElement("p",null,"Rodrigue Aime - 2021"))),l.a.createElement(u,{left:"/projet-6"})))},O=function(){var e=Object(i.h)(),t=Object(i.g)();return Object(n.useEffect)((function(){window.addEventListener("wheel",(function(e){console.log(e.wheelDeltaY);var a=window.location.origin+"/",n=function(a,n){e.wheelDeltaY<0?setTimeout((function(){t.push(a)}),500):e.wheelDeltaY>0&&setTimeout((function(){t.push(n)}),500)};switch(window.location.href.toString()){case a:e.wheelDeltaY<0&&setTimeout((function(){t.push("projet-1")}),500);break;case a+"projet-1":n("projet-2","");break;case a+"projet-2":n("projet-3","projet-1");break;case a+"projet-3":n("projet-4","projet-2");break;case a+"projet-4":n("contact","projet-3");break;case a+"contact":e.wheelDeltaY>0&&setTimeout((function(){t.push("projet-4")}),500);break;default:console.log("nothing")}}))}),[t]),l.a.createElement(d.a,null,l.a.createElement(i.d,{location:e,key:e.pathname},l.a.createElement(i.b,{exact:!0,path:"/",component:v}),l.a.createElement(i.b,{path:"/projet-1",component:b}),l.a.createElement(i.b,{path:"/projet-2",component:j}),l.a.createElement(i.b,{path:"/projet-3",component:y}),l.a.createElement(i.b,{path:"/projet-4",component:w}),l.a.createElement(i.b,{path:"/projet-5",component:x}),l.a.createElement(i.b,{path:"/projet-6",component:k}),l.a.createElement(i.b,{path:"/projet-7",component:L}),l.a.createElement(i.b,{path:"/contact",component:M}),l.a.createElement(i.a,{to:"/"})))};c.a.render(l.a.createElement(o.a,null,l.a.createElement(O,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.7117c5a4.chunk.js.map