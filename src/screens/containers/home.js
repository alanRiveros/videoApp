import React, { Component, Fragment } from 'react'

import API from '../../../utils/api'
import Header from '../../sections/components/header'
import SuggestionList from '../../videos/containers/suggestion-list'
import CategoryList from '../../videos/containers/category-list.js'
import Movie from '../../screens/containers/movie'
import Search from '../../sections/containers/search'

import { connect } from 'react-redux'


class Home extends Component {
  static navigationOptions = () => {
    return {
      header: Header,
      title: 'inicio'
    }
  }
  async componentDidMount(){
    const categoryList = await API.getMovies()
    this.props.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList
      }
    })
    const suggestionList = await API.getSuggestion(10)
    this.props.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList
      }
    })
    this.focus = this.props.navigation.addListener('didFocus', () => {
      StatusBar.setBarStyle('dark-content')
      StatusBar.setBackgroundColor('#0022c43')
    })
  }
  componentWillUnmount () {
    this.focus.remove();
  }
  render() {
    
    return(
        <Fragment>
          <Search />
          <CategoryList />
          <SuggestionList />
        </Fragment>
    )
  }
}

export default connect(null)(Home)