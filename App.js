import { StatusBar } from "expo-status-bar";
import React, {Fragment} from "react";

import { Provider } from "react-redux";
import { store, persistor } from "./Redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Navigations from "./Screens/navigations";
 
export default function App() {
  return (
<Fragment>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
          <Navigations />
      </PersistGate>
    </Provider>
 </Fragment>
  );
}
