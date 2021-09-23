/*import AsyncStorage from '@react-native-async-storage/async-storage';
import {mainStack} from '~config';
import store from '~store';
import {NavigationService} from '~utils';
const saveUserId = async (key, value) => {
  try {
    await AsyncStorage.setItem(
      key,
      key === 'userId' ? JSON.stringify(value) : value,
    );
    await setupAuth();
  } catch (e) {
    console.log(e);
  }
};

const removeUserId = async () => {
  try {
    await AsyncStorage.removeItem('userId');
    store.getState().SignInReducer.userId = null;
    await setupAuth();
  } catch (e) {
    console.log(e);
  }
};

const setupAuth = async () => {
  try {
    const userId = await AsyncStorage.getItem('userId');
    console.log(userId);
    if (
      userId === null ||
      userId === undefined ||
      userId === 'null' ||
      userId === 'undefined'
    ) {
      NavigationService.replace(mainStack.login);
    } else {
      NavigationService.replace(mainStack.home_tab);
    }
  } catch (e) {
    console.log(e);
  }
};

export default {
  saveUserId,
  removeUserId,
  setupAuth,
};
*/
