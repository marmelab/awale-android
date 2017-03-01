import React from 'react';
import { shallow } from 'enzyme';
import PitButton from '../../src/app/board/PitButton';

describe('<PitButton />', () => {
    it('should render stuff', () => {
        function onPress() {
        }

        const pibButton = shallow(<PitButton onPress={onPress()} pitValue={0} pitIndex={0} />);
        expect(pibButton.length).to.equal(1);
        expect(pibButton.contains(Text)).to.equal(true);
        expect(pibButton.find(Text).props().children).to.equal(0);
    });
});
