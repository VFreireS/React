import './App.css'
import React from 'react'


import IndiretaPai from './components/comunicação/IndiretaPai'
import DiretaPai from './components/comunicação/DiretaPai'
import Usuarioinfo from './components/condicional/Usuarioinfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import TabelaProdutos from './components/repetição/TabelaProdutos'
import ListaAlunos from './components/repetição/ListaAlunos'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'


export default _ =>

    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">

            <Card titulo="#10 Comunicação Indireta" color="#8BAD39">
                <IndiretaPai></IndiretaPai>

            </Card>

            <Card titulo="#09 Comunicação Direta" color="#59323C">
                <DiretaPai></DiretaPai>

            </Card>

            <Card titulo="#08 - Renderização Condicional" color="#982395">
                <ParOuImpar numero={21}></ParOuImpar>
                <Usuarioinfo usuario={{ nome: 'Fernando' }} />


            </Card>

            <Card titulo="#07  Desafio Repetição" color="#3A9AD9">
                <TabelaProdutos></TabelaProdutos>

            </Card>

            <Card titulo="#06 Repetição" color="#FF4C65">
                <ListaAlunos></ListaAlunos>

            </Card>

            <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="Silva" >
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>

            </Card>


            <Card titulo="#04 Desafio Aleatório" color="#FA6900">
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo="#03 Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>

            <Card titulo="#02 Com Parâmetro" color="#E8B71A">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Pedro Silva"
                    nota={9.3} />
            </Card>

            <Card titulo="#01 Primeiro Componente" color="#588C73">
                <Primeiro></Primeiro>
            </Card>

        </div>

    </div >


