export class DetailHistoryView {
    userName: string;
    status: string;
    cardSum: number;
    cards: CardHistoryView[];
}

export class CardHistoryView {
    id: number;
    rank: string;
    suit: string;
    value: number;
}