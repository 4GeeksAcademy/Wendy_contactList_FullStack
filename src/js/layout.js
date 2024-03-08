import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { AddContact } from "./views/AddContacts";



export const AppContext = createContext();
//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	
	const [newContact, setNewContact] = useState({
		name:'',
		phone:'',
        address:'',
		email: ''
	});
	const [listC, setListC] = useState([{
		name:'John Mayer', 
		phone:'(786) 298-1467',
		 address:'29 N someStreet st',
		email:'sample@gmail.com'
	
	},
	{
		name:'Taylor Cheif', 
		phone:'(786) 298-4673',
		 address:'28 S someAve ave',
		email:'sample@yahoo.com'
	
	},
	{
		name:'Keanu Reeves', 
		phone:'(754) 356-5827',
		 address:'1100  Miramr Blvd',
		email:'sample@hotmail.com'
	
	}

]);

	return (
		<div>
			<AppContext.Provider value={{
				listC,
				setListC,
				
			}} >

			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/AddContacts" element={<AddContact />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
			</AppContext.Provider>
		</div>
	);
};

export default injectContext(Layout);
