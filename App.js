import * as React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Movies from "./components/Movies";
import Home from "./components/Home";
import Movie from "./components/Movie";
import Contact from "./components/contactForm";

export default function App() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Movies" component={Movies} />
        <Drawer.Screen name="Contact us" component={Contact} />
        <Drawer.Screen
          name="Movie"
          component={Movie}
          options={{
            drawerItemStyle: { display: 'none' }
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
