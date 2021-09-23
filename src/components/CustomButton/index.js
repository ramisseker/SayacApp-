import {PropTypes, ViewPropTypes, colors} from '~/components/config';
import {Text, TouchableOpacity} from 'react-native';

import React from 'react';
import styles from './styles';

const CustomButton = props => {
  const {
    buttonType,
    buttonStyle,
    buttonColor,
    onPress,
    disabled,
    textStyle,
    textColor,
    textName,
  } = props;
  return (
    <TouchableOpacity
      style={[
        styles.Button,
        buttonType ? styles.TrueButton : styles.FalseButton,
        buttonStyle,
        buttonColor && {backgroundColor: buttonColor},
      ]}
      onPress={onPress}
      disabled={disabled}>
      <Text
        style={[
          styles.Text,
          buttonType ? styles.TrueText : styles.FalseText,
          textStyle,
          textColor && {color: textColor},
        ]}>
        {textName}
      </Text>
    </TouchableOpacity>
  );
};
CustomButton.propTypes = {
  buttonType: PropTypes.bool,
  buttonStyle: ViewPropTypes.style,
  buttonColor: ViewPropTypes.style,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  textStyle: Text.propTypes.style,
  textColor: Text.propTypes.style,
  textName: PropTypes.string,
};
CustomButton.defaultProps = {
  buttonColor: colors.MainBlue,
  buttonType: false,
  onPress: () => console.log('CustomButton basıldı.'),
  //disabled: false,
  textColor: colors.MainWhite,
  textName: 'CustomButton',
};
export {CustomButton};
