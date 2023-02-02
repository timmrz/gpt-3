import React, { useState } from "react";
import styles from "./navbar.module.scss";
import logo from "../../assets/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";

const Menu = () => {
	return (
		<ul>
			<li>
				<a href=''>Home</a>
			</li>
			<li>
				<a href=''>What is GPT?</a>
			</li>
			<li>
				<a href=''>Open AI</a>
			</li>
			<li>
				<a href=''>Case Studies</a>
			</li>
			<li>
				<a href=''>Library</a>
			</li>
		</ul>
	);
};

const Navbar = () => {
	const [burgerOpened, setBurgerOpened] = useState(false);

	return (
		<div className='container'>
			<div className={styles.navbar}>
				<div className={styles.logoContainer}>
					<img src={logo} alt='logo' className={styles.logo} />
				</div>
				<nav className={styles.nav}>
					<Menu />
				</nav>
				<div className={styles.buttons}>
					<p>Sign in</p>
					<button>Sign up</button>
				</div>
				<div className={styles.burger}>
					<GiHamburgerMenu />
					{burgerOpened && <Menu />}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
