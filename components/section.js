import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native'
import RestaurantCard from './restaurant-card';

const Section = ({ restaurantList }) => {

    return (
        <View style={style.sectionContainer}>
            <Text style={style.sectionTitle}>Treat Choluk</Text>
            <ScrollView horizontal={true}>
                <View style={style.cardContainter}>
                    {restaurantList.map((restaurant, i) =>
                        <RestaurantCard key={i} data={restaurant} />
                    )}
                </View>
            </ScrollView>
        </View>
    )
}

export default Section;


const style = StyleSheet.create({
    sectionContainer: {
        marginTop: 30,
    },
    sectionTitle: {
        fontSize: 25,
        marginBottom: 20
    },
    cardContainter: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: -10

    }
})