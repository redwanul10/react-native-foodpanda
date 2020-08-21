import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native'
import ProductCatagories from './product-catagories';


const Section = ({ foods }) => {


    return (
        <View style={style.sectionContainer}>
            <ScrollView horizontal={true}>
                <View style={style.cardContainter}>
                    {foods.map(food => (
                        <ProductCatagories food={food} width={65} />
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}

export default React.memo(Section);


const style = StyleSheet.create({
    sectionContainer: {
        marginTop: 15,
    },
    sectionTitle: {
        fontSize: 25,
        marginBottom: 20
    },
    cardContainter: {
        width: 75 * 5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap"
    }
})