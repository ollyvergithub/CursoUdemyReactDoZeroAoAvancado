import React, {useCallback, useState} from "react";
import {FaGithub, FaPlus} from 'react-icons/fa'
import Api from "../../services/api";

export default function Main() {

    const [newRepo, setNewRepo] = useState('');
    const [repositorios, setRepositorios] = useState([]);

    const handleChange = (e) => {
        setNewRepo(e.target.value)
    };

    const handleSubmit = useCallback( (e)=> {
        e.preventDefault();

        async function submit() {
            console.log("Ollyver ", newRepo)
            const response = await Api.get(`repos/${newRepo}`);

            const data = {
                name: response.data.full_name,
            };

            setRepositorios([...repositorios, data]);
            setNewRepo('')
        }

        // Como se fosse o componentWillUnmount - Quando desmonta o componente
        submit();

    }, [repositorios, newRepo])

    /*async function handleSubmit(e) {
        e.preventDefault();
        console.log("Ollyver ", newRepo)

        const response = await Api.get(`repos/${newRepo}`);

        const data = {
            name: response.data.full_name,
        };

        setRepositorios([...repositorios, data])
        setNewRepo('')

    }*/


    return (
        <div className="container">
            <h1><FaGithub size={32}/> Meus Repositorios</h1>

            <form onSubmit={handleSubmit}>
                <div className="form-row align-items-center">
                    <div className="col-12 col-md-6">
                        <label htmlFor="add_repos">Adicionar Repositórios</label>
                        <input onChange={handleChange} value={newRepo} type="text" className="form-control mb-2"
                               id="add_repos"/>
                    </div>

                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary mt-4"><FaPlus/></button>
                    </div>
                </div>
            </form>

        </div>
    )

}