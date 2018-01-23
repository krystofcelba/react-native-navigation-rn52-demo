import { Navigation } from 'react-native-navigation';

import First from './First';
import Second from './Second';

export const registerScreens = () => {
  Navigation.registerComponent('example.First', () => First);
  Navigation.registerComponent('example.Second', () => Second);
};
