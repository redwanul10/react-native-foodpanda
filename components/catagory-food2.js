
import React, { useReducer, useMemo, createContext, useContext, useCallback, useState, useRef, useEffect } from 'react';
import { FlatList, Easing, ScrollView, TouchableWithoutFeedback, StatusBar, View, StyleSheet, Text, Animated } from 'react-native'
import FoodCard from './food-card';
import { DataContext } from '../context-provider'
import { useIsFocused } from '@react-navigation/native'
import CartStatu from './cart-status'
import ScrollSpy from './scroll-spy';


// const ListContext = React.createContext("ListContext")

// const ItemList = () => {

//     const [cart, setCart] = useState([])
//     // const cartList = useRef([])
//     const [list, setList] = useState([
//         {
//             name: "redwan",
//             online: false,
//             incart: false,
//             quantity: 0,
//             id: 1
//         },
//         {
//             name: "redwa2",
//             online: false,
//             incart: false,
//             quantity: 0,
//             id: 2
//         },
//         {
//             name: "redwa3",
//             online: false,
//             incart: false,
//             quantity: 0,
//             id: 3
//         },
//         {
//             name: "redwa4",
//             online: false,
//             incart: false,
//             quantity: 0,
//             id: 4
//         },
//         {
//             name: "redwa5",
//             online: false,
//             incart: false,
//             quantity: 0,
//             id: 5
//         },
//     ])

//     const edit = (i, item) => {

//         const index = list.findIndex(item => item.id === i)
//         // alert(list[index].name)
//         const online = list[index].online
//         list[index].online = !online
//         list[index].incart = true
//         const quantity = list[index].quantity
//         list[index].quantity += 1

//         const isAlreadyInCart = cart.findIndex(item => item.id === i)
//         // if (isAlreadyInCart === -1) {
//         //     // const product = list[index]
//         //     item.quantity = 1
//         //     cart.push({ ...item })
//         //     // const newCart = cart.splice(0)
//         //     setCart([...newCart])
//         // } else {
//         //     // const product = 
//         //     cart[isAlreadyInCart].quantity += 1

//         //     const newCart = cart.splice(0)
//         //     setCart([...newCart])
//         //     // setCart([...newCart])
//         // }

//         setList([...list])
//     }

//     const add = item => {
//         // const quantity = item.qua
//         // item.quantity += 1
//         // setCart([{ ...item }, ...cart])
//         setCart(oldCards => {

//             const index = oldCards.findIndex(cartItem => cartItem.id === item.id)

//             if (index === -1) {
//                 // const product = list[index]
//                 item.quantity = 1

//                 // const newCart = cart.splice(0)
//                 setCart([{ ...item }, ...oldCards])
//             } else {
//                 // const product = 
//                 oldCards[index].quantity += 1

//                 // const newCart = cart.splice(0)
//                 setCart([...oldCards])
//                 // setCart([...newCart])
//             }


//             const newCards = [{ ...item }, ...oldCards];
//             return newCards;
//         })
//         // cartList.current = [{ ...item }, ...cart]
//     }
//     const findCartDetails = id => cart.find(CartItem => CartItem.id === id)

//     return (
//         <>
//             <ListContext.Provider value={{ setCart, cart }}>
//                 <Text>{JSON.stringify(cart)}</Text>
//                 {list.map((item, i) => {
//                     const CART = findCartDetails(item.id) || {}
//                     return (
//                         <Item
//                             itemQuantity={CART.quantity || 0}
//                             add={() => add(item)}
//                             quantity={item.quantity}
//                             cart={cart}
//                             item={item}
//                             online={item.online}
//                             edit={() => edit(item.id, item)}
//                         />
//                     )
//                 })}
//             </ListContext.Provider>
//         </>
//     )
// }

const ListContext = React.createContext("ListContext")

