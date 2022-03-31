import React from 'react';
import { TextInput, StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import GeoNames from "../api/geonames";

function SearchScreen( {route, navigation} ) {

  const [text, onChangeText] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const type = route.params.type; // The type of the search. 1 for city, 0 for country.

  const searchCity=()=>{ //Function to search for the given city. Sets Loading to true while searching
    setLoading(true);
    GeoNames.searchCity(text)
    .then(dt => {
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
    .catch(er => Alert.alert(`Oops... Something went wrong. Error: ${er}`))
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

        <Button
              icon={{
                name: 'magnifying-glass',
                type: 'entypo',
                size: 40,
                color: 'white',
              }}
              onPress={()=>type?searchCity():searchCountry()}
              disabled={!text}
              loading={loading}
              loadingProps={{
                size:"large"
              }}
              buttonStyle={styles.search}
              containerStyle={{
                paddingTop: 10,
              }}
            />

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
  search:{
    backgroundColor: '#638BBF',
    width:75,
    height:75,
    borderRadius: 100,
    paddingTop:15,
    paddingBottom:15,
  }
});

export default SearchScreen;
