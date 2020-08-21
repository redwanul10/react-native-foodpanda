import React, { useState, useRef } from 'react';
import { Text, TouchableWithoutFeedback, Image, View, StyleSheet, Animated } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FastImage from 'react-native-fast-image'


const FoodCard = (props) => {



    const {
        addToCart,
        cart,
        increaseQuantity,
        decreaseQuantity,
        deleteFromCart
    } = props



    const navigation = useNavigation()
    const customStyle = props.style || {}
    const animOpacity = useRef(new Animated.Value(0)).current
    const animWidth = useRef(new Animated.Value(35)).current
    const borderRadius = useRef(new Animated.Value(50)).current
    const scale = useRef(new Animated.Value(1)).current

    const [addIcon, setAddIcon] = useState(false)

    const anim = useRef(null)
    const food = props.food

    if (!food || !cart) return <Text style={{ height: 400 }}>Hellow world</Text>

    const inCart = cart.find(item => item.id === food.id)



    const updateCart = (updateQuantity) => {
        return new Promise((resolve, reject) => {
            setAddIcon(false)
            if (updateQuantity) {
                addToCart(food)
                return resolve("state updated")
            } else {
                return resolve("state updated")
            }
        })
    }

    const animateOpacity = async (updateQuantity) => {

        if (anim.current) clearTimeout(anim.current)

        await updateCart(updateQuantity)

        Animated.timing(animOpacity, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start()

        Animated.timing(borderRadius, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false
        }).start()

        Animated.timing(animWidth, {
            toValue: props.quantitySectionWith || 130,
            duration: 500,
            useNativeDriver: false
        }).start()

        Animated.timing(scale, {
            toValue: 0,
            duration: 0,
            useNativeDriver: true
        }).start()



        anim.current = setTimeout(() => {
            setAddIcon(true)

            Animated.timing(scale, {
                toValue: 1,
                duration: 0,
                delay: 500,
                useNativeDriver: true
            }).start()

            Animated.timing(animOpacity, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true
            }).start()

            Animated.timing(borderRadius, {
                toValue: 50,
                duration: 1000,
                useNativeDriver: false
            }).start()

            Animated.timing(animWidth, {
                toValue: 35,
                duration: 500,
                useNativeDriver: false
            }).start()
        }, 3000)
    }

    return (
        <>
            <TouchableWithoutFeedback
                onPress={e => navigation.navigate('SingleFood', { food })}
            >
                <View style={[style.card, customStyle]} >
                    <View>
                        <FastImage style={style.image} source={{ uri: food.image || "https://via.placeholder.com/300/09f.pngC/O" }} />
                        <View style={style.overlay}></View>
                        <Animated.View style={[style.icon, { zIndex: 999999, transform: [{ scale }], justifyContent: "center", alignItems: "center" }]}>
                            {!inCart
                                ? (
                                    <TouchableWithoutFeedback onPress={e => animateOpacity(true)}>
                                        <AntDesign name="plus" color="#D70F64" size={20} />
                                    </TouchableWithoutFeedback>
                                )
                                : (
                                    <TouchableWithoutFeedback onPress={async e => await animateOpacity(false)}>
                                        <Text style={[{ fontSize: 14, backgroundColor: "#D70F64", color: "white", width: "100%", height: "100%", borderRadius: 50, textAlign: "center", lineHeight: 35 }]} >
                                            {inCart ? inCart.quantity : 0}
                                        </Text>
                                    </TouchableWithoutFeedback>
                                )
                            }
                        </Animated.View>



                        <Animated.View style={{ displey: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", position: "absolute", backgroundColor: "red", right: 10, bottom: 10, backgroundColor: "white", marginBtooom: 80, width: animWidth, height: 35, zIndex: -1, borderRadius, zIndex: 999 }}>

                            {inCart && inCart.quantity === 1
                                ? (
                                    <TouchableWithoutFeedback onPress={async e => {
                                        await animateOpacity(false)
                                        deleteFromCart(food.id)
                                    }}>
                                        <Animated.View style={[style.quantityBtn, { opacity: animOpacity }]}>
                                            <AntDesign color="#D70F64" name="delete" size={20} />
                                        </Animated.View>
                                    </TouchableWithoutFeedback>
                                ) : (
                                    <TouchableWithoutFeedback onPress={async e => {
                                        await animateOpacity(false)
                                        decreaseQuantity(food.id)
                                    }}>
                                        <Animated.View style={[style.quantityBtn, { opacity: animOpacity }]}>
                                            <AntDesign color="#D70F64" name="minus" size={20} />
                                        </Animated.View>
                                    </TouchableWithoutFeedback>
                                )
                            }


                            <Animated.View style={{ opacity: animOpacity }}>
                                <Text>{inCart ? inCart.quantity : 0}</Text>
                            </Animated.View>


                            <TouchableWithoutFeedback onPress={async e => {
                                await animateOpacity(false)
                                increaseQuantity(food)
                            }}>
                                <Animated.View style={[style.quantityBtn, { opacity: animOpacity }]}>
                                    <AntDesign color="#D70F64" name="plus" size={20} />
                                </Animated.View>
                            </TouchableWithoutFeedback>


                        </Animated.View>
                    </View>
                    <Text style={[style.cardText, style.title]}>TK {food.price} {food.incart ? "incart" : ""}</Text>
                    <TouchableWithoutFeedback onPress={e => setAddIcon(!addIcon)}>
                        <Text style={[style.cardText, style.grayColor]}>{food.name}</Text>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback >
        </>
    );
}

const MEMO = (prev, next) => {

    return next.itemQuantity !== prev.itemQuantity ? false : true
}

export default React.memo(FoodCard, MEMO);


const style = StyleSheet.create({
    card: {
        width: 140,
        marginBottom: 10
    },
    image: {
        width: "100%",
        height: 140
    },
    overlay: {
        backgroundColor: "rgba(51,51,51,.1)",
        width: "100%",
        ...StyleSheet.absoluteFill
    },
    icon: {
        fontSize: 22,
        position: "absolute",
        right: 10,
        bottom: 10,
        width: 35,
        height: 35,
        borderRadius: 50,
        backgroundColor: "white",
        textAlign: "center",
        lineHeight: 35,
        color: "#D70F64",
    },
    title: {
        fontWeight: "bold",
        marginVertical: 3
    },
    grayColor: {
        color: "gray",
        lineHeight: 20
    },
    cardText: {
        fontSize: 13
    },
    quantityBtn: {
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
    }
})
