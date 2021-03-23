import React from 'react';
import {Alert} from "react-native";
import Loading from "./Loading";
import Weather from "./Weather";
import * as Location from "expo-location";
import axios from "axios";
const API_KEY="8b7e87d4a7fd1b3222eb83ee247090dc";

export default class extends React.Component{
  state={
    isLoading :true
  };
  getWeather=async(lat,lon)=>{
    const {
      data : {
        main:{temp},
        weather
      }
    }=await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
    this.setState({isLoading:false, condition:weather[0].main, temp:temp});
  }
  getLocation=async()=>{    
    try{
      await Location.requestPermissionsAsync();
      const {coords:{latitude,longitude}} =await Location.getCurrentPositionAsync();
      console.log(latitude,longitude); 
      this.getWeather(latitude,longitude);
    }
    catch(err){
      Alert.alert("can't find you","so sad");
    }
  };
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const {isLoading,temp,condition}=this.state;
    return isLoading?<Loading/>:<Weather temp={Math.round(temp)} condition={condition}/>;
  }
}


