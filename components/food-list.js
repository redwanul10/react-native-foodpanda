import React, { useContext } from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native'
import FoodCard from './food-card';
import { DataContext } from '../context-provider'

const FoodList = ({ foods }) => {

    const {
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        deleteFromCart,
        cart
    } = useContext(DataContext)

    const findCartDetails = id => cart.find(CartItem => CartItem.id === id)

    return (
        <View style={style.sectionContainer}>
            <Text style={style.sectionTitle}>{foods.catagory}</Text>
            <ScrollView horizontal={true}>
                <View style={style.cardContainter}>
                    {foods.foodList.map((food, i) => {
                        const CART = findCartDetails(food.id) || {}

                        return (
                            <FoodCard
                                key={food.id}
                                addToCart={addToCart}
                                increaseQuantity={increaseQuantity}
                                decreaseQuantity={decreaseQuantity}
                                deleteFromCart={deleteFromCart}
                                itemQuantity={CART.quantity || 0}
                                quantitySectionWith={120}
                                cart={cart}
                                food={food} />
                        )
                    })}
                </View>
            </ScrollView>
        </View>
    )
}

export default React.memo(FoodList);


const style = StyleSheet.create({
    sectionContainer: {
        marginTop: 15,
    },
    sectionTitle: {
        fontSize: 25,
        marginBottom: 20
    },
    cardContainter: {
        width: 150 * 5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap"
    }
})