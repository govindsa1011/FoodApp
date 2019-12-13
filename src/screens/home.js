import React from 'react'
import { View, Text, FlatList } from 'react-native'
import ListItem from './ListItem';

export default class HomeScreen extends React.Component {

    render() {
        var itemArray = [
            {
                key: 1,
                name: 'Pizza'
            },
            {
                key: 2,
                name: 'Idli'
            },
            {
                key: 3,
                name: 'Dosa'
            },
            {
                key: 4,
                name: 'Panipuri'
            },
            {
                key: 5,
                name: 'Dabeli'
            },
            {
                key: 6,
                name: 'Vadapav'
            },
            {
                key: 7,
                name: 'Khaman Dhokla'
            },
            {
                key: 8,
                name: 'Fafada Jalebi'
            },
            {
                key: 9,
                name: 'Manchoorian'
            },
            {
                key: 10,
                name: 'Noddels'
            },
            {
                key: 11,
                name: 'Chinese Bhel'
            },
            {
                key: 12,
                name: 'Pav Bhaji'
            },
            {
                key: 13,
                name: 'Burger'
            },
            {
                key: 14,
                name: 'French Fries'
            },
            {
                key: 15,
                name: 'Gathiya'
            }
        ];

        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <FlatList style={{ width: '100%' }} showsVerticalScrollIndicator={false} data={itemArray} renderItem={(info, index) => (
                    <ListItem itemName={info.item.name} />
                )}>
                </FlatList>
            </View>
        )
    }
}