import {colors, globalStyle} from '~components';
import {calcWidth, calculate, fontSize} from '~utils';
import { StyleSheet } from 'react-native';
import { sizes,fonts, lineHeights } from '~/components/config/';


const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: colors.MainWhite,
        
    },
    header: {
        ...globalStyle.fdr,
        ...globalStyle.jcsb,
        ...globalStyle.aic,
    }

    
});
export default styles;