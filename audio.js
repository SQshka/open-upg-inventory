const audioFiles = [
    'Im a Gnome meme sound effect woo.m4a',
    'casino.mp3',
    'alert.mp3'
];

const audio = document.getElementById('random-sound-effect');

const playAudio = () => {
    const randomAudioFile = audioFiles[Math.floor(Math.random() * audioFiles.length)];
    audio.setAttribute('src', `./audio/${randomAudioFile}`);
    audio.volume = localStorage.getItem('volume');
    audio.play();
};

const removeAudio = () => audio.pause();

document.getElementById('volume-control').addEventListener('change', function () {
    audio.volume = this.value;
});
