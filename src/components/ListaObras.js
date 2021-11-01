import React, {useState, useEffect} from 'react';
import { collection, getDocs } from 'firebase/firestore/lite';
import ItemLista from "./ItemLista";

import {db} from '../conectadb';

const ListaObras = () =>{
    const [obras, setObras] = useState([]);

    const getObras = async () =>{
        const obraCol = collection(db, 'obras');
        const obraSnapshot = await getDocs(obraCol);
        const obraList = obraSnapshot.docs.map(doc => {
            const id = doc.id;
            const dados = doc.data();

            return {id, ...dados};
        });

        console.log(obraList);
        setObras(obraList);
    }

    useEffect(() =>{
        getObras();
    },[])

    return(
        <div className="container mt-2">
            <div className="card-columns">
                {
                    obras.map(obra => (
                        <ItemLista 
                            id={obra.id}
                            titulo={obra.titulo}
                            minimo={obra.minimo}
                            foto={obra.foto}
                            autor={obra.autor}
                        />
                    ))
                }
            </div>
        </div>
    )

}
export default ListaObras;