import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';

registerScreens();

/* Navigation.startSingleScreenApp({
  screen: {
    screen: 'example.First',
    title: 'Welcome',
  },
}); */

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'One', // tab label as appears under the icon in iOS (optional)
      screen: 'example.First', // unique ID registered with Navigation.registerScreen
      icon: require('./images/one.png'), // local image asset for the tab icon unselected state (optional on iOS)
      title: 'Screen One', // title of the screen as appears in the nav bar (optional)
    },
    {
      label: 'Second', // tab label as appears under the icon in iOS (optional)
      screen: 'example.Second', // unique ID registered with Navigation.registerScreen
      icon: require('./images/one.png'), // local image asset for the tab icon unselected state (optional on iOS)
      title: 'Screen Two', // title of the screen as appears in the nav bar (optional)
    },
  ],
});
