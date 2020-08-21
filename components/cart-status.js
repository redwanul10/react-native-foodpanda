import React, { useContext } from 'react';
import { Text, TouchableWithoutFeedback, View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { DataContext } from '../context-provider'

const CartStatus = ({ title, onSubmit }) => {

    const navigation = useNavigation()
    const { cart } = useContext(DataContext)

    const subTotal = () => {
        let total = 0
        cart.forEach(item => total += item.price * item.quantity)

        return total
    }

    const handlePress = () => {
        onSubmit
            ? onSubmit()
            : navigation.navigate("cart")
    }

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={[style.miniCartWrapper]}>
                <View style={style.miniCart}>
                    <Text style={[style.cartText, style.circle]}>{cart.length}</Text>
                    <Text style={style.cartText}>{title ? title : "View Cart"}</Text>
                    <Text style={style.cartText}>TK {subTotal()}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default CartStatus;


const style = StyleSheet.create({

    miniCartWrapper: {
        backgroundColor: "white",
    },
    miniCart: {
        backgroundColor: "#D70F64",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
    },
    cartText: {
        color: "white",
        fontWeight: "bold"
    },
    circle: {
        width: 20,
        height: 20,
        backgroundColor: "white",
        textAlign: "center",
        borderRadius: 50,
        color: "black"
    },


})