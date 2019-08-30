import React, { Component } from 'react';
import { Image } from 'react-native';
import { card,plus, bell, discount,search  } from '../assets/images';

import PrimeTabBar from './tabBar';

export default class CustomTabBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <PrimeTabBar
                isActive={this.props.isActive}
                tabHomeBtn={{
                    active: plus,
                    inactive:  plus ,
                    width: 24,
                    height: 24,
                    onPressButton: this._onHomeIconClick.bind(this),
                }}
                tabOneBtn={{
                    tittle:'NEAR BY',
                    active: search,
                    inactive: search ,
                    width: 24,
                    height: 24,
                    action: this._onPaymentIconClick.bind(this),
                }}
                tabTwoBtn={{
                    tittle:'MY COUPONS',
                    active: card,
                    inactive: card,
                    width: 24,
                    height: 24,
                    action: this._onGetPrescriptions.bind(this),
                }}
                tabThreeBtn={{
                    tittle:'PROMO CODES',
                    active: discount,
                    inactive: discount,
                    width: 24,
                    height: 24,
                    action: this._onGetAppointments.bind(this),
                }}
                tabFourBtn={{
                    tittle:'ACTIVITY',
                    active: bell,
                    inactive: bell,
                    width: 35,
                    height: 35,
                    action: this._onProfileIconClick.bind(this),
                }}
            />
        );
    }

    // Handle click buttons of tabbar
    _onHomeIconClick() {
        // this.props.navigation.navigate('MainServiceScreen');
    }

    _onPaymentIconClick() {
        // this.props.navigation.navigate('PaymentMethodsScreen');
    }

    _onGetPrescriptions() {
        // this.props.navigation.navigate('Prescriptions');
    }

    _onGetAppointments() {
        // this.props.navigation.navigate('Appointments');
    }

    _onProfileIconClick() {
        // this.props.navigation.navigate('UserProfileScreen');
    }
}
