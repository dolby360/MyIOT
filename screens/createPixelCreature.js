
import React, { Component } from 'react';
import { StyleSheet,Text,View, TouchableOpacity,TextInput,ImageBackground ,Alert } from 'react-native';
import Matrix from '../components/matrix';
import CellNavigation from '../components/cellNavigation';
import UpdateRemoteScreen from '../components/UpdateRemoteScreen';

export default class CreatePixel extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            cell : { row : 0, col : 0},
            cellsArray : [
                [0,0,0,0,0],[0,0,0,0,0],
                [0,0,0,0,0],[0,0,0,0,0],
                [0,0,0,0,0],[0,0,0,0,0],
                [0,0,0,0,0],[0,0,0,0,0],
            ]
        };
    }

    setPixel = (row,col) => {
        let cellsArrayTemp = this.state.cellsArray;
        if(cellsArrayTemp[row][col] == 0){
            cellsArrayTemp[row][col] = 1;
        }else{
            cellsArrayTemp[row][col] = 0;
        }
        this.setState({
            cellsArray : cellsArrayTemp
        },
            // () => alert(String(this.state.cellsArray))
        );
    }

    setCell = (newCell) =>{
        this.setState({
            cell : newCell
        },
            // () => alert(this.state.cell.col + ',' + this.state.cell.row)
        );
    }

    render() {
        const ipAddress = this.props.navigation.getParam('ipAddress',null);
        return (
        <ImageBackground 
            source={require('../img/tree.jpg')}     
            resizeMode='stretch' 
            style={styles.imageStyle}
        >
            <View style={styles.container}>
                <View style={{flex : 5}}>
                    <Matrix 
                    setPixelFunc={this.setPixel}
                    ipAddress={ipAddress}/>
                </View>
                <View style={{flex : 1,flexDirection : 'row'}}>
                    <UpdateRemoteScreen 
                        ipAddress={ipAddress}
                        cell={this.state.cell}
                        cellsArray={this.state.cellsArray}
                    />
                    <CellNavigation 
                        setCellFunc={this.setCell}
                    />
                </View>
            </View>
        </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,.8)',
        flexDirection : 'column',
        justifyContent : 'flex-start',
        alignItems : 'center',
        
    },
    imageStyle : {
        flex : 1,
        justifyContent : 'flex-start'
    },
});
  
