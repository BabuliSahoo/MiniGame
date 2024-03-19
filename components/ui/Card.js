
import { StyleSheet,View } from "react-native";
import Colors from "../../constants/colors";
function Card({children}){
return 
    <View style={styles.card}> 
    {children}
    </View>
}
export default Card;

const styles = StyleSheet.create({
    card: {
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
      }
});