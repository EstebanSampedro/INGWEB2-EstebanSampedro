import React, { Fragment, useEffect, useState } from 'react';
import axios from "axios";
import UserHeader from './UserHeader';


export default function UserArticle() {
    const [data, setData] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [file, setFile] = useState("");
    const [fileName, setFileName] = useState("");

    const SaveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        const data = {
            type: "User",
            Email: localStorage.getItem("loggedEmail"),
        };

        const url = `https://localhost:44306/api/Article/ArticleList`;
        axios
            .post(url, data)
            .then((result) => {
                const data = result.data;
                if (data.statusCode === 200) {
                    setData(data.listArticle);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const uploadFile = async (e) => {
        
        e.preventDefault();
        const data = {
            Title: title,
            Content: content,
            Email: localStorage.getItem("loggedEmail"),
            Image: fileName,
        };
        const formdata = new FormData();
        formdata.append("FormFile", file);
        formdata.append("FileName", fileName);
        try {
            const res = await axios.post(
                `https://localhost:44306/api/Registration/UploadFile`,
                formdata
            );
            console.log(res);
            if (
                res.data.statusCode === 200 &&
                res.data.statusMessage === "File uploaded"
            ) {
                const res = await axios.post(
                    `https://localhost:44306/api/Article/AddArticle`,
                    data
                );
                if (res.data.statusCode === 200) {
                    getData();
                    Clear(e);
                    alert("Detalles del articulo guardados!");
                } else {
                    alert(res.data.statusMessage);
                }
            }
        } catch (ex) {
            console.log(ex);
        }
    };

    const Clear = (e) => {
        e.preventDefault();
        setTitle("");
        setContent("");
        setFile("");
        setFileName("");
    };

    return (
        <Fragment>
            <UserHeader />
            <br></br>
            <form>
                <div class="form-row" style={{ with: "80%", backgroundColor: "white", margin: "auto" }}>
                    <div class="form-group col-md-12">
                        <h3>Añadir Nuevo Articulo</h3>
                    </div>
                    <div className="form-group col-md-12">
                        <input
                            type="text"
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Introducir Titulo"
                            className="form-control"
                            required
                            value={title}
                        />
                    </div>
                    <div className="form-group col-md-12">
                        <input
                            type="file"
                            onChange={(e) => SaveFile(e)}
                            placeholder="Seleccione la Imagen"
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="form-group col-md-12">
                        <textarea
                            className="form-control"
                            id="validationTextarea"
                            placeholder="Introducir contenido"
                            rows={3}
                            onChange={(e) => setContent(e.target.value)}
                            required
                            value={content}
                        ></textarea>
                    </div>
                    <div className="form-group col-md-6">
                        <button
                            className="btn btn-primary"
                            style={{ width: "150px", float: "left" }}
                            onClick={(e) => uploadFile(e)}
                        >
                            Save
                        </button>{" "}
                        <button
                            className="btn btn-danger"
                            style={{ width: "150px" }}
                            onClick={(e) => Clear(e)}
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </form>
            <br></br>
            {data ? (
                <table className="table stripped table-hover mt-4"
                    style={{ backgroundColor: "white", width: "80%", margin: "0 auto" }}>
                    <thead className="thead-dark">
                        <tr>
                            {/* <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Content</th>
                            <th scope="col">Email</th>
                            <th scope="col">Image</th>
                            <th scope="col">IsApproved</th>
                            <th scope="col">Status</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((val, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{val.Title}</td>
                                    <td>{val.Content}</td>
                                    <td>{val.Email}</td>
                                    <td>
                                        <img
                                            src={`assets/images/${val.Image}`}
                                            style={{ width: "70px", borderRadius: "11px" }}
                                        />
                                    </td>
                                    <td>{val.IsApproved}</td>
                                    <td>{val.IsApproved === 0 ? "Not Approved" : "Approved"}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            ) : (
                "No Data Found"
            )}
        </Fragment>
    )


}

