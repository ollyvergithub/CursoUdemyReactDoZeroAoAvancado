import React, {useState, useEffect} from "react";
import Api from '../../services/api'

export default function Repositorio({match}) {

    console.log("Match Recebido de Main/index.js para Repositorio/index.js", match);

    const [repositorio, setRepositorio] = useState({});
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function load() {
            const nomeRepo = decodeURIComponent(match.params.repositorio);

            const [repositorioData, issuesData] = await Promise.all([
                Api.get(`/repos/${nomeRepo}`),
                Api.get(`/repos/${nomeRepo}/issues`, {
                    params: {
                        state: 'open',
                        per_page: 5,
                    }
                })
            ]);

            console.log("repositorioData.data: ", repositorioData.data);
            console.log("issuesData.data: ", issuesData.data);

            setRepositorio(repositorioData.data);
            setIssues(issuesData.data);

            setLoading(false);
        }

        load();

    }, [match.params.repositorio]);

    return (

        <div className="container">
            <h1>Pagina Repositorio</h1>
            <h2>{decodeURIComponent(match.params.repositorio)}</h2>

            {

                repositorio.length > 0 ? (

                    <ul className="list-group list-group-flush">
                        {repositorio.map((item, index)=>(
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-end">

                                <span>{item.name} </span>


                            </li>
                        ))}
                    </ul>

                ) : null
            }

        </div>
    )

}