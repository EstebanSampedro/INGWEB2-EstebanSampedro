import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Login';
import Registration from './Registration';
import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';
import RegistrationList from './RegistrationList'
import ArticleList from './ArticleList';

export default function RouterPage()
{
    return(
        <Router>
            <Routes>
                <Route path='/' exact element={<Login/>} />
                <Route path='/registration' element={<Registration/>} />
                <Route path='/userdashboard' element={<UserDashboard/>} />
                <Route path='/admindashboard' element={<AdminDashboard/>} />
                <Route path='/registrationlist' element={<RegistrationList/>} />
                <Route path='/articlelist' element={<ArticleList/>} />

            </Routes>
        </Router>
    )

}