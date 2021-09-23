import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {settingStack} from '~config';
import { SettingsScreen, BillSettings, PrinterSettings } from '~/screens';

const Stack = createStackNavigator();
const SettingStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={settingStack.settings}
      screenOptions={{gestureEnabled: false, headerShown: false}}>
      <Stack.Screen name={settingStack.settings} component={SettingsScreen} />
      <Stack.Screen
        name={settingStack.bills_settings}
        component={BillSettings}
      />
      <Stack.Screen
        name={settingStack.printer_settings}
        component={PrinterSettings}
      />
    </Stack.Navigator>
  );
};
export default SettingStack;
