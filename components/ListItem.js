import React from 'react'
import { View, Text } from 'react-native'

const ListItem = ({ movie }) => {
    return (
        <View style={{ paddingVertical: 10, borderTopColor: "black", borderTopWidth: 1 }}>
            <Text>{movie.Title}</Text>
        </View>
    )
}

export default ListItem
