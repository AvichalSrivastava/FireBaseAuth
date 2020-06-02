import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import Header from './common/Header';
import Button from './common/Button';
import Card from './common/Card';
import CardItem from './common/CardItem';
import Input from './common/Input';
import TextShow from './common/TextShow';
import firebase from 'firebase';
import ActivityIndicat from './common/ActivityIndicat';

class LoginForm  extends Component {
  state = {text:'', password:'', error:'', loading: false};


  onSucessfulLogin()
  {
    this.setState({
      text: '',
      password: '',
      error: '',
      loading: falses
    });
    console.log( 'sucess : Successfuly login');
  }
  onLoginFail(){
    this.setState({
      password:'',
      error: 'Authentication Failed',
      loading: false
    });
    console.log('error : Authentication Failed');
  }
 onButtonPress ()
 {
   const {text, password, error} = this.state;
     this.setState({error:'', loading: true});

     if(this.state.text!='' && this.state.password!='')
      {
        console.log("onButtonPress : UserName : "+this.state.text +" password : "+this.state.password);
        firebase.auth().signInWithEmailAndPassword(text,password)
        .then(this.onSucessfulLogin.bind(this))
         .catch( () =>
         {
            firebase.auth().createUserWithEmailAndPassword(text, password)
           .then(this.onSucessfulLogin.bind(this))
            .catch(this.onLoginFail.bind(this));
        });
      }
      else
      {
        //user name or password empty
        this.setState({error:'Please Enter Email or Password', loading: false, responseType: 'error'});
      }
      console.log('UserName typed : ' +this.state.text);
      console.log('Password typed : ' +this.state.password);
  }
  renderButton()
  {
    if(this.state.loading)
    {
    return  <ActivityIndicat isSize={'small'}/>
    }
      return  <Button text={'Login'} onClick={this.onButtonPress.bind(this)}/>
     }

  render()
  {
   return(
      <View>
       <Card>
         <CardItem>
         <Input secureTextEntry={false} txt={'Email: '} placeholder={'user@gmail.com'} value={this.state.text} onChangeText={text => this.setState({text})} />
         </CardItem>
         <CardItem>
           <Input secureTextEntry={true} txt={'Password: '} placeholder={'Password'} value={this.state.password} onChangeText={password => this.setState({password})} />
           </CardItem>
          <TextShow textIs={this.state.error}/>
          <CardItem>
             {this.renderButton()}
           </CardItem>
       </Card>
      </View>
   );
  }
}
export default LoginForm;
