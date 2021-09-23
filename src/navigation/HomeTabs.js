import {
  Bills,
  BillsSelected,
  Houses,
  HousesSelected,
  Settings,
  SettingsSelected,
  Status,
  StatusSelected,
} from '~assets';
import {StyleSheet, Text} from 'react-native';
import {colors, fonts, sizes} from '~components';

import BillStack from './BillStack';
import HomeStack from './HomeStack';
import React from 'react';
import SettingStack from './SettingStack';
import {StatusScreen} from '~screens';
import VectorImage from 'react-native-vector-image';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {fontSize} from '~utils';
import {homeTabs} from '~config';

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      shifting={false}
      activeColor={colors.MainBlue}
      inactiveColor={colors.Water}
      barStyle={styles.barStyle}>
      <Tab.Screen
        name={homeTabs.home_stack}
        component={HomeStack}
        options={{
          tabBarLabel: <Text style={styles.tabBarLabelStyle}>Haneler</Text>,
          tabBarIcon: ({focused}) => (
            <VectorImage
              style={styles.svgStyle}
              source={!focused ? Houses : HousesSelected}
            />
          ),
        }}
      />
      <Tab.Screen
        name={homeTabs.bill_stack}
        component={BillStack}
        options={{
          tabBarLabel: <Text style={styles.tabBarLabelStyle}>Faturalar</Text>,
          tabBarIcon: ({focused}) => (
            <VectorImage
              style={styles.svgStyle}
              source={!focused ? Bills : BillsSelected}
            />
          ),
        }}
      />
      <Tab.Screen
        name={homeTabs.status}
        component={StatusScreen}
        options={{
          tabBarLabel: <Text style={styles.tabBarLabelStyle}>Durum</Text>,
          tabBarIcon: ({focused}) => (
            <VectorImage
              style={[styles.svgStyle]}
              source={!focused ? Status : StatusSelected}
            />
          ),
        }}
      />
      <Tab.Screen
        name={homeTabs.settings_stack}
        component={SettingStack}
        options={{
          tabBarLabel: <Text style={styles.tabBarLabelStyle}>Ayarlar</Text>,
          tabBarIcon: ({focused}) => (
            <VectorImage
              style={styles.svgStyle}
              source={!focused ? Settings : SettingsSelected}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: colors.MainWhite,
    borderTopWidth: 1,
    borderColor: colors.Water,
  },
  tabBarLabelStyle: {fontSize: sizes.h6, ...fonts.Semibold, fontWeight: '600'},
  svgStyle: {width: fontSize(24), height: fontSize(24)},
});
export default HomeTabs;
