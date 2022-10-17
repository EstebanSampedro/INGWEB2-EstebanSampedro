import React, {Fragment, useEffect, useState} from "react";
import AdminHeader from "./AdminHeader"
import axios from 'axios';
import { clear } from "@testing-library/user-event/dist/clear";

export default function News(){
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [data, setData] = useState("");

    useEffect(() =>{
        getData();
    }, []);

    const getData = () =>{
        const url = `https://localhost:44306/api/News/NewsList`;
        axios
        .get(url)
        .then((result) =>{
            const data = result.data;
            if (data.statusCode ===200){
                setData(data.listNews);
            }
        })
        .catch((error) =>{
            console.log(error);
        });
    }

    const handleSave = (e) => {
        e.preventDefault();
        const data = {
            Title : title,
            Content : content,
            Email : localStorage.getItem("loggedEmail")
        }
        const url = `https://localhost:44306/api/News/AddNews`;
     axios
     .post(url, data)
     .then((result) => {
        const dt = result.data;
        if(dt.statusCode === 200){
            getData();
            Clear();
          alert('News Added');
        }
        else
        {
            alert(dt.statusMessage);
        }
     })
     .catch((error) =>{
        console.log(error);
     });
    }

    const Clear = (e) =>{
        e.preventDefault();
        setTitle('');
        setContent('');
    }

    return(
        <Fragment>
            <AdminHeader/>
            <br></br>
            <form>
                <div class="form-row" style={{width: "88%", backgroundColor:"white", margin: "auto"}}>
                <div class="form-group col-md-12">
                    <h3>Añadir noticia</h3>
                </div>
                <div class="form-group col-md-12">
                    <input
                    type= "text"
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Ingrese el titulo"
                    className="form-control"
                    required
                    value={title}
                    />
                </div>
                <div class="form-group col-md-12">
                    <textarea class="form-control" id="validationTextArea"
                    placeholder="Ingrese el contenido"
                    rows={5}
                    onChange={(e) => setContent(e.target.value)} required
                    value={content}></textarea>
                </div>
                <div class="form-group col-md-6">
                    <button className="btn btn-primary" style={{width: "150px", float: "left"}}
                    onClick={(e) => handleSave(e)}
                    >Guardar</button>
                    {" "}
                    <button className="btn btn-danger" style={{width: "150px"}}
                    onClick={(e) =>Clear(e)}
                    >Resetear</button>
                </div>
                </div>
            </form>
            <br></br>
            {data ? (
                <table className="table stripped table-hover mt-4"
                style={{backgroundColor: "white", width: "80%", margin: "0 auto"}}>
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Titulo</th>
                            <th scope="col">Contenido</th>
                            <th scope="col">Creado el</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((val,index) =>{
                                return(
                                    <tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{val.title}</td>
                                    <td>{val.content}</td>
                                    <td>{val.createdOn}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            ):(
                "No data found"
            )}  
        </Fragment>
    );
}