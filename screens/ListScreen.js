import React from 'react'
import { FlatList, View } from 'react-native'
import { data } from '../assets/data'
import ListItem from '../components/ListItem';

const ListScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: "center", paddingVertical: 40 }} >
            <FlatList
                data={data}
                renderItem={({ item }) => <ListItem movie={item} />}
                keyExtractor={({item, index})=>index}
            />
        </View>
    )
}

export default ListScreen
