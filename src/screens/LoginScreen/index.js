import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import {
  CustomButton,
  CustomInputLabel,
  Loader,
  colors,
  globalStyle,
} from '~components';
import React, {useState} from 'react';
import {home_logo, show_password} from '~/assets';
import {navigate, replace} from '~/utils/navigation';

import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {LoginValidationSchema} from '~schema';
import {SignIn} from '~/store/Actions/Auth/SignIn';
import VectorImage from 'react-native-vector-image';
import {connect} from 'react-redux';
import {fontSize} from '~/utils';
import {mainStack} from '~config';
import styles from './styles';

const mapStateToProps = ({user}) => ({user});
const mapDispatchToProps = dispatch => ({
  SignIn: values => dispatch(SignIn(values)),
});

const LoginScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => {
  const {user} = props;

  const [isSecure, setIsSecure] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formikInitialValues, setFormikinitialValues] = useState({
    email: '',
    password: '',
  });
  const login = values => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      props.SignIn(values);
    }, 2000);
  };
  return (
    <KeyboardAwareScrollView style={{flex: 1}}>
      <Loader loading={loading} />
      <Formik
        validationSchema={LoginValidationSchema}
        initialValues={formikInitialValues}
        onSubmit={values => login(values)}>
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
              name={'email'}
              containerProps={{
                keyboardType: 'email-address',
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
              textName={'Giriş Yap'}
              buttonStyle={styles.Button}
            />

            <View
              style={{
                flexDirection: 'row',
                marginTop: fontSize(50),
                alignItems: 'center',
              }}>
              <View style={styles.line} />
              <Text style={styles.TextStyle}> Ya da</Text>
              <View style={styles.line} />
            </View>
            <View style={{marginTop: fontSize(40)}}>
              <Text style={styles.TextStyle}>Hesabınız yok mu?</Text>
            </View>
            <CustomButton
              onPress={() => navigate(mainStack.register)}
              textName={'Kayıt olun'}
              buttonStyle={styles.Button}
              buttonColor={colors.MainWhite}
              textColor={colors.MainBlack}
            />
          </View>
        )}
      </Formik>
    </KeyboardAwareScrollView>
  );
});

export {LoginScreen};
