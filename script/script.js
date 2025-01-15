const sticky = document.querySelector('.sticky-top');
const offCanvas = document.querySelector('.offcanvas');

offCanvas.addEventListener('show.bs.offcanvas', function () {
  sticky.style.overflow = 'visible';
});

offCanvas.addEventListener('hidden.bs.offcanvas', function () {
  sticky.style.overflow = 'hidden';
});
