import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import Icon from '@expo/vector-icons/FontAwesome'

const listItem = (props) => (
    <View style={{ alignItems: 'center' }}>
        <View style={styles.bg_shadow}>
            <ImageBackground source={require('../images/temp.jpg')} style={styles.imgStyle} imageStyle={{ borderRadius: 10 }} resizeMode="cover">
                <View style={styles.transparentBg}>
                    <View style={{ width: '50%' }}>
                        <Text style={{ padding: 10, color: 'white', fontSize: 22 }}>{props.itemName}</Text>
                    </View>
                    <View style={{ width: '50%', flexDirection:'row',alignItems: 'center',justifyContent:'flex-end'}}>
                        <Icon size={24} color="white" name='heart'/>
                        <View style={{marginEnd:10}}/>
                        <Icon size={24} color="white" name='heart' />
                        <View style={{marginEnd:10}}/>
                    </View>
                </View>

            </ImageBackground>
        </View>
    </View>
)

const styles = StyleSheet.create({
    bg_shadow: {
        width: '85%',
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        borderRadius: 10,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        margin: 10,
        elevation: 5,
    },
    imgStyle: {
        height: 200,
        width: "100%",
        justifyContent: 'flex-end'
    },
    transparentBg: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        flexDirection: 'row'
    }
})

export default listItem