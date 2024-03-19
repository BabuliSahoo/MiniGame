import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, SafeAreaView, View,Text} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameoverScreen from "./screens/GameOverScreen";

const App = () => {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);


  function pickerNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }
  function gameOverHandler(){
    setGameIsOver(true);
  }

  let screen = <StartGameScreen onPickNumber={pickerNumberHandler} />;
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} OnGameOver={gameOverHandler}/>;
  }

  if(gameIsOver && userNumber){
    screen = <GameoverScreen />;
  }

  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
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
