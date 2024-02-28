
{
let cards = document.querySelectorAll(".cards-wrapper .card");
    cards.forEach(card => {
        card.addEventListener("click", function () {
            shrinkCards();
            expandCard(card);
        });
    });

    function shrinkCards() {
        cards.forEach(card => {
            card.classList.remove("active");
            card.setAttribute("data-expanded", "false");
        });
    }

    function expandCard(card) {
        card.classList.add("active");
        card.setAttribute("data-expanded", "true");
    }

}