import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, TouchableOpacity, ImageBackground, Image} from 'react-native';

function HomeScreen({navigation}){
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
  logo: {
    position: "absolute",
    top: "25%",
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  image:{
    position: "absolute",
    bottom: "0%",
    alignSelf: "center",
    width: "80%",
    resizeMode: 'contain'
  }
});

export default HomeScreen;
