/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from './components/app.js'

class scrollView extends Component {
  render() {
    return (
        <App/>
    );
  }
}

AppRegistry.registerComponent('scrollView', () => scrollView);
