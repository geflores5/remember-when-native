import { createStackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import ViewTimeline from '../screens/ViewTimeline';
import ViewMemory from '../screens/ViewMemory';
import AddMemory from '../screens/AddMemory';
import AddTimelinePage from '../screens/AddTimelinePage';
import EditMemory from '../screens/EditMemory';
import EditTimeline from '../screens/EditTimeline';
import Login from '../screens/Login';

const Navigator = createStackNavigator({
  Home: { screen: Home },
  ViewTimeline: { screen: ViewTimeline },
  ViewMemory: { screen: ViewMemory },
  AddMemory: { screen: AddMemory },
  AddTimelinePage: { screen: AddTimelinePage },
  EditMemory: { screen: EditMemory },
  EditTimeline: { screen: EditTimeline },
  Login: { screen: Login },
}, {
  navigationOptions: {
    header: () => null,
  },
});

export default Navigator;
