import React from 'react';
import {View, Text, Button} from 'react-native'

export default class HomeScreen extends React.Component {
	static navigationOptions = {
		title: 'Welcome',
	}

	render(){
		const { navigate } = this.props.navigation;
		return(
			<View>
				<Text>Welcome to React Navigation, Tony!</Text>
				<Button onPress={() => navigate('Chat',{user: 'Tony Lin'})} 
								title="Chat with Tony Lin"/>
			</View>
		) 
		
	}
}