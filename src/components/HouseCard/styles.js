import { colors, globalStyle,sizes,fonts,lineHeights } from '../config';

import {StyleSheet} from 'react-native';
import { fontSize } from '~utils';



const styles = StyleSheet.create({
    Container: {
        paddingTop: 20,
        marginHorizontal: fontSize(16),
        marginVertical: fontSize(10),
        borderRadius: fontSize(14),
        padding: fontSize(13),
        paddingBottom:fontSize(7),
        elevation: 15,
        backgroundColor:"white",
    },
    AnContainer: {
        

    },
    Svg: {
        width: fontSize(20),
        height: fontSize(20),
    },
    NameContainer: {
        ...globalStyle.jcsb,
        ...globalStyle.fdr,
        paddingBottom: fontSize(8),
        
    },
    TextNameStyle: {
         color: colors.MainBlack,
         fontSize: sizes.h4,
         ...fonts.Normal,
         paddingHorizontal:fontSize(7),
    },
    badgeContainer: {
        ...globalStyle.fdr,
        ...globalStyle.jcfe,
    },
    TextMeterStyle: {
        ...fonts.Normal,
        fontSize: sizes.h6,
        color: colors.MainDarkGray,
        

    },
    TextAddressStyle: {
        ...fonts.Normal,
        fontSize: sizes.h6,
        color: colors.MainDarkGray,
        
        
    },
    AdressContainer: {
        paddingBottom:fontSize(8),
    },
    AnText: {
        fontSize: sizes.h4,
        ...fonts.Normal,
        
    },
    AnIdText: {
        color: colors.MainBlue,
        ...fonts.Normal,
        fontSize: sizes.h4,
    }





});




 

export default styles;