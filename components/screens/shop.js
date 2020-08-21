import React, { useEffect, useContext } from 'react';
import { View, StyleSheet, ImageBackground, StatusBar, ScrollView } from 'react-native'
import SearchBar from '../search-bar';
import FeaturedProducts from '../featured-products';
import FoodList from '../food-list';
import { DataContext } from '../../context-provider'
import CartStatus from '../cart-status';

const Shop = ({ navigation }) => {


    const { foods } = useContext(DataContext)

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
            <StatusBar backgroundColor={`rgb(186, 11, 86)`} />
            <View style={[style.container]}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View style={style.headerArea}>
                        <ImageBackground
                            style={style.headerArea}
                            source={{ uri: "https://images.deliveryhero.io/image/fd-bd/LH/u9an-hero.jpg" }} >
                            <SearchBar style={style.search} placeholder="Search product and departments" />
                        </ImageBackground>
                    </View>
                    <View style={style.contentWrapper}>
                        <FeaturedProducts foods={foods} />
                        <FoodList foods={foods[2]} />
                        <FoodList foods={foods[3]} />
                    </View>
                </ScrollView>
            </View >

            <CartStatus />
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
        display: "flex",
        justifyContent: "flex-end"
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