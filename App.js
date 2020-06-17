import "react-native-gesture-handler";
import React, { useEffect, useState } from 'react';
import messaging from '@react-native-firebase/messaging';

import {Notifications} from 'react-native-notifications';

import Home from './screen/Home'


import { NavigationContainer } from "@react-navigation/native";
import Routes from "./routes/routes";

const App = () => {

	Notifications.postLocalNotification({
		title: "Local notification",
		body: "This notification was generated by the app!",
		extra: "data"
	});	

	useEffect(() => {
		// Assume a message-notification contains a "type" property in the data payload of the screen to open
	
		messaging().onNotificationOpenedApp(remoteMessage => {
		  console.log(
			'Notification caused app to open from background state:',
			remoteMessage.notification,
		  );
		  setLoading(false)
		});
	
		// Check whether an initial notification is available
		messaging()
		  .getInitialNotification()
		  .then(remoteMessage => {
			if (remoteMessage) {
			  console.log(
				'Notification caused app to open from quit state:',
				remoteMessage.notification,
				remoteMessage
			  );
			}
			
		  });
	  }, []);

	return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

export default App