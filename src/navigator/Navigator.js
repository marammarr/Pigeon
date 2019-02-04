import {
    createSwitchNavigator,
    createStackNavigator,
    createAppContainer
    } from 'react-navigation'
import Home from '../content/Home'
import Login from '../content/Login'
import ListMaps from '../content/maps/ListMaps'

const AppStack = createStackNavigator(
    {
        Home: Home,
        ListMaps: {
            screen: ListMaps,
               
        }
    },
    {
        initialRouteName: 'ListMaps'
    }
)
const AuthStack = createStackNavigator({Login: Login})
const mainNavigator = createAppContainer(createSwitchNavigator(
    {
        //AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'App'//'AuthLoading',
    }
)) 

export default createAppContainer(AppStack)