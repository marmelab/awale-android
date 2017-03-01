import React from 'react';
import { shallow } from 'enzyme';
import { Navigator } from 'react-native';
import Welcome from '../../src/navigation/Welcome';

describe('<Welcome />', () => {
    it('should render stuff', () => {
        const navigator = new Navigator({
            initialRoute: { id: 'Welcome' },
            configureScene: (route, routeStack) => Navigator.SceneConfigs.FloatFromRight,
        });

        const welcome = shallow(<Welcome navigator={navigator} />);
        expect(welcome.length).toEqual(1);
    });
});
