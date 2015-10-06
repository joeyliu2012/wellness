import React, {
  AppRegistry,
  Component,
  NavigatorIOS,
  StyleSheet,
} from 'react-native'

import MealEntryPage from 'components/ios/meal-entry-page'
import PhotoCapturePage from 'components/ios/photo-capture-page'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

class WellnessDiary extends Component {
  render() {
    return (
      <NavigatorIOS
        navigationBarHidden={true}
        style={styles.container}
        initialRoute={{
          title: 'New Meal',
          component: MealEntryPage,
        }}
      />
    )
    // return (
    //   <PhotoCapturePage />
    // )
  }
}

AppRegistry.registerComponent('WellnessDiary', () => WellnessDiary)
