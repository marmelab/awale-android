import React, { PropTypes, Component } from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    pit: {
        borderRadius: 20,
        height: 40,
        width: 40,
        marginLeft: 10,
        marginTop: 10,
        backgroundColor: 'red',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    disabled: {
        backgroundColor: 'orange',
    },
});

export default class PitButton extends Component {
    static propTypes = {
        onPress: PropTypes.func.isRequired,
        pitValue: PropTypes.number.isRequired,
        pitIndex: PropTypes.number.isRequired,
        enabled: PropTypes.bool,
    }

    static defaultProps = {
        enabled: true,
    }

    pickPebble = () => {
        this.props.onPress(this.props.pitIndex);
    }

    render() {
        return (
            !this.props.enabled ?
                <Text style={[styles.pit, styles.disabled]}>{this.props.pitValue}</Text> :
                <Text onPress={this.pickPebble} style={styles.pit}>{this.props.pitValue}</Text>
        );
    }
}
