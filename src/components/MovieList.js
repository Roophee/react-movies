import React from 'react'
import MovieItem from './MovieItem'

const MovieList = props => {
    const {movies=[]} = props;
    return (
        <div className="movies">
            {movies.length?
                movies.map((movie) => {
                return (
                    <MovieItem
                        key={movie.imdbID}
                        {...movie}
                    />
                )
            })
            : <h3>Nothing found</h3>}
        </div>
    )
}

export default MovieList
