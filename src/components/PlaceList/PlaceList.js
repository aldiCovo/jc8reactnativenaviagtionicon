import React from 'react'
import {StyleSheet, FlatList} from 'react-native'

import ListItem from '../ListItem/ListItem'

const PlaceList = props => {

    return (
        <FlatList // Komponen yg dikasih input berupa array of objek yang akan disusun d scren ke bawah
            style = {styles.listContainer}
            data = {props.places} //  [{key: 0, value: 'JKT'}] array yang akan disusun seperti caranya dot map
            renderItem = {(info) => { // masing2 arry akan diwakilkan dengan info
                return (
                    <ListItem // Komponen yang menampilkan outpot komponen yang bar kuning
                        placeImage = {info.item.image}
                        placeName = {info.item.value}
                        onPressItem = {() => {props.onItemSelected(info.item.key)}}
                    />
                )
            }}
        />
    )
    
}

const styles = StyleSheet.create({
    listContainer: {
        width: '100%'
    }
})

export default PlaceList