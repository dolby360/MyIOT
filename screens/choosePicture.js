import React, { Component } from "react";
import { StyleSheet, View, Text ,ImageBackground} from "react-native";
import CellNavigation from '../components/cellNavigation';
import IconMatrix from '../components/iconMatrix'

export default class choosePicture extends Component {
  constructor (props){
    super(props);

    this.state = {
      cell : { row : 0, col : 0}
    };
  }

  setCell = (newCell) =>{
    this.setState({
        cell : newCell
    },
        // () => alert(this.state.cell.col + ',' + this.state.cell.row)
    );
  }
  
  render() {
    this.ipAddress = this.props.navigation.getParam('ipAddress',null);

    return (
      <ImageBackground 
            source={require('../img/tree.jpg')}     
            resizeMode='stretch' 
            style={styles.imageStyle}
        >
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Choose picture:</Text>
          </View>
          <View style={styles.matrix}>
            <IconMatrix
              ipAddress={this.ipAddress}
              row={this.state.cell.row}
              col={this.state.cell.col}
            />
          </View>
          <View style={styles.navigationContainer}>
            <CellNavigation
              setCellFunc={this.setCell}
              expendMode={true}
              ipAddress={this.ipAddress}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,.8)',
    alignItems : 'stretch',
    justifyContent : 'flex-start',
    flexDirection : 'column',
  },
  matrix :{
    flex : 5,
    margin : 10
  },
  text: {
    // backgroundColor :'green',
    color: "#121212",
    fontSize: 22,
    fontFamily: "roboto-regular",
    marginTop: 40,
    textAlign :'center',
  },
  imageStyle : {
    flex : 1,
    justifyContent : 'flex-start'
  },
  textContainer : {
    //backgroundColor :'red',
    flex : 1,
    justifyContent : 'flex-start', 
    alignItems : 'center',
  },
  navigationContainer : {
    // backgroundColor :'blue', 
    flex : 1.5,
    alignItems : 'center',
    paddingBottom : 50
  }
});
