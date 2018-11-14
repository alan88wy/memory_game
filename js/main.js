var cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    }
];
var cardsInPlay=[];

var checkForMatch = function() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!")
    } else {
        alert("Sorry, try again.")
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

var flipCard = function() {
    
    var cardId = getRandomInt(4);
    // this.getAttribute('data-id');
    
    cardsInPlay.push(cards[cardId].rank);

    this.setAttribute('src', cards[cardId].cardImage);

    if (cardsInPlay.length === 2) {
        checkForMatch();
    }
}

var resetBoard = function() {

    imgList = document.querySelectorAll('img');
    
    // for (var i = 0; i < imgList.length; i++) {
    //     imgList[i].src= "images/back.png";
    // };

    // Can also do this

    // for (var item of imgList) {
    //     item.src= "images/back.png";
    // }


    Array.prototype.forEach.call(imgList, function (item) {
        item.src= "images/back.png";
      });

    cardsInPlay = [];
}
var createBoard = function() {
  
    for (var i = 0; i < cards.length; i++) {
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', "images/back.png");
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        document.getElementById('game-board').appendChild(cardElement);
    }

}

createBoard();

btn = document.getElementById('reset');

btn.addEventListener('click', resetBoard);

