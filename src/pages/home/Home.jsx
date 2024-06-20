import React, { Fragment } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './home.scss'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <Fragment>
        <Header/>
        <main className='container main'>
            <h1>Welcome to my project</h1>
            <NavLink to={'/login'}>Get started</NavLink>
        </main>
        <Footer/>
    </Fragment>
  )
}

export default Home