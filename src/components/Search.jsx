import React from "react";

class Search extends React.Component {
    state = {
        search: ''
    }

    handleKey = (e) => {
        if (e.key === 'Enter') {
            this.props.searchMovies(this.state.search);
        }
    }

    render() {
        return <div className="row">
                <div className="col s12">
                    <div className="input-field">
                        <input 
                            placeholder="Search" 
                            type="search" 
                            className="validate" 
                            value={this.state.search} 
                            onChange={(e) => this.setState({search: e.target.value})}
                            onKeyDown={this.handleKey}
                        />
                        <button className="btn search-btn" onClick={() => this.props.searchMovies(this.state.search)}>Search</button>
                        <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
                    </div>
                </div>
            </div>
    }
}

export {Search}