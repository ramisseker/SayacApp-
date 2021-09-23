import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {billStack} from '~config';
import {BillDetailScreen, BillsScreen} from '~screens';
const Stack = createStackNavigator();
const BillStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={billStack.bills}
      screenOptions={{gestureEnabled: false, headerShown: false}}>
      <Stack.Screen name={billStack.bills} component={BillsScreen} />
      <Stack.Screen name={billStack.bill_detail} component={BillDetailScreen} />
    </Stack.Navigator>
  );
};
export default BillStack;
