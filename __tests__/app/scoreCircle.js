import React from 'react';
import { shallow } from 'enzyme';
import { Text } from 'react-native';
import ScoreCircle from '../../src/app/score/ScoreCircle';

describe('<ScoreCircle />', () => {
    it('should render stuff', () => {
        const scoreCircle = shallow(<ScoreCircle score={20} />);
        expect(scoreCircle.length).toEqual(1);
        expect(scoreCircle.find(Text).props().children).toEqual(20);
        expect(scoreCircle.find(Text)).toHaveLength(1);
    });

    it('should render highlight', () => {
        const scoreCircle = shallow(<ScoreCircle score={20} highlight />);
        expect(scoreCircle.length).toEqual(1);
        expect(scoreCircle.find(Text)).toHaveLength(2);
    });
});
