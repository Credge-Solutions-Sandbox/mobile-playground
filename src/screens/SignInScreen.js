// src/screens/SignInScreen.js
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const handleSignIn = async () => {
    try {
      const response = await axios.post('http://73.249.192.165:3000/login', {
        email,
        password,
      });

      if (response.data.token) {
        login(response.data.token);
      }
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
<Button title="Sign In" onPress={handleSignIn} />
<Text onPress={() => navigation.navigate('SignUp')}>
  Don't have an account? Sign up
</Text>
</View>
  );
};

export default SignInScreen;
