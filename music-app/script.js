const audioPlayer = document.getElementById("audio-player");
const songTitle = document.getElementById("song-title");
const prevButton = document.getElementById("prev");
const playButton = document.getElementById("play");
const nextButton = document.getElementById("next");
const playlistEl = document.getElementById("playlist");

const songs = [
    { title: "Song 1", src: "music/song1.mp3" },
    { title: "Song 2", src: "music/song2.mp3" },
    { title: "Song 3", src: "music/song3.mp3" }
];

let currentIndex = 0;

function loadSong(index) {
    const song = songs[index];
    songTitle.textContent = song.title;
    audioPlayer.src = song.src;
}

function playPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playButton.textContent = "⏸️";
    } else {
        audioPlayer.pause();
        playButton.textContent = "▶️";
    }
}

function prevSong() {
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;
    loadSong(currentIndex);
    audioPlayer.play();
}

function nextSong() {
    currentIndex = (currentIndex + 1) % songs.length;
    loadSong(currentIndex);
    audioPlayer.play();
}

function createPlaylist() {
    songs.forEach((song, index) => {
        const li = document.createElement("li");
        li.textContent = song.title;
        li.addEventListener("click", () => {
            currentIndex = index;
            loadSong(currentIndex);
            audioPlayer.play();
        });
        playlistEl.appendChild(li);
    });
}

playButton.addEventListener("click", playPause);
prevButton.addEventListener("click", prevSong);
nextButton.addEventListener("click", nextSong);

document.addEventListener("DOMContentLoaded", () => {
    loadSong(currentIndex);
    createPlaylist();
});
