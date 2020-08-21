import React, { useContext } from 'react';
import { FlatList, StyleSheet } from 'react-native'
import SearchBar from '../search-bar';
import RestaurantCard2 from '../restaurant-card-2';
import { DataContext } from '../../context-provider'

const Shop = () => {

    const { shops } = useContext(DataContext)

    return (

        <FlatList
            data={shops}
            keyExtracto={(_, i) => i.toString()}
            scrollEnabled={true}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={style.container}
            ListHeaderComponent={() => <SearchBar placeholder="Looking for something ?" />}
            renderItem={({ item }) => (
                <RestaurantCard2 shop={item} />
            )}
        />
    );
}

export default Shop;

const style = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingHorizontal: 15
    }
})

