import { Navigation } from 'react-native-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

const startTabs = () => {
    Promise.all([
        Icon.getImageSource('md-map', 30), // proses asyncronus 
        Icon.getImageSource('ios-share-alt', 30)
    ]).then(sources => {
        Navigation.startTabBasedApp({ // Isinya array yang mempunyai beberapa objek
            tabs: [
                {
                    screen: 'jc8reactnative.FindPlaceScreen', // screen harus sudah di daftarkan di App
                    label: 'Find Place', // tulisan yang dia atas screen
                    title: 'Find Place', 
                    icon: sources[0] // biar keluar gambar
                },
                {
                    screen: 'jc8reactnative.SharePlaceScreen', // screen harus sudah di daftarkan di App
                    label: 'Share Place', // tulisan yang dia atas screen
                    title: 'Share Place',
                    icon: sources[1] // biar keluar gambar
                },
            ]
        })
    })

    
    
}

export default startTabs