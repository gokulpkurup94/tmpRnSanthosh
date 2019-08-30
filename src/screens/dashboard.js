import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView
} from "react-native";
import DashboardHeader from "../components/dashboardHeader";
import DashboardProfile from "../components/dashboardProfile";
import SliderCard from "../components/sliderCard";
import Carousel from 'react-native-snap-carousel';
import { screenWidth } from "../utilities/env";
import CustomTabBar from "../components/customTabBar";
class Dashboard extends Component {
    renderSlider = () => {
        return (
            <SliderCard
                name={'Raddison Blu Ajmen'}
                uri='https://static.wixstatic.com/media/056804_e25f4c8428e445eab8d0e41e8986f5be~mv2.jpg' />
        )
    }
    render() {
        return (
            <View>
                <ScrollView>

            <View style={styles.container}>
                <View style={styles.header}>
                    <DashboardHeader />
                </View>
                <View style={styles.profileCard}>
                    <DashboardProfile />
                </View>
                <View style={styles.slider}>
                    <View style={styles.headerWrapper}>
                        <Text style={styles.headerText}>TOP PICKS</Text>
                    </View>
                    <Carousel
                        data={[0, 1, 2]}
                        renderItem={this.renderSlider}
                        sliderWidth={screenWidth}
                        itemWidth={screenWidth - 80}
                        containerCustomStyle={styles.slider}
                        contentContainerCustomStyle={styles.sliderContentContainer}
                        // scrollInterpolator={scrollInterpolators[`scrollInterpolator${refNumber}`]}
                        // slideInterpolatedStyle={animatedStyles[`animatedStyles${refNumber}`]}
                        useScrollView={true}
                    />

                </View>
                <View>
                    <View style={styles.headerWrapper}>
                        <Text style={styles.headerText}>VALUE ADDED SERVICES</Text>
                    </View>
                    <View style={styles.imageWrapper}>
                        <Image style={styles.image}
                        source={{ uri:'https://i.ytimg.com/vi/N-B0OSc6YLk/maxresdefault.jpg'}} />
                    </View>
                </View>
            </View>
                </ScrollView>
                <CustomTabBar
                    isActive='tabHome'
                />
            </View>
        );
    }
}
export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingBottom:100
        // alignItems: 'center',
    },
    header: {
        height: 80,
        width: '100%',
        backgroundColor: 'blue'
    },
    profileCard: {
        height: 180,
        width: '100%',
    },
    slider: {
        height: 300
    },
    sliderContentContainer: {
        borderColor: '#fff',
        paddingVertical: 10
    },
    headerText: {
        fontSize: 16,
        color: "#cecece"
    },
    headerWrapper: {
        marginHorizontal: 30,
        marginVertical: 3,
        backgroundColor: '#0000'
    },
    image:{
        flex:1
    },
    imageWrapper:{
        width:screenWidth,
        height:200,
        backgroundColor: '#fff',
        paddingHorizontal: 40,
        paddingVertical:10
    }
});