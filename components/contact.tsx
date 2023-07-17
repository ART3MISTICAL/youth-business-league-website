import React, { useState } from "react";

const Contact = () => {
	//const [searchString, setSearchString] = useState('');

	return (
		<div className="ct-form absolute z-40">
		<h2 className="heading">
	Contact Us
</h2>
		<div className="contact">
<form className="forms" action="https://formsubmit.co/dev.marvel.avengers@gmail.com" method="post" autoComplete="off">
		
	<label htmlFor="name" >Your Name</label>
	<input type="text" name="name" className="input rounded-lg" placeholder="Your Name" required />

	<label htmlFor="email">Email</label>
	<input type="email" className="input rounded-lg" name="email" placeholder="Email" required />

	<label htmlFor="message">Message</label>
	<textarea name="message" className="rounded-lg" placeholder="Message" required />
	{/*</textarea required>*/}

	<input className="input rounded-lg" type="submit" value="Submit"/>

</form>
</div>
</div>
	)
}

export default Contact;