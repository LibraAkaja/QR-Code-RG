import { navAnimation, mainPageAnimation} from "./animation.js";

window.addEventListener("load",()=>{
    navAnimation();
    mainPageAnimation();
});

document.querySelector("#btn1").addEventListener("click",()=>{
    window.location.href = "pages/generator.html"; 
},{once:true});

document.querySelector("#btn2").addEventListener("click",()=>{
    window.location.href = "pages/reader.html"; 
},{once:true});