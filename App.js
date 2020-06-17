import "react-native-gesture-handler";
import React, { useEffect, useState } from 'react';
import messaging from '@react-native-firebase/messaging';
import {Notifications} from 'react-native-notifications';
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./routes/routes";
import { ProfileContext } from "./context/ProfileContext";
import { configureLanguageToI18n } from './languages/utils'

class App extends React.Component {

	constructor(props) {
		super(props);
		configureLanguageToI18n();
		this.changeProfile = this.changeProfile.bind(this);
		this.state = {
			user: 'José',
			changeProfile: this.changeProfile
		}
		this.configInicial();
	}

	changeProfile(newProfile) {
		this.setState({user: newProfile.name})
	}

	configInicial() {
		Notifications.postLocalNotification({
			title: "Local notification",
			body: "This notification was generated by the app!",
			extra: "data"
		});	
	
		// useEffect(() => {
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
		//   }, []);
	}

	render() {
		return (
			<ProfileContext.Provider value={this.state}>
				<NavigationContainer>
					<Routes />
				</NavigationContainer>
			</ProfileContext.Provider>
		  );
	}
	
}

export default App
