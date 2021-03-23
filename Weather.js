import React from "react";
import {View, Text, StyleSheet,StatusBar} from "react-native";
import PropTypes from "prop-types";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";

const weatherOptions={
    Haze: {
        iconNmae:"weather-hail",
        gradient:["#1F1C2C","#928DAB"]
    },
    Thunderstorm :{
        iconNmae:"weather-hurricane",
        gradient:["#1A2980","#26D0CE"]
    }, 
    Drizzle :{
        iconNmae:"weather-partly-rainy",
        gradient:["#314755","#26a0da"]
    }, 
    Rain :{
        iconNmae:"weather-pouring",
        gradient:["#ff6e7f","#bfe9ff"]
    },
    Snow :{
        iconNmae:"weather-snowy-heavy",
        gradient:["#076585","#fff"]
    }, 
    Atmosphere :{
        iconNmae:"weather-sunny",
        gradient:["#E55D87","#E55D87"]
    },
    Clear :{
        iconNmae:"weather-sunny",
        gradient:["#3CA55C","#B5AC49"]
    },
    Clouds :{
        iconNmae:"weather-partly-cloudy",
        gradient:["#2193b0","#6dd5ed"]
    },
    Mist :{
        iconNmae:"weather-rainy",
        gradient:["#348F50","#56B4D3"]
    },
    Smoke :{
        iconNmae:"weather-cloudy-alert",
        gradient:["#2b5876","#4e4376"]
    },
    Dust :{
        iconNmae:"weather-cloudy-alert",
        gradient:["#cc2b5e","#753a88"]
    },
    Fog :{
        iconNmae:"weather-fog",
        gradient:["#00467F","#A5CC82"]
    },
    Sand :{
        iconNmae:"weather-cloudy-alert",
        gradient:["#1488CC","#2B32B2"]
    },
    Ash :{
        iconNmae:"weather-cloudy-alert",
        gradient:["#ec008c","#fc6767"]
    },
    Squall :{
        iconNmae:"weather-cloudy-alert",
        gradient:["#003973","#E5E5BE"]
    },
    Tornado :{
        iconNmae:"weather-cloudy-alert",
        gradient:["#403B4A","#E7E9BB"]
    }
}
const defaultOptions={
    iconNmae:"weather-cloudy-alert",
    gradient:["#1FA2FF","#12D8FA","#A6FFCB"]
}
export default function Weather({temp, condition}){
    return  (
    <LinearGradient
        colors={weatherOptions[condition].gradient||defaultOptions.gradient}
        style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.halfContainer}>
            <MaterialCommunityIcons 
                name={weatherOptions[condition].iconNmae||defaultOptions.iconNmae} 
                size={90} color="white">
            </MaterialCommunityIcons>
            <Text style={styles.temp}>{temp}°</Text>
        </View>    
        <View style={styles.halfContainer}>

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
    temp:{
        fontSize:32,
        color:"white",
    },
    halfContainer:{
        flex:1,
        justifyContent:"flex-end",
        alignItems: "center"
    }
})