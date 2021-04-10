import React from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import profileImage from "../photos/image3.jpg";
import { logout } from "../Redux/actions/authActions";
import { connect } from "react-redux";
import { Card } from "react-native-shadow-cards";
import * as Progress from 'react-native-progress';

function UserDashboard({ navigation, logout }) {
  return (

    <ScrollView style={{ backgroundColor: "#fff", flex: 1 }} >
      <Image
        source={profileImage}
        style={{
          width: 200,
          height: 200,
          alignSelf: "center",
          borderRadius: 100,
        }}
      ></Image>
      <Text style={{ alignSelf: "center", fontSize: 22, fontWeight: "bold",  }}>
        Prifile Name
      </Text>
     
        
      <TouchableOpacity
          style={{
            paddingVertical:15,
            left:10,
            marginRight:30,
            borderWidth: 1,
            borderColor: "purple",
            borderRadius: 20,
            alignItems:"center"
          }}
          onPress={()=>navigation.navigate('survey')}
        >
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>Create Campaign</Text>
        </TouchableOpacity>

      <View style={{ justifyContent: "space-around", flexDirection: "row", marginVertical:10 }}>
        <TouchableOpacity
          style={{
            padding: 20,
            borderWidth: 1,
            borderColor: "purple",
            left: 20,
            borderRadius: 50,
          }}
          onPress={logout}
        >
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 20,
            borderWidth: 1,
            borderColor: "purple",
            right: 20,
            borderRadius: 50,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <Card style={{ padding: 10, margin: 10,height: 180 }}>
          <Text  style={{ fontSize: 25, marginBottom:40}}>Amount Donated</Text>
          <View  style={{ flexDirection:"row" }}>
          <Text  style={{ fontWeight: "bold", fontSize: 25, marginBottom:20, fontFamily:"Avenir"}}>GH</Text>
          <Text  style={{ fontSize: 25, marginBottom:20}}>000</Text>
          </View>     
          <Progress.Bar progress={0.3} width={300} height={12} style={{marginTop:20 }}/>
        </Card>
        <Card style={{ padding: 10, margin: 10, height: 180 }}>
        <Text style={{ fontSize: 25, marginBottom:40}}>Donations Recieved</Text>
        <View  style={{ flexDirection:"row" }}>
          <Text  style={{ fontWeight: "bold", fontSize: 25, marginBottom:20, fontFamily:"Avenir"}}>GH</Text>
          <Text  style={{ fontSize: 25, marginBottom:20}}>000</Text>
          </View>  
        <Progress.Bar progress={0.3} width={320} height={12} style={{marginTop:20 }}/>
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  profileImagecontainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
    marginRight: 100,
    marginLeft: 100,
    top: 0,
    borderRadius: 90,
    minHeight: 200,
  },
  centerElement: { justifyContent: "center", alignItems: "center" },
});

const mapStateToProps = (state) => {
  return { auth: state };
};

export default connect(mapStateToProps, { logout })(UserDashboard);
