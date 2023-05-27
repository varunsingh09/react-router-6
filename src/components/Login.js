import React from 'react'
import { ACCESS_TOKEN_KEY } from "./../router/utils"



function Login() {

    const login = ()=>{
        localStorage.setItem(ACCESS_TOKEN_KEY,ACCESS_TOKEN_KEY)
        window.location = "/admin/dashboard"
    }
    return (

        <>
        
            <div className='support-top-navbar nav w-100 kenbox-nav'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light w-100">
                    <div className="container-fluid">
                    <button onClick={login}>login</button>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default Login