import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import VectorImage from 'react-native-vector-image';
import { PropTypes, ViewPropTypes } from '~/components/config';
import { arrow_right } from '~/assets';
import styles from './styles';

const Settings = props => {

    const {

        svg,
        text,
        consSvg,
        onPress,
    } = props;

    return (
        <View style={styles.Container}>
            <TouchableOpacity style={styles.Settings_button} onPress={onPress}>
                <View style={styles.Row_view}>
                    <VectorImage
                        source={svg} />
                    <Text style={styles.Text}>{text}</Text>
                </View>
                <VectorImage
                    source={consSvg} />
            </TouchableOpacity>
        </View>
    );
};

Settings.propTypes = {
    svg: PropTypes.number,
    text: PropTypes.string,
    consSvg: PropTypes.number
};

Settings.defaultProps = {
    consSvg: arrow_right,
};

export { Settings };