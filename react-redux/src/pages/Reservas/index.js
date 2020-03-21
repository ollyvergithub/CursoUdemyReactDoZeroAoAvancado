import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {removeReserve} from "../../store/modules/reserve/actions";
import { MdDelete } from 'react-icons/md';
import './style.css';

export const Reservas = () => {

    const reserves = useSelector(state => state.reserve)
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeReserve(id))
    }

    return (
            <div>
                <h1 className="title text-dark">Voce solicitou {reserves.length} reservas</h1>

                {reserves.map(reserve => (
                    <div className="reservas" key={reserve.id}>
                        <img
                            src={reserve.image}
                            alt={reserve.title}
                        />
                        <strong>{reserve.title}</strong>
                        <span>Quantidade: {reserve.amount}</span>
                        <button
                            type="button"
                            onClick={()=> handleRemove(reserve.id)}
                        >
                            <MdDelete size={20} color="#191919" />
                        </button>
                    </div>
                ))}

                {reserves.length > 0 && (
                    <footer>
                        <button type="button">Solicitar Reservas</button>
                    </footer>
                )}

            </div>

    )
}