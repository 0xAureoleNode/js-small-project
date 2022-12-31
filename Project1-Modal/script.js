// get the open btn
/*
const openBtn = document.querySelector('.open');
// get the modal-container
const container = document.querySelector('.modal-container');
// get the close btn
const closeBtn = document.querySelector('.modal-btn');


// event
openBtn.addEventListener('click', function () {
  container.classList.add('show');
});
closeBtn.addEventListener('click', function () {
  container.classList.remove('show');
});
*/

// 能不能用另外的方法实现？toggle
const btn = document.querySelector('.btn');
const container = document.querySelector('.modal-container');

btn.addEventListener('click', function () {
  container.classList.toggle('show');
});
