import React from 'react';
import {createDrawerNavigator}from 'react-navigation-drawers'
import {AppTabNavigator}from './AppTabNavigator'
import CustomSideBarMenu from './CustomSideBarMenu'

export const AppDrawerNavigator = createDrawerNavigator({
    Home:{
        screen:AppTabNavigator
    },
},
{
    contentComponenet:CustomSideBarMenu
},
{
initialRouteName:'Home'

})