export class DetailHistoryView {
    userName: string;
    status: string;
    cardSum: number;
    cards: CardHistoryViewItem[];
}

export class CardHistoryViewItem {
    id: number;
    rank: string;
    suit: string;
    value: number;
}