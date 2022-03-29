import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, ImageBackground} from 'react-native';

function HomeScreen({navigation}){
  return(

    <ImageBackground
      style={styles.container}
      //source={require("../../assets/background.jpg")}
    >
      <Text style={styles.logo}>CityPop</Text>
      <TouchableHighlight
        style={styles.appButtonContainer}
        onPress={()=>navigation.navigate("Search", {type:1})}>
        <Text style={styles.appButtonText}>Search by City</Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.appButtonContainer}
        onPress={()=>navigation.navigate("Search", {type:0})}>
        <Text style={styles.appButtonText}>Search by Country</Text>
      </TouchableHighlight>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appButtonContainer: {
    width: "80%",
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop:10,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  logo: {
    position: "absolute",
    top: "25%",
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});

export default HomeScreen;
