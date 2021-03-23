import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import {StyleSheet, Text,View,StatusBar} from "react-native";

export default function Loading(){
    return <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.loading}>
            <Icon name="weather-cloudy" size={200}  color="#fff"></Icon>
            <Text style={styles.loadingText}>The WeatherApp</Text>
        </View>
    </View>;
}
const styles= StyleSheet.create({
  container:{
    flex:1,
  },
  loading:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#9fcdfb"
  },
  loadingText:{
    fontSize:30
  }
});