(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))x(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const L of n.addedNodes)L.tagName==="LINK"&&L.rel==="modulepreload"&&x(L)}).observe(document,{childList:!0,subtree:!0});function c(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function x(e){if(e.ep)return;e.ep=!0;const n=c(e);fetch(e.href,n)}})();const w=document.querySelector("#company"),h=document.querySelector("#name"),v=document.querySelector("#surname"),l=document.querySelector("#phone"),b=document.querySelector("#email"),u=document.querySelector("#password"),E=document.querySelector("#repeat"),S=document.querySelector("#terms"),z=document.querySelector(".register-terms"),M=document.querySelector(".register"),T=document.querySelector(".basic-info"),r=(t,o,c)=>{o?(t.setAttribute("placeholder",c??"Musisz podać jakąś wartość"),t.classList.add("red-input"),t.classList.add("red-placeholder")):(t.removeAttribute("placeholder"),t.classList.remove("red-input"),t.classList.remove("red-placeholder"))},d=document.createElement("p");d.classList.add("terms-error");const N=()=>{S.checked?S.checked&&z.contains(d)&&z.removeChild(d):(d.innerHTML="Musisz zaakceptować regulamin",z.appendChild(d))},a=t=>{r(t,!1)},m=document.createElement("div");m.classList.add("basic-info-company");const f=document.createElement("div");f.classList.add("basic-info-data");const y=document.createElement("div");y.classList.add("basic-info-data");const g=document.createElement("label");g.setAttribute("for","company-name");g.innerText="Nazwa firmy";const i=document.createElement("input");i.classList.add("input");i.setAttribute("id","company-name");i.setAttribute("type","text");const C=document.createElement("label");C.setAttribute("for","services");C.innerText="Świadczone usługi";const s=document.createElement("select");s.setAttribute("id","services");s.classList.add("input");const p=document.createElement("option");p.setAttribute("value","defafult");p.selected=!0;p.disabled=!0;p.innerText="Wybierz usługę";const k=document.createElement("option");k.setAttribute("value","fryzjer");k.innerText="Fryzjer";const A=document.createElement("option");A.setAttribute("value","kosmetyczka");A.innerText="Kosmetyczka";const I=document.createElement("option");I.setAttribute("value","mechanik");I.innerText="Mechanik";const q=document.createElement("option");q.setAttribute("value","hydraulik");q.innerText="Hydraulik";const O=()=>{f.appendChild(g),f.appendChild(i),y.appendChild(C),s.appendChild(p),s.appendChild(k),s.appendChild(q),s.appendChild(I),s.appendChild(A),y.appendChild(s),m.appendChild(f),m.appendChild(y),T.appendChild(m)},P=t=>{t.preventDefault();const o=/^(?:\(?\?)?(?:[-\.\(\)\s]*(\d)){9}\)?$/,c=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;h.value===""&&r(h,!0,"Musisz podać imię"),v.value===""&&r(v,!0,"Musisz podać nazwisko"),o.test(l.value)||r(l,!0,"Musisz podać numer telefonu"),c.test(b.value)||r(b,!0,"Musisz podać adres e-mail"),u.value.length<8&&r(u,!0,"Hasło musi zawierać min. 8 znaków"),E.value!==u.value&&r(E,!0,"Hasła muszą być takie same"),i.value!==""&&(console.log("okssoks"),r(i,!0,"Musisz podać nazwę firmy")),N()};w.addEventListener("change",O);h.addEventListener("input",()=>a(h));v.addEventListener("input",()=>a(v));l.addEventListener("input",()=>a(l));l.addEventListener("keypress",function(t){isNaN(parseInt(t.key))&&t.preventDefault()});b.addEventListener("input",()=>a(b));u.addEventListener("input",()=>a(u));E.addEventListener("input",()=>a(E));M.addEventListener("click",P);