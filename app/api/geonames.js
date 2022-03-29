const GeoNames={
  searchCity(text){
    return fetch(`http://api.geonames.org/search?maxRows=1&type=json&featureClass=p&username=weknowit&q=`+ text) // country code in ISO3166
          .then(response => {
            if(response.status !== 200) {
              throw response.status
            }
            return response
          })
          .then(response => response.json());
    },
    searchCountry(text){
      return fetch(`http://api.geonames.org/search?maxRows=1&type=json&featureClass=a&username=weknowit&q=`+ text) // country code in ISO3166
            .then(response => {
              if(response.status !== 200) {
                throw response.status
              }
              return response
            })
            .then(response => response.json())
            .then(response => fetch(`http://api.geonames.org/search?maxRows=3&type=json&featureClass=p&username=weknowit&q=&country=`+ response.geonames[0].countryCode) // country code in ISO3166
                              .then(response => {
                                if(response.status !== 200) {
                                  throw response.status
                                }
                                return response
                              })
                              .then(response => response.json()));
      }
}

export default GeoNames;
