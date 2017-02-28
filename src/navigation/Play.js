import React, { PropTypes, Component } from 'react';
import { View, Navigator, Button } from 'react-native';

import Board from '../app/board/Board';
import createPlayer from '../awale/player/Player';
import { create as createGame,
         playTurn,
         getCurrentPlayer,
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

        return (
            <View>
                <View>
                    <Button onPress={this.handleGoHomeClick} title="Back to home" />
                </View>

                <View>
                    <Board
                        board={game.board}
                        currentIndexPlayer={game.currentIndexPlayer}
                        pickPebble={this.pickPebble}
                    />
                </View>
            </View>
        );
    }
}
