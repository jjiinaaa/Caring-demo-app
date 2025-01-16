import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SampleHomeScreen from './SampleHomeScreen';
import TestScreen from './TestScreen';

const Tab = createBottomTabNavigator();

function MainScreen() {
  return (
    <Tab.Navigator initialRouteName="홈">
      <Tab.Screen name="홈" component={SampleHomeScreen} />
      <Tab.Screen name="내 정보" component={TestScreen} />
    </Tab.Navigator>
  );
}

export default MainScreen;
