import React, {useState, useEffect} from 'react';
import { collection, getDocs } from 'firebase/firestore/lite';

import {db} from '../conectadb';

const ListaObras = () =>{
    const [obras, setObras] = useState([]);

    const getObras = async () =>{
        const obraCol = collection(db, 'obras');
        const obraSnapshot = await getDocs(obraCol);
        const obraList = obraSnapshot.docs.map(doc => doc.data());

        console.log(obraList);
        setObras(obraList);
        return obraList;
    }

    useEffect(() =>{
        getObras();
    },[])

    return(
        <h2>Lista de Obras </h2>
    )

}
export default ListaObras;