const ItemList = () => {

    const { foods, cart, addToCart,
        increaseQuantity,
        decreaseQuantity,
        deleteFromCart } = useContext(DataContext)

    const initialState = {
        cart: [],
        list: [
            {
                name: "redwan",
                online: false,
                incart: false,
                quantity: 0,
                id: 1
            },
            {
                name: "redwa2",
                online: false,
                incart: false,
                quantity: 0,
                id: 2
            },
            {
                name: "redwa3",
                online: false,
                incart: false,
                quantity: 0,
                id: 3
            },
            {
                name: "redwa4",
                online: false,
                incart: false,
                quantity: 0,
                id: 4
            },
            {
                name: "redwa5",
                online: false,
                incart: false,
                quantity: 0,
                id: 5
            },
        ]
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case "add_to_cart":
                const item = action.payload.item
                const index = state.cart.findIndex(cartItem => cartItem.id === item.id)

                if (index === -1) {
                    // const product = list[index]
                    item.quantity = 1

                    return {
                        ...state,
                        cart: [{ ...item }, ...state.cart]
                    }
                } else {
                    // const product = 
                    state.cart[index].quantity += 1

                    return { ...state }

                    console.log(state.cart[index])
                    return state
                }

                break;

            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const add = (item) => {
        dispatch({
            type: "add_to_cart",
            payload: { item }
        })
    }

    useEffect(() => {

    }, [])

    const findItemInCart = id => cart.find(CartItem => CartItem.id === id)

    return (
        <>
            <ScrollSpy
                tabs={foods}
                topHeaderStyle={{ paddingHorizontal: 15, backgroundColor: "white", elevation: 2 }}
                renderItem={food => {
                    const CART = findItemInCart(food.id) || {}
                    return (
                        <FoodCard
                            addToCart={addToCart}
                            increaseQuantity={increaseQuantity}
                            decreaseQuantity={decreaseQuantity}
                            deleteFromCart={deleteFromCart}
                            itemQuantity={CART.quantity || 0}
                            cart={cart}
                            food={food}
                            style={{ width: 156, marginBottom: 10 }}
                        />
                    )
                }}
            />

            {/* <ListContext.Provider value={{ state }}>
                <Text>{JSON.stringify(state.cart)}</Text>
                {state.list.map((item, i) => {
                    const CART = findCartDetails(item.id) || {}
                    return (
                        <Item
                            itemQuantity={CART.quantity || 0}
                            add={add}
                            // quantity={item.quantity}
                            cart={state.cart}
                            item={item}
                            online={item.online}
                        // edit={() => edit(item.id, item)}
                        />
                    )
                })}
            </ListContext.Provider> */}
        </>
    )
}

export default ItemList

// const Item = ({ item, edit, online, add, itemQuantity, quantity }) => {

//     console.log(itemQuantity)



//     // const { setCart, cart } = useContext(ListContext)


//     return useMemo(() => (

//         <TouchableWithoutFeedback onPress={edit}>
//             <View style={{ marginVertical: 20, justifyContent: "center", alignItems: "center" }}>
//                 <Text>{item.name} {itemQuantity ? itemQuantity : 0}</Text>

//                 <Text>{online ? "online" : ""}</Text>

//                 <TouchableWithoutFeedback onPress={add}>
//                     <Text style={{ paddingHorizontal: 5, backgroundColor: "red", color: "white" }}>ADD</Text>
//                 </TouchableWithoutFeedback>

//             </View>
//         </TouchableWithoutFeedback>


//     ), [quantity])


// }

const Item = React.memo(({ item, edit, online, add, itemQuantity }) => {
    console.log(item.name)

    // const { setCart, cart } = useContext(ListContext)




    const addItem = () => {
        add(item)
    }

    // const inCart = cart.find(CartItem => CartItem.id === item.id)
    return (
        <TouchableWithoutFeedback onPress={edit}>
            <View style={{ marginVertical: 20, justifyContent: "center", alignItems: "center" }}>
                <Text>{item.name} {itemQuantity ? itemQuantity : 0}</Text>

                <Text>{online ? "online" : ""}</Text>

                <TouchableWithoutFeedback onPress={addItem}>
                    <Text style={{ padding: 10, backgroundColor: "red", color: "white" }}>ADD</Text>
                </TouchableWithoutFeedback>

            </View>
        </TouchableWithoutFeedback>
    )
}, (next, prev) => {
    // console.log(next.itemQuantity, prev.itemQuantity)

    // const inCart = prev.cart.find(CartItem => CartItem.id === prev.item.id)
    // return inCart ? false : true
    return next.itemQuantity !== prev.itemQuantity ? false : true
})


// const FoodList = () => {


//     const { foods, cart, addToCart,
//         increaseQuantity,
//         decreaseQuantity,
//         deleteFromCart } = useContext(DataContext)

//     const value = useRef(new Animated.Value(0)).current;
//     const scrollRef = useRef("");
//     const tabScrollRef = useRef("");
//     const widthValue = useRef(new Animated.Value(0)).current;
//     const [activeTab, setActiveTab] = useState({})
//     const [tabs, setTabs] = useState([])

//     const [scrollBarScroll, setScrollBarScroll] = useState(true)



//     useEffect(() => {
//         setActiveTab(tabs[0])
//         StatusBar.setBackgroundColor("white")

//     }, [])

//     const isFocus = useIsFocused()
//     // if (!isFocus) return null


//     const viewableFunc = (items, changed) => {
//         console.log(items, changed)
//     }

//     const viewable = { viewAreaCoveragePercentThreshold: 50 }

//     const [refresh, setRefresh] = useState(false)
//     return (
//         <>

//             <TouchableWithoutFeedback onPress={() => setRefresh(!refresh)}>
//                 <Text style={{
//                     padding: 15,
//                     backgroundColor: "white"
//                 }}
//                 >REFRESH {refresh ? "true" : "false"}</Text>
//             </TouchableWithoutFeedback>

//             <FlatList
//                 style={{ flex: 1 }}
//                 initialNumToRender={1}
//                 maxToRenderPerBatch={1}
//                 windowSize={1.5}
//                 removeClippedSubviews={true}
//                 data={foods}
//                 // extraData={cart}
//                 keyExtractor={(catagory) => catagory.id}
//                 renderItem={({ item, index }) => (
//                     <View >
//                         <Text style={style.sectionTitle}>{item.catagory}</Text>
//                         {/* <View style={style.cardContainter}> */}
//                         <FlatList
//                             // extraData={cart}
//                             removeClippedSubviews={true}
//                             // horizontal={true}
//                             numColumns={2}
//                             contentContainerStyle={style.cardContainter}
//                             data={item.foodList}
//                             keyExtractor={(__, i) => i.toString()}
//                             renderItem={(singleFood) => {
//                                 const inCart = cart.find(item => item.id === singleFood.item.id) || {}
//                                 return <FoodCard
//                                     catagoryId={index}
//                                     index={singleFood.index}
//                                     addToCart={addToCart}
//                                     increaseQuantity={increaseQuantity}
//                                     decreaseQuantity={decreaseQuantity}
//                                     cart={cart}
//                                     food={singleFood.item}
//                                     {...inCart}
//                                     style={{ width: 156, marginBottom: 10 }}
//                                 />
//                             }}
//                         />
//                         {/* </View> */}
//                     </View>
//                 )}
//             />

//             <CartStatu />

//         </>
//     )
// }

// export default React.memo(FoodList);


// const style = StyleSheet.create({
//     indicator: {
//         // width: 0,
//         height: 3,
//         backgroundColor: "#D70F64"
//     },
//     tab: {
//         color: "grey",
//         fontWeight: "bold",
//         textTransform: "uppercase",
//         // backgroundColor: "red",
//         // flex: 1,
//         padding: 10,
//         marginRight: 10,
//         // width: 30,
//         overflow: "hidden",
//         // maxWidth: "100%"
//         // width: "auto"
//     },
//     row: {
//         display: "flex",
//         flexDirection: "row",

//     },
//     sectionContainer: {
//         paddingHorizontal: 15,
//         flex: 1,
//         backgroundColor: "white"
//     },
//     sectionTitle: {
//         fontSize: 25,
//         marginVertical: 20,
//         // marginTop: 10
//     },
//     cardContainter: {
//         // width: 150 * 5,
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "space-between",
//         flexWrap: "wrap"
//     }
// })


