import React, { useState, useRef } from 'react';
import { Easing, ScrollView, TouchableWithoutFeedback, StatusBar, View, StyleSheet, Text, Animated } from 'react-native'


const ScrollSpy = (props) => {

    const animScroll = useRef(new Animated.Value(0)).current
    const value = useRef(new Animated.Value(0)).current;
    const scrollRef = useRef("");
    const tabScrollRef = useRef("");
    const widthValue = useRef(new Animated.Value(0)).current;
    const [activeTab, setActiveTab] = useState({})
    const [tabs, setTabs] = useState([])

    const [scrollBarScroll, setScrollBarScroll] = useState(true)



    const handleTab = (tabName, layout) => {
        layout.name = tabName;
        layout.anim = false;
        layout.id = new Date().getTime()

        setTabs([...tabs, layout])
    }

    const handleTabContent = (name, layout) => {
        const index = tabs.findIndex(stab => stab.name === name)
        const allTab = tabs
        const tab = allTab[index]

        tab.y = layout.y
        tab.height = layout.height
        setTabs([...allTab])
    }

    const handleScroll = (name) => {
        const content = tabs.find(singleTab => singleTab.name === name)
        scrollRef.current.scrollTo({ y: content.y + 2 })
        setScrollBarScroll(false)
    }

    const handleOnScroll = e => {

        const scrollY = e.nativeEvent.contentOffset.y

        tabs.forEach((tab, i) => {

            if (scrollY > (tab.y + tab.height)) {

                const updatedTap = tabs
                updatedTap[i].anim = false
            }


            if (scrollY > tab.y && scrollY < (tab.y + tab.height)) {
                if (tab.anim) return

                const scrollTo = tabs[i - 1] ? tabs[i - 1].x - 10 : 0

                Animated.timing(value, {
                    toValue: tab.x,
                    duration: 200,
                    easing: Easing.linear,
                    useNativeDriver: true
                }).start(() => {
                    const updatedTap = tabs
                    updatedTap[i].anim = true

                    if (scrollBarScroll) setTimeout(() => tabScrollRef.current.scrollTo({ x: scrollTo }), 200)
                });

                Animated.timing(widthValue, {
                    toValue: tab.width,
                    duration: 100,
                    useNativeDriver: false
                }).start()
            }

            if (scrollY < tab.y) {

                if (tabs[i].anim) {
                    const updatedTap = tabs
                    updatedTap[i].anim = false
                }
            }
        })

    }

    return (
        <>
            <StatusBar backgroundColor={`rgb(186, 11, 86)`} />
            <Animated.View style={[style.topHeaderStyle, props.topHeaderStyle && props.topHeaderStyle]}>
                <ScrollView
                    ref={tabScrollRef}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >

                    <View>
                        <View style={[style.row]}>
                            {props.tabs && props.tabs.map((food, i) => (
                                <TouchableWithoutFeedback
                                    key={i}
                                    onPress={e => handleScroll(food.catagory)}
                                    onLayout={e => handleTab(food.catagory, e.nativeEvent.layout)}
                                >
                                    <Text style={[style.tab]} >{food.catagory}</Text>
                                </TouchableWithoutFeedback>
                            ))}
                        </View>

                        <Animated.View style={[{ translateX: value }]}>
                            <Animated.View style={[style.indicator, { width: widthValue }]}></Animated.View>
                        </Animated.View>
                    </View>
                </ScrollView>
            </Animated.View>



            <Animated.ScrollView
                style={[props.itemsScrollViewStyle || {}]}
                ref={scrollRef}
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled={true}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: props.ÄnimatedScrollValue || animScroll } } }],
                    { listener: handleOnScroll }
                )}
            >
                {props.renderAboveItems && props.renderAboveItems()}

                <View style={{ paddingHorizontal: 15, backgroundColor: "white" }}>
                    {props.tabs && props.tabs.map(food => (
                        <View
                            onLayout={e => handleTabContent(food.catagory, e.nativeEvent.layout)}
                        >
                            <Text style={style.sectionTitle}>{food.catagory}</Text>
                            <View style={props.itemsContainerStyle || {}}>
                                {food[props.itemListPropertyName].map(singleFood => {
                                    return props.renderItem && props.renderItem(singleFood)
                                })}
                            </View>
                        </View>
                    ))}
                </View>
            </Animated.ScrollView>

        </>
    )
}

export default React.memo(ScrollSpy);


const style = StyleSheet.create({
    topHeaderStyle: { paddingHorizontal: 15, backgroundColor: "white", elevation: 2 },
    indicator: {
        height: 3,
        backgroundColor: "#D70F64"
    },
    tab: {
        color: "grey",
        fontWeight: "bold",
        textTransform: "uppercase",
        padding: 10,
        marginRight: 10,
        overflow: "hidden",
    },
    row: {
        display: "flex",
        flexDirection: "row",

    },
    sectionContainer: {
        paddingHorizontal: 15,
        flex: 1,
        backgroundColor: "white"
    },
    sectionTitle: {
        fontSize: 25,
        marginVertical: 20,
    },

})