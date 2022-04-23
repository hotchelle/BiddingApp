import { View, Text } from 'react-native'
import React from 'react'
import Login from '../Login';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Bidding from '../Bidding';
import Home from '../HomePage';

// Creating the main navigator between screens
const gameNav = createStackNavigator({

    bid: {
        screen: Bidding,
        navigationOptions:
        {
            headerShown: false,
        }
    },
    homepage:{
        screen: Home,
        navigationOptions:
        {
            headerShown: false,
        }
    }
});
const authNav = createStackNavigator({

    login:{
        screen: Login,
        navigationOptions:
        {
            headerShown: false,
        }
    }

});


const stack = createSwitchNavigator(
    {
        authNav:
        {
            screen: authNav,
            navigationOptions:
            {
                headerShown: false,
            }
        },
        gameNavigator:
        {
            screen: gameNav,
        }

    }
);



const Router = createAppContainer(stack);

export default Router;

