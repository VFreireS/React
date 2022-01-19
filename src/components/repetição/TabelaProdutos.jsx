import React from "react";
import './TabelaProdutos.css'
import produtos from "../../data/produtos";

export default (props) => {

    function getLinhas() {
        return produtos.map((x, i) => {
            return (
                <tr key={x.id}
                    className={i % 2 === 0 ? 'Par' : 'Impar'}>
                    <td>{x.id}</td>
                    <td>{x.nome}</td>
                    <td>R$ {x.preco.toFixed(2).replace('.', ',')}</td>
                </tr>
            )
        })
    }



    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhas()}

                </tbody>

            </table>
        </div>
    )
}
