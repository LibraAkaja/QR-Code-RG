import { changeCSS, isCSS} from "./dynamic.js";

/* Animation for navbar specifically used in this project */
export function navAnimation(){
    document.querySelector("#l2").addEventListener("click",()=>{
        if(isCSS("#l2","backgroundColor","rgba(255, 255, 255, 0.25)")){
            changeCSS("#l2","backgroundColor","transparent");
            changeCSS("#l1","backgroundColor","rgba(255, 255, 255, 0.25)");            
        }
        else{
            changeCSS("#l2","backgroundColor","rgba(255, 255, 255, 0.25)");
            changeCSS("#l1","backgroundColor","transparent");
            changeCSS("#l3","backgroundColor","transparent");
        }
    });
    document.querySelector("#l3").addEventListener("click",()=>{
        if(isCSS("#l3","backgroundColor","rgba(255, 255, 255, 0.25)")){
            changeCSS("#l3","backgroundColor","transparent");
            changeCSS("#l1","backgroundColor","rgba(255, 255, 255, 0.25)");            
        }
        else{
            changeCSS("#l3","backgroundColor","rgba(255, 255, 255, 0.25)");
            changeCSS("#l1","backgroundColor","transparent");
            changeCSS("#l2","backgroundColor","transparent");
        }
    });
    document.querySelector("#l1").addEventListener("click",()=>{
        changeCSS("#l1","backgroundColor","rgba(255, 255, 255, 0.25)");
        changeCSS("#l2","backgroundColor","transparent");
        changeCSS("#l3","backgroundColor","transparent");
    });
}

/* Animation for two boxes, allows a box to grow a little more than other box for a small time and same for the other box */
export let mainIntervalID = null;
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
    mainIntervalID = setInterval(()=>{
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

/* Animation for page other than index page */
export let otherIntervalID = null;
export function otherPageAnimation(bx){
    setTimeout(()=>{
        changeCSS(bx.toString(),"transform","scale(1)");
        changeCSS(bx.toString(),"transition","transform 0.5s ease");
    },500);
    setTimeout(()=>{
        changeCSS(bx.toString(),"transform","scale(0.95)");
        changeCSS(bx.toString(),"transition","transform 0.5s ease");
    },2000);
    otherIntervalID = setInterval(()=>{
        setTimeout(()=>{
            changeCSS(bx.toString(),"transform","scale(1)");
            changeCSS(bx.toString(),"transition","transform 0.5s ease");
        },500);
        setTimeout(()=>{
            changeCSS(bx.toString(),"transform","scale(0.95)");
            changeCSS(bx.toString(),"transition","transform 0.5s ease");
        },2000);
    },5000);
}