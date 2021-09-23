import {colors, globalStyle} from '../config';

import {StyleSheet} from 'react-native';
import { fontSize } from '~utils';
import { sizes,fonts, lineHeights } from '../config/fonts';


const styles = StyleSheet.create({
    Container: {
        ...globalStyle.fdc,
        marginHorizontal: fontSize(16),
        marginTop: fontSize(30),
        borderRadius: fontSize(14),
        elevation: 15,
        backgroundColor: "white",
        paddingHorizontal: fontSize(24),
        paddingVertical: fontSize(20),
         
    },
    TextStyle: {
        ...fonts.Normal,
        ...sizes.h6,
        lineHeight: 24,
    },
    Status: {
        ...globalStyle.fdr,
        ...globalStyle.aic,
        ...globalStyle.jcsb,
        
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