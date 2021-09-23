import {
  CustomButton,
  CustomInputLabel,
  Loader,
  colors,
  globalStyle,
} from '~components';
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {home_logo, show_password} from '~/assets';

import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {RegisterValidationSchema} from '~schema';
import {SignUp} from '~/store/Actions/Auth/SignUp';
import VectorImage from 'react-native-vector-image';
import {connect} from 'react-redux';
import {fontSize} from '~/utils';
import styles from './styles';

const mapStateToProps = ({user}) => ({user});
const mapDispatchToProps = dispatch => ({
  SignUp: values => dispatch(SignUp(values)),
});

const RegisterScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => {
  const {user} = props;
  const [isSecure, setIsSecure] = useState(true);
  const [formikInitialValues, setFormikinitialValues] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const register = values => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      props.SignUp(values);
    }, 2000);
  };
  return (
    <KeyboardAwareScrollView style={{flex: 1}}>
      <Loader loading={loading} />
      <Formik
        validationSchema={RegisterValidationSchema}
        initialValues={formikInitialValues}
        onSubmit={values => register(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <View style={styles.Container}>
            <VectorImage style={styles.logo} source={home_logo} />
            <CustomInputLabel
              name={'name'}
              containerProps={{
                label: 'İsim',
                placeholder: '',
                maxLength: 25,
              }}
              succesColor={colors.MainGreen}
              errorColor={colors.MainRed}
            />
            <CustomInputLabel
              name={'surname'}
              containerProps={{
                label: 'Soyisim',
                placeholder: '',
                maxLength: 25,
              }}
              succesColor={colors.MainGreen}
              errorColor={colors.MainRed}
            />
            <CustomInputLabel
              name={'email'}
              containerProps={{
                label: 'E-Mail',
                placeholder: '',
                maxLength: 25,
              }}
              succesColor={colors.MainGreen}
              errorColor={colors.MainRed}
            />
            <View style={{flexDirection: 'row', position: 'relative'}}>
              <CustomInputLabel
                name={'password'}
                containerProps={{
                  keyboardType: 'numeric',
                  label: 'Şifre',
                  placeholder: '',
                  maxLength: 25,
                }}
                succesColor={colors.MainGreen}
                errorColor={colors.MainRed}
                secureTextEntry={isSecure}
              />

              <TouchableOpacity
                onPress={() => setIsSecure(!isSecure)}
                style={styles.showPassword}>
                <VectorImage source={show_password} />
              </TouchableOpacity>
            </View>
            <CustomButton
              onPress={handleSubmit}
              textName={'Kayıt Ol'}
              buttonStyle={styles.Button}
            />
          </View>
        )}
      </Formik>
    </KeyboardAwareScrollView>
  );
});

export {RegisterScreen};
