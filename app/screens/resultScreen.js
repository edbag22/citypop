import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function ResultScreen(props) {

  return(

    <View style={styles.container}>

      <Text style={styles.heading}>{props.country.name}</Text>

      <View style={styles.border}>
        <Text style={styles.text}>Population:</Text>
        <Text style={styles.bigText}>{props.country.population}</Text>
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
    borderColor: "#638BBF",
    borderRadius: 15,
    paddingVertical: 20,
  },
});

export default ResultScreen;
