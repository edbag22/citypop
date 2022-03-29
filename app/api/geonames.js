const GeoNames={
  searchCity(city){ // name of city
    return fetch(`http://api.geonames.org/search?maxRows=1&type=json&featureClass=p&username=weknowit&q=`+ city)
          .then(response => {
            if(response.status !== 200) {
              throw response.status
            }
            return response
          })
          .then(response => response.json());
    },
    searchCountry(country){ // name of country
      return fetch(`http://api.geonames.org/search?maxRows=1&type=json&featureClass=a&username=weknowit&q=`+ country)
            .then(response => {
              if(response.status !== 200) {
                throw response.status
              }
              return response
            })
            .then(response => response.json());
          },
    searchCities(countryCode){ // country code in ISO3166
      console.log(countryCode);
      return fetch(`http://api.geonames.org/search?maxRows=3&type=json&featureClass=p&username=weknowit&q=&country=`+ countryCode)
            .then(response => {
              if(response.status !== 200) {
                throw response.status
              }
              return response
            })
            .then(response => response.json());
    }
}

export default GeoNames;
