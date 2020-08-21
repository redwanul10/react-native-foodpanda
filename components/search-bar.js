import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

const SearchBar = (props) => {

    const customStyle = props.style || {}

    return (
        <View style={styles.container}>
            <View style={[styles.SectionStyle, customStyle]}>

                <AntDesign style={styles.ImageStyle} name="search1" size={20} color="#D70F64" />

                <TextInput
                    style={{ flex: 1 }}
                    placeholder={props.placeholder}
                    underlineColorAndroid="transparent"
                />
            </View>
        </View>
    );
}

export default SearchBar;


const styles = StyleSheet.create({

    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: .5,
        borderColor: 'transparent',
        elevation: 2,
        width: "100%",
        height: 50,
        borderRadius: 1,
        marginVertical: 15
    },

    ImageStyle: {
        padding: 10,
        margin: 5,
    },

});
