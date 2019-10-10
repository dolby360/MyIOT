
import React, { Component } from 'react';
import { StyleSheet,Text,View, TouchableOpacity,TextInput,ImageBackground ,Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

import ClearScreen from '../components/clearScreen'

export default class HomeScreen extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            IP_1 : '192',
            IP_2 : '168',
            IP_3 : '43',
            IP_4 : '93',
            fullIPAddress : '',
        };
        this.retrieveData();
        this.buttonNavigate = {
            createYourCreature  :   'createYourCreature',
            chooseCreature      :   'chooseCreature', 
        }
    }

    setFullIpAddress = () =>{
        this.setState({
            fullIPAddress : this.state.IP_1 + '.' + this.state.IP_2 + '.' + this.state.IP_3 + '.' + this.state.IP_4,
        });
    }

    inputValueChange = (stateKey,text) => {
        this.setState({
            [stateKey] : text,
        },
            //Callback to update the full ip address after change state.
            () => {
                this.setFullIpAddress();
            }
        );
    }

    getTextInput = (stateKey) =>{
        return(
            <TextInput
                keyOfState={stateKey}
                style={styles.inputText}
                onChangeText={ (text) => this.inputValueChange(stateKey,text)}
                value={this.state[stateKey]}
                keyboardType='number-pad'
                onSubmitEditing={this.storeData}
            />
        );
    }

    getIP_input = () =>{
        return(
            <View style={styles.ipInput}>
                {this.getTextInput('IP_1')}
                <Text>.</Text>
                {this.getTextInput('IP_2')}
                <Text>.</Text>
                {this.getTextInput('IP_3')}
                <Text>.</Text>
                {this.getTextInput('IP_4')}
            </View>
        );
    }

    retrieveData = async () => {
        try {
            const IP1 = await AsyncStorage.getItem('IP_1');
            const IP2 = await AsyncStorage.getItem('IP_2');
            const IP3 = await AsyncStorage.getItem('IP_3');
            const IP4 = await AsyncStorage.getItem('IP_4');
            this.setState({
                IP_1 : IP1,
                IP_2 : IP2,
                IP_3 : IP3,
                IP_4 : IP4,
            },
                () => this.setFullIpAddress()
            );
        } catch (error) {
        }
    };

    storeData = async () => {
        try {
            await AsyncStorage.setItem('IP_1', this.state.IP_1);
            await AsyncStorage.setItem('IP_2', this.state.IP_2);
            await AsyncStorage.setItem('IP_3', this.state.IP_3);
            await AsyncStorage.setItem('IP_4', this.state.IP_4);
        } catch (error) {
            // Error saving data
        }
    };

    askHostToNavigate = async (nav) =>{
        let _state = '';
        let _screen = '';
        // TODO: should be false.
        let bypassServerConfirmation = true;
        switch (nav) {
            case this.buttonNavigate.createYourCreature:
                _state = 'createCreature';
                _screen = 'createPixel';
                break;
            case this.buttonNavigate.chooseCreature:
                _state = 'chooseCreature';
                _screen = 'chooseCreature';
                break;
        
            default:
                break;
        }


        let navigateNextScreen = false;
        if(false === bypassServerConfirmation){
            await axios.post('http://' + this.state.fullIPAddress, {
                state : _state
              })
              .then(function (response) {
                if(response.data === "OK"){
                    navigateNextScreen = true;
                }
              }) 
              .catch(function (error) {
                alert(error);
              });
        }


        if( true === navigateNextScreen || true === bypassServerConfirmation ){
            this.props.navigation.navigate(_screen,{ipAddress : this.state.fullIPAddress})
        }
    }

    navigateNextScreen = (but) =>{
        switch (but) {
            case this.buttonNavigate.createYourCreature:
                return(
                    <TouchableOpacity style={styles.button} onPress={ () => {
                        this.askHostToNavigate(this.buttonNavigate.createYourCreature);
                        }
                    }>
                        <Text style={styles.buttonText}>
                            I want to create my own creature
                        </Text>
                    </TouchableOpacity>
                );
            case this.buttonNavigate.chooseCreature:
                return(
                    <TouchableOpacity style={styles.button} onPress={ () => {
                        this.askHostToNavigate(this.buttonNavigate.chooseCreature);
                        }
                    }>
                        <Text style={styles.buttonText}>
                            Choose creature
                        </Text>
                    </TouchableOpacity>
                );
        
            default:
                break;
        }
    }

    render() {
        return (
        <ImageBackground 
            source={require('../img/tree.jpg')}     
            resizeMode='stretch' 
            style={styles.imageStyle}
        >
            <View style={styles.container}>

                <View style={{ marginTop : 20,flex : 1, alignSelf : 'center'}}>
                    <Text style={styles.generalText}>
                        Enter the IP address you see on the screen
                    </Text>
                </View>

                <View style={{flex : 1}}>
                    {this.getIP_input()}
                </View>
                    <View style={{flex : 1}}>
                        <ClearScreen ipAddress={this.state.fullIPAddress}/>
                        {this.navigateNextScreen(this.buttonNavigate.createYourCreature)}
                        {this.navigateNextScreen(this.buttonNavigate.chooseCreature)}
                    </View>  
            </View>
        </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,.8)'
    },
    button : {
        marginBottom : 20,
        width : '90%',
        height : 50,
        // borderWidth: 4,
        borderRadius: 5,
        backgroundColor : '#730068',
        alignSelf : 'center',
        justifyContent : 'center',
    },
    buttonText : {
        flex: 1,
        color : 'white',
        fontSize : 23,
        textAlign : 'center',
        justifyContent : 'center',
        alignItems : 'center',
        textAlignVertical: 'center',
    },
    imageStyle : {
        flex : 1,
        // height : '80%',
        // width : '80%',
        justifyContent : 'flex-start'
    },
    generalText : {
        fontSize : 23,
        textAlign : 'center'
    },
    inputText : {
        fontSize : 23
    },
    ipInput : {
        // flex: 1,
        flexDirection : 'row',
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
  
