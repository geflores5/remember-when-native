import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';
import Home from '../screens/Home';
import ViewTimeline from '../screens/ViewTimeline';
import ViewMemory from '../screens/ViewMemory';
import AddMemory from '../screens/AddMemory';
import AddTimelinePage from '../screens/AddTimelinePage';
import EditMemory from '../screens/EditMemory';
import EditTimeline from '../screens/EditTimeline';

const Navigator = createStackNavigator({
  Home: { screen: Home },
  SignUp: { screen: SignUp },
  SignIn: { screen: SignIn },
  ViewTimeline: { screen: ViewTimeline },
  ViewMemory: { screen: ViewMemory },
  AddMemory: { screen: AddMemory },
  AddTimelinePage: { screen: AddTimelinePage },
  EditMemory: { screen: EditMemory },
  EditTimeline: { screen: EditTimeline },
},
  {
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(Navigator);

export default AppContainer;

