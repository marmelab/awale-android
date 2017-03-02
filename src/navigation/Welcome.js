import React, { PropTypes, Component } from 'react';
import { View, Text, Navigator, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: '#1abc9c',
    },
    header: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    title: {
        fontSize: 80,
        color: '#ecf0f1',
        marginTop: 16,
    },
    content: {
        flex: 2,
    },
    button: {
        marginBottom: 10,
    },
});

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
            <View style={styles.view}>
                <View style={styles.header}>
                    <Text style={styles.title}>Awale</Text>
                </View>
                <View style={styles.content}>
                    <View style={{ marginBottom: 30 }}>
                        <Button title="Play against computer" onPress={this.startPlayingWithIA} color="#138a72" />
                    </View>
                    <View style={{ marginBottom: 30 }}>
                        <Button title="Play against another player" onPress={this.startPlayingWithPlayer} color="#138a72" />
                    </View>
                </View>
            </View>
        );
    }
}
