import * as userTypes from '~/store/Types/index';
import auth from '@react-native-firebase/auth';


export const  UserAuth = () => async dispatch => {
  
    try {
      auth().onAuthStateChanged((user) => {
        if (user) {
          return dispatch({
            type: userTypes.USER_AUTH,
            payload: user
          });
        }
      });
    } catch (error) {
      console.error(error);
    }
  };
