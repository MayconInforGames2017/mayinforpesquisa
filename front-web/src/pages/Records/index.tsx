import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';
import { RecordsResponse } from './types';

const BASE_URL = 'http://localhost:8080'

const Records = () => {
    const [ recordsResponse, setRecordsResponse ] = useState<RecordsResponse>();
    
    useEffect(() => {
        axios.get(`${BASE_URL}/records?linesPerPage=12`)
            .then(response => setRecordsResponse(response.data));
    }, []);

    return (
        <div className="page-container">
            <table className="records-table" cellPadding="0" cellSpacing="0">
                <thead>
                    <tr>
                        <th>INSTANTE</th>
                        <th>NOME</th>
                        <th>IDADE</th>
                        <th>PLATAFORMA</th>
                        <th>GÊNERO</th>
                        <th>TÍTULO DO GAME</th>            
                    </tr>
                </thead>
                <tbody>
                    {recordsResponse?.content.map(record => (
                        <tr key={record.id}>
                            <td>{record.moment}</td>
                            <td>{record.name}</td>
                            <td>{record.age}</td>
                            <td>{record.gamePlatform}</td>
                            <td>{record.genreName}</td>
                            <td>{record.gameTitle}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Records;