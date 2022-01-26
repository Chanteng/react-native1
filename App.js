import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.img} source={require("./assets/2.jpg")} />

        <View style={styles.mother}>
      <Text style={styles.text}>Name</Text>
      <Text style={styles.text}>MR. CEO</Text>
      </View>

      <View style={styles.mother}>
      <Text style={styles.text}>Email</Text>
      <Text style={styles.text}>something@mr.ceo</Text>
      </View>

      <View style={styles.mother}>
      <Text style={styles.text}>Gender</Text>
      <Text style={styles.text}>Kwame</Text>
      </View>

    </SafeAreaView>
  );
}



const styles = StyleSheet.create( {
container: {
    backgroundColor: "black",
    flex: 1,
},

text: {
    fontSize: 30,
    color: "white",
    borderWidth: 3,
    borderColor: "white",
    paddingVertical: 5,
    flex: 2,
    paddingHorizontal: 20
},

img: {
    height: 200,
    width: 200,
    borderRadius: 100,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 50
},

mother: {
    flexDirection: "row",
    alignSelf: "center"
}

})

export default App;
