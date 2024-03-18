import { TextInput, Button, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

function StarGameScreen({onPickNumber}) {
  const [enteredNumber, SetEnteredNumber] = useState("");

  function numberInputHandler(enteredText) {
    SetEnteredNumber(enteredText);
    console.log('numberInputHandler :: '+enteredText);
  }

  function resetHandler() {
    SetEnteredNumber('');
  }

  function confirmInputHandler(){
    const chosenNumber = parseInt(enteredNumber);
    console.log(chosenNumber);
    if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
      // Show alert ...
      Alert.alert('Invalid Number','Number has to be a number between 1 to 99',[{text:'Okay',style:'destructive',onPress:resetHandler}]);
      return;
    }
    console.log('Valid Number!');
    onPickNumber(chosenNumber);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StarGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#4e0329",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
