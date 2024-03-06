import { ScrollView } from "react-native";
import Ingredient from "../ingredient";
import { styles } from "./styles";

export default function Ingredients(){
  return (
    <ScrollView horizontal style={styles.container}>
      <Ingredient />
      <Ingredient />

    </ScrollView>
  )
}