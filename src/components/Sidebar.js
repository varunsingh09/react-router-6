import React ,{useId}from "react"
import { Link, useLocation } from "react-router-dom"
import { isLogin, logout } from "./../router/utils"
import { navigationItems } from "../config"

const Sidebar = () => {
	const location = useLocation()
	const id = useId();

	return (

		<nav className="d-flex justify-content-center">

			{isLogin() && (
				<>
					{navigationItems.sidebar.map((item) => (
						<div className="p-2" key={id}>
							<Link
								key={item.text}
								to={item.to}
								className={
									location.pathname.includes(item.to) ? "sidebar_active" : ""
								}>
								{item.name}
							</Link>
						</div>
					))}
					{location.pathname !== "/login" && (
						<button onClick={logout}>logout</button>
					)}
				</>
			)}
			{!isLogin() && (
				<Link
					to="/login"
					className={location.pathname === "/login" ? "sidebar_active" : ""}>
					Login
				</Link>
			)}
		</nav>
	)
}
export default Sidebar
