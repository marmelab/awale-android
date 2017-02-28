import React from 'react';
import renderer from 'react-test-renderer';
import { Navigator } from 'react-native';
import App from '../src/App';
import Board from '../src/awale/board/Board';
import Welcome from '../src/navigation/Welcome';
import Play from '../src/navigation/Play';

it('renders the App component', () => {
    const tree = renderer.create(
        <App />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders the Board component', () => {
    const cells = Array(12).fill(4);
    const tree = renderer.create(
        <Board board={cells} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders the Welcome component', () => {
    const navigator = new Navigator({
        initialRoute: { id: 'Welcome' },
        configureScene: (route, routeStack) => Navigator.SceneConfigs.FloatFromRight,
    });

    const tree = renderer.create(
        <Welcome navigator={navigator} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders the Play component', () => {
    const navigator = new Navigator({
        initialRoute: { id: 'Play' },
        configureScene: (route, routeStack) => Navigator.SceneConfigs.FloatFromRight,
    });

    const tree = renderer.create(
        <Play navigator={navigator} againstComputer />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
