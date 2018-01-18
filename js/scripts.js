$(document).ready(function() {
  var suits = ["hearts", "diamonds", "spades", "clubs"]
  var values = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king", "ace"]

deckOfCards = []

  $("button.btn").click(function(event) {
    suits.forEach(function(suit) {
      values.forEach(function(value) {
        deckOfCards.push(" " + value + " of " + suit);
      });
    });
    alert(deckOfCards);
    $("p.deck").text(deckOfCards);
    event.preventDefault();
  });
});
