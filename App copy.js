/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native'

import Home from './src/screens/containers/home'
import Header from './src/sections/components/header'
import SuggestionList from './src/videos/containers/suggestion-list'
import API from './utils/api'
import CategoryList from './src/videos/containers/category-list.js'
import Player from './src/player/containers/player'
import { Provider } from 'react-redux'
import store from './store'

class App extends Component{
  state = {
    suggestionList : [],
    categoryList: []
  }
  async componentDidMount(){
    const movies = await API.getSuggestion(10);
    const categories = await API.getMovies();
    console.log(movies)
    console.log(categories)
    this.setState({
      suggestionList: movies,
      categoryList: categories
    })
  }
  render(){
    return(
      <Provider
        store={store}
      >
        <Home>
          <Header />
          <Player />
          <CategoryList 
            list={this.state.categoryList}
          />
          <SuggestionList 
            list={this.state.suggestionList}
          />
        </Home>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  
});

export default App;
