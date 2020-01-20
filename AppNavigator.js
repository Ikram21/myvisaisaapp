import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import IdScanScreen from './Screens/IdScanScreen';
import FormScreen from './Screens/FormScreen';
import FinalScreen from './Screens/FinalScreen';
import SelfieScreen from './Screens/SelfieScreen';


const AppNavigator = createStackNavigator({
  

  IdScanScreen: {screen: IdScanScreen},
  SelfieScreen: {screen: SelfieScreen},
  FinalScreen: {screen: FinalScreen},
  FormScreen: {screen: FormScreen},


});

const App = createAppContainer(AppNavigator);

export default App;