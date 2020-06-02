import React, {Component} from 'react';
import {View,ActivityIndicator} from 'react-native';
const ActivityIndicat = ({isSize}) => {

  return(

    <View style={{justifyContent: "center", alignItems:'center',flex:1}}>
     <ActivityIndicator size={isSize || 'large'} color="#0000ff" />
     </View>
  );
};
export default ActivityIndicat;
