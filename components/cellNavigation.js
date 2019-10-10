
import React, { Component } from 'react';
import { StyleSheet,Text,View, Image ,TouchableOpacity,TextInput,ImageBackground ,Alert } from 'react-native';
import Arrows from './arrowNavigation'

const directions = {
    left    :   'left',
    right   :   'right',
    up      :   'up',
    down    :   'down'
};

export default class CellNavigation extends Component {
    constructor(props) {
        super(props); 

        this.expendMode = this.props.expendMode;

        this.state = {
            cell : { row : 0, col : 0}
        };
    }

    arrowPressed = (direction) => {
        let temp = this.state.cell;
        switch (direction) {
            case directions.down:
                if(this.state.cell.row < 3){
                    temp.row += 1;
                }
            break;
            case directions.left:
                if(this.state.cell.col > 0){
                    temp.col -= 1;
                }
            break;
            case directions.right:
                if(this.state.cell.col < 19){
                    temp.col += 1;
                }
            break;
            case directions.up:
                if(this.state.cell.row > 0){
                    temp.row -= 1;
                }
            break;
            default:
                break;
        }
        
        this.setState({
            cell : temp,
        },
            () => this.props.setCellFunc(this.state.cell)
        );
    }

    upFunc      = () => this.arrowPressed(directions.up);
    downFunc    = () => this.arrowPressed(directions.down);
    leftFunc    = () => this.arrowPressed(directions.left);
    rightFunc   = () => this.arrowPressed(directions.right);

    arrows = () => {
        return(
            <View>
                <Arrows
                    expendMode={this.expendMode}
                    upFunction={this.upFunc}
                    leftFunction={this.leftFunc}
                    rightFunction={this.rightFunc}
                    downFunction={this.downFunc}
                />
            </View>
        );
    }

    getRowAndCol = () =>{
        return(
            <View  style={{flexDirection : 'column'}}>
                <View style={{flexDirection : 'row'}}>
                    <Text style={styles.constText}>Row:  </Text>
                    <Text style={styles.dynamicText}>{this.state.cell.row}</Text>
                </View>
                <View style={{flexDirection : 'row'}}>
                    <Text style={styles.constText}>Column:   </Text>
                    <Text style={styles.dynamicText}>{this.state.cell.col}</Text>
                </View>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection : 'column'}}>
                    {this.getRowAndCol()}
                </View>
                {this.arrows()}
            </View>
        );
    }
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
  
