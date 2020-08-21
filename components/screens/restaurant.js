import React, { useContext, useRef, useEffect } from 'react';
import { Image, StatusBar, View, StyleSheet, Text, Animated } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MenuItem from '../menu-item.js';
import { DataContext } from '../../context-provider'
import CartStatus from '../cart-status.js';
import { useRoute, useIsFocused } from '@react-navigation/native'
import ScrollSpy from '../scroll-spy.js';




const Restaurant = () => {


    const { params: { restaurantInfo } } = useRoute()
    const { menu, addItemToTheCart, cart } = useContext(DataContext)

    useEffect(() => {
        StatusBar.setTranslucent(false)
    }, [])


    const animScroll = useRef(new Animated.Value(0)).current



    const headerTextOpacity = animScroll.interpolate({
        inputRange: [0, 110],
        outputRange: [1, 0],
        extrapolate: "clamp"
    })



    const overlayTextOpacity = animScroll.interpolate({
        inputRange: [110, 200],
        outputRange: [0, 1],
        extrapolate: "clamp",
        useNativeDriver: true
    })

    const overlayHeight = animScroll.interpolate({
        inputRange: [110, 256],
        outputRange: [230, 60],
        extrapolate: "clamp",
        useNativeDriver: false
    })


    const headerTop = animScroll.interpolate({
        inputRange: [0, 150],
        outputRange: [0, -50],
        extrapolate: "clamp",
        useNativeDriver: true
    })

    const tabTop = animScroll.interpolate({
        inputRange: [0, 245],
        outputRange: [305, 60],
        extrapolate: "clamp",
        useNativeDriver: true
    })

    const textTranslate = animScroll.interpolate({
        inputRange: [180, 200],
        outputRange: [0, -10],
        extrapolate: "clamp",
        useNativeDriver: true
    })



    const findItemInCart = id => cart.find(CartItem => CartItem.id === id)


    return (
        <>
            <StatusBar backgroundColor={`rgb(186, 11, 86)`} />
            <View style={{ flex: 1 }}>
                <Animated.View style={{ ...StyleSheet.absoluteFill, translateY: headerTop, zIndex: 9999, height: 300 }}>
                    <View>
                        <Image style={style.headerImage}
                            source={{ uri: restaurantInfo.image }}
                        />
                        <Animated.View style={[style.headerText, { opacity: headerTextOpacity }]}>
                            <Text style={style.title}>The One Kitchen</Text>
                            <Text style={style.time}>Cosed until 10:00 AM</Text>
                        </Animated.View>

                    </View>
                    <View style={[style.offerSection]}>

                        <View style={{ width: "70%" }}>
                            <Text style={[style.title, style.offerTitle]}>25% OFF + FOOD30</Text>
                            <Text style={style.offerDes}>Enjoy 25% Discount on All Items with Promo Code Food30</Text>
                        </View>
                        <AntDesign name="gift" size={35} color="skyblue" />

                    </View>
                </Animated.View>


                <Animated.View style={[style.headerText, { opacity: overlayTextOpacity, ...StyleSheet.absoluteFill, zIndex: 99999999, height: overlayHeight, backgroundColor: "#D70F64", alignItems: "flex-start" }]}>
                    <Text style={{ color: "white", fontSize: 16, marginLeft: 50 }}>Cosed until 10:00 AM</Text>
                </Animated.View>

                <ScrollSpy
                    tabs={menu}
                    ÄnimatedScrollValue={animScroll}
                    topHeaderStyle={{ ...StyleSheet.absoluteFill, zIndex: 9999999999999999, height: 43, translateY: tabTop, backgroundColor: "white", elevation: 2 }}
                    itemsScrollViewStyle={{ ...StyleSheet.absoluteFill, top: -10, zIndex: 9999, backgroundColor: "transparent" }}
                    itemListPropertyName="dishes"
                    renderItem={dish => {
                        const CART = findItemInCart(dish.id) || {}
                        return (
                            <MenuItem
                                itemQuantity={CART.quantity || 0}
                                addItemToTheCart={addItemToTheCart}
                                dish={dish}
                                cart={cart}
                            />
                        )
                    }}
                    renderAboveItems={() => (
                        <View style={{ marginTop: 330, paddingHorizontal: 15, backgroundColor: "white", elevation: 2, paddingTop: 20 }}></View>
                    )}
                />


            </View>
            <CartStatus />
        </>
    )

}

export default Restaurant

const style = StyleSheet.create({
    menu: {
        borderBottomWidth: 20,
        borderColor: "rgba(128,128,128,0.1)"
    },

    offerTitle: {
        fontSize: 13,
        color: "black",
        marginBottom: 5
    },
    offerDes: {
        color: "grey",
        fontSize: 13
    },
    offerSection: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 10,
    },

    headerText: {
        ...StyleSheet.absoluteFill,
        backgroundColor: "rgba(0,0,0,0.2)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontWeight: "bold",
        fontSize: 25,
        marginBottom: 20
    },
    headerImage: {
        width: "100%",
        height: 230
    },
    time: {
        backgroundColor: "rgb(255, 176, 28)",
        padding: 5,
        borderRadius: 5
    },
    indicator: {
        height: 3,
        backgroundColor: "#D70F64"
    },
    tab: {
        color: "grey",
        fontWeight: "bold",
        textTransform: "uppercase",
        padding: 10,
        marginRight: 10,
        overflow: "hidden",
    },
    row: {
        display: "flex",
        flexDirection: "row",

    },
    sectionContainer: {
        paddingHorizontal: 15,
        flex: 1,
        backgroundColor: "white"
    },
    sectionTitle: {
        fontSize: 25,
        marginVertical: 20,
    },
    cardContainter: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap"
    },

    sectionTitle: {
        fontSize: 25,
        marginVertical: 20,
    },
})

