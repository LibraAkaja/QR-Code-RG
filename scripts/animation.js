import { changeCSS, createDElement, removeDElement } from "./dynamicComponents.js";

export function navAnimation(){
    document.querySelector("#l2").addEventListener("click",()=>{
        changeCSS("#l2","backgroundColor","rgba(255, 255, 255, 0.25)");
        changeCSS("#l1","backgroundColor","transparent");
        changeCSS("#l3","backgroundColor","transparent");
    });
    document.querySelector("#l3").addEventListener("click",()=>{
        changeCSS("#l3","backgroundColor","rgba(255, 255, 255, 0.25)");
        changeCSS("#l1","backgroundColor","transparent");
        changeCSS("#l2","backgroundColor","transparent");
    });
    document.querySelector("#l1").addEventListener("click",()=>{
        changeCSS("#l1","backgroundColor","rgba(255, 255, 255, 0.25)");
        changeCSS("#l2","backgroundColor","transparent");
        changeCSS("#l3","backgroundColor","transparent");
    });
}

export function mainPageAnimation(){
    setTimeout(()=>{
        changeCSS("#bx1","transform","scale(1)");
        changeCSS("#bx1","transition","transform 0.5s ease");
    },500);
    setTimeout(()=>{
        changeCSS("#bx1","transform","scale(0.95)");
        changeCSS("#bx1","transition","transform 0.5s ease");
    },2000);
    setTimeout(()=>{
        changeCSS("#bx2","transform","scale(1)");
        changeCSS("#bx2","transition","transform 0.5s ease");
    },5000);
    setTimeout(()=>{
        changeCSS("#bx2","transform","scale(0.95)");
        changeCSS("#bx2","transition","transform 0.5s ease");
    },6500);
    setInterval(()=>{
        setTimeout(()=>{
            changeCSS("#bx1","transform","scale(1)");
            changeCSS("#bx1","transition","transform 0.5s ease");
        },500);
        setTimeout(()=>{
            changeCSS("#bx1","transform","scale(0.95)");
            changeCSS("#bx1","transition","transform 0.5s ease");
        },2000);
        setTimeout(()=>{
            changeCSS("#bx2","transform","scale(1)");
            changeCSS("#bx2","transition","transform 0.5s ease");
        },5000);
        setTimeout(()=>{
            changeCSS("#bx2","transform","scale(0.95)");
            changeCSS("#bx2","transition","transform 0.5s ease");
        },6500);
    },15000);
}