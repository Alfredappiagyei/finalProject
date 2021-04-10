import React, { Component } from "react";
import {
  Alert,
   Text, 
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Image,
  Button
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
 import firebase from "../firebase/firebase"

class SurveyForm extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('campaigns');
    this.state = {
      currentStep: 1 /* using index 0 as starting point */,
      steps: ["Start", "Almost Done", "Finish"],
      title: "",
      category: "",
      goal: "",
      location: "",
      about: "",
      image: null,
      isLoading: false,
    };
  }

  updateTextInput = (text, field) => {
    const state = this.state
    state[field] = text;
    this.setState(state);
  }

   
  
componentDidMount=()=>{
  (async () => {
    if (Platform.OS !== 'web') {
     const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
     }
    }
  })();
}


  render() {
    const { steps, currentStep } = this.state;
    let { navigation } = this.props;



saveBoard =() => {
  
  this.setState({
    isLoading: true,
  });
  this.ref.add({
    title: this.state.title,
    category: this.state.category,
    goal: this.state.goal,
    location: this.state.location,
    about: this.state.about,
    image: this.state.image
  }).then((docRef) => {
    this.setState({
      title: '',
      category: "",
      goal: "",
      location:"",
      about:"",
      isLoading: false,
      image: null
    });
    navigation.navigate('campaigns')
  })
  .catch((error) => {
    console.error("Error adding document: ", error);
    this.setState({
      isLoading: false,
    });
  });

}
  

    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        base64: true
      });
      console.log(result);
     
      if (!result.cancelled) {
        this.setState({
          image:result.base64
        });
      }
    };

    if(this.state.isLoading){
      return(
        <View style={styles.activity}>
          <ActivityIndicator size="large" color="#0000ff"/>
        </View>
      )
    }



 
    return (
      <View style={{ flex: 4, flexDirection: "column" }}>
        <View
          style={{
            alignItems: "center",
            flex: 2,
            backgroundColor: "#00716F",
            justifyContent: "center",
          }}
        >
          <View style={{ width: 280 }}>
            <View style={{ alignItems: "center" }}>
              <View
                style={{
                  height: 2,
                  backgroundColor: "#ee5e30",
                  width: 130,
                  position: "relative",
                  top: 13,
                  zIndex: 10,
                  right: 33,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                position: "absolute",
                zIndex: 20,
              }}
            >
              {steps.map((label, i) => (
                <View key={i} style={{ alignItems: "center", width: 70 }}>
                  {i > currentStep && i != currentStep /* Not selected */ && (
                    <View
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        width: 30,
                        height: 30,
                        backgroundColor: "#fff",
                        borderWidth: 2,
                        borderColor: "#ee5e30",
                        borderRadius: 15,
                        marginBottom: 10,
                      }}
                    >
                      <Text style={{ fontSize: 15, color: "#ee5e30" }}>
                        {i + 1}
                      </Text>
                    </View>
                  )}
                  {i < currentStep /* Checked */ && (
                    <View
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        width: 30,
                        height: 30,
                        backgroundColor: "#0faf9a",
                        borderWidth: 2,
                        borderColor: "#0faf9a",
                        borderRadius: 15,
                        marginBottom: 10,
                      }}
                    >
                      <Ionicons name="md-checkmark" size={20} color="#fff" />
                    </View>
                  )}
                  {i == currentStep /* Selected */ && (
                    <View
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        width: 30,
                        height: 30,
                        backgroundColor: "#ee5e30",
                        borderWidth: 2,
                        borderColor: "#ee5e30",
                        borderRadius: 15,
                        marginBottom: 10,
                      }}
                    >
                      <Text style={{ fontSize: 13, color: "#ffffff" }}>
                        {i + 1}
                      </Text>
                    </View>
                  )}
                  <Text style={{ fontSize: 15, color: "#fff" }}>{label}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        <View style={{ backgroundColor: "#f6f6f6", flex: 10 }}>
          {currentStep == 0 && (
            <View >
               <TouchableOpacity 
                 onPress={pickImage}
               style={{height: 230 }}>
          {this.state.image ? (
            <Image
            source={{uri: 'data:image/jpeg;base64,' + this.state.image}}
              style={{ width: '100%', height: 230 }}
            />
          ) : (
            <Image source={require('../assets/default-img.jpg')}  style={{ width: '100%', height: 230 }} />
          )}
        </TouchableOpacity>


              <View style={styles.inputRowOne}>
                <Text  style={{ fontSize:19, }}>Campaign Title</Text>
                <TextInput
                  value={this.state.title}
                  onChangeText={(text) => this.updateTextInput(text, 'title')}
                  placeholder="Enter campaign title"
                  placeholderTextColor="lightgrey"
                  style={styles.textInputOne}
                  autoFocus={true}
                />
              </View>

              <View style={styles.inputRowOne}>
                <Text  style={{ fontSize:19, }}>Choose A category</Text>
                <TextInput
                  value={this.state.category}
                  onChangeText={(text) => this.updateTextInput(text, 'category')}
                  placeholder="Add category"
                  placeholderTextColor="lightgrey"
                  style={styles.textInputOne}
                  autoFocus={true}
                />
              </View>
            </View>
          )}
          {currentStep == 1 && (
            <View style={{marginVertical:115}}>
              <View style={styles.inputRowOne}>
                <Text  style={{ fontSize:19, }}>Campaign Goal</Text>
                <TextInput
                  value={this.state.goal}
                  onChangeText={(text) => this.updateTextInput(text, 'goal')}
                  placeholder="Campaign goal"
                  placeholderTextColor="lightgrey"
                  style={styles.textInputOne}
                  autoFocus={true}
                  keyboardType="numeric"
                />
              </View>

              <View style={styles.inputRowOne}>
                <Text  style={{ fontSize:19, }}>Location</Text>
                <TextInput
                  value={this.state.location}
                  onChangeText={(text) => this.updateTextInput(text, 'location')}
                  placeholder="Location"
                  placeholderTextColor="lightgrey"
                  style={styles.textInputOne}
                  autoFocus={true}
                />
              </View>
            </View>
          )}

          {currentStep == 2 && (
            <View style={{}}>
              <View style={styles.inputRowOne}>
                
                <TextInput
                  value={this.state.about}
                  onChangeText={(text) => this.updateTextInput(text, 'about')}
                  placeholder="About campaign"
                  placeholderTextColor="lightgrey"
                   style={{height:380, borderWidth:1, borderColor:"#000", borderStyle:"dotted"}}
                  editable = {true}
                  maxLength = {120}
                  multiline={true}
                  autoFocus={true}
                  spellCheck={true}
                />
              </View>
            </View>
          )}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              top: 60,
            }}
          >
            {currentStep > 0 ? (
              <TouchableOpacity
                style={[
                  styles.centerElement,
                  {
                    left: 10,
                    width: 100,
                    height: 50,
                    backgroundColor: "#00716F",
                    borderRadius: 20,
                  },
                ]}
                onPress={() => {
                  if (currentStep > 0) {
                    this.setState({ currentStep: currentStep - 1 });
                  }
                }}
              >
                <Text style={{ color: "#fff" }}>Previous</Text>
              </TouchableOpacity>
            ) : (
              <Text> </Text>
            )}
            {currentStep + 1 < steps.length /* add other conditions here */ && (
              <TouchableOpacity
                style={[
                  styles.centerElement,
                  {
                    right: 10,
                    width: 100,
                    height: 50,
                    backgroundColor: "#00716F",
                    borderRadius: 20,
                  },
                ]}
                onPress={() => {
                  if (currentStep + 1 < steps.length) {
                    this.setState({ currentStep: currentStep + 1 });
                  }
                }}
              >
                <Text style={{ color: "#fff" }}>Next</Text>
              </TouchableOpacity>
            )}
            {currentStep + 1 ==
              steps.length /* add other conditions here */ && (
              <TouchableOpacity
                style={[
                  styles.centerElement,
                  {
                    right: 10,
                    width: 100,
                    height: 50,
                    backgroundColor: "#00716F",
                    borderRadius: 20,
                  },
                ]}
                onPress={saveBoard}
              >
                <Text style={{ color: "#fff" }}>Create</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centerElement: { justifyContent: "center", alignItems: "center" },

  inputRowOne: {
    flexDirection: "column",
  },

  textInputOne: {
    height: 80,
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey",
  },

  button: {
    flex: 7,
  },
   
  imageContainer: {
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#ee5e30",
    top: 20,
  },
  image: {
    height: 200,
    width: 450,
  },
});
 
export default SurveyForm;