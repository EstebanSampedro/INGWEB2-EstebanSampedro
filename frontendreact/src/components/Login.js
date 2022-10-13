import React, { useState } from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";



function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      Email: email,
      Password: password
    }

    const url = `https://localhost:44306/api/Registration/Login`;
    axios.post(url, data)
      .then((result) => {
        const dt = result.data;
        
          if(email === "admin" && password === "admin") {
            localStorage.setItem("username", email);
            navigate("/admindashboard");
          } else {
            localStorage.setItem("loggedEmail", email);
            localStorage.setItem("username", dt.registration.name);
            if(dt.registration.userType === 'STAFF')
            navigate("/staffdashboard");
            else
            navigate("/userdashboard");
          }
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <div>
      <section class="vh-100">
        <div class="container py-5 h-100">
          <div class="row d-flex align-items-center justify-content-center h-100">
            <div class="col-md-8 col-lg-7 col-xl-6">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                class="img-fluid" alt="Phone" />
            </div>
            <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form>

                <div class="form-outline mb-4">
                  <input
                    type="email"
                    id="form1Example13"
                    class="form-control form-control-lg"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                  <label class="form-label" for="form1Example13">Email address</label>
                </div>


                <div class="form-outline mb-4">
                  <input
                    type="password"
                    id="form1Example23"
                    class="form-control form-control-lg"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                  <label class="form-label" for="form1Example23">Password</label>
                </div>

                <div class="d-flex justify-content-around align-items-center mb-4">

                  <a href="#!">Forgot password?</a>
                </div>


                <button type="submit" class="btn btn-primary btn-lg btn-block" onClick={(e) => handleLogin(e)}>
                  Sign in
                </button>

                

              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login;