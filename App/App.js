import React from 'react';
import {StackNavigator} from 'react-navigation'
import { TabNavigator } from "react-navigation";
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import AllContactScreen from './screens/AllContactScreen';
import RecentChatScreen from './screens/RecentChatScreen';

const MainScreenNavigator = TabNavigator({
	Recent: {screen: RecentChatScreen},
	All: {screen: AllContactScreen}
});

MainScreenNavigator.navigationOptions = {
	title: 'My Chats'
}


const App = StackNavigator({
	Home: {screen: MainScreenNavigator},
	Chat: {screen: ChatScreen}
});

export default App;