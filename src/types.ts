export interface IMovie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

export interface IState {
    movies: Array<IMovie>;
    loading: boolean;
}