import React, { PropTypes, Component } from 'react';
import { View, Navigator, Button, Text } from 'react-native';

import Board from '../app/board/Board';
import ScoreCircle from '../app/score/ScoreCircle';
import createPlayer from '../awale/player/Player';
import {
    create as createGame,
    playTurn,
} from '../awale/game/Game';

export default class Play extends Component {
    static propTypes = {
        navigator: PropTypes.instanceOf(Navigator).isRequired,
        againstComputer: PropTypes.bool.isRequired,
    }

    constructor(props) {
        super(props);

        this.state = {
            game: this.getGameModel(),
        };
    }

    getGameModel() {
        return createGame([createPlayer(0), createPlayer(1, !this.props.againstComputer)]);
    }

    handleGoHomeClick = () => {
        this.props.navigator.replace({ id: 'Welcome' });
    }

    pickPebble = (position) => {
        const nextGame = playTurn(this.state.game, position);
        this.setState({ game: nextGame });
    }

    render() {
        const { game } = this.state;
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
                    />
                </View>

                <View>
                    <ScoreCircle score={game.score[0]} highlight={highlightPlayerOne} orientation="right" />
                </View>

            </View>
        );
    }
}
