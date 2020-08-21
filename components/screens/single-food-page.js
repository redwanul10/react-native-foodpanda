import React, { useEffect, useContext } from 'react';
import { StatusBar, Text, TouchableWithoutFeedback, View, StyleSheet, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { DataContext } from '../../context-provider'


const SingleFoodPage = ({ route }) => {


    const {
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        deleteFromCart
    } = useContext(DataContext)

    const navigation = useNavigation()
    const { food } = route.params

    useEffect(() => {

        navigation.setOptions({
            headerShown: false,
        })

    }, [])


    const inCart = cart.find(item => item.id === food.id)

    return (
        <>
            <StatusBar backgroundColor="rgba(0,0,0,0.3)" barStyle="default" />
            <View style={style.container}>

                <View style={style.headerArea}>
                    <Image
                        style={[style.headerBg]}
                        source={{ uri: food.image }} />

                    <View style={style.overlay}></View>
                </View>

                <View style={style.contentWrapper}>
                    <Text style={style.productTitle}>{food.name}</Text>
                    <Text style={style.productPrice}>TK {food.price}</Text>
                </View>

            </View >

            <View style={style.miniCartWrapper}>
                <View style={style.miniCart}>

                    {inCart && inCart.quantity === 1
                        ? (
                            <TouchableWithoutFeedback onPress={() => deleteFromCart(food.id)}>
                                <AntDesign name="delete" size={20} color="black" />
                            </TouchableWithoutFeedback>
                        ) : (
                            <TouchableWithoutFeedback onPress={() => decreaseQuantity(food.id)}>
                                <AntDesign name="minus" size={20} color="black" />
                            </TouchableWithoutFeedback>
                        )
                    }

                    <Text style={style.cartText}>{inCart ? inCart.quantity : 0}</Text>

                    <TouchableWithoutFeedback onPress={() => increaseQuantity(food)}>
                        <AntDesign name="plus" size={20} color="#900" />
                    </TouchableWithoutFeedback>
                </View>

                <TouchableWithoutFeedback onPress={e => addToCart(food)}>
                    <Text style={style.center}>Add to Cart</Text>
                </TouchableWithoutFeedback>


            </View>
        </>
    );
}

export default SingleFoodPage;


const style = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
    },
    contentWrapper: {
        paddingHorizontal: 15,
    },
    headerArea: {
        height: 300,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    headerBg: {
        resizeMode: "cover",
        height: "80%",
        width: "80%",
    },
    overlay: {
        backgroundColor: "rgba(51,51,51,.1)",
        width: "100%",
        ...StyleSheet.absoluteFill
    },
    productTitle: {
        fontSize: 25,
        fontWeight: "bold",
        textTransform: "capitalize",
        marginVertical: 10
    },
    miniCartWrapper: {
        elevation: 100,
        backgroundColor: "white",
        padding: 15,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    miniCart: {
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
        paddingHorizontal: 20,
        width: "50%"
    },
    center: {
        color: "white",
        textAlign: "center",
        textTransform: "uppercase",
        backgroundColor: "#D70F64",
        padding: 15,
        width: "50%",
    },
    addToCart: {
        backgroundColor: "#D70F64",
    },
    cartText: {
        color: "black",
        fontSize: 20,
    },
})