import { CardGameViewItem } from "./CardGameViewItem";
import { PlayerStatus } from "./PlayerStatus";
import { PlayerRole } from "./PlayerRole";

export class PlayerNextRoundViewItem {
  GameId: number;
  RoundId: number;
  PlayerId: number;
  CardSum: number;
  UserName: string;
  PlayerStatus: PlayerStatus;
  PlayerRole: PlayerRole;
  Cards: CardGameViewItem[];
}
