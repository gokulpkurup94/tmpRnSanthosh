import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import { rightArrow,card } from "../assets/images";
import LinearGradient from 'react-native-linear-gradient';

class DashboardProfile extends Component {
    render() {
        return (
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={['#16AF76', '#17AF52']} style={styles.linearGradient}>
                <View style={styles.container}>
                    <View style={styles.wrapper}>
                        <View style={styles.iconWrapper}>
                            <View style={styles.whiteCircle}>
                                <Text style={styles.chipText}>10</Text>
                                <Text style={styles.chipText}>Chips</Text>
                            </View>
                        </View>
                        <View style={styles.middleContainer}>
                            <Text style={styles.nameText}>Hi User</Text>
                            <Text style={styles.dealText}>Unlock 2 Deals</Text>
                        </View>
                        <View style={styles.iconWrapper}>
                            <Image source={rightArrow} style={styles.rightArrow} />
                        </View>
                    </View>
                    <View style={styles.footer}>
                        <View style={styles.iconWrapper}>
                            <View style={styles.whiteCurvedRectangle}>
                                <Text style={styles.chipText}>Register Now</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        );
    }
}
export default DashboardProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around'
    },
    wrapper: {
        paddingHorizontal: 50,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconWrapper: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    linearGradient: {
        flex: 1
    },
    whiteCircle: {
        height: 60,
        width: 60,
        borderRadius: 60,
        borderColor: '#fff',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rightArrow: {
        height: 30,
        width: 30
    },
    middleContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        flex: 1,
        paddingLeft: 25
    },
    chipText: {
        fontSize: 12,
        color: '#fff'
    },
    nameText: {
        fontSize: 16,
        color: '#fff'
    },
    dealText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    },
    whiteCurvedRectangle: {
        height: 40,
        borderRadius: 40,
        borderColor: '#fff',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40
    },
    footer: {
        paddingVertical: 10

    }
});