
import {connect} from 'react-redux';
import { createEmailAccount} from '../Redux/actions/authActions'
import firebase from '../firebase/firebase';

import React from 'react';
import {Text,View,Image, TextInput, TouchableOpacity, ScrollView, Alert} from 'react-native';
// import Icon from '@expo/vector-icons/AntDesign';

 class Signup extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      name:"",
      email:"",
      password:"",
      confirm:""
    }
  }


handleUpdateState=(name,value) =>{
  this.setState({
    [name]:value
  })
}

handleOnSubmit = async ()=>{
  try {
  if (!this.state.name) {
    Alert.alert(' Name is required');
  } else if (!this.state.email) {
    Alert.alert(' Email is required.');
  } else if (!this.state.password) {
    Alert.alert(' password is required.');
  } else if (this.state.password != this.state.confirm) { 
    Alert.alert('Password do not match');
  } else {
    this.props.createEmailAccount(this.state.email, this.state.password)
    .then(() => {
      //Once the user creation has happened successfully, we can add the currentUser into firestore
      //with the appropriate details.
     firebase.firestore().collection('users').doc(user.uid)
      .add({
          name: user.name,
          email: user.email,
          createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
      })
      //ensure we catch any errors at this stage to advise us if something does go wrong
      .catch(error => {
          console.log('Something went wrong with added user to firestore: ', error);
      })
    })
    //we need to catch the whole sign up process if it fails too.
    .catch(error => {
        console.log('Something went wrong with sign up: ', error);
    });   
  } 
} 
  catch (e) {
    console.log(e);
  }

} 




    render(){
      let {navigation} = this.props
        return(
          <ScrollView  style={{backgroundColor:"#FFF",height:"100%"}}>
            
                <Image source ={require('../photos/image3.jpg')}
                    style={{width:"100%",height:"55%"}}
                />
                <Text
                 style={{
                     fontSize:30,
                  
                     alignSelf:"center",
                 }}
                >Save the world</Text>

                <Text
                style={{
                    
                    marginHorizontal:55,
                    textAlign:'center',
                    marginTop:5,
                    opacity:0.4
                }}
                >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </Text>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:50,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                  
                    <TextInput 
                        placeholder="Full Name"
                        placeholderTextColor="#00716F"
                        style={{paddingHorizontal:10}}
                        value={this.state.name}
                        onChangeText={(text) =>{
                         this.handleUpdateState('name',text)
                       }}
                    />

                    

                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                   
                   <TextInput 
                      
                        placeholder="email"
                        placeholderTextColor="#00716F"
                        style={{paddingHorizontal:10}}
                        value={this.state.email}
                        onChangeText={(text) =>{
                         this.handleUpdateState('email',text)
                       }}
                    />
                </View>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                   
                   <TextInput 
                        secureTextEntry
                        placeholder="Password"
                        placeholderTextColor="#00716F"
                        style={{paddingHorizontal:10}}
                        value={this.state.password}
                        onChangeText={(text) =>{
                         this.handleUpdateState('password',text)
                       }}
                    />              
                </View>


                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                   
                   <TextInput 
                        secureTextEntry
                        placeholder="Confirm Password"
                        placeholderTextColor="#00716F"
                        style={{paddingHorizontal:10}}
                        value={this.state.confirm}
                        onChangeText={(text) =>{
                         this.handleUpdateState('confirm',text)
                       }}
                    />              
                </View>

                <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:"#00716F",
                    paddingVertical:10,
                    borderRadius:23
                }}>    
            <TouchableOpacity
                       onPress={this.handleOnSubmit} >
                <Text style={{
                        color:"white",                  
                    }}>Register</Text>
             </TouchableOpacity>
             </View>

              <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:"#00716F",
                    paddingVertical:10,
                    borderRadius:23
                }}>
                    <TouchableOpacity  onPress={()=>navigation.navigate('Signin')}>
                      <Text style={{
                        color:"white",
              
                    }} >Already a member</Text>
                      </TouchableOpacity>
                </View>            
          
            </ScrollView>
        )
    }
}



const mapStateToProps =(state) =>{
  return {auth:state}
}
 
export default connect(mapStateToProps,{createEmailAccount})(Signup)










