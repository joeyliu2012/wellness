import React, {
  Component,
  StyleSheet,
  View,
} from 'react-native'

import Camera from 'react-native-camera/index.ios'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    height: 400,
  }
})

export default class PhotoCapturePage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Camera
          style={styles.camera}
          aspect={Camera.constants.Aspect.fill}
          type={Camera.constants.Type.back}
        />
      </View>
    )
  }
}

