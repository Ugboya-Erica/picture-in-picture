const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//using an async function to select media stream, pass it to the video element and then play
async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    }catch(err){
        //catch error
        console.log("Freeze! There's an error", error)
    }
}

//creating an eventListener for the button
button.addEventListener('click', async () => {
    // Disable the Button
    button.disabled = true;
    // then Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
});
 

//onload
selectMediaStream();