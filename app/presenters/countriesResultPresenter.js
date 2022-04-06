import React from 'react';
import GeoNames from "../api/geonames";
import CountriesResultScreen from "../screens/countriesResultScreen";
import { Alert } from 'react-native';

function SearchPresenter( {route, navigation} ){
  const [loading, setLoading] = React.useState(false);
  const [currentCity, setCurrentCity] = React.useState(null);
  const cities = route.params.geonames;
  const country = route.params.geonames[0].countryName;

  const searchCity=(city)=>{ //Function to search for the given city. Sets Loading to true while searching
    setLoading(true);
    setCurrentCity(city);
    GeoNames.searchCity(city)
    .then(dt => navigation.navigate("Result",dt))
    .catch(er => Alert.alert(`Oops... Something went wrong. Error: ${er}`))
    .finally(()=>setLoading(false))
  };

  return <CountriesResultScreen currentCity={currentCity}
                                loading={loading}
                                cities={cities}
                                country={country}
                                searchCity={(city)=>searchCity(city)}/>

}

export default SearchPresenter;
