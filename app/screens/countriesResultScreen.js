import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, ActivityIndicator} from 'react-native';
import GeoNames from "../api/geonames";

function CountriesResultScreen( {route, navigation} ) {

  const [loading, setLoading] = React.useState(false);

  const searchCity=(city)=>{ //Function to search for the given city. Sets Loading to true while searching
    setLoading(true);
    GeoNames.searchCity(city)
    .then(dt => navigation.navigate("Result",dt))
    .catch(er => Alert.alert(`Oops... Something went wrong. Error: ${er}`))
    .finally(()=>setLoading(false))
  };

  return(

    <View style={styles.container}>

      {loading?
      <View style={styles.loading}>
        <ActivityIndicator color="#009688" size="large"/>
      </View>
      :null}

      <Text style={styles.heading}>{route.params.geonames[0].countryName}</Text>

      {route.params.geonames.map(function(city){return(
        <TouchableOpacity key={city.geonameId} style={styles.appButtonContainer} onPress={()=>searchCity(city.name)}>
          <Text style={styles.appButtonText}>{city.name}</Text>
        </TouchableOpacity>
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
    borderRadius: 15,
    paddingVertical: 20,
    marginTop:10,
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
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
  loading: {
    position: "absolute",
    top: "10%",
  }
});

export default CountriesResultScreen;
