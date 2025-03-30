import { navAnimation, otherPageAnimation } from "./animation.js";

window.addEventListener("load",()=>{
    navAnimation();
    otherPageAnimation("#bx2");
});

const vid = document.getElementById("video");
const canva = document.getElementById("canvas");
const context = canva.getContext("2d");
const output = document.getElementById("output");

let cameraActive = false;

// Function to access camera and start video stream
async function startCamera() {
    if(cameraActive) return;
    cameraActive = true;
    try{
        const stream = await navigator.mediaDevices.getUserMedia({video:{facingMode: "environment"}});
        vid.srcObject = stream;
    }
    catch(error){
        output.textContent = "Error Accessing Camera!";
        console.error(error);
    }
}

let scanning = false;

// Function to start QR code scanning
function scanQRCode(){
    if(!scanning){
        scanning = true;
        requestAnimationFrame(()=>{
            if(vid.readyState === vid.HAVE_ENOUGH_DATA){
                canva.width = vid.videoWidth;
                canva.height = vid.videoHeight;
                context.drawImage(vid, 0, 0, canva.width, canva.height);
        
                const imageData = context.getImageData(0, 0, canva.width, canva.height);
                const code =  jsQR(imageData.data, imageData.width, imageData.height);
        
                if(code) {
                    output.textContent = `QR Code: ${code.data}`;
                    stopCamera();
                }
            }
            requestAnimationFrame(scanQRCode);
        });
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
startCamera().then(() => {
    requestAnimationFrame(scanQRCode);
});