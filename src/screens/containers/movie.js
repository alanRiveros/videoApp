import React, {Component} from 'react'
import Player from '../../player/containers/player'
import Layout from '../components/movie'
import Header from '../../sections/components/header'
import Close from '../../sections/components/close'
import { connect } from 'react-redux' 

class Movie extends Component {
  closeVideo = () => {
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: null
      }
    })
  }
  render() {
    return (
      <Layout>
        <Header>
          <Close 
            onPress={this.closeVideo}
          />
        </Header>
        <Player />
      </Layout>
    )
  }
}

export default connect(null)(Movie)