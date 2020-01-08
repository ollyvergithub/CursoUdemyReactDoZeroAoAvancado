import React, {useState, useCallback, useEffect} from "react";
import {FaGithub, FaPlus, FaBars, FaTrash} from 'react-icons/fa'
import Api from "../../services/api";

export default function Main() {

    const [newRepo, setNewRepo] = useState('');
    const [repositorios, setRepositorios] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setNewRepo(e.target.value)
    };

    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        async function submit() {

            try {
                
                setLoading(true);

                const response = await Api.get(`repos/${newRepo}`);

                console.log(response.data)

                const data = {
                    id: response.data.id,
                    name: response.data.full_name,
                    url: response.data.url,
                };

                setRepositorios([...repositorios, data]);
                setNewRepo('')

            } catch (error) {

                console.log("Erro: ", error)

            } finally {
                setLoading(false)
            }

        }

        // Como se fosse o componentWillUnmount - Quando desmonta o componente
        submit();

    }, [repositorios, newRepo])

    const handleDelete = useCallback( (repoNome) => {
        console.log("handleDelete ", repoNome)
        const find = repositorios.filter(r => r.name !== repoNome)
        setRepositorios(find)
    }, [repositorios]);

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

    useEffect( ()=> {
        console.log("Simulando componentWillMount: ", repositorios)
    }, [repositorios])

    useEffect( ()=> {
        console.log("Simulando componentDidMount: ", repositorios)
    }, [])

    useEffect( ()=> {
        console.log("Simulando componentDidMount2: ", repositorios)
    })

    useEffect( ()=> {
        return console.log("Simulando componentWillUnmount: ", repositorios)
    }, [repositorios])

    return (
        <div className="container">
            <h1><FaGithub size={32}/> Meus Repositorios</h1>

            <form onSubmit={handleSubmit}>

                <div className="form-row align-items-center">
                    <div className="col-12 col-md-6">
                        <label htmlFor="add_repos">Adicionar Repositórios</label>
                        <input onChange={handleChange} value={newRepo} type="text" className="form-control mb-2" id="add_repos"/>
                    </div>

                    {
                        loading ? (
                            <div className="spinner-border text-primary" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        ) : (
                            <div className="col-auto">
                                <button type="submit" className={`mt-4 btn ${loading ? "btn-success" : "btn-primary"}`}><FaPlus/></button>
                            </div>
                        )
                    }
                </div>
            </form>

            <div className="row">
                <div className="col-12 col-md-6">

                    {
                        repositorios.length > 0 ? (

                            <ul className="list-group list-group-flush">
                                {repositorios.map((item, index)=>(
                                    <li key={index} className="list-group-item d-flex justify-content-between align-items-end">
                                        <button onClick={()=> handleDelete(item.name)} type={"button"} className="btn btn-danger"><FaTrash/></button>
                                        <span>{item.name} </span>
                                        <a target="_blank" href={item.url}><FaBars size={20}/></a>
                                    </li>
                                ))}
                            </ul>

                        ) : null
                    }

                </div>
            </div>



        </div>
    )

}