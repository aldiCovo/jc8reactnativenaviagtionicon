import React from 'react'
import { TextInput, StyleSheet} from 'react-native'

const defaultInput = props => (
    <TextInput
        {...props} // place holder masuk ke props , untuk gabungin style bawaan di Auth componen dengan style dari komponen DefaultInput
        style = {[styles.input, props.style]} // yang kiri style dari component lain, yang kanan style dari component ini
    />
)

const styles = StyleSheet.create({
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#eee',
        padding: 5,
        margin: 8
    }
})

export default defaultInput