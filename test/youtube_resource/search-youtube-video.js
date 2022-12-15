import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';
const APIKEY = 'AIzaSyCTFCMrMMpZxqDWdclN6DWt_xZpYWx9ax4';

const Search = () => {
    axios
    .get(SEARCH_URL, {
        params:{
            key: APIKEY,
            part: 'snippet',
            p: '',
        },
    })
    .then(response => {
        return VideoData = response.data.items;
    })
    .catch(error =>{
    
    });
}

export default Search;