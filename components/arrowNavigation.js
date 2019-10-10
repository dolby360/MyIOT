import React, { Component } from 'react';
import { StyleSheet,Text,View, Image ,TouchableOpacity,TextInput,ImageBackground ,Alert } from 'react-native';


export default Arrows = (props) => {
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
            <TouchableOpacity onPress={ () => props.upFunction() }>
                <Image style={{ marginBottom: margeBottom,marginLeft : margeLeft, transform: [{ rotate: '270deg' }] , width: 30, height: 30}} 
                source={require('../img/arrow.png')}
                />
            </TouchableOpacity>
            <View style={{flexDirection : 'row'}}>
                <TouchableOpacity onPress={ () => props.leftFunction() }>
                    <Image style={{marginBottom: margeBottom,transform: [{ rotate: '180deg' }] , width: 30, height: 30}} 
                    source={require('../img/arrow.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => props.rightFunction() }>
                    <Image style={{ marginBottom: margeBottom,marginLeft : margeLeftRightArrow ,width: 30, height: 30}} 
                    source={require('../img/arrow.png')}
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={ () => props.downFunction() }>
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
  
