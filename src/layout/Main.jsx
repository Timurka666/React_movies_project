import React from "react";
import {Movies} from "../components/Movies_list";
import {Preloader} from '../components/Preloader';
import {Search} from '../components/Search';

class Main extends React.Component {
    state = {
        movies: []
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=bc223a58&s=matrix')
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search}));
    }

    searchMovies = (str) => {
        fetch(`http://www.omdbapi.com/?apikey=bc223a58&s=${str}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search}));
    }

    render() {
        return <main className="content container">
            <Search searchMovies={this.searchMovies} />
            {
                this.state.movies.length ? (<Movies movies={this.state.movies} />) : <Preloader />
            }
        </main>

    }

}
export {Main}