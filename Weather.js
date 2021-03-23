import React from "react";
import {View, Text, StyleSheet,StatusBar} from "react-native";
import PropTypes from "prop-types";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";

const weatherOptions={
    Haze: {
        iconNmae:"weather-hail",
        gradient:["#1F1C2C","#928DAB"],
        subtitle:"Be careful to drive"
    },
    Thunderstorm :{
        iconNmae:"weather-hurricane",
        gradient:["#1A2980","#26D0CE"],
        subtitle:"Don't go outside"
    }, 
    Drizzle :{
        iconNmae:"weather-partly-rainy",
        gradient:["#314755","#26a0da"],
        subtitle:"Bring an umbrella"
    }, 
    Rain :{
        iconNmae:"weather-pouring",
        gradient:["#ff6e7f","#bfe9ff"],
        subtitle:"You must bring an umbrella"
    },
    Snow :{
        iconNmae:"weather-snowy-heavy",
        gradient:["#076585","#fff"],
        subtitle:"Go outside to play in the snow!!"
    }, 
    Atmosphere :{
        iconNmae:"weather-sunny",
        gradient:["#E55D87","#E55D87"],
        subtitle:"Have a nice day"
    },
    Clear :{
        iconNmae:"weather-sunny",
        gradient:["#3CA55C","#B5AC49"],
        subtitle:"Go outside to play!!!"
    },
    Clouds :{
        iconNmae:"weather-partly-cloudy",
        gradient:["#2193b0","#6dd5ed"],
        subtitle:"Blue....."
    },
    Mist :{
        iconNmae:"weather-rainy",
        gradient:["#348F50","#56B4D3"],
        subtitle:"Be careful to drive"
    },
    Smoke :{
        iconNmae:"weather-cloudy-alert",
        gradient:["#2b5876","#4e4376"],
        subtitle:"Be careful to drive"
    },
    Dust :{
        iconNmae:"weather-cloudy-alert",
        gradient:["#cc2b5e","#753a88"],
        subtitle:"Have a nice day"
    },
    Fog :{
        iconNmae:"weather-fog",
        gradient:["#00467F","#A5CC82"],
        subtitle:"Be careful to drive"
    },
    Sand :{
        iconNmae:"weather-cloudy-alert",
        gradient:["#1488CC","#2B32B2"],
        subtitle:"Let's wear a mask"
    },
    Ash :{
        iconNmae:"weather-cloudy-alert",
        gradient:["#ec008c","#fc6767"],
        subtitle:"Have a nice day"
    },
    Squall :{
        iconNmae:"weather-cloudy-alert",
        gradient:["#003973","#E5E5BE"],
        subtitle:"not recommand to go outside"
    },
    Tornado :{
        iconNmae:"weather-cloudy-alert",
        gradient:["#403B4A","#E7E9BB"],
        subtitle:"Don't go outside"
    }
}
const defaultOptions={
    iconNmae:"weather-cloudy-alert",
    gradient:["#1FA2FF","#12D8FA","#A6FFCB"],
    subtitle:"Habe a nice day"
}
export default function Weather({temp, condition}){
    return  (
    <LinearGradient
        colors={weatherOptions[condition].gradient||defaultOptions.gradient}
        style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={{...styles.halfContainer, ...styles.top}}>
            <MaterialCommunityIcons 
                name={weatherOptions[condition].iconNmae||defaultOptions.iconNmae} 
                size={90} color="white">
            </MaterialCommunityIcons>
            <Text style={styles.temp}>{temp}°</Text>
        </View>    
        <View style={{...styles.halfContainer,...styles.textConatiner}}>
            <Text style={styles.title}>{condition}</Text>
            <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
        </View>
    </LinearGradient>

    );
}

Weather.PropTypes={
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
            "Thunderstorm", 
            "Drizzle", 
            "Rain",
            "Snow", 
            "Atmosphere",
            "Clear",
            "Clouds",
            "Mist",
            "Smoke",
            "Dust",
            "Haze",
            "Fog",
            "Sand",
            "Ash",
            "Squall",
            "Tornado"
        ]).isRequired
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems: "center",
    },
    top:{
        justifyContent:"flex-end"
    },
    temp:{
        fontSize:32,
        color:"white",
    },
    title:{
        color:"white",
        fontSize:44,
        fontWeight:"300",
        marginBottom:10
    },
    subtitle:{
        fontWeight:"600",
        color:"white",
        fontSize:24
    },
    halfContainer:{
        flex:1,
        justifyContent:"center",
        alignItems: "center"
    },
    textConatiner:{
        paddingHorizontal:20,
        alignItems:"flex-start",
        marginBottom:30
    }
})