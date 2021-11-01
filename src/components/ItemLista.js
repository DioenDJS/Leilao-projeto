import React from 'react';

const ItemLista = (props) => {
    return(
        <div className="card" key={props.id}>
            <img className="card-img-top" src={props.foto} alt="Obra de Arte" />
            <div className="card-body">
                <h4>{props.titule}</h4>
                <p>Autor:{props.autor}</p>
                <p>Lance Mínimo: {props.minimo.toLocaleString("pt-br",{style: "currency", currency: "BRL"})}</p>
                <span className="btn btn-block btn-info">
                    Ver Detalhes
                </span>    
            </div>
        </div>
    );
}

export default ItemLista;