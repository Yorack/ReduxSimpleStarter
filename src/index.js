import React, {Component} from 'react';
import _ from 'lodash';
import * as ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const API_KEY = 'AIzaSyB5BKTc69oBzFC65U2OsNuC0QCMsgTSx2I';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null,
        };

        this.videoSearch('surfboards');
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
            this.videoSearch(term)
        }, 300);

        return (
            <div>
                <SearchBar
                    onSearchTermChange={videoSearch}
                    apiKey={API_KEY} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    videos={this.state.videos}
                    onVideoSelect={this.selectVideo.bind(this)} />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));