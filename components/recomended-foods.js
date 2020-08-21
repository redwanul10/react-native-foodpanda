import React, { useState } from 'react';
import { Text, TouchableWithoutFeedback, View, StyleSheet, ScrollView } from 'react-native'

const RecomendedFoods = (props) => {

    const [data, setData] = useState([
        {
            name: "Watermelon Juice",
            subTitle: "Juice & Drinks",
            price: 130,
            id: "1sdfwerwer"
        },
        {
            name: "Mango Juice",
            subTitle: "Juice & Drinks",
            price: 150,
            id: "2sdfwerwer"
        },
        {
            name: "Cold Coffee",
            subTitle: "Juice & Drinks",
            price: 120,
            id: "3sdfwerwer"
        },
        {
            name: "Milk Shake",
            subTitle: "Juice & Drinks",
            price: 100,
            id: "4sdfwerwer"
        },
    ])

    const { addItemToTheCart } = props

    return (
        <View>
            <Text style={[style.boldTitle, { marginVertical: 20 }]}>Popular with your order</Text>
            <ScrollView
                horizontal={true}
            >
                <View style={[style.row, { marginLeft: -10 }]}>
                    {data.map(item => (
                        <View style={[style.whiteBG, style.space, style.recomended]}>
                            <Text style={[style.boldTitle, { fontSize: 15 }]}>{item.name}</Text>
                            <Text>{item.subTitle}</Text>
                            <View style={[style.row, style.space, { paddingHorizontal: 0, paddingVertical: 20 }]}>
                                <Text>TK {item.price}</Text>
                                <TouchableWithoutFeedback onPress={() => addItemToTheCart(item)}>
                                    <Text style={{ color: "#D70F64", fontWeight: "bold" }}>+ADD</Text>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                    ))}

                </View>
            </ScrollView>
        </View>
    )

}

export default RecomendedFoods;


const style = StyleSheet.create({
    row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    whiteBG: {
        backgroundColor: "white",
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