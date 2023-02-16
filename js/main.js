const cards = document.querySelectorAll(".cardInner");

// const unflipAll = () => cards.forEach(card => card.classList.remove('isFlipped'));

// cards.forEach(card => card.addEventListener("click", function (e) {
//   let isFlipped = false;
//   if (card.classList.contains('isFlipped')) {
//     isFlipped = true;
//   }
//   unflipAll();

//   if (isFlipped) {
//     card.classList.remove('isFlipped');
//   } else {
//     card.classList.add('isFlipped');
//   }
// }));

cards.forEach(card => card.addEventListener("click", function (e) {
  card.classList.toggle('isFlipped');
}));
