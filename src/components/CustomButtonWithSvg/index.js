import {PropTypes, ViewPropTypes} from '~/components/config';
import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import VectorImage from 'react-native-vector-image';
import {home_add} from '~assets';
import styles from './styles';
const CustomButtonWithSvg = props => {
  const {onPress, containerStyle, svgStyle, svg, textStyle, text} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.Container, containerStyle]}>
      <VectorImage style={[styles.Svg, svgStyle]} source={svg} />
      <Text style={[styles.Text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};
CustomButtonWithSvg.propTypes = {
  onPress: PropTypes.func,
  containerStyle: ViewPropTypes.style,
  svgStyle: Text.propTypes.style,
  svg: PropTypes.number,
  textStyle: Text.propTypes.style,
  text: PropTypes.string,
};
CustomButtonWithSvg.defaultProps = {
  onPress: () => console.log('CustomButtonWithSvg basıldı.'),
  svg: home_add,
  text: 'Hane Ekle',
};
export {CustomButtonWithSvg};
