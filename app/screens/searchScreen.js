import React from 'react';
import { TextInput, Image, StyleSheet, Text, View, Button, TouchableOpacity, ImageBackground, TouchableWithoutFeedback, Keyboard, Alert, ActivityIndicator} from 'react-native';
import GeoNames from "../api/geonames";

function SearchScreen({route, navigation}){
  const [text, onChangeText] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const type = route.params.type;

  const searchCity=()=>{
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

  const searchCountry=()=>{
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
        <Text style={styles.logo}>Search by {type?"city":"country"}</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder= {`Enter a ${type?"city":"country"}`}
        />
        {loading?
        <View style={styles.loading}>
          <ActivityIndicator color="#009688" size="large"/>
        </View>
        :null}
        <TouchableOpacity
          onPress={()=>type?searchCity():searchCountry()}>
          <Image style={styles.image} source={require("../../assets/search.png")}/>
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
  image:{
    marginTop:20,
    width: 100,
    height: 100,
    resizeMode: 'contain'
  }
});

export default SearchScreen;
