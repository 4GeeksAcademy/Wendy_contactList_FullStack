import React from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../layout";
import { useNavigate } from "react-router-dom";
export const AddContact = () => {

	const context = useContext(AppContext);

	const [tempN, setTempN] = useState('');
	const [tempP, setTempP] = useState('');
	const [tempA, setTempA] = useState('');
	const [tempE, setTempE] = useState('');

	function temp_name(val){
		
		setTempN(val.target.value);
	}

	function temp_phone(val){
		setTempP(val.target.value);
	}

	function temp_address(val){
		setTempA(val.target.value);
	}

	function temp_email(val){
	setTempE(val.target.value);
	}



function saveContact(){
	let testObj= {
		name: tempN , 
		phone: tempP,
		 address: tempA,
		email: tempE
	}
	// console.log('This is a ', testObj);
	let newArray= [...context.listC];
	newArray.push(testObj);
	context.setListC(newArray);
	setTempA('');
	setTempE('');
	setTempP('');
	setTempN('');

	fetch('https://playground.4geeks.com/apis/fake/contact/agenda/Wendy', {
		method: 'PUT', // or 'POST'
		body: JSON.stringify(newArray), // data can be a 'string' or an {object} which comes from somewhere further above in our application
		headers: {
			'Content-Type': 'application/json'
		}
	})
		.then(res => {
			if (!res.ok) throw Error(res.statusText);
			return res.json();
		})
		.then(response => console.log('Success:', response))
		.catch(error => console.error(error));


}

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input type="text" className="form-control" placeholder="Full Name"  value={tempN} onChange={(e) => temp_name(e)}/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input type="email" className="form-control" placeholder="Enter email"   value={tempE} onChange={(e) => temp_email(e)}/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input type="phone" className="form-control" placeholder="Enter phone"   value={tempP} onChange={(e) => temp_phone(e)}/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input type="text" className="form-control" placeholder="Enter address"  value={tempA} onChange={(e) => temp_address(e)} />
					</div>
					<button type="button" className="btn btn-primary form-control"  onClick={() => saveContact()}>
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};