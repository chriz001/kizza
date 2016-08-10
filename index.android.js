/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback
} from 'react-native'

class kizza extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native Kieran!
        </Text>
        <TouchableNativeFeedback
          onPress={this.buttonClicked.bind(this)}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{`Pressed ${this.state.count} times!`}</Text>
          </View>
        </TouchableNativeFeedback>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    )
  }
  buttonClicked () {
    this.setState({count: this.state.count + 1})
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  button: {
    marginBottom: 7,
    backgroundColor: '#ff0000',
    padding: 10,
    borderRadius: 2
  },
  buttonText: {
    color: '#ffffff'
  }
})

AppRegistry.registerComponent('kizza', () => kizza)
