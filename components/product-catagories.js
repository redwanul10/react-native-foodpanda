import React from 'react';
import { TouchableWithoutFeedback, Image, View, StyleSheet, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const ProductCatagories = (props) => {

    const navigation = useNavigation()
    const food = props.food

    return (
        <TouchableWithoutFeedback onPress={e => navigation.navigate("CatagoryFoods")}>
            <View style={[style.catagoryContainer, { width: props.width ? props.width : 80 }]}>
                <View>
                    <Image style={style.image} source={{ uri: food.foodList[0].image }} />
                    <View style={style.overlay}></View>
                </View>
                <Text style={style.catagory}>{food.catagory}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ProductCatagories;


const style = StyleSheet.create({
    catagoryContainer: {
        marginBottom: 10,
    },
    overlay: {
        backgroundColor: "rgba(51,51,51,.1)",
        width: "100%",
        ...StyleSheet.absoluteFill
    },
    image: {
        width: "100%",
        height: 70,
    },
    catagory: {
        textAlign: "center",
        fontSize: 12,
        fontWeight: "bold",
        marginTop: 5
    }
})