import Head from 'next/head'
import Image from 'next/image'
import { useContext, useState } from 'react'
import AuthContext from '../context/AuthContext'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


export default function login() {


    const [email, setEmail] = useState('')
    const { loginUser, user } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        loginUser(email)
    }

    return(
        <div className='login dark-gray'>
            <div>
                <Head>
                    <title>Login</title>
                    <meta name='description' content="Login here to make your purchase" />
                </Head>
            </div>

            { user ? (
                    <div className='loginContainer'>
                        <div> {user.email} </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                    <div className='loginContainer'>
    
                        <div className='logoBox'>
                            <Image
                            src="/Adamedia-Design-Logo.png"
                            alt="Picture of the author"
                            width={70}
                            height={70}
                            priority={true}
                            />
                        </div>
    
                        <div> 
                        <div className='input'>
                                <div>
                                    <input 
                                    type='email' 
                                    variant="filled"
                                    placeholder='Email Address'
                                    value={email} 
                                    fullWidth
                                    onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className='loginButton'>
                                    <Button type='submit' variant="outlined" size="medium" fullWidth>Login</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
           
                )
            }
           
       </div>
    )
}