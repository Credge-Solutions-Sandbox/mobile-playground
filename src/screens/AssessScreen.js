// src/screens/TabOneScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet,Alert } from 'react-native';
import QuestionCard from '../screens/QuestionCard';


const styles = StyleSheet.create({

    container: {
  
      flex: 1,
  
      justifyContent: 'center',
  
      alignItems: 'center'
  
    }, card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 3,
      },

      cardText: {
        marginTop: 10,
        fontSize: 16,
        color: '#333',
      },
  
  });

const AssessScreen = () => {
    const [submitted, setSubmitted] = useState(false);

    const [tableData, setTableData] = useState([]);

 

    useEffect(() => {
  
      fetch('https://66ae411fb18f3614e3b72f9c.mockapi.io/api/assess/Questionnaire')
  
        .then(response => response.json())
  
        .then(json => setTableData(json));
  
    }, []);

    const handleSubmit = (responses) => {
        // Here you can make an API call to submit the responses
        // Example:
        
        const payload = {
            responses: JSON.stringify(responses),
            email: 'A@b.com',         // Example additional field
            datetime: new Date().toLocaleString('en-US'),     // Example additional field

          };
          console.log(payload);
        fetch('http://73.249.192.165:3000/assessment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: payload,
        })
        .then(response => response.json())
        .then(data => {
          Alert.alert('Success', 'Responses submitted successfully!');
          setSubmitted(true);
        })
        .catch(error => {
            console.log(error);
          Alert.alert('Error', 'There was an error submitting your responses.');
        });
      };

  return (
    <View style={styles.container}>
  
    {submitted ? (
      <Text>Thanks for taking the assessment</Text>
    ) : (
      <>
           <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <QuestionCard data={tableData} onSubmit={handleSubmit} />
           </View>
      </>
    )}



    </View>
  );
};

export default AssessScreen;
