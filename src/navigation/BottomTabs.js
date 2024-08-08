// src/navigation/BottomTabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AssessScreen from '../screens/AssessScreen';
import LearnScreen from '../screens/LearnScreen';
import LiveScreen from '../screens/LiveScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      
      <Tab.Screen name="Assess" component={AssessScreen} />
      <Tab.Screen name="Learn" component={LearnScreen} />
      <Tab.Screen name="Live" component={LiveScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
