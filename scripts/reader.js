import { navAnimation, otherPageAnimation } from "./animation.js";
import { changeCSS } from "./dynamic.js";

window.addEventListener("load",()=>{
    navAnimation();
    otherPageAnimation("#bx2");
});

const vid = document.getElementById("video");
const canva = document.getElementById("canvas");
const context = canva.getContext("2d", { willReadFrequently: true });
const output = document.getElementById("output");

let cameraActive = false;
let alreadyScanned = false;

// Function to access camera and start video stream
async function startCamera() {
    if(cameraActive) return;
    cameraActive = true;
    try{
        const stream = await navigator.mediaDevices.getUserMedia({video:{facingMode: "environment"}});
        vid.srcObject = stream;
        vid.onloadedmetadata = () => {
            vid.play();
            requestAnimationFrame(scanQRCode);
        };
    }
    catch(error){
        output.textContent = "Error Accessing Camera!";
        console.error(error);
    }
}

let scanning = false;

function isValidURL(str){
    try{
        const url = new URL(str);
        return url.protocol === "http:" || url.protocol === "https:";
    }
    catch(_) {
        return false;
    }
}

// Function to start QR code scanning
function scanQRCode(){
    if(vid.readyState !== vid.HAVE_ENOUGH_DATA){
        requestAnimationFrame(scanQRCode);
        return;  // Wait until the video has data
    }

    canva.width = vid.videoWidth * 2; 
    canva.height = vid.videoHeight * 2;
    context.drawImage(vid, 0, 0, canva.width, canva.height);

    const imageData = context.getImageData(0, 0, canva.width, canva.height);
    const code = jsQR(imageData.data, imageData.width, imageData.height);

    if(code && !alreadyScanned) {
        console.log("QR detected: ",code);
        alreadyScanned = true;
        const scannedText = code.data;
        output.textContent = `QR Code: ${scannedText}`;
        changeCSS("#bx1","display","none");
        changeCSS("#bx3","display","flex");
        changeCSS("#bx3","justify-content","center");
        changeCSS("#bx3","align-items","center"); 
        stopCamera();
        if(isValidURL(scannedText)){
            setTimeout(()=>{
                window.location.href = scannedText;
            },1000);
        }
    } else {
        requestAnimationFrame(scanQRCode);
    }
}

// Function to stop the camera stream
function stopCamera(){
    let stream = vid.srcObject;
    if(stream){
        let tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
    }
    vid.srcObject = null;
}

// Function to start everything
startCamera();