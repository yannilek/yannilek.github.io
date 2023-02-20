const cards = [
  {
    image: './images/temperance.png',
    title: 'Nos activités sociales',
    color: 'violet',
    text: 'Comprendre les besoins de chacun·e.<br>Définir des <span>avantages</span> accessibles <span>pour tous·tes</span> à Toulouse et ailleurs.',
    cfdText: 'Avec la CFDT, préparez <span>l\'avenir</span>',
  },
  {
    image: './images/papesse.png',
    title: 'Nos rémunérations',
    color: 'volt',
    text: 'Définir des règles <span>justes et factuelles</span> pour nos rémunérations, nos évolutions professionnelles, la reconnaissance de notre travail.',
    cfdText: 'Avec la CFDT, soyez <span>accompagné·es</span>',
  },
  {
    image: './images/justice.png',
    title: 'Nos conditions de travail',
    color: 'violet',
    text: 'Mettre en place et développer des actions concrètes et récurrentes pour <span>préserver notre santé</span>.<br>Combattre l\'isolement et <span>assurer la prévention</span> des risques.',
    cfdText: 'Avec la CFDT, préservez <span>votre santé</span>',
  },
  {
    image: './images/monde.png',
    title: 'Notre temps de travail',
    color: 'volt',
    text: 'Négocier l\'évolution du temps de travail.<br>Préserver <span>l\'harmonie</span> entre <span>vie professionnelle</span> et <span>vie personnelle</span> pour tous·tes.',
    cfdText: 'Avec la CFDT, soyez <span>représenté·es</span>',
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
        <div class="cardFace cardFaceBack d-flex justify-content-center">
          <div class="cardContent d-flex flex-column">
            <div class="cardHeader d-flex justify-content-center">
              <img src=${cardData.image} alt="" class="pp" />
            </div>
            <div class="cardBodyTitle text-center">
              <p>${cardData.title}</p>
            </div>
            <div class="cardBody text-center">${cardData.text}</div>
            <div class="cardTagline text-center">
              <p>${cardData.cfdText}</p>
            </div>
            <div class="cardFooter pb-3 d-flex justify-content-evenly">
                <img class="footerLogo" src=${cardData.color === 'violet' ? './images/ilek-violet.svg' : './images/ilek-volt.svg' } />
                <img class="footerLogo" src="./images/cfdt.png" />
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
