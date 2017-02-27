import React, { PropTypes, Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    board: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'steelblue',
        justifyContent: 'space-around',
        height: 150,
        padding: 20,
        width: 350,
    },
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
});

export default class Board extends Component {
    render() {
        const size = this.props.board.length;
        const halfSize = size / 2;
        const topBoard = this.props.board.slice(0, halfSize).reverse();
        const bottomBoard = this.props.board.slice(halfSize, size);

        return (
            <View style={styles.board}>
                {topBoard.map((pit, x) =>
                    <Text style={styles.pit} key={`topBoard-${x}`}>{pit}</Text>
                )}
                {bottomBoard.map((pit, x) =>
                    <Text style={styles.pit} key={`bottomBoard-${x}`}>{pit}</Text>
                )}
            </View>
        );
    }
}

Board.propTypes = {
    board: PropTypes.arrayOf(React.PropTypes.number).isRequired,
};
