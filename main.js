
class ExpandedCards {
    constructor(expandingCardsWrapper) {
        try {
            let cards = expandingCardsWrapper.querySelectorAll("[data-card]");
            ExpandedCards.expandOnclick(cards);
        } catch(e){
            console.log("Oops an error occured ", e);
        }
    }

    static shrinkAllCards(cards) {
        cards.forEach(card => {
            card.classList.remove("active");
            card.setAttribute("data-expanded", "false");
        });
    }

    static expandCard(card) {
        card.classList.add("active");
        card.setAttribute("data-expanded", "true");
    }

    static expandOnclick(cards) {
        cards.forEach(card => {
            card.addEventListener("click", function () {
                ExpandedCards.shrinkAllCards(cards); // make all cards shrunk
                ExpandedCards.expandCard(card); // make the clicked one expanded
            });
        });
    }
}

new ExpandedCards(document.querySelector("[data-expanding-cards]"));
