import React, { PropTypes, Component } from 'react';
import { View, Navigator, Button } from 'react-native';

import Board from '../app/board/Board';

export default class Play extends Component {
    static propTypes = {
        navigator: PropTypes.instanceOf(Navigator).isRequired,
        againstComputer: PropTypes.bool.isRequired,
    }

    constructor(props) {
        super(props);

        this.state = {
            cells: Array(12).fill(4),
        };
    }

    handleGoHomeClick = () => {
        this.props.navigator.replace({ id: 'Welcome' });
    }

    render() {
        const { cells } = this.state;

        return (
            <View>
                <View>
                    <Button onPress={this.handleGoHomeClick} title="Back to home" />
                </View>

                <View>
                    <Board board={cells} />
                </View>
            </View>
        );
    }
}
