import React, { Fragment, useEffect, useState} from 'react';
import axios from 'axios';
import AdminHeader from './AdminHeader';

export default function ArticleList() {
    const [data, setData] = useState([]);
    const [role, setRole] = useState('');

    useEffect(() => {
        getData();
        setRole(localStorage.getItem("username"));
    }, []);

    const getData = () =>{
        const data = {
            type : "Page"
        };
        const url = `https://localhost:44306/api/Article/ArticleList`;
        axios
        .post(url, data)
        .then((result) =>{
            const data = result.data;
                setData(data.listArticle);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    const handleApprove = (e,id) => {
        e.preventDefault();
        const data = {
            Id : id
        };
        const url = `https://localhost:44306/api/Article/ArticleApproval`;
        axios
        .post(url,data)
        .then((result) => {
            const dt = result.data;
            if(dt.StatusCode === 200){
            alert('Aprobado exitosamente!')
            getData();
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return(
        <Fragment>
            <AdminHeader/>
            {data ? (
                <table className="table stripped table hover mt-4"
                style={{backgroundColor: "white", width:"80%", margin: "0 auto"}}>
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Titulo</th>
                            <th scope="col">Contenido</th>
                            <th scope="col">Email</th>
                            <th scope="col">Imagen</th>
                            {/* <th scope="col">IsApproved</th> */}
                            <th scope="col">Accion ADMIN</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((val, index)=>{
                                return(
                                    <tr>
                                        <th scope="row">{index+1}</th>
                                        <td>{val.Title}</td>
                                        <td>{val.Content}</td>
                                        <td>{val.Email}</td>
                                        <td>{val.Image}</td>
                                        {/* <td>{val.IsApproved}</td> */}
                                        <td>
                                         {val.IsApproved === 0 ?
                                         <button className="btn btn-primary" onClick={(e) => handleApprove(e, val.Id)}>
                                            Aprobar
                                         </button>
                                         :
                                         "Already Approved"
                                        }
                                        </td> 
                                    </tr>  
                                )
                            })
                        }
                    </tbody>
                </table>
            ) : (
                "No data found"
            )}
        </Fragment>
        
    ); 
}