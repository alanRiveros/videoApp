import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  StatusBar
} from 'react-native';
import { connect } from 'react-redux';

class Profile extends Component {
  componentDidMount() {
    console.log('did mount')
    this.focus = this.props.navigation.addListener('didFocus', () => {
      StatusBar.setBarStyle('light-content')
    })
  }
  componentWillUnmount () {
    this.focus.remove();
  }
  handleLogout = () => {
    this.props.dispatch({
      type: 'REMOVE_USER'
    })
    this.props.navigation.navigate('Loading')
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>{this.props.user.username}</Text>
        <Button
          title="Cerrar sesión"
          color="#67a52e"
          onPress={ this.handleLogout }
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Profile)