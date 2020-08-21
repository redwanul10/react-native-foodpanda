import React from 'react';
import { TouchableOpacity, Text, StyleSheet, StatusBar } from 'react-native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import Home from '../screens/home'
import Shop from '../screens/shop'
import CatagoryFoods from '../screens/catagory-foods'
import SingleFoodPage from '../screens/single-food-page'
import Cart from '../screens/cart'
import Restaurant from '../screens/restaurant'
import TermsAndCondition from '../screens/terms-and-condition'
import Discount from '../screens/discount';

const HomeNavigator = (props) => {

    const Stack = createStackNavigator()

    return (
        <>

            <StatusBar translucent />
            {/* <ContextProvider> */}
            <Stack.Navigator
                screenOptions={{
                    headerMode: "screen",
                    ...TransitionPresets.SlideFromRightIOS,
                    headerTitleAlign: "center",
                    headerStyle: {
                        elevation: 2,
                    },

                }}
            >
                <Stack.Screen
                    options={{
                        headerLeftContainerStyle: { marginLeft: 15 },
                        headerRightContainerStyle: { marginRight: 15 },
                        headerTitle: () => <Text style={style2.headerTitle}>Deliver To: <Text style={style2.coloredText}>Current Location</Text></Text>,
                        headerLeft: () =>

                            <TouchableOpacity
                                onPress={e => props.navigation.openDrawer()}
                                style={{ width: 35, height: 30, backgroundColor: "transparent" }}>
                                <Ionicons name="menu" size={25} color="#D70F64" />
                            </TouchableOpacity>,

                        headerRight: () =>

                            <TouchableOpacity
                                onPress={e => props.navigation.navigate("cart")}
                                style={{ width: 35, height: 30, backgroundColor: "transparent" }}>
                                <Feather name="shopping-bag" size={21} color="#D70F64" style={{ textAlign: "right" }} />
                            </TouchableOpacity>
                    }}
                    name="home" component={Home} />

                <Stack.Screen
                    name="cart"
                    component={Cart}
                />

                <Stack.Screen
                    name="Shop"
                    component={Shop}
                />

                <Stack.Screen
                    name="Discount"
                    component={Discount}
                />

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Restaurant"
                    component={Restaurant}
                />

                <Stack.Screen
                    options={{ headerTitle: "All Foods", headerShown: true }}
                    name="CatagoryFoods"
                    component={CatagoryFoods}
                />

                <Stack.Screen
                    name="SingleFood"
                    component={SingleFoodPage}
                />

                <Stack.Screen
                    options={{
                        headerTitle: "Terms & Condition",
                        ...TransitionPresets.FadeFromBottomAndroid,
                    }}
                    name="TermsAndCondition"
                    component={TermsAndCondition}
                />

            </Stack.Navigator>

            {/* </ContextProvider> */}
        </>
    );
}

export default HomeNavigator

const style2 = StyleSheet.create({
    headerTitle: {
        fontSize: 17
    },
    coloredText: {
        fontWeight: "bold",
        color: "#D70F64"
    }
})

