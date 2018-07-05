"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PlayerRole_1 = require("./PlayerRole");
var PlayerStatus_1 = require("./PlayerStatus");
exports.Rounds = [
    {
        GameId: 1,
        isResultComplete: false,
        Users: [{
                GameId: 1,
                RoundId: 1,
                PlayerId: 1,
                CardSum: 20,
                UserName: 'Peter',
                PlayerRole: PlayerRole_1.PlayerRole.Human,
                PlayerStatus: PlayerStatus_1.PlayerStatus.DefaultValue,
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
                PlayerRole: PlayerRole_1.PlayerRole.Bot,
                PlayerStatus: PlayerStatus_1.PlayerStatus.DefaultValue,
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
                PlayerRole: PlayerRole_1.PlayerRole.Dealer,
                PlayerStatus: PlayerStatus_1.PlayerStatus.DefaultValue,
                Cards: [{
                        Id: 3,
                        Rank: 'Ace',
                        Suit: 'Diamond',
                        Value: 10
                    }]
            }]
    }
];
//# sourceMappingURL=mock-rounds.js.map