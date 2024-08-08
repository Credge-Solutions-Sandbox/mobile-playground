import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const QuestionCard = ({ data, onSubmit }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState({});

  const currentQuestion = data[currentQuestionIndex];

  if (!currentQuestion) {
    return <Text style={styles.errorText}>No questions available.</Text>;
  }

  const handleOptionPress = (option) => {
    setResponses({
      ...responses,
      [currentQuestion.id]: option,
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < data.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    if (Object.keys(responses).length < data.length) {
      Alert.alert('Error', 'Please answer all questions before submitting.');
    } else {
      onSubmit(responses);
    }
  };

  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>{currentQuestion.question}</Text>

      {currentQuestion.options.map((option, index) => (
        <TouchableOpacity 
          key={index} 
          style={[
            styles.optionButton, 
            responses[currentQuestion.id] === option && styles.selectedOptionButton
          ]}
          onPress={() => handleOptionPress(option)}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}

      <View style={styles.navigationButtons}>
        <Button title="Previous" onPress={handlePrevious} disabled={currentQuestionIndex === 0} />
        {currentQuestionIndex < data.length - 1 ? (
          <Button title="Next" onPress={handleNext} />
        ) : (
          <Button title="Submit" onPress={handleSubmit} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  cardText: {
    fontSize: 18,
    marginBottom: 10,
  },
  optionButton: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: '#eee',
    alignItems: 'center',
  },
  selectedOptionButton: {
    backgroundColor: '#cce7ff',
  },
  optionText: {
    fontSize: 16,
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default QuestionCard;
