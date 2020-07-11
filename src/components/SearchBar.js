import React from "react";

class SearchBar extends React.Component {
    state = { term: "" };

    onInputChange = (event) => {
        this.setState({term: event.target.value})
    };

    onformSubmit = (event) => {
        event.preventDefault();

        this.props.onformSubmit(this.state.term)
    }

    render() {
        return (
            <div>
                <div className="search-bar ui segment">
                    <form onSubmit={this.onformSubmit} className="ui form">
                        <div className="field">
                            <label>Search</label>
                            <input
                                type="text"
                                placeholder="Video search..."
                                value={this.state.term}
                                onChange={this.onInputChange}
                            />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SearchBar;
