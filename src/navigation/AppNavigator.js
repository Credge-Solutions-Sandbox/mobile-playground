// src/navigation/AppNavigator.js
import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import BottomTabs from './BottomTabs';
import { Button } from 'react-native';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { userToken, logout } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userToken ? (
          <Stack.Screen
            name="Home"
            component={BottomTabs}
            options={{
              headerRight: () => (
                <Button onPress={logout} title="Logout" />
              ),
            }}
          />
        ) : (
          <>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
