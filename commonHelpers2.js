import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as r}from"./assets/vendor-77e16229.js";const s=document.querySelector(".form");s.addEventListener("submit",m);function m(e){e.preventDefault();const o=s.elements.delay.value,i=s.elements.state.value;c(o,i).then(t=>{r.success({message:`✅ Fulfilled promise in ${t}ms`,position:"topRight"}),s.reset()}).catch(t=>{r.error({message:`❌ Rejected promise in ${t}ms`,position:"topRight"}),s.reset()})}const c=(e,o)=>new Promise((t,n)=>{setTimeout(()=>{o==="fulfilled"?t(e):n(e)},e)});
//# sourceMappingURL=commonHelpers2.js.map
