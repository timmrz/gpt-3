import Navbar from "./components/navbar/Navbar";
import Header from "./containers/header/Header";
import WhatGPT from "./containers/whatGPT/WhatGPT";
import "./App.scss";
import Brands from "./components/brands/Brands";
import Features from "./containers/features/Features";
import Possibilities from "./containers/possibilities/Possibilities";
import CTA from "./components/CTA/CTA";
import Blog from "./containers/blog/Blog";
import Footer from './containers/footer/Footer';

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
				<Blog />
				<Footer />
			</div>
		</div>
	);
}

export default App;

