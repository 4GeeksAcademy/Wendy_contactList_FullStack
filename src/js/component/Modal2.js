import React, { useState, useEffect,  useContext  } from "react";

import PropTypes from "prop-types";
import { AppContext } from "../layout";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link, useParams, withRouter } from "react-router-dom";


export const Modal2 = props => {
	
	const context = useContext(AppContext);
	const [state, setState] = useState({
		//initialize state here
	});





	return (
		<div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">This is what we found for your search</h5>
						
					</div>
					<div className="modal-body">
				

                    {context.listC.map((contact)  => 

        <li className="list-group-item" key={contact.id}>
        <div className="row w-100">
            <div className="col-12 col-sm-6 col-md-3 px-0">
                <img src={rigoImage} alt="Mike Anamendolla" className="rounded-circle mx-auto d-block img-fluid" />
            </div>
            <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                <div className=" float-right">
                     <Link to={`/editcontact`} >
                    <button className="btn">
                        <i className="fas fa-pencil-alt mr-3" />
                    </button>
                    </Link> 
                     <button className="btn" > 
                     <i className="fas fa-trash-alt" />
                   </button> 

                </div>
                <label className="name lead">{contact.full_name}</label>
                <br />
                <i className="fas fa-map-marker-alt text-muted mr-3" />
                <span className="text-muted">{contact.address}</span>
                <br />
                <span
                    className="fa fa-phone fa-fw text-muted mr-3"
                    data-toggle="tooltip"
                    title=""
                    data-original-title="(870) 288-4149"
                />
                <span className="text-muted small">{contact.phone}</span>
                <br />
                <span
                    className="fa fa-envelope fa-fw text-muted mr-3"
                    data-toggle="tooltip"
                    data-original-title=""
                    title=""
                />
                <span className="text-muted small text-truncate">{contact.email}</span>
            </div>
        </div>
    </li>
			)}




					</div>
					<div className="modal-footer">
					{props.onClose ? (
							<button
								onClick={() => props.onClose()}
								type="button"
								className="close btn btn-primary"
								data-dismiss="modal"
								aria-label="Close">
								Close
							</button>
						) : (
							""
						)}






					
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
Modal2.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool
};

/**
 * Define the default values for
 * your component's properties
 **/
Modal2.defaultProps = {
	show: false,
	onClose: null
};