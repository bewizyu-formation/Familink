import React from 'react';
import {
  AppRegistry,

} from 'react-native';
import NavigationHandler from './src/handler/navigationHandler';


export default function FamilinkTipunch() {
  return (
    <NavigationHandler />
  );
}

AppRegistry.registerComponent('FamilinkTipunch', () => FamilinkTipunch);
