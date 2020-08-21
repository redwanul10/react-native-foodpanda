import React from 'react';
import { View, StyleSheet, Text } from 'react-native'
import RestaurantCard from './restaurant-card';

const AllRestaurantList = ({ hideTitle, restaurantList }) => {

    return (
        <View style={style.sectionContainer}>
            {!hideTitle && <Text style={style.sectionTitle}>All Restaurant</Text>}
            {restaurantList.map((restaurant, i) =>
                <RestaurantCard key={i} data={restaurant} style2 />
            )}
        </View>
    )
}

export default AllRestaurantList;


const style = StyleSheet.create({
    sectionContainer: {
        marginTop: 30
    },
    sectionTitle: {
        fontSize: 25,
        marginBottom: 20
    }
})