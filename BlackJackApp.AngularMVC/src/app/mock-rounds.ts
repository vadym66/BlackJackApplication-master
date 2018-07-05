import { RoundGameViewModel } from './RoundGameViewModel';
import { PlayerNextRoundViewItem } from './PlayerNextRoundViewItem';
import { CardGameViewItem } from './CardGameViewItem';

import { PlayerRole } from './PlayerRole';
import { PlayerStatus } from './PlayerStatus';

export const Rounds: RoundGameViewModel[] = [
  {
    GameId: 1,
    isResultComplete: false,
    Users: [{
      GameId: 1,
      RoundId: 1,
      PlayerId: 1,
      CardSum: 20,
      UserName: 'Peter',
      PlayerRole: PlayerRole.Human,
      PlayerStatus: PlayerStatus.DefaultValue,
      Cards: [{
        Id: 3,
        Rank: 'Ace',
        Suit: 'Diamond',
        Value: 10
      }]
    }]
  },
  {
    GameId: 1,
    isResultComplete: false,
    Users: [{
      GameId: 1,
      RoundId: 1,
      PlayerId: 1,
      CardSum: 20,
      UserName: 'Sam',
      PlayerRole: PlayerRole.Bot,
      PlayerStatus: PlayerStatus.DefaultValue,
      Cards: [{
        Id: 3,
        Rank: 'Ace',
        Suit: 'Diamond',
        Value: 10
      }]
    }]
  }, {
    GameId: 1,
    isResultComplete: false,
    Users: [{
      GameId: 1,
      RoundId: 1,
      PlayerId: 1,
      CardSum: 20,
      UserName: 'Dealer',
      PlayerRole: PlayerRole.Dealer,
      PlayerStatus: PlayerStatus.DefaultValue,
      Cards: [{
        Id: 3,
        Rank: 'Ace',
        Suit: 'Diamond',
        Value: 10
      }]
    }]
  }
];
