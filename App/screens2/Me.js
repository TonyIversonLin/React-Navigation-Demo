import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';
import { me } from '../data.js';

export default class Me extends Component {

	render(){
		return (
			<ScrollView>
				<Tile
          imageSrc={{ uri: this.props.picture.large}}
          title={`${this.props.name.first} ${this.props.name.last}`}
          caption={this.props.email}
          featured/>

        <Button
          title="Settings"
          buttonStyle={{ marginTop: 20 }}
          onPress={ () => this.props.navigation.navigate('Setting')}/>

        <List>
	       	<ListItem
	          title="Email"
	          rightTitle={this.props.email}
	          hideChevron/>
	        <ListItem
	          title="Phone"
	          rightTitle={this.props.phone}
	          hideChevron/>
        </List>

        <List>
          <ListItem
            title="Username"
            rightTitle={this.props.login.username}
            hideChevron/>
        </List>

        <List>
          <ListItem
            title="Birthday"
            rightTitle={this.props.dob}
            hideChevron
          />
          <ListItem
            title="City"
            rightTitle={this.props.location.city}
            hideChevron
          />
        </List>

			</ScrollView>
		)
	}
}

Me.defaultProps = { ...me };