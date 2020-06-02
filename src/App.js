import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Header from './components/common/Header';
import Logout from './components/common/Logout';
import ActivityIndicat from './components/common/ActivityIndicat';
import LoginForm from './components/LoginForm';
import firebase from 'firebase';


class App extends Component {

 state={isLogin:null};

  UNSAFE_componentWillMount(){
     firebase.initializeApp(
       {
         apiKey: 'AIzaSyA5lBwrqtPesY-Kvsl2eRPEFnc8tGEk6Ts',
         authDomain: 'authentication-8150a.firebaseapp.com',
         databaseURL: 'https://authentication-8150a.firebaseio.com',
         projectId: 'authentication-8150a',
         storageBucket: 'authentication-8150a.appspot.com',
         messagingSenderId: '346527666236',
         appId: '1:346527666236:web:6dcb3d212bdaa8be91b339',
         measurementId: 'G-D5QC6XNC8Q'
       }
     );
     firebase.auth().onAuthStateChanged((user) => {
         if(user){
           this.setState({isLogin:true});
         }
         else{
           this.setState({isLogin:false});
         }
       });
        console.log('Class App : UNSAFE_componentWillMount : isLogin : '+this.state.isLogin);

     }



bodyRender()
{
  console.log("bodyRender : islogin = "+this.state.isLogin);
      switch(this.state.isLogin)
      {
        case true:
        console.log("switch case TRUE :islogin = "+this.state.isLogin);
         return ( <Logout onClick={() => {firebase.auth().signOut()}}/> );

         case false:
         console.log("switch case FALSE :islogin = "+this.state.isLogin);
         return ( <LoginForm/> );

        default :
        console.log("switch case DEFAULT :islogin = "+this.state.isLogin);
        return (
          <View style={{marginTop:50}}>
          <ActivityIndicat isSize={'large'}/>
           </View>
           );
      }
  }

   render(){

     return(
          <View>
              <Header headerText={'Authenticate Me'}/>
              {this.bodyRender()}
           </View>
           );
      }
   }
export default App;
