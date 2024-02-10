import React, { useState } from "react";
import '../App.css';

function SignUp() {
    return (
		<div>
			<label htmlFor="fullName">Name: </label>
			<input type="text" id="fullName" placeholder="Enter your Name" /><br />
			<label htmlFor="username">Username: </label>
			<input type="text" placeholder="Enter username" />
			<label htmlFor="password">Password: </label>
			<input type="password" placeholder="Create a Password" />
		</div>
	)
}