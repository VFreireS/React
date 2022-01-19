import React from 'react'
export default function ComParametro(props) {
    const notaInt = Math.ceil(props.nota)
    const status = notaInt >= 7 ? 'Aprovado' : 'Recuperação'
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>
                <strong>{props.aluno} </strong>
                tem nota
                <strong> {notaInt} </strong>
                e está
                <strong> {status}</strong>!
            </p>
        </div>
    )
}