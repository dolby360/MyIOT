import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Arrows from '../components/arrowNavigation';


export default class ChooseCreature extends Component {
  
  arrowPressed = (direction) =>{
    await axios.post('http://' + this.ipAddress  + '/createChar', {
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
  }
  
  render() {
    this.ipAddress = this.props.navigation.getParam('ipAddress',null);

    upFunc      = () => this.arrowPressed(directions.up);
    downFunc    = () => this.arrowPressed(directions.down);
    leftFunc    = () => this.arrowPressed(directions.left);
    rightFunc   = () => this.arrowPressed(directions.right);

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Choose a creature:</Text>
        <Arrows
          upFunction={this.upFunc}
          leftFunction={this.leftFunc}
          rightFunction={this.rightFunc}
          downFunction={this.downFunc}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    color: "#121212",
    fontSize: 20,
    fontFamily: "roboto-regular",
    lineHeight: 20,
    marginTop: 109,
    marginLeft: 66
  },
});
