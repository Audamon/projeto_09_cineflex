import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import {MovieList, Movie, H1} from './MoviesListStyle'

export default function MoviesList({ setBackButton}) {
    const [movies, setMovies] = useState([]);
    const {p} = useParams()
    useEffect(()=>{
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies")
        promise.then(response =>{
            setMovies([...response.data])
            console.log("p", p)
            setBackButton(p);
        })
    }, [])

    return (
        <>
            <H1>Selecione o filme</H1>
            <MovieList>

                {movies.map(movie => <Link to={`/sessoes/${movie.id}`}>
                                        
                                        <Movie key={movie.id}>
                                            <img src={movie.posterURL} alt="" />
                                        </Movie>
                                    </Link>)}
            </MovieList>
        </>
    );
}

