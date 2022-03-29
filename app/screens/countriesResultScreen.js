import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, ImageBackground, Alert, ActivityIndicator} from 'react-native';
import GeoNames from "../api/geonames";

function CountriesResultScreen({route, navigation}){
  const [loading, setLoading] = React.useState(false);

  const searchCity=(city)=>{
    setLoading(true);
    GeoNames.searchCity(city)
    .then(dt => navigation.navigate("Result",dt))
    .catch(er => Alert.alert(`Oops... Something went wrong. Error: ${er}`))
    .finally(()=>setLoading(false))
  };


  return(
    <ImageBackground
      style={styles.container}
      //source={require("../../assets/background.jpg")}
    >
      {loading?
      <View style={styles.loading}>
        <ActivityIndicator color="#009688" size="large"/>
      </View>:null}
      <Text style={styles.logo}>Result</Text>
      {route.params.geonames.map(function(city){ //displays all the results
        return (
          <TouchableHighlight key={city.geonameId} style={styles.appButtonContainer} onPress={()=>searchCity(city.name)}>
            <Text style={styles.text}>{city.name}</Text>
          </TouchableHighlight>
        )
      })}
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
  },
  loading: {
    position: "absolute",
    top: "10%",
  }
});

export default CountriesResultScreen;
