import MainStack from './navigation/MainStack';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import React from 'react';
import {SafeAreaView} from 'react-native';
import Toast from 'react-native-toast-message';
import moment from 'moment';
import {navigationRef} from '~utils';
import store from './store';

const App = () => {
  let generalDate = new Date();
  let miliSeconds = generalDate.setHours(generalDate.getHours() + 3);
  let minDate = new Date(miliSeconds);
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <SafeAreaView style={{flex: 1}}>
          <MainStack />
        </SafeAreaView>
        <Toast ref={ref => Toast.setRef(ref)} />
      </NavigationContainer>
    </Provider>
  );
};
export default App;
