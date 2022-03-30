import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function ResultScreen( {route, navigation} ) {

  return(

    <View style={styles.container}>

      <Text style={styles.heading}>{route.params.geonames[0].name}</Text>

      <View style={styles.border}>
        <Text style={styles.text}>Population:</Text>
        <Text style={styles.bigText}>{route.params.geonames[0].population}</Text>
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
  bigText: {
    fontSize: 40,
    color: "black",
    alignSelf: "center",
  },
  heading: {
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
