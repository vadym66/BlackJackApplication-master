import { PlayerNextRoundViewItem } from "./PlayerNextRoundViewItem";

export class RoundGameViewModel {
    gameId: number;
    isResultComplete: boolean;
    users: PlayerNextRoundViewItem[];
}