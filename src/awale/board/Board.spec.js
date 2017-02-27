import {
    create,
    dealPosition,
    isStarving,
    isPickPossible,
    pick,
    willStarvePlayer,
    canFeedPlayer,
} from './Board';

import createPlayer from '../player/Player';

describe('Board', () => {
    it('create should return valid board', () => {
        const expectedBoard = Array(12).fill(4);
        expect(create()).toEqual(expectedBoard);
    });

    it('Board size even should throw an Error on invalid board size', () => {
        const evenSizeBoard = () => {
            create(13, 4);
        };
        expect(evenSizeBoard).toThrowError();
    });

    it('Is pick posible should return true for position zero', () => {
        const board = create();
        board[0] = 2;
        expect(isPickPossible(board, 0, 5, 0)).toEqual(true);
    });

    it('Is pick posible should return false for position zero', () => {
        const board = create();
        board[0] = 2;
        expect(isPickPossible(board, 6, 11, 0)).toEqual(false);
    });

    it('Is starving for empty side should return true', () => {
        const board = create();
        for (let i = 6; i <= 11; i += 1) {
            board[i] = 0;
        }
        expect(isStarving(board, 6, 11)).toEqual(true);
    });

    it('Is starving for new board should return false', () => {
        const board = create();
        expect(isStarving(board, 0, 5)).toEqual(false);
    });

    it('Is starving for empty board should return true', () => {
        const board = create(12, 0);
        expect(isStarving(board, 0, 5)).toEqual(true);
    });

    it('Can feed player for new board should return true', () => {
        const board = create();
        const playerOne = createPlayer(0);
        expect(canFeedPlayer(playerOne, board)).toEqual(true);
    });

    it('Can feed player for empty board should return true', () => {
        const board = create();
        for (let i = 6; i <= 11; i += 1) {
            board[i] = 0;
        }
        const playerOne = createPlayer(0);
        expect(canFeedPlayer(playerOne, board)).toEqual(true);
    });

    it('Can feed player for empty side position should return false', () => {
        const board = create(12, 0);
        board[0] = 5;
        board[1] = 0;
        board[2] = 2;
        board[3] = 0;
        board[4] = 1;
        board[5] = 0;

        const playerOne = createPlayer(0);
        expect(canFeedPlayer(playerOne, board)).toEqual(false);
    });
});
