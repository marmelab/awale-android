import React, { PropTypes, Component } from 'react';
import { View, Navigator, Button, Alert } from 'react-native';

import { GAME_CONTINUE } from '../awale/constants/Constants';
import Board from '../app/board/Board';
import ScoreCircle from '../app/score/ScoreCircle';
import createPlayer from '../awale/player/Player';
import {
    create as createGame,
    playTurn,
    getCurrentPlayer,
    checkWinner,
} from '../awale/game/Game';
import { canPlayerPlayPosition } from '../awale/board/Board';

import config from '../../config';

export default class Play extends Component {
    static propTypes = {
        navigator: PropTypes.instanceOf(Navigator).isRequired,
        againstComputer: PropTypes.bool.isRequired,
    }

    constructor(props) {
        super(props);

        this.state = {
            game: this.getGameModel(),
            canPlay: true,
        };
    }

    getGameModel() {
        return createGame([createPlayer(0), createPlayer(1, !this.props.againstComputer)]);
    }

    handleGoHomeClick = () => {
        this.props.navigator.replace({ id: 'Welcome' });
    }

    handlePlayAgainClick = () => {
        this.setState({ game: this.getGameModel() });
    }

    showGameStatus = (gameState) => {
        const message = `Player ${gameState + 1} wins !`;
        Alert.alert(
            'Game winner',
            message,
            [
                {
                    text: 'Back to home ',
                    style: 'cancel',
                    onPress: this.handleGoHomeClick,
                },
                {
                    text: 'Play again',
                    style: 'default',
                    onPress: this.handlePlayAgainClick,
                },
            ],
            {
                cancelable: false,
            },
         );
    }

    pickPebble = (position) => {
        const player = getCurrentPlayer(this.state.game);
        const canPlay = canPlayerPlayPosition(player, this.state.game.board, position);
        if (!canPlay) {
            return;
        }

        let nextGame = playTurn(this.state.game, position);
        this.setState({ game: nextGame });

        nextGame = checkWinner(nextGame);
        if (nextGame.gameState !== GAME_CONTINUE) {
            this.showGameStatus(nextGame.gameState);
        } else {
            this.checkComputerTurn(nextGame);
        }
    }

    checkComputerTurn = (game) => {
        const player = getCurrentPlayer(game);
        if (player.isHuman || !this.props.againstComputer) {
            return;
        }

        this.setState({ canPlay: false });
        this.fetchColumn(game).then((bestPosition) => {
            this.pickPebble(bestPosition);
            this.setState({ canPlay: true });
        });
    }

    fetchColumn = (game) => {
        return fetch(config.apiUrl, {
            method: 'POST',
            body: JSON.stringify({ Score: game.score, Board: game.board }),
        })
        .then(response => response.text())
        .then(parseInt);
    }

    render() {
        const { game, canPlay } = this.state;
        const highlightPlayerOne = (game.currentIndexPlayer === 0);

        return (
            <View>
                <View>
                    <Button onPress={this.handleGoHomeClick} title="Back to home" />
                </View>

                <View>
                    <ScoreCircle score={game.score[1]} highlight={!highlightPlayerOne} orientation="left" />
                </View>

                <View>
                    <Board
                        board={game.board}
                        currentIndexPlayer={game.currentIndexPlayer}
                        pickPebble={this.pickPebble}
                        canPlay={canPlay}
                    />
                </View>

                <View>
                    <ScoreCircle score={game.score[0]} highlight={highlightPlayerOne} orientation="right" />
                </View>

            </View>
        );
    }
}
