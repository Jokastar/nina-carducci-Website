const images=document.querySelectorAll(".grid img"),categories=new Set;for(let image of images)categories.add(image.dataset.imgcategory);for(let category of categories){let e=document.querySelector(".filters"),t=document.createElement("li");t.setAttribute("class","filter"),t.innerText=category,e.appendChild(t)}const filters=document.querySelectorAll(".filter");for(let filter of filters)filter.addEventListener("click",()=>{highlitghedFilter(filter),filterGrid(filter.innerText)});function highlitghedFilter(e){for(let t of filters)t.classList.remove("active-filter");e.classList.add("active-filter")}function filterGrid(e){let t=document.querySelector(".grid");t.innerHTML="";let i=Array.from(images);if("Tous"===e)for(let r of i)t.appendChild(r);let l=i.filter(t=>t.dataset.imgcategory===e);for(let a of l)t.appendChild(a)}images.forEach(e=>{e.addEventListener("click",e=>{let t=e.target.dataset.imgcategory,i=Array.from(images).filter(e=>e.dataset.imgcategory===t),r;for(let l in i)i[l]===e.target&&(r=l);let a=document.getElementById("lightbox");a.classList.add("active");let s=document.createElement("div");s.classList.add("imgContainer"),s.style.backgroundColor="white",s.style.width="500px",s.style.padding="15px";let d=document.createElement("img");d.src=i[r].getAttribute("src"),d.style.width="100%",d.style.width="100%",d.src=i[r].src;let c=document.createElement("div");c.classList.add("prevBtn"),c.innerText="<",c.addEventListener("click",()=>{r<=0?r=i.length-1:r--,d.src=i[r].src});let n=document.createElement("div");for(n.classList.add("nextBtn"),n.innerText=">",n.addEventListener("click",()=>{r>=i.length-1?r=0:r++,d.src=i[r].src});a.firstChild;)a.removeChild(a.firstChild);s.appendChild(d),s.appendChild(c),s.appendChild(n),a.appendChild(s),a.addEventListener("click",e=>{e.target===e.currentTarget&&a.classList.remove("active")})})});