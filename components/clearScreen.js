
import React, { Component } from 'react';
import { StyleSheet,Text,View, TouchableOpacity,TextInput,ImageBackground ,Alert } from 'react-native';
import axios from 'axios';

const updateRemote = async (props) =>{

    await axios.post('http://' + props.ipAddress  + '/clearScreen', {
      })
      .then(function (response) {
        // console.log(response.data);
        //alert(response.data);
      }) 
      .catch(function (error) {
        alert(error);
      });
}

const ClearScreen = (props) =>{
    return(
        <TouchableOpacity 
            style={styles.button}
            onPress={ () => updateRemote(props)}>
            <Text style={styles.buttonText}>
                Clear screen
            </Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    button : {
        backgroundColor : '#da9833',
        width : '30%',
        height : '20%',
        alignSelf : 'flex-start',
        marginBottom : '10%',
        marginLeft : '5%',
    },
    buttonText : {
        marginTop : 8,
        fontSize : 20,
        textAlign : 'center',
        textAlignVertical : 'center'
    }
});


export default ClearScreen;