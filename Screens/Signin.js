
import {connect} from 'react-redux';
import {loginEmailAccount,} from '../Redux/actions/authActions'
import React from 'react';
import {Text,View,Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';

 class Signin extends React.Component{

  constructor (props) {
    super(props)
    this.state ={  
      email:"",
      password:"",
 
    }
 }
  
 handleUpdateState=(name,value) =>{
  this.setState({
    [name]:value
  })
}

handleOnSubmit=()=>{
    if (!this.state.email) {
        Alert.alert('Please provide an email');
      } else if (!this.state.password) {
          Alert.alert('Password is required.');
       }    else{
            this.props.loginEmailAccount (this.state.email, this.state.password)
}   
}

    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={{backgroundColor:"#FFF", flex:1}}>
                <Image source ={require('../photos/image1.jpg')}
                    style={{width:"100%",height:"43%"}}
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
                    <Icon name="mail" color="#00716F" size={24}/>
                    <TextInput 
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
                    <Icon name="password" color="#00716F" size={24}/>
                    <TextInput 
                        style={{paddingHorizontal:10}}
                        value={this.state.password}
                        onChangeText={(text) =>{
                         this.handleUpdateState('password',text)
                       }}
                       secureTextEntry={true}
                       placeholder="*****"
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
                    }}>Sign in</Text>
             </TouchableOpacity>
             </View>              
            </View>
        )
    }
}



 
const mapStateToProps =(state) =>{
  return {auth:state}
}
 export default connect(mapStateToProps,{loginEmailAccount})(Signin);