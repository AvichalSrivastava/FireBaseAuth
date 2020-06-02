import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Button from './Button';
import CardItem from './CardItem';
import Card from './Card';
 const Logout =(props)=>{
   return(
     <View style={{marginTop:50}}>
     <Card>
     <CardItem>
     <Button text={'Logout'} onClick={props.onClick}/>
     </CardItem>
     </Card>
     </View>
   );
 }
 export default Logout;
