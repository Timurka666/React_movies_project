import React from 'react';
import {Movie} from './Movie';
import { IMovie } from '../types';

function Movies(props: any) {
    const {movies = []} = props;

    return <div className="movies">
        {movies.length ? movies.map((movie: IMovie) => {
           return <Movie key={movie.imdbID} {...movie} />
        }) : <h4>Nothing found</h4>
        }
    </div>
}
export {Movies}