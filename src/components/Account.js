import React, { useState, useEffect } from 'react'
import api from '../utils/api'

export default function Account(props) {
    const[user, setUser] = useState({
        name:'',
        password:''
    })
    useEffect(() => {
        api()
        .get('/me')
        .then(res => {
            setUser({
                name: res.data.name,
                email: res.data.email})
            })
        .catch(error => {
            console.log(error)
        })
    }, [])
    return (
        <>
            <h1>My Account</h1>
            <div className='account-row'> Name: {user.name}</div>
            <div className='account-row'> Email:{user.email}</div>

        </>
    )
}
