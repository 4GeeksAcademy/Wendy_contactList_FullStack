import React, { useState, useEffect,  useContext  } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { AppContext } from "../layout";








export const Modal = props => {
	
	const context = useContext(AppContext);
	const [state, setState] = useState({
		//initialize state here
	});

	function deleteContact(pos){

      
		let newArray= context.listC.filter((element)=> element.id!=pos);
		context.setListC(newArray);	

		fetch('https://playground.4geeks.com/apis/fake/contact/'+pos, {
			method: 'DELETE', // or 'POST'
		})
			.then(res => {
				if (!res.ok) throw Error(res.statusText);
				return res.json();
			})
			.then(response => console.log('Success:', response))
			.catch(error => console.error(error));
			props.onClose();

	}



	return (
		<div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Confirm delete</h5>
						
					</div>
					<div className="modal-body">
						<p>Confirm you want to delete {props.contactM && props.contactM.full_name}  ?</p>
					</div>
					<div className="modal-footer">
					{props.onClose ? (
							<button
								onClick={() => props.onClose()}
								type="button"
								className="close btn btn-primary"
								data-dismiss="modal"
								aria-label="Close">
								Cancel
							</button>
						) : (
							""
						)}






					
						<button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => deleteContact(props.contactM.id)} >
							Yes, Delete.
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
/**
 * Define the data-types for
 * your component's properties
 **/
Modal.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool
};

/**
 * Define the default values for
 * your component's properties
 **/
Modal.defaultProps = {
	show: false,
	onClose: null
};