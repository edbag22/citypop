import React from 'react';
import GeoNames from "../api/geonames";
import SearchScreen from "../screens/searchScreen";
import { Alert } from 'react-native';

function SearchPresenter( {route, navigation} ){
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

  return <SearchScreen text={text}
                       onChangeText={txt=>onChangeText(txt)}
                       loading={loading}
                       searchCity={()=>searchCity()}
                       searchCountry={()=>searchCountry()}
                       type={type}/>

}

export default SearchPresenter;
