import React from "react";

export default function Repositorio({match}) {

   console.log(match)

    return (
        <div className="container">
            <h1>Pagina Repositorio</h1>
            <h2>{decodeURIComponent(match.params.repositorio)}</h2>
        </div>
    )

}