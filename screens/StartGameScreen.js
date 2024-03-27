import {
  TextInput,
  Button,
  View,
  StyleSheet,
  Alert,
  Dimensions,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import InstructionText from "../components/ui/InstructionText";
import Card from "../components/ui/Card";

function StarGameScreen({ onPickNumber }) {
  const [enteredNumber, SetEnteredNumber] = useState("");

  const { width, height } = useWindowDimensions();

  function numberInputHandler(enteredText) {
    SetEnteredNumber(enteredText);
    console.log("numberInputHandler :: " + enteredText);
  }

  function resetHandler() {
    SetEnteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    console.log(chosenNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      // Show alert ...
      Alert.alert(
        "Invalid Number",
        "Number has to be a number between 1 to 99",
        [{ text: "Okay", style: "destructive", onPress: resetHandler }]
      );
      return;
    }
    console.log("Valid Number!");
    onPickNumber(chosenNumber);
  }

  const marginTop = width < 380 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTop }]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText style={styles.InstructionText}>
              Enter a Number
            </InstructionText>
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
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StarGameScreen;
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary700,
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
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  InstructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
