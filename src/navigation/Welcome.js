import React, { PropTypes, Component } from 'react';
import { View, Text, Navigator, Button } from 'react-native';

export default class Welcome extends Component {
    static propTypes = {
        navigator: PropTypes.instanceOf(Navigator).isRequired,
    }

    startPlayingWithIA = () => {
        this.props.navigator.replace({ id: 'Play', againstComputer: true });
    }

    startPlayingWithPlayer = () => {
        this.props.navigator.replace({ id: 'Play', againstComputer: false });
    }

    render() {
        return (
            <View>
                <View >
                    <Text>Awale</Text>
                </View>
                <View >
                    <View style={{ marginBottom: 30 }}>
                        <Button title="Play against computer" onPress={this.startPlayingWithIA} />
                    </View>
                    <View style={{ marginBottom: 30 }}>
                        <Button title="Play against another player" onPress={this.startPlayingWithPlayer} />
                    </View>
                </View>
            </View>
        );
    }
}
