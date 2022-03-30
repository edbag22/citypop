import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, ImageBackground} from 'react-native';

function ResultScreen({route, navigation}){

  return(

    <View style={styles.container}>

      <Text style={styles.logo}>{route.params.geonames[0].name}</Text>

      <View style={styles.border}>
        <Text style={styles.text}>Population:</Text>
        <Text style={styles.populationText}>{route.params.geonames[0].population}</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: "black",
    alignSelf: "center",
  },
  populationText: {
    fontSize: 40,
    color: "black",
    alignSelf: "center",
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
  },
  border: {
    width: "80%",
    borderWidth: 3,
    borderColor: "#009688",
    borderRadius: 15,
    paddingVertical: 20,
  },
});

export default ResultScreen;
