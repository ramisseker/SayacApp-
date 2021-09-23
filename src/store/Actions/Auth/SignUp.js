import * as userTypes from '~/store/Types/index';

import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {getToast} from '~/helpers';

const SignUp = values => async dispatch => {
  auth()
    .createUserWithEmailAndPassword(
      values.email,
      values.password,
      values.name,
      values.surname,
    )
    .then(res => {
      const uid = res.user.uid;
      database()
        .ref(`/USERS/${uid}/info`)
        .set({
          name: values.name,
          surname: values.surname,
        })
        .then(() => console.log('Data set.'));

      dispatch({
        type: userTypes.USER_SIGNIN,
        payload: {
          uid,
        },
      });
      getToast();
    })
    .catch(error => {
      if (error.code === 'E-mail zaten kullanılıyor.') {
        console.log('That email address is already in use!');
      }
      if (error.code === 'Geçersiz E-mail.') {
        console.log('That email address is invalid!');
      }

      console.log(error);
    });
};

export {SignUp};
