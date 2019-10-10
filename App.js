
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'

import HomeScreen from './screens/homeScreen'
import CreatePixel from './screens/createPixelCreature'
import ChooseCreature from './screens/chooseCreature'

const AppNavigator = createStackNavigator({
  Home : {
    screen : HomeScreen,
      navigationOptions : (navigation) => ({
        
    }),
  },
  createPixel :{ 
    screen : CreatePixel,
  },
  chooseCreature :{ 
    screen : ChooseCreature,
  },

},{
  initialRouteName : 'Home'
});

export default createAppContainer(AppNavigator);
