type CardId = number;

interface Card {
  id: CardId;
  source: number;
}

export const cards: Card[] = [
  {
    id: 0,
    source: require('../../assets/examples/card1.png'),
  },
  {
    id: 1,
    source: require('../../assets/examples/card2.png'),
  },
  {
    id: 2,
    source: require('../../assets/examples/card3.png'),
  },
];
