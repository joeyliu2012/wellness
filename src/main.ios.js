import React, {
  AppRegistry,
  Component,
} from 'react-native'

import MealEntryPage from 'components/ios/meal-entry-page'

class WellnessDiary extends Component {
  render() {
    return (
      <MealEntryPage />
    )
  }
}

AppRegistry.registerComponent('WellnessDiary', () => WellnessDiary)
