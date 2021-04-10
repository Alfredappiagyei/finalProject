import React from "react";
 import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity, 
    Image,
  } from "react-native";
  import * as Progress from 'react-native-progress';
  

const SuggestedCampaignPost = ({ title, category, goal, location, image, about, navigation }) => {
   
    return (
     <View style={styles.card}>
     <TouchableOpacity 
     onPress={()=>navigation.navigate('suggestedcampaignsdetails',{ title, category, goal, location, image, about, navigation }) }>
      {image != null ? (
       <Image source={require('../assets/default-img.jpg')} style={styles.cardImage} />
      ) : (     
        <Image source={image} style={styles.cardImage} />
      )}

        <View style={styles.cardHeader}>
          <Text category="s1" style={styles.cardTitle}>
            {title}
          </Text>
          <Text  style={{fontSize:24,marginBottom:10, fontFamily:"Courier-Bold"}}>
            {about}
          </Text>
          <View>
            <Text style={{fontSize:20,}}>
              $400<Text>Raised</Text>
            </Text>
          </View>
          <Progress.Bar
            progress={0.3}
            width={350}
            height={12}
            style={{ marginTop: 5, }}
          />

          <View style={{flexDirection:"row", marginTop:15}}>
            <Text category="s1" style={{fontSize:24,}}>
              Goal:
            </Text>
            <Text category="s1" style={{fontSize:24,}}>
              {goal}
            </Text>
          </View>
        </View>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: "#fff",
    marginBottom: 25,
  },
  cardImage: {
    width: "100%",
    height: 300,
  },
  cardHeader: {
    padding: 10,
    flexDirection: "column",
  },
  cardTitle: {
    color: "#000",
    fontSize:25,
    fontWeight:"bold",
    marginTop:10,
    marginBottom:10,
    fontFamily:"Courier-Bold"
  },
});






export default SuggestedCampaignPost;