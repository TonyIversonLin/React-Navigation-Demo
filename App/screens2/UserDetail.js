import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';

export default class UserDetail extends Component {
	render() {
		const {picture, name, email, phone, login, dob, location} = this.props.navigation.state.params;
		return (
			<ScrollView>
				<Tile
          imageSrc={{ uri: picture.large}}
          title={`${name.first.toUpperCase()} ${name.last.toUpperCase()}`}
          caption={email}
          featured/>

        <List>
          <ListItem
            title="Email"
            rightTitle={email}
            hideChevron/>
          <ListItem
            title="Phone"
            rightTitle={phone}
            hideChevron/>
        </List>

        <List>
          <ListItem
            title="Username"
            rightTitle={login.username}
            hideChevron/>
        </List>

        <List>
          <ListItem
            title="Birthday"
            rightTitle={dob}
            hideChevron/>
          <ListItem
            title="City"
            rightTitle={location.city}
            hideChevron/>
        </List>

			</ScrollView>
		);
	}
}