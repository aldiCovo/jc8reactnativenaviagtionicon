// Semua komponen yang akan ditampilkan di navigation bar harus didaftarkan di App.js dulu (line 9)

import  { Navigation } from 'react-native-navigation'

import AuthScreen from './src/screens/Auth/Auth'
import SharePlaceScreen from './src/screens/SharePlace/SharePlace'
import FindPlaceScreen from './src/screens/FindPlace/FindPlace'

// Register Screens
Navigation.registerComponent("jc8reactnative.AuthScreen", () => AuthScreen) // ("nama screen, function yang kan d jlnkn di screen tersebut")
Navigation.registerComponent("jc8reactnative.SharePlaceScreen", () => SharePlaceScreen)
Navigation.registerComponent("jc8reactnative.FindPlaceScreen", () => FindPlaceScreen)


// Start Screens
Navigation.startSingleScreenApp({ // SingleScreen disini untuk halaman login 
  screen: {
    screen: 'jc8reactnative.AuthScreen',
    title: 'Login'  // Tulisan Login di ligin screen
  }
})