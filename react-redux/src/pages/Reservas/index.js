import React from "react";
import {useSelector} from "react-redux";
import { MdDelete } from 'react-icons/md';
import './style.css';

export const Reservas = () => {

    const reserves = useSelector(state => state.reserve)
    return (
            <div>
                <h1 className="title">Voce solicitou {reserves.length} reservas</h1>

                {reserves.map(reserve => (
                    <div className="reservas" key={reserve.id}>
                        <img
                            src={reserve.image}
                            alt={reserve.title}
                        />
                        <strong>{reserve.title}</strong>
                        <span>Quantidade: 2</span>
                        <button
                            type="button"
                            onClick={()=> {}}
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