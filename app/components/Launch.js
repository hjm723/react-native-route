
'use strict';

var React = require('react-native');
var {View, Text, StyleSheet, TouchableHighlight} = React;
var Button = require('react-native-button');
var Actions = require('react-native-router-flux').Actions;

var Launch = React.createClass({
    render: function(){
        return (
            <View style={styles.container}>
                <Text>Launch page</Text>
                <Button onPress={()=>Actions.list({data:"111", title:'結果' })}>Login</Button>
          </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    }
});

module.exports = Launch;
