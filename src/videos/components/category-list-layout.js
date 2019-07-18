import React from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';

function CategoryListLayout(props) {
  return (
    <ImageBackground
      source={require('../../../assets/background.png')}
      style={styles.container}
    >
      <ScrollView style={ styles.container }>
        <Text style = { styles.title }> {props.title} </Text>
        {props.children}
      </ScrollView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 5
  },
  title: {
    color: '#4c4c4c',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  }
})

export default CategoryListLayout