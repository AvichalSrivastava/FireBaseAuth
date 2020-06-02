import React from 'react';
import ReactNative,{Text, View} from 'react-native';

 const TextShow = (props) => {
   const {error, sucess, containerView} = styles;

     return(
       <View style={containerView}>
       <Text style={error}>{props.textIs}</Text>
       </View>);
   }



 const styles = {
   error:{
    fontSize: 16,
    color : '#ff0000'
 },
  containerView:{
    justifyContent:'center',
    alignItems:'center',
  }
 }
 export default TextShow;
