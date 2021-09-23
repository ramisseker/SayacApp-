import React from "react";
import { Text, View } from "react-native";
import { colors, fonts } from "~/components";
import { splash_logo } from "~/assets";
import { fontSize } from "~/utils";
import VectorImage from 'react-native-vector-image';



const SplashScreen = () => {

    return (
        <View style={{ height:"100%",backgroundColor: colors.MainBlue,justifyContent:"center", }}>
            <View style={{ bottom: 100,alignItems:"center" }}>
                <VectorImage  style={{marginBottom: fontSize(20),}} source={splash_logo} />
                <Text style={{marginTop: fontSize(30),textAlign:"center",fontSize:fontSize(30),color:colors.MainWhite,}}>HOŞ GELDİNİZ</Text>
            </View>
        </View>
   ) 
    
};

export { SplashScreen };