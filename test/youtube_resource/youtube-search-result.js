import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, TextInput, View} from 'react-native';
// import Youtube from 'react-native-youtube';
import axios from 'axios';

const SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';
const APIKEY = 'AIzaSyCTFCMrMMpZxqDWdclN6DWt_xZpYWx9ax4';

class YoutubeVideo extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            search: '',
            results: [],
        };
    }
    handleSearchChange = (text) => {
        this.setState({search: text});
    }
    handleSearchSubmit = () => {
        axios
    .get(SEARCH_URL, {
        params:{
            key: APIKEY,
            part: 'snippet',
            p: this.state.search,
        },
    })
    .then(response => {
        // this.state.results = response.data.items;
        response.data.items.forEach(item => {
            console.log(item.snippet.title);
        });
    })
    .catch(error =>{
        console.log(error);
    });
    }
    render(){
        return(
            <SafeAreaView>
                <TextInput 
                style={styles.input}
                value={this.state.search}
                onChangeText={this.handleSearchChange}
                onSubmitEditing={this.handleSearchSubmit}
                />
                <FlatList
                data={this.state.results}
                renderItem={({item}) => (
                    <Youtube
                    videoIds={item.videoIds}
                    play
                    />
                )}
                keyExtractor={(item) => item.videoIds}
                />
            </SafeAreaView>
        );
    }
}

export default YoutubeVideo;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      width: 200,
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    }
  });