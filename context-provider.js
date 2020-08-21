import React, { useState, useEffect } from 'react';
import RESTAURANTS from './data/restaurants.js'
import SHOPS from './data/shops.js'
import FOODS from './data/foods.js'
import MENU from './data/menu.js'


export const DataContext = React.createContext("DataContext")

const ContextProvider = props => {

    // console.log(restaurants)
    const [restaurants, setRestaurants] = useState(RESTAURANTS)
    const [shops, setShops] = useState(SHOPS)
    const [foods, setFoods] = useState(FOODS)
    const [menu, setMenu] = useState(MENU)
    const [cart, setCart] = useState([])

    useEffect(() => {
        // console.log(JSON.stringify(menu))
    }, [])


    const getIndex = (arr, foodId) => arr.findIndex(item => item.id === foodId)

    const addToCart = (food) => {
        const index = cart.findIndex(item => item.id === food.id)
        if (index !== -1) return

        food.quantity = 1

        setCart(oldCart => {
            return [food, ...oldCart]
        })
    }

    const addItemToTheCart = (food) => {

        setCart(oldCart => {
            const index = getIndex(oldCart, food.id)
            if (index === -1) {
                food.quantity = 1
                return [food, ...oldCart]
            } else {
                increaseQuantity(food)
                return oldCart
            }
        })
    }

    const deleteFromCart = (foodId) => {
        setCart(oldCart => oldCart.filter(item => item.id !== foodId))
    }

    const increaseQuantity = food => {
        setCart(oldCart => {
            const index = getIndex(oldCart, food.id)

            if (index === -1) {
                addToCart(food)
                return oldCart
            }

            const cartItems = [...oldCart]
            cartItems[index].quantity += 1

            return [...cartItems]

        })
    }

    const decreaseQuantity = foodId => {
        setCart(oldCart => {
            const index = getIndex(oldCart, foodId)
            if (index === -1) return oldCart

            const cartItems = [...oldCart]
            cartItems[index].quantity -= 1
            return [...cartItems]
        })
    }

    const submitOrder = () => {
        if (cart.length === 0) return alert("Currently Cart is Emty")
        setCart(() => {
            return []
        })

        alert("Your Order is Completed")
    }

    const value = {
        restaurants,
        shops,
        foods,
        cart,
        addToCart,
        deleteFromCart,
        increaseQuantity,
        decreaseQuantity,
        addItemToTheCart,
        submitOrder,
        menu
    }

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )

}

export default ContextProvider;

