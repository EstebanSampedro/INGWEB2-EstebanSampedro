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
            if(dt.statusCode === 200){
            alert('Approved')
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
                            <th scope="col">Title</th>
                            <th scope="col">Content</th>
                            <th scope="col">Email</th>
                            <th scope="col">Image</th>
                            <th scope="col">IsApproved</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((val, index)=>{
                                return(
                                    <tr>
                                        <th scope="row">{index+1}</th>
                                        <td>{val.title}</td>
                                        <td>{val.content}</td>
                                        <td>{val.email}</td>
                                        <td>{val.image}</td>
                                        <td>{val.isApproved}</td>
                                        <td>
                                         {val.isApproved === 0 ?
                                         <button className="btn btn-primary" onClick={(e) => handleApprove(e, val.id)}>
                                            Mark Approved
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