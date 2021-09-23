import * as userTypes from '~/store/Types/index';

import auth from '@react-native-firebase/auth';
import {getToast} from '~helpers';

const SignIn = values => async dispatch => {
  await auth()
    .signInWithEmailAndPassword(values.email, values.password)
    .then(res => {
      const uid = res.user.uid;

      if (uid !== '' && typeof uid !== 'undefined') {
        dispatch({
          type: userTypes.USER_SIGNIN,
          payload: uid,
        });
        getToast();
      }
    })
    .catch(error => {
      alert(error);
    });
};

export {SignIn};
