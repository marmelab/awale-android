import React, { PropTypes, Component } from 'react';
import { View, Text, Navigator, Button } from 'react-native';

export default class Welcome extends Component {
    static propTypes = {
        navigator: PropTypes.instanceOf(Navigator).isRequired,
    }

    startPlaying(playAgainstComputer) {
        this.props.navigator.replace({ id: 'Play', againstComputer: playAgainstComputer });
    }

    render() {
        return (
            <View>
                <View >
                    <Text>Awale</Text>
                </View>
                <View >
                    <View style={{ marginBottom: 30 }}>
                        <Button title="Play against computer" onPress={() => this.startPlaying(true)} />
                    </View>
                    <View style={{ marginBottom: 30 }}>
                        <Button title="Play against another player" onPress={() => this.startPlaying(false)} />
                    </View>
                </View>
            </View>
        );
    }
}
