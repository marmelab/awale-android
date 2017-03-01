import React from 'react';
import { shallow } from 'enzyme';
import { Text } from 'react-native';
import PitButton from '../../src/app/board/PitButton';

describe('<PitButton />', () => {
    it('should render One', () => {
        const pitButton = shallow(<PitButton onPress={() => {}} pitValue={0} pitIndex={0} />);
        expect(pitButton.length).toEqual(1);
        expect(pitButton.find(Text).props().children).toEqual(0);
    });

    it('should render Two', () => {
        const pitButton = shallow(<PitButton onPress={() => {}} pitValue={1} pitIndex={0} />);
        expect(pitButton.length).toEqual(1);
        expect(pitButton.find(Text).props().children).toEqual(1);
    });
});
