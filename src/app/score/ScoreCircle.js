import React, { PropTypes, Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    true: {
        color: 'white',
    },
    false: {
        color: 'white',
        opacity: 0.5,
    },
    circle: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
    },
    circleInside: {
        width: 90,
        height: 90,
        borderRadius: 90 / 2,
        backgroundColor: '#1abc9c',
        marginTop: 5,
        marginLeft: 5,
    },
    score: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 30,
        fontWeight: 'bold',
    },
    turn: {
        color: 'white',
        fontSize: 20,
        height: 40,
        width: 150,
        textAlign: 'center',
        padding: 5,
        borderRadius: 10,
        marginTop: 30,
    },
    trait: {
        height: 2,
        width: 90,
        marginTop: 50,
    },
});

export default class ScoreCircle extends Component {
    static propTypes = {
        score: PropTypes.number.isRequired,
        highlight: PropTypes.bool,
        flexDirection: PropTypes.oneOf(['row', 'row-reverse']),
        colorSyle: PropTypes.string,
        text: PropTypes.string,
    }

    static defaultProps = {
        highlight: false,
        flexDirection: 'row',
        colorSyle: 'white',
        text: 'Your turn',
    }

    containerStyle = direction => ({
        flexDirection: direction,
        justifyContent: 'space-between',
    })

    render() {
        return (
            <View style={this.containerStyle(this.props.flexDirection)}>
                <View style={[styles.circle, { backgroundColor: this.props.colorSyle }]}>
                    <View style={styles.circleInside}>
                        <Text style={[styles.score, styles[this.props.highlight]]}>{this.props.score}</Text>
                    </View>
                </View>

                {this.props.highlight ?
                    <View style={[styles.trait, { backgroundColor: this.props.colorSyle }]} /> :
                    <View />
                }

                {this.props.highlight ?
                    <Text style={[styles.turn, { backgroundColor: this.props.colorSyle }]}>{this.props.text}</Text> :
                    <View />
                }
            </View>
        );
    }
}
