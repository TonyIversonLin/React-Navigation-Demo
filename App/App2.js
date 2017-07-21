import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Feed from './screens2/Feed.js'
import Me from './screens2/Me.js'

const App2 = TabNavigator({
	Feed: {screen: Feed},
	Me: {screen: Me}
});

export default App2;