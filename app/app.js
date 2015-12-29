'use strict';

var React = require('react-native');
var {StyleSheet, Navigator, Image, ListView, Text, View} = React;
var {Router, Route, Schema, Animations, TabBar} = require('react-native-router-flux');
var Launch = require('./components/Launch');
var ArticleList = require('./components/ArticleList');
var Article = require('./components/Article');

var App = React.createClass({
  render: function() {
    return (
      <Router hideNavBar={true} initialRoutes={['launch']}>
        <Schema name="modal" sceneConfig={Navigator.SceneConfigs.FloatFromBottom}/>
        <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>

        <Route name="launch" component={Launch} wrapRouter={true} title="Launch" hideNavBar={true}/>
        <Route name="list" schema="modal">
          <Router>
            <Route name="articleList" component={ArticleList} title="articleList" schema="modal"/>
            <Route name="article" component={Article} title="article" />
          </Router>
        </Route>
      </Router>
    );
  }
});

module.exports = App;
