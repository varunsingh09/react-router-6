import React from "react"
import { Routes, Route } from "react-router-dom"
import InnerContent from "./../components/InnerContent"
import Dashboard from "./../components/Dashboard"
import Home from "./../components/Home"
import Login from "./../components/Login"
import Products from './../components/Products'

import ProtectedRoutes from "./../router/ProtectedRoutes"
import PublicRoutes from "./../router/PublicRoutes"
import PermissionDenied from "./../components/PermissionDenied"


const MainRoutes = () => (
	<Routes>
		{/** Protected Routes */}
		{/** Wrap all Route under ProtectedRoutes element */}

		<Route path="/" element={<ProtectedRoutes />}>
			<Route path="/" element={<InnerContent />}>
				<Route path="/admin/dashboard" element={<Dashboard />} />
			</Route>
			<Route path="/admin/product" element={<InnerContent />}>
				<Route path="/admin/product" element={<Products />} />
			</Route>
		</Route>

		{/** Public Routes */}

		{/** Wrap all Route under PublicRoutes element */}

		<Route path="login" element={<PublicRoutes />}>
			<Route path="/login" element={<Login />} />
		</Route>


		<Route path="home" element={<PublicRoutes />}>
			<Route path="/home" element={<Home />} />
		</Route>


		{/** Permission denied route */}
		<Route path="/access-denied" element={<PermissionDenied />} />
	</Routes>

)

export default MainRoutes
