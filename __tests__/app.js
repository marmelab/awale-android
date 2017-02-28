import React from 'react';
import renderer from 'react-test-renderer';
import { Navigator } from 'react-native';
import App from '../src/App';
import Board from '../src/app/board/Board';
import PitButton from '../src/app/board/PitButton';
import ScoreCircle from '../src/app/score/ScoreCircle';
import Welcome from '../src/navigation/Welcome';
import Play from '../src/navigation/Play';
import { create as createGame } from '../src/awale/game/Game';
import createPlayer from '../src/awale/player/Player';

it('renders the App component', () => {
    const tree = renderer.create(
        <App />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders the Board component', () => {
    const game = createGame([createPlayer(0), createPlayer(1)]);
    const pickPebble = () => {};

    const tree = renderer.create(
        <Board
            board={game.board}
            currentIndexPlayer={game.currentIndexPlayer}
            pickPebble={pickPebble}
        />
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

it('renders the PitButton component', () => {
    const pickPebble = () => {};

    const tree = renderer.create(
        <PitButton
            onPress={pickPebble}
            pitValue={4}
            pitIndex={0}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders the ScoreCircle component', () => {
    const tree = renderer.create(
        <ScoreCircle
            score={20}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
