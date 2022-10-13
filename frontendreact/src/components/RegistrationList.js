import React, {Fragment, useEffect, useState} from 'react';
import axios from 'axios';
import AdminHeader from './AdminHeader';

export default function RegistrationList(){
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = () =>{
        const url = `https://localhost:44306/api/Registration/RegistrationList`;
        const data = {
            UserType : 'USER'
        }
        axios
        .post(url,data)
        .then((result) => {
            const data = result.data;
            if(data.statusCode === 200){
                setData(data.listRegistration);
            }
        })
        .catch((error) =>{
            console.log(error);
        });
    }

    const handleApprove = (e,id) => {
        e.preventDefault();
        const data = {
            Id : id
        };
        const url = `https://localhost:44306/api/Registration/UserApproval`;
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
}