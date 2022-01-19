import React from "react";
import alunos from "../../data/alunos";

export default (props) => {

    const AlunosLI = alunos.map((x) => {
        return (
            <li key={x.id}>
                {x.id}) {x.nome} -> {x.nota}
            </li>
        )
    })

    return (
        <div>
            <ul style={{ listStyle: "none" }}>
                {AlunosLI}
            </ul>
        </div>
    )
}