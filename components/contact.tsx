import React, { useState } from "react";

const Contact = () => {
	//const [searchString, setSearchString] = useState('');

	return (
		<div className="ct-form absolute z-40">
		<h2 className="heading notonscreen">
			Contact Us
		</h2>
		<div className="contact">
			<form className="forms" action="https://formsubmit.co/dev.marvel.avengers@gmail.com" method="post" autoComplete="off">
				<label className="notonscreen delay-100" htmlFor="name" >Your Name</label>
				<input type="text" name="name" className="input rounded-lg notonscreen delay-100" placeholder="Your Name" required />

				<label className="notonscreen delay-300" htmlFor="email">Email</label>
				<input type="email" className="input rounded-lg notonscreen delay-300" name="email" placeholder="Email" required />

				<label className="notonscreen delay-500" htmlFor="message">Message</label>
				<textarea name="message" className="rounded-lg notonscreen delay-500" placeholder="Message" required />
				{/*</textarea required>*/}

				<input className="input rounded-lg notonscreen delay-700 font-bold py-2 px-4 mt-4" type="submit" value="SUBMIT"/>

			</form>
		</div>
	</div>
	)
}

export default Contact;
