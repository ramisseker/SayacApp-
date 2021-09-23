import auth from '@react-native-firebase/auth';
import * as userTypes from '~/store/Types/index';





const SignOut = () => async dispatch => {
         
        auth()
        .signOut()
        .then(() => console.log('Başarıyla çıkış yaptınız.'));
         dispatch({
                 type: userTypes.USER_LOGOUT,
         });
        
        
    
};

export  { SignOut };