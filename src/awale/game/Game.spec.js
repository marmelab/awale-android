import {
    create,
    convertPlayerPosition,
    convertPositionToBoardPosition,
    playTurn,
} from './Game';

import { PIT_COUNT } from '../constants/Constants';
import createPlayer from '../player/Player';
import { initBoardTest } from '../board/Board';

describe('Game', () => {
    it('create should return current player One', () => {
        const game = create([createPlayer(0), createPlayer(1)]);
        expect(game.currentIndexPlayer).toEqual(0);
    });

    it('Convert player position from player one', () => {
        for (let i = 1; i <= 6; i += 1) {
            const position = convertPlayerPosition(i, 0);
            expect(position).toEqual((i - 1));
        }
    });

    it('Convert player position from player two', () => {
        for (let i = 1; i <= 6; i += 1) {
            const position = convertPlayerPosition(i, 1);
            expect(position).toEqual((PIT_COUNT - i));
        }
    });

    it('Convert position to board position from player one', () => {
        for (let i = 0; i <= 5; i += 1) {
            const position = convertPositionToBoardPosition(i, 0);
            expect(position).toEqual((i + 1));
        }
    });

    it('Convert position to board position from player two', () => {
        for (let i = 6; i <= 11; i += 1) {
            const position = convertPositionToBoardPosition(i, 1);
            expect(position).toEqual((PIT_COUNT - i));
        }
    });

    it('Play turn for new game should return expected game', () => {
        const game = create([createPlayer(0), createPlayer(1)]);
        const expectedGame = create([createPlayer(0), createPlayer(1)]);

        expectedGame.board = initBoardTest([
            4, 4, 4, 4, 4, 4,
            4, 0, 5, 5, 5, 5,
        ]);

        const currentGame = playTurn(game, 1);
        expect(currentGame).toEqual(expectedGame);
    });
});
