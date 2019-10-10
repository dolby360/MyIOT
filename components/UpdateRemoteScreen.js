
import React, { Component } from 'react';
import { StyleSheet,Text,View, TouchableOpacity,TextInput,ImageBackground ,Alert } from 'react-native';
import axios from 'axios';

const updateRemote = async (props) =>{
    let arr = []
    for(let i = 0; i < props.cellsArray.length; i++){
        arr.push(
            String(props.cellsArray[i]).replace(/,/g, '')
        );
    }
    await axios.post('http://' + props.ipAddress  + '/createChar', {
        row         :   props.cell.row,
        col         :   props.cell.col,
        cellArray   :   arr, 
      })
      .then(function (response) {
        // console.log(response.data);
        //alert(response.data);
      }) 
      .catch(function (error) {
        alert(error);
      });

    // alert(props.ipAddress + '   //   ' 
    //     + props.cell.col + ',' 
    //     + props.cell.row + '   //   '
    //     + String(arr)
    // );
}

const UpdateRemoteScreen = (props) =>{
    return(
        <TouchableOpacity 
            style={styles.button}
            onPress={ () => updateRemote(props)}>
            <Text style={styles.buttonText}>
                Update
            </Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    button : {
        backgroundColor : '#da9833',
        width : '25%',
        height : '40%',
        alignSelf : 'center',
    },
    buttonText : {
        marginTop : 8,
        fontSize : 18,
        textAlign : 'center',
    }
});


export default UpdateRemoteScreen;