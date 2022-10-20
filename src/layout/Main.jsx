import React from "react";
import {Movies} from "../components/Movies_list";

class Main extends React.Component {
    state = {
        movies: []
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=bc223a58&s=matrix')
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search}));
    }

    render() {
        return <main className="content container">
            {
                this.state.movies.length ? (<Movies movies={this.state.movies} />) : <h5>Loading...</h5>
            }
        </main>

    }

}
export {Main}