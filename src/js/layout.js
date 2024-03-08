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
import { EditContact } from "./views/EditContact";



export const AppContext = createContext();
//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	
	const [listC, setListC] = useState([]);
	const [tempN, setTempN] = useState('');
	const [tempP, setTempP] = useState('');
	const [tempA, setTempA] = useState('');
	const [tempE, setTempE] = useState('');


	return (
		<div>
			<AppContext.Provider value={{
				listC,
				setListC,
				tempA,
				setTempA,
				tempE,
				setTempE,
				tempN,
				setTempN,
				tempP,
				setTempP
				
			}} >

			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/editcontact" element={<EditContact />} />
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
