// main.js

// TODO

// find volume elements
const volumeInput = document.getElementById('volume-number');
const volumeBar = document.getElementById('volume-slider');
const audioPlay = document.getElementById('horn-sound');
const volumeIcon = document.getElementById('volume-image');
const audioSelection = document.getElementById('audio-selection');
const soundImage = document.getElementById('sound-image');

// update volume bar when user inputs in the box
volumeInput.addEventListener('input', updateVolumeBar);
function updateVolumeBar(){
    volumeBar.value = volumeInput.value;
    audioPlay.volume = volumeInput.value/100;
    updateVolumeIcon(volumeInput.value);
}

// update volume box when slider changes
volumeBar.addEventListener('change', updateVolumeText);
function updateVolumeText() {
    volumeInput.value = volumeBar.value;
    audioPlay.volume = volumeBar.value/100;
    updateVolumeIcon(volumeBar.value);
}

// function to update the volume icon
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

// changes the sounds
// audioSelection.addEventListener('change', changeSound);

// function changeSound() {
//     const airHorn = document.getElementById('radio-air-horn');
//     const carHorn = document.getElementById('radio-car-horn');
//     const partyHorn = document.getElementById('radio-party-horn');

//     if(carHorn.checked == true) {
//         audioPlay.src="./assets/media/audio/car-horn.mp3";
//         soundImage.src="./assets/media/images/car.svg";
//     }
//     else if(partyHorn.checked == true) {
//         audioPlay.src="./assets/media/audio/party-horn.mp3";
//         soundImage.src="./assets/media/images/party-horn.svg";
//     }
//     else {
//         audioPlay.src="./assets/media/audio/air-horn.mp3";
//         soundImage.src="./assets/media/images/air-horn.svg";
//     }
// }
