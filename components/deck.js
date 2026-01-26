const SUITS = ["S", "H", "D", "C"];
const VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

export const makeNewDeck = () => {
  const deck = [];
  for (const suit of SUITS) {
    for (const value of VALUES) {
      deck.push(`${value}${suit}`);
    }
  }
  return deck;
};

export const shuffleDeck = (deck) => {
  const d = [...deck];
  for (let i = d.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [d[i], d[j]] = [d[j], d[i]];
  }
  return d;
};

export const deal = (deck, count) => {
  const hand = deck.slice(0, count);
  const rest = deck.slice(count);
  return { hand, deck: rest };
};
