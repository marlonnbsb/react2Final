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
          tabBarLabel: translate("home"),
          tabBarIcon: ({ color, size }) => {
            return <Icon name="md-home" size={25} color="white" />
          },
        }}
      />
      <Tab.Screen 
        name="Buscar" 
        component={Home} 
        options={{
          tabBarLabel: translate("search"),
          tabBarIcon: ({ color, size }) => {
            return <Icon name="md-search" size={25} color="white" />
          },
      }}
      />
      <Tab.Screen
        name="Em breve"
        component={Home}
        options={{
          tabBarLabel: translate("soon"),
          tabBarIcon: ({ color, size }) => {
            return <Icon name="md-photos" size={25} color="white" />
          },
        }}
      />
      <Tab.Screen name="Downloads" 
      component={Home} 
      options={{
        tabBarLabel:translate("downloads"),
        tabBarIcon: ({ color, size }) => {
          return <Icon name="md-download" size={25} color="white" />
        },
      }}
      />
      <Tab.Screen 
      name="Mais"
      component={More} 
      options={{
        tabBarLabel:translate("more"),
        tabBarIcon: ({ color, size }) => {
          return <Icon name="md-menu" size={25} color="white" />
        },
      }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
