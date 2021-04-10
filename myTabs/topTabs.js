import React from "react";
 
 import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import IndividualCampaigndetails from '../Screens/IndividualCampaigndetails';
import UserDashboard from '../Screens/UserDashboard';
import SuggestedCampaigns from "../Screens/SuggestedCampaigns";

 
const Tab = createMaterialTopTabNavigator();

 function TopTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="dashboard" component={UserDashboard} />
      <Tab.Screen name="My Campaigns" component={IndividualCampaigndetails} />
      <Tab.Screen name="Fundraisers" component={SuggestedCampaigns} />
    </Tab.Navigator>
  );
}

export default TopTabs;





