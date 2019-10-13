
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'

import HomeScreen from './screens/homeScreen'
import CreatePixel from './screens/createPixelCreature'
import choosePicture from './screens/choosePicture'

const AppNavigator = createStackNavigator({
  Home : {
    screen : HomeScreen,
      navigationOptions : (navigation) => ({
        
    }),
  },
  createPixel :{ 
    screen : CreatePixel,
  },
  choosePicture :{ 
    screen : choosePicture,
  },

},{
  initialRouteName : 'Home'
});

export default createAppContainer(AppNavigator);
