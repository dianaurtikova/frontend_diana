// const cards = {
//     card_1: {
//         card_foto: "img/card1.1.png",
//         card_name: "Portal TV",
//         card_description: "Smart video calling on the biggest screen in your home",
//         card_link: "Learn More",
//     },
//     card_2: {
//         card_foto: "img/card1.2.png",
//         card_name: "Portal",
//         card_description: "Smart video calling on a 10” HD display",
//         card_link: "Learn More",
//     },
//     card_3: {
//         card_foto: "img/card1.3.png",
//         card_name: "Portal+",
//         card_description: "Smart video calling on a 15.6”",
//         card_link: "Learn More",
//     },
//     card_4: {
//         card_foto: "img/card1.4.png",
//         card_name: "Portal Mini",
//         card_description: "Smart video calling on an 8” HD display”",
//         card_link: "Learn More",
//     },
// }
// function showCard(card) {
//     let infCards = document.getElementById("information-cards");
//     let newCard = `
//     <div class="card">
//                  <img src=${card.card_foto} class="card1">
//                  <div class="cardText">
//                     <h3><b>${card.card_name}</b></h3>
//                     <p>${card.card_description}</p>
//                     <p>${card.card_link}</p>
//                  </div>
//     </div>
//     `;
//     infCards.innerHTML+= newCard;
// }
// function showAllCard(cards){
//     const cardArray=Object.values(cards);
//     for (let i=0;i<cardArray.length;i++){
//         showCard(cardArray[i]);
//     }
// }
// showAllCard(cards);

//2.1 слайдер
const swiper1 = new Swiper('.swiper.swiper', {
    loop: true,
    slidesPerView: 4,   
    slidesPerGroup: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

//2.2 форма
function closeBackdrop(el, ev) {
  if (el == ev.target) el.classList.add("off1")
  document.documentElement.style.overflow = "auto"
}
function openBackdrop() {
  document.getElementsByClassName("backdrop")[0].classList.remove("off1");
  document.documentElement.style.overflow = "hidden"
}
//3 задание
// fetch('https://jsonplaceholder.typicode.com/comments?_limit=4')
//   .then(response => response.json())
//   .then(json => {
//     const cards = json.map((comment, index) => ({
//       card_foto: "img/card1.1.png", 
//       card_name: `Comment ${index + 1}`,
//       card_description: comment.body,
//       card_link: 'Learn More',
//     }));
//     showAllCard(cards);
//   });
