const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');


// Music
const songs = [
    {
        name: 'loco',
        displayName: 'Loco',
        artist: 'Beéle',
    },   {
        name: 'ignorantes',
        displayName: 'Ignorantes',
        artist: 'Bad Bunny - Sech',
    },   {
        name: 'laugh-now-cry-later',
        displayName: 'Laugh Now Cry Later',
        artist: 'Drake - Lil Durk',
    }
]

// Check if playing
let isPlaying = false;

// Play
function playSong() {
    isPlaying = true;
    music.play();
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
}

// Pause
function pauseSong() {
    isPlaying = false;
    music.pause();
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
}

// Play or pause eventListener
playBtn.addEventListener('click', () =>(isPlaying ? pauseSong() : playSong()));

// Update the DOM

function loadSong (song) {
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.jpg`;

}

// previous Song
function prevSong() {
    songIndex--;
    if(songIndex < 0){
        songIndex = songs.length -1;
    }
    loadSong(songs[songIndex]);
    playSong();
}
function nextSong() {
    songIndex++;
    if(songIndex > songs.length-1){
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}

// Current Song
let songIndex = 0;

// On Load - Select First Song
loadSong(songs[songIndex]); 

// Update progress Bar
function updateProgressBar(e) {
    if(isPlaying){
        const {duration, currentTime} = e.srcElement;
        // Update progress bar width
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;
        // calculate display for duration
        const durationMinutes = Math.floor(duration / 60);
        let durationSeconds = Math.floor(duration % 60);
        if(durationSeconds < 10){
            durationSeconds = `0${durationSeconds}`;
        }
        // Delay to avoid NaN
        if (durationSeconds) {
            durationEl.textContent = durationMinutes +':'+durationSeconds;
        }

        // calculate display for currentTime
        const currentMinutes = Math.floor(currentTime / 60);
        let currentSeconds = Math.floor(currentTime % 60);
        if(currentSeconds < 10){
            currentSeconds = `0${currentSeconds}`;
        }
        currentTimeEl.textContent = currentMinutes +':'+currentSeconds;
    
    }
}

// Set progress Bar

function setProgressBar(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const {duration} = music;
    music.currentTime = (clickX / width) * duration;
}



prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('timeupdate', updateProgressBar);
progressContainer.addEventListener('click', setProgressBar);
music.addEventListener('ended', nextSong);