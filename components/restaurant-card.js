import React from 'react';
import { Text, TouchableWithoutFeedback, Image, View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const RestaurantCard = (props) => {
    const navigation = useNavigation()

    if (!props.data) return null
    const { title, image, description } = props.data

    const width = { width: props.style2 ? "100%" : 250 }
    const margin = { marginHorizontal: props.style2 ? 0 : 10, marginVertical: 10 }

    return (
        <TouchableWithoutFeedback onPress={e => navigation.navigate('Restaurant', { restaurantInfo: props.data })}>
            <View style={[style.card, width, margin]}>
                <View style={[style.imageWrapper, { paddingHorizontal: 15, paddingTop: 15 }]}>
                    <Image style={{ width: "100%", height: props.style2 ? 220 : 150 }} source={{ uri: image }} />
                    <Text style={[style.discount, style.bold]}>20% off</Text>

                    <View style={style.deliveryTime}>
                        <Text style={style.deliveryText} >65</Text>
                        <Text style={[style.deliveryText, { fontSize: 10 }]} >min</Text>
                    </View>
                </View>
                <View style={style.cardDescription}>
                    <Text style={[style.cardTitle, style.bold]}>{title}</Text>
                    <Text style={[style.cardText, { marginVertical: 4 }]}>{description}</Text>
                    <Text style={style.cardText}><Text style={[style.bold, { color: "#333" }]}>TK 60</Text> Delivery fee</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default React.memo(RestaurantCard);


const style = StyleSheet.create({
    card: {
        elevation: 3,
        backgroundColor: "white",
    },
    imageWrapper: {
        position: "relative",
    },
    discount: {
        position: "absolute",
        top: 15,
        left: 15,
        color: "white",
        backgroundColor: "#D70F64",
        textTransform: "uppercase",
        width: 80,
        textAlign: "center",
        fontSize: 13,
        paddingVertical: 3
    },
    deliveryTime: {
        position: "absolute",
        top: 15,
        right: 15,
        backgroundColor: "white",
        width: 40,
    },
    deliveryText: {
        textTransform: "uppercase",
        textAlign: "center",
    },
    cardDescription: {
        padding: 13
    },
    cardTitle: {
        fontSize: 15,
        color: "#333"
    },
    bold: {
        fontWeight: "bold"
    },
    cardText: {
        fontSize: 12,
        color: "gray"
    }
})