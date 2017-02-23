import React from 'react';
import { Navigator, View } from 'react-native';
import Welcome from './app/scenes/Welcome';
import Play from './app/scenes/Play';

export default () => {
    const renderNavigationScene = (route, navigator) => {
        switch (route.id) {
        case 'Welcome':
            return <Welcome navigator={navigator} title="Welcome" />;
        case 'Play':
            return <Play navigator={navigator} title="Play" />;
        default:
            return <View />;
        }
    };

    return (
        <Navigator
            initialRoute={{ id: 'Welcome' }}
            renderScene={renderNavigationScene}
        />
    );
};
