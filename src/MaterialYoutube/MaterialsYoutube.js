import React, {Component} from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/SearchBar.js';
import {applyMiddleware, createStore} from 'redux';
import reducers from './reducers';
import {Provider} from 'react-redux';
import VideoList from './components/VideoList.js';
import commonMiddleware from './middleware/CommonMiddleware.js';

const API_KEY = 'AIzaSyB5BKTc69oBzFC65U2OsNuC0QCMsgTSx2I';

const createStoreWithMiddleware = applyMiddleware(commonMiddleware)(createStore);

export class MaterialsYoutube extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null,
        };
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0],
            });
        });
    }

    selectVideo(selectedVideo) {
        this.setState({selectedVideo});
    }

    render() {
        const videoSearch = _.debounce((term) => {
            this.videoSearch(term);
        }, 300);

        return (
            <Provider store={createStoreWithMiddleware(reducers)}>
                <div>
                    <SearchBar />
                    {/*<VideoDetail video={this.state.selectedVideo}/>*/}
                    <VideoList />
                    {/*videos={this.state.videos}*/}
                    {/*onVideoSelect={this.selectVideo.bind(this)}/>*/}
                </div>
            </Provider>
        );
    }
};

export default MaterialsYoutube;
