import { PropTypes, ViewPropTypes, colors } from '../config';
import { Text, View } from 'react-native';

import React from 'react';
import { StatusBadge } from '../StatusBadge';
import VectorImage from 'react-native-vector-image';
import { home_logo } from '~assets';
import styles from './styles';

const CustomCommonHeader = props => {
  const {
    containerStyle,
    topViewStyle,
    leftViewStyle,
    svgStyle,
    svg,
    rightViewStyle,
    backButton,
    leftButton,
    rightButton,
    activeBottom,
    bottomViewStyle,
    data,

  } = props;
  const backgroundColor = {
    backgroundColor:
      data.status === 'Okunacak'
        ? colors.MainLightWhite
        : data.status === 'Tamamlandı'
          ? colors.MainLightGreen
          : data.status === 'Ödenecek'
            ? colors.MainBeige
            : data.status === 'Hepsi'
              ? colors.MainBlue
              : null,
  };

  const textStyle = {
    color:
      data.status === 'Okunacak'
        ? colors.MainLightBlue
        : data.status === 'Tamamlandı'
          ? colors.MainGreen
          : data.status === 'Ödenecek'
            ? colors.MainBrown
            : data.status === 'Hepsi'
              ? colors.MainBrown
              : null,
  };

  return (
    <View style={{ ...styles.Container, ...containerStyle }}>
      <View style={{ ...styles.TopView, ...topViewStyle }}>
        <View style={{ ...styles.LeftView, ...leftViewStyle }}>
          {backButton ? (
            backButton
          ) : (
              <VectorImage style={{ ...styles.svg, ...svgStyle }} source={svg} />
          )}
        </View>
        <View style={{ ...styles.RightView, ...rightViewStyle }}>
          {leftButton}
          {rightButton}
        </View>
      </View>
      {activeBottom && (
        <View
          style={{
            ...styles.BottomView,
            ...bottomViewStyle,
          }}>
          {data.map(item => (
            <StatusBadge
              key={item.id}
              {...item}
              active={true}
              background={backgroundColor}
              textStyle={textStyle}
              onPress={item.onPress}
            />
          ))}
        </View>
      )}
    </View>
  );
};
CustomCommonHeader.propTypes = {
  containerStyle: ViewPropTypes.style,
  topViewStyle: ViewPropTypes.style,
  leftViewStyle: ViewPropTypes.style,
  svgStyle: Text.propTypes.style,
  svg: PropTypes.number,
  rightViewStyle: ViewPropTypes.style,
  backButton: PropTypes.element,
  leftButton: PropTypes.element,
  rightButton: PropTypes.element,
  bottomViewStyle: ViewPropTypes.style,
  activeBottom: PropTypes.bool,
  data: PropTypes.array,
};
CustomCommonHeader.defaultProps = {
  svg: home_logo,
  activeBottom: true,
  data: [
    {
      id: 1,
      status: '',
      quantity: 1,
    },
  ],
};
export { CustomCommonHeader };
