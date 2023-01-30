import Navbar from "./components/navbar/Navbar";
import Header from "./containers/header/Header";
import WhatGPT from "./containers/whatGPT/WhatGPT";
import "./App.scss";
import Brands from "./components/brands/Brands";
import Features from "./containers/features/Features";
import Possibilities from "./containers/possibilities/Possibilities";
import CTA from "./components/CTA/CTA";

function App() {
	return (
		<div className='App'>
			<div className='bg'>
				<Navbar />
				<Header />
				<Brands />
				<WhatGPT />
				<Features />
				<Possibilities />
				<CTA />
			</div>
		</div>
	);
}

export default App;

