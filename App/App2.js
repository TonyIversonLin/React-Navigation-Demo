import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Feed from './screens2/Feed.js'
import Me from './screens2/Me.js'
import UserDetail from './screens2/UserDetail.js'
import Setting from './screens2/Setting.js'

const FeedStack = StackNavigator({
	Feed: {
		screen: Feed,
		navigationOptions: {
			title: 'Feed'
		}
	},
	UserDetail: {
		screen: UserDetail,
		navigationOptions: ({navigation}) => ({
				title: `${navigation.state.params.name.first} ${navigation.state.params.name.last}` 
		})
	}
});

const Tabs = TabNavigator({
	Feed: {
		screen: FeedStack,
		navigationOptions: {
			tabBarLabel: 'Feed',
			tabBarIcon: ({tintColor}) => <Icon name='list' size={30} color={tintColor}/>
		}
	},
	Me: {
		screen: Me,
		navigationOptions: {
			tabBarLabel: 'Me',
			tabBarIcon: ({tintColor}) => <Icon name='account-circle' size={30} color={tintColor}/>
		}
	}
});

const SettingStack = StackNavigator({
	Settings: {
		screen: Setting,
		navigationOptions: {
			title: 'Setting'
		}
	}
})

const Root = StackNavigator({
	Tabs: {screen: Tabs},
	Setting: {screen: SettingStack}
},{
	mode: 'modal',
	headerMode: 'none'
})



export default Root;