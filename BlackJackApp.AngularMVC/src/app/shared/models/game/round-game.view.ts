import { PlayerRoleEnumView } from '../enums/player-role-enum.view';
import { PlayerStatusEnumView } from '../enums/player-status-enum.view';


export class RoundGameView {
    gameId: number;
    isResultComplete: boolean;
    users: PlayerNextRoundView[];
}

export class PlayerNextRoundView {
    cardSum: number;
    cards: CardGameViewItem[];
    gameId: number;
    playerId: number;
    playerRole: PlayerRoleEnumView;
    playerStatus: PlayerStatusEnumView;
    roundId: number;
    userName: string;
}

export class CardGameViewItem {
    id: number;
    rank: string;
    suit: string;
    value: number;
}