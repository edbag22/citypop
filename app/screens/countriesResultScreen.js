import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, ImageBackground} from 'react-native';
import GeoNames from "../api/geonames";

function CountriesResultScreen({route, navigation}){

  const searchCity=(text)=>{
    GeoNames.searchCity(text)
    .then(dt => navigation.navigate("Result",dt))
    .catch(er => console.log(er))
  };

  return(

    <ImageBackground
      style={styles.container}
      //source={require("../../assets/background.jpg")}
    >
      <Text style={styles.logo}>Result</Text>
      <TouchableHighlight style={styles.appButtonContainer} onPress={()=>searchCity(route.params.geonames[0].name)}>
        <Text style={styles.text}>{route.params.geonames[0].name}</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.appButtonContainer} onPress={()=>searchCity(route.params.geonames[1].name)}>
        <Text style={styles.text}>{route.params.geonames[1].name}</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.appButtonContainer} onPress={()=>searchCity(route.params.geonames[2].name)}>
        <Text style={styles.text}>{route.params.geonames[2].name}</Text>
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

export default CountriesResultScreen;
