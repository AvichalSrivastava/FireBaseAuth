import React from 'react';
import {Text, View, TextInput} from 'react-native';
const Input = (props) =>{
  return(
    <View style={styles.container}>
      <Text style={styles.labelStyle}> {props.txt}</Text>
      <TextInput placeholder={props.placeholder} value={props.value}  onChangeText={props.onChangeText} secureTextEntry={props.secureTextEntry} style={styles.inputStyle}/>
    </View>
  );
};
const styles = {
  inputStyle:{
    color:'#000',
    flex:2,
    fontSize:18,
    lineHeight:23,
    paddingLeft:5,
    paddingRight:5,
  },
  labelStyle:{
   fontSize:18,
   flex:1,
   paddingLeft:20,
  },
  container:{
   height:40,
   flex:1,
   flexDirection: 'row',
   alignIems:'center',
  },
}
export default Input;
