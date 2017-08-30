import React, { Component } from 'react';
import { ScrollView, View, Image, Text, TouchableHighlight } from 'react-native';
import { styles, transparent } from '../styles/styles';
import { PHONEBOOKLIST_SCREEN_NAME } from '../PhoneBookListScreen';
import { HOME_SCREEN_NAME } from '../HomeScreen';
import { LOGIN_SCREEN_NAME } from '../LoginScreen';
import Storage from '../../services/Storage';

const logo = require('../../assets/logo.png');

export default class Menu extends Component {
  static navigationOptions = {
    title: 'Burger',
    headerLeft: null,
  };

  constructor(props) {
    super(props);
    this.navigate = this.props.navigation.navigate;
    this.navigateToHome = this.navigateToHome.bind(this);
    this.navigateToPhoneBookList = this.navigateToPhoneBookList.bind(this);
    this.navigateToLogin = this.navigateToLogin.bind(this);
  }

  navigateToHome() {
    this.navigate(HOME_SCREEN_NAME);
  }

  navigateToPhoneBookList() {
    this.navigate(PHONEBOOKLIST_SCREEN_NAME);
  }
  navigateToLogin() {
    this.navigate(LOGIN_SCREEN_NAME);
  }

  signOut() {
    Storage.setData('@Token:key', '');
    this.navigateToLogin();
  }

  render() {
    return (
      <ScrollView scrollsToTop={false} style={styles.menu}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={logo}
          />
          <Text style={styles.name}>Thibaut</Text>
        </View>
        <TouchableHighlight
          onPress={this.navigateToHome}
          underlayColor={transparent}
        >
          <View style={styles.modifyButton}>
            <Text style={styles.validateText}>Accueil</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.navigateToPhoneBookList}
          underlayColor={transparent}
        >
          <View style={styles.modifyButton}>
            <Text style={styles.validateText}>Contacts</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => this.signOut()}
          underlayColor={transparent}
        >
          <View style={styles.confirmationButton}>
            <Text style={styles.validateText}>Déconnexion</Text>
          </View>
        </TouchableHighlight>
      </ScrollView>
    );
  }
}
