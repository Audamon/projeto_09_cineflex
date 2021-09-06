import { Link } from "react-router-dom";
import {H1, Information, BackHome} from './SuccessStyle'

export default function Success({order, setOrder}) {
    function resetOrder(){
        setOrder({title:'',
                  date: '',
                  hour: '',
                  seats:[],
                  buyerName: '',
                  cpf: ''})
    }
    return (
        <>  
            <H1><strong>Pedido feito</strong> <br /> <strong>com sucesso!</strong></H1>
            <Information>
                <strong>Filme e sessão</strong>
                <br />
                {order.title}
                <br />
                {order.date} {order.hour}
            </Information>
            <Information>
                <strong>Ingressos</strong>
                {order.seats.map(seat =>  <div>Assento {seat}</div> )}
            </Information>
            <Information>
                <strong>Comprador</strong>
                <br />
                Nome: {order.buyerName}
                <br />
                CPF: {order.cpf}
            </Information>
            <BackHome>
                <Link to="/">
                    <button onClick={resetOrder}> Voltar para Home</button>
                </Link>
            </BackHome>
        </>
    );
}

