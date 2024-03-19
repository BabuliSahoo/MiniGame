import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, SafeAreaView, View,Text} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

const App = () => {
  const [userNumber, setUserNumber] = useState();
  function pickerNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }
  let screen = <StartGameScreen onPickNumber={pickerNumberHandler} />;
  if (userNumber) {
    screen = <GameScreen />;
    console.log("Game Screen Rendered ::" + userNumber);
  }

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
         {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

export default App;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
