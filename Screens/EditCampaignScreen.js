import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, TextInput , TouchableOpacity, Alert} from 'react-native';
import { Button } from 'react-native-elements';
import firebase from '../firebase/firebase';

 
 class EditCampaignScreen extends React.Component{
  constructor (props) {
    super(props)
    this.state ={  
        key: '',
        isLoading: true,
        title: '',
        category: '',
        goal: '',
        location: '',
        about: ''
 
    }
 }

 componentDidMount() {
    const { navigation } = this.props;
    const ref = firebase.firestore().collection('campaigns').doc(JSON.parse(navigation.getParam('boardkey')));
    ref.get().then((doc) => {
      if (doc.exists) {
        const campaign = doc.data();
        this.setState({
          key: doc.id,
          title: campaign.title,
          category: campaign.category,
          goal: campaign.goal,
          location: campaign.location,
          about: campaign.about,
          isLoading: false
        });
        
      } else {
        console.log("No such document!");
      }
    });
  }

  updateTextInput = (text, field) => {
    const state = this.state
    state[field] = text;
    this.setState(state);
  }
  
  updateBoard() {
    this.setState({
      isLoading: true,
    });
    const { navigation } = this.props;
    const updateRef = firebase.firestore().collection('campaigns').doc(this.state.key);
    updateRef.set({
      title: this.state.title,
      category: this.state.category,
      goal: this.state.goal,
      location: this.state.location,
      about: this.state.about,
    }).then((doc) => {
      this.setState({
        key: '',
        title: '',
        category: '',
        goal: '',
        location: '',
        about: '',
        isLoading: false,
      });
    //   Alert.alert('Campaign Updated Successsfully');
      navigation.navigate('campaigns');
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
      this.setState({
        isLoading: false,
      });
    });
  }
 
    render(){
      
        if(this.state.isLoading){
            return(
              <View style={styles.activity}>
                <ActivityIndicator size="large" color="#0000ff"/>
              </View>
            )
          }
        return(
            <ScrollView style={styles.container}>
      <View style={styles.subContainer}>
        <TextInput
            placeholder={'Title'}
            value={this.state.title}
            onChangeText={(text) => this.updateTextInput(text, 'title')}
        />
      </View>
      <View style={styles.subContainer}>
        <TextInput
            multiline={true}
            numberOfLines={4}
            placeholder={'Category'}
            value={this.state.description}
            onChangeText={(text) => this.updateTextInput(text, 'category')}
        />
      </View>
      <View style={styles.subContainer}>
        <TextInput
            placeholder={'Goal'}
            value={this.state.author}
            onChangeText={(text) => this.updateTextInput(text, 'goal')}
        />
      </View>
      <View style={styles.subContainer}>
        <TextInput
            placeholder={'Location'}
            value={this.state.author}
            onChangeText={(text) => this.updateTextInput(text, 'location')}
        />
      </View>
      <View style={styles.subContainer}>
        <TextInput
            placeholder={'About'}
            value={this.state.author}
            onChangeText={(text) => this.updateTextInput(text, 'about')}
        />
      </View>
      <View style={styles.button}>
        <Button
          large
          title='Update'
          onPress={() => this.updateBoard()} />
      </View>
    </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20
    },
    subContainer: {
      flex: 1,
      marginBottom: 20,
      padding: 5,
      borderBottomWidth: 2,
      borderBottomColor: '#CCCCCC',
    },
    activity: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    }
  })


  
 export default EditCampaignScreen;