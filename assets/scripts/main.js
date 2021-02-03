// main.js

// TODO
const volumeInput = document.getElementById('volume-number');
volumeInput.addEventListener('input', updateVolumeBar);

function updateVolumeBar(){
    const volumeBar = document.getElementById('volume-slider');
    volumeBar.value = volumeInput.value;
}