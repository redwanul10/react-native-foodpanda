import React from 'react';
import { Text, TouchableWithoutFeedback, Image, View, StyleSheet, Animated } from 'react-native'

const MenuItem = (props) => {

    const { addItemToTheCart, cart, dish } = props
    const inCart = cart.find(item => item.id === dish.id)

    return (
        <TouchableWithoutFeedback onPress={e => addItemToTheCart(dish)}>
            <View style={[style.menuItemContainer]}>
                <Text style={style.menuItemTitle}>{dish.name}</Text>
                <Text style={style.price}>TK {dish.price}</Text>
                {inCart && (
                    <View style={[style.circle]}>
                        <Text style={[style.quantity]}> {inCart ? inCart.quantity : 0}</Text>
                    </View>
                )}
            </View>
        </TouchableWithoutFeedback>
    )

}


const MEMO = (prev, next) => {

    return next.itemQuantity !== prev.itemQuantity ? false : true
}

export default React.memo(MenuItem, MEMO);


const style = StyleSheet.create({
    menuItemContainer: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: "rgba(128,128,128,0.3)",
        position: "relative"
    },
    menuItemTitle: {
        textTransform: "capitalize",
        fontWeight: "bold",
        marginBottom: 5,
        fontSize: 15
    },
    price: {
        color: "gray"
    },
    quantity: {
        color: "white",
        textAlign: "center",
        marginLeft: -3
    },
    circle: {
        width: 25,
        height: 25,
        backgroundColor: "rgba(173, 5, 77,0.9)",
        justifyContent: "center",
        borderRadius: 20,
        position: "absolute",
        right: 0,
        top: 15,
    }
})
