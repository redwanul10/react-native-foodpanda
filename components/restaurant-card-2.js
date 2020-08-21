import React from 'react';
import { Text, TouchableWithoutFeedback, Image, View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const RestaurantCard = ({ shop }) => {
    const navigation = useNavigation()

    return (
        <TouchableWithoutFeedback onPress={e => navigation.navigate("Shop")}>
            <View style={[style.card]}>
                <View style={style.row}>
                    <View style={style.imageWrapper}>
                        <Image style={{ width: "100%", height: "100%" }} source={{ uri: shop.image }} />
                        <View style={style.deliveryTime}>
                            <Text style={style.deliveryText} >65</Text>
                            <Text style={[style.deliveryText, { fontSize: 10 }]} >min</Text>
                        </View>
                    </View>
                    <View style={style.cardDescription}>
                        <Text style={[style.cardTitle, style.bold]}>{shop.title}</Text>
                        <Text style={[style.cardText, { marginVertical: 4, color: "skyblue" }]}>$$$</Text>
                        <Text style={style.deleveryBtn}>free delivery</Text>
                    </View>
                </View>
                <View style={style.row}>
                    <Text style={[style.cardText, style.cardBottomText, style.borderRight]}>
                        <Text style={[style.bold, { color: "#333" }]}>TK 60</Text> Delivery fee
                </Text>
                    <Text style={[style.cardText, style.cardBottomText, { paddingLeft: 10 }]}>
                        <Text style={[style.bold, { color: "#333" }]}>TK 60</Text> Delivery fee
                </Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default React.memo(RestaurantCard);


const style = StyleSheet.create({
    card: {
        elevation: 3,
        width: "100%",
        alignSelf: "center",
        backgroundColor: "white",
        padding: 15,
        marginBottom: 20
    },
    row: {
        display: "flex",
        flexDirection: "row"
    },
    imageWrapper: {
        position: "relative",
        width: 100,
        height: 100
    },

    deliveryTime: {
        position: "absolute",
        top: 0,
        right: 0,
        backgroundColor: "white",
        width: 40,
    },
    deliveryText: {
        textTransform: "uppercase",
        textAlign: "center",
    },
    cardDescription: {
        paddingLeft: 13
    },
    cardTitle: {
        fontSize: 18,
        color: "#333",
        width: "90%",
    },
    bold: {
        fontWeight: "bold"
    },
    cardText: {
        fontSize: 12,
        color: "gray"
    },
    cardBottomText: {
        marginTop: 10,
        paddingRight: 10,
    },
    borderRight: {
        borderRightWidth: 1,
        borderRightColor: "black"
    },
    deleveryBtn: {
        color: "white",
        backgroundColor: "#D70F64",
        textTransform: "uppercase",
        marginTop: 5,
        width: 110,
        textAlign: "center",
        fontSize: 12,
        paddingVertical: 5,
        paddingHorizontal: 5
    }
})