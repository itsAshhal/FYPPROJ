import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window')
const height = width * 0.60;


const images = [

    'https://lh3.googleusercontent.com/p/AF1QipOR4dCtyw3cuc9ioSAK_ecSd1a72nGcJyCvGTty=s1600-w640',
    'https://i.ytimg.com/vi/pdzm_jDhG-g/maxresdefault.jpg',
    'https://d39tfzr0b34y81.cloudfront.net/media/uni_profile_img/HITEC_University_BG.jpg',
    'https://w0.peakpx.com/wallpaper/63/174/HD-wallpaper-noor-mosque-white-mosque-islam-noor-thumbnail.jpg',
    'https://www.croozi.com/upload/loc1024/Hitecuniversity1172016.jpg',

]


export default class ImageSlider extends React.Component {
    state = {
        active: 0
    }


    change = ({ nativeEvent }) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);

        if (slide !== this.state.active) {
            this.setState({ active: slide });
        }
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>

                <ScrollView
                    pagingEnabled horizontal style={{ width , height }}
                    onScroll={this.change}
                    showsHorizontalScrollIndicator={false}
                >
                    {
                        images.map((images, index) => (

                            <Image
                                key={index}
                                source={{ uri: images }}
                                style={{ width, height, resizeMode: 'cover' }}
                            >
                            </Image>

                        ))
                    }
                </ScrollView>
                <View style={styles.pagination}>
                    {
                        images.map((i, k) => (
                            <Text key={k} style={k == this.state.active ? styles.pagingactivetext : styles.pagingtext} >⬤</Text>
                        ))
                    }

                </View>


            </SafeAreaView>

        )
    }
}

const styles = StyleSheet.create({

    pagination: {

        flexDirection: 'row', 
        position: 'absolute', alignSelf: 'center', bottom: 0

    },

    pagingtext: {

        color: 'grey', fontSize: 13, margin: 1, marginLeft: 10,

    },
    pagingactivetext: {

        color: '#fff', fontSize: 13, margin: 1, marginLeft: 10,

    },

})

