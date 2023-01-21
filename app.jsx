import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const JokesApp = () => {
  const [jokes, setJokes] = useState([
    "Why was the math book sad? It had too many problems.",
    "Why did the tomato turn red? Because it saw the salad dressing.",
    "Why don't scientists trust atoms? Because they make up everything.",
    // add more jokes here
  ]);

  const [currentJokeIndex, setCurrentJokeIndex] = useState(0);

  const handleNextJoke = () => {
    if (currentJokeIndex === jokes.length - 1) {
      setCurrentJokeIndex(0);
    } else {
      setCurrentJokeIndex(currentJokeIndex + 1);
    }
  };

  return (
    <View>
      <Text>{jokes[currentJokeIndex]}</Text>
      <Button title="Next Joke" onPress={handleNextJoke} />
    </View>
  );
};

export default JokesApp;
