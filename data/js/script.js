import { radioStations } from './stations.js';

const audioPlayer = document.getElementById('audioPlayer');
const playPauseButton = document.getElementById('playPauseButton');
const volumeControl = document.getElementById('volumeControl');
const albumArt = document.getElementById('albumArt'); // Added to update album art
const sidebarLinks = document.querySelectorAll('.sidebar a');

// Function to load a new stream
function loadRadioStream(stationData) {
  audioPlayer.src = stationData.url;
  audioPlayer.load();
  playPauseButton.textContent = 'Play';
  albumArt.src = stationData.image; // Update album art
}

sidebarLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const stationName = link.textContent.trim();
    const stationData = radioStations[stationName];
    if (stationData) {
      loadRadioStream(stationData);
    } else {
      console.error(`Station data not found for ${stationName}`);
    }
  });
});


// Play/Pause and volume controls
playPauseButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseButton.textContent = 'Pause';
    } else {
        audioPlayer.pause();
        playPauseButton.textContent = 'Play';
    }
});

volumeControl.addEventListener('input', () => {
    audioPlayer.volume = volumeControl.value;
});