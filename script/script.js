const sticky = document.querySelector('.sticky-top');
const offCanvas = document.querySelector('.offcanvas');

offCanvas.addEventListener('show.bs.offcanvas', function () {
  sticky.style.overflow = 'visible';
});

offCanvas.addEventListener('hidden.bs.offcanvas', function () {
  sticky.style.overflow = 'hidden';
});

let open = localStorage.getItem('status');
if (!open) {
  localStorage.setItem('status', 'unopened');
}

if (open === 'unopened') {
  dissableScroll();
}
if (open === 'opened') {
  enableScroll();
}

function dissableScroll() {
  const rootElement = document.querySelector(':root');
  scrollTop = window.pageXOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageYOffset || document.documentElement.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(scrollTop, scrollLeft);
  };
  rootElement.style.scrollBehavior = 'auto';
  localStorage.setItem('status', 'unopened');
}

function enableScroll() {
  const rootElement = document.querySelector(':root');
  window.onscroll = function () {};
  rootElement.style.scrollBehavior = 'smooth';
  localStorage.setItem('status', 'opened');
}
