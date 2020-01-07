import React from "react";
import {FaGithub, FaPlus} from 'react-icons/fa'

export default function Main() {
    return (
        <div className="container">
            <h1><FaGithub size={32}/> Meus Repositorios</h1>

            <form>
                <div className="form-row align-items-center">
                    <div className="col-12 col-md-6">
                        <label htmlFor="add_repos">Adicionar Repositórios</label>
                        <input type="text" className="form-control mb-2" id="add_repos"/>
                    </div>

                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary mt-4"><FaPlus/></button>
                    </div>
                </div>
            </form>

        </div>
    )

}