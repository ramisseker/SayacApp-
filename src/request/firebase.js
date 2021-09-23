/*import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const AUTH = auth();
const DB = database();

export const refs = {
  users: DB.ref('/USERS'),
  userinfo: uid => DB.ref(`/USERS/${uid}/info`),
};

export const SIGNUP = values =>
  new Promise((resolve, reject) => {
    AUTH.createUserWithEmailAndPassword(values.email, values.password)
      .then(d => {
        const uid = d.user.uid;

        SET(refs.userinfo(uid), {
          name: 'nurettin',
          surname: 'lorem ipsum',
          age: 99,
        })
          .then(() => {
            console.log('Data set.');
            resolve(d);
          })
          .catch(reject);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  });

export const SET = (ref, data) =>
  new Promise((resolve, reject) => {
    ref.set(data).then(resolve).catch(reject);
  });
*/
