import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native'

const TermsAndCondition = (props) => {

    return (

        <View style={style.container}>

            <ScrollView>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quam ipsum, magni quia amet aut nam, aspernatur ex illo neque est, veniam fugiat laboriosam sunt a mollitia consequatur quod dolore.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolorem ullam culpa ut facilis animi harum optio pariatur, molestiae quibusdam voluptas nesciunt vitae libero rerum repudiandae inventore consectetur blanditiis quia.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eum. Natus hic similique sequi ex tempore. Magnam sunt impedit consectetur placeat perferendis voluptatibus nemo tempore? Distinctio, eaque optio. Ab, veniam.
        </Text>
            </ScrollView>
        </View>
    );
}

export default TermsAndCondition;


const style = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "white",
        padding: 15
    }
})