import React, { useState, useEffect, useContext, useRef } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native'
import SearchBar from '../search-bar';
import FoodCatagories from '../food-catagories';
import Section from '../section';
import AllRestaurantList from '../all-restaurant-list'
import { DataContext } from '../../context-provider'

const Delivery = () => {

    const { restaurants } = useContext(DataContext)

    const [first, setFirst] = useState([])
    const [second, setSecond] = useState([])
    const [restaurantList, setRestaurantList] = useState([])


    useEffect(() => {

        const newList = [...restaurants]
        setFirst(newList.splice(0, 5))
        setSecond(newList.splice(0, 5))
        setRestaurantList(newList.splice(0))

    }, [])


    return (
        <View style={style.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >

                <SearchBar placeholder="Search product and departments" />
                <FoodCatagories />
                <Section restaurantList={first} />
                <Section restaurantList={second} />
                <AllRestaurantList
                    hideTitle
                    restaurantList={restaurantList}
                />
            </ScrollView>
        </View>
    );
}

export default React.memo(Delivery);

const style = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        paddingHorizontal: 15
    }
})