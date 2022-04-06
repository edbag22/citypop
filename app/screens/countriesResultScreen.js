import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Icon, Button } from 'react-native-elements';

function CountriesResultScreen(props) {

  return(

    <View style={styles.container}>

      <Text style={styles.heading}>{props.country}</Text>

      {props.cities.map(function(city){return(
        <Button
          loading={props.loading&&props.currentCity==city.name}
          loadingProps={{size:"large"}}
          key={city.geonameId}
          buttonStyle={styles.appButton}
          containerStyle={styles.appButtonContainer}
          onPress={()=>props.searchCity(city.name)}
          title={city.name}
          titleStyle={styles.appButtonText}
        />
      )})}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appButton: {
    backgroundColor: "#638BBF",
    borderRadius: 15,
    height: 75,
  },
  appButtonContainer:{
    width:"80%",
    marginTop:10,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    alignSelf: "center",
  },
  heading: {
    position: "absolute",
    top: "20%",
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
});

export default CountriesResultScreen;
