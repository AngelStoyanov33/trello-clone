export const createCard = (card) => {
    if (localStorage.getItem("cards") == null) {
        var cards = [];
        cards.push(card);
        localStorage.setItem("cards", JSON.stringify(cards));
    } else {
        var cards = JSON.parse(localStorage.getItem("cards"));
        cards.push(card);
        localStorage.setItem("cards", JSON.stringify(cards));
    }
}

export const getCardById = (cardId) => {
    if (localStorage.getItem("cards") == null) {
        return null;
    }
    var cards = JSON.parse(localStorage.getItem("cards"));
    for (var i = 0; i < cards.length; i++) {
        if (cards[i].cardId === cardId) {
            return cards[i];
        }
    }
    return null;
}

export const getAllCardsByColumnId = (columnId) => {
    if (localStorage.getItem("cards") == null) {
        return [];
    }
    var cards = JSON.parse(localStorage.getItem("cards"));
    var cardsByColumnId = [];
    for (var i = 0; i < cards.length; i++) {
        if (cards[i].columnId === columnId) {
            cardsByColumnId.push(cards[i]);
        }
    }
    return cardsByColumnId;
}

export const sortCardsByTimestamp = () => {
    if (localStorage.getItem("cards") == null) {
        return [];
    }
    var cards = JSON.parse(localStorage.getItem("cards"));
    if (cards.length <= 10) {
        return cards;
    } else {
        const sortedDates = cards.sort((cardA, cardB) => cardB.creation_date - cardA.creation_date)
        return sortedDates.slice(0, 10);
    }
}

export const deleteCard = (cardId) => {
    if (localStorage.getItem("cards") == null) {
        return;
    }
    var cards = JSON.parse(localStorage.getItem("cards"));
    for (var i = 0; i < cards.length; i++) {
        if (cards[i].cardId === cardId) {
            cards.splice(i, 1);
            localStorage.setItem("cards", JSON.stringify(cards));
            return;
        }
    }
}