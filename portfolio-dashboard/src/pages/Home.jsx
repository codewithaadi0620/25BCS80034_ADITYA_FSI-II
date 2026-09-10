import { Link } from 'react-router-dom'

function Home() {
	return (
		<section className="page-section hero-section">
			<p className="eyebrow">Personal Portfolio</p>
			<h1>Welcome to my portfolio dashboard</h1>
			<p className="intro">A simple space to explore my work, profile, and dashboard settings.</p>
			<Link className="button" to="/dashboard">Open dashboard</Link>
		</section>
	)
}

export default Home
