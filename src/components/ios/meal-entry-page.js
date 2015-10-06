import React, {
  Component,
  DatePickerIOS,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native'

import Camera from 'react-native-camera/index.ios'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    // justifyContent: 'center',
  },
  formLabel: {
  },
  camera: {
    height: 375,
  },
  formTextInput: {
    height: 40,
  },
})

export default class MealEntryPage extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      description: null,
      date: new Date(),
    }

    this.handleAddMealPress = this.handleAddMealPress.bind(this)
  }

  handleAddMealPress() {
    console.log(this.state)
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          style={styles.camera}
          aspect={Camera.constants.Aspect.fill}
          type={Camera.constants.Type.back}
        />
        <Text style={styles.formLabel}>What did you eat?</Text>
        <TextInput
          style={styles.formTextInput}
          onChangeText={(text) => this.setState({description: text})}
          value={this.state.description}
          placeholder="A pulled pork sandwich"
        />
        <Text style={styles.formLabel}>When did you eat it?</Text>
        <DatePickerIOS
          date={this.state.date}
          onDateChange={(date) => this.setState({date})}
        />
        <TouchableHighlight onPress={this.handleAddMealPress}>
          <Text>Add meal</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
