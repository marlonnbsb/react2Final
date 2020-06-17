import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screen/Home";
import More from "../screen/More";
import MovieFilter from "../screen/MovieFilter";
import Icon from 'react-native-vector-icons/Ionicons';
import { translate } from '../languages/utils'

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        inactiveTintColor: "gray",
        activeTintColor: "white",
        showIcon: true,
        style: {
          backgroundColor: "#1a1718",
          borderTopColor: "transparente",
        },
      }}
    >
      {/* <Tab.Screen name="MovierFilter" component={MovieFilter} /> */}
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Icon name="md-home" size={25} color="white" />
          },
        }}
      />
      <Tab.Screen 
        name={translate("search")}
        component={Home} 
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Icon name="md-search" size={25} color="white" />
          },
      }}
      />
      <Tab.Screen
        name={translate("soon")}
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Icon name="md-photos" size={25} color="white" />
          },
        }}
      />
      <Tab.Screen name="Downloads" 
      component={Home} 
      options={{
        tabBarIcon: ({ color, size }) => {
          return <Icon name="md-download" size={25} color="white" />
        },
      }}
      />
      <Tab.Screen 
      name={translate("more")}
      component={More} 
      options={{
        tabBarIcon: ({ color, size }) => {
          return <Icon name="md-menu" size={25} color="white" />
        },
      }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
