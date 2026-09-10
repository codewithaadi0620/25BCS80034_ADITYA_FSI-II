import { useNavigate } from 'react-router-dom'

function Contact() {
	const navigate = useNavigate()

	function handleSubmit(event) {
		event.preventDefault()
		navigate('/')
	}

	return (
		<section className="page-section form-section">
			<p className="eyebrow">Contact</p>
			<h1>Let&apos;s connect</h1>
			<form className="contact-form" onSubmit={handleSubmit}>
				<label htmlFor="name">Name</label>
				<input id="name" name="name" type="text" required />
				<label htmlFor="email">Email</label>
				<input id="email" name="email" type="email" required />
				<label htmlFor="message">Message</label>
				<textarea id="message" name="message" rows="5" required />
				<button className="button" type="submit">Send message</button>
			</form>
		</section>
	)
}

export default Contact
