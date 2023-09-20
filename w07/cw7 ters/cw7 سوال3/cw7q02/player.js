const audioPlayer = document.getElementById("audio-player");
const playPauseBtn = document.getElementById("play-pause-btn");
const leftBtn = document.getElementById("left-btn");
const rightBtn = document.getElementById("right-btn");
const timeLine = document.getElementById("time-range");
const volumeRange = document.getElementById("volume-range");
const bi = document.querySelector("#bi");

const playList = [
  "Ali Zand Vakili - Fasle Parishani.mp3",
  "Ali Zand Vakili - Fasle Parishani.mp3",
  "Ali Zand Vakili - Fasle Parishani.mp3",
];
let trak = 0;
playPauseBtn.addEventListener("click", () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseBtn.textContent = "Pause";
    const divItemPlay = document.createElement("i");
    divItemPlay.classList = "bi bi-pause-circle";
    playPauseBtn.appendChild(divItemPlay);
  } else {
    audioPlayer.pause();
    playPauseBtn.textContent = "Play";
    const divItemPlay = document.createElement("i");
    divItemPlay.classList = "bi bi-play-circle-fill";
    playPauseBtn.appendChild(divItemPlay);
  }
});
leftBtn.addEventListener("click", () => {
  if (trak > 0) {
    trak--;
  }
  audioPlayer.src = playList[trak];
  console.log(left);
});
rightBtn.addEventListener("click", () => {
  trak++;
  audioPlayer.src = playList[trak];
  console.log(right);
});
volumeRange.addEventListener("input", () => {
  audioPlayer.volume = volumeRange.value;
});

audioPlayer.addEventListener("loadedmetadata", () => {
  timeLine.max = audioPlayer.duration;
});
timeLine.addEventListener("input", () => {
  audioPlayer.currentTime = timeLine.value;
});
audioPlayer.addEventListener("timeupdate", () => {
  timeLine.value = audioPlayer.currentTime;
});

audioPlayer.controls = false;

document.querySelector("#time-range").oninput = function () {
  let value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background =
    "linear-gradient(to right, #82CFD0 0%, #82CFD0 " +
    value +
    "%, #fff " +
    value +
    "%, white 100%)";
};

document.querySelector("#volume-range").oninput = function () {
  let value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background =
    "linear-gradient(to right, #82CFD0 0%, #82CFD0 " +
    value +
    "%, #fff " +
    value +
    "%, white 100%)";
};

// document.querySelectorAll("#element1, #element2");
