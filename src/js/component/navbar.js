import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../layout";
import { Modal2 } from "../component/Modal2";
import rigoImage from "../../img/rigo-baby.jpg";


export const Navbar = () => {

	const context = useContext(AppContext);
	const [open, setOpen] = React.useState(false);
	const [state, setState] = useState({
		showModal2: false,
		id: 0
	});

	function name_search(val) {
		var test = val.target.value;
		if (test.length > 4) {

			var test2 = context.listC.some(i => i.full_name.includes(test));

			if (test2) {
			//	setState({ showModal2: true});
			console.log('we find it');

			}
			else {
			//	val.target.value = '';
				console.log('we dont');
			}

		}

	}


	return (



		<div>

			<nav class="navbar navbar-light bg-light justify-content-between">
				<Link to="/">
					<span className="navbar-brand mb-0 mx-4 h1">My contact</span>

				</Link>
				<form class="form-inline">

					{/* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => name_search(e)} /> */}


					<Link to="/AddContacts">
						<button className="btn btn-outline-success my-2 my-sm-0">Add new Contact</button>
					</Link>

				</form>
			</nav>

			<Modal2 show={state.showModal2} contactS={state.contact} onClose={() => setState({ showModal2: false })} />

		</div>
	);
};
