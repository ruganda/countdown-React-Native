
import { YellowBox } from 'react-native';
import EventList from '../EventList';
import EventForm from '../EventForm';
import {createStackNavigator, createAppContainer} from 'react-navigation';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
]);


const MainNavigation = createStackNavigator({
  list:{
    screen: EventList
  },
  form:{
    screen: EventForm
  }

});
const App = createAppContainer(MainNavigation);
export default App;