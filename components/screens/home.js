import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Shops from '../tabs/shops';
import Delivery from '../tabs/delivery';

const App = () => {
    const Tab = createMaterialTopTabNavigator()

    return (
        <>

            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: "#D70F64",
                    inactiveTintColor: "black",
                    pressColor: "gray",
                    labelStyle: { fontWeight: "bold" },
                    indicatorStyle: {
                        backgroundColor: "#D70F64"
                    }
                }}
            >
                <Tab.Screen name="Delivery" component={Delivery} />
                <Tab.Screen name="Shops" component={Shops} />
            </Tab.Navigator>
        </>
    );
}

export default App;