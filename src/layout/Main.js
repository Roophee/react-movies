import React, {Component, useState, useEffect} from 'react'
import MovieList from '../components/MovieList'
import Preloader from '../components/Preloader'
import Search from '../components/Search'

const API_KEY = process.env.REACT_APP_API_KEY

const Main = function () {
    const [movies, setMovies] =  useState([]);
    const [loading, setLoading] =  useState(true);

    useEffect(
        () => (fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=road`)
            .then(response => response.json())
            .then(data => {setMovies(data.Search); setLoading(false)})
            .catch( err => {
                console.log(err);
               setLoading(false);
            })), []
    )

    const searchMovies = (str, type = 'all') => {
        setLoading(true);
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
        .then(response => response.json())
        .then(data => {setMovies(data.Search); setLoading(false)})
        .catch( err => {
            console.log(err);
            setLoading(false);
        })
    };

    return (
        <main className="container content">
            <Search searchMovies={searchMovies}/>
            {loading
                ? (<Preloader/>)
                : (<MovieList movies= {movies}/>)
            }
        </main>
    )
}
export default Main
