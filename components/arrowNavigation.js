import React, { Component } from 'react';
import { StyleSheet,Text,View, Image ,TouchableOpacity,TextInput,ImageBackground ,Alert } from 'react-native';
import axios from 'axios';

directions = {
    up      : 'up',
    down    : 'down',
    left    : 'left',
    right   : 'right',
}
cell = {
    col : 0,
    row : 0
}

let ip = '';

arrowPressed = async (dir) => {
    switch (dir) {
        case directions.down:
            if(cell.row < 3){
                cell.row += 1;
            }
        break;
        case directions.left:
            if(cell.col > 0){
                cell.col -= 1;
            }
        break;
        case directions.right:
            if(cell.col < 19){
                cell.col += 1;
            }
        break;
        case directions.up:
            if(cell.row > 0){
                cell.row -= 1;
            }
        break;
        default:
            break;
    }
    await axios.post('http://' + ip  + '/updateLocation', {
        row         :   cell.row,
        col         :   cell.col,
      })
      .then(function (response) {
        // console.log(response.data);
        //alert(response.data);
      }) 
      .catch(function (error) {
        // alert(error);
      });
}


export default Arrows = (props) => {
    ip = props.ipAddress;

    let margeLeft = 30;
    let margeLeftRightArrow = margeLeft;
    let margeBottom = 0;
    if(props.expendMode === true){
        margeLeftRightArrow = margeLeft * 3;
        margeLeft = 60;
        margeBottom = 30
    }
    return(
        <View style={{marginBottom : 20,marginLeft : 40}}>
            <TouchableOpacity onPress={ () => {
                    props.upFunction();
                    arrowPressed(directions.up);
                    }
                }>
                <Image style={{ marginBottom: margeBottom,marginLeft : margeLeft, transform: [{ rotate: '270deg' }] , width: 30, height: 30}} 
                source={require('../img/arrow.png')}
                />
            </TouchableOpacity>
            <View style={{flexDirection : 'row'}}>
                <TouchableOpacity onPress={ () => {
                        props.leftFunction();
                        arrowPressed(directions.left);
                        }
                    }>
                    <Image style={{marginBottom: margeBottom,transform: [{ rotate: '180deg' }] , width: 30, height: 30}} 
                    source={require('../img/arrow.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => {
                        props.rightFunction();
                        arrowPressed(directions.right);
                        } 
                    }>
                    <Image style={{ marginBottom: margeBottom,marginLeft : margeLeftRightArrow ,width: 30, height: 30}} 
                    source={require('../img/arrow.png')}
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={ () => {
                    props.downFunction();
                    arrowPressed(directions.down);
                    } 
                }>
                <Image style={{marginLeft : margeLeft, transform: [{ rotate: '90deg' }] , width: 30, height: 30}} 
                source={require('../img/arrow.png')}
                />
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container : {
        alignItems : 'center',
        flexDirection : 'row',
    },
    constText : {
        fontSize : 20,
        marginLeft : 20,
    },
    dynamicText : {
        fontSize : 20,
    }
});
  
