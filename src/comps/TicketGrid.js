import React from 'react';
import { projectFirestore, timestamp } from '../firebase/config';
var num = 0;
const TicketGrid = () => {
    const upload = (tipo) =>{
        const collectionRef = projectFirestore.collection('ticket');
        const estado = 'En espera';
        const fecha = timestamp();
        if(tipo === 'caja'){
            num += 1;
            const tipo = "C";
            collectionRef.add({ estado, fecha, num, tipo });
        }
        else if(tipo === 'plataforma'){
            num += 1;
            const tipo = 'P'
            collectionRef.add({ estado, fecha, num, tipo });
        }
        else if(tipo === 'ventas'){
            num += 1;
            const tipo = 'V'
            collectionRef.add({ estado, fecha, num, tipo });
        }
    }
    return (
        <main>
            <form onSubmit={upload('plataforma')}>
                <button type="submit">Plataforma</button>
            </form>
        </main>
    )
}

export default TicketGrid
