import React from 'react';
import { Navigator, View } from 'react-native';
// import Welcome from './navigation/Welcome';
// import Play from './navigation/Play';

const Navigation = () => {
    const renderNavigationScene = (route, navigator) => {
        switch (route.id) {
        // case 'Welcome':
        //     return <Welcome navigator={navigator} title="Welcome" />;
        // case 'Play':
        //     return <Play navigator={navigator} title="Play" againstComputer={route.againstComputer} />;
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

export default Navigation;
