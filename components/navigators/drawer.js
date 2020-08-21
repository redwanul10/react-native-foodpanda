import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator, DrawerContentScrollView, } from '@react-navigation/drawer'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ContextProvider from '../../context-provider';
import StackNavigator from '../navigators/home-navigator'


const Drawer = () => {

    const Drawer = createDrawerNavigator()
    return (
        <ContextProvider>
            <NavigationContainer>
                <StatusBar backgroundColor="rgb(247, 247, 247)" />
                <Drawer.Navigator
                    drawerContent={props => (
                        <DrawerContentScrollView {...props}>

                            <View style={style.header}>
                                <View style={style.headerWrapper}>
                                    <View style={style.headerContent}>
                                        <TouchableOpacity>
                                            <Text style={style.headerText}>Log in / Create account</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                            <View style={style.headerWrapper}>
                                <TouchableOpacity style={style.row} >
                                    <MaterialCommunityIcons name="file-multiple-outline" style={style.drawerIcon} />
                                    <Text style={style.drawerItem}>My Orders</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={style.row} >
                                    <AntDesign name="questioncircleo" style={style.drawerIcon} />
                                    <Text style={style.drawerItem}>Help Center</Text>
                                </TouchableOpacity>

                                <TouchableOpacity >
                                    <Text style={style.drawerItem}>Settings</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={e => props.navigation.navigate("TermsAndCondition")}>
                                    <Text style={style.drawerItem}>Terms & Conditions / Privacy</Text>
                                </TouchableOpacity>
                            </View>


                        </DrawerContentScrollView>
                    )}
                    drawerContentOptions={{
                        activeTintColor: "#D70F64",
                        inactiveTintColor: "black",
                        pressColor: "blue"
                    }}
                >
                    <Drawer.Screen
                        options={{
                            drawerLabel: ""
                        }}
                        name="home" component={StackNavigator} />
                </Drawer.Navigator>
            </NavigationContainer>
        </ContextProvider>
    )

}

export default Drawer;

const style = StyleSheet.create({
    header: {
        backgroundColor: "#D70F64",
        marginTop: -5,
    },
    headerContent: {
        height: 200,

        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end"
    },
    headerText: {
        color: "white",
        fontSize: 16
    },
    headerWrapper: {
        padding: 15
    },
    drawerItem: {
        marginBottom: 20,
    },
    row: {
        flexDirection: "row",
    },
    drawerIcon: {
        fontSize: 18,
        marginRight: 20,
        color: "#D70F64",
    }
})