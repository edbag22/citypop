import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, ActivityIndicator} from 'react-native';
import GeoNames from "../api/geonames";
import { Icon, Button } from 'react-native-elements';

function CountriesResultScreen( {route, navigation} ) {

  const [loading, setLoading] = React.useState(false);
  const [currentCity, setCurrentCity] = React.useState(null);

  const searchCity=(city)=>{ //Function to search for the given city. Sets Loading to true while searching
    setLoading(true);
    setCurrentCity(city);
    GeoNames.searchCity(city)
    .then(dt => navigation.navigate("Result",dt))
    .catch(er => Alert.alert(`Oops... Something went wrong. Error: ${er}`))
    .finally(()=>setLoading(false))
  };

  return(

    <View style={styles.container}>

      <Text style={styles.heading}>{route.params.geonames[0].countryName}</Text>

      {route.params.geonames.map(function(city){return(
        <Button
          loading={loading&&currentCity==city.name}
          loadingProps={{size:"large"}}
          key={city.geonameId}
          buttonStyle={styles.appButton}
          containerStyle={styles.appButtonContainer}
          onPress={()=>searchCity(city.name)}
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
