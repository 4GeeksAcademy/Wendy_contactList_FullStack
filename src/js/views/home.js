import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Modal } from "../component/Modal";

// import { ContactCard } from "../component/ContactCards";

import { useState, useEffect, useContext } from "react";
import { AppContext } from "../layout";
import { Link, useParams, withRouter } from "react-router-dom";


export const Home = () => {
	const [state, setState] = useState({
		showModal: false, 
        id:0
	});

	const context = useContext(AppContext);
    const [open, setOpen] = React.useState(false);
 
 
	
	useEffect(() => {
        fetch('https://playground.4geeks.com/apis/fake/contact/agenda/Wendy')
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                // Read the response as JSON
                return response.json();
            })
            .then(responseAsJson => {
                // Do stuff with the JSONified response
               
               context.setListC(responseAsJson);
            })
            .catch(error => {
                console.log('Looks like there was a problem: \n', error);
            });

    }, []);


function sort_contact()
{
   
    let test= [...context.listC];
    test.sort((a, b) => a.full_name.localeCompare(b.full_name));
    
    context.setListC(test);

}





	return (
	
	<div className="text-center mt-5">
        <div  className="sort_class"><span onClick={() => sort_contact()}>  <i class="fas fa-sort-alpha-down fa-2xl"></i></span></div>
<ul>
	{context.listC.map((contact) =>
		//		<ContactCard ind={index} contact={element}/>

        <li className="list-group-item" key={contact.id}>
        <div className="row w-100">
            <div className="col-12 col-sm-6 col-md-3 px-0">
                <img src={rigoImage} alt="Mike Anamendolla" className="rounded-circle mx-auto d-block img-fluid" />
            </div>
            <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                <div className=" float-right">
                     <Link to={`/editcontact`} state={contact} >
                    <button className="btn">
                        <i className="fas fa-pencil-alt mr-3" />
                    </button>
                    </Link> 
                     <button className="btn" onClick={() => setState({ showModal: true, contactA:contact })}> 
                     <i className="fas fa-trash-alt fa-bounce fa-xl" />
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

            </ul>
		
            <Modal show={state.showModal} contactM={state.contactA} onClose={() => setState({ showModal: false })} />   
	</div>
	)
	};
