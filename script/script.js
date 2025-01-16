const sticky = document.querySelector('.sticky-top');
const offCanvas = document.querySelector('.offcanvas');

offCanvas.addEventListener('show.bs.offcanvas', function () {
  sticky.style.overflow = 'visible';
});

offCanvas.addEventListener('hidden.bs.offcanvas', function () {
  sticky.style.overflow = 'hidden';
});

// dissable enable scroll
// let open = localStorage.getItem('status');
// if (!open) {
//   localStorage.setItem('status', 'unopened');
// }

// if (open === 'unopened') {
//   dissableScroll();
// }
// if (open === 'opened') {
//   enableScroll();
// }
const rootElement = document.querySelector(':root');
const audioIconWrapper = document.querySelector('.audio-icon-wrapper');
const song = document.querySelector('#song');
const pauseIcon = document.querySelector('.btn-pause');
const playIcon = document.querySelector('.btn-play');
let isPlaying = false;

function dissableScroll() {
  scrollTop = window.pageXOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageYOffset || document.documentElement.scrollLeft;
  window.onscroll = function () {
    window.scrollTo(scrollTop, scrollLeft);
  };
  rootElement.style.scrollBehavior = 'auto';
  localStorage.setItem('status', 'unopened');
}

function enableScroll() {
  window.onscroll = function () {};
  rootElement.style.scrollBehavior = 'smooth';
  localStorage.setItem('status', 'opened');
  audioIconWrapper.style.display = 'flex';

  playAudio();
  isPlaying = true;
}

audioIconWrapper.onclick = function () {
  if (isPlaying) {
    song.pause();
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'flex';
    isPlaying = false;
  } else if (isPlaying === false) {
    playAudio();
    isPlaying = true;
    pauseIcon.style.display = 'none';
    playIcon.style.display = 'flex';
  }
};

function playAudio() {
  song.volume = 0.1;
  song.play();
}

dissableScroll();

const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get('n') || '';
const namaContainer = document.querySelector('#hero h4 span');
const pronounce = urlParams.get('p') || 'Bapak/Ibu/Saudara/i';
namaContainer.innerText = `${pronounce} ${nama},`.replace(/ ,$/, ',');

document.querySelector('#nama').value = nama;
