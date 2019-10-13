
import React, { Component } from 'react';
import { StyleSheet,Text,View, TouchableOpacity,TextInput,ImageBackground ,Alert } from 'react-native';


export default class Matrix extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            buttonState : [ 
                [false,false,false,false,false],[false,false,false,false,false],
                [false,false,false,false,false],[false,false,false,false,false],
                [false,false,false,false,false],[false,false,false,false,false],
                [false,false,false,false,false],[false,false,false,false,false],
            ]
        };
    }

    onBoxClick = (props) =>{
        let row = props.row;
        let column = props.column;

        let temp = this.state.buttonState;
        temp[row][column] = !temp[row][column];

        this.setState({
            buttonState : temp,
        });
        // alert(row + ',' + column + ' = ' + this.state.buttonState[row][column]);
        this.props.setPixelFunc(row,column);
    }

    button = (row,column) => {
        return(
            <TouchableOpacity 
                style={ this.state.buttonState[row][column] ? styles.squareTrue : styles.squareFalse } 
                onPress={ () => this.onBoxClick({row,column})}       
            />
        );
    }

    matrixRow = idColumn => {
        return(
            <View style={{flexDirection : 'row'}}>
                {this.button(idColumn,0)}
                {this.button(idColumn,1)}
                {this.button(idColumn,2)}
                {this.button(idColumn,3)}
                {this.button(idColumn,4)}
            </View>
        );
    }

    matrix = () =>{
        return(
            <View style={{ flexDirection : 'column'}}>
                {this.matrixRow(0)}
                {this.matrixRow(1)}
                {this.matrixRow(2)}
                {this.matrixRow(3)}
                {this.matrixRow(4)}
                {this.matrixRow(5)}
                {this.matrixRow(6)}
                {this.matrixRow(7)}
            </View>
        );
    }

    render() {
        // Alert.alert(this.props.ipAddress);
        return (
            <View style={styles.container}>
                {this.matrix()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems : 'center'
    },
    squareTrue : {
        width : 50,
        height : 50,
        backgroundColor : '#3c70a4',
        margin : 10
    },
    squareFalse : {
        width : 50,
        height : 50,
        backgroundColor : '#64b2cd',
        margin : 10
    }, 
    imageStyle : {
        flex : 1,
        justifyContent : 'flex-start'
    },
});
  
