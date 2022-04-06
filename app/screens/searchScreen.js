import React from 'react';
import { TextInput, StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Icon, Button } from 'react-native-elements';

function SearchScreen(props) {

  return(

    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

      <View style={styles.container}>

        <Text style={styles.heading}>Search by {props.type?"city":"country"}</Text>

        <TextInput
          style={styles.input}
          onChangeText={props.onChangeText}
          value={props.text}
          placeholder= {`Enter a ${props.type?"city":"country"}`}/>

        <Button
              icon={{
                name: 'magnifying-glass',
                type: 'entypo',
                size: 40,
                color: 'white',
              }}
              onPress={()=>props.type?props.searchCity():props.searchCountry()}
              disabled={!props.text}
              loading={props.loading}
              loadingProps={{
                size:"large"
              }}
              buttonStyle={styles.search}
              containerStyle={{
                paddingTop: 10,
              }}
            />

      </View>

    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    position: "absolute",
    top: "20%",
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  input: {
    width: "80%",
    height: 40,
    backgroundColor: "white",
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 15,
  },
  search:{
    backgroundColor: '#638BBF',
    width:75,
    height:75,
    borderRadius: 100,
    paddingTop:15,
    paddingBottom:15,
  }
});

export default SearchScreen;
