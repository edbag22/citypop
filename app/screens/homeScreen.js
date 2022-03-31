import React from 'react';
import { Dimensions, StyleSheet, View, Image} from 'react-native';
import { Button } from 'react-native-elements';

function HomeScreen( {navigation} ) {

  return(

    <View style={styles.container}>

      <Image style={styles.image} source={require("../../assets/logo.png")}/>

      <Button
        buttonStyle={styles.appButton}
        containerStyle={styles.appButtonContainer}
        onPress={()=>navigation.navigate("Search", {type:1})}
        title="Search by City"
        titleStyle={styles.appButtonText}
      />

      <Button
        buttonStyle={styles.appButton}
        containerStyle={styles.appButtonContainer}
        onPress={()=>navigation.navigate("Search", {type:0})}
        title="Search by Country"
        titleStyle={styles.appButtonText}
      />

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
  appButton: {
    backgroundColor: "#638BBF",
    borderRadius: 15,
    height: 75,
  },
  appButtonContainer:{
    width:"80%",
    marginTop:10,
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
