import { AppRegistry, Text } from 'react-native';
import React from 'react';

export default class App extends React.PureComponent {
    render() {
        return (
            <Text>oui</Text>
        );
    }
}

AppRegistry.registerComponent('awaleAndroid', () => App);
