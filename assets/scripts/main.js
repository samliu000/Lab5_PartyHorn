// main.js

// TODO

// find volume elements
const volumeInput = document.getElementById('volume-number');
const volumeBar = document.getElementById('volume-slider');

// update volume bar when user inputs in the box
volumeInput.addEventListener('input', updateVolumeBar);
function updateVolumeBar(){
    volumeBar.value = volumeInput.value;
}

// update volume box when slider changes
volumeBar.addEventListener('change', updateVolumeText);
function updateVolumeText() {
    volumeInput.value = volumeBar.value;
}