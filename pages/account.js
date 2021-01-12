import React from 'react'
import Head from 'next/head'
import { useContext, useState, useEffect } from 'react'
import Link from 'next/link'
import AuthContext from '../context/AuthContext'
import { API_URL } from '../utils/urls'

const userOrders = (user, getToken) => {
    const [ orders, setOrders ] = useState([])
    const [loading, setLoading ] = useState(false)


    useEffect(() => {
         const fetchOrders = async () => {
             if(user){
                 try {
                     setLoading(true)
                     const token = await getToken()
                     console.log(token)
                     const order_res = await fetch(`${API_URL}/orders`, { 
                         headers: {
                             'Authorization': `Bearer ${token}`
                         }
                     })
                    const data = await order_res.json()
                    setOrders(data)
                 } catch (error) {
                     setOrders([])
                 }
                setLoading(false)
             }
             
         }   
         fetchOrders()
    }, [user])
    return {orders, loading}
}


export const Account = () => {

    const { user, logoutUser,  getToken } = useContext(AuthContext)
    const {orders, loading } = userOrders(user, getToken)

    if(!user){
        return(
            <div>
                <p>Please login or register</p>
                <Link href='/'><a>Go back</a></Link>
            </div>
        )
    }

    return (
        <div className='account dark-gray'>
            <Head>
                <title>Account Page</title>
                <meta name='description' content="View your account information" />
            </Head>

            <div className=''>
                <h1>Account</h1>
                <p>you are logged in as : {user.email}</p>
                <a href='#' onClick={logoutUser}>Logout</a>
            </div>
           
            {loading && <h1>LOADING...</h1>}

            {orders.map(order => (
                    <div className='orders' key={order.id}>
                       {new Date(order.created_at).toLocaleDateString('en-EN')} <div>{order.product.name} </div>
                        <div> ${order.total} </div>
                        <div> {order.status} </div>
                    </div>
                ))
            }

        </div>
    )
}


export default Account;
