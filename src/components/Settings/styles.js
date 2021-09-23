import { colors, globalStyle, fonts, sizes } from '../config';
import { StyleSheet } from 'react-native';
import { calcWidth, fontSize } from '~utils';

const styles = StyleSheet.create({

    Container: {
        ...globalStyle.asc,
        width: calcWidth(88),
        backgroundColor: colors.MainWhite,
        borderRadius: fontSize(25),
        elevation: 10,
        marginVertical: fontSize(6)

    },
    Settings_button: {
        padding: fontSize(10),
        ...globalStyle.fdr,
        ...globalStyle.jcsb,
    },
    Row_view: {
        ...globalStyle.fdr,

    },
    Text: {
        marginLeft: fontSize(10)
    }
});

export default styles;