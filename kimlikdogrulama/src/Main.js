import React, {Component} from 'react';
import {Text,View} from 'react-native';

import firebase from 'firebase';
import Header from './ortak/Header';
import LoginForm from './LoginForm';
import Button from './ortak/Button';
import CardSection from './ortak/CardSection';
import Spinner from './ortak/Spinner';
class Main extends Component {
  state={loggedIn:null};
  componentDidMount(){
    firebase.initializeApp({
    apiKey: 'AIzaSyBtji_7Jd_zW6WGMlo7LTapIIwDLI0UhgI',
    authDomain: 'kimlikdogrulama-96b19.firebaseapp.com',
    databaseURL: 'https://kimlikdogrulama-96b19.firebaseio.com',
    projectId: 'kimlikdogrulama-96b19',
    storageBucket: 'kimlikdogrulama-96b19.appspot.com',
    messagingSenderId: '317076423439',
    appId: '1:317076423439:web:3d0ad586090a50a9eb347a',
    measurementId: 'G-T64R5RXZ9D'
  });

  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      this.setState({loggedIn:true});
    }else{
      this.setState({loggedIn:false});
    }
  });
}
clickLogout(){
  firebase.auth().signOut();
}
renderContent(){
  switch (this.state.loggedIn) {
    case true:
    return (
      <CardSection>
       <Button onPress={this.clickLogout.bind(this)}> ÇIKIŞ</Button>
      </CardSection>
    );

      case false:
         return (
           <LoginForm />
         );
    default:
       return(
         <View>
         <Spinner size='large'/>
         </View>
       );

  }
}
  render(){
    return(
      <View>
      <Header headerText="Giriş Ekranı"/>
       {this.renderContent()}
      </View>
    );
  }
}
export default Main;
