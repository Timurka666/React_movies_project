import React from "react";
import {Movies} from "../components/Movies_list";
import {Preloader} from '../components/Preloader';
import {Search} from '../components/Search';
import { IState } from "../types";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component<{}, IState> {
    state = {
        movies: [],
        loading: true
    }
    

    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
            .catch((err) => {
                console.error(err);
                this.setState({loading: false});
            });
    }

    searchMovies = (str: string, type = 'all') => {
        this.setState({loading: true});
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
            .catch((err) => {
                console.error(err);
                this.setState({loading: false});
            });
    }

    render() {
        return <main className="content container">
            <Search searchMovies={this.searchMovies} />
            {
                this.state.loading ? <Preloader /> : (<Movies movies={this.state.movies} />)
            }
        </main>

    }

}
export {Main}