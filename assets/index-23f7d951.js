(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))E(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&E(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function E(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();const j=[{id:"street",placeholder:"Ulica"},{id:"home",placeholder:"Nr.domu"},{id:"city",placeholder:"Miasto"},{id:"code",placeholder:"Kod pocztowy"}];console.log("200");const L=document.createElement("div");L.className="company-adress";const I=document.createElement("h2");I.className="company-adress-title";I.innerText="Adres pocztowy firmy";const w=document.createElement("div");w.className="company-adress-place";const O=(e,t,o,E)=>{j.forEach(r=>{const s=document.createElement("div");s.className="company-adress-data";const a=document.createElement("input");a.className="input",a.type="text",a.id=r.id,a.placeholder=r.placeholder,e.addEventListener("click",()=>{let f="";switch(a.id){case"street":f="Podaj nazwę ulicy";break;case"home":f="Podaj numer domu";break;case"city":f="Podaj nazwę miasta";break;case"code":f="Podaj kod pocztowy";break}a.value===""?t(a,!0,f):t(a,!1)}),s.appendChild(a),w.appendChild(s),a.addEventListener("input",()=>{o(a)}),(a.id==="home"||a.id==="code")&&a.addEventListener("input",E)})};L.appendChild(I);L.appendChild(w);console.log("dwa");const k=document.querySelector("#user"),N=document.querySelector("#company"),m=document.querySelector("#name"),p=document.querySelector("#surname"),d=document.querySelector("#phone"),v=document.querySelector("#email"),u=document.querySelector("#password"),h=document.querySelector("#repeat"),S=document.querySelector("#terms"),g=document.querySelector(".register-terms"),q=document.querySelector(".register"),D=document.querySelector(".basic-info"),y=document.createElement("p");y.classList.add("terms-error");const F=()=>{S.checked?S.checked&&g.contains(y)&&g.removeChild(y):(y.innerHTML="Musisz zaakceptować regulamin",g.appendChild(y))},x=[k,N];function H(){x.forEach(e=>{e!==this?e.checked=!1:(e.checked=!0,console.log("pozostaje zaznaczony"))})}x.forEach(e=>{e.addEventListener("click",function(){H.call(this)})});console.log(k.checked);const b=document.createElement("div");b.className="basic-info-company";const z=document.createElement("div");z.className="basic-info-data";const A=document.createElement("div");A.className="basic-info-data";const P=document.createElement("label");P.htmlFor="company-name";P.innerText="Nazwa firmy";const c=document.createElement("input");c.className="input";c.id="company-name";c.type="text";const C=document.createElement("label");C.htmlFor="services";C.innerText="Świadczone usługi";const B=[{value:"default",label:"Wybierz usługę"},{value:"fryzjer",label:"Fryzjer"},{value:"kosmetyczka",label:"Kosmetyczka"},{value:"mechanik",label:"Mechanik"},{value:"hydraulik",label:"Hydraulik"}],n=document.createElement("select");n.id="services";n.className="input";B.forEach(e=>{const t=document.createElement("option");t.value=e.value,t.innerText=e.label,n.appendChild(t)});const T=e=>{const t=e.target;t instanceof HTMLSelectElement?t.classList.remove("red-input"):(i(t),t.value=t.value.replace(/[^\d\W]/g,""))},l=(e,t,o)=>{t?(e.setAttribute("placeholder",o??"Musisz podać jakąś wartość"),e.classList.add("red-input"),e.classList.add("red-placeholder")):(e.removeAttribute("placeholder"),e.classList.remove("red-input"),e.classList.remove("red-placeholder"))},i=e=>{l(e,!1)};O(q,l,i,T);const K=e=>{m.classList.remove("red-input"),m.classList.remove("red-placeholder"),m.removeAttribute("placeholder"),p.classList.remove("red-input"),p.classList.remove("red-placeholder"),p.removeAttribute("placeholder"),d.classList.remove("red-input"),d.classList.remove("red-placeholder"),d.removeAttribute("placeholder"),v.classList.remove("red-input"),v.classList.remove("red-placeholder"),v.removeAttribute("placeholder"),u.classList.remove("red-input"),u.classList.remove("red-placeholder"),u.removeAttribute("placeholder"),h.classList.remove("red-input"),h.classList.remove("red-placeholder"),h.removeAttribute("placeholder"),c.classList.remove("red-input"),c.classList.remove("red-placeholder"),c.removeAttribute("placeholder"),n.classList.remove("red-input"),n.classList.remove("red-placeholder"),n.removeAttribute("placeholder"),e.forEach(t=>{const o=document.getElementById(t.id);o!==null&&(console.log("ok usuwam błędy "),o.classList.remove("red-input"),o.classList.remove("red-placeholder"),o.removeAttribute("placeholder"))})},M=()=>{K(j),N.checked?(z.append(P,c),A.append(C,n),b.append(z,A),D.append(b,L)):k.checked&&(b.remove(),L.remove())},W=e=>{e.preventDefault();const t=/^(?:\(?\?)?(?:[-\.\(\)\s]*(\d)){9}\)?$/,o=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;m.value===""&&l(m,!0,"Podaj imię"),p.value===""&&l(p,!0,"Podaj nazwisko"),t.test(d.value)||l(d,!0,"Podaj numer telefonu"),o.test(v.value)||l(v,!0,"Podaj adres e-mail"),u.value.length<8&&l(u,!0,"Hasło musi zawierać min. 8 znaków"),h.value!==u.value&&l(h,!0,"Hasła muszą być takie same"),c.value===""&&l(c,!0,"Podaj nazwę firmy"),n.value==="default"&&n.classList.add("red-input"),F()};N.addEventListener("change",M);k.addEventListener("change",M);m.addEventListener("input",()=>i(m));p.addEventListener("input",()=>i(p));d.addEventListener("input",()=>i(d));d.addEventListener("keypress",function(e){isNaN(parseInt(e.key))&&e.preventDefault()});v.addEventListener("input",()=>i(v));c.addEventListener("input",()=>i(c));n.addEventListener("input",T);u.addEventListener("input",()=>i(u));h.addEventListener("input",()=>i(h));q.addEventListener("click",W);
