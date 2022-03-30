import React from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

function HomeScreen( {navigation} ) {

  return(

    <View style={styles.container}>

      <Image style={styles.image} source={require("../../assets/logo.png")}/>

      <TouchableOpacity
        style={styles.appButtonContainer}
        onPress={()=>navigation.navigate("Search", {type:1})}>
        <Text style={styles.appButtonText}>Search by City</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.appButtonContainer}
        onPress={()=>navigation.navigate("Search", {type:0})}>
        <Text style={styles.appButtonText}>Search by Country</Text>
      </TouchableOpacity>

    </View>
  );
}

//Ratio to get the height of the logo. Logo dimensions 1675x321
const win = Dimensions.get('window');
const ratio = 0.8 * win.width/1675;
const height = ratio * 321;

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
    borderRadius: 15,
    paddingVertical: 20,
    marginTop:10,
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  image:{
    position: "absolute",
    top: "20%",
    alignSelf: "center",
    width: "80%",
    height: height,
    resizeMode: 'contain'
  }
});

export default HomeScreen;
