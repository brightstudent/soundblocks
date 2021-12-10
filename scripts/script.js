const songs = document.querySelector('#songs');
const songOne = document.querySelector('#songs > article:nth-of-type(1)')
const songTwo = document.querySelector('#songs > article:nth-of-type(2)')
const songThree = document.querySelector('#songs > article:nth-of-type(3)')

const songList = ['audio/song1.mp3', 'audio/song2.mp3', 'audio/song3.mp3']

let isPlaying = false;


function playSong(event) {
    console.log(event)

    let chosenSong = new Audio(event);

    isPlaying ? chosenSong.pause() : chosenSong.play();

    chosenSong.onplaying = function () {
        isPlaying = true;
    };

    chosenSong.onpause = function () {
        isPlaying = false;
    };
}


songOne.addEventListener('click', playSong);
songTwo.addEventListener('click', playSong);
songThree.addEventListener('click', playSong);

