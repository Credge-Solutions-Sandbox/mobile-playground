import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NavigationContainer } from '@react-navigation/native';

 

const Tab = createBottomTabNavigator();

 

function HomeScreen({ navigation }) {

  const [data, setData] = useState([]);

 

  useEffect(() => {

    fetch('https://66ae411fb18f3614e3b72f9c.mockapi.io/api/assess/Questionnaire')

      .then(response => response.json())

      .then(json => setData(json));

  }, []);

 

  return (

    <View style={styles.container}>

      <Text>Home Screen</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Table')}>

        <Text>Go to Table</Text>

      </TouchableOpacity>

    </View>

  );

}

 

function TableScreen({ navigation }) {

  const [tableData, setTableData] = useState([]);

 

  useEffect(() => {

    fetch('https://66ae411fb18f3614e3b72f9c.mockapi.io/api/assess/Questionnaire')

      .then(response => response.json())

      .then(json => setTableData(json));

  }, []);

 

  return (

    <View style={styles.container}>

      <Text>Table Screen</Text>

      <View>

        {tableData.map(row => (

          <View key={row.id}>

            <Text>{row.question}</Text>

          </View>

        ))}

      </View>

    </View>

  );

}

 

function ProfileScreen() {

  return (

    <View style={styles.container}>

      <Text>Profile Screen</Text>

    </View>

  );

}

 

export default function App() {

  return (

    <NavigationContainer>

      <Tab.Navigator>

        <Tab.Screen name="Home" component={HomeScreen} />

        <Tab.Screen name="Table" component={TableScreen} />

        <Tab.Screen name="Profile" component={ProfileScreen} />

      </Tab.Navigator>

    </NavigationContainer>

  );

}

 

const styles = StyleSheet.create({

  container: {

    flex: 1,

    justifyContent: 'center',

    alignItems: 'center'

  }

});