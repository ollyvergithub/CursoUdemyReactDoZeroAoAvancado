import React, {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {addReserve} from "../../store/modules/reserve/actions";
import api from "../../services/api";
import {MdFlightTakeoff} from "react-icons/md";


export const Home = () => {
    const dispatch = useDispatch()
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        async function loadApi() {
            const response = await api.get('trips')
            setTrips(response.data)
        }

        loadApi();
    }, [])

    const handleAdd = (trip) => {
        dispatch(addReserve(trip))
    }

    return (
        <>
                <div className="row row-cols-1 row-cols-md-3 mt-3">
                    {trips.map(trip => (
                        <div className="col mb-4" key={trip.id}>
                            <div className="card" >
                                <img src={trip.image} className="card-img-top" alt={trip.title}/>
                                <div className="card-body">
                                    <h5 className="card-title">{trip.title}</h5>

                                    <p><strong>Status:</strong>
                                        <span>{trip.status ? "Disponível" : "Indisponível"}</span></p>

                                    <button
                                        className="btn btn-primary"
                                        type="button"
                                        onClick={() => handleAdd(trip)}
                                    >
                                        <MdFlightTakeoff size={20} color="#fff"/> Solicitar Reserva
                                    </button>
                                </div>
                            </div>
                        </div>

                    ))}

                </div>

        </>
    )
}