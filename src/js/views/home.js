import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { ContactCard } from "../component/ContactCards";
import PropTypes from "prop-types";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../layout";

export const Home = () => {
	const context = useContext(AppContext);
	
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
                console.log('this is a test', responseAsJson);
               context.setListC(responseAsJson);
            })
            .catch(error => {
                console.log('Looks like there was a problem: \n', error);
            });

    }, []);




	return (
	
	<div className="text-center mt-5">

	{context.listC.map((element,index) =>
				<ContactCard ind={index} contact={element}/>
			)}
		
	</div>
	)
	};
