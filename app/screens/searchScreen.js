import React from 'react';
import { TextInput, Image, StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert, ActivityIndicator} from 'react-native';
import GeoNames from "../api/geonames";

function SearchScreen( {route, navigation} ) {

  const [text, onChangeText] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const type = route.params.type; // The type of the search. 1 for city, 0 for country.

  const searchCity=()=>{ //Function to search for the given city. Sets Loading to true while searching
    setLoading(true);
    GeoNames.searchCity(text)
    .then(dt => {
      console.log(dt);
      if(dt.geonames.length){
      navigation.navigate("Result",dt)
      }
      else{Alert.alert("No city found")}
    })
    .catch(er => Alert.alert(`Oops... Something went wrong. Error: ${er}`))
    .finally(()=>setLoading(false))
  };

  const searchCountry=()=>{ //Function to search for the given country, which will then search for the cities in the country. Sets Loading to true while searching
    setLoading(true);
    GeoNames.searchCountry(text)
    .then(dt => {
      if(dt.geonames.length){
      GeoNames.searchCities(dt.geonames[0].countryCode)
      .then(dt => navigation.navigate("Country",dt))
      .catch(er => Alert.alert(`Oops... Something went wrong. Error: ${er}`))
      }
      else{Alert.alert("No country found")}
    })
    .finally(()=>setLoading(false))
  };

  return(

    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

      <View style={styles.container}>

        <Text style={styles.heading}>Search by {type?"city":"country"}</Text>

        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder= {`Enter a ${type?"city":"country"}`}/>

        {loading?
        <View style={styles.loading}>
          <ActivityIndicator color="#009688" size="large"/>
        </View>
        :null}

        <TouchableOpacity
          onPress={()=>type?searchCity():searchCountry()}
          disabled={text?false:true}>
          <Image style={text?styles.search:styles.disabledSearch} source={require("../../assets/search.png")}/>
        </TouchableOpacity>

      </View>

    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  input: {
    width: "80%",
    height: 40,
    backgroundColor: "white",
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 15,
  },
  loading: {
    position: "absolute",
    top: "10%",
  },
  disabledSearch:{
    tintColor: "#808080",
    marginTop:20,
    width: 100,
    height: 100,
    resizeMode: 'contain'
  },
  search:{
    marginTop:20,
    width: 100,
    height: 100,
    resizeMode: 'contain'
  }
});

export default SearchScreen;
