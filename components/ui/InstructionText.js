import { Text,StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function InstructionText({children}) {
  return <Text style={styles.InstructionText}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  InstructionText: {
    color: Colors.accent500,
    fontSize: 24
  }
});
