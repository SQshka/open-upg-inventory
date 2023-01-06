const audioFiles = [
    'gnome.mp3',
    'casino.mp3',
    'alert.mp3',
    'duck-quack-sound-effect-hd.mp3',
    'minecraft-damage-oof-sound-effect-hd.mp3',
    'roblox-death-sound-sound-effect-hd.mp3',
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
