import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function MoviesList() {
    const [movies, setMovies] = useState([]);
    useEffect(()=>{
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies")
        promise.then(response =>{
            setMovies([...response.data])
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

const MovieList = styled.div` 
    margin: 3vh 0 5vh 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%; 
`

const Movie = styled.div`
    padding: 2px 2px 2px 2px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    width: 39vw;
    height: 24vh;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    margin-bottom: 10px;


    img{
        width: 92%;
        height: 92%;
    }
`

const H1 = styled.h1`
    margin-top: 7.5vh;
    display: inline-block;
    width: 100%;
    height: 8vh;
    text-align: center;
    line-height: 60px;
    font-size: 24px;
`