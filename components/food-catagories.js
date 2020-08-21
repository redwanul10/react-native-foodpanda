import React from 'react';
import { TouchableWithoutFeedback, FlatList, Image, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const data = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQ3Whw8AtTrkHFZBtCsz8okXyNI1NWaKXtVw&usqp=CAU",
    "https://1.bp.blogspot.com/-P--r0mPPsGc/XczTZ0n3qFI/AAAAAAABNTo/Q4aeJ_8EMqop44Jq9i07adQdY0eyhjRUgCNcBGAsYHQ/s1600/77794075_23843895002060717_1160301770249863168_n.png.jpg",
    "https://everydayonsales-infomartglobal.netdna-ssl.com//wp-content/uploads/2019/08/Foodpanda-OldTown-White-Coffee-Promo.jpg",
    "https://www.syioknya.com/custom/picture/20189/syioknya1_5df1c640e5f8b.png"
]
const FoodCatagories = () => {
    const navigation = useNavigation()
    return (
        <FlatList
            horizontal={true}
            contentContainerStyle={style.imageWrapper}
            data={data}
            keyExtractor={(_, i) => i.toString()}
            renderItem={({ item }) => (
                <>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate("Discount", { banner: item })}>
                        <Image style={style.image} source={{ uri: item }} />
                    </TouchableWithoutFeedback>
                </>
            )}
        />
    )
}

export default FoodCatagories;


const style = StyleSheet.create({
    imageWrapper: {
        width: 135 * 4,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    image: {
        width: 120,
        height: 130,
    }
})