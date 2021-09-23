import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {homeStack} from '~config';
import {
  HousesScreen,
  AddHouseScreen,
  UpdateHouseScreen,
  HouseDetailScreen,
} from '~/screens';

const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={homeStack.houses}
      screenOptions={{gestureEnabled: false, headerShown: false}}>
      <Stack.Screen name={homeStack.houses} component={HousesScreen} />
      <Stack.Screen
        name={homeStack.house_detail}
        component={HouseDetailScreen}
      />
      <Stack.Screen name={homeStack.add_house} component={AddHouseScreen} />
      <Stack.Screen
        name={homeStack.update_house}
        component={UpdateHouseScreen}
      />
    </Stack.Navigator>
  );
};
export default HomeStack;