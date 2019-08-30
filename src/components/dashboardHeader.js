import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import { menu, avatar, downArrow, uaeFlag } from "../assets/images";
import LinearGradient from 'react-native-linear-gradient';

class DashboardHeader extends Component {
    render() {
        return (
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={['#13CC92', '#16AF76']} style={styles.linearGradient}>
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <View style={styles.iconWrapper}>
                        <Image source={menu} style={styles.menuImage} />
                    </View>
                    <View style={styles.iconWrapper}>
                        <View style={styles.countryWrapper}>
                            <View style={styles.flag}>
                                <Image resizeMode={'contain'} source={uaeFlag} style={styles.flagImage} />
                            </View>
                            <View style={styles.downArrow}>
                                <Image resizeMode={'contain'} source={downArrow} style={styles.downImage} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.iconWrapper}>
                        <Image source={avatar} style={styles.avatarImage} />
                    </View>
                </View>
            </View>
            </LinearGradient>
        );
    }
}
export default DashboardHeader;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    wrapper: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    menuImage: {
        height: 30,
        width: 30
    },
    avatarImage: {
        height: 50,
        width: 50
    },
    flagImage:{
        height: 30,
        width: 30
    },
    downImage: {
        height: 30,
        width: 20,
        top:-3
    },
    iconWrapper: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    countryWrapper: {
        flexDirection: 'row'
    },
    flag: {
        width: 50,
        alignItems: 'flex-end',
        paddingRight: 5
    },
    downArrow: {
        // backgroundColor: 'red'
    },
    linearGradient: {
        flex: 1
    },
});