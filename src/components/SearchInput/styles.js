import {colors, globalStyle} from '../config';

import {StyleSheet} from 'react-native';
import { fontSize } from '~utils';



const styles = StyleSheet.create({
    Container: {
        borderWidth: 2,
        borderRadius: fontSize(40),
        borderColor: colors.MainBlue,
        marginVertical:10,
        ...globalStyle.fdr,
        width:"100%",
        height:fontSize(44),
        alignSelf: "center",
        
       
     
    },
    Svg: {
        width: fontSize(20),
        height: fontSize(20),
        color: colors.MainDarkGray,
        
    },
    leftIcon: {
        paddingHorizontal: fontSize(14),
        paddingVertical: fontSize(10),
    },
    
})



 

export default styles;