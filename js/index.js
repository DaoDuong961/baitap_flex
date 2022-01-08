// // get elements
// var cards = document.getElementsByClassName("card");
// var cardNames = document.getElementsByClassName("card__name");
// var FilmsInfor = document.getElementById("film__infor");

// // thêm event để lắng nghe click mỗi thẻ card 
// for(var i=0; i < cards.length; i++){
//     cards[i].addEventListener("click", () => {
//         FilmsInfor.innerHTML = `Selected name:  ${cardNames[7].innerHTML}`;
//     })
// }



// GET ELEMENTS
const cards = document.getElementsByClassName("card");
const selectedName = document.getElementById("film__infor");

/**
 * GET VILLAIN BY CARD INDEX
 * @param {*} cardIndex
 * @returns
 */
const showNameByIndex = (cardIndex) => {
  switch (cardIndex) {
    case 0:
      return "Iron Man";
    case 1:
      return "Spider Man";
    case 2:
      return "Doctor Strange";
    case 3:
      return "Captain American";
    case 4:
      return "Spider Man";
    case 5:
      return "Captain American";
    case 6:
      return "Iron Man";
    case 7:
      return "Doctor Strange";
  }
};

/**
 * Add event to listen the click for each card
 */
[].forEach.call(cards, (card, index) => {
  card.addEventListener("click", () => {
    selectedName.innerText = `Selected Villain: ${showNameByIndex(index)}`;
  });
});
