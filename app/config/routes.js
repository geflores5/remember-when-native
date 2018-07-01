import { StackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import ViewTimeline from '../screens/ViewTimeline';
import ViewMemory from '../screens/ViewMemory';
import AddMemory from '../screens/AddMemory';
import AddTimelinePage from '../screens/AddTimelinePage';
import EditMemory from '../screens/EditMemory';
import EditTimeline from '../screens/EditTimeline';
import Login from '../screens/Login';

const Navigator = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null,
    },
  },
  ViewTimeline: { screen: ViewTimeline },
  ViewMemory: { screen: ViewMemory },
  AddMemory: { screen: AddMemory },
  AddTimelinePage: { screen: AddTimelinePage },
  EditMemory: { screen: EditMemory },
  EditTimeline: { screen: EditTimeline },
  Login: { screen: Login },
});

export default Navigator;
