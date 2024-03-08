import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { ContactCard } from "../component/ContactCards";
import PropTypes from "prop-types";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../layout";

export const Home = () => {
	const context = useContext(AppContext);
	
	// useEffect(() => {
    //     fetch('https://playground.4geeks.com/apis/fake/todos/user/wendy')
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw Error(response.statusText);
    //             }
    //             // Read the response as JSON
    //             return response.json();
    //         })
    //         .then(responseAsJson => {
    //             // Do stuff with the JSONified response
    //             console.log(responseAsJson);
    //            context.setListC(responseAsJson);
    //         })
    //         .catch(error => {
    //             console.log('Looks like there was a problem: \n', error);
    //         });

    // }, [context.listC]);




	return (
	
	<div className="text-center mt-5">
	{context.listC.map((element) =>
				<ContactCard contact={element}/>
			)}
		
	</div>
	)
	};
