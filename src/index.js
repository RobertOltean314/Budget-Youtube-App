import React, { Component } from "react";
import ReactDOM from 'react-dom';
import youtubeApiSearch from "youtube-api-search";
import SearchBar from './components/search_bar'
import VideoList from "./components/video_list";
import VideoDetails from "./components/video_details";

const API_KEY = 'AIzaSyDpIMCdr6TR2CK2KvnB6txkxbQxqmUzjdk';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = { videos: [] };

        youtubeApiSearch({ key: API_KEY, term: 'Gaming PC' }, (videos) => {
            this.setState({ videos });
            // this.setState({videos.videos});
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetails video={this.state.videos[0]} />
                <VideoList videos={this.state.videos} />
            </div >
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));