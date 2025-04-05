import { navAnimation, otherPageAnimation } from "./animation.js";
import { addText, changeCSS, createDElement, removeDElement, removeElements } from "./dynamic.js";

window.addEventListener("load",()=>{
    navAnimation();
    otherPageAnimation("#bx1");
});

document.querySelector(".QRCGbtn").addEventListener("click",()=>{
    const bx2Clone = document.querySelector("#bx2").cloneNode(true); // Needed if the user tries to go one step back
    const qrText = document.querySelector(".text4QR").value;    // Getting the text or URL entered by User
    if(qrText.trim()===""){
        alert("Please enter Text or URL first!");
        return;
    }
    else{
        removeElements(["p",".text4QR",".QRCGbtn"]);
        createDElement("#bx2","div","loaderContainer");
        createDElement(".loaderContainer","div","loader");
        createDElement(".loader","div","box1");
        createDElement(".loader","div","box2");
        createDElement(".loader","div","box3");
        const loaderClone = document.querySelector(".loaderContainer").cloneNode(true); // Needed if user tries generation multiple times
        createDElement("#bx2","div","qrContainer");
        changeCSS(".qrContainer","display","none");
        setTimeout(()=>{
            generateQR(qrText);
        },2500);
        setTimeout(()=>{
            removeDElement(".loaderContainer");
            changeCSS(".qrContainer","display","block");
            createDElement(".qrContainer","div","downloadContainer");
            createDElement(".downloadContainer","div","dIcon");
        },10000);
    }
});

function generateQR(qrText){
    const qrContainer = document.querySelector(".qrContainer");
    const rect = qrContainer.parentElement.getBoundingClientRect();
    qrContainer.innerHTML = "";
    new QRCode(qrContainer,{
        text: qrText,
        width: rect.width,
        height: rect.height,
    });    
}