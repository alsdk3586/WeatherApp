import React from 'react';
import {Alert} from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";


export default class extends React.Component{
  state={
    isLoading :true
  };
  getLocation=async()=>{    
    try{
      
      const response=await Location.requestPermissionsAsync();

      const {coords:{latitude,altitude}} =await Location.getCurrentPositionAsync();
      console.log(latitude,altitude); 
      this.setState({isLoading:false});
    }
    catch(err){
      Alert.alert("can't find you","so sad");
    }
  };
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const {isLoading}=this.state;
    return isLoading?<Loading/>:null;
  }
}


