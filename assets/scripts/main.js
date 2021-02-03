// main.js

// TODO

// find volume elements
const volumeInput = document.getElementById('volume-number');
const volumeBar = document.getElementById('volume-slider');
const audioPlay = document.getElementById('horn-sound');
const volumeIcon = document.getElementById('volume-image');

// update volume bar when user inputs in the box
volumeInput.addEventListener('input', updateVolumeBar);
function updateVolumeBar(){
    volumeBar.value = volumeInput.value;
    audioPlay.volume = volumeInput.value/100;
    
    updateVolumeIcon(volumeInput.value);
}

// update volume box when slider changes
volumeBar.addEventListener('mouseup', updateVolumeText);
function updateVolumeText() {
    volumeInput.value = volumeBar.value;
    audioPlay.volume = volumeBar.value/100;
    volumeIcon.src="./assets/media/icons/volume-level-1.svg";

    updateVolumeIcon(volumeBar.value);
}

function updateVolumeIcon(vol){
    if(vol >= 67) {
        volumeIcon.src="./assets/media/icons/volume-level-3.svg";
    }
    else if(vol >= 34) {
        volumeIcon.src="./assets/media/icons/volume-level-2.svg";
    }
    else if(vol >= 1) {
        volumeIcon.src="./assets/media/icons/volume-level-1.svg";
    }
    else {
        volumeIcon.src="./assets/media/icons/volume-level-0.svg";
    }
}
