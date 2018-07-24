import { CardGameViewItem } from './CardGameViewItem';
import { PlayerRole } from './enums/PlayerRole';
import { PlayerStatus } from './enums/PlayerStatus';



export class PlayerNextRoundViewItem {
    cardSum: number;
    cards: CardGameViewItem[];
    gameId: number;
    playerId: number;
    playerRole: PlayerRole;
    playerStatus: PlayerStatus;
    roundId: number;
    userName: string;
}