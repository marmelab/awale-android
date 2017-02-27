import { PIT_COUNT, PEBBLE_COUNT, GAME_CONTINUE } from '../constants/Constants';
import {
     create as createBoard,
     willStarvePlayer,
     dealPosition,
     pick,
     getWinner,
 } from '../board/Board';

export function create(players) {
    const board = createBoard(PIT_COUNT, PEBBLE_COUNT);
    return {
        board,
        score: [0, 0],
        players,
        currentIndexPlayer: 0,
        gameState: GAME_CONTINUE,
    };
}

export function isFinished(game) {
    return game.gameState !== GAME_CONTINUE;
}

export function getCurrentPlayer(game) {
    return game.players[game.currentIndexPlayer];
}

export function convertPlayerPosition(position, indexPlayer) {
    if (indexPlayer === 1) {
        return PIT_COUNT - position;
    }
    return position - 1;
}

export function convertPositionToBoardPosition(position, indexPlayer) {
    if (indexPlayer === 1) {
        return PIT_COUNT - position;
    }
    return position + 1;
}

export function switchPlayer(game) {
    const newGame = Object.assign({}, game);
    newGame.currentIndexPlayer = 1 - game.currentIndexPlayer;
    return newGame;
}

export function playTurn(game, position) {
    const newGame = Object.assign({}, game);
    const player = getCurrentPlayer(newGame);

    const isStarving = willStarvePlayer(player, newGame.board, position);
    if (isStarving) {
        const deal = dealPosition(newGame.board, position);
        newGame.board = deal.board;
        return game;
    }

    const newResult = pick(player, newGame.board, position, game.score);
    newGame.board = newResult.board;
    newGame.score = newResult.score;
    return newGame;
}

export function checkWinner(game) {
    if (game.gameState !== GAME_CONTINUE) {
        return game;
    }

    const newGame = Object.assign({}, game);
    const player = getCurrentPlayer(newGame);
    newGame.gameState = getWinner(player, newGame.board, newGame.score);
    return newGame;
}
