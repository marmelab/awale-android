import React from 'react';
import { shallow } from 'enzyme';
import Board from '../../src/app/board/Board';

describe('<Board />', () => {
    const cells = Array(12).fill(4);

    it('should render player one', () => {
        const board = shallow(<Board board={cells} pickPebble={() => {}} currentIndexPlayer={0} />);
        expect(board.length).toEqual(1);
    });

    it('should render player two', () => {
        const board = shallow(<Board board={cells} pickPebble={() => {}} currentIndexPlayer={1} />);
        expect(board.length).toEqual(1);
    });
});
