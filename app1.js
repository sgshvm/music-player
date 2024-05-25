const allSongs = [
    {
        id: 0,
        title: "Your Song Title",
        artist: "Artist Name",
        duration: "4:00",
        src: "https://your-audio-source-url.mp3",
    },
    // Add more songs as needed...
];

let currentSongIndex = 0;
let audioElement = new Audio();

audioElement.src = allSongs[currentSongIndex].src;
audioElement.play();

function playpauseTrack() {
    if (audioElement.paused) {
        audioElement.play();
    } else {
        audioElement.pause();
    }
}

function prevTrack() {
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentSongIndex = allSongs.length - 1;
    }
    audioElement.src = allSongs[currentSongIndex].src;
    audioElement.play();
}

function nextTrack() {
    currentSongIndex++;
    if (currentSongIndex >= allSongs.length) {
        currentSongIndex = 0;
    }
    audioElement.src = allSongs[currentSongIndex].src;
    audioElement.play();
}

function seekTo() {
    audioElement.currentTime = (audioElement.duration / 100) * document.querySelector('.seek_slider').value;
}

function changeVolume() {
    audioElement.volume = document.querySelector('.volume_slider').value / 100;
}

function searchMusic() {
    const searchInput = document.querySelector('#search-input').value;
    const filteredSongs = allSongs.filter(song => song.title.toLowerCase().includes(searchInput.toLowerCase()));
    renderPlaylist(filteredSongs);
}

function renderPlaylist(songs) {
    const playlistList = document.querySelector('#playlist-list');
    playlistList.innerHTML = '';
    songs.forEach(song => {
        const playlistItem = document.createElement('li');
        playlistItem.textContent = `${song.title} - ${song.artist}`;
        playlistList.appendChild(playlistItem);
    });
}

document.querySelector('#search-button').addEventListener('click', searchMusic);