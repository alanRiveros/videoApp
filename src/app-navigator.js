import React from 'react'
import { 
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  createDrawerNavigator
} from 'react-navigation'
import Home from './screens/containers/home'
import Movie from './screens/containers/movie'
import Category from './screens/containers/category'
import Header from './sections/components/header'
import About from './screens/containers/about'
import Profile from './screens/containers/profile'
import Lucky from './screens/containers/lucky'
import Icon from './sections/components/icon'
import Loading from './screens/containers/loading'
import Login from './screens/containers/login'
import DrawerComponent from './sections/components/drawer'

const Main = createStackNavigator(
  {
    Home: Home,
    Category: Category
  },
  {
    navigationOptions: {
      header: Header
    },
    cardStyle: {
      backgroundColor: 'white'
    }
  }
)

const tabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Main,
      navigationOptions: {
        title: 'Inicio',
        tabBarIcon: <Icon icon="🏡"/>
      }
    },
    About: {
      screen: About
    },
    Lucky: {
      screen: Lucky
    },
    Profile: {
      screen: Profile
    }
  },
  {
    tabBarOptions: {
      activeTintColor: 'white',
      activeBackgroundColor: '#65a721'
    }
  }
)

const withModal = createStackNavigator(
  {
    Main: {
      screen: tabNavigator
    },
    Movie: Movie,
  },
  {
    mode: 'modal',
    headerMode: 'none',
    cardStyle: {
      backgroundColor: 'white'
    },
    navigationOptions: {
      gesturesEnabled: true
    }
  }
)

const drawerNavigator = createDrawerNavigator(
  {
    Main: {
      screen: withModal,
      navigationOptions: {
        title: 'Inicio',
        drawerIcon: <Icon icon="⚛" />
      }
    },
    Sobre: {
      screen: About
    },
    Suerte: {
      screen: Lucky
    }
  },
  {
    drawerWidth: 200,
    drawerBackgroundColor: '#f6f6f6',
    contentComponent: DrawerComponent,
    contentOptions: {
      activeBackgroundColor: '#7aba2f',
      activeTintColor: 'white',
      inactiveTintColor: '#828282',
      inactiveBackgroundColor: 'white',
      itemStyle: {
        borderBottomWidth: .5,
        borderBottomColor: 'rgba(0,0,0,.5)'
      },
      labelStyle: {
        marginHorizontal: 0
      },
      iconContainerStyle: {
        marginHorizontal: 5
      }
    }
  }
)

const switchNavigator = createSwitchNavigator(
  {
    App: drawerNavigator,
    Login: Login,
    Loading: Loading,
  },
  {
    initialRouteName: 'Loading'
  }
)



export default switchNavigator;