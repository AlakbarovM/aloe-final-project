import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Header from '../components/Header/Header'
import Healthy from '../components/Healthy/Healthy'
import styles from '../components/Header/Header.module.scss'
import PrivilegeHeader from '../components/PrivilegeCard/PrivilegeHeader'
import AloeAccount from '../components/AloeAccount/AloeAccount'
import AloeRegister from '../components/AloeRegister/AloeRegister'
import RegisterForm from '../Login/RegisterForm/RegisterForm'
import Register from '../Login/RegisterForm/RegisterForm'
import Profile from '../Login/Profile/Profile'
import Login from '../Login/Login'
import Dashboard from '../pages/dashboard/Dashboard'
const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/PrivilegeHeader' element={<PrivilegeHeader/>} />
            <Route path='/account' element={<Login/>}/>
            <Route path='/register' element={<RegisterForm/>} />
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/profile' element={<Profile/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router