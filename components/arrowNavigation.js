import React, { Component } from 'react';
import { StyleSheet,Text,View, Image ,TouchableOpacity,TextInput,ImageBackground ,Alert } from 'react-native';


export default Arrows = (props) => {
    return(
        <View style={{marginBottom : 20,marginLeft : 40}}>
            <TouchableOpacity onPress={ () => props.upFunction() }>
                <Image style={{ marginLeft : 30, transform: [{ rotate: '270deg' }] , width: 30, height: 30}} 
                source={require('../img/arrow.png')}
                />
            </TouchableOpacity>
            <View style={{flexDirection : 'row'}}>
                <TouchableOpacity onPress={ () => props.leftFunction() }>
                    <Image style={{transform: [{ rotate: '180deg' }] , width: 30, height: 30}} 
                    source={require('../img/arrow.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => props.rightFunction() }>
                    <Image style={{ marginLeft : 30,width: 30, height: 30}} 
                    source={require('../img/arrow.png')}
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={ () => props.downFunction() }>
                <Image style={{marginLeft : 30, transform: [{ rotate: '90deg' }] , width: 30, height: 30}} 
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
  
