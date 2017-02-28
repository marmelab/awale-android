import React, { PropTypes, Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    true: {
        color: 'red',
    },
    false: {
    },
});

export default class ScoreCircle extends Component {
    static propTypes = {
        score: PropTypes.number.isRequired,
        highlight: PropTypes.bool,
        orientation: PropTypes.oneOf(['left', 'right']),
    }

    static defaultProps = {
        highlight: false,
        orientation: 'left',
    }

    render() {
        return (
            <View>
                {(() => {
                    switch (this.props.orientation) {
                    case 'left':
                        return <Text style={styles[this.props.highlight]}>Score : {this.props.score}</Text>;
                    case 'right':
                        return <Text style={styles[this.props.highlight]}>Score : {this.props.score}</Text>;
                    default:
                        return <Text style={styles[this.props.highlight]}>Score : {this.props.score}</Text>;
                    }
                })()}
            </View>
        );
    }
}
