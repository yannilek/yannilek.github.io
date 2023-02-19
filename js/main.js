const cards = [
  {
    image: './images/temperance.png',
    title: 'Temperance',
    color: 'violet',
    text: 'lorem ipsum blablabla <span>fqsldkjf</span> qsldkfjq qslkdjf qslkdjf qsdkljf',
  },
  {
    image: './images/papesse.png',
    title: 'Papesse',
    color: 'volt',
    text: 'lorem ipsum blablabla <span>fqsldkjf</span> qsldkfjq qslkdjf qslkdjf qsdkljf',
  },
  {
    image: './images/justice.png',
    title: 'Justice',
    color: 'violet',
    text: 'lorem ipsum blablabla <span>fqsldkjf</span> qsldkfjq qslkdjf qslkdjf qsdkljf',
  },
  {
    image: './images/monde.png',
    title: 'Monde',
    color: 'volt',
    text: 'lorem ipsum blablabla <span>fqsldkjf</span> qsldkfjq qslkdjf qslkdjf qsdkljf',
  },
];

for (let i = 0; i < cards.length; i++) {
  const cardData = cards[i];
  const card = document.createElement('div');
  card.className = `col-xl-6 ${cardData.color}`;
  card.innerHTML = `
    <div class="cardContainer">
      <div class="cardInner">
        <div class="cardFace cardFaceFront">
          <img class="fullWidth" src=${cardData.image} />
        </div>
        <div class="cardFace cardFaceBack d-flex">
          <div class="cardContent d-flex flex-column">
            <div class="cardHeader">
              <img src=${cardData.image} alt="" class="pp" />
            </div>
            <div class="cardBody text-center flex-grow-1">
              <h3>${cardData.title}</h3>
              <p>${cardData.text}</p>
            </div>
            <div class="pb-3 flex-shrink-1 d-flex justify-content-evenly">
                <img class="w-25" src=${cardData.color === 'violet' ? './images/ilek-violet.svg' : './images/ilek-volt.svg' } />
                <img class="w-25" src="./images/cfdt.png" />
            </div>
          </div>
        </div>
      </div>
    </div>`;

  card.addEventListener("click", function (e) {
    card.querySelector('.cardInner').classList.toggle('isFlipped');
  });

  if (i < 2) {
    document.querySelector('#cardsContainer1').append(card);
  } else {
    document.querySelector('#cardsContainer2').append(card);
  }
}
