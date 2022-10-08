// console.log ('hello word');
// let audioElement = new Audio("./audio/fade.mp3");
// let masterplay = document.getElementById("masterPlay");
let prograsebar = document.getElementById("prog");
let progressAriya = document.getElementById("prograseAriya");

// let nextPlayer = document.querySelector(".o-icon-for-ward");
// let backPlayer = document.querySelector(".o-icon-back-ward");

let weapwer = document.querySelector(".foo");
let musicImage = document.querySelector(".in-img");
let musicName = document.querySelector(".music-detils .name");
let Artist = document.querySelector(".music-detils .Artist");
let mainAudio = document.querySelector(".main-audio");
let playpouse = document.querySelector(".play");
let playpousebtn = document.querySelector(".play i");
let playprev = document.querySelector(".prev");
let playnext = document.querySelector(".next");
let minduration = document.querySelector(".min-duration");
let maxduration = document.querySelector(".max-duration");
let shuffle = document.querySelector(".btn-shuffle");

let Allmusic = [{
    name: "fade",
    Artiest: "Alan walker",
    image: "./image/benner/on-on=cartoon.png",
    src: "./audio/fade.mp3"
},
{
    name: "Landscape",
    Artiest: "jarico",
    image: "./image/benner/landscape-jarico.png",
    src: "./audio/Landscape.mp3"
},
{
    name: "Candyland",
    Artiest: "Tobu",
    image: "./image/benner/candyland-tobu.png",
    src: "./audio/Elektronomia.mp3"
}];
let MusicIndex = 1;
window.addEventListener("load", () => {
    loadmusic(MusicIndex); //calling loading 
});

//load music function
function loadmusic(indexNumg) {
    musicName.innerText = Allmusic[indexNumg - 1].name;
    Artist.innerText = Allmusic[indexNumg - 1].Artiest;
    musicImage.src = Allmusic[indexNumg - 1].image;
    mainAudio.src = Allmusic[indexNumg - 1].src;

}
// play pouse buttion 
//play pouse function
playpouse.addEventListener("click", () => {
    playpouseBtn();
});
function playpouseBtn() {
    if (mainAudio.paused || mainAudio.currentTime <= 0) {
        mainAudio.play();
        playpousebtn.classList.remove("o-icon-o");
        playpousebtn.classList.add("o-icon-h");
    } else {
        mainAudio.pause();
        playpousebtn.classList.remove("o-icon-h");
        playpousebtn.classList.add("o-icon-o");
    }
}

//next play btn
playnext.addEventListener("click", () => {
    nextMusic();
    playpouseBtn();

});
//back play btn
playprev.addEventListener("click", () => {
    prevMusic();
    playpouseBtn();
})
//next music function
function nextMusic() {
    MusicIndex++;
    MusicIndex > Allmusic.length ? MusicIndex = 1 : MusicIndex = MusicIndex;
    loadmusic(MusicIndex);
    mainAudio.play();
}

//preveus music play
function prevMusic() {
    MusicIndex--;
    MusicIndex < 1 ? MusicIndex = Allmusic.length : MusicIndex = MusicIndex;
    loadmusic(MusicIndex);
    mainAudio.play();
}
//music sink baar 
mainAudio.addEventListener("timeupdate", () => {
    let prograse = parseInt(
        (mainAudio.currentTime / mainAudio.duration) * 100
    );
    prograsebar.style.width = `${prograse}%`;
    //Audio Total time
    mainAudio.addEventListener("loadeddata", () => {
        let audioduration = mainAudio.duration;
        let totalmin = Math.floor(audioduration / 60);
        let totalsec = Math.floor(audioduration % 60);
        if (totalsec < 10) {
            totalsec = `0${totalsec}`;
        }
        maxduration.innerText = `${totalmin}:${totalsec}`;
    });

    //CuruntTime curunt time
    let audiocurrentTime = mainAudio.currentTime;
    let curuntmin = Math.floor(audiocurrentTime / 60);
    let curuntsec = Math.floor(audiocurrentTime % 60);
    if (curuntsec < 10) {
        curuntsec = `0${curuntsec}`;
    }
    minduration.innerText = `${curuntmin}:${curuntsec}`;


});

//--progress ariya click to music 
progressAriya.addEventListener("click", (e) => {
    let progaresswidthvell = progressAriya.clientWidth; //gatting whidth in progress bar
    let cilckedoffsetXvalue = e.offsetX; //gatting offset X value
    let songDuration = mainAudio.duration; //song totale dduration
    mainAudio.currentTime = (cilckedoffsetXvalue / progaresswidthvell) * songDuration;
    mainAudio.play();
});
//its work shuffle buttion
