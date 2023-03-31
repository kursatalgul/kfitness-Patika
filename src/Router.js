import React from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Welcome from './Pages/Welcome';
import Sign from './Pages/Sign';
import MemberResult from './Pages/MemberResult';


const Stack = createStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Welcome} />
        <Stack.Screen name="SignScreen" component={Sign} />
        <Stack.Screen name="Members" component={MemberResult} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
