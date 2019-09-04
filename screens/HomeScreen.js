import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import { data } from '../assets/data'
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = () => {
    const [randomMovie, setRandomMovie] = useState(undefined)

    const selectRandomMovie = () => {
        setRandomMovie(data[Math.floor(Math.random() * data.length)])
    }

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>{randomMovie ? randomMovie.Title : "Pick a random Movie"}</Text>
            {randomMovie && randomMovie.Images && <Image source={{ uri: randomMovie.Images[0] }} style={{ width: 200, height: 300 }} />}
            <TouchableOpacity onPress={selectRandomMovie} style={{ marginVertical: 15, backgroundColor: "orange", padding: 10 }}>
                <Text>Random pick!</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen
