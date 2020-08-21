import React, { useEffect, useContext } from 'react';
import { StatusBar, Text, TouchableWithoutFeedback, ScrollView, View, StyleSheet, ImageBackground } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { DataContext } from '../../context-provider'
import CartStatus from '../cart-status';
import RecomendedFoods from '../recomended-foods';


const Cart = ({ navigation }) => {

    const { 
        cart,
        addItemToTheCart,
        submitOrder,
        increaseQuantity,
        decreaseQuantity,
        deleteFromCart
    } = useContext(DataContext)

    useEffect(() => {

        StatusBar.setBackgroundColor("rgb(186, 11, 86)")

        navigation.setOptions({
            title: "Meena Click Mirpur 13",
            headerStyle: {
                backgroundColor: "#D70F64"
            },
            headerTitleStyle: {
                color: "white"
            }
        })
    }, [])

    const subTotal = () => {
        let total = 0
        cart.forEach(item => total += item.price * item.quantity)

        return total
    }



    return (
        <>
            <StatusBar backgroundColor={`rgb(186, 11, 86)`} />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={style.container}>
                    <View style={[style.cartItems, style.whiteBG]}>
                        {cart.map((item, i) => (
                            <View key={i} style={[style.row, style.cartItem]}>
                                <View style={[style.itemDetails, style.row]}>
                                    {item.quantity === 1
                                        ? (
                                            <TouchableWithoutFeedback onPress={e => deleteFromCart(item.id)} >
                                                <AntDesign name="delete" style={[style.quantityBtn, { color: "#D70F64", fontSize: 20 }]} />
                                            </TouchableWithoutFeedback>
                                        )
                                        : (
                                            <TouchableWithoutFeedback onPress={e => decreaseQuantity(item.id)}>
                                                <AntDesign name="minus" style={[style.quantityBtn, { color: "#D70F64", fontSize: 20 }]} />
                                            </TouchableWithoutFeedback>
                                        )
                                    }

                                    <Text>{item.quantity}</Text>
                                    <TouchableWithoutFeedback onPress={e => increaseQuantity(item)} style={style.quantityBtn}>
                                        <AntDesign name="plus" style={[style.quantityBtn, { color: "#D70F64", fontSize: 20 }]} />
                                    </TouchableWithoutFeedback>

                                    <Text style={{ width: "50%" }}>{item.name}</Text>
                                </View>
                                <Text style={style.price}>TK {item.price}</Text>
                            </View>
                        ))}
                    </View>

                    {cart.length > 0 && (
                        <RecomendedFoods
                            addItemToTheCart={addItemToTheCart}
                        />
                    )}

                    <View style={[style.whiteBG, { marginVertical: 20 }]}>
                        <View style={[style.row, style.space]}>
                            <Text>Subtotal</Text>
                            <Text>TK {subTotal()}</Text>
                        </View>
                        <View style={[style.row, style.space]}>
                            <Text>Delivery fee</Text>
                            <Text>TK 55</Text>
                        </View>
                        <View style={[style.row, style.space]}>
                            <Text style={{ fontWeight: "bold" }}>Total</Text>
                            <Text style={{ fontWeight: "bold" }}>TK {55 + subTotal()}</Text>
                        </View>
                    </View>
                </View >

            </ScrollView>

            <CartStatus
                title="Place Order"
                onSubmit={submitOrder}
            />
        </>
    );
}

export default React.memo(Cart);


const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15
    },
    row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    whiteBG: {
        backgroundColor: "white",
    },
    quantityBtn: {
        width: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    cartItems: {
        marginTop: 15
    },
    cartItem: {
        padding: 15,
        paddingLeft: 0
    },
    itemDetails: {
        width: "75%",
        justifyContent: "space-between"
    },
    price: {
        flex: 1,
        textAlign: "right",
    },
    space: {
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    boldTitle: {
        fontWeight: "bold",
        fontSize: 17
    },
    recomended: {
        width: 220,
        borderRadius: 5,
        marginLeft: 10
    },

})