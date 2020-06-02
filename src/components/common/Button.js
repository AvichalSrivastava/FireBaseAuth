import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

  const Button = ({onClick,text}) => {
    return(
      <TouchableOpacity onPress={onClick} style={styles.ButtonStyle}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    );
  };

  const styles = {
    buttonText : {
      fontSize : 16,
      alignSelf:'center',
      color:'#007aff',
      fontWeight : '600',
      paddingTop:10,
      paddingBottom:10
    },
    ButtonStyle:{
      flex:1,
      alignSelf:'stretch',
      backgroundColor:'#fff',
      borderRadius: 5,
      borderColor: '#007aff',
      borderWidth: 1,
      marginLeft : 5,
      marginRight:5
    }
  }
export default Button;
