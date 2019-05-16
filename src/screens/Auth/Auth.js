import React, { Component } from 'react'
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'

import startMainTabs from '../MainTabs/startMainTabs'
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'

class AuthScreen extends Component {
    loginHandler= () => {
        startMainTabs()
    }

    render () {
        return (
            <View style={styles.container}>
                <Text>Auth Screen</Text>
                <Button title='Switch to Login'/>
                <View style={styles.inputContainer}>
                    <DefaultInput placeholder='Your E-mail Address' style={styles.input}/>
                    <DefaultInput placeholder='Password' style={styles.input}/>
                    <DefaultInput placeholder='Confrim Password' style={styles.input}/>
                </View>
                <Button title='Login' onPress={this.loginHandler}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        borderWidth: 2,
        borderColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer:{
        width: '80%'
    }
    // ,
    // input: {
    //     width: '100%',
    //     borderWidth: 2,
    //     borderColor: 'red'
    // }
})

export default AuthScreen