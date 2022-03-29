import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, ImageBackground} from 'react-native';

function ResultScreen({route, navigation}){
  const city = route.params.geonames[0].name;
  const population = route.params.geonames[0].population;

  return(

    <ImageBackground
      style={styles.container}
      //source={require("../../assets/background.jpg")}
    >
      <Text style={styles.logo}>Result</Text>
      <Text style={styles.text}>{city}</Text>
      <Text style={styles.text}>{population}</Text>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
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

export default ResultScreen;
