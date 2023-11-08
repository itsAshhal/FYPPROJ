import React, { Component, useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class TopContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      fullText: 'Hitec Universe',
      currentIndex: 0,
    };
  }

  componentDidMount() {
    this.animateText();
  }

  animateText = () => {
    const { fullText, currentIndex } = this.state;
    if (currentIndex < fullText.length) {
      this.setState(
        {
          text: fullText.slice(0, currentIndex + 1),
          currentIndex: currentIndex + 1,
        },
        () => {
          setTimeout(this.animateText, 100); // Adjust the duration as needed
        }
      );
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require('../../Images/hiteclogofinal.png')} style={styles.logo} />
          <Text style={{ fontSize: 23, fontFamily: 'Montserrat-Bold', color: 'white', marginLeft: 12 }}>
            {this.state.text}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0047AB',
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    borderBottomLeftRadius: 70,
  },
  logo: {
    width: 100,
    height: 100,
  },
});
