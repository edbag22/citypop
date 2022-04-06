import React from 'react';
import HomeScreen from "../screens/homeScreen";

function ResultPresenter( {route, navigation} ){

  return <HomeScreen searchByCity={()=>navigation.navigate("Search", {type:1})}
                     searchByCountry={()=>navigation.navigate("Search", {type:0})}/>

}

export default ResultPresenter;
