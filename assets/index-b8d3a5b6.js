(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))f(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&f(m)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function f(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const a=document.querySelector("#name"),c=document.querySelector("#surname"),d=document.querySelector("#phone"),l=document.querySelector("#email"),u=document.querySelector("#password"),p=document.querySelector("#repeat"),v=document.querySelector(".register"),o=(t,s,i)=>{s?(t.setAttribute("placeholder",i??"Musisz podać jakąś wartość"),t.classList.add("red-input"),t.classList.add("red-placeholder")):(t.removeAttribute("placeholder"),t.classList.remove("red-input"),t.classList.remove("red-placeholder"))},y=t=>{t.preventDefault();const s=/^(?:\(?\?)?(?:[-\.\(\)\s]*(\d)){9}\)?$/,i=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;a.value===""&&o(a,!0,"Musisz podać imię"),c.value===""&&o(c,!0,"Musisz podać nazwisko"),s.test(d.value)||o(d,!0,"Musisz podać numer telefonu"),i.test(l.value)||o(l,!0,"Musisz podać adres e-mail"),u.value.length<8&&o(u,!0,"Hasło musi zawierać min. 8 znaków"),p.value!==u.value&&o(p,!0,"Hasła muszą być takie same")},n=t=>{o(t,!1)};a.addEventListener("input",()=>n(a));c.addEventListener("input",()=>n(c));d.addEventListener("input",()=>n(d));l.addEventListener("input",()=>n(l));u.addEventListener("input",()=>n(u));p.addEventListener("input",()=>n(p));v.addEventListener("click",y);
