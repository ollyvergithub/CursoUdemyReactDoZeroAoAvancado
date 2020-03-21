import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {removeReserve, updateAmountReserve} from "../../store/modules/reserve/actions";
import { MdDelete, MdAddCircle, MdRemoveCircle } from 'react-icons/md';
import './style.css';

export const Reservas = () => {

    const reserves = useSelector(state => state.reserve)
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeReserve(id))
    }

    const decrementAmount = (trip)=>{
        dispatch(updateAmountReserve(trip.id, trip.amount - 1))
    }

    const incrementAmount = (trip)=>{
        dispatch(updateAmountReserve(trip.id, trip.amount + 1))
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
                        <div id="amount">
                            <button type="button" onClick={()=> decrementAmount(reserve)}>
                                <MdRemoveCircle size={25} color="#191919" />
                            </button>
                            <input className="form-control" value={reserve.amount} type="text" readOnly={true}/>

                            <button type="button" onClick={()=>incrementAmount(reserve)}>
                                <MdAddCircle size={25} color="#191919" />
                            </button>
                        </div>

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