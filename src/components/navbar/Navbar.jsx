import React, { useState } from "react";
import styles from "./navbar.module.scss";
import logo from "../../assets/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
	const [burgerOpened, setBurgerOpened] = useState(false);

	return (
		<div className='container'>
			<div className={styles.navbar}>
				<div className={styles.logoContainer}>
					<img src={logo} alt='logo' className={styles.logo} />
				</div>
				<nav className={styles.nav}>
					<ul>
						<li>
							<a href='#home'>Home</a>
						</li>
						<li>
							<a href='#whatGPT'>What is GPT?</a>
						</li>
						<li>
							<a href='#openAI'>Open AI</a>
						</li>
						<li>
							<a href='#case'>Case Studies</a>
						</li>
						<li>
							<a href='#library'>Library</a>
						</li>
					</ul>
				</nav>
				<div className={styles.buttons}>
					<p>Sign in</p>
					<button>Sign up</button>
				</div>
				<div style={{ position: `${burgerOpened ? "fixed" : "static"}` }} className={styles.burger} onClick={() => setBurgerOpened(!burgerOpened)}>
					{burgerOpened ? <GrClose /> : <GiHamburgerMenu />}
				</div>
				{burgerOpened && (
					<div className={styles.openBurger}>
						<ul>
							<li>
								<a onClick={() => setBurgerOpened(false)} href='#home'>
									Home
								</a>
							</li>
							<li>
								<a onClick={() => setBurgerOpened(false)} href='#whatGPT'>
									What is GPT?
								</a>
							</li>
							<li>
								<a onClick={() => setBurgerOpened(false)} href='#openAI'>
									Open AI
								</a>
							</li>
							<li>
								<a onClick={() => setBurgerOpened(false)} href='#case'>
									Case Studies
								</a>
							</li>
							<li>
								<a onClick={() => setBurgerOpened(false)} href='#library'>
									Library
								</a>
							</li>
							<div className={styles.buttons}>
								<p>Sign in</p>
								<button>Sign up</button>
							</div>
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
