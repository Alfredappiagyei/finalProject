import React from "react";

import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "../Screens/LandingPage";
import UserDashboard from "../Screens/UserDashboard";
const Drawer = createDrawerNavigator();

 function DrawerNav() {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
         <Drawer.Screen name="PROFILE" component={UserDashboard} /> 
      </Drawer.Navigator>
  );
}
 

export default DrawerNav;