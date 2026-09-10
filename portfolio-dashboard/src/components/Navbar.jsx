import { NavLink } from 'react-router-dom'

function Navbar() {
	return (
		<nav className="navbar" aria-label="Main navigation">
			<NavLink className="brand" to="/">Portfolio Dashboard</NavLink>
			<div className="nav-links">
				<NavLink to="/">Home</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/contact">Contact</NavLink>
				<NavLink to="/dashboard">Dashboard</NavLink>
			</div>
		</nav>
	)
}

export default Navbar
