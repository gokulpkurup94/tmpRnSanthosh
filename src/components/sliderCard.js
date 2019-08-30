import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    StyleSheet
} from "react-native";
import { screenWidth } from "../utilities/env";

class SliderCard extends Component {
    render() {
        const { uri, name } = this.props
        return (
            <View style={styles.container}>
                <View>
                    <Image resizeMode='cover' style={styles.image} source={{ uri: uri }} />
                    <View style={styles.name}>
                        <Text style={styles.nameText}>{name}</Text>
                    </View>
                </View>
                <View style={styles.footer}>
                    <View style={styles.imageCircle}>
                        <Image resizeMode='cover' style={styles.imageContent} source={{ uri: uri }} />
                    </View>
                    <View style={styles.whiteCurvedRectangle}>
                        <Text style={styles.chipText}>JOIN OUR LOYALITY PROGRAM</Text>
                    </View>

                </View>
            </View>
        );
    }
}
export default SliderCard;

const styles = StyleSheet.create({
    container: {
        width: screenWidth - 80,
        height: 230,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
        alignItems:'center',
        padding:5,
        paddingHorizontal:20,
        backgroundColor:'#fff'
    },
    image: {
        width: screenWidth - 94,
        height: 150
    },
    name: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 30,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center'
    },
    nameText: {
        paddingLeft: 10,
        fontSize: 14,
        color: '#fff'
    },
    footer: {
        flex:1,
        width: screenWidth - 94,
        paddingHorizontal:30,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    imageCircle: {
        overflow:'hidden',
        height: 40,
        width:40,
        borderRadius: 40,
        borderColor: '#000',
        borderWidth: 1,
        justifyContent: 'center',
    },
    whiteCurvedRectangle: {
        height: 20,
        borderRadius: 40,
        borderColor: '#000',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    chipText: {
        fontSize: 10,
        color: '#000'
    },
    imageContent:{
        flex:1
    }
});