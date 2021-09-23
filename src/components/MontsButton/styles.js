import {colors, globalStyle} from '../config';

import {StyleSheet} from 'react-native';
import { fontSize } from '~utils';
import { sizes,fonts } from '../config/fonts';


const styles = StyleSheet.create({
    Container: {
        ...globalStyle.jccaic,
        ...globalStyle.asc,
        borderRadius: fontSize(15),
        paddingVertical: fontSize(4),
        marginHorizontal: fontSize(6),
        borderRadius: fontSize(50),
        width: fontSize(100),
        height: fontSize(30),
        backgroundColor: "#FFFFFF",
        borderColor: colors.MainBlue,
        borderWidth: 2,
        elevation: 15,
        marginTop:fontSize(10),

    },
    TextStyle: {
        fontSize: sizes.h5,
        ...fonts.Normal,
        color:"#292929",
    },
    TextStyleActive: {
        fontSize: sizes.h5,
        ...fonts.Normal,
        color:"#FFFFFF",
    },
    ButtonActive: {
        backgroundColor: colors.MainBlue,
        
    }

});

export default styles;