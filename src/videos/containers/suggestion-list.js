import React, {Component} from 'react'; 
import {
  FlatList,
  Text,
  StyleSheet
} from 'react-native';
import Layout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import Separator from '../components/vertical-separator';
import Suggestion from '../components/suggestion';
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

function mapStateToProps(state) {
  return {
    list: state.videos.suggestionList
  }
}

class SuggestionList extends Component {
  keyExtractor = item => item.id.toString()
  renderEmpty = () => <Empty text="No hay sugerencias" />
  itemSeparator = () => <Separator />
  viewMovie = (item) => {
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: item
      }
    })
    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'Movie'
      })
    )
  }
  renderItem = ( {item} ) => {
    return(
      <Suggestion 
        {...item}
        onPress={ () => { this.viewMovie(item) } }
      />
    )
  }
  render() {
    return(
      <Layout
      title="Recomendado para ti"
      >
        <FlatList 
          style={styles.layoutContainer}
          keyExtractor={this.keyExtractor}
          data={ this.props.list }
          ListEmptyComponent= { this.renderEmpty }
          ItemSeparatorComponent = {this.itemSeparator}
          renderItem={ this.renderItem }
        />
      </Layout>
    )
  }
}

const styles = StyleSheet.create({
  layoutContainer: {
    flex: 1
  }
})

export default connect(mapStateToProps)(SuggestionList)