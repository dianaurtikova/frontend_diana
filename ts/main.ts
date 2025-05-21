interface Card {
    card_foto: string;
    card_name: string;
    card_description: string;
    card_link:string;
}

function showCard(card: Card): void {
  const infCards = document.getElementById("information-cards");
  console.log(infCards);
   const newCard:string =  `
    <div class="card">
      <img src="${card.card_foto}" class="card1">
      <div class="cardText">
        <h3><b>${card.card_name}</b></h3>
        <p>${card.card_description}</p>
        <p>${card.card_link}</p>
      </div>
    </div>
  `;
  infCards.innerHTML += newCard;
}

function showAllCards(cards: Card[]):void {
  for (let i = 0; i < cards.length; i++) {
    showCard(cards[i]);
  }
}
fetch('https://jsonplaceholder.typicode.com/comments?_limit=4')
  .then(response =>  response.json())
  .then(json => {
    const cards =json.map((comment:any, index:number) => ({
      card_foto: "img/card1.1.png", 
      card_name: `Comment ${index + 1}`,
      card_description: comment.body,
      card_link: 'Learn More',
    }));
    showAllCards(cards);
  })