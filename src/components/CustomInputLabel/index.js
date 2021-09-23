import {Input} from 'react-native-elements';
import {colors, PropTypes, ViewPropTypes} from '~/components/config';
import React from 'react';
import {Text} from 'react-native';
import styles from './styles';
import {useField} from 'formik';
const CustomInputLabel = props => {
  const {
    containerStyle,
    inputContainerStyle,
    errorColor,
    succesColor,
    inputStyle,
    labelStyle,
    errorStyle,
    label,
    name,
    phone,
    placeholder,
    placeholderTextColor,
    containerProps,
    secureTextEntry,
  } = props;
  const [field, meta] = useField({
    name: name,
  });
  const {error, touched, value} = meta;
  const {onBlur, onChange} = field;
  return (
    <Input
      containerStyle={[styles.Container, containerStyle]}
      inputContainerStyle={[
        styles.InputContainer,
        inputContainerStyle,
        value === ''
          ? inputContainerStyle
          : error
          ? {borderColor: errorColor}
          : {borderColor: succesColor},
      ]}
      inputStyle={[styles.Input, inputStyle]}
      labelStyle={[styles.Label, labelStyle]}
      errorStyle={[styles.Error, errorStyle]}
      value={value}
      onBlur={onBlur(name)}
      onChangeText={text =>
        onChange(name)(phone ? text.replace(/[^0-9]/g, '') : text)
      }
      errorMessage={value !== '' && error}
      renderErrorMessage={!!(value !== '' && error)}
      autoCapitalize="none"
      placeholder={placeholder}
      label={label}
      placeholderTextColor={placeholderTextColor}
      secureTextEntry={secureTextEntry}
      {...containerProps}
    />
  );
};
CustomInputLabel.propTypes = {
  containerStyle: ViewPropTypes.style,
  inputContainerStyle: ViewPropTypes.style,
  errorColor: PropTypes.string.isRequired,
  succesColor: PropTypes.string.isRequired,
  inputStyle: Text.propTypes.style,
  labelStyle: Text.propTypes.style,
  errorStyle: Text.propTypes.style,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  containerProps: PropTypes.object.isRequired,

};
CustomInputLabel.defaultProps = {
  placeholder: 'placeholder',
  label: 'label',
  errorColor: colors.MainRed,
  succesColor: colors.MainGreen,
  placeholderTextColor: colors.MainDarkGray,
  secureTextEntry: false,
};
export {CustomInputLabel};
