import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
 
// Screens IMPORTS
 
import  SuggestedCampaigns  from "../Screens/SuggestedCampaigns";
import  Discover  from "../Screens/DiscoverPage";
import  FundraisingFor  from "../Screens/FundraisingFor";
import  Plan  from "../Screens/Plan";
import  SuggestedCampaignDetails  from "../Screens/SuggestedCampaignDetails";
import SuggestedCampaignPosts from "../Screens/SuggestedCampaignPost"
import  UserCampaignList  from "../Screens/UsercampaignList";
import  IndividualCampaigndetails  from "../Screens/IndividualCampaigndetails";
import  SurveyForm  from "../Screens/SurveyForm";
import  Signin  from "../Screens/Signin";
import  Signup  from "../Screens/Signup";
import TopTabs from "../myTabs/topTabs";
import DrawerNav from "../myTabs/DrawerNav"
import  WhaIsCrowdfunding from "../Screens/WhatIsCrowdfunding";
import SuccessStories from "../Screens/SuccessStories";
import EditCampaignScreen from "./EditCampaignScreen";


// AUTHENTICATIONS
import {logout} from '../Redux/actions/authActions'
import {connect} from 'react-redux'


 




const Stack = createStackNavigator();
 function Navigations({auth, logout,navigation}) {
  return (
    <NavigationContainer>
      {

    auth.login ?
    <Stack.Navigator>
        <Stack.Screen name="dasboard" component={TopTabs} /> 
        <Stack.Screen name="survey" component={SurveyForm} />
        <Stack.Screen name="usercampaignlist" component={UserCampaignList} />
        <Stack.Screen name="individualcampaigndetails" component={IndividualCampaigndetails}  />
        <Stack.Screen name="campaigns" component={SuggestedCampaigns} />
        <Stack.Screen  name="suggestedcampaignsdetails" component={SuggestedCampaignDetails}/>
        <Stack.Screen name="Editcampaign" component={EditCampaignScreen} />
      </Stack.Navigator>

        :

      <Stack.Navigator>     
        <Stack.Screen name="home" component={DrawerNav} options={{headerShown: false}}/>
        <Stack.Screen name="campaigns" component={SuggestedCampaigns} />
        <Stack.Screen name="discover" component={Discover} />
        <Stack.Screen name="fundraisingfor" component={FundraisingFor} />
        <Stack.Screen name="plan" component={Plan} />
        <Stack.Screen  name="suggestedcampaignsdetails" component={SuggestedCampaignDetails}/>
        <Stack.Screen  name="suggestedcampaignpost" component={SuggestedCampaignPosts}/>
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="WhatIscrowdfunding" component={WhaIsCrowdfunding} />
        <Stack.Screen name="success" component={SuccessStories} />
        <Stack.Screen name="Editcampaign" component={EditCampaignScreen} />
      </Stack.Navigator>

        }
    </NavigationContainer>
  );
}
 

  const styles = StyleSheet.create({
  icons: {
    flexDirection: "row",
  },
  singleIcon: {
    marginHorizontal: 10,
  },

  dailIcon: {
    left: 20,
  },
  search: {
    right: 20,
  },
});



const mapStateToProps =(state) =>{
  return {auth:state}
}

export default connect(mapStateToProps,{logout})(Navigations)
