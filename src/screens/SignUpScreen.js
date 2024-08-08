// src/screens/SignUpScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import axios from 'axios';

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      await axios.post('http://73.249.192.165:3000/register', {
        email,
        password,
      });

      // Navigate to sign-in screen on successful sign-up
      navigation.navigate('SignIn');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

export default SignUpScreen;
