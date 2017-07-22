import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { users } from '../data.js';

export default class Feed extends Component {

	render(){
		return (
			<ScrollView>
				<List>
					{users.map(user => (
						<ListItem key={user.login.username}
											avatar={{uri: user.picture.thumbnail}}
											title={`${user.name.first} ${user.name.last}`}
											subtitle={user.email}
											onPress={ () => this.props.navigation.navigate('UserDetail', { ...user })}
											roundAvatar/>
					))}
				</List>
			</ScrollView>
		);
	}
}