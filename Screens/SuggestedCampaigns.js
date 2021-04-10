import React, { Component } from "react";
import {
  Image,
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  FlatList,
} from "react-native";
import firebase from "../firebase/firebase";
import SuggestedCampaignPost from "./SuggestedCampaignPost";

 

class SuggestedCampaigns extends Component {
  constructor() {
    super();
    this.ref = firebase.firestore()
    .collection('campaigns');
    this.unsubscribe = null;
    this.state = {
      isLoading: true,
      campaigns: []
    };
  }
   
  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.fetchPosts);
  }


   fetchPosts = async () => {
    try {
    const campaigns = [];
    await firebase.firestore()
    .collection('campaigns')
    .get()
    .then((querySnapshot) => {      
      querySnapshot.forEach((doc) => {
        const {
          title,
          category,
          goal,
          location,
          about,
          image,
        } = doc.data();
        campaigns.push({
          key: doc.id,
          doc,
          title,
          category,
          goal,
          location,
          about,
          image,

        });
      });
    })

    this.setState({
      campaigns,
      isLoading: false,
   });

  } catch (e) {
    console.log(e);
  }
};
   

  render() {
    let {navigation} = this.props
    if(this.state.isLoading){
      return(
        <View style={styles.activity}>
          <ActivityIndicator size="large" color="#0000ff"/>
        </View>
      )
    }

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          style={styles.container}
          data={this.state.campaigns}
          keyExtractor={(item) => item.id}
          renderItem={
            ({item}) => {
              return (
                <View>
                  <SuggestedCampaignPost
                    title={item.title}
                    category={item.category}
                     goal={item.goal}
                    location={item.location}
                    about={item.about}
                    image={item.image}
                    navigation={navigation}
                  />
                </View>
              );
            }
          }
        
        />
      </View>
    );
  }
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
    marginBottom:10
  },
});

export default SuggestedCampaigns;
