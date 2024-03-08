import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { AppContext } from "../layout";
import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const context = useContext(AppContext);

	return (
		<div className="container">
			<ul className="list-group">
				
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
