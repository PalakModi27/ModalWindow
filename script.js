'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

//only one of the many same-named classes will be selected from queryselector
//const btnShowModal = document.querySelector('.show-modal');
//console.log(btnShowModal);
//so we use queryselectorAll

const btnShowModal = document.querySelectorAll('.show-modal');
//console.log(btnShowModal);
//for (let i = 0; i < btnShowModal.length; i++) {
//  console.log(btnShowModal[i]);
//}

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', function () {
    console.log('Button clicked!');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  //console.log('Key pressed');
  //console.log(e.key);
  //if (e.key === 'Escape') console.log('Escape was pressed');

  //if modal does not contain hidden class, then close the modal using escape otherwise nothing
  //will happen
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
});
