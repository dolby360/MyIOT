import React, { Component } from 'react';
import { StyleSheet,Text,View, Image ,TouchableOpacity,TextInput,ImageBackground ,Alert } from 'react-native';
import axios from 'axios';

iconNameAsRequire = {
    walkingMan : {
        req : require('../img/icons/walk.png'),
        iconName : 'walkingMan'
    },
    smile : {
        req : require('../img/icons/smile.png'),
        iconName : 'smile'
    },
    thumbDown : {
        req : require('../img/icons/thumbDown.png'),
        iconName : 'thumbDown'
    },
    roulette : {
        req : require('../img/icons/roulette.png'),
        iconName : 'roulette'
    },
}

export default class IconMatrix extends Component {
    constructor(props){
        super(props);
    }

    query = async (icon) =>{
        const _row  = this.props.row;
        const _col  = this.props.col;
        const ip    = this.props.ipAddress;

        // alert(ip + '  ' + icon.iconName + '  ' + _row + '  ' + _col);
        await axios.post('http://' + ip + '/setCreature', {
            creature    :   icon.iconName,
            row         :   _row,
            col         :   _col,
        })
        .then(function (response) {
            // console.log(response.data);
            //alert(response.data);
        }) 
        .catch(function (error) {
            alert(error);
        });
    }

    getIcon = (icon) =>{
        if(icon === null){
            return null;
        }
        return(
            <TouchableOpacity onPress={ () => this.query(icon) }>
                <Image style={styles.icon} 
                    source={icon.req}
                    resizeMode='stretch'
                />
            </TouchableOpacity>
        );
    }

    row = ( _1, _2, _3) =>{
        return(
            <View style={{flexDirection : 'row',justifyContent : 'space-evenly'}}>
                {this.getIcon(_1)}
                {this.getIcon(_2)}
                {this.getIcon(_3)}
            </View>
        );
    }

    matrix = () => {
        return(
            <View style={{flexDirection : 'column'}}>
                {this.row(iconNameAsRequire.walkingMan,iconNameAsRequire.smile,iconNameAsRequire.thumbDown)}
                {this.row(iconNameAsRequire.roulette,null,null)}
            </View>
        );
    } 

    render(){
        return(
            <View style={{marginTop:60}}>
                {this.matrix()}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    icon : {
        width : 90,
        height : 90,
        marginTop : 20,
        marginBottom : 20
    }
});
  
