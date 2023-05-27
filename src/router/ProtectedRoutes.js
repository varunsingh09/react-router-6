import React from "react"
import { isLogin } from "./../router/utils"

import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoutes = (props) => {

	//if the role required is there or not
	if (isLogin()) {
		return <Outlet />
	} else {
		return <Navigate to="/login" />
	}
}

export default ProtectedRoutes
