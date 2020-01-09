import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom'
import {FaArrowLeft} from 'react-icons/fa'
import Api from '../../services/api'

export default function Repositorio({match}) {

    console.log("Match Recebido de Main/index.js para Repositorio/index.js", match);

    const [repositorio, setRepositorio] = useState({});
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1)

    // Paginação
    function handlePage(action) {
        setPage(action === 'back' ? page - 1 : page + 1)
    }

    useEffect(() => {

        async function loadIssue() {

            const nomeRepo = decodeURIComponent(match.params.repositorio);

            const response = await Api.get(`/repos/${nomeRepo}/issues`, {
                params: {
                    state: 'open',
                    page,
                    per_page: 5,
                }
            });

            setIssues(response.data)
        }

        loadIssue();


    }, [page])


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

    if (loading) {
        return (
            <div className='container'>
                <h1>Carregando</h1>
            </div>
        )
    }

    return (
        <>
            <div className="container">
                <h1>Pagina Repositorio</h1>
                <h2>{decodeURIComponent(match.params.repositorio)}</h2>
                <h3>Repositório escolhido</h3>
                <p>
                    <Link to="/">
                        <FaArrowLeft/>
                    </Link>
                </p>
                <p><img width="150" src={repositorio.owner.avatar_url} alt={repositorio.full_name}/></p>
                <p className="mt-3">{repositorio.description}</p>
            </div>

            <div className="container">
                <h3>Repositório issues</h3>

                <ul className="list-group list-group-flush">

                    {issues.map((issue, index) => (
                        <li key={String(issue.id)} className="list-group-item">
                            <img width="100" src={issue.user.avatar_url} alt={issue.user.login}/>

                            <p><a href={issue.html_url}>{issue.title}</a></p>

                            {
                                issue.labels.length > 0 ? (
                                    issue.labels.map((label) => (
                                        <span key={label.id}> <strong>Label: </strong>{label.name} </span>
                                    ))
                                ) : null
                            }
                            <p><strong>User Login: </strong> {issue.user.login}</p>
                        </li>
                    ))}
                </ul>

                <div className='row'>
                    <div className="col-12 col-6 mb-5 mt-5 d-flex justify-content-between">
                        <button
                            onClick={() => handlePage('back')}
                            disabled={page < 2}
                            className='btn btn-primary mr-1'
                            type="button">Voltar
                        </button>
                        <button onClick={() => handlePage('next')} className='btn btn-primary' type="button">Próximo
                        </button>
                    </div>
                </div>


            </div>
        </>
    )

}