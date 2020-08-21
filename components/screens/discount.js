import React, { useEffect, useState, useContext } from 'react';
import { StatusBar, ScrollView, View, StyleSheet, ImageBackground } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import { DataContext } from '../../context-provider'
import AllRestaurantList from '../all-restaurant-list';

const Shop = ({ navigation, route }) => {

    const { banner } = route.params



    const { restaurants } = useContext(DataContext)


    useEffect(() => {

        StatusBar.setTranslucent(true);
        StatusBar.setBarStyle("default");

        navigation.setOptions({
            title: "Meena Click Mirpur 13",
            headerShown: false,
            headerTransparent: true,
        })

    }, [])


    return (
        <>
            <StatusBar backgroundColor={`rgba(0,0,0,0.2)`} />
            <View style={[style.container]}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View style={style.headerArea}>
                        <ImageBackground
                            style={style.headerBg}
                            source={{ uri: banner }} />
                    </View>
                    <View style={[style.contentWrapper, { marginTop: -80 }]}>
                        <AllRestaurantList
                            hideTitle
                            restaurantList={restaurants}
                        />
                    </View>
                </ScrollView>
            </View >
        </>
    );
}

export default Shop;


const style = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
    },
    contentWrapper: {
        paddingHorizontal: 15
    },
    headerArea: {
        height: 260,
    },
    headerBg: {
        resizeMode: "cover",

        height: "100%",
        width: "100%",
    },
    search: {
        backgroundColor: "white",
        borderRadius: 0,
        width: "90%",
        alignSelf: "center",
    },
})