import React, {Fragment, useEffect, useState} from 'react';
import AdminHeader from './AdminHeader';
import axios from 'axios';
import { getDefaultNormalizer } from '@testing-library/react';

export default function Staff() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        const url = `https://localhost:44306/api/Registration/RegistrationList`;
        const data = {
            UserType : 'STAFF'
        }
        axios
        .post(url, data)
        .then((result) =>{
            const data = result.data;
            if(data.statusCode === 200){
                setData(data.listRegistration);
            }
        })
        .catch((error) =>{
            console.log(error);
        });
    };

    const handleSave = (e) =>{
        e.preventDefault();
        const data = {
            Name: name,
            Email : email,
            password : password
        };

        const url = `https://localhost:44306/api/Registration/StaffRegistration`;
        axios
        .post(url, data)
        .then((result) => {
            const dt = result.data;
            if(dt.statusCode === 200) {
                getData();
                Clear();
                alert("Staff Added");
            } else {
                alert(dt.statusMessage);
            }
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const Clear = (e) => {
        e.preventDefault();
        setName("");
        setEmail("");
        setPassword("");
    };

    return(
        <Fragment>
            <AdminHeader/>
                <br></br>
                <form>
                    <div class="form-row" style={{width: "80%", backgroundColor: "white", margin: "auto"}}>
                        <div class="form-group col-md-12">
                            <h3>Add New Staff</h3>
                        </div>
                        <div class="form-group col-md-6">
                            <input
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Introducir Nombre"
                            className="form-control"
                            required
                            value={name}
                            />
                        </div>
                        <div class="form-group col-md-6">
                            <input
                            type="text"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Introducir Mail"
                            className="form-control"
                            required
                            value={email}
                            />
                        </div>

                        <div classname="form-group col-md-6">
                            <button
                            className="btn btn-primary"
                            style={{width: "150px", float: "left"}}
                            onClick={(e) => Clear(e)}
                            >
                                Resetear
                            </button>
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
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((val, index) => {
                                return(
                                    <tr>
                                        <th scope="row">{index+1}</th>
                                        <td>{val.Name}</td>
                                        <td>{val.Email}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                ) : (
                    "No data found"
                )}
        </Fragment>
    );
}