import React, { Component } from "react";

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.value}
                    onChange={Event => this.setState({ term: Event.target.value })} />
            </div >
        );
    }
}

export default SearchBar;