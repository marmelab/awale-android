import React, { PropTypes, Component } from 'react';
import { StyleSheet, View } from 'react-native';
import PitButton from './PitButton';

const styles = StyleSheet.create({
    board: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#f39c12',
        justifyContent: 'space-around',
        borderRadius: 10,
        height: 130,
        padding: 10,
        width: 340,
    },
});

export default class Board extends Component {
    static propTypes = {
        board: PropTypes.arrayOf(React.PropTypes.number).isRequired,
        pickPebble: PropTypes.func.isRequired,
        currentIndexPlayer: PropTypes.number.isRequired,
        canPlay: PropTypes.bool,
    }

    static defaultProps = {
        canPlay: true,
    }

    pickPebble = (position) => {
        this.props.pickPebble(position);
    }

    render() {
        const size = this.props.board.length;
        const halfSize = size / 2;
        const topBoard = this.props.board.slice(halfSize, size).reverse();
        const bottomBoard = this.props.board.slice(0, halfSize);

        return (
            <View style={styles.board}>
                {topBoard.map((pit, i) =>
                    <PitButton
                        onPress={this.pickPebble}
                        pitValue={pit}
                        pitIndex={size - 1 - i}
                        enabled={this.props.currentIndexPlayer === 1 && this.props.canPlay}
                        key={`topBoard-${i}`}
                    />
                )}
                {bottomBoard.map((pit, i) =>
                    <PitButton
                        onPress={this.pickPebble}
                        pitValue={pit}
                        pitIndex={i}
                        enabled={this.props.currentIndexPlayer === 0}
                        key={`bottomBoard-${i}`}
                    />
                )}
            </View>
        );
    }
}
