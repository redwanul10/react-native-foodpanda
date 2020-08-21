import React, { useContext, useEffect } from 'react';
import { StatusBar, StyleSheet } from 'react-native'
import FoodCard from '../food-card';
import { DataContext } from '../../context-provider'
import CartStatus from '../cart-status'
import ScrollSpy from '../scroll-spy';


const FoodList = () => {


    const {
        foods,
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        deleteFromCart
    } = useContext(DataContext)


    useEffect(() => {
        StatusBar.setBackgroundColor("white")
    }, [])


    const findItemInCart = id => cart.find(CartItem => CartItem.id === id)

    return (
        <>
            <StatusBar backgroundColor={`rgb(186, 11, 86)`} />

            <ScrollSpy
                tabs={foods}
                sectionTitleStyle={style.sectionTitle}
                itemListPropertyName="foodList"
                itemsContainerStyle={style.cardContainter}
                renderItem={food => {
                    const CART = findItemInCart(food.id) || {}
                    return (
                        <FoodCard
                            addToCart={addToCart}
                            increaseQuantity={increaseQuantity}
                            decreaseQuantity={decreaseQuantity}
                            deleteFromCart={deleteFromCart}
                            itemQuantity={CART.quantity || 0}
                            cart={cart}
                            food={food}
                            style={{ width: 156, marginBottom: 10 }}
                        />
                    )
                }}
            />

            <CartStatus />
        </>
    )
}

export default React.memo(FoodList);


const style = StyleSheet.create({

    sectionTitle: {
        fontSize: 25,
        marginVertical: 20,
    },
    cardContainter: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap"
    }

})