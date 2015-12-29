'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  View,
} = React;

var App = require('./app/app');
AppRegistry.registerComponent('ReactNativeRoute', () => App);
