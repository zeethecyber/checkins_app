import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AddCheckinScreen from './screens/add_checkin';
import CheckinScreen from './screens/checkins';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={AddCheckinScreen}
        options={{title: 'Submit'}}
      />
      <Tab.Screen
        name="CheckinsList"
        component={CheckinScreen}
        options={{title: 'Checkins'}}
      />
    </Tab.Navigator>
  );
}

function Router() {
  return (
    <Stack.Navigator screenOptions={{headerShadowVisible: false}}>
      <Stack.Screen name="Checkins" component={MyTabs} />
    </Stack.Navigator>
  );
}

export default Router;
