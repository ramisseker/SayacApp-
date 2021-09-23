import {PropTypes, ViewPropTypes} from '~/components/config';
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {colors} from '../config';
import styles from './styles';

const MontsButton = props => {
  const {containerStyle, textStyle, name, onPress} = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.Container, containerStyle]}>
        <Text style={[styles.TextStyle, textStyle]}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

MontsButton.propTypes = {
  onPress: PropTypes.func,
  containerStyle: ViewPropTypes.style,
  background: ViewPropTypes.style,
  textStyle: Text.propTypes.style,
  name: PropTypes.string,
};
MontsButton.defaultProps = {
  name: 'Monts',
};

export {MontsButton};
