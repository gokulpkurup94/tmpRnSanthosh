import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';

import { screenWidth } from '../utilities/env';

const TAB_HEIGHT = 50

export default class PrimeTabBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[this.props.outerContainerStyle, styles.outerContainer]}>
        <View style={[this.props.innerContainerStyle, styles.innerContainer]}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.btn}
            onPress={this.props.tabOneBtn.action}>
            {this.props.isActive == 'tabOne' &&
              <Image
              resizeMode='contain'
                source={this.props.tabOneBtn.active}
                style={{
                  flex:1,
                  width: this.props.tabOneBtn.width,
                  height: this.props.tabOneBtn.height
                }}
              />
            }
            {this.props.isActive != 'tabOne' &&
              <Image
              resizeMode='contain'
                source={this.props.tabOneBtn.inactive}
                style={{
                  flex:1,
                  width: this.props.tabOneBtn.width,
                  height: this.props.tabOneBtn.height
                }}
              />
            }
            <Text style={styles.text}>{this.props.tabOneBtn.tittle}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.btn}
            onPress={this.props.tabTwoBtn.action}>
            {this.props.isActive == 'tabTwo' &&
              <Image
              resizeMode='contain'
                source={this.props.tabTwoBtn.active}
                style={{
                  flex:1,
                  width: this.props.tabTwoBtn.width,
                  height: this.props.tabTwoBtn.height
                }}
              />
            }
            {this.props.isActive != 'tabTwo' &&
              <Image
              resizeMode='contain'
                source={this.props.tabTwoBtn.inactive}
                style={{
                  flex:1,
                  width: this.props.tabTwoBtn.width,
                  height: this.props.tabTwoBtn.height
                }}
              />
            }
            <Text style={styles.text}>{this.props.tabTwoBtn.tittle}</Text>
          </TouchableOpacity>
          <View style={styles.btn} />
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.btn}
            onPress={this.props.tabThreeBtn.action}>
            {this.props.isActive == 'tabThree' &&
              <Image
              resizeMode='contain'
                source={this.props.tabThreeBtn.active}
                style={{
                  flex:1,
                  width: this.props.tabThreeBtn.width,
                  height: this.props.tabThreeBtn.height
                }}
              />
            }
            {this.props.isActive != 'tabThree' &&
              <Image
              resizeMode='contain'
                source={this.props.tabThreeBtn.inactive}
                style={{
                  flex:1,
                  width: this.props.tabThreeBtn.width,
                  height: this.props.tabThreeBtn.height
                }}
              />
            }
            <Text style={styles.text}>{this.props.tabThreeBtn.tittle}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.btn}
            onPress={this.props.tabFourBtn.action}>
            {this.props.isActive == 'tabFour' &&
              <Image
              resizeMode='contain'
                source={this.props.tabFourBtn.active}
                style={{
                  flex:1,
                  width: this.props.tabFourBtn.width,
                  height: this.props.tabFourBtn.height
                }}
              />
            }
            {this.props.isActive != 'tabFour' &&
              <Image
              resizeMode='contain'
                source={this.props.tabFourBtn.inactive}
                style={{
                  flex:1,
                  width: this.props.tabFourBtn.width,
                  height: this.props.tabFourBtn.height
                }}
              />
            }
            <Text style={styles.text}>{this.props.tabFourBtn.tittle}</Text>
          </TouchableOpacity>
        </View>
        {
          <TouchableOpacity
            style={[styles.inactiveHomeBtn, { backgroundColor: this.props.isActive == 'tabHome' ? 'green' : 'rgb(243,246,254)'}]}
            onPress={this.props.tabHomeBtn.onPressButton}>
            {this.props.isActive == 'tabHome' &&
              <Image
                source={this.props.tabHomeBtn.active}
                style={{
                  width: this.props.tabHomeBtn.width,
                  height: this.props.tabHomeBtn.height
                }}
              />
            }
            {this.props.isActive != 'tabHome' &&
              <Image
                source={this.props.tabHomeBtn.inactive}
                style={{
                  width: this.props.tabHomeBtn.width,
                  height: this.props.tabHomeBtn.height
                }}
              />
            }
            {/* <Image
              source={this.props.tabHomeBtn.inactive}
              style={{
                width: this.props.tabHomeBtn.width,
                height: this.props.tabHomeBtn.height
              }}
            /> */}
          </TouchableOpacity>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    position: 'absolute',
    bottom: 0,
    width: screenWidth,
    height: TAB_HEIGHT + 50,
    backgroundColor: 'transparent',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: TAB_HEIGHT,
    marginTop: 50,
  },
  btn: {
    width: screenWidth / 5,
    height: TAB_HEIGHT,
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingVertical:3
  },
  activeHomeBtn: {
    position: 'absolute',
    left: (screenWidth - 70)/2,
    bottom: -3,
  },
  inactiveHomeBtn: {
    position: 'absolute',
    left: (screenWidth - 60)/2,
    bottom: 9,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    backgroundColor: 'rgb(243,246,254)',
    borderRadius: 200,
    borderWidth: 1,
    borderColor: 'rgba(229,229,229,0.8)',
    borderStyle: 'solid',
  },
  text:{
    fontSize:10,
    color:'#000'
  }
});

PrimeTabBar.propTypes = {
  outerContainerStyle: PropTypes.any,
  innerContainerStyle: PropTypes.any,
  tabHomeBtn: PropTypes.any,
  tabOneBtn: PropTypes.any,
  tabTwoBtn: PropTypes.any,
  tabThreeBtn: PropTypes.any,
  tabFourBtn: PropTypes.any,
};

PrimeTabBar.defaultProps = {
  innerContainerStyle: {
    backgroundColor: 'rgb(243,246,254)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(229,229,229,0.4)',
    borderStyle: 'solid',
  },
};
