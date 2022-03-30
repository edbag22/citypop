const GeoNames={
  apiCall(params){ //Making a call to the GeoNames API with the selected parameters
    return fetch("http://api.geonames.org/search?type=json&username=weknowit&" + params)
          .then(response => {
            if(response.status !== 200) {
              throw response.status
            }
            return response
          })
          .then(response => response.json());
  },
  searchCity(city){ // Searching for a specific city, search with the name of the city
    return GeoNames.apiCall(`maxRows=1&featureClass=p&name=${encodeURI(city)}`)
  },
  searchCountry(country){ // Searching for a country, search with the name of the country
    return GeoNames.apiCall(`maxRows=1&featureClass=a&featureCode=PCLI&name=${encodeURI(country)}`)
  },
  searchCities(countryCode){ // Searching for the 3 biggest cities in the country, search with country code in ISO3166
    return GeoNames.apiCall(`maxRows=3&orderby=population&featureClass=p&q=&country=`+ countryCode)
  }
}

export default GeoNames;
