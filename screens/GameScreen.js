import { View, StyleSheet,Alert } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import { useState,useEffect } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber,OnGameOver }) {
  const initialGuess = generateRandomBetween(
    1,
    100,
    userNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  useEffect(() =>{
    if(currentGuess === userNumber){
      OnGameOver();
    }
  },[currentGuess,userNumber,OnGameOver]);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!","You know that this is wrong ...",[{text:'Sorry!',style:'cancel'}]);
      return;
    }

    // direction =>'lower','greater'
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    console.log(minBoundary, maxBoundary);
    const newrandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newrandomNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's View</Title>
      <NumberContainer>{currentGuess} </NumberContainer>
      <Card>
        <InstructionText>Higher or Lower?</InstructionText>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            +
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
            -
          </PrimaryButton>
        </View>
      </Card>
      {/*<View> LOG ROUNDS</View> */}
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.accent500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 12,
  },
});
