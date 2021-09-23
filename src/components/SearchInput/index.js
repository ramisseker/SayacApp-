import React from 'react';
import { PropTypes, ViewPropTypes } from '~/components/config';
import { Text, TextInput, View } from "react-native";
import VectorImage from 'react-native-vector-image';
import styles from './styles';
import svg from '~/assets/svg/SearchIcon.svg';
import {colors} from '../config';




const SearchInput = props => {
    
    const { containerStyle,placeholder,leftIconContainerStyle,onChange } = props;

    return (

        <View style={[styles.Container, containerStyle]}>
            <View style={[styles.leftIcon, leftIconContainerStyle]}>
                 <VectorImage style={styles.Svg} source={svg} />
            </View>
            <View>
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor={colors.MainDarkGray}
                    onChangeText={(val) => onChange(val)}
                    textColor={colors.MainBlack}
             />
            </View>
        </View>
    );
};

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  leftIconContainerStyle:ViewPropTypes.style,
 };
 SearchInput.defaultProps = {
     placeholder: 'Hane, abone no, TC ile  arayın',
 };

export { SearchInput };