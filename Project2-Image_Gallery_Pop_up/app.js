const initImg = document.querySelectorAll('.gallery img');
const modal = document.querySelector('.modal');
const finalImg = document.querySelector('.full-img');

initImg.forEach(function (img) {
  img.addEventListener('click', function () {
    modal.classList.add('open');
    finalImg.classList.add('open');

    const originalAttribute = img.getAttribute('alt');
    finalImg.setAttribute('src', `img/full/${originalAttribute}.jpg`);
  });
});

modal.addEventListener('click', function (e) {
  if (e.target.classList.contains('modal')) {
    modal.classList.remove('open');
    finalImg.classList.remove('open');
  }
});
