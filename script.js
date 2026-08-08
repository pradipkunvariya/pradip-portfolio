const nav=document.getElementById("nav"), menu=document.querySelector(".menu"), navLinks=document.querySelector(".nav nav"), typed=document.getElementById("typed"), orb=document.querySelector(".mouse-orb");
const roles=["Data Scientist","Machine Learning Enthusiast","Data Analyst","Python Developer"];
let role=0, char=0, deleting=false;
function type(){const word=roles[role];typed.textContent=deleting?word.slice(0,--char):word.slice(0,++char);let speed=deleting?55:85;if(!deleting&&char===word.length){speed=1200;deleting=true}else if(deleting&&char===0){deleting=false;role=(role+1)%roles.length;speed=300}setTimeout(type,speed)} type();
window.addEventListener("scroll",()=>nav.classList.toggle("scrolled",scrollY>30));
menu.addEventListener("click",()=>navLinks.classList.toggle("open"));
document.querySelectorAll(".nav nav a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("open")));
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("show");obs.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(e=>obs.observe(e));
window.addEventListener("mousemove",e=>{orb.style.left=e.clientX+"px";orb.style.top=e.clientY+"px"});
document.getElementById("year").textContent=new Date().getFullYear();

