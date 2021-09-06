
import { Link, useParams } from "react-router-dom";
import { useEffect, useState, } from "react";
import { SeatsList, H1, Seat, SeatSub, Sub, NameInput, CpfInput, MoviePrview, Movie, Name, Reserve, CPF, NameVal } from './SeatsStyle'
import axios from "axios";

export default function Seats({ order, setOrder, setBackButton }) {
    const { idSessao } = useParams();
    const [seats, setSeats] = useState({ day: {}, movie: {}, seats: [] });
    const [choosenSeats, setChoosenSeats] = useState([])
    const [idSeats, setIdSeats] = useState([])
    const [color, setColor] = useState("");
    const [cpfInput, setCpfInput] = useState("");
    const [nameInput, setNameInput] = useState("");
    const [rota, setRota] = useState({ id: `/assentos/${idSessao}`});
    const [cpfVal, setCpfVal] = useState(false);
    const [nameVal, setNameVal] = useState(false);
    useEffect(() => {
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/` + idSessao + `/seats`);
        promise.then(response => {
            setSeats({ ...response.data })
            setOrder({ ...order, date: response.data.day.weekday, hour: response.data.name })
            setBackButton(idSessao);
        })
    }, []);

    function chooseSeat(seat) {
        if (seat.isAvailable) {
            if (idSeats.includes(seat.id)) {
                setIdSeats(idSeats.filter(idSeat => seat.id !== idSeat));
                setChoosenSeats(choosenSeats.filter(chooseSeat => seat.name !== chooseSeat));
            } else {
                setChoosenSeats([...choosenSeats, seat.name]);
                setIdSeats([...idSeats, seat.id])
            }
        }
    }

    function nameValidation(e) {
        setNameInput(e.target.value);
        console.log(e.target.value)
        const nameRegex = /[A-z][a-z]* [A-z][a-z]*/
        console.log(nameRegex.test(e.target.value))
        if (((nameRegex.test(e.target.value)) === false)) {
            setColor("#ff0000")
        } else {
            setOrder({ ...order, buyerName: e.target.value });
            setNameVal(true)
            setColor("#00000o")
        }
    }

    function cpfValidation(e) {
        setCpfInput(e.target.value)
        const cpfRegex = /[0-9]{3}\.{1}[0-9]{3}\.{1}[0-9]{3}\-{1}[0-9]{2}/
        if ((cpfRegex.test(e.target.value)) === false || e.target.value.length > 14) {

            setColor("#ff0000");
        } else {
            setOrder({ ...order, cpf: e.target.value })
            setColor("#000000");
            setCpfVal(true);
        }

    }

    function closeOrder() {
        setOrder({ ...order, seats: [...choosenSeats] });
        const sendOrder = {
            ids: [...idSeats],
            name: order.buyerName,
            cpf: order.cpf
        };
        if (sendOrder.name === '' || sendOrder.cpf === '' || cpfVal === false || nameVal === false || sendOrder.ids.length === 0) {
            alert("Dados inválidos");
            
            console.log(rota.id);
        } else {
            axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/seats/book-many', sendOrder);
            setRota({ id: '/sucesso' });

        }
        
        
    }
    return (
        <>
            <H1>Selecione o(s) assento(s)</H1>
            <SeatsList>
                {seats.seats.map(seat => <Seat backgroundColor={seat.isAvailable ? ((choosenSeats.includes(seat.name)) ? "#8DD7CF" : "#C3CFD9") : "#FBE192"} onClick={() => chooseSeat(seat)} key={seat.id}>{seat.name}</Seat>)}
            </SeatsList>
            <SeatSub>
                <Sub>
                    <Seat backgroundColor="#8DD7CF"></Seat>
                    Selecionado
                </Sub>
                <Sub>
                    <Seat backgroundColor="#C3CFD9"></Seat>
                    Disponível
                </Sub>
                <Sub>
                    <Seat backgroundColor="#FBE192"></Seat>
                    Indisponível
                </Sub>
            </SeatSub>
            <NameInput>
                Nome do comprador:
                <NameVal type="text" placeholder="Digite seu nome..." value={nameInput} onChange={(e) => nameValidation(e)} colorletter={color} ></NameVal>
            </NameInput>
            <CpfInput>
                CPF do comprador:
                <CPF type="text" placeholder="Digite seu CPF..." value={cpfInput} onChange={(e) => cpfValidation(e)} colorletter={color}></CPF>
            </CpfInput>

            <Reserve>
                <Link to={rota.id}>
                    <button onClick={() => closeOrder()}>Reservar assentos</button>
                </Link>
            </Reserve>

            <MoviePrview>
                <Movie>
                    <img src={seats.movie.posterURL} alt="" />
                </Movie>
                <Name>{seats.movie.title} <br /> {seats.day.weekday}- {seats.day.date} </Name>
            </MoviePrview>
        </>
    );
}

