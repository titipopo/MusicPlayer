import React, { useEffect, useState, useRef } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    SafeAreaView,
    Image,
    FlatList,
    Animated,
} from 'react-native';
// import Slider from '@react-native-community/slider';
import songs from './data';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

const MusicPlayer = () => {
    //const [songIndex, setSongIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        scrollX.addListener(({ value }) => {
            const index = Math.round(value / width);
            //setSongIndex(index);
            //console.log(value);
        });
    }, [])
    const renderSongs = ({ item, index }) => {
        return (
            <Animated.View style={styles.mainImageWrapper}>
                < View style={[styles.imageWrapper, styles.elevation]} >
                    <Image
                        source={item.artwork}
                        style={styles.musicImage}></Image>
                </View >
                {/* song content */}
                <View>
                    <Text style={[styles.songContent, styles.songTitle]}>{item.title}</Text>
                    <Text style={[styles.songContent, styles.songArtist]}>{item.artist}</Text>
                </View>
            </Animated.View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mainContainer}>
                {/* image */}
                <Animated.FlatList
                    renderItem={renderSongs}
                    data={songs}
                    keyExtractor={item => item.id}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [
                            {
                                nativeEvent: {
                                    contentOffset: { x: scrollX },
                                }
                            }
                        ],
                        { useNativeDriver: true }
                    )}>
                </Animated.FlatList>



                {/* slider */}
                <View>
                    {/* <Slider
                        style={styles.sliderProgress}
                        value={0}
                        minimumValue={0}
                        maximumValue={100}
                        thumbTintColor='#FFD369'
                        minimumTrackTintColor='#FFD369'
                        maximumTrackTintColor='#fff'
                        onSlidingComplete={() => { }}
                    /> */}
                    {/* music progress durations */}
                    <View style={styles.musicDuration}>
                        <Text style={styles.musicDurationText}>00:00</Text>
                        <Text style={styles.musicDurationText}>00:00</Text>
                    </View>
                </View>

                {/* music controls */}
                <View style={styles.musicControlsContainer}>
                    <TouchableOpacity onPress={() => { }}>
                        <Ionicons name={'play-back-outline'} size={25} color={'darkgray'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <Ionicons name={'pause-outline'} size={25} color={'darkgray'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <Ionicons name={'play-forward-outline'} size={25} color={'darkgray'} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.bottonContainer}>
                <View style={styles.bottonIconWrapper}>
                    <TouchableOpacity onPress={() => { }}>
                    <Ionicons name={'heart-outline'} size={25} color={'darkgray'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                    <Ionicons name={'add-outline'} size={25} color={'darkgray'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                    <Ionicons name={'share-outline'} size={25} color={'darkgray'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                    <Ionicons name={'menu-outline'} size={25} color={'darkgray'} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default MusicPlayer;

const styles = StyleSheet.create({
    txtWhite: {
        color: 'white',
    },
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottonContainer: {
        width: width,
        alignItems: 'center',
        paddingVertical: 20,
        borderTopColor: '#393E46',
        borderWidth: 1,
    },
    bottonIconWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
    mainImageWrapper: {
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageWrapper: {
        width: 300,
        height: 340,
        marginBottom: 25,
    },
    musicImage: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
    },
    elevation: {
        elevation: 5,
        shadowColor: '#ccc',
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
    },
    songContent: {
        textAlign: 'center',
        color: '#eee',
    },
    songTitle: {
        fontSize: 18,
        fontWeight: '600',
    },
    songArtist: {
        fontSize: 16,
        fontWeight: '300',
    },
    sliderProgress: {
        width: 350,
        height: 40,
        marginTop: 25,
        flexDirection: 'row',
    },
    musicDuration: {
        width: 340,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    musicDurationText: {
        color: '#fff',
        fontWeight: '500',
    },
    musicControlsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '60%',
        marginTop: 15,
    },
});
