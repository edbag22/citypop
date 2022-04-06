import React from 'react';
import ResultScreen from "../screens/resultScreen";

function ResultPresenter( {route, navigation} ){
  const country = route.params.geonames[0];

  return <ResultScreen country={country}/>

}

export default ResultPresenter;
