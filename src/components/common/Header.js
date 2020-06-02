import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {

  const { textStyle, viewStyle } = styles;

  return (

   <View style={viewStyle}>
     <Text style={ textStyle }> {props.headerText} </Text>
    </View>
   );

};
const styles = {

     viewStyle : {
         backgroundColor: '#D46D6A' ,
          justifyContent : 'center' ,
          alignItems : 'center' ,
          height : 60,
          borderTopLeftRadius : 20,
          borderTopRightRadius : 20,
          borderBottomLeftRadius : 20,
          borderBottomRightRadius:20,
          padding : 15,
          elevation: 2,
          position: 'relative'
      },
     textStyle : {
        fontSize : 20,
        fontFamily: "Cochin",
        color:'#ffffff',
        fontWeight:'bold',
      }

  };

export default Header;
