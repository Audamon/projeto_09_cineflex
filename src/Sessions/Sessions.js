import { Link, useParams } from "react-router-dom";
import { useEffect, useState, } from "react";
import {SessionsList, Date, Session, Hour, MoviePrview, Movie, Name, H1} from './SessionsStyle'
import axios from "axios";

export default function Sessions({order, setOrder, setBackButton}) {
    const { idFilme } = useParams();
    const [sessoes, setSessoes] = useState({ days: [] })
    useEffect(() => {

        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies/` + idFilme + `/showtimes`);
        promise.then((response => {

            setSessoes({ ...response.data })
            setBackButton(`/sessoes/${idFilme}`)
            setOrder({...order, title: response.data.title})
        }))
    }, [])

    return (
        <>
            <SessionsList>
                <H1>Selecione o horário</H1>
                {sessoes.days.map((sessao, index) => {
                    return (<>

                        <Date key={index}>{sessao.weekday} - {sessao.date}</Date>
                        <Session key={sessao.id}>
                            {sessao.showtimes.map(showtime => <Link to={`/assentos/${showtime.id}`} ><Hour key={showtime.id}>{showtime.name}</Hour></Link>)}
                        </Session>
                    </>
                    );
                })}
            </SessionsList>
            <MoviePrview>
                <Movie>
                    <img src={sessoes.posterURL} alt="" />
                </Movie>
                <Name>{sessoes.title} <br /></Name>
            </MoviePrview>
        </>
    );
}
