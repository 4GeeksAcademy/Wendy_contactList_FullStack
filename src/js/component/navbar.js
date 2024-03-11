import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		// <nav className="navbar navbar-light bg-light mb-3">
		// 	<Link to="/">
		// 	
		// 	</Link>
		// 	<div className="ml-auto">
		// 		<Link to="/AddContacts">
		// 			<button className="btn btn-primary">Add new Contact</button>
		// 		</Link>
		// 	</div>
		// </nav>



<nav class="navbar navbar-light bg-light justify-content-between">
<Link to="/">
<span className="navbar-brand mb-0 mx-4 h1">My contact</span>
  
  </Link>
  <form class="form-inline">
    {/* <input class="form-control " type="search contact" placeholder="Search" aria-label="Search" /> */}
	<Link to="/AddContacts">
					<button className="btn btn-outline-success my-2 my-sm-0">Add new Contact</button>
				</Link>

  </form>
</nav>
	);
};
