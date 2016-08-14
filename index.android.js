/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'
import Camera from 'react-native-camera'

class kizza extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <Image
            source={require('./crosshair.png')}
            style={styles.crosshair} />
        </Camera>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  crosshair: {
    width: 60,
    height: 60,
    backgroundColor: 'transparent',
    marginRight: 10
  }
})

AppRegistry.registerComponent('kizza', () => kizza)
