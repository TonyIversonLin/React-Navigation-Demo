import React from 'react';
import { Text, Button, View } from 'react-native'

export default class RecentChatScreen extends React.Component{
	render(){
		const { navigate } = this.props.navigation;
		return (
			<View>
				<Text>List of recent chats</Text>
				<Button onPress={() => navigate('Chat',{user: 'Tony Lin'})} 
								title="Chat with Tony Lin"/>
			</View>
		) 

		
	}
}